// ==UserScript==
// @name		DO NOT OPEN TWITTER
// @description	Redirect to SoundCloud
// @version		0.0.1
// @include		https://twitter.com/*
// @author		yanorei32
// @website		https://github.com/Yanorei32/do-not-open-twitter
// @namespace	http://yano.teamfruit.net/~rei/
// @updateURL	https://github.com/Yanorei32/do-not-open-twitter/do-not-open-twitter.user.js
// @license		The Unlicense
// @grant		none
// @run-at		document-start
// ==/UserScript==

(function() {
	'use strict';
	location.href = 'https://soundcloud.com/you/likes';
})();
