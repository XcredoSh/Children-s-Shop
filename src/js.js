

/* */

$(document).ready(function(){
   // $("html").load(function(){
   //  $(".pageload").html("<img src='loading.gif'>");
   //  $(".pageload").addClass("newload");
   // });
});

 $("#btn").on('click', function(){

    $.ajax({
        method: "POST",
        url: "php/index.php",
        data: {
            but_1: $('#btn').val(),
            but_2: $('#btn2').val()           
        },
        success: function(html){
          var sos = $('#sos').html(html);
        } 
    });
    return false;
});

/*----------------------------------------------------------------------------------*/
/*----------------------------------------------------------------------------------*/

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 60 || document.documentElement.scrollTop > 60) {
        document.getElementById("rood").style.top = "0";
        document.getElementById("rood").style.position = "fixed";
    } else {
        document.getElementById("rood").style.top = "0";
        document.getElementById("rood").style.position = "relative";
    }
    
};

/*----------------------------------------------------------------------------------*/
/*----------------------------------------------------------------------------------*/

function scrollToping(){
	window.scrollTo({
	top: 1,
	behavior: "smooth"
});
};

/*---------------------------------------------------------------------------------*/
/*----------------------------------------------------------------------------------*/

$('#btn').on('click', function(){
  // $('#btn').removeClass("sent-button");
  $('#btn').addClass("animate");
  $('#btn > p').addClass("animate_p");
 

});


/*----------------------------------------------------------------------------------*/
/*----------------------------------------------------------------------------------*/

$("html").niceScroll({cursorwidth: '8px',cursorcolor:"#222222" , 
    cursorborder:"1px solid #FFF" , autohidemode: false, zindex: 9999 });

$(document).ready(function(){
    $(document).mousemove(function(event){
        $("#no").text("X: " + event.pageX + ", Y: " + event.pageY);
    });
});






// let val = "John and anna love";
// let consol = val.toLowerCase();
// console.log(consol);

// var arr = [1,2,3,4,7];
// arr.push(5);
// arr.push(6);
// console.log(arr.pop());
// console.log(arr);

/*----------------------------------------------------------------------------------*/
/*----------------------------------------------------------------------------------*/

/*var car = {
  color: "red",
  event: ["black", "blue", "yellow"]
};
delete car.event;
console.log(car.event, car.color);*/

/*----------------------------------------------------------------------------------*/
/*----------------------------------------------------------------------------------*/





/*----------------------------------------------------------------------------------*/
/*----------------------------------------------------------------------------------*/

// var jurnal = 
// [
//   {event: ["work", "pizza"], squirrel: false},
//   {event: ["work", "drink"], squirrel: false},
//   {event: ["wekked", "break"], squirrel: true},
// ];
// console.log(jurnal);
// console.log(typeof jurnal);

// function muBtn(){
//   for (var i =0; i < jurnal.length; i++) {
//     document.getElementById('root').innerHTML += jurnal.length + " </br> ";
    
//   }
//  }

/*----------------------------------------------------------------------------------*/
/*----------------------------------------------------------------------------------*/

// var string = JSON.srtingify({squirrel: false, events:["weeked"]});
// console.log(JSON.parse(string).events);

/*let list = {
  value: 1, res:{value: 2, rest: {value: 3, rest: null}}
};
console.log(list);
console.log(typeof list);*/

/*function wrap(n){
  let local = n;
  return () => local;
}

let wrap1 = wrap(10);
console.log(wrap1());*/


/*----------------------------------------------------------------------------------*/
/*----------------------------------------------------------------------------------*/


        // $(document).ready(function(){
        //   var text;
          
        //   $(".sent-button").click(function(){
        //          $.ajax({   
        //             url:"http://.//file.php",
        //             method:"POST",
        //             data:{ operation_1: text_1},
        //             success: function(response ){
        //               $('.demo').html(response);
                             
        //             }
        //          });
                 
        //     return false;
        //   });
        // });

/*var names = ['ozod', 'kamol', 'shahzod'];

var change = names.map( function(index) {
  return index.toUpperCase();
});
console.log(change);*/
module.exports.sos = sos;