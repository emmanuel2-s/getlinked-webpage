import React from 'react'
import { Link } from 'react-router-dom'
import './Registration.css'

function Registration() {

    const ShowModal = () => {
        setTimeout(() => {
            document.getElementById('modalId').style.display = "block"

        }, 3000)
    }

    const CloseModal = () => {
        document.getElementById('modalId').style.display = "none"
    }

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
                        <img src='/assets/img/Contact.png' className='mt-2 ms-3' height={16} />
                        {/* <a href="#" class="nav-link text-white">Contact</a> */}
                    </li></Link>
                    <Link to={'/register'} ><button className='btn'>Register</button></Link>
                </ul>
            </nav>

            <div className='containerr'>
                <div className='img-reg'>
                    <img src='/assets/img/3d-graphic-designer 1.png' />
                    <img src='/assets/img/sata gra.png' className='img-A' width={20} height={26} />
                    <img src='/assets/img/starr.png' className='img-B' width={20} height={26} />
                    <img src='/assets/img/star pu.png' className='img-C' width={20} height={26} />
                    <img src='/assets/img/Purple-Lens-Flare-PNG.png' className='shadow-bg' />

                </div>
                <div className='board'>
                    <img src='/assets/img/starr.png' className='img2' width={20} height={26} />

                    <form className='form'>
                        <h1>Register</h1>
                        <p className='movement'>Be part of this movement! <img src='/assets/img/Part of move (1).png' width={150} height={25} /></p>

                        <h3>CREATE YOUR ACCOUNT</h3>
                        <div className='form-wrap'>
                            <div className='first'>
                                <label for="text"><b>Team's Name</b></label>
                                <input type="text" placeholder="Enter your group name" name="name" required />

                                <label for="email"><b>Email</b></label>
                                <input type="email" placeholder="Enter your email address" required />

                                <label for="text"><b>Category</b></label>
                                <select>
                                    <option value='Select your category'>Select your category</option>
                                </select>
                            </div>

                            <div className='second'>
                                <label for="number"><b>Phone</b></label>
                                <input type="text" placeholder="Enter your phone number" name="" required />

                                <label for="text"><b>Project Topic</b></label>
                                <input type="text" placeholder="What is your group project topic " required />
                                <label for="text"><b>Group Size</b></label>
                                <select>
                                    <option value='Select your category'>Select</option>
                                </select>                            </div>

                        </div>

                        <p className='review'>Please review your registration details before submitting</p>

                        <label className='sy'><input type="checkbox" name="remember" /> I agreed with the event terms and conditions  and privacy policy
                        </label>

                        <button className='button mt-4' onClick={ShowModal}>Register Now</button>
                    </form>

                    <img src='/assets/img/star.png' className='img3' width={10} height={10} />
                    <img src='/assets/img/Purple-Lens-Flare-PNG (1).png' className='shadow-' width={500} height={500} />
                </div>
            </div>

            <div className='modal-container' id='modalId'>
                <div className='modal-conte'>
                    <img src='/assets/img/star pu.png' className='img1' width={20} height={26} />
                    <img src='/assets/img/starr.png' className='img2' width={20} height={26} />

                    <img src='/assets/img/congratulation.png' />
                    <h1>Congratulations<br />
                        you have successfully Registered!</h1>
                    <p>Yes, it was easy and you did it!<br />
                        check your mail box for next step <span>&#128521;</span></p>

                    <button onClick={CloseModal} className='back'>Back</button>
                    <img src='/assets/img/sata gra.png' className='img3' width={20} height={26} />

                </div>
            </div>

        </>
    )
}

export default Registration