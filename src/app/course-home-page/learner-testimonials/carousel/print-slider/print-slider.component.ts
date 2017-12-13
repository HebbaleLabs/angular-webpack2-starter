import { Component, OnInit, Pipe, PipeTransform,Input, style } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser'
@Pipe({ name: 'safeHtmlPipe'})
export class SafeHtmlPipe implements PipeTransform  {
  constructor(private sanitized: DomSanitizer) {}
  transform(value) {
    return this.sanitized.bypassSecurityTrustHtml(value);
  }
}

@Component({
  selector:"printSlide",
  templateUrl:'./print-slider.component.html',
  styleUrls:['./print-slider.component.css']
})
export class PrintSliderComponent  {

  @Input("meta") meta:any;
  constructor(){

  }

}
