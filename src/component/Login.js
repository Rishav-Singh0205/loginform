import React from 'react';

export default function Login() {
  return (
    <div className='form'>
       <form>
        <div className='container'>
            <div className='logo'>
                   <img src="logo192.png" className="App-logo" alt="logo" />
                   <h4>Hello I am Rishav Singh</h4>
            </div>
            <div className='text1'>
            <div className='btn'>
                <a className='log' href='#'>Login</a>
                <a className='sig' href='#'>Signup</a>
            </div>
            <input type="text" placeholder="Email Address" name='useemail' required/>
          <input type="password" placeholder="Password" name='userpassword' required/>
          <button type='submit'>Login</button> 
          <p className='forg'>Forget Password?</p> 
          </div>
          <div className='gft'>
            <p>or login with</p>
            <img src='google.png' className='goog' alt='google'/>
            <img src='facebook.png' className='goog' alt='facebook'/>
            <img src='twitter.png' className='goog' alt='twitter'/>
          </div>
          <div className='text2'>
            <p className='pra'>Don't have an account?<span>Create new now!</span></p>
            <p className='pra1'>By signing up,you are agree with our<span>Terms & Conditions</span></p>
          </div>
        </div>
        </form>  
</div>
  );
}
