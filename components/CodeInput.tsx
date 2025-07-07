'use client'
import { useState, useRef } from 'react'

export default function CodeInput({ onSend, loading }: { onSend: (data: { code: string; question: string }) => void; loading: boolean }) {
  const [code, setCode] = useState('')
  const [question, setQuestion] = useState('')
  const [fileName, setFileName] = useState('')
  const fileInputRef = useRef<HTMLInputElement>(null)

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!code && !question) return
    onSend({ code, question })
    setCode('')
    setQuestion('')
    setFileName('')
    if (fileInputRef.current) fileInputRef.current.value = ''
  }

  function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0]
    if (!file) return
    setFileName(file.name)
    const reader = new FileReader()
    reader.onload = (event) => {
      setCode(event.target?.result as string || '')
    }
    reader.readAsText(file)
  }

  function handleClearFile() {
    setFileName('')
    setCode('')
    if (fileInputRef.current) fileInputRef.current.value = ''
  }

  return (
    <form onSubmit={handleSubmit} className="mt-4 sm:mt-6 bg-gradient-to-br from-white/90 via-blue-50 to-pink-50 p-2 sm:p-5 rounded-2xl shadow-xl flex flex-col gap-3 sm:gap-4 border border-gray-100 transition-all duration-700">
      <input
        type="text"
        value={question}
        onChange={e => setQuestion(e.target.value)}
        placeholder="Ask a question about your code (optional)"
        className="w-full p-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-200 text-base transition-all duration-300 shadow-sm"
        disabled={loading}
      />
      <div className="flex flex-col sm:flex-row gap-2 items-stretch sm:items-center">
        <input
          type="file"
          accept=".js,.ts,.jsx,.tsx,.py,.java,.cpp,.c,.cs,.rb,.go,.php,.rs,.swift,.kt,.m,.json,.txt,.md,.html,.css,.sh,.yml,.yaml,.xml"
          ref={fileInputRef}
          onChange={handleFileChange}
          className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-gradient-to-r file:from-blue-100 file:to-pink-100 file:text-blue-700 hover:file:bg-blue-200 transition-all duration-300"
          disabled={loading}
        />
        {fileName && (
          <span className="text-xs text-gray-700 bg-gradient-to-r from-gray-100 to-pink-50 px-2 py-1 rounded flex items-center gap-1 shadow-sm mt-2 sm:mt-0">
            {fileName}
            <button type="button" onClick={handleClearFile} className="ml-1 text-red-400 hover:text-red-600 transition-all duration-200" title="Remove file">&times;</button>
          </span>
        )}
      </div>
      <textarea
        value={code}
        onChange={e => setCode(e.target.value)}
        placeholder="Paste your code here..."
        className="w-full h-28 sm:h-32 p-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-200 font-mono text-sm shadow-sm transition-all duration-300"
        disabled={loading || !!fileName}
      />
      <button
        type="submit"
        className="w-full sm:w-auto self-end bg-gradient-to-r from-blue-500 to-pink-500 hover:from-blue-600 hover:to-pink-600 text-white font-semibold px-6 py-2 rounded-lg shadow-md transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed"
        disabled={loading || (!code && !question)}
      >
        {loading ? 'Sending...' : 'Send'}
      </button>
    </form>
  )
}