import Head from 'next/head'
import GlobalStyles from '@styles/globalStyles';
import favicon from '@public/favicon.png';

import Header from '@components/header';
import Banner from '@components/banner';
import WhatIs from '@components/what-is';
import HowItWorks from '@components/how-it-works';
import Circles from '@components/circles';
import About from 'components/about';
import Plans from 'components/plans';
import Depositions from '@components/depositions';
import Faq from '@components/faq';
import Footer from 'components/footer';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Rick and Morty</title>
        <link rel="shortcut icon" href={favicon}></link>
      </Head>
      <GlobalStyles />
      <main>
        <Header />
        <Banner />
        <WhatIs />
        <HowItWorks />
        <Circles />
        <About />
        <Plans />
        <Depositions />
        <Faq />
        <Footer />
      </main>
    </div>
  )
}
