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
			.attr("class", "dropdown personAttribute")
			.attr("id", attrName+"Dropdown");
		newattr.append("button")
			.attr("class", "btn btn-primary dropdown-toggle")
			.attr("type", "button")
			.attr("id", attrName+"Button")
			// .attr("data-toggle", "dropdown")
			.html(attrName+"&nbsp;<span class='caret'></span>");
		$("#"+attrName+"Button").click(function() {
			if ($("#"+attrName+"Dropdown").hasClass("open")) {
				$("#"+attrName+"Dropdown").removeClass("open");
			} else {
				$("#"+attrName+"Dropdown").addClass("open");
			}
		})

		var optlist = newattr.append("ul")
			.attr("class", "dropdown-menu")
			.attr("id", attrName+"OptList");
		for (var i = 0; i < attrOpts.length; i++) {
			var curli = optlist.append("li")
				.attr("id", attrName+i+"Li")
				.html("<a href='#'><div id='"+attrName+i+"Text' style='display:inline-block'>"+attrOpts[i]+"</div>\
					<span class='glyphicon glyphicon-pencil pull-right ic' \
					id='"+attrName+i+"Edit' style='display:none'></span><div class='square pull-right' \
				  id='"+attrName+i+"ColorSelect'>&nbsp;&nbsp;&nbsp;</div></a>");
			$("#"+attrName+i+"Edit").click(function() {
				var n = this.id.replace(/\D/g,'');
				var t = $("#"+attrName+n+"Text").text();
				if ($("#"+attrName+n+"Text")[0].tagName.toLowerCase() === "div") {
					$("#"+attrName+n+"Text").replaceWith("<input type='text' id='"+attrName+n+"Text' \
						style='display:inline-block;height:20px' size='11' height='4' value="+t+">");
					$("#"+attrName+n+"Text").focus().select();
					$("#"+attrName+n+"Text").keyup(function(event){
					    if(event.keyCode == 13){ // "enter" code
					        $("#"+attrName+n+"Edit").click();
					    }
					});
				} else {
					if ($("#"+attrName+n+"Text").val() === "") {
						$("#"+attrName+n+"Li").remove();
					} else {
						$("#"+attrName+n+"Text").replaceWith("<div id='"+attrName+n+"Text' \
						style='display:inline-block'>"+$("#"+attrName+n+"Text").val()+"</div>");
					}
					$("#"+attrName+n+"Text").dblclick(function(){
						$("#"+attrName+n+"Edit").click();
					});
				}
			});
			$("#"+attrName+i+"Text").dblclick(function(){
				var n = this.id.replace(/\D/g,'');
				$("#"+attrName+n+"Edit").click();
			});
			$("#"+attrName+i+"ColorSelect")
				.colorpicker({container:$("#"+attrName+i+"ColorSelect")})
				.on("changeColor", function(event) {
					console.log(event.target);
					console.log(this);
					console.log($("#"+attrName+i+"ColorSelect"));
					console.log(event.color.toHex());
					$(event.target).css("background-color", event.color.toHex());
				});
		}
		optlist.append("li")
			.html("<a href='#'><button class=' \
					pull-right btn-xs btn-block' id='"+attrName+"AddOpt' type='button'> \
					Add Option</button></a>");

		$('.colorpicker').on({
			"click":function(e){
				if ($(e.target).hasClass("")) {
					console.log("true");
					e.stopPropagation();
				}
		    }
		});

		// $('#'+attrName+'AddOpt').click(funtion(){

		// });
	});

// Equivalently allow pressing enter in attr-entering field to 
// trigger add attr button
$("#newAttrInfo").keyup(function(event){
    if(event.keyCode == 13){ // "enter" code
        $("#addAttr").click();
    }
});
