// check off specific todos by clicking
$("ul").on('click', 'li', function () {
    $(this).toggleClass('completed');
});

//remove item when x is clicked
$('ul').on('click', 'span', function (event) {
    //remove the parent of the span
   $(this).parent().fadeOut(function () {
       $(this).remove();
   });
   //stops bubbeling up
   event.stopPropagation();
});

//at hover show x


//creat new li
$("input[type='text']").keypress(function (event) {
    //run function whene enter is pressed
    if(event.which === 13) {
        //retreve value of the input fild and set it blank
        var todoText = $(this).val();
        $(this).val('');
        //creat new li and add it to ul
        $('ul').append('<li><span>X</span> ' + todoText + '</li>');
    }
});
