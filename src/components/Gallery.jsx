import React from 'react'

const Gallery = () => {
  return (
  
        

    <section className="stylish">
  <div className="galery-container">
  <h2 className='gallery-h2' >Make your photos more stylish</h2>
  <p className='gallery-p' >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod <br></br> tempor incididunt ut labore</p>
    <div className="card-container">
      <div className="card">
      <img src="./images/img1.png" alt="Stylish Photo 2" />
       <div className='card-inner'>
       <h3>Sed Ut Perspiciatis</h3>
       <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia.</p>
       </div>
      </div>
      <div className="card">
        <img src="./images/img2.png" alt="Stylish Photo 2" />
        <div className='card-inner'>
       <h3>Sed Ut Perspiciatis</h3>
       <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia.</p>
       </div>
      </div>
      <div className="card">
      <img src="./images/img3.png" alt="Stylish Photo 2" />
      <div className='card-inner'>
       <h3>Sed Ut Perspiciatis</h3>
       <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia.</p>
       </div>
      </div>
    </div>
  </div>
</section>

  )
}

export default Gallery
