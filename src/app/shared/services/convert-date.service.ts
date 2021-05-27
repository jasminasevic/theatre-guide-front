import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConvertDateService {

constructor() { }

convertDate(fullDate){
  var date = new Date(fullDate),
  mnth = ("0" + (date.getMonth() + 1)).slice(-2),
  day = ("0" + date.getDate()).slice(-2),

  hrs = (date.getHours()),
  mins = (date.getMinutes()),
  secs = (date.getSeconds());

  var convertedDate = [date.getFullYear(), mnth, day].join("-");
  var convertedTime = [hrs, mins, secs].join(":");

  return convertedDate + ' ' + convertedTime;
  }

getTwoDigitValue(number){
  return number < 10 ? '0' + number : '' + number;
}

getMinDateTime(){
  var date = new Date(),
  mnth = ("0" + (date.getMonth() + 1)).slice(-2),
  day = ("0" + date.getDate()).slice(-2),

  hrs = (date.getHours()),
  mins = (date.getMinutes()),
  secs = (date.getSeconds()),

  twoDigitHours = this.getTwoDigitValue(hrs),
  twoDigitMins = this.getTwoDigitValue(mins)

  var convertedDate = [date.getFullYear(), mnth, day].join("-");
  var convertedTime = [twoDigitHours, twoDigitMins].join(":");

  return convertedDate + 'T' + convertedTime;
}


getMinDate(){
  var date = new Date(),
  mnth = ("0" + (date.getMonth() + 1)).slice(-2),
  day = ("0" + date.getDate()).slice(-2);

  var convertedDate = [date.getFullYear(), mnth, day].join("-");

  return convertedDate;
}


formatPremiereDate(date) {
  const d = new Date(date);
  let month = '' + (d.getMonth() + 1);
  let day = '' + d.getDate();
  const year = d.getFullYear();
  if (month.length < 2) month = '0' + month;
  if (day.length < 2) day = '0' + day;
  return [year, month, day].join('-');
  }

}
