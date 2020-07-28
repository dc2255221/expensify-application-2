const User = require('../models/user');

const registerUser = async (req, res) => {
    const user = await new User(req.body);
    try {
        // Hash password before saving in database
        await user.save();
        const token = await user.generateAuthToken();
        res.status(201).send({ user, token });
    } catch (e) {
        res.status(400).send(e);
    }
}

const loginUser = async (req, res) => {
    try {
        // Find user with input email and validate whether password matches hashed password in db  
        const user = await User.findByCredentials(req.body.email, req.body.password);
        const token = await user.generateAuthToken();
        res.send({ user, token });
    } catch (e) {
        res.status(400).send({ error: "Unable to login"});
    }
}

const getUserProfile = async (req, res) => {
    res.send(req.user);
}

const logoutUser = async (req, res) => {
    try {
        req.user.tokens = req.user.tokens.filter((token) => {
            return token.token !== req.token;
        })
        await req.user.save();
        res.send();
    } catch (e) {
        res.status(500).send();
    }
}

const logoutAll = async (req, res) => {
    try {
        req.user.tokens = [];
        await req.user.save();
        res.send();
    } catch (e) {
        res.status(500).send();
    }
}

const updateUserProfile = async (req, res) => {
    const updates = Object.keys(req.body);
    const allowedUpdates = ["firstName", "lastName", "email", "password", "age"];
    const isValidOperation = updates.every((update) => allowedUpdates.includes(update));
    if (!isValidOperation) {
        return res.status(400).send({ error: 'Invalid updates' });
    }
    try {
        // const user = await User.findById(req.params.id);
        updates.forEach((update) => {
            req.user[update] = req.body[update];
        });
        await req.user.save();
        // const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        // if (!user) {
        //     return res.status(404).send();
        // }
        res.send(req.user);
    } catch (e) {
        res.status(400).send(e);
    }
}

const deleteUser = async (req, res) => {
    try {
        // const user = await User.findByIdAndDelete(req.user_id);
        // if (!user) {
        //     return res.status(404).send();
        // }
        // Delete user expenses when user is removed
        await req.user.remove();
        res.send(req.user);
    } catch (e) {
        res.status(500).send(e);
    }
}

module.exports = {
    registerUser,
    loginUser,
    getUserProfile, 
    logoutUser,
    logoutAll,
    updateUserProfile,
    deleteUser
}