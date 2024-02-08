import React, { useState } from 'react';
import './paymentSuccess.css';
import { Link, useParams } from 'react-router-dom';
import success from './logo.png';
import failed from './failed.svg';

const PaymentSuccess = () => {
    const { value,transication } = useParams(); // Assuming value is the parameter you're interested in
    const [isPayment] = useState(value);

    return (
        <section className='paymentsuccess-section'>
            <div className='container'>
                <div className='heading'>
                    <span>Payment Status</span>
                </div>
                <div className='paymentsuccess-detail'>
                    <div className='image'>
                        <img src={isPayment === 'success' ? success : failed} alt={isPayment === 'success' ? 'Successfull' : 'Failed'} />
                    </div>
                    <div className='payment-detail'>
                        <h3>{isPayment === 'success' ? 'Your payment was successful!' : 'Your payment was Failed!'}</h3>
                        {isPayment === 'success' && <p>Transaction ID: {transication}</p>}
                        {isPayment === 'success' && <Link className='linkforback' to='/'>View Transaction</Link>}
                        <Link className='linkforback' to='/'>Back to Home</Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PaymentSuccess;
