$(function () {

    let checkedIn = false;

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
        let checked = [];
        let detailsBtns = $('.toggle-details-btn');
        let detailBoxes = $('.details-box');

        $('#checklistContainer').slideUp(800);
        $('#checkIn-name').val('');
        $('#checkIn-title').text('Check In');

        checkboxes.each(checkbox () => {
            console.log(checkbox);
        })
    })

})