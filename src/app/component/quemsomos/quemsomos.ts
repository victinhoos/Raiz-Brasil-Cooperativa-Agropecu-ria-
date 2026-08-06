import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-quemsomos',
  imports: [CommonModule],
  templateUrl: './quemsomos.html',
  styleUrl: './quemsomos.css',
})
export class Quemsomos implements OnInit, OnDestroy {

  images: string[] = [
    'assets/imgs/carrosel/01.jpeg',
    'assets/imgs/carrosel/02.png',
    'assets/imgs/carrosel/02.jpeg'
  ];
  
  currentIndex: number = 0;
  private intervalId: any;

  ngOnInit(): void {
    this.iniciarCarrosselAuto();
  }

  ngOnDestroy(): void {
    this.pararCarrossel();
  }

  iniciarCarrosselAuto(): void {
    // Roda automaticamente a cada 4 segundos (4000 ms)
    this.intervalId = setInterval(() => {
      this.currentIndex = (this.currentIndex + 1) % this.images.length;
    }, 4000);
  }

  pararCarrossel(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  goToIndex(index: number): void {
    this.currentIndex = index;
    // Reinicia o tempo ao clicar em uma bolinha
    this.pararCarrossel();
    this.iniciarCarrosselAuto();
  }
}