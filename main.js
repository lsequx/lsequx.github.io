$(function() {
    var logObj = {
        'name':'name',
        'startTime':'00:00AM/PM',
        'endTime':'00:00AM/PM',
        'checklistSubmitted':false
    }

    var now = new Date();
    $('#checkInButton').click(function () {
        var checkedIn = false;
        var name = $("#checkInName").val();
        var welcomeText = `${now.toLocaleTimeString()} | ${name} started check`;
        if (name !== "" && name.length > 3) {
          checkedIn = true;
          $('#welcome-container').slideDown();
          $('#checklistContainer').slideDown();
          $('#welcome-message').text(welcomeText);
          $('#checkInButton').text('Check Out');
          $('#checkInName').val('').prop('disabled', true).css('width', '25px');
          logObj['name'] = name;
          logObj['startTime'] = `${now.getHours()}:${now.getMinutes()}${now.getHours() - 24 >= 12 ? 'PM' : 'AM'}`;
        } else {
          checkedIn = false;
          $('#welcome-container').slideUp();
          $('#checklistContainer').slideUp();
          $('#checkInButton').text('Check In');
          $('#checkInName').prop('disabled', false).css('width', '250px');
          console.log(logObj);
        }
      
        if (!checkedIn) {
          $('#checklistForm').trigger('reset');
        }
      });
      

const checkboxes = document.querySelectorAll('.checkbox');
checkboxes.forEach(function (checkbox) {
  checkbox.addEventListener('change', function () {
    const parentElement = this.closest('.checklist-item');
    const label = parentElement.querySelector('label');
    var button = parentElement.querySelector('.detailsButton');
    
    if (this.checked) {
        label.style.textDecoration = 'line-through';
        label.style.color = 'green';
        button.style.pointerEvents = 'none';
        checkedItems.push(this.value);
    } else {
      label.style.textDecoration = 'none';
      label.style.color = 'white';
      button.style.pointerEvents = 'all';
      checkedItems.splice(checkedItems.indexOf(this.value), 1);
    }

  });
});

$('#submitChecklistButton').on('click', function(e){
    e.preventDefault();
    const checkedItems = [];
    var endTime = new Date();
    var currentTime = `${endTime.getHours()}:${endTime.getMinutes()}${endTime.getHours() - 24 > 12 ? 'PM' : 'AM'}`;
    if(checkedItems.length === $('.checkbox').length) {
        logObj['endTime'] = currentTime;
        logObj['checklistSubmitted'] = checkedItems.length === $('.checkbox').length;
        $(this).text('Checklist Submitted');
    } else {
        console.log(checkedItems)
        if(confirm('Checklist not completed and will not be saved.') === true) {
            // location.reload();
            logObj['endTime'] = currentTime;
            logObj['checklistSubmitted'] = checkedItems.length === $('.checkbox').length;
        }
    }
    console.log(logObj);
});

$('.detailsButton').click(function(){
    var button = $(this);
    if (button.hasClass('active')){
        button.html('<i class="fa-solid fa-pencil"></i>')
    } else {
        button.html('<i class="fa-solid fa-xmark-large"></i>')
    }
    button.toggleClass('active');
    var parentDiv = $(this).closest('.checklist-item');
    var textarea = parentDiv.find('.detailsBox');
    textarea.slideToggle();
})

console.log(logObj);



}); // end of jquery