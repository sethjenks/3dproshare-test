<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'local' );

/** MySQL database username */
define( 'DB_USER', 'root' );

/** MySQL database password */
define( 'DB_PASSWORD', 'root' );

/** MySQL hostname */
define( 'DB_HOST', 'localhost' );

/** Database Charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8' );

/** The Database Collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         'n5zWVRBqNm+BXGApgUh0Ckna4W7q9UJotSyFvgpjAl7nHE6KqaowHcAkqeoeZvyFV1QmPq4+PvAaz0pEuD7Myw==');
define('SECURE_AUTH_KEY',  '4aydAloDqneA77xONEegcohRtjrT0MduDo8ZVsugoGMAwUJeCEHY1a17O1VGTymxACLqfQKYZrfaXStZ+hpkSw==');
define('LOGGED_IN_KEY',    'Mmuc0pdetS0ChMxo+EeSiOx14RCz3PqnsdOCnQh8GKq+kmiRwYFztXJFHO5c4Py0uzahiFWNNdTnZ3QCKPBtUg==');
define('NONCE_KEY',        '5F4X0VhcQAKrUqbNwCuRFP7fwS7c2GzS+Bi17+AD12Y4+mkeVoX8kdBOwLHnqgzpjV6mQz2odvOg3iNUmElK2Q==');
define('AUTH_SALT',        'GFTTGBJgpXq/bX6/JpyGUstZDmHx2RWpMZL++HY9pfcINFeKYLrD5G7fDN2BQTLVnLd5YUxc0ttvqT3tmk5P+Q==');
define('SECURE_AUTH_SALT', 'HQphadntdRRpyc2wCJ6KhGyzUp4sBPRKby2sXAVcn2DZyJt9igegkaEdABi1wCqWW1yhbPwPn2rn4gVkc2SE4w==');
define('LOGGED_IN_SALT',   'OCVUmhsNXeQ32DzO42XxH8r4DsV35y0jevAuh9K967mEfYrCvj8EgZ5A3Aey4ikgyRXvHyRsyUHM6URWF+3QaA==');
define('NONCE_SALT',       'xbdvbwHPVa45Thz6GdZ81CeAaZXM4ujL1YiM4qfLuSlBch6UDEGZteuSvn+lYDBHatoV6U6rwsMwXIGaVPSMsw==');

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';





/* Inserted by Local by Flywheel. See: http://codex.wordpress.org/Administration_Over_SSL#Using_a_Reverse_Proxy */
if (isset($_SERVER['HTTP_X_FORWARDED_PROTO']) && $_SERVER['HTTP_X_FORWARDED_PROTO'] === 'https') {
	$_SERVER['HTTPS'] = 'on';
}
/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) )
	define( 'ABSPATH', dirname( __FILE__ ) . '/' );

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
