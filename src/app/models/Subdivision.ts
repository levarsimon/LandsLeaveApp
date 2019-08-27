import { Injectable } from '@angular/core';
import { Division } from './Division';

export class Subdivision{
  subDivId: number;
  divId: number;
  supvrId: number;
  name: string;
  createdOn: Date;
  createdBy: string;
  modifiedOn: Date;
  modifiedBy: string;
  div: Division;
}