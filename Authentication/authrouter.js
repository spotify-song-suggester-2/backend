const router = require('express').Router();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const user = require('./authmodel');

function makeToken(user){
    const payload ={
        username: user.name,
        id: user.id,
    };
    const options ={
        expiresIn: 'id',
    };

    return jwt.sign(payload,process.env.JWT_SECRET || 'jadoijfoijojt', options);

}

router.post('/register', (req, res) => {
    const{username, password} = req.body;

    user.insert({username, password:bcryptjs.hashSync(password, 9)})
    .then(id => {
        res.status(201).json({message: 'user successfully registered', id});
    })
    .then(err => {
        console.log(err);
        res.status(500).json({message:'sorry cannot register'});
    });
})

router.post('/login', (req, res) => {
    const {username, password} = req.body;

    user.findByUsername({username, password: bcrypt.hashSync(password, 9)})
    .then(id =>{
        if(user.password && bcrypt.compareSync(password,user.password)){
            const token = makeToken(user);
        res.status(201).json({message: 'you successfully logged in', token});
        } else{
            res.status(400).json({message:'hmm, something is wrong, please try again', id});
        }
    })

    .catch(err => {
        console.log(err);
        res.status(500).json({message: 'cannot complete request'});
    });
})

module.exports = router;