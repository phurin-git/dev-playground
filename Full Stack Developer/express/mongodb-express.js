const express = require('express');
const app = express();
const port = 5500;
const host = 'localhost';
app.use(express.json());

const { MongoClient, ServerApiVersion } = require("mongodb");
const uri = "mongodb://localhost:27017/";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri,  {
        serverApi: {
            version: ServerApiVersion.v1,
            strict: true,
            deprecationErrors: true,
        }
    }
);

////////////////////////////////////////
// Test connection to MongoDB
const run = async (method='', query='') => {
  let results;
  try {
    // Connect the client to the server (optional starting in v4.7)
    await client.connect();

    // Send a ping to confirm a successful connection
    //await client.db("local").command({ ping: 1 });
    //console.log("Pinged your deployment. You successfully connected to MongoDB!");

    const coll = await client.db("local").collection("sales")
    if (method === 'findOne')  results = await coll.findOne(query).toArray()
    else if (method === 'find') results = await coll.find(query).toArray()
    else if (method === 'insertOne') results = await coll.insertOne(query)

    else if (method === 'updateOne') results = await coll.updateOne(query)
    else if (method === 'deleteOne') results = await coll.deleteOne(query)
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
    return results;
  }
}
run().catch(console.dir);

////////////////////////////////////////

app.get('/', (req, res) => {
    res.send('Welcome to our API');
});

// GET Structure

app.get('/sales', async (req, res) => {
    console.log('Calling /sales endpoint');
    const requestedItem = await run('findOne', req.body);
    if(requestedItem) {
        res.status(200).send(requestedItem);
    } else {
        res.status(404).send({ message: 'The product could not be found'});
    };
});

// POST Structure

app.post('/sales', async (req, res) => {
    console.log('Calling /sales endpoint');
    const objId = (await run('insertOne', req.body)).insertedId;
    const confirmedEntry = await run('findOne', objId);
    if(confirmedEntry) {
        res.status(201).send(confirmedEntry);
    } else {
        res.status(400).send({ message: 'The product could not be created'});
    };
});

// DELETE Structure

app.delete('/sales', async (req, res) => {
  console.log('Calling /sales endpoint');
    try {
        console.log(await run('deleteOne', req.body));
        res.status(200).send(await run('find', {}));
    } catch (e) {
        res.status(404).send({ message: 'The product could not be deleted'});
    }
});

// PUT Structure

app.put('/sales', async (req, res) => {
  console.log('Calling /sales endpoint');
  const body = req.body;
  const item = await run('findOne', body);

  if (item) {
    res.status(200).send(item);
    } else {
        try {
          await run('updateOne', body);
          let confirmedEntry = await run('findOne', body);
          res.status(200).send(confirmedEntry);
        } catch (e) {
          res.status(404).send({ message: 'The product could not be updated'});
        };
    };
});

app.listen(port, host, () => {
    console.log(`Server is running at ${host} on port ${ port }`);
});