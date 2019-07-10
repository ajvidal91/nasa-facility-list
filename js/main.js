$(document).ready(function(){
  $("button").on("click", function(e) {
      e.preventDefault();

      let city = document.getElementById('city-name').value;
      let country = document.getElementById('country-name').value;
      let errorAlert = document.getElementById("alert");
      let temp;
      let convertedTemp;
      let facilityUrl = "https://data.nasa.gov/resource/9g7e-7hzz.json";
      let weatherUrl = "http://api.openweathermap.org/data/2.5/weather?q=";
      let apiKey = "0a7b14f5147f5d66e663155b0d5d8bcf";
      // let  apiKey = "4AzCY2cVhrbzrKO8ltUUIBPeq";
    function getWeather () {
        $.ajax({
          url: weatherUrl+city+","+country+"&appid="+apiKey,
          success:function(res){
             temp = res.main.temp;
            function convert(){
               convertedTemp = temp * 9 / 5 - 459.67;
                 // errorAlert.innerText = "Here is the weather you desire:" + convertedTemp;
            }
            convert();
            if (country === "") {
                errorAlert.innerText = "Please fill in the correct fields";
            } else {
                errorAlert.innerText = "Here is the weather you desire:" + convertedTemp;
            }
          },
          error:function(err){
            console.log("something went wrong");
          }
        })
    }
    let apiURL = "https://data.nasa.gov/resource/9g7e-7hzz.json";//need NASA locations from this api
    $.ajax({            //ajax request
      url: apiURL, //url is a property of the object (r)
      success: function(response) { //success is a method, r is a parameter
        // console.log(r[0].center); // server response
        response.forEach(function(e){
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
