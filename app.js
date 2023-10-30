$('#movie-form').on('submit', function(e){
    e.preventDefault();
    let title = $('input[name=movie-title]').val();
    let rating = $('input[name=rating]').val();
    $('ul').append(`<li>${title} - My rating: ${rating}⭐</li>`)
    this.reset();
})



