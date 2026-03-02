import { useState } from 'react';
import NavBar from '../../layouts/NavBar/NavBar'
import { useNavigate } from 'react-router-dom'

const ADMIN_NAME = 'EgyTaxo';
const ADMIN_ID = 'ADMIN2025';

const Login = () => {
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const generateOTP = () => Math.floor(100000 + Math.random() * 900000).toString();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      // ── Admin Flow ──
      if (name === ADMIN_NAME && id === ADMIN_ID) {
        const otp = generateOTP();

        const formData = new FormData();
        formData.append('access_key', '2b98b50a-c548-44ea-8c74-3ac1b4528217');
        formData.append('subject', 'Admin Login OTP');
        formData.append('message', `Your OTP code is: ${otp}`);

        const res = await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          body: formData,
        });

        const data = await res.json();

        if (data.success) {
          sessionStorage.setItem('admin_otp', otp);
          sessionStorage.setItem('otp_expiry', Date.now() + 5 * 60 * 1000);
          navigate('/admin/verify');
        } else {
          setError('Failed to send OTP, try again');
        }
        return;
      }

      // ── Student Flow ──
      const res = await fetch(`${import.meta.env.VITE_API_URL}/api/students/${id}/public`);
      const data = await res.json();

      if (!res.ok) return setError("Student not found");

      if (data.name.toLowerCase() !== name.toLowerCase()) {
        return setError("ID or Name is incorrect");
      }

      navigate(`/student/${id}`, { state: { student: data } });

    } catch {
      setError("Something went wrong, try again");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className='login'>
      <NavBar isHome={false}/>
      <div className="content">
        <div className="form">
          <div className="section-title">
            <h2>Track Your <span>Learning Journey</span></h2>
            <p>View your progress, achievements, and feedback from your teachers. Stay motivated and watch your English skills grow!</p>
          </div>
          <form method='post' onSubmit={handleSubmit}>
            <div>
              <label>Enter Your Name</label>
              <input
                type="text"
                placeholder='Ex: Ahmed Adel'
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div>
              <label>Enter Your ID</label>
              <input
                type="text"
                placeholder='EX: STU2024156'
                value={id}
                onChange={(e) => setId(e.target.value)}
                required
              />
            </div>
            <button type='submit' disabled={loading}>
              {loading ? 'Loading...' : 'View Progress'}
            </button>
            {error && <p className="error">{error}</p>}
          </form>
        </div>
        <img src="assets/amico.svg"/>
      </div>
    </section>
  );
};

export default Login;