$(function() {
	$('.modal').on('click', function(e) {
		if ( e.target === this || $(e.target).hasClass('modal-close') ) {
			$(this).removeClass('open');
		}
	});
	$('.books').on('click', '[data-book]', function() {
		$('.modal[data-book="' + this.dataset.book + '"]').addClass('open');
	});
});