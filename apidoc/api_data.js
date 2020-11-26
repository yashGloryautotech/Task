define({ "api": [
  {
    "type": "get",
    "url": "/api/v1/all",
    "title": "Get all product",
    "version": "0.0.1",
    "group": "all",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "blogId",
            "description": "<p>The blogId should be passed as the URL parameter</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n      \"error\": false,\n      \"message\": \"All Products Found\",\n      \"status\": 200,\n      \"data\": {\n                  _id: \"string\",\n                  __v: number\n                  productId: \"string\",\n                  name: \"string\",\n                  category: \"string\",\n                  price: number,\n                  created: \"date\",\n                  created_time: \"date\"\n              }\n          }\n      }\n  }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n       \"error\": true,\n       \"message\": \"No Products Found\",\n       \"status\": 404,\n       \"data\": null\n      }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/blog.js",
    "groupTitle": "all",
    "name": "GetApiV1All"
  },
  {
    "type": "post",
    "url": "/api/v1/create",
    "title": "To create product",
    "version": "0.0.1",
    "group": "create",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "blogId",
            "description": "<p>The blogId should be passed as the URL parameter</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n\t    \"error\": false,\n\t    \"message\": \"Created Product\",\n\t    \"status\": 200,\n\t    \"data\": {\n\t    \t\t\t_id: \"string\",\n\t    \t\t\t__v: number\n\t\t\t\t\tproductId: \"string\",\n\t\t\t\t\tname: \"string\",\n\t\t\t\t\tcategory: \"string\",\n\t\t\t\t\tprice: number,\n\t\t\t\t\tcreated: \"date\",\n\t\t\t\t\tcreated_time: \"date\"\n\t\t\t\t}\n\t    \t}\n\t\t}\n\t}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t    \"error\": true,\n\t    \"message\": \"Failed to Create Product\",\n\t    \"status\": 500,\n\t    \"data\": null\n\t   }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/blog.js",
    "groupTitle": "create",
    "name": "PostApiV1Create"
  },
  {
    "type": "post",
    "url": "/api/v1/:productId/delete",
    "title": "To delete a single product",
    "version": "0.0.1",
    "group": "delete",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "blogId",
            "description": "<p>The blogId should be passed as the URL parameter</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n\t    \"error\": false,\n\t    \"message\": \"Product delect\",\n\t    \"status\": 200,\n\t    \"data\": {\n\t    \t\t\t_id: \"string\",\n\t    \t\t\t__v: number\n\t\t\t\t\tproductId: \"string\",\n\t\t\t\t\tname: \"string\",\n\t\t\t\t\tcategory: \"string\",\n\t\t\t\t\tprice: number,\n\t\t\t\t\tcreated: \"date\",\n\t\t\t\t\tcreated_time: \"date\"\n\t\t\t\t}\n\t    \t}\n\t\t}\n\t}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t    \"error\": true,\n\t    \"message\": \"Failed to Delect Product by this ID\",\n\t    \"status\": 500,\n\t    \"data\": null\n\t   }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/blog.js",
    "groupTitle": "delete",
    "name": "PostApiV1ProductidDelete"
  },
  {
    "type": "put",
    "url": "/api/v1/:productId/update",
    "title": "To update a single product",
    "version": "0.0.1",
    "group": "update",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "blogId",
            "description": "<p>The blogId should be passed as the URL parameter</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n\t    \"error\": false,\n\t    \"message\": \"Product Updated\",\n\t    \"status\": 200,\n\t    \"data\": {\n\t    \t\t\t_id: \"string\",\n\t    \t\t\t__v: number\n\t\t\t\t\tproductId: \"string\",\n\t\t\t\t\tname: \"string\",\n\t\t\t\t\tcategory: \"string\",\n\t\t\t\t\tprice: number,\n\t\t\t\t\tcreated: \"date\",\n\t\t\t\t\tcreated_time: \"date\"\n\t\t\t\t}\n\t    \t}\n\t\t}\n\t}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t    \"error\": true,\n\t    \"message\": \"Failed to Update Product by this ID\",\n\t    \"status\": 500,\n\t    \"data\": null\n\t   }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/blog.js",
    "groupTitle": "update",
    "name": "PutApiV1ProductidUpdate"
  },
  {
    "type": "get",
    "url": "/api/v1/:productId/viewbyproduct",
    "title": "Get a single product",
    "version": "0.0.1",
    "group": "viewbyid",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "blogId",
            "description": "<p>The blogId should be passed as the URL parameter</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n\t    \"error\": false,\n\t    \"message\": \"Product Found\",\n\t    \"status\": 200,\n\t    \"data\": {\n\t    \t\t\t_id: \"string\",\n\t    \t\t\t__v: number\n\t\t\t\t\tproductId: \"string\",\n\t\t\t\t\tname: \"string\",\n\t\t\t\t\tcategory: \"string\",\n\t\t\t\t\tprice: number,\n\t\t\t\t\tcreated: \"date\",\n\t\t\t\t\tcreated_time: \"date\"\n\t\t\t\t}\n\t    \t}\n\t\t}\n\t}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t    \"error\": true,\n\t    \"message\": \"Failed to get Product by this ID\",\n\t    \"status\": 500,\n\t    \"data\": null\n\t   }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/blog.js",
    "groupTitle": "viewbyid",
    "name": "GetApiV1ProductidViewbyproduct"
  }
] });
