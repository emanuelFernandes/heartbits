import { Component, OnInit } from '@angular/core';

declare interface TableData {
	headerRow: string[];
	headerRow2: string[];
    dataRows: string[][];
}

@Component({
  selector: 'app-medication',
  templateUrl: './medication.component.html',
  styleUrls: ['./medication.component.css']
})
export class MedicationComponent implements OnInit {

  constructor() { }

  public tableData2: TableData;

  public route = "/user/medication-list";

  public srcL = ["assets/img/faces/captopril.png", 'assets/img/faces/comp2.png', 'assets/img/faces/comp3.png', 'assets/img/faces/cipro.png' ];


   MAXSIST = 140;
   MAXDIST = 90;
   EMERGENCYSIST = 180;
   EMERGENCYDIST = 110;
   MAXFC = 100;
   MINFC = 60;

   newMeasure={date:null, dist:null, sist:null, day:null};

   timeOfDay = ["Manhã", "Tarde", "Noite" ];

  ngOnInit() {

  	this.tableData2 = {
			headerRow: [ 'Princípio ativo', 'Dose',  '', '', "Quando tomar", '', "" ],
			headerRow2: ['', '', 'Jejum', 'Pós Pequeno-almoço', "Almoço", 'Tarde', "Jantar"],
            dataRows: [
                ['Captopril', '25mg', '2', '   X', '     X', '   X', '   X'],
                ['Metformina', '500mg', '   X', '     1', '   1', '   X', '   1'],
                ['Sinvastatina', '40mg', '   X', '     X', '   X', '   X', '   1'],
                ['Ciprofibrato', '100mg', '   X', '     X', '   X', '   X', '   1' ],
            ]
        };

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

	onChange(value) {
	console.log(value);
	}
   
   default(date){
   	//date="";
   	var exp = new RegExp("-", "g");

   date = date.replace(exp,'/');
   		
   	return [date, '00/00', '00/00', '00/00'];
   }

   timeOfDayToInd(t){
   	switch (t) {
   		case "Manhã":
   			return 1;
   			
   		case "Tarde" :

   		return 2;

   		case "Noite" :

   		return 3;
   	}
   }

   onSubmit(){
   	var flag=false;
   	var ind= 0;
   	var exp = new RegExp("-", "g")
   	for (var d of this.tableData2.dataRows){
   		console.log(d[0],this.newMeasure.date.replace(exp,'/'));
   		if(d[0] == this.newMeasure.date.replace(exp,'/')){
   			flag=true;
   			break;
   		}
   		ind++;
   	}
   	if(!flag){
   	this.tableData2.dataRows.push(this.default(this.newMeasure.date));
   }
   this.tableData2.dataRows[ind][this.timeOfDayToInd(this.newMeasure.day)] = this.newMeasure.sist+'/'+this.newMeasure.dist;
   }

}
