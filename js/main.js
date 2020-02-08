
$('.add').on('click', function(e) {
    e.preventDefault();
    let skill = $('#myInput').val()
    console.log(skill);

    let template = 
    `<div class="skills">
    <button class="remove">X</button>
    <p>${skill}</p>
    </div>`

    $('form').append(template);
        $('#myInput').val('');

})


$('form').on('click', 'button', function() {
    var row = $(this).closest('.skills');
    row.remove();  
});

