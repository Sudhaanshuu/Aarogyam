function scheduleMeeting() {
    var meetingName = document.getElementById("meetingName").value;
    var meetingId = document.getElementById("meetingId").value;
    var meetingTime = document.getElementById("meetingTime").value;

    if (meetingName && meetingId && meetingTime) {
        var meetingList = document.getElementById("meetingList");

        // Create a new meeting item
        var meetingItem = document.createElement("div");
        meetingItem.className = "meeting-item";

        // Display meeting details
        meetingItem.innerHTML = `<strong>${meetingName}</strong><br><strong>${meetingId}</strong><br>${new Date(meetingTime).toLocaleString()}`;

        // Add the meeting item to the list
        meetingList.appendChild(meetingItem);

        // Clear input fields
        document.getElementById("meetingName").value = "";
        document.getElementById("meetingTime").value = "";
        document.getElementById("meetingId").value = "";
    } else {
        alert("Please enter meeting details.");
    }
}