			var flag1=false;
			var flag2=false;
			var flag3=false;
			var flag4=false;
			$('#call').on('blur',function(){
				if(!(/^[1]\d{10}$/.test($('#call').val()))){
					$('#call').css('color','red');
					flag1=false;
					alert("请输入11位正确的数字电话号码");
				}else{
					$('#call').css('color','');
					flag1=true;
				};
			});
			$('#setPa').on('blur',function(){
				if(!(/\S\w{6,}/).test($('#setPa').val())){
					$('#setPa').css('color','red');
					flag2=false;
					alert("请输入六位以上非空字母数字或下划线");
				}else{
					$('#setPa').css('color','');
					flag2=true;
				};
			});
			$('#testPa').on('blur',function(){
				if($('#setPa').val()==$('#testPa').val()){
					$('#testPa').css('color','');
					flag3=true;
				}else{
					$('#testPa').css('color','red');
					flag3=false;
					alert("请与设置的密码保持一致");
				}
			});
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
			$('#testImg').on('blur',function(){
				if($('#testImg').val()==num){
					flag4=true;
				}else{
					flag4=false;
					alert("验证码错误");
				};
			});
			var flag5;
			$('.agree_protocol').click(function(){
				flag5=$('.agree_protocol').prop('checked');
			});
			
			
				$('.btn-orang').click(function(){
					if(flag1&&flag2&&flag3&&flag4&&flag5){
					$.ajax({
					url:"./php/addwq.php",
					data:{
						username:$('#call').val(),
						password:$('#setPa').val()
					},
					dataType:'json',
					success:function(res){
						if(res.code){
							alert('注册成功');
						}else{
							alert('已注册过账号，请直接登录');
						}
						window.location.href="login.html";
					}
				});
				};
				});
