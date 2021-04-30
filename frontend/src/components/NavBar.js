import React from 'react'
import { Link } from "react-router-dom";
import '../style/NavBar.css'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { List, Badge  } from '@material-ui/core';
import Drawer from '@material-ui/core/Drawer';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import logo from'../images/flart.png'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
var $ = require( "jquery" );




function NavBar({cartData}){
    const isMobile = useMediaQuery("(max-width:800px)");
    const [open, setOpen] = React.useState(false)
    const [openIzdelki, setOpenIzdelki]=React.useState(false)

    
    
    // odkrivanje in zakrivanje navbara ob skrolanju
    $(window).ready(function () {
        var HomeOuterDivTop = $('.HomeOuterDiv').css('top');
        var HomeOuterDiv = $('.HomeOuterDiv');
        
        if(HomeOuterDivTop === "0px"){
            var prevScrollpos = window.pageYOffset;
            window.onscroll = function() {
            var currentScrollPos = window.pageYOffset;
              if (prevScrollpos > currentScrollPos) {
                HomeOuterDiv.css('top', '0px');
              } else {
                HomeOuterDiv.css('top', '-81px');
              }
              prevScrollpos = currentScrollPos;
       }
    }
      });

    
    
    const handleDrawerClose=()=>{
        setOpen(false)        
    }
    
    // funkcija ki v mobilnem pogledu in navigacijsko vrstico in izdelke dropdown
    const hideNavBarMobile = () => {
        setOpen(false)        
        setOpenIzdelki(false)
    }

    const CartBadge =(
                    <IconButton aria-label="cart" component={Link} to='/cart' onClick={handleDrawerClose} >
                        <Badge badgeContent={cartData.total_items} color="secondary"  className='NavBarShopingCartBadge'>
                            <ShoppingCartIcon  style={{fontSize:'30px'}}  />
                        </Badge>
                    </IconButton> 
    )
    


let LinksVar =(
    <div style={{'textAlign':'left'}}>
        <Link to="/" onClick={handleDrawerClose} className='HomeLinksMobile'>Home</Link>
        <Link to="/Onas" className='HomeLinksMobile' >O nas</Link>
        <Link to='/narociFlart' onClick={handleDrawerClose} className='HomeLinksMobile'>Naroci Flart</Link>
        <p className='NavBarIzdelkiDropdownBTN' style={{'display':'flex', 'justifyContent':'left'}} onClick={()=> setOpenIzdelki(!openIzdelki)}  >
                                     <a className='HomeLinks'  style={{'fontSize':'20px'}}>Izdelki</a>
                                     {openIzdelki ? (
                                         <ExpandLessIcon style={{'padding':'0px', 'marginLeft':'-10px','marginTop':'0px', 'color':'black'}}/>
                                     ):(
                                        <ExpandMoreIcon style={{'padding':'0px', 'marginLeft':'-10px' ,'marginTop':'0px' , 'color':'black'}} />
                                     )}
        </p>       
                                {openIzdelki ? (
                                    <ul className='NavBarIzdelkiDropdownMobile' >
                                        <Link to='/Izdelki/printi' className='NavBarDropDownLink' onClick={hideNavBarMobile}>printi</Link>
                                        <Link to='/Izdelki/vrece' className='NavBarDropDownLink' onClick={hideNavBarMobile}>vreče</Link>
                                        <Link to='/Izdelki/majice' className='NavBarDropDownLink' onClick={hideNavBarMobile}>majice</Link>
                                    </ul>   
                                ):(<></>)}
        
    </div>
)
console.log();
   
        return(
                
                <div className='HomeOuterDiv' style={{}}>

                    <Link className='HomeInnerDivs' to='/' >
                        <div className="HomeTitleDiv">
                            <img src={logo} alt="logo" className="HomeTitleImg"/>
                            <h1  className="HomeTitleH1"  >flart.i</h1>
                        </div>
                    </Link>
                
                    <div className='HomeInnerDivs' > 
                    { !isMobile ? (
                        <>
                            <Link to="/" className='HomeLinks' >Home</Link>
                            <Link to="/Onas" className='HomeLinks' >O nas</Link>
                            <Link to='/narociFlart' className='HomeLinks' >Naroci Flart</Link>
                            <p className='NavBarIzdelkiDropdownBTN' style={{'display':'flex', 'justifyContent':'center'}} onClick={()=> setOpenIzdelki(!openIzdelki)}  >
                                     <a className='HomeLinks' style={{'cursor': 'default'}}>Izdelki</a>
                                     {openIzdelki ? (
                                         <ExpandLessIcon style={{'padding':'0px', 'marginLeft':'-10px', 'color':'black'}}/>
                                     ):(
                                        <ExpandMoreIcon style={{'padding':'0px', 'marginLeft':'-10px', 'color':'black'}} />
                                     )}
                                 </p>       
                                {openIzdelki ? (
                                    <ul className='NavBarIzdelkiDropdown' >
                                        <Link to='/Izdelki/printi' className='NavBarDropDownLink' onClick={()=> setOpenIzdelki(false)}>printi</Link>
                                        <Link to='/Izdelki/vrece' className='NavBarDropDownLink' onClick={()=> setOpenIzdelki(false)}>vreče</Link>
                                        <Link to='/Izdelki/majice' className='NavBarDropDownLink' onClick={()=> setOpenIzdelki(false)}>majice</Link>
                                    </ul>   
                                ):(<></>)}
                            {CartBadge}
                        </>
                    ):(
                    <>
                            {CartBadge}
                            <IconButton edge="start" color="inherit" aria-label="menu" onClick={() =>{setOpen(true)}}>
                                <MenuIcon fontSize="large" />
                            </IconButton>

                            <Drawer
                            variant="persistent"
                            anchor="right"
                            open={open}
                            >
                    
                            <List style={{'width':'200px'}}>
                                <IconButton onClick={ hideNavBarMobile } >
                                   <ChevronRightIcon fontSize="large" />
                                </IconButton>
                                    {LinksVar}
                            </List>

                            </Drawer>
                            
                    </>             
                    )   
                    }   
                        </div>

                 </div> 
        )
    }


    



export default NavBar
