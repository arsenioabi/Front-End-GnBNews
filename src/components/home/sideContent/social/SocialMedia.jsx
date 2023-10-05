import React from "react"

const SocialMedia = () => {
  return (
    <>
      <section className='social'>
        <div className='socBox'>
          <i className='fab fa-facebook-f'></i>
          <span>1,928 Suka</span>
        </div>
        <div className='socBox'>
          <i className='fab fa-pinterest'></i>
          <span>1,842 Penggemar</span>
        </div>
        <div className='socBox'>
          <i className='fab fa-twitter'></i>
          <span>2,500 Pengikut</span>
        </div>
        <div className='socBox'>
          <i className='fab fa-instagram'></i>
          <span>5,920 PEngikut</span>
        </div>
        <div className='socBox'>
          <i className='fab fa-youtube'></i>
          <span>5,825 Berlangganan</span>
        </div>
      </section>
    </>
  )
}

export default SocialMedia
