const axios = require('axios');

const express = require('express');
const Songs = require('./songsModel.js');

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

router.get('/song/:id', (req,res) => {
    const{id} = req.params;
    Songs.findById(id)
    .then(song => {
        if(song){
            res.json(song);
        } else {
            res.status(404).json({ message: 'could not find song with given id.'})
        }
        
    })
    .catch(err => {
        res.status(500).json({ message: 'failed to get song'});
    });
});

router.put('/songs/change/:id', (req, res) =>{
    const editData = req.body;
    const {id} = req.params;

    Songs.findById(id)
        .then(song => {
            if(song){
                Songs.update(editData, id)
                .then(updatedstep =>{
                    res.json(updatedstep);
                })
            } else{
                res.status(404).json({message: 'failed to edit favorite songs'});
            }
        })
        .catch(err =>{
            res.status(500).json({message: 'failed to edit new favorite song'});
        });
});

router.delete('/:id', (req, res) => {
    const { id } = req.params;
  
    Songs.remove(id)
    .then(deleted => {
      if (deleted) {
        res.json({ removed: deleted });
      } else {
        res.status(404).json({ message: 'Could not find song with given id' });
      }
    })
    .catch(err => {
      res.status(500).json({ message: 'Failed to delete song' });
    });
  });
module.exports = router;