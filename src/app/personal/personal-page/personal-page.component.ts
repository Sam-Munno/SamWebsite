import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-personal-page',
  templateUrl: './personal-page.component.html',
  styleUrls: ['./personal-page.component.css']
})
export class PersonalPageComponent implements OnInit {

	json = [
		{
		src: "/assets/images/hiking.JPG",
		textSpacing:"",
		photoSpacing:"",
		title:"Hiking",
		subTitle:"I love exploring with friends. The ability to be in untouched protected nature is something I value deeply. Most recent trip: Yosemite and Sequoia national parks. Hiker Pro Tip: Drop a GPS pin on your phone at the trailhead"
		},
		{
		src: "/assets/images/Skiing.png",
		textSpacing:"order-md-2",
		photoSpacing:"order-md-1",
		title:"Skiing",
		subTitle:"I recently picked up skiing as an adult. This past winter I was able to go to Colorado to Ski in the mountains. Amazing!"
		},
		{
		src: "/assets/images/JiuJitsu.JPG",
		textSpacing:"",
		photoSpacing:"",
		title:"Brazilian Jiu Jitsu",
		subTitle:"I started learning Jiu Jitsu in 2018 searching for a new hobby. I immediately fell in love with the problem solving and skill involved.  The concept of technique over power is captivating"
		},
		{
		src: "/assets/images/yoga.JPG",
		textSpacing:"order-md-2",
		photoSpacing:"order-md-1",
		title:"Yoga",
		subTitle:"I started practicing Hatha yoga in 2019 looking to improve my strength and flexibility. I find Yoga equally as rewarding to the mind as well as body.  To fellow software developers, this will help with the back pain. 😊"
		}
	]

  constructor() { }

  ngOnInit(): void {
  }

}
