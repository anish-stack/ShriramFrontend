import React from 'react'
import './about.css'
const Aboutus = () => {
  return (
    <section className="about-us">
    <div className="about">
      <img src="https://img.freepik.com/free-photo/shop-clothing-clothes-shop-hanger-modern-shop-boutique_1150-8886.jpg?w=740&t=st=1704794909~exp=1704795509~hmac=5511188adb56b485a15a0ad436eee4daa1fad1d65df15fb311cef8277a0395fe" className="pic"/>
      <div className="text">
        <h2>About Us</h2>
        <h5>Shree Ram & <span>Garments <i class="ri-vuejs-fill"></i> </span></h5>
          <p>Shree Ram Garments, a distinguished player in the textile industry since 1996, stands as a beacon of excellence in the realm of garment manufacturing, import, and export. With a rich legacy spanning over two decades, Shree Ram Garments has consistently demonstrated its commitment to quality and innovation in the world of fashion</p>
        <div className="data">
        <a href="#" className="hire">Read More</a>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Aboutus