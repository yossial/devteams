import React, { Component, useState, useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';
import { useRouter } from "next/router";

export default function Layout({ children }) {
  const router = useRouter();
  const [isActive, setisActive] = useState(false);
  const [isSolid, setIsSolid] = useState(false);
  const [isOpen, setIsOpen] = useState(false)
  const [scrollPos, setScrollpos] = useState(0);
  const pagesWithHiddenFooter = ['login', 'signup/developer', 'signup/organization'];
  let isAuthPages = pagesWithHiddenFooter.indexOf(router.pathname.slice(1)) !== -1
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
      <div className={`mainGrid h-screen ${isAuthPages ? 'bg-gray-150' : 'bg-cover'}`}>

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

