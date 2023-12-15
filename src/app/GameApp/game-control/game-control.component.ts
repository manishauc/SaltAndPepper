import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit, OnDestroy{
  evenNumbers: number[] = [];
  intervalId: any;

  constructor() { }

  ngOnInit(): void {
  }

  startGenerating(): void {
    this.stopGenerating(); // Clear any existing interval

    this.intervalId = setInterval(() => {
      this.generateEvenNumber();
    }, 1000); // Change this value to set your interval (in milliseconds)
  }

  stopGenerating(): void {
    clearInterval(this.intervalId);
  }

  generateEvenNumber(): void {
    let num = 0;
    if (this.evenNumbers.length > 0) {
      num = this.evenNumbers[this.evenNumbers.length - 1] + 2; // Get the next even number
    }

    this.evenNumbers.push(num);
  }

  ngOnDestroy(): void {
    this.stopGenerating(); // Clear the interval when the component is destroyed
  }
}
