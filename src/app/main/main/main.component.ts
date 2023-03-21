import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  
  artist = 'Polo G';
  songs = [
    { name: 'Lost Files', duration: '2:00'},
    { name: 'Dyin Breed', duration: '2:59' },
    { name: 'Through Da Storm', duration: '3:15' },
    { name: 'Effortless', duration: '2:51' },
    { name: 'Pop Out ft. Lil Tjay', duration: '2:46' },
    { name: 'Battle Cry', duration: '3:12' },
    { name: 'BST', duration: '3:22' },
    { name: 'Finer Things', duration: '3:02' },
    { name: 'Picture This', duration: '2:45' },
    { name: 'Chosen 1', duration: '2:07' },
    { name: 'Deep Wounds', duration: '3:00' },
    { name: 'Last Strike', duration: '3:17' },
    { name: "A King's Nightmare", duration: '2:47' },
    { name: 'Pop Out Again ft. Lil Baby & Gunna', duration: '3:43' }
  ];

  releases = [
    {
       name: 'No Time Wasted',
       image: 'https://i.scdn.co/image/ab67616d00001e020e6d03ec271c536f7e13f031',
       artist: 'Polo G ft. Future'
    },
    {
      name: 'Face 2 Face',
      image: 'https://i.scdn.co/image/ab67616d00001e02bc9d5e85e3673b030e145726',
      artist: 'Juice WRLD'
    },
    {
      name: 'Math Scolars',
      image: 'https://i.scdn.co/image/ab67616d00001e02210c32efbd49d4af9075f82c',
      artist: 'Scorey'
    },
    {
      name: 'Marie',
      image: 'https://i.scdn.co/image/ab67616d00001e028a933398bd864dc2198685d9',
      artist: 'Sleepy Hallow'
    },
    {
      name: 'Sofrito',
      image: 'https://i.scdn.co/image/ab67616d00001e025d855974c048c06355261a67',
      artist: 'Munic HB',
    },
    {
      name: 'Lavish Lullaby',
      image: 'https://i.scdn.co/image/ab67616d00001e02f1814f1b76df2fa196e4f45e',
      artist: 'Masego',
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
