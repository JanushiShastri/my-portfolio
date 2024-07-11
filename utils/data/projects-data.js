import ayla from '/public/image/ayla.jpg';
import crefin from '/public/image/crefin.jpg';
import realEstate from '/public/image/real-estate.jpg';
import travel from '/public/image/travel.jpg';
import amazonPriceTracker from '/public/image/amazonPriceTracker.png';
import budgetBasedProject from '/public/image/budgetBasedProject.png';
import visual_search_1 from '/public/image/visual_search_1.jpg';
import shopping from '/public/image/shopping.png';
import healthcare from '/public/image/healthcare.png';
import movie from '/public/image/movie.png';


export const projectsData = [
    {
        id: 1,
        name: 'Amazon Price Tracker',   
        description: "This website is a price tracker, built to monitor prices in real-time and send automated email notifications for any changes. It's developed using Vue.js, with Grafana and Prometheus for monitoring. The site uses Firebase for authentication and AWS S3 for storing assets. Explore to see how it can help you stay updated with the latest price trends effortlessly!",
        tools: ['Vue.js', 'Flask', 'Firebase','MySQL', 'Redis', 'GitHub Actions', 'Grafana', 'Promethus', 'AWS EC2', 'AWS S3', 'AWS ASG', 'Postman'],
        role: 'Full Stack Developer',
        code: 'https://github.com/JanushiShastri/Amazon-Price-Tracker?tab=readme-ov-file',
        demo: '',
        image: amazonPriceTracker,
    },
    {
        id: 2,
        name: 'Budget Based Trip Planner and Recommendation System',
        description: 'This platform is designed to help you plan the perfect trip within your budget. Its built as a single-page application using Vue.js and integrates with AWS S3, Weather API, and Google Maps API. The system offers personalized activity suggestions, itinerary planning, and real-time trip metrics. Our backend uses Flask based RESTful APIs on Linux EC2 with Redis caching, ensuring efficient performance.',
        tools: ['Vue.js', 'Flask', "Google Maps API", "Weather API", "JavaScript", "AWS EC2", "AWS S3", "SCSS", "Docker"],
        role: 'Frontend Developer',
        code: 'https://github.com/JanushiShastri/Budget-Based-Trip-Planner-Frontend',
        demo: '',
        image: budgetBasedProject,
    },
    {
        id: 3,
        name: 'Movie Recommendation System',
        description: "This application provides detailed information about movies, including overview, genre, release date, rating, runtime, top cast, reviews, and recommendations. It uses the TMDB API for movie details and BeautifulSoup for web scraping IMDB reviews, performing sentiment analysis on user reviews.",
        tools: ['Python', 'BeautifulSoup', 'Flask', 'TensorFlow'],
        role: 'Full Stack Developer',
        code: 'https://github.com/JanushiShastri/Movie-Recommendation-System',
        demo: '',
        image: movie,
    },
    {
        id: 4,
        name: 'E-commerce Visual Search Engine',
        description: "A visual search engine built using Flask and convolutional neural networks to find similar products based on user's input. It uses feature maps of images and the Nearest Neighbors algorithm for recommendations.",
        tools: ['Python', 'Flask', 'AWS', 'TensorFlow', 'Docker'],
        role: 'Software Developer',
        code: 'https://github.com/JanushiShastri/E-commerce-visual-search-engine',
        demo: '',
        image: visual_search_1,
    },
    {
        id: 5,
        name: 'Machine Learning in HealthCare',
        description: "A webapp developed using Flask that compares different supervised machine learning algorithms to predict diseases like Diabetes, Breast Cancer, Heart Disease, Kidney Disease, and Liver Disease. Random Forest Classifier provided the best accuracy of around 93%.",
        tools: ['Python', 'Flask', 'TensorFlow', 'AWS', 'Git'],
        role: 'Full Stack Developer and Machine Learning',
        code: 'https://github.com/JanushiShastri/Machine-Learning-in-HealthCare',
        demo: '',
        image: healthcare,
    },
    {
        id: 6,
        name: 'Shopaholic E-commerce Website',
        description: "An E-commerce website for shopping enthusiasts, containing products for men, women, and kids. Built using JavaScript, HTML, and CSS. Won first prize in the Web Development Contest organized by Progate Japan.",
        tools: ['JavaScript', 'HTML', 'CSS', 'GitHub'],
        role: 'Frontend Developer',
        code: 'https://github.com/JanushiShastri/Shopaholic',
        demo: '',
        image: shopping,
    },
];


// Do not remove any property.
// Leave it blank instead as shown below

// {
//     id: 1,
//     name: '',
//     description: "",
//     tools: [],
//     role: '',
//     code: '',
//     demo: '',
//     image: crefin,
// },