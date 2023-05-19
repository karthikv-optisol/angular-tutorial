import { Component } from '@angular/core';

@Component({
  selector: 'app-basic',
  templateUrl: './basic.component.html',
  styleUrls: ['./basic.component.css']
})
export class BasicComponent {
  title = 'sample-angular';
  count = 0;
  names = [{id:1,name:'rithik'},{id:2,name:'karthik'} ,{id:3,name: 'arun'},{id:4,name:'kumar'}]
  name = '';
  error = '';
  index?:any;
  disable:boolean= false;

  today = new Date();

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
    if (this.name && this.index) {
      
      this.names[this.index-1] = {id:this.index,name:this.name};
      this.name = '';
      this.index='';
    }
    else if(this.name)
    {
      let length = this.names.length+1;
      this.error = '';
      this.names.push({id:length,name:this.name})
      this.name = '';
      this.index='';
    }
    else {
      this.error = 'Please enter the name'
    }
    // console.log(this.names,"testing2");
  }
  editname(data:any)
  {
    this.name = data.name;
    this.index = data.id;
  }
}
