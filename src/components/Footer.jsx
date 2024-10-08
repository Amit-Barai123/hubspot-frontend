import React from 'react'

const Footer = () => {
  return (
   <footer>
  <div className="footer-container">
    
    <div className="footer-columns">
    <div className="footer-logo">
      <h2><img src="./images/footer_logo.png" /></h2>
    </div>
      <div className="footer-column">
        <h3>Mobile app</h3>
        <ul>
          <li><a href="#">Features</a></li>
          <li><a href="#">Live share</a></li>
          <li><a href="#">Video record</a></li>
        </ul>
      </div>
      <div className="footer-column">
        <h3>Community</h3>
        <ul>
          <li><a href="#">Featured artists</a></li>
          <li><a href="#">The Portal</a></li>
          <li><a href="#">Live events</a></li>
        </ul>
      </div>
      <div className="footer-column">
        <h3 className='footer-company'>Company</h3>
        <ul>
          <li><a href="#">About us</a></li>
          <li><a href="#">Contact us</a></li>
          <li><a href="#">History</a></li>
        </ul>
      </div>
      <div className="footer-buttons">
      <button  className='form-btn-1' type="submit">Register</button> 
        <button href="#" className="form-btn-2">Log in</button>
      </div>
    </div>
    <div className="footer-bottom">
      <p>© Photo, Inc. 2019. We love our users!</p>
      <div className="footer-social">
        <a className='follow-text'>Follow us:</a>
        <a href="#"><img src="./images/facebook.png" alt="Facebook" /></a>
        <a href="#"><img src="./images/twitter.png" alt="Twitter" /></a>
        <a href="#"><img src="./images/linkdin.png" alt="LinkedIn" /></a>
        <a href="#"><img src="./images/instagram.png" alt="Instagram" /></a>
      </div>
      
    </div>
  </div>
</footer>

  )
}

export default Footer
