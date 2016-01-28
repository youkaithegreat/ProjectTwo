/*
 This is empty on purpose! Your code to build the resume will go here.
 */

var bio = {


        "first": "Kevin",
        "role": "Front End Developer",
        "contacts": {
            "mobile": "281-313-5248",
            "email": "yangkevint@gmail.com",
            "github": "http://www.github.com/youkaithegreat",
            "location": "Houston, Texas + Seoul, South Korea"
        },
        "welcomeMessage": "Hi!",
        "skills": ["Javascript", "HTML", "CSS", "Java", "Android Studio", "XML", "Adobe Creative Suite", "Photography"],
        "biopic": "http://www.kevintyang.com"



};

//"display": function () {       }


var education =
    {
        "schools": {
            "name": "The University of Texas at Austin",
            "location": "Austin",
            "degree": "Bachelor of Arts",
            "majors": "East Asian Studies",
            "dates": "2012",
            "url": "http://www.utexas.edu"

        },
        "onlineCourses": {
            "title": "Udacity Front End Development Nanodegree",
            "school": "Udacity",
            "date": "2015",
            "url": "http://www.udacity.com"
        }

    };


var work =
    {
        "jobs": [{
            "employer": "Chungdahm Institute",
            "title": "Head Instructor",
            "location": "Seoul, South Korea",
            "dates": "2014",
            "description": "Head Instructor English Teacher for Advanced Young Learners. Utilized smart technology in the classroom with tablets and virtual textbooks."
        },
            {
                "employer": "Chungdahm Institute",
                "title": "Head Instructor",
                "location": "Seoul, South Korea",
                "dates": "2014",
                "description": "Head Instructor English Teacher for Advanced Young Learners. Utilized smart technology in the classroom with tablets and virtual textbooks."
            }
        ]


    };


var projects =

    {
        "projects": [{
            "title": "Online Portfolio",
            "dates": "2015",
            "description": "Personal Portfolio Website with a responsive layout. Built with Javascript, HTML, CSS, jQuery and Bootstrap",
            "images": "null"
        }]
    };

projects.display = function(){
    for(project in projects.projects){
        $("#projects").append(HTMLprojectStart);

        var formattedTitle = HTMLprojectTitle.replace("%data%",projects.projects[project].title);
        $(".project-entry:last").append(formattedTitle);

        var formattedDate = HTMLprojectDates.replace("%data%",projects.projects[project].date);
        $(".project-entry:last").append(formattedDate);

        var formattedDescription = HTMLprojectDescription.replace("%data%",projects.projects[project].description);
        $(".project-entry:last").append(formattedDescription);

        if(projects.projects[project].images.length > 0){
            for(image in projects.projects[project].images){
                var formattedImage = HTMLprojectImage.replace("%data", projects.projects[project].images);
                $(".project-entry:last").append(formattedImage)
            }
        }
    }
};



work.display = function(){
    for(job in work.jobs){
        $("#workExperience").append(HTMLworkStart);

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
};

projects.display();
work.display();
