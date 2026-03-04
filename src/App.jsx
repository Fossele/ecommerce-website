import { useState } from 'react'
import plus from './images/icon-plus.svg'
import minus from './images/icon-minus.svg'
import './App.css';

//is there a better way to access all this images?

import product1 from './images/image-product-1-thumbnail.jpg';
import delet from './images/icon-delete.svg';
import close from './images/icon-close.svg';
import next from './images/icon-next.svg';
import prev from './images/icon-previous.svg';
/*import product2 from './images/image-product-2-thumbnail.jpg';
import product3 from './images/image-product-3-thumbnail.jpg';
import product4 from './images/image-product-4-thumbnail.jpg';
*/
import product1Main from './images/image-product-1.jpg';
import product2Main from './images/image-product-2.jpg';
import product3Main from './images/image-product-3.jpg';
import product4Main from './images/image-product-4.jpg';

import cart from './images/icon-cart.svg';
import avatar from './images/image-avatar.png';
import logo from './images/logo.svg';

function ProductCounter() {
  const [count, setCount] = useState(0)

  return (
    <div className='handle'>
      <button onClick={() =>
        setCount(count + 1)
      }>
        <img src={plus} className="logo" alt="add items to the list" />
      </button>
      {count}

      <button onClick={() => {
        if (count > 0) {
          setCount(count - 1);
        }
      }}>
        <img src={minus} className="logo react" alt="remove items from the list" />
      </button>
    </div>
  )
}


function Drop({ count }) {

  return (


    <div className='dropdown-content'>
      <p>Cart</p>

      {(count > 0) &&
        <>
          <div> <img src={product1} className="smaller" alt="React logo" />fall limited edition sneakers <p> {count} X 123.5frs = {count * 124}frs</p><img src={delet} alt="React logo" /></div>
          <button className='orange'>checkout</button>
        </>
      }

    </div>
  )
}

function CartButton() {

  return (
    <div>
      <button className='orange'><img src={cart} className="logo" alt="Vite logo" />Add to cart</button>
    </div>
  )
}

function NavBar() {


  return (
    <div className='navbar'>
      <div className='mainNav'>


        <div className='logo'><img src={logo} alt="Vite logo" /></div>
        <div className='nav_stuffs'>
          <ul className='nav-links'>
            <li><a href='#' className='stuffs'>Collections</a> </li>
            <li> <a href='#' className='stuffs'>Men</a> </li>
            <li>  <a href='#' className='stuffs'>Women</a></li>
            <li> <a href='#' className='stuffs'>About</a> </li>
            <li>  <a href='#' className='stuffs'>Contact</a></li>
          </ul>

        </div>




      </div>
      <div className='nav_things'>
        <a href="#" className='dropdown'><img src={cart} className='things2' alt="on my cart" /><div>2</div>
          <Drop count="1" />
        </a>

        <a href="#" ><img src={avatar} className='things' alt="Vite logo" /></a>

      </div>
    </div>
  )
}


function Display() {

  const [open, setOpen] = useState(false);
  const [counting, setCounting] = useState(0);


  const images = [
    product1Main, product2Main, product3Main, product4Main
  ];

  const [selectImage, setSelectImage] = useState(images[0]);
  const [selectLigthBoxImage, setSelectLigthBoxImage] = useState(images[0]);

  return (
    <div className='display'>


      <div className='on_display'>
        <img src={selectImage} className='big' alt="Vite logo"
          onClick={() => { setOpen(true); setSelectLigthBoxImage(selectImage) }}
        />
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
              border: img === selectImage ? '3px solid orange' : 'none',
              borderRadius: '15px',
              cursor: 'pointer',
              margin: '5px 0',
              width: '90px',
              height: '90px',
              backgroundColor: img === selectImage ? 'white' : 'none',
              filter: img === selectImage ? 'opacity(0.5)' : 'none',
            }}
          />
        ))
      }

        


        {/*The set below is for the vitrine effect(Light bix image) */}

        {open &&
          <div className='lightbox'>

            <div className='on_display'>

              <button onClick={() => setOpen(false)}><img src={close} className='things' alt="close button" /> </button>

              <img src={selectLigthBoxImage} className='big' alt="light box" />
   
              <button onClick={
              
                () => {
                  setCounting(counting - 1);

                  if (counting <= 0) {
                    setCounting(3);
                  }
                  setSelectLigthBoxImage(images[counting]);

                }}  ><img src={prev} alt="load previous image btn" />
              </button>

              <button
            
                onClick={
                  () => {

                    setCounting(counting + 1);
                    if (counting >= 3) {
                      setCounting(0);
                    }
                    setSelectLigthBoxImage(images[counting]);
                  }}>
                <img src={next} alt="load next image btn" />
              </button>

            
            </div>

            <div className='to_be_display'>

              {
              images.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`Product Main ${index + 1}`}
                  className="small"
                  onClick={() => { setSelectLigthBoxImage(image) }}
                  style={{
                    border: image === selectLigthBoxImage ? '3px solid orange' : 'none',
                    borderRadius: '15px',
                    cursor: 'pointer',
                    margin: '5px 0',
                    width: '90px',
                    height: '90px',
                    backgroundColor: image === selectLigthBoxImage ? 'white' : 'none',
                    filter: image === selectLigthBoxImage ? 'brigthness(1.5)' : 'none',
                  }}
                />
              ))
              }

            </div>
          </div>
        }


      </div>
    </div>
  )


}


function Text() {

  return (
    <div>
      <p>SNEAKER COMPANY</p>
      <p>Fall limited edition <br /> sneaker</p>
      <p>This low-profile sneakers are your perfect casual wear <br /> companion. Featuring a durable outer ruber sole, they'll <br />withstand everything the weather can offer.</p>
      <p>$125</p>
    </div>
  )
}

function App() {


  return (
    <div className='myapp'>
      <div className='header'><NavBar /></div>
      <div className='left'><Display /></div>
      <div className='rigth'>
        <Text />
        <div className='cool'>
          <ProductCounter />
          <CartButton />
        </div>
      </div>
    </div>
  )
}

export default App
