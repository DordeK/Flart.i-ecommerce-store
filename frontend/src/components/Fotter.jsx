import React from 'react'
import '../style/Fotter.css'
import InstagramIcon from '@material-ui/icons/Instagram';
import IconButton from "@material-ui/core/IconButton";
import EmailIcon from '@material-ui/icons/Email';
import PhoneIcon from '@material-ui/icons/Phone';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
function Fotter() {
    return (
        <div className='FotterOuterDiv'>
            <div className='Fotter1DivInner'>
                <div className='Fotter2DivInner'>
                    <h4>ustanoviteljice:</h4>
                    <ul>
                        <li>Marijana Kremenovic</li>
                        <li>Lea</li>
                        <li>Danaja</li>
                        <li>Nika</li>
                    </ul>
                </div>
                <div className='Fotter2DivInner'>
                    <h4>Kontakt:</h4>
                    <ul>
                        <li><PhoneIcon style={{fontSize:'16px'}}/>: 040-544-778</li>
                        <li><MailOutlineIcon style={{fontSize:'16px'}} /> flarti@gmail.com</li>
                        <li><i>GSM:</i> 040-544-778</li>
                    </ul>
                </div>
                <div className='Fotter2DivInner'> 
                    <h4>NASLOV3</h4>
                    <ul>
                        <li>a</li>
                        <li>aa</li>
                        <li>aa</li>
                    </ul>
                </div>
            </div>
            <div className='FotterIkoneSpovezavam'>
                    <IconButton>
                        <InstagramIcon/>
                    </IconButton>   
                    <IconButton>
                        <EmailIcon/>
                    </IconButton>  
            </div>
        </div>
    )


}

export default Fotter
