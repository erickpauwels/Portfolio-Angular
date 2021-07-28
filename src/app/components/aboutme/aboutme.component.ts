import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aboutme',
  templateUrl: './aboutme.component.html',
  styleUrls: ['./aboutme.component.scss']
})
export class AboutmeComponent implements OnInit {
  public title: string;
  public subtitle: string;

  constructor() { 
    this.title = 'Erick Pauwels';
    this.subtitle = 'Full Stack Developer';
  }

  ngOnInit(): void {
  }

}
