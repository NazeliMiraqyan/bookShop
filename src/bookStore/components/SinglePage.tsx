import { useParams } from "react-router-dom"
import { useSelector } from 'react-redux'
import { RootStore } from '../redux/store'
import styled from 'styled-components'

const SinglePage:React.FC = () =>{

    const select = useSelector((state:RootStore)=> state.data.books)
  
    const {id} = useParams()

    let singleItem = select.find((el:any, i)=> el.id == id);

    const Div = styled.div`
        width:650px;
        display: flex;
        align-items: center;
        flex-direction: column;
        margin:0 auto;
    `
    const P = styled.p`
         font-size:20px;
         text-align:center;
    `
    return(
        <Div>
            <h1>{singleItem?.title}</h1>
            <img src={singleItem?.img}/>
            <h3>About</h3>
            <P>{singleItem?.about}</P>
       
        </Div>
    )
}
export default SinglePage