import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <section className="header">
        <nav>
            <div className="nav-links">
                <ul>
                <li><a href="ShuttleMeThere.html">HOME</a></li>
                    <li><a href="ShuttleMeThere.html">HOME</a></li>
                    <li><a href="About.html">ABOUT</a></li>
                    <li><a href="Routes.html">ROUTES</a></li>
                    <li><a href="Contact.html">CONTACT</a></li>
                </ul>
            </div>
        </nav>

        <div className="text-box">
            {/* <Image width={100}  height={100} src={} alt="logo"/> */}
            <h1>Shuttle Me There!</h1>
            <p>Explore the world with peace of mind book your bus journey now</p>
            <a href="#" className="hero-btn">Download Here</a>

        </div>
        
    </section>

      <section className="promos">
        <h1>Promos We Offer</h1>
        <p>Bus trips just got smarter</p>

        <div className="row">
            <div className="promos-col">
                <h3>10% Discount</h3>
            <p>Use promo code: SMTPROMO1 Get 10% off on your first 2 bus tickets when you book in advance!</p>
            </div>
            <div className="promos-col">
                <h3>20% Discount</h3>
            <p>Use promo code: SMTPROMO2 Get 20% off on your first 2 bus tickets when you book in advance!</p>
            </div>
            <div className="promos-col">
                <h3>30% Discount</h3>
            <p>Use promo code: SMTPROMO3 Get 30% off on your first 2 bus tickets when you book in advance!</p>
            </div>
        </div>
    
    </section>

      <section className="destination">
        <h1>Our Destination</h1>
        <p>We move people better, safer by providing timely, cost efficient and quality transport services. Guided by our company values, we realize our vision.</p>

        <div className="row">
            <div className="destination-col">
                {/* <Image width={100}  height={100}  src={'/'}> */}
                <div className="layer">
                    <h3>BAGUIO CITY</h3>
                </div>
            </div>
            <div className="destination-col">
              {/*   <Image width={100}  height={100}  src="images/sj.jpg" /> */}
                <div className="layer">
                    <h3>SAN JUAN, LA UNION</h3>
                </div>
            </div>
            <div className="destination-col">
            {/*     <Image width={100}  height={100}  src="images/vigan.jpg"/> */}
                <div className="layer">
                    <h3>VIGAN CITY</h3>
                </div>
            </div>
        </div>

    </section>

      <section className="footer">
        <h4>About Us</h4>
        <p>Shuttle Me There! shall be the leading transport company of choice in the Philippines. Our business is to satisfy our customers, uplift the lives of our employees, provide maximum return to our shareholders, and contribute to nation building.</p>
        <div className="icons">
            <i className="fa fa-facebook"></i>
            <i className="fa fa-twitter"></i>
            <i className="fa fa-instagram"></i>
        </div>
        <p>Made with <i className="fa fa-heart-o"></i> by Group 8</p>
      </section>
    </main>
  )
}
