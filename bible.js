/*globals window, Simrou, pages, d3, console */

(function () {
    "use strict";

    var router, routes;

    routes = [
        {name: "Home", url: "/"},
        {name: "Numbers", url: "/numbers"}
    ];

    // Setup an instance of Simrou
    router = new Simrou();

    routes.forEach(function (d) {
        d.route = router.addRoute(d.url);
        d.route.get(function(event, params) {
            d3.select("#content").selectAll("*").remove();
            console.log(d.name);
            pages[d.url](event, params);
            d3.select("#nav").selectAll("li")
                .classed("active", function (dd) { return d === dd; });
        });
    });

    d3.select("#nav").selectAll("li").data(routes)
        .enter().append("li").append("a")
        .attr("href", function (d) { return "#" + d.url; })
        .text(function (d) { return d.name; });

    // Start the engine!
    router.start();

    if (window.location.hash === "") {
        router.navigate("/");
    }
}());

// Navigate somewhere (updates location.hash and resolves the URL)
//router.navigate('/article/42/edit');

// ..or resolve without touching location.hash
//router.resolve('/article/18/edit', 'POST');