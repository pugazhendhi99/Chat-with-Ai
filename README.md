# Code Mentor AI

Code Mentor AI is your personal coding tutor web app. Paste your code or errors, ask questions, and get instant AI-powered explanations, debugging help, and code improvement suggestions.

---

## 🚀 What is Code Mentor AI?

A modern web app where you can:

- Paste code or error messages
- Upload code files
- Ask coding questions in natural language
- Get instant, clear explanations and fixes from an AI tutor (powered by OpenAI GPT-4o)
- See syntax-highlighted, easy-to-read responses

---

## ✨ Features

- **Chat with AI:** Ask questions about your code, errors, or concepts
- **Paste or Upload Code:** Supports direct input and file uploads
- **Syntax Highlighting:** Beautiful code formatting in chat
- **Copy Code:** One-click copy for code suggestions
- **Theme Switcher:** Light/dark mode toggle
- **Modern UI:** Responsive, animated, and user-friendly
- **Timestamps:** Every message is time-stamped
- **Branding:** Custom logo, footer, and smooth design

---

## 🛠️ Tech Stack

- **Frontend:** Next.js (App Router), TypeScript, Tailwind CSS, Prism.js, Phosphor Icons
- **Backend:** Next.js API Route
- **AI:** OpenAI GPT-4o (or compatible model)

---

## ⚡ How It Works

1. **User pastes code, uploads a file, or asks a question**
2. **App sends the input to the backend API**
3. **Backend calls OpenAI's API with your code/question**
4. **AI responds with explanations, fixes, or suggestions**
5. **Frontend displays the response with syntax highlighting and chat UI**

---

## 🧑‍💻 Getting Started

### 1. Clone the Repo

```sh
git clone https://github.com/yourusername/code-mentor-ai.git
cd code-mentor-ai
```

### 2. Install Dependencies

```sh
npm install
```

### 3. Set Up OpenAI API Key

- Create a file named `.env.local` in the project root:
  ```
  OPENAI_API_KEY=sk-...
  ```
- **No quotes, no spaces.**
- Get your key from https://platform.openai.com/account/api-keys

### 4. Start the Dev Server

```sh
npm run dev
```

### 5. Open in Browser

Go to [http://localhost:3000](http://localhost:3000)

---

## 📝 Usage

- Paste code or error messages in the input box
- (Optional) Ask a question about your code
- (Optional) Upload a code file
- Click **Send**
- Get instant AI-powered help!

---

## 🛡️ Troubleshooting

### "No response from AI" or "Failed to process your request"

- **Check your OpenAI API key** in `.env.local` (no quotes, correct key)
- **Restart your dev server** after any change to `.env.local`
- **Check your OpenAI account billing:** You must have an active payment method or credits for API access (https://platform.openai.com/account/billing/overview)
- **Check your terminal for errors** (401 = invalid key or no payment)

### Styles not applied / UI looks broken

- Make sure `app/layout.tsx` imports `../styles/globals.css`
- Restart your dev server

---

## 📦 Customization

- Change the logo or branding in `app/page.tsx`
- Tweak colors and fonts in `tailwind.config.ts` and `globals.css`
- Add more features (history, settings, etc.) as you wish!

---

## 📄 License

MIT

---

_Crafted with ❤️ by Pugazhendhi_
