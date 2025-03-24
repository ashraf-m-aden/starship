    // Get the div element
    const spaceship = document.getElementById("spaceship");

    // Initial position of the div
    let position = {
      top: 50, // Percentage of the height of the page
      left: 50 // Percentage of the width of the page
    };

    // Function to update the position of the div
    function updatePosition() {
      spaceship.style.top = position.top + "%";
      spaceship.style.left = position.left + "%";
    }

    // Event listener for keydown to move the div
    document.addEventListener("keydown", function(event) {
      // Determine which arrow key was pressed
      switch (event.key) {
        case "ArrowUp":
          position.top = Math.max(position.top - 1, 0); // Prevent moving off the top
          break;
        case "ArrowDown":
          position.top = Math.min(position.top + 1, 100); // Prevent moving off the bottom
          break;
        case "ArrowLeft":
          position.left = Math.max(position.left - 1, 0); // Prevent moving off the left
          break;
        case "ArrowRight":
          position.left = Math.min(position.left + 1, 100); // Prevent moving off the right
          break;
        default:
          return;
      }

      // Update the position of the div
      updatePosition();
    });