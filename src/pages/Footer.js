import React from 'react'

function Footer() {
    return (
        <>
            <div className='footer-main'>
                <div className='footer-wrap'>
                    <div className='footer-cont'>
                        <img src='/assets/img/star.png' className='img2' width={20} height={26} />
                        {/* <img src='/assets/img/starr.png' className='img3' width={20} height={26} />
                  <img src='/assets/img/star.png' className='img4' width={20} height={26} /> */}
                        <h1 className='text-white'>get<span>linked</span></h1>
                        <p className='intro'>Getlinked Tech Hackathon is a technology innovation program
                            established by a group of organizations with the aim of showcasing
                            young and talented individuals in the field of technology</p>
                        <p className='term'>Terms of Use <span> Privacy Policy</span> </p>
                    </div>
                    <ul>
                        <img src='/assets/img/starr.png' className='img2' width={20} height={26} />
                        <p className='useful'>Useful Links</p>
                        <li><a>Overview</a></li>
                        <li><a>Timeline</a></li>
                        <li><a>FAQS</a></li>
                        <li><a>Contact</a></li>
                        <div className='follow'>
                            <p>Follow us</p>
                            <div className='social'>
                                <a><img src='/assets/img/mdi_instagram.png' /></a>
                                <a><img src='/assets/img/vector (2).png' /></a>
                                <a><img src='/assets/img/vector (1).png' /></a>
                                <a><img src='/assets/img/ri_linkedin-fill.png' /></a>
                            </div>
                        </div>
                    </ul>
                    <div className='contact'>
                        <p className='c'>Contact us</p>
                        <p className='loc'><img src='/assets/img/Group.png' /> +234 6707653444</p>
                        <div className='address'>
                            <img src='/assets/img/location.png' />
                            <p className='add'> 27,Alara Street<br /> Yaba 100012<br /> Lagos State</p>

                        </div>
                    </div>
                </div>
                <div className='d-flex justify-content-center flex-column align-items-center'>
                    <img src='/assets/img/sata gra.png' className='img2' width={20} height={26} />
                    <p className='text-center text-white pt-4'>All rights reserved. © getlinked Ltd.</p>
                </div>
            </div>
        </>
    )
}

export default Footer