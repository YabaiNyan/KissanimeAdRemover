// ==UserScript==
// @name         Kissanime Ad Remover
// @namespace    https://github.com/YabaiNyan/KissanimeAdRemover
// @version      0.1
// @description  Instead of blocking the ads, just delete them. ¯\_(ツ)_/¯
// @author       YabaiNyan
// @match        http://kissanime.ru/*
// @grant        none
// @require      http://code.jquery.com/jquery-3.3.1.min.js
// ==/UserScript==

(function() {
    'use strict';
    $(document).ready(function() {
        var removeElementArr = ["#adsIfrme1","#divAds","#divAds2",".bebi-icon-hover","#adsIfrme7", "#adsIfrme6", "#divFloatLeft", "#divFloatRight"]
        removeArr(removeElementArr);
        if (typeof $("#rightside")[0] !== "undefined") {
            $("#rightside")[0].children[4].remove()
        }
        findbebi();
        findcpm();

        function findbebi(){
            var bebicount = 0;
            var bebirun = false;
            setTimeout(function(){
                clearInterval(bebiinterval);
            }, 5000)
            var bebiinterval = setInterval(function(){
                bebicount = $('a[href^="//redir.bebi.com"]').length
                if (bebicount >= 2){
                    $('a[href^="//redir.bebi.com"]').parent().parent().remove()
                    clearInterval(bebiinterval)
                }
            }, 4)
        }

        function findcpm(){
            var cpmcount = 0;
            var cpmrun = false;
            setTimeout(function(){
                clearInterval(cpminterval);
            }, 5000)
            var cpminterval = setInterval(function(){
                cpmcount = $('a[href^="http://server.cpmstar.com/click.aspx"]').length
                if (cpmcount >= 2){
                    $('a[href^="http://server.cpmstar.com/click.aspx"]').parent().parent().remove()
                    clearInterval(cpminterval)
                }
            }, 4)
        }

        function removeArr(elementArr){
            elementArr.forEach(function(element){
                $(element).remove()
            })
        }

    });


})();