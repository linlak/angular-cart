import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-no-products-found',
  templateUrl: './no-products-found.component.html',
  styleUrls: ['./no-products-found.component.scss']
})
export class NoProductsFoundComponent implements OnInit {
  @Input() title: string;
  @Input() description: string;
  constructor() {}

  ngOnInit() {}
}
