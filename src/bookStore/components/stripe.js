import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import axios from "axios";
import { useState } from "react";
import "./form.css";
import { useAppSelector } from "../redux/store";

export default function PaymentForm() {
  const [success, setSuccess] = useState(false);
  const { cart } = useAppSelector((state) => state.data);
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement),
    });

    if (!error) {
      try {
        const { id } = paymentMethod;
        const response = await axios.post("http://localhost:4000/payment", {
          amount: cart.reduce((acc, c) => acc + c.price * c.qty, 0) * 100,
          id,
        });
        console.log(response);
        if (response.data.success) {
          console.log("Successful payment");
          setSuccess(true);
        }
      } catch (error) {
        console.log("Error", error);
      }
    } else {
      console.log(error.message);
    }
  };

  return (
    <>
      {!success ? (
        <form onSubmit={handleSubmit} id="payment-form">
          <div className="FormRow">
            <CardElement id="payment-element" />
          </div>

          <button id="payButton">Pay</button>
        </form>
      ) : (
        <div>
          <h2 style={{ textAlign: "center", color: "green" }}>Success</h2>
        </div>
      )}
    </>
  );
}
