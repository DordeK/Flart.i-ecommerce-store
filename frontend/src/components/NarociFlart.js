import React from 'react'
import '../style/NarociFlart.css'
import IconButton from '@material-ui/core/IconButton';
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import $ from "jquery";


export default function NarociFlart() {


    function previewImage( image ) {
        let fileImage = image.files[0];
        console.log(fileImage);
        let reader = new FileReader();
        console.log(image);
    
        reader.addEventListener( "load", function() {
            // convert image file to base64 string
            // let base64 = reader.result.split(",")[1]  <-- tukaj izrezemo samo base64 vrednost iz stringa vendar potem nedela search
            let base64 = reader.result.split(",")[1]
            // console.log(base64);
        }, false );
    

        if ( fileImage ) {reader.readAsDataURL( fileImage );}
    
    }
    $( document ).ready(function (){
        document.getElementById("icon-button-file").addEventListener( "change", function() {
            previewImage(this);
            }
          )}
        )
    

    return (
    <div className='Ozadje' style={{padding:'30px 0'}} >
        <div className='NarociFlartTopMargin'>
        <h1 className='NarociFlartH1'>Naroči flart</h1>
        <div className='NarociFlartOuterDiv' encType='multipart/form-data'>
            
            <div className='NarociFlartDropImg' data-aos="fade-right">

                <label htmlFor="icon-button-file">
                    <IconButton color="primary" aria-label="upload picture" component="span">
                        <PhotoCamera fontSize="large" className="PhotoCamera" />
                    </IconButton>
                </label>
                <input style={{position:'absolute','top':'100%','left':'30%'}} accept="image/*"  name='img' id="icon-button-file" type="file" required/>

            </div>

            <div className='NarociFlartInfo'data-aos="fade-right" >
                
                    <label >Ime in Priimek:</label><br/>
                    <input type="text" id="imePriimek" style={{'border':'none'}} name="imePriimek" placeholder='  ime in priimek:' required/><br/> 

                    <label >E-mail:</label><br/>
                    <input type="email" id="email" style={{'border':'none'}} name="email" placeholder='  E-mail:' required/><br/>

                    <label >Naslov:</label><br/>
                    <input type="text" id="naslov" style={{'border':'none'}} name="naslov" placeholder='  Naslov:' required/><br/> 

                    <label >Željena barva ozadja: (optional)</label><br/>
                    <input type="color" id="barvaOzadja" style={{'border':'none'}} name="barvaOzadja" /><br/>

                    <label >Željena barve : (optional)</label><br/>
                    <input type="color" id="barva1" style={{'border':'none'}} name="barva1" /><br/>

                    <label >Željena Barve: (optional)</label><br/>
                    <input type="color" id="barva2" style={{'border':'none'}} name="barva2" /><br/> 

                    <label >Telefonska številka:</label><br/>
                    <input type="tel" id="telNum" style={{'border':'none'}} name="telNum" placeholder='  XXX-XXX-XXX:' pattern="[0-9]{3}-?[0-9]{3}-?[0-9]{3}" required/><br/>

                    <input type="submit" className='NarociFlartNarociBtn'   style={{'height':'50px', 'width': '50%'}} value="Dodaj v košarico"/> 
                    
            </div>  

        </div>
        </div>
    </div>
    )
}
