const PDFDocument = require('pdfkit');
const fs = require('fs');

// Create a document
const doc = new PDFDocument({
  size: 'A4',
  margins: {
    top: 50,
    bottom: 50,
    left: 50,
    right: 50
  }
});

// Pipe its output to a file
doc.pipe(fs.createWriteStream('public/cv-theodorus.pdf'));

// Colors
const primaryColor = '#047857'; // Emerald 700
const textColor = '#1e293b'; // Slate 800
const subTextColor = '#475569'; // Slate 600

// Title
doc.fillColor(textColor)
   .fontSize(20)
   .font('Helvetica-Bold')
   .text('Theodorus Fidelis Samangun (21 y.o)', { align: 'center' });

doc.moveDown(0.2);

doc.fontSize(11)
   .font('Helvetica')
   .fillColor(subTextColor)
   .text('Informatics Engineering student & Web Developer Enthusiast', { align: 'center' });

doc.moveDown(0.4);

// Contact Info
doc.fontSize(8.5)
   .fillColor(subTextColor)
   .text('Bali, Indonesia  |  Phone: 081236032077  |  Email: theosamangun468@gmail.com', { align: 'center' });
doc.text('Github: https://github.com/ozekun', { align: 'center' });

doc.moveDown(0.8);

// Draw line
doc.strokeColor('#cbd5e1')
   .lineWidth(1)
   .moveTo(50, doc.y)
   .lineTo(545, doc.y)
   .stroke();

doc.moveDown(1);

// Helper function to draw section header
function addSectionHeader(title) {
  doc.fillColor(primaryColor)
     .fontSize(11)
     .font('Helvetica-Bold')
     .text(title.toUpperCase(), { characterSpacing: 1 });
  
  doc.moveDown(0.2);
  doc.strokeColor('#e2e8f0')
     .lineWidth(0.5)
     .moveTo(50, doc.y)
     .lineTo(545, doc.y)
     .stroke();
  
  doc.moveDown(0.4);
}

// PROFILE
addSectionHeader('PROFILE');
doc.fillColor(textColor)
   .fontSize(9)
   .font('Helvetica')
   .text('A 5th-semester Informatics Engineering student at Institut Bisnis dan Teknologi Indonesia (INSTIKI) with a 3.86 GPA. Highly passionate about web development and data analysis. Proficient in utilizing PHP and JAVA across various academic projects. Currently seeking a Web Developer or Mobile Developer internship opportunity to apply academic knowledge and technical skills in a real-world industry environment.', { align: 'justify', lineGap: 2 });

doc.moveDown(1.2);

// EDUCATION
addSectionHeader('EDUCATION');
doc.fillColor(textColor)
   .fontSize(9.5)
   .font('Helvetica-Bold')
   .text('INSTITUT BISNIS DAN TEKNOLOGI INDONESIA (INSTIKI)');
doc.fontSize(9)
   .font('Helvetica')
   .fillColor(subTextColor)
   .text('Bachelor of Informatics - Currently in 5th Semester GPA [3.86]');

doc.moveDown(1.2);

// PROJECT EXPERIENCES
addSectionHeader('PROJECT EXPERIENCES');

// Project 1
doc.fillColor(textColor)
   .fontSize(9.5)
   .font('Helvetica-Bold')
   .text('Web-Based Family Tree & Community Portal (One Family)');
doc.fontSize(8.5)
   .font('Helvetica-Oblique')
   .fillColor(subTextColor)
   .text('Project Creator (20 July 2026 - 30 July 2026)');
doc.moveDown(0.2);

doc.font('Helvetica')
   .fillColor(textColor)
   .fontSize(8.5)
   .list([
     'Developed and deployed a dynamic full-stack web application using ReactJS and Firebase to manage family member records with full CRUD capabilities.',
     'Structured NoSQL document schemas in Cloud Firestore to model complex family tree relational data and enable real-time UI updates.',
     'Designed and built a highly responsive, component-driven User Interface (UI) in ReactJS, integrating GitHub for version control and deployment management.'
   ], { bulletRadius: 1.5, textIndent: 12, lineGap: 1.5 });

doc.moveDown(0.8);

// Project 2
doc.fillColor(textColor)
   .fontSize(9.5)
   .font('Helvetica-Bold')
   .text('Church Liturgy Graphics Controller (Teks Misa)');
doc.fontSize(8.5)
   .font('Helvetica-Oblique')
   .fillColor(subTextColor)
   .text('Project Creator (1 August 2026 - 9 August 2026)');
doc.moveDown(0.2);

doc.font('Helvetica')
   .fillColor(textColor)
   .fontSize(8.5)
   .list([
     'Developed a responsive web controller using Next.js and Supabase to streamline live liturgy text updates for church livestreams via SPX Graphics API.',
     'Implemented multi-user real-time state management to prevent operational editing conflicts during live mass broadcasts and automated 30-day historical data logs.',
     'Designed a dual-mode (Light/Dark) dashboard featuring real-time lyric previews, active connection status, and admin configuration controls using Tailwind CSS.'
   ], { bulletRadius: 1.5, textIndent: 12, lineGap: 1.5 });

doc.moveDown(1.2);

// ORGANIZATIONAL EXPERIENCES
addSectionHeader('ORGANIZATIONAL EXPERIENCES');

// Org 1
doc.fillColor(textColor)
   .fontSize(9.5)
   .font('Helvetica-Bold')
   .text('Information Technology Development Club (IDC) - TECHFEST Event Program Staff');
doc.fontSize(8.5)
   .font('Helvetica')
   .fillColor(subTextColor)
   .text('March 2025 - June 2025');
doc.moveDown(0.2);
doc.font('Helvetica')
   .fillColor(textColor)
   .fontSize(8.5)
   .list([
     'Served as the Person in Charge (PIC) to oversee overall event execution, team coordination, and stage operations.',
     'Formulated comprehensive event rundowns, speaker schedules, and contingency plans to ensure smooth event flow.'
   ], { bulletRadius: 1.5, textIndent: 12, lineGap: 1.5 });

doc.moveDown(0.8);

// Org 2
doc.fillColor(textColor)
   .fontSize(9.5)
   .font('Helvetica-Bold')
   .text('KOMSOS SANAMARI - Gianyar, Bali, Indonesia');
doc.fontSize(8.5)
   .font('Helvetica')
   .fillColor(subTextColor)
   .text('September 2021 - Now');
doc.moveDown(0.2);
doc.font('Helvetica')
   .fillColor(textColor)
   .fontSize(8.5)
   .list([
     'Operated live graphics, camera feeds, and visual display software to ensure seamless presentation during church services.',
     'Managed audio mixer controls and sound levels while serving as Secretary to handle administrative records and team correspondence.',
     'Developed a web-based Mass running text system using Next.js, Supabase, and REST APIs to streamline the management and display of liturgical texts during church services.'
   ], { bulletRadius: 1.5, textIndent: 12, lineGap: 1.5 });

doc.moveDown(1.2);

// HARD SKILLS
addSectionHeader('HARD SKILLS');
doc.font('Helvetica')
   .fillColor(textColor)
   .fontSize(8.5)
   .list([
     'Programming: Java, Python, PHP',
     'Frameworks: Laravel, React.Js, Next.Js',
     'Database: MySQL, PostgreSQL, Firebase, Supabase',
     'Tools: Visual Studio Code, Antigravity, Google Colab, Figma, Stitch',
     'Core Concept: Full-Stack Web Development, Object-Oriented Programming (OOP), SaaS Architecture, Real-Time Data Synchronization, REST API Integration, Responsive Web Architecture',
     'Languages: Indonesian (Native), English (Basic)'
   ], { bulletRadius: 1.5, textIndent: 12, lineGap: 1.5 });

doc.moveDown(1.2);

// SOFT SKILLS
addSectionHeader('SOFT SKILLS');
doc.font('Helvetica')
   .fillColor(textColor)
   .fontSize(8.5)
   .list([
     'Teamwork',
     'Highly motivated',
     'Analytical skills',
     'Highly organized',
     'Eager to Learn',
     'Event Management & Leadership'
   ], { bulletRadius: 1.5, textIndent: 12, lineGap: 1.5 });

// Finalize PDF file
doc.end();
console.log('PDF generated successfully!');
