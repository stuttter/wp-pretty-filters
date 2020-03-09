<?php

/*
 * Plugin Name:       WP Pretty Filters
 * Plugin URI:        https://wordpress.org/plugins/wp-chosen/
 * Author:            John James Jacoby
 * Author URI:        https://jjj.blog
 * Version:           2.0.0
 * Requires at least: 5.3
 * Requires PHP:      7.0
 * Description:       Makes post filters match Media & Attachments
 * License:           GPLv2 or later
 */

// Exit if accessed directly
defined( 'ABSPATH' ) || exit;

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
	wp_enqueue_style(  'wp-pretty-filters', $url . 'assets/css/pretty-filters.css', array(),           $ver );
	wp_enqueue_script( 'wp-pretty-filters', $url . 'assets/js/pretty-filters.js',   array( 'jquery' ), $ver );
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
	return plugin_dir_url( __FILE__ ) . 'wp-pretty-filters/';
}

/**
 * Return the asset version
 *
 * @since 0.1.0
 *
 * @return int
 */
function wp_pretty_filters_get_asset_version() {
	return 202003090001;
}
