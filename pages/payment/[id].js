import axios from "axios";
import Script from "next/script";
import { useEffect } from "react";
import { useRouter } from "next/router";

const Payment = () => {
  const router = useRouter();
  
  const makePayment = async () => {
    
    const val = {
      id: router.query?.id,
    };

    const { data } = await axios.post(`/api/razorpay`, val);

    const options = {
      key: process.env.RAZORPAY_KEY,
      name: "Ayush sahu",
      currency: data.currency,
      amount: data.amount,
      order_id: data.id,
      description: "Thank You!",
      handler: function (response) {},
      prefill: {
        name: "Ayush sahu",
        email: "digitalayush5142@gmail.com",
        contact: 8839081589,
      },
    };

    const paymentObj = new window.Razorpay(options);
    paymentObj.open();
  };

  useEffect(() => {
    makePayment();
  }, []);

  return (
    <>
      <Script src="http://checkout.razorpay.com/v1/checkout.js" />
    </>
  );
};

export default Payment;

