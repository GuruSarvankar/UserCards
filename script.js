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
    profileDetails.classList.add("col-md-3", "col-sm-12", "col-xs-12");
    profileDetails.classList.add("shadow-lg", "p-3", "rounded");

    const profileImg = document.createElement("img");
    profileImg.src = `${profile.imageUrl}`;
    //profileImg.width = 200;
    profileImg.className = "rounded img-fluid";
    profileDetails.appendChild(profileImg);

    const userName = document.createElement("h5");
    userName.textContent = `${profile.name}`;
    profileDetails.appendChild(userName);
    userName.classList.add("card-title", "py-4");

    const userCompanyName = document.createElement("h6");
    userCompanyName.textContent = `${profile.job} - ${profile.company}`;
    profileDetails.appendChild(userCompanyName);
    userCompanyName.classList.add("pb-3");

    const jobDetails = document.createElement("p");
    jobDetails.textContent = `${profile.jobDetails}`;
    profileDetails.appendChild(jobDetails);

    profileContainer.appendChild(profileDetails);
  });
}
