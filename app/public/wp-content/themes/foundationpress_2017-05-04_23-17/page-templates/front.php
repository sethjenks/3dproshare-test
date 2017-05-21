<?php
/*
Template Name: Front
*/
get_header(); ?>

<section class="front-hero">
	<header>
		<div class="front-hero__content">
			<h5>Zortrax front</h5>
			<h1>Smart. <span class="is-text-blue">Professional.</span></h1>	
			<h5>Dual material 3D Printer</h5>
		</div>
	</header>
	<div class="front-hero__product-image align-center align-middle">
<img class="align-center align-top" src="<?php echo get_stylesheet_directory_uri(); ?>/assets/images/3dproshare/front-hero.png" alt="responsive">
    </div>
</section>

<section class="front-materials">
	
</section>

<section class="front-dss">
	<div class="front-dss__content">
		
	</div>
	<div class="front-dss__image">
		
	</div>
	<div class="row">
		<div class="front-dss__example">
			<div class="front-dss__example-before">
			
			</div>
			<div class="front-dss__example-after">
			
			</div>
		</div>
	</div>
	
</section>

<section class="product-overview">
	<div class="row">
      <div class="product-overview-container">
        <div class="product-overview__description workspace small-3 columns text-center">
          <img src="<?php echo get_stylesheet_directory_uri(); ?>/assets/images/3dproshare/dimensions-white.svg" alt="responsive">
          <h5>workspace dimensions</h5>
          <p> 200 x 200 x 180 mm</p>
        </div>
        <div class="product-overview__description resolution small-3 columns text-center">
          <img src="<?php echo get_stylesheet_directory_uri(); ?>/assets/images/3dproshare/resolution-white.svg" alt="responsive">
          <h5>resolution</h5>
          <p>90-400 microns</p>
        </div>
        <div class="product-overview__description thickness small-3 columns text-center">
          <img src="<?php echo get_stylesheet_directory_uri(); ?>/assets/images/3dproshare/thickness-white.svg" alt="responsive">
          <h5>wall thickness</h5>
          <p> minimal: 400 microns<br/>
              optimal: 800 microns</p>
        </div>
        <div class="product-overview__description single-point small-3 columns text-center">
          <img src="<?php echo get_stylesheet_directory_uri(); ?>/assets/images/3dproshare/point-white.svg" alt="responsive">
          <h5>resolution of single printable point</h5>
          <p>400 microns</p>
        </div>
      </div>
   </div>
</section>

<section class="front-info">
	
</section>

<section class="front-features">
	
</section>

<section class="front-bundle">
	
</section>

<section class="front-specs">
	
</section>



<?php get_footer();
