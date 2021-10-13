$('input[type="radio"]').click(function () {
    var inputValue = $(this).attr("value");
    if (inputValue == "Baiust") {
        $("#baiust").show();
        $("#refer").hide();
        $("#none").hide();
    } else if (inputValue == "Referred") {
        $("#baiust").hide();
        $("#refer").show();
        $("#none").hide();
    } else if (inputValue == "None")  {
        $("#baiust").hide();
        $("#refer").hide();
        $("#none").show();
    }
});