//Invoke tips.json file
$.getJSON('tips.json', function (data){

    //get the tips category in tips.json
    let tips = data.tips;

    //Arrange the contents for each card, make it no space and enter to keep it String
    $.each(tips, function(i, data){
        $('#tips-for-you').append('<div class="col-md-4 p-3"><div class="card mb-3"><img src="img/'+data.image+'" class="card-img-top"><div class="card-body"><h5 class="card-title">'+data.title+'</h5><p class="card-text">'+data.description+'</p><a href="#" class="btn btn-primary">Explore</a></div></div></div>');
    });
});
