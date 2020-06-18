(ns app.client
  (:require ["prosemirror-state" :refer [EditorState]]
            ["prosemirror-view" :refer [EditorView]]
            ["prosemirror-model" :refer [Schema DOMParser]]
            ["prosemirror-schema-list" :refer [addListNodes]]
            ["prosemirror-example-setup" :refer [exampleSetup]]
            ["prosemirror-markdown" :refer [schema defaultMarkdownParser defaultMarkdownSerializer]]
            [clojure.pprint :refer [pprint]]))

(def radio-buttons-dom (.querySelectorAll js/document "input[type=radio]"))
(def editor-dom (.getElementById js/document "editor"))
(def content-dom (.getElementById js/document "content"))

(defn dir [x]
  (js/console.dir x))

(def markdown-schema (clj->js {:schema schema}))

(def editor-state
  (atom {:markdown     nil
         :richtext     nil
         :current-view nil}))

(defn parse-markdown [content]
  (.parse defaultMarkdownParser content))

(defn new-editor-view [target content]
  (EditorView.
    target
    (clj->js {:state (.create EditorState (clj->js {:doc     content
                                                    :plugins (exampleSetup markdown-schema)}))})))

(defn serialize-markdown [content]
  (.serialize defaultMarkdownSerializer content))

(defn create-text-area [target]
  (.appendChild target (.createElement js/document "textarea")))

(defn create-markdown-view [target content]
  (let [textarea-dom (create-text-area target)]
    (set! (.-value textarea-dom) content)
    (swap! editor-state assoc-in [:markdown :view] textarea-dom)))

(defn create-richtext-view [target content]
  (->> (new-editor-view target content)
       (swap! editor-state assoc-in [:richtext :view])))

(defn add-event-listener [buttons callback]
  (map #(.addEventListener % "change" callback) buttons))

(defn change-view-callback [])

(defn replace-with-markdown []
  (pprint @editor-state)
  (.destroy (-> @editor-state :richtext :view))
  (create-markdown-view editor-dom (-> (.. (-> @editor-state :richtext :view) -state -doc)
                                       serialize-markdown))
  (.focus (-> @editor-state :markdown :view))
  (swap! editor-state assoc :current-view :markdown))

(defn replace-with-richtext []
  (pprint @editor-state)
  (.remove (-> @editor-state :markdown :view))
  (create-richtext-view editor-dom (-> (.. (-> @editor-state :markdown :view) -value)
                                       parse-markdown))
  (.focus (-> @editor-state :richtext :view))
  (swap! editor-state assoc :current-view :richtext))

(defn init []
  (let [content-dom-value (.-value content-dom)]
    (create-markdown-view editor-dom content-dom-value)
    (pprint @editor-state)
    (add-event-listener radio-buttons-dom (fn []
                                            (this-as button
                                              (let [current-view (:current-view @editor-state)
                                                    button-state (if (= "markdown" (.-value button))
                                                                   :markdown
                                                                   :richtext)
                                                    button-checked? (.-checked button)]
                                                (when button-checked?
                                                  (when-not (= button-state current-view)
                                                    (prn button-state)
                                                    (if (= button-state :markdown)
                                                      (replace-with-markdown)
                                                      (replace-with-richtext))))))))))