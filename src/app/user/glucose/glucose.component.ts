import { Component, OnInit } from '@angular/core';
import * as Chartist from 'chartist';

@Component({
  selector: 'app-glucose',
  templateUrl: './glucose.component.html',
  styleUrls: ['./glucose.component.css']
})
export class GlucoseComponent implements OnInit {

  constructor() { }


  ngOnInit() {

  	var data = {
          labels: ['0H', '2H', '4H', '6H', '8H', '10H', '12H', '14H', '16H', '18H', '20H', '22H'],
          series: [
            [95, 55, 126, 220, 280, 180, 260, 180, 120, 75, 180, 130]
            ]
        }
        ;

        var options = {
            seriesBarDistance: 10,
            axisX: {
                showGrid: false
            },
            height: "245px"
        };

        var responsiveOptions = [
          ['screen and (max-width: 640px)', {
            seriesBarDistance: 5,
            axisX: {
              labelInterpolationFnc: function (value) {
                return value[0];
              }
            }
          }]
        ];

        Chartist.Line('#chartActivity', data, options, responsiveOptions);

  }

}
