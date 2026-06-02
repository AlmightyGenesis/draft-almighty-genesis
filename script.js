 function hideAll() {

    function hideAll() {

    document.getElementById("home").classList.remove("active");

    document.getElementById("contentPage").classList.remove("active");

}
}

/* SHOW SECTION */
function showSection(id) {

    document.getElementById("contactPage").classList.remove("active");

   /* SHOW HOME PAGE CONTAINER */
   document.getElementById("mainHomePage").style.display = "block";

   /* HOME PAGE CONTENT */
   document.getElementById("contentPage").classList.remove("active");

   document.getElementById("contentPage").style.display = "none";

    /* HIDE APPOINTMENT PAGE */
   document.getElementById("appointmentPage").classList.remove("active");

   document.getElementById("navbar").style.display = "flex";


    window.scrollTo(0,0);

}

/* OPEN PAGE */
function openPage (type) {

    /* NAVBAR SHOW */
    document.getElementById("navbar").style.display = "flex";
   
    /* CLOSE APPOINTMENT PAGE IF OPEN */
    document.getElementById("appointmentPage").classList.remove("active");

    /* SHOW CONTENT PAGE AGAIN */
    document.getElementById("contentPage").style.display = "block";

    /* HIDE HOME PAGE */
    document.getElementById("mainHomePage").style.display = "none";

    /* HOME PAGE HIDE */
    document.getElementById("home").classList.remove("active");

    /* CONTENT PAGE SHOW */
    document.getElementById("contentPage").classList.add("active");

    document.getElementById("contactPage").classList.remove("active");


    /* HIDE EXTRA SECTIONS */

    document.getElementById("overviewProcess").style.display = "none";
    document.getElementById("overviewWhat").style.display = "none";
    document.getElementById("missionBoxes").style.display = "none";
    document.getElementById("missionFlow").style.display = "none";
    document.getElementById("visionSection").style.display = "none";
    document.querySelector(".vision-flow-section").style.display = "none";
    document.getElementById("whyChooseSection").style.display = "none";

    /* WHY CHOOSE US PAGE */
    if(type === "whychoose") {

         document.getElementById("videoSource").src = "whychoose.mp4";
        document.getElementById("contentVideo").load();

        document.getElementById("pageTitle").innerText = "WHY CHOOSE US";
    
        document.getElementById("pageQuestion").innerText =
       "Why businesses and professionals trust Almighty Genesis?";

        document.getElementById("detailTitle").innerText =
       "Building Trust Through Innovation";

        document.getElementById("detailText").innerText =
       "We provide smart business strategies, technology solutions, and professional guidance to help businesses grow successfully.";

       /* SHOW WHY CHOOSE SECTION */
      document.getElementById("whyChooseSection").style.display = "flex";
    }



    let title = "";
    let question = "";
    let text = "";
    let bgVideo = "";
    let detailHeading = "";
    
    switch(type) {

        /* ABOUT */

    case "overview":
        title = "COMPANY OVERVIEW";
        question = "WHO ARE WE AND WHAT DRIVES OUR INNOVATION?";
        detailHeading = "How the company creates value...!"
        text = "Our business model is designed to create opportunities for aspiring entrepreneurs, recent graduates, self-employed individuals, and business-minded professionals who want to build an independent career in the financial and digital service industry. Our platform encourages innovation, leadership, teamwork, and professional development while creating a strong ecosystem of financially empowered entrepreneurs and service professionals.";
        bgVideo = "overview.mp4";
        break;

    case "mission":
        title = "OUR MISSION";
        question = "What inspires our journey toward excellence?";
        detailHeading = "MAKE IMPOSSIBLE, POSSIBLE...";
        text = "Our mission is toprovide high-quality financial and digital services that support personal growth, entrepreneurship, and economic development through a powerful franchise business model and customer-centric approach. \n\nLimits exist only in the mind. What others call impossible, we call the starting point. With vision, grit, and relentless action, We turn doubt into results and barriers into breakthroughs.";
        bgVideo = "mission.mp4";
        break;

    case "vision":
        title = "OUR VISION";
        question = "Ready for future with us...!!!";
        detailHeading = "BUILDING LONG-TERM SUCCESS.";
        text = "Our vision is to be become one of the most trusted and innovative financial and digital service organisations by empowering individuals, entrepreneurs, and young professionals through accessible financial solution, franchise business opportunities, and technology-driven services accross the nation.";
        bgVideo = "vision.mp4";
        document.getElementById("visionSection").style.display = "flex";
        document.querySelector(".vision-flow-section").style.display = "block";
        break;

    case "future":
        title = "FUTURE GOALS";
        question = "Where are we heading in the future?";
        detailHeading = "EXPAND BUSINESS GROWTH AND INNOVATION...";
        text = "Our future goals are focused on building a strong, innovative, and customer-driven company that delivers long-term value and sustainable growth. We aim to continuously evolve with changing technologies and market demands while maintaining excellence in every aspect of our business. \n\n We aim to build innovative digital experiences that combine technology, Creativity, and user-focused design. Our future goals focus on continuous growth, meaningful impact, and delivering solutions that simplify everyday experiences.";
        bgVideo = "future.mp4";
        break;

    case "values":
        title = "OUR VALUES";
        question = "What are the principals behind our success?";
        text = "Our values define who we are and guide everything we do. They help us build strong relationships, maitain trust, and achieve success together. We believe in honesty, responsibility, teamwork, and continous improvement in every aspect of our work.";
        bgVideo = "values.mp4";
        break;

    case "why":
        title = "WHY CHOOSE US";
        question = "Why do businesses trust Almighty Genesis?";
        detailHeading = "START YOUR BUSINESS DREAM WITH US..."
        text = "If you are thinking to start a new business or if you want to start a new career. \n\nOur Company is commited to delivering innovative business solutions that help organizations grow, complete, and succeed in the modern digital market. We combine technology, strategy, and customer-focused services to create long-term value for our clients. \n\nWe understand the challanges businesses face in today's competitive environment. Our experienced team provides strategic solutions that improve efficiency, productivity, and overall business performance. "
        bgVideo = "why.mp4";
        document.getElementById("whyChooseSection").style.display = "block";
        break;

    /* SERVICES */

    case "Front-End":
        title = "FRONTEND DEVELOPMENT";
        question = "Need attractive and interactive websites?";
        text = "We create visually stunning, responsive, and user-friendly frontend interfaces using modern technologies.";
        bgVideo = "frontend.mp4";
        break;

        case "Back-End":
        title = "BACKEND DEVELOPMENT";
        question = "Looking for secure and scalable systems?";
        text = "We develop powerful bakend systems, APIs, databases, and server-side architectures.";
        bgVideo = "backend.mp4";
        break;

    case "fullstack":
        title = "FULL STACK DEVELOPMENT";
        question = "Want complete end-to-end web solutions?";
        text = "Our fullstack development services combine frontend and backend technologies for complete web platforms. \n\n Full stack development is the process of building both the frontend and backend of a web application. A full stack developer works on everything from designing user interfaces to managing servers, databases, and application logic.";
        bgVideo = "fullstack.mp4";
        break;

    case "database":
        title = "DATA BASE";
        question = "Why do businesses use databases...?";
        text = "A database plays an important role in modern business organizations. It helps companies store, organize, and manage large amounts of information efficiently. Businesses use databases to maintain customer records, employee details, sales reports, inventory data, and financial transactions. With a database system, information can be accessed quickly, updated easily, and shared securely among departments.";
        bgVideo = "data.mp4";
        break;   

    case "ecommerce":
        title = "E-COMMERCE WEBSITE";
        question = "Ready to launch your online business?";
        text = "We build professional ecommerce websites with payment integration, product management, and advances UI";
        bgVideo = "ecommerce.mp4";
        break;

    case "erp":
        title = "ERP SOLUTIONS";
        question = "Need smart business management systems?";
        detailHeading = "Erp Solutions";
        text = "Our ERP systems streamline operations, automate workflows, and improve productivity. \n\n Enterprise Resource Planning (ERP) solutions are integrated software systems designed to manage and automate core business operations within an organization. They help businesses streamline processes by connecting departments such as finance, human resources, inventory, sales, procurement, and customer management into a single centralized platform.";
        bgVideo = "erp.mp4";
        break;

    case "crm":

        title = "CRM SOFTWARE";
        title = "CRM SOFTWARE";
        question = "Want Stronger Customer relationships?";
        text = "Our CRM Software helps businesses manage Customers, sales, leads, and communication effectively. \n\n Customer Relationship Management (CRM) solutions are software platforms designed to help businesses manage customer interactions, sales activities, marketing campaigns, and customer support services in a centralized system.";
        bgVideo = "crm.mp4";
        break;

    case "ai":

        title = "AI SOLUTIONS";
        question = "Ready to integrate artificial intelligence?";
        text = "We develop AI-Powered systems for automation, analytics, and intelligent business solutions. \n\n AI solutions enable businesses to automate repetitive tasks and improve productivity across different departments. Organizations can use AI-powered tools to enhance customer service, optimize workflows, and support innovation in rapidly changing markets.";
        bgVideo = "ai.mp4";
        break;

    case "seo":

        title = "SEO SERVICES";
        question = "Want your website improve visibility, traffic, and online presence for businesses.";
        text = "We provide the services.";
        bgVideo = "seo.mp4";
        break;

    case "social":

        title = "SOCIAL MEDIA MARKETING";
        question = "looking to grow your digital audience?";
        text = "We create strategic social media campaigns to increase brand engagement and reach.";
        bgVideo = "social.mp4";
        break;

    case "branding":

            title = "BRANDING";
            question = "Need a strong brand identuty?";
            text = "We help businesses create professional branding stratagies, logos, and marketing identities.";
            bgVideo = "branding.mp4";
            break;

    case "hosting":

           title = "HOSTING SERVICES";
           question = "Need fast and secure hosting?";
           text = "We provide scalable, reliable, and high-performance hosting solutions.";
           bgVideo = "hosting.mp4";
           break;
        
    case "startup":
        title = "STARTUP PARTNERSHIP";
        text = "A franchise business offers many advantage to entrepreneurs who want to start a business with lower risk.";
        bgVideo = "startup.mp4";
        break; 

    case "business":
        title = "BUSINESS COLLABORATION";
        text = "A franchise business offers many advantage to enterpreneurs who want to start a business with lower risk.";
        bgVideo = "bcollaboration.mp4";
        break;    
        
    case "revenue":
        title = "REVENUE STRUCTURE";
        text = "At our oraganisaton revenue is not judst about earning - It is build around creating sustainable careers, business opportunities and long - Term growth for both candidates and partner.";
        bgVideo = "revenue.mp4";
        break;  
        
       
        
    case "training":
        title = "TRAINING & SUPPORT";
        text = "A Franchise business offers many advantage to entrepreneurs who want to start a business with lower risk.";
        bgVideo = "training.mp4";
        break;  
        
    case "work":
        title = "WORK WITH US";
        text = "A franchise business offers many advantages to entrepreneurs who want to start a business with lower risk.";
        bgVideo = "work.mp4";
        break; 

        case "start-up":
        title = "STARTUP COLLABORATION"; 
        text = "A franchise business offers many advantage to entrepreneurs who want to start a business with lower risk.";
        bgVideo = "collaboration.mp4";
        break;

    case "b2b":
        title = "B2B SERVICES";
        text = "A Franchise business offers many advantages to entrepreneurs who want to start a business with lower risk.";
        bgVideo = "b2b.mp4";
        break;
        
    case "Entrepreneurship":
        title = "ENTREPRENEURSHIP PROGRAM";
        text = "A Franchise business offers many advantages to entrepreneurs who want to start a business with lower risk";
        bgVideo = "program.mp4";
        break;

    
    /* WORK */

    case "workhome":
    detailHeading = "REMOTE WORK OPPORTUNITIES";

    text =
    "Work remotely with flexible timings and professional growth opportunities. Improve your skills and build your future from home.";

    bgVideo = "office.mp4";

    break;  

    /* INTERNSHIP */

    case "internship":
    detailHeading = "REMOTE WORK OPPORTUNITIES";

    text =
    "Work remotely with flexible timings and professional growth opportunities. Improve your skills and build your future from home.";

    bgVideo = "internship.mp4";

    break; 
   
    }          

    document.getElementById("pageTitle").innerText = title;
    document.getElementById("pageQuestion").innerText = question;
    document.getElementById("detailTitle").innerText = detailHeading;
    document.getElementById("detailText").innerText = text;

    document.getElementById("videoSource").src = bgVideo;
    document.getElementById("contentVideo").load();

    
    /* SHOW ONLY FOR OVERVIEW PAGE */

    if(type === "overview") {

       document.getElementById("overviewProcess").style.display = "block";

    }else {

        document.getElementById("overviewProcess").style.display = "none";
    }

    if(type === "overview") {

        document.getElementById("overviewWhat").style.display = "block";

    } else {

        document.getElementById("overviewWhat").style.display = "none";
    }

    /* SHOW ONLY FOR MISSION PAGE */

    if(type === "misssion") {

        document.getElementById("missionBoxes").style.display = "block";

    } else {

       document.getElementById("missionBoxes").style.display = "none";
    }

    /* SHOW ONLY FOR MISSION PAGE */

    if(type === "mission") {

        document.getElementById("missionFlow").style.display = "block";

    } else {

        document.getElementById("missionFlow").style.display = "none";
    }

    /* SHOW ONLY FOR VISSION PAGE */
    if(type === "vision") {
        document.getElementById("visionFlow").style.display = "block";

    } else {
        document.getElementById("visionFlow").style.display = "none";
    }

    /* SHOW ONLY FOR WHY CHOOSE US PAGE */
    if(type === "why") {
        document.getElementById("whyChooseSection").style.display = "block";

    } else {
        document.getElementById("whyChooseSection").style.display = "none";
    }

}


/* WHY CHOOSE US ACCORDION */

const chooseItems = document.querySelectorAll(".choose-item");

chooseItems.forEach(item => {

    const question = item.querySelector(".choose-question");

    question.addEventListener("click", () => {

        item.classList.toggle("active");

    });

});

/* SCROLL ANIMATION */

const scrollElements = document.querySelectorAll(
".scroll-box, .scroll-img, .footer"
);

function scrollAnimation() {

    scrollElements.forEach((el) => {

        const elementTop = el.getBoundingClientRect().top;

        const screenHeight = window.innerHeight;

        if(elementTop < screenHeight - 100){

            el.classList.add("show");

        }

    });

}

window.addEventListener("scroll", scrollAnimation);

scrollAnimation();

/* OPEN APPOINTMENT PAGE */
function openAppointmentForm() {

    /* HIDE COMPLETE HOME PAGE */
    document.getElementById("mainHomePage").style.display = "none";

    /* COMPLETELY HIDE CONTENT PAGE */
    document.getElementById("contentPage").classList.remove("active");
    document.getElementById("contentPage").style.display = "none";

    /* HIDE ALL EXTRA CONTENT SECTION */
    document.getElementById("overviewProcess").style.display = "none";

    document.getElementById("overviewWhat").style.display = "none";

    document.getElementById("missionBoxes").style.display = "none";

    document.getElementById("missionFlow").style.display = "none";

    document.getElementById("visionSection").style.display = "none";

    document.getElementById("whyChooseSection").style.display = "none";

    /* SHOW APPOINTMENT PAGE */
    document.getElementById("appointmentPage").classList.add("active");
    window.scrollTo(0,0);

    
}

/* CLOSE APPOINTMENT PAGE */
function closeAppointmentForm() {
    
    /* HIDE APPOINTMENT PAGE */
    document.getElementById("appointmentPage").classList.remove("active");

    /* SHOW MAIN HOME PAGE */
    document.getElementById("mainHomePage").style.display = "block";

    /* SHOW HOME HERO SECTION */
    document.getElementById("home").classList.add("active");

     window.scrollTo(0,0);

}

function openContact() {

    // hide everything
    document.getElementById("mainHomePage").style.display = "none";

    document.getElementById("contentPage").classList.remove("active");

    document.getElementById("contentPage").style.display = "none";

    document.getElementById("appointmentPage").classList.remove("active");

    // show contact page
    document.getElementById("contactPage").classList.add("active");

    document.getElementById("navbar").style.display = "flex";

    window.scrollTo(0,0);
}



