import { Injectable } from "@angular/core";

export class Utils {
  changeDate(date: Date) {
    const month = date.getMonth() + 1;
    return `${date.getFullYear()}-${
      month < 10 ? "0" + month : month
    }-${date.getDate()}`;
  }
}
