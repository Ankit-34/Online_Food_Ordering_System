function admin (req, res, next) {
    if(req.isAuthenticated() && req.user.email === 'admin@gmail.com') {
        return next()
    }
    return res.redirect('/')
}

module.exports = admin