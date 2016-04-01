
function loadCss(url) {
    var link = document.createElement("link");
    link.type = "text/css";
    link.rel = "stylesheet";
    link.href = url;
    document.getElementsByTagName("head")[0].appendChild(link);
}

/*  LOAD JS
requirejs([
    "assets/angular/angular.min.js",
    "assets/datatables/datatables.min.js",
    "assets/angular/plugins/angular-ui-router.min.js",
    "js/main.js"
]);
 */
/*  LOAD CSS  */
loadCss("assets/datatables/datatables.min.css");
loadCss('css/wrapper.css');

