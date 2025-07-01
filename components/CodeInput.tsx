'use client'
import { useState } from 'react'

export default function CodeInput() {
  const [code, setCode] = useState('')

  return (
    <textarea
      value={code}
      onChange={(e) => setCode(e.target.value)}
      placeholder="Paste your code here..."
      className="w-full h-40 p-2 border border-gray-300 rounded"
    />
  )
}