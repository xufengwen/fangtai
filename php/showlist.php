<?php
header('content-type:text/html;charset=utf-8;');
$conn=mysqli_connect('127.0.0.1','root','root','shopcar');

$ta = $_REQUEST['table'];
$table="cart".$ta;
//书写sql语句
$sql = "SELECT * FROM `$table`";

//执行sql语句
$result = mysqli_query($conn,$sql);
if(mysqli_num_rows($result)>0){	
	$arr = mysqli_fetch_all($result,MYSQL_ASSOC);
	echo json_encode(array("code"=>1,"data"=>$arr));
}else{	
	echo json_encode(array("code"=>0));
}


?>