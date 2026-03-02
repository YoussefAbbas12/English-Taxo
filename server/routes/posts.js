const router = require('express').Router();
const db = require('../config/db');
const auth = require('../middleware/auth');

// للموقع - عرض كل البوستات بدون auth
router.get('/', async (req, res) => {
  try {
    const [rows] = await db.query('SELECT * FROM posts ORDER BY created_at DESC');
    res.json(rows);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// جيب بوست واحد
router.get('/:id', async (req, res) => {
  try {
    const [rows] = await db.query('SELECT * FROM posts WHERE id = ?', [req.params.id]);
    if (!rows.length) return res.status(404).json({ message: 'Post not found' });
    res.json(rows[0]);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// إضافة بوست - للأدمن بس
router.post('/', auth, async (req, res) => {
  const { title, body, image_url, category } = req.body;
  try {
    await db.query(
      'INSERT INTO posts (title, body, image_url, category) VALUES (?,?,?,?)',
      [title, body, image_url || null, category]
    );
    res.status(201).json({ message: 'Post created' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// تعديل بوست
router.put('/:id', auth, async (req, res) => {
  const { title, body, image_url, category } = req.body;
  try {
    await db.query(
      'UPDATE posts SET title=?, body=?, image_url=?, category=? WHERE id=?',
      [title, body, image_url || null, category, req.params.id]
    );
    res.json({ message: 'Post updated' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// حذف بوست
router.delete('/:id', auth, async (req, res) => {
  try {
    await db.query('DELETE FROM posts WHERE id = ?', [req.params.id]);
    res.json({ message: 'Post deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;