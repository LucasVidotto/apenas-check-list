$(document).ready(function() {
//reconhecendo o checkbox e ativando a li
    $(".lista").find(":checked").parent().toggleClass("checked");
    $(".lista").find(":disabled").parent().toggleClass("disabled");
    $(".lista :checkbox").click(function () {
        $(this).parent().toggleClass("checked");
    });
});
