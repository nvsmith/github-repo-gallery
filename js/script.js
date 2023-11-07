// Location where profile info will appear
const overview = document.querySelector(".overview");

// GitHub username
const username = "nvsmith";

// Begin communication with the API or hosted file.
const gitUserInfo = async function () {
    const userInfo = await fetch(`https://api.github.com/users/${username}`);
    // Parse response as JSON or text.
    const data = await userInfo.json();

    // Call functions dependent on fetched data below this line.
    displayUserInfo(data);
};

gitUserInfo();

const displayUserInfo = function (data) {
    const userInfo = document.createElement("div");
    userInfo.classList.add("user-info");
    userInfo.innerHTML = `
    <figure>
      <img alt="user avatar" src=${data.avatar_url} />
    </figure>
    <div>
      <p><strong>Name:</strong> ${data.name}</p>
      <p><strong>Bio:</strong> ${data.bio}</p>
      <p><strong>Location:</strong> ${data.location}</p>
      <p><strong>Number of public repos:</strong> ${data.public_repos}</p>
    </div>
    `;

    overview.append(userInfo);
};
