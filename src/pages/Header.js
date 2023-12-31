import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <>
            <div className='header-container'>
                <div className='d '>
                    <img src='/assets/img/star.png' className='fh' width={30} height={30} />
                    <h2 className='text-white'>Ingniting a Revolution in <span>HR Innovation</span></h2>
                </div>

                <div className='header clearfix'>

                    <div className='title'>
                        <div className='star'>
                            <img src='/assets/img/starr.png' className='' width={26} height={32} />
                        </div>

                        <h1>getlinked Tech <img src='/assets/img/Creative 1.png' className='img1' width={30} height={40} /><br />
                            Hackathon <span>1.0</span><img src='/assets/img/chain-9365116-7621444.png' width={50} height={50} /><img src='/assets/img/1f4a5.png' width={30} height={30} />
                        </h1>
                        <img src='/assets/img/Purple-lens-Flare-PNG.png' className='img' width={700} height={700} />

                        <p className='text-white'>Paticipate in getlinked Tech Hackathon 2023 stand
                            a chance to win Big prize
                        </p>
                        <Link to={'/register'}><button className='btn'>Register</button></Link>
                        <div className='star2'>
                            <img src='/assets/img/starr.png' className='' width={26} height={32} />
                        </div>
                        <section className='hu mt-5 text-white'>
                            <div className='time'>00<span> H</span></div>
                            <div className='time'>00<span> M</span></div>
                            <div className='time'>00<span> S</span></div>
                        </section>
                    </div>

                    <div className='man-img'>
                        <img src='/assets/img/man-wearing-smart-glasses-touching-virtual-screen 1.png' alt='man-wearing-smart-glasses' className='smart' />
                        <img src='/assets/img/Purple-lens-Flare-PNG.png' className='img3' width={500} height={600} />
                        <img src='/assets/img/Image 1.png' className='img2' width={570} height={500} />
                    </div>

                </div>
            </div>
        </>
    )
}

export default Header