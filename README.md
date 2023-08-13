Title: Weather Application - Bridging Frontend and Backend with ReactJS and Spring Boot

Introduction:
The Weather Application integrates the ReactJS frontend with a powerful Spring Boot backend, providing users with accurate weather information for a
specified location. This application utilizes functional components in ReactJS and Spring Boot's autowired configuration to facilitate communication 
between frontend and backend. This document outlines the implementation process and key features of the Weather Application.

Backend Implementation:

Spring Boot Setup:

1)Downloaded Spring Initializer with Maven, Java 17, and essential dependencies.
2)Included 'spring-web' dependency for building RESTful APIs and using Spring MVC.
3)Configured the default Tomcat server for serving requests.

Controller:

1)Created a controller package 'com.weather.controller'.
2)Implemented a controller with 'GetMapping' annotation to handle GET requests.
3)Utilized 'CrossOrigin' annotation to enable cross-origin requests, connecting the frontend and backend.

Service Layer:

1)Established a service package 'com.weather.service'.
2)Developed a service class responsible for fetching weather data from external sources.
3)Utilized the 'okhttp3' library to perform API calls to the OpenWeatherMap, retrieving weather details for a given location.

Request Flow:

1)User sends a location input through the ReactJS frontend.
2)Spring Boot's DispatcherServlet intercepts the request.
3)HandlerMapping identifies the 'GetMapping' annotation and forwards the request to the appropriate controller.
4)Controller processes the request and interacts with the service layer.
5)Service layer utilizes 'okhttp3' to retrieve weather information from the OpenWeatherMap.
6)Weather details are passed back through the service layer to the controller.
7)Controller returns the weather information as a response to the user's request.

Frontend Implementation:

ReactJS Functional Components:

1)Built the frontend using ReactJS functional components for modularity and maintainability.
Leveraged the 'axios' library to send HTTP requests to the Spring Boot backend.
User Interaction:

2)Users input a location, triggering a request to the Spring Boot backend.
Displayed loading indicators or animations while waiting for the response.
Display Weather Information:

3)Once the response is received, displayed weather information such as temperature, pressure, and humidity.
Styled the UI for a user-friendly experience, providing clear and concise weather details.
Application Running Process:

Running the Applications:

1)Start both the ReactJS frontend and Spring Boot backend applications.
Spring Boot's default Tomcat server handles incoming requests.
User Interaction:

2)Users provide a location through the ReactJS frontend.
ReactJS initiates an HTTP request to the Spring Boot backend.
Weather Information Display:

3)Spring Boot backend processes the request and retrieves weather details from OpenWeatherMap.
The retrieved weather information is sent back to the ReactJS frontend.
ReactJS dynamically updates the UI, presenting weather details to the user in a well-formatted and easily understandable manner.

My Weather Application Demo Link:
