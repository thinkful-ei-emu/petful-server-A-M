class _Node{
  constructor(value){
    this.value = value; 
    this.next = null;
  }
}

class Queue {
  constructor(){
    this.first = null;
    this.last = null;
  }
  enqueue(data){
    const node = new _Node(data);
    if(this.first === null){
      this.first = node;
    }
    if(this.last){
      this.last.next = node;
    }
    this.last = node;
  }
  dequeue(){
    if(this.first === null){
      return; 
    }
    const node = this.first;
    this.first = this.first.next;
    if(node === this.last){
      this.last = null;
    }
    return node.value;
  }
}

let catQ = new Queue();

catQ.enqueue({
  imageURL:'https://assets3.thrillist.com/v1/image/2622128/size/tmg-slideshow_l.jpg', 
  imageDescription: 'Orange bengal cat with black stripes lounging on concrete.',
  name: 'Fluffy',
  sex: 'Female',
  age: 2,
  breed: 'Bengal',
  story: 'Thrown on the street'
});
catQ.enqueue({
  imageURL:'https://assets3.thrillist.com/v1/image/2622128/size/tmg-slideshow_l.jpg', 
  imageDescription: 'Orange bengal cat with black stripes lounging on concrete.',
  name: 'Meeko',
  sex: 'Male',
  age: 2,
  breed: 'Bengal',
  story: 'Thrown on the street'
});
catQ.enqueue({
  imageURL:'https://assets3.thrillist.com/v1/image/2622128/size/tmg-slideshow_l.jpg', 
  imageDescription: 'Black cat lounging on concrete.',
  name: 'Momo',
  sex: 'Male',
  age: 0.5,
  breed: 'Bombay',
  story: 'New born kitten'
});
catQ.enqueue({
  imageURL:'https://assets3.thrillist.com/v1/image/2622128/size/tmg-slideshow_l.jpg', 
  imageDescription: 'Black and grey lounging on concrete.',
  name: 'Bash',
  sex: 'Male',
  age: 4,
  breed: 'Tabby',
  story: 'Family moved'
});


let dogQ = new Queue();
dogQ.enqueue({
  imageURL: 'http://www.dogster.com/wp-content/uploads/2015/05/Cute%20dog%20listening%20to%20music%201_1.jpg',
  imageDescription: 'A smiling golden-brown golden retreiver listening to music.',
  name: 'Zeus',
  sex: 'Male',
  age: 3,
  breed: 'Golden Retriever',
  story: 'Owner Passed away'
});


module.exports = { 
  catQ,
  dogQ,
};