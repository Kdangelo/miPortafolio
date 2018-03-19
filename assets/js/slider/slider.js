export default class Slider{
  constructor({ elements, animationFunc }){
    // console.log(elements);
    // console.log(animationFunc);
    this.elements = elements;
    this.animationFunc = animationFunc;

    this.index = 0;
    this.size = elements.length;
  }

  next(){
    this.index++;
    if (this.index >= this.size) this.index = 0;

    console.log(this.elements[this.index]);
  }

  prev(){
    this.index--;
    if (this.index < 0 ) this.index = this.size -1;

    console.log(this.elements[this.index]);
  }
}

let slider = new Slider({
  elements: ['hola', 'mundo'],
});

slider.next();

