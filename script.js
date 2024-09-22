
async function fetchData() {
  const response = await fetch("./data.json");
  data = await response.json();

  //////////////////////////////////// DOM manipulation ////////////////////////////////////////////////////

  // Profile Section
  nam1 = document.getElementById("name1");
  nam2 = document.getElementById("name2");
  nam1.innerHTML = data.name;
  nam2.innerHTML = data.name;

  role1 = document.getElementById("role1");
  role2 = document.getElementById("role2");
  role1.innerHTML = data.role;
  role2.innerHTML = data.role;

  about = document.getElementById("about-data");
  about.innerHTML = data.about;

  email = document.getElementById("city");
  email.innerHTML = data.city;

  age = document.getElementById("age");
  age.innerHTML = data.age;

  gender = document.getElementById("gender");
  gender.innerHTML = data.gender;

  ///////////// CV DOwnload /////////////////
  download = document.getElementById("cv-download");
  // on click download
  download.onclick = () => {
    window.open("./assets/cv.pdf");
  };

  // Skills Section //////////////////////////////////////////////
  // web skills
  webSkills = document.getElementById("web-skills");

  data["web-skills"].forEach((skill) => {
    const skillDiv = document.createElement("div");
    skillDiv.classList.add("progress-wrapper");
    skillDiv.innerHTML = `<span class="caption">${skill.name}</span>
    <div class="progress" style="height:1.4rem">
    <div class="progress-bar" role="progressbar" style="width: ${skill.level}% ; background-color:rgb(185,27,27)" aria-valuenow="${skill.level}" aria-valuemin="0" aria-valuemax="100">
    ${skill.level}%
    </div>
    </div>`;
    webSkills.appendChild(skillDiv);
  });
  // ML skills
  mlSkills = document.getElementById("ml-skills");

  data["ml-skills"].forEach((skill) => {
    const skillDiv = document.createElement("div");
    skillDiv.classList.add("progress-wrapper");
    skillDiv.innerHTML = `<span class="caption">${skill.name}</span>
        <div class="progress" style="height:1.4rem">
    <div class="progress-bar" role="progressbar" style="width: ${skill.level}% ; background-color:rgb(185,27,27)" aria-valuenow="${skill.level}" aria-valuemin="0" aria-valuemax="100">
    ${skill.level}%
    </div>
    </div>`;
    mlSkills.appendChild(skillDiv);
  });

  // Education Section //////////////////////////////////////////////

  education = document.getElementById("education");
  data["education"].forEach((edu) => {
    const eduDiv = document.createElement("div");
    eduDiv.classList.add("timeline");
    eduDiv.innerHTML = `<li>
    <div class="title">${edu.year}</div>
    <div class="details">
    <h5>${edu.degree}</h5>
    <small>${edu.school}</small>
    <p>${edu.grade}</p>
    </div>
    </li>`;
    education.appendChild(eduDiv);
  });

  // Experience Section //////////////////////////////////////////////

  experience = document.getElementById("experience");
  data["experience"].forEach((exp) => {
    const expDiv = document.createElement("div");
    expDiv.classList.add("timeline");
    expDiv.innerHTML = `<li>
    <div class="title">${exp.year}</div>
    <div class="details">
    <h5>${exp.title}</h5>
    <small>${exp.company}</small>
    <p>${exp.description}</p>
    </div>
    </li>`;
    experience.appendChild(expDiv);
  });

  // Projects Section //////////////////////////////////////////////

  projects = document.getElementById("projects");

  data["projects"].forEach((project) => {
    const projectDiv = document.createElement("div");
    projectDiv.classList.add("col-md-6", "col-lg-4", "wow", "fadeInUp");
    projectDiv.innerHTML = `<div class="card">
        <div class="img-place">
        <img src=${project.imageUrl} alt="">
        </div>
        <div class="caption">
        <a href="javascript:void(0)" class="post-category"></a>
        <a href="#" class="post-title">${project.name}</a>
        <span class="post-date"><span class="sr-only">Published on</span> May 22, 2024</span>
        </div>
    </div>`;
    projects.appendChild(projectDiv);
  });

  /// Email form ///
  const form = document.getElementById("contact-form");

  form.onsubmit = (e) => {
    e.preventDefault();
    // set inputs to null
    form.reset();
    alert("Email Sent Successfully");
  };

  // contact /////
  contacts = document.getElementById("contact-info");
  Object.entries(data.contact).forEach(([key, value]) => {
    const contactDiv = document.createElement("li");
    contactDiv.innerHTML = `<a href="#">${value}</a>`;
    contacts.appendChild(contactDiv);
  });

  // Footer Section //////////////////////////////////////////////

  address = document.getElementById("address");
  address.innerHTML = data.contact.address;

  // socials /////
  socials = document.getElementById("socials");
  data.socials.forEach((social) => {
    const socialDiv = document.createElement("li");
    socialDiv.innerHTML = `<a href="${social.url}">${social.name}</a>`;
    socials.appendChild(socialDiv);
  });

}

window.onload = fetchData;