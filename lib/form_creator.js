$(document).ready(function(){

  $("#add-responsibility").click(function(e){

    event.preventDefault()

    var items_div =
    "<div>"
    // + "<br/>"
    + "<span id='items'>"
    + "<label for='class-input'>Subject: </label>"
    + "<span id='class'> <input type='text' name='class-input' id='class-cell' class='class-class'></span>"
    + "<label for='method-input'> Predicate: </label>"
    + "<input type='text' name='method-input' class='method-class'>"
    + "<label for='collaborators'> Object: </label>"
    + "<input type='text' name='collaborators' class='collaborator-class'> "
    + "<input type='button' class='btn btn-default btn-lg' value='-' id='delete' />"
    + "</span>"
    + "</div>"
    ;


    $('#class-wrapper').append(items_div);
    $('#class-wrapper').remove(items_div);

  });



  // $("#add-class").click(function (e){
  //
  //     event.preventDefault()
  //
  // var class_div = '<label for="class-input">Class: </label>' + '<div id="class"> <input type="text" name="class-input" id="class-cell"></div>'
  //
  // $("#class-wrapper").append(class_div).remove(class_div)
  //
  // });

});
