var topic=[
    "1972/10/17" 
];
var topic1=[
    "Em was born" 
];
var topic2=[
    "Heather is still working on it now..."
];

 

function setMonthAndDay(startMonth,startDay)
{
    startDate.setMonth(startMonth-1);
    startDate.setDate(startDay);
    startDate.setHours(0);
    startDate.setMinutes(0);
    startDate.setSeconds(0);
}

setMonthAndDay(10,17);
