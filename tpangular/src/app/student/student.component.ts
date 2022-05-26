import { Component, Input, OnInit } from '@angular/core';
import { Student } from './student.model';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  @Input() viewMode = false;

  @Input() currentStudent: Student = {
    id: null,
    nom: '',
    prenom: '',
    note: null,
    modules: []
  };

  constructor() { }


  ngOnInit(): void {
  }

}
