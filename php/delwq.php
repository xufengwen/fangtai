<?php
header('content-type:text/html;charset=utf-8;');
$conn=mysqli_connect('localhost','root','root','shopcar');
$id = $_REQUEST['id'];
$ta = $_REQUEST['table'];
$table="cart".$ta;
//根据id删除数据
$sql = "DELETE FROM `$table` WHERE `product_id`=$id";
$result = mysqli_query($conn,$sql);
if($result){
	echo json_encode(array("code"=>1));
}else{
	echo json_encode(array("code"=>0));
}

?>