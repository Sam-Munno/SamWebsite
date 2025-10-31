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
    { 
		img: '/assets/images/northwest.jpg',
		title: 'Northwest USA', 
		text: 'Starting in August 2024 we set out with Stanley, our beloved 2008 Grand Marquis, to explore the Rocky Mountains.  We headed west, like our "insert funny quip". Our main attractions were Glacier, Yellowstone, and Grand Tetons National Parks', 
		time: '1.5 Months' 
	},
    { 
		img: '/assets/images/turkey.jpg',
		title: 'Turkey',
		text: 'We landed in Istanbul bleary eyed and ready for an adventure.  We made a clockwise loop stopping in ... ', 
		time: '1 Month' 
	},
	{ 
		img: '/assets/images/southwest.jpg',
		title: 'Southwest USA', 
		text: 'This is a longer card with supporting text below as a natural lead-in to additional content.', 
		time: '1 Month' 
	},
    { 
		img: '/assets/images/thailand.jpg',
		title: 'Thailand',
		text: 'In short my favorite country.  The people are kind, the countrys nature is astounding, the food is great.  Whats not to love about Thailand', 
		time: '1.5 Months' 
	},
	{ 
		img: '/assets/images/laos.jpg',
		title: 'Laos', 
		text: 'Laos is a ...', 
		time: '2 Weeks' 
	},
    { 
		img: '/assets/images/vietnam.jpg',
		title: 'Vietnam',
		text: 'food, unapologetically themselves, ', 
		time: '1 Month' 
	},
	{ 
		img: '/assets/images/cambodia.jpg',
		title: 'Cambodia', 
		text: 'Angkor Watt, the community, food, Tuk Tuks ', 
		time: '2 Weeks' 
	},
    { 
		img: '/assets/images/nz.jpg',
		title: 'New Zealand',
		text: 'Rented a campervan in the south island for 4 weeks, doing a loop from Christchurch clockwise around the island.', 
		time: '1 Month' 
	},
	{ 
		img: '/assets/images/indo.jpg',
		title: 'Indonesia', 
		text: 'Surfing, Yoga, and Dengue Fever, oh boy', 
		time: '1 Month' 
	},
    { 
		img: '/assets/images/japan.jpg',
		title: 'Japan',
		text: 'Best food in the world', 
		time: '2 Weeks' 
	},
	{ 
		img: '/assets/images/pct.jpg',
		title: 'Pacific Coast',
		text: 'The PCT trail, except we have Stanley', 
		time: '2.5 Months' 
	},
	{
	
		img: '/assets/images/italy.jpg',
		title: 'Italy',
		text: 'Extra Innings: bonus trip to Italy.', 
		time: '1 Months' 
	}
    
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
