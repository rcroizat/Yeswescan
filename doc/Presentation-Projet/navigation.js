//Define to avoid ReferenceError: variable is not defined
var previousPage;
var nextPage;

var pages=[
	"page0",
	"page1",
	"page13",
	"page2",
	"page3",
	"page4",
	"page5bis",
	"page6",
	"page7",
	"page7bis",
	"page11",
	"page9",
	"page12",
	"page8",
	"page10",
]

document.onkeydown = function(evt){
	console.log(evt.keyCode)
	computeNewLocations();
	switch(evt.keyCode){
		case 37:
			handleNewLocation(previousPage);
			console.log("Left key"); 
			break;
		case 39:
			handleNewLocation(nextPage);
			console.log("Right key");
			break;
	}
}

function computeNewLocations(){
	var pageName = location.href.split("/").reverse()[0];
	var pageIndex = pages.indexOf(pageName.split(".")[0]);

	if(pageIndex!=-1 && pageIndex > 0){
		previousPage =  pages[pageIndex-1]+".html";
	} else {
		previousPage = null;
	}
	if(pageIndex!=-1 && pageIndex < (pages.length -1)){
		nextPage =  pages[pageIndex+1]+".html";
	} else {
		nextPage = null;
	}

	console.log("pageName: " + pageName);
	console.log("pageIndex: " + pageIndex);
	console.log("previousPage: " + previousPage);
	console.log("nextPage: " + nextPage);
	console.log("pages: " + pages)
}

function handleNewLocation(loc){
	console.log("loc: " + loc)
	if(loc != "" && loc != null ){
		window.location = loc;
	} else if( loc == ""){
		console.log("loc is empty")
	} else if( loc == null){//or undefined
		console.log("loc is null")
	}
}