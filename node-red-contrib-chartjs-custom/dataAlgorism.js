//node.js module 기능
module.exports = function DataAlgorism(config, RED, viewType){
    var fs = require("fs"); //node.js fileSystem import
    var path = require("path"); // node.js file 경로 기능 import
    var express = require("express"); // node.js에서 지원하는 프로그램 실행? 비슷한 기능 import
    RED.nodes.createNode(this, config); // node-red Node생성 함수

    var node = this;

    //Context 생성 및 초기화
    let globalContext = this.context().global; 

    //node-red inject시 실행되는 함수
    node.on('input', function(msg){
        SaveTOJSON(msg);
    })

    //node-red 실행 종료시 실행되는 함수
    node.on('close', function(removed, done) {
        globalContext.set("object", []);
        done();
    })

    //get globalContext and Push Data
    //Save globalContext Data to Json
    function SaveTOJSON(msg){
        //globalContext의 Object에 해당 항목 Push
        globalContext.get("object").push(
            {
            "data" : {
                'viewType' : viewType,
                'title' : config.title,
                'labels' : msg.payload,
                'pattern': config.colorPattern
            }
        }
        )
        //globalContext를 string화
        const json = JSON.stringify(globalContext.get("object"))
        //string화한 data를 저장
        fs.writeFileSync(__dirname + "/webpage/webData.json", json)
        // "현재URL + /smartpro"라는 URL에 webPage폴더 안에 있는 web을 연다.
        //__dirnama : 현재 디렉토리 경로
        RED.httpNode.use("/smartpro", express.static(__dirname + '/webPage'));
    }
}