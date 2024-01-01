function showDoctors() {
    let city = document.getElementById("city").value;
    let text = "";

    switch (city.toLowerCase()) {
        case "delhi":
            text = `
          <h4>Delhi</h4>
          <p>Dr. Sanjay Gupta</p>
          <p>Dr. Pankaj Mathur</p>
          <p>Dr. Anjali Dutta</p>`;
            break;

        case "mumbai":
            text = `
          <h4>Mumbai</h4> 
          <p>Dr. Rohan Shah</p>
          <p>Dr. Anuja Joshi</p>
          <p>Dr. Sriram Iyer</p>
        `;
            break;

        default:
            text = `<p>No doctors found for ${city}</p>`;
    }

    document.getElementById("doctorsList").innerHTML = text;

    // Get city input
    // Switch case

    setTimeout(() => {
        document.getElementById("doctorsList")
            .classList.add("animate");
    });

}