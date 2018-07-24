<?php

<header>'Access-Control-Allow-Origin: *'</header>;
<<header>'Access-Control-Allow-Method: GET, POST'</header>;

$target_dir = "uploads/";
$url = $_SERVER['REQUEST URL'];
$parts = explode('/',$url);
$dir = "http://".$_SERVER['SERVER_NAME'];

for($i = 0;$i < count($parts) - 1;$i++){
    $dir = $parts[$i]."/";
}

$actual_link = "http://$_SERVER[HTTP_HOST]$_SERVER[REQUEST_URL]";
$target_file = $target_dir . basename($_FILES["selectFile"]["name"]);
$uploadOk = 1;

$imageFileType = pathinfo($target_file,PATHINFO_EXTENTION);

if (isset($_POST["submit"])) {
    $check = getimagesize($_FILES["selectefFile"]["tmp_name"]);
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

if(file_exists($target_file))
{
    echo "Sorry File already exists.";
    $uploadOk = 0;
}

if($uploadOk == 0)
{
    echo "Sorry, your file was not uploaded";
}
else{
    if(move_uploaded_file($_FILES["selectedFile"] ["tmp_name"], $target_file))
    {
        echo $dir. $target_file;
    }
    else
    {
        echo "Sorry, there wos an error uploading file"
    }
}
?>