const validator = require('validator');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const Admin = require('../models/admin');

const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: '1d' });
}

const register = async (req, res) => {
    const { username, email, password } = req.body;

    if (!username || !email || !password) {
        return res.status(400).json({ 'error': 'Input fields cannot be empty' });
    }

    if (!validator.isEmail(email)) {
        return res.status(400).json({ 'error': 'Enter a valid email' });
    }

    if (!validator.isStrongPassword(password)) {
        return res.status(400).json({ 'error': 'Enter a strong password that contains uppercase and lowercase letters, numbers and special characters' });
    }

    const emailExists = await Admin.findOne({ email });

    if (emailExists) {
        return res.status(400).json({ 'error': 'Email exists already, use another email' });
    }

    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);

    const admin = await Admin.create({ username, email, password: hash });

    if (!admin) {
        return res.status(500).json({ 'error': 'An error occured, try again later' });
    }

    return res.status(200).json({ 'message': 'Registration successful' });
}

const login = async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ 'error': 'Input fields cannot be empty' });
    }

    const admin = await Admin.findOne({ email });

    if (!admin) {
        return res.status(404).json({ 'error': 'Email does not exist' });
    }

    const passwordMatches = await bcrypt.compare(password, admin.password);

    if (!passwordMatches) {
        return res.status(400).json({ 'error': 'Password is Incorrect' });
    }

    return res.status(200).json({ 'message': 'Login successful', 'id': admin.id, 'email': admin.email, 'token': generateToken(admin._id) });
}

const adminProfile = async (req, res) => {
    const { _id, username, email } = await Admin.findById(req.admin.id);

    return res.status(200).json({ 'admin': { id: _id, username, email } });
}

module.exports = {
    register,
    login,
    adminProfile,
}