<?php
/**
 * The template for displaying the header
 *
 * Displays all of the head element and everything up until the "container" div.
 *
 * @package FoundationPress
 * @since FoundationPress 1.0.0
 */

?>
<!doctype html>
<html class="no-js" <?php language_attributes(); ?> >
	<head>
		<meta charset="<?php bloginfo( 'charset' ); ?>" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<?php wp_head(); ?>
		<script>
			window['_fs_debug'] = false;
			window['_fs_host'] = 'fullstory.com';
			window['_fs_org'] = '4HNXE';
			window['_fs_namespace'] = 'FS';
			(function(m,n,e,t,l,o,g,y){
			    if (e in m && m.console && m.console.log) { m.console.log('FullStory namespace conflict. Please set window["_fs_namespace"].'); return;}
			    g=m[e]=function(a,b){g.q?g.q.push([a,b]):g._api(a,b);};g.q=[];
			    o=n.createElement(t);o.async=1;o.src='https://'+_fs_host+'/s/fs.js';
			    y=n.getElementsByTagName(t)[0];y.parentNode.insertBefore(o,y);
			    g.identify=function(i,v){g(l,{uid:i});if(v)g(l,v)};g.setUserVars=function(v){g(l,v)};
			    g.identifyAccount=function(i,v){o='account';v=v||{};v.acctId=i;g(o,v)};
			    g.clearUserCookie=function(c,d,i){if(!c || document.cookie.match('fs_uid=[`;`]*`[`;`]*`[`;`]*`')){
			    d=n.domain;while(1){n.cookie='fs_uid=;domain='+d+
			    ';path=/;expires='+new Date(0).toUTCString();i=d.indexOf('.');if(i<0)break;d=d.slice(i+1)}}};
			})(window,document,window['_fs_namespace'],'script','user');
		</script>
	</head>
	<body <?php body_class(); ?>>
	<?php do_action( 'foundationpress_after_body' ); ?>

	<?php if ( get_theme_mod( 'wpt_mobile_menu_layout' ) === 'offcanvas' ) : ?>
	<div class="off-canvas-wrapper">
		<?php get_template_part( 'template-parts/mobile-off-canvas' ); ?>
	<?php endif; ?>

	<?php do_action( 'foundationpress_layout_start' ); ?>

	<header id="masthead" class="site-header" role="banner">
		<div class="title-bar" <?php foundationpress_title_bar_responsive_toggle() ?>>
			<button class="menu-icon" type="button" data-toggle="<?php foundationpress_mobile_menu_id(); ?>"></button>
			<div class="title-bar-title">
				<a href="<?php echo esc_url( home_url( '/' ) ); ?>" rel="home">
					<img class="" src="<?php echo get_stylesheet_directory_uri(); ?>/assets/images/3dproshare/proshare_logo-white-blue.png" alt="responsive">
				</a>
			</div>
		</div>

		<nav id="site-navigation" class="main-navigation top-bar" role="navigation">
			<div class="top-bar-left">
				<ul class="menu">
					<li class="home"><a href="<?php echo esc_url( home_url( '/' ) ); ?>" rel="home">
						<img class="" src="<?php echo get_stylesheet_directory_uri(); ?>/assets/images/3dproshare/proshare_logo-white-blue.png" alt="responsive"></a>
					</li>
				</ul>
			</div>
			<div class="top-bar-right">
				<?php foundationpress_top_bar_r(); ?>

				<?php if ( ! get_theme_mod( 'wpt_mobile_menu_layout' ) || get_theme_mod( 'wpt_mobile_menu_layout' ) === 'topbar' ) : ?>
					<?php get_template_part( 'template-parts/mobile-top-bar' ); ?>
				<?php endif; ?>
			</div>
		</nav>
	</header>

	<section class="container">
		<?php do_action( 'foundationpress_after_header' );
