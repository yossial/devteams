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
  const pagesWithHiddenFooter = ['login', 'signup'];
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
    <div className="min-h-screen">
      <Header isOpen={isOpen} handleOpen={val => setIsOpen(val)} isSolid={isAuthPages || isSolid} />
      <div className="mainGrid min-h-screen91">
        <main className={isOpen ? 'overflow-hidden' : ''}>
          {children}
        </main>
        <Footer />
      </div>
    </div>
  );

}

