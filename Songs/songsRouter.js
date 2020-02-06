const axios = require('axios');

const router = require('express').Router();

router.get('/', async (req, res) => {
  const requestOptions = {
    headers: { accept: 'application/json' },
  };

  await axios
    .get('https://symphinity17.herokuapp.com/id/6')
    .then(response => {
        console.log(response)
      res.status(200).json(response.data);
    })
    console.log(err)
    .catch(err => {
      res.status(500).json({ message: 'Error Fetching songs', error: err });
    });
});

module.exports = router;