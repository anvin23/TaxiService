import { Component, OnInit } from '@angular/core';

enum ViewEncapsulation {
  Emulated = 0,
  Native =  1,
  None =  2,
  ShadowDom =  3
}

@Component({
  selector: 'app-main-footer',
  templateUrl: './main-footer.component.html',
  styleUrls: ['./main-footer.component.css']
})
@Component({
  selector: 'my-mat-divider',
  template: '<mat-divider class="my-divider"></mat-divider>',
  styles: [
    '.my-divider{ border-top-color: aliceblue ; border-top-width: 5px;'
  ],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class MainFooterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  
}
