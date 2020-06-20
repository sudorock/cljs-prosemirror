(ns app.client
  (:require ["prosemirror-state" :refer [EditorState]]
            ["prosemirror-view" :refer [EditorView]]
            ["prosemirror-model" :refer [Schema DOMParser]]
            ["prosemirror-schema-list" :refer [addListNodes]]
            ["prosemirror-example-setup" :refer [exampleSetup]]
            ["prosemirror-markdown" :refer [schema defaultMarkdownParser defaultMarkdownSerializer]]
            [clojure.pprint :refer [pprint]]))

;; TODO caching transformations
;; TODO try to make pure functions

(defn dir [x]
  (js/console.dir x))

(defn parse-markdown [content]
  (.parse defaultMarkdownParser content))

(defn serialize-markdown [content]
  (.serialize defaultMarkdownSerializer content))

(defn create-text-area [target]
  (.appendChild target (.createElement js/document "textarea")))

(def markdown-schema (clj->js {:schema schema}))

(defprotocol View
  (content [v])
  (focus [v])
  (destroy [v]))

(defrecord MarkdownView [target]
  View
  (content [_]
    (.-value target))
  (focus [_]
    (.focus target))
  (destroy [_]
    (.remove target)))

(defrecord RichtextView [target]
  View
  (content [_]
    (-> (.. target -state -doc)
        serialize-markdown))
  (focus [_]
    (.focus target))
  (destroy [_]
    (.destroy target)))

(defmulti create (fn [View _ _] View))

(defmethod create MarkdownView [_ target content]
  (let [textarea-dom (create-text-area target)]
    (set! (.-value textarea-dom) content)
    (->MarkdownView textarea-dom)))

(defmethod create RichtextView [_ target content]
  (->RichtextView (EditorView.
                    target
                    (clj->js {:state (.create EditorState (clj->js {:doc     (parse-markdown content)
                                                                    :plugins (exampleSetup markdown-schema)}))}))))

(defn add-event-listener [buttons callback]
  (map #(.addEventListener % "change" callback) buttons))

(defn init []
  (let [radio-buttons-dom (.querySelectorAll js/document "input[type=radio]")
        editor-dom (.getElementById js/document "editor")
        content-dom (.getElementById js/document "content")
        content-dom-value (.-value content-dom)
        markdown-view (create MarkdownView editor-dom content-dom-value)
        current-view (atom nil)]
    (reset! current-view markdown-view)
    (add-event-listener radio-buttons-dom (fn []
                                            (this-as button
                                              (let [View (if (= "markdown" (.-value button))
                                                           MarkdownView
                                                           RichtextView)
                                                    button-checked? (.-checked button)]
                                                (when button-checked?
                                                  (when-not (instance? View @current-view)
                                                    (let [content (content @current-view)
                                                          _ (destroy @current-view)
                                                          new-view (create View editor-dom content)]
                                                      (reset! current-view {:view new-view})
                                                      (focus new-view))))))))))