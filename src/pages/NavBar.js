import React from 'react'

function NavBar() {
    return (
        <>
            <nav className='d-flex justify-content-between pt-5 align-items-center'>
                <h1 className='text-white'>get<span>linked</span></h1>
                <ul class="nav ">
                    <li class="nav-item">
                        <a href="#" class="nav-link text-white" aria-current="page">Timeline</a>
                    </li>
                    <li class="nav-item">
                        <a href="#" class="nav-link text-white">Overview</a>
                    </li>
                    <li class="nav-item">
                        <a href="#" class="nav-link text-white">FAQs</a>
                    </li>
                    <li class="nav-item me-5">
                        <a href="#" class="nav-link text-white">Contact</a>
                    </li>
                    <button className='btn'>Register</button>
                </ul>
            </nav>
            <hr className='text-white' />

        </>
    )
}

export default NavBar