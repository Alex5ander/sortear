import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  numeroSorteado = '...';
  sorteando = false;

  sortear() {
    this.sorteando = true;
    const t = this;
    const max = 40;

    for(let i = 0; i < max; i++) {
      setTimeout(() => {
        t.numeroSorteado = Math.floor(Math.random()*6+1).toString();
        if(i === max - 1) {
          t.sorteando = false;
        }
      }, i * 100);
    }
  }

}
