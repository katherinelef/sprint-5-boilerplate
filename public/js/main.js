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
            console.log(response)
            
            $.each(response, function( index, obj ) {
                $('.content').append(`<div class= " post col-6 col-sm-6 col-md-6"><p>Tema: ${response[index].content} <br> Por: ${response[index].author_name} <br> Respuestas: ${response[index]. responses_count}</p></div>`)
                console.log(response[index].content);
              });

              $("#myInput").on("keyup", function() {
                var value = $(this).val().toLowerCase();
                $(".content p").filter(function() {
                  $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
                });
              });

        },
        fail: function (request) {
            if (request) {
                alert(request.message);
            }
        }
    });
  
}

$('#nuevo-tema').click(function () {

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
    success: function () {
        

    },
    fail: function (request) {
        if (request) {
            alert(request.message);
        }
    }
});

})

/*var request = new XMLHttpRequest();

request.open('POST', 'http://examen-laboratoria-sprint-5.herokuapp.com/topics');

request.setRequestHeader('Content-Type', 'application/json');

request.onreadystatechange = function () {
  if (this.readyState === 4) {
    console.log('Status:', this.status);
    console.log('Headers:', this.getAllResponseHeaders());
    console.log('Body:', this.responseText);
  }
};

var body = {
    'author_name': 'Emmanuel',
    'content': 'esto es lo que estoy agregando',
};

request.send(JSON.stringify(body));*/