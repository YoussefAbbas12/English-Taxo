import { useEffect, useState } from 'react';

const Offers = () => {
  const [offers, setOffers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editingId, setEditingId] = useState(null);
  const [editForm, setEditForm] = useState({});

  const token = sessionStorage.getItem('admin_token');

  const fetchOffers = async () => {
    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/api/offers`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      const data = await res.json();
      setOffers(Array.isArray(data) ? data : []);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { fetchOffers(); }, []);

  const startEdit = (offer) => {
    setEditingId(offer.id);
    setEditForm({ ...offer, features: [...offer.features] });
  };

  const cancelEdit = () => { setEditingId(null); setEditForm({}); };

  const saveEdit = async (id) => {
    try {
      await fetch(`${import.meta.env.VITE_API_URL}/api/offers/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
        body: JSON.stringify(editForm)
      });
      setEditingId(null);
      fetchOffers();
    } catch (err) { console.error(err); }
  };

  const updateFeature = (index, value) => {
    const updated = [...editForm.features];
    updated[index] = value;
    setEditForm({ ...editForm, features: updated });
  };

  const addFeature = () => {
    setEditForm({ ...editForm, features: [...editForm.features, ''] });
  };

  const removeFeature = (index) => {
    const updated = editForm.features.filter((_, i) => i !== index);
    setEditForm({ ...editForm, features: updated });
  };

  if (loading) return <p>Loading...</p>;

  return (
    <div className="section-container">
      <div className="offers-grid">
        {offers.map(offer => (
          <div className="offer-card" key={offer.id}>
            {editingId === offer.id ? (
              <>
                <div className="offer-card-header">
                  <h3>Editing...</h3>
                  <div className="action-btns">
                    <button className="save-inline-btn" onClick={() => saveEdit(offer.id)}>
                      <i className="fa-solid fa-check"></i>
                    </button>
                    <button className="cancel-inline-btn" onClick={cancelEdit}>
                      <i className="fa-solid fa-xmark"></i>
                    </button>
                  </div>
                </div>
                <div className="offer-edit-fields">
                  <div className="offer-edit-row">
                    <label>Title</label>
                    <input className="inline-input" value={editForm.title}
                      onChange={(e) => setEditForm({...editForm, title: e.target.value})} />
                  </div>
                  <div className="offer-edit-row">
                    <label>Subtitle</label>
                    <input className="inline-input" value={editForm.subtitle}
                      onChange={(e) => setEditForm({...editForm, subtitle: e.target.value})} />
                  </div>
                  <div className="offer-edit-row">
                    <label>Price (EGP)</label>
                    <input className="inline-input" type="number" value={editForm.price}
                      onChange={(e) => setEditForm({...editForm, price: e.target.value})} />
                  </div>
                  <div className="offer-features-edit">
                    <label>Features</label>
                    {editForm.features.map((f, i) => (
                      <div key={i} className="feature-edit-row">
                        <input className="inline-input" value={f}
                          onChange={(e) => updateFeature(i, e.target.value)} />
                        <button className="cancel-inline-btn" onClick={() => removeFeature(i)}>
                          <i className="fa-solid fa-xmark"></i>
                        </button>
                      </div>
                    ))}
                    <button className="add-feature-btn" onClick={addFeature}>
                      <i className="fa-solid fa-plus"></i> Add Feature
                    </button>
                  </div>
                </div>
              </>
            ) : (
              <>
                <div className="offer-card-header">
                  <h3>{offer.title}</h3>
                  <button className="edit-btn" onClick={() => startEdit(offer)}>
                    <i className="fa-solid fa-pen"></i> Edit
                  </button>
                </div>
                <p className="offer-subtitle">{offer.subtitle}</p>
                <div className="offer-details">
                  <div className="offer-detail">
                    <span>Price</span>
                    <strong>EGP {offer.price} /month</strong>
                  </div>
                  {offer.features.map((f, i) => (
                    <div className="offer-detail" key={i}>
                      <span>{f}</span>
                      <strong>✓</strong>
                    </div>
                  ))}
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Offers;