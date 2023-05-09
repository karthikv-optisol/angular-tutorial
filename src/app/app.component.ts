import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'sample-angular';
  count = 0;
  names = ['rithik', 'karthik', 'arun', 'kumar']
  name = '';
  error = '';
  index?:any;

  clicked() {
    this.title = "title changed"
  }
  Increment() {
    this.count++;
  }
  Descrement() {
    this.count--;
  }

  addName() {
    if (this.name && this.index =="") {
      this.error = '';
      this.names.push(this.name)
      this.name = '';
    }
    else if(this.name && this.index)
    {
      console.log(this.name, this.index);
      this.names[this.index] = this.name;
      this.name = '';
    }
    else {
      this.error = 'Please enter the name'
    }
  }
  editname(i:number,nam:any)
  {
    this.name = nam;
    this.index = i;
  }
}
