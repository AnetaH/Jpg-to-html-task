// Filter support
$("#filtr1").click(function(){
    $(".photo2, .photo3, .photo4").hide("slow");
    $(".photo1").show();
});

$("#filtr2").click(function(){
	$(".photo1, .photo3, .photo4").hide("slow");
	$(".photo2").show();
});

$("#filtr3").click(function(){
	$(".photo1, .photo2, .photo3").hide("slow");
	$(".photo3").show();
});

$("#all").click(function(){
    $(".col-3").show("normal");
});

// The Modal
var modal = document.getElementById('theModal');

// Get the image and insert it inside the modal - use its "alt" text as a caption
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");

var click = document.getElementsByClassName('photo1')[0];
click.onclick = function(){
	var img = document.getElementById('img1');
    modal.style.display = "block";
    modalImg.src = img.src;
    captionText.innerHTML = img.alt;
};

var click = document.getElementsByClassName('photo1')[1];
click.onclick = function(){
	var img = document.getElementById('img1');
    modal.style.display = "block";
    modalImg.src = img.src;
    captionText.innerHTML = img.alt;
};

var click = document.getElementsByClassName('photo2')[0];
click.onclick = function(){
	var img = document.getElementById('img2');
    modal.style.display = "block";
    modalImg.src = img.src;
    captionText.innerHTML = img.alt;
};

var click = document.getElementsByClassName('photo2')[1];
click.onclick = function(){
	var img = document.getElementById('img2');
    modal.style.display = "block";
    modalImg.src = img.src;
    captionText.innerHTML = img.alt;
};

var click = document.getElementsByClassName('photo3')[0];
click.onclick = function(){
	var img = document.getElementById('img3');
    modal.style.display = "block";
    modalImg.src = img.src;
    captionText.innerHTML = img.alt;
};

var click = document.getElementsByClassName('photo3')[1];
click.onclick = function(){
	var img = document.getElementById('img3');
    modal.style.display = "block";
    modalImg.src = img.src;
    captionText.innerHTML = img.alt;
};

var click = document.getElementsByClassName('photo4')[0];
click.onclick = function(){
	var img = document.getElementById('img4');
    modal.style.display = "block";
    modalImg.src = img.src;
    captionText.innerHTML = img.alt;
};

var click = document.getElementsByClassName('photo4')[1];
click.onclick = function(){
	var img = document.getElementById('img4');
    modal.style.display = "block";
    modalImg.src = img.src;
    captionText.innerHTML = img.alt;
};

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
    modal.style.display = "none";
};