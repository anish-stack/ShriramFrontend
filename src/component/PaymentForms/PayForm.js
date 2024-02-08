import React, { useState } from 'react';
import axios from 'axios'
const PayForm = () => {
    // Function to generate a transaction ID
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


    // State variables for form inputs and transaction ID
    const [formData, setFormData] = useState({
        name: "",
        amount: "",
        number: "",
        Merchenat: MerchenatId,
        transactionId: merchantTransactionId
    });

    // Function to handle form input changes
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    // Function to handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();

        // console.log(formData);

        try {
            const resposne = await axios.post("http://localhost:5000/api/v2/payment-create", formData)
            console.log(resposne.data)

            //check if sucesss is true
            // Assuming you have received the response object as 'response'
            const redirectUrl = resposne.data.paydata.data.instrumentResponse.redirectInfo.url;
            // console.log(redirectUrl)
            if (redirectUrl) {
                // Redirect the user to the URL received from the response
                window.location.href = redirectUrl;
            } else {
                // Show an alert if redirect URL is not present
                alert('Something went wrong while creating the payment');
            }
        } catch (error) {
            console.log(error)
        }
    };

    return (
        <div className='payform'>
            <h1>Payment Information</h1>


            <div className='form-for-pay'>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="name">Name on Card:</label><br />
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                    /><br />
                    <label htmlFor="Merchenat">Merchenat user id on Card:</label><br />
                    <input
                        type="text"
                        id="Merchenat"
                        name="Merchenat"
                        value={formData.Merchenat}
                        onChange={handleInputChange}
                    /><br />
                    <label htmlFor="amount">Amount:</label><br />
                    <input
                        type="text"
                        id="amount"
                        name="amount"
                        value={formData.amount}
                        onChange={handleInputChange}
                    /><br />

                    <label htmlFor="number">Card Number:</label><br />
                    <input
                        type="text"
                        id="number"
                        name="number"
                        value={formData.number}
                        onChange={handleInputChange}
                    /><br />

                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
    );
}

export default PayForm;
