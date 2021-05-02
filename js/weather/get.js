!function requestData(){
    $.ajax({
        url: "https://geoapi.qweather.com/v2/city/lookup?key=bc3ec0cf7125416198ad4407e788ef24",
        type: "post",
        dataType: "json",
        success: function(data){
            /*这个方法里是ajax发送请求成功之后执行的代码*/
            showData(data);//我们仅做数据展示
        },
        error: function(msg){
            alert("ajax连接异常："+msg);
        }
    });
    $.ajax({
        url: "https://devapi.qweather.com/v7/weather/now?key=bc3ec0cf7125416198ad4407e788ef24",
        type: "post",
        dataType: "json",
        success: function(data){
            /*这个方法里是ajax发送请求成功之后执行的代码*/
            showData(data);//我们仅做数据展示
        },
        error: function(msg){
            alert("ajax连接异常："+msg);
        }
    });
    
}