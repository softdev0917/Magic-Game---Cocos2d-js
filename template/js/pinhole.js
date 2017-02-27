var checkedLabels = false;
var checkedPrinciple = false;
var clickedReset = false;

$(function () {

});

function change_descriptsion(){
	var obj = $("#procedure-description");

	obj.html("");	
	var tmp = $('#more_modal > div.modal-body').html().split(" ");
	var tmp2 = "";
	
	var len1 = $('#moreButton').offset().left - obj.offset().left - 135;
	var len2 = 0;

	for(var i in tmp){
		tmp2 += " " + tmp[i];
		len2 = getWidth(tmp2);
		
		if(len2 > len1){
			obj.append("...");
			break;
		}else{
			if(i > 0)	obj.append(" ");
			obj.append(tmp[i]);
		}
	}
}

function getWidth(str){
	$("#tmp_div").html(str);
	return $("#tmp_div").width();	
}
