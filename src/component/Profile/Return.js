import React from 'react'
import './profile.css';

const Return = () => {
  return (
    <>
      <div className='return-section'>
        <div className='container'>
          <h2>Return</h2>
          <div className='return-box'>
              <div className='transition-input'>
                <label id=''>Transication ID:</label>
                <input type='text' name='transaction_id' id='transaction_id' />
              </div>
              <div className='selection-option'>
                <select name="reason" id="reason">
                  <option value='select'>--Select--</option>
                  <option value="return">Return</option>
                  <option value="cancel">Cancel</option>
                </select>
              </div>
              <button>Submit</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Return
