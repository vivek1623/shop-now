const Product = require('../models/products')

exports.getAddProducts = (req, res) => {
  res.render('add-product', {
    pageTitle: 'Add Product',
    path: '/admin/add-product'
  })
}

exports.addProduct = (req, res) => {
  if (req.body.title && req.body.title.trim().length > 0) {
    const product = new Product(req.body.title)
    product.save()
    res.redirect('/')
  } else {
    res.redirect('/admin/add-product')
  }
}

exports.getProducts = (req, res) => {
  const products = Product.fetchAll()
  res.render('shop', {
    pageTitle: 'shop',
    products: products,
    path: '/'
  })
}
