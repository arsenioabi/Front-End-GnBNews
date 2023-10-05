import React from "react"
import "./side.css"
import Slider from "react-slick"
import Heading from "../../../common/heading/Heading"
import { gallery } from "../../../../dummyData"
import Tpost from "../Tpost/Tpost"
import SocialMedia from "../social/SocialMedia"

//const allCat = [...new Set(popular.map((curEle) => curEle.catgeory))]
//console.log(allCat)

const Side = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  }

  const catgeory = ["Dunia", "Jalan-jalan", "Olahraga", "Politik", "Kesehatan", "Fashion", "Bisnis", "Teknologi"]
  return (
    <>
      <Heading title='Terus Terhubung' />
      <SocialMedia />

      <Heading title='Berlangganan' />

      <section className='subscribe'>
        <h1 className='title'>Berlangganan untuk mengetahui berita terbaru dari kami</h1>
        <form action=''>
          <input type='email' placeholder='Email Address...' />
          <button>
            <i className='fa fa-paper-plane'></i> KIRIM
          </button>
        </form>
      </section>

      

      <Tpost />

      <section className='catgorys'>
        <Heading title='Kategori' />
        {/*<div className='items'>{allCat}</div>*/}
        {catgeory.map((val) => {
          return (
            <div className='category category1'>
              <span>{val}</span>
            </div>
          )
        })}
      </section>

      <section className='gallery'>
        <Heading title='Galeri' />
        <Slider {...settings}>
          {gallery.map((val) => {
            return (
              <div className='img'>
                <img src={val.cover} alt='' />
              </div>
            )
          })}
        </Slider>
      </section>
    </>
  )
}

export default Side
