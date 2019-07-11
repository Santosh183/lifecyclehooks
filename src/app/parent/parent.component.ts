import{ Component, OnInit, Input, OnChanges, DoCheck,  AfterContentInit,
  AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy} from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit, OnChanges, DoCheck,
AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

  toChildText = 'string came from parent';
  toChildObject = {
    text: 'object text came from parent'
  };
  @Input() parent: string;
  constructor() {
    console.log('Parent constructor');
   }

  ngOnInit() {
    console.log('Parent ngOnInit');
  }
  ngOnChanges() {
    console.log('Parent ngOnChanges');
  }
  ngDoCheck() {
    console.log('Parent ngDoCheck');
  }
  ngAfterContentInit() {
    console.log('Parent ngAfterContentInit');
  }
  ngAfterContentChecked() {
    console.log('Parent ngAfterContentChecked');
  }
  ngAfterViewInit() {
    console.log('Parent ngAfterViewInit');
  }
  ngAfterViewChecked() {
    console.log('Parent ngAfterViewChecked');
  }
  ngOnDestroy() {
    console.log('Parent ngOnDestroy');
  }

}
