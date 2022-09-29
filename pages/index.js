import Head from 'next/head'
import dynamic from "next/dynamic";
import Loading from '../components/Loading';

const DynamicHero = dynamic(() => import('../components/Hero'), { loading: <Loading /> });
const DynamicNavbar = dynamic(() => import('../components/Navbar'), { loading: <Loading /> });
const DynamicLaserTag = dynamic(() => import('../components/LaserTag'), { loading: <Loading /> });
const DynamicForkThis = dynamic(() => import('../components/ForkThis'), { loading: <Loading /> });
const DynamicFAQs = dynamic(() => import('../components/FAQs'), { loading: <Loading /> });
const DynamicSponsors = dynamic(() => import('../components/Sponsors'), { loading: <Loading /> });
const DynamicContactUs = dynamic(() => import('../components/ContactUs'), { loading: <Loading /> });

export default function Home() {

  return (
    <>
      <Head>
        <title>CSI | Gravitas'22</title>
      </Head>
      <DynamicNavbar />
      <DynamicHero />
      <DynamicLaserTag />
      <DynamicForkThis />
      <DynamicFAQs />
      <DynamicSponsors />
      <DynamicContactUs />
    </>
  )
}
