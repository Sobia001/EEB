$(document).ready(function () {
    $(".form__check").click(function () {
        var checkbox = $(this).find(".form-check-input");
        var isChecked = checkbox.prop("checked");

        checkbox.prop("checked", !isChecked);

        if (!isChecked) {
            $(this).css("background-color", "#9947E2");
        } else {
            $(this).css("background-color", "");
        }
    });
});

