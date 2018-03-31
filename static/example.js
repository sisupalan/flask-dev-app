
$(function () { 
  $('#navSlider').click(function () {
    $('.side-menu').toggleClass('off');
    $('.side-body').toggleClass('full-width'); 
    $('.side-footer').toggleClass('full-width'); 
  });
});



function onLoadEventt() {
//alert('Checkpoint1');
    
 var pieData = {
    labels : ["SUN","MON","TUE","WED","THU","FRI","SAT"],
    datasets : [
        {
            backgroundColor: [
        "#2ecc71",
        "#3498db",
        "#95a5a6",
        "#9b59b6",
        "#f1c40f",
        "#e74c3c",
        "#34495e"
      ],
            data : [135,185,225,385,275,215,265]
        }
    ]
}
 
var pieOptions = {
    tooltipTemplate: " Peaked at: " + "<%= value %> "
}
 
    
    var myPieChart = new Chart(document.getElementById('pieChartt').getContext('2d'),{
    type: 'pie',
    data: pieData,
    options: pieOptions
});

//alert(myPieChart);
//alert(pieData);
//alert(pieOptions);
//alert(document.getElementById('pieChartt').getContext('2d'))


var lineData = {
    labels : ["2011","2012","2013","2014","2015","2016","2017"],
    datasets : [
        {
            data : [135,185,225,385,275,215,265],
            fill:false,
            borderColor:"rgb(75, 192, 192)",
            lineTension:0.1,
            label:"Growth"
        }
    ]
}

var lineOptions = {
}

    var myLineChart = new Chart(document.getElementById('lineChartt').getContext('2d'),{
    type: 'line',
    data: lineData,
    options: lineOptions
});

}





$(document).ready(function() {
    $('#detailTable').DataTable();
} );



