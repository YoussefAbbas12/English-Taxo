import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Students from './sections/Students';
import Posts from './sections/Posts';
import Offers from './sections/Offers';
import './AdminDashboard.css';

const AdminDashboard = () => {
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState('students');

  useEffect(() => {
    if (sessionStorage.getItem('admin_auth') !== 'true') {
      navigate('/admin/login');
    }
  }, []);

  const handleLogout = () => {
    sessionStorage.removeItem('admin_auth');
    navigate('/admin/login');
  };

  const renderSection = () => {
    switch (activeSection) {
      case 'students': return <Students />;
      case 'posts': return <Posts />;
      case 'offers': return <Offers />;
      default: return <Students />;
    }
  };

  return (
    <div className="admin-layout">

      {/* Sidebar */}
      <aside className="sidebar">
        <div className="sidebar-logo">
          <h2>Admin Panel</h2>
        </div>

        <nav className="sidebar-nav">
          <button
            className={activeSection === 'students' ? 'active' : ''}
            onClick={() => setActiveSection('students')}
          >
            <i className="fa-solid fa-users"></i>
            Students
          </button>
          <button
            className={activeSection === 'posts' ? 'active' : ''}
            onClick={() => setActiveSection('posts')}
          >
            <i className="fa-solid fa-newspaper"></i>
            Posts
          </button>
          <button
            className={activeSection === 'offers' ? 'active' : ''}
            onClick={() => setActiveSection('offers')}
          >
            <i className="fa-solid fa-tags"></i>
            Offers
          </button>
        </nav>

        <button className="logout-btn" onClick={handleLogout}>
          <i className="fa-solid fa-right-from-bracket"></i>
          Logout
        </button>
      </aside>

      {/* Main Content */}
      <main className="admin-main">
        <div className="admin-content">
          {renderSection()}
        </div>
      </main>

    </div>
  );
};

export default AdminDashboard;