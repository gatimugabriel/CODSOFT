const jobsData = [
    {
        "id": 21,
        "category": "Software Development",
        "title": "Full Stack Developer",
        "company": "Black-Curtain",
        "companyLogo": "https://res.cloudinary.com/dfrwmkb42/image/upload/v1705567067/3/company/companyLogo_1705567067379.jpg",
        "location": "San Francisco, CA",
        "type": "Full-time",
        "experience": "3-5",
        "description": "Exciting opportunity for a skilled Full Stack Developer...",
        "skills": [
            "React",
            "Node.js",
            "MongoDB"
        ],
        "salary": "$80,000 - $100,000",
        "employer_id": 3
    },
    {
        "id": 22,
        "category": "Data Science",
        "title": "Data Scientist",
        "company": "Black-Curtain",
        "companyLogo": "https://res.cloudinary.com/dfrwmkb42/image/upload/v1705567067/3/company/companyLogo_1705567067379.jpg",
        "location": "New York, NY",
        "type": "Full-time",
        "experience": "2-4",
        "description": "Join our data science team to analyze and interpret complex data sets...",
        "skills": [
            "Python",
            "Machine Learning",
            "SQL"
        ],
        "salary": "$90,000 - $120,000",
        "employer_id": 3
    },
    {
        "id": 3,
        "category": "Front-End",
        "title": "UI/UX Designer",
        "company": "Black-Curtain",
        "companyLogo": "https://res.cloudinary.com/dfrwmkb42/image/upload/v1705567067/3/company/companyLogo_1705567067379.jpg",
        "location": "Remote",
        "type": "Full-time",
        "experience": "2-5",
        "description": "Design user interfaces for web applications...",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript"
        ],
        "salary": "$70,000 - $90,000",
        "employer_id": 3
    },
    {
        "id": 4,
        "category": "Back-End",
        "title": "Backend Developer",
        "company": "Black-Curtain",
        "companyLogo": "https://res.cloudinary.com/dfrwmkb42/image/upload/v1705567067/3/company/companyLogo_1705567067379.jpg",
        "location": "On-Site",
        "type": "Full-time",
        "experience": "4-6",
        "description": "Develop server-side logic and integrate databases...",
        "skills": [
            "Java",
            "Spring Boot",
            "MySQL"
        ],
        "salary": "$85,000 - $110,000",
        "employer_id": 3
    },
    {
        "id": 5,
        "category": "Machine Learning",
        "title": "Machine Learning Eng",
        "company": "Black-Curtain",
        "companyLogo": "https://res.cloudinary.com/dfrwmkb42/image/upload/v1705567067/3/company/companyLogo_1705567067379.jpg",
        "location": "Remote",
        "type": "Full-time",
        "experience": "3-5",
        "description": "Apply machine learning techniques to solve complex problems...",
        "skills": [
            "Python",
            "TensorFlow",
            "Scikit-Learn"
        ],
        "salary": "$95,000 - $120,000",
        "employer_id": 3
    },
    {
        "id": 6,
        "category": "Software Development",
        "title": "Full Steck Developer",
        "company": "Black-Curtain",
        "companyLogo": "https://res.cloudinary.com/dfrwmkb42/image/upload/v1705567067/3/company/companyLogo_1705567067379.jpg",
        "location": "San Francisco, CA",
        "type": "Full-time",
        "experience": "3-5",
        "description": "Exciting opportunity for a skilled Full Stack Developer...",
        "skills": [
            "React",
            "Node.js",
            "MongoDB"
        ],
        "salary": "$80,000 - $100,000",
        "employer_id": 3
    },
    {
        "id": 7,
        "category": "Data Science",
        "title": "Data Engineer",
        "company": "Black-Curtain",
        "companyLogo": "https://res.cloudinary.com/dfrwmkb42/image/upload/v1705567067/3/company/companyLogo_1705567067379.jpg",
        "location": "New York, NY",
        "type": "Full-time",
        "experience": "2-4",
        "description": "Join our data science team to analyze and interpret complex data sets...",
        "skills": [
            "Python",
            "Machine Learning",
            "SQL"
        ],
        "salary": "$90,000 - $120,000",
        "employer_id": 3
    },
    {
        "id": 8,
        "category": "Front-End",
        "title": "UX/UI Designer",
        "company": "Black-Curtain",
        "companyLogo": "https://res.cloudinary.com/dfrwmkb42/image/upload/v1705567067/3/company/companyLogo_1705567067379.jpg.svg",
        "location": "Remote",
        "type": "Full-time",
        "experience": "2-5",
        "description": "Design user interfaces for web applications...",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript"
        ],
        "salary": "$70,000 - $90,000",
        "employer_id": 3
    },
    {
        "id": 9,
        "category": "Back-End",
        "title": "Backend Lead",
        "company": "Black-Curtain",
        "companyLogo": "https://res.cloudinary.com/dfrwmkb42/image/upload/v1705567067/3/company/companyLogo_1705567067379.jpg.svg",
        "location": "On-Site",
        "type": "Full-time",
        "experience": "4-6",
        "description": "Develop server-side logic and integrate databases...",
        "skills": [
            "Java",
            "Spring Boot",
            "MySQL"
        ],
        "salary": "$85,000 - $110,000",
        "employer_id": 3
    },
    {
        "id": 10,
        "category": "Machine Learning",
        "title": "Machine Learning Engineer",
        "company": "ML-Labs",
        "companyLogo": "https://res.cloudinary.com/dfrwmkb42/image/upload/v1705566656/1/company/companyLogo_1705566655564.jpg",
        "location": "Remote",
        "type": "Full-time",
        "experience": "3-5 years",
        "description": "Apply machine learning techniques to solve complex problems...",
        "skills": [
            "Python",
            "TensorFlow",
            "Scikit-Learn"
        ],
        "salary": "$95,000 - $120,000",
        "employer_id": 1
    },
    {
        "id": 11,
        "category": "Software Development",
        "title": "Full-Stack Engineer",
        "company": "ML-Labs",
        "companyLogo": "https://res.cloudinary.com/dfrwmkb42/image/upload/v1705566656/1/company/companyLogo_1705566655564.jpg",
        "location": "San Francisco, CA",
        "type": "Full-time",
        "experience": "3-5",
        "description": "Exciting opportunity for a skilled Full Stack Developer...",
        "skills": [
            "React",
            "Node.js",
            "MongoDB"
        ],
        "salary": "$80,000 - $100,000",
        "employer_id": 1
    },
    {
        "id": 12,
        "category": "Data Science",
        "title": "Data Skientist",
        "company": "ML-Labs",
        "companyLogo": "https://res.cloudinary.com/dfrwmkb42/image/upload/v1705566656/1/company/companyLogo_1705566655564.jpg",
        "location": "New York, NY",
        "type": "Full-time",
        "experience": "2-4",
        "description": "Join our data science team to analyze and interpret complex data sets...",
        "skills": [
            "Python",
            "Machine Learning",
            "SQL"
        ],
        "salary": "$90,000 - $120,000",
        "employer_id": 1
    },
    {
        "id": 13,
        "category": "Front-End",
        "title": "UI/UX Lead",
        "company": "ML-Labs",
        "companyLogo": "https://res.cloudinary.com/dfrwmkb42/image/upload/v1705566656/1/company/companyLogo_1705566655564.jpg",
        "location": "Remote",
        "type": "Part-time",
        "experience": "2-5",
        "description": "Design user interfaces for web applications...",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript"
        ],
        "salary": "$70,000 - $90,000",
        "employer_id": 1
    },
    {
        "id": 14,
        "category": "Back-End",
        "title": "Backend Engineer Lead",
        "company": "ML-Labs",
        "companyLogo": "https://res.cloudinary.com/dfrwmkb42/image/upload/v1705566656/1/company/companyLogo_1705566655564.jpg",
        "location": "On-Site",
        "type": "Contract",
        "experience": "4-6",
        "description": "Develop server-side logic and integrate databases...",
        "skills": [
            "Java",
            "Spring Boot",
            "MySQL"
        ],
        "salary": "$85,000 - $110,000",
        "employer_id": 1
    },
    {
        "id": 15,
        "category": "Machine Learning",
        "title": "Deep Learning Eng",
        "company": "ML-Labs",
        "companyLogo": "https://res.cloudinary.com/dfrwmkb42/image/upload/v1705566656/1/company/companyLogo_1705566655564.jpg",
        "location": "Remote",
        "type": "Full-time",
        "experience": "3-5",
        "description": "Apply machine learning techniques to solve complex problems...",
        "skills": [
            "Python",
            "TensorFlow",
            "Scikit-Learn"
        ],
        "salary": "$95,000 - $120,000",
        "employer_id": 1
    },
    {
        "id": 16,
        "category": "Web Development",
        "title": "Web Developer",
        "company": "ML-Labs",
        "companyLogo": "https://res.cloudinary.com/dfrwmkb42/image/upload/v1705566656/1/company/companyLogo_1705566655564.jpg",
        "location": "San Francisco, CA",
        "type": "Full-time",
        "experience": "3-5",
        "description": "Exciting opportunity for a skilled Full Stack Developer...",
        "skills": [
            "React",
            "Node.js",
            "MongoDB"
        ],
        "salary": "$80,000 - $100,000",
        "employer_id": 1
    },
    {
        "id": 17,
        "category": "Data Science",
        "title": "Big Data Engineer",
        "company": "ML-Labs",
        "companyLogo": "https://res.cloudinary.com/dfrwmkb42/image/upload/v1705566656/1/company/companyLogo_1705566655564.jpg",
        "location": "New York, NY",
        "type": "Full-time",
        "experience": "2-4",
        "description": "Join our data science team to analyze and interpret complex data sets...",
        "skills": [
            "Python",
            "Machine Learning",
            "SQL"
        ],
        "salary": "$90,000 - $120,000",
        "employer_id": 1
    },
    {
        "id": 18,
        "category": "UI/UX",
        "title": "UI/UX Developer",
        "company": "ML-Labs",
        "companyLogo": "https://res.cloudinary.com/dfrwmkb42/image/upload/v1705566656/1/company/companyLogo_1705566655564.jpg",
        "location": "Remote",
        "type": "Full-time",
        "experience": "2-5",
        "description": "Design user interfaces for web applications...",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript"
        ],
        "salary": "$70,000 - $90,000",
        "employer_id": 1
    },
    {
        "id": 19,
        "category": "Systems",
        "title": "Sytem Designer",
        "company": "ML-Labs",
        "companyLogo": "https://res.cloudinary.com/dfrwmkb42/image/upload/v1705566656/1/company/companyLogo_1705566655564.jpg",
        "location": "On-Site",
        "type": "Full-time",
        "experience": "4-6 years",
        "description": "Develop server-side logic and integrate databases...",
        "skills": [
            "Java",
            "Spring Boot",
            "MySQL"
        ],
        "salary": "$85,000 - $110,000",
        "employer_id": 1
    },
    {
        "id": 20,
        "category": "Accounting",
        "title": "Accountant",
        "company": "ML-Labs",
        "companyLogo": "https://res.cloudinary.com/dfrwmkb42/image/upload/v1705566656/1/company/companyLogo_1705566655564.jpg",
        "location": "Remote",
        "type": "Full-time",
        "experience": "3-5",
        "description": "Apply accounting techniques to solve complex problems...",
        "skills": [
            "CPA",
            "CAP2",
            "Finance"
        ],
        "salary": "$95,000 - $120,000",
        "employer_id": 1
    }
]




const moreData = [
    {
        "id": 21,
        "category": "Software Development",
        "title": "Full Stack Developer",
        "company": "TechCo",
        "companyLogo": "/public/vite.svg",
        "location": "San Francisco, CA",
        "type": "Full-time",
        "experience": "3-5 years",
        "description": "Exciting opportunity for a skilled Full Stack Developer...",
        "skills": [
            "React",
            "Node.js",
            "MongoDB"
        ],
        "salary": "$80,000 - $100,000",
        "employer_id": 1
    },
    {
        "id": 22,
        "category": "Data Science",
        "title": "Data Scientist",
        "company": "Data Insights",
        "companyLogo": "/public/vite.svg",
        "location": "New York, NY",
        "type": "Full-time",
        "experience": "2-4 years",
        "description": "Join our data science team to analyze and interpret complex data sets...",
        "skills": [
            "Python",
            "Machine Learning",
            "SQL"
        ],
        "salary": "$90,000 - $120,000",
        "employer_id": 1
    },
    {
        "id": 23,
        "category": "Front-End",
        "title": "UI/UX Designer",
        "company": "WebDesign Co",
        "companyLogo": "/public/vite.svg",
        "location": "Remote",
        "type": "Full-time",
        "experience": "2-5 years",
        "description": "Design user interfaces for web applications...",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript"
        ],
        "salary": "$70,000 - $90,000",
        "employer_id": 1
    },
    {
        "id": 24,
        "category": "Back-End",
        "title": "Backend Developer",
        "company": "ServerLogic",
        "companyLogo": "/public/vite.svg",
        "location": "On-Site",
        "type": "Full-time",
        "experience": "4-6 years",
        "description": "Develop server-side logic and integrate databases...",
        "skills": [
            "Java",
            "Spring Boot",
            "MySQL"
        ],
        "salary": "$85,000 - $110,000",
        "employer_id": 1
    },
    {
        "id": 25,
        "category": "Machine Learning",
        "title": "Machine Learning Eng",
        "company": "ML Innovations",
        "companyLogo": "/public/vite.svg",
        "location": "Remote",
        "type": "Full-time",
        "experience": "3-5 years",
        "description": "Apply machine learning techniques to solve complex problems...",
        "skills": [
            "Python",
            "TensorFlow",
            "Scikit-Learn"
        ],
        "salary": "$95,000 - $120,000",
        "employer_id": 1
    },
    {
        "id": 26,
        "category": "Software Development",
        "title": "Full Stack Developer",
        "company": "TechCo",
        "companyLogo": "/public/vite.svg",
        "location": "San Francisco, CA",
        "type": "Full-time",
        "experience": "3-5 years",
        "description": "Exciting opportunity for a skilled Full Stack Developer...",
        "skills": [
            "React",
            "Node.js",
            "MongoDB"
        ],
        "salary": "$80,000 - $100,000",
        "employer_id": 1
    },
    {
        "id": 27,
        "category": "Data Science",
        "title": "Data Scientist",
        "company": "Data Insights",
        "companyLogo": "/public/vite.svg",
        "location": "New York, NY",
        "type": "Full-time",
        "experience": "2-4 years",
        "description": "Join our data science team to analyze and interpret complex data sets...",
        "skills": [
            "Python",
            "Machine Learning",
            "SQL"
        ],
        "salary": "$90,000 - $120,000",
        "employer_id": 1
    },
    {
        "id": 28,
        "category": "Front-End",
        "title": "UI/UX Designer",
        "company": "WebDesign Co",
        "companyLogo": "/images/company/logo.svg",
        "location": "Remote",
        "type": "Full-time",
        "experience": "2-5 years",
        "description": "Design user interfaces for web applications...",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript"
        ],
        "salary": "$70,000 - $90,000",
        "employer_id": 1
    },
    {
        "id": 29,
        "category": "Back-End",
        "title": "Backend Developer",
        "company": "ServerLogic",
        "companyLogo": "/images/company/logo.svg",
        "location": "On-Site",
        "type": "Full-time",
        "experience": "4-6 years",
        "description": "Develop server-side logic and integrate databases...",
        "skills": [
            "Java",
            "Spring Boot",
            "MySQL"
        ],
        "salary": "$85,000 - $110,000",
        "employer_id": 1
    },
    {
        "id": 30,
        "category": "Machine Learning",
        "title": "Machine Learning Eng",
        "company": "ML Innovations",
        "companyLogo": "/images/company/logo.svg",
        "location": "Remote",
        "type": "Full-time",
        "experience": "3-5 years",
        "description": "Apply machine learning techniques to solve complex problems...",
        "skills": [
            "Python",
            "TensorFlow",
            "Scikit-Learn"
        ],
        "salary": "$95,000 - $120,000",
        "employer_id": 1
    },
    {
        "id": 31,
        "category": "Software Development",
        "title": "Full Stack Developer",
        "company": "TechCo",
        "companyLogo": "/public/vite.svg",
        "location": "San Francisco, CA",
        "type": "Full-time",
        "experience": "3-5 years",
        "description": "Exciting opportunity for a skilled Full Stack Developer...",
        "skills": [
            "React",
            "Node.js",
            "MongoDB"
        ],
        "salary": "$80,000 - $100,000",
        "employer_id": 1
    },
    {
        "id": 32,
        "category": "Data Science",
        "title": "Data Scientist",
        "company": "Data Insights",
        "companyLogo": "/public/vite.svg",
        "location": "New York, NY",
        "type": "Full-time",
        "experience": "2-4 years",
        "description": "Join our data science team to analyze and interpret complex data sets...",
        "skills": [
            "Python",
            "Machine Learning",
            "SQL"
        ],
        "salary": "$90,000 - $120,000",
        "employer_id": 1
    },
    {
        "id": 33,
        "category": "Front-End",
        "title": "UI/UX Designer",
        "company": "WebDesign Co",
        "companyLogo": "/public/vite.svg",
        "location": "Remote",
        "type": "Full-time",
        "experience": "2-5 years",
        "description": "Design user interfaces for web applications...",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript"
        ],
        "salary": "$70,000 - $90,000",
        "employer_id": 1
    },
    {
        "id": 34,
        "category": "Back-End",
        "title": "Backend Developer",
        "company": "ServerLogic",
        "companyLogo": "/public/vite.svg",
        "location": "On-Site",
        "type": "Full-time",
        "experience": "4-6 years",
        "description": "Develop server-side logic and integrate databases...",
        "skills": [
            "Java",
            "Spring Boot",
            "MySQL"
        ],
        "salary": "$85,000 - $110,000",
        "employer_id": 1
    },
    {
        "id": 35,
        "category": "Machine Learning",
        "title": "Machine Learning Eng",
        "company": "ML Innovations",
        "companyLogo": "/public/vite.svg",
        "location": "Remote",
        "type": "Full-time",
        "experience": "3-5 years",
        "description": "Apply machine learning techniques to solve complex problems...",
        "skills": [
            "Python",
            "TensorFlow",
            "Scikit-Learn"
        ],
        "salary": "$95,000 - $120,000",
        "employer_id": 1
    },
    {
        "id": 36,
        "category": "Software Development",
        "title": "Full Stack Developer",
        "company": "TechCo",
        "companyLogo": "/public/vite.svg",
        "location": "San Francisco, CA",
        "type": "Full-time",
        "experience": "3-5 years",
        "description": "Exciting opportunity for a skilled Full Stack Developer...",
        "skills": [
            "React",
            "Node.js",
            "MongoDB"
        ],
        "salary": "$80,000 - $100,000",
        "employer_id": 1
    },
    {
        "id": 37,
        "category": "Data Science",
        "title": "Data Scientist",
        "company": "Data Insights",
        "companyLogo": "/public/vite.svg",
        "location": "New York, NY",
        "type": "Full-time",
        "experience": "2-4 years",
        "description": "Join our data science team to analyze and interpret complex data sets...",
        "skills": [
            "Python",
            "Machine Learning",
            "SQL"
        ],
        "salary": "$90,000 - $120,000",
        "employer_id": 1
    },
    {
        "id": 38,
        "category": "Front-End",
        "title": "UI/UX Designer",
        "company": "WebDesign Co",
        "companyLogo": "/images/company/logo.svg",
        "location": "Remote",
        "type": "Full-time",
        "experience": "2-5 years",
        "description": "Design user interfaces for web applications...",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript"
        ],
        "salary": "$70,000 - $90,000",
        "employer_id": 1
    },
    {
        "id": 39,
        "category": "Back-End",
        "title": "Backend Developer",
        "company": "ServerLogic",
        "companyLogo": "/images/company/logo.svg",
        "location": "On-Site",
        "type": "Full-time",
        "experience": "4-6 years",
        "description": "Develop server-side logic and integrate databases...",
        "skills": [
            "Java",
            "Spring Boot",
            "MySQL"
        ],
        "salary": "$85,000 - $110,000",
        "employer_id": 1
    },
    {
        "id": 40,
        "category": "Machine Learning",
        "title": "Machine Learning Eng",
        "company": "ML Innovations",
        "companyLogo": "/images/company/logo.svg",
        "location": "Remote",
        "type": "Full-time",
        "experience": "3-5 years",
        "description": "Apply machine learning techniques to solve complex problems...",
        "skills": [
            "Python",
            "TensorFlow",
            "Scikit-Learn"
        ],
        "salary": "$95,000 - $120,000",
        "employer_id": 1
    },
    {
        "id": 41,
        "category": "Software Development",
        "title": "Full Stack Developer",
        "company": "TechCo",
        "companyLogo": "/public/vite.svg",
        "location": "San Francisco, CA",
        "type": "Full-time",
        "experience": "3-5 years",
        "description": "Exciting opportunity for a skilled Full Stack Developer...",
        "skills": [
            "React",
            "Node.js",
            "MongoDB"
        ],
        "salary": "$80,000 - $100,000",
        "employer_id": 1
    },
    {
        "id": 42,
        "category": "Data Science",
        "title": "Data Scientist",
        "company": "Data Insights",
        "companyLogo": "/public/vite.svg",
        "location": "New York, NY",
        "type": "Full-time",
        "experience": "2-4 years",
        "description": "Join our data science team to analyze and interpret complex data sets...",
        "skills": [
            "Python",
            "Machine Learning",
            "SQL"
        ],
        "salary": "$90,000 - $120,000",
        "employer_id": 1
    },
    {
        "id": 43,
        "category": "Front-End",
        "title": "UI/UX Designer",
        "company": "WebDesign Co",
        "companyLogo": "/public/vite.svg",
        "location": "Remote",
        "type": "Full-time",
        "experience": "2-5 years",
        "description": "Design user interfaces for web applications...",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript"
        ],
        "salary": "$70,000 - $90,000",
        "employer_id": 1
    },
    {
        "id": 44,
        "category": "Back-End",
        "title": "Backend Developer",
        "company": "ServerLogic",
        "companyLogo": "/public/vite.svg",
        "location": "On-Site",
        "type": "Full-time",
        "experience": "4-6 years",
        "description": "Develop server-side logic and integrate databases...",
        "skills": [
            "Java",
            "Spring Boot",
            "MySQL"
        ],
        "salary": "$85,000 - $110,000",
        "employer_id": 1
    },
    {
        "id": 45,
        "category": "Machine Learning",
        "title": "Machine Learning Eng",
        "company": "ML Innovations",
        "companyLogo": "/public/vite.svg",
        "location": "Remote",
        "type": "Full-time",
        "experience": "3-5 years",
        "description": "Apply machine learning techniques to solve complex problems...",
        "skills": [
            "Python",
            "TensorFlow",
            "Scikit-Learn"
        ],
        "salary": "$95,000 - $120,000",
        "employer_id": 1
    },
    {
        "id": 46,
        "category": "Software Development",
        "title": "Full Stack Developer",
        "company": "TechCo",
        "companyLogo": "/public/vite.svg",
        "location": "San Francisco, CA",
        "type": "Full-time",
        "experience": "3-5 years",
        "description": "Exciting opportunity for a skilled Full Stack Developer...",
        "skills": [
            "React",
            "Node.js",
            "MongoDB"
        ],
        "salary": "$80,000 - $100,000",
        "employer_id": 1
    },
    {
        "id": 47,
        "category": "Data Science",
        "title": "Data Scientist",
        "company": "Data Insights",
        "companyLogo": "/public/vite.svg",
        "location": "New York, NY",
        "type": "Full-time",
        "experience": "2-4 years",
        "description": "Join our data science team to analyze and interpret complex data sets...",
        "skills": [
            "Python",
            "Machine Learning",
            "SQL"
        ],
        "salary": "$90,000 - $120,000",
        "employer_id": 1
    },
    {
        "id": 48,
        "category": "Front-End",
        "title": "UI/UX Designer",
        "company": "WebDesign Co",
        "companyLogo": "/images/company/logo.svg",
        "location": "Remote",
        "type": "Full-time",
        "experience": "2-5 years",
        "description": "Design user interfaces for web applications...",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript"
        ],
        "salary": "$70,000 - $90,000",
        "employer_id": 1
    },
    {
        "id": 49,
        "category": "Back-End",
        "title": "Backend Developer",
        "company": "ServerLogic",
        "companyLogo": "/images/company/logo.svg",
        "location": "On-Site",
        "type": "Full-time",
        "experience": "4-6 years",
        "description": "Develop server-side logic and integrate databases...",
        "skills": [
            "Java",
            "Spring Boot",
            "MySQL"
        ],
        "salary": "$85,000 - $110,000",
        "employer_id": 1
    },
    {
        "id": 50,
        "category": "Machine Learning",
        "title": "Machine Learning Eng",
        "company": "ML Innovations",
        "companyLogo": "/images/company/logo.svg",
        "location": "Remote",
        "type": "Full-time",
        "experience": "3-5 years",
        "description": "Apply machine learning techniques to solve complex problems...",
        "skills": [
            "Python",
            "TensorFlow",
            "Scikit-Learn"
        ],
        "salary": "$95,000 - $120,000",
        "employer_id": 1
    },
    {
        "id": 51,
        "category": "Software Development",
        "title": "Full Stack Developer",
        "company": "TechCo",
        "companyLogo": "/public/vite.svg",
        "location": "San Francisco, CA",
        "type": "Full-time",
        "experience": "3-5 years",
        "description": "Exciting opportunity for a skilled Full Stack Developer...",
        "skills": [
            "React",
            "Node.js",
            "MongoDB"
        ],
        "salary": "$80,000 - $100,000",
        "employer_id": 1
    },
    {
        "id": 52,
        "category": "Data Science",
        "title": "Data Scientist",
        "company": "Data Insights",
        "companyLogo": "/public/vite.svg",
        "location": "New York, NY",
        "type": "Full-time",
        "experience": "2-4 years",
        "description": "Join our data science team to analyze and interpret complex data sets...",
        "skills": [
            "Python",
            "Machine Learning",
            "SQL"
        ],
        "salary": "$90,000 - $120,000",
        "employer_id": 1
    },
    {
        "id": 53,
        "category": "Front-End",
        "title": "UI/UX Designer",
        "company": "WebDesign Co",
        "companyLogo": "/public/vite.svg",
        "location": "Remote",
        "type": "Full-time",
        "experience": "2-5 years",
        "description": "Design user interfaces for web applications...",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript"
        ],
        "salary": "$70,000 - $90,000",
        "employer_id": 1
    },
    {
        "id": 54,
        "category": "Back-End",
        "title": "Backend Developer",
        "company": "ServerLogic",
        "companyLogo": "/public/vite.svg",
        "location": "On-Site",
        "type": "Full-time",
        "experience": "4-6 years",
        "description": "Develop server-side logic and integrate databases...",
        "skills": [
            "Java",
            "Spring Boot",
            "MySQL"
        ],
        "salary": "$85,000 - $110,000",
        "employer_id": 1
    },
    {
        "id": 55,
        "category": "Machine Learning",
        "title": "Machine Learning Eng",
        "company": "ML Innovations",
        "companyLogo": "/public/vite.svg",
        "location": "Remote",
        "type": "Full-time",
        "experience": "3-5 years",
        "description": "Apply machine learning techniques to solve complex problems...",
        "skills": [
            "Python",
            "TensorFlow",
            "Scikit-Learn"
        ],
        "salary": "$95,000 - $120,000",
        "employer_id": 1
    },
    {
        "id": 56,
        "category": "Software Development",
        "title": "Full Stack Developer",
        "company": "TechCo",
        "companyLogo": "/public/vite.svg",
        "location": "San Francisco, CA",
        "type": "Full-time",
        "experience": "3-5 years",
        "description": "Exciting opportunity for a skilled Full Stack Developer...",
        "skills": [
            "React",
            "Node.js",
            "MongoDB"
        ],
        "salary": "$80,000 - $100,000",
        "employer_id": 1
    },
    {
        "id": 57,
        "category": "Data Science",
        "title": "Data Scientist",
        "company": "Data Insights",
        "companyLogo": "/public/vite.svg",
        "location": "New York, NY",
        "type": "Full-time",
        "experience": "2-4 years",
        "description": "Join our data science team to analyze and interpret complex data sets...",
        "skills": [
            "Python",
            "Machine Learning",
            "SQL"
        ],
        "salary": "$90,000 - $120,000",
        "employer_id": 1
    },
    {
        "id": 58,
        "category": "Front-End",
        "title": "UI/UX Designer",
        "company": "WebDesign Co",
        "companyLogo": "/images/company/logo.svg",
        "location": "Remote",
        "type": "Full-time",
        "experience": "2-5 years",
        "description": "Design user interfaces for web applications...",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript"
        ],
        "salary": "$70,000 - $90,000",
        "employer_id": 1
    },
    {
        "id": 59,
        "category": "Back-End",
        "title": "Backend Developer",
        "company": "ServerLogic",
        "companyLogo": "/images/company/logo.svg",
        "location": "On-Site",
        "type": "Full-time",
        "experience": "4-6 years",
        "description": "Develop server-side logic and integrate databases...",
        "skills": [
            "Java",
            "Spring Boot",
            "MySQL"
        ],
        "salary": "$85,000 - $110,000",
        "employer_id": 1
    },
    {
        "id": 60,
        "category": "Machine Learning",
        "title": "Machine Learning Eng",
        "company": "ML Innovations",
        "companyLogo": "/images/company/logo.svg",
        "location": "Remote",
        "type": "Full-time",
        "experience": "3-5 years",
        "description": "Apply machine learning techniques to solve complex problems...",
        "skills": [
            "Python",
            "TensorFlow",
            "Scikit-Learn"
        ],
        "salary": "$95,000 - $120,000",
        "employer_id": 1
    },
    {
        "id": 61,
        "category": "Software Development",
        "title": "Full Stack Developer",
        "company": "TechCo",
        "companyLogo": "/public/vite.svg",
        "location": "San Francisco, CA",
        "type": "Full-time",
        "experience": "3-5 years",
        "description": "Exciting opportunity for a skilled Full Stack Developer...",
        "skills": [
            "React",
            "Node.js",
            "MongoDB"
        ],
        "salary": "$80,000 - $100,000",
        "employer_id": 1
    },
    {
        "id": 62,
        "category": "Data Science",
        "title": "Data Scientist",
        "company": "Data Insights",
        "companyLogo": "/public/vite.svg",
        "location": "New York, NY",
        "type": "Full-time",
        "experience": "2-4 years",
        "description": "Join our data science team to analyze and interpret complex data sets...",
        "skills": [
            "Python",
            "Machine Learning",
            "SQL"
        ],
        "salary": "$90,000 - $120,000",
        "employer_id": 1
    },
    {
        "id": 63,
        "category": "Front-End",
        "title": "UI/UX Designer",
        "company": "WebDesign Co",
        "companyLogo": "/public/vite.svg",
        "location": "Remote",
        "type": "Full-time",
        "experience": "2-5 years",
        "description": "Design user interfaces for web applications...",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript"
        ],
        "salary": "$70,000 - $90,000",
        "employer_id": 1
    },
    {
        "id": 64,
        "category": "Back-End",
        "title": "Backend Developer",
        "company": "ServerLogic",
        "companyLogo": "/public/vite.svg",
        "location": "On-Site",
        "type": "Full-time",
        "experience": "4-6 years",
        "description": "Develop server-side logic and integrate databases...",
        "skills": [
            "Java",
            "Spring Boot",
            "MySQL"
        ],
        "salary": "$85,000 - $110,000",
        "employer_id": 1
    },
    {
        "id": 65,
        "category": "Machine Learning",
        "title": "Machine Learning Eng",
        "company": "ML Innovations",
        "companyLogo": "/public/vite.svg",
        "location": "Remote",
        "type": "Full-time",
        "experience": "3-5 years",
        "description": "Apply machine learning techniques to solve complex problems...",
        "skills": [
            "Python",
            "TensorFlow",
            "Scikit-Learn"
        ],
        "salary": "$95,000 - $120,000",
        "employer_id": 1
    },
    {
        "id": 66,
        "category": "Software Development",
        "title": "Full Stack Developer",
        "company": "TechCo",
        "companyLogo": "/public/vite.svg",
        "location": "San Francisco, CA",
        "type": "Full-time",
        "experience": "3-5 years",
        "description": "Exciting opportunity for a skilled Full Stack Developer...",
        "skills": [
            "React",
            "Node.js",
            "MongoDB"
        ],
        "salary": "$80,000 - $100,000",
        "employer_id": 1
    },
    {
        "id": 67,
        "category": "Data Science",
        "title": "Data Scientist",
        "company": "Data Insights",
        "companyLogo": "/public/vite.svg",
        "location": "New York, NY",
        "type": "Full-time",
        "experience": "2-4 years",
        "description": "Join our data science team to analyze and interpret complex data sets...",
        "skills": [
            "Python",
            "Machine Learning",
            "SQL"
        ],
        "salary": "$90,000 - $120,000",
        "employer_id": 1
    },
    {
        "id": 68,
        "category": "Front-End",
        "title": "UI/UX Designer",
        "company": "WebDesign Co",
        "companyLogo": "/images/company/logo.svg",
        "location": "Remote",
        "type": "Full-time",
        "experience": "2-5 years",
        "description": "Design user interfaces for web applications...",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript"
        ],
        "salary": "$70,000 - $90,000",
        "employer_id": 1
    },
    {
        "id": 69,
        "category": "Back-End",
        "title": "Backend Developer",
        "company": "ServerLogic",
        "companyLogo": "/images/company/logo.svg",
        "location": "On-Site",
        "type": "Full-time",
        "experience": "4-6 years",
        "description": "Develop server-side logic and integrate databases...",
        "skills": [
            "Java",
            "Spring Boot",
            "MySQL"
        ],
        "salary": "$85,000 - $110,000",
        "employer_id": 1
    },
    {
        "id": 70,
        "category": "Machine Learning",
        "title": "Machine Learning Eng",
        "company": "ML Innovations",
        "companyLogo": "/images/company/logo.svg",
        "location": "Remote",
        "type": "Full-time",
        "experience": "3-5 years",
        "description": "Apply machine learning techniques to solve complex problems...",
        "skills": [
            "Python",
            "TensorFlow",
            "Scikit-Learn"
        ],
        "salary": "$95,000 - $120,000",
        "employer_id": 1
    },
    {
        "id": 71,
        "category": "Software Development",
        "title": "Full Stack Developer",
        "company": "TechCo",
        "companyLogo": "/public/vite.svg",
        "location": "San Francisco, CA",
        "type": "Full-time",
        "experience": "3-5 years",
        "description": "Exciting opportunity for a skilled Full Stack Developer...",
        "skills": [
            "React",
            "Node.js",
            "MongoDB"
        ],
        "salary": "$80,000 - $100,000",
        "employer_id": 1
    },
    {
        "id": 72,
        "category": "Data Science",
        "title": "Data Scientist",
        "company": "Data Insights",
        "companyLogo": "/public/vite.svg",
        "location": "New York, NY",
        "type": "Full-time",
        "experience": "2-4 years",
        "description": "Join our data science team to analyze and interpret complex data sets...",
        "skills": [
            "Python",
            "Machine Learning",
            "SQL"
        ],
        "salary": "$90,000 - $120,000",
        "employer_id": 1
    },
    {
        "id": 73,
        "category": "Front-End",
        "title": "UI/UX Designer",
        "company": "WebDesign Co",
        "companyLogo": "/public/vite.svg",
        "location": "Remote",
        "type": "Full-time",
        "experience": "2-5 years",
        "description": "Design user interfaces for web applications...",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript"
        ],
        "salary": "$70,000 - $90,000",
        "employer_id": 1
    },
    {
        "id": 74,
        "category": "Back-End",
        "title": "Backend Developer",
        "company": "ServerLogic",
        "companyLogo": "/public/vite.svg",
        "location": "On-Site",
        "type": "Full-time",
        "experience": "4-6 years",
        "description": "Develop server-side logic and integrate databases...",
        "skills": [
            "Java",
            "Spring Boot",
            "MySQL"
        ],
        "salary": "$85,000 - $110,000",
        "employer_id": 1
    },
    {
        "id": 75,
        "category": "Machine Learning",
        "title": "Machine Learning Eng",
        "company": "ML Innovations",
        "companyLogo": "/public/vite.svg",
        "location": "Remote",
        "type": "Full-time",
        "experience": "3-5 years",
        "description": "Apply machine learning techniques to solve complex problems...",
        "skills": [
            "Python",
            "TensorFlow",
            "Scikit-Learn"
        ],
        "salary": "$95,000 - $120,000",
        "employer_id": 1
    },
    {
        "id": 76,
        "category": "Software Development",
        "title": "Full Stack Developer",
        "company": "TechCo",
        "companyLogo": "/public/vite.svg",
        "location": "San Francisco, CA",
        "type": "Full-time",
        "experience": "3-5 years",
        "description": "Exciting opportunity for a skilled Full Stack Developer...",
        "skills": [
            "React",
            "Node.js",
            "MongoDB"
        ],
        "salary": "$80,000 - $100,000",
        "employer_id": 1
    },
    {
        "id": 77,
        "category": "Data Science",
        "title": "Data Scientist",
        "company": "Data Insights",
        "companyLogo": "/public/vite.svg",
        "location": "New York, NY",
        "type": "Full-time",
        "experience": "2-4 years",
        "description": "Join our data science team to analyze and interpret complex data sets...",
        "skills": [
            "Python",
            "Machine Learning",
            "SQL"
        ],
        "salary": "$90,000 - $120,000",
        "employer_id": 1
    },
    {
        "id": 78,
        "category": "Front-End",
        "title": "UI/UX Designer",
        "company": "WebDesign Co",
        "companyLogo": "/images/company/logo.svg",
        "location": "Remote",
        "type": "Full-time",
        "experience": "2-5 years",
        "description": "Design user interfaces for web applications...",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript"
        ],
        "salary": "$70,000 - $90,000",
        "employer_id": 1
    },
    {
        "id": 79,
        "category": "Back-End",
        "title": "Backend Developer",
        "company": "ServerLogic",
        "companyLogo": "/images/company/logo.svg",
        "location": "On-Site",
        "type": "Full-time",
        "experience": "4-6 years",
        "description": "Develop server-side logic and integrate databases...",
        "skills": [
            "Java",
            "Spring Boot",
            "MySQL"
        ],
        "salary": "$85,000 - $110,000",
        "employer_id": 1
    },
    {
        "id": 80,
        "category": "Machine Learning",
        "title": "Machine Learning Eng",
        "company": "ML Innovations",
        "companyLogo": "/images/company/logo.svg",
        "location": "Remote",
        "type": "Full-time",
        "experience": "3-5 years",
        "description": "Apply machine learning techniques to solve complex problems...",
        "skills": [
            "Python",
            "TensorFlow",
            "Scikit-Learn"
        ],
        "salary": "$95,000 - $120,000",
        "employer_id": 1
    },
    {
        "id": 81,
        "category": "Software Development",
        "title": "Full Stack Developer",
        "company": "TechCo",
        "companyLogo": "/public/vite.svg",
        "location": "San Francisco, CA",
        "type": "Full-time",
        "experience": "3-5 years",
        "description": "Exciting opportunity for a skilled Full Stack Developer...",
        "skills": [
            "React",
            "Node.js",
            "MongoDB"
        ],
        "salary": "$80,000 - $100,000",
        "employer_id": 1
    },
    {
        "id": 82,
        "category": "Data Science",
        "title": "Data Scientist",
        "company": "Data Insights",
        "companyLogo": "/public/vite.svg",
        "location": "New York, NY",
        "type": "Full-time",
        "experience": "2-4 years",
        "description": "Join our data science team to analyze and interpret complex data sets...",
        "skills": [
            "Python",
            "Machine Learning",
            "SQL"
        ],
        "salary": "$90,000 - $120,000",
        "employer_id": 1
    },
    {
        "id": 83,
        "category": "Front-End",
        "title": "UI/UX Designer",
        "company": "WebDesign Co",
        "companyLogo": "/public/vite.svg",
        "location": "Remote",
        "type": "Full-time",
        "experience": "2-5 years",
        "description": "Design user interfaces for web applications...",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript"
        ],
        "salary": "$70,000 - $90,000",
        "employer_id": 1
    },
    {
        "id": 84,
        "category": "Back-End",
        "title": "Backend Developer",
        "company": "ServerLogic",
        "companyLogo": "/public/vite.svg",
        "location": "On-Site",
        "type": "Full-time",
        "experience": "4-6 years",
        "description": "Develop server-side logic and integrate databases...",
        "skills": [
            "Java",
            "Spring Boot",
            "MySQL"
        ],
        "salary": "$85,000 - $110,000",
        "employer_id": 1
    },
    {
        "id": 85,
        "category": "Machine Learning",
        "title": "Machine Learning Eng",
        "company": "ML Innovations",
        "companyLogo": "/public/vite.svg",
        "location": "Remote",
        "type": "Full-time",
        "experience": "3-5 years",
        "description": "Apply machine learning techniques to solve complex problems...",
        "skills": [
            "Python",
            "TensorFlow",
            "Scikit-Learn"
        ],
        "salary": "$95,000 - $120,000",
        "employer_id": 1
    },
    {
        "id": 86,
        "category": "Software Development",
        "title": "Full Stack Developer",
        "company": "TechCo",
        "companyLogo": "/public/vite.svg",
        "location": "San Francisco, CA",
        "type": "Full-time",
        "experience": "3-5 years",
        "description": "Exciting opportunity for a skilled Full Stack Developer...",
        "skills": [
            "React",
            "Node.js",
            "MongoDB"
        ],
        "salary": "$80,000 - $100,000",
        "employer_id": 1
    },
    {
        "id": 87,
        "category": "Data Science",
        "title": "Data Scientist",
        "company": "Data Insights",
        "companyLogo": "/public/vite.svg",
        "location": "New York, NY",
        "type": "Full-time",
        "experience": "2-4 years",
        "description": "Join our data science team to analyze and interpret complex data sets...",
        "skills": [
            "Python",
            "Machine Learning",
            "SQL"
        ],
        "salary": "$90,000 - $120,000",
        "employer_id": 1
    },
    {
        "id": 88,
        "category": "Front-End",
        "title": "UI/UX Designer",
        "company": "WebDesign Co",
        "companyLogo": "/images/company/logo.svg",
        "location": "Remote",
        "type": "Full-time",
        "experience": "2-5 years",
        "description": "Design user interfaces for web applications...",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript"
        ],
        "salary": "$70,000 - $90,000",
        "employer_id": 1
    },
    {
        "id": 89,
        "category": "Back-End",
        "title": "Backend Developer",
        "company": "ServerLogic",
        "companyLogo": "/images/company/logo.svg",
        "location": "On-Site",
        "type": "Full-time",
        "experience": "4-6 years",
        "description": "Develop server-side logic and integrate databases...",
        "skills": [
            "Java",
            "Spring Boot",
            "MySQL"
        ],
        "salary": "$85,000 - $110,000",
        "employer_id": 1
    },
    {
        "id": 90,
        "category": "Machine Learning",
        "title": "Machine Learning Eng",
        "company": "ML Innovations",
        "companyLogo": "/images/company/logo.svg",
        "location": "Remote",
        "type": "Full-time",
        "experience": "3-5 years",
        "description": "Apply machine learning techniques to solve complex problems...",
        "skills": [
            "Python",
            "TensorFlow",
            "Scikit-Learn"
        ],
        "salary": "$95,000 - $120,000",
        "employer_id": 1
    },
    {
        "id": 91,
        "category": "Software Development",
        "title": "Full Stack Developer",
        "company": "TechCo",
        "companyLogo": "/public/vite.svg",
        "location": "San Francisco, CA",
        "type": "Full-time",
        "experience": "3-5 years",
        "description": "Exciting opportunity for a skilled Full Stack Developer...",
        "skills": [
            "React",
            "Node.js",
            "MongoDB"
        ],
        "salary": "$80,000 - $100,000",
        "employer_id": 1
    },
    {
        "id": 92,
        "category": "Data Science",
        "title": "Data Scientist",
        "company": "Data Insights",
        "companyLogo": "/public/vite.svg",
        "location": "New York, NY",
        "type": "Full-time",
        "experience": "2-4 years",
        "description": "Join our data science team to analyze and interpret complex data sets...",
        "skills": [
            "Python",
            "Machine Learning",
            "SQL"
        ],
        "salary": "$90,000 - $120,000",
        "employer_id": 1
    },
    {
        "id": 93,
        "category": "Front-End",
        "title": "UI/UX Designer",
        "company": "WebDesign Co",
        "companyLogo": "/public/vite.svg",
        "location": "Remote",
        "type": "Full-time",
        "experience": "2-5 years",
        "description": "Design user interfaces for web applications...",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript"
        ],
        "salary": "$70,000 - $90,000",
        "employer_id": 1
    },
    {
        "id": 94,
        "category": "Back-End",
        "title": "Backend Developer",
        "company": "ServerLogic",
        "companyLogo": "/public/vite.svg",
        "location": "On-Site",
        "type": "Full-time",
        "experience": "4-6 years",
        "description": "Develop server-side logic and integrate databases...",
        "skills": [
            "Java",
            "Spring Boot",
            "MySQL"
        ],
        "salary": "$85,000 - $110,000",
        "employer_id": 1
    },
    {
        "id": 95,
        "category": "Machine Learning",
        "title": "Machine Learning Eng",
        "company": "ML Innovations",
        "companyLogo": "/public/vite.svg",
        "location": "Remote",
        "type": "Full-time",
        "experience": "3-5 years",
        "description": "Apply machine learning techniques to solve complex problems...",
        "skills": [
            "Python",
            "TensorFlow",
            "Scikit-Learn"
        ],
        "salary": "$95,000 - $120,000",
        "employer_id": 1
    },
    {
        "id": 96,
        "category": "Software Development",
        "title": "Full Stack Developer",
        "company": "TechCo",
        "companyLogo": "/public/vite.svg",
        "location": "San Francisco, CA",
        "type": "Full-time",
        "experience": "3-5 years",
        "description": "Exciting opportunity for a skilled Full Stack Developer...",
        "skills": [
            "React",
            "Node.js",
            "MongoDB"
        ],
        "salary": "$80,000 - $100,000",
        "employer_id": 1
    },
    {
        "id": 97,
        "category": "Data Science",
        "title": "Data Scientist",
        "company": "Data Insights",
        "companyLogo": "/public/vite.svg",
        "location": "New York, NY",
        "type": "Full-time",
        "experience": "2-4 years",
        "description": "Join our data science team to analyze and interpret complex data sets...",
        "skills": [
            "Python",
            "Machine Learning",
            "SQL"
        ],
        "salary": "$90,000 - $120,000",
        "employer_id": 1
    },
    {
        "id": 98,
        "category": "Front-End",
        "title": "UI/UX Designer",
        "company": "WebDesign Co",
        "companyLogo": "/images/company/logo.svg",
        "location": "Remote",
        "type": "Full-time",
        "experience": "2-5 years",
        "description": "Design user interfaces for web applications...",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript"
        ],
        "salary": "$70,000 - $90,000",
        "employer_id": 1
    },
    {
        "id": 99,
        "category": "Back-End",
        "title": "Backend Developer",
        "company": "ServerLogic",
        "companyLogo": "/images/company/logo.svg",
        "location": "On-Site",
        "type": "Full-time",
        "experience": "4-6 years",
        "description": "Develop server-side logic and integrate databases...",
        "skills": [
            "Java",
            "Spring Boot",
            "MySQL"
        ],
        "salary": "$85,000 - $110,000",
        "employer_id": 1
    },
    {
        "id": 100,
        "category": "Machine Learning",
        "title": "Machine Learning Eng",
        "company": "ML Innovations",
        "companyLogo": "/images/company/logo.svg",
        "location": "Remote",
        "type": "Full-time",
        "experience": "3-5 years",
        "description": "Apply machine learning techniques to solve complex problems...",
        "skills": [
            "Python",
            "TensorFlow",
            "Scikit-Learn"
        ],
        "salary": "$95,000 - $120,000",
        "employer_id": 1
    },
    {
        "id": 101,
        "category": "Software Development",
        "title": "Full Stack Developer",
        "company": "TechCo",
        "companyLogo": "/public/vite.svg",
        "location": "San Francisco, CA",
        "type": "Full-time",
        "experience": "3-5 years",
        "description": "Exciting opportunity for a skilled Full Stack Developer...",
        "skills": [
            "React",
            "Node.js",
            "MongoDB"
        ],
        "salary": "$80,000 - $100,000",
        "employer_id": 1
    },
    {
        "id": 102,
        "category": "Data Science",
        "title": "Data Scientist",
        "company": "Data Insights",
        "companyLogo": "/public/vite.svg",
        "location": "New York, NY",
        "type": "Full-time",
        "experience": "2-4 years",
        "description": "Join our data science team to analyze and interpret complex data sets...",
        "skills": [
            "Python",
            "Machine Learning",
            "SQL"
        ],
        "salary": "$90,000 - $120,000",
        "employer_id": 1
    },
    {
        "id": 103,
        "category": "Front-End",
        "title": "UI/UX Designer",
        "company": "WebDesign Co",
        "companyLogo": "/public/vite.svg",
        "location": "Remote",
        "type": "Full-time",
        "experience": "2-5 years",
        "description": "Design user interfaces for web applications...",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript"
        ],
        "salary": "$70,000 - $90,000",
        "employer_id": 1
    },
    {
        "id": 104,
        "category": "Back-End",
        "title": "Backend Developer",
        "company": "ServerLogic",
        "companyLogo": "/public/vite.svg",
        "location": "On-Site",
        "type": "Full-time",
        "experience": "4-6 years",
        "description": "Develop server-side logic and integrate databases...",
        "skills": [
            "Java",
            "Spring Boot",
            "MySQL"
        ],
        "salary": "$85,000 - $110,000",
        "employer_id": 1
    },
    {
        "id": 105,
        "category": "Machine Learning",
        "title": "Machine Learning Eng",
        "company": "ML Innovations",
        "companyLogo": "/public/vite.svg",
        "location": "Remote",
        "type": "Full-time",
        "experience": "3-5 years",
        "description": "Apply machine learning techniques to solve complex problems...",
        "skills": [
            "Python",
            "TensorFlow",
            "Scikit-Learn"
        ],
        "salary": "$95,000 - $120,000",
        "employer_id": 1
    },
    {
        "id": 106,
        "category": "Software Development",
        "title": "Full Stack Developer",
        "company": "TechCo",
        "companyLogo": "/public/vite.svg",
        "location": "San Francisco, CA",
        "type": "Full-time",
        "experience": "3-5 years",
        "description": "Exciting opportunity for a skilled Full Stack Developer...",
        "skills": [
            "React",
            "Node.js",
            "MongoDB"
        ],
        "salary": "$80,000 - $100,000",
        "employer_id": 1
    },
    {
        "id": 107,
        "category": "Data Science",
        "title": "Data Scientist",
        "company": "Data Insights",
        "companyLogo": "/public/vite.svg",
        "location": "New York, NY",
        "type": "Full-time",
        "experience": "2-4 years",
        "description": "Join our data science team to analyze and interpret complex data sets...",
        "skills": [
            "Python",
            "Machine Learning",
            "SQL"
        ],
        "salary": "$90,000 - $120,000",
        "employer_id": 1
    },
    {
        "id": 108,
        "category": "Front-End",
        "title": "UI/UX Designer",
        "company": "WebDesign Co",
        "companyLogo": "/images/company/logo.svg",
        "location": "Remote",
        "type": "Full-time",
        "experience": "2-5 years",
        "description": "Design user interfaces for web applications...",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript"
        ],
        "salary": "$70,000 - $90,000",
        "employer_id": 1
    },
    {
        "id": 109,
        "category": "Back-End",
        "title": "Backend Developer",
        "company": "ServerLogic",
        "companyLogo": "/images/company/logo.svg",
        "location": "On-Site",
        "type": "Full-time",
        "experience": "4-6 years",
        "description": "Develop server-side logic and integrate databases...",
        "skills": [
            "Java",
            "Spring Boot",
            "MySQL"
        ],
        "salary": "$85,000 - $110,000",
        "employer_id": 1
    },
    {
        "id": 110,
        "category": "Machine Learning",
        "title": "Machine Learning Eng",
        "company": "ML Innovations",
        "companyLogo": "/images/company/logo.svg",
        "location": "Remote",
        "type": "Full-time",
        "experience": "3-5 years",
        "description": "Apply machine learning techniques to solve complex problems...",
        "skills": [
            "Python",
            "TensorFlow",
            "Scikit-Learn"
        ],
        "salary": "$95,000 - $120,000",
        "employer_id": 1
    },
    {
        "id": 111,
        "category": "Software Development",
        "title": "Full Stack Developer",
        "company": "TechCo",
        "companyLogo": "/public/vite.svg",
        "location": "San Francisco, CA",
        "type": "Full-time",
        "experience": "3-5 years",
        "description": "Exciting opportunity for a skilled Full Stack Developer...",
        "skills": [
            "React",
            "Node.js",
            "MongoDB"
        ],
        "salary": "$80,000 - $100,000",
        "employer_id": 1
    },
    {
        "id": 112,
        "category": "Data Science",
        "title": "Data Scientist",
        "company": "Data Insights",
        "companyLogo": "/public/vite.svg",
        "location": "New York, NY",
        "type": "Full-time",
        "experience": "2-4 years",
        "description": "Join our data science team to analyze and interpret complex data sets...",
        "skills": [
            "Python",
            "Machine Learning",
            "SQL"
        ],
        "salary": "$90,000 - $120,000",
        "employer_id": 1
    },
    {
        "id": 113,
        "category": "Front-End",
        "title": "UI/UX Designer",
        "company": "WebDesign Co",
        "companyLogo": "/public/vite.svg",
        "location": "Remote",
        "type": "Full-time",
        "experience": "2-5 years",
        "description": "Design user interfaces for web applications...",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript"
        ],
        "salary": "$70,000 - $90,000",
        "employer_id": 1
    },
    {
        "id": 114,
        "category": "Back-End",
        "title": "Backend Developer",
        "company": "ServerLogic",
        "companyLogo": "/public/vite.svg",
        "location": "On-Site",
        "type": "Full-time",
        "experience": "4-6 years",
        "description": "Develop server-side logic and integrate databases...",
        "skills": [
            "Java",
            "Spring Boot",
            "MySQL"
        ],
        "salary": "$85,000 - $110,000",
        "employer_id": 1
    },
    {
        "id": 115,
        "category": "Machine Learning",
        "title": "Machine Learning Eng",
        "company": "ML Innovations",
        "companyLogo": "/public/vite.svg",
        "location": "Remote",
        "type": "Full-time",
        "experience": "3-5 years",
        "description": "Apply machine learning techniques to solve complex problems...",
        "skills": [
            "Python",
            "TensorFlow",
            "Scikit-Learn"
        ],
        "salary": "$95,000 - $120,000",
        "employer_id": 1
    },
    {
        "id": 116,
        "category": "Software Development",
        "title": "Full Stack Developer",
        "company": "TechCo",
        "companyLogo": "/public/vite.svg",
        "location": "San Francisco, CA",
        "type": "Full-time",
        "experience": "3-5 years",
        "description": "Exciting opportunity for a skilled Full Stack Developer...",
        "skills": [
            "React",
            "Node.js",
            "MongoDB"
        ],
        "salary": "$80,000 - $100,000",
        "employer_id": 1
    },
    {
        "id": 117,
        "category": "Data Science",
        "title": "Data Scientist",
        "company": "Data Insights",
        "companyLogo": "/public/vite.svg",
        "location": "New York, NY",
        "type": "Full-time",
        "experience": "2-4 years",
        "description": "Join our data science team to analyze and interpret complex data sets...",
        "skills": [
            "Python",
            "Machine Learning",
            "SQL"
        ],
        "salary": "$90,000 - $120,000",
        "employer_id": 1
    },
    {
        "id": 118,
        "category": "Front-End",
        "title": "UI/UX Designer",
        "company": "WebDesign Co",
        "companyLogo": "/images/company/logo.svg",
        "location": "Remote",
        "type": "Full-time",
        "experience": "2-5 years",
        "description": "Design user interfaces for web applications...",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript"
        ],
        "salary": "$70,000 - $90,000",
        "employer_id": 1
    },
    {
        "id": 119,
        "category": "Back-End",
        "title": "Backend Developer",
        "company": "ServerLogic",
        "companyLogo": "/images/company/logo.svg",
        "location": "On-Site",
        "type": "Full-time",
        "experience": "4-6 years",
        "description": "Develop server-side logic and integrate databases...",
        "skills": [
            "Java",
            "Spring Boot",
            "MySQL"
        ],
        "salary": "$85,000 - $110,000",
        "employer_id": 1
    },
    {
        "id": 120,
        "category": "Machine Learning",
        "title": "Machine Learning Eng",
        "company": "ML Innovations",
        "companyLogo": "/images/company/logo.svg",
        "location": "Remote",
        "type": "Full-time",
        "experience": "3-5 years",
        "description": "Apply machine learning techniques to solve complex problems...",
        "skills": [
            "Python",
            "TensorFlow",
            "Scikit-Learn"
        ],
        "salary": "$95,000 - $120,000",
        "employer_id": 1
    },
    {
        "id": 121,
        "category": "Software Development",
        "title": "Full Stack Developer",
        "company": "TechCo",
        "companyLogo": "/public/vite.svg",
        "location": "San Francisco, CA",
        "type": "Full-time",
        "experience": "3-5 years",
        "description": "Exciting opportunity for a skilled Full Stack Developer...",
        "skills": [
            "React",
            "Node.js",
            "MongoDB"
        ],
        "salary": "$80,000 - $100,000",
        "employer_id": 1
    },
    {
        "id": 122,
        "category": "Data Science",
        "title": "Data Scientist",
        "company": "Data Insights",
        "companyLogo": "/public/vite.svg",
        "location": "New York, NY",
        "type": "Full-time",
        "experience": "2-4 years",
        "description": "Join our data science team to analyze and interpret complex data sets...",
        "skills": [
            "Python",
            "Machine Learning",
            "SQL"
        ],
        "salary": "$90,000 - $120,000",
        "employer_id": 1
    },
    {
        "id": 123,
        "category": "Front-End",
        "title": "UI/UX Designer",
        "company": "WebDesign Co",
        "companyLogo": "/public/vite.svg",
        "location": "Remote",
        "type": "Full-time",
        "experience": "2-5 years",
        "description": "Design user interfaces for web applications...",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript"
        ],
        "salary": "$70,000 - $90,000",
        "employer_id": 1
    },
    {
        "id": 124,
        "category": "Back-End",
        "title": "Backend Developer",
        "company": "ServerLogic",
        "companyLogo": "/public/vite.svg",
        "location": "On-Site",
        "type": "Full-time",
        "experience": "4-6 years",
        "description": "Develop server-side logic and integrate databases...",
        "skills": [
            "Java",
            "Spring Boot",
            "MySQL"
        ],
        "salary": "$85,000 - $110,000",
        "employer_id": 1
    },
    {
        "id": 125,
        "category": "Machine Learning",
        "title": "Machine Learning Eng",
        "company": "ML Innovations",
        "companyLogo": "/public/vite.svg",
        "location": "Remote",
        "type": "Full-time",
        "experience": "3-5 years",
        "description": "Apply machine learning techniques to solve complex problems...",
        "skills": [
            "Python",
            "TensorFlow",
            "Scikit-Learn"
        ],
        "salary": "$95,000 - $120,000",
        "employer_id": 1
    },
    {
        "id": 126,
        "category": "Software Development",
        "title": "Full Stack Developer",
        "company": "TechCo",
        "companyLogo": "/public/vite.svg",
        "location": "San Francisco, CA",
        "type": "Full-time",
        "experience": "3-5 years",
        "description": "Exciting opportunity for a skilled Full Stack Developer...",
        "skills": [
            "React",
            "Node.js",
            "MongoDB"
        ],
        "salary": "$80,000 - $100,000",
        "employer_id": 1
    },
    {
        "id": 127,
        "category": "Data Science",
        "title": "Data Scientist",
        "company": "Data Insights",
        "companyLogo": "/public/vite.svg",
        "location": "New York, NY",
        "type": "Full-time",
        "experience": "2-4 years",
        "description": "Join our data science team to analyze and interpret complex data sets...",
        "skills": [
            "Python",
            "Machine Learning",
            "SQL"
        ],
        "salary": "$90,000 - $120,000",
        "employer_id": 1
    },
    {
        "id": 128,
        "category": "Front-End",
        "title": "UI/UX Designer",
        "company": "WebDesign Co",
        "companyLogo": "/images/company/logo.svg",
        "location": "Remote",
        "type": "Full-time",
        "experience": "2-5 years",
        "description": "Design user interfaces for web applications...",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript"
        ],
        "salary": "$70,000 - $90,000",
        "employer_id": 1
    },
    {
        "id": 129,
        "category": "Back-End",
        "title": "Backend Developer",
        "company": "ServerLogic",
        "companyLogo": "/images/company/logo.svg",
        "location": "On-Site",
        "type": "Full-time",
        "experience": "4-6 years",
        "description": "Develop server-side logic and integrate databases...",
        "skills": [
            "Java",
            "Spring Boot",
            "MySQL"
        ],
        "salary": "$85,000 - $110,000",
        "employer_id": 1
    },
    {
        "id": 130,
        "category": "Machine Learning",
        "title": "Machine Learning Eng",
        "company": "ML Innovations",
        "companyLogo": "/images/company/logo.svg",
        "location": "Remote",
        "type": "Full-time",
        "experience": "3-5 years",
        "description": "Apply machine learning techniques to solve complex problems...",
        "skills": [
            "Python",
            "TensorFlow",
            "Scikit-Learn"
        ],
        "salary": "$95,000 - $120,000",
        "employer_id": 1
    },
    {
        "id": 131,
        "category": "Software Development",
        "title": "Full Stack Developer",
        "company": "TechCo",
        "companyLogo": "/public/vite.svg",
        "location": "San Francisco, CA",
        "type": "Full-time",
        "experience": "3-5 years",
        "description": "Exciting opportunity for a skilled Full Stack Developer...",
        "skills": [
            "React",
            "Node.js",
            "MongoDB"
        ],
        "salary": "$80,000 - $100,000",
        "employer_id": 1
    },
    {
        "id": 132,
        "category": "Data Science",
        "title": "Data Scientist",
        "company": "Data Insights",
        "companyLogo": "/public/vite.svg",
        "location": "New York, NY",
        "type": "Full-time",
        "experience": "2-4 years",
        "description": "Join our data science team to analyze and interpret complex data sets...",
        "skills": [
            "Python",
            "Machine Learning",
            "SQL"
        ],
        "salary": "$90,000 - $120,000",
        "employer_id": 1
    },
    {
        "id": 133,
        "category": "Front-End",
        "title": "UI/UX Designer",
        "company": "WebDesign Co",
        "companyLogo": "/public/vite.svg",
        "location": "Remote",
        "type": "Full-time",
        "experience": "2-5 years",
        "description": "Design user interfaces for web applications...",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript"
        ],
        "salary": "$70,000 - $90,000",
        "employer_id": 1
    },
    {
        "id": 134,
        "category": "Back-End",
        "title": "Backend Developer",
        "company": "ServerLogic",
        "companyLogo": "/public/vite.svg",
        "location": "On-Site",
        "type": "Full-time",
        "experience": "4-6 years",
        "description": "Develop server-side logic and integrate databases...",
        "skills": [
            "Java",
            "Spring Boot",
            "MySQL"
        ],
        "salary": "$85,000 - $110,000",
        "employer_id": 1
    },
    {
        "id": 135,
        "category": "Machine Learning",
        "title": "Machine Learning Eng",
        "company": "ML Innovations",
        "companyLogo": "/public/vite.svg",
        "location": "Remote",
        "type": "Full-time",
        "experience": "3-5 years",
        "description": "Apply machine learning techniques to solve complex problems...",
        "skills": [
            "Python",
            "TensorFlow",
            "Scikit-Learn"
        ],
        "salary": "$95,000 - $120,000",
        "employer_id": 1
    },
    {
        "id": 136,
        "category": "Software Development",
        "title": "Full Stack Developer",
        "company": "TechCo",
        "companyLogo": "/public/vite.svg",
        "location": "San Francisco, CA",
        "type": "Full-time",
        "experience": "3-5 years",
        "description": "Exciting opportunity for a skilled Full Stack Developer...",
        "skills": [
            "React",
            "Node.js",
            "MongoDB"
        ],
        "salary": "$80,000 - $100,000",
        "employer_id": 1
    },
    {
        "id": 137,
        "category": "Data Science",
        "title": "Data Scientist",
        "company": "Data Insights",
        "companyLogo": "/public/vite.svg",
        "location": "New York, NY",
        "type": "Full-time",
        "experience": "2-4 years",
        "description": "Join our data science team to analyze and interpret complex data sets...",
        "skills": [
            "Python",
            "Machine Learning",
            "SQL"
        ],
        "salary": "$90,000 - $120,000",
        "employer_id": 1
    },
    {
        "id": 138,
        "category": "Front-End",
        "title": "UI/UX Designer",
        "company": "WebDesign Co",
        "companyLogo": "/images/company/logo.svg",
        "location": "Remote",
        "type": "Full-time",
        "experience": "2-5 years",
        "description": "Design user interfaces for web applications...",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript"
        ],
        "salary": "$70,000 - $90,000",
        "employer_id": 1
    },
    {
        "id": 139,
        "category": "Back-End",
        "title": "Backend Developer",
        "company": "ServerLogic",
        "companyLogo": "/images/company/logo.svg",
        "location": "On-Site",
        "type": "Full-time",
        "experience": "4-6 years",
        "description": "Develop server-side logic and integrate databases...",
        "skills": [
            "Java",
            "Spring Boot",
            "MySQL"
        ],
        "salary": "$85,000 - $110,000",
        "employer_id": 1
    },
    {
        "id": 140,
        "category": "Machine Learning",
        "title": "Machine Learning Eng",
        "company": "ML Innovations",
        "companyLogo": "/images/company/logo.svg",
        "location": "Remote",
        "type": "Full-time",
        "experience": "3-5 years",
        "description": "Apply machine learning techniques to solve complex problems...",
        "skills": [
            "Python",
            "TensorFlow",
            "Scikit-Learn"
        ],
        "salary": "$95,000 - $120,000",
        "employer_id": 1
    },
    {
        "id": 141,
        "category": "Software Development",
        "title": "Full Stack Developer",
        "company": "TechCo",
        "companyLogo": "/public/vite.svg",
        "location": "San Francisco, CA",
        "type": "Full-time",
        "experience": "3-5 years",
        "description": "Exciting opportunity for a skilled Full Stack Developer...",
        "skills": [
            "React",
            "Node.js",
            "MongoDB"
        ],
        "salary": "$80,000 - $100,000",
        "employer_id": 1
    },
    {
        "id": 142,
        "category": "Data Science",
        "title": "Data Scientist",
        "company": "Data Insights",
        "companyLogo": "/public/vite.svg",
        "location": "New York, NY",
        "type": "Full-time",
        "experience": "2-4 years",
        "description": "Join our data science team to analyze and interpret complex data sets...",
        "skills": [
            "Python",
            "Machine Learning",
            "SQL"
        ],
        "salary": "$90,000 - $120,000",
        "employer_id": 1
    },
    {
        "id": 143,
        "category": "Front-End",
        "title": "UI/UX Designer",
        "company": "WebDesign Co",
        "companyLogo": "/public/vite.svg",
        "location": "Remote",
        "type": "Full-time",
        "experience": "2-5 years",
        "description": "Design user interfaces for web applications...",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript"
        ],
        "salary": "$70,000 - $90,000",
        "employer_id": 1
    },
    {
        "id": 144,
        "category": "Back-End",
        "title": "Backend Developer",
        "company": "ServerLogic",
        "companyLogo": "/public/vite.svg",
        "location": "On-Site",
        "type": "Full-time",
        "experience": "4-6 years",
        "description": "Develop server-side logic and integrate databases...",
        "skills": [
            "Java",
            "Spring Boot",
            "MySQL"
        ],
        "salary": "$85,000 - $110,000",
        "employer_id": 1
    },
    {
        "id": 145,
        "category": "Machine Learning",
        "title": "Machine Learning Eng",
        "company": "ML Innovations",
        "companyLogo": "/public/vite.svg",
        "location": "Remote",
        "type": "Full-time",
        "experience": "3-5 years",
        "description": "Apply machine learning techniques to solve complex problems...",
        "skills": [
            "Python",
            "TensorFlow",
            "Scikit-Learn"
        ],
        "salary": "$95,000 - $120,000",
        "employer_id": 1
    },
    {
        "id": 146,
        "category": "Software Development",
        "title": "Full Stack Developer",
        "company": "TechCo",
        "companyLogo": "/public/vite.svg",
        "location": "San Francisco, CA",
        "type": "Full-time",
        "experience": "3-5 years",
        "description": "Exciting opportunity for a skilled Full Stack Developer...",
        "skills": [
            "React",
            "Node.js",
            "MongoDB"
        ],
        "salary": "$80,000 - $100,000",
        "employer_id": 1
    },
    {
        "id": 147,
        "category": "Data Science",
        "title": "Data Scientist",
        "company": "Data Insights",
        "companyLogo": "/public/vite.svg",
        "location": "New York, NY",
        "type": "Full-time",
        "experience": "2-4 years",
        "description": "Join our data science team to analyze and interpret complex data sets...",
        "skills": [
            "Python",
            "Machine Learning",
            "SQL"
        ],
        "salary": "$90,000 - $120,000",
        "employer_id": 1
    },
    {
        "id": 148,
        "category": "Front-End",
        "title": "UI/UX Designer",
        "company": "WebDesign Co",
        "companyLogo": "/images/company/logo.svg",
        "location": "Remote",
        "type": "Full-time",
        "experience": "2-5 years",
        "description": "Design user interfaces for web applications...",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript"
        ],
        "salary": "$70,000 - $90,000",
        "employer_id": 1
    },
    {
        "id": 149,
        "category": "Back-End",
        "title": "Backend Developer",
        "company": "ServerLogic",
        "companyLogo": "/images/company/logo.svg",
        "location": "On-Site",
        "type": "Full-time",
        "experience": "4-6 years",
        "description": "Develop server-side logic and integrate databases...",
        "skills": [
            "Java",
            "Spring Boot",
            "MySQL"
        ],
        "salary": "$85,000 - $110,000",
        "employer_id": 1
    },
    {
        "id": 150,
        "category": "Machine Learning",
        "title": "Machine Learning Eng",
        "company": "ML Innovations",
        "companyLogo": "/images/company/logo.svg",
        "location": "Remote",
        "type": "Full-time",
        "experience": "3-5 years",
        "description": "Apply machine learning techniques to solve complex problems...",
        "skills": [
            "Python",
            "TensorFlow",
            "Scikit-Learn"
        ],
        "salary": "$95,000 - $120,000",
        "employer_id": 1
    },
    {
        "id": 151,
        "category": "Software Development",
        "title": "Full Stack Developer",
        "company": "TechCo",
        "companyLogo": "/public/vite.svg",
        "location": "San Francisco, CA",
        "type": "Full-time",
        "experience": "3-5 years",
        "description": "Exciting opportunity for a skilled Full Stack Developer...",
        "skills": [
            "React",
            "Node.js",
            "MongoDB"
        ],
        "salary": "$80,000 - $100,000",
        "employer_id": 1
    },
    {
        "id": 152,
        "category": "Data Science",
        "title": "Data Scientist",
        "company": "Data Insights",
        "companyLogo": "/public/vite.svg",
        "location": "New York, NY",
        "type": "Full-time",
        "experience": "2-4 years",
        "description": "Join our data science team to analyze and interpret complex data sets...",
        "skills": [
            "Python",
            "Machine Learning",
            "SQL"
        ],
        "salary": "$90,000 - $120,000",
        "employer_id": 1
    },
    {
        "id": 153,
        "category": "Front-End",
        "title": "UI/UX Designer",
        "company": "WebDesign Co",
        "companyLogo": "/public/vite.svg",
        "location": "Remote",
        "type": "Full-time",
        "experience": "2-5 years",
        "description": "Design user interfaces for web applications...",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript"
        ],
        "salary": "$70,000 - $90,000",
        "employer_id": 1
    },
    {
        "id": 154,
        "category": "Back-End",
        "title": "Backend Developer",
        "company": "ServerLogic",
        "companyLogo": "/public/vite.svg",
        "location": "On-Site",
        "type": "Full-time",
        "experience": "4-6 years",
        "description": "Develop server-side logic and integrate databases...",
        "skills": [
            "Java",
            "Spring Boot",
            "MySQL"
        ],
        "salary": "$85,000 - $110,000",
        "employer_id": 1
    },
    {
        "id": 155,
        "category": "Machine Learning",
        "title": "Machine Learning Eng",
        "company": "ML Innovations",
        "companyLogo": "/public/vite.svg",
        "location": "Remote",
        "type": "Full-time",
        "experience": "3-5 years",
        "description": "Apply machine learning techniques to solve complex problems...",
        "skills": [
            "Python",
            "TensorFlow",
            "Scikit-Learn"
        ],
        "salary": "$95,000 - $120,000",
        "employer_id": 1
    },
    {
        "id": 156,
        "category": "Software Development",
        "title": "Full Stack Developer",
        "company": "TechCo",
        "companyLogo": "/public/vite.svg",
        "location": "San Francisco, CA",
        "type": "Full-time",
        "experience": "3-5 years",
        "description": "Exciting opportunity for a skilled Full Stack Developer...",
        "skills": [
            "React",
            "Node.js",
            "MongoDB"
        ],
        "salary": "$80,000 - $100,000",
        "employer_id": 1
    },
    {
        "id": 157,
        "category": "Data Science",
        "title": "Data Scientist",
        "company": "Data Insights",
        "companyLogo": "/public/vite.svg",
        "location": "New York, NY",
        "type": "Full-time",
        "experience": "2-4 years",
        "description": "Join our data science team to analyze and interpret complex data sets...",
        "skills": [
            "Python",
            "Machine Learning",
            "SQL"
        ],
        "salary": "$90,000 - $120,000",
        "employer_id": 1
    },
    {
        "id": 158,
        "category": "Front-End",
        "title": "UI/UX Designer",
        "company": "WebDesign Co",
        "companyLogo": "/images/company/logo.svg",
        "location": "Remote",
        "type": "Full-time",
        "experience": "2-5 years",
        "description": "Design user interfaces for web applications...",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript"
        ],
        "salary": "$70,000 - $90,000",
        "employer_id": 1
    },
    {
        "id": 159,
        "category": "Back-End",
        "title": "Backend Developer",
        "company": "ServerLogic",
        "companyLogo": "/images/company/logo.svg",
        "location": "On-Site",
        "type": "Full-time",
        "experience": "4-6 years",
        "description": "Develop server-side logic and integrate databases...",
        "skills": [
            "Java",
            "Spring Boot",
            "MySQL"
        ],
        "salary": "$85,000 - $110,000",
        "employer_id": 1
    },
    {
        "id": 160,
        "category": "Machine Learning",
        "title": "Machine Learning Eng",
        "company": "ML Innovations",
        "companyLogo": "/images/company/logo.svg",
        "location": "Remote",
        "type": "Full-time",
        "experience": "3-5 years",
        "description": "Apply machine learning techniques to solve complex problems...",
        "skills": [
            "Python",
            "TensorFlow",
            "Scikit-Learn"
        ],
        "salary": "$95,000 - $120,000",
        "employer_id": 1
    },
    {
        "id": 161,
        "category": "Software Development",
        "title": "Full Stack Developer",
        "company": "TechCo",
        "companyLogo": "/public/vite.svg",
        "location": "San Francisco, CA",
        "type": "Full-time",
        "experience": "3-5 years",
        "description": "Exciting opportunity for a skilled Full Stack Developer...",
        "skills": [
            "React",
            "Node.js",
            "MongoDB"
        ],
        "salary": "$80,000 - $100,000",
        "employer_id": 1
    },
    {
        "id": 162,
        "category": "Data Science",
        "title": "Data Scientist",
        "company": "Data Insights",
        "companyLogo": "/public/vite.svg",
        "location": "New York, NY",
        "type": "Full-time",
        "experience": "2-4 years",
        "description": "Join our data science team to analyze and interpret complex data sets...",
        "skills": [
            "Python",
            "Machine Learning",
            "SQL"
        ],
        "salary": "$90,000 - $120,000",
        "employer_id": 1
    },
    {
        "id": 163,
        "category": "Front-End",
        "title": "UI/UX Designer",
        "company": "WebDesign Co",
        "companyLogo": "/public/vite.svg",
        "location": "Remote",
        "type": "Full-time",
        "experience": "2-5 years",
        "description": "Design user interfaces for web applications...",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript"
        ],
        "salary": "$70,000 - $90,000",
        "employer_id": 1
    },
    {
        "id": 164,
        "category": "Back-End",
        "title": "Backend Developer",
        "company": "ServerLogic",
        "companyLogo": "/public/vite.svg",
        "location": "On-Site",
        "type": "Full-time",
        "experience": "4-6 years",
        "description": "Develop server-side logic and integrate databases...",
        "skills": [
            "Java",
            "Spring Boot",
            "MySQL"
        ],
        "salary": "$85,000 - $110,000",
        "employer_id": 1
    },
    {
        "id": 165,
        "category": "Machine Learning",
        "title": "Machine Learning Eng",
        "company": "ML Innovations",
        "companyLogo": "/public/vite.svg",
        "location": "Remote",
        "type": "Full-time",
        "experience": "3-5 years",
        "description": "Apply machine learning techniques to solve complex problems...",
        "skills": [
            "Python",
            "TensorFlow",
            "Scikit-Learn"
        ],
        "salary": "$95,000 - $120,000",
        "employer_id": 1
    },
    {
        "id": 166,
        "category": "Software Development",
        "title": "Full Stack Developer",
        "company": "TechCo",
        "companyLogo": "/public/vite.svg",
        "location": "San Francisco, CA",
        "type": "Full-time",
        "experience": "3-5 years",
        "description": "Exciting opportunity for a skilled Full Stack Developer...",
        "skills": [
            "React",
            "Node.js",
            "MongoDB"
        ],
        "salary": "$80,000 - $100,000",
        "employer_id": 1
    },
    {
        "id": 167,
        "category": "Data Science",
        "title": "Data Scientist",
        "company": "Data Insights",
        "companyLogo": "/public/vite.svg",
        "location": "New York, NY",
        "type": "Full-time",
        "experience": "2-4 years",
        "description": "Join our data science team to analyze and interpret complex data sets...",
        "skills": [
            "Python",
            "Machine Learning",
            "SQL"
        ],
        "salary": "$90,000 - $120,000",
        "employer_id": 1
    },
    {
        "id": 168,
        "category": "Front-End",
        "title": "UI/UX Designer",
        "company": "WebDesign Co",
        "companyLogo": "/images/company/logo.svg",
        "location": "Remote",
        "type": "Full-time",
        "experience": "2-5 years",
        "description": "Design user interfaces for web applications...",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript"
        ],
        "salary": "$70,000 - $90,000",
        "employer_id": 1
    },
    {
        "id": 169,
        "category": "Back-End",
        "title": "Backend Developer",
        "company": "ServerLogic",
        "companyLogo": "/images/company/logo.svg",
        "location": "On-Site",
        "type": "Full-time",
        "experience": "4-6 years",
        "description": "Develop server-side logic and integrate databases...",
        "skills": [
            "Java",
            "Spring Boot",
            "MySQL"
        ],
        "salary": "$85,000 - $110,000",
        "employer_id": 1
    },
    {
        "id": 170,
        "category": "Machine Learning",
        "title": "Machine Learning Eng",
        "company": "ML Innovations",
        "companyLogo": "/images/company/logo.svg",
        "location": "Remote",
        "type": "Full-time",
        "experience": "3-5 years",
        "description": "Apply machine learning techniques to solve complex problems...",
        "skills": [
            "Python",
            "TensorFlow",
            "Scikit-Learn"
        ],
        "salary": "$95,000 - $120,000",
        "employer_id": 1
    },
    {
        "id": 171,
        "category": "Software Development",
        "title": "Full Stack Developer",
        "company": "TechCo",
        "companyLogo": "/public/vite.svg",
        "location": "San Francisco, CA",
        "type": "Full-time",
        "experience": "3-5 years",
        "description": "Exciting opportunity for a skilled Full Stack Developer...",
        "skills": [
            "React",
            "Node.js",
            "MongoDB"
        ],
        "salary": "$80,000 - $100,000",
        "employer_id": 1
    },
    {
        "id": 172,
        "category": "Data Science",
        "title": "Data Scientist",
        "company": "Data Insights",
        "companyLogo": "/public/vite.svg",
        "location": "New York, NY",
        "type": "Full-time",
        "experience": "2-4 years",
        "description": "Join our data science team to analyze and interpret complex data sets...",
        "skills": [
            "Python",
            "Machine Learning",
            "SQL"
        ],
        "salary": "$90,000 - $120,000",
        "employer_id": 1
    },
    {
        "id": 173,
        "category": "Front-End",
        "title": "UI/UX Designer",
        "company": "WebDesign Co",
        "companyLogo": "/public/vite.svg",
        "location": "Remote",
        "type": "Full-time",
        "experience": "2-5 years",
        "description": "Design user interfaces for web applications...",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript"
        ],
        "salary": "$70,000 - $90,000",
        "employer_id": 1
    },
    {
        "id": 174,
        "category": "Back-End",
        "title": "Backend Developer",
        "company": "ServerLogic",
        "companyLogo": "/public/vite.svg",
        "location": "On-Site",
        "type": "Full-time",
        "experience": "4-6 years",
        "description": "Develop server-side logic and integrate databases...",
        "skills": [
            "Java",
            "Spring Boot",
            "MySQL"
        ],
        "salary": "$85,000 - $110,000",
        "employer_id": 1
    },
    {
        "id": 175,
        "category": "Machine Learning",
        "title": "Machine Learning Eng",
        "company": "ML Innovations",
        "companyLogo": "/public/vite.svg",
        "location": "Remote",
        "type": "Full-time",
        "experience": "3-5 years",
        "description": "Apply machine learning techniques to solve complex problems...",
        "skills": [
            "Python",
            "TensorFlow",
            "Scikit-Learn"
        ],
        "salary": "$95,000 - $120,000",
        "employer_id": 1
    },
    {
        "id": 176,
        "category": "Software Development",
        "title": "Full Stack Developer",
        "company": "TechCo",
        "companyLogo": "/public/vite.svg",
        "location": "San Francisco, CA",
        "type": "Full-time",
        "experience": "3-5 years",
        "description": "Exciting opportunity for a skilled Full Stack Developer...",
        "skills": [
            "React",
            "Node.js",
            "MongoDB"
        ],
        "salary": "$80,000 - $100,000",
        "employer_id": 1
    },
    {
        "id": 177,
        "category": "Data Science",
        "title": "Data Scientist",
        "company": "Data Insights",
        "companyLogo": "/public/vite.svg",
        "location": "New York, NY",
        "type": "Full-time",
        "experience": "2-4 years",
        "description": "Join our data science team to analyze and interpret complex data sets...",
        "skills": [
            "Python",
            "Machine Learning",
            "SQL"
        ],
        "salary": "$90,000 - $120,000",
        "employer_id": 1
    },
    {
        "id": 178,
        "category": "Front-End",
        "title": "UI/UX Designer",
        "company": "WebDesign Co",
        "companyLogo": "/images/company/logo.svg",
        "location": "Remote",
        "type": "Full-time",
        "experience": "2-5 years",
        "description": "Design user interfaces for web applications...",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript"
        ],
        "salary": "$70,000 - $90,000",
        "employer_id": 1
    },
    {
        "id": 179,
        "category": "Back-End",
        "title": "Backend Developer",
        "company": "ServerLogic",
        "companyLogo": "/images/company/logo.svg",
        "location": "On-Site",
        "type": "Full-time",
        "experience": "4-6 years",
        "description": "Develop server-side logic and integrate databases...",
        "skills": [
            "Java",
            "Spring Boot",
            "MySQL"
        ],
        "salary": "$85,000 - $110,000",
        "employer_id": 1
    },
    {
        "id": 180,
        "category": "Machine Learning",
        "title": "Machine Learning Eng",
        "company": "ML Innovations",
        "companyLogo": "/images/company/logo.svg",
        "location": "Remote",
        "type": "Full-time",
        "experience": "3-5 years",
        "description": "Apply machine learning techniques to solve complex problems...",
        "skills": [
            "Python",
            "TensorFlow",
            "Scikit-Learn"
        ],
        "salary": "$95,000 - $120,000",
        "employer_id": 1
    },
    {
        "id": 181,
        "category": "Software Development",
        "title": "Full Stack Developer",
        "company": "TechCo",
        "companyLogo": "/public/vite.svg",
        "location": "San Francisco, CA",
        "type": "Full-time",
        "experience": "3-5 years",
        "description": "Exciting opportunity for a skilled Full Stack Developer...",
        "skills": [
            "React",
            "Node.js",
            "MongoDB"
        ],
        "salary": "$80,000 - $100,000",
        "employer_id": 1
    },
    {
        "id": 182,
        "category": "Data Science",
        "title": "Data Scientist",
        "company": "Data Insights",
        "companyLogo": "/public/vite.svg",
        "location": "New York, NY",
        "type": "Full-time",
        "experience": "2-4 years",
        "description": "Join our data science team to analyze and interpret complex data sets...",
        "skills": [
            "Python",
            "Machine Learning",
            "SQL"
        ],
        "salary": "$90,000 - $120,000",
        "employer_id": 1
    },
    {
        "id": 183,
        "category": "Front-End",
        "title": "UI/UX Designer",
        "company": "WebDesign Co",
        "companyLogo": "/public/vite.svg",
        "location": "Remote",
        "type": "Full-time",
        "experience": "2-5 years",
        "description": "Design user interfaces for web applications...",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript"
        ],
        "salary": "$70,000 - $90,000",
        "employer_id": 1
    },
    {
        "id": 184,
        "category": "Back-End",
        "title": "Backend Developer",
        "company": "ServerLogic",
        "companyLogo": "/public/vite.svg",
        "location": "On-Site",
        "type": "Full-time",
        "experience": "4-6 years",
        "description": "Develop server-side logic and integrate databases...",
        "skills": [
            "Java",
            "Spring Boot",
            "MySQL"
        ],
        "salary": "$85,000 - $110,000",
        "employer_id": 1
    },
    {
        "id": 185,
        "category": "Machine Learning",
        "title": "Machine Learning Eng",
        "company": "ML Innovations",
        "companyLogo": "/public/vite.svg",
        "location": "Remote",
        "type": "Full-time",
        "experience": "3-5 years",
        "description": "Apply machine learning techniques to solve complex problems...",
        "skills": [
            "Python",
            "TensorFlow",
            "Scikit-Learn"
        ],
        "salary": "$95,000 - $120,000",
        "employer_id": 1
    },
    {
        "id": 186,
        "category": "Software Development",
        "title": "Full Stack Developer",
        "company": "TechCo",
        "companyLogo": "/public/vite.svg",
        "location": "San Francisco, CA",
        "type": "Full-time",
        "experience": "3-5 years",
        "description": "Exciting opportunity for a skilled Full Stack Developer...",
        "skills": [
            "React",
            "Node.js",
            "MongoDB"
        ],
        "salary": "$80,000 - $100,000",
        "employer_id": 1
    },
    {
        "id": 187,
        "category": "Data Science",
        "title": "Data Scientist",
        "company": "Data Insights",
        "companyLogo": "/public/vite.svg",
        "location": "New York, NY",
        "type": "Full-time",
        "experience": "2-4 years",
        "description": "Join our data science team to analyze and interpret complex data sets...",
        "skills": [
            "Python",
            "Machine Learning",
            "SQL"
        ],
        "salary": "$90,000 - $120,000",
        "employer_id": 1
    },
    {
        "id": 188,
        "category": "Front-End",
        "title": "UI/UX Designer",
        "company": "WebDesign Co",
        "companyLogo": "/images/company/logo.svg",
        "location": "Remote",
        "type": "Full-time",
        "experience": "2-5 years",
        "description": "Design user interfaces for web applications...",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript"
        ],
        "salary": "$70,000 - $90,000",
        "employer_id": 1
    },
    {
        "id": 189,
        "category": "Back-End",
        "title": "Backend Developer",
        "company": "ServerLogic",
        "companyLogo": "/images/company/logo.svg",
        "location": "On-Site",
        "type": "Full-time",
        "experience": "4-6 years",
        "description": "Develop server-side logic and integrate databases...",
        "skills": [
            "Java",
            "Spring Boot",
            "MySQL"
        ],
        "salary": "$85,000 - $110,000",
        "employer_id": 1
    },
    {
        "id": 190,
        "category": "Machine Learning",
        "title": "Machine Learning Eng",
        "company": "ML Innovations",
        "companyLogo": "/images/company/logo.svg",
        "location": "Remote",
        "type": "Full-time",
        "experience": "3-5 years",
        "description": "Apply machine learning techniques to solve complex problems...",
        "skills": [
            "Python",
            "TensorFlow",
            "Scikit-Learn"
        ],
        "salary": "$95,000 - $120,000",
        "employer_id": 1
    },
    {
        "id": 191,
        "category": "Software Development",
        "title": "Full Stack Developer",
        "company": "TechCo",
        "companyLogo": "/public/vite.svg",
        "location": "San Francisco, CA",
        "type": "Full-time",
        "experience": "3-5 years",
        "description": "Exciting opportunity for a skilled Full Stack Developer...",
        "skills": [
            "React",
            "Node.js",
            "MongoDB"
        ],
        "salary": "$80,000 - $100,000",
        "employer_id": 1
    },
    {
        "id": 192,
        "category": "Data Science",
        "title": "Data Scientist",
        "company": "Data Insights",
        "companyLogo": "/public/vite.svg",
        "location": "New York, NY",
        "type": "Full-time",
        "experience": "2-4 years",
        "description": "Join our data science team to analyze and interpret complex data sets...",
        "skills": [
            "Python",
            "Machine Learning",
            "SQL"
        ],
        "salary": "$90,000 - $120,000",
        "employer_id": 1
    },
    {
        "id": 193,
        "category": "Front-End",
        "title": "UI/UX Designer",
        "company": "WebDesign Co",
        "companyLogo": "/public/vite.svg",
        "location": "Remote",
        "type": "Full-time",
        "experience": "2-5 years",
        "description": "Design user interfaces for web applications...",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript"
        ],
        "salary": "$70,000 - $90,000",
        "employer_id": 1
    },
    {
        "id": 194,
        "category": "Back-End",
        "title": "Backend Developer",
        "company": "ServerLogic",
        "companyLogo": "/public/vite.svg",
        "location": "On-Site",
        "type": "Full-time",
        "experience": "4-6 years",
        "description": "Develop server-side logic and integrate databases...",
        "skills": [
            "Java",
            "Spring Boot",
            "MySQL"
        ],
        "salary": "$85,000 - $110,000",
        "employer_id": 1
    },
    {
        "id": 195,
        "category": "Machine Learning",
        "title": "Machine Learning Eng",
        "company": "ML Innovations",
        "companyLogo": "/public/vite.svg",
        "location": "Remote",
        "type": "Full-time",
        "experience": "3-5 years",
        "description": "Apply machine learning techniques to solve complex problems...",
        "skills": [
            "Python",
            "TensorFlow",
            "Scikit-Learn"
        ],
        "salary": "$95,000 - $120,000",
        "employer_id": 1
    },
    {
        "id": 196,
        "category": "Software Development",
        "title": "Full Stack Developer",
        "company": "TechCo",
        "companyLogo": "/public/vite.svg",
        "location": "San Francisco, CA",
        "type": "Full-time",
        "experience": "3-5 years",
        "description": "Exciting opportunity for a skilled Full Stack Developer...",
        "skills": [
            "React",
            "Node.js",
            "MongoDB"
        ],
        "salary": "$80,000 - $100,000",
        "employer_id": 1
    },
    {
        "id": 197,
        "category": "Data Science",
        "title": "Data Scientist",
        "company": "Data Insights",
        "companyLogo": "/public/vite.svg",
        "location": "New York, NY",
        "type": "Full-time",
        "experience": "2-4 years",
        "description": "Join our data science team to analyze and interpret complex data sets...",
        "skills": [
            "Python",
            "Machine Learning",
            "SQL"
        ],
        "salary": "$90,000 - $120,000",
        "employer_id": 1
    },
    {
        "id": 198,
        "category": "Front-End",
        "title": "UI/UX Designer",
        "company": "WebDesign Co",
        "companyLogo": "/images/company/logo.svg",
        "location": "Remote",
        "type": "Full-time",
        "experience": "2-5 years",
        "description": "Design user interfaces for web applications...",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript"
        ],
        "salary": "$70,000 - $90,000",
        "employer_id": 1
    },
    {
        "id": 199,
        "category": "Back-End",
        "title": "Backend Developer",
        "company": "ServerLogic",
        "companyLogo": "/images/company/logo.svg",
        "location": "On-Site",
        "type": "Full-time",
        "experience": "4-6 years",
        "description": "Develop server-side logic and integrate databases...",
        "skills": [
            "Java",
            "Spring Boot",
            "MySQL"
        ],
        "salary": "$85,000 - $110,000",
        "employer_id": 1
    },
    {
        "id": 200,
        "category": "Machine Learning",
        "title": "Machine Learning Eng",
        "company": "ML Innovations",
        "companyLogo": "/images/company/logo.svg",
        "location": "Remote",
        "type": "Full-time",
        "experience": "3-5 years",
        "description": "Apply machine learning techniques to solve complex problems...",
        "skills": [
            "Python",
            "TensorFlow",
            "Scikit-Learn"
        ],
        "salary": "$95,000 - $120,000",
        "employer_id": 1
    },
    {
        "id": 201,
        "category": "Software Development",
        "title": "Full Stack Developer",
        "company": "TechCo",
        "companyLogo": "/public/vite.svg",
        "location": "San Francisco, CA",
        "type": "Full-time",
        "experience": "3-5 years",
        "description": "Exciting opportunity for a skilled Full Stack Developer...",
        "skills": [
            "React",
            "Node.js",
            "MongoDB"
        ],
        "salary": "$80,000 - $100,000",
        "employer_id": 1
    },
    {
        "id": 202,
        "category": "Data Science",
        "title": "Data Scientist",
        "company": "Data Insights",
        "companyLogo": "/public/vite.svg",
        "location": "New York, NY",
        "type": "Full-time",
        "experience": "2-4 years",
        "description": "Join our data science team to analyze and interpret complex data sets...",
        "skills": [
            "Python",
            "Machine Learning",
            "SQL"
        ],
        "salary": "$90,000 - $120,000",
        "employer_id": 1
    },
    {
        "id": 203,
        "category": "Front-End",
        "title": "UI/UX Designer",
        "company": "WebDesign Co",
        "companyLogo": "/public/vite.svg",
        "location": "Remote",
        "type": "Full-time",
        "experience": "2-5 years",
        "description": "Design user interfaces for web applications...",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript"
        ],
        "salary": "$70,000 - $90,000",
        "employer_id": 1
    },
    {
        "id": 204,
        "category": "Back-End",
        "title": "Backend Developer",
        "company": "ServerLogic",
        "companyLogo": "/public/vite.svg",
        "location": "On-Site",
        "type": "Full-time",
        "experience": "4-6 years",
        "description": "Develop server-side logic and integrate databases...",
        "skills": [
            "Java",
            "Spring Boot",
            "MySQL"
        ],
        "salary": "$85,000 - $110,000",
        "employer_id": 1
    },
    {
        "id": 205,
        "category": "Machine Learning",
        "title": "Machine Learning Eng",
        "company": "ML Innovations",
        "companyLogo": "/public/vite.svg",
        "location": "Remote",
        "type": "Full-time",
        "experience": "3-5 years",
        "description": "Apply machine learning techniques to solve complex problems...",
        "skills": [
            "Python",
            "TensorFlow",
            "Scikit-Learn"
        ],
        "salary": "$95,000 - $120,000",
        "employer_id": 1
    },
    {
        "id": 206,
        "category": "Software Development",
        "title": "Full Stack Developer",
        "company": "TechCo",
        "companyLogo": "/public/vite.svg",
        "location": "San Francisco, CA",
        "type": "Full-time",
        "experience": "3-5 years",
        "description": "Exciting opportunity for a skilled Full Stack Developer...",
        "skills": [
            "React",
            "Node.js",
            "MongoDB"
        ],
        "salary": "$80,000 - $100,000",
        "employer_id": 1
    },
    {
        "id": 207,
        "category": "Data Science",
        "title": "Data Scientist",
        "company": "Data Insights",
        "companyLogo": "/public/vite.svg",
        "location": "New York, NY",
        "type": "Full-time",
        "experience": "2-4 years",
        "description": "Join our data science team to analyze and interpret complex data sets...",
        "skills": [
            "Python",
            "Machine Learning",
            "SQL"
        ],
        "salary": "$90,000 - $120,000",
        "employer_id": 1
    },
    {
        "id": 208,
        "category": "Front-End",
        "title": "UI/UX Designer",
        "company": "WebDesign Co",
        "companyLogo": "/images/company/logo.svg",
        "location": "Remote",
        "type": "Full-time",
        "experience": "2-5 years",
        "description": "Design user interfaces for web applications...",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript"
        ],
        "salary": "$70,000 - $90,000",
        "employer_id": 1
    },
    {
        "id": 209,
        "category": "Back-End",
        "title": "Backend Developer",
        "company": "ServerLogic",
        "companyLogo": "/images/company/logo.svg",
        "location": "On-Site",
        "type": "Full-time",
        "experience": "4-6 years",
        "description": "Develop server-side logic and integrate databases...",
        "skills": [
            "Java",
            "Spring Boot",
            "MySQL"
        ],
        "salary": "$85,000 - $110,000",
        "employer_id": 1
    },
    {
        "id": 210,
        "category": "Machine Learning",
        "title": "Machine Learning Eng",
        "company": "ML Innovations",
        "companyLogo": "/images/company/logo.svg",
        "location": "Remote",
        "type": "Full-time",
        "experience": "3-5 years",
        "description": "Apply machine learning techniques to solve complex problems...",
        "skills": [
            "Python",
            "TensorFlow",
            "Scikit-Learn"
        ],
        "salary": "$95,000 - $120,000",
        "employer_id": 1
    },
    {
        "id": 211,
        "category": "Software Development",
        "title": "Full Stack Developer",
        "company": "TechCo",
        "companyLogo": "/public/vite.svg",
        "location": "San Francisco, CA",
        "type": "Full-time",
        "experience": "3-5 years",
        "description": "Exciting opportunity for a skilled Full Stack Developer...",
        "skills": [
            "React",
            "Node.js",
            "MongoDB"
        ],
        "salary": "$80,000 - $100,000",
        "employer_id": 1
    },
    {
        "id": 212,
        "category": "Data Science",
        "title": "Data Scientist",
        "company": "Data Insights",
        "companyLogo": "/public/vite.svg",
        "location": "New York, NY",
        "type": "Full-time",
        "experience": "2-4 years",
        "description": "Join our data science team to analyze and interpret complex data sets...",
        "skills": [
            "Python",
            "Machine Learning",
            "SQL"
        ],
        "salary": "$90,000 - $120,000",
        "employer_id": 1
    },
    {
        "id": 213,
        "category": "Front-End",
        "title": "UI/UX Designer",
        "company": "WebDesign Co",
        "companyLogo": "/public/vite.svg",
        "location": "Remote",
        "type": "Full-time",
        "experience": "2-5 years",
        "description": "Design user interfaces for web applications...",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript"
        ],
        "salary": "$70,000 - $90,000",
        "employer_id": 1
    },
    {
        "id": 214,
        "category": "Back-End",
        "title": "Backend Developer",
        "company": "ServerLogic",
        "companyLogo": "/public/vite.svg",
        "location": "On-Site",
        "type": "Full-time",
        "experience": "4-6 years",
        "description": "Develop server-side logic and integrate databases...",
        "skills": [
            "Java",
            "Spring Boot",
            "MySQL"
        ],
        "salary": "$85,000 - $110,000",
        "employer_id": 1
    },
    {
        "id": 215,
        "category": "Machine Learning",
        "title": "Machine Learning Eng",
        "company": "ML Innovations",
        "companyLogo": "/public/vite.svg",
        "location": "Remote",
        "type": "Full-time",
        "experience": "3-5 years",
        "description": "Apply machine learning techniques to solve complex problems...",
        "skills": [
            "Python",
            "TensorFlow",
            "Scikit-Learn"
        ],
        "salary": "$95,000 - $120,000",
        "employer_id": 1
    },
    {
        "id": 216,
        "category": "Software Development",
        "title": "Full Stack Developer",
        "company": "TechCo",
        "companyLogo": "/public/vite.svg",
        "location": "San Francisco, CA",
        "type": "Full-time",
        "experience": "3-5 years",
        "description": "Exciting opportunity for a skilled Full Stack Developer...",
        "skills": [
            "React",
            "Node.js",
            "MongoDB"
        ],
        "salary": "$80,000 - $100,000",
        "employer_id": 1
    },
    {
        "id": 217,
        "category": "Data Science",
        "title": "Data Scientist",
        "company": "Data Insights",
        "companyLogo": "/public/vite.svg",
        "location": "New York, NY",
        "type": "Full-time",
        "experience": "2-4 years",
        "description": "Join our data science team to analyze and interpret complex data sets...",
        "skills": [
            "Python",
            "Machine Learning",
            "SQL"
        ],
        "salary": "$90,000 - $120,000",
        "employer_id": 1
    },
    {
        "id": 218,
        "category": "Front-End",
        "title": "UI/UX Designer",
        "company": "WebDesign Co",
        "companyLogo": "/images/company/logo.svg",
        "location": "Remote",
        "type": "Full-time",
        "experience": "2-5 years",
        "description": "Design user interfaces for web applications...",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript"
        ],
        "salary": "$70,000 - $90,000",
        "employer_id": 1
    },
    {
        "id": 219,
        "category": "Back-End",
        "title": "Backend Developer",
        "company": "ServerLogic",
        "companyLogo": "/images/company/logo.svg",
        "location": "On-Site",
        "type": "Full-time",
        "experience": "4-6 years",
        "description": "Develop server-side logic and integrate databases...",
        "skills": [
            "Java",
            "Spring Boot",
            "MySQL"
        ],
        "salary": "$85,000 - $110,000",
        "employer_id": 1
    },
    {
        "id": 220,
        "category": "Machine Learning",
        "title": "Machine Learning Eng",
        "company": "ML Innovations",
        "companyLogo": "/images/company/logo.svg",
        "location": "Remote",
        "type": "Full-time",
        "experience": "3-5 years",
        "description": "Apply machine learning techniques to solve complex problems...",
        "skills": [
            "Python",
            "TensorFlow",
            "Scikit-Learn"
        ],
        "salary": "$95,000 - $120,000",
        "employer_id": 1
    },
    {
        "id": 221,
        "category": "Software Development",
        "title": "Full Stack Developer",
        "company": "TechCo",
        "companyLogo": "/public/vite.svg",
        "location": "San Francisco, CA",
        "type": "Full-time",
        "experience": "3-5 years",
        "description": "Exciting opportunity for a skilled Full Stack Developer...",
        "skills": [
            "React",
            "Node.js",
            "MongoDB"
        ],
        "salary": "$80,000 - $100,000",
        "employer_id": 1
    },
    {
        "id": 222,
        "category": "Data Science",
        "title": "Data Scientist",
        "company": "Data Insights",
        "companyLogo": "/public/vite.svg",
        "location": "New York, NY",
        "type": "Full-time",
        "experience": "2-4 years",
        "description": "Join our data science team to analyze and interpret complex data sets...",
        "skills": [
            "Python",
            "Machine Learning",
            "SQL"
        ],
        "salary": "$90,000 - $120,000",
        "employer_id": 1
    },
    {
        "id": 223,
        "category": "Front-End",
        "title": "UI/UX Designer",
        "company": "WebDesign Co",
        "companyLogo": "/public/vite.svg",
        "location": "Remote",
        "type": "Full-time",
        "experience": "2-5 years",
        "description": "Design user interfaces for web applications...",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript"
        ],
        "salary": "$70,000 - $90,000",
        "employer_id": 1
    },
    {
        "id": 224,
        "category": "Back-End",
        "title": "Backend Developer",
        "company": "ServerLogic",
        "companyLogo": "/public/vite.svg",
        "location": "On-Site",
        "type": "Full-time",
        "experience": "4-6 years",
        "description": "Develop server-side logic and integrate databases...",
        "skills": [
            "Java",
            "Spring Boot",
            "MySQL"
        ],
        "salary": "$85,000 - $110,000",
        "employer_id": 1
    },
    {
        "id": 225,
        "category": "Machine Learning",
        "title": "Machine Learning Eng",
        "company": "ML Innovations",
        "companyLogo": "/public/vite.svg",
        "location": "Remote",
        "type": "Full-time",
        "experience": "3-5 years",
        "description": "Apply machine learning techniques to solve complex problems...",
        "skills": [
            "Python",
            "TensorFlow",
            "Scikit-Learn"
        ],
        "salary": "$95,000 - $120,000",
        "employer_id": 1
    },
    {
        "id": 226,
        "category": "Software Development",
        "title": "Full Stack Developer",
        "company": "TechCo",
        "companyLogo": "/public/vite.svg",
        "location": "San Francisco, CA",
        "type": "Full-time",
        "experience": "3-5 years",
        "description": "Exciting opportunity for a skilled Full Stack Developer...",
        "skills": [
            "React",
            "Node.js",
            "MongoDB"
        ],
        "salary": "$80,000 - $100,000",
        "employer_id": 1
    },
    {
        "id": 227,
        "category": "Data Science",
        "title": "Data Scientist",
        "company": "Data Insights",
        "companyLogo": "/public/vite.svg",
        "location": "New York, NY",
        "type": "Full-time",
        "experience": "2-4 years",
        "description": "Join our data science team to analyze and interpret complex data sets...",
        "skills": [
            "Python",
            "Machine Learning",
            "SQL"
        ],
        "salary": "$90,000 - $120,000",
        "employer_id": 1
    },
    {
        "id": 228,
        "category": "Front-End",
        "title": "UI/UX Designer",
        "company": "WebDesign Co",
        "companyLogo": "/images/company/logo.svg",
        "location": "Remote",
        "type": "Full-time",
        "experience": "2-5 years",
        "description": "Design user interfaces for web applications...",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript"
        ],
        "salary": "$70,000 - $90,000",
        "employer_id": 1
    },
    {
        "id": 229,
        "category": "Back-End",
        "title": "Backend Developer",
        "company": "ServerLogic",
        "companyLogo": "/images/company/logo.svg",
        "location": "On-Site",
        "type": "Full-time",
        "experience": "4-6 years",
        "description": "Develop server-side logic and integrate databases...",
        "skills": [
            "Java",
            "Spring Boot",
            "MySQL"
        ],
        "salary": "$85,000 - $110,000",
        "employer_id": 1
    },
    {
        "id": 230,
        "category": "Machine Learning",
        "title": "Machine Learning Eng",
        "company": "ML Innovations",
        "companyLogo": "/images/company/logo.svg",
        "location": "Remote",
        "type": "Full-time",
        "experience": "3-5 years",
        "description": "Apply machine learning techniques to solve complex problems...",
        "skills": [
            "Python",
            "TensorFlow",
            "Scikit-Learn"
        ],
        "salary": "$95,000 - $120,000",
        "employer_id": 1
    },
    {
        "id": 231,
        "category": "Software Development",
        "title": "Full Stack Developer",
        "company": "TechCo",
        "companyLogo": "/public/vite.svg",
        "location": "San Francisco, CA",
        "type": "Full-time",
        "experience": "3-5 years",
        "description": "Exciting opportunity for a skilled Full Stack Developer...",
        "skills": [
            "React",
            "Node.js",
            "MongoDB"
        ],
        "salary": "$80,000 - $100,000",
        "employer_id": 1
    },
    {
        "id": 232,
        "category": "Data Science",
        "title": "Data Scientist",
        "company": "Data Insights",
        "companyLogo": "/public/vite.svg",
        "location": "New York, NY",
        "type": "Full-time",
        "experience": "2-4 years",
        "description": "Join our data science team to analyze and interpret complex data sets...",
        "skills": [
            "Python",
            "Machine Learning",
            "SQL"
        ],
        "salary": "$90,000 - $120,000",
        "employer_id": 1
    },
    {
        "id": 233,
        "category": "Front-End",
        "title": "UI/UX Designer",
        "company": "WebDesign Co",
        "companyLogo": "/public/vite.svg",
        "location": "Remote",
        "type": "Full-time",
        "experience": "2-5 years",
        "description": "Design user interfaces for web applications...",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript"
        ],
        "salary": "$70,000 - $90,000",
        "employer_id": 1
    },
    {
        "id": 234,
        "category": "Back-End",
        "title": "Backend Developer",
        "company": "ServerLogic",
        "companyLogo": "/public/vite.svg",
        "location": "On-Site",
        "type": "Full-time",
        "experience": "4-6 years",
        "description": "Develop server-side logic and integrate databases...",
        "skills": [
            "Java",
            "Spring Boot",
            "MySQL"
        ],
        "salary": "$85,000 - $110,000",
        "employer_id": 1
    },
    {
        "id": 235,
        "category": "Machine Learning",
        "title": "Machine Learning Eng",
        "company": "ML Innovations",
        "companyLogo": "/public/vite.svg",
        "location": "Remote",
        "type": "Full-time",
        "experience": "3-5 years",
        "description": "Apply machine learning techniques to solve complex problems...",
        "skills": [
            "Python",
            "TensorFlow",
            "Scikit-Learn"
        ],
        "salary": "$95,000 - $120,000",
        "employer_id": 1
    },
    {
        "id": 236,
        "category": "Software Development",
        "title": "Full Stack Developer",
        "company": "TechCo",
        "companyLogo": "/public/vite.svg",
        "location": "San Francisco, CA",
        "type": "Full-time",
        "experience": "3-5 years",
        "description": "Exciting opportunity for a skilled Full Stack Developer...",
        "skills": [
            "React",
            "Node.js",
            "MongoDB"
        ],
        "salary": "$80,000 - $100,000",
        "employer_id": 1
    },
    {
        "id": 237,
        "category": "Data Science",
        "title": "Data Scientist",
        "company": "Data Insights",
        "companyLogo": "/public/vite.svg",
        "location": "New York, NY",
        "type": "Full-time",
        "experience": "2-4 years",
        "description": "Join our data science team to analyze and interpret complex data sets...",
        "skills": [
            "Python",
            "Machine Learning",
            "SQL"
        ],
        "salary": "$90,000 - $120,000",
        "employer_id": 1
    },
    {
        "id": 238,
        "category": "Front-End",
        "title": "UI/UX Designer",
        "company": "WebDesign Co",
        "companyLogo": "/images/company/logo.svg",
        "location": "Remote",
        "type": "Full-time",
        "experience": "2-5 years",
        "description": "Design user interfaces for web applications...",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript"
        ],
        "salary": "$70,000 - $90,000",
        "employer_id": 1
    },
    {
        "id": 239,
        "category": "Back-End",
        "title": "Backend Developer",
        "company": "ServerLogic",
        "companyLogo": "/images/company/logo.svg",
        "location": "On-Site",
        "type": "Full-time",
        "experience": "4-6 years",
        "description": "Develop server-side logic and integrate databases...",
        "skills": [
            "Java",
            "Spring Boot",
            "MySQL"
        ],
        "salary": "$85,000 - $110,000",
        "employer_id": 1
    },
    {
        "id": 240,
        "category": "Machine Learning",
        "title": "Machine Learning Eng",
        "company": "ML Innovations",
        "companyLogo": "/images/company/logo.svg",
        "location": "Remote",
        "type": "Full-time",
        "experience": "3-5 years",
        "description": "Apply machine learning techniques to solve complex problems...",
        "skills": [
            "Python",
            "TensorFlow",
            "Scikit-Learn"
        ],
        "salary": "$95,000 - $120,000",
        "employer_id": 1
    },
    {
        "id": 241,
        "category": "Software Development",
        "title": "Full Stack Developer",
        "company": "TechCo",
        "companyLogo": "/public/vite.svg",
        "location": "San Francisco, CA",
        "type": "Full-time",
        "experience": "3-5 years",
        "description": "Exciting opportunity for a skilled Full Stack Developer...",
        "skills": [
            "React",
            "Node.js",
            "MongoDB"
        ],
        "salary": "$80,000 - $100,000",
        "employer_id": 1
    },
    {
        "id": 242,
        "category": "Data Science",
        "title": "Data Scientist",
        "company": "Data Insights",
        "companyLogo": "/public/vite.svg",
        "location": "New York, NY",
        "type": "Full-time",
        "experience": "2-4 years",
        "description": "Join our data science team to analyze and interpret complex data sets...",
        "skills": [
            "Python",
            "Machine Learning",
            "SQL"
        ],
        "salary": "$90,000 - $120,000",
        "employer_id": 1
    },
    {
        "id": 243,
        "category": "Front-End",
        "title": "UI/UX Designer",
        "company": "WebDesign Co",
        "companyLogo": "/public/vite.svg",
        "location": "Remote",
        "type": "Full-time",
        "experience": "2-5 years",
        "description": "Design user interfaces for web applications...",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript"
        ],
        "salary": "$70,000 - $90,000",
        "employer_id": 1
    },
    {
        "id": 244,
        "category": "Back-End",
        "title": "Backend Developer",
        "company": "ServerLogic",
        "companyLogo": "/public/vite.svg",
        "location": "On-Site",
        "type": "Full-time",
        "experience": "4-6 years",
        "description": "Develop server-side logic and integrate databases...",
        "skills": [
            "Java",
            "Spring Boot",
            "MySQL"
        ],
        "salary": "$85,000 - $110,000",
        "employer_id": 1
    },
    {
        "id": 245,
        "category": "Machine Learning",
        "title": "Machine Learning Eng",
        "company": "ML Innovations",
        "companyLogo": "/public/vite.svg",
        "location": "Remote",
        "type": "Full-time",
        "experience": "3-5 years",
        "description": "Apply machine learning techniques to solve complex problems...",
        "skills": [
            "Python",
            "TensorFlow",
            "Scikit-Learn"
        ],
        "salary": "$95,000 - $120,000",
        "employer_id": 1
    },
    {
        "id": 246,
        "category": "Software Development",
        "title": "Full Stack Developer",
        "company": "TechCo",
        "companyLogo": "/public/vite.svg",
        "location": "San Francisco, CA",
        "type": "Full-time",
        "experience": "3-5 years",
        "description": "Exciting opportunity for a skilled Full Stack Developer...",
        "skills": [
            "React",
            "Node.js",
            "MongoDB"
        ],
        "salary": "$80,000 - $100,000",
        "employer_id": 1
    },
    {
        "id": 247,
        "category": "Data Science",
        "title": "Data Scientist",
        "company": "Data Insights",
        "companyLogo": "/public/vite.svg",
        "location": "New York, NY",
        "type": "Full-time",
        "experience": "2-4 years",
        "description": "Join our data science team to analyze and interpret complex data sets...",
        "skills": [
            "Python",
            "Machine Learning",
            "SQL"
        ],
        "salary": "$90,000 - $120,000",
        "employer_id": 1
    },
    {
        "id": 248,
        "category": "Front-End",
        "title": "UI/UX Designer",
        "company": "WebDesign Co",
        "companyLogo": "/images/company/logo.svg",
        "location": "Remote",
        "type": "Full-time",
        "experience": "2-5 years",
        "description": "Design user interfaces for web applications...",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript"
        ],
        "salary": "$70,000 - $90,000",
        "employer_id": 1
    },
    {
        "id": 249,
        "category": "Back-End",
        "title": "Backend Developer",
        "company": "ServerLogic",
        "companyLogo": "/images/company/logo.svg",
        "location": "On-Site",
        "type": "Full-time",
        "experience": "4-6 years",
        "description": "Develop server-side logic and integrate databases...",
        "skills": [
            "Java",
            "Spring Boot",
            "MySQL"
        ],
        "salary": "$85,000 - $110,000",
        "employer_id": 1
    },
    {
        "id": 250,
        "category": "Machine Learning",
        "title": "Machine Learning Eng",
        "company": "ML Innovations",
        "companyLogo": "/images/company/logo.svg",
        "location": "Remote",
        "type": "Full-time",
        "experience": "3-5 years",
        "description": "Apply machine learning techniques to solve complex problems...",
        "skills": [
            "Python",
            "TensorFlow",
            "Scikit-Learn"
        ],
        "salary": "$95,000 - $120,000",
        "employer_id": 1
    },
    {
        "id": 251,
        "category": "Software Development",
        "title": "Full Stack Developer",
        "company": "TechCo",
        "companyLogo": "/public/vite.svg",
        "location": "San Francisco, CA",
        "type": "Full-time",
        "experience": "3-5 years",
        "description": "Exciting opportunity for a skilled Full Stack Developer...",
        "skills": [
            "React",
            "Node.js",
            "MongoDB"
        ],
        "salary": "$80,000 - $100,000",
        "employer_id": 1
    },
    {
        "id": 252,
        "category": "Data Science",
        "title": "Data Scientist",
        "company": "Data Insights",
        "companyLogo": "/public/vite.svg",
        "location": "New York, NY",
        "type": "Full-time",
        "experience": "2-4 years",
        "description": "Join our data science team to analyze and interpret complex data sets...",
        "skills": [
            "Python",
            "Machine Learning",
            "SQL"
        ],
        "salary": "$90,000 - $120,000",
        "employer_id": 1
    },
    {
        "id": 253,
        "category": "Front-End",
        "title": "UI/UX Designer",
        "company": "WebDesign Co",
        "companyLogo": "/public/vite.svg",
        "location": "Remote",
        "type": "Full-time",
        "experience": "2-5 years",
        "description": "Design user interfaces for web applications...",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript"
        ],
        "salary": "$70,000 - $90,000",
        "employer_id": 1
    },
    {
        "id": 254,
        "category": "Back-End",
        "title": "Backend Developer",
        "company": "ServerLogic",
        "companyLogo": "/public/vite.svg",
        "location": "On-Site",
        "type": "Full-time",
        "experience": "4-6 years",
        "description": "Develop server-side logic and integrate databases...",
        "skills": [
            "Java",
            "Spring Boot",
            "MySQL"
        ],
        "salary": "$85,000 - $110,000",
        "employer_id": 1
    },
    {
        "id": 255,
        "category": "Machine Learning",
        "title": "Machine Learning Eng",
        "company": "ML Innovations",
        "companyLogo": "/public/vite.svg",
        "location": "Remote",
        "type": "Full-time",
        "experience": "3-5 years",
        "description": "Apply machine learning techniques to solve complex problems...",
        "skills": [
            "Python",
            "TensorFlow",
            "Scikit-Learn"
        ],
        "salary": "$95,000 - $120,000",
        "employer_id": 1
    },
    {
        "id": 256,
        "category": "Software Development",
        "title": "Full Stack Developer",
        "company": "TechCo",
        "companyLogo": "/public/vite.svg",
        "location": "San Francisco, CA",
        "type": "Full-time",
        "experience": "3-5 years",
        "description": "Exciting opportunity for a skilled Full Stack Developer...",
        "skills": [
            "React",
            "Node.js",
            "MongoDB"
        ],
        "salary": "$80,000 - $100,000",
        "employer_id": 1
    },
    {
        "id": 257,
        "category": "Data Science",
        "title": "Data Scientist",
        "company": "Data Insights",
        "companyLogo": "/public/vite.svg",
        "location": "New York, NY",
        "type": "Full-time",
        "experience": "2-4 years",
        "description": "Join our data science team to analyze and interpret complex data sets...",
        "skills": [
            "Python",
            "Machine Learning",
            "SQL"
        ],
        "salary": "$90,000 - $120,000",
        "employer_id": 1
    },
    {
        "id": 258,
        "category": "Front-End",
        "title": "UI/UX Designer",
        "company": "WebDesign Co",
        "companyLogo": "/images/company/logo.svg",
        "location": "Remote",
        "type": "Full-time",
        "experience": "2-5 years",
        "description": "Design user interfaces for web applications...",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript"
        ],
        "salary": "$70,000 - $90,000",
        "employer_id": 1
    },
    {
        "id": 259,
        "category": "Back-End",
        "title": "Backend Developer",
        "company": "ServerLogic",
        "companyLogo": "/images/company/logo.svg",
        "location": "On-Site",
        "type": "Full-time",
        "experience": "4-6 years",
        "description": "Develop server-side logic and integrate databases...",
        "skills": [
            "Java",
            "Spring Boot",
            "MySQL"
        ],
        "salary": "$85,000 - $110,000",
        "employer_id": 1
    },
    {
        "id": 260,
        "category": "Machine Learning",
        "title": "Machine Learning Eng",
        "company": "ML Innovations",
        "companyLogo": "/images/company/logo.svg",
        "location": "Remote",
        "type": "Full-time",
        "experience": "3-5 years",
        "description": "Apply machine learning techniques to solve complex problems...",
        "skills": [
            "Python",
            "TensorFlow",
            "Scikit-Learn"
        ],
        "salary": "$95,000 - $120,000",
        "employer_id": 1
    },
    {
        "id": 261,
        "category": "Software Development",
        "title": "Full Stack Developer",
        "company": "TechCo",
        "companyLogo": "/public/vite.svg",
        "location": "San Francisco, CA",
        "type": "Full-time",
        "experience": "3-5 years",
        "description": "Exciting opportunity for a skilled Full Stack Developer...",
        "skills": [
            "React",
            "Node.js",
            "MongoDB"
        ],
        "salary": "$80,000 - $100,000",
        "employer_id": 1
    },
    {
        "id": 262,
        "category": "Data Science",
        "title": "Data Scientist",
        "company": "Data Insights",
        "companyLogo": "/public/vite.svg",
        "location": "New York, NY",
        "type": "Full-time",
        "experience": "2-4 years",
        "description": "Join our data science team to analyze and interpret complex data sets...",
        "skills": [
            "Python",
            "Machine Learning",
            "SQL"
        ],
        "salary": "$90,000 - $120,000",
        "employer_id": 1
    },
    {
        "id": 263,
        "category": "Front-End",
        "title": "UI/UX Designer",
        "company": "WebDesign Co",
        "companyLogo": "/public/vite.svg",
        "location": "Remote",
        "type": "Full-time",
        "experience": "2-5 years",
        "description": "Design user interfaces for web applications...",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript"
        ],
        "salary": "$70,000 - $90,000",
        "employer_id": 1
    },
    {
        "id": 264,
        "category": "Back-End",
        "title": "Backend Developer",
        "company": "ServerLogic",
        "companyLogo": "/public/vite.svg",
        "location": "On-Site",
        "type": "Full-time",
        "experience": "4-6 years",
        "description": "Develop server-side logic and integrate databases...",
        "skills": [
            "Java",
            "Spring Boot",
            "MySQL"
        ],
        "salary": "$85,000 - $110,000",
        "employer_id": 1
    },
    {
        "id": 265,
        "category": "Machine Learning",
        "title": "Machine Learning Eng",
        "company": "ML Innovations",
        "companyLogo": "/public/vite.svg",
        "location": "Remote",
        "type": "Full-time",
        "experience": "3-5 years",
        "description": "Apply machine learning techniques to solve complex problems...",
        "skills": [
            "Python",
            "TensorFlow",
            "Scikit-Learn"
        ],
        "salary": "$95,000 - $120,000",
        "employer_id": 1
    },
    {
        "id": 266,
        "category": "Software Development",
        "title": "Full Stack Developer",
        "company": "TechCo",
        "companyLogo": "/public/vite.svg",
        "location": "San Francisco, CA",
        "type": "Full-time",
        "experience": "3-5 years",
        "description": "Exciting opportunity for a skilled Full Stack Developer...",
        "skills": [
            "React",
            "Node.js",
            "MongoDB"
        ],
        "salary": "$80,000 - $100,000",
        "employer_id": 1
    },
    {
        "id": 267,
        "category": "Data Science",
        "title": "Data Scientist",
        "company": "Data Insights",
        "companyLogo": "/public/vite.svg",
        "location": "New York, NY",
        "type": "Full-time",
        "experience": "2-4 years",
        "description": "Join our data science team to analyze and interpret complex data sets...",
        "skills": [
            "Python",
            "Machine Learning",
            "SQL"
        ],
        "salary": "$90,000 - $120,000",
        "employer_id": 1
    },
    {
        "id": 268,
        "category": "Front-End",
        "title": "UI/UX Designer",
        "company": "WebDesign Co",
        "companyLogo": "/images/company/logo.svg",
        "location": "Remote",
        "type": "Full-time",
        "experience": "2-5 years",
        "description": "Design user interfaces for web applications...",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript"
        ],
        "salary": "$70,000 - $90,000",
        "employer_id": 1
    },
    {
        "id": 269,
        "category": "Back-End",
        "title": "Backend Developer",
        "company": "ServerLogic",
        "companyLogo": "/images/company/logo.svg",
        "location": "On-Site",
        "type": "Full-time",
        "experience": "4-6 years",
        "description": "Develop server-side logic and integrate databases...",
        "skills": [
            "Java",
            "Spring Boot",
            "MySQL"
        ],
        "salary": "$85,000 - $110,000",
        "employer_id": 1
    },
    {
        "id": 270,
        "category": "Machine Learning",
        "title": "Machine Learning Eng",
        "company": "ML Innovations",
        "companyLogo": "/images/company/logo.svg",
        "location": "Remote",
        "type": "Full-time",
        "experience": "3-5 years",
        "description": "Apply machine learning techniques to solve complex problems...",
        "skills": [
            "Python",
            "TensorFlow",
            "Scikit-Learn"
        ],
        "salary": "$95,000 - $120,000",
        "employer_id": 1
    },
    {
        "id": 271,
        "category": "Software Development",
        "title": "Full Stack Developer",
        "company": "TechCo",
        "companyLogo": "/public/vite.svg",
        "location": "San Francisco, CA",
        "type": "Full-time",
        "experience": "3-5 years",
        "description": "Exciting opportunity for a skilled Full Stack Developer...",
        "skills": [
            "React",
            "Node.js",
            "MongoDB"
        ],
        "salary": "$80,000 - $100,000",
        "employer_id": 1
    },
    {
        "id": 272,
        "category": "Data Science",
        "title": "Data Scientist",
        "company": "Data Insights",
        "companyLogo": "/public/vite.svg",
        "location": "New York, NY",
        "type": "Full-time",
        "experience": "2-4 years",
        "description": "Join our data science team to analyze and interpret complex data sets...",
        "skills": [
            "Python",
            "Machine Learning",
            "SQL"
        ],
        "salary": "$90,000 - $120,000",
        "employer_id": 1
    },
    {
        "id": 273,
        "category": "Front-End",
        "title": "UI/UX Designer",
        "company": "WebDesign Co",
        "companyLogo": "/public/vite.svg",
        "location": "Remote",
        "type": "Full-time",
        "experience": "2-5 years",
        "description": "Design user interfaces for web applications...",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript"
        ],
        "salary": "$70,000 - $90,000",
        "employer_id": 1
    },
    {
        "id": 274,
        "category": "Back-End",
        "title": "Backend Developer",
        "company": "ServerLogic",
        "companyLogo": "/public/vite.svg",
        "location": "On-Site",
        "type": "Full-time",
        "experience": "4-6 years",
        "description": "Develop server-side logic and integrate databases...",
        "skills": [
            "Java",
            "Spring Boot",
            "MySQL"
        ],
        "salary": "$85,000 - $110,000",
        "employer_id": 1
    },
    {
        "id": 275,
        "category": "Machine Learning",
        "title": "Machine Learning Eng",
        "company": "ML Innovations",
        "companyLogo": "/public/vite.svg",
        "location": "Remote",
        "type": "Full-time",
        "experience": "3-5 years",
        "description": "Apply machine learning techniques to solve complex problems...",
        "skills": [
            "Python",
            "TensorFlow",
            "Scikit-Learn"
        ],
        "salary": "$95,000 - $120,000",
        "employer_id": 1
    },
    {
        "id": 276,
        "category": "Software Development",
        "title": "Full Stack Developer",
        "company": "TechCo",
        "companyLogo": "/public/vite.svg",
        "location": "San Francisco, CA",
        "type": "Full-time",
        "experience": "3-5 years",
        "description": "Exciting opportunity for a skilled Full Stack Developer...",
        "skills": [
            "React",
            "Node.js",
            "MongoDB"
        ],
        "salary": "$80,000 - $100,000",
        "employer_id": 1
    },
    {
        "id": 277,
        "category": "Data Science",
        "title": "Data Scientist",
        "company": "Data Insights",
        "companyLogo": "/public/vite.svg",
        "location": "New York, NY",
        "type": "Full-time",
        "experience": "2-4 years",
        "description": "Join our data science team to analyze and interpret complex data sets...",
        "skills": [
            "Python",
            "Machine Learning",
            "SQL"
        ],
        "salary": "$90,000 - $120,000",
        "employer_id": 1
    },
    {
        "id": 278,
        "category": "Front-End",
        "title": "UI/UX Designer",
        "company": "WebDesign Co",
        "companyLogo": "/images/company/logo.svg",
        "location": "Remote",
        "type": "Full-time",
        "experience": "2-5 years",
        "description": "Design user interfaces for web applications...",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript"
        ],
        "salary": "$70,000 - $90,000",
        "employer_id": 1
    },
    {
        "id": 279,
        "category": "Back-End",
        "title": "Backend Developer",
        "company": "ServerLogic",
        "companyLogo": "/images/company/logo.svg",
        "location": "On-Site",
        "type": "Full-time",
        "experience": "4-6 years",
        "description": "Develop server-side logic and integrate databases...",
        "skills": [
            "Java",
            "Spring Boot",
            "MySQL"
        ],
        "salary": "$85,000 - $110,000",
        "employer_id": 1
    },
    {
        "id": 280,
        "category": "Machine Learning",
        "title": "Machine Learning Eng",
        "company": "ML Innovations",
        "companyLogo": "/images/company/logo.svg",
        "location": "Remote",
        "type": "Full-time",
        "experience": "3-5 years",
        "description": "Apply machine learning techniques to solve complex problems...",
        "skills": [
            "Python",
            "TensorFlow",
            "Scikit-Learn"
        ],
        "salary": "$95,000 - $120,000",
        "employer_id": 1
    },
    {
        "id": 281,
        "category": "Software Development",
        "title": "Full Stack Developer",
        "company": "TechCo",
        "companyLogo": "/public/vite.svg",
        "location": "San Francisco, CA",
        "type": "Full-time",
        "experience": "3-5 years",
        "description": "Exciting opportunity for a skilled Full Stack Developer...",
        "skills": [
            "React",
            "Node.js",
            "MongoDB"
        ],
        "salary": "$80,000 - $100,000",
        "employer_id": 1
    },
    {
        "id": 282,
        "category": "Data Science",
        "title": "Data Scientist",
        "company": "Data Insights",
        "companyLogo": "/public/vite.svg",
        "location": "New York, NY",
        "type": "Full-time",
        "experience": "2-4 years",
        "description": "Join our data science team to analyze and interpret complex data sets...",
        "skills": [
            "Python",
            "Machine Learning",
            "SQL"
        ],
        "salary": "$90,000 - $120,000",
        "employer_id": 1
    },
    {
        "id": 283,
        "category": "Front-End",
        "title": "UI/UX Designer",
        "company": "WebDesign Co",
        "companyLogo": "/public/vite.svg",
        "location": "Remote",
        "type": "Full-time",
        "experience": "2-5 years",
        "description": "Design user interfaces for web applications...",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript"
        ],
        "salary": "$70,000 - $90,000",
        "employer_id": 1
    },
    {
        "id": 284,
        "category": "Back-End",
        "title": "Backend Developer",
        "company": "ServerLogic",
        "companyLogo": "/public/vite.svg",
        "location": "On-Site",
        "type": "Full-time",
        "experience": "4-6 years",
        "description": "Develop server-side logic and integrate databases...",
        "skills": [
            "Java",
            "Spring Boot",
            "MySQL"
        ],
        "salary": "$85,000 - $110,000",
        "employer_id": 1
    },
    {
        "id": 285,
        "category": "Machine Learning",
        "title": "Machine Learning Eng",
        "company": "ML Innovations",
        "companyLogo": "/public/vite.svg",
        "location": "Remote",
        "type": "Full-time",
        "experience": "3-5 years",
        "description": "Apply machine learning techniques to solve complex problems...",
        "skills": [
            "Python",
            "TensorFlow",
            "Scikit-Learn"
        ],
        "salary": "$95,000 - $120,000",
        "employer_id": 1
    },
    {
        "id": 286,
        "category": "Software Development",
        "title": "Full Stack Developer",
        "company": "TechCo",
        "companyLogo": "/public/vite.svg",
        "location": "San Francisco, CA",
        "type": "Full-time",
        "experience": "3-5 years",
        "description": "Exciting opportunity for a skilled Full Stack Developer...",
        "skills": [
            "React",
            "Node.js",
            "MongoDB"
        ],
        "salary": "$80,000 - $100,000",
        "employer_id": 1
    },
    {
        "id": 287,
        "category": "Data Science",
        "title": "Data Scientist",
        "company": "Data Insights",
        "companyLogo": "/public/vite.svg",
        "location": "New York, NY",
        "type": "Full-time",
        "experience": "2-4 years",
        "description": "Join our data science team to analyze and interpret complex data sets...",
        "skills": [
            "Python",
            "Machine Learning",
            "SQL"
        ],
        "salary": "$90,000 - $120,000",
        "employer_id": 1
    },
    {
        "id": 288,
        "category": "Front-End",
        "title": "UI/UX Designer",
        "company": "WebDesign Co",
        "companyLogo": "/images/company/logo.svg",
        "location": "Remote",
        "type": "Full-time",
        "experience": "2-5 years",
        "description": "Design user interfaces for web applications...",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript"
        ],
        "salary": "$70,000 - $90,000",
        "employer_id": 1
    },
    {
        "id": 289,
        "category": "Back-End",
        "title": "Backend Developer",
        "company": "ServerLogic",
        "companyLogo": "/images/company/logo.svg",
        "location": "On-Site",
        "type": "Full-time",
        "experience": "4-6 years",
        "description": "Develop server-side logic and integrate databases...",
        "skills": [
            "Java",
            "Spring Boot",
            "MySQL"
        ],
        "salary": "$85,000 - $110,000",
        "employer_id": 1
    },
    {
        "id": 290,
        "category": "Machine Learning",
        "title": "Machine Learning Eng",
        "company": "ML Innovations",
        "companyLogo": "/images/company/logo.svg",
        "location": "Remote",
        "type": "Full-time",
        "experience": "3-5 years",
        "description": "Apply machine learning techniques to solve complex problems...",
        "skills": [
            "Python",
            "TensorFlow",
            "Scikit-Learn"
        ],
        "salary": "$95,000 - $120,000",
        "employer_id": 1
    },
    {
        "id": 291,
        "category": "Software Development",
        "title": "Full Stack Developer",
        "company": "TechCo",
        "companyLogo": "/public/vite.svg",
        "location": "San Francisco, CA",
        "type": "Full-time",
        "experience": "3-5 years",
        "description": "Exciting opportunity for a skilled Full Stack Developer...",
        "skills": [
            "React",
            "Node.js",
            "MongoDB"
        ],
        "salary": "$80,000 - $100,000",
        "employer_id": 1
    },
    {
        "id": 292,
        "category": "Data Science",
        "title": "Data Scientist",
        "company": "Data Insights",
        "companyLogo": "/public/vite.svg",
        "location": "New York, NY",
        "type": "Full-time",
        "experience": "2-4 years",
        "description": "Join our data science team to analyze and interpret complex data sets...",
        "skills": [
            "Python",
            "Machine Learning",
            "SQL"
        ],
        "salary": "$90,000 - $120,000",
        "employer_id": 1
    },
    {
        "id": 293,
        "category": "Front-End",
        "title": "UI/UX Designer",
        "company": "WebDesign Co",
        "companyLogo": "/public/vite.svg",
        "location": "Remote",
        "type": "Full-time",
        "experience": "2-5 years",
        "description": "Design user interfaces for web applications...",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript"
        ],
        "salary": "$70,000 - $90,000",
        "employer_id": 1
    },
    {
        "id": 294,
        "category": "Back-End",
        "title": "Backend Developer",
        "company": "ServerLogic",
        "companyLogo": "/public/vite.svg",
        "location": "On-Site",
        "type": "Full-time",
        "experience": "4-6 years",
        "description": "Develop server-side logic and integrate databases...",
        "skills": [
            "Java",
            "Spring Boot",
            "MySQL"
        ],
        "salary": "$85,000 - $110,000",
        "employer_id": 1
    },
    {
        "id": 295,
        "category": "Machine Learning",
        "title": "Machine Learning Eng",
        "company": "ML Innovations",
        "companyLogo": "/public/vite.svg",
        "location": "Remote",
        "type": "Full-time",
        "experience": "3-5 years",
        "description": "Apply machine learning techniques to solve complex problems...",
        "skills": [
            "Python",
            "TensorFlow",
            "Scikit-Learn"
        ],
        "salary": "$95,000 - $120,000",
        "employer_id": 1
    },
    {
        "id": 296,
        "category": "Software Development",
        "title": "Full Stack Developer",
        "company": "TechCo",
        "companyLogo": "/public/vite.svg",
        "location": "San Francisco, CA",
        "type": "Full-time",
        "experience": "3-5 years",
        "description": "Exciting opportunity for a skilled Full Stack Developer...",
        "skills": [
            "React",
            "Node.js",
            "MongoDB"
        ],
        "salary": "$80,000 - $100,000",
        "employer_id": 1
    },
    {
        "id": 297,
        "category": "Data Science",
        "title": "Data Scientist",
        "company": "Data Insights",
        "companyLogo": "/public/vite.svg",
        "location": "New York, NY",
        "type": "Full-time",
        "experience": "2-4 years",
        "description": "Join our data science team to analyze and interpret complex data sets...",
        "skills": [
            "Python",
            "Machine Learning",
            "SQL"
        ],
        "salary": "$90,000 - $120,000",
        "employer_id": 1
    },
    {
        "id": 298,
        "category": "Front-End",
        "title": "UI/UX Designer",
        "company": "WebDesign Co",
        "companyLogo": "/images/company/logo.svg",
        "location": "Remote",
        "type": "Full-time",
        "experience": "2-5 years",
        "description": "Design user interfaces for web applications...",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript"
        ],
        "salary": "$70,000 - $90,000",
        "employer_id": 1
    },
    {
        "id": 299,
        "category": "Back-End",
        "title": "Backend Developer",
        "company": "ServerLogic",
        "companyLogo": "/images/company/logo.svg",
        "location": "On-Site",
        "type": "Full-time",
        "experience": "4-6 years",
        "description": "Develop server-side logic and integrate databases...",
        "skills": [
            "Java",
            "Spring Boot",
            "MySQL"
        ],
        "salary": "$85,000 - $110,000",
        "employer_id": 1
    },
    {
        "id": 300,
        "category": "Machine Learning",
        "title": "Machine Learning Eng",
        "company": "ML Innovations",
        "companyLogo": "/images/company/logo.svg",
        "location": "Remote",
        "type": "Full-time",
        "experience": "3-5 years",
        "description": "Apply machine learning techniques to solve complex problems...",
        "skills": [
            "Python",
            "TensorFlow",
            "Scikit-Learn"
        ],
        "salary": "$95,000 - $120,000",
        "employer_id": 1
    },
    {
        "id": 301,
        "category": "Software Development",
        "title": "Full Stack Developer",
        "company": "TechCo",
        "companyLogo": "/public/vite.svg",
        "location": "San Francisco, CA",
        "type": "Full-time",
        "experience": "3-5 years",
        "description": "Exciting opportunity for a skilled Full Stack Developer...",
        "skills": [
            "React",
            "Node.js",
            "MongoDB"
        ],
        "salary": "$80,000 - $100,000",
        "employer_id": 1
    },
    {
        "id": 302,
        "category": "Data Science",
        "title": "Data Scientist",
        "company": "Data Insights",
        "companyLogo": "/public/vite.svg",
        "location": "New York, NY",
        "type": "Full-time",
        "experience": "2-4 years",
        "description": "Join our data science team to analyze and interpret complex data sets...",
        "skills": [
            "Python",
            "Machine Learning",
            "SQL"
        ],
        "salary": "$90,000 - $120,000",
        "employer_id": 1
    },
    {
        "id": 303,
        "category": "Front-End",
        "title": "UI/UX Designer",
        "company": "WebDesign Co",
        "companyLogo": "/public/vite.svg",
        "location": "Remote",
        "type": "Full-time",
        "experience": "2-5 years",
        "description": "Design user interfaces for web applications...",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript"
        ],
        "salary": "$70,000 - $90,000",
        "employer_id": 1
    },
    {
        "id": 304,
        "category": "Back-End",
        "title": "Backend Developer",
        "company": "ServerLogic",
        "companyLogo": "/public/vite.svg",
        "location": "On-Site",
        "type": "Full-time",
        "experience": "4-6 years",
        "description": "Develop server-side logic and integrate databases...",
        "skills": [
            "Java",
            "Spring Boot",
            "MySQL"
        ],
        "salary": "$85,000 - $110,000",
        "employer_id": 1
    },
    {
        "id": 305,
        "category": "Machine Learning",
        "title": "Machine Learning Eng",
        "company": "ML Innovations",
        "companyLogo": "/public/vite.svg",
        "location": "Remote",
        "type": "Full-time",
        "experience": "3-5 years",
        "description": "Apply machine learning techniques to solve complex problems...",
        "skills": [
            "Python",
            "TensorFlow",
            "Scikit-Learn"
        ],
        "salary": "$95,000 - $120,000",
        "employer_id": 1
    },
    {
        "id": 306,
        "category": "Software Development",
        "title": "Full Stack Developer",
        "company": "TechCo",
        "companyLogo": "/public/vite.svg",
        "location": "San Francisco, CA",
        "type": "Full-time",
        "experience": "3-5 years",
        "description": "Exciting opportunity for a skilled Full Stack Developer...",
        "skills": [
            "React",
            "Node.js",
            "MongoDB"
        ],
        "salary": "$80,000 - $100,000",
        "employer_id": 1
    },
    {
        "id": 307,
        "category": "Data Science",
        "title": "Data Scientist",
        "company": "Data Insights",
        "companyLogo": "/public/vite.svg",
        "location": "New York, NY",
        "type": "Full-time",
        "experience": "2-4 years",
        "description": "Join our data science team to analyze and interpret complex data sets...",
        "skills": [
            "Python",
            "Machine Learning",
            "SQL"
        ],
        "salary": "$90,000 - $120,000",
        "employer_id": 1
    },
    {
        "id": 308,
        "category": "Front-End",
        "title": "UI/UX Designer",
        "company": "WebDesign Co",
        "companyLogo": "/images/company/logo.svg",
        "location": "Remote",
        "type": "Full-time",
        "experience": "2-5 years",
        "description": "Design user interfaces for web applications...",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript"
        ],
        "salary": "$70,000 - $90,000",
        "employer_id": 1
    },
    {
        "id": 309,
        "category": "Back-End",
        "title": "Backend Developer",
        "company": "ServerLogic",
        "companyLogo": "/images/company/logo.svg",
        "location": "On-Site",
        "type": "Full-time",
        "experience": "4-6 years",
        "description": "Develop server-side logic and integrate databases...",
        "skills": [
            "Java",
            "Spring Boot",
            "MySQL"
        ],
        "salary": "$85,000 - $110,000",
        "employer_id": 1
    },
    {
        "id": 310,
        "category": "Machine Learning",
        "title": "Machine Learning Eng",
        "company": "ML Innovations",
        "companyLogo": "/images/company/logo.svg",
        "location": "Remote",
        "type": "Full-time",
        "experience": "3-5 years",
        "description": "Apply machine learning techniques to solve complex problems...",
        "skills": [
            "Python",
            "TensorFlow",
            "Scikit-Learn"
        ],
        "salary": "$95,000 - $120,000",
        "employer_id": 1
    },
    {
        "id": 311,
        "category": "Software Development",
        "title": "Full Stack Developer",
        "company": "TechCo",
        "companyLogo": "/public/vite.svg",
        "location": "San Francisco, CA",
        "type": "Full-time",
        "experience": "3-5 years",
        "description": "Exciting opportunity for a skilled Full Stack Developer...",
        "skills": [
            "React",
            "Node.js",
            "MongoDB"
        ],
        "salary": "$80,000 - $100,000",
        "employer_id": 1
    },
    {
        "id": 312,
        "category": "Data Science",
        "title": "Data Scientist",
        "company": "Data Insights",
        "companyLogo": "/public/vite.svg",
        "location": "New York, NY",
        "type": "Full-time",
        "experience": "2-4 years",
        "description": "Join our data science team to analyze and interpret complex data sets...",
        "skills": [
            "Python",
            "Machine Learning",
            "SQL"
        ],
        "salary": "$90,000 - $120,000",
        "employer_id": 1
    },
    {
        "id": 313,
        "category": "Front-End",
        "title": "UI/UX Designer",
        "company": "WebDesign Co",
        "companyLogo": "/public/vite.svg",
        "location": "Remote",
        "type": "Full-time",
        "experience": "2-5 years",
        "description": "Design user interfaces for web applications...",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript"
        ],
        "salary": "$70,000 - $90,000",
        "employer_id": 1
    },
    {
        "id": 314,
        "category": "Back-End",
        "title": "Backend Developer",
        "company": "ServerLogic",
        "companyLogo": "/public/vite.svg",
        "location": "On-Site",
        "type": "Full-time",
        "experience": "4-6 years",
        "description": "Develop server-side logic and integrate databases...",
        "skills": [
            "Java",
            "Spring Boot",
            "MySQL"
        ],
        "salary": "$85,000 - $110,000",
        "employer_id": 1
    },
    {
        "id": 315,
        "category": "Machine Learning",
        "title": "Machine Learning Eng",
        "company": "ML Innovations",
        "companyLogo": "/public/vite.svg",
        "location": "Remote",
        "type": "Full-time",
        "experience": "3-5 years",
        "description": "Apply machine learning techniques to solve complex problems...",
        "skills": [
            "Python",
            "TensorFlow",
            "Scikit-Learn"
        ],
        "salary": "$95,000 - $120,000",
        "employer_id": 1
    },
    {
        "id": 316,
        "category": "Software Development",
        "title": "Full Stack Developer",
        "company": "TechCo",
        "companyLogo": "/public/vite.svg",
        "location": "San Francisco, CA",
        "type": "Full-time",
        "experience": "3-5 years",
        "description": "Exciting opportunity for a skilled Full Stack Developer...",
        "skills": [
            "React",
            "Node.js",
            "MongoDB"
        ],
        "salary": "$80,000 - $100,000",
        "employer_id": 1
    },
    {
        "id": 317,
        "category": "Data Science",
        "title": "Data Scientist",
        "company": "Data Insights",
        "companyLogo": "/public/vite.svg",
        "location": "New York, NY",
        "type": "Full-time",
        "experience": "2-4 years",
        "description": "Join our data science team to analyze and interpret complex data sets...",
        "skills": [
            "Python",
            "Machine Learning",
            "SQL"
        ],
        "salary": "$90,000 - $120,000",
        "employer_id": 1
    },
    {
        "id": 318,
        "category": "Front-End",
        "title": "UI/UX Designer",
        "company": "WebDesign Co",
        "companyLogo": "/images/company/logo.svg",
        "location": "Remote",
        "type": "Full-time",
        "experience": "2-5 years",
        "description": "Design user interfaces for web applications...",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript"
        ],
        "salary": "$70,000 - $90,000",
        "employer_id": 1
    },
    {
        "id": 319,
        "category": "Back-End",
        "title": "Backend Developer",
        "company": "ServerLogic",
        "companyLogo": "/images/company/logo.svg",
        "location": "On-Site",
        "type": "Full-time",
        "experience": "4-6 years",
        "description": "Develop server-side logic and integrate databases...",
        "skills": [
            "Java",
            "Spring Boot",
            "MySQL"
        ],
        "salary": "$85,000 - $110,000",
        "employer_id": 1
    },
    {
        "id": 320,
        "category": "Machine Learning",
        "title": "Machine Learning Eng",
        "company": "ML Innovations",
        "companyLogo": "/images/company/logo.svg",
        "location": "Remote",
        "type": "Full-time",
        "experience": "3-5 years",
        "description": "Apply machine learning techniques to solve complex problems...",
        "skills": [
            "Python",
            "TensorFlow",
            "Scikit-Learn"
        ],
        "salary": "$95,000 - $120,000",
        "employer_id": 1
    },
    {
        "id": 321,
        "category": "Software Development",
        "title": "Full Stack Developer",
        "company": "TechCo",
        "companyLogo": "/public/vite.svg",
        "location": "San Francisco, CA",
        "type": "Full-time",
        "experience": "3-5 years",
        "description": "Exciting opportunity for a skilled Full Stack Developer...",
        "skills": [
            "React",
            "Node.js",
            "MongoDB"
        ],
        "salary": "$80,000 - $100,000",
        "employer_id": 1
    },
    {
        "id": 322,
        "category": "Data Science",
        "title": "Data Scientist",
        "company": "Data Insights",
        "companyLogo": "/public/vite.svg",
        "location": "New York, NY",
        "type": "Full-time",
        "experience": "2-4 years",
        "description": "Join our data science team to analyze and interpret complex data sets...",
        "skills": [
            "Python",
            "Machine Learning",
            "SQL"
        ],
        "salary": "$90,000 - $120,000",
        "employer_id": 1
    },
    {
        "id": 323,
        "category": "Front-End",
        "title": "UI/UX Designer",
        "company": "WebDesign Co",
        "companyLogo": "/public/vite.svg",
        "location": "Remote",
        "type": "Full-time",
        "experience": "2-5 years",
        "description": "Design user interfaces for web applications...",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript"
        ],
        "salary": "$70,000 - $90,000",
        "employer_id": 1
    },
    {
        "id": 324,
        "category": "Back-End",
        "title": "Backend Developer",
        "company": "ServerLogic",
        "companyLogo": "/public/vite.svg",
        "location": "On-Site",
        "type": "Full-time",
        "experience": "4-6 years",
        "description": "Develop server-side logic and integrate databases...",
        "skills": [
            "Java",
            "Spring Boot",
            "MySQL"
        ],
        "salary": "$85,000 - $110,000",
        "employer_id": 1
    },
    {
        "id": 325,
        "category": "Machine Learning",
        "title": "Machine Learning Eng",
        "company": "ML Innovations",
        "companyLogo": "/public/vite.svg",
        "location": "Remote",
        "type": "Full-time",
        "experience": "3-5 years",
        "description": "Apply machine learning techniques to solve complex problems...",
        "skills": [
            "Python",
            "TensorFlow",
            "Scikit-Learn"
        ],
        "salary": "$95,000 - $120,000",
        "employer_id": 1
    },
    {
        "id": 326,
        "category": "Software Development",
        "title": "Full Stack Developer",
        "company": "TechCo",
        "companyLogo": "/public/vite.svg",
        "location": "San Francisco, CA",
        "type": "Full-time",
        "experience": "3-5 years",
        "description": "Exciting opportunity for a skilled Full Stack Developer...",
        "skills": [
            "React",
            "Node.js",
            "MongoDB"
        ],
        "salary": "$80,000 - $100,000",
        "employer_id": 1
    },
    {
        "id": 327,
        "category": "Data Science",
        "title": "Data Scientist",
        "company": "Data Insights",
        "companyLogo": "/public/vite.svg",
        "location": "New York, NY",
        "type": "Full-time",
        "experience": "2-4 years",
        "description": "Join our data science team to analyze and interpret complex data sets...",
        "skills": [
            "Python",
            "Machine Learning",
            "SQL"
        ],
        "salary": "$90,000 - $120,000",
        "employer_id": 1
    },
    {
        "id": 328,
        "category": "Front-End",
        "title": "UI/UX Designer",
        "company": "WebDesign Co",
        "companyLogo": "/images/company/logo.svg",
        "location": "Remote",
        "type": "Full-time",
        "experience": "2-5 years",
        "description": "Design user interfaces for web applications...",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript"
        ],
        "salary": "$70,000 - $90,000",
        "employer_id": 1
    },
    {
        "id": 329,
        "category": "Back-End",
        "title": "Backend Developer",
        "company": "ServerLogic",
        "companyLogo": "/images/company/logo.svg",
        "location": "On-Site",
        "type": "Full-time",
        "experience": "4-6 years",
        "description": "Develop server-side logic and integrate databases...",
        "skills": [
            "Java",
            "Spring Boot",
            "MySQL"
        ],
        "salary": "$85,000 - $110,000",
        "employer_id": 1
    },
    {
        "id": 330,
        "category": "Machine Learning",
        "title": "Machine Learning Eng",
        "company": "ML Innovations",
        "companyLogo": "/images/company/logo.svg",
        "location": "Remote",
        "type": "Full-time",
        "experience": "3-5 years",
        "description": "Apply machine learning techniques to solve complex problems...",
        "skills": [
            "Python",
            "TensorFlow",
            "Scikit-Learn"
        ],
        "salary": "$95,000 - $120,000",
        "employer_id": 1
    },
    {
        "id": 331,
        "category": "Software Development",
        "title": "Full Stack Developer",
        "company": "TechCo",
        "companyLogo": "/public/vite.svg",
        "location": "San Francisco, CA",
        "type": "Full-time",
        "experience": "3-5 years",
        "description": "Exciting opportunity for a skilled Full Stack Developer...",
        "skills": [
            "React",
            "Node.js",
            "MongoDB"
        ],
        "salary": "$80,000 - $100,000",
        "employer_id": 1
    },
    {
        "id": 332,
        "category": "Data Science",
        "title": "Data Scientist",
        "company": "Data Insights",
        "companyLogo": "/public/vite.svg",
        "location": "New York, NY",
        "type": "Full-time",
        "experience": "2-4 years",
        "description": "Join our data science team to analyze and interpret complex data sets...",
        "skills": [
            "Python",
            "Machine Learning",
            "SQL"
        ],
        "salary": "$90,000 - $120,000",
        "employer_id": 1
    },
    {
        "id": 333,
        "category": "Front-End",
        "title": "UI/UX Designer",
        "company": "WebDesign Co",
        "companyLogo": "/public/vite.svg",
        "location": "Remote",
        "type": "Full-time",
        "experience": "2-5 years",
        "description": "Design user interfaces for web applications...",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript"
        ],
        "salary": "$70,000 - $90,000",
        "employer_id": 1
    },
    {
        "id": 334,
        "category": "Back-End",
        "title": "Backend Developer",
        "company": "ServerLogic",
        "companyLogo": "/public/vite.svg",
        "location": "On-Site",
        "type": "Full-time",
        "experience": "4-6 years",
        "description": "Develop server-side logic and integrate databases...",
        "skills": [
            "Java",
            "Spring Boot",
            "MySQL"
        ],
        "salary": "$85,000 - $110,000",
        "employer_id": 1
    },
    {
        "id": 335,
        "category": "Machine Learning",
        "title": "Machine Learning Eng",
        "company": "ML Innovations",
        "companyLogo": "/public/vite.svg",
        "location": "Remote",
        "type": "Full-time",
        "experience": "3-5 years",
        "description": "Apply machine learning techniques to solve complex problems...",
        "skills": [
            "Python",
            "TensorFlow",
            "Scikit-Learn"
        ],
        "salary": "$95,000 - $120,000",
        "employer_id": 1
    },
    {
        "id": 336,
        "category": "Software Development",
        "title": "Full Stack Developer",
        "company": "TechCo",
        "companyLogo": "/public/vite.svg",
        "location": "San Francisco, CA",
        "type": "Full-time",
        "experience": "3-5 years",
        "description": "Exciting opportunity for a skilled Full Stack Developer...",
        "skills": [
            "React",
            "Node.js",
            "MongoDB"
        ],
        "salary": "$80,000 - $100,000",
        "employer_id": 1
    },
    {
        "id": 337,
        "category": "Data Science",
        "title": "Data Scientist",
        "company": "Data Insights",
        "companyLogo": "/public/vite.svg",
        "location": "New York, NY",
        "type": "Full-time",
        "experience": "2-4 years",
        "description": "Join our data science team to analyze and interpret complex data sets...",
        "skills": [
            "Python",
            "Machine Learning",
            "SQL"
        ],
        "salary": "$90,000 - $120,000",
        "employer_id": 1
    },
    {
        "id": 338,
        "category": "Front-End",
        "title": "UI/UX Designer",
        "company": "WebDesign Co",
        "companyLogo": "/images/company/logo.svg",
        "location": "Remote",
        "type": "Full-time",
        "experience": "2-5 years",
        "description": "Design user interfaces for web applications...",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript"
        ],
        "salary": "$70,000 - $90,000",
        "employer_id": 1
    },
    {
        "id": 339,
        "category": "Back-End",
        "title": "Backend Developer",
        "company": "ServerLogic",
        "companyLogo": "/images/company/logo.svg",
        "location": "On-Site",
        "type": "Full-time",
        "experience": "4-6 years",
        "description": "Develop server-side logic and integrate databases...",
        "skills": [
            "Java",
            "Spring Boot",
            "MySQL"
        ],
        "salary": "$85,000 - $110,000",
        "employer_id": 1
    },
    {
        "id": 340,
        "category": "Machine Learning",
        "title": "Machine Learning Eng",
        "company": "ML Innovations",
        "companyLogo": "/images/company/logo.svg",
        "location": "Remote",
        "type": "Full-time",
        "experience": "3-5 years",
        "description": "Apply machine learning techniques to solve complex problems...",
        "skills": [
            "Python",
            "TensorFlow",
            "Scikit-Learn"
        ],
        "salary": "$95,000 - $120,000",
        "employer_id": 1
    },
    {
        "id": 341,
        "category": "Software Development",
        "title": "Full Stack Developer",
        "company": "TechCo",
        "companyLogo": "/public/vite.svg",
        "location": "San Francisco, CA",
        "type": "Full-time",
        "experience": "3-5 years",
        "description": "Exciting opportunity for a skilled Full Stack Developer...",
        "skills": [
            "React",
            "Node.js",
            "MongoDB"
        ],
        "salary": "$80,000 - $100,000",
        "employer_id": 1
    },
    {
        "id": 342,
        "category": "Data Science",
        "title": "Data Scientist",
        "company": "Data Insights",
        "companyLogo": "/public/vite.svg",
        "location": "New York, NY",
        "type": "Full-time",
        "experience": "2-4 years",
        "description": "Join our data science team to analyze and interpret complex data sets...",
        "skills": [
            "Python",
            "Machine Learning",
            "SQL"
        ],
        "salary": "$90,000 - $120,000",
        "employer_id": 1
    },
    {
        "id": 343,
        "category": "Front-End",
        "title": "UI/UX Designer",
        "company": "WebDesign Co",
        "companyLogo": "/public/vite.svg",
        "location": "Remote",
        "type": "Full-time",
        "experience": "2-5 years",
        "description": "Design user interfaces for web applications...",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript"
        ],
        "salary": "$70,000 - $90,000",
        "employer_id": 1
    },
    {
        "id": 344,
        "category": "Back-End",
        "title": "Backend Developer",
        "company": "ServerLogic",
        "companyLogo": "/public/vite.svg",
        "location": "On-Site",
        "type": "Full-time",
        "experience": "4-6 years",
        "description": "Develop server-side logic and integrate databases...",
        "skills": [
            "Java",
            "Spring Boot",
            "MySQL"
        ],
        "salary": "$85,000 - $110,000",
        "employer_id": 1
    },
    {
        "id": 345,
        "category": "Machine Learning",
        "title": "Machine Learning Eng",
        "company": "ML Innovations",
        "companyLogo": "/public/vite.svg",
        "location": "Remote",
        "type": "Full-time",
        "experience": "3-5 years",
        "description": "Apply machine learning techniques to solve complex problems...",
        "skills": [
            "Python",
            "TensorFlow",
            "Scikit-Learn"
        ],
        "salary": "$95,000 - $120,000",
        "employer_id": 1
    },
    {
        "id": 346,
        "category": "Software Development",
        "title": "Full Stack Developer",
        "company": "TechCo",
        "companyLogo": "/public/vite.svg",
        "location": "San Francisco, CA",
        "type": "Full-time",
        "experience": "3-5 years",
        "description": "Exciting opportunity for a skilled Full Stack Developer...",
        "skills": [
            "React",
            "Node.js",
            "MongoDB"
        ],
        "salary": "$80,000 - $100,000",
        "employer_id": 1
    },
    {
        "id": 347,
        "category": "Data Science",
        "title": "Data Scientist",
        "company": "Data Insights",
        "companyLogo": "/public/vite.svg",
        "location": "New York, NY",
        "type": "Full-time",
        "experience": "2-4 years",
        "description": "Join our data science team to analyze and interpret complex data sets...",
        "skills": [
            "Python",
            "Machine Learning",
            "SQL"
        ],
        "salary": "$90,000 - $120,000",
        "employer_id": 1
    },
    {
        "id": 348,
        "category": "Front-End",
        "title": "UI/UX Designer",
        "company": "WebDesign Co",
        "companyLogo": "/images/company/logo.svg",
        "location": "Remote",
        "type": "Full-time",
        "experience": "2-5 years",
        "description": "Design user interfaces for web applications...",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript"
        ],
        "salary": "$70,000 - $90,000",
        "employer_id": 1
    },
    {
        "id": 349,
        "category": "Back-End",
        "title": "Backend Developer",
        "company": "ServerLogic",
        "companyLogo": "/images/company/logo.svg",
        "location": "On-Site",
        "type": "Full-time",
        "experience": "4-6 years",
        "description": "Develop server-side logic and integrate databases...",
        "skills": [
            "Java",
            "Spring Boot",
            "MySQL"
        ],
        "salary": "$85,000 - $110,000",
        "employer_id": 1
    },
    {
        "id": 350,
        "category": "Machine Learning",
        "title": "Machine Learning Eng",
        "company": "ML Innovations",
        "companyLogo": "/images/company/logo.svg",
        "location": "Remote",
        "type": "Full-time",
        "experience": "3-5 years",
        "description": "Apply machine learning techniques to solve complex problems...",
        "skills": [
            "Python",
            "TensorFlow",
            "Scikit-Learn"
        ],
        "salary": "$95,000 - $120,000",
        "employer_id": 1
    },
    {
        "id": 351,
        "category": "Software Development",
        "title": "Full Stack Developer",
        "company": "TechCo",
        "companyLogo": "/public/vite.svg",
        "location": "San Francisco, CA",
        "type": "Full-time",
        "experience": "3-5 years",
        "description": "Exciting opportunity for a skilled Full Stack Developer...",
        "skills": [
            "React",
            "Node.js",
            "MongoDB"
        ],
        "salary": "$80,000 - $100,000",
        "employer_id": 1
    },
    {
        "id": 352,
        "category": "Data Science",
        "title": "Data Scientist",
        "company": "Data Insights",
        "companyLogo": "/public/vite.svg",
        "location": "New York, NY",
        "type": "Full-time",
        "experience": "2-4 years",
        "description": "Join our data science team to analyze and interpret complex data sets...",
        "skills": [
            "Python",
            "Machine Learning",
            "SQL"
        ],
        "salary": "$90,000 - $120,000",
        "employer_id": 1
    },
    {
        "id": 353,
        "category": "Front-End",
        "title": "UI/UX Designer",
        "company": "WebDesign Co",
        "companyLogo": "/public/vite.svg",
        "location": "Remote",
        "type": "Full-time",
        "experience": "2-5 years",
        "description": "Design user interfaces for web applications...",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript"
        ],
        "salary": "$70,000 - $90,000",
        "employer_id": 1
    },
    {
        "id": 354,
        "category": "Back-End",
        "title": "Backend Developer",
        "company": "ServerLogic",
        "companyLogo": "/public/vite.svg",
        "location": "On-Site",
        "type": "Full-time",
        "experience": "4-6 years",
        "description": "Develop server-side logic and integrate databases...",
        "skills": [
            "Java",
            "Spring Boot",
            "MySQL"
        ],
        "salary": "$85,000 - $110,000",
        "employer_id": 1
    },
    {
        "id": 355,
        "category": "Machine Learning",
        "title": "Machine Learning Eng",
        "company": "ML Innovations",
        "companyLogo": "/public/vite.svg",
        "location": "Remote",
        "type": "Full-time",
        "experience": "3-5 years",
        "description": "Apply machine learning techniques to solve complex problems...",
        "skills": [
            "Python",
            "TensorFlow",
            "Scikit-Learn"
        ],
        "salary": "$95,000 - $120,000",
        "employer_id": 1
    },
    {
        "id": 356,
        "category": "Software Development",
        "title": "Full Stack Developer",
        "company": "TechCo",
        "companyLogo": "/public/vite.svg",
        "location": "San Francisco, CA",
        "type": "Full-time",
        "experience": "3-5 years",
        "description": "Exciting opportunity for a skilled Full Stack Developer...",
        "skills": [
            "React",
            "Node.js",
            "MongoDB"
        ],
        "salary": "$80,000 - $100,000",
        "employer_id": 1
    },
    {
        "id": 357,
        "category": "Data Science",
        "title": "Data Scientist",
        "company": "Data Insights",
        "companyLogo": "/public/vite.svg",
        "location": "New York, NY",
        "type": "Full-time",
        "experience": "2-4 years",
        "description": "Join our data science team to analyze and interpret complex data sets...",
        "skills": [
            "Python",
            "Machine Learning",
            "SQL"
        ],
        "salary": "$90,000 - $120,000",
        "employer_id": 1
    },
    {
        "id": 358,
        "category": "Front-End",
        "title": "UI/UX Designer",
        "company": "WebDesign Co",
        "companyLogo": "/images/company/logo.svg",
        "location": "Remote",
        "type": "Full-time",
        "experience": "2-5 years",
        "description": "Design user interfaces for web applications...",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript"
        ],
        "salary": "$70,000 - $90,000",
        "employer_id": 1
    },
    {
        "id": 359,
        "category": "Back-End",
        "title": "Backend Developer",
        "company": "ServerLogic",
        "companyLogo": "/images/company/logo.svg",
        "location": "On-Site",
        "type": "Full-time",
        "experience": "4-6 years",
        "description": "Develop server-side logic and integrate databases...",
        "skills": [
            "Java",
            "Spring Boot",
            "MySQL"
        ],
        "salary": "$85,000 - $110,000",
        "employer_id": 1
    },
    {
        "id": 360,
        "category": "Machine Learning",
        "title": "Machine Learning Eng",
        "company": "ML Innovations",
        "companyLogo": "/images/company/logo.svg",
        "location": "Remote",
        "type": "Full-time",
        "experience": "3-5 years",
        "description": "Apply machine learning techniques to solve complex problems...",
        "skills": [
            "Python",
            "TensorFlow",
            "Scikit-Learn"
        ],
        "salary": "$95,000 - $120,000",
        "employer_id": 1
    },
    {
        "id": 361,
        "category": "Software Development",
        "title": "Full Stack Developer",
        "company": "TechCo",
        "companyLogo": "/public/vite.svg",
        "location": "San Francisco, CA",
        "type": "Full-time",
        "experience": "3-5 years",
        "description": "Exciting opportunity for a skilled Full Stack Developer...",
        "skills": [
            "React",
            "Node.js",
            "MongoDB"
        ],
        "salary": "$80,000 - $100,000",
        "employer_id": 1
    },
    {
        "id": 362,
        "category": "Data Science",
        "title": "Data Scientist",
        "company": "Data Insights",
        "companyLogo": "/public/vite.svg",
        "location": "New York, NY",
        "type": "Full-time",
        "experience": "2-4 years",
        "description": "Join our data science team to analyze and interpret complex data sets...",
        "skills": [
            "Python",
            "Machine Learning",
            "SQL"
        ],
        "salary": "$90,000 - $120,000",
        "employer_id": 1
    },
    {
        "id": 363,
        "category": "Front-End",
        "title": "UI/UX Designer",
        "company": "WebDesign Co",
        "companyLogo": "/public/vite.svg",
        "location": "Remote",
        "type": "Full-time",
        "experience": "2-5 years",
        "description": "Design user interfaces for web applications...",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript"
        ],
        "salary": "$70,000 - $90,000",
        "employer_id": 1
    },
    {
        "id": 364,
        "category": "Back-End",
        "title": "Backend Developer",
        "company": "ServerLogic",
        "companyLogo": "/public/vite.svg",
        "location": "On-Site",
        "type": "Full-time",
        "experience": "4-6 years",
        "description": "Develop server-side logic and integrate databases...",
        "skills": [
            "Java",
            "Spring Boot",
            "MySQL"
        ],
        "salary": "$85,000 - $110,000",
        "employer_id": 1
    },
    {
        "id": 365,
        "category": "Machine Learning",
        "title": "Machine Learning Eng",
        "company": "ML Innovations",
        "companyLogo": "/public/vite.svg",
        "location": "Remote",
        "type": "Full-time",
        "experience": "3-5 years",
        "description": "Apply machine learning techniques to solve complex problems...",
        "skills": [
            "Python",
            "TensorFlow",
            "Scikit-Learn"
        ],
        "salary": "$95,000 - $120,000",
        "employer_id": 1
    },
    {
        "id": 366,
        "category": "Software Development",
        "title": "Full Stack Developer",
        "company": "TechCo",
        "companyLogo": "/public/vite.svg",
        "location": "San Francisco, CA",
        "type": "Full-time",
        "experience": "3-5 years",
        "description": "Exciting opportunity for a skilled Full Stack Developer...",
        "skills": [
            "React",
            "Node.js",
            "MongoDB"
        ],
        "salary": "$80,000 - $100,000",
        "employer_id": 1
    },
    {
        "id": 367,
        "category": "Data Science",
        "title": "Data Scientist",
        "company": "Data Insights",
        "companyLogo": "/public/vite.svg",
        "location": "New York, NY",
        "type": "Full-time",
        "experience": "2-4 years",
        "description": "Join our data science team to analyze and interpret complex data sets...",
        "skills": [
            "Python",
            "Machine Learning",
            "SQL"
        ],
        "salary": "$90,000 - $120,000",
        "employer_id": 1
    },
    {
        "id": 368,
        "category": "Front-End",
        "title": "UI/UX Designer",
        "company": "WebDesign Co",
        "companyLogo": "/images/company/logo.svg",
        "location": "Remote",
        "type": "Full-time",
        "experience": "2-5 years",
        "description": "Design user interfaces for web applications...",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript"
        ],
        "salary": "$70,000 - $90,000",
        "employer_id": 1
    },
    {
        "id": 369,
        "category": "Back-End",
        "title": "Backend Developer",
        "company": "ServerLogic",
        "companyLogo": "/images/company/logo.svg",
        "location": "On-Site",
        "type": "Full-time",
        "experience": "4-6 years",
        "description": "Develop server-side logic and integrate databases...",
        "skills": [
            "Java",
            "Spring Boot",
            "MySQL"
        ],
        "salary": "$85,000 - $110,000",
        "employer_id": 1
    },
    {
        "id": 370,
        "category": "Machine Learning",
        "title": "Machine Learning Eng",
        "company": "ML Innovations",
        "companyLogo": "/images/company/logo.svg",
        "location": "Remote",
        "type": "Full-time",
        "experience": "3-5 years",
        "description": "Apply machine learning techniques to solve complex problems...",
        "skills": [
            "Python",
            "TensorFlow",
            "Scikit-Learn"
        ],
        "salary": "$95,000 - $120,000",
        "employer_id": 1
    },
    {
        "id": 371,
        "category": "Software Development",
        "title": "Full Stack Developer",
        "company": "TechCo",
        "companyLogo": "/public/vite.svg",
        "location": "San Francisco, CA",
        "type": "Full-time",
        "experience": "3-5 years",
        "description": "Exciting opportunity for a skilled Full Stack Developer...",
        "skills": [
            "React",
            "Node.js",
            "MongoDB"
        ],
        "salary": "$80,000 - $100,000",
        "employer_id": 1
    },
    {
        "id": 372,
        "category": "Data Science",
        "title": "Data Scientist",
        "company": "Data Insights",
        "companyLogo": "/public/vite.svg",
        "location": "New York, NY",
        "type": "Full-time",
        "experience": "2-4 years",
        "description": "Join our data science team to analyze and interpret complex data sets...",
        "skills": [
            "Python",
            "Machine Learning",
            "SQL"
        ],
        "salary": "$90,000 - $120,000",
        "employer_id": 1
    },
    {
        "id": 373,
        "category": "Front-End",
        "title": "UI/UX Designer",
        "company": "WebDesign Co",
        "companyLogo": "/public/vite.svg",
        "location": "Remote",
        "type": "Full-time",
        "experience": "2-5 years",
        "description": "Design user interfaces for web applications...",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript"
        ],
        "salary": "$70,000 - $90,000",
        "employer_id": 1
    },
    {
        "id": 374,
        "category": "Back-End",
        "title": "Backend Developer",
        "company": "ServerLogic",
        "companyLogo": "/public/vite.svg",
        "location": "On-Site",
        "type": "Full-time",
        "experience": "4-6 years",
        "description": "Develop server-side logic and integrate databases...",
        "skills": [
            "Java",
            "Spring Boot",
            "MySQL"
        ],
        "salary": "$85,000 - $110,000",
        "employer_id": 1
    },
    {
        "id": 375,
        "category": "Machine Learning",
        "title": "Machine Learning Eng",
        "company": "ML Innovations",
        "companyLogo": "/public/vite.svg",
        "location": "Remote",
        "type": "Full-time",
        "experience": "3-5 years",
        "description": "Apply machine learning techniques to solve complex problems...",
        "skills": [
            "Python",
            "TensorFlow",
            "Scikit-Learn"
        ],
        "salary": "$95,000 - $120,000",
        "employer_id": 1
    },
    {
        "id": 376,
        "category": "Software Development",
        "title": "Full Stack Developer",
        "company": "TechCo",
        "companyLogo": "/public/vite.svg",
        "location": "San Francisco, CA",
        "type": "Full-time",
        "experience": "3-5 years",
        "description": "Exciting opportunity for a skilled Full Stack Developer...",
        "skills": [
            "React",
            "Node.js",
            "MongoDB"
        ],
        "salary": "$80,000 - $100,000",
        "employer_id": 1
    },
    {
        "id": 377,
        "category": "Data Science",
        "title": "Data Scientist",
        "company": "Data Insights",
        "companyLogo": "/public/vite.svg",
        "location": "New York, NY",
        "type": "Full-time",
        "experience": "2-4 years",
        "description": "Join our data science team to analyze and interpret complex data sets...",
        "skills": [
            "Python",
            "Machine Learning",
            "SQL"
        ],
        "salary": "$90,000 - $120,000",
        "employer_id": 1
    },
    {
        "id": 378,
        "category": "Front-End",
        "title": "UI/UX Designer",
        "company": "WebDesign Co",
        "companyLogo": "/images/company/logo.svg",
        "location": "Remote",
        "type": "Full-time",
        "experience": "2-5 years",
        "description": "Design user interfaces for web applications...",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript"
        ],
        "salary": "$70,000 - $90,000",
        "employer_id": 1
    },
    {
        "id": 379,
        "category": "Back-End",
        "title": "Backend Developer",
        "company": "ServerLogic",
        "companyLogo": "/images/company/logo.svg",
        "location": "On-Site",
        "type": "Full-time",
        "experience": "4-6 years",
        "description": "Develop server-side logic and integrate databases...",
        "skills": [
            "Java",
            "Spring Boot",
            "MySQL"
        ],
        "salary": "$85,000 - $110,000",
        "employer_id": 1
    },
    {
        "id": 380,
        "category": "Machine Learning",
        "title": "Machine Learning Eng",
        "company": "ML Innovations",
        "companyLogo": "/images/company/logo.svg",
        "location": "Remote",
        "type": "Full-time",
        "experience": "3-5 years",
        "description": "Apply machine learning techniques to solve complex problems...",
        "skills": [
            "Python",
            "TensorFlow",
            "Scikit-Learn"
        ],
        "salary": "$95,000 - $120,000",
        "employer_id": 1
    },
    {
        "id": 381,
        "category": "Software Development",
        "title": "Full Stack Developer",
        "company": "TechCo",
        "companyLogo": "/public/vite.svg",
        "location": "San Francisco, CA",
        "type": "Full-time",
        "experience": "3-5 years",
        "description": "Exciting opportunity for a skilled Full Stack Developer...",
        "skills": [
            "React",
            "Node.js",
            "MongoDB"
        ],
        "salary": "$80,000 - $100,000",
        "employer_id": 1
    },
    {
        "id": 382,
        "category": "Data Science",
        "title": "Data Scientist",
        "company": "Data Insights",
        "companyLogo": "/public/vite.svg",
        "location": "New York, NY",
        "type": "Full-time",
        "experience": "2-4 years",
        "description": "Join our data science team to analyze and interpret complex data sets...",
        "skills": [
            "Python",
            "Machine Learning",
            "SQL"
        ],
        "salary": "$90,000 - $120,000",
        "employer_id": 1
    },
    {
        "id": 383,
        "category": "Front-End",
        "title": "UI/UX Designer",
        "company": "WebDesign Co",
        "companyLogo": "/public/vite.svg",
        "location": "Remote",
        "type": "Full-time",
        "experience": "2-5 years",
        "description": "Design user interfaces for web applications...",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript"
        ],
        "salary": "$70,000 - $90,000",
        "employer_id": 1
    },
    {
        "id": 384,
        "category": "Back-End",
        "title": "Backend Developer",
        "company": "ServerLogic",
        "companyLogo": "/public/vite.svg",
        "location": "On-Site",
        "type": "Full-time",
        "experience": "4-6 years",
        "description": "Develop server-side logic and integrate databases...",
        "skills": [
            "Java",
            "Spring Boot",
            "MySQL"
        ],
        "salary": "$85,000 - $110,000",
        "employer_id": 1
    },
    {
        "id": 385,
        "category": "Machine Learning",
        "title": "Machine Learning Eng",
        "company": "ML Innovations",
        "companyLogo": "/public/vite.svg",
        "location": "Remote",
        "type": "Full-time",
        "experience": "3-5 years",
        "description": "Apply machine learning techniques to solve complex problems...",
        "skills": [
            "Python",
            "TensorFlow",
            "Scikit-Learn"
        ],
        "salary": "$95,000 - $120,000",
        "employer_id": 1
    },
    {
        "id": 386,
        "category": "Software Development",
        "title": "Full Stack Developer",
        "company": "TechCo",
        "companyLogo": "/public/vite.svg",
        "location": "San Francisco, CA",
        "type": "Full-time",
        "experience": "3-5 years",
        "description": "Exciting opportunity for a skilled Full Stack Developer...",
        "skills": [
            "React",
            "Node.js",
            "MongoDB"
        ],
        "salary": "$80,000 - $100,000",
        "employer_id": 1
    },
    {
        "id": 387,
        "category": "Data Science",
        "title": "Data Scientist",
        "company": "Data Insights",
        "companyLogo": "/public/vite.svg",
        "location": "New York, NY",
        "type": "Full-time",
        "experience": "2-4 years",
        "description": "Join our data science team to analyze and interpret complex data sets...",
        "skills": [
            "Python",
            "Machine Learning",
            "SQL"
        ],
        "salary": "$90,000 - $120,000",
        "employer_id": 1
    },
    {
        "id": 388,
        "category": "Front-End",
        "title": "UI/UX Designer",
        "company": "WebDesign Co",
        "companyLogo": "/images/company/logo.svg",
        "location": "Remote",
        "type": "Full-time",
        "experience": "2-5 years",
        "description": "Design user interfaces for web applications...",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript"
        ],
        "salary": "$70,000 - $90,000",
        "employer_id": 1
    },
    {
        "id": 389,
        "category": "Back-End",
        "title": "Backend Developer",
        "company": "ServerLogic",
        "companyLogo": "/images/company/logo.svg",
        "location": "On-Site",
        "type": "Full-time",
        "experience": "4-6 years",
        "description": "Develop server-side logic and integrate databases...",
        "skills": [
            "Java",
            "Spring Boot",
            "MySQL"
        ],
        "salary": "$85,000 - $110,000",
        "employer_id": 1
    },
    {
        "id": 390,
        "category": "Machine Learning",
        "title": "Machine Learning Eng",
        "company": "ML Innovations",
        "companyLogo": "/images/company/logo.svg",
        "location": "Remote",
        "type": "Full-time",
        "experience": "3-5 years",
        "description": "Apply machine learning techniques to solve complex problems...",
        "skills": [
            "Python",
            "TensorFlow",
            "Scikit-Learn"
        ],
        "salary": "$95,000 - $120,000",
        "employer_id": 1
    },
    {
        "id": 391,
        "category": "Software Development",
        "title": "Full Stack Developer",
        "company": "TechCo",
        "companyLogo": "/public/vite.svg",
        "location": "San Francisco, CA",
        "type": "Full-time",
        "experience": "3-5 years",
        "description": "Exciting opportunity for a skilled Full Stack Developer...",
        "skills": [
            "React",
            "Node.js",
            "MongoDB"
        ],
        "salary": "$80,000 - $100,000",
        "employer_id": 1
    },
    {
        "id": 392,
        "category": "Data Science",
        "title": "Data Scientist",
        "company": "Data Insights",
        "companyLogo": "/public/vite.svg",
        "location": "New York, NY",
        "type": "Full-time",
        "experience": "2-4 years",
        "description": "Join our data science team to analyze and interpret complex data sets...",
        "skills": [
            "Python",
            "Machine Learning",
            "SQL"
        ],
        "salary": "$90,000 - $120,000",
        "employer_id": 1
    },
    {
        "id": 393,
        "category": "Front-End",
        "title": "UI/UX Designer",
        "company": "WebDesign Co",
        "companyLogo": "/public/vite.svg",
        "location": "Remote",
        "type": "Full-time",
        "experience": "2-5 years",
        "description": "Design user interfaces for web applications...",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript"
        ],
        "salary": "$70,000 - $90,000",
        "employer_id": 1
    },
    {
        "id": 394,
        "category": "Back-End",
        "title": "Backend Developer",
        "company": "ServerLogic",
        "companyLogo": "/public/vite.svg",
        "location": "On-Site",
        "type": "Full-time",
        "experience": "4-6 years",
        "description": "Develop server-side logic and integrate databases...",
        "skills": [
            "Java",
            "Spring Boot",
            "MySQL"
        ],
        "salary": "$85,000 - $110,000",
        "employer_id": 1
    },
    {
        "id": 395,
        "category": "Machine Learning",
        "title": "Machine Learning Eng",
        "company": "ML Innovations",
        "companyLogo": "/public/vite.svg",
        "location": "Remote",
        "type": "Full-time",
        "experience": "3-5 years",
        "description": "Apply machine learning techniques to solve complex problems...",
        "skills": [
            "Python",
            "TensorFlow",
            "Scikit-Learn"
        ],
        "salary": "$95,000 - $120,000",
        "employer_id": 1
    },
    {
        "id": 396,
        "category": "Software Development",
        "title": "Full Stack Developer",
        "company": "TechCo",
        "companyLogo": "/public/vite.svg",
        "location": "San Francisco, CA",
        "type": "Full-time",
        "experience": "3-5 years",
        "description": "Exciting opportunity for a skilled Full Stack Developer...",
        "skills": [
            "React",
            "Node.js",
            "MongoDB"
        ],
        "salary": "$80,000 - $100,000",
        "employer_id": 1
    },
    {
        "id": 397,
        "category": "Data Science",
        "title": "Data Scientist",
        "company": "Data Insights",
        "companyLogo": "/public/vite.svg",
        "location": "New York, NY",
        "type": "Full-time",
        "experience": "2-4 years",
        "description": "Join our data science team to analyze and interpret complex data sets...",
        "skills": [
            "Python",
            "Machine Learning",
            "SQL"
        ],
        "salary": "$90,000 - $120,000",
        "employer_id": 1
    },
    {
        "id": 398,
        "category": "Front-End",
        "title": "UI/UX Designer",
        "company": "WebDesign Co",
        "companyLogo": "/images/company/logo.svg",
        "location": "Remote",
        "type": "Full-time",
        "experience": "2-5 years",
        "description": "Design user interfaces for web applications...",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript"
        ],
        "salary": "$70,000 - $90,000",
        "employer_id": 1
    },
    {
        "id": 399,
        "category": "Back-End",
        "title": "Backend Developer",
        "company": "ServerLogic",
        "companyLogo": "/images/company/logo.svg",
        "location": "On-Site",
        "type": "Full-time",
        "experience": "4-6 years",
        "description": "Develop server-side logic and integrate databases...",
        "skills": [
            "Java",
            "Spring Boot",
            "MySQL"
        ],
        "salary": "$85,000 - $110,000",
        "employer_id": 1
    },
    {
        "id": 400,
        "category": "Machine Learning",
        "title": "Machine Learning Eng",
        "company": "ML Innovations",
        "companyLogo": "/images/company/logo.svg",
        "location": "Remote",
        "type": "Full-time",
        "experience": "3-5 years",
        "description": "Apply machine learning techniques to solve complex problems...",
        "skills": [
            "Python",
            "TensorFlow",
            "Scikit-Learn"
        ],
        "salary": "$95,000 - $120,000",
        "employer_id": 1
    },
    {
        "id": 401,
        "category": "Software Development",
        "title": "Full Stack Developer",
        "company": "TechCo",
        "companyLogo": "/public/vite.svg",
        "location": "San Francisco, CA",
        "type": "Full-time",
        "experience": "3-5 years",
        "description": "Exciting opportunity for a skilled Full Stack Developer...",
        "skills": [
            "React",
            "Node.js",
            "MongoDB"
        ],
        "salary": "$80,000 - $100,000",
        "employer_id": 1
    },
    {
        "id": 402,
        "category": "Data Science",
        "title": "Data Scientist",
        "company": "Data Insights",
        "companyLogo": "/public/vite.svg",
        "location": "New York, NY",
        "type": "Full-time",
        "experience": "2-4 years",
        "description": "Join our data science team to analyze and interpret complex data sets...",
        "skills": [
            "Python",
            "Machine Learning",
            "SQL"
        ],
        "salary": "$90,000 - $120,000",
        "employer_id": 1
    },
    {
        "id": 403,
        "category": "Front-End",
        "title": "UI/UX Designer",
        "company": "WebDesign Co",
        "companyLogo": "/public/vite.svg",
        "location": "Remote",
        "type": "Full-time",
        "experience": "2-5 years",
        "description": "Design user interfaces for web applications...",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript"
        ],
        "salary": "$70,000 - $90,000",
        "employer_id": 1
    },
    {
        "id": 404,
        "category": "Back-End",
        "title": "Backend Developer",
        "company": "ServerLogic",
        "companyLogo": "/public/vite.svg",
        "location": "On-Site",
        "type": "Full-time",
        "experience": "4-6 years",
        "description": "Develop server-side logic and integrate databases...",
        "skills": [
            "Java",
            "Spring Boot",
            "MySQL"
        ],
        "salary": "$85,000 - $110,000",
        "employer_id": 1
    },
    {
        "id": 405,
        "category": "Machine Learning",
        "title": "Machine Learning Eng",
        "company": "ML Innovations",
        "companyLogo": "/public/vite.svg",
        "location": "Remote",
        "type": "Full-time",
        "experience": "3-5 years",
        "description": "Apply machine learning techniques to solve complex problems...",
        "skills": [
            "Python",
            "TensorFlow",
            "Scikit-Learn"
        ],
        "salary": "$95,000 - $120,000",
        "employer_id": 1
    },
    {
        "id": 406,
        "category": "Software Development",
        "title": "Full Stack Developer",
        "company": "TechCo",
        "companyLogo": "/public/vite.svg",
        "location": "San Francisco, CA",
        "type": "Full-time",
        "experience": "3-5 years",
        "description": "Exciting opportunity for a skilled Full Stack Developer...",
        "skills": [
            "React",
            "Node.js",
            "MongoDB"
        ],
        "salary": "$80,000 - $100,000",
        "employer_id": 1
    },
    {
        "id": 407,
        "category": "Data Science",
        "title": "Data Scientist",
        "company": "Data Insights",
        "companyLogo": "/public/vite.svg",
        "location": "New York, NY",
        "type": "Full-time",
        "experience": "2-4 years",
        "description": "Join our data science team to analyze and interpret complex data sets...",
        "skills": [
            "Python",
            "Machine Learning",
            "SQL"
        ],
        "salary": "$90,000 - $120,000",
        "employer_id": 1
    },
    {
        "id": 408,
        "category": "Front-End",
        "title": "UI/UX Designer",
        "company": "WebDesign Co",
        "companyLogo": "/images/company/logo.svg",
        "location": "Remote",
        "type": "Full-time",
        "experience": "2-5 years",
        "description": "Design user interfaces for web applications...",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript"
        ],
        "salary": "$70,000 - $90,000",
        "employer_id": 1
    },
    {
        "id": 409,
        "category": "Back-End",
        "title": "Backend Developer",
        "company": "ServerLogic",
        "companyLogo": "/images/company/logo.svg",
        "location": "On-Site",
        "type": "Full-time",
        "experience": "4-6 years",
        "description": "Develop server-side logic and integrate databases...",
        "skills": [
            "Java",
            "Spring Boot",
            "MySQL"
        ],
        "salary": "$85,000 - $110,000",
        "employer_id": 1
    },
    {
        "id": 410,
        "category": "Machine Learning",
        "title": "Machine Learning Eng",
        "company": "ML Innovations",
        "companyLogo": "/images/company/logo.svg",
        "location": "Remote",
        "type": "Full-time",
        "experience": "3-5 years",
        "description": "Apply machine learning techniques to solve complex problems...",
        "skills": [
            "Python",
            "TensorFlow",
            "Scikit-Learn"
        ],
        "salary": "$95,000 - $120,000",
        "employer_id": 1
    },
    {
        "id": 411,
        "category": "Software Development",
        "title": "Full Stack Developer",
        "company": "TechCo",
        "companyLogo": "/public/vite.svg",
        "location": "San Francisco, CA",
        "type": "Full-time",
        "experience": "3-5 years",
        "description": "Exciting opportunity for a skilled Full Stack Developer...",
        "skills": [
            "React",
            "Node.js",
            "MongoDB"
        ],
        "salary": "$80,000 - $100,000",
        "employer_id": 1
    },
    {
        "id": 412,
        "category": "Data Science",
        "title": "Data Scientist",
        "company": "Data Insights",
        "companyLogo": "/public/vite.svg",
        "location": "New York, NY",
        "type": "Full-time",
        "experience": "2-4 years",
        "description": "Join our data science team to analyze and interpret complex data sets...",
        "skills": [
            "Python",
            "Machine Learning",
            "SQL"
        ],
        "salary": "$90,000 - $120,000",
        "employer_id": 1
    },
    {
        "id": 413,
        "category": "Front-End",
        "title": "UI/UX Designer",
        "company": "WebDesign Co",
        "companyLogo": "/public/vite.svg",
        "location": "Remote",
        "type": "Full-time",
        "experience": "2-5 years",
        "description": "Design user interfaces for web applications...",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript"
        ],
        "salary": "$70,000 - $90,000",
        "employer_id": 1
    },
    {
        "id": 414,
        "category": "Back-End",
        "title": "Backend Developer",
        "company": "ServerLogic",
        "companyLogo": "/public/vite.svg",
        "location": "On-Site",
        "type": "Full-time",
        "experience": "4-6 years",
        "description": "Develop server-side logic and integrate databases...",
        "skills": [
            "Java",
            "Spring Boot",
            "MySQL"
        ],
        "salary": "$85,000 - $110,000",
        "employer_id": 1
    },
    {
        "id": 415,
        "category": "Machine Learning",
        "title": "Machine Learning Eng",
        "company": "ML Innovations",
        "companyLogo": "/public/vite.svg",
        "location": "Remote",
        "type": "Full-time",
        "experience": "3-5 years",
        "description": "Apply machine learning techniques to solve complex problems...",
        "skills": [
            "Python",
            "TensorFlow",
            "Scikit-Learn"
        ],
        "salary": "$95,000 - $120,000",
        "employer_id": 1
    },
    {
        "id": 416,
        "category": "Software Development",
        "title": "Full Stack Developer",
        "company": "TechCo",
        "companyLogo": "/public/vite.svg",
        "location": "San Francisco, CA",
        "type": "Full-time",
        "experience": "3-5 years",
        "description": "Exciting opportunity for a skilled Full Stack Developer...",
        "skills": [
            "React",
            "Node.js",
            "MongoDB"
        ],
        "salary": "$80,000 - $100,000",
        "employer_id": 1
    },
    {
        "id": 417,
        "category": "Data Science",
        "title": "Data Scientist",
        "company": "Data Insights",
        "companyLogo": "/public/vite.svg",
        "location": "New York, NY",
        "type": "Full-time",
        "experience": "2-4 years",
        "description": "Join our data science team to analyze and interpret complex data sets...",
        "skills": [
            "Python",
            "Machine Learning",
            "SQL"
        ],
        "salary": "$90,000 - $120,000",
        "employer_id": 1
    },
    {
        "id": 418,
        "category": "Front-End",
        "title": "UI/UX Designer",
        "company": "WebDesign Co",
        "companyLogo": "/images/company/logo.svg",
        "location": "Remote",
        "type": "Full-time",
        "experience": "2-5 years",
        "description": "Design user interfaces for web applications...",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript"
        ],
        "salary": "$70,000 - $90,000",
        "employer_id": 1
    },
    {
        "id": 419,
        "category": "Back-End",
        "title": "Backend Developer",
        "company": "ServerLogic",
        "companyLogo": "/images/company/logo.svg",
        "location": "On-Site",
        "type": "Full-time",
        "experience": "4-6 years",
        "description": "Develop server-side logic and integrate databases...",
        "skills": [
            "Java",
            "Spring Boot",
            "MySQL"
        ],
        "salary": "$85,000 - $110,000",
        "employer_id": 1
    },
    {
        "id": 420,
        "category": "Machine Learning",
        "title": "Machine Learning Eng",
        "company": "ML Innovations",
        "companyLogo": "/images/company/logo.svg",
        "location": "Remote",
        "type": "Full-time",
        "experience": "3-5 years",
        "description": "Apply machine learning techniques to solve complex problems...",
        "skills": [
            "Python",
            "TensorFlow",
            "Scikit-Learn"
        ],
        "salary": "$95,000 - $120,000",
        "employer_id": 1
    },
    {
        "id": 421,
        "category": "Software Development",
        "title": "Full Stack Developer",
        "company": "TechCo",
        "companyLogo": "/public/vite.svg",
        "location": "San Francisco, CA",
        "type": "Full-time",
        "experience": "3-5 years",
        "description": "Exciting opportunity for a skilled Full Stack Developer...",
        "skills": [
            "React",
            "Node.js",
            "MongoDB"
        ],
        "salary": "$80,000 - $100,000",
        "employer_id": 1
    },
    {
        "id": 422,
        "category": "Data Science",
        "title": "Data Scientist",
        "company": "Data Insights",
        "companyLogo": "/public/vite.svg",
        "location": "New York, NY",
        "type": "Full-time",
        "experience": "2-4 years",
        "description": "Join our data science team to analyze and interpret complex data sets...",
        "skills": [
            "Python",
            "Machine Learning",
            "SQL"
        ],
        "salary": "$90,000 - $120,000",
        "employer_id": 1
    },
    {
        "id": 423,
        "category": "Front-End",
        "title": "UI/UX Designer",
        "company": "WebDesign Co",
        "companyLogo": "/public/vite.svg",
        "location": "Remote",
        "type": "Full-time",
        "experience": "2-5 years",
        "description": "Design user interfaces for web applications...",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript"
        ],
        "salary": "$70,000 - $90,000",
        "employer_id": 1
    },
    {
        "id": 424,
        "category": "Back-End",
        "title": "Backend Developer",
        "company": "ServerLogic",
        "companyLogo": "/public/vite.svg",
        "location": "On-Site",
        "type": "Full-time",
        "experience": "4-6 years",
        "description": "Develop server-side logic and integrate databases...",
        "skills": [
            "Java",
            "Spring Boot",
            "MySQL"
        ],
        "salary": "$85,000 - $110,000",
        "employer_id": 1
    },
    {
        "id": 425,
        "category": "Machine Learning",
        "title": "Machine Learning Eng",
        "company": "ML Innovations",
        "companyLogo": "/public/vite.svg",
        "location": "Remote",
        "type": "Full-time",
        "experience": "3-5 years",
        "description": "Apply machine learning techniques to solve complex problems...",
        "skills": [
            "Python",
            "TensorFlow",
            "Scikit-Learn"
        ],
        "salary": "$95,000 - $120,000",
        "employer_id": 1
    },
    {
        "id": 426,
        "category": "Software Development",
        "title": "Full Stack Developer",
        "company": "TechCo",
        "companyLogo": "/public/vite.svg",
        "location": "San Francisco, CA",
        "type": "Full-time",
        "experience": "3-5 years",
        "description": "Exciting opportunity for a skilled Full Stack Developer...",
        "skills": [
            "React",
            "Node.js",
            "MongoDB"
        ],
        "salary": "$80,000 - $100,000",
        "employer_id": 1
    },
    {
        "id": 427,
        "category": "Data Science",
        "title": "Data Scientist",
        "company": "Data Insights",
        "companyLogo": "/public/vite.svg",
        "location": "New York, NY",
        "type": "Full-time",
        "experience": "2-4 years",
        "description": "Join our data science team to analyze and interpret complex data sets...",
        "skills": [
            "Python",
            "Machine Learning",
            "SQL"
        ],
        "salary": "$90,000 - $120,000",
        "employer_id": 1
    },
    {
        "id": 428,
        "category": "Front-End",
        "title": "UI/UX Designer",
        "company": "WebDesign Co",
        "companyLogo": "/images/company/logo.svg",
        "location": "Remote",
        "type": "Full-time",
        "experience": "2-5 years",
        "description": "Design user interfaces for web applications...",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript"
        ],
        "salary": "$70,000 - $90,000",
        "employer_id": 1
    },
    {
        "id": 429,
        "category": "Back-End",
        "title": "Backend Developer",
        "company": "ServerLogic",
        "companyLogo": "/images/company/logo.svg",
        "location": "On-Site",
        "type": "Full-time",
        "experience": "4-6 years",
        "description": "Develop server-side logic and integrate databases...",
        "skills": [
            "Java",
            "Spring Boot",
            "MySQL"
        ],
        "salary": "$85,000 - $110,000",
        "employer_id": 1
    },
    {
        "id": 430,
        "category": "Machine Learning",
        "title": "Machine Learning Eng",
        "company": "ML Innovations",
        "companyLogo": "/images/company/logo.svg",
        "location": "Remote",
        "type": "Full-time",
        "experience": "3-5 years",
        "description": "Apply machine learning techniques to solve complex problems...",
        "skills": [
            "Python",
            "TensorFlow",
            "Scikit-Learn"
        ],
        "salary": "$95,000 - $120,000",
        "employer_id": 1
    },
    {
        "id": 431,
        "category": "Software Development",
        "title": "Full Stack Developer",
        "company": "TechCo",
        "companyLogo": "/public/vite.svg",
        "location": "San Francisco, CA",
        "type": "Full-time",
        "experience": "3-5 years",
        "description": "Exciting opportunity for a skilled Full Stack Developer...",
        "skills": [
            "React",
            "Node.js",
            "MongoDB"
        ],
        "salary": "$80,000 - $100,000",
        "employer_id": 1
    },
    {
        "id": 432,
        "category": "Data Science",
        "title": "Data Scientist",
        "company": "Data Insights",
        "companyLogo": "/public/vite.svg",
        "location": "New York, NY",
        "type": "Full-time",
        "experience": "2-4 years",
        "description": "Join our data science team to analyze and interpret complex data sets...",
        "skills": [
            "Python",
            "Machine Learning",
            "SQL"
        ],
        "salary": "$90,000 - $120,000",
        "employer_id": 1
    },
    {
        "id": 433,
        "category": "Front-End",
        "title": "UI/UX Designer",
        "company": "WebDesign Co",
        "companyLogo": "/public/vite.svg",
        "location": "Remote",
        "type": "Full-time",
        "experience": "2-5 years",
        "description": "Design user interfaces for web applications...",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript"
        ],
        "salary": "$70,000 - $90,000",
        "employer_id": 1
    },
    {
        "id": 434,
        "category": "Back-End",
        "title": "Backend Developer",
        "company": "ServerLogic",
        "companyLogo": "/public/vite.svg",
        "location": "On-Site",
        "type": "Full-time",
        "experience": "4-6 years",
        "description": "Develop server-side logic and integrate databases...",
        "skills": [
            "Java",
            "Spring Boot",
            "MySQL"
        ],
        "salary": "$85,000 - $110,000",
        "employer_id": 1
    },
    {
        "id": 435,
        "category": "Machine Learning",
        "title": "Machine Learning Eng",
        "company": "ML Innovations",
        "companyLogo": "/public/vite.svg",
        "location": "Remote",
        "type": "Full-time",
        "experience": "3-5 years",
        "description": "Apply machine learning techniques to solve complex problems...",
        "skills": [
            "Python",
            "TensorFlow",
            "Scikit-Learn"
        ],
        "salary": "$95,000 - $120,000",
        "employer_id": 1
    },
    {
        "id": 436,
        "category": "Software Development",
        "title": "Full Stack Developer",
        "company": "TechCo",
        "companyLogo": "/public/vite.svg",
        "location": "San Francisco, CA",
        "type": "Full-time",
        "experience": "3-5 years",
        "description": "Exciting opportunity for a skilled Full Stack Developer...",
        "skills": [
            "React",
            "Node.js",
            "MongoDB"
        ],
        "salary": "$80,000 - $100,000",
        "employer_id": 1
    },
    {
        "id": 437,
        "category": "Data Science",
        "title": "Data Scientist",
        "company": "Data Insights",
        "companyLogo": "/public/vite.svg",
        "location": "New York, NY",
        "type": "Full-time",
        "experience": "2-4 years",
        "description": "Join our data science team to analyze and interpret complex data sets...",
        "skills": [
            "Python",
            "Machine Learning",
            "SQL"
        ],
        "salary": "$90,000 - $120,000",
        "employer_id": 1
    },
    {
        "id": 438,
        "category": "Front-End",
        "title": "UI/UX Designer",
        "company": "WebDesign Co",
        "companyLogo": "/images/company/logo.svg",
        "location": "Remote",
        "type": "Full-time",
        "experience": "2-5 years",
        "description": "Design user interfaces for web applications...",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript"
        ],
        "salary": "$70,000 - $90,000",
        "employer_id": 1
    },
    {
        "id": 439,
        "category": "Back-End",
        "title": "Backend Developer",
        "company": "ServerLogic",
        "companyLogo": "/images/company/logo.svg",
        "location": "On-Site",
        "type": "Full-time",
        "experience": "4-6 years",
        "description": "Develop server-side logic and integrate databases...",
        "skills": [
            "Java",
            "Spring Boot",
            "MySQL"
        ],
        "salary": "$85,000 - $110,000",
        "employer_id": 1
    },
    {
        "id": 440,
        "category": "Machine Learning",
        "title": "Machine Learning Eng",
        "company": "ML Innovations",
        "companyLogo": "/images/company/logo.svg",
        "location": "Remote",
        "type": "Full-time",
        "experience": "3-5 years",
        "description": "Apply machine learning techniques to solve complex problems...",
        "skills": [
            "Python",
            "TensorFlow",
            "Scikit-Learn"
        ],
        "salary": "$95,000 - $120,000",
        "employer_id": 1
    },
    {
        "id": 441,
        "category": "Software Development",
        "title": "Full Stack Developer",
        "company": "TechCo",
        "companyLogo": "/public/vite.svg",
        "location": "San Francisco, CA",
        "type": "Full-time",
        "experience": "3-5 years",
        "description": "Exciting opportunity for a skilled Full Stack Developer...",
        "skills": [
            "React",
            "Node.js",
            "MongoDB"
        ],
        "salary": "$80,000 - $100,000",
        "employer_id": 1
    },
    {
        "id": 442,
        "category": "Data Science",
        "title": "Data Scientist",
        "company": "Data Insights",
        "companyLogo": "/public/vite.svg",
        "location": "New York, NY",
        "type": "Full-time",
        "experience": "2-4 years",
        "description": "Join our data science team to analyze and interpret complex data sets...",
        "skills": [
            "Python",
            "Machine Learning",
            "SQL"
        ],
        "salary": "$90,000 - $120,000",
        "employer_id": 1
    },
    {
        "id": 443,
        "category": "Front-End",
        "title": "UI/UX Designer",
        "company": "WebDesign Co",
        "companyLogo": "/public/vite.svg",
        "location": "Remote",
        "type": "Full-time",
        "experience": "2-5 years",
        "description": "Design user interfaces for web applications...",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript"
        ],
        "salary": "$70,000 - $90,000",
        "employer_id": 1
    },
    {
        "id": 444,
        "category": "Back-End",
        "title": "Backend Developer",
        "company": "ServerLogic",
        "companyLogo": "/public/vite.svg",
        "location": "On-Site",
        "type": "Full-time",
        "experience": "4-6 years",
        "description": "Develop server-side logic and integrate databases...",
        "skills": [
            "Java",
            "Spring Boot",
            "MySQL"
        ],
        "salary": "$85,000 - $110,000",
        "employer_id": 1
    },
    {
        "id": 445,
        "category": "Machine Learning",
        "title": "Machine Learning Eng",
        "company": "ML Innovations",
        "companyLogo": "/public/vite.svg",
        "location": "Remote",
        "type": "Full-time",
        "experience": "3-5 years",
        "description": "Apply machine learning techniques to solve complex problems...",
        "skills": [
            "Python",
            "TensorFlow",
            "Scikit-Learn"
        ],
        "salary": "$95,000 - $120,000",
        "employer_id": 1
    },
    {
        "id": 446,
        "category": "Software Development",
        "title": "Full Stack Developer",
        "company": "TechCo",
        "companyLogo": "/public/vite.svg",
        "location": "San Francisco, CA",
        "type": "Full-time",
        "experience": "3-5 years",
        "description": "Exciting opportunity for a skilled Full Stack Developer...",
        "skills": [
            "React",
            "Node.js",
            "MongoDB"
        ],
        "salary": "$80,000 - $100,000",
        "employer_id": 1
    },
    {
        "id": 447,
        "category": "Data Science",
        "title": "Data Scientist",
        "company": "Data Insights",
        "companyLogo": "/public/vite.svg",
        "location": "New York, NY",
        "type": "Full-time",
        "experience": "2-4 years",
        "description": "Join our data science team to analyze and interpret complex data sets...",
        "skills": [
            "Python",
            "Machine Learning",
            "SQL"
        ],
        "salary": "$90,000 - $120,000",
        "employer_id": 1
    },
    {
        "id": 448,
        "category": "Front-End",
        "title": "UI/UX Designer",
        "company": "WebDesign Co",
        "companyLogo": "/images/company/logo.svg",
        "location": "Remote",
        "type": "Full-time",
        "experience": "2-5 years",
        "description": "Design user interfaces for web applications...",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript"
        ],
        "salary": "$70,000 - $90,000",
        "employer_id": 1
    },
    {
        "id": 449,
        "category": "Back-End",
        "title": "Backend Developer",
        "company": "ServerLogic",
        "companyLogo": "/images/company/logo.svg",
        "location": "On-Site",
        "type": "Full-time",
        "experience": "4-6 years",
        "description": "Develop server-side logic and integrate databases...",
        "skills": [
            "Java",
            "Spring Boot",
            "MySQL"
        ],
        "salary": "$85,000 - $110,000",
        "employer_id": 1
    },
    {
        "id": 450,
        "category": "Machine Learning",
        "title": "Machine Learning Eng",
        "company": "ML Innovations",
        "companyLogo": "/images/company/logo.svg",
        "location": "Remote",
        "type": "Full-time",
        "experience": "3-5 years",
        "description": "Apply machine learning techniques to solve complex problems...",
        "skills": [
            "Python",
            "TensorFlow",
            "Scikit-Learn"
        ],
        "salary": "$95,000 - $120,000",
        "employer_id": 1
    },
    {
        "id": 451,
        "category": "Software Development",
        "title": "Full Stack Developer",
        "company": "TechCo",
        "companyLogo": "/public/vite.svg",
        "location": "San Francisco, CA",
        "type": "Full-time",
        "experience": "3-5 years",
        "description": "Exciting opportunity for a skilled Full Stack Developer...",
        "skills": [
            "React",
            "Node.js",
            "MongoDB"
        ],
        "salary": "$80,000 - $100,000",
        "employer_id": 1
    },
    {
        "id": 452,
        "category": "Data Science",
        "title": "Data Scientist",
        "company": "Data Insights",
        "companyLogo": "/public/vite.svg",
        "location": "New York, NY",
        "type": "Full-time",
        "experience": "2-4 years",
        "description": "Join our data science team to analyze and interpret complex data sets...",
        "skills": [
            "Python",
            "Machine Learning",
            "SQL"
        ],
        "salary": "$90,000 - $120,000",
        "employer_id": 1
    },
    {
        "id": 453,
        "category": "Front-End",
        "title": "UI/UX Designer",
        "company": "WebDesign Co",
        "companyLogo": "/public/vite.svg",
        "location": "Remote",
        "type": "Full-time",
        "experience": "2-5 years",
        "description": "Design user interfaces for web applications...",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript"
        ],
        "salary": "$70,000 - $90,000",
        "employer_id": 1
    },
    {
        "id": 454,
        "category": "Back-End",
        "title": "Backend Developer",
        "company": "ServerLogic",
        "companyLogo": "/public/vite.svg",
        "location": "On-Site",
        "type": "Full-time",
        "experience": "4-6 years",
        "description": "Develop server-side logic and integrate databases...",
        "skills": [
            "Java",
            "Spring Boot",
            "MySQL"
        ],
        "salary": "$85,000 - $110,000",
        "employer_id": 1
    },
    {
        "id": 455,
        "category": "Machine Learning",
        "title": "Machine Learning Eng",
        "company": "ML Innovations",
        "companyLogo": "/public/vite.svg",
        "location": "Remote",
        "type": "Full-time",
        "experience": "3-5 years",
        "description": "Apply machine learning techniques to solve complex problems...",
        "skills": [
            "Python",
            "TensorFlow",
            "Scikit-Learn"
        ],
        "salary": "$95,000 - $120,000",
        "employer_id": 1
    },
    {
        "id": 456,
        "category": "Software Development",
        "title": "Full Stack Developer",
        "company": "TechCo",
        "companyLogo": "/public/vite.svg",
        "location": "San Francisco, CA",
        "type": "Full-time",
        "experience": "3-5 years",
        "description": "Exciting opportunity for a skilled Full Stack Developer...",
        "skills": [
            "React",
            "Node.js",
            "MongoDB"
        ],
        "salary": "$80,000 - $100,000",
        "employer_id": 1
    },
    {
        "id": 457,
        "category": "Data Science",
        "title": "Data Scientist",
        "company": "Data Insights",
        "companyLogo": "/public/vite.svg",
        "location": "New York, NY",
        "type": "Full-time",
        "experience": "2-4 years",
        "description": "Join our data science team to analyze and interpret complex data sets...",
        "skills": [
            "Python",
            "Machine Learning",
            "SQL"
        ],
        "salary": "$90,000 - $120,000",
        "employer_id": 1
    },
    {
        "id": 458,
        "category": "Front-End",
        "title": "UI/UX Designer",
        "company": "WebDesign Co",
        "companyLogo": "/images/company/logo.svg",
        "location": "Remote",
        "type": "Full-time",
        "experience": "2-5 years",
        "description": "Design user interfaces for web applications...",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript"
        ],
        "salary": "$70,000 - $90,000",
        "employer_id": 1
    },
    {
        "id": 459,
        "category": "Back-End",
        "title": "Backend Developer",
        "company": "ServerLogic",
        "companyLogo": "/images/company/logo.svg",
        "location": "On-Site",
        "type": "Full-time",
        "experience": "4-6 years",
        "description": "Develop server-side logic and integrate databases...",
        "skills": [
            "Java",
            "Spring Boot",
            "MySQL"
        ],
        "salary": "$85,000 - $110,000",
        "employer_id": 1
    },
    {
        "id": 460,
        "category": "Machine Learning",
        "title": "Machine Learning Eng",
        "company": "ML Innovations",
        "companyLogo": "/images/company/logo.svg",
        "location": "Remote",
        "type": "Full-time",
        "experience": "3-5 years",
        "description": "Apply machine learning techniques to solve complex problems...",
        "skills": [
            "Python",
            "TensorFlow",
            "Scikit-Learn"
        ],
        "salary": "$95,000 - $120,000",
        "employer_id": 1
    },
    {
        "id": 461,
        "category": "Software Development",
        "title": "Full Stack Developer",
        "company": "TechCo",
        "companyLogo": "/public/vite.svg",
        "location": "San Francisco, CA",
        "type": "Full-time",
        "experience": "3-5 years",
        "description": "Exciting opportunity for a skilled Full Stack Developer...",
        "skills": [
            "React",
            "Node.js",
            "MongoDB"
        ],
        "salary": "$80,000 - $100,000",
        "employer_id": 1
    },
    {
        "id": 462,
        "category": "Data Science",
        "title": "Data Scientist",
        "company": "Data Insights",
        "companyLogo": "/public/vite.svg",
        "location": "New York, NY",
        "type": "Full-time",
        "experience": "2-4 years",
        "description": "Join our data science team to analyze and interpret complex data sets...",
        "skills": [
            "Python",
            "Machine Learning",
            "SQL"
        ],
        "salary": "$90,000 - $120,000",
        "employer_id": 1
    },
    {
        "id": 463,
        "category": "Front-End",
        "title": "UI/UX Designer",
        "company": "WebDesign Co",
        "companyLogo": "/public/vite.svg",
        "location": "Remote",
        "type": "Full-time",
        "experience": "2-5 years",
        "description": "Design user interfaces for web applications...",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript"
        ],
        "salary": "$70,000 - $90,000",
        "employer_id": 1
    },
    {
        "id": 464,
        "category": "Back-End",
        "title": "Backend Developer",
        "company": "ServerLogic",
        "companyLogo": "/public/vite.svg",
        "location": "On-Site",
        "type": "Full-time",
        "experience": "4-6 years",
        "description": "Develop server-side logic and integrate databases...",
        "skills": [
            "Java",
            "Spring Boot",
            "MySQL"
        ],
        "salary": "$85,000 - $110,000",
        "employer_id": 1
    },
    {
        "id": 465,
        "category": "Machine Learning",
        "title": "Machine Learning Eng",
        "company": "ML Innovations",
        "companyLogo": "/public/vite.svg",
        "location": "Remote",
        "type": "Full-time",
        "experience": "3-5 years",
        "description": "Apply machine learning techniques to solve complex problems...",
        "skills": [
            "Python",
            "TensorFlow",
            "Scikit-Learn"
        ],
        "salary": "$95,000 - $120,000",
        "employer_id": 1
    },
    {
        "id": 466,
        "category": "Software Development",
        "title": "Full Stack Developer",
        "company": "TechCo",
        "companyLogo": "/public/vite.svg",
        "location": "San Francisco, CA",
        "type": "Full-time",
        "experience": "3-5 years",
        "description": "Exciting opportunity for a skilled Full Stack Developer...",
        "skills": [
            "React",
            "Node.js",
            "MongoDB"
        ],
        "salary": "$80,000 - $100,000",
        "employer_id": 1
    },
    {
        "id": 467,
        "category": "Data Science",
        "title": "Data Scientist",
        "company": "Data Insights",
        "companyLogo": "/public/vite.svg",
        "location": "New York, NY",
        "type": "Full-time",
        "experience": "2-4 years",
        "description": "Join our data science team to analyze and interpret complex data sets...",
        "skills": [
            "Python",
            "Machine Learning",
            "SQL"
        ],
        "salary": "$90,000 - $120,000",
        "employer_id": 1
    },
    {
        "id": 468,
        "category": "Front-End",
        "title": "UI/UX Designer",
        "company": "WebDesign Co",
        "companyLogo": "/images/company/logo.svg",
        "location": "Remote",
        "type": "Full-time",
        "experience": "2-5 years",
        "description": "Design user interfaces for web applications...",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript"
        ],
        "salary": "$70,000 - $90,000",
        "employer_id": 1
    },
    {
        "id": 469,
        "category": "Back-End",
        "title": "Backend Developer",
        "company": "ServerLogic",
        "companyLogo": "/images/company/logo.svg",
        "location": "On-Site",
        "type": "Full-time",
        "experience": "4-6 years",
        "description": "Develop server-side logic and integrate databases...",
        "skills": [
            "Java",
            "Spring Boot",
            "MySQL"
        ],
        "salary": "$85,000 - $110,000",
        "employer_id": 1
    },
    {
        "id": 470,
        "category": "Machine Learning",
        "title": "Machine Learning Eng",
        "company": "ML Innovations",
        "companyLogo": "/images/company/logo.svg",
        "location": "Remote",
        "type": "Full-time",
        "experience": "3-5 years",
        "description": "Apply machine learning techniques to solve complex problems...",
        "skills": [
            "Python",
            "TensorFlow",
            "Scikit-Learn"
        ],
        "salary": "$95,000 - $120,000",
        "employer_id": 1
    },
    {
        "id": 471,
        "category": "Software Development",
        "title": "Full Stack Developer",
        "company": "TechCo",
        "companyLogo": "/public/vite.svg",
        "location": "San Francisco, CA",
        "type": "Full-time",
        "experience": "3-5 years",
        "description": "Exciting opportunity for a skilled Full Stack Developer...",
        "skills": [
            "React",
            "Node.js",
            "MongoDB"
        ],
        "salary": "$80,000 - $100,000",
        "employer_id": 1
    },
    {
        "id": 472,
        "category": "Data Science",
        "title": "Data Scientist",
        "company": "Data Insights",
        "companyLogo": "/public/vite.svg",
        "location": "New York, NY",
        "type": "Full-time",
        "experience": "2-4 years",
        "description": "Join our data science team to analyze and interpret complex data sets...",
        "skills": [
            "Python",
            "Machine Learning",
            "SQL"
        ],
        "salary": "$90,000 - $120,000",
        "employer_id": 1
    },
    {
        "id": 473,
        "category": "Front-End",
        "title": "UI/UX Designer",
        "company": "WebDesign Co",
        "companyLogo": "/public/vite.svg",
        "location": "Remote",
        "type": "Full-time",
        "experience": "2-5 years",
        "description": "Design user interfaces for web applications...",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript"
        ],
        "salary": "$70,000 - $90,000",
        "employer_id": 1
    },
    {
        "id": 474,
        "category": "Back-End",
        "title": "Backend Developer",
        "company": "ServerLogic",
        "companyLogo": "/public/vite.svg",
        "location": "On-Site",
        "type": "Full-time",
        "experience": "4-6 years",
        "description": "Develop server-side logic and integrate databases...",
        "skills": [
            "Java",
            "Spring Boot",
            "MySQL"
        ],
        "salary": "$85,000 - $110,000",
        "employer_id": 1
    },
    {
        "id": 475,
        "category": "Machine Learning",
        "title": "Machine Learning Eng",
        "company": "ML Innovations",
        "companyLogo": "/public/vite.svg",
        "location": "Remote",
        "type": "Full-time",
        "experience": "3-5 years",
        "description": "Apply machine learning techniques to solve complex problems...",
        "skills": [
            "Python",
            "TensorFlow",
            "Scikit-Learn"
        ],
        "salary": "$95,000 - $120,000",
        "employer_id": 1
    },
    {
        "id": 476,
        "category": "Software Development",
        "title": "Full Stack Developer",
        "company": "TechCo",
        "companyLogo": "/public/vite.svg",
        "location": "San Francisco, CA",
        "type": "Full-time",
        "experience": "3-5 years",
        "description": "Exciting opportunity for a skilled Full Stack Developer...",
        "skills": [
            "React",
            "Node.js",
            "MongoDB"
        ],
        "salary": "$80,000 - $100,000",
        "employer_id": 1
    },
    {
        "id": 477,
        "category": "Data Science",
        "title": "Data Scientist",
        "company": "Data Insights",
        "companyLogo": "/public/vite.svg",
        "location": "New York, NY",
        "type": "Full-time",
        "experience": "2-4 years",
        "description": "Join our data science team to analyze and interpret complex data sets...",
        "skills": [
            "Python",
            "Machine Learning",
            "SQL"
        ],
        "salary": "$90,000 - $120,000",
        "employer_id": 1
    },
    {
        "id": 478,
        "category": "Front-End",
        "title": "UI/UX Designer",
        "company": "WebDesign Co",
        "companyLogo": "/images/company/logo.svg",
        "location": "Remote",
        "type": "Full-time",
        "experience": "2-5 years",
        "description": "Design user interfaces for web applications...",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript"
        ],
        "salary": "$70,000 - $90,000",
        "employer_id": 1
    },
    {
        "id": 479,
        "category": "Back-End",
        "title": "Backend Developer",
        "company": "ServerLogic",
        "companyLogo": "/images/company/logo.svg",
        "location": "On-Site",
        "type": "Full-time",
        "experience": "4-6 years",
        "description": "Develop server-side logic and integrate databases...",
        "skills": [
            "Java",
            "Spring Boot",
            "MySQL"
        ],
        "salary": "$85,000 - $110,000",
        "employer_id": 1
    },
    {
        "id": 480,
        "category": "Machine Learning",
        "title": "Machine Learning Eng",
        "company": "ML Innovations",
        "companyLogo": "/images/company/logo.svg",
        "location": "Remote",
        "type": "Full-time",
        "experience": "3-5 years",
        "description": "Apply machine learning techniques to solve complex problems...",
        "skills": [
            "Python",
            "TensorFlow",
            "Scikit-Learn"
        ],
        "salary": "$95,000 - $120,000",
        "employer_id": 1
    },
    {
        "id": 481,
        "category": "Software Development",
        "title": "Full Stack Developer",
        "company": "TechCo",
        "companyLogo": "/public/vite.svg",
        "location": "San Francisco, CA",
        "type": "Full-time",
        "experience": "3-5 years",
        "description": "Exciting opportunity for a skilled Full Stack Developer...",
        "skills": [
            "React",
            "Node.js",
            "MongoDB"
        ],
        "salary": "$80,000 - $100,000",
        "employer_id": 1
    },
    {
        "id": 482,
        "category": "Data Science",
        "title": "Data Scientist",
        "company": "Data Insights",
        "companyLogo": "/public/vite.svg",
        "location": "New York, NY",
        "type": "Full-time",
        "experience": "2-4 years",
        "description": "Join our data science team to analyze and interpret complex data sets...",
        "skills": [
            "Python",
            "Machine Learning",
            "SQL"
        ],
        "salary": "$90,000 - $120,000",
        "employer_id": 1
    },
    {
        "id": 483,
        "category": "Front-End",
        "title": "UI/UX Designer",
        "company": "WebDesign Co",
        "companyLogo": "/public/vite.svg",
        "location": "Remote",
        "type": "Full-time",
        "experience": "2-5 years",
        "description": "Design user interfaces for web applications...",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript"
        ],
        "salary": "$70,000 - $90,000",
        "employer_id": 1
    },
    {
        "id": 484,
        "category": "Back-End",
        "title": "Backend Developer",
        "company": "ServerLogic",
        "companyLogo": "/public/vite.svg",
        "location": "On-Site",
        "type": "Full-time",
        "experience": "4-6 years",
        "description": "Develop server-side logic and integrate databases...",
        "skills": [
            "Java",
            "Spring Boot",
            "MySQL"
        ],
        "salary": "$85,000 - $110,000",
        "employer_id": 1
    },
    {
        "id": 485,
        "category": "Machine Learning",
        "title": "Machine Learning Eng",
        "company": "ML Innovations",
        "companyLogo": "/public/vite.svg",
        "location": "Remote",
        "type": "Full-time",
        "experience": "3-5 years",
        "description": "Apply machine learning techniques to solve complex problems...",
        "skills": [
            "Python",
            "TensorFlow",
            "Scikit-Learn"
        ],
        "salary": "$95,000 - $120,000",
        "employer_id": 1
    },
    {
        "id": 486,
        "category": "Software Development",
        "title": "Full Stack Developer",
        "company": "TechCo",
        "companyLogo": "/public/vite.svg",
        "location": "San Francisco, CA",
        "type": "Full-time",
        "experience": "3-5 years",
        "description": "Exciting opportunity for a skilled Full Stack Developer...",
        "skills": [
            "React",
            "Node.js",
            "MongoDB"
        ],
        "salary": "$80,000 - $100,000",
        "employer_id": 1
    },
    {
        "id": 487,
        "category": "Data Science",
        "title": "Data Scientist",
        "company": "Data Insights",
        "companyLogo": "/public/vite.svg",
        "location": "New York, NY",
        "type": "Full-time",
        "experience": "2-4 years",
        "description": "Join our data science team to analyze and interpret complex data sets...",
        "skills": [
            "Python",
            "Machine Learning",
            "SQL"
        ],
        "salary": "$90,000 - $120,000",
        "employer_id": 1
    },
    {
        "id": 488,
        "category": "Front-End",
        "title": "UI/UX Designer",
        "company": "WebDesign Co",
        "companyLogo": "/images/company/logo.svg",
        "location": "Remote",
        "type": "Full-time",
        "experience": "2-5 years",
        "description": "Design user interfaces for web applications...",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript"
        ],
        "salary": "$70,000 - $90,000",
        "employer_id": 1
    },
    {
        "id": 489,
        "category": "Back-End",
        "title": "Backend Developer",
        "company": "ServerLogic",
        "companyLogo": "/images/company/logo.svg",
        "location": "On-Site",
        "type": "Full-time",
        "experience": "4-6 years",
        "description": "Develop server-side logic and integrate databases...",
        "skills": [
            "Java",
            "Spring Boot",
            "MySQL"
        ],
        "salary": "$85,000 - $110,000",
        "employer_id": 1
    },
    {
        "id": 490,
        "category": "Machine Learning",
        "title": "Machine Learning Eng",
        "company": "ML Innovations",
        "companyLogo": "/images/company/logo.svg",
        "location": "Remote",
        "type": "Full-time",
        "experience": "3-5 years",
        "description": "Apply machine learning techniques to solve complex problems...",
        "skills": [
            "Python",
            "TensorFlow",
            "Scikit-Learn"
        ],
        "salary": "$95,000 - $120,000",
        "employer_id": 1
    },
    {
        "id": 491,
        "category": "Software Development",
        "title": "Full Stack Developer",
        "company": "TechCo",
        "companyLogo": "/public/vite.svg",
        "location": "San Francisco, CA",
        "type": "Full-time",
        "experience": "3-5 years",
        "description": "Exciting opportunity for a skilled Full Stack Developer...",
        "skills": [
            "React",
            "Node.js",
            "MongoDB"
        ],
        "salary": "$80,000 - $100,000",
        "employer_id": 1
    },
    {
        "id": 492,
        "category": "Data Science",
        "title": "Data Scientist",
        "company": "Data Insights",
        "companyLogo": "/public/vite.svg",
        "location": "New York, NY",
        "type": "Full-time",
        "experience": "2-4 years",
        "description": "Join our data science team to analyze and interpret complex data sets...",
        "skills": [
            "Python",
            "Machine Learning",
            "SQL"
        ],
        "salary": "$90,000 - $120,000",
        "employer_id": 1
    },
    {
        "id": 493,
        "category": "Front-End",
        "title": "UI/UX Designer",
        "company": "WebDesign Co",
        "companyLogo": "/public/vite.svg",
        "location": "Remote",
        "type": "Full-time",
        "experience": "2-5 years",
        "description": "Design user interfaces for web applications...",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript"
        ],
        "salary": "$70,000 - $90,000",
        "employer_id": 1
    },
    {
        "id": 494,
        "category": "Back-End",
        "title": "Backend Developer",
        "company": "ServerLogic",
        "companyLogo": "/public/vite.svg",
        "location": "On-Site",
        "type": "Full-time",
        "experience": "4-6 years",
        "description": "Develop server-side logic and integrate databases...",
        "skills": [
            "Java",
            "Spring Boot",
            "MySQL"
        ],
        "salary": "$85,000 - $110,000",
        "employer_id": 1
    },
    {
        "id": 495,
        "category": "Machine Learning",
        "title": "Machine Learning Eng",
        "company": "ML Innovations",
        "companyLogo": "/public/vite.svg",
        "location": "Remote",
        "type": "Full-time",
        "experience": "3-5 years",
        "description": "Apply machine learning techniques to solve complex problems...",
        "skills": [
            "Python",
            "TensorFlow",
            "Scikit-Learn"
        ],
        "salary": "$95,000 - $120,000",
        "employer_id": 1
    },
    {
        "id": 496,
        "category": "Software Development",
        "title": "Full Stack Developer",
        "company": "TechCo",
        "companyLogo": "/public/vite.svg",
        "location": "San Francisco, CA",
        "type": "Full-time",
        "experience": "3-5 years",
        "description": "Exciting opportunity for a skilled Full Stack Developer...",
        "skills": [
            "React",
            "Node.js",
            "MongoDB"
        ],
        "salary": "$80,000 - $100,000",
        "employer_id": 1
    },
    {
        "id": 497,
        "category": "Data Science",
        "title": "Data Scientist",
        "company": "Data Insights",
        "companyLogo": "/public/vite.svg",
        "location": "New York, NY",
        "type": "Full-time",
        "experience": "2-4 years",
        "description": "Join our data science team to analyze and interpret complex data sets...",
        "skills": [
            "Python",
            "Machine Learning",
            "SQL"
        ],
        "salary": "$90,000 - $120,000",
        "employer_id": 1
    },
    {
        "id": 498,
        "category": "Front-End",
        "title": "UI/UX Designer",
        "company": "WebDesign Co",
        "companyLogo": "/images/company/logo.svg",
        "location": "Remote",
        "type": "Full-time",
        "experience": "2-5 years",
        "description": "Design user interfaces for web applications...",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript"
        ],
        "salary": "$70,000 - $90,000",
        "employer_id": 1
    },
    {
        "id": 499,
        "category": "Back-End",
        "title": "Backend Developer",
        "company": "ServerLogic",
        "companyLogo": "/images/company/logo.svg",
        "location": "On-Site",
        "type": "Full-time",
        "experience": "4-6 years",
        "description": "Develop server-side logic and integrate databases...",
        "skills": [
            "Java",
            "Spring Boot",
            "MySQL"
        ],
        "salary": "$85,000 - $110,000",
        "employer_id": 1
    },
    {
        "id": 500,
        "category": "Machine Learning",
        "title": "Machine Learning Eng",
        "company": "ML Innovations",
        "companyLogo": "/images/company/logo.svg",
        "location": "Remote",
        "type": "Full-time",
        "experience": "3-5 years",
        "description": "Apply machine learning techniques to solve complex problems...",
        "skills": [
            "Python",
            "TensorFlow",
            "Scikit-Learn"
        ],
        "salary": "$95,000 - $120,000",
        "employer_id": 1
    },
    {
        "id": 501,
        "category": "Software Development",
        "title": "Full Stack Developer",
        "company": "TechCo",
        "companyLogo": "/public/vite.svg",
        "location": "San Francisco, CA",
        "type": "Full-time",
        "experience": "3-5 years",
        "description": "Exciting opportunity for a skilled Full Stack Developer...",
        "skills": [
            "React",
            "Node.js",
            "MongoDB"
        ],
        "salary": "$80,000 - $100,000",
        "employer_id": 1
    },
    {
        "id": 502,
        "category": "Data Science",
        "title": "Data Scientist",
        "company": "Data Insights",
        "companyLogo": "/public/vite.svg",
        "location": "New York, NY",
        "type": "Full-time",
        "experience": "2-4 years",
        "description": "Join our data science team to analyze and interpret complex data sets...",
        "skills": [
            "Python",
            "Machine Learning",
            "SQL"
        ],
        "salary": "$90,000 - $120,000",
        "employer_id": 1
    },
    {
        "id": 503,
        "category": "Front-End",
        "title": "UI/UX Designer",
        "company": "WebDesign Co",
        "companyLogo": "/public/vite.svg",
        "location": "Remote",
        "type": "Full-time",
        "experience": "2-5 years",
        "description": "Design user interfaces for web applications...",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript"
        ],
        "salary": "$70,000 - $90,000",
        "employer_id": 1
    },
    {
        "id": 504,
        "category": "Back-End",
        "title": "Backend Developer",
        "company": "ServerLogic",
        "companyLogo": "/public/vite.svg",
        "location": "On-Site",
        "type": "Full-time",
        "experience": "4-6 years",
        "description": "Develop server-side logic and integrate databases...",
        "skills": [
            "Java",
            "Spring Boot",
            "MySQL"
        ],
        "salary": "$85,000 - $110,000",
        "employer_id": 1
    },
    {
        "id": 505,
        "category": "Machine Learning",
        "title": "Machine Learning Eng",
        "company": "ML Innovations",
        "companyLogo": "/public/vite.svg",
        "location": "Remote",
        "type": "Full-time",
        "experience": "3-5 years",
        "description": "Apply machine learning techniques to solve complex problems...",
        "skills": [
            "Python",
            "TensorFlow",
            "Scikit-Learn"
        ],
        "salary": "$95,000 - $120,000",
        "employer_id": 1
    },
    {
        "id": 506,
        "category": "Software Development",
        "title": "Full Stack Developer",
        "company": "TechCo",
        "companyLogo": "/public/vite.svg",
        "location": "San Francisco, CA",
        "type": "Full-time",
        "experience": "3-5 years",
        "description": "Exciting opportunity for a skilled Full Stack Developer...",
        "skills": [
            "React",
            "Node.js",
            "MongoDB"
        ],
        "salary": "$80,000 - $100,000",
        "employer_id": 1
    },
    {
        "id": 507,
        "category": "Data Science",
        "title": "Data Scientist",
        "company": "Data Insights",
        "companyLogo": "/public/vite.svg",
        "location": "New York, NY",
        "type": "Full-time",
        "experience": "2-4 years",
        "description": "Join our data science team to analyze and interpret complex data sets...",
        "skills": [
            "Python",
            "Machine Learning",
            "SQL"
        ],
        "salary": "$90,000 - $120,000",
        "employer_id": 1
    },
    {
        "id": 508,
        "category": "Front-End",
        "title": "UI/UX Designer",
        "company": "WebDesign Co",
        "companyLogo": "/images/company/logo.svg",
        "location": "Remote",
        "type": "Full-time",
        "experience": "2-5 years",
        "description": "Design user interfaces for web applications...",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript"
        ],
        "salary": "$70,000 - $90,000",
        "employer_id": 1
    },
    {
        "id": 509,
        "category": "Back-End",
        "title": "Backend Developer",
        "company": "ServerLogic",
        "companyLogo": "/images/company/logo.svg",
        "location": "On-Site",
        "type": "Full-time",
        "experience": "4-6 years",
        "description": "Develop server-side logic and integrate databases...",
        "skills": [
            "Java",
            "Spring Boot",
            "MySQL"
        ],
        "salary": "$85,000 - $110,000",
        "employer_id": 1
    },
    {
        "id": 510,
        "category": "Machine Learning",
        "title": "Machine Learning Eng",
        "company": "ML Innovations",
        "companyLogo": "/images/company/logo.svg",
        "location": "Remote",
        "type": "Full-time",
        "experience": "3-5 years",
        "description": "Apply machine learning techniques to solve complex problems...",
        "skills": [
            "Python",
            "TensorFlow",
            "Scikit-Learn"
        ],
        "salary": "$95,000 - $120,000",
        "employer_id": 1
    },
    {
        "id": 511,
        "category": "Software Development",
        "title": "Full Stack Developer",
        "company": "TechCo",
        "companyLogo": "/public/vite.svg",
        "location": "San Francisco, CA",
        "type": "Full-time",
        "experience": "3-5 years",
        "description": "Exciting opportunity for a skilled Full Stack Developer...",
        "skills": [
            "React",
            "Node.js",
            "MongoDB"
        ],
        "salary": "$80,000 - $100,000",
        "employer_id": 1
    },
    {
        "id": 512,
        "category": "Data Science",
        "title": "Data Scientist",
        "company": "Data Insights",
        "companyLogo": "/public/vite.svg",
        "location": "New York, NY",
        "type": "Full-time",
        "experience": "2-4 years",
        "description": "Join our data science team to analyze and interpret complex data sets...",
        "skills": [
            "Python",
            "Machine Learning",
            "SQL"
        ],
        "salary": "$90,000 - $120,000",
        "employer_id": 1
    },
    {
        "id": 513,
        "category": "Front-End",
        "title": "UI/UX Designer",
        "company": "WebDesign Co",
        "companyLogo": "/public/vite.svg",
        "location": "Remote",
        "type": "Full-time",
        "experience": "2-5 years",
        "description": "Design user interfaces for web applications...",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript"
        ],
        "salary": "$70,000 - $90,000",
        "employer_id": 1
    },
    {
        "id": 514,
        "category": "Back-End",
        "title": "Backend Developer",
        "company": "ServerLogic",
        "companyLogo": "/public/vite.svg",
        "location": "On-Site",
        "type": "Full-time",
        "experience": "4-6 years",
        "description": "Develop server-side logic and integrate databases...",
        "skills": [
            "Java",
            "Spring Boot",
            "MySQL"
        ],
        "salary": "$85,000 - $110,000",
        "employer_id": 1
    },
    {
        "id": 515,
        "category": "Machine Learning",
        "title": "Machine Learning Eng",
        "company": "ML Innovations",
        "companyLogo": "/public/vite.svg",
        "location": "Remote",
        "type": "Full-time",
        "experience": "3-5 years",
        "description": "Apply machine learning techniques to solve complex problems...",
        "skills": [
            "Python",
            "TensorFlow",
            "Scikit-Learn"
        ],
        "salary": "$95,000 - $120,000",
        "employer_id": 1
    },
    {
        "id": 516,
        "category": "Software Development",
        "title": "Full Stack Developer",
        "company": "TechCo",
        "companyLogo": "/public/vite.svg",
        "location": "San Francisco, CA",
        "type": "Full-time",
        "experience": "3-5 years",
        "description": "Exciting opportunity for a skilled Full Stack Developer...",
        "skills": [
            "React",
            "Node.js",
            "MongoDB"
        ],
        "salary": "$80,000 - $100,000",
        "employer_id": 1
    },
    {
        "id": 517,
        "category": "Data Science",
        "title": "Data Scientist",
        "company": "Data Insights",
        "companyLogo": "/public/vite.svg",
        "location": "New York, NY",
        "type": "Full-time",
        "experience": "2-4 years",
        "description": "Join our data science team to analyze and interpret complex data sets...",
        "skills": [
            "Python",
            "Machine Learning",
            "SQL"
        ],
        "salary": "$90,000 - $120,000",
        "employer_id": 1
    },
    {
        "id": 518,
        "category": "Front-End",
        "title": "UI/UX Designer",
        "company": "WebDesign Co",
        "companyLogo": "/images/company/logo.svg",
        "location": "Remote",
        "type": "Full-time",
        "experience": "2-5 years",
        "description": "Design user interfaces for web applications...",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript"
        ],
        "salary": "$70,000 - $90,000",
        "employer_id": 1
    },
    {
        "id": 519,
        "category": "Back-End",
        "title": "Backend Developer",
        "company": "ServerLogic",
        "companyLogo": "/images/company/logo.svg",
        "location": "On-Site",
        "type": "Full-time",
        "experience": "4-6 years",
        "description": "Develop server-side logic and integrate databases...",
        "skills": [
            "Java",
            "Spring Boot",
            "MySQL"
        ],
        "salary": "$85,000 - $110,000",
        "employer_id": 1
    },
    {
        "id": 520,
        "category": "Machine Learning",
        "title": "Machine Learning Eng",
        "company": "ML Innovations",
        "companyLogo": "/images/company/logo.svg",
        "location": "Remote",
        "type": "Full-time",
        "experience": "3-5 years",
        "description": "Apply machine learning techniques to solve complex problems...",
        "skills": [
            "Python",
            "TensorFlow",
            "Scikit-Learn"
        ],
        "salary": "$95,000 - $120,000",
        "employer_id": 1
    },
    {
        "id": 521,
        "category": "Software Development",
        "title": "Full Stack Developer",
        "company": "TechCo",
        "companyLogo": "/public/vite.svg",
        "location": "San Francisco, CA",
        "type": "Full-time",
        "experience": "3-5 years",
        "description": "Exciting opportunity for a skilled Full Stack Developer...",
        "skills": [
            "React",
            "Node.js",
            "MongoDB"
        ],
        "salary": "$80,000 - $100,000",
        "employer_id": 1
    },
    {
        "id": 522,
        "category": "Data Science",
        "title": "Data Scientist",
        "company": "Data Insights",
        "companyLogo": "/public/vite.svg",
        "location": "New York, NY",
        "type": "Full-time",
        "experience": "2-4 years",
        "description": "Join our data science team to analyze and interpret complex data sets...",
        "skills": [
            "Python",
            "Machine Learning",
            "SQL"
        ],
        "salary": "$90,000 - $120,000",
        "employer_id": 1
    },
    {
        "id": 523,
        "category": "Front-End",
        "title": "UI/UX Designer",
        "company": "WebDesign Co",
        "companyLogo": "/public/vite.svg",
        "location": "Remote",
        "type": "Full-time",
        "experience": "2-5 years",
        "description": "Design user interfaces for web applications...",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript"
        ],
        "salary": "$70,000 - $90,000",
        "employer_id": 1
    },
    {
        "id": 524,
        "category": "Back-End",
        "title": "Backend Developer",
        "company": "ServerLogic",
        "companyLogo": "/public/vite.svg",
        "location": "On-Site",
        "type": "Full-time",
        "experience": "4-6 years",
        "description": "Develop server-side logic and integrate databases...",
        "skills": [
            "Java",
            "Spring Boot",
            "MySQL"
        ],
        "salary": "$85,000 - $110,000",
        "employer_id": 1
    },
    {
        "id": 525,
        "category": "Machine Learning",
        "title": "Machine Learning Eng",
        "company": "ML Innovations",
        "companyLogo": "/public/vite.svg",
        "location": "Remote",
        "type": "Full-time",
        "experience": "3-5 years",
        "description": "Apply machine learning techniques to solve complex problems...",
        "skills": [
            "Python",
            "TensorFlow",
            "Scikit-Learn"
        ],
        "salary": "$95,000 - $120,000",
        "employer_id": 1
    },
    {
        "id": 526,
        "category": "Software Development",
        "title": "Full Stack Developer",
        "company": "TechCo",
        "companyLogo": "/public/vite.svg",
        "location": "San Francisco, CA",
        "type": "Full-time",
        "experience": "3-5 years",
        "description": "Exciting opportunity for a skilled Full Stack Developer...",
        "skills": [
            "React",
            "Node.js",
            "MongoDB"
        ],
        "salary": "$80,000 - $100,000",
        "employer_id": 1
    },
    {
        "id": 527,
        "category": "Data Science",
        "title": "Data Scientist",
        "company": "Data Insights",
        "companyLogo": "/public/vite.svg",
        "location": "New York, NY",
        "type": "Full-time",
        "experience": "2-4 years",
        "description": "Join our data science team to analyze and interpret complex data sets...",
        "skills": [
            "Python",
            "Machine Learning",
            "SQL"
        ],
        "salary": "$90,000 - $120,000",
        "employer_id": 1
    },
    {
        "id": 528,
        "category": "Front-End",
        "title": "UI/UX Designer",
        "company": "WebDesign Co",
        "companyLogo": "/images/company/logo.svg",
        "location": "Remote",
        "type": "Full-time",
        "experience": "2-5 years",
        "description": "Design user interfaces for web applications...",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript"
        ],
        "salary": "$70,000 - $90,000",
        "employer_id": 1
    },
    {
        "id": 529,
        "category": "Back-End",
        "title": "Backend Developer",
        "company": "ServerLogic",
        "companyLogo": "/images/company/logo.svg",
        "location": "On-Site",
        "type": "Full-time",
        "experience": "4-6 years",
        "description": "Develop server-side logic and integrate databases...",
        "skills": [
            "Java",
            "Spring Boot",
            "MySQL"
        ],
        "salary": "$85,000 - $110,000",
        "employer_id": 1
    },
    {
        "id": 530,
        "category": "Machine Learning",
        "title": "Machine Learning Eng",
        "company": "ML Innovations",
        "companyLogo": "/images/company/logo.svg",
        "location": "Remote",
        "type": "Full-time",
        "experience": "3-5 years",
        "description": "Apply machine learning techniques to solve complex problems...",
        "skills": [
            "Python",
            "TensorFlow",
            "Scikit-Learn"
        ],
        "salary": "$95,000 - $120,000",
        "employer_id": 1
    },
    {
        "id": 531,
        "category": "Software Development",
        "title": "Full Stack Developer",
        "company": "TechCo",
        "companyLogo": "/public/vite.svg",
        "location": "San Francisco, CA",
        "type": "Full-time",
        "experience": "3-5 years",
        "description": "Exciting opportunity for a skilled Full Stack Developer...",
        "skills": [
            "React",
            "Node.js",
            "MongoDB"
        ],
        "salary": "$80,000 - $100,000",
        "employer_id": 1
    },
    {
        "id": 532,
        "category": "Data Science",
        "title": "Data Scientist",
        "company": "Data Insights",
        "companyLogo": "/public/vite.svg",
        "location": "New York, NY",
        "type": "Full-time",
        "experience": "2-4 years",
        "description": "Join our data science team to analyze and interpret complex data sets...",
        "skills": [
            "Python",
            "Machine Learning",
            "SQL"
        ],
        "salary": "$90,000 - $120,000",
        "employer_id": 1
    },
    {
        "id": 533,
        "category": "Front-End",
        "title": "UI/UX Designer",
        "company": "WebDesign Co",
        "companyLogo": "/public/vite.svg",
        "location": "Remote",
        "type": "Full-time",
        "experience": "2-5 years",
        "description": "Design user interfaces for web applications...",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript"
        ],
        "salary": "$70,000 - $90,000",
        "employer_id": 1
    },
    {
        "id": 534,
        "category": "Back-End",
        "title": "Backend Developer",
        "company": "ServerLogic",
        "companyLogo": "/public/vite.svg",
        "location": "On-Site",
        "type": "Full-time",
        "experience": "4-6 years",
        "description": "Develop server-side logic and integrate databases...",
        "skills": [
            "Java",
            "Spring Boot",
            "MySQL"
        ],
        "salary": "$85,000 - $110,000",
        "employer_id": 1
    },
    {
        "id": 535,
        "category": "Machine Learning",
        "title": "Machine Learning Eng",
        "company": "ML Innovations",
        "companyLogo": "/public/vite.svg",
        "location": "Remote",
        "type": "Full-time",
        "experience": "3-5 years",
        "description": "Apply machine learning techniques to solve complex problems...",
        "skills": [
            "Python",
            "TensorFlow",
            "Scikit-Learn"
        ],
        "salary": "$95,000 - $120,000",
        "employer_id": 1
    },
    {
        "id": 536,
        "category": "Software Development",
        "title": "Full Stack Developer",
        "company": "TechCo",
        "companyLogo": "/public/vite.svg",
        "location": "San Francisco, CA",
        "type": "Full-time",
        "experience": "3-5 years",
        "description": "Exciting opportunity for a skilled Full Stack Developer...",
        "skills": [
            "React",
            "Node.js",
            "MongoDB"
        ],
        "salary": "$80,000 - $100,000",
        "employer_id": 1
    },
    {
        "id": 537,
        "category": "Data Science",
        "title": "Data Scientist",
        "company": "Data Insights",
        "companyLogo": "/public/vite.svg",
        "location": "New York, NY",
        "type": "Full-time",
        "experience": "2-4 years",
        "description": "Join our data science team to analyze and interpret complex data sets...",
        "skills": [
            "Python",
            "Machine Learning",
            "SQL"
        ],
        "salary": "$90,000 - $120,000",
        "employer_id": 1
    },
    {
        "id": 538,
        "category": "Front-End",
        "title": "UI/UX Designer",
        "company": "WebDesign Co",
        "companyLogo": "/images/company/logo.svg",
        "location": "Remote",
        "type": "Full-time",
        "experience": "2-5 years",
        "description": "Design user interfaces for web applications...",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript"
        ],
        "salary": "$70,000 - $90,000",
        "employer_id": 1
    },
    {
        "id": 539,
        "category": "Back-End",
        "title": "Backend Developer",
        "company": "ServerLogic",
        "companyLogo": "/images/company/logo.svg",
        "location": "On-Site",
        "type": "Full-time",
        "experience": "4-6 years",
        "description": "Develop server-side logic and integrate databases...",
        "skills": [
            "Java",
            "Spring Boot",
            "MySQL"
        ],
        "salary": "$85,000 - $110,000",
        "employer_id": 1
    },
    {
        "id": 540,
        "category": "Machine Learning",
        "title": "Machine Learning Eng",
        "company": "ML Innovations",
        "companyLogo": "/images/company/logo.svg",
        "location": "Remote",
        "type": "Full-time",
        "experience": "3-5 years",
        "description": "Apply machine learning techniques to solve complex problems...",
        "skills": [
            "Python",
            "TensorFlow",
            "Scikit-Learn"
        ],
        "salary": "$95,000 - $120,000",
        "employer_id": 1
    },
    {
        "id": 541,
        "category": "Software Development",
        "title": "Full Stack Developer",
        "company": "TechCo",
        "companyLogo": "/public/vite.svg",
        "location": "San Francisco, CA",
        "type": "Full-time",
        "experience": "3-5 years",
        "description": "Exciting opportunity for a skilled Full Stack Developer...",
        "skills": [
            "React",
            "Node.js",
            "MongoDB"
        ],
        "salary": "$80,000 - $100,000",
        "employer_id": 1
    },
    {
        "id": 542,
        "category": "Data Science",
        "title": "Data Scientist",
        "company": "Data Insights",
        "companyLogo": "/public/vite.svg",
        "location": "New York, NY",
        "type": "Full-time",
        "experience": "2-4 years",
        "description": "Join our data science team to analyze and interpret complex data sets...",
        "skills": [
            "Python",
            "Machine Learning",
            "SQL"
        ],
        "salary": "$90,000 - $120,000",
        "employer_id": 1
    },
    {
        "id": 543,
        "category": "Front-End",
        "title": "UI/UX Designer",
        "company": "WebDesign Co",
        "companyLogo": "/public/vite.svg",
        "location": "Remote",
        "type": "Full-time",
        "experience": "2-5 years",
        "description": "Design user interfaces for web applications...",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript"
        ],
        "salary": "$70,000 - $90,000",
        "employer_id": 1
    },
    {
        "id": 544,
        "category": "Back-End",
        "title": "Backend Developer",
        "company": "ServerLogic",
        "companyLogo": "/public/vite.svg",
        "location": "On-Site",
        "type": "Full-time",
        "experience": "4-6 years",
        "description": "Develop server-side logic and integrate databases...",
        "skills": [
            "Java",
            "Spring Boot",
            "MySQL"
        ],
        "salary": "$85,000 - $110,000",
        "employer_id": 1
    },
    {
        "id": 545,
        "category": "Machine Learning",
        "title": "Machine Learning Eng",
        "company": "ML Innovations",
        "companyLogo": "/public/vite.svg",
        "location": "Remote",
        "type": "Full-time",
        "experience": "3-5 years",
        "description": "Apply machine learning techniques to solve complex problems...",
        "skills": [
            "Python",
            "TensorFlow",
            "Scikit-Learn"
        ],
        "salary": "$95,000 - $120,000",
        "employer_id": 1
    },
    {
        "id": 546,
        "category": "Software Development",
        "title": "Full Stack Developer",
        "company": "TechCo",
        "companyLogo": "/public/vite.svg",
        "location": "San Francisco, CA",
        "type": "Full-time",
        "experience": "3-5 years",
        "description": "Exciting opportunity for a skilled Full Stack Developer...",
        "skills": [
            "React",
            "Node.js",
            "MongoDB"
        ],
        "salary": "$80,000 - $100,000",
        "employer_id": 1
    },
    {
        "id": 547,
        "category": "Data Science",
        "title": "Data Scientist",
        "company": "Data Insights",
        "companyLogo": "/public/vite.svg",
        "location": "New York, NY",
        "type": "Full-time",
        "experience": "2-4 years",
        "description": "Join our data science team to analyze and interpret complex data sets...",
        "skills": [
            "Python",
            "Machine Learning",
            "SQL"
        ],
        "salary": "$90,000 - $120,000",
        "employer_id": 1
    },
    {
        "id": 548,
        "category": "Front-End",
        "title": "UI/UX Designer",
        "company": "WebDesign Co",
        "companyLogo": "/images/company/logo.svg",
        "location": "Remote",
        "type": "Full-time",
        "experience": "2-5 years",
        "description": "Design user interfaces for web applications...",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript"
        ],
        "salary": "$70,000 - $90,000",
        "employer_id": 1
    },
    {
        "id": 549,
        "category": "Back-End",
        "title": "Backend Developer",
        "company": "ServerLogic",
        "companyLogo": "/images/company/logo.svg",
        "location": "On-Site",
        "type": "Full-time",
        "experience": "4-6 years",
        "description": "Develop server-side logic and integrate databases...",
        "skills": [
            "Java",
            "Spring Boot",
            "MySQL"
        ],
        "salary": "$85,000 - $110,000",
        "employer_id": 1
    },
    {
        "id": 550,
        "category": "Machine Learning",
        "title": "Machine Learning Eng",
        "company": "ML Innovations",
        "companyLogo": "/images/company/logo.svg",
        "location": "Remote",
        "type": "Full-time",
        "experience": "3-5 years",
        "description": "Apply machine learning techniques to solve complex problems...",
        "skills": [
            "Python",
            "TensorFlow",
            "Scikit-Learn"
        ],
        "salary": "$95,000 - $120,000",
        "employer_id": 1
    },
    {
        "id": 551,
        "category": "Software Development",
        "title": "Full Stack Developer",
        "company": "TechCo",
        "companyLogo": "/public/vite.svg",
        "location": "San Francisco, CA",
        "type": "Full-time",
        "experience": "3-5 years",
        "description": "Exciting opportunity for a skilled Full Stack Developer...",
        "skills": [
            "React",
            "Node.js",
            "MongoDB"
        ],
        "salary": "$80,000 - $100,000",
        "employer_id": 1
    },
    {
        "id": 552,
        "category": "Data Science",
        "title": "Data Scientist",
        "company": "Data Insights",
        "companyLogo": "/public/vite.svg",
        "location": "New York, NY",
        "type": "Full-time",
        "experience": "2-4 years",
        "description": "Join our data science team to analyze and interpret complex data sets...",
        "skills": [
            "Python",
            "Machine Learning",
            "SQL"
        ],
        "salary": "$90,000 - $120,000",
        "employer_id": 1
    },
    {
        "id": 553,
        "category": "Front-End",
        "title": "UI/UX Designer",
        "company": "WebDesign Co",
        "companyLogo": "/public/vite.svg",
        "location": "Remote",
        "type": "Full-time",
        "experience": "2-5 years",
        "description": "Design user interfaces for web applications...",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript"
        ],
        "salary": "$70,000 - $90,000",
        "employer_id": 1
    },
    {
        "id": 554,
        "category": "Back-End",
        "title": "Backend Developer",
        "company": "ServerLogic",
        "companyLogo": "/public/vite.svg",
        "location": "On-Site",
        "type": "Full-time",
        "experience": "4-6 years",
        "description": "Develop server-side logic and integrate databases...",
        "skills": [
            "Java",
            "Spring Boot",
            "MySQL"
        ],
        "salary": "$85,000 - $110,000",
        "employer_id": 1
    },
    {
        "id": 555,
        "category": "Machine Learning",
        "title": "Machine Learning Eng",
        "company": "ML Innovations",
        "companyLogo": "/public/vite.svg",
        "location": "Remote",
        "type": "Full-time",
        "experience": "3-5 years",
        "description": "Apply machine learning techniques to solve complex problems...",
        "skills": [
            "Python",
            "TensorFlow",
            "Scikit-Learn"
        ],
        "salary": "$95,000 - $120,000",
        "employer_id": 1
    },
    {
        "id": 556,
        "category": "Software Development",
        "title": "Full Stack Developer",
        "company": "TechCo",
        "companyLogo": "/public/vite.svg",
        "location": "San Francisco, CA",
        "type": "Full-time",
        "experience": "3-5 years",
        "description": "Exciting opportunity for a skilled Full Stack Developer...",
        "skills": [
            "React",
            "Node.js",
            "MongoDB"
        ],
        "salary": "$80,000 - $100,000",
        "employer_id": 1
    },
    {
        "id": 557,
        "category": "Data Science",
        "title": "Data Scientist",
        "company": "Data Insights",
        "companyLogo": "/public/vite.svg",
        "location": "New York, NY",
        "type": "Full-time",
        "experience": "2-4 years",
        "description": "Join our data science team to analyze and interpret complex data sets...",
        "skills": [
            "Python",
            "Machine Learning",
            "SQL"
        ],
        "salary": "$90,000 - $120,000",
        "employer_id": 1
    },
    {
        "id": 558,
        "category": "Front-End",
        "title": "UI/UX Designer",
        "company": "WebDesign Co",
        "companyLogo": "/images/company/logo.svg",
        "location": "Remote",
        "type": "Full-time",
        "experience": "2-5 years",
        "description": "Design user interfaces for web applications...",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript"
        ],
        "salary": "$70,000 - $90,000",
        "employer_id": 1
    },
    {
        "id": 559,
        "category": "Back-End",
        "title": "Backend Developer",
        "company": "ServerLogic",
        "companyLogo": "/images/company/logo.svg",
        "location": "On-Site",
        "type": "Full-time",
        "experience": "4-6 years",
        "description": "Develop server-side logic and integrate databases...",
        "skills": [
            "Java",
            "Spring Boot",
            "MySQL"
        ],
        "salary": "$85,000 - $110,000",
        "employer_id": 1
    },
    {
        "id": 560,
        "category": "Machine Learning",
        "title": "Machine Learning Eng",
        "company": "ML Innovations",
        "companyLogo": "/images/company/logo.svg",
        "location": "Remote",
        "type": "Full-time",
        "experience": "3-5 years",
        "description": "Apply machine learning techniques to solve complex problems...",
        "skills": [
            "Python",
            "TensorFlow",
            "Scikit-Learn"
        ],
        "salary": "$95,000 - $120,000",
        "employer_id": 1
    },
    {
        "id": 561,
        "category": "Software Development",
        "title": "Full Stack Developer",
        "company": "TechCo",
        "companyLogo": "/public/vite.svg",
        "location": "San Francisco, CA",
        "type": "Full-time",
        "experience": "3-5 years",
        "description": "Exciting opportunity for a skilled Full Stack Developer...",
        "skills": [
            "React",
            "Node.js",
            "MongoDB"
        ],
        "salary": "$80,000 - $100,000",
        "employer_id": 1
    },
    {
        "id": 562,
        "category": "Data Science",
        "title": "Data Scientist",
        "company": "Data Insights",
        "companyLogo": "/public/vite.svg",
        "location": "New York, NY",
        "type": "Full-time",
        "experience": "2-4 years",
        "description": "Join our data science team to analyze and interpret complex data sets...",
        "skills": [
            "Python",
            "Machine Learning",
            "SQL"
        ],
        "salary": "$90,000 - $120,000",
        "employer_id": 1
    },
    {
        "id": 563,
        "category": "Front-End",
        "title": "UI/UX Designer",
        "company": "WebDesign Co",
        "companyLogo": "/public/vite.svg",
        "location": "Remote",
        "type": "Full-time",
        "experience": "2-5 years",
        "description": "Design user interfaces for web applications...",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript"
        ],
        "salary": "$70,000 - $90,000",
        "employer_id": 1
    },
    {
        "id": 564,
        "category": "Back-End",
        "title": "Backend Developer",
        "company": "ServerLogic",
        "companyLogo": "/public/vite.svg",
        "location": "On-Site",
        "type": "Full-time",
        "experience": "4-6 years",
        "description": "Develop server-side logic and integrate databases...",
        "skills": [
            "Java",
            "Spring Boot",
            "MySQL"
        ],
        "salary": "$85,000 - $110,000",
        "employer_id": 1
    },
    {
        "id": 565,
        "category": "Machine Learning",
        "title": "Machine Learning Eng",
        "company": "ML Innovations",
        "companyLogo": "/public/vite.svg",
        "location": "Remote",
        "type": "Full-time",
        "experience": "3-5 years",
        "description": "Apply machine learning techniques to solve complex problems...",
        "skills": [
            "Python",
            "TensorFlow",
            "Scikit-Learn"
        ],
        "salary": "$95,000 - $120,000",
        "employer_id": 1
    },
    {
        "id": 566,
        "category": "Software Development",
        "title": "Full Stack Developer",
        "company": "TechCo",
        "companyLogo": "/public/vite.svg",
        "location": "San Francisco, CA",
        "type": "Full-time",
        "experience": "3-5 years",
        "description": "Exciting opportunity for a skilled Full Stack Developer...",
        "skills": [
            "React",
            "Node.js",
            "MongoDB"
        ],
        "salary": "$80,000 - $100,000",
        "employer_id": 1
    },
    {
        "id": 567,
        "category": "Data Science",
        "title": "Data Scientist",
        "company": "Data Insights",
        "companyLogo": "/public/vite.svg",
        "location": "New York, NY",
        "type": "Full-time",
        "experience": "2-4 years",
        "description": "Join our data science team to analyze and interpret complex data sets...",
        "skills": [
            "Python",
            "Machine Learning",
            "SQL"
        ],
        "salary": "$90,000 - $120,000",
        "employer_id": 1
    },
    {
        "id": 568,
        "category": "Front-End",
        "title": "UI/UX Designer",
        "company": "WebDesign Co",
        "companyLogo": "/images/company/logo.svg",
        "location": "Remote",
        "type": "Full-time",
        "experience": "2-5 years",
        "description": "Design user interfaces for web applications...",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript"
        ],
        "salary": "$70,000 - $90,000",
        "employer_id": 1
    },
    {
        "id": 569,
        "category": "Back-End",
        "title": "Backend Developer",
        "company": "ServerLogic",
        "companyLogo": "/images/company/logo.svg",
        "location": "On-Site",
        "type": "Full-time",
        "experience": "4-6 years",
        "description": "Develop server-side logic and integrate databases...",
        "skills": [
            "Java",
            "Spring Boot",
            "MySQL"
        ],
        "salary": "$85,000 - $110,000",
        "employer_id": 1
    },
    {
        "id": 570,
        "category": "Machine Learning",
        "title": "Machine Learning Eng",
        "company": "ML Innovations",
        "companyLogo": "/images/company/logo.svg",
        "location": "Remote",
        "type": "Full-time",
        "experience": "3-5 years",
        "description": "Apply machine learning techniques to solve complex problems...",
        "skills": [
            "Python",
            "TensorFlow",
            "Scikit-Learn"
        ],
        "salary": "$95,000 - $120,000",
        "employer_id": 1
    },
    {
        "id": 571,
        "category": "Software Development",
        "title": "Full Stack Developer",
        "company": "TechCo",
        "companyLogo": "/public/vite.svg",
        "location": "San Francisco, CA",
        "type": "Full-time",
        "experience": "3-5 years",
        "description": "Exciting opportunity for a skilled Full Stack Developer...",
        "skills": [
            "React",
            "Node.js",
            "MongoDB"
        ],
        "salary": "$80,000 - $100,000",
        "employer_id": 1
    },
    {
        "id": 572,
        "category": "Data Science",
        "title": "Data Scientist",
        "company": "Data Insights",
        "companyLogo": "/public/vite.svg",
        "location": "New York, NY",
        "type": "Full-time",
        "experience": "2-4 years",
        "description": "Join our data science team to analyze and interpret complex data sets...",
        "skills": [
            "Python",
            "Machine Learning",
            "SQL"
        ],
        "salary": "$90,000 - $120,000",
        "employer_id": 1
    },
    {
        "id": 573,
        "category": "Front-End",
        "title": "UI/UX Designer",
        "company": "WebDesign Co",
        "companyLogo": "/public/vite.svg",
        "location": "Remote",
        "type": "Full-time",
        "experience": "2-5 years",
        "description": "Design user interfaces for web applications...",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript"
        ],
        "salary": "$70,000 - $90,000",
        "employer_id": 1
    },
    {
        "id": 574,
        "category": "Back-End",
        "title": "Backend Developer",
        "company": "ServerLogic",
        "companyLogo": "/public/vite.svg",
        "location": "On-Site",
        "type": "Full-time",
        "experience": "4-6 years",
        "description": "Develop server-side logic and integrate databases...",
        "skills": [
            "Java",
            "Spring Boot",
            "MySQL"
        ],
        "salary": "$85,000 - $110,000",
        "employer_id": 1
    },
    {
        "id": 575,
        "category": "Machine Learning",
        "title": "Machine Learning Eng",
        "company": "ML Innovations",
        "companyLogo": "/public/vite.svg",
        "location": "Remote",
        "type": "Full-time",
        "experience": "3-5 years",
        "description": "Apply machine learning techniques to solve complex problems...",
        "skills": [
            "Python",
            "TensorFlow",
            "Scikit-Learn"
        ],
        "salary": "$95,000 - $120,000",
        "employer_id": 1
    },
    {
        "id": 576,
        "category": "Software Development",
        "title": "Full Stack Developer",
        "company": "TechCo",
        "companyLogo": "/public/vite.svg",
        "location": "San Francisco, CA",
        "type": "Full-time",
        "experience": "3-5 years",
        "description": "Exciting opportunity for a skilled Full Stack Developer...",
        "skills": [
            "React",
            "Node.js",
            "MongoDB"
        ],
        "salary": "$80,000 - $100,000",
        "employer_id": 1
    },
    {
        "id": 577,
        "category": "Data Science",
        "title": "Data Scientist",
        "company": "Data Insights",
        "companyLogo": "/public/vite.svg",
        "location": "New York, NY",
        "type": "Full-time",
        "experience": "2-4 years",
        "description": "Join our data science team to analyze and interpret complex data sets...",
        "skills": [
            "Python",
            "Machine Learning",
            "SQL"
        ],
        "salary": "$90,000 - $120,000",
        "employer_id": 1
    },
    {
        "id": 578,
        "category": "Front-End",
        "title": "UI/UX Designer",
        "company": "WebDesign Co",
        "companyLogo": "/images/company/logo.svg",
        "location": "Remote",
        "type": "Full-time",
        "experience": "2-5 years",
        "description": "Design user interfaces for web applications...",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript"
        ],
        "salary": "$70,000 - $90,000",
        "employer_id": 1
    },
    {
        "id": 579,
        "category": "Back-End",
        "title": "Backend Developer",
        "company": "ServerLogic",
        "companyLogo": "/images/company/logo.svg",
        "location": "On-Site",
        "type": "Full-time",
        "experience": "4-6 years",
        "description": "Develop server-side logic and integrate databases...",
        "skills": [
            "Java",
            "Spring Boot",
            "MySQL"
        ],
        "salary": "$85,000 - $110,000",
        "employer_id": 1
    },
    {
        "id": 580,
        "category": "Machine Learning",
        "title": "Machine Learning Eng",
        "company": "ML Innovations",
        "companyLogo": "/images/company/logo.svg",
        "location": "Remote",
        "type": "Full-time",
        "experience": "3-5 years",
        "description": "Apply machine learning techniques to solve complex problems...",
        "skills": [
            "Python",
            "TensorFlow",
            "Scikit-Learn"
        ],
        "salary": "$95,000 - $120,000",
        "employer_id": 1
    },
    {
        "id": 581,
        "category": "Software Development",
        "title": "Full Stack Developer",
        "company": "TechCo",
        "companyLogo": "/public/vite.svg",
        "location": "San Francisco, CA",
        "type": "Full-time",
        "experience": "3-5 years",
        "description": "Exciting opportunity for a skilled Full Stack Developer...",
        "skills": [
            "React",
            "Node.js",
            "MongoDB"
        ],
        "salary": "$80,000 - $100,000",
        "employer_id": 1
    },
    {
        "id": 582,
        "category": "Data Science",
        "title": "Data Scientist",
        "company": "Data Insights",
        "companyLogo": "/public/vite.svg",
        "location": "New York, NY",
        "type": "Full-time",
        "experience": "2-4 years",
        "description": "Join our data science team to analyze and interpret complex data sets...",
        "skills": [
            "Python",
            "Machine Learning",
            "SQL"
        ],
        "salary": "$90,000 - $120,000",
        "employer_id": 1
    },
    {
        "id": 583,
        "category": "Front-End",
        "title": "UI/UX Designer",
        "company": "WebDesign Co",
        "companyLogo": "/public/vite.svg",
        "location": "Remote",
        "type": "Full-time",
        "experience": "2-5 years",
        "description": "Design user interfaces for web applications...",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript"
        ],
        "salary": "$70,000 - $90,000",
        "employer_id": 1
    },
    {
        "id": 584,
        "category": "Back-End",
        "title": "Backend Developer",
        "company": "ServerLogic",
        "companyLogo": "/public/vite.svg",
        "location": "On-Site",
        "type": "Full-time",
        "experience": "4-6 years",
        "description": "Develop server-side logic and integrate databases...",
        "skills": [
            "Java",
            "Spring Boot",
            "MySQL"
        ],
        "salary": "$85,000 - $110,000",
        "employer_id": 1
    },
    {
        "id": 585,
        "category": "Machine Learning",
        "title": "Machine Learning Eng",
        "company": "ML Innovations",
        "companyLogo": "/public/vite.svg",
        "location": "Remote",
        "type": "Full-time",
        "experience": "3-5 years",
        "description": "Apply machine learning techniques to solve complex problems...",
        "skills": [
            "Python",
            "TensorFlow",
            "Scikit-Learn"
        ],
        "salary": "$95,000 - $120,000",
        "employer_id": 1
    },
    {
        "id": 586,
        "category": "Software Development",
        "title": "Full Stack Developer",
        "company": "TechCo",
        "companyLogo": "/public/vite.svg",
        "location": "San Francisco, CA",
        "type": "Full-time",
        "experience": "3-5 years",
        "description": "Exciting opportunity for a skilled Full Stack Developer...",
        "skills": [
            "React",
            "Node.js",
            "MongoDB"
        ],
        "salary": "$80,000 - $100,000",
        "employer_id": 1
    },
    {
        "id": 587,
        "category": "Data Science",
        "title": "Data Scientist",
        "company": "Data Insights",
        "companyLogo": "/public/vite.svg",
        "location": "New York, NY",
        "type": "Full-time",
        "experience": "2-4 years",
        "description": "Join our data science team to analyze and interpret complex data sets...",
        "skills": [
            "Python",
            "Machine Learning",
            "SQL"
        ],
        "salary": "$90,000 - $120,000",
        "employer_id": 1
    },
    {
        "id": 588,
        "category": "Front-End",
        "title": "UI/UX Designer",
        "company": "WebDesign Co",
        "companyLogo": "/images/company/logo.svg",
        "location": "Remote",
        "type": "Full-time",
        "experience": "2-5 years",
        "description": "Design user interfaces for web applications...",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript"
        ],
        "salary": "$70,000 - $90,000",
        "employer_id": 1
    },
    {
        "id": 589,
        "category": "Back-End",
        "title": "Backend Developer",
        "company": "ServerLogic",
        "companyLogo": "/images/company/logo.svg",
        "location": "On-Site",
        "type": "Full-time",
        "experience": "4-6 years",
        "description": "Develop server-side logic and integrate databases...",
        "skills": [
            "Java",
            "Spring Boot",
            "MySQL"
        ],
        "salary": "$85,000 - $110,000",
        "employer_id": 1
    },
    {
        "id": 590,
        "category": "Machine Learning",
        "title": "Machine Learning Eng",
        "company": "ML Innovations",
        "companyLogo": "/images/company/logo.svg",
        "location": "Remote",
        "type": "Full-time",
        "experience": "3-5 years",
        "description": "Apply machine learning techniques to solve complex problems...",
        "skills": [
            "Python",
            "TensorFlow",
            "Scikit-Learn"
        ],
        "salary": "$95,000 - $120,000",
        "employer_id": 1
    },
    {
        "id": 591,
        "category": "Software Development",
        "title": "Full Stack Developer",
        "company": "TechCo",
        "companyLogo": "/public/vite.svg",
        "location": "San Francisco, CA",
        "type": "Full-time",
        "experience": "3-5 years",
        "description": "Exciting opportunity for a skilled Full Stack Developer...",
        "skills": [
            "React",
            "Node.js",
            "MongoDB"
        ],
        "salary": "$80,000 - $100,000",
        "employer_id": 1
    },
    {
        "id": 592,
        "category": "Data Science",
        "title": "Data Scientist",
        "company": "Data Insights",
        "companyLogo": "/public/vite.svg",
        "location": "New York, NY",
        "type": "Full-time",
        "experience": "2-4 years",
        "description": "Join our data science team to analyze and interpret complex data sets...",
        "skills": [
            "Python",
            "Machine Learning",
            "SQL"
        ],
        "salary": "$90,000 - $120,000",
        "employer_id": 1
    },
    {
        "id": 593,
        "category": "Front-End",
        "title": "UI/UX Designer",
        "company": "WebDesign Co",
        "companyLogo": "/public/vite.svg",
        "location": "Remote",
        "type": "Full-time",
        "experience": "2-5 years",
        "description": "Design user interfaces for web applications...",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript"
        ],
        "salary": "$70,000 - $90,000",
        "employer_id": 1
    },
    {
        "id": 594,
        "category": "Back-End",
        "title": "Backend Developer",
        "company": "ServerLogic",
        "companyLogo": "/public/vite.svg",
        "location": "On-Site",
        "type": "Full-time",
        "experience": "4-6 years",
        "description": "Develop server-side logic and integrate databases...",
        "skills": [
            "Java",
            "Spring Boot",
            "MySQL"
        ],
        "salary": "$85,000 - $110,000",
        "employer_id": 1
    },
    {
        "id": 595,
        "category": "Machine Learning",
        "title": "Machine Learning Eng",
        "company": "ML Innovations",
        "companyLogo": "/public/vite.svg",
        "location": "Remote",
        "type": "Full-time",
        "experience": "3-5 years",
        "description": "Apply machine learning techniques to solve complex problems...",
        "skills": [
            "Python",
            "TensorFlow",
            "Scikit-Learn"
        ],
        "salary": "$95,000 - $120,000",
        "employer_id": 1
    },
    {
        "id": 596,
        "category": "Software Development",
        "title": "Full Stack Developer",
        "company": "TechCo",
        "companyLogo": "/public/vite.svg",
        "location": "San Francisco, CA",
        "type": "Full-time",
        "experience": "3-5 years",
        "description": "Exciting opportunity for a skilled Full Stack Developer...",
        "skills": [
            "React",
            "Node.js",
            "MongoDB"
        ],
        "salary": "$80,000 - $100,000",
        "employer_id": 1
    },
    {
        "id": 597,
        "category": "Data Science",
        "title": "Data Scientist",
        "company": "Data Insights",
        "companyLogo": "/public/vite.svg",
        "location": "New York, NY",
        "type": "Full-time",
        "experience": "2-4 years",
        "description": "Join our data science team to analyze and interpret complex data sets...",
        "skills": [
            "Python",
            "Machine Learning",
            "SQL"
        ],
        "salary": "$90,000 - $120,000",
        "employer_id": 1
    },
    {
        "id": 598,
        "category": "Front-End",
        "title": "UI/UX Designer",
        "company": "WebDesign Co",
        "companyLogo": "/images/company/logo.svg",
        "location": "Remote",
        "type": "Full-time",
        "experience": "2-5 years",
        "description": "Design user interfaces for web applications...",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript"
        ],
        "salary": "$70,000 - $90,000",
        "employer_id": 1
    },
    {
        "id": 599,
        "category": "Back-End",
        "title": "Backend Developer",
        "company": "ServerLogic",
        "companyLogo": "/images/company/logo.svg",
        "location": "On-Site",
        "type": "Full-time",
        "experience": "4-6 years",
        "description": "Develop server-side logic and integrate databases...",
        "skills": [
            "Java",
            "Spring Boot",
            "MySQL"
        ],
        "salary": "$85,000 - $110,000",
        "employer_id": 1
    },
    {
        "id": 600,
        "category": "Machine Learning",
        "title": "Machine Learning Eng",
        "company": "ML Innovations",
        "companyLogo": "/images/company/logo.svg",
        "location": "Remote",
        "type": "Full-time",
        "experience": "3-5 years",
        "description": "Apply machine learning techniques to solve complex problems...",
        "skills": [
            "Python",
            "TensorFlow",
            "Scikit-Learn"
        ],
        "salary": "$95,000 - $120,000",
        "employer_id": 1
    },
    {
        "id": 601,
        "category": "Software Development",
        "title": "Full Stack Developer",
        "company": "TechCo",
        "companyLogo": "/public/vite.svg",
        "location": "San Francisco, CA",
        "type": "Full-time",
        "experience": "3-5 years",
        "description": "Exciting opportunity for a skilled Full Stack Developer...",
        "skills": [
            "React",
            "Node.js",
            "MongoDB"
        ],
        "salary": "$80,000 - $100,000",
        "employer_id": 1
    },
    {
        "id": 602,
        "category": "Data Science",
        "title": "Data Scientist",
        "company": "Data Insights",
        "companyLogo": "/public/vite.svg",
        "location": "New York, NY",
        "type": "Full-time",
        "experience": "2-4 years",
        "description": "Join our data science team to analyze and interpret complex data sets...",
        "skills": [
            "Python",
            "Machine Learning",
            "SQL"
        ],
        "salary": "$90,000 - $120,000",
        "employer_id": 1
    },
    {
        "id": 603,
        "category": "Front-End",
        "title": "UI/UX Designer",
        "company": "WebDesign Co",
        "companyLogo": "/public/vite.svg",
        "location": "Remote",
        "type": "Full-time",
        "experience": "2-5 years",
        "description": "Design user interfaces for web applications...",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript"
        ],
        "salary": "$70,000 - $90,000",
        "employer_id": 1
    },
    {
        "id": 604,
        "category": "Back-End",
        "title": "Backend Developer",
        "company": "ServerLogic",
        "companyLogo": "/public/vite.svg",
        "location": "On-Site",
        "type": "Full-time",
        "experience": "4-6 years",
        "description": "Develop server-side logic and integrate databases...",
        "skills": [
            "Java",
            "Spring Boot",
            "MySQL"
        ],
        "salary": "$85,000 - $110,000",
        "employer_id": 1
    },
    {
        "id": 605,
        "category": "Machine Learning",
        "title": "Machine Learning Eng",
        "company": "ML Innovations",
        "companyLogo": "/public/vite.svg",
        "location": "Remote",
        "type": "Full-time",
        "experience": "3-5 years",
        "description": "Apply machine learning techniques to solve complex problems...",
        "skills": [
            "Python",
            "TensorFlow",
            "Scikit-Learn"
        ],
        "salary": "$95,000 - $120,000",
        "employer_id": 1
    },
    {
        "id": 606,
        "category": "Software Development",
        "title": "Full Stack Developer",
        "company": "TechCo",
        "companyLogo": "/public/vite.svg",
        "location": "San Francisco, CA",
        "type": "Full-time",
        "experience": "3-5 years",
        "description": "Exciting opportunity for a skilled Full Stack Developer...",
        "skills": [
            "React",
            "Node.js",
            "MongoDB"
        ],
        "salary": "$80,000 - $100,000",
        "employer_id": 1
    },
    {
        "id": 607,
        "category": "Data Science",
        "title": "Data Scientist",
        "company": "Data Insights",
        "companyLogo": "/public/vite.svg",
        "location": "New York, NY",
        "type": "Full-time",
        "experience": "2-4 years",
        "description": "Join our data science team to analyze and interpret complex data sets...",
        "skills": [
            "Python",
            "Machine Learning",
            "SQL"
        ],
        "salary": "$90,000 - $120,000",
        "employer_id": 1
    },
    {
        "id": 608,
        "category": "Front-End",
        "title": "UI/UX Designer",
        "company": "WebDesign Co",
        "companyLogo": "/images/company/logo.svg",
        "location": "Remote",
        "type": "Full-time",
        "experience": "2-5 years",
        "description": "Design user interfaces for web applications...",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript"
        ],
        "salary": "$70,000 - $90,000",
        "employer_id": 1
    },
    {
        "id": 609,
        "category": "Back-End",
        "title": "Backend Developer",
        "company": "ServerLogic",
        "companyLogo": "/images/company/logo.svg",
        "location": "On-Site",
        "type": "Full-time",
        "experience": "4-6 years",
        "description": "Develop server-side logic and integrate databases...",
        "skills": [
            "Java",
            "Spring Boot",
            "MySQL"
        ],
        "salary": "$85,000 - $110,000",
        "employer_id": 1
    },
    {
        "id": 610,
        "category": "Machine Learning",
        "title": "Machine Learning Eng",
        "company": "ML Innovations",
        "companyLogo": "/images/company/logo.svg",
        "location": "Remote",
        "type": "Full-time",
        "experience": "3-5 years",
        "description": "Apply machine learning techniques to solve complex problems...",
        "skills": [
            "Python",
            "TensorFlow",
            "Scikit-Learn"
        ],
        "salary": "$95,000 - $120,000",
        "employer_id": 1
    },
    {
        "id": 611,
        "category": "Software Development",
        "title": "Full Stack Developer",
        "company": "TechCo",
        "companyLogo": "/public/vite.svg",
        "location": "San Francisco, CA",
        "type": "Full-time",
        "experience": "3-5 years",
        "description": "Exciting opportunity for a skilled Full Stack Developer...",
        "skills": [
            "React",
            "Node.js",
            "MongoDB"
        ],
        "salary": "$80,000 - $100,000",
        "employer_id": 1
    },
    {
        "id": 612,
        "category": "Data Science",
        "title": "Data Scientist",
        "company": "Data Insights",
        "companyLogo": "/public/vite.svg",
        "location": "New York, NY",
        "type": "Full-time",
        "experience": "2-4 years",
        "description": "Join our data science team to analyze and interpret complex data sets...",
        "skills": [
            "Python",
            "Machine Learning",
            "SQL"
        ],
        "salary": "$90,000 - $120,000",
        "employer_id": 1
    },
    {
        "id": 613,
        "category": "Front-End",
        "title": "UI/UX Designer",
        "company": "WebDesign Co",
        "companyLogo": "/public/vite.svg",
        "location": "Remote",
        "type": "Full-time",
        "experience": "2-5 years",
        "description": "Design user interfaces for web applications...",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript"
        ],
        "salary": "$70,000 - $90,000",
        "employer_id": 1
    },
    {
        "id": 614,
        "category": "Back-End",
        "title": "Backend Developer",
        "company": "ServerLogic",
        "companyLogo": "/public/vite.svg",
        "location": "On-Site",
        "type": "Full-time",
        "experience": "4-6 years",
        "description": "Develop server-side logic and integrate databases...",
        "skills": [
            "Java",
            "Spring Boot",
            "MySQL"
        ],
        "salary": "$85,000 - $110,000",
        "employer_id": 1
    },
    {
        "id": 615,
        "category": "Machine Learning",
        "title": "Machine Learning Eng",
        "company": "ML Innovations",
        "companyLogo": "/public/vite.svg",
        "location": "Remote",
        "type": "Full-time",
        "experience": "3-5 years",
        "description": "Apply machine learning techniques to solve complex problems...",
        "skills": [
            "Python",
            "TensorFlow",
            "Scikit-Learn"
        ],
        "salary": "$95,000 - $120,000",
        "employer_id": 1
    },
    {
        "id": 616,
        "category": "Software Development",
        "title": "Full Stack Developer",
        "company": "TechCo",
        "companyLogo": "/public/vite.svg",
        "location": "San Francisco, CA",
        "type": "Full-time",
        "experience": "3-5 years",
        "description": "Exciting opportunity for a skilled Full Stack Developer...",
        "skills": [
            "React",
            "Node.js",
            "MongoDB"
        ],
        "salary": "$80,000 - $100,000",
        "employer_id": 1
    },
    {
        "id": 617,
        "category": "Data Science",
        "title": "Data Scientist",
        "company": "Data Insights",
        "companyLogo": "/public/vite.svg",
        "location": "New York, NY",
        "type": "Full-time",
        "experience": "2-4 years",
        "description": "Join our data science team to analyze and interpret complex data sets...",
        "skills": [
            "Python",
            "Machine Learning",
            "SQL"
        ],
        "salary": "$90,000 - $120,000",
        "employer_id": 1
    },
    {
        "id": 618,
        "category": "Front-End",
        "title": "UI/UX Designer",
        "company": "WebDesign Co",
        "companyLogo": "/images/company/logo.svg",
        "location": "Remote",
        "type": "Full-time",
        "experience": "2-5 years",
        "description": "Design user interfaces for web applications...",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript"
        ],
        "salary": "$70,000 - $90,000",
        "employer_id": 1
    },
    {
        "id": 619,
        "category": "Back-End",
        "title": "Backend Developer",
        "company": "ServerLogic",
        "companyLogo": "/images/company/logo.svg",
        "location": "On-Site",
        "type": "Full-time",
        "experience": "4-6 years",
        "description": "Develop server-side logic and integrate databases...",
        "skills": [
            "Java",
            "Spring Boot",
            "MySQL"
        ],
        "salary": "$85,000 - $110,000",
        "employer_id": 1
    },
    {
        "id": 620,
        "category": "Machine Learning",
        "title": "Machine Learning Eng",
        "company": "ML Innovations",
        "companyLogo": "/images/company/logo.svg",
        "location": "Remote",
        "type": "Full-time",
        "experience": "3-5 years",
        "description": "Apply machine learning techniques to solve complex problems...",
        "skills": [
            "Python",
            "TensorFlow",
            "Scikit-Learn"
        ],
        "salary": "$95,000 - $120,000",
        "employer_id": 1
    },
    {
        "id": 621,
        "category": "Software Development",
        "title": "Full Stack Developer",
        "company": "TechCo",
        "companyLogo": "/public/vite.svg",
        "location": "San Francisco, CA",
        "type": "Full-time",
        "experience": "3-5 years",
        "description": "Exciting opportunity for a skilled Full Stack Developer...",
        "skills": [
            "React",
            "Node.js",
            "MongoDB"
        ],
        "salary": "$80,000 - $100,000",
        "employer_id": 1
    },
    {
        "id": 622,
        "category": "Data Science",
        "title": "Data Scientist",
        "company": "Data Insights",
        "companyLogo": "/public/vite.svg",
        "location": "New York, NY",
        "type": "Full-time",
        "experience": "2-4 years",
        "description": "Join our data science team to analyze and interpret complex data sets...",
        "skills": [
            "Python",
            "Machine Learning",
            "SQL"
        ],
        "salary": "$90,000 - $120,000",
        "employer_id": 1
    },
    {
        "id": 623,
        "category": "Front-End",
        "title": "UI/UX Designer",
        "company": "WebDesign Co",
        "companyLogo": "/public/vite.svg",
        "location": "Remote",
        "type": "Full-time",
        "experience": "2-5 years",
        "description": "Design user interfaces for web applications...",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript"
        ],
        "salary": "$70,000 - $90,000",
        "employer_id": 1
    },
    {
        "id": 624,
        "category": "Back-End",
        "title": "Backend Developer",
        "company": "ServerLogic",
        "companyLogo": "/public/vite.svg",
        "location": "On-Site",
        "type": "Full-time",
        "experience": "4-6 years",
        "description": "Develop server-side logic and integrate databases...",
        "skills": [
            "Java",
            "Spring Boot",
            "MySQL"
        ],
        "salary": "$85,000 - $110,000",
        "employer_id": 1
    },
    {
        "id": 625,
        "category": "Machine Learning",
        "title": "Machine Learning Eng",
        "company": "ML Innovations",
        "companyLogo": "/public/vite.svg",
        "location": "Remote",
        "type": "Full-time",
        "experience": "3-5 years",
        "description": "Apply machine learning techniques to solve complex problems...",
        "skills": [
            "Python",
            "TensorFlow",
            "Scikit-Learn"
        ],
        "salary": "$95,000 - $120,000",
        "employer_id": 1
    },
    {
        "id": 626,
        "category": "Software Development",
        "title": "Full Stack Developer",
        "company": "TechCo",
        "companyLogo": "/public/vite.svg",
        "location": "San Francisco, CA",
        "type": "Full-time",
        "experience": "3-5 years",
        "description": "Exciting opportunity for a skilled Full Stack Developer...",
        "skills": [
            "React",
            "Node.js",
            "MongoDB"
        ],
        "salary": "$80,000 - $100,000",
        "employer_id": 1
    },
    {
        "id": 627,
        "category": "Data Science",
        "title": "Data Scientist",
        "company": "Data Insights",
        "companyLogo": "/public/vite.svg",
        "location": "New York, NY",
        "type": "Full-time",
        "experience": "2-4 years",
        "description": "Join our data science team to analyze and interpret complex data sets...",
        "skills": [
            "Python",
            "Machine Learning",
            "SQL"
        ],
        "salary": "$90,000 - $120,000",
        "employer_id": 1
    },
    {
        "id": 628,
        "category": "Front-End",
        "title": "UI/UX Designer",
        "company": "WebDesign Co",
        "companyLogo": "/images/company/logo.svg",
        "location": "Remote",
        "type": "Full-time",
        "experience": "2-5 years",
        "description": "Design user interfaces for web applications...",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript"
        ],
        "salary": "$70,000 - $90,000",
        "employer_id": 1
    },
    {
        "id": 629,
        "category": "Back-End",
        "title": "Backend Developer",
        "company": "ServerLogic",
        "companyLogo": "/images/company/logo.svg",
        "location": "On-Site",
        "type": "Full-time",
        "experience": "4-6 years",
        "description": "Develop server-side logic and integrate databases...",
        "skills": [
            "Java",
            "Spring Boot",
            "MySQL"
        ],
        "salary": "$85,000 - $110,000",
        "employer_id": 1
    },
    {
        "id": 630,
        "category": "Machine Learning",
        "title": "Machine Learning Eng",
        "company": "ML Innovations",
        "companyLogo": "/images/company/logo.svg",
        "location": "Remote",
        "type": "Full-time",
        "experience": "3-5 years",
        "description": "Apply machine learning techniques to solve complex problems...",
        "skills": [
            "Python",
            "TensorFlow",
            "Scikit-Learn"
        ],
        "salary": "$95,000 - $120,000",
        "employer_id": 1
    },
    {
        "id": 631,
        "category": "Software Development",
        "title": "Full Stack Developer",
        "company": "TechCo",
        "companyLogo": "/public/vite.svg",
        "location": "San Francisco, CA",
        "type": "Full-time",
        "experience": "3-5 years",
        "description": "Exciting opportunity for a skilled Full Stack Developer...",
        "skills": [
            "React",
            "Node.js",
            "MongoDB"
        ],
        "salary": "$80,000 - $100,000",
        "employer_id": 1
    },
    {
        "id": 632,
        "category": "Data Science",
        "title": "Data Scientist",
        "company": "Data Insights",
        "companyLogo": "/public/vite.svg",
        "location": "New York, NY",
        "type": "Full-time",
        "experience": "2-4 years",
        "description": "Join our data science team to analyze and interpret complex data sets...",
        "skills": [
            "Python",
            "Machine Learning",
            "SQL"
        ],
        "salary": "$90,000 - $120,000",
        "employer_id": 1
    },
    {
        "id": 633,
        "category": "Front-End",
        "title": "UI/UX Designer",
        "company": "WebDesign Co",
        "companyLogo": "/public/vite.svg",
        "location": "Remote",
        "type": "Full-time",
        "experience": "2-5 years",
        "description": "Design user interfaces for web applications...",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript"
        ],
        "salary": "$70,000 - $90,000",
        "employer_id": 1
    },
    {
        "id": 634,
        "category": "Back-End",
        "title": "Backend Developer",
        "company": "ServerLogic",
        "companyLogo": "/public/vite.svg",
        "location": "On-Site",
        "type": "Full-time",
        "experience": "4-6 years",
        "description": "Develop server-side logic and integrate databases...",
        "skills": [
            "Java",
            "Spring Boot",
            "MySQL"
        ],
        "salary": "$85,000 - $110,000",
        "employer_id": 1
    },
    {
        "id": 635,
        "category": "Machine Learning",
        "title": "Machine Learning Eng",
        "company": "ML Innovations",
        "companyLogo": "/public/vite.svg",
        "location": "Remote",
        "type": "Full-time",
        "experience": "3-5 years",
        "description": "Apply machine learning techniques to solve complex problems...",
        "skills": [
            "Python",
            "TensorFlow",
            "Scikit-Learn"
        ],
        "salary": "$95,000 - $120,000",
        "employer_id": 1
    },
    {
        "id": 636,
        "category": "Software Development",
        "title": "Full Stack Developer",
        "company": "TechCo",
        "companyLogo": "/public/vite.svg",
        "location": "San Francisco, CA",
        "type": "Full-time",
        "experience": "3-5 years",
        "description": "Exciting opportunity for a skilled Full Stack Developer...",
        "skills": [
            "React",
            "Node.js",
            "MongoDB"
        ],
        "salary": "$80,000 - $100,000",
        "employer_id": 1
    },
    {
        "id": 637,
        "category": "Data Science",
        "title": "Data Scientist",
        "company": "Data Insights",
        "companyLogo": "/public/vite.svg",
        "location": "New York, NY",
        "type": "Full-time",
        "experience": "2-4 years",
        "description": "Join our data science team to analyze and interpret complex data sets...",
        "skills": [
            "Python",
            "Machine Learning",
            "SQL"
        ],
        "salary": "$90,000 - $120,000",
        "employer_id": 1
    },
    {
        "id": 638,
        "category": "Front-End",
        "title": "UI/UX Designer",
        "company": "WebDesign Co",
        "companyLogo": "/images/company/logo.svg",
        "location": "Remote",
        "type": "Full-time",
        "experience": "2-5 years",
        "description": "Design user interfaces for web applications...",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript"
        ],
        "salary": "$70,000 - $90,000",
        "employer_id": 1
    },
    {
        "id": 639,
        "category": "Back-End",
        "title": "Backend Developer",
        "company": "ServerLogic",
        "companyLogo": "/images/company/logo.svg",
        "location": "On-Site",
        "type": "Full-time",
        "experience": "4-6 years",
        "description": "Develop server-side logic and integrate databases...",
        "skills": [
            "Java",
            "Spring Boot",
            "MySQL"
        ],
        "salary": "$85,000 - $110,000",
        "employer_id": 1
    },
    {
        "id": 640,
        "category": "Machine Learning",
        "title": "Machine Learning Eng",
        "company": "ML Innovations",
        "companyLogo": "/images/company/logo.svg",
        "location": "Remote",
        "type": "Full-time",
        "experience": "3-5 years",
        "description": "Apply machine learning techniques to solve complex problems...",
        "skills": [
            "Python",
            "TensorFlow",
            "Scikit-Learn"
        ],
        "salary": "$95,000 - $120,000",
        "employer_id": 1
    },
    {
        "id": 641,
        "category": "Software Development",
        "title": "Full Stack Developer",
        "company": "TechCo",
        "companyLogo": "/public/vite.svg",
        "location": "San Francisco, CA",
        "type": "Full-time",
        "experience": "3-5 years",
        "description": "Exciting opportunity for a skilled Full Stack Developer...",
        "skills": [
            "React",
            "Node.js",
            "MongoDB"
        ],
        "salary": "$80,000 - $100,000",
        "employer_id": 1
    },
    {
        "id": 642,
        "category": "Data Science",
        "title": "Data Scientist",
        "company": "Data Insights",
        "companyLogo": "/public/vite.svg",
        "location": "New York, NY",
        "type": "Full-time",
        "experience": "2-4 years",
        "description": "Join our data science team to analyze and interpret complex data sets...",
        "skills": [
            "Python",
            "Machine Learning",
            "SQL"
        ],
        "salary": "$90,000 - $120,000",
        "employer_id": 1
    },
    {
        "id": 643,
        "category": "Front-End",
        "title": "UI/UX Designer",
        "company": "WebDesign Co",
        "companyLogo": "/public/vite.svg",
        "location": "Remote",
        "type": "Full-time",
        "experience": "2-5 years",
        "description": "Design user interfaces for web applications...",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript"
        ],
        "salary": "$70,000 - $90,000",
        "employer_id": 1
    },
    {
        "id": 644,
        "category": "Back-End",
        "title": "Backend Developer",
        "company": "ServerLogic",
        "companyLogo": "/public/vite.svg",
        "location": "On-Site",
        "type": "Full-time",
        "experience": "4-6 years",
        "description": "Develop server-side logic and integrate databases...",
        "skills": [
            "Java",
            "Spring Boot",
            "MySQL"
        ],
        "salary": "$85,000 - $110,000",
        "employer_id": 1
    },
    {
        "id": 645,
        "category": "Machine Learning",
        "title": "Machine Learning Eng",
        "company": "ML Innovations",
        "companyLogo": "/public/vite.svg",
        "location": "Remote",
        "type": "Full-time",
        "experience": "3-5 years",
        "description": "Apply machine learning techniques to solve complex problems...",
        "skills": [
            "Python",
            "TensorFlow",
            "Scikit-Learn"
        ],
        "salary": "$95,000 - $120,000",
        "employer_id": 1
    },
    {
        "id": 646,
        "category": "Software Development",
        "title": "Full Stack Developer",
        "company": "TechCo",
        "companyLogo": "/public/vite.svg",
        "location": "San Francisco, CA",
        "type": "Full-time",
        "experience": "3-5 years",
        "description": "Exciting opportunity for a skilled Full Stack Developer...",
        "skills": [
            "React",
            "Node.js",
            "MongoDB"
        ],
        "salary": "$80,000 - $100,000",
        "employer_id": 1
    },
    {
        "id": 647,
        "category": "Data Science",
        "title": "Data Scientist",
        "company": "Data Insights",
        "companyLogo": "/public/vite.svg",
        "location": "New York, NY",
        "type": "Full-time",
        "experience": "2-4 years",
        "description": "Join our data science team to analyze and interpret complex data sets...",
        "skills": [
            "Python",
            "Machine Learning",
            "SQL"
        ],
        "salary": "$90,000 - $120,000",
        "employer_id": 1
    },
    {
        "id": 648,
        "category": "Front-End",
        "title": "UI/UX Designer",
        "company": "WebDesign Co",
        "companyLogo": "/images/company/logo.svg",
        "location": "Remote",
        "type": "Full-time",
        "experience": "2-5 years",
        "description": "Design user interfaces for web applications...",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript"
        ],
        "salary": "$70,000 - $90,000",
        "employer_id": 1
    },
    {
        "id": 649,
        "category": "Back-End",
        "title": "Backend Developer",
        "company": "ServerLogic",
        "companyLogo": "/images/company/logo.svg",
        "location": "On-Site",
        "type": "Full-time",
        "experience": "4-6 years",
        "description": "Develop server-side logic and integrate databases...",
        "skills": [
            "Java",
            "Spring Boot",
            "MySQL"
        ],
        "salary": "$85,000 - $110,000",
        "employer_id": 1
    },
    {
        "id": 650,
        "category": "Machine Learning",
        "title": "Machine Learning Eng",
        "company": "ML Innovations",
        "companyLogo": "/images/company/logo.svg",
        "location": "Remote",
        "type": "Full-time",
        "experience": "3-5 years",
        "description": "Apply machine learning techniques to solve complex problems...",
        "skills": [
            "Python",
            "TensorFlow",
            "Scikit-Learn"
        ],
        "salary": "$95,000 - $120,000",
        "employer_id": 1
    },
    {
        "id": 651,
        "category": "Software Development",
        "title": "Full Stack Developer",
        "company": "TechCo",
        "companyLogo": "/public/vite.svg",
        "location": "San Francisco, CA",
        "type": "Full-time",
        "experience": "3-5 years",
        "description": "Exciting opportunity for a skilled Full Stack Developer...",
        "skills": [
            "React",
            "Node.js",
            "MongoDB"
        ],
        "salary": "$80,000 - $100,000",
        "employer_id": 1
    },
    {
        "id": 652,
        "category": "Data Science",
        "title": "Data Scientist",
        "company": "Data Insights",
        "companyLogo": "/public/vite.svg",
        "location": "New York, NY",
        "type": "Full-time",
        "experience": "2-4 years",
        "description": "Join our data science team to analyze and interpret complex data sets...",
        "skills": [
            "Python",
            "Machine Learning",
            "SQL"
        ],
        "salary": "$90,000 - $120,000",
        "employer_id": 1
    },
    {
        "id": 653,
        "category": "Front-End",
        "title": "UI/UX Designer",
        "company": "WebDesign Co",
        "companyLogo": "/public/vite.svg",
        "location": "Remote",
        "type": "Full-time",
        "experience": "2-5 years",
        "description": "Design user interfaces for web applications...",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript"
        ],
        "salary": "$70,000 - $90,000",
        "employer_id": 1
    },
    {
        "id": 654,
        "category": "Back-End",
        "title": "Backend Developer",
        "company": "ServerLogic",
        "companyLogo": "/public/vite.svg",
        "location": "On-Site",
        "type": "Full-time",
        "experience": "4-6 years",
        "description": "Develop server-side logic and integrate databases...",
        "skills": [
            "Java",
            "Spring Boot",
            "MySQL"
        ],
        "salary": "$85,000 - $110,000",
        "employer_id": 1
    },
    {
        "id": 655,
        "category": "Machine Learning",
        "title": "Machine Learning Eng",
        "company": "ML Innovations",
        "companyLogo": "/public/vite.svg",
        "location": "Remote",
        "type": "Full-time",
        "experience": "3-5 years",
        "description": "Apply machine learning techniques to solve complex problems...",
        "skills": [
            "Python",
            "TensorFlow",
            "Scikit-Learn"
        ],
        "salary": "$95,000 - $120,000",
        "employer_id": 1
    },
    {
        "id": 656,
        "category": "Software Development",
        "title": "Full Stack Developer",
        "company": "TechCo",
        "companyLogo": "/public/vite.svg",
        "location": "San Francisco, CA",
        "type": "Full-time",
        "experience": "3-5 years",
        "description": "Exciting opportunity for a skilled Full Stack Developer...",
        "skills": [
            "React",
            "Node.js",
            "MongoDB"
        ],
        "salary": "$80,000 - $100,000",
        "employer_id": 1
    },
    {
        "id": 657,
        "category": "Data Science",
        "title": "Data Scientist",
        "company": "Data Insights",
        "companyLogo": "/public/vite.svg",
        "location": "New York, NY",
        "type": "Full-time",
        "experience": "2-4 years",
        "description": "Join our data science team to analyze and interpret complex data sets...",
        "skills": [
            "Python",
            "Machine Learning",
            "SQL"
        ],
        "salary": "$90,000 - $120,000",
        "employer_id": 1
    },
    {
        "id": 658,
        "category": "Front-End",
        "title": "UI/UX Designer",
        "company": "WebDesign Co",
        "companyLogo": "/images/company/logo.svg",
        "location": "Remote",
        "type": "Full-time",
        "experience": "2-5 years",
        "description": "Design user interfaces for web applications...",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript"
        ],
        "salary": "$70,000 - $90,000",
        "employer_id": 1
    },
    {
        "id": 659,
        "category": "Back-End",
        "title": "Backend Developer",
        "company": "ServerLogic",
        "companyLogo": "/images/company/logo.svg",
        "location": "On-Site",
        "type": "Full-time",
        "experience": "4-6 years",
        "description": "Develop server-side logic and integrate databases...",
        "skills": [
            "Java",
            "Spring Boot",
            "MySQL"
        ],
        "salary": "$85,000 - $110,000",
        "employer_id": 1
    },
    {
        "id": 660,
        "category": "Machine Learning",
        "title": "Machine Learning Eng",
        "company": "ML Innovations",
        "companyLogo": "/images/company/logo.svg",
        "location": "Remote",
        "type": "Full-time",
        "experience": "3-5 years",
        "description": "Apply machine learning techniques to solve complex problems...",
        "skills": [
            "Python",
            "TensorFlow",
            "Scikit-Learn"
        ],
        "salary": "$95,000 - $120,000",
        "employer_id": 1
    },
    {
        "id": 661,
        "category": "Software Development",
        "title": "Full Stack Developer",
        "company": "TechCo",
        "companyLogo": "/public/vite.svg",
        "location": "San Francisco, CA",
        "type": "Full-time",
        "experience": "3-5 years",
        "description": "Exciting opportunity for a skilled Full Stack Developer...",
        "skills": [
            "React",
            "Node.js",
            "MongoDB"
        ],
        "salary": "$80,000 - $100,000",
        "employer_id": 1
    },
    {
        "id": 662,
        "category": "Data Science",
        "title": "Data Scientist",
        "company": "Data Insights",
        "companyLogo": "/public/vite.svg",
        "location": "New York, NY",
        "type": "Full-time",
        "experience": "2-4 years",
        "description": "Join our data science team to analyze and interpret complex data sets...",
        "skills": [
            "Python",
            "Machine Learning",
            "SQL"
        ],
        "salary": "$90,000 - $120,000",
        "employer_id": 1
    },
    {
        "id": 663,
        "category": "Front-End",
        "title": "UI/UX Designer",
        "company": "WebDesign Co",
        "companyLogo": "/public/vite.svg",
        "location": "Remote",
        "type": "Full-time",
        "experience": "2-5 years",
        "description": "Design user interfaces for web applications...",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript"
        ],
        "salary": "$70,000 - $90,000",
        "employer_id": 1
    },
    {
        "id": 664,
        "category": "Back-End",
        "title": "Backend Developer",
        "company": "ServerLogic",
        "companyLogo": "/public/vite.svg",
        "location": "On-Site",
        "type": "Full-time",
        "experience": "4-6 years",
        "description": "Develop server-side logic and integrate databases...",
        "skills": [
            "Java",
            "Spring Boot",
            "MySQL"
        ],
        "salary": "$85,000 - $110,000",
        "employer_id": 1
    },
    {
        "id": 665,
        "category": "Machine Learning",
        "title": "Machine Learning Eng",
        "company": "ML Innovations",
        "companyLogo": "/public/vite.svg",
        "location": "Remote",
        "type": "Full-time",
        "experience": "3-5 years",
        "description": "Apply machine learning techniques to solve complex problems...",
        "skills": [
            "Python",
            "TensorFlow",
            "Scikit-Learn"
        ],
        "salary": "$95,000 - $120,000",
        "employer_id": 1
    },
    {
        "id": 666,
        "category": "Software Development",
        "title": "Full Stack Developer",
        "company": "TechCo",
        "companyLogo": "/public/vite.svg",
        "location": "San Francisco, CA",
        "type": "Full-time",
        "experience": "3-5 years",
        "description": "Exciting opportunity for a skilled Full Stack Developer...",
        "skills": [
            "React",
            "Node.js",
            "MongoDB"
        ],
        "salary": "$80,000 - $100,000",
        "employer_id": 1
    },
    {
        "id": 667,
        "category": "Data Science",
        "title": "Data Scientist",
        "company": "Data Insights",
        "companyLogo": "/public/vite.svg",
        "location": "New York, NY",
        "type": "Full-time",
        "experience": "2-4 years",
        "description": "Join our data science team to analyze and interpret complex data sets...",
        "skills": [
            "Python",
            "Machine Learning",
            "SQL"
        ],
        "salary": "$90,000 - $120,000",
        "employer_id": 1
    },
    {
        "id": 668,
        "category": "Front-End",
        "title": "UI/UX Designer",
        "company": "WebDesign Co",
        "companyLogo": "/images/company/logo.svg",
        "location": "Remote",
        "type": "Full-time",
        "experience": "2-5 years",
        "description": "Design user interfaces for web applications...",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript"
        ],
        "salary": "$70,000 - $90,000",
        "employer_id": 1
    },
    {
        "id": 669,
        "category": "Back-End",
        "title": "Backend Developer",
        "company": "ServerLogic",
        "companyLogo": "/images/company/logo.svg",
        "location": "On-Site",
        "type": "Full-time",
        "experience": "4-6 years",
        "description": "Develop server-side logic and integrate databases...",
        "skills": [
            "Java",
            "Spring Boot",
            "MySQL"
        ],
        "salary": "$85,000 - $110,000",
        "employer_id": 1
    },
    {
        "id": 670,
        "category": "Machine Learning",
        "title": "Machine Learning Eng",
        "company": "ML Innovations",
        "companyLogo": "/images/company/logo.svg",
        "location": "Remote",
        "type": "Full-time",
        "experience": "3-5 years",
        "description": "Apply machine learning techniques to solve complex problems...",
        "skills": [
            "Python",
            "TensorFlow",
            "Scikit-Learn"
        ],
        "salary": "$95,000 - $120,000",
        "employer_id": 1
    },
    {
        "id": 671,
        "category": "Software Development",
        "title": "Full Stack Developer",
        "company": "TechCo",
        "companyLogo": "/public/vite.svg",
        "location": "San Francisco, CA",
        "type": "Full-time",
        "experience": "3-5 years",
        "description": "Exciting opportunity for a skilled Full Stack Developer...",
        "skills": [
            "React",
            "Node.js",
            "MongoDB"
        ],
        "salary": "$80,000 - $100,000",
        "employer_id": 1
    },
    {
        "id": 672,
        "category": "Data Science",
        "title": "Data Scientist",
        "company": "Data Insights",
        "companyLogo": "/public/vite.svg",
        "location": "New York, NY",
        "type": "Full-time",
        "experience": "2-4 years",
        "description": "Join our data science team to analyze and interpret complex data sets...",
        "skills": [
            "Python",
            "Machine Learning",
            "SQL"
        ],
        "salary": "$90,000 - $120,000",
        "employer_id": 1
    },
    {
        "id": 673,
        "category": "Front-End",
        "title": "UI/UX Designer",
        "company": "WebDesign Co",
        "companyLogo": "/public/vite.svg",
        "location": "Remote",
        "type": "Full-time",
        "experience": "2-5 years",
        "description": "Design user interfaces for web applications...",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript"
        ],
        "salary": "$70,000 - $90,000",
        "employer_id": 1
    },
    {
        "id": 674,
        "category": "Back-End",
        "title": "Backend Developer",
        "company": "ServerLogic",
        "companyLogo": "/public/vite.svg",
        "location": "On-Site",
        "type": "Full-time",
        "experience": "4-6 years",
        "description": "Develop server-side logic and integrate databases...",
        "skills": [
            "Java",
            "Spring Boot",
            "MySQL"
        ],
        "salary": "$85,000 - $110,000",
        "employer_id": 1
    },
    {
        "id": 675,
        "category": "Machine Learning",
        "title": "Machine Learning Eng",
        "company": "ML Innovations",
        "companyLogo": "/public/vite.svg",
        "location": "Remote",
        "type": "Full-time",
        "experience": "3-5 years",
        "description": "Apply machine learning techniques to solve complex problems...",
        "skills": [
            "Python",
            "TensorFlow",
            "Scikit-Learn"
        ],
        "salary": "$95,000 - $120,000",
        "employer_id": 1
    },
    {
        "id": 676,
        "category": "Software Development",
        "title": "Full Stack Developer",
        "company": "TechCo",
        "companyLogo": "/public/vite.svg",
        "location": "San Francisco, CA",
        "type": "Full-time",
        "experience": "3-5 years",
        "description": "Exciting opportunity for a skilled Full Stack Developer...",
        "skills": [
            "React",
            "Node.js",
            "MongoDB"
        ],
        "salary": "$80,000 - $100,000",
        "employer_id": 1
    },
    {
        "id": 677,
        "category": "Data Science",
        "title": "Data Scientist",
        "company": "Data Insights",
        "companyLogo": "/public/vite.svg",
        "location": "New York, NY",
        "type": "Full-time",
        "experience": "2-4 years",
        "description": "Join our data science team to analyze and interpret complex data sets...",
        "skills": [
            "Python",
            "Machine Learning",
            "SQL"
        ],
        "salary": "$90,000 - $120,000",
        "employer_id": 1
    },
    {
        "id": 678,
        "category": "Front-End",
        "title": "UI/UX Designer",
        "company": "WebDesign Co",
        "companyLogo": "/images/company/logo.svg",
        "location": "Remote",
        "type": "Full-time",
        "experience": "2-5 years",
        "description": "Design user interfaces for web applications...",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript"
        ],
        "salary": "$70,000 - $90,000",
        "employer_id": 1
    },
    {
        "id": 679,
        "category": "Back-End",
        "title": "Backend Developer",
        "company": "ServerLogic",
        "companyLogo": "/images/company/logo.svg",
        "location": "On-Site",
        "type": "Full-time",
        "experience": "4-6 years",
        "description": "Develop server-side logic and integrate databases...",
        "skills": [
            "Java",
            "Spring Boot",
            "MySQL"
        ],
        "salary": "$85,000 - $110,000",
        "employer_id": 1
    },
    {
        "id": 680,
        "category": "Machine Learning",
        "title": "Machine Learning Eng",
        "company": "ML Innovations",
        "companyLogo": "/images/company/logo.svg",
        "location": "Remote",
        "type": "Full-time",
        "experience": "3-5 years",
        "description": "Apply machine learning techniques to solve complex problems...",
        "skills": [
            "Python",
            "TensorFlow",
            "Scikit-Learn"
        ],
        "salary": "$95,000 - $120,000",
        "employer_id": 1
    },
    {
        "id": 681,
        "category": "Software Development",
        "title": "Full Stack Developer",
        "company": "TechCo",
        "companyLogo": "/public/vite.svg",
        "location": "San Francisco, CA",
        "type": "Full-time",
        "experience": "3-5 years",
        "description": "Exciting opportunity for a skilled Full Stack Developer...",
        "skills": [
            "React",
            "Node.js",
            "MongoDB"
        ],
        "salary": "$80,000 - $100,000",
        "employer_id": 1
    },
    {
        "id": 682,
        "category": "Data Science",
        "title": "Data Scientist",
        "company": "Data Insights",
        "companyLogo": "/public/vite.svg",
        "location": "New York, NY",
        "type": "Full-time",
        "experience": "2-4 years",
        "description": "Join our data science team to analyze and interpret complex data sets...",
        "skills": [
            "Python",
            "Machine Learning",
            "SQL"
        ],
        "salary": "$90,000 - $120,000",
        "employer_id": 1
    },
    {
        "id": 683,
        "category": "Front-End",
        "title": "UI/UX Designer",
        "company": "WebDesign Co",
        "companyLogo": "/public/vite.svg",
        "location": "Remote",
        "type": "Full-time",
        "experience": "2-5 years",
        "description": "Design user interfaces for web applications...",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript"
        ],
        "salary": "$70,000 - $90,000",
        "employer_id": 1
    },
    {
        "id": 684,
        "category": "Back-End",
        "title": "Backend Developer",
        "company": "ServerLogic",
        "companyLogo": "/public/vite.svg",
        "location": "On-Site",
        "type": "Full-time",
        "experience": "4-6 years",
        "description": "Develop server-side logic and integrate databases...",
        "skills": [
            "Java",
            "Spring Boot",
            "MySQL"
        ],
        "salary": "$85,000 - $110,000",
        "employer_id": 1
    },
    {
        "id": 685,
        "category": "Machine Learning",
        "title": "Machine Learning Eng",
        "company": "ML Innovations",
        "companyLogo": "/public/vite.svg",
        "location": "Remote",
        "type": "Full-time",
        "experience": "3-5 years",
        "description": "Apply machine learning techniques to solve complex problems...",
        "skills": [
            "Python",
            "TensorFlow",
            "Scikit-Learn"
        ],
        "salary": "$95,000 - $120,000",
        "employer_id": 1
    },
    {
        "id": 686,
        "category": "Software Development",
        "title": "Full Stack Developer",
        "company": "TechCo",
        "companyLogo": "/public/vite.svg",
        "location": "San Francisco, CA",
        "type": "Full-time",
        "experience": "3-5 years",
        "description": "Exciting opportunity for a skilled Full Stack Developer...",
        "skills": [
            "React",
            "Node.js",
            "MongoDB"
        ],
        "salary": "$80,000 - $100,000",
        "employer_id": 1
    },
    {
        "id": 687,
        "category": "Data Science",
        "title": "Data Scientist",
        "company": "Data Insights",
        "companyLogo": "/public/vite.svg",
        "location": "New York, NY",
        "type": "Full-time",
        "experience": "2-4 years",
        "description": "Join our data science team to analyze and interpret complex data sets...",
        "skills": [
            "Python",
            "Machine Learning",
            "SQL"
        ],
        "salary": "$90,000 - $120,000",
        "employer_id": 1
    },
    {
        "id": 688,
        "category": "Front-End",
        "title": "UI/UX Designer",
        "company": "WebDesign Co",
        "companyLogo": "/images/company/logo.svg",
        "location": "Remote",
        "type": "Full-time",
        "experience": "2-5 years",
        "description": "Design user interfaces for web applications...",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript"
        ],
        "salary": "$70,000 - $90,000",
        "employer_id": 1
    },
    {
        "id": 689,
        "category": "Back-End",
        "title": "Backend Developer",
        "company": "ServerLogic",
        "companyLogo": "/images/company/logo.svg",
        "location": "On-Site",
        "type": "Full-time",
        "experience": "4-6 years",
        "description": "Develop server-side logic and integrate databases...",
        "skills": [
            "Java",
            "Spring Boot",
            "MySQL"
        ],
        "salary": "$85,000 - $110,000",
        "employer_id": 1
    },
    {
        "id": 690,
        "category": "Machine Learning",
        "title": "Machine Learning Eng",
        "company": "ML Innovations",
        "companyLogo": "/images/company/logo.svg",
        "location": "Remote",
        "type": "Full-time",
        "experience": "3-5 years",
        "description": "Apply machine learning techniques to solve complex problems...",
        "skills": [
            "Python",
            "TensorFlow",
            "Scikit-Learn"
        ],
        "salary": "$95,000 - $120,000",
        "employer_id": 1
    },
    {
        "id": 691,
        "category": "Software Development",
        "title": "Full Stack Developer",
        "company": "TechCo",
        "companyLogo": "/public/vite.svg",
        "location": "San Francisco, CA",
        "type": "Full-time",
        "experience": "3-5 years",
        "description": "Exciting opportunity for a skilled Full Stack Developer...",
        "skills": [
            "React",
            "Node.js",
            "MongoDB"
        ],
        "salary": "$80,000 - $100,000",
        "employer_id": 1
    },
    {
        "id": 692,
        "category": "Data Science",
        "title": "Data Scientist",
        "company": "Data Insights",
        "companyLogo": "/public/vite.svg",
        "location": "New York, NY",
        "type": "Full-time",
        "experience": "2-4 years",
        "description": "Join our data science team to analyze and interpret complex data sets...",
        "skills": [
            "Python",
            "Machine Learning",
            "SQL"
        ],
        "salary": "$90,000 - $120,000",
        "employer_id": 1
    },
    {
        "id": 693,
        "category": "Front-End",
        "title": "UI/UX Designer",
        "company": "WebDesign Co",
        "companyLogo": "/public/vite.svg",
        "location": "Remote",
        "type": "Full-time",
        "experience": "2-5 years",
        "description": "Design user interfaces for web applications...",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript"
        ],
        "salary": "$70,000 - $90,000",
        "employer_id": 1
    },
    {
        "id": 694,
        "category": "Back-End",
        "title": "Backend Developer",
        "company": "ServerLogic",
        "companyLogo": "/public/vite.svg",
        "location": "On-Site",
        "type": "Full-time",
        "experience": "4-6 years",
        "description": "Develop server-side logic and integrate databases...",
        "skills": [
            "Java",
            "Spring Boot",
            "MySQL"
        ],
        "salary": "$85,000 - $110,000",
        "employer_id": 1
    },
    {
        "id": 695,
        "category": "Machine Learning",
        "title": "Machine Learning Eng",
        "company": "ML Innovations",
        "companyLogo": "/public/vite.svg",
        "location": "Remote",
        "type": "Full-time",
        "experience": "3-5 years",
        "description": "Apply machine learning techniques to solve complex problems...",
        "skills": [
            "Python",
            "TensorFlow",
            "Scikit-Learn"
        ],
        "salary": "$95,000 - $120,000",
        "employer_id": 1
    },
    {
        "id": 696,
        "category": "Software Development",
        "title": "Full Stack Developer",
        "company": "TechCo",
        "companyLogo": "/public/vite.svg",
        "location": "San Francisco, CA",
        "type": "Full-time",
        "experience": "3-5 years",
        "description": "Exciting opportunity for a skilled Full Stack Developer...",
        "skills": [
            "React",
            "Node.js",
            "MongoDB"
        ],
        "salary": "$80,000 - $100,000",
        "employer_id": 1
    },
    {
        "id": 697,
        "category": "Data Science",
        "title": "Data Scientist",
        "company": "Data Insights",
        "companyLogo": "/public/vite.svg",
        "location": "New York, NY",
        "type": "Full-time",
        "experience": "2-4 years",
        "description": "Join our data science team to analyze and interpret complex data sets...",
        "skills": [
            "Python",
            "Machine Learning",
            "SQL"
        ],
        "salary": "$90,000 - $120,000",
        "employer_id": 1
    },
    {
        "id": 698,
        "category": "Front-End",
        "title": "UI/UX Designer",
        "company": "WebDesign Co",
        "companyLogo": "/images/company/logo.svg",
        "location": "Remote",
        "type": "Full-time",
        "experience": "2-5 years",
        "description": "Design user interfaces for web applications...",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript"
        ],
        "salary": "$70,000 - $90,000",
        "employer_id": 1
    },
    {
        "id": 699,
        "category": "Back-End",
        "title": "Backend Developer",
        "company": "ServerLogic",
        "companyLogo": "/images/company/logo.svg",
        "location": "On-Site",
        "type": "Full-time",
        "experience": "4-6 years",
        "description": "Develop server-side logic and integrate databases...",
        "skills": [
            "Java",
            "Spring Boot",
            "MySQL"
        ],
        "salary": "$85,000 - $110,000",
        "employer_id": 1
    },
    {
        "id": 700,
        "category": "Machine Learning",
        "title": "Machine Learning Eng",
        "company": "ML Innovations",
        "companyLogo": "/images/company/logo.svg",
        "location": "Remote",
        "type": "Full-time",
        "experience": "3-5 years",
        "description": "Apply machine learning techniques to solve complex problems...",
        "skills": [
            "Python",
            "TensorFlow",
            "Scikit-Learn"
        ],
        "salary": "$95,000 - $120,000",
        "employer_id": 1
    },
    {
        "id": 701,
        "category": "Software Development",
        "title": "Full Stack Developer",
        "company": "TechCo",
        "companyLogo": "/public/vite.svg",
        "location": "San Francisco, CA",
        "type": "Full-time",
        "experience": "3-5 years",
        "description": "Exciting opportunity for a skilled Full Stack Developer...",
        "skills": [
            "React",
            "Node.js",
            "MongoDB"
        ],
        "salary": "$80,000 - $100,000",
        "employer_id": 1
    },
    {
        "id": 702,
        "category": "Data Science",
        "title": "Data Scientist",
        "company": "Data Insights",
        "companyLogo": "/public/vite.svg",
        "location": "New York, NY",
        "type": "Full-time",
        "experience": "2-4 years",
        "description": "Join our data science team to analyze and interpret complex data sets...",
        "skills": [
            "Python",
            "Machine Learning",
            "SQL"
        ],
        "salary": "$90,000 - $120,000",
        "employer_id": 1
    },
    {
        "id": 703,
        "category": "Front-End",
        "title": "UI/UX Designer",
        "company": "WebDesign Co",
        "companyLogo": "/public/vite.svg",
        "location": "Remote",
        "type": "Full-time",
        "experience": "2-5 years",
        "description": "Design user interfaces for web applications...",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript"
        ],
        "salary": "$70,000 - $90,000",
        "employer_id": 1
    },
    {
        "id": 704,
        "category": "Back-End",
        "title": "Backend Developer",
        "company": "ServerLogic",
        "companyLogo": "/public/vite.svg",
        "location": "On-Site",
        "type": "Full-time",
        "experience": "4-6 years",
        "description": "Develop server-side logic and integrate databases...",
        "skills": [
            "Java",
            "Spring Boot",
            "MySQL"
        ],
        "salary": "$85,000 - $110,000",
        "employer_id": 1
    },
    {
        "id": 705,
        "category": "Machine Learning",
        "title": "Machine Learning Eng",
        "company": "ML Innovations",
        "companyLogo": "/public/vite.svg",
        "location": "Remote",
        "type": "Full-time",
        "experience": "3-5 years",
        "description": "Apply machine learning techniques to solve complex problems...",
        "skills": [
            "Python",
            "TensorFlow",
            "Scikit-Learn"
        ],
        "salary": "$95,000 - $120,000",
        "employer_id": 1
    },
    {
        "id": 706,
        "category": "Software Development",
        "title": "Full Stack Developer",
        "company": "TechCo",
        "companyLogo": "/public/vite.svg",
        "location": "San Francisco, CA",
        "type": "Full-time",
        "experience": "3-5 years",
        "description": "Exciting opportunity for a skilled Full Stack Developer...",
        "skills": [
            "React",
            "Node.js",
            "MongoDB"
        ],
        "salary": "$80,000 - $100,000",
        "employer_id": 1
    },
    {
        "id": 707,
        "category": "Data Science",
        "title": "Data Scientist",
        "company": "Data Insights",
        "companyLogo": "/public/vite.svg",
        "location": "New York, NY",
        "type": "Full-time",
        "experience": "2-4 years",
        "description": "Join our data science team to analyze and interpret complex data sets...",
        "skills": [
            "Python",
            "Machine Learning",
            "SQL"
        ],
        "salary": "$90,000 - $120,000",
        "employer_id": 1
    },
    {
        "id": 708,
        "category": "Front-End",
        "title": "UI/UX Designer",
        "company": "WebDesign Co",
        "companyLogo": "/images/company/logo.svg",
        "location": "Remote",
        "type": "Full-time",
        "experience": "2-5 years",
        "description": "Design user interfaces for web applications...",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript"
        ],
        "salary": "$70,000 - $90,000",
        "employer_id": 1
    },
    {
        "id": 709,
        "category": "Back-End",
        "title": "Backend Developer",
        "company": "ServerLogic",
        "companyLogo": "/images/company/logo.svg",
        "location": "On-Site",
        "type": "Full-time",
        "experience": "4-6 years",
        "description": "Develop server-side logic and integrate databases...",
        "skills": [
            "Java",
            "Spring Boot",
            "MySQL"
        ],
        "salary": "$85,000 - $110,000",
        "employer_id": 1
    },
    {
        "id": 710,
        "category": "Machine Learning",
        "title": "Machine Learning Eng",
        "company": "ML Innovations",
        "companyLogo": "/images/company/logo.svg",
        "location": "Remote",
        "type": "Full-time",
        "experience": "3-5 years",
        "description": "Apply machine learning techniques to solve complex problems...",
        "skills": [
            "Python",
            "TensorFlow",
            "Scikit-Learn"
        ],
        "salary": "$95,000 - $120,000",
        "employer_id": 1
    },
    {
        "id": 711,
        "category": "Software Development",
        "title": "Full Stack Developer",
        "company": "TechCo",
        "companyLogo": "/public/vite.svg",
        "location": "San Francisco, CA",
        "type": "Full-time",
        "experience": "3-5 years",
        "description": "Exciting opportunity for a skilled Full Stack Developer...",
        "skills": [
            "React",
            "Node.js",
            "MongoDB"
        ],
        "salary": "$80,000 - $100,000",
        "employer_id": 1
    },
    {
        "id": 712,
        "category": "Data Science",
        "title": "Data Scientist",
        "company": "Data Insights",
        "companyLogo": "/public/vite.svg",
        "location": "New York, NY",
        "type": "Full-time",
        "experience": "2-4 years",
        "description": "Join our data science team to analyze and interpret complex data sets...",
        "skills": [
            "Python",
            "Machine Learning",
            "SQL"
        ],
        "salary": "$90,000 - $120,000",
        "employer_id": 1
    },
    {
        "id": 713,
        "category": "Front-End",
        "title": "UI/UX Designer",
        "company": "WebDesign Co",
        "companyLogo": "/public/vite.svg",
        "location": "Remote",
        "type": "Full-time",
        "experience": "2-5 years",
        "description": "Design user interfaces for web applications...",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript"
        ],
        "salary": "$70,000 - $90,000",
        "employer_id": 1
    },
    {
        "id": 714,
        "category": "Back-End",
        "title": "Backend Developer",
        "company": "ServerLogic",
        "companyLogo": "/public/vite.svg",
        "location": "On-Site",
        "type": "Full-time",
        "experience": "4-6 years",
        "description": "Develop server-side logic and integrate databases...",
        "skills": [
            "Java",
            "Spring Boot",
            "MySQL"
        ],
        "salary": "$85,000 - $110,000",
        "employer_id": 1
    },
    {
        "id": 715,
        "category": "Machine Learning",
        "title": "Machine Learning Eng",
        "company": "ML Innovations",
        "companyLogo": "/public/vite.svg",
        "location": "Remote",
        "type": "Full-time",
        "experience": "3-5 years",
        "description": "Apply machine learning techniques to solve complex problems...",
        "skills": [
            "Python",
            "TensorFlow",
            "Scikit-Learn"
        ],
        "salary": "$95,000 - $120,000",
        "employer_id": 1
    },
    {
        "id": 716,
        "category": "Software Development",
        "title": "Full Stack Developer",
        "company": "TechCo",
        "companyLogo": "/public/vite.svg",
        "location": "San Francisco, CA",
        "type": "Full-time",
        "experience": "3-5 years",
        "description": "Exciting opportunity for a skilled Full Stack Developer...",
        "skills": [
            "React",
            "Node.js",
            "MongoDB"
        ],
        "salary": "$80,000 - $100,000",
        "employer_id": 1
    },
    {
        "id": 717,
        "category": "Data Science",
        "title": "Data Scientist",
        "company": "Data Insights",
        "companyLogo": "/public/vite.svg",
        "location": "New York, NY",
        "type": "Full-time",
        "experience": "2-4 years",
        "description": "Join our data science team to analyze and interpret complex data sets...",
        "skills": [
            "Python",
            "Machine Learning",
            "SQL"
        ],
        "salary": "$90,000 - $120,000",
        "employer_id": 1
    },
    {
        "id": 718,
        "category": "Front-End",
        "title": "UI/UX Designer",
        "company": "WebDesign Co",
        "companyLogo": "/images/company/logo.svg",
        "location": "Remote",
        "type": "Full-time",
        "experience": "2-5 years",
        "description": "Design user interfaces for web applications...",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript"
        ],
        "salary": "$70,000 - $90,000",
        "employer_id": 1
    },
    {
        "id": 719,
        "category": "Back-End",
        "title": "Backend Developer",
        "company": "ServerLogic",
        "companyLogo": "/images/company/logo.svg",
        "location": "On-Site",
        "type": "Full-time",
        "experience": "4-6 years",
        "description": "Develop server-side logic and integrate databases...",
        "skills": [
            "Java",
            "Spring Boot",
            "MySQL"
        ],
        "salary": "$85,000 - $110,000",
        "employer_id": 1
    },
    {
        "id": 720,
        "category": "Machine Learning",
        "title": "Machine Learning Eng",
        "company": "ML Innovations",
        "companyLogo": "/images/company/logo.svg",
        "location": "Remote",
        "type": "Full-time",
        "experience": "3-5 years",
        "description": "Apply machine learning techniques to solve complex problems...",
        "skills": [
            "Python",
            "TensorFlow",
            "Scikit-Learn"
        ],
        "salary": "$95,000 - $120,000",
        "employer_id": 1
    },
    {
        "id": 721,
        "category": "Software Development",
        "title": "Full Stack Developer",
        "company": "TechCo",
        "companyLogo": "/public/vite.svg",
        "location": "San Francisco, CA",
        "type": "Full-time",
        "experience": "3-5 years",
        "description": "Exciting opportunity for a skilled Full Stack Developer...",
        "skills": [
            "React",
            "Node.js",
            "MongoDB"
        ],
        "salary": "$80,000 - $100,000",
        "employer_id": 1
    },
    {
        "id": 722,
        "category": "Data Science",
        "title": "Data Scientist",
        "company": "Data Insights",
        "companyLogo": "/public/vite.svg",
        "location": "New York, NY",
        "type": "Full-time",
        "experience": "2-4 years",
        "description": "Join our data science team to analyze and interpret complex data sets...",
        "skills": [
            "Python",
            "Machine Learning",
            "SQL"
        ],
        "salary": "$90,000 - $120,000",
        "employer_id": 1
    },
    {
        "id": 723,
        "category": "Front-End",
        "title": "UI/UX Designer",
        "company": "WebDesign Co",
        "companyLogo": "/public/vite.svg",
        "location": "Remote",
        "type": "Full-time",
        "experience": "2-5 years",
        "description": "Design user interfaces for web applications...",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript"
        ],
        "salary": "$70,000 - $90,000",
        "employer_id": 1
    },
    {
        "id": 724,
        "category": "Back-End",
        "title": "Backend Developer",
        "company": "ServerLogic",
        "companyLogo": "/public/vite.svg",
        "location": "On-Site",
        "type": "Full-time",
        "experience": "4-6 years",
        "description": "Develop server-side logic and integrate databases...",
        "skills": [
            "Java",
            "Spring Boot",
            "MySQL"
        ],
        "salary": "$85,000 - $110,000",
        "employer_id": 1
    },
    {
        "id": 725,
        "category": "Machine Learning",
        "title": "Machine Learning Eng",
        "company": "ML Innovations",
        "companyLogo": "/public/vite.svg",
        "location": "Remote",
        "type": "Full-time",
        "experience": "3-5 years",
        "description": "Apply machine learning techniques to solve complex problems...",
        "skills": [
            "Python",
            "TensorFlow",
            "Scikit-Learn"
        ],
        "salary": "$95,000 - $120,000",
        "employer_id": 1
    },
    {
        "id": 726,
        "category": "Software Development",
        "title": "Full Stack Developer",
        "company": "TechCo",
        "companyLogo": "/public/vite.svg",
        "location": "San Francisco, CA",
        "type": "Full-time",
        "experience": "3-5 years",
        "description": "Exciting opportunity for a skilled Full Stack Developer...",
        "skills": [
            "React",
            "Node.js",
            "MongoDB"
        ],
        "salary": "$80,000 - $100,000",
        "employer_id": 1
    },
    {
        "id": 727,
        "category": "Data Science",
        "title": "Data Scientist",
        "company": "Data Insights",
        "companyLogo": "/public/vite.svg",
        "location": "New York, NY",
        "type": "Full-time",
        "experience": "2-4 years",
        "description": "Join our data science team to analyze and interpret complex data sets...",
        "skills": [
            "Python",
            "Machine Learning",
            "SQL"
        ],
        "salary": "$90,000 - $120,000",
        "employer_id": 1
    },
    {
        "id": 728,
        "category": "Front-End",
        "title": "UI/UX Designer",
        "company": "WebDesign Co",
        "companyLogo": "/images/company/logo.svg",
        "location": "Remote",
        "type": "Full-time",
        "experience": "2-5 years",
        "description": "Design user interfaces for web applications...",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript"
        ],
        "salary": "$70,000 - $90,000",
        "employer_id": 1
    },
    {
        "id": 729,
        "category": "Back-End",
        "title": "Backend Developer",
        "company": "ServerLogic",
        "companyLogo": "/images/company/logo.svg",
        "location": "On-Site",
        "type": "Full-time",
        "experience": "4-6 years",
        "description": "Develop server-side logic and integrate databases...",
        "skills": [
            "Java",
            "Spring Boot",
            "MySQL"
        ],
        "salary": "$85,000 - $110,000",
        "employer_id": 1
    },
    {
        "id": 730,
        "category": "Machine Learning",
        "title": "Machine Learning Eng",
        "company": "ML Innovations",
        "companyLogo": "/images/company/logo.svg",
        "location": "Remote",
        "type": "Full-time",
        "experience": "3-5 years",
        "description": "Apply machine learning techniques to solve complex problems...",
        "skills": [
            "Python",
            "TensorFlow",
            "Scikit-Learn"
        ],
        "salary": "$95,000 - $120,000",
        "employer_id": 1
    },
    {
        "id": 731,
        "category": "Software Development",
        "title": "Full Stack Developer",
        "company": "TechCo",
        "companyLogo": "/public/vite.svg",
        "location": "San Francisco, CA",
        "type": "Full-time",
        "experience": "3-5 years",
        "description": "Exciting opportunity for a skilled Full Stack Developer...",
        "skills": [
            "React",
            "Node.js",
            "MongoDB"
        ],
        "salary": "$80,000 - $100,000",
        "employer_id": 1
    },
    {
        "id": 732,
        "category": "Data Science",
        "title": "Data Scientist",
        "company": "Data Insights",
        "companyLogo": "/public/vite.svg",
        "location": "New York, NY",
        "type": "Full-time",
        "experience": "2-4 years",
        "description": "Join our data science team to analyze and interpret complex data sets...",
        "skills": [
            "Python",
            "Machine Learning",
            "SQL"
        ],
        "salary": "$90,000 - $120,000",
        "employer_id": 1
    },
    {
        "id": 733,
        "category": "Front-End",
        "title": "UI/UX Designer",
        "company": "WebDesign Co",
        "companyLogo": "/public/vite.svg",
        "location": "Remote",
        "type": "Full-time",
        "experience": "2-5 years",
        "description": "Design user interfaces for web applications...",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript"
        ],
        "salary": "$70,000 - $90,000",
        "employer_id": 1
    },
    {
        "id": 734,
        "category": "Back-End",
        "title": "Backend Developer",
        "company": "ServerLogic",
        "companyLogo": "/public/vite.svg",
        "location": "On-Site",
        "type": "Full-time",
        "experience": "4-6 years",
        "description": "Develop server-side logic and integrate databases...",
        "skills": [
            "Java",
            "Spring Boot",
            "MySQL"
        ],
        "salary": "$85,000 - $110,000",
        "employer_id": 1
    },
    {
        "id": 735,
        "category": "Machine Learning",
        "title": "Machine Learning Eng",
        "company": "ML Innovations",
        "companyLogo": "/public/vite.svg",
        "location": "Remote",
        "type": "Full-time",
        "experience": "3-5 years",
        "description": "Apply machine learning techniques to solve complex problems...",
        "skills": [
            "Python",
            "TensorFlow",
            "Scikit-Learn"
        ],
        "salary": "$95,000 - $120,000",
        "employer_id": 1
    },
    {
        "id": 736,
        "category": "Software Development",
        "title": "Full Stack Developer",
        "company": "TechCo",
        "companyLogo": "/public/vite.svg",
        "location": "San Francisco, CA",
        "type": "Full-time",
        "experience": "3-5 years",
        "description": "Exciting opportunity for a skilled Full Stack Developer...",
        "skills": [
            "React",
            "Node.js",
            "MongoDB"
        ],
        "salary": "$80,000 - $100,000",
        "employer_id": 1
    },
    {
        "id": 737,
        "category": "Data Science",
        "title": "Data Scientist",
        "company": "Data Insights",
        "companyLogo": "/public/vite.svg",
        "location": "New York, NY",
        "type": "Full-time",
        "experience": "2-4 years",
        "description": "Join our data science team to analyze and interpret complex data sets...",
        "skills": [
            "Python",
            "Machine Learning",
            "SQL"
        ],
        "salary": "$90,000 - $120,000",
        "employer_id": 1
    },
    {
        "id": 738,
        "category": "Front-End",
        "title": "UI/UX Designer",
        "company": "WebDesign Co",
        "companyLogo": "/images/company/logo.svg",
        "location": "Remote",
        "type": "Full-time",
        "experience": "2-5 years",
        "description": "Design user interfaces for web applications...",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript"
        ],
        "salary": "$70,000 - $90,000",
        "employer_id": 1
    },
    {
        "id": 739,
        "category": "Back-End",
        "title": "Backend Developer",
        "company": "ServerLogic",
        "companyLogo": "/images/company/logo.svg",
        "location": "On-Site",
        "type": "Full-time",
        "experience": "4-6 years",
        "description": "Develop server-side logic and integrate databases...",
        "skills": [
            "Java",
            "Spring Boot",
            "MySQL"
        ],
        "salary": "$85,000 - $110,000",
        "employer_id": 1
    },
    {
        "id": 740,
        "category": "Machine Learning",
        "title": "Machine Learning Eng",
        "company": "ML Innovations",
        "companyLogo": "/images/company/logo.svg",
        "location": "Remote",
        "type": "Full-time",
        "experience": "3-5 years",
        "description": "Apply machine learning techniques to solve complex problems...",
        "skills": [
            "Python",
            "TensorFlow",
            "Scikit-Learn"
        ],
        "salary": "$95,000 - $120,000",
        "employer_id": 1
    },
    {
        "id": 741,
        "category": "Software Development",
        "title": "Full Stack Developer",
        "company": "TechCo",
        "companyLogo": "/public/vite.svg",
        "location": "San Francisco, CA",
        "type": "Full-time",
        "experience": "3-5 years",
        "description": "Exciting opportunity for a skilled Full Stack Developer...",
        "skills": [
            "React",
            "Node.js",
            "MongoDB"
        ],
        "salary": "$80,000 - $100,000",
        "employer_id": 1
    },
    {
        "id": 742,
        "category": "Data Science",
        "title": "Data Scientist",
        "company": "Data Insights",
        "companyLogo": "/public/vite.svg",
        "location": "New York, NY",
        "type": "Full-time",
        "experience": "2-4 years",
        "description": "Join our data science team to analyze and interpret complex data sets...",
        "skills": [
            "Python",
            "Machine Learning",
            "SQL"
        ],
        "salary": "$90,000 - $120,000",
        "employer_id": 1
    },
    {
        "id": 743,
        "category": "Front-End",
        "title": "UI/UX Designer",
        "company": "WebDesign Co",
        "companyLogo": "/public/vite.svg",
        "location": "Remote",
        "type": "Full-time",
        "experience": "2-5 years",
        "description": "Design user interfaces for web applications...",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript"
        ],
        "salary": "$70,000 - $90,000",
        "employer_id": 1
    },
    {
        "id": 744,
        "category": "Back-End",
        "title": "Backend Developer",
        "company": "ServerLogic",
        "companyLogo": "/public/vite.svg",
        "location": "On-Site",
        "type": "Full-time",
        "experience": "4-6 years",
        "description": "Develop server-side logic and integrate databases...",
        "skills": [
            "Java",
            "Spring Boot",
            "MySQL"
        ],
        "salary": "$85,000 - $110,000",
        "employer_id": 1
    },
    {
        "id": 745,
        "category": "Machine Learning",
        "title": "Machine Learning Eng",
        "company": "ML Innovations",
        "companyLogo": "/public/vite.svg",
        "location": "Remote",
        "type": "Full-time",
        "experience": "3-5 years",
        "description": "Apply machine learning techniques to solve complex problems...",
        "skills": [
            "Python",
            "TensorFlow",
            "Scikit-Learn"
        ],
        "salary": "$95,000 - $120,000",
        "employer_id": 1
    },
    {
        "id": 746,
        "category": "Software Development",
        "title": "Full Stack Developer",
        "company": "TechCo",
        "companyLogo": "/public/vite.svg",
        "location": "San Francisco, CA",
        "type": "Full-time",
        "experience": "3-5 years",
        "description": "Exciting opportunity for a skilled Full Stack Developer...",
        "skills": [
            "React",
            "Node.js",
            "MongoDB"
        ],
        "salary": "$80,000 - $100,000",
        "employer_id": 1
    },
    {
        "id": 747,
        "category": "Data Science",
        "title": "Data Scientist",
        "company": "Data Insights",
        "companyLogo": "/public/vite.svg",
        "location": "New York, NY",
        "type": "Full-time",
        "experience": "2-4 years",
        "description": "Join our data science team to analyze and interpret complex data sets...",
        "skills": [
            "Python",
            "Machine Learning",
            "SQL"
        ],
        "salary": "$90,000 - $120,000",
        "employer_id": 1
    },
    {
        "id": 748,
        "category": "Front-End",
        "title": "UI/UX Designer",
        "company": "WebDesign Co",
        "companyLogo": "/images/company/logo.svg",
        "location": "Remote",
        "type": "Full-time",
        "experience": "2-5 years",
        "description": "Design user interfaces for web applications...",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript"
        ],
        "salary": "$70,000 - $90,000",
        "employer_id": 1
    },
    {
        "id": 749,
        "category": "Back-End",
        "title": "Backend Developer",
        "company": "ServerLogic",
        "companyLogo": "/images/company/logo.svg",
        "location": "On-Site",
        "type": "Full-time",
        "experience": "4-6 years",
        "description": "Develop server-side logic and integrate databases...",
        "skills": [
            "Java",
            "Spring Boot",
            "MySQL"
        ],
        "salary": "$85,000 - $110,000",
        "employer_id": 1
    },
    {
        "id": 750,
        "category": "Machine Learning",
        "title": "Machine Learning Eng",
        "company": "ML Innovations",
        "companyLogo": "/images/company/logo.svg",
        "location": "Remote",
        "type": "Full-time",
        "experience": "3-5 years",
        "description": "Apply machine learning techniques to solve complex problems...",
        "skills": [
            "Python",
            "TensorFlow",
            "Scikit-Learn"
        ],
        "salary": "$95,000 - $120,000",
        "employer_id": 1
    },
    {
        "id": 751,
        "category": "Software Development",
        "title": "Full Stack Developer",
        "company": "TechCo",
        "companyLogo": "/public/vite.svg",
        "location": "San Francisco, CA",
        "type": "Full-time",
        "experience": "3-5 years",
        "description": "Exciting opportunity for a skilled Full Stack Developer...",
        "skills": [
            "React",
            "Node.js",
            "MongoDB"
        ],
        "salary": "$80,000 - $100,000",
        "employer_id": 1
    },
    {
        "id": 752,
        "category": "Data Science",
        "title": "Data Scientist",
        "company": "Data Insights",
        "companyLogo": "/public/vite.svg",
        "location": "New York, NY",
        "type": "Full-time",
        "experience": "2-4 years",
        "description": "Join our data science team to analyze and interpret complex data sets...",
        "skills": [
            "Python",
            "Machine Learning",
            "SQL"
        ],
        "salary": "$90,000 - $120,000",
        "employer_id": 1
    },
    {
        "id": 753,
        "category": "Front-End",
        "title": "UI/UX Designer",
        "company": "WebDesign Co",
        "companyLogo": "/public/vite.svg",
        "location": "Remote",
        "type": "Full-time",
        "experience": "2-5 years",
        "description": "Design user interfaces for web applications...",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript"
        ],
        "salary": "$70,000 - $90,000",
        "employer_id": 1
    },
    {
        "id": 754,
        "category": "Back-End",
        "title": "Backend Developer",
        "company": "ServerLogic",
        "companyLogo": "/public/vite.svg",
        "location": "On-Site",
        "type": "Full-time",
        "experience": "4-6 years",
        "description": "Develop server-side logic and integrate databases...",
        "skills": [
            "Java",
            "Spring Boot",
            "MySQL"
        ],
        "salary": "$85,000 - $110,000",
        "employer_id": 1
    },
    {
        "id": 755,
        "category": "Machine Learning",
        "title": "Machine Learning Eng",
        "company": "ML Innovations",
        "companyLogo": "/public/vite.svg",
        "location": "Remote",
        "type": "Full-time",
        "experience": "3-5 years",
        "description": "Apply machine learning techniques to solve complex problems...",
        "skills": [
            "Python",
            "TensorFlow",
            "Scikit-Learn"
        ],
        "salary": "$95,000 - $120,000",
        "employer_id": 1
    },
    {
        "id": 756,
        "category": "Software Development",
        "title": "Full Stack Developer",
        "company": "TechCo",
        "companyLogo": "/public/vite.svg",
        "location": "San Francisco, CA",
        "type": "Full-time",
        "experience": "3-5 years",
        "description": "Exciting opportunity for a skilled Full Stack Developer...",
        "skills": [
            "React",
            "Node.js",
            "MongoDB"
        ],
        "salary": "$80,000 - $100,000",
        "employer_id": 1
    },
    {
        "id": 757,
        "category": "Data Science",
        "title": "Data Scientist",
        "company": "Data Insights",
        "companyLogo": "/public/vite.svg",
        "location": "New York, NY",
        "type": "Full-time",
        "experience": "2-4 years",
        "description": "Join our data science team to analyze and interpret complex data sets...",
        "skills": [
            "Python",
            "Machine Learning",
            "SQL"
        ],
        "salary": "$90,000 - $120,000",
        "employer_id": 1
    },
    {
        "id": 758,
        "category": "Front-End",
        "title": "UI/UX Designer",
        "company": "WebDesign Co",
        "companyLogo": "/images/company/logo.svg",
        "location": "Remote",
        "type": "Full-time",
        "experience": "2-5 years",
        "description": "Design user interfaces for web applications...",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript"
        ],
        "salary": "$70,000 - $90,000",
        "employer_id": 1
    },
    {
        "id": 759,
        "category": "Back-End",
        "title": "Backend Developer",
        "company": "ServerLogic",
        "companyLogo": "/images/company/logo.svg",
        "location": "On-Site",
        "type": "Full-time",
        "experience": "4-6 years",
        "description": "Develop server-side logic and integrate databases...",
        "skills": [
            "Java",
            "Spring Boot",
            "MySQL"
        ],
        "salary": "$85,000 - $110,000",
        "employer_id": 1
    },
    {
        "id": 760,
        "category": "Machine Learning",
        "title": "Machine Learning Eng",
        "company": "ML Innovations",
        "companyLogo": "/images/company/logo.svg",
        "location": "Remote",
        "type": "Full-time",
        "experience": "3-5 years",
        "description": "Apply machine learning techniques to solve complex problems...",
        "skills": [
            "Python",
            "TensorFlow",
            "Scikit-Learn"
        ],
        "salary": "$95,000 - $120,000",
        "employer_id": 1
    },
    {
        "id": 761,
        "category": "Software Development",
        "title": "Full Stack Developer",
        "company": "TechCo",
        "companyLogo": "/public/vite.svg",
        "location": "San Francisco, CA",
        "type": "Full-time",
        "experience": "3-5 years",
        "description": "Exciting opportunity for a skilled Full Stack Developer...",
        "skills": [
            "React",
            "Node.js",
            "MongoDB"
        ],
        "salary": "$80,000 - $100,000",
        "employer_id": 1
    },
    {
        "id": 762,
        "category": "Data Science",
        "title": "Data Scientist",
        "company": "Data Insights",
        "companyLogo": "/public/vite.svg",
        "location": "New York, NY",
        "type": "Full-time",
        "experience": "2-4 years",
        "description": "Join our data science team to analyze and interpret complex data sets...",
        "skills": [
            "Python",
            "Machine Learning",
            "SQL"
        ],
        "salary": "$90,000 - $120,000",
        "employer_id": 1
    },
    {
        "id": 763,
        "category": "Front-End",
        "title": "UI/UX Designer",
        "company": "WebDesign Co",
        "companyLogo": "/public/vite.svg",
        "location": "Remote",
        "type": "Full-time",
        "experience": "2-5 years",
        "description": "Design user interfaces for web applications...",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript"
        ],
        "salary": "$70,000 - $90,000",
        "employer_id": 1
    },
    {
        "id": 764,
        "category": "Back-End",
        "title": "Backend Developer",
        "company": "ServerLogic",
        "companyLogo": "/public/vite.svg",
        "location": "On-Site",
        "type": "Full-time",
        "experience": "4-6 years",
        "description": "Develop server-side logic and integrate databases...",
        "skills": [
            "Java",
            "Spring Boot",
            "MySQL"
        ],
        "salary": "$85,000 - $110,000",
        "employer_id": 1
    },
    {
        "id": 765,
        "category": "Machine Learning",
        "title": "Machine Learning Eng",
        "company": "ML Innovations",
        "companyLogo": "/public/vite.svg",
        "location": "Remote",
        "type": "Full-time",
        "experience": "3-5 years",
        "description": "Apply machine learning techniques to solve complex problems...",
        "skills": [
            "Python",
            "TensorFlow",
            "Scikit-Learn"
        ],
        "salary": "$95,000 - $120,000",
        "employer_id": 1
    },
    {
        "id": 766,
        "category": "Software Development",
        "title": "Full Stack Developer",
        "company": "TechCo",
        "companyLogo": "/public/vite.svg",
        "location": "San Francisco, CA",
        "type": "Full-time",
        "experience": "3-5 years",
        "description": "Exciting opportunity for a skilled Full Stack Developer...",
        "skills": [
            "React",
            "Node.js",
            "MongoDB"
        ],
        "salary": "$80,000 - $100,000",
        "employer_id": 1
    },
    {
        "id": 767,
        "category": "Data Science",
        "title": "Data Scientist",
        "company": "Data Insights",
        "companyLogo": "/public/vite.svg",
        "location": "New York, NY",
        "type": "Full-time",
        "experience": "2-4 years",
        "description": "Join our data science team to analyze and interpret complex data sets...",
        "skills": [
            "Python",
            "Machine Learning",
            "SQL"
        ],
        "salary": "$90,000 - $120,000",
        "employer_id": 1
    },
    {
        "id": 768,
        "category": "Front-End",
        "title": "UI/UX Designer",
        "company": "WebDesign Co",
        "companyLogo": "/images/company/logo.svg",
        "location": "Remote",
        "type": "Full-time",
        "experience": "2-5 years",
        "description": "Design user interfaces for web applications...",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript"
        ],
        "salary": "$70,000 - $90,000",
        "employer_id": 1
    },
    {
        "id": 769,
        "category": "Back-End",
        "title": "Backend Developer",
        "company": "ServerLogic",
        "companyLogo": "/images/company/logo.svg",
        "location": "On-Site",
        "type": "Full-time",
        "experience": "4-6 years",
        "description": "Develop server-side logic and integrate databases...",
        "skills": [
            "Java",
            "Spring Boot",
            "MySQL"
        ],
        "salary": "$85,000 - $110,000",
        "employer_id": 1
    },
    {
        "id": 770,
        "category": "Machine Learning",
        "title": "Machine Learning Eng",
        "company": "ML Innovations",
        "companyLogo": "/images/company/logo.svg",
        "location": "Remote",
        "type": "Full-time",
        "experience": "3-5 years",
        "description": "Apply machine learning techniques to solve complex problems...",
        "skills": [
            "Python",
            "TensorFlow",
            "Scikit-Learn"
        ],
        "salary": "$95,000 - $120,000",
        "employer_id": 1
    },
    {
        "id": 771,
        "category": "Software Development",
        "title": "Full Stack Developer",
        "company": "TechCo",
        "companyLogo": "/public/vite.svg",
        "location": "San Francisco, CA",
        "type": "Full-time",
        "experience": "3-5 years",
        "description": "Exciting opportunity for a skilled Full Stack Developer...",
        "skills": [
            "React",
            "Node.js",
            "MongoDB"
        ],
        "salary": "$80,000 - $100,000",
        "employer_id": 1
    },
    {
        "id": 772,
        "category": "Data Science",
        "title": "Data Scientist",
        "company": "Data Insights",
        "companyLogo": "/public/vite.svg",
        "location": "New York, NY",
        "type": "Full-time",
        "experience": "2-4 years",
        "description": "Join our data science team to analyze and interpret complex data sets...",
        "skills": [
            "Python",
            "Machine Learning",
            "SQL"
        ],
        "salary": "$90,000 - $120,000",
        "employer_id": 1
    },
    {
        "id": 773,
        "category": "Front-End",
        "title": "UI/UX Designer",
        "company": "WebDesign Co",
        "companyLogo": "/public/vite.svg",
        "location": "Remote",
        "type": "Full-time",
        "experience": "2-5 years",
        "description": "Design user interfaces for web applications...",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript"
        ],
        "salary": "$70,000 - $90,000",
        "employer_id": 1
    },
    {
        "id": 774,
        "category": "Back-End",
        "title": "Backend Developer",
        "company": "ServerLogic",
        "companyLogo": "/public/vite.svg",
        "location": "On-Site",
        "type": "Full-time",
        "experience": "4-6 years",
        "description": "Develop server-side logic and integrate databases...",
        "skills": [
            "Java",
            "Spring Boot",
            "MySQL"
        ],
        "salary": "$85,000 - $110,000",
        "employer_id": 1
    },
    {
        "id": 775,
        "category": "Machine Learning",
        "title": "Machine Learning Eng",
        "company": "ML Innovations",
        "companyLogo": "/public/vite.svg",
        "location": "Remote",
        "type": "Full-time",
        "experience": "3-5 years",
        "description": "Apply machine learning techniques to solve complex problems...",
        "skills": [
            "Python",
            "TensorFlow",
            "Scikit-Learn"
        ],
        "salary": "$95,000 - $120,000",
        "employer_id": 1
    },
    {
        "id": 776,
        "category": "Software Development",
        "title": "Full Stack Developer",
        "company": "TechCo",
        "companyLogo": "/public/vite.svg",
        "location": "San Francisco, CA",
        "type": "Full-time",
        "experience": "3-5 years",
        "description": "Exciting opportunity for a skilled Full Stack Developer...",
        "skills": [
            "React",
            "Node.js",
            "MongoDB"
        ],
        "salary": "$80,000 - $100,000",
        "employer_id": 1
    },
    {
        "id": 777,
        "category": "Data Science",
        "title": "Data Scientist",
        "company": "Data Insights",
        "companyLogo": "/public/vite.svg",
        "location": "New York, NY",
        "type": "Full-time",
        "experience": "2-4 years",
        "description": "Join our data science team to analyze and interpret complex data sets...",
        "skills": [
            "Python",
            "Machine Learning",
            "SQL"
        ],
        "salary": "$90,000 - $120,000",
        "employer_id": 1
    },
    {
        "id": 778,
        "category": "Front-End",
        "title": "UI/UX Designer",
        "company": "WebDesign Co",
        "companyLogo": "/images/company/logo.svg",
        "location": "Remote",
        "type": "Full-time",
        "experience": "2-5 years",
        "description": "Design user interfaces for web applications...",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript"
        ],
        "salary": "$70,000 - $90,000",
        "employer_id": 1
    },
    {
        "id": 779,
        "category": "Back-End",
        "title": "Backend Developer",
        "company": "ServerLogic",
        "companyLogo": "/images/company/logo.svg",
        "location": "On-Site",
        "type": "Full-time",
        "experience": "4-6 years",
        "description": "Develop server-side logic and integrate databases...",
        "skills": [
            "Java",
            "Spring Boot",
            "MySQL"
        ],
        "salary": "$85,000 - $110,000",
        "employer_id": 1
    },
    {
        "id": 780,
        "category": "Machine Learning",
        "title": "Machine Learning Eng",
        "company": "ML Innovations",
        "companyLogo": "/images/company/logo.svg",
        "location": "Remote",
        "type": "Full-time",
        "experience": "3-5 years",
        "description": "Apply machine learning techniques to solve complex problems...",
        "skills": [
            "Python",
            "TensorFlow",
            "Scikit-Learn"
        ],
        "salary": "$95,000 - $120,000",
        "employer_id": 1
    }
]

module.exports =  {jobsData}