import { useEffect, useState } from 'react';
import NewsCard from '../new/NewsCard';

const NewsContainer = () => {
  const [posts, setPosts] = useState([]);
  const [active, setActive] = useState('All');
  const [loading, setLoading] = useState(true);

  const filters = ['All', 'Teacher of the Month', 'Student of the Month', 'Event', 'Academy News'];

  const formatDate = (dateStr) => {
    try {
      const d = new Date(dateStr);
      return d.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
    } catch {
      return '';
    }
  };

  useEffect(() => {
    fetch('http://localhost:5000/api/posts')
      .then(res => res.json())
      .then(data => setPosts(Array.isArray(data) ? data : []))
      .catch(err => console.error(err))
      .finally(() => setLoading(false));
  }, []);

  const filtered = active === 'All'
    ? posts
    : posts.filter(p => p.category === active);

  return (
    <section className='Filter-section'>
      <div className="filter">
        <div className="filter-buttons">
          {filters.map(f => (
            <button
              key={f}
              className={active === f ? 'active' : ''}
              onClick={() => setActive(f)}
            >
              {f}
            </button>
          ))}
        </div>
        <i className="fa-solid fa-filter"></i>
      </div>
      <div className="filter-body">
        {loading ? (
          <p>Loading...</p>
        ) : filtered.length === 0 ? (
          <p>No posts found.</p>
        ) : (
          filtered.map(post => ( 
            <NewsCard
              key={post.id}
              image={post.image_url}
              title={post.category}
              date={formatDate(post.created_at)}
              name={post.title}
              content={post.body}
            />
          ))
        )}
      </div>
    </section>
  );
};

export default NewsContainer;