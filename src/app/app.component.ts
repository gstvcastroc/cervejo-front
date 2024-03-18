import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent{
  currentDate = new Date();

  public months = [
    { id: 0, name: 'Janeiro' },
    { id: 1, name: 'Fevereiro' },
    { id: 2, name: 'Março' },
    { id: 3, name: 'Abril' },
    { id: 4, name: 'Maio' },
    { id: 5, name: 'Junho' },
    { id: 6, name: 'Julho' },
    { id: 7, name: 'Agosto' },
    { id: 8, name: 'Setembro' },
    { id: 9, name: 'Outubro' },
    { id: 10, name: 'Novembro' },
    { id: 11, name: 'Dezembro' },
  ];
  
  public currentMonth : number = this.currentDate.getMonth();
  
  dateString = this.months.find(i => i.id === this.currentMonth)?.name + ' ' + this.currentDate.getFullYear();

  currentYear = this.currentDate.getFullYear();

  title = 'CervejoApp';
}
