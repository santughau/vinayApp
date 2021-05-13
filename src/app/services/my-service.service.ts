import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class MyServiceService {
  url = 'http://localhost/adminVinay/vinay/';
  constructor(private http: HttpClient) { }

  getAllPrinters(): Observable<any> {
    return this.http.get(this.url + 'printer/read.php');
  }

  getSinglePrinter(Id: any): Observable<any> {
    return this.http.get(this.url + 'printer/read_one.php?id=' + Id);
  }

  getAllComputers(): Observable<any> {
    return this.http.get(this.url + 'computer/read.php');
  }

  getSingleComputer(Id: any): Observable<any> {
    return this.http.get(this.url + 'computer/read_one.php?id=' + Id);
  }

  getAllLaptop(): Observable<any> {
    return this.http.get(this.url + 'laptop/read.php');
  }

  getSingleLaptop(Id: any): Observable<any> {
    return this.http.get(this.url + 'laptop/read_one.php?id=' + Id);
  }

  getAllComputerParts(): Observable<any> {
    return this.http.get(this.url + 'computerpart/read.php');
  }

  getSingleComputerParts(Id: any): Observable<any> {
    return this.http.get(this.url + 'computerpart/read_one.php?id=' + Id);
  }

  getAllPrinterParts(): Observable<any> {
    return this.http.get(this.url + 'printerparts/read.php');
  }

  getSinglePrinterParts(Id: any): Observable<any> {
    return this.http.get(this.url + 'printerparts/read_one.php?id=' + Id);
  }

  getAllXerox(): Observable<any> {
    return this.http.get(this.url + 'xerox/read.php');
  }

  getSingleXerox(Id: any): Observable<any> {
    return this.http.get(this.url + 'xerox/read_one.php?id=' + Id);
  }

  getAllPhoto(): Observable<any> {
    return this.http.get(this.url + 'photography/read.php');
  }

  getSinglePhoto(Id: any): Observable<any> {
    return this.http.get(this.url + 'photography/read_one.php?id=' + Id);
  }

}
