function toggleSidebar() {
    const sidebar = document.getElementById("sidebar");
    sidebar.classList.toggle("active");
  }
  // Function to show the popup and automatically hide it after 3 seconds
  function showPopup() {
    // Display popup and overlay
    document.getElementById("popup").style.display = "block";
    document.getElementById("overlay").style.display = "block";
    // Hide popup after 3 seconds
    setTimeout(hidePopup, 2000);
  }

  // Function to hide the popup
  function hidePopup() {
    document.getElementById("popup").style.display = "none";
    document.getElementById("overlay").style.display = "none";
  }