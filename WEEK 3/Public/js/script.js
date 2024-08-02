document.addEventListener('DOMContentLoaded', function() {
  M.AutoInit();

  document.getElementById('fetch-data-btn').addEventListener('click', function() {
      const randomNumber = Math.floor(Math.random() * 8) + 1;
      alert('The number of Dog parks near you are: ' + randomNumber);
  });
});

$(document).ready(function(){
  $("#submit-number-btn").click(function(){
      const numberInput = parseInt($("#number-input").val());

      $.ajax({
          url: "http://localhost:3040/multiply",
          method: "POST",
          contentType: "application/json",
          data: JSON.stringify({ number: numberInput }),
          success: function(result){
              $("#result-output").val(result.data);
          },
          error: function(error) {
              console.error("Error:", error);
          }
      });
  });
});
