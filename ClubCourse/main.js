$(document).ready(function(){
    $("#courseTable").append("<tr><th>Year and Date</th><th>Event</th><th>how long to Em's birthday</th><tr>");
    
var YearandDate = "1972/10/17";
    
var topicCount=topic.length;

    var secondUnit=1000;
    var miniuteUnit=secondUnit*60;
    var hourUnit=miniuteUnit*60;
    var dayUnit=hourUnit*24;
    
for(var x=0;x<topicCount;x++)
    {
        $("#courseTable").append("<tr>");
        $("#courseTable").append("<td>"+topic[x]+"</td>");
        $("#courseTable").append("<td>"+topic1+"</td>");
        $("#courseTable").append("<td>"+topic2+"</td>");
        $("#courseTable").append("<td>"+(new Date((startDate.getTime()+x*7*dayUnit))).toLocaleDateString().slice(5)+"</td>");
       $("#courseTable").append("<td>"+(startDate+7*x)+"</td>");
       $("#courseTable").append("</tr>");
    }
});
    