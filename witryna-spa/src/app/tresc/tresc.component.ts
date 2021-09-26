import { Component, OnInit } from '@angular/core';
import { Dane } from '../dane';

@Component({
  selector: 'app-tresc',
  templateUrl: './tresc.component.html',
  styleUrls: ['./tresc.component.scss']
})
export class TrescComponent implements OnInit {

  Antoni: Dane = {
    id: 1,
    nazwisko: 'Maciakowski',
    wiek: 67,
    opis: 'Robi cuda z bronią'
  };
  constructor() { }

  ngOnInit(): void {
  }

}
