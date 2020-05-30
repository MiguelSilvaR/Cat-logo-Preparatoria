import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BehaviorSubject, Subscription } from 'rxjs';

@Component({
  selector: 'app-etica-i',
  templateUrl: './etica-i.component.html',
  styleUrls: ['./etica-i.component.scss']
})
export class EticaIComponent implements OnInit, OnDestroy {

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
