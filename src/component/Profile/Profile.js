import React, { useState } from 'react'
import './profile.css'
import MyOrder from './MyOrder';
// import CancelOrder from './CancelOrder';
import Payment from './Payment';
import Return from './Return';

const Profile = () => {
    const Token = localStorage.getItem("token");
    const userdetail = localStorage.getItem('User-details')
    const user = JSON.parse(userdetail)
    const [isActive, setIsActive] = useState('My-Order')
    return (
        <>
            {
                Token ? (
                    <div className='profile-section'>
                        <div className='container'>
                            <div className='profile-box'>
                                <div className='user-detail'>
                                    <h2>Welcome Back</h2>
                                    <h3>{user.Name}</h3>
                                </div>
                                <div className='user-profile-img'>
                                    <div className='img'>
                                        <img src='https://i.ibb.co/h1vsX3V/user-bg.jpg' alt='User-profile' />
                                    </div>
                                </div>
                            </div>
                            <div className='profile-details'>
                                <div className='top-header'>
                                    <button className='same-btn btn-1' onClick={() => setIsActive('My-Order')}>My Orders</button>

                                    <button className='same-btn btn-2' onClick={() => setIsActive('payment')}>Payments</button>
                                    <button className='same-btn btn-3' onClick={() => setIsActive('return')}>Returns & Cancel</button>
                                    {/* <button className='same-btn btn-4' onClick={() => setIsActive('cancel')}>Cancel</button> */}
                                </div>
                                <div className='profile-detail-box'>
                                    {
                                        isActive === "My-Order" ? (
                                            <MyOrder />
                                        ): isActive === "payment" ? (
                                            <Payment />
                                        ) : isActive === "return" ? (
                                            <Return />
                                        ) : (
                                            <p>No Found</p>
                                        )
                                    }

                                </div>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className='not-login-section'>
                        <div className='container'>
                            <div className='not-login-bg'>
                                <img src='https://i.ibb.co/jgtpVjs/notlogin.png' alt='' />
                            </div>
                            <div className='not-login-detail'>
                                <h2>You are not Login</h2>
                                <a href='/login'>Login</a>
                            </div>
                        </div>
                    </div>
                )
            }
        </>
    )
}

export default Profile