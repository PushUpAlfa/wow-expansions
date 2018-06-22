import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ExpansionsService} from '../../services/expansions.service';

@Component({
  selector: 'app-expansion',
  templateUrl: './expansion.component.html',
  styleUrls: ['./expansion.component.css']
})
export class ExpansionComponent implements OnInit {
  expansion: any;

  constructor(private activateRoute: ActivatedRoute,
              private _expansionsService: ExpansionsService) {
    this.activateRoute.params.subscribe(params => {
      this.expansion = this._expansionsService.getExpansion(params['id']);
    });
  }

  ngOnInit() {
  }

  getFaction(faccion: string) {
    return `assets/image/${faccion === 'Horda' ? 'Horda.png' : 'Alianza.jpg'}`;
  }
}
