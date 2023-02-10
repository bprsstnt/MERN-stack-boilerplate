const express = require('express');
const app = express();
const port = 3017;
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors  = require('cors');
const { auth } = require("./middleware/auth");
const { User } = require('./models/user');


app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());

mongoose.set('strictQuery', false);
mongoose.connect('mongodb://127.0.0.1:27017/mern', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.get('/', (req, res) => {
    res.send('Hello, World!');
})

app.post('/api/users/login', (req, res) => {
    User.findOne({email: req.body.email}, (err, user) => {
        if(!user) {
            return res.json({
                loginSuccess: false,
                message: "No user found."
            });
        }

        user.comparePassword(req.body.password, (err, isMatch) => {
            if(!isMatch) {
                return res.json({
                    loginSuccess: false,
                    message: err
                });
            }
            
            user.generateToken((err, user) => {
                if(err) return res.statusMessage(400).send(err);

                res.cookie("x_auth", user.token)
                .status(200)
                .json({
                    loginSuccess: true,
                    userId: user._id
                });
            })
        })
    })
})

app.post('/api/users/register', (req, res) => {
    const user = new User(req.body); // @TODO: body-parser

    user.save((err, userInfo) => {
        if(err) return res.json({success: false, err});
        return res.status(200).json({
            createdUser: user.name,
            success: true
        })
    });
})

app.get('/api/users/logout', auth, (req, res) => {
    User.findOneAndUpdate({_id: req.user._id}, 
        {token: ""}, 
        (err, user) => {
        if(err) return res.json({success: false, err});
        return res.status(200).send({
            success: true
        })
    })
})

app.listen(port, () => {
    console.log(`App is listening at port ${port}`);
})