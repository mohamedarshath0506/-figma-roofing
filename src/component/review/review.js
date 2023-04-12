import './review.css'

import leftSide from '../../image/left-side.png'


function Review() {
    return(
        <div>
            <ul>
            <dd className='nested-list'>
            <img src={leftSide}  widt='15'height='15' />
                In Progress
                <li className='idNumber'>ID 10-3865-625</li>
            </dd>
        </ul>
            <div>
                <div className='reviews'>
                    <h1>REVIEW</h1>
                    <div className='reviews-textarea'>
                        <textarea>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labour et 
                            dolore magna aliqua. Ut enim ad minim veniam, quls nostrud exercitation ullamco laboris nisi ut aliquip exercitationea commodo consequat.
                            1. Duis aut irure dolor in reprehendnt in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                            2. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est.
                            3. Sed ut perspiciatis unde omnis is
                        </textarea>
                    </div>
                    <div className='reject-to-send-btn'>
                        <button className='reject'>Reject</button>
                        <button className='ready-to-send'>Ready to Send</button>
                    </div>
                </div>
                <div>

                </div>
            </div>
        </div>
    )
}

export default Review