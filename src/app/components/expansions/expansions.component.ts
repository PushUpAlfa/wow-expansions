import {Component, OnInit} from '@angular/core';
import {ExpansionsService, Expansion} from '../../services/expansions.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-expansions',
  templateUrl: './expansions.component.html',
  styleUrls: ['./expansions.component.css']
})
export class ExpansionsComponent implements OnInit {
  expansions: Expansion[] = [];
  termino = '';

  constructor(private activatedRoute: ActivatedRoute,
              private _expansionsService: ExpansionsService) {
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      if (params['termino']) {
        this.termino = params['termino'];
        this.expansions = this._expansionsService.searchExpansions(params['termino']);
      } else {
        this.expansions = this._expansionsService.getExpansions();
      }
    });
  }

}
