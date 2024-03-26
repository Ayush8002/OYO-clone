import React, { useEffect, useState } from 'react'
import Header1 from '../components/Header1'
import Header2 from '../components/Header2'
import Header3 from '../components/Header3'
import Header4 from '../components/Header4'
import Header5 from '../components/Header5'
import Footer from '../components/Footer'
import TopHeader from '../components/TopHeader'
import Head from 'next/head'

const Home = () => {
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const controlNavbar = () => {
    if (window.scrollY > 10) {
      if (window.scrollY > lastScrollY) {
        setShow(true);
      } else {
        setShow(false);
      }
    } else {
      setShow("top");
    }
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);
    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, [lastScrollY]);

  return (
    <div>
      <Head>
        <title>OYO:India's Best Online Hotel Booking Site</title>
      </Head>
      <Header1 />
      <Header2 />
      <Header3 />
      <Header4 />
      <Header5 />
      <Footer />
    </div>
  )
}

export default Home
