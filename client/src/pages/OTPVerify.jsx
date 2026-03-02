import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './AdminDashboard.css';

const OTPVerify = () => {
  const [otp, setOtp] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [timeLeft, setTimeLeft] = useState(300);
  const navigate = useNavigate();

  useEffect(() => {
    if (!sessionStorage.getItem('admin_otp')) {
      navigate('/admin/login');
    }
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      const expiry = sessionStorage.getItem('otp_expiry');
      const remaining = Math.max(0, Math.floor((expiry - Date.now()) / 1000));
      setTimeLeft(remaining);
      if (remaining === 0) {
        sessionStorage.removeItem('admin_otp');
        sessionStorage.removeItem('otp_expiry');
        navigate('/admin/login');
      }
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (s) => `${Math.floor(s / 60)}:${String(s % 60).padStart(2, '0')}`;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    const savedOTP = sessionStorage.getItem('admin_otp');
    const expiry = sessionStorage.getItem('otp_expiry');

    if (Date.now() > expiry) {
      sessionStorage.removeItem('admin_otp');
      sessionStorage.removeItem('otp_expiry');
      return setError('OTP expired, please login again');
    }

    if (otp !== savedOTP) {
      setLoading(false);
      return setError('Incorrect OTP');
    }

    try {
      // نجيب الـ token من الباك اند
      const res = await fetch('http://localhost:5000/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username: 'admin', password: 'admin' })
      });
      const data = await res.json();

      // نمسح الـ OTP ونحط الـ token
      sessionStorage.removeItem('admin_otp');
      sessionStorage.removeItem('otp_expiry');
      sessionStorage.setItem('admin_auth', 'true');
      sessionStorage.setItem('admin_token', data.token);

      navigate('/admin/dashboard');
    } catch {
      setError('Something went wrong, try again');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="otp-verify">
      <h2>Enter OTP</h2>
      <p>We sent a 6-digit code to your email</p>
      <p className="timer">Expires in: <strong>{formatTime(timeLeft)}</strong></p>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="000000"
          maxLength={6}
          value={otp}
          onChange={(e) => setOtp(e.target.value)}
          required
        />
        {error && <p className="error">{error}</p>}
        <button type="submit" disabled={loading}>
          {loading ? 'Verifying...' : 'Verify'}
        </button>
      </form>
    </div>
  );
};

export default OTPVerify;