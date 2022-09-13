const Course = require('../models/Course')

class SiteController {
    // [GET] /home
    index(req, res, next) {
        Course.find({})
        .lean()
        .then(courses => {
            res.render('home', {
                courses
            })
        })
    }

    // [GET] /search
    search(req, res) {
        res.render('search');
    }
}

module.exports = new SiteController();
