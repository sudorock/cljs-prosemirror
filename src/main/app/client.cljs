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

(def radio-buttons-dom (.querySelectorAll js/document "input[type=radio]"))
(def editor-dom (.getElementById js/document "editor"))
(def content-dom (.getElementById js/document "content"))

(def editor-state
  (atom {:view nil}))

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

(defmulti make (fn [View _ _] View))

(defmethod make MarkdownView [_ target content]
  (let [textarea-dom (create-text-area target)]
    (set! (.-value textarea-dom) content)
    (->MarkdownView textarea-dom)))

(defmethod make RichtextView [_ target content]
  (->RichtextView (EditorView.
                    target
                    (clj->js {:state (.create EditorState (clj->js {:doc     (parse-markdown content)
                                                                    :plugins (exampleSetup markdown-schema)}))}))))

(defn add-event-listener [buttons callback]
  (map #(.addEventListener % "change" callback) buttons))

(defn init []
  (let [content-dom-value (.-value content-dom)
        markdown-view (make MarkdownView editor-dom content-dom-value)]
    (reset! editor-state {:view markdown-view})
    (add-event-listener radio-buttons-dom (fn []
                                            (this-as button
                                              (let [current-view (:view @editor-state)
                                                    View (if (= "markdown" (.-value button))
                                                           MarkdownView
                                                           RichtextView)
                                                    button-checked? (.-checked button)]
                                                (when button-checked?
                                                  (when-not (instance? View current-view)
                                                    (let [content (content current-view)
                                                          _ (destroy current-view)
                                                          new-view (make View editor-dom content)]
                                                      (reset! editor-state {:view new-view})
                                                      (focus new-view))))))))))