jQuery( document ).ready( function( $ ) {
    'use strict';

	// Get the filters
	var toptablenav = $( '#posts-filter .tablenav.top' );

	// Maybe try comments
	if ( 'undefined' === typeof( toptablenav ) ) {
		toptablenav = $( '#commentsform .tablenav.top' );
	}

	// Only proceed if toptablenav was found
	if ( 'undefined' !== typeof( toptablenav ) ) {
		var filters = toptablenav.find( '.actions:not(.bulkactions)' );

		// Add a class for custom styling
		filters.addClass( 'wp-pretty-filters' );

		// Relocate
		toptablenav.before( filters );
	}
} );
