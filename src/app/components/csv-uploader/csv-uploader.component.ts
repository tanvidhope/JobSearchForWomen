import { Component, OnInit, ViewChild } from '@angular/core';
import { NgxCsvParser, NgxCSVParserError } from 'ngx-csv-parser';

@Component({
  selector: 'app-csv-uploader',
  templateUrl: './csv-uploader.component.html',
  styleUrls: ['./csv-uploader.component.css']
})
export class CsvUploaderComponent implements OnInit {
  csvRecords: any[] = [];
  header: boolean = false;

  constructor(private ngxCsvParser: NgxCsvParser) { }
  @ViewChild('fileImportInput') fileImportInput: any;

  fileChangeListener($event: any): void {

    const files = $event.srcElement.files;
    this.header = (this.header as unknown as string) === 'true' || this.header === true;

    this.ngxCsvParser.parse(files[0], { header: true, delimiter: ',' })
      .pipe().subscribe((result: Array<any>) => {
        console.log('Result', result);
        this.csvRecords = result;
      }, (error: NgxCSVParserError) => {
        console.log('Error', error);
      });
  }

  ngOnInit(): void {
  }

}
