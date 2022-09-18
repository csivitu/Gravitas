import Head from 'next/head'
import Image from 'next/image'
import ContactUs from '../components/ContactUs'
import FAQs from '../components/FAQs'
import ForkThis from '../components/ForkThis'
import Hero from '../components/Hero'
import LaserTag from '../components/LaserTag'
import Navbar from '../components/Navbar'

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <LaserTag />
      <ForkThis />
      <FAQs />
      <ContactUs />
    </>
  )
}
