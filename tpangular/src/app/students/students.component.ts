import { Component, OnInit } from '@angular/core';
import { Module } from '../module/module.model';
import { Student } from '../student/student.model';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {

  students: Student[] = [];
  modules: Module[] = [];
  currentStudent: Student = {};
  currentIndex = -1;
  count: number = 2;

  affectedModule: Module = {
    nom: '',
    coef: undefined,
    note: null

  }

  addedStudent: Student = {
    id: null,
    nom: '',
    prenom: '',
    note: null,
    modules: []
  };

  constructor() { }

  ngOnInit(): void {
    this.students = [
      {
        id: 1,
        nom: "Toumi",
        prenom: "Ilyass",
        note: 16,
        modules: []
      },
      {
        id: 2,
        nom: "Toumi",
        prenom: "Bader",
        note: 14,
        modules: []
      }
    ];
    this.modules = [
      {
        nom: "Math",
        coef: 9,
        note: 16
      },
      {
        nom: "FR",
        coef: 5,
        note: 17
      }
    ]
  }

  setActiveStudent(student: Student, index: number): void {
    this.currentStudent = student;
    this.currentIndex = index;
  }

  addStudent() {
    this.addedStudent.id = this.count++;
    this.students.push(this.addedStudent);
    this.addedStudent = {
      id: null,
      nom: '',
      prenom: '',
      note: null,
    }
  }

  appendModule(module: Module) {
    this.currentStudent.modules?.push(module);
  }



}
