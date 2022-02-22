import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder, FormArray, FormControl } from '@angular/forms';

@Component({
  selector: 'app-reative-from',
  templateUrl: './reative-from.component.html',
  styleUrls: ['./reative-from.component.css']
})
export class ReativeFromComponent implements OnInit {

  public userForm: FormGroup;
  public userForm2: FormGroup;

  constructor(private fb: FormBuilder  ) {
    this.userForm = this.fb.group({
          name: ['', Validators.required],
          email: ['', Validators.required],
          address: new FormArray([]),
    });
    this.userForm2 = new FormGroup({
      name: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      address: new FormArray([]),

    });
  }

  ngOnInit(): void {

  }
  get f() { return this.userForm.controls; }
  get t() { return this.f.address as FormArray; }
  get formList() { return this.t.controls as FormGroup[]; }

  get f2() { return this.userForm2.controls; }
  get t2() { return this.f2.address as FormArray; }
  get formList2() { return this.t2.controls as FormGroup[]; }

  addMore(): void {
    this.t.push(this.fb.group({
        add_1: ['', Validators.required],
    }));
  }
  addMore2(): void {
    this.t2.push(new FormGroup({
        add_1: new FormControl(''),
        // add_1: ['', Validators.required],
    }));
  }
  onSubmit(): void {
    console.log(this.userForm.value);
  }
  onSubmit2(): void {
    console.log(this.userForm2.value);
  }

  delete(index: any): void {
     this.t.removeAt(index);
  }
  delete2(index: any): void {
    this.t2.removeAt(index);
 }

}
