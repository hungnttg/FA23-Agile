var express=require('express');
var app=express();
//--
var kq="";
var mysql=require('mysql');//khai bao thu vien
var con=mysql.createConnection({//khai bao thong tin server
     host:"sql.freedb.tech",
     user:"freedb_hungnq",
     password:"@9hc%!U9jW7Hs!k",
     database:"freedb_hungnq"
});
//ket noi
con.connect((err)=>{
     if(err) throw err;
     con.query("select * from sinhvien",(err,result)=>{
          if(err) throw err;
          kq=JSON.stringify(result);
          console.log(kq);
     });
});
//in ra ket qua
app.get('/',(req,res)=>{
     res.send(kq);//tra ve ket qua cho get
});
//tao server lang nghe
var server=app.listen(8000,()=>{
     var host=server.address().address;
     var port=server.address().port;
     console.log("server dang chay o http://%s %s",host,port);
});