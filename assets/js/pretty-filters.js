jQuery( document ).ready( function( $ ) {
    'use strict';

	// Get the filters
	var toptablenav = $( '#posts-filter .tablenav.top' ),
		filters     = toptablenav.find( '.actions:not(.bulkactions)' );

	// Add a class for custom styling
	filters.addClass( 'wp-pretty-filters' );

	// Relocate
	toptablenav.before( filters );
} );
