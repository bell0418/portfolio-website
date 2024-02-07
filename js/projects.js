/*
 * projectsArray contains project data for four different projects.
 * Data for each project includes a title, description, completion date, technology used, and an image.
 */
const projectsArray = [
    {
        "title": "Database Application",
       
        "description": "Developed a back-end SQL Server database that connects to a front-end Access application that is end-user friendly and allows for dynamic insertions, deletions, and updates to the database.",
		
		"completion": "October 22nd, 2023",
		
		"technology": "SQL, SQL Server, Access",
		
		"image": "images/DBapplication.png"
    },
    {
        "title": "Patient Health Application",
       
        "description": "Developed a program which takes in patient information, calculates patient health data (BMI, max heart rate, etc.), and displays it to the user.",
		
		"completion": "October 15th, 2023",
		
		"technology": "Java, EclipseIDE",
		
		"image": "images/HealthApp.png"
    },
    {
        "title": "Bookstore Database",
       
        "description": "Developed a relational database for a book store which shelves book based on category. Number of copies in stock, cost, author, and publisher are all recorded.",
		
		"completion": "June 17th, 2023",
		
		"technology": "SQL, MySQL",
		
		"image": "images/DBbookstore.png"
    },
    {
        "title": "Payroll Application",
       
        "description": "Developed a program which takes in employee information, calculates bi-weekly pay, and returns payroll information for each employee.",
		
		"completion": "November 12th, 2023",
		
		"technology": "Java, EclipseIDE",
		
		"image": "images/MillersApp.png"
    }
];

// index is used to track which array element should be accessed.
var index = 0;

/* 
 * getProject uses the starting index of 0 to retreive data from projectsArray at 0
 * and places the data inside the innerHTML of corresponding divs.
 */
function getProject() {
	
	var title = projectsArray[index].title;
	var description = projectsArray[index].description;
	var completion = projectsArray[index].completion;
	var technology = projectsArray[index].technology;
	var image = projectsArray[index].image;
	
	document.getElementById('project-title').innerHTML = title;
	document.getElementById('project-description').innerHTML = description;
	document.getElementById('project-completion').innerHTML = completion;
	document.getElementById('project-tech').innerHTML = technology;
	document.getElementById('image').src=image;
}

/* 
 * forwardProject increments the array index, changing the data based on the array element
 * and placing the data inside the innerHTML of corresponding divs. 
 */
function forwardProject() {
	
	index++;
	
	// if the array index is greater than 3, set the index to 0.
	if(index > 3) {
		index = 0;
	}
	
	var title = projectsArray[index].title;
	var description = projectsArray[index].description;
	var completion = projectsArray[index].completion;
	var technology = projectsArray[index].technology;
	var image = projectsArray[index].image;
	
	document.getElementById('project-title').innerHTML = title;
	document.getElementById('project-description').innerHTML = description;
	document.getElementById('project-completion').innerHTML = completion;
	document.getElementById('project-tech').innerHTML = technology;
	document.getElementById('image').src=image;
}

/* 
 * backProject decrements the array index, changing the data based on the array element
 * and placing the data inside the innerHTML of corresponding divs. 
 */
function backProject() {
	
	index--;
	
	// if the array index is less than 0, set the index to 3.
	if(index < 0) {
		index = 3;
	}
	
	var title = projectsArray[index].title;
	var description = projectsArray[index].description;
	var completion = projectsArray[index].completion;
	var technology = projectsArray[index].technology;
	var image = projectsArray[index].image;
	
	document.getElementById('project-title').innerHTML = title;
	document.getElementById('project-description').innerHTML = description;
	document.getElementById('project-completion').innerHTML = completion;
	document.getElementById('project-tech').innerHTML = technology;
	document.getElementById('image').src=image;
}

// On window load call getProject function.
window.onload = getProject;

// On button click call backProject function.
document.getElementById('back-btn').addEventListener('click', backProject);

// On button click call forwardProject function.
document.getElementById('forward-btn').addEventListener('click', forwardProject);