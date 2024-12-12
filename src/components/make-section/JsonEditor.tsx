import { Editor, EditorProps } from '@monaco-editor/react'

interface Props extends EditorProps {}

function JsonEditor(props: Props) {
  const { defaultLanguage = 'json', height = '90vh', options, ...rest } = props

  return (
    <Editor
      {...rest}
      height={height}
      defaultLanguage={defaultLanguage}
      options={{ fontSize: 16, formatOnPaste: true, ...options }}
    />
  )
}

export default JsonEditor
