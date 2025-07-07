import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism'
import { useEffect, useRef, useState } from 'react'
import { Copy } from '@phosphor-icons/react'

interface Message {
  role: string
  content: string
}

export default function ChatBox({ messages, loading }: { messages: Message[]; loading: boolean }) {
  const bottomRef = useRef<HTMLDivElement>(null)
  const [copiedIdx, setCopiedIdx] = useState<number | null>(null)

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, loading])

  function renderMessage(msg: Message & { timestamp?: string }, i: number) {
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
        <div key={key++} className="relative group">
          <SyntaxHighlighter language={lang} style={oneDark} customStyle={{ borderRadius: 8, fontSize: 13, boxShadow: '0 2px 8px #0001', margin: '8px 0', transition: 'all 0.3s' }}>
            {code}
          </SyntaxHighlighter>
          <button
            type="button"
            className="absolute top-2 right-2 opacity-70 hover:opacity-100 bg-white/80 rounded p-1 shadow transition-all duration-200 group-hover:scale-110"
            onClick={() => {
              navigator.clipboard.writeText(code)
              setCopiedIdx(key)
              setTimeout(() => setCopiedIdx(null), 1200)
            }}
            title="Copy code"
          >
            <Copy size={18} className="text-blue-500" />
          </button>
          {copiedIdx === key && (
            <span className="absolute top-2 right-10 text-xs text-green-600 bg-white/90 px-2 py-0.5 rounded shadow">Copied!</span>
          )}
        </div>
      )
      lastIndex = match.index + match[0].length
    }
    if (lastIndex < msg.content.length) {
      parts.push(<span key={key++}>{msg.content.slice(lastIndex)}</span>)
    }
    const isUser = msg.role === 'user'
    const time = msg.timestamp || new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    return (
      <div key={i} className={`mb-3 sm:mb-4 flex ${isUser ? 'justify-end' : 'justify-start'} transition-all duration-500 animate-fade-in`}>
        {!isUser && (
          <div className="flex-shrink-0 w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-gradient-to-br from-blue-200 via-purple-200 to-pink-200 flex items-center justify-center mr-2 text-blue-700 font-bold text-base sm:text-lg shadow-md transition-all duration-500">🤖</div>
        )}
        <div className={`inline-block px-2 py-1 sm:px-4 sm:py-2 rounded-xl shadow-lg max-w-[90vw] sm:max-w-[80%] transition-all duration-500 ${isUser ? 'bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 text-blue-900' : 'bg-white/90 text-gray-800'}`}>
          {parts}
          <div className="text-xs text-gray-400 text-right mt-1 select-none">{time}</div>
        </div>
        {isUser && (
          <div className="flex-shrink-0 w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-gradient-to-br from-gray-300 via-gray-200 to-gray-100 flex items-center justify-center ml-2 text-gray-700 font-bold text-base sm:text-lg shadow-md transition-all duration-500">🧑</div>
        )}
      </div>
    )
  }

  return (
    <div className="mt-4 p-4 border border-gray-200 rounded-2xl bg-white/70 min-h-[180px] max-h-96 overflow-y-auto shadow-inner transition-all duration-700 scrollbar-hide">
      {messages.map(renderMessage)}
      {loading && (
        <div className="text-center text-blue-500 animate-pulse mt-2">Thinking...</div>
      )}
      <div ref={bottomRef} />
    </div>
  )
}