var express = require("express");
var app = express();

app.get('/',function(req,res,next) {
    // console.log("Home page")
    res.json("Halaman beranda")
});

// app.get('/products',function(req,res,next) {
//     res.json("Super car")
// });

// app.get('/:product',function(req,res,next) {
//     res.json(req.param.product)
// });

// app.use(function(req,res,next) {
//     if(0 < 50){
//         next();
//     } else {
//         res.json("Maaf anda tidak bisa lanjut ke Bandung Via Tol")
//     }
// });

function travelingKeBandung(req,res,next) {
    if(req.params.uang === "oke") {
        next();
    }else {
        res.json("Anda tidak cukup punya uang untuk pergi ke Bandung")
    }
};

app.get('/bandung/:uang',travelingKeBandung,function(req,res,next) {
    res.json("Silahkan anda travelling ke Bandung via Tol")
});

// membuat koneksi server
app.listen(3000, function(err) {
    if(err) {
        console.log(err);
    } else {
        console.log("sukses server berjalan pada port 3000")
    }
});