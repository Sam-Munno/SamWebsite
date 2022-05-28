import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  
  slides = [
    {
      src: "url('/assets/images/Bowmen.JPG')",
      title: "Hello World",
      subTitle: "Welcome to my website 😊"
    },
    {
      src: "url('/assets/images/Arches1.JPG')",
      title: "My name is Sam Munno",
      subTitle: "Software Developer with 5+ years of experience"
    },
    {
      src: "url('/assets/images/costaRicaSunset.JPG')",
      title: "Tech Stack",
      subTitle: "Written in Angular. Hosted on AWS S3, routing through Route 53, HTTPS support with CloudFront. Code on my Github."
    },


  ]

  constructor() { }

  ngOnInit(): void {
  }

}
