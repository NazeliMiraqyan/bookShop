import {  objectBooks, iPayloadAction, typesOfActions } from "./booksActionTypes"
export {typesOfActions} from '../actions/booksActionTypes'


export const getBooksAction = (payload: objectBooks[]): iPayloadAction => ({
    type: typesOfActions.ADD_BOOK_SUCCESS,
    payload
})

export const addToCart=(itemObj:object)=>{
    return{
        type:typesOfActions.ADD_TO_CART,
        payload:itemObj
    }         
}

export const removeToCart=(itemId:number)=>{
    return{
        type:typesOfActions.REMOVE_FROM_CART,
        payload:itemId 
    }       
    
}

export const adjuctQty=(itemId:number,value:number)=>{
    return{
        type:typesOfActions.ADJUST_QTY,
        payload:{
            id:itemId,
            qty:value
        } 
    }
         
    
}
