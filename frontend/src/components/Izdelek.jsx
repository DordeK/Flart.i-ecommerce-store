import React,  { useState, useEffect } from 'react'
import {  useParams } from 'react-router-dom'
import Commerce from '@chec/commerce.js';
import '../style/Izdelek.css'
import CircularProgress from '@material-ui/core/CircularProgress';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Thumbs } from 'swiper';
import 'swiper/swiper-bundle.css';
import useMediaQuery from '@material-ui/core/useMediaQuery'
import $ from "jquery";


SwiperCore.use([Navigation, Pagination, Thumbs])

const commerce = new Commerce(process.env.REACT_APP_COMMERCE_KEY);


function Izdelek(props) {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    const [izdelek, setIzdelek]=useState();
    const { id } = useParams()
    const isMobile = useMediaQuery("(max-width:800px)");


    const fetchIzdelek = async (izdelekId) =>{
        const fetchedIzdelek = await commerce.products.retrieve(izdelekId)
        setIzdelek(fetchedIzdelek)
    }

    useEffect(()=>{
        if(izdelek === undefined){
        fetchIzdelek(id)
        }
    },[])


if(izdelek){
  
    const ProductPictures=[];
    const thumbs=[];
     
    izdelek.assets.map((asset)=>{
          ProductPictures.push(
                    <SwiperSlide  key={asset.id}  className='IzdelekSwiperSlide' >
                        <img id='MainImg'  className='IzdelekImg' alt={izdelek.name} src={asset.url}/>
                    </SwiperSlide>
                )
               thumbs.push(
                    <SwiperSlide  key={asset.id}   >
                        <img  className='IzdelekSwiperSlideThumbs' alt='' src={asset.url}/>
                    </SwiperSlide>
               ) 
               return ''
            })   
         
            // ko kliknes na sliko izdelka ti odpre sliko in vse ostalo zamegli
            $( document ).ready(function (){
            // Get the modal
            var modal = document.getElementById('myModal');
            
            var modalImg = document.getElementById("img01");

            var captionText = document.getElementById("caption");

            var span = document.getElementsByClassName("close")[0];

            // Get the image and insert it inside the modal - use its "alt" text as a caption
                var img = document.querySelectorAll('#MainImg');
                let keys = Object.keys(img)

                keys.map( key =>{
                    img[key].onclick = function(){
                        modal.style.display = "block";
                        modalImg.src = this.src;
                        captionText.innerHTML = this.alt;
                        }
                })


                // Get the <span> element that closes the modal

                // When the user clicks on <span> (x), close the modal
                span.onclick = function() { 
                modal.style.display = "none";
                }
            })


    return (
<div className='Ozadje' style={{display:'flex','alignItems':'center',justifyContent:'center'}}>    
    <div className='IzdelekOutterDiv '>
            <div className='IzdelekImgDiv'>
                <Swiper 
                    // style ={{border:'1px solid black'}} 
                    thumbs={{ swiper: thumbsSwiper }}
                    spaceBetween={0}
                    slidesPerView={1}
                    pagination
                >
                        {ProductPictures}
                </Swiper>
                <div id="myModal" className="modal">
                    <span className="close">&times;</span>
                    <img className="modal-content" id="img01"/>
                    <div id="caption"></div>
                </div>
                {isMobile ? <Swiper
                            id="thumbs"
                            spaceBetween={0}
                            slidesPerView={3}
                            onSwiper={setThumbsSwiper}
                            >
                                {thumbs}
                            </Swiper> 
                            :
                            <Swiper
                            id="thumbs"
                            spaceBetween={0}
                            slidesPerView={4}
                            style={{'margin':'auto','width':'620px'}}
                            onSwiper={setThumbsSwiper}
                        >
                            {thumbs}
                        </Swiper>   
                }
            </div>    
                <div className='IzdelekDescriptionDiv'>
                    <div className='IzdelekBesedilo'>
                        <h1 style={{fontWeight:'300'}}>{izdelek.name}</h1>
                        <h3 style={{textAlign:'left'}}>Opis:</h3>
                        <hr style={{width:'90%','marginLeft':'10px','margin':'10px 10px 20px 10px'}}/>
                        <div dangerouslySetInnerHTML={{__html:izdelek.description}} className='IzdelekDescriptionBesedilo' />
                    </div> 
                    <div>
                        <p>{izdelek.price.formatted_with_code}</p>
                        <button onClick={() => props.handleAddItemToCart(izdelek.id)}  className='IzdelekKupiBtn' >
                            Dodaj v košarico
                        </button>
                    </div> 
                </div>
    </div>
</div>
    )
}
else{
    return(
    <div className='Ozadje'>
        <CircularProgress className='VrteciStvor'/>
    </div>
    )
}
}

export default Izdelek
