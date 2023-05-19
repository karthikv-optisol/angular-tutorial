import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent {
  contactForm = new FormGroup({
      firstName : new FormControl('',[Validators.required, Validators.maxLength(10)]),
      lastName: new FormControl({
          value: 'Pratap',
          disabled: false
      },[Validators.required, Validators.maxLength(15), Validators.pattern("^[a-zA-Z]+$")]),
      email: new FormControl("",[Validators.required,Validators.email]),
      gender: new FormControl("",[Validators.required]),
      isMarried: new FormControl("",[Validators.requiredTrue]),
      country: new FormControl("",[Validators.required]),
      upload:new FormControl("",[Validators.required]),
      address: new FormGroup({
        city: new FormControl("",[Validators.required]),
        street: new FormControl("",[Validators.required]),
        pincode:new FormControl("",[Validators.required])
      })
  })

  imageURL:any = "";

  handleFileUpload(event:any){
    const preview:any = document.querySelector("img");
    const file = event.target.files[0];
    const reader = new FileReader();
  
    reader.addEventListener(
      "load",
      () => {
        // convert image file to base64 string
        this.imageURL = reader.result;
      },
      false
    );
  
    if (file) {
      reader.readAsDataURL(file);
    }
    

  }

  get firstname() {
    return this.contactForm.get('firstName')
  }
  get lastname() {
    return this.contactForm.get('lastName')
  }
  get email() {
    return this.contactForm.get('email')
  }
  get gender() {
    return this.contactForm.get('gender')
  }
  get marriedStatus() {
    return this.contactForm.get('isMarried')
  }
  get country() {
    return this.contactForm.get('country')
  }
  get city() {
    return this.contactForm.get('address')?.get('city')
  }
  get street() {
    return this.contactForm.get('address')?.get('street')
  }
  get pincode() {
    return this.contactForm.get('address')?.get('pincode')
  }
  get upload(){
    return this.contactForm.get('upload')?.get('upload');
  }

  onSubmit() {
      console.log(this.contactForm.value)
  }
}
