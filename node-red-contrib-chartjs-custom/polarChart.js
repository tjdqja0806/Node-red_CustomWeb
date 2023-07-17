var dataAlgorism = require("./dataAlgorism.js");

module.exports = function(RED) {
    var viewType = 'polarChart';

    function PolarChartNode(config){
        this.on('input', function(){
            dataAlgorism.call(this, config, RED, viewType);
        })
    };
    RED.nodes.registerType(viewType,PolarChartNode);
}