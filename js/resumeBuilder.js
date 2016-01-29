/*
 Each JSON object has a function inside. All functions are called at the very bottom of this page

 All JSON data is formatted first and then either prepended or appended to the index.html file with the new formatting from helper.js.
 for-in loops loop through the JSON object arrays and do the same steps.
 */
//created bio JSON object with information that will propagate the header
var bio = {
    "full": "Kevin Yang",
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
    "display": function() {
        //function propagates the head with the information from bio JSON object

        var formattedrole = HTMLheaderRole.replace("%data%", bio.role);
        $("#header").prepend(formattedrole);

        var formattedFirst = HTMLheaderName.replace("%data%", bio.full);
        $("#header").prepend(formattedFirst);
        //these two are in reverse prepend, so that they are above the contact items.

        var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
        $("#topContacts:last").append(formattedMobile);
        $("#footerContacts:last").append(formattedMobile);

        var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
        $("#topContacts:last").append(formattedEmail);
        $("#footerContacts:last").append(formattedEmail);

        //github and blog have replace twice to implement hyperlinking from helper.js
        var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
        formattedGithub = formattedGithub.replace("%data%", bio.contacts.github);
        $("#topContacts:last").append(formattedGithub);
        $("#footerContacts:last").append(formattedGithub);

        var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
        $("#topContacts:last").append(formattedLocation);
        $("#footerContacts:last").append(formattedLocation);

        var formattedBlog = HTMLblog.replace("%data%", bio.contacts.blog);
        formattedBlog = formattedBlog.replace("%data%", bio.contacts.blog);
        $("#topContacts:last").append(formattedBlog);
        $("#footerContacts:last").append(formattedBlog);

        var formattedWelcome = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
        $("#header").append(formattedWelcome);
        var formattedBiopic = HTMLbioPic.replace("%data%", bio.biopic);
        $("#header").append(formattedBiopic);

        //check to see that skills exist
        if (bio.skills.length > 0) {
            $("#header").append(HTMLskillsStart);
        }

        for (var info in bio.skills) {
            if (bio.skills.hasOwnProperty(info)) {
                var formattedSkills = HTMLskills.replace("%data%", bio.skills[info]);
                $("#skills-h3").append(formattedSkills);
            }
        }


    }

};


//education JSON object. Follows the same pattern listed above.
var education = {
    "schools": [{
        "name": "The University of Texas at Austin",
        "location": "Austin",
        "degree": "Bachelor of Arts",
        "majors": "East Asian Studies",
        "dates": "2012",
        "url": "http://www.utexas.edu"

    }, {
        "name": "National Cheng Chi University",
        "location": "Taipei, Taiwan",
        "degree": "Study Abroad",
        "majors": "N/A",
        "dates": "2010",
        "url": "http://www.nccu.edu"

    }, {
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
    "display": function() {

        for (var school in education.schools) {
            if (education.schools.hasOwnProperty(school)) {
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
        }

        //appended to education, so the placement is correct
        $("#education").append(HTMLonlineClasses);


        for (var courses in education.onlineCourses) {
            if (education.onlineCourses.hasOwnProperty(courses)) {
                $("#education").append(HTMLschoolStart);

                var formattedTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[courses].title) + HTMLonlineSchool.replace("%data%", education.onlineCourses[courses].school);
                formattedTitle = formattedTitle.replace("#", education.onlineCourses[courses].url);
                $(".education-entry:last").append(formattedTitle);

                var formattedDate = HTMLonlineDates.replace("%data%", education.onlineCourses[courses].date);
                $(".education-entry:last").append(formattedDate);

                var formattedUrl = HTMLonlineURL.replace("%data%", education.onlineCourses[courses].url);
                $(".education-entry:last").append(formattedUrl);

            }
        }
    }
};

//work JSON object, follows the same pattern as above.
var work = {
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
    }, {
        "employer": "Gloria English School",
        "title": "Foreign English Teacher",
        "location": "Taipei, Taiwan",
        "dates": "2012-2013",
        "description": "Taught English to all levels."
    }],
    "display": function() {
        $("#workExperience").append(HTMLworkStart);

        for (var job in work.jobs) {
            if (work.jobs.hasOwnProperty(job)) {
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
    }

};

//project JSON object, also follows the same general pattern.
var projects = {
    "projects": [{
        "title": "Online Portfolio",
        "url": "http://www.kevintyang.com/projectone",
        "dates": "2015",
        "description": "Personal Portfolio Website with a responsive layout. Built with Javascript, HTML, CSS, jQuery and Bootstrap",
        "images": ["images/projectone.png"]
    }],
    "display": function() {
        $("#projects").append(HTMLprojectStart);

        for (var project in projects.projects) {
            if (projects.projects.hasOwnProperty(project)) {
                var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
                formattedTitle = formattedTitle.replace("#", projects.projects[project].url);
                $(".project-entry:last").append(formattedTitle);

                var formattedDate = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
                $(".project-entry:last").append(formattedDate);

                var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
                $(".project-entry:last").append(formattedDescription);

                if (projects.projects[project].images.length > 0) {
                    for (var image in projects.projects[project].images) {
                        if (projects.projects[project].images.hasOwnProperty(image)) {
                            var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
                            $(".project-entry:last").append(formattedImage);
                        }
                    }
                }
            }
        }
    }
};




//calls functions from the above JSON objects to propagate itself on the index.html
bio.display();
work.display();
projects.display();
education.display();

//functions to append the map and name formatting button
$("#mapDiv").append(googleMap);
$("#main").append(internationalizeButton);