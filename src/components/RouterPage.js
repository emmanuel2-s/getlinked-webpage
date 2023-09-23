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
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Contact from './Contact'
import Home from './Home'
import Registration from './Registration'

function RouterPage() {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path='/contact' element={<Contact />} />
                    <Route path='/' element={<Home />} />
                    <Route path='/register' element={<Registration />} />
                </Routes>
            </BrowserRouter>

        </div>
    )
}

export default RouterPage