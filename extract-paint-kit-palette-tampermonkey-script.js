// ==UserScript==
// @name         Extract paint kit palette
// @namespace    http://btforsythe.io/extract-paint-kit-palette
// @version      0.1
// @description  Extract json for Vallejo paint kit palette
// @author       brian@btforsythe.io
// @match        http://www.acrylicosvallejo.com/en_US/*
// @grant        none
// ==/UserScript==

'use strict'

var createColor = function(rgbDiv) {
    var row = rgbDiv.parentElement.parentElement

    var cells = row.querySelectorAll('td')
    var modelNumber = cells[1].textContent.trim()
    var name = cells[2].textContent.trim()

    return {
        "name": name,
        "model": modelNumber,
        "rgb": rgbDiv.style.backgroundColor
    }
}

var name = document.querySelector('div[id="products"] span').textContent.trim()

var colorDivs = document.querySelectorAll('td > div[style*="background-color"]');
var colors = Array.from(colorDivs).map(createColor)

var set = {
    "name": name,
    "colors": colors
}

console.log(JSON.stringify(set))
