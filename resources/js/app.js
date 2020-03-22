require('./bootstrap');


$(document).ready( function () {
	getData();
});


function getData(country) {
	var ajaxData = {
		"async": true,
		"crossDomain": true,
		"url": "https://covid-19-coronavirus-statistics.p.rapidapi.com/v1/stats?country="+country,
		"method": "GET",
		"headers": {
			"x-rapidapi-host": "covid-19-coronavirus-statistics.p.rapidapi.com",
			"x-rapidapi-key": "a67631642dmshb4e1c6a2af21ef3p167a39jsnbc30dca37eb7"
		}
	}

	$("#overlay").show();

	$.ajax(ajaxData).done(function (res) {
		var  dataArr = res.data.covid19Stats;

		$('#tbl_status').dataTable().fnClearTable();
	    $('#tbl_status').dataTable().fnDestroy();
	    $('#tbl_status').dataTable({
	        data: dataArr,
	        language:
            {
                processing: "<div class='overlay custom-loader-background'><i class='fa fa-cog fa-spin custom-loader-color'></i></div>"
            },
	        processing: true,
	        columnDefs: [
	        	{ className: "text-warning", targets: [2] },
	        	{ className: "text-success", targets: [3] },
	        	{ className: "text-danger", targets: [4] },
	        ],
	        columns: [
	            { data: 'country' },
	            { data: 'province' },
	            { data: function(d) {
	            	return numFormat(d.confirmed);
	            } },
	            { data: function(d) {
	            	return numFormat(d.recovered);
	            } },
	            { data: function(d) {
	            	return numFormat(d.deaths);
	            } },
	            { data: function(d) {
	            	return formatDate(d.lastUpdate);
	            } },
	        ],
	        fnInitComplete : function() {
	        	$("#overlay").hide();
	        }
	    });
	});
}

function numFormat(num) {
	return (num).toLocaleString('en');
}

function formatDate(date) {
    var d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2) 
        month = '0' + month;
    if (day.length < 2) 
        day = '0' + day;

    return [year, month, day].join('/');
}