/*globals d3, window */

window.pages = window.pages || {};
window.pages["/"] = function () {
    "use strict";

    var content = d3.select("#content");
    content.append("h1").text("Explore the Bible");
    content.append("p").classed("lead", true)
        .text("What is the Bible? What exactly is in it? Play with these interactive tools to get some idea.");
    content.append("h2").text("Source");
    content.append("p").classed("lead", true)
        .html('The source for this entire website is available on <a href="http://www.github.com/explorebible">GitHub</a>.')
    content.append("h2").text("License");
    content.append("p").classed("lead", true)
        .text("Basically, you are free to extend, re-host, and share this material with anyone for any reason. See the following links for details.")
    content.append("div").html('<a rel="license" href="http://creativecommons.org/licenses/by/3.0/deed.en_US"><img alt="Creative Commons License" style="border-width:0" src="http://i.creativecommons.org/l/by/3.0/88x31.png" /></a><br />Page content is licensed under a <a rel="license" href="http://creativecommons.org/licenses/by/3.0/deed.en_US">Creative Commons Attribution 3.0 Unported License</a>.');
    content.append("div").html('Source code is licensed under the <a href="http://www.apache.org/licenses/LICENSE-2.0.html">Apache License Version 2.0</a>.');
};
