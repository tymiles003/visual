/**
 * [TOSConfig configuration for backend languages and API routes]
 * @type {Object}
 */
var TOSConfig = {

	//default lanuage is PHP. Change to 'nodeJs' if you prefer not to use PHP
	language: 'php',  //possible values: php, nodeJs 

	//configuration for PHP. Backend URL for reports dashboard and analytics dashboard
	php: {
		reports: {
			url: 'http://localhost/visual/backend/php/datatable_reports.php',
		},

		analytics: {
			url: 'http://localhost/visual/backend/php/analytics.php',
		},

		syncData: {
			url: 'http://localhost/visual/backend/php/refresh.php',
		}
	},

	//configuration for NodeJs. Backend URL for reports dashboard and analytics dashboard
	nodeJs: {
		reports: {
			url: 'http://localhost:4500/tos/datatable_reports',
		},

		analytics: {
			url: 'http://localhost:4500/tos/analytics',
		},

		syncData: {
			url: 'http://localhost:4500/tos/datatable_refresh',
		}
	}
};
