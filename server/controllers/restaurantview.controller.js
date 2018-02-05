var express = require("express");
var router = express.Router();
var fs = require("fs");

router.get("/images", readImage);

function readImage(req, res){
    console.log("nhu");
    fs.readFile('./public/images/google.png', (err, data) => {
        if(err) throw err;
        console.log("go here");
        res.writeHead(200, {'Content-Type': 'image/jpeg'});
        res.end(data); 
    });       
};


module.exports = router;