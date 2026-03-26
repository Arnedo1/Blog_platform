import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './App.css'
import App from './App.tsx'
import { AuthProvider } from './context/AuthPorvider.tsx'
import { BlogProvider } from './context/BlogProvider.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AuthProvider>
      <BlogProvider>
    <App />
    </BlogProvider>
    </AuthProvider>
  </StrictMode>,
)
