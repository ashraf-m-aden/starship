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
          position.top = Math.max(position.top - 3, 0); // Prevent moving off the top
          break;
        case "ArrowDown":
          position.top = Math.min(position.top + 3, 100); // Prevent moving off the bottom
          break;
        case "ArrowLeft":
          position.left = Math.max(position.left - 3, 0); // Prevent moving off the left
          break;
        case "ArrowRight":
          position.left = Math.min(position.left + 3, 100); // Prevent moving off the right
          break;
        default:
          return;
      }

      // Update the position of the div
      updatePosition();
    });


        // Function to create a new asteroid and animate it
        function createAsteroid() {
            // Create a new div element
            const asteroid = document.createElement('div');
            asteroid.classList.add('asteroid');
      
            // Set random horizontal position (left) within the viewport width
            const leftPosition = Math.random() * (window.innerWidth - 50); // Subtracting 50 to keep it within the screen
            asteroid.style.left = `${leftPosition}px`;
            
            // Set initial top position to be off-screen (above the viewport)
            asteroid.style.top = `-50px`; // Start 50px above the top of the screen
      
            // Append the asteroid to the body
            document.body.appendChild(asteroid);
      
            // Animate the asteroid moving down
            let topPosition = -50; // Start from above the screen
            const speed = 1+ Math.random() * 3; // Random speed between 2 and 5 pixels per frame
      
            function moveAsteroid() {
              // Increase top position to make the asteroid move down
              topPosition += speed;
      
              // Update the asteroid's top position
              asteroid.style.top = `${topPosition}px`;
      
              // If the asteroid has moved past the bottom of the screen, remove it
              if (topPosition > window.innerHeight) {
                asteroid.remove();
              } else {
                // Keep animating
                requestAnimationFrame(moveAsteroid);
              }
            }
      
            // Start the movement
            moveAsteroid();
          }
      
          // Create a new asteroid every 1 to 3 seconds
          setInterval(createAsteroid, Math.random() * 2000 + 1000); // Between 1 and 3 seconds
        