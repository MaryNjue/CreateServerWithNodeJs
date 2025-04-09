const express = require('express');
const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World, Shi!');
});

app.get('/message', (req,res) =>{
    res.json({type: 'message', mood:  'cozy'});
})

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
