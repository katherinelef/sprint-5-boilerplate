window.onload = begin();

function begin() {
    getData()
  }

function getData() {
    $.ajax({
        url: 'http://examen-laboratoria-sprint-5.herokuapp.com/topics',
        contentType: 'application/json',
        method: 'GET',
        success: function (response) {
            
 
            $.each(response, function( index, obj ) {
                console.log(response[index].content);
                $('.content').append(`<p>${response[index].content}</p>`)
              });


        },
        fail: function (request) {
            if (request) {
                alert(request.message);
            }
        }
    });
  
}




    var searchBar = $('#search-bar');
    
  
    searchBar.keyup(searchFilter);
    
     
      
    // Filtro de restaurantes por plato
    function searchFilter() {
      var searchWords = searchBar.val();
      var words = 

      $('.content').hide();
      $('.content p').each(function() {
        
        for (var i = 0; i < $('.content p').length; i++) {
          if ($('.content p').indexOf(searchWords) !== -1 ) {
            /*$(this).parent().fadeIn('fast');*/
            console.log($('.content p'))
          }
        }
      });
    }
  
   
