const fastify = require('fastify')
const app = fastify();

const PORT = 3000;
app.get('/api/hello', (req, res) => {
  res.send('Hello from NodeJS!');
});

app.listen(() => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

app.get('/api/resorces/:id', async (req, res) => {
  res.send('Hello from NodeJS!');
});

app.post('/api/resources/', async (req) =>{
  const { name } = req.body;
  return { id: new Date().getTime(), name }
});

app.put('/api/resources/:id', async (req, res) => {
  const { id } = req.body;
  const { name } = req.body;
  return { id, name: name || `Updated Resource ${id}` }
});

app.delete('/api/resources/:id', async (req, res) => {
  const { id } = req.body;
  return { message: `Resource ${id} deleted` }
});

