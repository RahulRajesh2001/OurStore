import axios from 'axios'
import {CART_ADD_ITEM,CART_REMOVE_ITEM, CART_SAVE_PAYMENT_METHOD, CART_SAVE_SHIPPING_ADDRESS} from '../Constants/cartConstants'

export const addToCart=(id,qty)=>async(dispath,getState)=>{

    const{data} = await axios.get(`/api/products/${id}`)

    dispath({
        type:CART_ADD_ITEM,
        payload:{
            product:data._id,
            name:data.name,
            image:data.image,
            price:data.price,
            countInStock:data.countInStock,
            qty
        }
    })
localStorage.setItem('cartItems',JSON.stringify(getState().cart.cartItems))
}

export const removeFromCart =(id)=>(dispath,getState)=>{
    dispath({
        type:CART_REMOVE_ITEM,
        payload:id
    })
    localStorage.setItem('cartItems',JSON.stringify(getState().cart.cartItems))
}

export const saveShippingAddress=(data)=>(dispath)=>{
    dispath({
        type:CART_SAVE_SHIPPING_ADDRESS,
        payload:data,
    })
    localStorage.setItem('shippingAddress',JSON.stringify(data))
}

export const savePaymentMethod=(data)=>(dispath)=>{
    dispath({
        type:CART_SAVE_PAYMENT_METHOD,
        payload:data,
    })
    localStorage.setItem('paymentMethod',JSON.stringify(data))
}