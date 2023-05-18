$(function() {
    $('#searchInput').on('keyup', function() {
        var value = $(this).val().toLowerCase();
        $('#tableData tr').filter(function() {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
        });
    });

    $('#dateSearch').on('keyup', function() {
        var dateValue = $(this).val().toLowerCase();
        $('#tableData tr').filter(function() {
            $(this).toggle($(this).text().toLowerCase().indexOf(dateValue) > -1);
        })
    });

    $('#startTime').on('keyup', function() {
        var startTimeValue = $(this).val();
        $('#tableData tr').filter(function() {
            $(this).toggle($(this).text().indexOf(startTimeValue) > -1);
        });
    });
    $('#endTime').on('keyup', function() {
        var startTimeValue = $(this).val();
        $('#tableData tr').filter(function() {
            $(this).toggle($(this).text().indexOf(startTimeValue) > -1);
        });
    });
});