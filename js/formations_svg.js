var svgContainer = d3.select("svg");
var PIXELSFEET = 25;
// Stage Dimensions and Sizings
// assume 1ft=25px

var stageHeight = 24 * PIXELSFEET;
var stageWidth = 30 * PIXELSFEET; 
var personRadius = PIXELSFEET;

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

var lineFunction = d3.svg.line()
    .x(function(d) { return d[0]; })
    .y(function(d) { return d[1]; })
    .interpolate("linear");

$("#addPerson").click( function() {
	// add circle to "#people" svg group element
	// console.log("hi");
	var name = $("#newPersonName").val()
	// d3.select("#people").append("circle")
	// 	.attr("cy", function() { return Math.random() * 200; })
	// 	.attr("cx", function() { return Math.random() * 720; })
	// 	.attr("r", personRadius)
	// 	.attr("fill", "black");
	var newgroup = d3.select("#people").append("g")
		.attr("id", name+"Group")
		.attr("class", "personGroup");

	var newgroupcircle = d3.select("#"+name+"Group").append("g")
		.attr("id", name+"CircleGroup")
		.attr("class", "circleGroup")

	newgroupcircle.append("circle")
		.attr("cy", function() { return Math.random() * 200; })
		.attr("cx", function() { return Math.random() * 720; })
		.attr("r", personRadius)
		.attr("fill", "white")
		.attr("stroke", "black")
		.attr("id", name+"Circle");

	newgroupcircle.append("text")
		.attr("text", function(){return name})
		.attr("x", function(d){return $("#"+name+"Circle").cx})
		.attr("y", function(d){return $("#"+name+"Circle").cy})
		.attr("id", name+"Label");

	// var xline = [
	// 	[$("#"+name+"Circle").attr("cx"), -0], 
	// 	[$("#"+name+"Circle").attr("cx"), 4000]
	// ];
	// newgroup.append("path")
	// 	.attr("class", "line")
	// 	.style("stroke-dasharray", ("4, 4"))
	// 	.attr("stroke", "blue")
	// 	.attr("stroke-width", 2)
	// 	.attr("d", lineFunction(xline))
	// 	.attr("id", name+"Xaxes");

	// var yline = [
	// 	[-4000, $("#"+name+"Circle").attr("cy")], 
	// 	[4000, $("#"+name+"Circle").attr("cy")]
	// ];
	// newgroup.append("path")
	// 	.attr("class", "line")
	// 	.style("stroke-dasharray", ("4, 4"))
	// 	.attr("stroke", "blue")
	// 	.attr("stroke-width", 2)
	// 	.attr("d", lineFunction(yline))
	// 	.attr("id", name+"Yaxes");

	// var moveLine = function() {
	// 	var xline = [
	// 		[$("#"+name+"Circle").attr("cx"), 0], 
	// 		[$("#"+name+"Circle").attr("cx"), $("#stage").attr("height")]
	// 	];
	// 	var yline = [
	// 		[0, $("#"+name+"Circle").attr("cy")], 
	// 		[$("#stage").attr("width"), $("#"+name+"Circle").attr("cy")]
	// 	];

	// 	d3.select("#"+name+"Xaxes")
	// 	   // .data(xline) // set the new data
	// 	   .attr("d", lineFunction(xline)); // apply the new data values

	// 	d3.select("#"+name+"Yaxes")
	// 	   // .data(yline) // set the new data
	// 	   .attr("d", lineFunction(yline)); // apply the new data values

	// }

	// draggable people
	// http://stackoverflow.com/questions/1108480/svg-draggable-using-jquery-and-jquery-svg
	$('#'+name+"Group")
	  .draggable()
	  .bind('mousedown', function(event, ui){
	    // bring target to front
	    $(svgContainer).append( event.target );
	  })
	  .bind('drag', function(event, ui){
	    // update coordinates manually, since top/left style props don't work on SVG
	    var xpos = ui.position.left-$("svg").offset().left;
	    var ypos = ui.position.top-$("svg").offset().top;
	    d3.select("#"+name+"CircleGroup").attr("transform", 
	    	"translate("+xpos+" "+ypos+")");
	    // moveLine();
	  });
});




