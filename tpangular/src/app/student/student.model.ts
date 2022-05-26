import { Module } from "../module/module.model";

export class Student {
  id?: any;
  nom?: string;
  prenom?: string;
  note?: any;
  modules?: Module[];
}
