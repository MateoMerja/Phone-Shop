const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/userModel');


const JWT_SECRET = process.env.JWT_SECRET || 'verysecretjwtkey';
const JWT_EXPIRES_IN = '7d';


async function register(req, res) {
try {
const { first_name, password } = req.body;
if (!first_name || !password) {
return res.status(400).json({ message: 'first_name and password are required' });
}


// check if user with same first_name exists (optional)
const existing = await User.findOne({ first_name });
if (existing) {
return res.status(409).json({ message: 'User with that first_name already exists' });
}


const saltRounds = 10;
const hashed = await bcrypt.hash(password, saltRounds);


const newUser = new User({ first_name, password: hashed });
await newUser.save();


const token = jwt.sign({ id: newUser._id, first_name: newUser.first_name }, JWT_SECRET, { expiresIn: JWT_EXPIRES_IN });


return res.status(201).json({ message: 'User created', token, user: { id: newUser._id, first_name: newUser.first_name } });
} catch (err) {
console.error(err);
return res.status(500).json({ message: 'Server error' });
}
}


async function login(req, res) {
try {
const { first_name, password } = req.body;
if (!first_name || !password) {
return res.status(400).json({ message: 'first_name and password are required' });
}


const user = await User.findOne({ first_name });
if (!user) return res.status(401).json({ message: 'Invalid credentials' });


const match = await bcrypt.compare(password, user.password);
if (!match) return res.status(401).json({ message: 'Invalid credentials' });


const token = jwt.sign({ id: user._id, first_name: user.first_name }, JWT_SECRET, { expiresIn: JWT_EXPIRES_IN });


return res.json({ message: 'Logged in', token, user: { id: user._id, first_name: user.first_name } });
} catch (err) {
console.error(err);
return res.status(500).json({ message: 'Server error' });
}
}


module.exports = { register, login };