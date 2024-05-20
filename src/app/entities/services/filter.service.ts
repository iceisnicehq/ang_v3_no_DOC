import { Injectable } from '@angular/core';
import { INeedAHero } from '../interfaces/app.interface';

@Injectable({
  providedIn: 'root'
})
export class FilterService {
  public nameFilter: string = '';
  public powerFilter: string[] = [];
  public orderFilter: string = 'desc'
  public minLvlFilter: number = 1
  public maxLvlFilter: number = 10

  constructor() {}
}
