import React, { Component, useState, useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';
import { useRouter } from "next/router";

export default function Layout({ children }) {
  const router = useRouter();
  const [isActive, setisActive] = useState(false);
  const [isSolid, setIsSolid] = useState(false);
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
    <main className={`${!isAuthPages ? 'mainGrid' : 'secondaryGrid bg-gray-50'}`}>
      <Header isSolid={isAuthPages || isSolid} />
      <div className="content">
        {children}
      </div>
      <Footer isHidden={isAuthPages} />
    </main>
  );

}

