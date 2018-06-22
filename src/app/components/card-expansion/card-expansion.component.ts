import {Component, OnInit, Input } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-card-expansion',
  templateUrl: './card-expansion.component.html',
  styleUrls: ['./card-expansion.component.css']
})
export class CardExpansionComponent implements OnInit {
  @Input() expansion: any = {};

  constructor(private router: Router) {
  }

  ngOnInit() {
  }

  showExpansion(id: number) {
    this.router.navigate(['/expansion', id]);
  }

}
