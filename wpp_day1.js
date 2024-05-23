/*Write a JavaScript program to display the current day and time in the following format.

Sample Output : 

Today is : Tuesday.
Current time is : 10 PM : 30 : 38
*/
function getTime() {
    let today = new Date();
    let day = today.getDay();
    let hours = today.getHours();
    const amPm = hours >= 12 ? "PM" : "AM";
    let minutes = today.getMinutes();
    let seconds = today.getSeconds();
    const days = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"]
    const result = days[day];
    console.log("today's", result);
    console.log("current time is", hours + amPm + " : " + minutes + " : " + seconds);
}
getTime();