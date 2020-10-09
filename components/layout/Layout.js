import React, { useState, useEffect, useRef } from 'react';
import Header from './Header';
import Footer from './Footer';
import { useRouter } from "next/router";

const tinyImgSrc = require('../../static/signup.jpg?lqip');
const imgSrc = require('../../static/cover.jpg');

export default function Layout({ children }) {
  const router = useRouter();
  const [isActive, setisActive] = useState(false);
  const [isSolid, setIsSolid] = useState(false);
  const [isOpen, setIsOpen] = useState(false)
  const [scrollPos, setScrollpos] = useState(0);
  const [bgImgSrc, setBgImgSrc] = useState(null);
  const image = useRef()
  const handleLoad = () => setLoaded(true)
  const authPages = ['login', 'signup', 'signup/developer', 'signup/organization'];
  let isAuthPages = authPages.indexOf(router.pathname.slice(1)) !== -1

  useEffect(() => {
    const imageLoader = new Image();
    imageLoader.src = imgSrc.src;
    imageLoader.onload = () => {
      setBgImgSrc(imgSrc.src);
    };

  }, [])
  useEffect(() => {
    window.addEventListener('scroll', function () {
      setScrollpos(window.scrollY);
      if (window.scrollY > 100) {
        setIsSolid(true);
      } else {
        setIsSolid(false);
      }
    });
  });

  return (
    <div>
      <div className={`mainGrid h-screen ${isAuthPages ? 'bg-gray-150' : ''}`}
        style={isAuthPages ? null : {
          backgroundColor: '#2c5282',
          backgroundImage: `url(${bgImgSrc || tinyImgSrc.src})`,
          backgroundSize: 'cover',
          transition: 'background-image .3s ease-in'
        }}
        ref={image}
      >
        <main className={isOpen ? 'overflow-hidden' : ''}>
          {!isAuthPages &&
            <Header isOpen={isOpen} handleOpen={val => setIsOpen(val)}
              isSolid={isSolid} />
          }
          {children}
        </main>
        <Footer />
      </div>
    </div >
  );

}

