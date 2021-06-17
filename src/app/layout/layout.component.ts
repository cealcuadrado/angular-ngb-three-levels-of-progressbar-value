import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  nivelTamannio = 1;

  constructor() { }

  ngOnInit(): void {
  }

  definirNivelTamannio(): string {
    return `nivel-${this.nivelTamannio}`;
  }

  definirNivelBarraProgreso(): string {
    switch (this.nivelTamannio) {
      case 1: { return `2rem`; break;}
      case 2: { return `2.1rem`; break;}
      case 3: { return `2.5rem`; break;}
    }
  }
}
