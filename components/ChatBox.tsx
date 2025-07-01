import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism'

const messages = [
  {
    role: 'user',
    content: 'Why is this React state not updating?\n\n```jsx\nconst [count, setCount] = useState(0);\nsetCount(count + 1);\nsetCount(count + 1);\n```'
  },
  {
    role: 'ai',
    content: 'The state update is asynchronous and batched. Each call to setCount uses the same value of count. Try using the updater function instead.\n\n```jsx\nsetCount(c => c + 1);\nsetCount(c => c + 1);\n```'
  }
]

function renderMessage(msg: { role: string; content: string }, i: number) {
  // Regex to find code blocks
  const codeBlockRegex = /```(\w+)?\n([\s\S]*?)```/g
  const parts = []
  let lastIndex = 0
  let match
  let key = 0
  while ((match = codeBlockRegex.exec(msg.content)) !== null) {
    if (match.index > lastIndex) {
      parts.push(<span key={key++}>{msg.content.slice(lastIndex, match.index)}</span>)
    }
    const lang = match[1] || 'javascript'
    const code = match[2]
    parts.push(
      <SyntaxHighlighter key={key++} language={lang} style={oneDark} customStyle={{ borderRadius: 6, fontSize: 13 }}>
        {code}
      </SyntaxHighlighter>
    )
    lastIndex = match.index + match[0].length
  }
  if (lastIndex < msg.content.length) {
    parts.push(<span key={key++}>{msg.content.slice(lastIndex)}</span>)
  }
  return (
    <div key={i} className={`mb-4 ${msg.role === 'user' ? 'text-right' : 'text-left'}`}>
      <div className={`inline-block px-3 py-2 rounded-lg ${msg.role === 'user' ? 'bg-blue-100 text-blue-900' : 'bg-gray-200 text-gray-800'}`}>
        {parts}
      </div>
    </div>
  )
}

export default function ChatBox() {
  return (
    <div className="mt-4 p-4 border border-gray-200 rounded bg-gray-50">
      {messages.map(renderMessage)}
    </div>
  )
}