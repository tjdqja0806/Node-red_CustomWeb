// dataAlgorism 참조.
var dataAlgorism = require("./dataAlgorism.js");
// 기능에 대한 모듈화.
module.exports = function(RED) {
    var viewType = 'babylonScene';
    // BabylonSceneNode를 실행시 dataAlgorism에 정보 전송.
    function BabylonSceneNode(config){
        this.on('input', function(){
            dataAlgorism.call(this, config, RED, viewType);
        })
    };
    RED.nodes.registerType(viewType,BabylonSceneNode);
}