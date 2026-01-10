import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { About } from './components/About/About'
import { Projects } from './components/Projects/Projects'
import { Skills } from './components/Skills/Skills'
import { Contact } from './components/Contact/Contact'
createRoot(document.getElementById('root')!).render(
  <StrictMode>
     
    <About/>
    <Projects/>
    <Skills/>
    <Contact/>
   
  </StrictMode>,
)
