import { Action } from "redux"

export enum typesOfActions{
    ADD_BOOK_SUCCESS='ADD_BOOK_SUCCESS',
    ADD_TO_CART='ADD_TO_CART',
    REMOVE_FROM_CART='REMOVE_FROM_CART',
    ADJUST_QTY='ADJUST_QTY'
}


export type objectBooks={
    id:number,
    img:string,
    title:string,
    author:string,
    about:string,
    price:number,
    qty:number
}

export interface iPayloadAction extends Action<string>{
    payload:objectBooks[]
}
