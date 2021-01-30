import {Component, OnDestroy, OnInit} from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit, OnDestroy {
  personName: string;

  constructor() {
    console.log('constructor()');
  }

  ngOnInit(): void {
    // incicjalizacja tutaj
    this.personName = 'Mateusz Matczak';
    console.log('ngOnInit()');
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy()');
  }

}
