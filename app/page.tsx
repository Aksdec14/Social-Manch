import React from 'react'
import Header from './components/Header'
import Consultingsection from './components/Consultingsection'
import Marketingsection from './components/Marketingsection'
import Usecasessection from './components/Usecasessection'


const page = () => {
  return (
    <main>
      <Header />
      <Consultingsection />
      <Marketingsection />
      <Usecasessection />
    </main>
  )
}

export default page