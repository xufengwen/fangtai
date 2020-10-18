//二级菜单鼠标移入显示，移出隐藏效果
$('.dropdown-group').on('mouseover',function(){
	$('.two-menu').css('display','block');
	$('.two-menu').css('opacity','1');
});
$('.dropdown-group').on('mouseleave',function(){
	$('.two-menu').animate({
		opacity:'0',
	},200,'linear',function(){
		$('.two-menu').css('display','none');
	});
});

//公告的滚动字幕
var timer=setInterval(move,200);
function move(){
	$('.gonggao p').animate({
					left:'-50%',
				},15000,'linear',function(){
					$('.gonggao p').css('left','100%');
				});
	$('.gonggao p').on('mouseover',function(){
	clearInterval(timer);
	$('.gonggao p').stop();
});
}
$('.gonggao p').on('mouseleave',function(){
	timer=setInterval(move,200);
});
//网页尾部鼠标移入改变导航
$('.nav-last a').mouseenter(function(){
	var index=$(this).index()
	$('.nav-last a').css('color','#bbb');
	$(this).css('color','#c0a59a');
	$('.center-box li').hide();
	if(index==2){
		index=1;
	}
	$('.center-box li').eq(index).show();
})

//固定栏的图片切换以及鼠标移入显示效果
$('#wechatStore').hover(function(){
	this.src='image/wechatRed.png'
},function(){
	this.src='image/wechat.png'
});

$('.kf>img').hover(function(){
	this.src='image/serviceRed.png'
},function(){
	this.src='image/service.png'
});

$('.kf').next().children().hover(function(){
	this.src='image/backtoTopRed.png'
},function(){
	this.src='image/backtoTop.png'
});

//点击返回顶部
$('.kf').next().click(function(){
	$('html').animate(
                    {scrollTop:0},
                500)
});

//客服遮盖层
$('.kfff_enter a').eq(0).click(function(){
	$(this).parents('.chooseKFFF').hide(100);
})
$('.kf').click(function(){
	$('.chooseKFFF').show();
});

//登录账号后的操作
var sessionStorage=window.sessionStorage;
var localStorage=window.localStorage;
var table = localStorage.username? localStorage.username : sessionStorage.username;
var nologin=`<a href="login.html">登录</a>
			<span>|</span>
			<a href="regist.html">注册</a>`;
if(localStorage.username){
	$('.denglu').html('<a title="退出当前账号" class="exit" href="javascript:;" style="color: #c99f6a;">'+localStorage.username+'</a>');
	$('.shopcar-link>a').click(function(){
		$(this).prop('href','shopcar.html');
	});
}else if(sessionStorage.username){
	$('.denglu').html('<a title="退出当前账号" class="exit" href="javascript:;" style="color: #c99f6a;">'+sessionStorage.username+'</a>');
	$('.shopcar-link>a').click(function(){
		$(this).prop('href','shopcar.html');
	});
}else{
	$('.denglu').html(nologin);
	$('.shopcar-link>a').click(function(){alert("请先登录账号")});
}
$('.exit').click(function(){
	var confir=confirm("是否确认退出当前账号？");
	if(confir){
		localStorage.clear();
		sessionStorage.clear();
		window.location.href="indext.html";
	}
})
if(table){
	$.ajax({
	url:"./php/showlist.php",
	data:{
		table:table
	},
	dataType:'json',
	success:function(res){
		if(res.code){
			$('.shopcar-link span').html('('+res.data.length+')');
		}
	}
});
}
