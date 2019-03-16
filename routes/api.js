const express = require('express');
const router = express.Router();

// get a list of people from the db
router.get('/people', function(req, res){
    res.send({type: 'GET'});
});

// add new person to the db
router.post('/people', function(req, res){
    console.log(req.body);
    res.send({
        type: 'POST',
        name: req.body.name,
        age: req.body.age
    });
});

// update a person in the db
router.put('/people/:id', function(req, res){
    res.send({type: 'PUT'});
});

// delete a person from the db
router.delete('/people/:id', function(req, res){
    res.send({type: 'DELETE'});
});

module.exports = router;