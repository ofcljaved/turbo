import express from 'express';
import { VALUE } from '@repo/common/common';
const app = express();
console.log(VALUE);

app.get('/', (req, res) => {
  res.json({
    success: 'true',
    message: 'Health is ohk',
    VALUE,
  });
});

app.listen(8888, () => {
  console.log('Server is running on 8888');
});
