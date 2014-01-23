$(document).ready(function(){

	$('#forminput').hide();



	$('#revealbutton').click(function(){
		$('#forminput').toggle();
	})

	$('#revealbutton').click(function(){
			if($('#revealbutton').text() === "Show Form"){
				$("#revealbutton").text("Hide Form");
			} else{
				$("#revealbutton").text("Show Form")
			};
		});

		///////////////////////////////////////////////////////////////////
		

		$('#namebox').keyup(function(){
			var newname = $('#namebox').val();
			$('#myprofilepage').text(newname);
		});
		$('#biobox').keyup(function(){
			var newbio = $('#biobox').val();
			$('#newbio').text(newbio);
		});

		$('#booksbox').keyup(function(){
			var newbooks = $('#booksbox').val();
			$('#newbooks').text(newbooks);
		});
		$('#librarybox').keyup(function(){
			var newlibs = $('#librarybox').val();
			$('#newlibrary').text(newlibs);
		});

		$('#submitbutton').click(function(){
			$('#forminput').hide();
		});

});









