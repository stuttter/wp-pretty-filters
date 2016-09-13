jQuery( document ).ready( function( $ ) {
    'use strict';

	// Look for posts
	var toptablenav = $( '#posts-filter .tablenav.top' );

	// Maybe try comments
	if ( ! toptablenav.length ) {
		toptablenav = $( '#comments-form .tablenav.top' );
	}

	// Only proceed if toptablenav was found
	if ( toptablenav.length ) {
		var filters = toptablenav.find( '.actions:not(.bulkactions)' );

		// Add a class for custom styling
		filters.addClass( 'wp-pretty-filters' );

		// Relocate
		toptablenav.before( filters );
	}
} );
