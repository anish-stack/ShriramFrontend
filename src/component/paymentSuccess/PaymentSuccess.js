import React, { useState } from 'react'
import './paymentSuccess.css'
import { Link } from 'react-router-dom'
import success from './logo.png'
import failed from './failed.svg'

const PaymentSuccess = () => {
    const [isPayment, setIsPayment] = useState(false)
    return (
        <>
            {
                !isPayment ?
                <section className='paymentsuccess-section'>
                <div className='container'>
                    <div className='heading'>
                        <span>Payment Status</span>
                    </div>
                    <div className='paymentsuccess-detail'>
                        <div className='image'>
                            <img src={success} alt='Successfull' />
                        </div>
                        <div className='payment-detail'>
                            <h3>Your payment was successful!</h3>
                            <p>Transaction ID: 1234567890</p>
                            <a href='#'>View Transaction</a>
                            <Link className='linkforback' to={`/`}>Back to Home</Link>
                        </div>
                    </div>
                </div>
            </section > :
                        <section className='paymentsuccess-section'>
                        <div className='container'>
                            <div className='heading'>
                                <span>Payment Status</span>
                            </div>
                            <div className='paymentsuccess-detail'>
                                <div className='image'>
                                    <img src={failed} alt='Successfull' />
                                </div>
                                <div className='payment-detail'>
                                    <h3>Your payment was Failed!</h3>
                                    <Link className='linkforback' to={`/`}>Back to Home</Link>
                                </div>
                            </div>
                        </div>
                    </section >
                    
            }

        </>
    )
}

export default PaymentSuccess
