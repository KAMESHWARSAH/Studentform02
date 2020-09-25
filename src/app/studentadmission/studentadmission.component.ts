import { Component, OnInit } from '@angular/core';
declare function addressFunction(): any;
@Component({
  selector: 'app-studentadmission',
  templateUrl: './studentadmission.component.html',
  styleUrls: ['./studentadmission.component.css']
})
export class StudentadmissionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  addressFunction(e){
    if (e.target.checked){
      alert("Hello");
    }
  }

}

