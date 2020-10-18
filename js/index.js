
//鼠标移入大图切换为对应小图
$('.img-nav img').mouseenter(function(){
	var index=$(this).index();
	$(this).parents('.img-box').find('.big-img').eq(index).css('display','block');
	$(this).parents('.img-box').find('.big-img').eq(index).css('opacity','0.5');
	$(this).parents('.img-box').find('.big-img').eq(index).animate({
		opacity:'1',
	},200,'linear');
});
$('.img-nav img').mouseleave(function(){
	var index=$(this).index();
	$(this).parents('.img-box').find('.big-img').eq(index).animate({
		opacity:'0.5',
	},200,'linear',function(){
		$(this).parents('.img-box').find('.big-img').eq(index).css('display','none');
		$(this).parents('.img-box').find('.big-img').eq(index).css('opacity','1');
	});
})






//首页倒计时
function jiaLing(ti){
			if(ti<10){
				ti="0"+ti;
			}
			return ti;
		}
function getDiff(time1,time2){
				var arr=[]
				var result=time2-time1;
				var afterSecon=parseInt(result/1000);
				var afterday=parseInt(afterSecon/(60*60*24))
				var day=afterday;
				arr[0]=day+"";
				var afterhour=parseInt((afterSecon-afterday*(60*60*24))/3600);
				var hour=afterhour;
				arr[1]=jiaLing(hour)+"";
				var aftermin=parseInt((afterSecon-afterday*(60*60*24)-afterhour*3600)/60);
				var min=aftermin;
				arr[2]=jiaLing(min)+"";
				var secon=parseInt(afterSecon-afterday*(60*60*24)-afterhour*3600-aftermin*60);
				arr[3]=jiaLing(secon)+"";
				return arr;
				}
var day1=new Date();
var day2=new Date("2020-11-9 00:00:00");
var arr=getDiff(day1.getTime(),day2.getTime());
for(var j=0; j<$('.item-djs>span').length; j++){
	if(j%4==0){
		$('.item-djs>span').eq(j).html(arr[0]);
	}
	if(j%4==1){
		$('.item-djs>span').eq(j).html(arr[1]);
	}
	if(j%4==2){
		$('.item-djs>span').eq(j).html(arr[2]);
	}
	if(j%4==3){
		$('.item-djs>span').eq(j).html(arr[3]);
	}
}
var timer=setInterval(function(){
	day1=new Date();
	arr=getDiff(day1.getTime(),day2.getTime());
for(var j=0; j<$('.item-djs>span').length; j++){
	if(j%4==0){
		$('.item-djs>span').eq(j).html(arr[0]);
	}
	if(j%4==1){
		$('.item-djs>span').eq(j).html(arr[1]);
	}
	if(j%4==2){
		$('.item-djs>span').eq(j).html(arr[2]);
	}
	if(j%4==3){
		$('.item-djs>span').eq(j).html(arr[3]);
	}
}
},100);



//给商品绑定信息
var productArr=product();
$('.item-actPrice>a').each(function(index,value){
	$(this).prop('oid',productArr[index].id);
});
$('.item-actPrice>a').click(function(){
	$(this).prop('href','productdetail.html?id='+$(this).prop('oid'));
});
$('.img-box>a').click(function(){
	$(this).prop('href','productdetail.html?id='+$(this).parents('.item-box').find('.item-actPrice').children('a').prop('oid'));
});
$('.item-name>a').click(function(){
	$(this).prop('href','productdetail.html?id='+$(this).parents('.item-box').find('.item-actPrice').children('a').prop('oid'));
});
$('.item-doc>a').click(function(){
	$(this).prop('href','productdetail.html?id='+$(this).parents('.item-box').find('.item-actPrice').children('a').prop('oid'));
});
//第二排商品
$('.act-btn>a').each(function(index,value){
	$(this).prop('oid',productArr[index+4].id);
});
$('.act-btn>a').click(function(){
	$(this).prop('href','productdetail.html?id='+$(this).prop('oid'));
});
$('.imag-box>a').click(function(){
	$(this).prop('href','productdetail.html?id='+$(this).parents('.box-shadow').find('.act-btn').children('a').prop('oid'));
});
$('.text-box h2>a').click(function(){
	$(this).prop('href','productdetail.html?id='+$(this).parents('.box-shadow').find('.act-btn').children('a').prop('oid'));
});
$('.item-doc>a').click(function(){
	$(this).prop('href','productdetail.html?id='+$(this).parents('.box-shadow').find('.act-btn').children('a').prop('oid'));
});

