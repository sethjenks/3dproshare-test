<?php
/*
Template Name: Front
*/
get_header(); ?>

<section class="front-hero">
	<div class="front-hero__continer">	
		<div class="front-hero__content">
			<header>
				<h5 class="front-hero__headline-label">Limited Time Special Offer</h5>
				<h2></h2>
				<h1 class="front-hero__headline">15% off <span>on M200</span></h1>
				<h2 class="front-hero__sub-head">With <span>Free Shipping</span></h2>
				<p>Hurry, before this offer ends on May 15th</p>
				<ul class="front-hero_offers">
					<li>
						<a href="3d-printers/m200/zortrax-m200/">
							<div class="row">
								<div class="front-hero__link-box-item small-10 columns">
									<h5>Zortrax M200</h5>
									<p><span class="text-strikethrough">$1,999.00</span> <span class="text-highlight">$1,650.00</span></p>
								</div>
								<div class="small-2 columns">
									<img src="<?php echo get_stylesheet_directory_uri(); ?>/assets/images/3dproshare/chevron-dark.png" alt="responsive">
								</div>
							</div>
						</a>
					</li>
					<li>
						<a href="3d-printers/m200/zortrax-m200-plus/">
							<div class="row">
								<div class="front-hero__link-box-item small-10 columns">
									<h5>Zortrax M200 Plus</h5>
									<p><span class="text-strikethrough">$2,050.00</span> <span class="text-highlight">$1,700.00</span></p>
								</div>
								<div class="small-2 columns">
									<img src="<?php echo get_stylesheet_directory_uri(); ?>/assets/images/3dproshare/chevron-dark.png" alt="responsive">
								</div>
							</div>
						</a>
					</li>
					<li>
						<a href="3d-printers/m200/zortrax-m200-pro/">
							<div class="row">
								<div class="front-hero__link-box-item small-10 columns">
									<h5>Zortrax M200 Pro</h5>
									<p><span class="text-strikethrough">$2,100.00</span> <span class="text-highlight">$1,750.00</span></p>
								</div>
								<div class="small-2 columns">
									<img src="<?php echo get_stylesheet_directory_uri(); ?>/assets/images/3dproshare/chevron-dark.png" alt="responsive">
								</div>
							</div>
						</a>				
      		</li>
				</ul>
				<div>
		     	<a href="3d-printers/m200/">Learn more about the Zortrax M200 →</a>
		    </div>
			</header>
		</div>
		<div class="front-hero__product-image">
			<img src="<?php echo get_stylesheet_directory_uri(); ?>/assets/images/3dproshare/m200-pedestal.png" alt="responsive"> 
	  </div>
	</div>
</section>

<section class="front-m300">
<div class="row">
	<div class="font-m300__content">
		<h5 class="is-text-blue">Zortrax M300</h5>
		<h1>Large and in Charge</h1>
		<h4>Everythinng you love about the M200 supersized.</h4>
		<div class="hero-button">
    	<a href="3d-printers/m300/" class="button primary large">Learn More</a>
    </div>
	</div>
		<div class="font-m300__product">
		<div class="front-m300__product-image">
			<img src="<?php echo get_stylesheet_directory_uri(); ?>/assets/images/3dproshare/m300-side-by-side.png" alt="responsive">
	  </div>
	</div>
</div>
	
</section>

<section class="front-inventure">
	<div class="row">
		<div class="front-inventure__image">
			<img src="<?php echo get_stylesheet_directory_uri(); ?>/assets/images/3dproshare/inventure-printers.png" alt="responsive">
		</div>
		<div class="front-inventure__content">
			<h5 class="is-text-blue">Zortrax Inventure</h5>
			<h1>Beautiful. Professional.</h1>
			<h4>Dual Print heads and an enclosed, heated print area open the world to incredible possibilities.</h4>
			<div class="hero-button">
	    	<a href="3d-printers/inventure/" class="button primary large">Learn More</a>
	    </div>

		</div>
	</div>
	<div class="row">
		<div class="front-inventure__example">
			<div class="front-inventure__example-before">
			
			</div>
			<div class="front-inventure__example-after">
			
			</div>
		</div>
	</div>
	
</section>

<section class="front-materials">
		<div class="front-materials__m-series">
			<div class="row">
				<div class="front-materials__m-series__image">
					<img src="<?php echo get_stylesheet_directory_uri(); ?>/assets/images/3dproshare/zglass.png" alt="responsive">
				</div>
				<div class="front-materials__m-series__content">
					<h6>Zortrax M-Series Materials</h6>
					<h2>Choice is Good.</h2>
					<p>Choose from six material types and more than twenty three colors for incredible results an unmatched repeatability.</p>
					<div>
		     		<a href="materials/">Learn more about M-Series Materials →</a>
		    	</div>
				</div>
			</div>
		</div>
		<div class="front-materials__inventure-series">
			<div class="row">
				<div class="front-materials__m-series__image">
					<img src="<?php echo get_stylesheet_directory_uri(); ?>/assets/images/3dproshare/inventure-material.png" alt="responsive">
				</div>
				<div class="front-materials__m-series__content">
					<h6>Zortrax Inventureure Materials</h6>
					<h2>Amazing Times Two.</h2>
					<p>Dual print heads, six colors, and a support material make for endless possibilities. Zortrax Inventure is coming soon.</p>
					<div>
						<p>Coming Soon.</p>
     				<!-- <a href="/">Discover the Zortrax Inventure Materials →</a> -->
    			</div>
				</div>
			</div>
		</div>
</section>	




<?php get_footer();
