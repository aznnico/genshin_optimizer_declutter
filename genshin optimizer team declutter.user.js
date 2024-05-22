// ==UserScript==
// @name         genshin optimizer team declutter
// @namespace    http://tampermonkey.net/
// @version      0.3
// @description  remove clutter on optimizer team page
// @author       s2k
// @match        *://frzyc.github.io/genshin-optimizer/*
// @icon         none
// @grant        GM_addStyle
// @run-at       document-start
// @license      GNU GPLv2
// ==/UserScript==

if (window.location.href == 'https://frzyc.github.io/genshin-optimizer/#/teams'){

    GM_addStyle ( `
    .css-1rdvs08 {
        width: auto;
        display: inline-block;
    }
    .css-1wsz2xy {
        width: auto;
        display: inline-block;
        margin-top: unset;
        margin-left: 15px;
        margin-right: 15px;
    }
    .css-8xl60i{
        margin-top: unset;
        margin-left: 5px;
        margin-bottom: 5px;
    }

` );

    window.onload = function() {
        var bodyList = document.querySelector("body")
        var observer = new MutationObserver(function(mutations) {
            mutations.forEach(function(mutation) {
                try{
                    var dividers = document.getElementsByClassName("MuiDivider-root MuiDivider-fullWidth css-1px5dlw");
                    while (dividers.length) {
                        dividers.item(0).remove();
                    }
                    var characters = document.getElementsByClassName("MuiButtonBase-root MuiCardActionArea-root css-1rdvs08");
                    for (let i = 0; i < characters.length; i++) {
                        characters.item(i).children[0].children[2].remove();
                    }/*
                    var empty = document.getElementsByClassName("MuiButtonBase-root MuiCardActionArea-root css-1wsz2xy");
                    while(empty.length){
                        empty.item(0).remove();
                    }
*/


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

}
