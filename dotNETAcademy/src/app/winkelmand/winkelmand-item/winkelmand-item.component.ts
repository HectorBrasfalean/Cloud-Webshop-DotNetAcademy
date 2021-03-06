import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { WinkelmandService } from 'src/app/services/winkelmand.service';
import { MsalService } from 'src/app/services/msal.service';

@Component({
  selector: 'app-winkelmand-item',
  templateUrl: './winkelmand-item.component.html',
  styleUrls: ['./winkelmand-item.component.scss']
})
export class WinkelmandItemComponent implements OnInit {
  @Input() product;
  @Output() childEvent = new EventEmitter();
  @Output() updateEvent = new EventEmitter();
  UserId: string;

  constructor(private winkelmandService: WinkelmandService,
              private msalService: MsalService) { }

  ngOnInit() {
    if (this.msalService.isLoggedIn()) {
      this.GetUserObjectId();
    }
  }
  GetUserObjectId() {
    this.UserId = this.msalService.getUserObjectId();
  }

  Herbereken() {
    this.childEvent.emit();
  }
  VoegToe() {
    if (!this.msalService.isAdmin()) {
      this.product.aantal++;
      this.winkelmandService.AddToWinkelmand(this.UserId, this.product.product.categorie, this.product.product.id, 1).subscribe();
      this.Herbereken();
    }
  }
  VerwijderProduct() {
    if (!this.msalService.isAdmin()) {
      this.winkelmandService.DeleteFromWinkelmand(this.UserId, this.product.id).subscribe(winkelmand => {
        this.HerlaadWinkelmand();
      });
    }
  }

  HerlaadWinkelmand() {
    this.updateEvent.emit();
  }

  UpdateAantal() {
    if (!this.msalService.isAdmin()) {
      this.winkelmandService.UpdateAantalProduct(this.UserId, this.product.product.id, this.product.aantal).subscribe(res => {
        this.Herbereken();
      });
    }
  }

  NeemAf() {
    if (!this.msalService.isAdmin()) {
      if (this.product.aantal > 0) {
        this.product.aantal--;
        this.winkelmandService.AddToWinkelmand(this.UserId, this.product.product.categorie, this.product.product.id, -1).subscribe();
        this.Herbereken();
      }
    }
  }

  isAdmin() {
    return this.msalService.admin;
  }

}
