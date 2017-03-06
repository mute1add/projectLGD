jQuery(function(f){
    var element = f('#block1');
    f(window).scroll(function(){
        element['fade'+ (f(this).scrollTop() > 200 ? 'In': 'none')](500);           
    });
});
