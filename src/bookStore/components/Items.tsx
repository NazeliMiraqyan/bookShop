import React,{useEffect,useState} from 'react'
import { useDispatch } from 'react-redux'
import { useAppSelector } from '../redux/store'
import styled from 'styled-components'
import { addToCart } from '../redux/actions/booksAction'
import { Link } from 'react-router-dom'
import { getBooksEffect } from '../redux/effects/book.effect'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Items:React.FC=()=>{

  const {books} = useAppSelector(state => state.data)
  const [open,setOpen]=useState<boolean>(false)

  const dispatch = useDispatch()
   
  useEffect(()=>{
      dispatch(getBooksEffect())
  },[]);

  const notify = ():void => {
    toast.success("added to Cart!", {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 1000
  })
  }

  const addToCartPage=(obj:object):void=>{
      setOpen(true)
      dispatch(addToCart(obj))
   
  }
  
  useEffect(()=>{
   if(open){
        notify()
   }
});
  
  const Div=styled.div`
    display:flax;
    flex-wrap:wrap;
    justify-content: center;
    
  `
  const ItemDiv=styled.div`
    width:250px;
    border:1px solid #92a8d1;
    margin:15px;
    text-align:center;
    overflow: hidden;
    padding:15px;
    cursor:pointer;
  `
const ItemImg=styled.img`
    max-width:100%;
    max-height:200px;
`
const ItemButton=styled.button`
    border:none;
    background-color: #92a8d1;
    padding:5px 25px;
    color:#fff;
    cursor:pointer;    
`
    return(
        <Div>
           
           {books.length ? books.map((el,i)=>{
               
               return(
                    <ItemDiv key={i}>
                        <Link to={`cart/${el.id}`}>
                            <h4>{el.title}</h4>
                            <ItemImg src={el.img}/>
                       </Link>
                            <p>{el.author}</p>
                            <p>{el.price+'$'}</p>
                            
                       <ItemButton onClick={()=>addToCartPage(el)}>Add</ItemButton>
                       
                   </ItemDiv>  
               )
           }) : null}
          <ToastContainer />
        </Div>
    )
}
export default Items