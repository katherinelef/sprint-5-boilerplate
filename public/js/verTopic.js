
  $.ajax({
      url: `http://examen-laboratoria-sprint-5.herokuapp.com/topics/${localStorage.idUser}`,
      contentType: 'application/json',
      method: 'GET',
      success: function (response) {
        console.log(response)
          console.log(response.author_name)
          $('.content').append(`<div class= "post col-6 col-sm-6 col-md-6 mx-auto"><p class="tema text-center"> ${response.content} </p> <br> <p>  Por: ${response.author_name} <br> Respuestas: ${response.responses_count}</p></div>`)
          
          
      },
      fail: function (request) {
          if (request) {
              alert(request.message);
          }
      }
  });


  
  $.ajax({
    url: `http://examen-laboratoria-sprint-5.herokuapp.com/topics/${localStorage.idUser}/responses`,
    contentType: 'application/json',
    method: 'GET',
    success: function (response) {
      console.log(response)
        
        
    },
    fail: function (request) {
        if (request) {
            alert(request.message);
        }
    }
});

$('#nuevo-tema').click(function () {

  var name = $('#nombre').val();
  var mensaje = $('#mensaje').val();

var body = {
  'author_name': name,
  'content': mensaje,
  'topic_id': localStorage.idUser
};



$.ajax({
  url: `http://examen-laboratoria-sprint-5.herokuapp.com/topics/${localStorage.idUser}/responses`,
  method: 'POST',
  data: body,
  success: function (response) {

    $('.answer').append(`<div class= "post col-6 col-sm-6 col-md-6 mx-auto"><p class="tema text-center"> ${response.content} </p> <br> <p>  Por: ${response.author_name} <br> Respuestas: ${response.responses_count}</p></div>`)
      
  },

  fail: function (request) {
      if (request) {
          alert(request.message);
      }
  }
});

})