import { Link } from 'react-router-dom'
import '../components/Home.css'

const Footer = () => {
  return (
    <footer id='footer'>
        <div className="top">
            <div>
                <h3><img src="Logo.svg" alt="Logo" loading='lazy'/> English Taxo</h3>
                <p>Where confident readers, strong
    speakers, and successful learners
    begin their journey. Join 11,000+ happy
    students today.</p>
                <div className="social">
                    <div><img src="assets/facebook.svg" alt="facebook" loading='lazy'/></div>
                    <div><img src="assets/insta.svg" alt="insta" loading='lazy'/></div>
                    <div><img src="assets/youtube.svg" alt="youtube" loading='lazy'/></div>
                    <div><img src="assets/telegram.svg" alt="telegram" loading='lazy'/></div>
                </div>
            </div>
            <div>
                <h3>Quick Links</h3>
                <div>
                    <Link to="/about">About Us</Link>
                    <p>Programs</p>
                    <p>Why Choose Us</p>
                    <p>Pricing</p>
                    <p>Testimonials</p>
                    <p>Contact</p>
                </div>
            </div>
            <div>
                <h3>Our Programs</h3>
                <div>
                    <p>Kids Phonics (4-8)</p>
                    <p>Kids English (5-10)</p>
                    <p>General English (10-16)</p>
                    <p>Adults Speaking</p>
                </div>
            </div>
            <div>
                <h3>Contact</h3>
                <div>
                    <p><i className="fa-solid fa-phone"></i> +20 123 456 7890</p>
                    <p><i className="fa-regular fa-envelope"></i> hello@englishtaxo.com</p>
                    <p><i className="fa-regular fa-clock"></i> Sat - Thu: 9 AM - 9 PM (Cairo)</p>
                </div>
            </div>
        </div>
        <div className="bottom">
            <p>© 2025 English Taxo. All rights reserved.</p>
            <p><span>Privacy Policy</span><span>Terms of Service</span></p>
        </div>
    </footer>
  )
}

export default Footer
