
import { AnyAction } from 'redux'
import {objectBooks, typesOfActions} from '../actions/booksActionTypes'
export {typesOfActions} from '../actions/booksActionTypes'

interface IBookDataState{
    books:objectBooks[],
    cart:objectBooks[]
}

const initionalState:IBookDataState={
    books:[],
    cart:[]
}

const booksReducer=(state: IBookDataState = initionalState, action: AnyAction): IBookDataState =>{
    switch(action.type){

        // fetching books
        case typesOfActions.ADD_BOOK_SUCCESS:
            return{
                ...state,
                books:action.payload
            }

            // add to cart
            case typesOfActions.ADD_TO_CART:
                
                const inCart = state.cart.find(item => item.id == action.payload.id ? true : false) 
            return{
                ...state,
                cart: inCart ? state.cart.map(item=>item.id === action.payload.id ? {...item, qty:item.qty +1 } : item) : [...state.cart,action.payload]
            }

            // remove from cart
            case typesOfActions.REMOVE_FROM_CART:
            return{
                ...state,
                cart: state.cart.filter((el) => el.id !== action.payload)
            }
            
            // count Qty
            case typesOfActions.ADJUST_QTY:
            return{
                ...state,
                cart: state.cart.map(item => item.id === action.payload.id ? {...item, qty:action.payload.qty} : item)
            }

        default:
            return state
    }
}
export default booksReducer