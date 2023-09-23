import React from 'react'

function Header() {
    return (
        <>
            <hr className='text-white' />

            <div className='d d-flex justify-content-between'>
                <img src='/assets/img/star.png' className='fh' width={30} height={30} />
                <h2 className='text-white'>Ingniting a Revolution in <span>HR Innovation</span></h2>
            </div>

            <div className='d-flex '>

                <div className='title'>
                    <div className='star'>
                        <img src='/assets/img/starr.png' className='' width={26} height={32} />
                    </div>

                    <h1>getlinked Tech <img src='/assets/img/Creative 1.png' className='img1' width={30} height={40} /><br />
                        Hackathon <span>1.0</span><img src='/assets/img/chain-9365116-7621444.png' width={50} height={50} /><img src='/assets/img/1f4a5.png' width={30} height={30} />
                    </h1>
                    <img src='/assets/img/Purple-lens-Flare-PNG.png' className='img' width={700} height={700} />

                    <p className='text-white'>Paticipate in getlinked Tech Hackathon 2023 stand<br />
                        a chance to win Big prize
                    </p>
                    <button className='btn'>Register</button>
                    <div className='star2'>
                        <img src='/assets/img/starr.png' className='' width={26} height={32} />
                    </div>
                    <section className='time d-flex align-items-center mt-5 text-white'>
                        <p className='time'>00<span> H</span></p>
                        <p className='time'>00<span> M</span></p>
                        <p className='time'>00<span> S</span></p>
                    </section>
                </div>

                <div className='man-img'>
                    <img src='/assets/img/man-wearing-smart-glasses-touching-virtual-screen 1.png' alt='man-wearing-smart-glasses' width={700} height={530} />
                    <img src='/assets/img/Purple-lens-Flare-PNG.png' className='img3' width={500} height={600} />
                    <img src='/assets/img/Image 1.png' className='img2' width={570} height={500} />
                </div>

            </div>
            <hr className='text-white' />

        </>
    )
}

export default Header