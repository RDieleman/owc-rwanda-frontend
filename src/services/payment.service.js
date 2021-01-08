import {properties} from "../properties";
import {loadStripe} from "@stripe/stripe-js/pure";

const stripePromise = loadStripe(properties.stripePubKey);

export const handlePayment = async (price) => {
    //Convert to stripe price
    const stripePrice = price*100

    //Get a stripe instance
    const stripe = await stripePromise;

    //Call backend to create checkout session
    const response = await fetch(`${properties.backendUrl}/create-checkout-session/${stripePrice}`, {method: 'POST'});
    const session = await response.json();

    //Redirect to checkout on button click
    const result = await stripe.redirectToCheckout({
        sessionId: session.id
    });

    if(result.error){
        console.log("An error occurred during the payment", result.error);
    }
}

