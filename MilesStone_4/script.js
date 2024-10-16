// Function to handle form submission
function handleFormSubmit(event) {
    event.preventDefault();
  
    var nameElement = document.getElementById("name");
    var emailElement = document.getElementById("email");
    var phoneElement = document.getElementById("phone");
    var educationElement = document.getElementById("education");
    var experienceElement = document.getElementById("experience");
    var skillsElement = document.getElementById("skills");
    var profilePictureElement = document.getElementById("profilepicture");
  
    if (!nameElement || !emailElement || !phoneElement || !educationElement || !experienceElement || !skillsElement) {
        console.error("One or more elements are missing");
        return;
    }
  
    var name = nameElement.value;
    var email = emailElement.value;
    var phone = phoneElement.value;
    var education = educationElement.value;
    var experience = experienceElement.value;
    var skills = skillsElement.value;
  
    var profilePictureURL = '';
    if (profilePictureElement.files && profilePictureElement.files[0]) {
        profilePictureURL = URL.createObjectURL(profilePictureElement.files[0]);
    }
  
    var resumeOutput = `
        <h2>Resume</h2>
        ${profilePictureURL ? `<div><img src="${profilePictureURL}" alt="${name}'s Profile Picture" style="max-width: 150px; border-radius: 50%;" /></div>` : ''}
        <p><strong>Name:</strong> <span class="editable" id="editName">${name}</span></p>
        <p><strong>Email:</strong> <span class="editable" id="editEmail">${email}</span></p>
        <p><strong>Phone:</strong> <span class="editable" id="editPhone">${phone}</span></p>
    
        <h3>Education</h3>
        <p class="editable" id="editEducation">${education}</p>
    
        <h3>Experience</h3>
        <p class="editable" id="editExperience">${experience}</p>
    
        <h3>Skills</h3>
        <p class="editable" id="editSkills">${skills}</p>
    `;
  
    var resumeOutputElement = document.getElementById("resumeOutput");
    if (resumeOutputElement) {
        resumeOutputElement.innerHTML = resumeOutput;
    } else {
        console.error("The resume output element is missing");
    }
  }
  
  // Function to handle toggling between Edit and Save modes
  function toggleEditMode() {
    var editButton = document.getElementById("editButton");
    if (!editButton) return;
  
    var editableElements = document.querySelectorAll(".editable");
  
    if (editButton.textContent === "Edit") {
        // Switch to edit mode
        editableElements.forEach(function(element) {
            if (element instanceof HTMLElement) {
                element.contentEditable = "true";
                element.classList.add("editing");
            }
        });
        editButton.textContent = "Save";
    } else {
        // Switch to save mode
        editableElements.forEach(function(element) {
            if (element instanceof HTMLElement) {
                element.contentEditable = "false";
                element.classList.remove("editing");
            }
        });
        editButton.textContent = "Edit";
    }
  }
  
  // Attach event listeners only once
  function attachEventListeners() {
    var formElement = document.getElementById("resumeForm");
    var editButton = document.getElementById("editButton");
  
    if (formElement) {
        formElement.addEventListener("submit", handleFormSubmit);
    }
  
    if (editButton) {
        editButton.addEventListener("click", toggleEditMode);
    }
  }
  
  // Initialize the script
  attachEventListeners();