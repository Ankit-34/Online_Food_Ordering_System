const order = require("../../../models/order")
const item = require('../../../models/menu')

function orderController() {
    return {
        index(req, res) {
           order.find({ status: { $ne: 'completed' } }, null, { sort: { 'createdAt': -1 }}).populate('customerId', '-password').exec((err, orders) => {
               if(req.xhr) {
                   return res.json(orders)
               } else {
                return res.render('admin/orders')
               }
           })
        },
        gadditem(req, res) {
            res.render('admin/additem')
        },
        additem(req, res) {
            const { name, catagory, price, description } = req.body
            console.log(req.body);
            if (!name || !catagory || !price || !description || !req.file) {
                req.flash('error', 'All fields are required')
                return res.redirect('/Admin/additem')
            }
            const newdish = new item({
                name: name,
                catagory: catagory,
                price: price,
                description: description
            })
            if (req.file) {
                newdish.image = req.file.filename
            }
            console.log(newdish);
            newdish.save().then(() => {
                req.flash('error', 'item added sucessfully')
                return res.redirect('/Admin/additem')
            }).catch((e) => {
                console.log(e);
                req.flash('error', 'something went wrong')
                return res.redirect('/Admin/additem')
            })
        }
    }
}

module.exports = orderController