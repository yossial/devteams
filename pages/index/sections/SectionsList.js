import React from 'react'
import ContactUs from './ContactUs'
import Featues from './Features'
import Statistics from './Statistics'
import Steps from './Steps'

export default function Sections() {
  return (
    <div className="mt-4 py-8 bg-white" id="sections">
      <Featues />
      <Steps />
      <Statistics />
      <ContactUs />
    </div>
  )
}
