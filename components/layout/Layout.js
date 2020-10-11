import React, { useState, useEffect, useRef } from 'react';
import Header from './Header';
import Footer from './Footer';
import { useRouter } from "next/router";
import Link from '../Link';
import NavBackHome from '../NavBackHome';

const tinyImgSrc = require('../../static/cover.jpg?lqip-colors');
const imgSrc = require('../../static/cover.jpg');

export default function Layout({ children }) {
  const [isActive, setisActive] = useState(false);
  const [isSolid, setIsSolid] = useState(false);
  const [isOpen, setIsOpen] = useState(false)
  const [scrollPos, setScrollpos] = useState(0);
  const [bgImgSrc, setBgImgSrc] = useState(null);

  const router = useRouter();
  const image = useRef()
  const pageName = router.pathname.slice(1);
  const authPages = ['login', 'signup', 'signup/developer', 'signup/organization'];
  let isAuthPages = authPages.indexOf(pageName) !== -1
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
          backgroundPosition: 'center',
          transition: 'background-image .3s ease-in'
        }}
        ref={image}>
        <main className={isOpen ? 'overflow-hidden' : ''}>
          {isAuthPages ? <NavBackHome /> :
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

