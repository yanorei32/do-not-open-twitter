// ==UserScript==
// @name		DO NOT OPEN TWITTER
// @description	Redirect to SoundCloud
// @version		0.4.0
// @match		https://x.com/*
// @match		https://twitter.com/*
// @match		https://mobile.twitter.com/*
// @match		https://tweetdeck.twitter.com/*
// @match		https://soundcloud.com/*
// @author		yanorei32
// @website		https://github.com/yanorei32/do-not-open-twitter
// @namespace	https://yr32.net/
// @updateURL	https://github.com/yanorei32/do-not-open-twitter/raw/master/do-not-open-twitter.user.js
// @license		The Unlicense
// @grant		none
// @run-at		document-start
// ==/UserScript==

(function() {
	'use strict';
	if (/^https:\/\/soundcloud\.com\//.test(location.href)){
		return;
	}
	location.href = 'https://soundcloud.com/you/likes';
})();
