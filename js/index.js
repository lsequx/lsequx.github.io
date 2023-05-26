$(function () {

    let checkedIn = false;
    let errorContainer = $('#error-container');
    errorContainer.hide();

    $('#checkIn-name').on('keyup', function(e) {
        e.preventDefault();
        if($(this).val() === "") {
            $('#checkIn-btn').hide();
        } else if ($(this).val().length < 3 || $(this).val().length > 17) {
            $('#checkIn-btn').hide();
        }else {
            $('#checkIn-btn').fadeIn();
        }
    })

    $('#checkIn-btn').click(function(e) {
        e.preventDefault();
        checkedIn = true;
        $('#checklistContainer').slideDown('slow');
        $(this).hide(800);
        $('#checkIn-title').text('Checked In')
    })

    $('#checklist-btn').click(function(e) {
        e.preventDefault();
        let checkboxes = $('.checkbox');
        let detailsBtns = $('.toggle-details-btn');
        let detailBoxes = $('.details-box');

        // $('#checklistContainer').slideUp(800);
        // $('#checkIn-name').val('');
        // $('#checkIn-title').text('Check In');

        let checked = $(checkboxes).filter(":checked").toArray();
        if(checked.length === $('.checkbox').length) {
            location.reload();
        } else {
            $('#error-container').show();
        }
    })

    $('#confirm').click(function() {
        location.reload();
    })
    $('#cancel').click(function() {
        errorContainer.hide();
    })
})