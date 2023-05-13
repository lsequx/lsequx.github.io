$(function() {


    $('#checkInBtn').on('click', function(e) {
        e.preventDefault();
        const logData = {
            'name':'',
            'startTime':'',
            'endTime':'',
            'checklist':false
        }
        var name = $('#nameInput').val();
        var welcomeText = $('#welcomeText');
        var startTime = $('#startTime');
        var errorMessage = $('#error p');
        var checklist = $('#mainContainer');
        var checkedIn = false;

        if (name === "" && $('#checkInBtn').text() === 'Check In') {
            errorMessage.text('* name required')
            errorMessage.show();
            checkedIn = false;
        } else if ( name.length < 3 || name.length > 17) {
            errorMessage.text('* name must be between 3-17 characters');
            errorMessage.show();
        } else if ($('#checkInBtn').text() === 'Check Out') {
            checkedIn = false;
        } 
        else {
            checkedIn = true;
            errorMessage.hide();
            logData.name = name;
            var now = new Date().toLocaleTimeString();
            startTime.text(now);
            welcomeText.text(`${name} started check`);
        }

        if(checkedIn) {
            $('#checkInBtn').text('Check Out');
            checklist.slideDown();
            $('#nameInput').css({
                'pointer-events':'none',
                'filter':'blur(0.1rem)'
            })
        } else {
            $('#checkInBtn').text('Check In')
            $('#nameInput').val('')
            checklist.slideUp();
            $('#nameInput').css({
                'pointer-events':'all',
                'filter':'blur(0)'
            })
        }

        console.log(name)
        console.log(checkedIn)

    })
})