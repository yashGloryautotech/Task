// this is needed for importing expressjs into our application
const express = require('express')
const appConfig = require('./config/appConfig')
const fs = require('fs')
const mongoose = require('mongoose')
const cookieparser=require('cookie-parser')
const bodyparser=require('body-parser')
const swaggerUI=require('swagger-ui-express')


//declaring an instance or creating an application instance
const app = express()
  
app.use(bodyparser.json())
app.use(bodyparser.urlencoded({extended:false}))
app.use(cookieparser())

// const options = {
//   definition:{
//     info:{
//       title:'Swagger Task API',
//       version:'1.0.0',
//       description:''
//     },
//   },

//   // apis:['./routes/*.js']
  
//   // apis:['index.js']
// }

// const swaggerSpec = swaggerJSDoc(options)
// app.use('/api/doc', swaggerUI.serve, swaggerUI.setup(swaggerSpec));
/**
 * @swagger
 * /hello:
 *   get:
 *     tags:
 *       - blogs
 *     description: Returns all blogs
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: An array of Blogs
 *         schema:
 *           $ref: '#/definitions/Hello'
 */
              
 
app.get('/hello', (req,res)=>
{
  res.send('Hello world')
})



//console.log(swaggerSpec) 

// Bootstrap models
let modelsPath = './models'
fs.readdirSync(modelsPath).forEach(function (file) {
    if (~file.indexOf('.js')) {
        console.log(modelsPath+'/'+file)
        require(modelsPath + '/' + file)
    }
  })
  // end Bootstrap models

// Bootstrap route
let routesPath = './routes'
fs.readdirSync(routesPath).forEach(function (file) {
    if (~file.indexOf('.js')) {
        console.log("including the following file");
        console.log(routesPath + '/' + file)
        let route = require(routesPath + '/' + file);
        route.setRouter(app);
    }
});
// end bootstrap route

//listening the server - creating a local server
app.listen(appConfig.port, () => {
    console.log('Run')

      let db= mongoose.connect(appConfig.db.uri , {useUnifiedTopology: true, useNewUrlParser:true,useCreateIndex:true});
      mongoose.connection.on('error',function (err)
      {
        console.log("Database error");
        console.log(err);
      });
    
      mongoose.connection.on('open',function(err){
    
        if(err)
        {
          console.log("Database error");
          console.log(err);
        }
        else{
          console.log("Database connection success");
        }
      })
}); // end mongoose connection open handler