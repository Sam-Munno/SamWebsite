import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-professional-page',
  templateUrl: './professional-page.component.html',
  styleUrls: ['./professional-page.component.css']
})
export class ProfessionalPageComponent implements OnInit {

json = [
		{
		src: "/assets/images/AWS.png",
		textSpacing:"",
		photoSpacing:"",
		title:"Cloud: AWS",
		subTitle:[
			"AWS Certified: Associate Developer",
			"Experience with Containerized and Serverless architecture",
			"Application Health Monitoring",
			"Real time eventing SMS & SQS"
		]
		},
		{
		src: "/assets/images/java.JPG",
		textSpacing:"order-md-2",
		photoSpacing:"order-md-1",
		title:"Java: Spring",
		subTitle: [
			"5+ years professional experience developing Spring & SpringBoot applications",
			"Multi million dollar annual operational cost savings",
			"Creation of API's with SQL & NOSQL Databases",
			"Unit and Integration testing",
			"Maven and Docker build files"
		]
		},
		{
		src: "/assets/images/web.JPG",
		textSpacing:"",
		photoSpacing:"",
		title:"Web Dev: Angular",
		subTitle:[
			"3+ years professional experience developing responsive websites",
			"REST API integration with OAuth2.0 protocol",
			"Created an airspace waypoint tracking dashboard identifying saturation of inbound aircraft routes"
		]
		},
		{
		src: "/assets/images/IOS2.jpeg",
		textSpacing:"order-md-2",
		photoSpacing:"order-md-1",
		title:"Swift: IOS",
		subTitle: [
			"2+ years professional experience developing IOS apps for Iphone & Ipad",
			"REST API integration with OAuth2.0 protocol",
			"Created a Chat app employees could use to solve live operational issues",
			"Integrated 3rd party SDK to allow users to initiate a barcode scan from their Cognix pistol grip scanner"
		]
		}
	]

  constructor() { }

  ngOnInit(): void {
  }

}
