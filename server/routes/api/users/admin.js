const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const config = require('config');
const jwt = require('jsonwebtoken');


// User Model
const Admin = require('../../../models/Admin');

// @route   POST api/users/admin
// @desc    Register Admin
// @access  Public
router.post('/api/users/', (req, res) => {
    const { login, password } = req.body;

    // Validation
    if (!login || !password) {
        return res.status(400).json({ msg: 'Entrez touts les champs S.V.P' });
    }

    // Verification s'il existe
    Admin.findOne({ login })
        .then(admin => {
            if (admin) return res.status(400).json({ msg: 'Le compte admin existe deja' });

            const newAdmin = new Admin({
                login,
                password
            });
            // Creation salt & hash
            bcrypt.genSalt(10, (err, salt) => {
                bcrypt.hash(newAdmin.password, salt, (err, hash) => {
                    if (err) throw err;
                    newAdmin.password = hash;
                    newAdmin.save()
                        .then(admin => {
                            jwt.sign({ id: admin.id },
                                config.get('jwtSecret'), { expiresIn: 3600 },
                                (err, token) => {
                                    if (err) throw err;
                                    res.json({
                                        token,
                                        admin: {
                                            id: admin.id,
                                            login: admin.login
                                        }
                                    });
                                }
                            )
                        });
                })
            })
        });
});

module.exports = router;