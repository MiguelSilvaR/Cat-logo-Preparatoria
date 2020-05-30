import { Component, OnInit, OnDestroy } from '@angular/core';
import { BehaviorSubject, Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-matematicas-i',
  templateUrl: './matematicas-i.component.html',
  styleUrls: ['./matematicas-i.component.scss']
})
export class MatematicasIComponent implements OnInit, OnDestroy {

  
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
