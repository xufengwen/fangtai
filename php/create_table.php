<?php
header('content-type:text/html;charset=utf-8;');
$conn=mysqli_connect('localhost','root','root','shopcar');

$ta = $_REQUEST['table'];
$table="cart".$ta;
//书写sql语句
$sql = "CREATE TABLE ".$table." (
			product_id VARCHAR(300) NOT NULL PRIMARY KEY,
			product_name VARCHAR(300) NOT NULL,
			product_img VARCHAR(300) NOT NULL,
			product_price VARCHAR(30) NOT NULL,
			product_num VARCHAR(30) NOT NULL,
			submission_date TIMESTAMP	
)";
$result = mysqli_query($conn,$sql);
if($result){
	echo json_encode(array("code"=>1));
}else{
	echo json_encode(array("code"=>0));
}

?>