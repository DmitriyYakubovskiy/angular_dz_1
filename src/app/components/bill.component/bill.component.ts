import { Component } from '@angular/core';
import { NgFor,NgIf } from "@angular/common";
import { FormsModule } from "@angular/forms";

@Component({
  selector: 'app-bill',
  standalone: true,
  imports: [NgFor,NgIf,FormsModule],
  templateUrl: './bill.component.html',
  styleUrls: ['./bill.component.css']
})
export class BillComponent {
  name = "Билл Гейтс";
  imageUrl = "/images/bill.jpg";
  bio = "Билл Гейтс - американский предприниматель, программист, филантроп, основатель и бывший главный исполнительный директор Microsoft. Является одним из самых богатых людей в мире, известен своими достижениями в области информационных технологий и филантропической деятельностью.";
  quotes = [
    "Patience is a key element of success.",
    "If you think your teacher is tough, wait till you get a boss.",
    "Life is not fair — get used to it!",
    "Success is a lousy teacher. It seduces smart people into thinking they can’t lose.",
    "Be nice to nerds. Chances are you’ll end up working for one."
  ];
  links = [
    { name: "Википедия", url: "https://en.wikipedia.org/wiki/Bill_Gates" },
    { name: "Фонд Билла и Мелинды Гейтс", url: "https://www.gatesfoundation.org/" },
    { name: "Блог Билла Гейтса", url: "https://www.gatesnotes.com/" },
    { name: "Твиттер Билла Гейтса", url: "https://twitter.com/billgates" }
  ];
}
