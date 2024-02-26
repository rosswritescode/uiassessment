import { Component, OnInit } from '@angular/core';
import { Subscription, interval } from 'rxjs';
import { map } from 'rxjs/operators';
import { StockService, StockPrice } from './stock.service';

@Component({
  selector: 'app-live-stock-ticker',
  template: `
    <div>
      <h3>Live Stock Price: {{ stock?.symbol }} - {{ stock?.price | number:'1.2-2' }}</h3>
    </div>
  `,
})
export class LiveStockTickerComponent implements OnInit {
  stock?: StockPrice;
  private subscription: Subscription = new Subscription();

  constructor(private stockService: StockService) {}

  ngOnInit(): void {
    this.subscription = interval(5000).pipe(
      map(() => {
        this.stockService.getStockPrice('AAPL').subscribe(price => {
          this.stock = price;
        });
      })
    ).subscribe();
  }
}
