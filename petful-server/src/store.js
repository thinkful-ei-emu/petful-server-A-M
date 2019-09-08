class _Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
  }
  enqueue(data) {
    const node = new _Node(data);
    if (this.first === null) {
      this.first = node;
    }
    if (this.last) {
      this.last.next = node;
    }
    this.last = node;
  }
  dequeue() {
    if (this.first === null) {
      return;
    }
    const node = this.first;
    this.first = this.first.next;
    if (node === this.last) {
      this.last = null;
    }
    return node.value;
  }
}

let catQ = new Queue();

catQ.enqueue({
  imageURL: 'https://assets3.thrillist.com/v1/image/2622128/size/tmg-slideshow_l.jpg',
  imageDescription: 'Orange bengal cat with black stripes lounging on concrete.',
  name: 'Fluffy',
  sex: 'Female',
  age: 2,
  breed: 'Bengal',
  story: 'Thrown on the street'
});

catQ.enqueue({
  imageURL: 'https://www.thehappycatsite.com/wp-content/uploads/2017/09/oil.jpg',
  imageDescription: 'Orange bengal cat perched on the fence.',
  name: 'Meeko',
  sex: 'Male',
  age: 2,
  breed: 'Bengal',
  story: 'Thrown on the street'
});
catQ.enqueue({
  imageURL:'https://media.mnn.com/assets/images/2018/02/AdorableBlackCatLookingAtCameraFromSofa.jpg.653x0_q80_crop-smart.jpg', 
  imageDescription: 'Black cat lounging on bed.',
  name: 'Momo',
  sex: 'Male',
  age: 0.5,
  breed: 'Bombay',
  story: 'Ready to be adopted'
});
catQ.enqueue({
  imageURL:'https://kittentoob.com/wp-content/uploads/2018/01/Mackerel-tabby-750x441.jpg', 
  imageDescription: 'Black and grey getting ready for a cat nap.',
  name: 'Bash',
  sex: 'Male',
  age: 4,
  breed: 'Tabby',
  story: 'Family moved'
});

let dogQ = new Queue(); 
dogQ.enqueue({
  imageURL: 'http://www.dogster.com/wp-content/uploads/2015/05/Cute dog listening to music 1_1.jpg',
  imageDescription: 'A smiling golden-brown golden retreiver listening to music.',
  name: 'Zeus',
  sex: 'Male',
  age: 3,
  breed: 'Golden Retriever',
  story: 'Owner Passed away'
});
dogQ.enqueue({
  imageURL: 'https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2017/11/19160330/Havanese-puppy.jpg',
  imageDescription: 'A smiling brown puppy in a field.',
  name: 'Gidget',
  sex: 'Female',
  age: 3,
  breed: 'Havanese',
  story: 'Owner Passed away'
});
dogQ.enqueue({
  imageURL: 'https://vetstreet-brightspot.s3.amazonaws.com/cf/d50ed0aec211e088ab0050568d634f/file/Chug-2-645km071411.jpg',
  imageDescription: 'A smiling white coat ready for a walk.',
  name: 'Cedrik',
  sex: 'Male',
  age: 3,
  breed: 'Chihuahua Pug',
  story: 'Owner Passed away'
});



let adoptedAnimalsQ = [];

module.exports = {
  catQ,
  dogQ,
  adoptedAnimalsQ,
};