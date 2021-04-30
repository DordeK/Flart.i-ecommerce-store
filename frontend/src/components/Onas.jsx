import React from 'react'
import '../style/Onas.css'

export default function Onas() {
    return (
        <div>
            <div className='OnasOuterDiv' style={{'display':'flex','marginTop':'80px','height':'100%'}}>
               <div className='holder'>
                    <img src="ozadje3.jpg" className='Onas1Img' alt="slika"/>
                </div>    
                    <p className='OnasBesedilo'> 
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
            </div>
            <hr/>

            <div className='OnasOuterDiv OnasReverse' style={{'display':'flex','height':'100%'}}>
                    <p className='OnasBesedilo'> 
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                <div className='holder'>
                    <img src="ozadje3.jpg" className='Onas1Img' alt="slika"/>
                </div>    
            </div>  
        <hr/>
            
            <div className='OnasOuterDiv' style={{'display':'flex','height':'100%'}}>
                <div className='holder'>
                    <img src="ozadje3.jpg" className='Onas1Img' alt="slika"/>
                </div>    
                        <p className='OnasBesedilo'> 
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
            </div>
        </div>
    )
}
