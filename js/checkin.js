$(function() {
    var checklist = $('#checklistContainer');
    checklist.hide();
    $('#checkInBtn').click(function() {
        var name = $('#nameInput').val();
        var errorMessage = $('#error');
        var checkedIn = false;
        var timeDisplay = $("#time");

        if(name === "") {
            errorMessage.show();
            errorMessage.text('* required')
            checkedIn = false;
        } else if (name.length < 3 || name.length > 17) {
            errorMessage.text('* name must be between 3-17 characters')
        } else {
            errorMessage.hide();
            checkedIn = true;
        }

        if (checkedIn === true) {
            if($('#checkInBtn').text() === 'Check In'){
                $('#checkInBtn').text('Check Out');
                checklist.slideDown(800);
                timeDisplay.text(new Date().toLocaleTimeString());
                $('#nameInput').css({
                    'pointer-events':'none',
                    'font-weight':'800',
                    'width':'100px'
                })
                $('#checkInBtn').css('width','265px');
            } else {
                $('#checkInBtn').text('Check In');
                checklist.slideUp(800);
                checkedIn = false;
                $('#nameInput').val('');
                $('#nameInput').css({
                    'pointer-events':'all',
                    'font-weight':'400',
                    'width':'300px'
                })
                $('#checkInBtn').css('width','150px');
            }
        } else {
            checkedIn = false;
        }
    })
    $('.detailsBtn').click(function() {
        let textarea = $(this).closest('.item').find('textarea');
        textarea.slideToggle();
        let button = $(this);
        $('.detailsBtn').toggleClass('active');
        if (button.hasClass('active')) {
            button.find('i').removeClass('fa-pencil').addClass('fa-check');
        } else {
            button.find('i').removeClass('fa-check').addClass('fa-pencil');
        }
    });
})