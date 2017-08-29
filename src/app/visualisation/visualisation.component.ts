import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-visualisation',
  templateUrl: './visualisation.component.html',
  styleUrls: ['./visualisation.component.less']
})
export class VisualisationComponent implements OnInit {

  @ViewChild('viz') vizElement;

  constructor() { }

  ngOnInit() {

    setTimeout(() => {
      const audioCtx = new ((window as any).AudioContext)();
      const analyser = audioCtx.createAnalyser();
      const WIDTH = this.vizElement.nativeElement.clientWidth;
      const HEIGHT = this.vizElement.nativeElement.clientHeight;
      const canvas: any = document.getElementById('canvas');
      canvas.setAttribute('width', WIDTH-5);
      canvas.setAttribute('height', HEIGHT-5);
      var canvasCtx = canvas.getContext('2d');
      navigator.mediaDevices.getUserMedia({ video: false, audio: true })
        .then((stream) => {
          var source = audioCtx.createMediaStreamSource(stream);
          source.connect(analyser);
          analyser.fftSize = 256;
          analyser.minDecibels = -135;
          var bufferLength = analyser.frequencyBinCount;
          console.log(bufferLength);
          var dataArray = new Uint8Array(bufferLength);

          canvasCtx.clearRect(0, 0, WIDTH, HEIGHT);
          function draw() {
            var drawVisual = requestAnimationFrame(draw);

            analyser.getByteFrequencyData(dataArray);

            canvasCtx.fillStyle = 'rgb(0, 0, 0)';
            canvasCtx.fillRect(0, 0, WIDTH, HEIGHT);
            var barWidth = (WIDTH / bufferLength / 1.5);
            var barHeight;
            var x = 0;

            for (var i = 0; i < bufferLength; i++) {
              barHeight = dataArray[i];
              const redI = i < 43 ? 2 : 0.5;
              const greenI = i > 43 && i < 86 ? 2 : 0.5;
              const blueI = i > 86 ? 2 : 0.5;
              const colors = [barHeight * redI, barHeight * greenI, barHeight * blueI];
              //console.log(colors.join(','))
              canvasCtx.fillStyle = 'rgb(' + colors.join(',') + ')';
              canvasCtx.fillRect(x, HEIGHT - barHeight / 2, barWidth, barHeight);

              x += (barWidth + 1) * 1.5;
            }
          };
          draw();

        })
        .catch(function (err) {
          console.log("An error occured! " + err);
        });
    }, 1000)




  }

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
