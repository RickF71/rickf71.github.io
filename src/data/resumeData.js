import React from 'react';
import { Container, Row, Col, Button, ThemeProvider} from 'react-bootstrap';
import {Card} from 'react-bootstrap';

export const resumeHeader = () => {
    return ( 
        <ThemeProvider>
            <Container className='resume'>
                <Row>
                    <h1>Richard Fleischman</h1>
                    <p>
                        <div>Full Stack Programmer</div>
                        <div>Phone: 414-275-0161  ·  Email: rickf71@gmail.com</div>
                        <div>
                            <Button href='https://www.linkedin.com/in/rickfleischman/'>LinkedIn</Button>&nbsp;
                            <Button href='https://rickf71.github.io/'>Github</Button>
                        </div>
                    </p>
                </Row>

                <Row>
                    <Col>
                        <Card className='rounded'>
                           
                            <Card.Header>Front End</Card.Header>
                            <Card.Body>
                                <Card.Text>
                                    HTML, CSS, Javascript, React, jQuery, Bootstrap
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                    <Card>
                       
                        <Card.Header>Programmer</Card.Header>
                        <Card.Body>
                            {/* <Card.Title>Programmer</Card.Title> */}
                            <Card.Text>
                                PHP, ASP, Ruby On Rails, C++, C, Python
                                Authentication, Troubleshooter, Solid Documentation
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Card>
                            <Card.Header>Database</Card.Header>
                            <Card.Body>
                                <Card.Text>
                                MySQL, SQL Server, Microsoft Access, IBM DB2 (other SQL based DBs)
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card>
                            <Card.Header>Back End</Card.Header>
                            <Card.Body>
                                <Card.Text>
                                Apache, Windows Server, LAMP, VMWare, Unix/Linux, OSs in general
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
            &nbsp;
            <Container>
                <Row>
                    <h2>About Richard</h2>

                    <p>
                        Richard is a highly motivated and skilled computer programmer with over 15 years of experience 
                        in web programming. He has a strong track record of success in using PHP and MySQL to develop 
                        and maintain web applications, and is also familiar with HTML5, CSS, Javascript, VB, C, C++, 
                        and Ruby on Rails. In his previous role as a Full Stack Instructor at Ancora Education, Richard 
                        was responsible for training a class of 20 students in CSS, HTML, and Javascript, and was able 
                        to significantly improve their skills and knowledge in these areas. Richard is known for his 
                        excellent code troubleshooting ability and experience with relational databases, which have 
                        helped him to successfully solve complex technical issues and improve the performance of 
                        web-based systems. He is excited to bring his skills and expertise to a new opportunity, and 
                        is confident in his ability to make a positive contribution to any team.

                    </p>

                    <p>Enjoy collaborating on a team and has a great ability to troubleshoot problems. 
                    It's a great thing for me to hear other people's challenges and work together and fix the issues 
                    that might be causing any problems.</p>
                    <p>
                    <ul>
                        <li>See the flow of code and enjoy troubleshooting.</li>
                        <li>Enjoy working with data, and know databases well.  </li>
                        <li>Partaking in creation of awesome web interfaces.  Welcome working with design artists.</li>
                        <li>My favorite subjects are science, math, and technology. Also love art and movies.</li>
                        <li>Learning Agile programming for years, and recently have been utilizing it more.  
                            I have also utilized Six Sigma and Lean.</li>
                    </ul>
                    </p>
                </Row>
            </Container>
        </ThemeProvider>
    )
}


export const resumeExperience = [
{
    title: 'Full Stack Developer',
    company: 'MARS Solutions Group',
    startDate: 'February 2022',
    endDate: 'Current',
    summary: 'Full-stack returnship program',
    expTags: ['React','Agile','Teams', 'Jira','HTML',"CSS",'Javascript','Bootstrap'],
    experience: [
        {description: 'Instruction on HTML, CSS and Javascript'},
        {description: 'Learning how to program using React, including JSX'},
        {description: 'Agile methodology'},
        {description: 'Worked with Microsoft Teams to help in creation and completion of various projects'},
        {description: 'Used Jira as a valuable tool for scheduling and organizing aspect of various projects'},
    ],
},
{
    title: 'Full Stack Instructor',
    company: 'Ancora Education',
    startDate: 'August 2019',
    endDate: 'October 2019',
    summary: 'Instructor for class of Amazon Employees',
    expTags: ['HTML',"CSS",'Javascript'],
    experience: [
        {description:'Instructed class of Amazon employees in Full Stack on HTML, CSS and JavaScript'}
    ]
},
{
    title: 'Software Programmer',
    company: 'Independent Contract Work',
    startDate: 'October 2015',
    endDate: 'January 2019',
    summary: 'Various experience.  Programming, database entry, accounting work for various companies and persons. ',
    expTags: ['PHP','MySQL','LAMP','jQuery','Bootstrap', 'PHPBB', 'VMWare'],
    experience: [
        {description: 'Set up and create code for www.TheFileStop.com (Dec 2016 - Dec 2017)', expTags: ['WebSite']},
        {description: 'PHP, MySQL, LAMP Server, jQuery / jQuery-UI, Bootstrap v4, Authentication System', expTags: ['PHP','MySQL','LAMP','jQuery','Bootstrap', 'Authentication']},
        {description: 'Set up and create code for www.LateNightSoftware.net', expTags: ['WebSite']},
        {description: 'PHP, MySQL, LAMP Server, jQuery, Bootstrap 3, Authentication, Custom chat rooms, PHPBB3 Install'},
        {description: 'Set up full LAMP server in a VMWare Virtual machine'},
        {description: 'Network Administration'},
        {description: 'Operating System Installations and general computer repair'},
        {description: 'Freelance web developer'},
        {description: 'Experience creating graphical user interfaces'}
    ]    
},
{
    title: 'Webmaster',
    company: 'Sapphire Technologies',
    startDate: 'April 2008',
    endDate: 'September 2013',
    expTags: ['PHP','Oracle','MySQL','Adobe Premier','Adobe Dreamweaver'],
    summary: 'Contactor: US Forest Service, Regional Webmaster',
    experience: [
        {description: 'Maintain content on external web site and internal intranet for the regional office.'},
        {description: 'Maintenance and customization of internal systems, designed in PHP and utilizing a database for storage. Publication of stories using RSS.'},
        {description: 'Aided in production / publication of many videos, using Adobe Premier / Adobe Photoshop Elements to edit, and used Adobe Flash Professional CS3 for the purpose of publication.'},
        {description: 'Various other custom web applications that used PHP and MySQL.'},
    ],
    skillSummary: `Environment: Windows XP, MySQL, PHP, jQuery, AJAX, Ubuntu, Apache
Skills/Tools: HTML, CSS, AJAX, Adobe Premier / Adobe Photoshop / Flash Professional / Dreamweaver `
},

{
    title: 'Database Analyst',
    company: 'Red Anvil',
    startDate: 'February 2008',
    endDate: 'April 2008',
    expTags: ['SQL Server','Microsoft Access'],
    summary: 'Contractor: R&B Grinding',
    experience: [
        {description: 'Pinpointed database inconsistencies such as orphaned or duplicated records, and incorrect table linkages.  Performed extensive normalization on various database tables.'},
        {description: 'Created several custom database reports to help them optimize their operations '},
    ], 
    skillSummary: `Environment: Microsoft Access 2003
Skills/Tools: Databases, Microsoft Access`,
},

{
    title: 'Web Programmer',
    company: 'Robert Half International',
    startDate: 'October 2007',
    endDate: 'December 2007',
    summary: 'Contractor: Milwaukee Public Museum',
    expTags: ['MySQL','PHP','HTML','CSS'],
    experience: [
        {description: 'Web Security using PHP'},
        {description: 'Aided in digital signage project using jQuery'},
    ],
    skillSummary: `Environment: Windows XP, Windows Server 2003, MySQL, PHP
    Skills/Tools: HTML, CSS, AJAX`,
},

{
    title: 'Web Programmer',
    company: 'Robert Half International',
    startDate: 'July 2007',
    endDate: 'October 2007',
    expTags: ['ASP.net','SQL Server'],
    summary: 'Contractor: Move.com',
    experience: [
        {description: 'Worked with a team of programmers to create custom web programming for clients with hundreds of thousands of page views per day'},
        {description: 'Worked extensively with Account Managers in the debugging of client web sites'},
        {description: 'Database creation, modification and normalization.  Created views and stored procedures for use in dynamically generated web site content. (SQL Server)'},
        {description: 'Used SQL Server Query Analyzer test and optimize database queries'},
    ],
    skillSummary: `Environment: Windows XP, Windows Server 2003, Windows SQL Server 2000
Skills/Tools: ASP, SQL Server, VB6, SQL Query Analyzer, HTML, CSS`,
},
{
    title: 'Web Developer',
    company: 'afree Network Entertainment',
    startDate: 'August 2007',
    endDate: 'August 2008',
    expTags: ['PHP', 'MySQL','CSS','Subversion', 'HTML'],
    summary: 'Website programming',
    experience: [
        {description: 'PHP, MySQL - created and modified programming for web site that receives an average of 150,000 page views per day'},
        {description: `PHP, CSS, HTML - rewrote the site's administrative area to prepare for expansion in number of users`},
        {description: 'PHP 3rd party apps, CSS - Implemented various tools such as file uploading routines and a WYSIWYG type editor for emails/user profiles'},
        {description: 'SVN version control - used SVN extensively to commit updates and changes to this site'},
    ],
    skillSummary: `Environment: Linux, Windows XP	           
Skills/Tools: PHP, MySQL, SVN, HTML, CSS, Javascript, Unix shell, AJAX`,
},
{
    title: 'Web Programmer',
    company: 'Codeworks, Inc.',
    startDate: 'July 2006',
    endDate: 'July 2007',
    expTags: ['PHP','MySQL','AJAX','Apache','Linux','Windows 2003','CVS'],
    summary: 'Contracted to GE Medical - Multi Vendor Diagnostic Imaging',
    experience: [
        {description: 'PHP, MySQL, AJAX - Developed and debugged web applications that enabled remote diagnostic capability with Medical Imaging equipment.'},
        {description: 'Linux, MySQL, PHP, Apache - installed and configured systems using Fedora Core 2 Linux, Apache, MySQL, and PHP.'},
        {description: 'Technical Writing - Created software design documents for applications that enable remote diagnostic capability for medical imaging equipment.'},
        {description: 'Technical Writing - Created several software test plans, and performed software test plans on various systems.'},
        {description: 'Linux, Windows 2003 - Setup of Linux Host OS (Ubuntu 6.10) with a Windows 2003 Server client OS using VMWare. Created manual to describe all aspects of this server.'},
        {description: 'Linux - Performed test installs of remote diagnostic applications on upgraded OSs. Specifically worked on a Fedora Core 2 to Fedora Core 7 upgrade.'},
        {description: 'Version Control - Utilized CVS revision control system for source code and other important documents.'},
    ],
    skillSummary: `Environment: Windows XP, Windows Server 2003, Ubuntu Linux, Fedora Core Linux (2, 6 and 7)
    Skills/Tools: PHP, MySQL, Unix Scripting, VMWare, SENA (RS-232 to Ethernet converter), HTML, Technical Documentation, Test Plan creation Programming focus)`, 
},
{
    title: 'Software Programmer / System Admin',
    company: 'Blue Moon Mortgage',
    startDate: 'September 2003',
    endDate: 'July 2006',
    expTags: ['PHP','MySQL','HTML','CSS','Javascript','VB6','VBScript','ASP','SQL Server','Microsoft Access'],
    summary: 'Worked in a variety of roles in a small mortgage company, from programmer to system administation.',
    experience: [
        {description: 'Linux, Apache, MySQL, PHP - Worked as the project architect, leader, and developer for a custom web site and integrated intranet, built upon Linux, PHP, MySQL, and Apache.'},
        {description: 'PDF, PHP, MySQL - Gather and document requirements for custom intranet solutions. This intranet supplied our loan officers with useful reports that were utilized as marketing materials. A PDF generating program designed to work with PHP was used for this purpose.'},
        {description: 'Setup and configured MySQL database server to integrate with our dynamic website and intranet'},
        {description: 'Provided integration with 3rd party mortgage origination software for closer integration with our custom built intranet.'},
        {description: 'Documented code to ease future extensibility.'},
        {description: 'Windows Server 2003, Exchange 2003, Active Directory - Installed and administered file and email server'},
        {description: 'Windows XP - Performed maintenance and administration for user computer systems.'},
        {description: 'Apache, MySQL admin - Set up, configured and secured an in-house web server and database server'},
    ],
    skillSummary: `Environment: Windows XP, Windows Server 2003, Linux, MySQL, PHP, Apache, Exchange 2003, Active Directory`,
},
{
    title: 'Software Programmer',
    company: 'Robert Half International',
    startDate: 'September 2002',
    endDate: 'September 2003',
    expTags: ['MS-Access','Visual Basic','Network Adminstration','VisualBasic.NET', 'Crystal Reports'],
    summary: '',
    experience: [
        {description: 'Access Database - Upgraded, documented, and fixed bugs for a custom built Access database application.'},
        {description: 'Access Database - Improved security on custom Access database system'},
        {description: 'Help Desk - Performed help desk and other administrative tasks.'},
        {description: 'Created custom reports using Crystal Reports'},
    ],
    skillSummary: `Environment:  Windows XP | Skills/Tools: Microsoft Access VBA, Visual Basic, Network Administration, Visual Basic.net
    `,
},
{
    title: 'Software Programmer',
    company: 'Keane, Inc.',
    startDate: 'June 2000',
    endDate: 'Septermber 2001',
    expTags: [],
    summary: '',
    experience: [
        {description: 'Upgraded a legacy C program designed to run on text-based wireless units.'},
        {description: 'Met with customers to gather, analyze and document requirements for projects.'},
        {description: 'Worked on a team to develop a 3-tier Visual Basic application that integrated with an existing Oracle database. Interfaced with and helped develop a DCOM middle tier, along with a user friendly GUI.'},
        {description: 'Provided support for application post-implementation'},
    ],
    skillSummary: `Environment:`,
},
{
    title: 'Software Programmer',
    company: 'Born Information Services',
    startDate: 'December 1998',
    endDate: 'June 2000',
    expTags: [],
    summary: '',
    experience: [
        {description: 'Created custom Visual Basic application that supplied a user friendly graphical interface as a front end to a warehouse database.'},
        {description: 'Developed an e-commerce web site for a medical railing company that utilized MS Site Server for the user interface and SQL Server as back end database.'},
        {description: 'Using ASP and SQL Server, developed an intranet that allowed users to keep track of project information, designed to increase collaboration by creating a discussion forum for each project.'},
    ],
    skillSummary: `Windows NT, Visual Basic, MS Site Server/ASP, SQL Server, MS Access`,
},
{
    title: 'Software Programmer',
    company: 'The Enterprise, Ltd.',
    startDate: 'May 1995',
    endDate: 'December 1998',
    expTags: [],
    summary: '',
    experience: [
        {description: 'Upgraded a 30-hour per week legacy application to run Visual Basic, shortening the job to 4 hours a week with greater accuracy, allowing us to expand operations easier.'},
        {description: 'Helped custom code and maintain a series of real estate web sites. These sites allowed customer to search online real estate listings, utilizing a custom CGI application running on Slackware Linux.'},
        {description: 'Converted Linux CGI application to utilize Visual Basic CGI running on windows, and helped extend application beyond its original scope.'},
        {description: 'Unix/Linux administration, including 3 Linux servers and 1 SGI Irix server, including: New accounts for users (email, user groups, etc), Samba installation and configuration, Apache installation and configuration'},
        {description: 'With my team, we upgraded the VB-CGI program to use one of the first iterations of Microsoft ASP, including the creation of an ASP based web reporting system.'},
        {description: 'Telephone & Email support – I spent a lot of time on the telephone with customers, helping them specify development issues relating to their web sites. I developed and instituted several internal systems that we used to track support issues'},
    ],
    skillSummary: `Windows NT, Linux, BSD, Windows 3.51, Help Desk, Troubleshooting`,
},
{
    title: 'Software Programmer',
    company: 'Information Solutions, Inc.',
    startDate: 'May 1992',
    endDate: 'May 1995',   
    expTags: [],
    summary: '',
    experience: [
        {description: 'CAD Hardware/Software – onsite installation and support of high-end PC CAD workstations.'},
        {description: 'Video and network card configuration. I developed extensive troubleshooting skills while performing on-site installations in a very wide variety of networked environments. This was before Ethernet took over, so many of the network installations were non-standard.'},
        {description: 'Used 2D and 3D CAD software.'},
        {description: 'Network Administration, Database Admin - Internally, I maintained the company network that was based on NT 3.1, with several PC clients. As the business expanded I handled upgrades to the network. I also created and maintained a customer support database in MS-Access.'},
        {description: 'Telephone Support - I did a lot of tech support over the telephone, troubleshooting both hardware and software issues for our wide variety of clients.'},
    ],
    skillSummary: `Windows NT, Integraph Workstations | Skills/Tools: Microstation CAD Software, MS-Access, PC Hardware Installation
    `,
},
];

