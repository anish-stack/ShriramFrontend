import axios from 'axios'
import React, { useEffect, useState } from 'react'
import MyOrder from './MyOrder'

const OrderFetch = () => {
    const [data,setData] = useState([])
    const Token = localStorage.getItem('token')
    console.log(Token)
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
    
    <>
      <MyOrder data = {data}/>
    </>
  )
}

export default OrderFetch
