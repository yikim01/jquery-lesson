// $(document).ready(function() {
//     alert("Everything is ready, let's do this");
// });

// or, the shortcut version
// $(function(){
//     alert("Everything is ready, let's do this");
// });
$(function() {

  var newHomes = [
    {address: "27569 Cedarwood Drive", sf: "2,535", bedrooms: 3, baths: 2.5, price: "$496,500"},
    {address: "316 Annandale Drive", sf: "1,326", bedrooms: 4, baths: 2, price: "$275,000"},
    {address: "251 Grandview Road", sf: "3,800", bedrooms: 3, baths: 2, price: "$699,900"},
    {address: "28571 Manitoba", sf: "2,960", bedrooms: 4, baths: 3.5, price: "$775,000"}
];


    $('#addHome').removeClass('btn-danger').addClass('btn-success');

    $('h1').addClass('text-center');

    var newLink = $( '<br><br><a id="zillowLink" href="http://www.zillow.com">Visit Zillow.com<a>' );
    newLink.appendTo('body');
  // append: http://api.jquery.com/append/

  var addHome = $('<tr><td>newHomes.pop(0,0)</td><td></td><td></td><td></td><td></td><td><button class="btn btn-xs btn-add"></button></td></tr>');
  addHome.appendTo('body');

  $('#zillowLink').attr( "target", "_blank" );
  //_blank has nothing to do with jQuery
  //What does target do?
  //one attribute is a getter
  //two attributes is a setter
  console.log($('#zillowLink').attr('href'));
  $('#homes tbody').on('click', 'button', removeHome);
  //the above didnt specify button so whole row is clickable to remove

  function removeHome() {
      var row = $(this).parent().parent();
      $(row).fadeOut(1000, function() {
        $(row).remove();
      });
  }



  //more effects in notes w02 d03
  //(this) for original event
  //methods require parenthesis after


  $('#addHome').click(function() {
    console.log(this);
  })



  //   $('#addHome').on('click', function() {
  //     console.log(this);
  // });
  var cells = $('#homes thead tr').children();
  cells.eq(0).css('color', 'blue');
  cells.eq(4).css('color', 'green');
  //eq allows to index

});

//Add Home
// 1. Add listener to add BTN
// 2. Create row with $()
// 3. Get home onjectfrom the array
// 4. update the "row" with the data from the obj
// 5. Append the row

