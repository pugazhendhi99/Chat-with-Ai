import { NextRequest } from 'next/server'
import {GoogleGenAI} from '@google/genai'
import formidable from 'formidable'
import { Readable } from 'stream'

export const config = {
  api: {
    bodyParser: false,
  },
}

console.log('OPENAI_API_KEY:', process.env.OPENAI_API_KEY)
const gemai = new GoogleGenAI({ apiKey: process.env.OPENAI_API_KEY })

async function parseForm(req: Request) {
  const form = formidable()
  return new Promise((resolve, reject) => {
    form.parse(req, (err, fields, files) => {
      if (err) reject(err)
      else resolve({ fields, files })
    })
  })
}

export async function POST(req: NextRequest) {
  try {
    let code = ''
    let question = ''
    const contentType = req.headers.get('content-type') || ''

    if (contentType.includes('multipart/form-data')) {
      // Parse file upload
      const reqClone = req.body ? req : new Request(req.url, { body: req.body, headers: req.headers })
      const { fields, files }: any = await parseForm(reqClone as any)
      question = fields.question || ''
      if (files && files.file) {
        const file = files.file
        const fileBuffer = await file.toBuffer()
        code = fileBuffer.toString('utf-8')
      }
    } else {
      // Parse JSON
      const body = await req.json()
      code = body.code || ''
      question = body.question || ''
    }

    if (!code && !question) {
      return Response.json({ error: 'Missing code or question.' }, { status: 400 })
    }

    // Compose the prompt
    let prompt = 'You are Code Mentor AI, a helpful coding tutor.\n'
    if (question) {
      prompt += `\nUser Question:\n${question}\n`
    }
    if (code) {
      prompt += `\nUser Code:\n${code}\n`
    }
    prompt += '\nInstructions: Explain what the code does, identify any errors, and suggest improvements or fixes. If the user asks a question, answer it in detail. Be clear and educational.'

    // Call OpenAI
    const completion = await gemai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: [
        {
          role: 'user',
          parts: [{ text: prompt }]
        }
      ]
    })

    const aiMessage = completion.candidates?.[0]?.content?.parts?.[0]?.text || 'No response from AI.'
    return Response.json({ message: completion.candidates?.[0]?.content?.parts?.[0]?.text })
  } catch (error: any) {
    console.error('API error:', error)
    return Response.json({ error: 'Failed to process your request.' }, { status: 500 })
  }
}