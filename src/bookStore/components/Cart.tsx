import { useState, useEffect } from "react";
import { useAppSelector } from "../redux/store";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { removeToCart } from "../redux/actions/booksAction";
import TotalPrice from "./TotalPrice";
import { adjuctQty } from "../redux/actions/booksAction";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import PaymentForm from "./stripe";

const stripePromise = loadStripe(
  "pk_test_51L2h73DWskdLlDSgjSVY2RUyJl2EeVM24Du9lTjHSvIZvThiJIS8Yi1aYyz9U6Q7Xlx6g7IuB9l76Sdw32VilFnW00VoynE7Sw"
);

const Cart: React.FC = () => {
  const { cart } = useAppSelector((state) => state.data);
  const dispatch = useDispatch();

  const Increment = (id: number, qty: number): void => {
    if (qty) {
      dispatch(adjuctQty(id, qty + 1));
    }
  };
  const Decrement = (id: number, qty: number): void => {
    if (qty && qty > 1) {
      dispatch(adjuctQty(id, qty - 1));
    }
  };
  const removeItem = (id: number): void => {
    dispatch(removeToCart(id));
  };

  const Div = styled.div`
    width: 850px;
    margin: 0 auto;
    display: flax;
    margin-top: 30px;
    box-shadow: 0px 0px 0px 0.5px rgba(50, 50, 93, 0.1),
      0px 2px 5px 0px rgba(50, 50, 93, 0.1),
      0px 1px 1.5px 0px rgba(0, 0, 0, 0.07);
    border-radius: 7px;
  `;
  const DivItem = styled.div`
    width: 150px;
  `;
  const DivItemButton = styled.button`
    margin-top: 45px;
    padding: 5px 15px;
    border: none;
    background: #5469d4;
    color: #fff;
    cursor: pointer;
  `;
  const ImgDiv = styled.img`
    max-width: 65%;
  `;
  const Button = styled.div`
    cursor: pointer;
    width: 25px;
  `;

  return (
    <>
      <div>
        <TotalPrice />

        <Elements stripe={stripePromise}>
          <PaymentForm />
        </Elements>
        {cart.length ? (
          cart.map((el, i) => {
            return (
              <Div key={i}>
                <DivItem>
                  <ImgDiv src={el.img} />
                </DivItem>

                <DivItem>
                  <h4>Title</h4>
                  <p>{el.title}</p>
                </DivItem>

                <DivItem>
                  <h4>Author</h4>
                  <p>{el.author}</p>
                </DivItem>

                <DivItem>
                  <h4>Price</h4>
                  <p>{el.price + "$"}</p>
                </DivItem>

                <DivItem>
                  <h4>QTY</h4>
                  <div style={{ display: "flex" }}>
                    <Button onClick={() => Increment(el.id, el.qty)}>+</Button>
                    <Button>{el.qty}</Button>
                    <Button onClick={() => Decrement(el.id, el.qty)}>-</Button>
                  </div>
                </DivItem>

                <DivItem>
                  <h4>Remove</h4>
                  <DivItemButton onClick={() => removeItem(el.id)}>
                    remove
                  </DivItemButton>
                </DivItem>
              </Div>
            );
          })
        ) : (
          <h1 style={{ textAlign: "center" }}>Cart is empty</h1>
        )}
      </div>
    </>
  );
};
export default Cart;
