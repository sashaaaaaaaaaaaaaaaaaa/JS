const currentDate = new Date();
const day = currentDate.getDate();
const month = currentDate.getMonth() + 1; // Add 1 as months are zero-based
const year = currentDate.getFullYear();
const hours = currentDate.getHours();
const minutes = currentDate.getMinutes();
const seconds = currentDate.getSeconds();
const miliseconds =currentDate.getMilliseconds();

console.log(`Today's date and time is ${day}-${month}-${year} ${hours}:${minutes}:${seconds}:${miliseconds}`);


