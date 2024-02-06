import React from 'react'
import './newsLetter.css'

function NewsLetter() {
  return (
    <div>
      <section className='newsletter'>
        <div className='container'>
            <div className='newsletter-heading'>
            <i class="ri-mail-line"></i>
            <h2>sign up for newsletter</h2>
            </div>
            <div className='newsletter-detail'>
                <h3>Subscribe so the weekly newsletter for all the latest updates</h3>
                <div className='input-part'>
                    <input type='Email' placeholder='Enter your Mail' />
                    <button>Subscribe</button>
                </div>
            </div>
        </div>
      </section>
    </div>
  )
}

export default NewsLetter