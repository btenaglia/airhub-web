

export class Utils {
  changeDate(date: Date) {
    const month = date.getMonth() + 1;
    return `${date.getFullYear()}-${
      month < 10 ? "0" + month : month
    }-${date.getDate()}`;
  }
  validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }
}
