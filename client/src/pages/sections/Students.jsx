import { useEffect, useState } from 'react';

const LEVELS = ['A0', 'A1', 'A1+', 'A2', 'A2+', 'B1', 'B1+', 'B2', 'C1'];
const COURSES = ['General English', 'Business English', 'Kids & Teens', 'Intensive English'];

const emptyStudent = {
  id: '', name: '', course_type: '', current_level: '', teacher: '',
  enrolled_date: '', level_progress: 0, expected_days: 0, attended_days: 0,
  assignments_total: 0, assignments_submitted: 0, profile_image: ''
};

const Students = () => {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editingId, setEditingId] = useState(null);
  const [editForm, setEditForm] = useState({});
  const [deleteConfirm, setDeleteConfirm] = useState(null);
  const [showAddForm, setShowAddForm] = useState(false);
  const [addForm, setAddForm] = useState(emptyStudent);
  const [search, setSearch] = useState('');

  const token = sessionStorage.getItem('admin_token');

  const fetchStudents = async () => {
    try {
      const res = await fetch('http://localhost:5000/api/students', {
        headers: { Authorization: `Bearer ${token}` }
      });
      const data = await res.json();
      setStudents(Array.isArray(data) ? data : []);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { fetchStudents(); }, []);

  // ── Edit ──
  const startEdit = (student) => {
    setEditingId(student.id);
    setEditForm({ ...student, enrolled_date: student.enrolled_date?.split('T')[0] || '' });
  };

  const cancelEdit = () => { setEditingId(null); setEditForm({}); };

  const saveEdit = async (id) => {
    try {
      await fetch(`http://localhost:5000/api/students/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
        body: JSON.stringify(editForm)
      });
      setEditingId(null);
      fetchStudents();
    } catch (err) { console.error(err); }
  };

  // ── Delete ──
  const handleDelete = async (id) => {
    try {
      await fetch(`http://localhost:5000/api/students/${id}`, {
        method: 'DELETE',
        headers: { Authorization: `Bearer ${token}` }
      });
      setDeleteConfirm(null);
      fetchStudents();
    } catch (err) { console.error(err); }
  };

  // ── Add ──
  const handleAdd = async (e) => {
    e.preventDefault();
    try {
      await fetch('http://localhost:5000/api/students', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
        body: JSON.stringify(addForm)
      });
      setShowAddForm(false);
      setAddForm(emptyStudent);
      fetchStudents();
    } catch (err) { console.error(err); }
  };

  const filtered = students.filter(s =>
    s.name.toLowerCase().includes(search.toLowerCase()) ||
    s.id.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="section-container">

      {/* Top Bar */}
      <div className="section-topbar">
        <input
          type="text"
          placeholder="Search by name or ID..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="search-input"
        />
        <button className="add-btn" onClick={() => setShowAddForm(!showAddForm)}>
          <i className={`fa-solid ${showAddForm ? 'fa-minus' : 'fa-plus'}`}></i>
          {showAddForm ? 'Cancel' : 'Add Student'}
        </button>
      </div>

      {/* Add Form */}
      {showAddForm && (
        <div className="add-form-card">
          <h3>New Student</h3>
          <form onSubmit={handleAdd} className="form-grid">
            <div className="form-group">
              <label>Student ID</label>
              <input value={addForm.id} onChange={(e) => setAddForm({...addForm, id: e.target.value})} required />
            </div>
            <div className="form-group">
              <label>Full Name</label>
              <input value={addForm.name} onChange={(e) => setAddForm({...addForm, name: e.target.value})} required />
            </div>
            <div className="form-group">
              <label>Course Type</label>
              <select value={addForm.course_type} onChange={(e) => setAddForm({...addForm, course_type: e.target.value})} required>
                <option value="">Select...</option>
                {COURSES.map(c => <option key={c} value={c}>{c}</option>)}
              </select>
            </div>
            <div className="form-group">
              <label>Current Level</label>
              <select value={addForm.current_level} onChange={(e) => setAddForm({...addForm, current_level: e.target.value})} required>
                <option value="">Select...</option>
                {LEVELS.map(l => <option key={l} value={l}>{l}</option>)}
              </select>
            </div>
            <div className="form-group">
              <label>Teacher</label>
              <input value={addForm.teacher} onChange={(e) => setAddForm({...addForm, teacher: e.target.value})} required />
            </div>
            <div className="form-group">
              <label>Enrolled Date</label>
              <input type="date" value={addForm.enrolled_date} onChange={(e) => setAddForm({...addForm, enrolled_date: e.target.value})} required />
            </div>
            <div className="form-group">
              <label>Level Progress %</label>
              <input type="number" min="0" max="100" value={addForm.level_progress} onChange={(e) => setAddForm({...addForm, level_progress: e.target.value})} required />
            </div>
            <div className="form-group">
              <label>Expected Days</label>
              <input type="number" min="0" value={addForm.expected_days} onChange={(e) => setAddForm({...addForm, expected_days: e.target.value})} required />
            </div>
            <div className="form-group">
              <label>Attended Days</label>
              <input type="number" min="0" value={addForm.attended_days} onChange={(e) => setAddForm({...addForm, attended_days: e.target.value})} required />
            </div>
            <div className="form-group">
              <label>Total Assignments</label>
              <input type="number" min="0" value={addForm.assignments_total} onChange={(e) => setAddForm({...addForm, assignments_total: e.target.value})} required />
            </div>
            <div className="form-group">
              <label>Submitted Assignments</label>
              <input type="number" min="0" value={addForm.assignments_submitted} onChange={(e) => setAddForm({...addForm, assignments_submitted: e.target.value})} required />
            </div>
            <div className="form-group full-width">
              <label>Profile Image URL</label>
              <input value={addForm.profile_image} onChange={(e) => setAddForm({...addForm, profile_image: e.target.value})} placeholder="https://..." />
            </div>
            <div className="form-group full-width" style={{display:'flex', justifyContent:'flex-end'}}>
              <button type="submit" className="save-btn" style={{padding:'10px 24px', borderRadius:'8px', border:'none', cursor:'pointer'}}>
                Add Student
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
                <th>ID</th>
                <th>Name</th>
                <th>Course</th>
                <th>Level</th>
                <th>Teacher</th>
                <th>Progress</th>
                <th>Attendance</th>
                <th>Assignments</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map(s => (
                <>
                  {/* Delete Alert */}
                  {deleteConfirm === s.id && (
                    <tr key={`alert-${s.id}`} className="delete-alert-row">
                      <td colSpan={9}>
                        <div className="delete-alert">
                          <span>⚠️ Delete <strong>{s.name}</strong>? This cannot be undone.</span>
                          <div>
                            <button onClick={() => setDeleteConfirm(null)}>Cancel</button>
                            <button className="delete-btn-confirm" onClick={() => handleDelete(s.id)}>Delete</button>
                          </div>
                        </div>
                      </td>
                    </tr>
                  )}

                  <tr key={s.id}>
                    <td>{s.id}</td>

                    {editingId === s.id ? (
                      <>
                        <td>
                          <div style={{display:'flex', flexDirection:'column', gap:'6px'}}>
                            <input className="inline-input" value={editForm.name}
                              onChange={(e) => setEditForm({...editForm, name: e.target.value})} />
                            <div style={{display:'flex', alignItems:'center', gap:'6px'}}>
                              <img
                                src={editForm.profile_image || 'assets/userImage.svg'}
                                onError={(e) => e.target.src = 'assets/userImage.svg'}
                                alt="preview"
                                style={{width:'32px', height:'32px', borderRadius:'50%', objectFit:'cover', flexShrink:0}}
                              />
                              <input
                                className="inline-input"
                                placeholder="Image URL..."
                                value={editForm.profile_image || ''}
                                onChange={(e) => setEditForm({...editForm, profile_image: e.target.value})}
                              />
                            </div>
                          </div>
                        </td>
                        <td>
                          <select className="inline-input" value={editForm.course_type} onChange={(e) => setEditForm({...editForm, course_type: e.target.value})}>
                            {COURSES.map(c => <option key={c} value={c}>{c}</option>)}
                          </select>
                        </td>
                        <td>
                          <select className="inline-input" value={editForm.current_level} onChange={(e) => setEditForm({...editForm, current_level: e.target.value})}>
                            {LEVELS.map(l => <option key={l} value={l}>{l}</option>)}
                          </select>
                        </td>
                        <td><input className="inline-input" value={editForm.teacher} onChange={(e) => setEditForm({...editForm, teacher: e.target.value})} /></td>
                        <td><input className="inline-input" type="number" min="0" max="100" value={editForm.level_progress} onChange={(e) => setEditForm({...editForm, level_progress: e.target.value})} /></td>
                        <td>
                          <div style={{display:'flex', gap:'4px'}}>
                            <input className="inline-input" style={{width:'45px'}} type="number" value={editForm.attended_days} onChange={(e) => setEditForm({...editForm, attended_days: e.target.value})} />
                            <span>/</span>
                            <input className="inline-input" style={{width:'45px'}} type="number" value={editForm.expected_days} onChange={(e) => setEditForm({...editForm, expected_days: e.target.value})} />
                          </div>
                        </td>
                        <td>
                          <div style={{display:'flex', gap:'4px'}}>
                            <input className="inline-input" style={{width:'45px'}} type="number" value={editForm.assignments_submitted} onChange={(e) => setEditForm({...editForm, assignments_submitted: e.target.value})} />
                            <span>/</span>
                            <input className="inline-input" style={{width:'45px'}} type="number" value={editForm.assignments_total} onChange={(e) => setEditForm({...editForm, assignments_total: e.target.value})} />
                          </div>
                        </td>
                        <td>
                          <div className="action-btns">
                            <button className="save-inline-btn" onClick={() => saveEdit(s.id)}>
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
                        <td>
                          <div className="student-name-cell">
                            <img src={s.profile_image || 'assets/userImage.svg'} onError={(e) => e.target.src = 'assets/userImage.svg'} alt={s.name} />
                            {s.name}
                          </div>
                        </td>
                        <td>{s.course_type}</td>
                        <td><span className="level-badge">{s.current_level}</span></td>
                        <td>{s.teacher}</td>
                        <td>{s.level_progress}%</td>
                        <td>{s.attended_days}/{s.expected_days}</td>
                        <td>{s.assignments_submitted}/{s.assignments_total}</td>
                        <td>
                          <div className="action-btns">
                            <button className="edit-btn" onClick={() => startEdit(s)}>
                              <i className="fa-solid fa-pen"></i>
                            </button>
                            <button className="delete-btn" onClick={() => setDeleteConfirm(s.id)}>
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

export default Students;