
import { getBooksAction } from "../actions/booksAction";



export const getBooksEffect = (): any => {

    return (dispatch: any, getState: any) => {
        try{
            const jsonData= require('../../booksData.json'); 
            const res = jsonData.data

            dispatch(getBooksAction(res))
        }catch(e: any){
            console.log("getBooksEffect", e.message);
            
        }
    }
}