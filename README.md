# Discord Clone

Welcome to the Discord Clone project! This is a feature-rich messaging application designed to replicate the popular Discord platform. It offers real-time messaging, attachment sharing, voice and video calls, advanced member management, and more. Below, we provide essential information to set up and use this Discord clone effectively.

## Key Features

### Real-time Messaging

Our application leverages Socket.io to provide a seamless real-time messaging experience. Chat with other users and witness instant message delivery.

### Attachment Support

Share files effortlessly by sending attachments as messages through the UploadThing feature.

### Message Editing and Deletion

Enjoy the ability to edit and delete messages in real-time, with all changes reflecting across all users in the conversation.

### Voice and Video Calls

Create text, audio, and video call channels for efficient communication with other members.

### Private Conversations

Initiate 1:1 conversations with other members for private discussions.

### Video Calls

Engage in 1:1 video calls with other members for face-to-face conversations.

### Member Management

Moderators have the power to manage members by kicking them from channels or altering their roles, ensuring a safe and organized server environment.

### Invite System

Generate unique invite links for your server and establish a fully functional invite system to invite new members.

### Infinite Message Loading

Messages load infinitely in batches of 10, offering a smooth user experience, thanks to the @tanstack/query library.

### Server Customization

Create and customize servers to tailor them to your specific needs.

### Beautiful UI

We've meticulously designed a visually appealing user interface using TailwindCSS and ShadcnUI, providing an intuitive and aesthetically pleasing experience.

### Responsiveness

Our application boasts full responsiveness, making it accessible on various devices, including mobile phones.

### Light and Dark Mode

Easily switch between light and dark modes to suit your preferences and reduce eye strain during nighttime use.

### Websocket Fallback

In case of WebSocket issues, our system gracefully falls back to polling with alerts to ensure uninterrupted communication.

### ORM and Database

Our application employs Prisma as its Object-Relational Mapping (ORM) tool and stores data in a MySQL database hosted on Planetscale.

### Authentication

User authentication is seamlessly handled by Clerk, ensuring the utmost security for your application.

## Getting Started

Follow these steps to set up and run the Discord Clone:

1. **Clone the Repository**: Clone this repository to your local machine.

2. **Install Dependencies**: Execute `npm install` to install all required dependencies.

3. **Database Configuration**: Configure your MySQL database using Planetscale and update the database connection settings in the application.

4. **Authentication Setup**: Set up Clerk for user authentication and update the authentication settings in the application.

5. **Start the Application**: Run `npm start` to launch the Discord clone application.

6. **Access the Application**: Open your web browser and navigate to the application's URL to start using it.

