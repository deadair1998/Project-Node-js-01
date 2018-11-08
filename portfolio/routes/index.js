var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('main', { title: 'Express' });
});
/* GET detail page. */
router.get('/*.:id', function(req, res, next) {
  var idsp = req.params.id;
  // kiểm tra xem đã có mảng session hay chưa ,nếu chưa thì tạo session mới
  if(!req.session.watched){
    req.session.watched = [];
  }
  // xử lý trùng lặp dữ liệu(nếu data chưa có trong mảng thì return -1)
  if(req.session.watched.indexOf(idsp) == -1){
    // thêm id sp vừa xem vào trong session watched vừa tạo
    req.session.watched.push(idsp);
  };
 
  res.render('detail', { id:req.params.id , list: req.session.watched });
});

/* tạo trang test session */
router.get('/test', function(req, res, next) {
  res.render('test', { list: req.session.watched });
});

module.exports = router;
