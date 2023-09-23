import React from 'react'
import { Link } from 'react-router-dom'

function NavBar() {
    return (
        <>
            <nav className='d-flex justify-content-between pt-5 align-items-center'>
                <Link to={'/'}><h1 className='text-white'>get<span>linked</span></h1></Link>
                <ul class="nav ">
                    <li class="nav-item">
                        <a href="#timeline" class="nav-link text-white" aria-current="page">Timeline</a>
                    </li>
                    <li class="nav-item">
                        <a href="#criteria" class="nav-link text-white">Overview</a>
                    </li>
                    <li class="nav-item">
                        <a href="#faqs" class="nav-link text-white">FAQs</a>
                    </li>
                    <Link to={'/contact'} > <li class="nav-item me-5">
                        <a href="#" class="nav-link text-white">Contact</a>
                    </li></Link>
                    <button className='btn'>Register</button>
                </ul>
            </nav>

        </>
    )
}

export default NavBar