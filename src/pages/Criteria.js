import React from 'react'

function Criteria() {
    return (
        <>
            <div className='criteria-container' id='criteria'>
                <div className='criteria'>
                    <div className='criteria-img'>
                        <img src='assets/img/star pu.png' width={30} height={36} />
                    </div>
                    <img src='/assets/img/Ellipse 2.png' className='ellipse' />
                    <div className='criteria-illus'>
                        <img src='assets/img/8046554 1.png' />
                        <img src='assets/img/starr.png' className='ss' />
                    </div>
                    <img src='/assets/img/Purple-lens-Flare-PNG.png' className='shadow' width={900} height={600} />
                </div>
                <div className='attributes'>
                    <h1>Judging Criteria <span>Key attributes</span></h1>

                    <p><span className='intro'>Innovation and Creativity:</span> Evaluate the uniqueness and creativity of the
                        solution. Consider whether it addresses a real-world problem in a novel
                        way or introduces innovative features.</p>

                    <p><span className='intro'>Functionality:</span> Assess how well the solution works. Does it perform its
                        intended functions effectively and without major issues? Judges would
                        consider the completeness and robustness of the solution.</p>

                    <p><span className='intro'>Impact and Relevance:</span> Determine the potential impact of the solution
                        in the real world. Does it address a significant problem, and is it relevant
                        to the target audience? Judges would assess the potential social,
                        economic, or environmental benefits.</p>

                    <p><span className='intro'>Technical Complexity:</span> Evaluate the technical sophistication of the solution.
                        Judges would consider the complexity of the code, the use of advanced
                        technologies or algorithms, and the scalability of the solution.</p>

                    <p><span className='intro'>Adherence to Hackathon Rules:</span> Judges will Ensure that the team adhered
                        to the rules and guidelines of the hackathon, including deadlines, use of
                        specific technologies or APIs, and any other competition-specific requirements.</p>
                    <div className='d-flex '>
                        <img src='assets/img/star.png' width={30} height={36} />
                        <button className='btn'>Read More</button>
                        <img src='/assets/img/Purple-lens-Flare-PNG-1.png' className='shadow-side' />

                    </div>
                </div>
            </div>

        </>
    )
}

export default Criteria