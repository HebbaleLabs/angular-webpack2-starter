import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  toggle=true;

  constructor() { }

  ngOnInit() {
  }

  onToggle(){
      console.log(this.toggle)
    if(this.toggle===true){
      this.toggle=false;
    }
    else{
      this.toggle=true;
    }
  }

}
