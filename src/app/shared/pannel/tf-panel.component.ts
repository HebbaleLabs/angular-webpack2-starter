import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'tf-pannel',
  templateUrl: 'tf-panel.component.html',
  styleUrls: ['./tf-panel.component.scss']
})

export class PanelComponent implements OnInit {
  @Input() public dataSource: string;
  @Input() public panelHeading: string;
  constructor() { }

  ngOnInit() { }
}
