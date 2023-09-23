import React from 'react'
import NavBar from '../pages/NavBar'
import Header from '../pages/Header'
import About from '../pages/About'
import Rules from '../pages/Rules'
import Criteria from '../pages/Criteria'
import Faqs from '../pages/Faqs'
import Timeline from '../pages/Timeline'
import Rewards from '../pages/Rewards'
import Partnership from '../pages/Partnership'
import PolicyTerms from '../pages/PolicyTerms'
import Footer from '../pages/Footer'

function Home() {
    return (
        <div>
            <NavBar />
            <Header />
            <About />
            <Rules />
            <Criteria />
            <Faqs />
            <Timeline />
            <Rewards />
            <Partnership />
            <PolicyTerms />
            <Footer />
        </div>
    )
}

export default Home