import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './Registration.css'
import api from '../components/api/Api'
import Loader from './Loader'

function Registration() {
    const [userInfo, setUserInfo] = useState({})
    const history = useNavigate()
    const [category, setCategory] = useState('')
    const [group, setGroup] = useState('')
    const [loading, setLoading] = useState(false)
    const [privacy, setPrivacy] = useState(true)

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserInfo(({
            ...userInfo, [name]: value
        }));
    }

    const CloseModal = () => {
        document.getElementById('modalId').style.display = "none";
        // window.location.reload()
        window.location.href = '/';
    }


    const handleSubmit = async (e) => {
        e.preventDefault()
        const payload = {
            Name: userInfo.Team_name,
            Email: userInfo.email,
            Category: category,
            Phone: userInfo.phone_number,
            Project_topic: userInfo.project_topic,
            Group_Size: group,
            privacy_poclicy_accepted: privacy ? false : true
        }
        console.log(payload)
        // const reg = await api.Hackathon.register(payload)
        // console.log(reg)
        setLoading(true)
        setTimeout(() => {
            document.getElementById('modalId').style.display = "block";
            setLoading(false)
        }, 3000)
        setUserInfo('')
        setCategory('');
        setGroup('');
        setPrivacy(false)

    }

    const handlePrivacy = () => {
        let checkbox = document.getElementById('myCheck');
        if (checkbox.checked === true) {
            setPrivacy(false)
        } else {
            setPrivacy(true)
        }

    }

    return (
        <>
            <nav className='d-flex justify-content-between pt-5 align-items-center'>
                <Link to={'/'}><h1 className='text-white'>get<span>linked</span></h1></Link>
                <ul className="nav ">
                    <li className="nav-item">
                        <a href="#" className="nav-link text-white" aria-current="page">Timeline</a>
                    </li>
                    <li className="nav-item">
                        <a href="#" className="nav-link text-white">Overview</a>
                    </li>
                    <li className="nav-item">
                        <a href="#" className="nav-link text-white">FAQs</a>
                    </li>
                    <Link to={'/contact'} > <li className="nav-item me-5">
                        <img src='/assets/img/Contact.png' className='mt-2 ms-3' height={16} />
                        {/* <a href="#" class="nav-link text-white">Contact</a> */}
                    </li></Link>
                    <Link to={'/register'} ><button className='btn'>Register</button></Link>
                </ul>
            </nav>

            <div className='containerr d-block d-md-flex'>
                <div className='img-reg'>
                    <img src='/assets/img/3d-graphic-designer 1.png' width={600} />
                    <img src='/assets/img/sata gra.png' className='img-A' width={20} height={26} />
                    <img src='/assets/img/starr.png' className='img-B' width={20} height={26} />
                    <img src='/assets/img/star pu.png' className='img-C' width={20} height={26} />
                    <img src='/assets/img/Purple-Lens-Flare-PNG.png' className='shadow-bg' />

                </div>
                <div className='board'>
                    <img src='/assets/img/starr.png' className='img2' width={20} height={26} />

                    <form className='form' onSubmit={handleSubmit}>
                        <h1 className='top-0 left-0 absolute'>Register</h1>
                        <p className='movement'>Be part of this movement! <img src='/assets/img/Part of move (1).png' width={150} height={25} /></p>

                        <h3>CREATE YOUR ACCOUNT</h3>
                        <div className='form-wrap'>
                            <div className='first'>
                                <label htmlFor="Team_name"><b>Team's Name</b></label>
                                <input type="text" placeholder="Enter your group name" name="Team_name" onChange={handleChange} value={userInfo.Team_name || ''} required />

                                <label htmlFor="email"><b>Email</b></label>
                                <input type="email" placeholder="Enter your email address" name='email' value={userInfo.email || ''} onChange={handleChange} required />

                                <label htmlFor="category"><b>Category</b></label>
                                <select name='categorys' onChange={(e) => setCategory(e.target.value)} value={category} required>
                                    <option value='Select your category'>Select your category</option>
                                    <option value='web Development'>Web Development</option>
                                    <option value='mobile Development'>Mobile Development</option>
                                    <option value='Ai Robotics'>Ai Robotics</option>
                                </select>
                            </div>

                            <div className='second'>
                                <label htmlFor="phone_number"><b>Phone</b></label>
                                <input type="text" placeholder="Enter your phone number" name="phone_number" onChange={handleChange} value={userInfo.phone_number || ''} required />

                                <label htmlFor="project_topic"><b>Project Topic</b></label>
                                <input type="text" placeholder="What is your group project topic " value={userInfo.project_topic || ''} name='project_topic' onChange={handleChange} required />

                                <label htmlFor="group_size"><b>Group Size</b></label>
                                <select name='group_size' value={group} onChange={(e) => setGroup(e.target.value)} required>
                                    <option value='Select your category' name='group_size'>Select</option>
                                    <option value='3' name='3'>3</option>
                                    <option value='5' name='5'>5</option>
                                    <option value='8' name='8'>8</option>
                                    <option value='10' name='10'>10</option>
                                </select>
                            </div>

                        </div>

                        <p className='review'>Please review your registration details before submitting</p>

                        <label className='sy'><input type="checkbox" name="privacy_poclicy_accepted" id='myCheck' onClick={handlePrivacy} value={privacy} onChange={(e) => setPrivacy(e.target.checked == false)} /> I agreed with the event terms and conditions  and privacy policy
                        </label>

                        <button type='submit' id='btn-submit' className='button mt-4'
                            disabled={privacy ? true : false}
                        // disabled={loading ? true : false}
                        >

                            {loading ? <Loader /> : "Register now"}
                        </button>
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