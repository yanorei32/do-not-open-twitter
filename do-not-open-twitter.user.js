// ==UserScript==
// @name		DO NOT OPEN TWITTER
// @description	Redirect to SoundCloud
// @version		0.3.1
// @include		https://twitter.com/*
// @include		https://mobile.twitter.com/*
// @include		https://tweetdeck.twitter.com/*
// @include		https://soundcloud.com/*
// @author		yanorei32
// @website		https://github.com/yanorei32/do-not-open-twitter
// @namespace	https://yr32.net/
// @updateURL	https://github.com/yanorei32/do-not-open-twitter/do-not-open-twitter.user.js
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
