import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'tf-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  toggle: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  onToggle() {
    this.toggle = !this.toggle;
  }

}
