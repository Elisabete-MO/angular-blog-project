import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { data } from 'src/app/data/data';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent {

  private id:number | null = 0;
  photo:string = "";
  title:string = "";
  content:string = "";

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(value => { 
      this.id = value.get("id") ? parseInt(value.get("id")!) : 0;
    });
    this.setValuesToComponent(this.id);
  }

  setValuesToComponent(id:number | null) {  
    const result = data.filter(article => article.id === id)[0];
    if(result) {
      this.photo = result.photo; 
      this.title = result.title;
      this.content = result.text;
    }
  }
} 
