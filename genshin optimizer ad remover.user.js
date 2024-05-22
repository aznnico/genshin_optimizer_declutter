// ==UserScript==
// @name         genshin optimizer ad remover
// @namespace    http://tampermonkey.net/
// @version      0.3
// @description  remove ads on optimizer
// @author       s2k
// @match        *://frzyc.github.io/*
// @icon         none
// @grant        none
// @run-at       document-start
// @license      GNU GPLv2
// ==/UserScript==

window.onload = function() {
    var bodyList = document.querySelector("body")
    var observer = new MutationObserver(function(mutations) {
        mutations.forEach(function(mutation) {
            try{
                document.querySelectorAll('svg').forEach(function(p){
                    if (p.className.baseVal === ''){
                        p.parentNode.parentNode.parentNode.remove();
                    }
                });

            } catch (error) {
                ;
            }
        });
    });
    var config = {
        childList: true,
        subtree: true
    };
    observer.observe(bodyList, config);
};