var Queue = /** @class */ (function () {
    function Queue() {
        this.data = [];
    }
    Queue.prototype.add = function (item) {
        this.data.push(item);
    };
    Queue.prototype.remove = function () {
        return this.data.shift();
    };
    return Queue;
}());
var nameQueue = new Queue();
nameQueue.add('John');
nameQueue.add('password');
var numberQueue = new Queue();
numberQueue.add(10);
