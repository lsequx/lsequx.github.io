$(function() {
    var now = new Date();
    $('#checkInButton').click(function(){
        var name = $("#checkInName").val();
        var welcomeText = `${now.toLocaleTimeString()} | ${name} started check`;
        if(name !== "" && name.length > 3) {
            $('#welcome-container').slideDown();
            $('#checklistContainer').slideDown();
            $('#welcome-message').text(welcomeText);
            $('#checkInButton').text('Check Out')
            $('#checkInName').val('');
            $('#checkInName').css({
                'filter':'blur(1px)',
                'pointer-events':'none',
                'width':'25px'
            })
            localStorage.setItem('name',name);
            localStorage.setItem('start', `${now.getHours()}:${now.getMinutes()}${now.getHours() - 24 === 12 ? 'PM' : 'AM'}`);
        } else {
            $('#welcome-container').slideUp();
            $('#checklistContainer').slideUp();
            $('#checkInButton').text('Check In')
            $('#checkInName').css({
                'filter':'none',
                'pointer-events':'all',
                'width':'250px'
            })
        }


    })

const checkedItems = [];

const checkboxes = document.querySelectorAll('.checkbox');
checkboxes.forEach(function (checkbox) {
  checkbox.addEventListener('change', function () {
    const parentElement = this.closest('.checklist-item');
    const label = parentElement.querySelector('label');
    var button = parentElement.querySelector('.detailsButton');
    
    if (this.checked) {
        label.style.textDecoration = 'line-through';
        label.style.color = 'tomato';
        button.style.pointerEvents = 'none';
        checkedItems.push(this.value);
    } else {
      label.style.textDecoration = 'none';
      label.style.color = 'gray';
      button.style.pointerEvents = 'all';
    }

  });
});

$('#submitChecklistButton').on('click', function(e){
    if(checkedItems.length === $('.checkbox').length) {
        console.log(checkedItems);
        localStorage.setItem('checked items',checkedItems);
    } else {
        alert('please complete checklist to submit')
    }
})

$('.detailsButton').click(function(){
    var button = $(this);
    if (button.hasClass('active')){
        button.html('<i class="fa-solid fa-pencil"></i>')
    } else {
        button.html('<i class="fa-solid fa-xmark"></i>')
    }
    button.toggleClass('active');
    var parentDiv = $(this).closest('.checklist-item');
    var textarea = parentDiv.find('.detailsBox');
    textarea.slideToggle();
})
})