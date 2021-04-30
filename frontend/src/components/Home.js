import React,  { useState, useEffect } from 'react'
import 'fontsource-roboto';
import '../style/Home.css'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import IconButton from "@material-ui/core/IconButton";
import { Link } from "react-router-dom";
import useMediaQuery from '@material-ui/core/useMediaQuery'
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination } from 'swiper';
import AOS from 'aos'
import InstagramIcon from '@material-ui/icons/Instagram';
import logo from'../images/flart.png'
import $ from "jquery";
const axios = require('axios').default;

SwiperCore.use([Navigation, Pagination])
AOS.init({
    duration: 1200,
})


export default function Home() {
    const isMobile = useMediaQuery("(max-width:1200px)");
    const isMobileTo1 = useMediaQuery("(max-width:700px)");
    const [igPics, setIgPics]=useState([]);

    
    async function igPicsFetch() {
        await axios.get('http://localhost:9001/scrape')
        .then((response) =>  {
                    setIgPics(response.data.slice(0, 4))
                })
                .catch((err)=>
                    console.log("could not fetch ig Data ---> ", err)
                    )
                }

                
   let HomeProductPictures = [
       <SwiperSlide key='1' >
            <Link  to='/Izdelki/vrece' >
                <div className='HomeVrece HomeProductPicturesPhone'  data-aos="fade-up"  ></div>
            </Link>
            <h1 className='HomeNaslovIzdelkov' style={{marginBottom:'78px'}}>Vrece</h1>
        </SwiperSlide>
   ,

        <SwiperSlide  key='2'>
            <Link  to='/Izdelki/printi' >
                <div className='HomePrinti HomeProductPicturesPhone' data-aos="fade-up" ></div>
            </Link>
            <h1  className='HomeNaslovIzdelkov' style={{'marginBottom':'78px'}}>Printi</h1>
        </SwiperSlide>
    ,
    
        <SwiperSlide key='3'>
            <Link  to='/Izdelki/majice' >
                <div className='HomeMajice HomeProductPicturesPhone' data-aos="fade-up" ></div>
            </Link>
            <h1 className='HomeNaslovIzdelkov' style={{'marginBottom':'78px'}} >Majice</h1>
        </SwiperSlide>
        
   ]
   
   let stSlik
   
   if(isMobileTo1){
       stSlik=1;
    }else{
    stSlik=2;
}

let MobileShopLink = (
    <Swiper
            spaceBetween={0}
            slidesPerView={stSlik}
            pagination
            navigation
            style={{width:'90%','height':'700px'}} // tukaj se nastavlja visina celotnega swiperja v mobile dimenziji
            >
                {HomeProductPictures}
        </Swiper>

    )
    
    let notMobileShopLink =      
    (  
        <div className='HomeSmallImgsFlex' > 
                                <Link className='HomeLinkForShop HomeVrece' data-aos="fade-up" to='/Izdelki/vrece'>
                                    <h1 className='HomeNaslovIzdelkov'  >Vrece</h1>
                                </Link>    
                                

                                <Link  className='HomeLinkForShop HomePrinti' data-aos="fade-up" to='/Izdelki/printi'>
                                    <h1  className='HomeNaslovIzdelkov' >Printi</h1>
                                </Link>    
                                

                                <Link className='HomeLinkForShop HomeMajice' data-aos="fade-up" to='/Izdelki/majice'>
                                    <h1 className='HomeNaslovIzdelkov' >Majice</h1>
                                </Link>    
                            </div>
                        )

        let counterIgImages=0
        let igImages = igPics.map( (url) =>{
                                            counterIgImages++
                                            return(
                                            <a className='HomeIgPicsAtag' key={counterIgImages} data-aos="fade-right" target="_blank" href="https://www.instagram.com/flart.i/?hl=en" >   
                                                <img className='HomeIgPicsAtagImg' style={{width:'100%', 'height':'100%'}} src={url} alt="slika iz instagrama" />
                                                <IconButton className='igic'>
                                                    <InstagramIcon   style={{ fontSize:'25px','color':'black'}}/>
                                                </IconButton>
                                            </a>
                                            )

        })                
                        
    // tale Jqueri mora biti v komponenti zato ker se samo komponenta poklice ko routamo na ta page
    $(window).ready(function(){
        var header = $('.HomeDiv');
        
        var backgrounds = [
            'url(ozadjesedenje.jpg)',
            'url(ozadje5.png)',
            'url(ozadjepaint.jpg)',
        ];
        
        var current = 0;
        function nextBackground() {
            current++;
            current = current % backgrounds.length;
            header.css('background-image', backgrounds[current]);
        }
        
        setInterval(nextBackground, 100000);
        header.css('background-image', backgrounds[0]);
    });
    
    useEffect(()=>{
        // window.scroll({
        //     top: 0,
        //     left: 0,
        //     behavior: 'smooth',
        //   });
        })


        useEffect(()=>{
            igPicsFetch()
        },[])
    
    
    function scrolldown() {
        if(isMobile){
        document.querySelector('#Home2DivId').scrollIntoView();
        }else{
        document.querySelector('#Home2DivIdNotPhone').scrollIntoView();
        }
    }

    
    return ( 
        <div className='HomeOuterMainDiv Ozadje' style={{'paddingBottom':'100px', 'paddingTop':'65px'}}>
        <div className='HomeDiv' onClick={()=>scrolldown()}>
            {/* <h1 style={{'position':'absolute', 'top': '30%','fontSize':'100px','letterSpacing':'10px'}}>flart.i</h1> */}
            {/* <IconButton  >
                <ExpandMoreIcon   style={{'marginBottom': '0px','padding':'80px 80px 20px 80px', fontSize:'80px','color':'black'}}/>
            </IconButton> */}
            <div className="arrow bounce">
                <div className="material-icons-outlined" style={{'marginBottom': '0px','color':'black','fontWeight':'100','fontSize':'100px','cursor':'default'}}>expand_more</div>
                {/* <div className="fa fa-chevron-down fa-4x" onClick={()=>scrolldown()} style={{'marginBottom': '0px','color':'black','fontWeight':'200'}} href="#"></div> */}
            </div>            
        </div>
        <hr id='Home2DivId' style={{margin:'50px 0'}}/>
        { isMobile ? 
            <>
                <br/>
                <br/>
            </>
            :
            <></>
        }

        <div className='Home2Div' id='Home2DivIdNotPhone' style={{paddingTop:'5px'}} >
            {isMobile ? (
                <div className='HomeMobileShopLink'> 
                    {MobileShopLink}
                </div>    
                ) : (notMobileShopLink)}

        </div>

        <hr style={{margin:'50px 0'}}/>
        <div className='HomeIgPicsWhiteBackgound' style={{backgroundColor:'white',display:'flex','margin':'100px auto 0 auto','justifyContent':'center','padding':'20px 10px','width':'90%'}}>
                { isMobile? isMobileTo1?  igImages.slice(0, 2) : igImages.slice(0, 3)  : igImages } 
        </div>
                {/* tole gre na dno spletne strani */}
                <IconButton onClick={()=>window.scrollTo({ top: 0, behavior: 'smooth' })} style={{ 'position':'absolute', 'bottom': '10px', 'right':'0px','zIndex':'10' }} >
                    <ExpandLessIcon style={{'fontSize':'50px'}} />
                </IconButton>
    </div>
    )
}
