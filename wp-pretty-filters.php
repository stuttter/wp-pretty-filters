<?php

/*
 * Plugin Name: WP Pretty Filters
 * Plugin URI:  http://wordpress.org/plugins/wp-pretty-filters/
 * Author:      John James Jacoby
 * Author URI:  http://jjj.me
 * Version:     0.1.1
 * Description: Makes post filters match Media & Attachments
 * License:     GPLv2 or later
 */

/**
 * Enqueue scripts
 *
 * @since 0.1.0
 */
function _wp_pretty_filters() {

	// Vars
	$url = wp_pretty_filters_get_plugin_url();
	$ver = wp_pretty_filters_get_asset_version();

	// Styles
	wp_enqueue_style(  'wp-pretty-filters', $url . 'assets/css/pretty-filters.css', array(),           $ver       );
	wp_enqueue_script( 'wp-pretty-filters', $url . 'assets/js/pretty-filters.js',   array( 'jquery' ), $ver, true );
}
add_action( 'admin_enqueue_scripts', '_wp_pretty_filters', 11 );

/**
 * Return the plugin's URL
 *
 * @since 0.1.0
 *
 * @return string
 */
function wp_pretty_filters_get_plugin_url() {
	return plugin_dir_url( __FILE__ );
}

/**
 * Return the asset version
 *
 * @since 0.1.0
 *
 * @return int
 */
function wp_pretty_filters_get_asset_version() {
	return 201511180001;
}
