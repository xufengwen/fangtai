var local=location.search;
			var res=local.split('=')[1];
			var obj=product(res);
			$('.active').html(obj.title);
			var str=`<div class="item-info">
				<div class="item-pic pull-left">
					<div id="ftzoom">
						<a href="javascript:;" class="jqzoom" style="outline-style: none;">
							<div class="zoomPad">
								<img src="${obj.Bigimg}" width="400"/>
								<div class="zoomPup">
									
								</div>
								<div class="zoomWindow">
									<div class="zoomWrapper" style="width: 500px;">
										<div class="zoomWrapperImage" style="width: 100%; height: 500px;">
											<img src="${obj.Bigimg}"/>
										</div>
									</div>
								</div>
							</div>
						</a>
						<ul class="slide-nav">
							<li class="item">
								<img src="${obj.smallimg[0]}"/>
							</li>
							<li class="item">
								<img src="${obj.smallimg[1]}"/>
							</li>
							<li class="item">
								<img src="${obj.smallimg[2]}"/>
							</li>
							<li class="item">
								<img src="${obj.smallimg[3]}"/>
							</li>
							<li class="item">
								<img src="${obj.smallimg[4]}"/>
							</li>
						</ul>
					</div>
					<div class="slide-ctrl">
						<a class="prev carousel-ctrl" href="javascript:;">
                            <span class="spring spring-left"></span>
                        </a>
                        <a class="next carousel-ctrl" href="javascript:;">
                            <span class="spring spring-right" ></span>
                        </a>
					</div>
				</div>
				<div class="item-intr pull-right">
					<h2 class="item-title">
						<a href="javascript:;" style="text-align: left;">${obj.title}</a>
					</h2>
					<h3 class="item-profit">${obj.desc}</h3>
					<p class="item-actPrice">${obj.pri[0]}    
						<i>${obj.pri[1]}</i>
						<b>${obj.pri[2]}</b>
					</p>
					<p class="item-actPrice" style="padding:15px 0;overflow:hidden;">
						<span style="display: inline-block;font-size:12px;font-weight:normal;letter-spacing:1px;margin-left:30px;line-height: 1.2;background-color: #dbb191;padding: 0 4px;color: #fff;margin-right: 10px;margin-top: 6px;">
							${obj.privilege[0]}
						</span>
						<span style="padding-left:15px;width:80%;font-size:12px;"> ${obj.privilege[1]} </span>
					</p>
					<p class="item-saled">
						${obj.evaluate[0]}  
						<span>
							<span class="spring spring-assess">
								<span class="spring spring-assess-highlight"></span>
							</span>
							<span style="padding: 0; padding-left: 20px;">${obj.evaluate[2]}</span>
							<a href="javascript:;">${obj.evaluate[3]}</a>
							<span style="padding: 0; padding-left: 20px;">${obj.evaluate[4]}</span>
							<a href="javascript:;">${obj.evaluate[5]}</a>
						</span>
					</p>
					<div class="item-property gg">
						<div class="item-property">
							<span class="property-name">${obj.lampblackMachine[0]}</span>
							<p class="input-group">
								<span class="property-value">${obj.lampblackMachine[1]}</span>
							</p>
						</div>
						<div class="item-property">
							<span class="property-name">${obj.cooker[0]}</span>
							<p class="input-group">
								<span class="property-value">${obj.cooker[1]}</span>
							</p>
							<p class="input-group">
								<span class="property-value" style="border: 1px solid #cccccc;color: #333;">${obj.cooker[2]}</span>
							</p>
						</div>
					</div>
					<div class="item-property">
						<span class="property-name">${obj.saleNum[0]}</span>
						<p class="input-group" style="width: 200px">
							<span class="property-number cut" data-type="cut" ></span>
							<input class="proNum" id="number" type="text" value="${obj.saleNum[1]}">
							<span class="property-number add" data-type="add" ></span>
						</p>
					</div>
					<p class="item-area" style="white-space: nowrap;">
						${obj.p1}
						<a style="color: #9D1D22; margin-left: 0px;text-decoration: underline;" href="http://www.efotile.com/messagedetail/_code/A-03/id/101.html" target="_blank">${obj.invoice}</a>
					</p>
					<p class="item-area">${obj.p2}</p>
					<p class="item-area" style="white-space: nowrap;">${obj.p3}</p>
					<div class="divider"></div>
					<div class="item-btn clearfix">
                        <input type="button" value="${obj.add}" class="btn-cart" id="BtnAddCar">
                        <a class="fav faved" data-type="2" data-id="685"><span class="txt">${obj.collection}</span></a>
                    </div>
				</div>
			</div>`
	$('#detail').html(str);
	var index=0;
	$('.item>img').each(function(i,val){
		$(this).prop('index',i);
	});
	$('.item>img').click(function(){
		index=$(this).prop('index');
		$('.zoomPad>img').prop('src',$('.item>img').eq(index).prop('src'));
		$('.zoomWrapperImage>img').prop('src',$('.item>img').eq(index).prop('src'));
	});
	$('.prev').click(function(){
		index--;
		if(index<0){
			index=$('.item>img').length-1;
		}
		$('.zoomPad>img').prop('src',$('.item>img').eq(index).prop('src'));
		$('.zoomWrapperImage>img').prop('src',$('.item>img').eq(index).prop('src'));
	});
	$('.next').click(function(){
		index++;
		if(index>$('.item>img').length-1){
			index=0;
		}
		$('.zoomPad>img').prop('src',$('.item>img').eq(index).prop('src'));
		$('.zoomWrapperImage>img').prop('src',$('.item>img').eq(index).prop('src'));
	});
	$('.zoomPad').mouseenter(function(){
		$('.zoomPup').show();
		$('.zoomWindow').show();
		return false;
	});
	$('.zoomPad').mouseleave(function(){
		$('.zoomPup').hide();
		$('.zoomWindow').hide();
	});
	$('.zoomPad').mousemove(function(e){
		var x=e.pageX-$('.zoomPad').offset().left-$('.zoomPup').width()/2;
		var y=e.pageY-$('.zoomPad').offset().top-$('.zoomPup').height()/2;
		if(x<0){
			x=0;
		}
		if(y<0){
			y=0;
		}
		if(x>$('.zoomPad').width()-$('.zoomPup').width()){
			x=$('.zoomPad').width()-$('.zoomPup').width();
		}
		if(y>$('.zoomPad').height()-$('.zoomPup').height()){
			y=$('.zoomPad').height()-$('.zoomPup').height();
		}
		$('.zoomPup').css('left',x);
		$('.zoomPup').css('top',y);
		var le=x/$('.zoomPad').width()*$('.zoomWrapperImage>img').width();
		var to=y/$('.zoomPad').height()*$('.zoomWrapperImage>img').height();
		$('.zoomWrapperImage>img').css('left',-le);
		$('.zoomWrapperImage>img').css('top',-to);
	});
	
	
	//商品数量的加减
	$('.cut').click(function(){
		var value=parseInt($('#number').val());
		value--;
		if(value<1){
			value=1;
		};
		$('#number').val(value);
	});
	$('.add').click(function(){
		var value=parseInt($('#number').val());
		value++;
		$('#number').val(value);
	});
	var sessionStorage=window.sessionStorage;
	var localStorage=window.localStorage;
	$('#BtnAddCar').click(function(){
		if(localStorage.username||sessionStorage.username){
			var table = localStorage.username? localStorage.username : sessionStorage.username;
			$.ajax({
				url:"./php/addcar.php",
				data:{
					id:obj.id,
					name:obj.title,
					img:obj.Bigimg,
					price:obj.pri[2],
					num:$('#number').val(),
					table:table
				},
				dataType:'json',
				success:function(res){
					if(res.code){
						window.location.href="shopcar.html";
					}else{
						console.log(res);
					}
				}
			});
		}else{
			alert("请先登录账号哦！");
		}
	})
