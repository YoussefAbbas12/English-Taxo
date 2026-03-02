const router = require('express').Router();
const db = require('../config/db');
const auth = require('../middleware/auth');

router.get('/', async (req, res) => {
  try {
    const [rows] = await db.query('SELECT * FROM offers');
    const offers = rows.map(o => ({
      ...o,
      features: typeof o.features === 'string' ? JSON.parse(o.features) : o.features
    }));
    res.json(offers);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.put('/:id', auth, async (req, res) => {
  const { title, subtitle, price, features } = req.body;
  try {
    await db.query(
      'UPDATE offers SET title=?, subtitle=?, price=?, features=? WHERE id=?',
      [title, subtitle, price, JSON.stringify(features), req.params.id]
    );
    res.json({ message: 'Offer updated' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;