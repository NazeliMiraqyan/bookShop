import {Link,Outlet} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { useAppSelector } from "../redux/store"
import styled from 'styled-components'


const Nav:React.FC=()=>{

  const element = <FontAwesomeIcon icon={faCartShopping} />
  const {cart}= useAppSelector(state => state.data)

  const Nav = styled.nav`
  background-color: #0F1111;
  padding:15px 15px;
`
const Ul=styled.ul`
  display:flex;
  justify-content:space-around;
`
const Li=styled.li`
  text-decoration: none;
  list-style-type:none;
  color:#fff;
`
const linkStyle = {
  textDecoration: "none",
  color: '#fff'
};
const Span=styled.span`
  border-radius:50%;
  padding:5px 10px;
  background-color:red;
`
    return(
        <>
        <Nav>
          <Ul>
            <Li>
              <Link to="/" style={linkStyle}>Home</Link>
            </Li>
            <Li>
              <Link to="/cart" style={linkStyle}>{element}<Span>{cart.length}</Span></Link>
            </Li>
          </Ul>
        </Nav>
        <Outlet/>
        </>
    )
}
export default Nav