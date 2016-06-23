'use strict';

var assert = require('chai').assert;
var expect = require('chai').expect;
var Node = require('../../homework/index');

describe('LinkedList', function () {
    it('should check Node() is a function', function(){
        assert.typeOf(Node, 'function', 'Node is a function');
    });
    it('should check addNext() is a function', function(){
        var node1 = new Node(2);
        assert.typeOf(node1.addNext, 'function', 'addNext is a function');
    });
    it('should check getNextTotal() is a function', function(){
        assert.typeOf(Node.getNextTotal, 'function', 'getNextTotal is a function');
    });
    it('should check that "value" is a getter', function(){
        var node1 = new Node(5);
        assert.strictEqual(node1.value, 5);
    });
    it('should find getNextTotal() length of linked list', function(){
        var node1 = new Node(1);
        var node2 = new Node(2);
        var node3 = new Node(3);
        var node4 = new Node(4);
        node1.addNext(node2);
        node2.addNext(node3);
        node3.addNext(node4);
        assert.strictEqual(Node.getNextTotal(node1), 3);
    });
    it('should find loop in list by function isCircular()', function(){
        var node1 = new Node(1);
        var node2 = new Node(2);
        var node3 = new Node(3);
        var node4 = new Node(4);
        var node5 = new Node(5);
        var node6 = new Node(6);
        node1.addNext(node2);
        node2.addNext(node3);
        node3.addNext(node4);
        node4.addNext(node5);
        node5.addNext(node6);
        node5.addNext(node1);
        assert.isTrue(Node.isCircular(node1), 'the list is Circular');
    });
    it('should throw Error if getNextTotal() is called in circular linked list', function(){
        var node1 = new Node(1);
        var node2 = new Node(2);
        var node3 = new Node(3);
        var node4 = new Node(4);
        node1.addNext(node2);
        node2.addNext(node3);
        node3.addNext(node4);
        node4.addNext(node1);
        assert.throws( () => {
            Node.getNextTotal(node1)
        }, Error);
    });
});
