var express = require('express');

var app = express();
const cors = require('cors');
const jwt =  require('jsonwebtoken');
const bodyParser = require('body-parser');
const fs = require('fs');
const { parse } = require('path');
const parser = require('./utils/parser');
app.use(bodyParser.json());

app.use(cors());

const users = [
    {
        username: 'Gandalf',
        password: 'Mellon',
        role: 'admin'
    }, {
    }
];


app.post('/login', (req, res) => {
    // Read username and password from request body
    const { username, password } = req.body;
    // Filter user from the users arr ay by username and password
    const user = users.find(u => { return u.username === username && u.password === password });

    if (user) {
        // Generate an access token
        kid = "./keys/publickey.crt"
        const accessTokenSecret = fs.readFileSync(kid, 'utf8');
       
        const accessToken = jwt.sign({ username: user.username,  role: user.role }, accessTokenSecret,{keyid: kid});
        res.set('Access-Control-Allow-Origin', '*');
        res.json({
            accessToken
        });
    } else {
        res.json({"message":"Username or password incorrect"});
    }
});



app.post('/validate', function (req, res) {
    const token = req.body.accessToken;
    if (!token) {
        return res.status(403).send("A token is required for authentication");
    }
    kid = parser.parseJwt(token)['kid']
    username = parser.parseJwtname(token)['username']
    try {
        var key = fs.readFileSync(kid, 'utf8');
        } catch(err) {
            key = 'key not found'
    }

    try {
        const decoded = jwt.verify(token,key);
    } catch(e) {
        return res.status(401).send({message:"Invalid Token","k":key});
    }
    
    res.set('Access-Control-Allow-Origin', '*');
    res.json({
        "message":username,
        "k":key
    });
});

app.listen(4000, function () {
  console.log('App listening on port 4000!');
});
