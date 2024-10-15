//Question3- You need to calculate the no.of days between the mentioned dates in below array records

const recordsCount = [
  "2",
  "Ram Kumar, 134, 20.5.1994, 20.4.2002",
  "gopal, 24, 31.12.1995, 21.02.2017",
];

function days_between(recordsCount) {
  const diffDays = [];
  for (let i = 1; i < recordsCount.length; i++) {
    const [day1, month1, year1] = recordsCount[i].split(", ")[2].split(".");
    const [day2, month2, year2] = recordsCount[i].split(", ")[3].split(".");
    //const [day1,month1,year1] = date1.split(".")
    //const [day2,month2,year2] = date2.split(".")
    //console.log(date1,date2)
    //console.log(day1,month1,year1)
    //console.log(day2,month2,year2)
    const parsedDate1 = new Date(year1, month1 - 1, day1); //month-1 is used as month is 0-indexed
    const parsedDate2 = new Date(year2, month2 - 1, day2);
    // console.log(parsedDate1)
    // console.log(parsedDate2)
    diffDays.push(Math.abs(parsedDate1 - parsedDate2) / (24 * 60 * 60 * 1000));
  }
  return diffDays;
}

const result = days_between(recordsCount);
console.log(result.join("\n"));
