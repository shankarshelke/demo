<?php

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Method: GET, POST');

$target_dir = "assets/uploads/";
$url = $_SERVER['REQUEST URL'];
$parts = explode('/',$url);
$dir = "http://".$_SERVER['SERVER_NAME'];
for($i = 0;$i < count($parts) - 1;$i++){
    $dir = $parts[$i]."/";
}


$actual_link = "http://$_SERVER[HTTP_HOST]$_SERVER[REQUEST_URL]";
$target_file = $target_dir.basename($_FILES["selectFile"]["name"]);
$target_path = "assets/comprece/".basename($_FILES["selectFile"]["name"]);
$uploadOk = 1;

$imageFileType = pathinfo($target_file,PATHINFO_EXTENTION);

if (isset($_POST["submit"])) {
    $check = getimagesize($_FILES["selectFile"]["tmp_name"]);
    if($check !== false)
    {
        echo "File is an image -" .$check["name"]. ".";
        $uploadOk = 1;
    }
    else
    {
        echo "file is not an image";
        $uploadOk = 0;
    }
}

// if(file_exists($target_file))
// {
//     echo "Sorry File already exists.";
//     $uploadOk = 0;
// }

$collection = array();
if($uploadOk == 0)
{
    echo "Sorry, your file was not uploaded";
}
else{
    if(move_uploaded_file($_FILES["selectFile"] ["tmp_name"], $target_file))
    {
        // echo $dir. $target_file;
    }
    else
    {
        echo "Sorry, there wos an error uploading file";
    }
}

$info = getimagesize($target_file);
if ($info['mime'] == 'image/jpeg') {
$src =imagecreatefromjpeg($target_file);
}elseif($info['mime'] == 'image/png') {
    $src =imagecreatefrompng($target_file);
}else {
    $src =imagecreatefromgif($target_file);
}
list($width,$height) = getimagesize($target_file);

$newwidth = 200;
$newheight = ($height / $width) * $newwidth;
$tmp = imagecreatetruecolor($newwidth, $newheight);
// $tmp = imagecreate($newwidth, $newheight)

imagecopyresampled($tmp, $src, 0,0,0,0, $newwidth, $newheight, $width, $height);
    imagejpeg($tmp, $target_path, 100);

imagedestroy($src);
imagedestroy($tmp);


?>