import React from 'react'
import CircularProgress from '@material-ui/core/CircularProgress';
import RemoveShoppingCartIcon from '@material-ui/icons/RemoveShoppingCart';
import { Link } from "react-router-dom";



import IconButton from '@material-ui/core/IconButton';
import '../style/Cart.css'


function Cart({cartData, HandleRemoveCart}) {
    if(cartData.length !== 0){
    let izdelkiVKosarici = cartData.line_items.map((item)=>{
        return(                
            <div  className='CartCardItem' key={item.id}>
                <Link to={`/Izdelek/${item.product_id}`} className='CartLinkTag'>
                     <img src={item.media.source} className='CartCartMedia' alt='izdelek'/>
                 </Link>    
                                <h3 style={{'marginLeft':'20px'}}>{item.name}</h3>
                                <p style={{'marginLeft':'35px'}} ><b>Quantity</b>: {item.quantity} </p>
                            <div className='CartRemoveItemIcon' >
                                <IconButton style={{'padding':'30px'}}   color="primary" aria-label="add to shopping cart"  onClick={()=>HandleRemoveCart(item.id)} >
                                    <RemoveShoppingCartIcon fontSize="inherit"  />
                                </IconButton>
                            </div>
            </div>   
            )
        })
        
            if(cartData.line_items.length === 0) { 
                return(  
            <div className='Ozadje'>        
                <div className='TopMargin' >paddingTop
                    <div style={{'display': 'flex', justifyContent:'center', alignItems:'center','flexDirection':'column','height':'100vh'}} >
                        <h1 style={{fontSize:'40px','fontWeight':'300','textAlign':'center'}} >No items in the cart go back to shop</h1>
                        <Link to='/izdelki/printi'>Izdelki</Link>
                    </div>
                </div>
            </div>        
                )
            }else{
                return(
        <div className='Ozadje'  style={{paddingBottom:'100px',paddingTop:'100px'}}>        
            <div className='TopMargin CartFullHeight'>
            <h1 className='CartTitle'>Tvoja košarica</h1>
              <div className='CartOutterDiv' >
                       
                        <div className='CartItemsDiv'>   
                            {izdelkiVKosarici}
                        </div>


                        <div className='CartCheckoutDiv'>
                            <div>
                                <h1 style={{'textAlign':'center','marginBottom':"50px"}}>Skupni znesek</h1>
                            
                                {cartData.line_items.map((item)=>{
                                    return(
                                    <div key={item.id}>    
                                        <p key={item.id}><b>{item.name}</b> {item.price.formatted_with_code}</p>
                                        <br/>
                                    </div>
                                    )
                                })}
                            </div>
                            <hr className='CartLineHR' />
                            <div className='CartPlacilo'>
                                <p><b>Skupni znesek vklj. DDV</b>: {cartData.subtotal.formatted_with_code}</p>
                                <a type='button' color="primary" href={cartData.hosted_checkout_url} className='CartCheckoutButton'>
                                    Checkout
                                </a>
                            </div>
                        </div>
               </div> 
            </div>        
        </div>
        )
    }
    }else{
    
        return (
            <div className='Ozadje' >
             <CircularProgress className='VrteciStvor'/>
            </div>
        )
    }
}

export default Cart
