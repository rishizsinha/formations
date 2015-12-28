/**
 *	DEFINE VARIABLES
 *
 */

var svgContainer = d3.select("svg");
var PIXELSFEET = 25; // Treat as final variable
// Stage Dimensions and Sizings
// assume 1ft=25px

var stageHeight = 24 * PIXELSFEET;
var stageWidth = 30 * PIXELSFEET; 
var personRadius = PIXELSFEET; // person radius = 1 foot

/**
 *	STAGE RESIZING
 *
 */
$("#stageResize").click( function() {
	// re-assign stageHeight and stageWidth vars
	// DO ERROR CHECKING / FORM CHECKING TO MAKE SURE STRINGS WERE NOT INPUT
	oldheight = stageHeight;
	oldwidth = stageWidth;

	stageHeight = parseInt($("#stageHeight").val()) * PIXELSFEET;
	stageWidth = parseInt($("#stageWidth").val()) * PIXELSFEET;

	scaleheight = stageHeight / oldheight;
	scalewidth = stageWidth / oldwidth;

	d3.select("#stage").transition().duration(1000)
		.attr("transform","scale("+scaleheight+","+scalewidth+")");

});

// http://stackoverflow.com/questions/25384052/convert-svg-path-d-attribute-to-a-array-of-points
var lineFunction = d3.svg.line()
    .x(function(d) { return d[0]; })
    .y(function(d) { return d[1]; })
    .interpolate("linear");

/**
 *	PERSON CREATION
 *
 */
var names = [];

$("#addPerson").click( function() {
	// Determine name
	var name = $("#newPersonName").val()
	if (names.indexOf(name) == -1) {
		names.push(name);
		$("#nameDuplicateError").remove();
	} else {
		console.log("exists");
		if ($("#nameDuplicateError").length <= 0) {
			$("#personCreationBar").append("<div style='display:inline-block' id='nameDuplicateError'><font color='red'>&nbsp;Sorry, this name already exists!</font></div>");
		}
		return;
	}
	

	// Add person's "person group" = circle+label
	var newpersongroup = d3.select("#people").append("g")
		.attr("id", name+"Group")
		.attr("class", "personGroup");

	newpersongroup.append("circle")
		.attr("cy", function() { return Math.random() * 200; })
		.attr("cx", function() { return Math.random() * 720; })
		.attr("r", personRadius)
		.attr("fill", "white")
		.attr("stroke", "black")
		.attr("id", name+"Circle");

	// https://www.dashingd3js.com/svg-text-element
	newpersongroup.append("text")
		.text(function(d){return name;})
		.attr("x", function(d){return $("#"+name+"Circle").attr("cx")})
		.attr("y", function(d){return $("#"+name+"Circle").attr("cy")})
		.attr("id", name+"Label")
		.attr("text-anchor", "middle");

	// Add person's "axis group" = x- and y-axes
	var newaxisgroup = d3.select("#axes").append("g")
		.attr("id", name+"Axes")
		.attr("class", "axisGroup");

	var xline = [
		[$("#"+name+"Circle").attr("cx"), -0], 
		[$("#"+name+"Circle").attr("cx"), 4000]
	];
	newaxisgroup.append("path")
		.attr("class", "line")
		.style("stroke-dasharray", ("4, 4"))
		.attr("stroke", "blue")
		.attr("stroke-width", 2)
		.attr("d", lineFunction(xline))
		.attr("id", name+"Xaxes");

	var yline = [
		[-4000, $("#"+name+"Circle").attr("cy")], 
		[4000, $("#"+name+"Circle").attr("cy")]
	];
	newaxisgroup.append("path")
		.attr("class", "line")
		.style("stroke-dasharray", ("4, 4"))
		.attr("stroke", "blue")
		.attr("stroke-width", 2)
		.attr("d", lineFunction(yline))
		.attr("id", name+"Yaxes");

	var moveLine = function() {
		var xline = [
			[$("#"+name+"Circle").attr("cx"), 0], 
			[$("#"+name+"Circle").attr("cx"), $("#stage").attr("height")]
		];
		var yline = [
			[0, $("#"+name+"Circle").attr("cy")], 
			[$("#stage").attr("width"), $("#"+name+"Circle").attr("cy")]
		];

		d3.select("#"+name+"Xaxes")
		   // .data(xline) // set the new data
		   .attr("d", lineFunction(xline)); // apply the new data values

		d3.select("#"+name+"Yaxes")
		   // .data(yline) // set the new data
		   .attr("d", lineFunction(yline)); // apply the new data values
	}

	// draggable people
	// http://stackoverflow.com/questions/1108480/svg-draggable-using-jquery-and-jquery-svg
	$('#'+name+"Group")
	  .draggable()
	  .bind('mousedown', function(event, ui){
	    // bring target to front
	    $("#people").append($("#"+name+"Group"));
	  })
	  .bind('drag', function(event, ui){
	    // update coordinates manually, since top/left style props don't work on SVG
	    var xpos = ui.position.left-$("svg").offset().left+personRadius;
	    var ypos = ui.position.top-$("svg").offset().top+personRadius;
	    d3.select("#"+name+"Circle").attr("cx", xpos);
	    d3.select("#"+name+"Circle").attr("cy", ypos);
	    d3.select("#"+name+"Label").attr("x", xpos);
	    d3.select("#"+name+"Label").attr("y", ypos);
	    moveLine();
	  });
});

// Equivalently allow pressing enter in name-entering field to 
// trigger add person button
$("#newPersonName").keyup(function(event){
    if(event.keyCode == 13){ // "enter" code
        $("#addPerson").click();
    }
});


/**
 *	DEFINE VARIABLES
 *
 */

















