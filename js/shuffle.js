(function(){
    var $label = $('.label'),$pointer = $('.pointer');
    var shuffling = false,//控制只有转完一次才可转下一次
        curDeg;
    $label.on('click', function () {
        if(shuffling){
            return;
        }
        shuffling = true;
        $pointer.removeClass('animate').css('transform','rotate(0deg)');
        curDeg = getRandomDeg();
        setTimeout(function () {
            $pointer.addClass('animate').css('transform','rotate(' + curDeg + 'deg)')
        },10);

    });
    $pointer.on('webkitTransitionEnd', function () {
        shuffling = false;
        console.log(curDeg);//根据终点角度，得出抽奖结果，具体规则可自定义
    });
    function getRandomDeg(){
        var deg = Math.random() * 360;//0 ~ 360//这里控制具体的终点角度
        deg += 360 * 3;
        return deg;
    }
})();