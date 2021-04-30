import React, { useState, useEffect } from 'react'
import Commerce from '@chec/commerce.js';

import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import IconButton from '@material-ui/core/IconButton';
import CircularProgress from '@material-ui/core/CircularProgress';
import '../style/Izdelki.css'
import { Link } from "react-router-dom";


require('dotenv').config()


const commerce = new Commerce(process.env.REACT_APP_COMMERCE_KEY);

let counter=0

export default function Izdelki(props) {
    const [products, setProducts] = useState([])

    window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth',
      });

    console.log(counter,'<----counter');
    counter++;
    
    // funkcija za fetchanje podatkov o produktu na commerce.js 
    const fetchProducts = async () =>{
        
        const filtrirano = await commerce.products.list().then((product) => {
            return product.data.filter( item => item.categories[0].name === props.kategorija )
        });
        console.log(filtrirano,"<-----filtrirano");                       
        setProducts(filtrirano)   
    }
    
    
    
    
    useEffect(()=>{
        console.log('it is in use Effect');
        fetchProducts()
    },[])

    console.log(products.length,'<------priducts.length');
    
    if(products.length === 0){
        console.log('it goes in CircularProgress');
        return( 
            <div className='Ozadje'>
            <CircularProgress className='VrteciStvor'/>
        </div>
       )
    }else{
        //  ustavri jsx za vasak produkt (mapamo skozi use produkte usakemu dodelimo dolecemo strukturo) 
        const productsCard = products.map((item)=>{ 
            return(
            <div className='IzdelkiCardTag IzdelkiCard'  key={item.id}  >
                    <div className="IzdelkiDivSizinsImg">
                        <a type='button' href={item.checkout_url.display}  className='IzdelkiBtnVIzdelku' >
                            Kupi
                        </a>

                        <Link className='IzdelkiBtnVIzdelku' to={`/Izdelek/${item.id}`} style={{'marginTop':'70px'}}  > 
                            OGLED IZDELKA
                        </Link> 
                        <img alt='slika izdelka'  className='IzdelkiCardMedia' component="img" title={item.name} src={item.media.source}/>
                    </div>
                <div style={{'display':'flex', 'flexDirection':'column', 'justifyContent':'center', 'textAlign':'center'}}> 
                    <p style={{color:'black', fontWeight:'900', fontFamily:'Verdana'}}>{item.name}</p>
                    <div >  
                        <a href="/#" style={{color:'grey',fontFamily:'Verdana'}}>{item.price.formatted_with_symbol}</a>
                        <IconButton color="primary" aria-label="add to shopping cart"  onClick={() => props.handleAddItemToCart(item.id)} >
                            <AddShoppingCartIcon />
                        </IconButton>
                    </div>
                </div>
            </div>     
        )})


        return (
       <div className='Ozadje' style={{paddingBottom:'100px',paddingTop:'100px'}}>     
            <div className='TopMargin' >
                <h1  style={{textAlign:'center', margin: '150px 0 100px 0px', fontSize: '50px', color:'black', 'letterSpacing': '10px','fontWeight':'400'}}>{props.kategorija}</h1>
                <hr className='CartLineHR' />
                    <div className='IzdelkiOuterDiv' >
                        {productsCard}
                    </div>
                <hr className='CartLineHR' style={{marginBottom:'0'}} />
            </div>
        </div>
        )
    }
}
