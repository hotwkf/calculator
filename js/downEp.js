$(function(){

$('#ChinaMap6').SVGMap({
    
       clickCallback: function(stateData, obj){
 
          downEp(obj.id);
 
       }
});




});

function downEp(city){

    var cityTitle = new Array();
    cityTitle["china"] = '全国';
    cityTitle["heilongjiang"] = '黑龙江';
    cityTitle["jilin"] = "吉林";
    cityTitle["liaoning"] = '辽宁';
    cityTitle["hebei"] = '河北';
    cityTitle["shandong"] = '山东';
    cityTitle["jiangsu"] = '江苏';
    cityTitle["zhejiang"] = '浙江';
    cityTitle["anhui"] = '安徽';
    cityTitle["henan"] = '河南';
    cityTitle["shanxi"] = '山西';
    cityTitle["shaanxi"] = '陕西';
    cityTitle["gansu"] = '甘肃';
    cityTitle["hubei"] = '湖北';
    cityTitle["jiangxi"] = '江西';
    cityTitle["fujian"] = '福建';
    cityTitle["hunan"] = '湖南';
    cityTitle["guizhou"] = '贵州';
    cityTitle["sichuan"] = '四川';
    cityTitle["yunnan"] = '云南';
    cityTitle["qinghai"] = '青海';
    cityTitle["hainan"] = '海南';
    cityTitle["shanghai"] = '上海';
    cityTitle["chongqing"] = '重庆';
    cityTitle["tianjin"] = '天津';
    cityTitle["beijing"] = '北京';
    cityTitle["ningxia"] = '宁夏';
    cityTitle["neimongol"] = '内蒙古';
    cityTitle["guangxi"] = '广西';
    cityTitle["xinjiang"] = '新疆';
    cityTitle["xizang"] = '西藏';
    cityTitle["guangdong"] = '广东';
    cityTitle["hongkong"] = '香港';
    cityTitle["taiwan"] = '台湾';
    cityTitle["macau"] = '澳门';
    $('#cityTitle').html(cityTitle[city]);

    var cityEpLink = new Array();
    var chinaLink = "<p class='down-ep-info'>该地区暂时没有制定相关地方标准，点击进入《GB13271-2014 锅炉大气污染物排放标准》全国标准下载页面：<p><p class='text-center'><a href='https://pan.baidu.com/s/1kJkZyPUIzLTWeJc4EnyV-A' target='_blank'><button type='button' class='btn btn-primary'>全国标准</button></a></p>";
    cityEpLink["china"] = "<p class='down-ep-info'>《GB13271-2014 锅炉大气污染物排放标准》全国标准下载页面：<p><p class='text-center'><a href='https://pan.baidu.com/s/1kJkZyPUIzLTWeJc4EnyV-A' target='_blank'><button type='button' class='btn btn-primary'>全国标准</button></a></p>";
    cityEpLink["heilongjiang"] = chinaLink;//'黑龙江';
    cityEpLink["jilin"] = chinaLink;//"吉林";
    cityEpLink["liaoning"] = chinaLink;//'辽宁';
    cityEpLink["hebei"] = chinaLink;
    cityEpLink["shandong"] = "<p class='down-ep-info'>山东省地方标准DB37 2374—2013《山东省锅炉大气污染物排放标准》下载页面：<p><p class='text-center'><a href='https://pan.baidu.com/s/1_XQLhs8DQN6pxfaD87TvFw' target='_blank'><button type='button' class='btn btn-primary'>山东地方标准</button></a></p>";
    cityEpLink["jiangsu"] = chinaLink;
    cityEpLink["zhejiang"] = "<p class='down-ep-info'>杭州市地方标准(征求意见稿)请点击按钮下载，浙江其它地区按<a href='https://pan.baidu.com/s/1kJkZyPUIzLTWeJc4EnyV-A'>国家标准</a>执行：<p><p class='text-center'><a href='https://pan.baidu.com/s/1BWa7T6CU4SPirqBCrnCg7A' target='_blank'><button type='button' class='btn btn-primary'>杭州地方标准</button></a></p>";
    cityEpLink["anhui"] = chinaLink;
    cityEpLink["shanxi"] = chinaLink;
    cityEpLink["shaanxi"] = chinaLink;
    cityEpLink["gansu"] = chinaLink;
    cityEpLink["hubei"] = chinaLink;
    cityEpLink["jiangxi"] = chinaLink;
    cityEpLink["fujian"] = chinaLink;//'福建';
    cityEpLink["hunan"] = chinaLink;
    cityEpLink["guizhou"] = chinaLink;
    cityEpLink["sichuan"] = chinaLink;
    cityEpLink["yunnan"] = chinaLink;//'云南';
    cityEpLink["qinghai"] = chinaLink;
    cityEpLink["hainan"] =  chinaLink;//'海南';
    cityEpLink["shanghai"] = "<p class='down-ep-info'>上海市地方标准DB31 387—2018《上海市锅炉大气污染物排放标准》下载页面：<p><p class='text-center'><a href='https://pan.baidu.com/s/1ROmUwDLDLrEqN7YJqdZ4DA' target='_blank'><button type='button' class='btn btn-primary'>上海地方标准</button></a></p>";
    cityEpLink["chongqing"] = "<p class='down-ep-info'>重庆市地方标准DB 50658－2016《重庆市锅炉大气污染物排放标准》下载页面：<p><p class='text-center'><a href='https://pan.baidu.com/s/1_rae24-1D80sVpP-i7nmyg' target='_blank'><button type='button' class='btn btn-primary'>重庆地方标准</button></a></p>";
    cityEpLink["tianjin"] = "<p class='down-ep-info'>天津市地方标准DB12 151-2016《天津市锅炉大气污染物排放标准》下载页面：<p><p class='text-center'><a href='https://pan.baidu.com/s/197cHYwLXmsmQ3_lwTuzcwg' target='_blank'><button type='button' class='btn btn-primary'>天津地方标准</button></a></p>";
    cityEpLink["beijing"] = "<p class='down-ep-info'>北京市地方标准DB11_139-2015《北京市锅炉大气污染物排放标准》下载页面：<p><p class='text-center'><a href='https://pan.baidu.com/s/1o6zJajC' target='_blank'><button type='button' class='btn btn-primary'>北京地方标准</button></a></p>";
    cityEpLink["ningxia"] = chinaLink;
    cityEpLink["neimongol"] = chinaLink;
    cityEpLink["guangxi"] = chinaLink;//'广西';
    cityEpLink["xinjiang"] = chinaLink;
    cityEpLink["xizang"] = chinaLink;//'西藏';
    cityEpLink["guangdong"] = "<p class='down-ep-info'>广东省地方标准下载页面：<p><p class='text-center'><a href='https://pan.baidu.com/s/1QsAq0BqJOr-gwAuYp61BqQ' target='_blank'><button type='button' class='btn btn-primary'>DB44 /765-2010（现行标准）</button></a>　　<a href='https://pan.baidu.com/s/1dVeb-yGgsWocBRnfbvB63g' target='_blank'><button type='button' class='btn btn-primary'>DB 44/765-201X(征求意见稿)</button></a></p>";//'广东';
    cityEpLink["hongkong"] = chinaLink;//'香港';
    cityEpLink["taiwan"] = chinaLink;//'台湾';
    cityEpLink["macau"] = chinaLink;//'澳门';

    $('#cityDown').html(cityEpLink[city]);


    $('#myModal').modal('show');

  
}