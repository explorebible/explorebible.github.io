/*globals d3, window, console */

window.pages = window.pages || {};
window.pages["/numbers"] = function () {
    "use strict";

    var content = d3.select("#content");
    content.append("h1").text("Numbers in the Bible");
    content.append("p")
        .classed("lead", true)
        .text("Where are certain numbers mentioned in the Bible? "
            + "Hover over the bar below to see the pattern of each common number "
            + "as it appears throughout the Bible (Genesis to Revelation).");

    d3.text("kjv.txt", function (error, text) {
        var i, letter, words, word, stop, numbers, a, z, A, Z, len, color, dots, info;

        a = "a".charCodeAt(0);
        z = "z".charCodeAt(0);
        A = "A".charCodeAt(0);
        Z = "Z".charCodeAt(0);
        stop = ["the", "and", "of", "to", "that", "in", "he", "shall", "unto", "for", "i", "his", "a", "they", "be", "is", "him", "not", "them"];
        numbers = ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine",
            "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen", "twenty"];
        words = [];
        i = 0;
        while (i < text.length) {
            letter = text.charCodeAt(i);
            len = 0;
            while (((letter >= a && letter <= z) || (letter >= A && letter <= Z)) && i + len < text.length) {
                len += 1;
                letter = text.charCodeAt(i + len);
            }
            word = text.substring(i, i + len).toLowerCase();
            if (numbers.indexOf(word) !== -1) {
                words.push(word);
                if (words.length % 1000 === 0) {
                    console.log(words.length);
                }
            }
            i += len;
            while (((letter < a || letter > z) && (letter < A || letter > Z)) && i < text.length) {
                i += 1;
                letter = text.charCodeAt(i);
            }
        }
        console.log(words);
        color = d3.scale.category20();
        info = d3.select("#content").append("h1").text("all numbers");
        dots = d3.select("#content").append("svg").selectAll("rect")
            .data(words).enter().append("rect")
            .attr("width", 0.2)
            .attr("height", 20)
            //.attr("x", function (d, i) { return 6 * (i % 200); })
            //.attr("y", function (d, i) { return 6 * Math.floor(i / 200); })
            .attr("x", function (d, i) { return i / 5; })
            .style("opacity", function (d) { return 1; })
            .style("fill", color)
            .on("mouseover", function (d) {
                dots.style("opacity", function (dd) { return dd === d ? 1 : 0.1; });
                info.text(d);
            });
        console.log("done!");
    });
};