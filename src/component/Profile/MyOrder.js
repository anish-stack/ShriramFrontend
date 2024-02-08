import React, { useEffect, useState } from 'react'
import './profileOptions.css'
import axios from 'axios'

const MyOrder = () => {

    const [data,setData] = useState([])
    const Token = localStorage.getItem('token')
    // console.log(Token)
    const getOrderList = async () => {
        try {
            const response = await axios.get('https://eccomerce-av7e.onrender.com/api/v1/my-order', {
                headers: { 'Authorization': `Bearer ${Token}` }
            });
            setData(response.data.data);
        } catch (error) {
            console.error('Error fetching order list:', error);
        }
    };
    useEffect(() => {
        
        getOrderList();
    }, [Token]);

  return (
    <div className='my-order'>
    <div className='container'>
        <h2>My Order</h2>
        <table className='order-table'>
            <thead>
                <tr>
                    <th>Product Image</th>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Status</th>
                    <th>Order Id</th>
                    <th>Order Date</th>
                    <th>Delivery Date</th>
                    <th>Address</th>
                    <th>Landmark</th>
                </tr>
            </thead>
            <tbody>
                {data && data.map((order, index) => (
                    <tr className='order-row' key={index}>
                        <td className='p-image'>
                            <img src={order.product[0].image[0]} alt="product" />
                        </td>
                        <td className='p-name'>{order.product[0].name || 'Not Available'}</td>
                        <td className='p-price'>Rs. {order.product[0].price || 'Not Available'}</td>
                        <td className='p-status'>{order.orderStatus || 'Not Available'}</td>
                        <td className='p-transition'>{order._id || 'Not Available'}</td>
                        <td className='p-order'>{new Date(order.createdAt).toLocaleDateString() || 'Not Available'}</td>
                        <td className='p-dilever'>{new Date(order.updatedAt).toLocaleDateString() || 'Not Available'}</td>
                        <td className='p-address'>{order.address[0].street}, {order.address[0].city}, {order.address[0].state} - {order.address[0].pincode || 'Not Available'}</td>
                        <td className='p-landmark'>{order.address[0].landmark || 'Not Available'}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
</div>

  )
}

export default MyOrder
