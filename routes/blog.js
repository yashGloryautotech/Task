const express = require('express')
const blogController = require('./../controllers/blogController')
const appConfig = require("./../config/appConfig")
const swaggerJSDoc=require('swagger-jsdoc')
var multer  = require('multer')
var upload = multer({ dest: 'uploads/' })


const app = express();

const swaggerUI=require('swagger-ui-express');
const fileUpload = require('express-fileupload');
const options = {
	definition:{
	  info:{
		title:'Swagger Task API',
		version:'1.0.0',
		description:''
	  },
	},
	
	apis:['./routes/*.js']
	// apis:['index.js']
  }
  
let setRouter = (app) => {
	let baseUrl = appConfig.apiVersion+'';
	const swaggerSpec = swaggerJSDoc(options)
	app.use(baseUrl+'/api/doc', swaggerUI.serve, swaggerUI.setup(swaggerSpec));
/**
 * @swagger
 * /api/v1/all:
 *   get:
 *     tags:
 *       - Product
 *     description: Returns all blogs
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: An array of Blogs
 *         schema:
 *           $ref: '#/definitions/all'
 */
app.get(baseUrl+'/all',blogController.getAllProduct);
/**
 * @swagger
 * /api/v1/{productId}/viewbyproduct:
 *   get:
 *     tags:
 *       - Product
 *     description: Returns a single product
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: productId
 *         description: productId
 *         in: path
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         description: A single product
 *         schema:
 *           $ref: '#/definitions/:productId/viewbyproduct'
 */
app.get(baseUrl+'/:productId/viewbyproduct',blogController.viewByProductId);
/**
 * @swagger
 * /api/v1/{productId}/delete:
 *   post:
 *     tags:
 *       - Product
 *     description: Deletes a single product
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: productId
 *         description: productId
 *         in: path
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         description: Successfully deleted
 */
app.post(baseUrl+'/:productId/delete',blogController.deleteProduct);
/**
 * @swagger
 * /api/v1/{productId}/update:
 *   put:
 *     tags:
 *       - Product
 *     description: Updates a single product
 *     produces: application/json
 *     parameters:
 *       name: id
 *       in: body
 *       description: productId
 *       schema:
 *         type: array
 *         $ref: '#/definitions/:productId/update'
 *     responses:
 *       200:
 *         description: Successfully updated
 */    
app.put(baseUrl+'/:productId/update',blogController.update);
/**
 @swagger     
 *  /api/v1/{productId}/update:  
 *    put:   
 *      tags:    
 *        - Product     
 *      description: Updates a single product 
 *      produces:    
 *        - application/json     
 *      parameters:  
 *        - name: name   
 *          description: product object resources   
 *          in: body     
 *          required: true   
 *          schema:  
 *            $ref: '#/components/schemas/update'  
 *        - name: productId     
 *          description: product Object ID  
 *          in: path     
 *          required: true   
 *      responses:   
 *        200:   
 *          description: Successfully added  
 *        500:   
 *          description: Server error
 * */
app.post(baseUrl+'/create',blogController.create);    
app.post(baseUrl+'/upload',blogController.upload);   
}// end setRouter function 
module.exports = {
    setRouter: setRouter
}