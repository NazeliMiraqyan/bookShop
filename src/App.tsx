import Nav from './bookStore/menu/Nav';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './bookStore/components/Home';
import Cart from './bookStore/components/Cart';
import SinglePage from './bookStore/components/SinglePage';
import Success from './bookStore/components/api/Success';
import Cancel from './bookStore/components/api/Cancle';

function App() {
  return (
    <div>
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<Nav/>}>
                  <Route path="/" element={<Home/>}/>
                  <Route path="cart" element={<Cart/>}/>
                  <Route path="cart/:id" element={<SinglePage/>}/>
                  <Route path="success" element={<Success />} />
                  <Route path="cancel" element={<Cancel />} />
              </Route>
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
