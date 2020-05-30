import { Component, OnInit } from '@angular/core';
import { Subscription, BehaviorSubject } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-quimica-ii',
  templateUrl: './quimica-ii.component.html',
  styleUrls: ['./quimica-ii.component.scss']
})
export class QuimicaIIComponent implements OnInit {

  params:Subscription
  public seccion = new BehaviorSubject<string>("1");
  public seccion$ = this.seccion.asObservable();

  constructor(private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.params = this.route.paramMap.subscribe( paramMap => {
      this.onClick(paramMap.get("id"));
  })
  }

  onClick(estado:string) {
    this.seccion.next(estado)
  }

  ngOnDestroy(){
    this.params.unsubscribe();
  }

}
