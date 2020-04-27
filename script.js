$(function () {
    $('#link1').click(function () {
        $('#img1').show();
        $('#img2').hide();
        $('#img3').hide();
        $('#img4').hide();
    });

    $('#link2').click(function () {
        $('#img1').hide();
        $('#img2').show();
        $('#img3').hide();
        $('#img4').hide();
    });

    $('#link3').click(function () {
        $('#img1').hide();
        $('#img2').hide();
        $('#img3').show();
        $('#img4').hide();
    });

    $('#link4').click(function () {
        $('#img1').hide();
        $('#img2').hide();
        $('#img3').hide();
        $('#img4').show();
    });
});