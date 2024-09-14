const express = require('express');
const app = express();
const port = 5500;
const host = 'localhost';

app.get('/', (req, res) => {
    res.send('Welcome to our API');
});

// Express Router

//Basics

const usersRouter = require('./users.js');
app.use('/users', usersRouter)

// The Router Object

const router = express.Router();

router.use('/clothing',(req, res, next) => {
    console.log('Router use for /clothing');
    next();
});

router.get('/clothing', (req, res, next) => {
    res.send('Router is getting all clothing info')
});

router.param('clothingId', (req, res, next, clothingId) => {
    if(clothingId) {
      console.log(`This is a request for the Clothing ID: ${clothingId}`)
    }
    next();
});
  
  router.get('/clothing/:clothingId', (req, res) => {
    res.send('Router is getting a specific clothing info');
});

app.use('/products', router);

// Handle all HTTP methods in single route

const validateAuth = (req, res, next) => {
    if(req.params.userId) {
      console.log('User Identified');
    }
    next();
  }
  
  router.route('/user/:userId')
  .all(validateAuth)
  .get((req, res) => res.send('Getting the user information'))
  .post((req, res) => res.send('Posting the user information'))
  .put((req, res) => res.send('Updating the user information'))
  .delete((req, res) => res.send('Deleting the user information'));
  
  app.use('/main', router);

// RESTful API

let products = [
    {category: 'electronics', price: 400, title:'phone', id: 1},
    {category: 'electronics', price: 900, title:'phone', id: 2},
    {category: 'electronics', price: 200, title:'phone', id: 3},
];

// GET Structure

app.get('/products/:id', (req, res) => {
    const params = req.params;
    const requestedProduct = products.find(product => product.id === parseInt(params.id));
    if(requestedProduct) {
        res.status(200).send(requestedProduct);
    } else {
        res.status(404).send({ message: `The product with the id ${ params.id } does not exist`});
    };
});

/*
app.get('/products/:id', (req, res) => {
  const productID = req.params.id
  connection.query('SELECT * FROM Product WHERE id = ?', productID, (error, results) => {
    if(error) {
      res.status(500).json(error)
    }
    res.status(200).send(results)
  })
*/

// POST Structure

app.post('/products', (req, res) => {
    console.log('Calling /products endpoint');
    const newProduct = req.body;
    products.push(newProduct);
    const confirmedEntry = products.find(product => product === newProduct);
    if(confirmedEntry) {
        res.status(201).send(confirmedEntry);
    } else {
        res.status(400).send({ message: 'The product could not be added'});
    };
});

/*
app.post('/products', (req, res) => {
  console.log('Calling /products endpoint')
  const formData = req.body
  connect.query('INSERT INTO Product set ?', formData, (error, results) => {
    if (error) {
      res.status(500).json(error)
    }
    const newProductId = results.insertId
    connection.query('SELECT * FROM Product WHERE id = ?', newProductId, (error, results) => {
      id (error) {
        res.status(500).json(error)
      }
      const newProduct = results[0]
      res.status(201).send(newProduct)
    })
  })
})
*/

// DELETE Structure

app.delete('/products/:id', (req, res) => {
    const id = parseInt(req.params.id);
    try {
        products = products.filter(product => product.id !== id);
        res.status(200).send(products);
    } catch (e) {
        res.status(404).send({ message: `the product with the id ${ req.params.id } does not exist`});
    }
});

/*
router.delete('/products/:id', (request, response) => {
	const productId = request.params.id
	connection.query('DELETE FROM Product WHERE id = ?', productId, (error, results) => {
		if (error)
			response.status(500).json(error)
		connection.query('SELECT * FROM Product', productId, (error, results) => {
			if (error)
				res.status(500).json(error)
			const updatedDB = results
			response.status(200).json(updatedDB)
		})
	})
})
*/
// PUT Structure

app.put('/products/:id', (req, res) => {
    const params = req.params;
    const body = req.body;
    let index = products.findIndex(product => product.id === parseInt(params.id));

    if (index !== 0) {
        products[index] = body;
        let confirmedEntry = products[index];
        res.status(200).send(confirmedEntry);
    } else {
        try {
            products.push(body);
            let confirmedEntry = products[products.length - 1];
            res.status(200).send(confirmedEntry);
        } catch (e) {
            res.status(404).send({ message: 'The product could not be updated'});
        };
    };
});

/*
app.put('/products/:id', (request,
	response) => {
	const productId = request.params.id
	const formData = request.body
	connection.query('UPDATE Product SET ? WHERE id = ?',[formData, productId], (error, results) => {
		if (error)
			res.status(500).json(error)
		connection.query('SELECT * FROM Product WHERE id = ?',productId, (error, results) => {
		  if (error)
			  res.status(500).json(error)
		  const updatedProduct = results
			response.status(200).json(updatedProduct)
			})
	})
})
*/

app.listen(port, host, () => {
    console.log(`Server is running at ${host} on port ${ port }`);
});