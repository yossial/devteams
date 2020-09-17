import React from 'react'
import { FaRegLightbulb, FaAppStore, FaHandsHelping } from 'react-icons/fa';

export default function IconsAbout() {
  const iconCards = [
    {
      Icon: FaRegLightbulb,
      title: "Make valueable ideas come to life",
      content: "Lorem ipsum dolor, sit amet consectetur adipisicing elit."
    },
    {
      Icon: FaAppStore,
      title: "Gain app development experience",
      content: "Sequi non quia ab, ipsam consequuntur nesciunt"
    },
    {
      Icon: FaHandsHelping,
      title: "Contribute to the community",
      content: "Natus sint dicta impedit doloremque tempore. Nemo!"
    }
  ]
  return (
    <section className="flex justify-evenly items-center md:justify-center flex-col 
    sm:flex-row" id="about">
      {iconCards.map(({ Icon, title, content }) =>
        <div key={title} className="flex flex-col items-center max-w-sm overflow-hidden bg-gray-100 mx-2 py-4 md:my-0 text-center">
          <Icon className="text-5xl text-center" />
          <div className="px-6 pt-4">
            <div className="font-bold text-xl mb-2">{title}</div>
            <p className="text-gray-700 text-base">{content}</p>
          </div>
        </div>
      )}

    </section>
  )
}
