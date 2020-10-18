<?php
header('content-type:text/html;charset=utf-8;');
$conn=mysqli_connect('localhost','root','root','users');

//书写sql语句
$username = $_REQUEST['username'];
$password = $_REQUEST['password'];
/*$username="18870760838";
$password="xfw19980821";*/
$result=mysqli_query($conn,"SELECT * FROM `info` WHERE `username`='$username' AND `password`='$password'");
$row=mysqli_fetch_all($result,MYSQLI_ASSOC);
//执行sql语句
if($row){	
	echo json_encode(array("code"=>1));
}else{	
	echo json_encode(array("code"=>0));
}
mysqli_close($conn);

?>