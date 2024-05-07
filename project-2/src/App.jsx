import './App.css'
import Navigation from './components/Navigation/Navigation'
import ContactHeader from './components/contactHeader/contactHeader'
import ContactForm from './components/contactForm/contactForm'

function App() {

  return (
    <div>
    <Navigation/>
    <main className='flex flex-col h-[calc(100vh - 72px)] mx-auto'>
      <ContactHeader/>
      <ContactForm/>
    </main>
    </div>
  )
}

export default App
