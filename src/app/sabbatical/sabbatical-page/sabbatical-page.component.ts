import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sabbatical-page',
  templateUrl: './sabbatical-page.component.html',
  styleUrls: ['./sabbatical-page.component.css']
})
export class SabbaticalPageComponent implements OnInit {

	cards = [
    { 
		img: '/assets/images/northwest.jpg',
		title: 'Northwest USA', 
		text: 'August 2024: Stanley (2008 Grand Marquis) and us hit the Rockies. Westbound, slightly lost, and fully caffeinated—Glacier, Yellowstone, and the Grand Tetons didn’t stand a chance.  Just remember to zip up the tent', 
		time: '1.5 Months' 
	},
    { 
		img: '/assets/images/turkey.jpg',
		title: 'Turkey',
		text: 'Bleary-eyed and ready for adventure, we touched down in Istanbul and were immediately hooked—Chia, fresh pastries, the turquoise coast of the Turkish Riviera, and the timeless ruins of Ephesus and Troy.', 
		time: '1 Month' 
	},
	{ 
		img: '/assets/images/southwest.jpg',
		title: 'Southwest USA', 
		text: 'As the days got shorter and the air turned crisp, we tried our hand at camping in the Southwest—highlighted by a three-night backpacking adventure in the Grand Canyon.', 
		time: '1 Month' 
	},
    { 
		img: '/assets/images/thailand.jpg',
		title: 'Thailand',
		text: 'In short: my favorite country. If I ever disappear, start your search here. The people are endlessly kind, with smiles that never seem to leave their faces. The nature is jaw-dropping—from the northern mountains to the southern seas—and the food? Next-level. Honestly, what’s not to love?', 
		time: '1.5 Months' 
	},
	{ 
		img: '/assets/images/laos.jpg',
		title: 'Laos', 
		text: 'Laos feels like the quieter, slower heartbeat of Southeast Asia. From misty mornings over the Mekong River to sleepy towns where the livestock are your alarm clock, it’s a place to slow down, and remember that travel doesn’t always need to be loud to be unforgettable.', 
		time: '2 Weeks' 
	},
    { 
		img: '/assets/images/vietnam.jpg',
		title: 'Vietnam',
		text: 'From the limestone cliffs of Ninh Binh to the buzzing scooters of Ho Chi Minh City, Vietnam feels alive in every corner. Eat, wander, and repeat you wont be dissapointed.', 
		time: '1 Month' 
	},
	{ 
		img: '/assets/images/cambodia.jpg',
		title: 'Cambodia', 
		text: 'Cambodia is more than Angkor Wat, though that alone is worth the trip. It’s quiet villages, friendly smiles, and a sense of history that lingers in every corner of the country.', 
		time: '2 Weeks' 
	},
    { 
		img: '/assets/images/nz.jpg',
		title: 'New Zealand',
		text: 'New Zealand’s South Island through the windows of Hamish the van: epic peaks, quiet beaches, and the perfect excuse to go slow. No schedule, no stress, just mountains, music, and kilometers of open road.', 
		time: '1 Month' 
	},
	{ 
		img: '/assets/images/indo.jpg',
		title: 'Indonesia', 
		text: 'Indonesia, the playground for your soul.  Surfing mornings, yoga afternoons, and evenings where the sunsets feel like they were painted just for you. Oh ya, and don\'t forget Dengue Fever', 
		time: '1 Month' 
	},
    { 
		img: '/assets/images/japan.jpg',
		title: 'Japan',
		text: 'Conveyor belt sushi, steaming bowls of ramen, and fans cheering at a Nippon League game—Japan dazzles. But what sticks is how respect is everywhere: from how food is served to how strangers treat each other.', 
		time: '2 Weeks' 
	},
	{ 
		img: '/assets/images/pct.jpg',
		title: 'Pacific Coast',
		text: 'We took Stanley north from LA, with backpacks and a tent, chasing good views and quiet campsites. Remy and I loved the scenery, hated the mosquitoes, and somehow laughed through it all.', 
		time: '2.5 Months' 
	},
	{
	
		img: '/assets/images/italy.jpg',
		title: 'Italy',
		text: 'Extra Innings - Italy in a month: laughter, pasta, and two families’ worth of chaos. Walking through my ancestral village with my parents in Calabria was the kind of moment you carry forever.', 
		time: '1 Months' 
	}
    
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
