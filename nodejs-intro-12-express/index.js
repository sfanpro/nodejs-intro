import express from 'express';
import { nanoid } from 'nanoid';
import cors from 'cors';

const app = express();
const port = 3000;

var courses = [
  { id: nanoid(), title: "Розвинений курс з Java", duration: "50 годин" },
  { id: nanoid(), title: "Початковий курс з JavaScript", duration: "10 годин" },
  { id: nanoid(), title: "Розвинений курс з React", duration: "20 годин" },
  { id: nanoid(), title: "Продвинутий курс з Node.js", duration: "25 годин" }
];

app.use(cors());

app.all('*', (req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  next();
});

app.use(express.json());

app.get('/courses', (req, res) => {
  console.log(req.header);
  res.json(courses);
});

app.get('/courses/:id', async (req, res, next) => {
  const courseId = req.params.id;
  try {
    const course = await courses.find(course => course.id === courseId);
    if (!course) {
      const error = new Error('Курс не знайдено')
      error.status(404);
      throw error;
    } else {
      res.json(course);
    }
  } catch (error) {
    next(error);
  }
});

app.post('/courses', (req, res) => {
  const newCourse = req.body;
  newCourse.id = nanoid();
  courses.push(newCourse);
  res.status(201).json({ message: 'Курс успішно додано', course: newCourse });
});

app.put('/courses/:id', async (req, res, next) => {
  const courseId = req.params.id;
  const updatedCourse = req.body;
  const index = await courses.findIndex(course => course.id === courseId);
  try {
    if (index === -1) {
      const error = new Error('Курс не знайдено')
      error.status(404);
      throw error;
    } else {
      courses[index] = { ...courses[index], ...updatedCourse };
      res.json({ message: 'Курс успішно оновлено', course: courses[index] });
    }
  } catch (error) {
    next(error);
  }
});

app.delete('/courses/:id', (req, res) => {
  const courseId = req.params.id;
  const index = courses.findIndex(course => course.id === courseId);
  if (index === -1) {
    res.status(404).json({ message: 'Курс не знайдено' });
  } else {
    courses.splice(index, 1);
    res.json({ message: 'Курс успішно видалено' });
  }
});

app.use((error, req, res, next) => {
  res.status(error.status).json({ message: error.message });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
