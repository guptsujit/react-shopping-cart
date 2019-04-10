import { ADD_TO_WISHLIST,REMOVE_ITEM_FROM_WISHLIST,ADD_TO_CART,REMOVE_ITEM,SUB_QUANTITY,ADD_QUANTITY,ADD_SHIPPING} from './action-types'

//add cart action
export const addToCart= (id)=>{
    return{
        type: ADD_TO_CART,
        id
    }
}

//add product to wishlist
export const addToWishlist= (id)=>{
    return{
        type: ADD_TO_WISHLIST,
        id
    }
}
//remove item action
export const removeItem=(id)=>{
    return{
        type: REMOVE_ITEM,
        id
    }
}
//remove item action
export const removeItemFromWishlist=(id)=>{
    return{
        type: REMOVE_ITEM_FROM_WISHLIST,
        id
    }
}
//subtract qt action
export const subtractQuantity=(id)=>{
    return{
        type: SUB_QUANTITY,
        id
    }
}
//add qt action
export const addQuantity=(id)=>{
    return{
        type: ADD_QUANTITY,
        id
    }
}