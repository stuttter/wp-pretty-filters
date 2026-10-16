jQuery( document ).ready( function( $ ) {
	'use strict';

	$( window ).on( 'load', function() {
		var searchinput = $( '#media-search-input' ),
			searchlabel = $( 'label[for="media-search-input"]' );

		if ( searchinput.length && searchlabel.length ) {
			searchlabel.addClass( 'screen-reader-text' );
			searchinput.attr( 'placeholder', searchlabel.text().trim() );
		}
	} );

	// Look for top tablenav
	var toptablenav = $( '.tablenav.top' );

	// Bail if no toptablenav
	if ( ! toptablenav.length ) {
		return;
	}

	// Look for actions that aren't bulk
	var filters   = toptablenav.find( '.actions:not(.bulkactions)' ),
		searchbox = $( 'p.search-box' ),
		searchlabel,
		searchinput;

	// Bail if no filters
	if ( ! filters.length ) {
		return;
	}

	// Add a class for custom styling
	filters.addClass( 'wp-pretty-filters' );

	// Relocate
	toptablenav.before( filters );

	if ( searchbox.length ) {
		searchlabel = searchbox.find( 'label' );
		searchinput = searchbox.find( 'input[name="s"]' );

		filters.append( searchbox );
		$( '#search-submit' ).hide();
		searchlabel.addClass( 'screen-reader-text' );
		searchinput.attr( 'placeholder', searchlabel.text().replace( /:\s*$/, '' ) );
		searchbox.show();
	}

	// Hide if pretty filters is empty
	if ( ! filters.html().trim() ) {
		filters.hide();
	}

	// Maybe hide the users bottom tablenav
	$( 'body.users-php .tablenav.bottom' )
		.find( '.actions:not(.bulkactions)' )
		.hide();
} );
