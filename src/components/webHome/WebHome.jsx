import React from 'react'
import './style.scss'
import { useState } from 'react'
import { useNavigate, Link } from "react-router-dom";
import ContentWrapper from '../contentWrapper/ContentWrapper'
import AppStore from './../../assets/app-store-apple.png'
import GooglePlay from './../../assets/google-play.png'
import chana from './../../assets/chana.png'
import bajra from './../../assets/bajra.jpg'
import matar from './../../assets/matar.jpg'
import moong from './../../assets/moong.png'

const WebHome = () => {
    const navigate = useNavigate();
    const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div>
      <nav className='lg:px-[200px]'>
        <Link to="/" className="title">
          TFS
        </Link>
        <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <ul className={menuOpen ? "open" : ""}>
          <li>
            {/* <NavLink to="/about">Chana</NavLink> */}
            <p className='me-4' onClick={() => navigate(`/categorie/chana`)}>Chana</p>
          </li>
          <li>
            {/* <NavLink to="/services">Matar</NavLink> */}
            <p onClick={() => navigate(`/categorie/matar`)}>Matar</p>
          </li>
          {/* <li>
            <NavLink to="/contact">Contact</NavLink>
          </li> */}
        </ul>
      </nav>

      <main id="main-content" data-controller="scroll-magic">
        {/* <section className="text-center mt-16 container" data-scroll-magic-target="phoneContainer">
            <h1 className="lg:w-2/3 text-3xl md:text-[56px] font-bold leading-none mx-auto md:mb-8 mb-4">
                1-app for everything money
            </h1>
            <div className="flex justify-center mb-6" id="toggle-animation">
              <p className="md:text-2xl text-sm pr-1">Manage your money like you</p>
              <div className="cubespinner animate-flipper pb-2">
                <div className="face1 w-64 text-sm md:text-2xl md:w-64">shop for clothes</div>
                <div className="face2 w-64 text-sm md:text-2xl md:w-64">chat with friends</div>
                <div className="face3 w-64 text-sm md:text-2xl md:w-64">order food</div>
              </div>
            </div>
            <a target="_blank" href=""
                className="text-white text-sm md:text-xl hover:bg-white hover:text-sf60 border border-sf60 py-3 px-6 rounded-full inline-block bg-orange-500">
                Open Savings Account
            </a>
        </section> */}

        <ContentWrapper>
          <section className='w-100 flex mt-5'>
            <div className='w-[50%] flex flex-col justify-center'>
              <h1 className='flex' style={{fontSize: '48px', fontWeight: 700}}>Take your Relationship to the next level</h1>
              <p>A relationship app for couples in love. Explore the limitless bound of your relationship with our private chat, shared gallery and much more.</p>
              <div className='mt-3'>
                <span>Available on</span>
                <div className='flex gap-2'>
                  <img className='w-32' src={AppStore} alt="" />
                  <img className='w-32' src={GooglePlay} alt="" />
                </div>
              </div>
            </div>
            <div className='w-[50%]'>
              <img src="https://jupiter.money/assets/images/home/upt-jupiter-screens.webp?v=6fa9b831b3"
          alt="Jupiter mobile app" />
            </div>
          </section>
        </ContentWrapper>

        {/* <div className='lg:mx-[200px]'>
        <img className="px-4 pt-8" src="https://jupiter.money/assets/images/home/upt-jupiter-screens.webp?v=6fa9b831b3"
        alt="Jupiter mobile app" />
        </div> */}

        <section className="text-white bg-orange-400 flex justify-center pb-20 pt-20">
          <div className="container max-w-screen-lg">
              <h1 className="text-center text-3xl md:text-4xl lg:text-6xl font-bold mb-12">
                  Your smart account is backed
                  by</h1>
              <div className="mx-6 grid gap-12 lg:grid-cols-3">
                  <div className="flex">
                      <div className="mr-6" style={{width: '60px'}}>
                          <img src="https://jupiter.money/assets/images/home/max-trust.svg?v=6fa9b831b3" alt="Max trust" />
                      </div>
                      <div className="flex-1">
                          <div className="text-lg md:text-2xl font-semibold">Max Trust
                          </div>
                          <p className="md:text-lg">Your account is hosted on Federal Bank</p>
                          <div className="mt-4 w-[100px]">
                          <img src="https://jupiter.money/assets/images/logos/federal_bank.svg?v=6fa9b831b3" alt="Federal Bank" />
                          </div>
                      </div>
                  </div>
                  <div className="flex">
                      <div className="mr-6" style={{width: '60px'}}>
                          <img src="https://jupiter.money/assets/images/home/max-security.svg?v=6fa9b831b3" alt="Max security" />
                      </div>
                      <div className="flex-1">
                          <div className="text-lg md:text-2xl font-semibold">Max
                              Security</div>
                          <p className="md:text-lg">Which means bank-grade security
                              and ISO and PCI compliant</p>
                          <div className="flex mt-4">
                              <div className='flex h-[32px]'>
                                <img className="mr-4" src="https://jupiter.money/assets/images/logos/pci-dss.svg?v=6fa9b831b3" alt="PCI DSS" />
                                <img src="https://jupiter.money/assets/images/logos/gms.svg?v=6fa9b831b3" alt="GMS Certificate" />
                              </div>
                          </div>
                      </div>
                  </div>
                  <div className="flex">
                      <div className="mr-6" style={{width: '60px'}}>
                          <img alt="Max safety" src="https://jupiter.money/assets/images/home/max-safety.svg?v=6fa9b831b3" />
                      </div>
                      <div className="flex-1">
                          <div className="text-lg md:text-2xl font-semibold">Max
                              Safety</div>
                          <p className="md:text-lg">Your money is insured up to ₹5,00,000 by DICGC</p>
                      </div>
                  </div>
              </div>
          </div>
        </section>

        <ContentWrapper>
          <section className='mt-8'>
            <span className='ms-2'>Title</span>
            <div className='flex overflow-scroll mt-4 gap-8'>
              <div className='commodity' onClick={() => navigate(`/categorie/chana`)} >
                <div className='img'>
                    <img src={chana} alt="" />
                </div>
                <span>Chana</span>
                {/* <p className='special'>• Special Report</p> */}
              </div>
              <div className='commodity' >
                <div className='img'>
                    <img src={matar} alt="" />
                </div>
                <span>Matar</span>
              </div>
              <div className='commodity' >
                <div className='img'>
                    <img src={matar} alt="" />
                </div>
                <span>Matar</span>
              </div>
              <div className='commodity' >
                <div className='img'>
                    <img src={matar} alt="" />
                </div>
                <span>Matar</span>
              </div>
              <div className='commodity' >
                <div className='img'>
                    <img src={matar} alt="" />
                </div>
                <span>Matar</span>
              </div>
              <div className='commodity' >
                <div className='img'>
                    <img src={matar} alt="" />
                </div>
                <span>Matar</span>
              </div>
              <div className='commodity' >
                <div className='img'>
                    <img src={matar} alt="" />
                </div>
                <span>Matar</span>
              </div>
              <div className='commodity' >
                <div className='img'>
                    <img src={matar} alt="" />
                </div>
                <span>Matar</span>
              </div>
              <div className='commodity' >
                <div className='img'>
                    <img src={matar} alt="" />
                </div>
                <span>Matar</span>
              </div>
              <div className='commodity' >
                <div className='img'>
                    <img src={matar} alt="" />
                </div>
                <span>Matar</span>
              </div>
              <div className='commodity' >
                <div className='img'>
                    <img src={matar} alt="" />
                </div>
                <span>Matar</span>
              </div>
              <div className='commodity' >
                <div className='img'>
                    <img src={matar} alt="" />
                </div>
                <span>Matar</span>
              </div>
              <div className='commodity' >
                <div className='img'>
                    <img src={matar} alt="" />
                </div>
                <span>Matar</span>
              </div>
              <div className='commodity' >
                <div className='img'>
                    <img src={matar} alt="" />
                </div>
                <span>Matar</span>
              </div>
              <div className='commodity' >
                <div className='img'>
                    <img src={moong} alt="" />
                </div>
                <span>Moong</span>
              </div>
            </div>
          </section>
        </ContentWrapper>

        <div className="mx-auto max-w-screen-lg px-4 mt-8">
          <section className="py-12 lg:py-8 flex flex-col-reverse md:flex-row items-center h-screen">
            <div className="flex-1 lg:mr-6 text-center lg:text-left">
              <p className="uppercase text-sf60 text-lg tracking-wide">100% DIGITAL</p>
              <h2 className="text-3xl lg:text-5xl font-bold text-black100 leading-none pt-2 pb-3">Bank in a flash</h2>
              <p className="text-xl lg:text-lg text-black100">
                Create a bank account while making a playlist or posting a picture. That’s 100% digital and
                      zero percent painful.
              </p>
            </div>
            <div className="flex-1 ml-6">
              <video data-controller="scroll-video" className="mx-auto" data-scroll-video-target="animation" preload="auto" muted playsInline>
                <source src="https://jupiter.money/assets/videos/home/account-u.mp4" type="video/mp4" />
                <source src="https://jupiter.money/assets/videos/home/account-u.webm" type="video/webm" />
              </video>
            </div>
          </section>
        </div>

    </main>
    </div>
  )
}

export default WebHome
