import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Toaster } from 'sonner'

createRoot(document.getElementById('root')).render(
  <>
    <Toaster
      position="top-center"
      theme="light"
      toastOptions={{
        style: {
          borderRadius: '8px',
          background: 'white',
          color: 'black',
        },
      }}
    />
    <App />
  </>
)
