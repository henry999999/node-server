var conn = require('../db');
var express = require('express');
var router = express.Router();
var mysql = require('mysql');
conn.connect();
var jsonWrite = function(res, ret) {
    if(typeof ret === 'undefined') {
        res.json({
            code: '1',
            msg: '操作失败'
        });
    } else {
        res.json(ret);
    }
};

// 增加用户接口
router.get('/api/slecetUser', (req, res) => {
    var sql = 'select * from db';
    var params = req.body;
    console.log(params);
    conn.query(sql, [params.username], function(err, result) {
        if (err) {
            console.log(err);
        }
        if (result) {
            jsonWrite(res, result);
        }
    })
});
// 增加用户接口
router.post('/addtUser', (req, res) => {
    var sql = 'select * from db where name like "%"?"%"?"%"';
    var params = req.body;
    console.log(params);
    conn.query(sql, [params.username], function(err, result) {
        if (err) {
            console.log(err);
        }
        if (result) {
            jsonWrite(res, result);
        }
    })
});
module.exports = router;