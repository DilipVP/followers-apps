import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'array-builder',
  templateUrl: './new-array-builder-form.component.html',
  styleUrls: ['./new-array-builder-form.component.css']
})
export class NewArrayBuilderFormComponent implements OnInit {

  form = new FormGroup({
    topics : new FormArray([])
  });

  addTopic(topic: HTMLInputElement){
    this.topics.push(new FormControl(topic.value));
    topic.value = '';
  }

  removeTopic(topic: any){
    const index = this.topics.controls.indexOf(topic);
    this.topics.removeAt(index);
  }

  get topics(){

    return this.form.get('topics') as FormArray;

  }

  constructor() { }

  ngOnInit(): void {
  }

}
