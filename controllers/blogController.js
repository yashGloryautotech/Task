const express = require('express')
const mongoose = require('mongoose');
const shortid = require('shortid');
const response = require('./../libs/responseLib')


//Importing the model here 
const BlogModel = mongoose.model('tasktable')

let getAllProduct = (req, res) => {
    BlogModel.find()
        .select('-__v -_id')
        .lean()
        .exec((err, result) => {
            if (err) {
                console.log(err)
                let apiResponse = response.generate(true, 'Failed to get Products', 500, null)
                res.send(apiResponse)
            } else if (result == undefined || result == null || result == '') {
                let apiResponse = response.generate(true, 'No Products Found', 404, null)
                res.send(apiResponse)
            } else {
                let apiResponse = response.generate(false, 'All Products Found', 200, result)
                res.send(apiResponse)
            }
        })
}// end get all product

/**
 * function to read single blog.
 */
let viewByProductId = (req, res) => {

    BlogModel.findOne({ 'productId': req.params.productId }, (err, result) => {

        if (err) {
            console.log(err)
            let apiResponse = response.generate(true, 'Failed to get Product by this ID', 500, null)
            res.send(apiResponse)
        } else if (result == undefined || result == null || result == '') {
            let apiResponse = response.generate(true, 'No Products Found', 404, null)
            res.send(apiResponse)
        } else {
            let apiResponse = response.generate(false, 'Product Found', 200, result)
            res.send(apiResponse)

        }
    }) .select('-__v -_id')
}

/**
 * function to delete the assignment collection.
 */
let deleteProduct = (req, res) => {
    BlogModel.remove({ 'productId': req.params.productId }, (err, result) => {
        if (err) {
            console.log(err)
            let apiResponse = response.generate(true, 'Failed to Delect Product by this ID', 500, null)
            res.send(apiResponse)
        } else if (result == undefined || result == null || result == '') {
            let apiResponse = response.generate(true, 'No Products Found', 404, null)
            res.send(apiResponse)
        } else {
            let apiResponse = response.generate(false, 'Product delect', 200, result)
            res.send(apiResponse)
        }
    }) .select('-__v -_id')
}

/**
 * function to create the blog.
 */
let create = (req, res) => {
    var today = Date.now()
    let productId = shortid.generate()

    let newProduct = new BlogModel({
        productId:    productId,
        name:         req.body.name,
        category:     req.body.category,
         price:        req.body.price,
         created_date: today,
         created_time: today
    }) // end new blog model
    newProduct.save((err, result) => {
        if (err) {
            console.log(err)
            let apiResponse = response.generate(true, 'Failed to Create Product', 500, null)
            res.send(apiResponse)
        } else {
            let apiResponse = response.generate(false, 'Created Product', 200, result)
            res.send(apiResponse)

        }
    })  // end new blog save
}

let update = (req, res) => {
    let options = req.body;
   BlogModel.findOneAndUpdate({"productId": req.params.productId},options, {multi:true,new:true},).exec((err,result)=>{

    if (err) {
            let apiResponse = response.generate(true, 'Failed to Update Product by this ID', 500, null)
        res.send(apiResponse);
      } else {
        let apiResponse = response.generate(false, 'Product Updated', 200, result)
       // res.json(apiResponse);
        res.send(apiResponse)

      }
    })

}
let upload=(req,res,next)=>
{
}



module.exports = {
    create: create,
    deleteProduct:deleteProduct,
    viewByProductId:viewByProductId,
    getAllProduct:getAllProduct,
    update:update,
    upload:upload
}
