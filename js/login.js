var sessionStorage=window.sessionStorage;
var localStorage=window.localStorage;
//注册页面的随机数字产生
			var colo=getColor();
			var num="";
			for(var i=0; i<4; i++){
				num+=rand(0,9);
			};
			function rand(min,max){
				return Math.floor(Math.random()*(max-min+1))+min;
			}
			function getColor(){
				var str = "#";
				for(var i=1;i<=6;i++){
					str += rand(0,15).toString(16);
				}
				return str;
			}
			$('.formLine').find('i').css({
				'color':colo,
				'fontSize':25
			});
			$('.formLine').find('i').parent().css('text-align','center');
			$('.formLine').find('i').html(num).parent().click(function(){
				num="";
				colo=getColor();
				for(var i=0; i<4; i++){
				num+=rand(0,9);
			};
			$(this).css('text-align','center');
			$('.formLine').find('i').css({
				'color':colo,
				'fontSize':25
			});
			$('.formLine').find('i').html(num);
			});
		var flag=false;
		$('.agree_protocol').click(function(){
			flag=$(this).prop('checked');
		});
$('.btn-orang').click(function(){
	if($('#testImg').val().trim()==num){
		$.ajax({
		data:{
			username:$('#call').val(),
			password:$('#setPa').val()
		},
		url:"./php/select.php",
		dataType:'json',
		success:function(res){
			if(res.code){
				sessionStorage.setItem('username',$('#call').val());
				alert("登录成功,正在跳转至首页");
				$.ajax({
					url:"./php/create_table.php",
					data:{
						table:sessionStorage.username
					},
					dataType:'json',
					success:function(res){
						window.location.href="indext.html";
					}
				});
				
				if(flag){
					localStorage.setItem('username',$('#call').val());
				};
			}else{
				alert("账号或密码错误");
			}
		}
	});
	}else{
		alert("验证码错误");
	}
});


