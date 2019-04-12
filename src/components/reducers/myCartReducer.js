
import fasttrack from '../../assests/images/fasttrack.jpeg'
import gowns from '../../assests/images/gowns.jpg'
import gitar from '../../assests/images/gitar.jpeg'
import iphone from '../../assests/images/iphone.jpeg'
import nike_shoe from '../../assests/images/nike_shoe.jpeg'
import sarees from '../../assests/images/sarees.jpeg'
import {ADD_TO_WISHLIST,REMOVE_ITEM_FROM_WISHLIST, ADD_TO_CART,REMOVE_ITEM,SUB_QUANTITY,ADD_QUANTITY,ADD_SHIPPING} from '../actions/action-types'
const initialState = {
    items: [
        { id: 1, title: 'Fast Track', desc: "Simple and comfortable beet watch frm FasTrack..", price: 777, img: fasttrack },
        { id: 2, title: 'Gowns', desc: "Printed Cotton Blend Anarkali Gown.", price: 316, img: gowns },
        { id: 3, title: 'Gitar', desc: "Bluetooth headphones offer amazing sound quality and powerful bass.", price: 2000, img: gitar },
        { id: 4, title: 'Iphone', desc: "Very nice phone, excellent camera, screen resolution and battery life.", price: 58000, img: iphone },
        { id: 5, title: 'Woodland', desc: "Comfortable , light weight and the build quality is really appreciable.", price: 3000, img: nike_shoe },
        { id: 6, title: 'Sarees', desc: "Beautiful Saree in lowest price.", price: 3600, img: sarees }
    ],


    addedItems:[],
    wishList : [],
    total: 0
}
function myCartReducer(state = initialState, action) {
    if(action.type === ADD_TO_CART){
          let addedItem = state.items.find(item=> item.id === action.id)
          //check if the action id exists in the addedItems
         let existed_item= state.addedItems.find(item=> action.id === item.id);
       
         if(existed_item)
         {
            addedItem.quantity += 1 
             return{
                ...state,
                   total: state.total + addedItem.price 
                  }
        }
         else{
            addedItem.quantity = 1;
            //calculating the total
            let newTotal = state.total + addedItem.price 
            return{
                ...state,
                addedItems: [...state.addedItems, addedItem],
                total : newTotal
            }
            
        }
    }
     if(action.type === ADD_TO_WISHLIST){
        let addedWishListItem = state.items.find(item=> item.id === action.id);
        let existed_wishlist_item = state.wishList.find(item=> action.id === item.id);
         if(existed_wishlist_item){
            let newState = {...state};
            newState.alreadyExist = true;
           // var index = newState.wishList.findIndex( item => item.id === existed_wishlist_item.id );
           // let newWishlistArray = newState.wishList.splice(index,1);
             return newState;
         }else{
              addedWishListItem.alreadyExist = false;
              return{
                ...state,
                wishList: [...state.wishList, addedWishListItem],
              
            }
         }
     }
    if(action.type === REMOVE_ITEM){
        let itemToRemove= state.addedItems.find(item=> action.id === item.id)
        let new_items = state.addedItems.filter(item=> action.id !== item.id)
        
        //calculating the total
        let newTotal = state.total - (itemToRemove.price * itemToRemove.quantity )
        return{
            ...state,
            addedItems: new_items,
            total: newTotal
        }
    }
      if(action.type === REMOVE_ITEM_FROM_WISHLIST){
           let newState = {...state};
           let itemToRemoveFromWishlist= newState.wishList.find(item=> action.id === item.id)
            var index = newState.wishList.findIndex( item => item.id === itemToRemoveFromWishlist.id );
            let newWishlistArray = newState.wishList.splice(index,1);
            return newState;
      
    }
    //INSIDE CART COMPONENT
    if(action.type=== ADD_QUANTITY){
        let addedItem = state.items.find(item=> item.id === action.id)
          addedItem.quantity += 1 
          let newTotal = state.total + addedItem.price
          return{
              ...state,
              total: newTotal
          }
    }
    if(action.type=== SUB_QUANTITY){  
        let addedItem = state.items.find(item=> item.id === action.id) 
        //if the qt == 0 then it should be removed
        if(addedItem.quantity === 1){
            let new_items = state.addedItems.filter(item=>item.id !== action.id)
            let newTotal = state.total - addedItem.price
            return{
                ...state,
                addedItems: new_items,
                total: newTotal
            }
        }
        else {
            addedItem.quantity -= 1
            let newTotal = state.total - addedItem.price
            return{
                ...state,
                total: newTotal
            }
        }
        
    }

    if(action.type=== ADD_SHIPPING){
          return{
              ...state,
              total: state.total + 6
          }
    }

    if(action.type=== 'SUB_SHIPPING'){
        return{
            ...state,
            total: state.total - 6
        }
  }

    return state

}

export default myCartReducer;