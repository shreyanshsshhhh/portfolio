let popup = document.getElementById('popup');
popup.addEventListener('click', showPopup);

let closeButton = document.getElementById('closeButton');
closeButton.addEventListener('click', closePopup);

function addRecommendation() {
    
    // Get the message of the new recommendation
    let recommendation = document.getElementById("new_recommendation");
    // If the user has left a recommendation, display a pop-up
    if (recommendation.value != null && recommendation.value.trim() != "") {
      console.log("New recommendation added");
      //Call showPopup here
      
      // Create a new 'recommendation' element and set it's value to the user's message
      var element = document.createElement("div");
      element.setAttribute("class","recommendation");
      element.innerHTML = "\<span\>&#8220;\</span\>" + recommendation.value + "\<span\>&#8221;\</span\>";
      // Add this element to the end of the list of recommendations
      document.getElementById("all_recommendations").appendChild(element); 
      
      document.getElementById('popup').style.visibility = 'visible'
      // Reset the value of the textarea
      recommendation.value = "";
    }
  }

  
  
  function showPopup() {
    document.getElementById('popup').style.visibility = 'visible'
  }

  function closePopup() {
    document.getElementById('popup').style.visibility = 'hidden'
  }