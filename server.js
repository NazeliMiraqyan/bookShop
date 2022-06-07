const express = require("express");
const app = express();

require("dotenv").config();

const stripe = require("stripe")(
  "sk_test_51L2h73DWskdLlDSg3U4kUMQZZrgOST97VCl1nFE3QiDDFmzAnUOEM0HIShdsCx0bR1c422gDTcyWQ5COnREGbrty004BYWMu2L"
);
const bodyParser = require("body-parser");
const cors = require("cors");

app.use(cors("*"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.post("/payment", async (req, res) => {
  let { amount, id } = req.body;

  try {
    const payment = await stripe.paymentIntents.create({
      amount,
      currency: "USD",
      payment_method: id,
      automatic_payment_methods: {
        enabled: true,
      },
    });
    console.log("Payment", payment);
    res.json({
      message: "payment successful",
      success: true,
    });
  } catch (error) {
    console.log("Error", error);
    res.json({
      message: "payment failed",
      success: false,
    });
  }
});

app.listen(4000, () => {
  console.log("server start on port 4000");
});
