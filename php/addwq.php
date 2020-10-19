<?php
header('content-type:text/html;charset=utf-8;');
$conn=mysqli_connect('127.0.0.1','root','root','users');

//书写sql语句
$username = $_REQUEST['username'];
$password = $_REQUEST['password'];
/*$username="1887076083";
$password="xfw1998082";*/
//根据前端参数插入数据
$sql = "SELECT * FROM `info` WHERE `username`='$username'";
$res = mysqli_query($conn,$sql);
$rows = mysqli_num_rows($res);//mysqli_num_rows方法是统计查询结果有几行
if($rows>0){
	echo json_encode(array("code"=>0));
}else{
	$sql = "INSERT INTO `info` (`username`,`password`) VALUES ('$username','$password')";
	$result = mysqli_query($conn,$sql);
if($result){
	echo json_encode(array("code"=>1));
}else{
	echo json_encode(array("code"=>2));
};
}



?>