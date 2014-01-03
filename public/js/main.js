$(document).ready(function  () {
	window.io=io.connect();
	window.io.on("connect",function  (socket) {
		console.log("hl");
		//io.emit("hello?");
	});

	window.io.on("saludo",function  (data) {
		console.log(data);
	});

	window.io.on('log-in', function(data) {
		$("#users").append("<li>"+data.username+"</li>");
	});

	window.io.on('log-out', function(data) {
		$("#users li").each(function  (i,item) {
			if (item.innerText===data.username.trim()) {
				$(item).remove();
			}
		});
	});


});