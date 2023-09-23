import React from 'react'

function Faqs() {
    var acc = document.getElementsByClassName("accordion");
    var i;

    for (i = 0; i < acc.length; i++) {
        acc[i].addEventListener("click", function () {
            this.classList.toggle("active");
            var panel = this.nextElementSibling;
            if (panel.style.maxHeight) {
                panel.style.maxHeight = null;
            } else {
                panel.style.maxHeight = panel.scrollHeight + "px";
            }
        });
    }


    return (
        <>
            <div className='faqs-wrapper' id='faqs'>
                <div className='faqs-container'>
                    <div className='faqs'>
                        <img src='assets/img/star pu.png' width={30} height={36} />
                        <h1>Frequently Ask <span>Question</span></h1>
                        <p>We got answers to the questions that you might
                            want to ask about getlinked Hackathon 1.0</p>
                    </div>
                    <div>
                        <button class="accordion">Can I work on a project I started before the hackathon?</button>
                        <div class="panel">
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod si ut aliquip ex ea commodo consequat.</p>
                        </div>
                        <button class="accordion">What happens if I need help during the hackathon?</button>
                        <div class="panel">
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod si ut aliquip ex ea commodo consequat.</p>
                        </div>
                        <button class="accordion">What happens if I don't have an idea for a project?</button>
                        <div class="panel">
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod si ut aliquip ex ea commodo consequat.</p>
                        </div>
                        <button class="accordion">Can I join a team or do I have to come with one?</button>
                        <div class="panel">
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod si ut aliquip ex ea commodo consequat.</p>
                        </div>
                        <button class="accordion">What happens after the hackathon ends</button>
                        <div class="panel">
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod si ut aliquip ex ea commodo consequat.</p>
                        </div>
                        <button class="accordion">Can I work on a project I started before the hackathon?</button>
                        <div class="panel">
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod si ut aliquip ex ea commodo consequat.</p>
                        </div>

                    </div>
                </div>
                <div className='faqs-illus'>
                    <img src='/assets/img/_-2.png' className='img1' />
                    <img src='/assets/img/_-1.png' className='img2' />
                    <img src='/assets/img/_.png' className='img3' />
                    <img src='/assets/img/starr.png' alt='star' className='starr' />

                    <img src='/assets/img/cwok_casual_21 1.png' />
                    <div className='faqs-iilus-star'>
                        <img src='/assets/img/sata gra.png' className='img_5' />
                        <img src='/assets/img/sata gra.png' className='img_4' />
                        <img src='/assets/img/star.png' alt='star' />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Faqs