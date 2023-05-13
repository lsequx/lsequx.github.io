$(function() {

    $("#submitChecklistBtn").click(function(e) {
        e.preventDefault();
        var checkedboxes = [];
        $(".checkbox").each(function() {
            if ($(this).is(':checked')) {
                checkedboxes.push($(this).val());
            } else {
                checkedboxes.pop($(this).val());
            }
        })

        if (checkedboxes.length === 7) {
            location.reload();
        } else {
            alert('Please select all checkboxes');
        }
    })

    $(".checkbox").change(function() {
        var label = $(this).closest('.label-input').find('label');
        
        if ($(this).is(':checked')) {
            label.addClass('strikethrough');
        } else {
            label.removeClass('strikethrough');
        }
    });

})