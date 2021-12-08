// Make sure page is ready to load the JS
$(document).ready(function(){
    // Link JS file
    $(function(){
        $("#header").load("./inc/header.html");
        $("#footer").load("./inc/footer.html");
    });

    /* For javascript events, I would have used
    hover events for buttons, but CSS's
    implementation is much simpler. */
});