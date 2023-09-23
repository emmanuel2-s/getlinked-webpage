import React from 'react'

function Timeline() {
    return (
        <>
            <div className='timeline-cont pb-5' id='timeline'>
                <div className='timeline'>
                    <h2>Timeline</h2>
                    <p>Here is the breakdown of the time we anticipate<br />
                        using for the upcoming event.</p>
                </div>
                <div className='col'>
                    <img src='/assets/img/star pu.png' className='col-img' width={30} height={36} />
                    <div className='divide-1'></div>
                    <p className='num'>1</p>

                    <div className='column'>
                        <section className='sec-1'>
                            <h2 className='h2-1'>Hackathon Announcement</h2>
                            <p className='detail-1'>The getlinked tech hackathon 1.0 is formally announced<br />
                                to the general public and teams begin to get ready to register</p>
                        </section>
                        <h3 className='date'>November 18, 2023</h3>
                    </div>

                    <div className='divide-1'></div>
                    <div className='num'>2</div>

                    <div className='column'>
                        <h3 className='d'>November 18, 2023</h3>
                        <section className='sec'>
                            <h2 className='ty'>Teams Registration begins</h2>
                            <p className='details'>Interested teams can now show their interest in the<br />
                                getlinked tech hackathon 1.0 2023 by proceeding to register</p>
                        </section>
                    </div>

                    <div className='divide-1'></div>
                    <p className='num'>3</p>

                    <div className='column'>
                        <section className='sec-1'>
                            <h2 className='h2'>Teams Registration ends</h2>
                            <p className='detail'>Interested Participants are no longer Allowed to<br />
                                register</p>
                        </section>
                        <h3 className='date'>November 18, 2023</h3>
                        <img src='/assets/img/star.png' className='img1' width={26} height={32} />
                    </div>

                    <div className='divide-1'></div>
                    <p className='num'>4</p>

                    <div className='column'>
                        <h3 className='d'>November 18, 2023</h3>
                        <section className='sec'>
                            <h2 className='ty'>Announcement of the accepted<br /> teams
                                and ideas</h2>
                            <p className='details'>All teams whom idea has been accepted into getlinked<br /> tech
                                hackathon 1.0 2023 are formally announced</p>
                        </section>
                    </div>
                </div>

                <div className='divide-1'></div>
                <p className='num'>5</p>

                <div className='column'>
                    <section className='sec-1'>
                        <h2 className='h22'>Getlinked Hackathon 1.0 Offically Begins</h2>
                        <p className='p-detail'>Accepted teams can now proceed to build their<br />
                            ground breaking skill driven solutions</p>
                    </section>
                    <h3 className='date'>November 18, 2023</h3>
                </div>

                <div className='divide-1'></div>
                <p className='num'>6</p>

                <div className='column'>
                    <img src='/assets/img/starr.png' className='img' width={26} height={32} />
                    <h3 className='d'>November 18, 2023</h3>
                    <section className='sec'>
                        <h2 className='ty'>Demo Day</h2>
                        <p className='details'>Teams get the opportunity to pitch their projects to judges.<br />
                            The winner of the hackathon will also be announced on
                            this day</p>
                    </section>
                </div>
            </div>
        </>
    )
}

export default Timeline