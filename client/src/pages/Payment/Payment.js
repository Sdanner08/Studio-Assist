import React, { Component } from 'react';
import { Elements, StripeProvider } from 'react-stripe-elements';
import CheckoutForm from '../../components/checkoutForm/checkoutForm';

class Payment extends Component {
    render() {
        return (
            <div className="container">
                <StripeProvider apiKey="pk_test_eP2cRwz7fGgtas9VeuDxzdYC">
                <Elements>
                    <CheckoutForm />
                </Elements>
                </StripeProvider>
            </div>
        );
    }
}

export default Payment;