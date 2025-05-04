import { useState } from 'react'
import plus from './images/icon-plus.svg'
import minus from './images/icon-minus.svg'
import './App.css';
import { useEffect } from 'react';
/*import product1 from './images/image-product-1-thumbnail.jpg';
import product2 from './images/image-product-2-thumbnail.jpg';
import product3 from './images/image-product-3-thumbnail.jpg';
import product4 from './images/image-product-4-thumbnail.jpg';
*/
import product1Main from './images/image-product-1.jpg';
import product2Main from './images/image-product-2.jpg';
import product3Main from './images/image-product-3.jpg';
import product4Main  from './images/image-product-4.jpg';

import cart from './images/icon-cart.svg';
import avatar from './images/image-avatar.png';
import logo from './images/logo.svg';

function ProductCounter(){
   const [count, setCount] = useState(0)

   return(
    <div>
        <button onClick={()=>
          setCount(count + 1)
        }>
          <img src={plus} className="logo" alt="Vite logo" />
        </button>
  {count}

        <button onClick={()=>{
          if(count>0){
            setCount(count-1);
          }
        }}>
          <img src={minus} className="logo react" alt="React logo" />
        </button>
      </div>
   )
}


function CartButton(){
  return(
    <div>
      <button><img src={cart} className="logo" alt="Vite logo" />Add to cart</button>
    </div>
  )
}

function NavBar(){


  return(
    <div className='navbar'>
      <div className='mainNav'>

     
     <div className='logo'><img src={logo} alt="Vite logo" /></div>
     <div  className='nav_stuffs'>
  <ul className='nav-links'>
      <li><a href='#'  className='stuffs'>Collections</a> </li>
      <li> <a href='#'  className='stuffs'>Men</a> </li>
      <li>  <a href='#'  className='stuffs'>Women</a></li>
      <li> <a href='#'  className='stuffs'>About</a> </li>
      <li>  <a href='#'  className='stuffs'>Contact</a></li>
  </ul>
      
     </div> 
    
    
    
   
     </div>
      <div className='nav_things'>
      <a  href="#" ><img src={cart}  className='things2'  alt="Vite logo" /></a>
      <a  href="#" ><img src={avatar} className='things' alt="Vite logo" /></a>
      </div>
    </div>
  )
}


function Display(){

  const images = [
    product1Main,product2Main,product3Main,product4Main
  ];

const [selectImage,setSelectImage]=useState(images[0]);


  return(
  <div className='display'>


<div className='on_display'>
    <img src={selectImage} className='big' alt="Vite logo" />
  </div>
<div className='to_be_display'>

{images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Product ${index + 1}`}
            className="small"
            onClick={() => setSelectImage(img)}
            style={{
              border: img === selectImage ? '2px solid blue' : 'none',
              borderRadius:'15px', 
              cursor: 'pointer',
              margin: '5px',
              width: '90px'
            }}
          />
        ))}


</div>
</div>
)
  

}


function Text(){
  
  return(
   <div>
    <p>SNEAKER COMPANY</p>
    <h1>Fall limited edition sneaker</h1>
    <p>This low profile sneaker are your perfect casual wear companion.Featuring a durable outer ruber</p>
    <h2>$125</h2>
   </div>
  )
}

function App() {
 

  return (
    <>
  <div className='header'><NavBar/></div>
  <div className='left'><Display/></div>  
  <div  className='rigth'>
    <Text/>
    <div>
      <ProductCounter/>
      <CartButton />
    </div>
    </div>  
    </>
  )
}

export default App
