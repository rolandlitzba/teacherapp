const setupServer = require('./server-setup');
const app = setupServer();
const Classes = require('./models/Classes');

app.post('/classes', (req, res) => {
  Classes.create(req.body)
    .then(classes => res.json(classes))
    .catch(err => res.json(err));
});

app.get('/classes', (req, res) => {
  Classes.find()
    .then(cardItem => res.json(cardItem))
    .catch(err => res.json(err));
});

app.patch('/classes/:id', (req, res) => {
  const { id } = req.params;
  Classes.findByIdAndUpdate(id, req.body, { new: true })
    .then(card => res.json(card))
    .catch(err => res.json(err));
});
