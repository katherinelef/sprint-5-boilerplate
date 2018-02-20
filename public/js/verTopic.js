var topicId = getParameterByName('topic_id');

//Solo por propositos de debug
if(topicId){
  alert("El topic ID es:"+topicId);
}



  $.ajax({
      url: `http://examen-laboratoria-sprint-5.herokuapp.com/topics/${localStorage.idUser}`,
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

