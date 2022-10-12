const Menu = require('../../models/menu')
function homeController() {
    return {
        async index(req, res) {
            const Dosa = await Menu.find()
            return res.render('home', { Dosas: Dosa })
        }
    }
}

module.exports = homeController