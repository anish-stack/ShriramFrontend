import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './payment.css';

const Payment = () => {
  const [data, setData] = useState([]);
  const Token = localStorage.getItem('token');
  const [orderDetails, setOrderDetails] = useState([]);

  const getOrderList = async () => {
    try {
      const response = await axios.get('https://eccomerce-av7e.onrender.com/api/v1/my-order', {
        headers: { 'Authorization': `Bearer ${Token}` }
      });
      setData(response.data.data);
      const ids = response.data.data.map(order => order._id);
      gettransitionid(ids);
    } catch (error) {
      console.error('Error fetching order list:', error);
    }
  };

  const gettransitionid = async (ids) => {
    try {
      const responses = await Promise.all(ids.map(async (id) => {
        const response = await axios.get(`https://eccomerce-av7e.onrender.com/api/v1/get-Transication-id/${id}`);
        return { orderId: id, transitionId: response.data.data }; 
      }));
      setOrderDetails(responses);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  useEffect(() => {
    getOrderList();
  }, [Token]);

  return (
    <>
      <div className='payment-section'>
        <div className='container'>
          <h2>Payments</h2>
          <div className='payment-row'>
            {orderDetails.map((order, index) => (
              <div className='order-details' key={index}>
                <h2>Order-Detail</h2>
                <div className='order-detail-bottom'>
                <p>Order ID:</p>
                <span>{order.orderId}</span>
                <p>Transition ID:</p>
                <span>{order.transitionId}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Payment;
