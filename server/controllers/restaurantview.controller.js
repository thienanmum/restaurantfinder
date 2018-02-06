var express = require("express");
var router = express.Router();
var fs = require("fs");

router.get("/images/:filename", readImage);

function readImage(req, res){   
    console.log(req.params.filename);
    
    //fs.readFile('./public/images/google.png', (err, data) => {
    fs.readFile('./public/images/' + req.params.filename, (err, data) => {
        if(err) throw err;        
        res.writeHead(200, {'Content-Type': 'image/jpeg'});
        res.end(data); 
    });       
};


module.exports = router;