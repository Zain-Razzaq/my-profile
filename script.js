// data  ///////////////////////////////////////////////////////////////
const data = {
  name: "Zain Razzaq",
  role: "Full Stack Developer",
  age: 20,
  gender: "Male",
  city: "Lahore, Pakistan",
  email: "zainrazzaq20003@gmail.com",
  socials: [
    {
      name: "Github",
      url: "fndylan",
    },
    {
      name: "Linkedin",
      url: "fndylan",
    },
    {
      name: "Instagram",
      url: "fndylan",
    },
  ],
  about:
    "A highly motivated and organized learner with strong problem-solving abilities and excellent analytical, decision-making and organizational skills. Seeking an opportunity to join a progressive organization where I can apply my skills and continue to develope my programming expertise while contributing to the growth of the company.",
  experience: [
    {
      title: "Research Intern",
      company: "Inteligent Machines Lab, ITU",
      year: "2024-Current",
      description:
        "As aresearch intern at IML Lab, I am working on a project related to 3D reconstruction using gaussian and deep learning techniques.",
    },
    {
      title: "Teaching Assistant",
      company: "Information Technology University, Lahore",
      year: "2022-Current",
      description:
        "As an Undergraduate Teaching Assistant at ITU Lahore, I manage labs, create assignments, and evaluate students for Programming Fundamentals, Object-Oriented Programming and database courses",
    },
    {
      title: "Web Developer Intern",
      company: "Arbisoft",
      year: "2023",
      description:
        "As a Frontend Intern at Arbisoft Lahore, I’m gaining hands-on experience in HTML, CSS, JavaScript, ReactJS, Material UI, and Tailwind across various projects under expert guidance.",
    },
  ],
  education: [
    {
      degree: "Bachelor of Science in Computer Science",
      school: "Information Technology University, Lahore",
      year: "2021-Current",
      grade: " CGPA: 3.5/4.0",
    },
    {
      degree: "FSc Pre-Engineering",
      school: "KIPS College, Lahore",
      year: "2019-2021",
      grade: "Marks : 1044/1100",
    },
    {
      degree: "Matriculation",
      school: "L.D.A Model High School, Lahore",
      year: "2017-2019",
      grade: "Marks : 1031/1100",
    },
  ],
  "web-skills": [
    {
      name: "HTML",
      level: 90,
    },
    {
      name: "CSS",
      level: 80,
    },
    {
      name: "JavaScript",
      level: 90,
    },
    {
      name: "React",
      level: 80,
    },
    {
      name: "Node.js",
      level: 70,
    },
    {
      name: "Express",
      level: 70,
    },
    {
      name: "MongoDB",
      level: 60,
    },
  ],
  "ml-skills": [
    {
      name: "Python",
      level: 90,
    },
    {
      name: "TensorFlow",
      level: 80,
    },
    {
      name: "Keras",
      level: 70,
    },
    {
      name: "Scikit-learn",
      level: 70,
    },
    {
      name: "Pandas",
      level: 60,
    },
  ],
  projects: [
    {
      name: "Youtube clone",
      techStack: ["React", "Node.js", "Express", "MongoDB"],
      imageUrl: "./img/pro.jpg",
    },
    {
      name: "Ecommerce website",
      techStack: ["React", "Node.js", "Express", "MongoDB"],
      imageUrl: "./img/pro.jpg",
    },
    {
      name: "BlogTide",
      techStack: ["React", "Node.js", "Express", "MongoDB"],
      imageUrl: "./img/pro.jpg",
    },
  ],
  contact: {
    address: "Lahore, Pakistan",
    phone: "+923000000000",
    email: "zainrazzaq2003@gmail.com",
  },
};

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
  socialDiv.innerHTML = `<a href="#">${social.name}</a>`;
  socials.appendChild(socialDiv);
});
