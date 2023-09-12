import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-small',
  templateUrl: './card-small.component.html',
  styleUrls: ['./card-small.component.css']
})
export class CardSmallComponent {

  @Input() 
    title: string = "";

  @Input()
    cardText: string = "";
    
  @Input()
    photo: string = "";
}
