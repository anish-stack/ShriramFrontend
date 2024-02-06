import React from 'react'
import './Best.css'
const Best = () => {
  return (
    <div className='Best-conatiner'>
        <div className='Best-cards'>
            <div className='Cards-Service'>
                <div className='icon'>
                <i class="ri-truck-fill"></i>
                </div>
                <div className='text-best'>
                        <span>Free Delivery</span>
                </div>
            </div>
            <div className='Cards-Service'>
                <div className='icon'>
                <i class="ri-secure-payment-fill"></i>
                </div>
                <div className='text-best'>
                        <span>Secure Payments</span>
                </div>
            </div>
            <div className='Cards-Service'>
                <div className='icon'>
                <i class="ri-restart-line"></i>
                </div>
                <div className='text-best'>
                        <span>7 Days Return</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Best