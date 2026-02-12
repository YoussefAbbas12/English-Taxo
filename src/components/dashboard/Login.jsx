import NavBar from '../../layouts/NavBar/NavBar'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <section className='login'>
        <NavBar  isHome={false}/>
        <div className="content">
            <div className="form">
                <div className="section-title">
                    <h2>Track Your <span>Learning Journey</span></h2>
                    <p>View your progress, achievements, and feedback from your teachers. Stay motivated and watch your English skills grow!</p>
                </div>
                <form method='post'>
                    <div>
                        <label htmlFor="">Enter Your Name</label>
                        <input type="text" placeholder='Ex: Ahmed Adel'/>
                    </div>
                    <div>
                        <label htmlFor="">Enter Your ID</label>
                        <input type="text" placeholder='EX: STU2024156'/>
                    </div>
                    <Link to='/Dashboard'>View Progress</Link>
                </form>
            </div>
            <img src="assets/amico.svg"/>
        </div>
    </section>
  )
}

export default Login
