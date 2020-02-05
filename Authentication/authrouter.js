const router = require('express').Router();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const user = require('./authmodel');

function makeToken(user){
    const payload ={
        username: user.username,
        id: user.id,
    };
    const options ={
        expiresIn: '1d',
    };

    return jwt.sign(payload,process.env.JWT_SECRET || 'jadoijfoijojt', options);

}

router.post('/register', (req, res) => {
    const{username, password} = req.body;

    user.insert({username, password:bcrypt.hashSync(password, 9)})
    .then(id => {
        res.status(201).json({message: 'user successfully registered', id});
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({message:'sorry cannot register'});
    });
})

router.post('/login', (req, res) => {
    let {username, password} = req.body;

    user.findByUsername({username})
    .first()
    .then(user =>{
        if(user && bcrypt.compareSync(password,user.password)){
            const token = makeToken(user);
        res.status(201).json({message: 'you successfully logged in', token, user});
        } else{
            res.status(400).json({message:'hmm, something is wrong, please try again', user});
        }
    })

    .catch(err => {
        console.log(err);
        res.status(500).json({message: 'cannot complete request'});
    });
})

module.exports = router;