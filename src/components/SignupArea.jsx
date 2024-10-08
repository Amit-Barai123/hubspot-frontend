import React from 'react'

const SignupArea = () => {
  return (
    <section class="signup">
        <div className="signup-container">
 
  
  <div className='form-section'  >
  <div className='form-area' >
    <h3>Sign up for a free account</h3>
  <form>
    <input type="text" placeholder="First name" required />
    <input type="text" placeholder="Last name" required />
    <input type="email" placeholder="Email address" required />
    <input type="tel" placeholder="Phone number" />
    <input type="password" placeholder="Create password" required />
    
  </form>
  <div className='btn-from-btn' >
  <button  className='form-btn' type="submit">Register</button>
  </div>
  </div>
</div>
  </div>

    </section>
  )
}

export default SignupArea
