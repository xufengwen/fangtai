var sessionStorage=window.sessionStorage;
var localStorage=window.localStorage;
var allprice=0;
var num=0;
var table = localStorage.username? localStorage.username : sessionStorage.username;
function showlist(){
	$.ajax({
	url:"./php/showlist.php",
	data:{
		table:table
	},
	dataType:'json',
	success:function(res){
		if(res.code){
			num=0;
			allprice=0;
			var str=`<div id="yescars">
					<table class="pro-list">
						<tr class="th">
							<th>
								<div class="checkBtn"></div>
							</th>
							<th>
                                <div class="proPic">产品</div>
                            </th>
                            <th>
                                <div class="proInfo">产品信息</div>
                            </th>
                            <th>
                                <div class="proPrice">单价（元）</div>
                            </th>
                            <th>
                                <div class="proCount">数量</div>
                            </th>
                            <th>
                                <div class="proTotalprice">价格（元）</div>
                            </th>
                            <th>
                                <div class="proDo">操作</div>
                            </th>
						</tr>`;
			$.each(res.data, function(i,v) {
				num+=parseInt(v.product_num);
				allprice+=parseInt(v.product_price)*parseInt(v.product_num);
				str+=`<tr>
							<td>
								<div class="checkBtn">
									<input type="checkbox" data-carid="295012" name="checkPor" checked="checked" value="295012">
									<span class="check-box isChecked " data-type="checkOne"></span>
								</div>
							</td>
							<td>
								<div class="proPic">
									<a href="javascript:;" target="_blank">
										<img src="${v.product_img}" alt="方太 EMC2＋TH33B 云魔方 烟灶套餐">
									</a>
								</div>
							</td>
							<td>
								<div class="proInfo">
									<a href="javascript:;" target="_blank">
										<span class="title" title="方太 EMC2＋TH33B 云魔方 烟灶套餐">${v.product_name}</span>
									</a>
								</div>
							</td>
							<td>
								<div class="proPrice">
									<span class="newPrice">
										<i class="yen">¥</i>${v.product_price}
									</span>
									<span class="price">
										<del>
											<i class="yen">¥</i>${+v.product_price+2000}
										</del>
									</span>
								</div>
							</td>
							<td>
								<div class="proCount">
									<span id="${v.product_id}" class="cut" data-type="cut">－</span>
									<input id="${v.product_id}" type="text" name="count" readonly="" value="${v.product_num}">
									<span id="${v.product_id}" class="add" data-type="add">＋</span>
								</div>
							</td>
							<td>
								<div class="proTotalprice">
									<span class="realPrice">
										<i class="yen">¥</i>${v.product_price*v.product_num}
									</span>
								</div>
							</td>
							<td>
								<div class="proDo">
									<span id="${v.product_id}" class="del" data-type="del">删除</span>
								</div>
							</td>
						</tr>`
			});
			str+=`</table>
					<table class="toolBar">
						<tr>
							<td>
								<div class="checkAll">
									<input type="checkbox" checked="" name="checkAll" value=" ">
									<span class="check-box isChecked" data-type="checkAll"></span>
									<span>全选</span>
								</div>
							</td>
							
							<td>
								<div class="toBack">
									<a href="indext.html" target="_blank">返回继续购物</a>
								</div>
							</td>
						</tr>
					</table>
					<div class="myAddr">
						<span class="addr-str">收货地址：</span>
						<span class="addr-edit">设置</span>
					</div>
					<div class="orderTotalprice">商品总金额：
						<span>${allprice}</span>元
					</div>
					<div class="orderDiscount">折扣优惠：<span>${num*1000}</span>元</div>
					<div style="overflow: hidden;">
						<table align="right">
							<tr>
								<td>
									<div class="orderCount">
										商品数量：<span>${num}</span>个
									</div>
								</td>
								<td>
									<div class="payPrice">
										付款金额 ：<b>${allprice-1000*num}</b>元
									</div>
								</td>
								<td>
									<div class="btn-pay">
										<span class="maskBtn" data-type="btnSubmit">结算</span>
									</div>
								</td>
							</tr>
						</table>
					</div>
				</div>`;
			
		};
		$('.shopcar').html(str);
	}
});
};
showlist();

$('.shopcar').on('click','.cut',function(){
	
	var that=this;
	var newprice=$(that).parents('tr').find('.newPrice').html().split('</i>')[1].trim();
	var val=$(that).parent().children('input').val();
		val--;
		if(!(val==0)){
			if($(this).parents('tr').find('.checkBtn>span').hasClass('isChecked')){
				num--;
				allprice-=newprice;
			}
		}else{
			val=1;
		}
		$(that).parent().children('input').val(val);
		$(that).parents('tr').find('.realPrice').html('<i class="yen">¥</i>'+newprice*val);
		
		
		$('.payPrice>b').html(allprice-num*1000);
		$('.orderCount>span').html(num);
		$('.orderDiscount>span').html(num*1000);
		$('.orderTotalprice>span').html(allprice);
	$.ajax({
		url:"./php/updatewq.php",
		data:{
			id:$(this).prop('id'),
			type:"cut",
			table:table
		},
		dataType:'json',
		success:function(res){
			if(!res.code){
				var val=$(that).parent().children('input').val();
				val++;
				$(that).parent().children('input').val(val);
			}
		}
	});
});
$('.shopcar').on('click','.add',function(){
	var that=this;
	var newprice=$(that).parents('tr').find('.newPrice').html().split('</i>')[1].trim();
	var val=$(that).parent().children('input').val();
		if($(this).parents('tr').find('.checkBtn>span').hasClass('isChecked')){
			num++;
			allprice+=parseInt(newprice);
		}
		val++;
		$(that).parent().children('input').val(val);
		$(that).parents('tr').find('.realPrice').html('<i class="yen">¥</i>'+newprice*val);
		$('.payPrice>b').html(allprice-num*1000);
		$('.orderCount>span').html(num);
		$('.orderDiscount>span').html(num*1000);
		$('.orderTotalprice>span').html(allprice);
	$.ajax({
		url:"./php/updatewq.php",
		data:{
			id:$(this).prop('id'),
			type:"add",
			table:table
		},
		dataType:'json',
		success:function(res){
			if(!res.code){
				var val=$(that).parent().children('input').val();
				val--;
				$(that).parent().children('input').val(val);
			}
		}
	});
});


$('.shopcar').on('click','.checkBtn>span',function(){
	$(this).toggleClass('isChecked');
	var newprice=$(this).parents('tr').find('.newPrice').html().split('</i>')[1].trim();
	var val=$(this).parents('tr').find('.proCount>input').val();
	var flag=true;
	$('.checkBtn>span').each(function(i,v){
		if(!$(v).hasClass('isChecked')){
			flag=false;
		}
	});
	if(flag){
		$('.checkAll>.check-box').addClass('isChecked');
	}else{
		$('.checkAll>.check-box').removeClass('isChecked');
	}
	if($(this).hasClass('isChecked')){
		num=parseInt(num)+parseInt(val);
		allprice+=newprice*val;
	}else{
		num=num-val;
		allprice-=newprice*val;
	}
	$('.orderDiscount>span').html(num*1000);
	$('.orderTotalprice>span').html(allprice);
	$('.payPrice>b').html(allprice-num*1000);
	$('.orderCount>span').html(num);
});


$('.shopcar').on('click','.checkAll>span',function(){
	$(this).toggleClass('isChecked');
	if($(this).hasClass('isChecked')){
		$('.checkBtn>span').addClass('isChecked');
		showlist();
	}else{
		$('.checkBtn>span').removeClass('isChecked');
		$('.orderDiscount>span').html(0);
		$('.orderTotalprice>span').html(0);
		$('.payPrice>b').html(0);
		$('.orderCount>span').html(0);
	}
});
$('.shopcar').on('click','.del',function(){
	var val=$(this).parents('tr').find('.proCount>input').val();
	var newprice=$(this).parents('tr').find('.newPrice').html().split('</i>')[1].trim();
	num=num-val;
	allprice-=newprice*val;
	$('.orderDiscount>span').html(num*1000);
	$('.orderTotalprice>span').html(allprice);
	$('.payPrice>b').html(allprice-num*1000);
	$('.orderCount>span').html(num);
	$(this).parents('tr').remove();
	$.ajax({
		url:"./php/delwq.php",
		data:{
			id:$(this).prop('id'),
			table:table
		},
		dataType:'json',
		success:function(res){
			if(!res.code){
				console.log("删库失败");
			}
		}
	});
	
});
$('.shopcar').on('click','.proPic>a',function(){
	$(this).prop('href','productdetail.html?id='+$(this).parents('tr').find('.proCount>input').prop('id'));
});
$('.shopcar').on('click','.proInfo>a',function(){
	$(this).prop('href','productdetail.html?id='+$(this).parents('tr').find('.proCount>input').prop('id'));
});