window.onload = begin();

function begin() {
  getData()
}

function getData() {
  $.ajax({
    url: 'http://examen-laboratoria-sprint-5.herokuapp.com/topics',
    contentType: 'application/json',
    method: 'GET',
    success: function(response) {
      console.log(response);

      $.each(response, function(index, obj) {
        $('.content').append(`<div data-target=${response[index].id} class= "post col-6 col-sm-6 col-md-6"><p>Tema: ${response[index].content} <br> Por: ${response[index].author_name} <br> Respuestas: ${response[index]. responses_count}</p> <input type="button" value="Ver mas" class="btn btn-info"></input></div>`)
        console.log(response[index].content);
      });

      $('.post').click(function() {
        var id = ($(this).data('target'));

        localStorage.setItem('idUser', id);
        window.location.href = 'verTopic.html';
      });

      $('#myInput').on('keyup', function() {
        var value = $(this).val().toLowerCase();
        $('.content p').filter(function() {
          $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
        });
      });
    },
    fail: function(request) {
      if (request) {
        alert(request.message);
      }
    }
  });
}

$('#nuevo-tema').click(function() {

  var name = $('#nombre').val();
  var mensaje = $('#mensaje').val();

  var body = {
    'author_name': name,
    'content': mensaje,
  };

$.ajax({
    url: 'http://examen-laboratoria-sprint-5.herokuapp.com/topics',
    method: 'POST',
    data: body,
    success: function() {
    },
    fail: function(request) {
      if (request) {
        alert(request.message);
      }
    }
  });
});
