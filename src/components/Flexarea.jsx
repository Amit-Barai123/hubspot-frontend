import React from 'react'

const Flexarea = () => {
  return (
    <div className="flex-area-container">
  <div className="header">
    <h1 className='gallery-h2' >Have you ever posted any photo on social media?</h1>
    <p className='gallery-p'  >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod <br></br>tempor incididunt ut labore</p>
  </div>
  <div className="content">
    <div className="text-section">
      <div className="text-block">
        <h2>Sed ut perspiciatis</h2>
        <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur.</p>
      </div>
      <div className="text-block">
        <h2>Lorem ipsum dolor</h2>
        <p>Amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      </div>
      <div className="text-block">
        <h2>Nemo enim ipsam</h2>
        <p>Consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem.</p>
      </div>
    </div>
    <div className="image-section">
      <img src="./images/img-4.png" alt="Skyscrapers" />
    </div>
  </div>
</div>

  )
}

export default Flexarea
