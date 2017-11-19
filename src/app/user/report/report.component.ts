import { Component, OnInit } from '@angular/core';
import * as Chartist from 'chartist';

declare interface TableData {
    headerRow: string[];
    dataRows: string[][];
}


@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {

  constructor() { }

  public tableData2: TableData;

   MAXSIST = 140;
   MAXDIST = 90;
   EMERGENCYSIST = 180;
   EMERGENCYDIST = 110;
   MAXFC = 100;
   MINFC = 60;

  ngOnInit() {

  	this.tableData2 = {
            headerRow: [ 'Data', 'Manhã',  'Tarde', 'Noite' ],
            dataRows: [
                ['2017/11/14', '130/70','135/72', '130/73'],
                ['2017/11/15', '135/74','145/71', '140/73'],
                ['2017/11/16', '133/70','130/76', '129/74'],
                ['2017/11/17', '183/95','133/71', '130/95' ],
                ['2017/11/18', '130/70','145/72', '136/111'],
            ]
        };

  	var data = {
          labels: ['0H', '2H', '4H', '6H', '8H', '10H', '12H', '14H', '16H', '18H', '20H', '22H'],
          series: [
            [130, 150, 180, 220, 280, 160, 130, 160, 200, 230, 180, 130],
             [120, 130, 160, 200, 170, 120, 170, 210, 250, 200, 150, 120]
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

  getStyle(cell){
  	const value = cell.split('/')[0];

  	//console.log(value);

  	if(value > this.EMERGENCYSIST){
  		return {color:'red'};
  	}

  	if(value > this.MAXSIST)
  	{
  		return {'font-weight':'bold'};
  	}	
  }

  sist(cell){
  	return cell.split('/')[0];
  }



  getStyleDist(cell){
  	const value = cell.split('/')[1];

  	//console.log(value);

  	if(value > this.EMERGENCYDIST){
  		return {color:'red'};
  	}

  	if(value > this.MAXDIST)
  	{
  		return {'font-weight':'bold'};
  	}	
  }

  sistDist(cell){
  	return cell.split('/')[1];
  }

  getStyleFC(cell){
  	if(cell > this.MAXFC || cell < this.MINFC){
  		return {'font-weight':'bold'};
  	}
  }

  

}
