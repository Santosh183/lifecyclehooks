import { Component, OnInit, Input, OnChanges, DoCheck,  AfterContentInit,
  AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit, OnChanges, DoCheck,
AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

  @Input() childText: string;
  @Input() childObj: string;
  constructor() {
    console.log('Child constructor');
   }

  ngOnInit() {
    console.log('Child ngOnInit');
  }
  ngOnChanges() {
    console.log('Child ngOnChanges');
  }
  ngDoCheck() {
    console.log('Child ngDoCheck');
  }
  ngAfterContentInit() {
    console.log('Child ngAfterContentInit');
  }
  ngAfterContentChecked() {
    console.log('Child ngAfterContentChecked');
  }
  ngAfterViewInit() {
    console.log('Child ngAfterViewInit');
  }
  ngAfterViewChecked() {
    console.log('Child ngAfterViewChecked');
  }
  ngOnDestroy() {
    console.log('Child ngOnDestroy');
  }

}
