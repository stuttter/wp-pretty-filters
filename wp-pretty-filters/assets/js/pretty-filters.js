jQuery( document ).ready( function( $ ) {
    'use strict';

	// Look for top tablenav
	var toptablenav = $( '.tablenav.top' );

	// Bail if no toptablenav
	if ( ! toptablenav.length ) {
		return;
	}

	// Look for actions that aren't bulk
	var filters = toptablenav.find( '.actions:not(.bulkactions)' );

	// Bail if no filters
	if ( ! filters.length ) {
		return;
	}

	// Add a class for custom styling
	filters.addClass( 'wp-pretty-filters' );

	// Relocate
	toptablenav.before( filters );

	// Hide if pretty filters is empty
	if ( ! $.trim( filters.html() ) ) {
		filters.hide();
	}

	// Maybe hide the users bottom tablenav
	$( 'body.users-php .tablenav.bottom' )
		.find( '.actions:not(.bulkactions)' )
		.hide();
} );
