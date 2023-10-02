const swaggerAutogen = require('swagger-autogen')();

const doc = {
    info: {
        title: "Collections Api",
        description: "Collections Api"
    },
    host: "cse341-project2-k3dt.onrender.com",
    schemes: ['http', 'https']
};

const outputFile = './swagger.json';
const endpointsFiles = ['./routes/index.js'];

//This will generate swagger.json
swaggerAutogen(outputFile, endpointsFiles, doc);