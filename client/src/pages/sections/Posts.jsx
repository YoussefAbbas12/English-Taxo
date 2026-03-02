import { useEffect, useState } from 'react';

const CATEGORIES = ['Student of the Month', 'Teacher of the Month', 'Event', 'Academy News'];

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editingId, setEditingId] = useState(null);
  const [editForm, setEditForm] = useState({});
  const [deleteConfirm, setDeleteConfirm] = useState(null);
  const [showAddForm, setShowAddForm] = useState(false);
  const [addForm, setAddForm] = useState({ title: '', body: '', image_url: '', category: '' });
  const [search, setSearch] = useState('');

  const token = sessionStorage.getItem('admin_token');

  const fetchPosts = async () => {
    try {
      const res = await fetch('http://localhost:5000/api/posts', {
        headers: { Authorization: `Bearer ${token}` }
      });
      const data = await res.json();
      setPosts(Array.isArray(data) ? data : []);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { fetchPosts(); }, []);

  // ── Edit ──
  const startEdit = (post) => {
    setEditingId(post.id);
    setEditForm({ ...post });
  };

  const cancelEdit = () => { setEditingId(null); setEditForm({}); };

  const saveEdit = async (id) => {
    try {
      await fetch(`http://localhost:5000/api/posts/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
        body: JSON.stringify(editForm)
      });
      setEditingId(null);
      fetchPosts();
    } catch (err) { console.error(err); }
  };

  // ── Delete ──
  const handleDelete = async (id) => {
    try {
      await fetch(`http://localhost:5000/api/posts/${id}`, {
        method: 'DELETE',
        headers: { Authorization: `Bearer ${token}` }
      });
      setDeleteConfirm(null);
      fetchPosts();
    } catch (err) { console.error(err); }
  };

  // ── Add ──
  const handleAdd = async (e) => {
    e.preventDefault();
    try {
      await fetch('http://localhost:5000/api/posts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
        body: JSON.stringify(addForm)
      });
      setShowAddForm(false);
      setAddForm({ title: '', body: '', image_url: '', category: '' });
      fetchPosts();
    } catch (err) { console.error(err); }
  };

  const filtered = posts.filter(p =>
    p.title.toLowerCase().includes(search.toLowerCase()) ||
    p.category.toLowerCase().includes(search.toLowerCase())
  );

  const formatDate = (dateStr) => {
    try {
      return new Date(dateStr).toLocaleDateString('en-US', {
        year: 'numeric', month: 'long', day: 'numeric'
      });
    } catch { return ''; }
  };

  return (
    <div className="section-container">

      {/* Top Bar */}
      <div className="section-topbar">
        <input
          type="text"
          placeholder="Search by title or category..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="search-input"
        />
        <button className="add-btn" onClick={() => setShowAddForm(!showAddForm)}>
          <i className={`fa-solid ${showAddForm ? 'fa-minus' : 'fa-plus'}`}></i>
          {showAddForm ? 'Cancel' : 'Add Post'}
        </button>
      </div>

      {/* Add Form */}
      {showAddForm && (
        <div className="add-form-card">
          <h3>New Post</h3>
          <form onSubmit={handleAdd} className="form-grid">
            <div className="form-group">
              <label>Title</label>
              <input value={addForm.title} onChange={(e) => setAddForm({...addForm, title: e.target.value})} required />
            </div>
            <div className="form-group">
              <label>Category</label>
              <select value={addForm.category} onChange={(e) => setAddForm({...addForm, category: e.target.value})} required>
                <option value="">Select...</option>
                {CATEGORIES.map(c => <option key={c} value={c}>{c}</option>)}
              </select>
            </div>
            <div className="form-group full-width">
              <label>Image URL</label>
              <input value={addForm.image_url} onChange={(e) => setAddForm({...addForm, image_url: e.target.value})} placeholder="https://..." />
            </div>
            <div className="form-group full-width">
              <label>Body</label>
              <textarea rows={4} value={addForm.body} onChange={(e) => setAddForm({...addForm, body: e.target.value})} required />
            </div>
            <div className="form-group full-width" style={{display:'flex', justifyContent:'flex-end'}}>
              <button type="submit" className="save-btn" style={{padding:'10px 24px', borderRadius:'8px', border:'none', cursor:'pointer'}}>
                Add Post
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Table */}
      {loading ? <p>Loading...</p> : (
        <div className="table-wrapper">
          <table className="admin-table">
            <thead>
              <tr>
                <th>Image</th>
                <th>Title</th>
                <th>Category</th>
                <th>Body</th>
                <th>Date</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map(p => (
                <>
                  {/* Delete Alert */}
                  {deleteConfirm === p.id && (
                    <tr key={`alert-${p.id}`} className="delete-alert-row">
                      <td colSpan={6}>
                        <div className="delete-alert">
                          <span>⚠️ Delete <strong>{p.title}</strong>? This cannot be undone.</span>
                          <div>
                            <button onClick={() => setDeleteConfirm(null)}>Cancel</button>
                            <button className="delete-btn-confirm" onClick={() => handleDelete(p.id)}>Delete</button>
                          </div>
                        </div>
                      </td>
                    </tr>
                  )}

                  <tr key={p.id}>
                  <td>
                    {editingId === p.id ? (
                      <div style={{display:'flex', flexDirection:'column', gap:'6px', alignItems:'center'}}>
                        <img
                          src={editForm.image_url || 'assets/placeholder.svg'}
                          onError={(e) => e.target.src = 'assets/placeholder.svg'}
                          alt="preview"
                          className="post-thumb"
                        />
                        <input
                          className="inline-input"
                          placeholder="Image URL..."
                          value={editForm.image_url || ''}
                          onChange={(e) => setEditForm({...editForm, image_url: e.target.value})}
                          style={{width:'120px'}}
                        />
                      </div>
                    ) : (
                      <img
                        src={p.image_url}
                        alt={p.title}
                        className="post-thumb"
                      />
                    )}
                  </td>

                    {editingId === p.id ? (
                      <>
                        <td>
                          <input className="inline-input" value={editForm.title}
                            onChange={(e) => setEditForm({...editForm, title: e.target.value})} />
                        </td>
                        <td>
                          <select className="inline-input" value={editForm.category}
                            onChange={(e) => setEditForm({...editForm, category: e.target.value})}>
                            {CATEGORIES.map(c => <option key={c} value={c}>{c}</option>)}
                          </select>
                        </td>
                        <td colSpan={2}>
                          <textarea
                            className="inline-input"
                            rows={3}
                            style={{width:'100%', resize:'vertical'}}
                            value={editForm.body}
                            onChange={(e) => setEditForm({...editForm, body: e.target.value})}
                          />
                        </td>
                        <td>
                          <div className="action-btns">
                            <button className="save-inline-btn" onClick={() => saveEdit(p.id)}>
                              <i className="fa-solid fa-check"></i>
                            </button>
                            <button className="cancel-inline-btn" onClick={cancelEdit}>
                              <i className="fa-solid fa-xmark"></i>
                            </button>
                          </div>
                        </td>
                      </>
                    ) : (
                      <>
                        <td>{p.title}</td>
                        <td><span className="category-badge">{p.category}</span></td>
                        <td className="body-preview">{p.body?.substring(0, 60)}...</td>
                        <td>{formatDate(p.created_at)}</td>
                        <td>
                          <div className="action-btns">
                            <button className="edit-btn" onClick={() => startEdit(p)}>
                              <i className="fa-solid fa-pen"></i>
                            </button>
                            <button className="delete-btn" onClick={() => setDeleteConfirm(p.id)}>
                              <i className="fa-solid fa-trash"></i>
                            </button>
                          </div>
                        </td>
                      </>
                    )}
                  </tr>
                </>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Posts;