var util= require('util');
var event= require('events');

var terminous = function(){
    event.EventEmitter.call(this);

    this.buyLaptop = function(){
        this.emit('donebuylaptop');
    };

    this.hermasFormat = function(){
        this.emit('donehermasFormat ');
    };

    this.installOs= function(){
        this.emit('doneinstallOs');
    };

    this.installAntivirus= function(){
        this.emit('doneinstallAntivirus');
    };

     this.hub= function(){
        this.emit('complete');
    };

    this.on('donebuyLaptop', hermasFormat );
    this.on('donehermasFormat', installOs );
    this.on('doneinstallOs', installAntivirus );
    this.on('doneinstallAntivirus', hub );
    
};
 module.exports.terminous = terminous;