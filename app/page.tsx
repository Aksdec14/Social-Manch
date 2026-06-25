import React from 'react'
import Header from './components/Header'
import Consultingsection from './components/Consultingsection'
import Marketingsection from './components/Marketingsection'
import Usecasessection from './components/Usecasessection'
import Meettheteam from './components/Meettheteam'
import ContactSection from './components/Contact'



const page = () => {
  return (
    <main>
      <Header />
      <Consultingsection />
      <Marketingsection />
      <Usecasessection />
      <Meettheteam />
      <ContactSection />

    </main>
  )
}

export default page