document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('resume-form');
    const resumeContent = document.getElementById('resume-content');
    const copyLinkBtn = document.getElementById('copy-link-btn');
    const shareableLink = document.getElementById('shareable-link');
    const downloadBtn = document.getElementById('download-btn');
  
    // Handle form submission
    form.addEventListener('submit', function(event) {
      event.preventDefault(); // Prevent form from submitting normally
  
      // Collect form data
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const degree = document.getElementById('degree').value;
      const school = document.getElementById('school').value;
      const gradYear = document.getElementById('gradYear').value;
      const jobTitle = document.getElementById('jobTitle').value;
      const company = document.getElementById('company').value;
      const years = document.getElementById('years').value;
      const skills = document.getElementById('skills').value;
      const profilePicture = document.getElementById('profilepicture').files[0];
  
      // Generate resume content
      let resumeHTML = `
        <div class="resume-header">
          <h2>${name}</h2>
          <p>Email: ${email}</p>
        </div>
        <div class="resume-profile">
          ${profilePicture ? `<img src="${URL.createObjectURL(profilePicture)}" alt="${name}'s profile picture" />` : ''}
        </div>
        <div class="resume-education">
          <h3>Education</h3>
          <p>Degree: ${degree}</p>
          <p>School/University: ${school}</p>
          <p>Graduation Year: ${gradYear}</p>
        </div>
        <div class="resume-work">
          <h3>Work Experience</h3>
          <p>Job Title: ${jobTitle}</p>
          <p>Company: ${company}</p>
          <p>Years of Experience: ${years}</p>
        </div>
        <div class="resume-skills">
          <h3>Skills</h3>
          <p>${skills}</p>
        </div>
      `;
  
      // Display the resume content
      resumeContent.innerHTML = resumeHTML;
  
      // Create shareable link
      const uniqueId = Date.now(); // Simple unique ID based on current timestamp
      const baseUrl = window.location.href.split('?')[0]; // Get the base URL without query parameters
      const link = `${baseUrl}?resume=${uniqueId}`;
  
      shareableLink.href = link;
      shareableLink.style.display = 'block';
  
      // Handle copying the shareable link
      copyLinkBtn.addEventListener('click', function() {
        navigator.clipboard.writeText(link).then(() => {
          alert('Shareable link copied to clipboard!');
        }, (err) => {
          console.error('Failed to copy link: ', err);
        });
      });
  
      // Handle PDF download
      downloadBtn.addEventListener('click', function() {
        const element = document.getElementById('resume');
        const opt = {
          margin: 1,
          filename: 'resume.pdf',
          image: { type: 'jpeg', quality: 0.98 },
          html2canvas: { scale: 2 },
          jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
        };
        html2pdf().from(element).set(opt).save();
      });
    });
  });
  