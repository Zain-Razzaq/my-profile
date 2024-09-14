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
      company: "Inteligence Machines Lab, ITU",
      year: "2024-Current",
      description:
        "Worked on the Google Search team to improve the search experience for users. Built new features and improved the performance of the search engine.",
    },
    {
      title: "Teachning Assistant",
      company: "Information Technology University, Lahore",
      year: "2022-Current",
      description:
        "Worked on the Facebook Messenger team to improve the messaging experience for users. Built new features and improved the performance of the messaging app.",
    },
    {
      title: "Web Developer Intern",
      company: "Arisoft",
      year: "2023",
      description:
        "Worked on the Facebook Messenger team to improve the messaging experience for users. Built new features and improved the performance of the messaging app.",
    },
  ],
  education: [
    {
      degree: "Bachelor of Science in Computer Science",
      school: "Information Technology University, Lahore",
      year: "2021-Current",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut purus nec odio.",
    },
    {
      degree: "FSc Pre-Engineering",
      school: "KIPS College, Lahore",
      year: "2019-2021",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut purus nec odio.",
    },
    {
      degree: "Matriculation",
      school: "L.D.A Model High School, Lahore",
      year: "2017-2019",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut purus nec odio.",
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
      name: "Project 1",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut purus nec odio.",
      techStack: ["React", "Node.js", "Express", "MongoDB"],
      url: "dsfsdf",
    },
    {
      name: "Project 2",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut purus nec odio.",
      techStack: ["React", "Node.js", "Express", "MongoDB"],
      url: "dsfsdf",
    },
    {
      name: "Project 3",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut purus nec odio.",
      techStack: ["React", "Node.js", "Express", "MongoDB"],
      url: "dsfsdf",
    },
  ],
  contact: {
    email: "zainrazzaq2003@gmail.com",
    phone: "123",
    address: "123 abc street, Lahore, Pakistan",
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
    <div class="progress">
    <div class="progress-bar bg-danger" role="progressbar" style="width: ${skill.level}%" aria-valuenow="${skill.level}" aria-valuemin="0" aria-valuemax="100">
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
    <div class="progress">
    <div class="progress-bar bg-danger" role="progressbar" style="width: ${skill.level}%" aria-valuenow="${skill.level}" aria-valuemin="0" aria-valuemax="100">
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
    <p>${edu.description}</p>
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
