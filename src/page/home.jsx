import React from 'react';
import './home.css';
import {HiShoppingCart} from 'react-icons/hi';
import Data from '../component/data';
import {MdKeyboardArrowUp} from 'react-icons/md';
import {RiArrowDownSLine} from 'react-icons/ri'

export default function Home() {
    return (
        <>
        <section className='section1' >
            <div className='container'>
                <header className='header'>
                <h2 className='pageTitle'>Shopping Cart App</h2>

                <div className='cart-container'>
                     <div className='cart-figure'>
                        <h5>3</h5>
                    </div>
                    <HiShoppingCart className='shopping-cart'/>
                   
                </div>
        
            </header>
            </div>
        </section>

        <section className='container2 product-section'>
            <h1 className='cartBag'>Products</h1>

           {Data.map((singleData) => {
               const {id, title, price, img} = singleData;
               return(
                   <>
                   <div key={id} className='product-container'>
                       <div className='img-container'>
                            <img src={img} alt={title} />
                            <div className='product-text-container'>
                                <h4>{title}</h4>
                                < h4>${price}</h4>
                                <h5 className='btn1'>Remove</h5>
                            </div>

                        </div>
                       
                       <div className='item-control'>
                            <MdKeyboardArrowUp className='iconUp'/>
                            <p>1</p>

                            <RiArrowDownSLine className='iconDown'/>

                       </div>
                        
                    
                   </div>

                 
                   
                   </>
               )

               
           })}


                <hr className='line' />
             <div className='total-text-container'>
                        <h5 className='total'>Total</h5>

                        <h5 className='totalNum'>$2199.99</h5>
                   </div>

                   <div className='btn-clear'><button className='btn'>Clear</button></div>
        </section>

        </>
    )
}
