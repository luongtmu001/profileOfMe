$(document).ready(function() {
    $('#btn-next').click(function(event){ //bắt sự kiện nhấn nút next
        var slide_sau = $('.active').next();
        $('.active').addClass('bien-mat-ben-trai').one('webkitAnimationEnd',function(event){
            $('.bien-mat-ben-trai').removeClass('bien-mat-ben-trai').removeClass('active')
        });
        slide_sau.addClass('active').addClass('di-vao-ben-phai').one('webkitAnimationEnd',function(event){
            $('.di-vao-ben-phai').removeClass('di-vao-ben-phai');
        });
    });
});