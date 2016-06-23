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
        throw new Error("Infinite cycle. Your list has loop.")
    }
    while(currentNode.next){
        i++;
        currentNode = currentNode.next;
    }
    return i;
};

Node.isCircular = function(node){
    var slowNode = node;
    var fastNode = node.next;
    var i = 1;
    while (slowNode && fastNode && fastNode.next){
        if (slowNode == fastNode) return true;
            slowNode = slowNode.next;
            fastNode = fastNode.next.next;
        i++;
    }
    return false;
};
