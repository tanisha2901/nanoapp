// script.js

document.addEventListener("DOMContentLoaded", function () {
  var healthForm = document.getElementById("healthForm");

  if (healthForm) {
    healthForm.addEventListener("submit", function (event) {
      event.preventDefault();

      // Retrieve form data
      var name = document.getElementById("name").value;

      // Store the name in sessionStorage for later use
      sessionStorage.setItem("userName", name);

      // Redirect to the device_connection.html page
      window.location.href = "device_connection.html";
    });
  }

  // Code for device_connection.html
  var deviceConnectionPage = document.getElementById("devicesList");
  var connectButton = document.getElementById("connectButton");

  if (deviceConnectionPage) {
    // Personalize greeting with the stored name
    var userNameElement = document.getElementById("userName");
    var storedUserName = sessionStorage.getItem("userName");
    if (userNameElement && storedUserName) {
      userNameElement.textContent = storedUserName;
    }

    // Placeholder content for Bluetooth devices list
    var devicesList = ["Device 1", "Device 2", "Device 3"];

    // Display the list in the container
    var devicesListHTML = "";

    if (devicesList.length > 0) {
      devicesListHTML += "<ul>";
      devicesList.forEach(function (device) {
        devicesListHTML += "<li>" + device + "</li>";
      });
      devicesListHTML += "</ul>";
    } else {
      devicesListHTML += "<p>No devices found.</p>";
    }

    deviceConnectionPage.innerHTML = devicesListHTML;

    // Connect button click event
    connectButton.addEventListener("click", function () {
      // Redirect to the connected page
      window.location.href = "connected.html";
    });
  }
});
// script.js

document.addEventListener("DOMContentLoaded", function () {
  // Function to get the list of Bluetooth devices
  function getBluetoothDevices() {
    // Placeholder content for Bluetooth devices list
    var devicesList = ["Mi", "Honor", "Apple"]; // Replace with actual device list

    // Display the list in the container
    var devicesListContainer = document.getElementById('devicesList');
    devicesListContainer.innerHTML = "";

    if (devicesList.length > 0) {
      devicesList.forEach(function (device) {
        var listItem = document.createElement('li');
        listItem.textContent = device;
        devicesListContainer.appendChild(listItem);
      });
    } else {
      var listItem = document.createElement('li');
      listItem.textContent = "No devices found.";
      devicesListContainer.appendChild(listItem);
    }
  }

  // Call the function to populate the Bluetooth devices list
  getBluetoothDevices();
});
