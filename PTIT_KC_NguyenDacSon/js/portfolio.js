let heroInfo = {
    name: "Nguyễn Đắc Sơn",
    job: "freelance react developer",
    imgUrl: "https://picsum.photos/200/300",
};

let personalDetail = {
    name: "Nguyễn Đắc Sơn",
    dob: "21 August 2004",
    spokenLanguages: ["English", "France", "Vietnamese"],
    nationality: "Vietnam",
    interest: ["Music", "Reading", "Journey"],
    techs: [
      {
        id: 1,
        imgUrl: "https://i.postimg.cc/cHdfNH2Z/android.png",
        techName: "Android",
        exp: 2,
      },
      {
        id: 2,
        imgUrl: "https://i.postimg.cc/nrCjHQk8/Angular.png",
        techName: "Angular",
        exp: 1,
      },
      {
        id: 3,
        imgUrl: "https://i.postimg.cc/G3VJ4csP/bootstrap.png",
        techName: "Bootstrap",
        exp: 3,
      },
      {
        id: 4,
        imgUrl: "https://i.postimg.cc/dt91z6v7/vue.png",
        techName: "Vue",
        exp: 2,
      },
      {
        id: 5,
        imgUrl: "https://i.postimg.cc/XNdXg3zk/react.png",
        techName: "React",
        exp: 2 / 3,
      },
      {
        id: 6,
        imgUrl: "https://i.postimg.cc/PfgYt2B2/mongodb.png",
        techName: "Mongodb",
        exp: 0.25,
      },
      {
        id: 7,
        imgUrl: "https://i.postimg.cc/RZzFYYjx/laravel.png",
        techName: "Laravel",
        exp: 1,
      },
      {
        id: 8,
        imgUrl: "https://i.postimg.cc/X7N3ybSJ/nodejs-icon.png",
        techName: "Node.js",
        exp: 5 / 6,
      },
    ],
};
  
let projects = [
    {
      id: 1,
      imgUrl: "https://i.postimg.cc/nrCjHQk8/Angular.png",
      projectName: "Auto Drive Project",
      link: "https://abcd-example.com",
      tags: ["Angular", "React", "Jquery"],
    },
    {
      id: 2,
      imgUrl: "https://i.postimg.cc/G3VJ4csP/bootstrap.png",
      projectName: "Ecommerce Project",
      link: "https://abcd-example.com",
      tags: ["Bootstrap", "CSS", "Javascript"],
    },
    {
      id: 3,
      imgUrl: "https://i.postimg.cc/PfgYt2B2/mongodb.png",
      projectName: "Chat Application",
      link: "https://abcd-example.com",
      tags: ["MongoDB", "Javascript"],
    },
    {
      id: 4,
      imgUrl: "https://i.postimg.cc/dt91z6v7/vue.png",
      projectName: "Social Media Platform",
      link: "https://abcd-example.com",
      tags: ["Vue", "Javascript"],
    },
    {
      id: 5,
      imgUrl: "https://i.postimg.cc/XNdXg3zk/react.png",
      projectName: "Image Sharing Platform",
      link: "https://abcd-example.com",
      tags: ["React", "Javascript"],
    },
];

localStorage.setItem('heroInfo', JSON.stringify(heroInfo));
localStorage.setItem('personalDetail', JSON.stringify(personalDetail));
localStorage.setItem('projects', JSON.stringify(projects));

document.addEventListener("DOMContentLoaded", function() {
    let pushHeroInfo = JSON.parse(localStorage.getItem("heroInfo"));
    let pushPersonalDetail = JSON.parse(localStorage.getItem("personalDetail"));
    let pushProjects = JSON.parse(localStorage.getItem("projects"));

    function createProjectElement(project) {
        let projectDiv = document.createElement("div");
        projectDiv.innerHTML = `
            <div>
                <img src="${project.imgUrl}" alt="${project.projectName}">
                <h3>${project.projectName}</h3>
                <p>Tags: ${project.tags.join(", ")}</p>
                <a href="${project.link}" target="_blank">View Project</a>
            </div>
        `;
        return projectDiv;
    }

    document.getElementById("box1").innerHTML = `
        <h1>${pushHeroInfo.name}</h1>
        <p>Job: ${pushHeroInfo.job}</p>
        <img src="${pushHeroInfo.imgUrl}" alt="${pushHeroInfo.name}">
    `;

    let personalDetailHTML = `
    <div class="information">
    <div>Date of birth </div>
    <div>Spoken language </div>
    <div>Nationality</div>
    <div>Interest </div></div>
<div class="information">
    <div>:</div>
    <div>:</div>
    <div>:</div>
    <div>:</div>
</div>
<div class="infor">
    <div>${personalDetail.dob}</div>
    <div>${personalDetail.spokenLanguages}</div>
    <div>${personalDetail.nationality}</div>
    <div>${personalDetail.interest}</div>
</div>
    `;
    document.getElementById("small-box2").innerHTML = personalDetailHTML;

    let projectsDiv = document.getElementById("projects");
    pushProjects.forEach(project => {
        projectsDiv.appendChild(createProjectElement(project));
    });
});

