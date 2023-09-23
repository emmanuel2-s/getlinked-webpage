import React from 'react'

function PolicyTerms() {
  return (
    <>
      <div className='policy-cont'>
        <div className='policy'>
          <img src='/assets/img/starr.png' className='img1' width={20} height={26} />
          <h3>Privacy Policy and <span>Terms</span></h3>
          <p className='updated'>Last updated on September 12, 2023</p>
          <img src='/assets/img/star pu.png' className='img2' width={20} height={26} />

          <p className='outline'>Below are our privacy & policy, which outline a lot of goodies.
            it’s our aim to always take of our participant</p>
          <section>
            <img src='/assets/img/sata gra.png' className='img3' width={20} height={26} />
            <img src='/assets/img/Purple-Lens-Flare-PNG.png' className='img4' width={700} height={700} />
            <div className='privacy'>
              <div className='cont'>
                <p>At getlinked tech Hackathon 1.0, we value your privacy
                  and are committed to protecting your personal information.
                  This Privacy Policy outlines how we collect, use, disclose,
                  and safeguard your data when you participate in our tech
                  hackathon event. By participating in our event, you consent
                  to the practices described in this policy.</p>
                <h4>Licensing Policy</h4>
                <h5>Here are terms of our Standard License:</h5>
                <ul>
                  <li>The Standard License grants you a non-exclusive right to
                    navigate and register for our event</li>
                  <li>You are licensed to use the item available at any free source
                    sites, for your project developement</li>
                </ul>
                <button className='btn'>Read More</button>
              </div>
            </div>
          </section>

        </div>
        <div className='privacy-lock'>
          <img src='/assets/img/star.png' className='img1' width={20} height={26} />
          <img src='/assets/img/vector.png' className='vector' width={530} height={646} />
          <img src='/assets/img/08 1.png' className='lock' />
          <img src='/assets/img/sata gra.png' className='img2' width={16} height={20} />
          <img src='/assets/img/star.png' className='img3' width={16} height={20} />
          <img src='/assets/img/starr.png' className='img4' width={20} height={26} />
        </div>

      </div>
    </>
  )
}

export default PolicyTerms