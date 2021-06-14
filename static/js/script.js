/*
    jQuery for MaterializeCSS initialization
*/

// Sot he side nav slights right when clicked
$(document).ready(function () {
    $(".sidenav").sidenav({edge: "right"});
});





/*
    vanilla JavaScript for MaterializeCSS initialization
*/

// document.addEventListener('DOMContentLoaded', function () {
//     let sidenavs = document.querySelectorAll(".sidenav");
//     let sidenavsInstance = M.Sidenav.init(sidenavs, {edge: "right"});
// });