const router = require('express').Router();
const db = require('../config/db');
const auth = require('../middleware/auth');

// للموقع - الطالب يدخل الـ ID بتاعه
router.get('/:id/public', async (req, res) => {
  try {
    const [rows] = await db.query('SELECT * FROM students WHERE id = ?', [req.params.id]);
    if (!rows.length) return res.status(404).json({ message: 'Student not found' });
    res.json(rows[0]);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// للداش بورد - كل الطلاب
router.get('/', auth, async (req, res) => {
  try {
    const [rows] = await db.query('SELECT * FROM students');
    res.json(rows);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// إضافة طالب
router.post('/', auth, async (req, res) => {
  const { id, name, course_type, current_level, teacher, enrolled_date,
          level_progress, expected_days, attended_days,
          assignments_total, assignments_submitted, profile_image } = req.body;
  try {
    await db.query(
      `INSERT INTO students VALUES (?,?,?,?,?,?,?,?,?,?,?,?)`,
      [id, name, course_type, current_level, teacher, enrolled_date,
       level_progress, expected_days, attended_days,
       assignments_total, assignments_submitted, profile_image || null]
    );
    res.status(201).json({ message: 'Student added' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// تعديل طالب
router.put('/:id', auth, async (req, res) => {
  const { name, course_type, current_level, teacher, enrolled_date,
          level_progress, expected_days, attended_days,
          assignments_total, assignments_submitted, profile_image } = req.body;
  try {
    await db.query(
      `UPDATE students SET name=?, course_type=?, current_level=?, teacher=?,
       enrolled_date=?, level_progress=?, expected_days=?, attended_days=?,
       assignments_total=?, assignments_submitted=?, profile_image=? WHERE id=?`,
      [name, course_type, current_level, teacher, enrolled_date,
       level_progress, expected_days, attended_days,
       assignments_total, assignments_submitted, profile_image || null, req.params.id]
    );
    res.json({ message: 'Student updated' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// حذف طالب
router.delete('/:id', auth, async (req, res) => {
  try {
    await db.query('DELETE FROM students WHERE id = ?', [req.params.id]);
    res.json({ message: 'Student deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;