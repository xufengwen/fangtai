<?php
header('content-type:text/html;charset=utf8');
$conn = mysqli_connect('127.0.0.1','root','root','users');

//书写sql语句
$sql = "CREATE TABLE info (
			id VARCHAR(30) NOT NULL PRIMARY KEY,
			username VARCHAR(30) NOT NULL,
			password VARCHAR(30) NOT NULL	
)";
$result = mysqli_query($conn,$sql);
if($result){
	echo "数据表创建成功";
}else{
	echo "数据表创建失败";
}

?>