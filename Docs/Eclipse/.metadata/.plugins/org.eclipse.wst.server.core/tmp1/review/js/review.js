
$(window).on('load', function() {
	console.log('starting');
	$.ajax({
		url: "hello",
		type: "POST",
		dataType: "json",
		data: {id:"+212661080484-veriphone.io"},
		success:function(dataReview) {
			console.log(dataReview);
		}
	});
});