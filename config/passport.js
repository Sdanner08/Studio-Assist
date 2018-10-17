const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const mongoose = require('mongoose')
const db = require("../models")

const opts = {}
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = process.env.SECRETORKEY;


module.exports = passport => {
    passport.use(
        new JwtStrategy(opts, (jwt_payload, done) => {
            db.Instructor.findById(jwt_payload.id)
                .then(instructor => {
                    if (instructor) {
                        return done(null, instructor)
                    }
                    else {
                        return done(null, false)
                    }
                })
        }));

} 