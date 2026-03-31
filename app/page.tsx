import React from 'react'
import Header from './components/Header'
import Consultingsection from './components/Consultingsection'
import Marketingsection from './components/Marketingsection'

const page = () => {
  return (
    <main>
      <Header />
      <Consultingsection />
      <Marketingsection />
    </main>
  )
}

export default page