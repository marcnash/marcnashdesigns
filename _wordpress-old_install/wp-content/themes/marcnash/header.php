<!DOCTYPE html>
<html <?php language_attributes(); ?>>
	<head>
		<meta charset="<?php bloginfo( 'charset' ); ?>" />
		<meta name="viewport" content="width=device-width" />
		<link rel="stylesheet" type="text/css" href="<?php bloginfo('template_url'); ?>/_vendor/animate/animate.min.css" />
		<link rel="stylesheet" type="text/css" href="<?php bloginfo('template_url'); ?>/_vendor/owlCarousel2/owl.carousel.min.css" />
		<link rel="stylesheet" type="text/css" href="<?php bloginfo('template_url'); ?>/_vendor/owlCarousel2/owl.theme.default.min.css" />
		<link rel="stylesheet" type="text/css" href="<?php echo get_stylesheet_uri(); ?>" />
		<?php wp_head(); ?>
	</head>
	<body <?php body_class(); ?>>
		<div id="wrapper" class="hfeed">
			<header id="header" role="banner">
				<section id="branding">
					<!--<div id="site-title"><?php if ( is_front_page() || is_home() || is_front_page() && is_home() ) { echo '<h1>'; } ?><a href="<?php echo esc_url( home_url( '/' ) ); ?>" title="<?php echo esc_html( get_bloginfo( 'name' ) ); ?>" rel="home"><?php echo esc_html( get_bloginfo( 'name' ) ); ?></a><?php if ( is_front_page() || is_home() || is_front_page() && is_home() ) { echo '</h1>'; } ?></div>-->
				</section>
				<!--<nav id="menu" role="navigation">
					<div id="search">
						<?php get_search_form(); ?>
					</div>
					<?php wp_nav_menu( array( 'theme_location' => 'main-menu' ) ); ?>
				</nav>-->
			</header>
			<div id="container">