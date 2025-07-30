import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Heading from './components/Heading.jsx'
import Footer from './components/Footer.jsx'

createRoot(document.getElementById('root')).render(
  <App />
)
// First Rule of react is every component needs to have a wrapper around it 
// A Component is a function that returns html. This function is a reusable piece of code that can be ran at any part of your page

// <% %>
// <%= %>