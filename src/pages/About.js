import React from 'react'

function About() {
    return (
        <>

            <div className='abbb d-md-flex align-items-md-center justify-content-md-center mb-5 d-sm-block'>
                <img src='/assets/img/sata gra.png' alt='sata gra' className='sata' width={21} height={25} />
                <div className='about'>
                    <img src='/assets/img/the big idea 1.png' className='imgg1' width={400} height={400} />
                    <img src='/assets/img/the big idea!.png' className='imgg' width={60} height={70} />
                    <img src='/assets/img/arrow.png' className='imgg2' width={60} height={70} />
                </div>
                <section className='about-sect'>
                    <img src='/assets/img/star pu.png' alt='' width={30} height={36} />
                    <h3>Introduction to getlinked</h3>
                    <h4>tech Hackathon 1.0</h4>
                    <p>Our tech hackathon is a melting pot of visionaries, and its purpose is as<br />clear as day: to shape the future. whether you are a coding genuis, a<br />design maverick, or a concept wizard, you'll have the chance to transform<br />yourideas into reality.solving real-world problems. pushing the boundaries<br />of technology,and creating solution that will change the world,<br />that's what we are all about!</p>
                </section>
            </div>

        </>
    )
}

export default About