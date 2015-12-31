var attributes = [];
attrBar = d3.select("#attributeBar");

$("#addAttr").click(){ function() {
	console.log("clicked");
	newattr = attrBar.append("div")
		.attr("class", "dropdown")
		.attr("class", "personAttribute");

	newattr.append("button")
		.attr("class", "btn")
		.attr("class", "btn-primary")
		.attr("dropdown-toggle")
		.attr("type", "button")
		.attr("data-toggle", "dropdown")
		.html(CUSTOM+"<span class='caret'></span>");

	newattr.append("ul")
		.attr("class", "dropdown-menu");


}};

<div class="dropdown">
  <button class="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown">Dropdown Example
  <span class="caret"></span></button>
  <ul class="dropdown-menu">
    <li><a href="#">HTML</a></li>
    <li><a href="#">CSS</a></li>
    <li><a href="#">JavaScript</a></li>
  </ul>
</div>