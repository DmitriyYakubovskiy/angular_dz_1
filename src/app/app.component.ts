import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BillComponent } from './components/bill.component/bill.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, BillComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular_dz_1';
}
