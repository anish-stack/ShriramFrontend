import React from 'react'
import './profile.css'

const Profile = () => {
    const Token = localStorage.getItem( "toke" );
    const userdetail = localStorage.getItem('User-details')
   const user = JSON.parse(userdetail)
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
                </div>
            </div>
                ):(
                    <div className='not-login-section'>
                        <div className='container'>
                            <div className='not-login-bg'>
                                <img src='https://i.ibb.co/jgtpVjs/notlogin.png' alt='' />
                            </div>
                            <div className='not-login-detail'>
                                <h2>You are not Login</h2>
                                <h2>Please Login</h2>
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