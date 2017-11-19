import { Component, OnInit } from '@angular/core';

declare interface TableData {
    headerRow: string[];
    dataRows: string[][];
}

@Component({
    selector: 'table-cmp',
    moduleId: module.id,
    templateUrl: 'table.component.html'
})

export class TableComponent implements OnInit{
    public tableData1: TableData;
    public tableData2: TableData;
    public route = { path: '../user', title: 'User Profile',  icon:'ti-user', class: '' };
    ngOnInit(){
        this.tableData1 = {
            headerRow: [ 'Nome', 'Data de Nascimento', 'Contacto de Emergência'],
            dataRows: [
                [ 'António Silva', '12/05/1935', '917734901'],
                [ 'João Braga', '02/09/1939', '923676445'],
                [ 'Nelson Parente', '02/09/1939', '923665789'],
                [ 'Miguel Noivo', '14/04/1900', '911989445'],
                [ 'Joaquim Sousa', '14/02/1940', '964212455'],
                [ 'Pedro Lopes', '02/09/1939', '929899543']
            ]
        };
        this.tableData2 = {
            headerRow: [ 'ID', 'Name',  'Salary', 'Country', 'City' ],
            dataRows: [
                ['1', 'Dakota Rice','$36,738', 'Niger', 'Oud-Turnhout' ],
                ['2', 'Minerva Hooper', '$23,789', 'Curaçao', 'Sinaai-Waas'],
                ['3', 'Sage Rodriguez', '$56,142', 'Netherlands', 'Baileux' ],
                ['4', 'Philip Chaney', '$38,735', 'Korea, South', 'Overland Park' ],
                ['5', 'Doris Greene', '$63,542', 'Malawi', 'Feldkirchen in Kärnten', ],
                ['6', 'Mason Porter', '$78,615', 'Chile', 'Gloucester' ]
            ]
        };
    }
}
