<?php
header('content-type:text/html;charset=utf-8;');
$conn=mysqli_connect('localhost','root','root','shopcar');

$id = $_REQUEST['id'];
$type = $_REQUEST['type'];
$ta = $_REQUEST['table'];
$table="cart".$ta;

$sql = "SELECT * FROM `$table` WHERE `product_id`='$id'";
$res = mysqli_query($conn,$sql);
$row = mysqli_fetch_assoc($res);
$num = $row['product_num'];
if($type=='add'){	
	$num = $num+1;
	$sql = "UPDATE `$table` SET `product_num`='$num' WHERE `product_id`='$id'";
}else{
	$num = $num-1;
	if($num>0){
		$sql = "UPDATE `$table` SET `product_num`='$num' WHERE `product_id`='$id'";
	}
}

$result = mysqli_query($conn,$sql);
if($result){
	echo json_encode(array("code"=>1));
}else{
	echo json_encode(array("code"=>0));
}
?>