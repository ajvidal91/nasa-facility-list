// app token 4AzCY2cVhrbzrKO8ltUUIBPeq
// secret token  xVjqhpnNpIRYZr7uMm2h8J-k1yseuhJhHjVa

var facilityUrl = "https://data.nasa.gov/resource/9g7e-7hzz.json";
// var locationUrl = "https://data.nasa.gov/resource/9g7e-7hzz.json?$where=within_circle(location,%2047.59,%20-122.33,%201000)";
// //var $$app_token = "4AzCY2cVhrbzrKO8ltUUIBPeq";


var apiKey = "4AzCY2cVhrbzrKO8ltUUIBPeq";
var temp3= "";
// var location= [];
function getWeather(lat,lon){

  $.ajax({
    url: "http://api.openweathermap.org/data/2.5/weather?lat="+lat+"&lon="+lon+"&units=imperial&appid="+apiKey,
    success:function(r){
      var temp=r.main.temp;
      // var temp2= ((temp-273.15)*1.8)+32;//convert Kelvin to F ...still negative?!
      temp3="The temperature at this location is: "+temp + "F";
      console.log(temp3);
      //how to append the correct temp. to each location?
      $("#locationList").append("<li>" + temp3 + "</li>")
    },
    error:function(er){
      console.log(er);
    }
  })
};

$(document).ready(function(){
  $("button").on("click", function(e) {

    var apiURL = "https://data.nasa.gov/resource/9g7e-7hzz.json";//need NASA locations from this api
    $.ajax({            //ajax request
      url: apiURL, //url is a property of the object (r)
      success: function(r) { //success is a method, r is a parameter
        // console.log(r[0].center); // server response
        r.forEach(function(e){
          $("#facilityList").append("<li>" + e.center +"</li>"); //list locations
          // location = e.center; //make an array and assign the temp to each location using the index? using loops?
          getWeather(e.location.coordinates[0],e.location.coordinates[1]) //pulls out the latitude and longitude

        });

        },
      error: function(er) { //error is a method, er is a parameter
        console.log(er); //server response

      }

    });

  });

});








// function location(lat,lon){
//
//   $.ajax({
//     url: "",
//     success: function (r){
//       console.log(r)
//
//     },
//     error: function (error){
//       console.log(error)
//     }
//
//   })
// }
//
//
//
//
//
// $(document).ready(function(){
//   $("button").on("click", function(){
//
//   $.ajax({
//     url: facilityUrl ,
//     success: function (response){
//       console.log(response[0].center)
//       response.forEach(function(e){
//       $("#facilityList").append("<li>" + e.center + "</li>");
//
//         location()
//     })
//     },
//     error: function(err){
//       console.log(err)
//     }
//   })
//   });
// });
