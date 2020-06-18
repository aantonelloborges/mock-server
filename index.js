var express = require('express'),
    swagger = require('node-swagger-ui');

process.env.NODE_ENV = process.env.NODE_ENV || "DEV";

swagger(express()).configure({
    ip: undefined,
    port: process.env.PORT || 8001,
    headers: {
        "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept, Authorization,	If-Modified-Since, Cache-Control, Pragma",
        "Access-Control-Allow-Methods": "GET,POST,PUT,DELETE,OPTIONS",
		"Access-Control-Allow-Credentials": "true"
    },
    models: [
        '/docs/models/**/*.js'
    ],
    apis: [
        '/docs/apis/**/*.js'
    ],
    swagger: {
        title: "API Mocks",
        description: "Mocks de APIs",
        termsOfServiceUrl: "",
        contact: "aantonelloborges@gmail.com",
        swaggerDoc: "api-docs",
        url: "/docs",
        version: "1.0.0"
    }
}).start();
