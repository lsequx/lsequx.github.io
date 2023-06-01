$(document).ready(function(){
    $("#filterInput").on("keyup", function() {
      var value = $(this).val().toLowerCase();
      $("#table-data tr").filter(function() {
        $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
      });
    });
  });