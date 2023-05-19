import { Component, Input, OnInit, OnChanges, SimpleChanges,DoCheck,OnDestroy } from '@angular/core';

@Component({
  selector: 'app-testing',
  templateUrl: './testing.component.html',
  styleUrls: ['./testing.component.css']
})
export class TestingComponent implements OnInit, OnChanges,DoCheck,OnDestroy {
  @Input('testing') names: any;

  ngOnChanges(changes: SimpleChanges): void {
    console.log("changes", changes);
  }
 
  ngOnInit(): void {
    console.log("angular initialized")
  }

  ngDoCheck(): void {
    console.log("changes");
  }

  
  ngOnDestroy(): void {
    console.log("on destroy called");
  }


}
