import React from "react"
import "./footer.css"

const Footer = () => {
  return (
    <>
      <footer>
        <div className='container'>
          <div className='box logo'>
            <img src='../images/headerb.jpg' alt='' />
            <p>PT. Central Artificial Intelligence</p>
            <p>Jl. Margonda Raya No.1, Pondok Cina, Depok, Jawa Barat, 16431</p>
            <i className='fa fa-phone'></i>
            <span>        089604542184</span>
          </div>
          <div className='box'>
            <h3>Sepakbola</h3>
            <div className='item'>
              <img src='../images/hero/hero1.png' alt='' />
              <p>PSSI resmi mendatangkan timnas Argentina pada FIFA match day</p>
            </div>
            <div className='item'>
              <img src='../images/hero/persija.jpg' alt='' />
              <p>Ryo Matsumura resmi berseragam Persija Jakarta dengan durasi kontrak 3 tahun</p>
            </div>
          </div>
          <div className='box'>
            <h3>SEA GAMES 2023</h3>
            <div className='item'>
              <img src='../images/hero/hero3.jpg' alt='' />
              <p>Timnas bola Sea Games Indonesia berhasil mengalahkan Thailand dengan skor 5-2</p>
            </div>
            <div className='item'>
              <img src='../images/hero/hero1.jpg' alt='' />
              <p>Timnas Voli Putra Indonesia berhasil meraih medali emas</p>
            </div>
          </div>
          <div className='box'>
            <h3>KATEGORI</h3>
            {/*<i className='fa fa-chevron-right'></i>*/}
            <ul>
              <li>
                <span>Olahraga</span> <label>(5)</label>
              </li>
              <li>
                <span>Fashion</span> <label>(6)</label>
              </li>
              <li>
                <span>Kesehatan</span> <label>(7)</label>
              </li>
              <li>
                <span>Alam</span> <label>(9)</label>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
