'use client'
import { useState } from 'react'
import CodeInput from '@/components/CodeInput'
import ChatBox from '@/components/ChatBox'
import { BracketsCurly, Moon, Sun } from '@phosphor-icons/react'

export default function Home() {
  const [messages, setMessages] = useState([
    { role: 'ai', content: 'Hi! Paste your code or question and I will help you.' }
  ])
  const [loading, setLoading] = useState(false)
  const [dark, setDark] = useState(false)

  async function handleSend({ code, question }: { code: string; question: string }) {
    const timestamp = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    setMessages((msgs) => [
      ...msgs,
      { role: 'user', content: (question ? question + '\n\n' : '') + (code ? '```\n' + code + '\n```' : ''), timestamp }
    ])
    setLoading(true)
    try {
      const res = await fetch('/api/ask', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ code, question })
      })
      const data = await res.json()
      setMessages((msgs) => [
        ...msgs,
        { role: 'ai', content: data.message || 'No response from AI.', timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) }
      ])
    } catch {
      setMessages((msgs) => [
        ...msgs,
        { role: 'ai', content: 'Sorry, something went wrong.', timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) }
      ])
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <main className={`${dark ? 'dark' : ''} w-full  mx-auto p-2 sm:p-4 min-h-screen flex flex-col justify-center items-center transition-all duration-700 ease-in-out ${dark ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900' : 'bg-gradient-to-br from-blue-50 via-purple-50 to-pink-100'}`}>
        <div className="w-full">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3 mb-4 sm:mb-6 relative">
            <span className="inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gradient-to-br from-blue-200 via-purple-200 to-pink-200 shadow-lg mb-2 sm:mb-0">
              <BracketsCurly size={32} weight="fill" className="text-blue-700 drop-shadow" />
            </span>
            <h1 className={`text-2xl sm:text-4xl font-extrabold text-center text-transparent bg-clip-text ${dark ? 'bg-gradient-to-r from-yellow-200 via-pink-300 to-purple-400' : 'bg-gradient-to-r from-blue-600 via-purple-500 to-pink-500'} drop-shadow-lg transition-all duration-700 ease-in-out`}>
              Code Mentor AI
            </h1>
            <button
              className="absolute right-2 top-2 sm:static sm:right-0 sm:top-0 bg-white/80 dark:bg-gray-800/80 rounded-full p-2 shadow hover:scale-110 transition-all duration-300"
              onClick={() => setDark(d => !d)}
              title="Toggle theme"
            >
              {dark ? <Sun size={22} className="text-yellow-400" /> : <Moon size={22} className="text-blue-700" />}
            </button>
          </div>
          <div className="rounded-2xl shadow-2xl bg-white/80 dark:bg-gray-900/80 backdrop-blur-md p-2 sm:p-6 transition-all duration-700 ease-in-out">
            <ChatBox messages={messages} loading={loading} clearChat={() => setMessages([])} />
            <CodeInput onSend={handleSend} loading={loading} />
          </div>
        </div>
      </main>
      <footer className="w-full text-center py-2 sm:py-4 text-xs sm:text-sm text-gray-500 dark:text-gray-400 bg-transparent select-none">
        © {new Date().getFullYear()} Code Mentor AI &mdash; Crafted by Pugazhendhi
      </footer>
    </>
  )
}