class Queue<T> { //the letter T is the place holder for the type of the data can be any type
    private data: T[]= [];

    add(item: T){ //instead of setting the type to a string you use T so it can be any data type
        this.data.push(item);
    }

    remove(){
        return this.data.shift();
    }
}

const nameQueue = new Queue<string>();
nameQueue.add('John');
nameQueue.add('password');

const numberQueue = new Queue<number>();
numberQueue.add(10);