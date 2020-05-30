import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-visor-pdf',
  templateUrl: './visor-pdf.component.html',
  styleUrls: ['./visor-pdf.component.scss']
})
export class VisorPdfComponent implements OnInit {

  pdfSrc:string = ""

  constructor(private route:ActivatedRoute) { }

  ngOnInit(): void {
    let src = this.route.snapshot.paramMap.get("file");
    this.pdfSrc = `http://localhost:4200/assets/pdf/${src}.pdf`
  }

}
