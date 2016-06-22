var assert = require('chai').assert;
var Node = require('../../homework/index');

describe('LinkedList', function () {
    it('Node is a function', function(){
        assert.typeOf(Node, 'function', 'Node is a function');
    });
    it('addNext is a function', function(){
        var node1 = new Node(2);
        assert.typeOf(node1.addNext, 'function', 'addNext is a function');
    });
    it('getNextTotal is a function', function(){
        assert.typeOf(Node.getNextTotal, 'function', 'getNextTotal is a function');
    });
    it('check that "value", is a getter', function(){
        var node1 = new Node(5);
        assert.strictEqual(node1.value, 5);
    });
    it('getNextTotal Length of linked list', function(){
        var node1 = new Node(1);
        var node2 = new Node(2);
        var node3 = new Node(3);
        var node4 = new Node(4);
        node1.addNext(node2);
        node2.addNext(node3);
        node3.addNext(node4);
        assert.strictEqual(Node.getNextTotal(node1), 3);
        //console.log(Node.getNextTotal(node1) + " node(s) next in linked list");
    });
    it('isCircular', function(){
        var node1 = new Node(1);
        var node2 = new Node(2);
        var node3 = new Node(3);
        var node4 = new Node(4);
        var node5 = new Node(5);
        var node6 = new Node(6);
        var node7 = new Node(7);
        var node8 = new Node(8);
        var node9 = new Node(9);
        var node10 = new Node(10);
        var node11 = new Node(11);
        var node12 = new Node(12);
        node1.addNext(node2);
        node2.addNext(node3);
        node3.addNext(node4);
        node4.addNext(node5);
        node5.addNext(node6);
        node6.addNext(node7);
        node7.addNext(node8);
        node8.addNext(node9);
        node9.addNext(node10);
        node10.addNext(node11);
        node11.addNext(node12);
        node12.addNext(node1);
        assert.isTrue(Node.isCircular(node1), 'the list is Circular');
        assert.strictEqual(Node.getNextTotal(node1), -1);
        //console.log(Node.isCircular(node1));
    });
});
