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
