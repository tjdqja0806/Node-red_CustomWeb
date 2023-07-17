module.exports = function(RED) {
    function context_Initialization_Node(config){
        RED.nodes.createNode(this, config);
        var node = this;
        let globalContext = this.context().global;

        node.on('input', function(msg){
            globalContext.set("object", []);
            node.send(msg);
        })
    };
    RED.nodes.registerType("context_Initialization",context_Initialization_Node);
}