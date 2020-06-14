(ns app.client
  (:require ["prosemirror-state" :refer [EditorState]]
            ["prosemirror-view" :refer [EditorView]]
            ["prosemirror-model" :refer [Schema DOMParser]]
            ["prosemirror-schema-basic" :refer [schema]]
            ["prosemirror-schema-list" :refer [addListNodes]]
            ["prosemirror-example-setup" :refer [exampleSetup]]
            [clojure.pprint :refer [pprint]]))

(defn init []
  (let [editor-node (. js/document getElementById "editor")
        content-node (. js/document querySelector "#content")
        my-schema (new Schema (clj->js {:nodes (addListNodes (.. schema -spec -nodes) "paragraph block*" "block")
                                        :marks (.. schema -spec -marks)}))
        editor-view (new EditorView editor-node (clj->js {:state (. EditorState (create (clj->js {:doc (.. DOMParser (fromSchema my-schema)
                                                                                                           (parse content-node))
                                                                                                  :plugins (exampleSetup (clj->js {:schema my-schema}))})))}))]
    (set! (.-view js/window) editor-view)
    (js/console.dir (.-view js/window) editor-view)))
