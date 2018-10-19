$(document).ready(function(){

    console.log("This is printing");

    var mySVG = $('.svggs').drawsvg({
        duration: 5000
    });
    mySVG.drawsvg('animate');
});