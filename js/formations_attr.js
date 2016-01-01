var attributes = [];
attrBar = d3.select("#attributeBar");
var attrParse = function(s){
	if (s.indexOf(":") === -1) {
		return [ s, [] ];
	} else {
		s = s.split(":");
		return [ s[0], s[1].split(",")];
	}
};

$("#addAttr").click(
	function() {
		var input = attrParse($("#newAttrInfo").val());
		var attrName = input[0];
		var attrOpts = input[1];

		var newattr = attrBar.append("div")
			.attr("class", "dropdown personAttribute");
		newattr.append("button")
			.attr("class", "btn btn-primary dropdown-toggle")
			.attr("type", "button")
			.attr("data-toggle", "dropdown")
			.html(attrName+"&nbsp;<span class='caret'></span>");

		var optlist = newattr.append("ul")
			.attr("class", "dropdown-menu")
			.attr("id", attrName+"OptList");
		for (var i = 0; i < attrOpts.length; i++) {
			var curli = optlist.append("li")
				// .html("<a href='#'>"+attrOpts[i]+"<button class='btn btn-secondary \
				// 	pull-right btn-xs jscolor {valueElement:null,value:'66ccff'}' id='"+attrName+i+"ColorSelect' type='button'> \
				// 	&nbsp;&nbsp;&nbsp;</button></a>");
				.html("<a href='#'>"+attrOpts[i]+"<button class='btn pull-right btn-xs' \
					id='"+attrName+i+"ColorSelect'>&nbsp;&nbsp;&nbsp;</button></a>");
			$("#"+attrName+i+"ColorSelect").colorpicker();
		}
		optlist.append("li")
			.html("<a href='#'><button class='btn btn-secondary \
					pull-right btn-xs btn-block' id='"+attrName+"AddOpt' type='button'> \
					Add Option</button></a>");

		$('.colorpicker').on({
			"click":function(e){
				console.log("clicked");
				if ($(e.target).hasClass("")) {
					console.log("true");
					e.stopPropagation();
				}
		    }
		});

	});

// Equivalently allow pressing enter in attr-entering field to 
// trigger add attr button
$("#newAttrInfo").keyup(function(event){
    if(event.keyCode == 13){ // "enter" code
        $("#addAttr").click();
    }
});
