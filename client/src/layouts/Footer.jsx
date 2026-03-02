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
                    <div><a href="https://www.facebook.com/share/183MiYKbix/?mibextid=wwXIfr"><img src="assets/facebook.svg" alt="facebook" loading='lazy'/></a></div>
                    <div><a href="https://www.instagram.com/englishtaxo?igsh=bXdjNnVtcWowbG9w&utm_source=qr"><img src="assets/insta.svg" alt="insta" loading='lazy'/></a></div>
                    <div><a href="https://www.threads.com/@englishtaxo"><i className="fa-brands fa-threads"></i></a></div>
                </div>
            </div>
            <div>
                <h3>Quick Links</h3>
                <div>
                    <Link to="/about">About Us</Link>
                    <p><Link to="/#courses">Programs</Link></p>
                    <p><Link to="/#why">Why Choose Us</Link></p>
                    <p><Link to="/#payment">Pricing</Link></p>
                    <p><a href="https://wa.me/+201116925694">Contact</a></p>
                </div>
            </div>
            <div>
                <h3>Our Programs</h3>
                <div>
                    <p><Link to="/KidsPhonics">Kids Phonics (4-8)</Link></p>
                    <p><Link to="/KidsEnglishProgram">Kids English (5-10) </Link></p>
                    <p><Link to="/GeneralEnglish">General English (10-16) </Link></p>
                    <p><Link to="/SpeakingCourse">Adults Speaking </Link></p>
                </div>
            </div>
            <div>
                <h3>Contact</h3>
                <div>
                    <p><i className="fa-solid fa-phone"></i> +20 111 692 5694</p>
                    <p><i className="fa-regular fa-envelope"></i>englishtaxo2019@gmail.com</p>
                    <p><i className="fa-regular fa-clock"></i> Sat - Thu: 9 AM - 11 PM (Cairo)</p>
                </div>
            </div>
        </div>
        <div className="bottom">
            <p>© 2026 English Taxo. All rights reserved.</p>
            <p><span>Privacy Policy</span><span>Terms of Service</span></p>
        </div>
    </footer>
  )
}

export default Footer
