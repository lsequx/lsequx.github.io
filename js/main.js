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
        var startTimeText = $('#startTime');
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
        }

        if(checkedIn) {
            $('#checkInBtn').text('Check Out');
            checklist.slideDown();
            $('#nameInput').css({
                'pointer-events':'none',
                'filter':'blur(0.1rem)'
            })
            var startTime = new Date().toLocaleTimeString();
            startTimeText.text(startTime);
            welcomeText.text(`${name} started check`);
            localStorage.setItem('name',name);
            localStorage.setItem('startTime',startTime);
        } else {
            $('#checkInBtn').text('Check In')
            $('#nameInput').val('')
            checklist.slideUp();
            $('#nameInput').css({
                'pointer-events':'all',
                'filter':'blur(0)'
            })
            var endTime = new Date().toLocaleTimeString();
            localStorage.setItem('endTime',endTime);
            logData.name = localStorage.getItem('name');
            logData.startTime = localStorage.getItem('startTime');
            logData.endTime = localStorage.getItem('endTime');
        }

        console.log(name)
        console.log(checkedIn)
        console.log(logData);

    })

    // checklist 
    
})