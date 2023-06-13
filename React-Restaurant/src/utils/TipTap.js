// 导入对于的库及扩展
import { Editor } from '@tiptap/core'
import Document from '@tiptap/extension-document'
import Paragraph from '@tiptap/extension-paragraph'
import Text from '@tiptap/extension-text'
// new 一个编辑器对象
new Editor({ 
   //使用扩展
  extensions: [
    Document,
    Paragraph,
    Text,
  ],
  content: '<p>编辑器内容</p>',
  // 编辑器自动获取焦点
  autofocus: true,
  // 编辑器是否可用
  editable: true,
  injectCSS: false,
})