module.exports = function (RED) {
    function DataInputNode(config) {
        //Node 생성 함수
        RED.nodes.createNode(this, config);
        //node 변수
        var node = this;
        //node-red inject시 실행되는 함수
        node.on('input', function(msg){
            msg.payload = config.symbolName;
            node.send(msg);
        })
    };
    RED.nodes.registerType("dataInput", DataInputNode);//node-red에 node정의
}