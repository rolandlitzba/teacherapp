const setupServer = require('./setup-server');
const app = setupServer();
const Classes = require('./models/Classes');

app.post('/class', (req, res) => {
  Classes.create(req.body)
    .then(classes => res.json(classes))
    .catch(err => res.json(err));
});

app.get('/class', (req, res) => {
  Classes.find()
    .then(cardItem => res.json(cardItem))
    .catch(err => res.json(err));
});

app.patch('/class/:id', (req, res) => {
  const { id } = req.params;
  Classes.findByIdAndUpdate(id, req.body, { new: true })
    .then(card => res.json(card))
    .catch(err => res.json(err));
});

app.delete('/class/:id', (req, res) => {
  const { id } = req.params;
  Classes.findOneAndRemove({ classId: id })
    .then(classes => res.json(classes))
    .catch(err => res.json(err));
});
