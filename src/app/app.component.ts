import { Component, OnInit, Input, OnChanges, DoCheck,  AfterContentInit,
  AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy} from '@angular/core';;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit, OnChanges, DoCheck,
AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

  title = 'lifecyclehooks';
  constructor() {
    console.log('GrandParent constructor');
   }

  ngOnInit() {
    console.log('GrandParent ngOnInit');
  }
  ngOnChanges() {
    console.log('GrandParent ngOnChanges');
  }
  ngDoCheck() {
    console.log('GrandParent ngDoCheck');
  }
  ngAfterContentInit() {
    console.log('GrandParent ngAfterContentInit');
  }
  ngAfterContentChecked() {
    console.log('GrandParent ngAfterContentChecked');
  }
  ngAfterViewInit() {
    console.log('GrandParent ngAfterViewInit');
  }
  ngAfterViewChecked() {
    console.log('GrandParent ngAfterViewChecked');
  }
  ngOnDestroy() {
    console.log('GrandParent ngOnDestroy');
  }
}
