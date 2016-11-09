
$( document ).ready(function() {
/*	
	//gets the current date information to be used in the datepicker
	var date = new Date();
	var currentMonth = date.getMonth();
	var currentDate = date.getDate();
	var currentYear = date.getFullYear();

  $( "#start_date" ).datetimepicker({ dateFormat: 'yy-mm-dd', changeMonth: true, changeYear: true, minDate: new Date(2014, 04 - 1, 12), maxDate: new Date(currentYear, currentMonth, currentDate, 23, 59) });
  $( "#end_date" ).datetimepicker({ dateFormat: 'yy-mm-dd', changeMonth: true, changeYear: true, minDate: new Date(2014, 04 - 1, 12), maxDate: new Date(currentYear, currentMonth, currentDate, 23, 59) });
  $( "#date" ).datepicker({ dateFormat: 'yy-mm-dd', changeMonth: true, changeYear: true, minDate: new Date(2014, 04 - 1, 12), maxDate: new Date(currentYear, currentMonth, currentDate) });
*/  
  //custom select boxes
  if( /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ) {
    $('.selectpicker').selectpicker('mobile');
	} else {
	  $('.selectpicker').selectpicker();
	}
  
  //search
  $("body.page-search .sub-menu input[type=text]").click(function(){
	    this.select();
	});
    
  //bootstrap popover
  $('[data-toggle="popover"]').popover({
    trigger: 'hover',
    'placement': 'bottom'
  });
  
  
});

function showSearchContainers(){
	$(".search-explore").hide();
	$(".search-containers").slideDown();
}

function showSubMenu(){
	$(".sub-menu-statistic").hide();
	$(".sub-menu-container").slideDown();
}
function language(selectObj) {
    var idx = selectObj.selectedIndex;
    var lang = selectObj.options[idx].value;
    document.cookie =  'language='+lang+'; expires=Thu, 2 Aug 2100 20:47:11 UTC; path=/'
    window.location.reload();
}
function populate(obj,str,selected) {
	console.log('populate');
	$.ajax({
		url:'search-ajax.php',
		type:'GET',
		data: 'ask=' + str,
		dataType: 'json',
		success: function( json ) {
			var options = "";
			$.each(json, function(i, item){
				if ($.inArray(item.id,selected) != -1) {
					options += "<option value="+item.id+" selected>"+item.value+"</option>";
				} else {
					options += "<option value="+item.id+">"+item.value+"</option>";
				}
			});
			obj.append(options);
		}
	});
}
