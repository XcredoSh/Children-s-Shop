<?php
   
   $products = [
   	[
   		"value"=> "val_1",
		"imgPath"=> "<img  src= 'new/eee.jpg ' width='222' height='256' "
   	],
   	[
   		"value"=> "val_2",
		"imgPath"=> "<img  src= 'new/log3.jpg ' width='222' height='256' "
   	]
   ];

$count = count($products);
$but_1 = $_POST['but_1'];
$but_2 = $_POST['but_2'];


for($i = 0; $i < $count; $i++){
	if($but_1 == $products[$i]['value']){
		echo '<div class="container">';
		    echo '<div class="col-md-3 col-sm-6 col-xs-12">';
		        echo '<div class="col-md-12 content-images">';
                  echo '<img>' . $products[$i]['imgPath'] . '</img><br><br><br>';
		          echo '<p class="tovar-name">' . "Lorem ipsum dolor sit amet, consectetur ".  '</p><br>';
		          echo '<h4>'."225 000 som ". "" .'<span class="glyphicon glyphicon-stats"></span>' .'</h4><br>';
		        echo '</div>';
		    echo '</div>';
		echo '</div>';
	};
};

for($i = 0; $i < $count; $i++){
	if($but_2 == $products[$i]['value']){
		echo '<div class="container">';
		    echo '<div class="col-md-3 col-sm-6 col-xs-12">';
		        echo '<div class="col-md-12 content-images">';
                  echo '<img>' . $products[$i]['imgPath'] . '</img><br><br><br>';
		          echo '<p class="tovar-name">' . "Lorem ipsum dolor sit amet, consectetur ".  '</p><br>';
		          echo '<h4>'."225 000 som ". "" .'<span class="glyphicon glyphicon-stats"></span>' .'</h4><br>';
		        echo '</div>';
		    echo '</div>';
		echo '</div>';
	};
};



// for($i = 0; $i < $count; $i++){
// 	if($but_2 == $products[$i]['value']){
// 		echo '<div class="container">';
// 		    echo '<div class="col-md-3 col-sm-6 col-xs-12">';
// 		        echo '<div class="col-md-12 content-images">';
//                   echo '<img>' . $products[$i]['imgPath'] . '</img><br><br><br>';
// 		          echo '<p class="tovar-name">' . "Lorem ipsum dolor sit amet, consectetur ".  '</p><br>';
// 		          echo '<h4>'."225 000 som ". "" .'<span class="glyphicon glyphicon-stats"></span>' .'</h4><br>';
// 		        echo '</div>';
// 		    echo '</div>';
// 		echo '</div>';
// 	};
// };

// $option = $_POST['fname'];
  // echo date('H:i:s');
// var $arr = {
// 	"payments":[
// 	{
// 		"id":"19",
// 	"child_id":"21",
// 	"club":"Breakfast Club",
// 	"term":"Half Term 3",
// 	"amount":"15.00",
// 	"pdate":"2015-02-25",
// 	"notes":"",
// 	"created_at":"2015-02-11 12:16:32",
// 	"updated_at":"2015-02-11 12:16:32",
// 	"starting_debt":"0",
// 	"debt_start_date":"2015-01-05"},
// 	{
// 		"id":"20",
// 	"child_id":"21",
// 	"club":"After School Club",
// 	"term":"Half Term 3",
// 	"amount":"11.50",
// 	"pdate":"2015-02-25",
// 	"notes":"",
// 	"created_at":"2015-02-11 12:16:49",
// 	"updated_at":"2015-02-11 12:16:49",
// 	"starting_debt":"0",
// 	"debt_start_date":"2015-01-05"}
// ]
// };

?>