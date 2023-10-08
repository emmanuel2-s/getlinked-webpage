import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'

function NavBar() {

    const openNav = () => {
        document.getElementById("nav-small").style.display = 'block';
    }

    const closeNav = () => {
        document.getElementById("nav-small").style.display = 'none';
    }


    return (
        <>
            <div className=''>
                <div className='nav-view d-flex justify-content-between mt-5 d-md-none'>
                    <Link to={'/'}><h1 className='text-white'>get<span>linked</span></h1></Link>
                    <img src='/assets/img/vector (3).png' onClick={openNav} width={20} height={20} />
                </div>


                <ul className="nav" id='nav-small'>
                    <div className='closebtn' onClick={closeNav}>
                        <img src='/assets/img/Group 1 (1).png' className='position-relative' />
                        <span className='x text-white fs-5'>x</span>
                    </div>
                    <li className="nav-item">
                        <a href="#timeline" className="nav-link text-white" onClick={closeNav}>Timeline</a>
                    </li>
                    <li className="nav-item">
                        <a href="#criteria" className="nav-link text-white" onClick={closeNav}>Overview</a>
                    </li>
                    <li className="nav-item">
                        <a href="#faqs" className="nav-link text-white" onClick={closeNav} >FAQs</a>
                    </li>
                    <Link to={'/contact'} > <li className="nav-item me-5">
                        <a href="#" className="nav-link text-white" onClick={closeNav}>Contact</a>
                    </li></Link>
                    <Link to={'/register'} ><button className='btn'>Register</button></Link>
                </ul>

            </div>

            <nav className='w-100 d-md-block d-md-flex justify-content-between pt-4 align-items-center'>
                <Link to={'/'}><h1 className='text-white'>get<span>linked</span></h1></Link>
                <ul className="nav" id='nav-small'>
                    <li className="nav-item">
                        <a href="#timeline" className="nav-link text-white" >Timeline</a>
                    </li>
                    <li className="nav-item">
                        <a href="#criteria" className="nav-link text-white" >Overview</a>
                    </li>
                    <li className="nav-item">
                        <a href="#faqs" className="nav-link text-white" >FAQs</a>
                    </li>
                    <Link to={'/contact'} > <li className="nav-item me-5">
                        <a href="#" className="nav-link text-white">Contact</a>
                    </li></Link>
                    <Link to={'/register'} ><button className='btn'>Register</button></Link>
                </ul>
            </nav >

        </>
    )
}

export default NavBar