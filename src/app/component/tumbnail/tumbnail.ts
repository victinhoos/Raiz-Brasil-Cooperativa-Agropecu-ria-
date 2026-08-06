import { Component } from '@angular/core';

@Component({
  selector: 'app-tumbnail',
  imports: [],
  templateUrl: './tumbnail.html',
  styleUrl: './tumbnail.css',
})
export class Tumbnail {
  scrollTo(elementId: string): void {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth', 
        block: 'start'      
      });
    }
  }}