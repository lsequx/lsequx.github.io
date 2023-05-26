$(function () {

    $('#checkin-btn').click(function(e) {
        e.preventDefault();

        let name = $('#checkin-name').val();
        let checkIn = false;
        let errText = $('#error');

        if (name === "") {
            errText.show().text('* name required');
        }

    })

})