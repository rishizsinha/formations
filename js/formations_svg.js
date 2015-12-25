var svgContainer = d3.select("svg");
// Stage Dimensions and Sizings
// assume 1ft=50px
var stageHeight = 400;
var stageWidth = 1000; 
var personRadius = 25;

$("#stageResize").click( function() {
	// assume 1ft=50px
	// re-assign stageHeight and stageWidth vars

	// change personRadius

	// animate to have size change reflect circle size change

});

$("#addPerson").click( function() {
	// add circle to "#people" svg group element
	console.log("hi");
	d3.select("#people").append("circle")
		.attr("cy", function() { return Math.random() * 200; })
		.attr("cx", function() { return Math.random() * 720; })
		.attr("r", personRadius)
		.attr("fill", "black");
});

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
    event.target.setAttribute('cx', ui.position.left);
    event.target.setAttribute('cy', ui.position.top);
  });

$('rect')
  .draggable()
  .bind('mousedown', function(event, ui){
    // bring target to front
    $(svgContainer).append( event.target );
  })
  .bind('drag', function(event, ui){
    // update coordinates manually, since top/left style props don't work on SVG
    event.target.setAttribute('x', ui.position.left);
    event.target.setAttribute('y', ui.position.top);
  });


