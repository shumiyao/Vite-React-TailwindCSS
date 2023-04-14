import { createRoot } from 'react-dom/client'
import { Routes } from '@generouted/react-router'
import '@/assets/index.css'

const container = document.getElementById('app')!
createRoot(container).render(<Routes />)