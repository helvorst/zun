import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-visualisation',
  templateUrl: './visualisation.component.html',
  styleUrls: ['./visualisation.component.less']
})
export class VisualisationComponent implements OnInit {
  canvas: any;
  HEIGHT: number;
  WIDTH: number;
  @ViewChild('fft') vizElement;
  canvasCtx: any;
  analyser: any;
  barWidthCoefficient = 1.2;

  constructor() { }

  ngOnInit() {
    
    const fftSize = 128;
    this.WIDTH = this.vizElement.nativeElement.clientWidth - 15; //15 - padding
    this.HEIGHT = this.vizElement.nativeElement.clientHeight - 30; //30 from bottom
    this.canvas = document.getElementById('canvas');
    this.canvasCtx = this.canvas.getContext('2d');
    this.setCanvasSilze();

    const audioCtx = new ((window as any).AudioContext)();
    this.analyser = audioCtx.createAnalyser();
    this.analyser.fftSize = fftSize;
    this.analyser.minDecibels = -114;

    navigator.mediaDevices.getUserMedia({ video: false, audio: true })
      .then((stream) => {
        const source = audioCtx.createMediaStreamSource(stream);
        source.connect(this.analyser);
        this.draw.call(this);
      })
      .catch(function (err) {
        console.log("An error occured! Can't get audio stream" + err);
      });
  }

  setCanvasSilze(): void {   
    this.canvas.setAttribute('width', this.WIDTH);
    this.canvas.setAttribute('height', this.HEIGHT);
  }

  draw(): void {
    const bufferLength = this.analyser.frequencyBinCount;
    const dataArray = new Uint8Array(bufferLength);
    var drawVisual = requestAnimationFrame(this.draw.bind(this));
    this.analyser.getByteFrequencyData(dataArray); 
    this.canvasCtx.fillStyle = 'rgb(0, 0, 0)';
    this.canvasCtx.fillRect(0, 0, this.WIDTH, this.HEIGHT);        
    const barWidth = (this.WIDTH / bufferLength / this.barWidthCoefficient);
    let barHeight;
    let x = 0;
    for (let i = 0; i < bufferLength; i++) {
      barHeight = dataArray[i];         
      this.canvasCtx.fillStyle = 'rgb(0, 0, 230)';
      this.canvasCtx.fillRect(x, this.HEIGHT - barHeight, barWidth, barHeight);

      x += barWidth * this.barWidthCoefficient;
    }
  };

}

 //analyser.connect(distortion);
        // analyser.fftSize = 2048;
        // var bufferLength = analyser.frequencyBinCount;
        // var dataArray = new Uint8Array(bufferLength);
        // analyser.getByteTimeDomainData(dataArray);
        // var WIDTH = 1000;
        // var HEIGHT = 200;
        // const canvas: any = document.getElementById('canvas');
        // canvas.setAttribute('width', WIDTH);
        // canvas.setAttribute('height', HEIGHT);
        // var canvasCtx = canvas.getContext('2d');
        // canvasCtx.clearRect(0, 0, WIDTH, HEIGHT);
        // canvasCtx.fillStyle = 'rgb(200, 200, 200)';
        // canvasCtx.fillRect(0, 0, WIDTH, HEIGHT);
        // canvasCtx.lineWidth = 2;
        // canvasCtx.strokeStyle = 'rgb(0, 0, 0)';
        // var drawVisual = requestAnimationFrame(draw);
        // function draw() {
        //   canvasCtx.beginPath();
        //   var sliceWidth = WIDTH * 1.0 / bufferLength;
        //   var x = 0;
        //   for (var i = 0; i < bufferLength; i++) {

        //     var v = dataArray[i] / 128.0;
        //     var y = v * HEIGHT / 2;

        //     if (i === 0) {
        //       canvasCtx.moveTo(x, y);
        //     } else {
        //       canvasCtx.lineTo(x, y);
        //     }

        //     x += sliceWidth;
        //   }
        //   canvasCtx.lineTo(canvas.width, canvas.height / 2);
        //   canvasCtx.stroke();
        // }
