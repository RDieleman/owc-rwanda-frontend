import {properties} from "../properties";
import {loadStripe} from "@stripe/stripe-js/pure";

const stripePromise = loadStripe(properties.stripePubKey);

/*
    The Stripe payment service.
    The handle payment function is called from the donation page with an amount.

    The backend url and endpoint are defined in the properties file.

    After the payment is complete the user will be redirected to an url (depending on outcome of payment) defined in the backend.
 */

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

