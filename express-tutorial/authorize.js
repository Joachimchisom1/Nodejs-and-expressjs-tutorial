const authorize = (req, res, next) => {
     const {user} = req.query;
     if (user === 'Joachim') {
         req.user = {name: 'Joachim', id: 3}
         next()
     }else {
         res.status(401).send('unauthorize')
     }
}

module.exports = authorize