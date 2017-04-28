#b4st - A Bootstrap 4 Starter Theme, for WordPress

*Version 1.6.1*

[https://github.com/SimonPadbury/b4st](https://github.com/SimonPadbury/b4st)

------------------

**b4st is a simple WordPress starter theme loaded with Bootstrap 4.**

> **NOTE:** Bootstrap v4.0.0-alpha.6 is being called from `https://cdnjs.com/libraries/twitter-bootstrap`

##Features of b4st

* Simple, intuitive, clean code.
* Bootstrap, theme CSS and JS, functions and loops are organized into different folders.
* **Bootstrap 4.0.0-alpha.6** (served by cdnjs.com CDN) CSS and JS enqueued.
* **Tether 1.4.0** (served by cdnjs.com CDN) JS enqueued. Because Bootstrap popovers and tooltips need it.
* **jQuery** enqueued, served from the WordPress onboard (pre-registered) jQuery.
* **Font Awesome 4.7.0** (served by cdnjs.com CDN) enqueued.
* **Modernizr 2.8.3** (served by cdnjs.com CDN) enqueued.
* **Navbar with dropdowns (child menus)** – a [custom walker nav menu class](https://github.com/SimonPadbury/b4st/blob/master/functions/navbar.php) has been built to handle the dropdowns.
* A starter CSS theme – `/theme/css/b4st.css`, enqueued.
* WordPress menu and WordPress search form in the Bootstrap 4 `.navbar` (Note: Bootstrap 4 navbar dropdowns supports only two levels of menu links (no sub-sub menus).
* Bootstrap pagination for blog index and blog category pages.
* Bootstrap pagination for posts/pages if split over a series of 'pages'.
* Visual editor stylesheet – into which the same Bootstrap 4 and starter CSS theme are preloaded by `@import`, so that what you see in the visual editor is (mostly!) what you get at the front end (WYSI(M!)WYG). E.g. you will see the theme's typpography in the WordPress Post/Page editor, but its width will not be the same as your article column width in the front end.
* [MIT licence](http://opensource.org/licenses/MIT) (open source).

---

Maybe you would be interested in [Atomic Boot Pug](https://github.com/SimonPadbury/Atomic-Boot-Pug).

Inspired by Brad Frost's [Atomic Design](http://atomicdesign.bradfrost.com/), Atomic Boot Pug is comprised of a set of Bootstrap 4 docs demo snippets (tranformed into [Pug](https://pugjs.org/api/getting-started.html) mixins) reorganized into a starter styleguide.

Just a little something to help you kick off your next project. :-)
