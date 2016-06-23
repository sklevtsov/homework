'use strict';

function Node(value) {
    this._value = value;
    this.next = null;
}

module.exports = Node;

Node.prototype = {
    addNext: function(node) {
        this.next = node;
    },

    get value(){
        return this._value;
    }
};

Node.getNextTotal = function(node){
    var currentNode = node;
    var i=0;
    if (Node.isCircular(node)) {
        return i = -1;
        //throw new Error("Infinite cycle. Your list has loop.")
    }
    while(currentNode.next){
        i++;
        currentNode = currentNode.next;
    }
    return i;
};

//Node.isCircular = function(node){
//    var slowNode = node;
//    var fastNode1 = node;
//    var fastNode2 = node;
//    while ((slowNode) && (fastNode1 = fastNode2.next) && (fastNode2 = fastNode1.next)){
//        console.log(slowNode.value + "_" + fastNode1.value + "_" + fastNode2.value);
//        if (slowNode == fastNode1 || slowNode == fastNode2) return true;
//
//        slowNode = slowNode.next;
//    }
//    return false;
//};

Node.isCircular = function(node){
    var slowNode = node;
    var fastNode = node.next;
    var i=1;
    while (slowNode && fastNode){
        //console.log(i + ":" + slowNode.value + " " + fastNode.value);
        if (slowNode == fastNode) return true;
        if(i%3==0) slowNode = slowNode.next;
        i++;
        fastNode = fastNode.next;
    }
    return false;
};
