document.addEventListener("DOMContentLoaded", fetchData);

function fetchData() {
  fetch("profile-cards.json") //  fetch the JSON file
    .then((response) => response.json())
    .then((userData) => {
      displayProfileCards(userData);
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
    });
}

function displayProfileCards(profiles) {
  const profileContainer = document.getElementById("profile-cards");

  profiles.forEach((profile) => {
    const profileDetails = document.createElement("div");
    profileDetails.classList.add("col");

    const profileImg = document.createElement("img");
    profileImg.src = `${profile.imageUrl}`;
    profileImg.width = 200;
    profileImg.className = "rounded-pill";
    profileDetails.appendChild(profileImg);

    const cardname = document.createElement("h5");
    cardname.textContent = `Name: ${profile.name}`;
    profileDetails.appendChild(cardname);
    cardname.classList.add("card-title");

    const companyDiv = document.createElement("h6");
    companyDiv.textContent = `${profile.job} - ${profile.company}`;
    profileDetails.appendChild(companyDiv);

    const jobDetailsDiv = document.createElement("p");
    jobDetailsDiv.textContent = `Job Details: ${profile.jobDetails}`;
    profileDetails.appendChild(jobDetailsDiv);

    profileContainer.appendChild(profileDetails);
  });
}
