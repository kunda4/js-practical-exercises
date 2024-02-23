// count the duplicate in the following months how many times was duplicated.

const months = ['jan', 'may', 'feb', 'jan','April', 'August','feb','jan','may','december']

const MonthsDuplicate = months.reduce((obj, month) => {
    if(obj[month] == undefined){
        obj[month] =1;
        return obj
    } else {
        obj[month]++
        return obj
    }
}, {})

console.log(MonthsDuplicate)


