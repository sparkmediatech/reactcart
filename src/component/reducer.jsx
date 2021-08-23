import React from 'react'

 const customReducer = (state, action) => {
      
     
     if(action.type === 'CLEAR_SHOPP_CART'){
         return{...state, cart: []}
     }
     if(action.type === 'REMOVE_ITEM'){
         const newProducts = state.cart.filter((singleProduct) => singleProduct.id !== action.payload)
         return{...state, cart: newProducts}
     }

     if(action.type === "INCREASE_PRODUCT"){
         let newValue = state.cart.map((singleProduct) => {
             if(singleProduct.id === action.payload){
                return {... singleProduct, amount: singleProduct.amount + 1}
             }
             return singleProduct

         });
            console.log(newValue)
         return {...state, cart: newValue}

      
     }

     if(action.type === "DECREASE_PRODUCT"){
         let newValue = state.cart.map((singleProduct) => {
             if(singleProduct.id === action.payload){
                return {... singleProduct, amount: singleProduct.amount -1}
             }
             return singleProduct

         }).filter((singleProduct) => singleProduct.amount !== 0)
           
         return {...state, cart: newValue}

      
     }


    if(action.type === 'PRODUCT_TOTAL'){

        let {total, amount} = state.cart.reduce(
            (cartTotal, cartItem) => {
                const {price, amount} = cartItem;
                //calculate the total amount of product in dollar which is gotten by multiplyig price of inidviudal item with the amount of the each time
                const productTotal = price * amount;
                //each time we iterate total object, we added that to the productTotal which is the variable for price multiplied by amount.
                cartTotal.total += productTotal;
                 //this gets the total number of products to the shopping cart by iterating eact cartTotal annd adding it to amount
                cartTotal.amount += amount;
                return cartTotal;
            }, {
            total: 0,
            amount: 0
        })
            total = parseFloat(total.toFixed(2))
        return {... state, total, amount}

    }

    if(action.type === 'LOADING'){
        return{...state, loading: true}
    }

    if(action.type === 'DISPLAY_PRODUCT'){
        return{...state, cart: action.payload, loading: false}
    }

    return state
}

export default customReducer