const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt-nodejs');

/* Define a Model */
const userSchema = new Schema({
    email: { type: String, unique: true, lowercase: true },
    password: String
});

/* On save Hook, encrypt password */
/* Before saving a model, run this function */
userSchema.pre('save', function(next){
    /* Get access to the user model */
    const user = this;

    /* Generate a salt */
    bcrypt.genSalt(10, function(err, salt){
        if (err) { return next(err); }

        /* Hash (encrypt) our password using the salt */
        bcrypt.hash(user.password, salt, null, function(err, hash){
            if (err) { return next(err); }

            /* overwrite plain text password with encrypted password */
            user.password = hash;
            next();
        });
    });
});

/* Create the modal class */
const ModelClass = mongoose.model('user', userSchema);

/* Export the model */
module.exports = ModelClass;
