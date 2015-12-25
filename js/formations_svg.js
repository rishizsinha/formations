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

$("#addPerson").click( function() {
	// add circle to "#people" svg group element
	console.log("hi");
	d3.select("#people").append("circle")
		.attr("cy", function() { return Math.random() * 200; })
		.attr("cx", function() { return Math.random() * 720; })
		.attr("r", personRadius)
		.attr("fill", "black");

	// draggable people
	// http://stackoverflow.com/questions/1108480/svg-draggable-using-jquery-and-jquery-svg
	$('circle')
	  .draggable()
	  .bind('mousedown', function(event, ui){
	    // bring target to front
	    $(svgContainer).append( event.target );
	  })
	  .bind('drag', function(event, ui){
	    // update coordinates manually, since top/left style props don't work on SVG
	    event.target.setAttribute('cx', ui.position.left-$("svg").offset().left+personRadius);
	    event.target.setAttribute('cy', ui.position.top-$("svg").offset().top+personRadius);
	  });
});




