jQuery( document ).ready( function( $ ) {
    'use strict';

	// Look for top tablenav
	var toptablenav = $( '.tablenav.top' );

	// Bail if no toptablenav
	if ( ! toptablenav.length ) {
		return;
	}

	// Look for actions that aren't bulk
	var filters   = toptablenav.find( '.actions:not(.bulkactions)' ),
		searchbox = $( 'p.search-box' );

	// Bail if no filters
	if ( ! filters.length ) {
		return;
	}

	// Add a class for custom styling
	filters.addClass( 'wp-pretty-filters' );

	// Relocate
	toptablenav.before( filters );

	if ( searchbox.length ) {
		filters.append( searchbox );
		$( '#search-submit' ).hide();
		searchbox.find( 'label' ).removeClass( 'screen-reader-text' );
		searchbox.show();
	}

	// Hide if pretty filters is empty
	if ( ! $.trim( filters.html() ) ) {
		filters.hide();
	}

	// Maybe hide the users bottom tablenav
	$( 'body.users-php .tablenav.bottom' )
		.find( '.actions:not(.bulkactions)' )
		.hide();
} );
