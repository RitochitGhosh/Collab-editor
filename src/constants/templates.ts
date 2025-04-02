export const templates = [
  {
    id: "blank",
    label: "Blank Document",
    imageUrl: "/blank-document.svg",
    initialContent: "",
  },
  {
    id: "software-proposal",
    label: "Software Development Proposal",
    imageUrl: "/software-proposal.svg",
    initialContent: `
      <h1>💻 Software Development Proposal</h1>
      <h2>📌 Project Overview</h2>
      <p>Brief description of the proposed software development project.</p>

      <h2>📋 Scope of Work</h2>
      <p>Detailed breakdown of the project deliverables and requirements.</p>

      <h2>⏳ Timeline</h2>
      <p>Project milestones and delivery schedule.</p>

      <h2>💰 Budget</h2>
      <p>Cost breakdown and payment terms.</p>    
    `
  },
  {
    id: "project-proposal",
    label: "Project Proposal",
    imageUrl: "/project-proposal.svg",
    initialContent: `
      <h1>📄 Project Proposal</h1>
      <h2>🎯 Objective</h2>
      <p>Clearly define the goals and purpose of the project.</p>
      
      <h2>🛠️ Scope</h2>
      <p>Details about what is included and excluded in this project.</p>
      
      <h2>⏰ Timeline</h2>
      <p>Estimated time for completion with key milestones.</p>
      
      <h2>📈 Expected Outcomes</h2>
      <p>Benefits and impact of this project.</p>
    `
  },
  {
    id: "business-letter",
    label: "Business Letter",
    imageUrl: "/business-letter.svg",
    initialContent: `
      <h1>🏢 Business Letter</h1>
      <p>[Your Name] <br> [Your Address] <br> [City, State, ZIP Code] <br> [Your Email] <br> [Date]</p>
      
      <p>[Recipient's Name] <br> [Recipient's Position] <br> [Company Name] <br> [Company Address]</p>
      
      <h2>📜 Subject: [Your Subject Here]</h2>
      <p>Dear [Recipient's Name],</p>
      <p>[Start with a polite introduction and purpose of the letter.]</p>
      <p>[Main content with key details and information.]</p>
      <p>Sincerely,<br>[Your Name]</p>
    `
  },
  {
    id: "resume",
    label: "Resume",
    imageUrl: "/resume.svg",
    initialContent: `
      <h1>📄 Resume</h1>
      <h2>👤 Personal Information</h2>
      <p>Name: [Your Name] <br> Email: [Your Email] <br> Phone: [Your Number]</p>
      
      <h2>🎓 Education</h2>
      <p>[Degree] - [University/College] - [Year]</p>
      
      <h2>💼 Work Experience</h2>
      <p>[Job Title] - [Company Name] - [Years]</p>
      
      <h2>🛠️ Skills</h2>
      <p>[List of relevant skills]</p>
    `
  },
  {
    id: "cover-letter",
    label: "Cover Letter",
    imageUrl: "/cover-letter.svg",
    initialContent: `
      <h1>✉️ Cover Letter</h1>
      <p>[Your Name] <br> [Your Address] <br> [City, State, ZIP Code] <br> [Your Email] <br> [Date]</p>
      
      <p>[Hiring Manager's Name] <br> [Company Name] <br> [Company Address]</p>
      
      <h2>📜 Subject: Application for [Job Title]</h2>
      <p>Dear [Hiring Manager's Name],</p>
      <p>[Introduce yourself and express enthusiasm for the job opportunity.]</p>
      <p>[Highlight your skills, experience, and why you're a great fit.]</p>
      <p>Looking forward to discussing my application further.</p>
      <p>Sincerely,<br>[Your Name]</p>
    `
  },
  {
    id: "letter",
    label: "Letter",
    imageUrl: "/letter.svg",
    initialContent: `
      <h1>✉️ Formal Letter</h1>
      <p>[Your Name] <br> [Your Address] <br> [City, State, ZIP Code] <br> [Your Email] <br> [Date]</p>
      
      <p>[Recipient's Name] <br> [Recipient's Address]</p>
      
      <p>Dear [Recipient's Name],</p>
      <p>[Start with a polite introduction.]</p>
      <p>[Main content and purpose of the letter.]</p>
      <p>[Closing remarks and call to action.]</p>
      <p>Sincerely,<br>[Your Name]</p>
    `
  },
  {
  id: "college-assignment",
  label: "Assignment Index Page",
  imageUrl: "/assignment.svg",
  initialContent: `
    <h2 style="line-height: normal; text-align: center">
      <span style="font-size: 29px; font-family: Times New Roman"><strong><u>Maulana Abul Kalam Azad University of Technology, West Bengal</u></strong></span>
    </h2>
    <p style="line-height: normal; text-align: center"></p>
    <p style="line-height: normal"></p>
    <p style="line-height: normal; text-align: right"></p>

    <img src="/main-img.jpeg" alt="College Main Image" style="height: auto; cursor: pointer; margin: 0px auto; width: 580px;" width="80%" draggable="true">

    <p style="line-height: normal"></p>

    <h3 style="line-height: normal"><span style="font-family: Georgia">Name: </span><span style="font-family: Georgia; color: rgb(0, 86, 179)">Ritochit Ghosh</span></h3>
    <h3 style="line-height: normal"><span style="font-family: Georgia">Course: </span><span style="font-family: Georgia">BTECH - CSE</span></h3>
    <h3 style="line-height: normal"><span style="font-family: Georgia">Semester: </span><span style="font-family: Georgia">3rd</span></h3>
    <h3 style="line-height: normal"><span style="font-family: Georgia">Registration No: </span><span style="font-family: Georgia">231000110270</span></h3>
    <h3 style="line-height: normal"><span style="font-family: Georgia">Roll No: </span><span style="font-family: Georgia">10000123026</span></h3>
    <h3 style="line-height: normal"><span style="font-family: Georgia">Subject: </span><span style="font-family: Georgia">Workshop/ Manufacturing Practices (ES-ME 291)</span></h3>

    <p style="line-height: normal"></p>
    <p style="line-height: normal"></p>
    <p style="line-height: normal"></p>

    <p style="line-height: normal">                                                                                                                    ________________________</p>
    <p style="line-height: normal">                                                                                                                       <span style="font-family: Arial"><strong>Teacher’s Signature</strong></span></p>
  `
}
  
];