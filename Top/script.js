  // Get references to all clickable elements
  const clickableElements = document.querySelectorAll(".clickable");

  // Add a click event listener to each element
  clickableElements.forEach(function (element) {
    element.addEventListener("click", function () {
      // Remove the 'bordered' class from all elements
      clickableElements.forEach(function (otherElement) {
        otherElement.classList.remove("border1");
      });

      // Add the 'bordered' class to the clicked element
      element.classList.add("border1");
    });
  });