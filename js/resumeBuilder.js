/*
 This is empty on purpose! Your code to build the resume will go here.
 */

var bio = {
    "first": "Kevin",
    "last": "Yang",
    "role": "Front End Developer",
    "contacts": {
        "mobile": "281-313-5248",
        "email": "yangkevint@gmail.com",
        "github": "YouKaiTheGreat",
        "location": "Houston, Texas + Seoul, South Korea",
        "blog": "http://www.kevintyang.com"
    },
    "welcomeMessage": "Welcome to my interactive resume!",
    "skills": ["Javascript", "HTML", "CSS", "Java", "Android Studio", "XML", "Adobe Photoshop", "Adobe Illustrator", "Git", "Photography"],
    "biopic": "images/profilepic.jpg",
    "display": function () {


        var formattedrole = HTMLheaderRole.replace("%data%", bio.role);
        $("#header").prepend(formattedrole);

        var formattedFirst = HTMLheaderName.replace("%data%", bio.first);
        $("#header").prepend(formattedFirst);


        var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
        $("#topContacts:last").append(formattedMobile);

        var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
        $("#topContacts:last").append(formattedEmail);

        //github and blog have replace twice to implement hyperlinking from helper.js
        var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
        formattedGithub = formattedGithub.replace("%data%", bio.contacts.github);
        $("#topContacts:last").append(formattedGithub);

        var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
        $("#topContacts:last").append(formattedLocation);

        var formattedBlog = HTMLblog.replace("%data%", bio.contacts.blog);
        formattedBlog = formattedBlog.replace("%data%", bio.contacts.blog);
        $("#topContacts:last").append(formattedBlog);

        var formattedWelcome = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
        $("#header").append(formattedWelcome);
        var formattedBiopic = HTMLbioPic.replace("%data%", bio.biopic);
        $("#header").append(formattedBiopic);

        if (bio.skills.length > 0) {
            $("#header").append(HTMLskillsStart);
        }

        for (info in bio.skills) {
            var formattedSkills = HTMLskills.replace("%data%", bio.skills[info]);
            $("#skills-h3").append(formattedSkills);
        }


    }

};


var education =
{
    "schools": [{
        "name": "The University of Texas at Austin",
        "location": "Austin",
        "degree": "Bachelor of Arts",
        "majors": "East Asian Studies",
        "dates": "2012",
        "url": "http://www.utexas.edu"

    },
        {
            "name": "National Cheng Chi University",
            "location": "Taipei, Taiwan",
            "degree": "Study Abroad",
            "majors": "N/A",
            "dates": "2010",
            "url": "http://www.nccu.edu"

        },
        {
            "name": "Sophia University",
            "location": "Tokyo, Japan",
            "degree": "Study Abroad",
            "majors": "East Asian Studies",
            "dates": "2011",
            "url": "http://www.sophia.ac.jp/eng"

        }],
    "onlineCourses": [{
        "title": "Udacity Front End Development Nanodegree",
        "school": "Udacity",
        "date": "2015",
        "url": "http://www.udacity.com"
    }],
    "display": function () {


        for (school in education.schools) {
            $("#education").append(HTMLschoolStart);
            var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[school].name);
            formattedSchoolName = formattedSchoolName.replace("#", education.schools[school].url);
            var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
            $(".education-entry:last").append(formattedSchoolName + formattedSchoolDegree);


            var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
            $(".education-entry:last").append(formattedSchoolLocation);


            var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
            $(".education-entry:last").append(formattedSchoolDates);


            var formattedSchoolMajors = HTMLschoolMajor.replace("%data%", education.schools[school].majors);
            $(".education-entry:last").append(formattedSchoolMajors);


        }
        $("#education").append(HTMLonlineClasses);


        for (courses in education.onlineCourses) {
            $("#education").append(HTMLschoolStart);
            var formattedTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[courses].title) + HTMLonlineSchool.replace("%data%", education.onlineCourses[courses].school);
            formattedTitle = formattedTitle.replace("#",education.onlineCourses[courses].url);
            $(".education-entry:last").append(formattedTitle);
            var formattedDate = HTMLonlineDates.replace("%data%", education.onlineCourses[courses].date);
            $(".education-entry:last").append(formattedDate);
            var formattedUrl = HTMLonlineURL.replace("%data%", education.onlineCourses[courses].url);
            $(".education-entry:last").append(formattedUrl);
        }
    }
};


var work =
{
    "jobs": [{
        "employer": "Chungdahm Institute",
        "title": "Head Instructor",
        "location": "Incheon, South Korea",
        "dates": "2014",
        "description": "Head Instructor English Teacher for Advanced Young Learners. Utilized smart technology in the classroom with tablets and virtual textbooks."
    }, {
        "employer": "DISYS - ExxonMobile",
        "title": "Desktop Migration Tech II",
        "location": "Houston, Texas",
        "dates": "temp. Contract 2014",
        "description": "Physical migration of desktop computers between locations."
    },
        {
            "employer": "Gloria English School",
            "title": "Foreign English Teacher",
            "location": "Taipei, Taiwan",
            "dates": "2012-2013",
            "description": "Taught English to all levels."
        }
    ],
    "display": function () {
        $("#workExperience").append(HTMLworkStart);

        for (job in work.jobs) {

            var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
            var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
            var formattedEmployerTitle = formattedEmployer + formattedTitle;

            $(".work-entry:last").append(formattedEmployerTitle);

            var formattedWorkLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
            $(".work-entry:last").append(formattedWorkLocation);

            var formattedWorkDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
            $(".work-entry:last").append(formattedWorkDates);

            var formattedWorkDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
            $(".work-entry:last").append(formattedWorkDescription);
        }
    }

};


var projects =
{
    "projects": [{
        "title": "Online Portfolio",
        "url":"http://www.kevintyang.com/projectone",
        "dates": "2015",
        "description": "Personal Portfolio Website with a responsive layout. Built with Javascript, HTML, CSS, jQuery and Bootstrap",
        "images": ["images/projectone.png"]
    }],
    "display": function () {
        $("#projects").append(HTMLprojectStart);

        for (project in projects.projects) {

            var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
            formattedTitle = formattedTitle.replace("#",projects.projects[project].url);
            $(".project-entry:last").append(formattedTitle);

            var formattedDate = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
            $(".project-entry:last").append(formattedDate);

            var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
            $(".project-entry:last").append(formattedDescription);

            if (projects.projects[project].images.length > 0) {
                for (image in projects.projects[project].images) {
                    var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images);
                    $(".project-entry:last").append(formattedImage)
                }
            }
        }
    }
};


bio.display();
work.display();
projects.display();
education.display();

