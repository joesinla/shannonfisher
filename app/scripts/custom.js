define(['jquery','galleria','picasa'], function($){

	$('.item').click(function(){
		  id = $(this).attr('id');
		$('#myModal').modal('show');

		Galleria.loadTheme('scripts/vendor/galleria/themes/classic/galleria.classic.min.js');
		Galleria.run('#galleria', {
		picasa: 'useralbum:joesinla/' + id, // 'galleriajs' is the username and 'Demo' is the album ID
		picasaOptions: {
			sort: 'date-posted-asc'
		}
	});
})

});