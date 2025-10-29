import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sabbatical-page',
  templateUrl: './sabbatical-page.component.html',
  styleUrls: ['./sabbatical-page.component.css']
})
export class SabbaticalPageComponent implements OnInit {

	json = [
		{
		src: "/assets/images/hiking.JPG",
		textSpacing:"",
		photoSpacing:"",
		title:"Hiking",
		subTitle:"I love exploring with friends. The ability to be in untouched, protected nature is something I value deeply. Most recent trip: Yosemite and Sequoia national parks. Hiker Pro Tip: Drop a GPS pin on your phone at the trailhead"
		},
		{
		src: "/assets/images/Skiing.png",
		textSpacing:"order-md-2",
		photoSpacing:"order-md-1",
		title:"Skiing",
		subTitle:"I recently picked up skiing as an adult. This past winter I was able to go to Colorado to ski in the mountains. Amazing!"
		},
		{
		src: "/assets/images/JiuJitsu.JPG",
		textSpacing:"",
		photoSpacing:"",
		title:"Brazilian Jiu Jitsu",
		subTitle:"I started learning Jiu Jitsu in 2018 searching for a new hobby. It's a fun mix of brain, technique, and power."
		},
		{
		src: "/assets/images/yoga.JPG",
		textSpacing:"order-md-2",
		photoSpacing:"order-md-1",
		title:"Yoga",
		subTitle:"I started practicing Hatha yoga in 2019 looking to improve my strength and flexibility. I find Yoga equally as rewarding to the mind as well as body.  To fellow software developers, this will help with the back pain. 😊"
		}
	]

	cards = [
    { img: 'https://via.placeholder.com/600x400', title: 'Card title 1', text: 'This is a longer card with supporting text below as a natural lead-in to additional content.', time: '9 mins' },
    { img: 'https://via.placeholder.com/600x400', title: 'Card title 2', text: 'This is a longer card with supporting text below as a natural lead-in to additional content.', time: '9 mins' },
    // ... add more card objects ...
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
