import React, {useState, useContext, useReducer, useEffect} from 'react';
import cartData from '../component/data';
import customReducer from './reducer';
const productURL = 'https://course-api.com/react-useReducer-cart-project'


const Appcontext = React.createContext();

const initialState = {
    loading: false,
    cart: [],
    total: 0,
    amount: 0,

}



const AppProvider = ({children}) =>{

    const [state, dispatch] = useReducer(customReducer, initialState);

    const clearShopCart = () =>{
        dispatch({type: 'CLEAR_SHOPP_CART'})
    }

    const removeProduct = (id)=>{
        dispatch({type: 'REMOVE_ITEM', payload: id})
    }

    const increaseProduct = (id) =>{
        dispatch({type: 'INCREASE_PRODUCT', payload: id})
    }

    const decreaseProduct = (id) =>{
        dispatch({type: "DECREASE_PRODUCT", payload: id})
    };

    //load the external api

    const fetchProduct = async () =>{
        dispatch({type: 'LOADING'});
        const response = await fetch(productURL)
        const cart = await response.json();
        dispatch({type: 'DISPLAY_PRODUCT', payload: cart})
    }

    useEffect(() => {
       fetchProduct()
        
    }, [])

    useEffect(() => {
   
    dispatch({type: 'PRODUCT_TOTAL'})
   
}, [state.cart])
    return(
        <Appcontext.Provider value={{... 
        state,
        clearShopCart,
         clearShopCart,
         removeProduct,
         decreaseProduct,
         increaseProduct,
        }}>
                {children}
        </Appcontext.Provider>
    )

}

export const useGlobalContext = () =>{
    return useContext(Appcontext)
}

export {Appcontext, AppProvider}