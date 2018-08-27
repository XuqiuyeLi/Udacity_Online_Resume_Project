var bio = {
    "name": "Xuqiuye Li",
    "role": "Web Developer",
    "contacts": {
        "mobile": "646-732-7193",
        "email": "xl1029@nyu.edu",
        "github": "xuqiuyeli.github.io",
        "location": "New York"
    },
    "welcomeMessage": "Buon giorno!",
    "skills": ["Programming", "Drawing", "Chinese", "Italian", "Japanese"],
    "biopic": "images/me.jpg"
};
bio.display = function() {
    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    $("#header").prepend(formattedName,formattedRole);

    var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
    var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
    var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
    var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
    $("#topContacts").prepend(formattedLocation, formattedGithub, formattedEmail, formattedMobile);
    $("#footerContacts").append(formattedMobile, formattedEmail, formattedGithub, formattedLocation);

    var formattedBioPic = HTMLbioPic.replace("%data%", bio.biopic);
    var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
    $("#header").append(formattedBioPic, formattedWelcomeMsg);

    if(bio.skills.length>0){
      $("#header").append(HTMLskillsStart);
      for (var i = 0; i < bio.skills.length; i++) {
          var formattedSkill = HTMLskills.replace("%data%", bio.skills[i]);
          $("#skills").append(formattedSkill);
    }
  }
};

bio.display();

var education = {
    "schools": [{
            "name": "Roedean School",
            "location": "Brighton, UK",
            "degree": "High School",
            "majors": ["Mathematics, Economics and Japanese"],
            "dates": "2013"
        },
        {
            "name": "New York University",
            "location": "New York, US",
            "degree": "BA",
            "majors": ["Computer Science and Mathematics"],
            "dates": "2018"
        }
    ],
    "onlineCourses": [{
        "title": "Front-End nanodegree",
        "school": "Udacity",
        "dates": "2017",
        "url": "https://classroom.udacity.com/nanodegrees/nd001/syllabus/core-curriculum"
    }]
};

education.display = function() {
    $("#education").append(HTMLschoolStart);
    for (var i = 0; i < education.schools.length; i++) {
        $(".education-entry").append(HTMLschoolName.replace("%data%", education.schools[i].name) +
            HTMLschoolDegree.replace("%data%", education.schools[i].degree));
        $(".education-entry").append(HTMLschoolDates.replace("%data%", education.schools[i].dates));
        $(".education-entry").append(HTMLschoolLocation.replace("%data%", education.schools[i].location));
        for (var j = 0; j < education.schools[i].majors.length; j++) {
            $(".education-entry").append(HTMLschoolMajor.replace("%data%", education.schools[i].majors[j]));
        }
    }
    for (var k = 0; k < education.onlineCourses.length; k++) {
        $(".education-entry").append(HTMLonlineTitle.replace("%data%", education.onlineCourses[k].title) +
            HTMLonlineSchool.replace("%data%", education.onlineCourses[k].school));
        $(".education-entry").append(HTMLonlineDates.replace("%data%", education.onlineCourses[k].dates));
        $(".education-entry").append(HTMLonlineURL.replace("%data%", education.onlineCourses[k].url));
    }
};

education.display();

var work = {
    "jobs": [{
        "employer": "AYA WUU",
        "title": "Founder & CEO",
        "location": "Beijing & New York",
        "dates": "2016-2017",
        "description": "AYA WUU is an online fashion platform to promote student fashion designers' collections."
    }]
};

work.display = function() {
    $("#workExperience").append(HTMLworkStart);
    for (var i = 0; i < work.jobs.length; i++) {
        $(".work-entry:last").append(HTMLworkEmployer.replace("%data%", work.jobs[i].employer) +
            HTMLworkTitle.replace("%data%", work.jobs[i].title));
        $(".work-entry:last").append(HTMLworkDates.replace("%data%", work.jobs[i].dates));
        $(".work-entry:last").append(HTMLworkLocation.replace("%data%", work.jobs[i].location));
        $(".work-entry:last").append(HTMLworkDescription.replace("%data%", work.jobs[i].description));
    }
};

work.display();

var projects = {
    "projects": [{
        "title": "Yoshitoma Nara - Artist Portfolio",
        "dates": "2017 August",
        "description": "Japanese Contemporary Artist",
        "images": ["images/1.png", "images/2.png"]
    }]
};

projects.display = function() {
    $("#projects").append(HTMLprojectStart);
    for (var i = 0; i < projects.projects.length; i++) {
        $(".project-entry:last").append(HTMLprojectTitle.replace("%data%", projects.projects[i].title));
        $(".project-entry:last").append(HTMLprojectDates.replace("%data%", projects.projects[i].dates));
        $(".project-entry:last").append(HTMLprojectDescription.replace("%data%", projects.projects[i].description));
        for (var j = 0; j < projects.projects[i].images.length; j++) {
            $(".project-entry:last").append(HTMLprojectImage.replace("%data%", projects.projects[i].images[j]));
        }
    }
};

projects.display();

$("#mapDiv").append(googleMap);
