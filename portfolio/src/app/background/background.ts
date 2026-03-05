import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';

class Perlin {
  permutation = [...Array(256).keys()];
  constructor() {
    for (let i = this.permutation.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [this.permutation[i], this.permutation[j]] = [this.permutation[j], this.permutation[i]];
    }
    this.permutation = this.permutation.concat(this.permutation);
  }
  fade(t: number) { return t * t * t * (t * (t * 6 - 15) + 10); }
  lerp(t: number, a: number, b: number) { return a + t * (b - a); }
  grad(hash: number, x: number, y: number) {
    const h = hash & 3;
    const u = h < 2 ? x : y;
    const v = h < 2 ? y : x;
    return ((h & 1) === 0 ? u : -u) + ((h & 2) === 0 ? v : -v);
  }
  noise(x: number, y: number) {
    const xi = Math.floor(x) & 255;
    const yi = Math.floor(y) & 255;
    const xf = x - Math.floor(x);
    const yf = y - Math.floor(y);
    const u = this.fade(xf);
    const v = this.fade(yf);
    const aa = this.permutation[this.permutation[xi] + yi];
    const ab = this.permutation[this.permutation[xi] + yi + 1];
    const ba = this.permutation[this.permutation[xi + 1] + yi];
    const bb = this.permutation[this.permutation[xi + 1] + yi + 1];
    const x1 = this.lerp(u, this.grad(aa, xf, yf), this.grad(ba, xf - 1, yf));
    const x2 = this.lerp(u, this.grad(ab, xf, yf - 1), this.grad(bb, xf - 1, yf - 1));
    return (this.lerp(v, x1, x2) + 1) / 2;
  }
}

@Component({
  selector: 'app-background',
  standalone: true,
  template: `<canvas #bgCanvas class="background-canvas"></canvas>`,
  styles: [`
    canvas.background-canvas {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: -1;
      background: #0d0d0d;
    }
  `]
})
export class Background implements AfterViewInit {
  @ViewChild('bgCanvas') canvasRef!: ElementRef<HTMLCanvasElement>;
  private ctx!: CanvasRenderingContext2D | null;
  private width = 0;
  private height = 0;
  private gridSize = 30;
  private time = 0;
  private perlin = new Perlin();
  private scale = 0.001;
  private matrixChars = ['0', '1'];
  private matrixEasterEgg: { x: number, y: number, alpha: number, alphaDir: number, char: string }[] = [];
  private maxMatrixChars = 10;
  private matrixFontSize = 14;

  ngAfterViewInit() {
    const canvas = this.canvasRef.nativeElement;
    this.resizeCanvas(canvas);
    this.ctx = canvas.getContext('2d');
    for (let i = 0; i < this.maxMatrixChars; i++) {
      this.matrixEasterEgg.push({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        alpha: Math.random() * 0.05, 
        alphaDir: Math.random() * 0.0001, // fade lento
        char: this.matrixChars[Math.floor(Math.random() * this.matrixChars.length)]
      });
    }
    window.addEventListener('resize', () => this.resizeCanvas(canvas));
    this.animate();
  }

  private resizeCanvas(canvas: HTMLCanvasElement) {
    this.width = window.innerWidth;
    this.height = window.innerHeight;
    canvas.width = this.width;
    canvas.height = this.height;
  }

  private animate() {
    if (!this.ctx) return;
    this.ctx.clearRect(0, 0, this.width, this.height);
    this.time += 0.0025;
    for (let y = 0; y <= this.height; y += this.gridSize) {
      for (let x = 0; x <= this.width; x += this.gridSize) {
        const nx = x * this.scale;
        const ny = y * this.scale;
        const noiseVal = this.perlin.noise(nx + this.time, ny + this.time);
        const gray = Math.floor(70 * noiseVal); 
        const brightness =  0.5 * noiseVal;    
        this.ctx.strokeStyle = `rgba(${gray}, ${gray}, ${gray}, ${brightness})`;
        this.ctx.beginPath();
        this.ctx.moveTo(x, y);
        this.ctx.lineTo(x + this.gridSize, y);
        this.ctx.stroke();
        this.ctx.beginPath();
        this.ctx.moveTo(x, y);
        this.ctx.lineTo(x, y + this.gridSize);
        this.ctx.stroke();
      }
      this.ctx.font = `${this.matrixFontSize}px monospace`;

      for (const charObj of this.matrixEasterEgg) {
        charObj.alpha += charObj.alphaDir;
        if (charObj.alpha >= 0.1) {
          charObj.alphaDir *= -1; 
        } else if (charObj.alpha <= 0) {
          charObj.alphaDir *= -1; 
          charObj.x = Math.random() * this.width;
          charObj.y = Math.random() * this.height;
          charObj.char = this.matrixChars[Math.floor(Math.random() * this.matrixChars.length)]; // escolhe novo caractere
        }
        this.ctx.fillStyle = `rgba(0,255,0,${charObj.alpha})`;
        this.ctx.fillText(charObj.char, charObj.x, charObj.y);
      }
    }
    requestAnimationFrame(() => this.animate());
  }
}