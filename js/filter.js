$(function(){
    $('#searchInput').on('keyup', function(){
        var value = $(this).val().toLowerCase();
        $('#log-table-data tr').filter(function() {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });
    });
});