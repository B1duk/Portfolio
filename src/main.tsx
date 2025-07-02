import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Header } from './components/Header/Header'
import { About } from './components/About/About'
import { Projects } from './components/Projects/Projects'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Skills } from './components/Skills/Skills'
import { Contact } from './components/Contact/Contact'
createRoot(document.getElementById('root')!).render(
  <StrictMode>
     <Router>
      
    <Header/>
    <Routes>
        <Route path="/" element={
          <>
    <About/>
    <Projects/>
    <Skills/>
    <Contact/>
    </>}/>
    </Routes>
    </Router>
  </StrictMode>,
)
