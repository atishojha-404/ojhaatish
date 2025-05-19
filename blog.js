// Blog posts data
window.blogPosts = [
    {
        id: 1,
        title: "Building an Auth Server in Java",
        date: "April 2024",
        category: "Java, Security",
        content: `Building an authentication server from scratch was both a challenging and rewarding experience. The goal was to create a secure, scalable, and maintainable system that could handle user registration, login, and token-based authentication for multiple applications.<br><br>
        <b>Key Challenges:</b><br>
        • <b>Security:</b> Implementing secure password storage using hashing and salting, and ensuring all sensitive data was encrypted in transit and at rest.<br>
        • <b>Token Management:</b> I chose JWT (JSON Web Tokens) for stateless authentication, which required careful handling of token generation, validation, and expiration.<br>
        • <b>Database Integration:</b> Integrating with a relational database (MySQL) for user data, and ensuring efficient queries and indexing for performance.<br>
        • <b>API Design:</b> Designing RESTful endpoints that were intuitive and followed best practices for error handling and status codes.<br><br>
        <b>Lessons Learned:</b><br>
        • Always validate and sanitize user input to prevent common vulnerabilities like SQL injection and XSS.<br>
        • Logging and monitoring are crucial for detecting suspicious activity and debugging issues in production.<br>
        • Writing comprehensive unit and integration tests saves time in the long run and increases confidence in your code.<br><br>
        You can check out the full project and code on <a href='https://github.com/atishojha-404/Auth_Server' target='_blank'>GitHub</a>.`
    },
    {
        id: 2,
        title: "Lessons from Developing a Core Banking System",
        date: "March 2024",
        category: "Java, Banking",
        content: `Developing a core banking system was one of the most complex projects I've worked on. The system needed to handle customer accounts, transactions, loan management, and reporting, all while maintaining strict security and data integrity.<br><br>
        <b>Major Components:</b><br>
        • <b>Account Management:</b> Creating, updating, and closing accounts with proper validation and audit trails.<br>
        • <b>Transaction Processing:</b> Ensuring atomicity and consistency for deposits, withdrawals, and transfers, even in the event of system failures.<br>
        • <b>Security:</b> Implementing role-based access control and encryption for sensitive data.<br>
        • <b>Reporting:</b> Generating real-time and historical reports for both customers and administrators.<br><br>
        <b>What I Learned:</b><br>
        • The importance of designing a robust database schema from the start.<br>
        • How to use Java's concurrency features to handle multiple transactions safely.<br>
        • The value of clear documentation and modular code for future maintenance.<br><br>
        Explore the project and its architecture on <a href='https://github.com/atishojha-404/Core-Banking-System' target='_blank'>GitHub</a>.`
    },
    {
        id: 3,
        title: "Why Use Spring Boot for Enterprise Apps?",
        date: "February 2024",
        category: "Java, Spring Boot",
        content: `Spring Boot has become my go-to framework for building enterprise Java applications. Its convention-over-configuration approach, powerful dependency injection, and vast ecosystem make it ideal for rapid development and deployment.<br><br>
        <b>Benefits I Experienced:</b><br>
        • <b>Auto-configuration:</b> Spring Boot automatically configures many aspects of the application, reducing boilerplate and setup time.<br>
        • <b>Embedded Servers:</b> No need to deploy to external servers—just run your app as a standalone JAR.<br>
        • <b>Production-Ready Features:</b> Built-in support for metrics, health checks, and externalized configuration.<br>
        • <b>Community and Documentation:</b> A large, active community and excellent documentation make troubleshooting and learning new features easy.<br><br>
        <b>Case Study:</b><br>
        In my Human-Resource-Management-System project, Spring Boot allowed me to quickly set up REST APIs, connect to databases, and implement security features. The modular structure made it easy to add new features as requirements evolved.<br><br>
        Learn more about my implementation in the <a href='https://github.com/atishojha-404/Human-Resource-Management-System' target='_blank'>project repo</a>.`
    }
];

// Function to get all blog posts
window.getAllPosts = function() {
    return blogPosts;
}; 