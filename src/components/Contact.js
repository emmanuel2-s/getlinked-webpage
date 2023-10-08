import React from 'react'
import NavBar from '../pages/NavBar'
import './Contact.css'
import { Link } from 'react-router-dom'

function Contact() {
    return (
        <>
            <div>
                <nav className='d-flex justify-content-between pt-5 align-items-center'>
                    <Link to={'/'}><h1 className='text-white'>get<span>linked</span></h1></Link>
                    <img src='/assets/img/Group 1.png' width={23} height={23} className='back-btn' />
                    <ul className="nav ">
                        <li className="nav-item">
                            <a href="#timeline" className="nav-link text-white" aria-current="page">Timeline</a>
                        </li>
                        <li className="nav-item">
                            <a href="#criteria" className="nav-link text-white">Overview</a>
                        </li>
                        <li className="nav-item">
                            <a href="#faqs" className="nav-link text-white">FAQs</a>
                        </li>
                        <Link to={'/contact'} > <li className="nav-item me-5">
                            {/* <img src='/assets/img/Contact.png' className='mt-2 ms-3' height={16} /> */}
                            <a href="#" className="nav-contact nav-link text-white">Contact</a>
                        </li></Link>
                        <Link to={'/register'} ><button className='btn'>Register</button></Link>
                    </ul>
                </nav>

                <div className='wrapper'>
                    <img src='/assets/img/Purple-Lens-Flare-PNG.png' className='img5' alt='star' width={700} height={600} />

                    <div className='contact'>
                        <img src='/assets/img/sata gra.png' className='img1' alt='star' width={20} height={26} />

                        <h1>Get in touch</h1>

                        <ul>
                            <li>Contact<br />
                                Information</li>
                            <li>27,Alara Street<br />
                                Yaba 100012<br />
                                Lagos State</li>
                            <li>Call Us : 07067981819</li>
                            <li>we are open from Monday-Friday<br />
                                08:00am - 05:00pm</li>
                        </ul>
                        <p className='share'>Share on</p>
                        <div className='socia'>
                            <img src='/assets/img/mdi_instagram.png' alt='icon instagram' />
                            <img src='/assets/img/vector (1).png' alt='icon facebook' />
                            <img src='/assets/img/vector (2).png' alt='icon twitter' />
                            <img src='/assets/img/ri_linkedin-fill.png' alt='icon linkedin' />
                        </div>
                    </div>

                    <div className='form-cont'>
                        <img src='/assets/img/starr.png' className='img2' alt='star' width={20} height={26} />

                        <form className='forms'>
                            <p>Questions or need assistance? Let us know  about it!</p>
                            {/* <p>Let us know  about it!</p> */}
                            <input type='text' className='name' id='name' placeholder='First Name' />
                            <input type='email' className='email' id='email' placeholder='Email' />
                            <textarea name='message' placeholder='Message' cols={30}></textarea>

                            <button className='btn mt-4'>Submit</button>
                        </form>
                        <img src='/assets/img/sata gra.png' className='img3' alt='star' width={20} height={26} />
                        <img src='/assets/img/star.png' className='img4' alt='star' width={20} height={26} />
                        <img src='/assets/img/Purple-Lens-Flare-PNG (1).png' className='img6' alt='purple background' width={500} height={500} />

                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact