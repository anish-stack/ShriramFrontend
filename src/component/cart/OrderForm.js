import React, { useState } from 'react';
import './OrderForm.css';
import axios from 'axios';
import bg from './orderformbg.png'

const OrderForm = () => {
    const ProductIds = sessionStorage.getItem('Ids');
    console.log(JSON.parse(ProductIds));
    const userToken = localStorage.getItem('token');
    const Total = sessionStorage.getItem('Total_p')
    // Initialize formData with the nested structure
    const [formData, setFormData] = useState({
        address: {
            street: '',
            city: '',
            state: '',
            pincode: '',
            landmark: ''
        }
    });

    const handleChange = (e) => {
        const { name, value } = e.target;

        // Update the nested property using spread operator
        setFormData(prevData => ({
            ...prevData,
            address: {
                ...prevData.address,
                [name]: value
            }
        }));
    };
    // ===================================
    function generateMerchantTransactionId() {
        const allowedCharacters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
        const idLength = 25;
        let transactionId = '';

        for (let i = 0; i < idLength; i++) {
            const randomIndex = Math.floor(Math.random() * allowedCharacters.length);
            transactionId += allowedCharacters.charAt(randomIndex);
        }

        return transactionId;
    }
    function MerchenatId() {
        const allowedCharacters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
        const idLength = 25;
        let MerchenatIds = '';

        for (let i = 0; i < idLength; i++) {
            const randomIndex = Math.floor(Math.random() * allowedCharacters.length);
            MerchenatIds += allowedCharacters.charAt(randomIndex);
        }

        return MerchenatIds;
    }
    const merchantTransactionId = generateMerchantTransactionId();
    const MerchenatIds = MerchenatId();

    const [PayData, setPayData] = useState({
        amount: Total,
        Merchenat: MerchenatIds,
        transactionId: merchantTransactionId
    });

    const handlePaySubmit = async () => {


        // console.log(formData);

        try {
            const resposne = await axios.post("http://localhost:5000/api/v2/payment-create", PayData, {
                headers: {
                    Authorization: `Bearer ${userToken}`
                }
            })
            console.log(resposne.data)

            //check if sucesss is true
            // Assuming you have received the response object as 'response'
            // const redirectUrl = resposne.data.paydata.data.instrumentResponse.redirectInfo.url;
            // // console.log(redirectUrl)
            // if (redirectUrl) {
            //     // Redirect the user to the URL received from the response
            //     window.location.href = redirectUrl;
            // } else {
            //     // Show an alert if redirect URL is not present
            //     alert('Something went wrong while creating the payment');
            // }
        } catch (error) {
            console.log(error)
        }
    };
    const product = JSON.parse(sessionStorage.getItem('Ids').trim())

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // First, handle payment submission
            const payResponse = await handlePaySubmit();
            console.log('Payment response:', payResponse);

            // Then, proceed with order creation
            const response = await axios.post(`http://localhost:5000/api/v1/create-order/${product}`, {

                formData,
            }, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                }
            });
            console.log('Order creation response:', response.data);
        } catch (error) {
            console.error('Error:', error);
        }
    };



    return (
        <>
            <div className='orderform-main-section'>
                <div className='orderform-container-main'>
                    <div className='heading'>
                        <span>Address</span>
                    </div>

                    <div className='orderform-detail'>
                        <div className='orderform-detail-bg'>
                            <img src={bg} alt=''/>
                        </div>
                        <div className='orderform-detail-form'>
                        <form className="order-form" onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="street">Street</label>
                                <input type="text" id="street" name="street" value={formData.address.street} onChange={handleChange} required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="city">City</label>
                                <input type="text" id="city" name="city" value={formData.address.city} onChange={handleChange} required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="state">State</label>
                                <input type="text" id="state" name="state" value={formData.address.state} onChange={handleChange} required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="pincode">Pincode</label>
                                <input type="text" id="pincode" name="pincode" value={formData.address.pincode} onChange={handleChange} required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="landmark">Landmark</label>
                                <input type="text" id="landmark" name="landmark" value={formData.address.landmark} onChange={handleChange} />
                            </div>
                            <button type="submit">Submit</button>
                        </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default OrderForm;
