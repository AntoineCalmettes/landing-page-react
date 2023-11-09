
import NavBar from './components/Navbar';
import Header from './components/Header';
import Wallet from './components/Wallet';
import PreviewNft from './components/PreviewNfl';
import SeparatorVector from './components/SeparatorVector'; 
import CountWallet from './components/CountWallets';
import HowItWork from './components/HowItWorks';
import Newsletter from './components/Newsletter';
import { Fragment } from 'react';

export default function Home() {
  return (

    <Fragment>
      <NavBar />
      <Header />
      <Wallet/>
      <SeparatorVector/>
      <PreviewNft/>
      <SeparatorVector/>
      <CountWallet/>
      <SeparatorVector/>
      <HowItWork/>
      <SeparatorVector/>
      <Newsletter/>
    </Fragment>

  )
}
