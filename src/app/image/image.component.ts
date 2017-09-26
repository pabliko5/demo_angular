import { Component, OnInit } from '@angular/core';


interface Mapache{
  name:string;
  img:string;
}

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css']
})
export class ImageComponent {
  animals: Array<Mapache> = [
    { name:"Miguel", img:'http://algarabianinos.com/chamaco/wp-content/uploads/2015/04/s18-ninos-mapache2.jpg'},
    { name:"Marc", img:'http://algarabianinos.com/chamaco/wp-content/uploads/2015/04/s18-ninos-mapache2.jpg'},
    { name:"Andrei", img:'http://algarabianinos.com/chamaco/wp-content/uploads/2015/04/s18-ninos-mapache2.jpg'},
    { name:"Victor", img:'http://algarabianinos.com/chamaco/wp-content/uploads/2015/04/s18-ninos-mapache2.jpg'}

  ];

  isInputDisabled: boolean = false;
  toggleInput() {
     this.isInputDisabled = !this.isInputDisabled;
  }

  onKey(element){
    console.log(element.className="bingo");
    this.toggleInput();
  }

}
