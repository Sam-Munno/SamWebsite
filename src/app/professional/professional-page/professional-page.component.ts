import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-professional-page',
  templateUrl: './professional-page.component.html',
  styleUrls: ['./professional-page.component.css']
})
export class ProfessionalPageComponent implements OnInit {

json = [
		{
		src: "/assets/images/Spring_Boot.png",
		
		textSpacing:"",
		photoSpacing:"",
		title:"Java: Spring",
		subTitle: [
			"7+ years professional experience developing Spring & SpringBoot applications",
			"Multi million dollar annual operational cost savings",
			"Creation of API's with SQL & NOSQL Databases",
			"Unit and Integration testing",
			"Kafka and Eventing Integration"
		]
		},	
		{
		src: "/assets/images/AWS.png",
		textSpacing:"order-md-2",
		photoSpacing:"order-md-1",
		title:"Cloud Certficates: AWS, Terraform",
		subTitle:[
			"AWS Certified: Associate Developer",
			"HashiCop Certified: Terraform Associate",
			"Experience with Containerized and Serverless architecture",
			"Application Health Monitoring",
		]
		},
		
		{
		src: "/assets/images/Angular.png",
		textSpacing:"",
		photoSpacing:"",
		title:"Web Dev: Angular",
		subTitle:[
			"5+ years professional experience developing responsive websites",
			"REST API integration with OAuth2.0 protocol",
			"Created an airspace waypoint tracking dashboard identifying saturation of inbound aircraft routes"
		]
		},
		{
		src: "/assets/images/swift.png",
		textSpacing:"order-md-2",
		photoSpacing:"order-md-1",
		title:"Swift: iOS",
		subTitle: [
			"2+ years professional experience developing iOS apps for Iphone & Ipad",
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
