import { Component, Input, OnInit } from '@angular/core';
import { Module } from './module.model';

@Component({
  selector: 'app-module',
  templateUrl: './module.component.html',
  styleUrls: ['./module.component.css']
})
export class ModuleComponent implements OnInit {
  @Input() module: Module = {
    nom: '',
    coef: undefined,
    note: null,
  };
  constructor() { }

  ngOnInit(): void {
  }



}
