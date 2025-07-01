import CodeInput from '@/components/CodeInput'
import ChatBox from '@/components/ChatBox'

export default function Home() {
  return (
    <main className="p-4">
      <h1 className="text-3xl font-bold mb-4">Code Mentor AI</h1>
      <CodeInput />
      <ChatBox />
    </main>
  )
}