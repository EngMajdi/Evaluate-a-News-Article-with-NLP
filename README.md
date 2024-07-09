# News Article NLP Project

## Overview

This project is the final assignment within the Front End Web Developer Fundamentals Nanodegree program, sponsored by the Ministry of Transportation, Communications, and Information Technology (MTCIT). It evaluates news articles using Natural Language Processing techniques as part of the program's curriculum.

## Project Structure

The project follows a specific architecture and includes the following components:

- **Client Side**:
  - **HTML Files**: Contains a single HTML file with semantic markup.
  - **JavaScript Files**: Multiple JavaScript files organized for different functionalities.
  - **SCSS Files**: Styling files written in SCSS format.
- **Server Side**:
  - **Node.js with Express**: Handles API requests and serves the client files.
  - **Environment Variables**: Uses a .env file to store sensitive information like API keys.
- **Webpack Configurations**: Includes configurations for development and production builds.
- **Service Workers**: Implements service workers using the Workbox plugin for offline functionality.
- **Testing**: Jest is used for unit testing, ensuring the correctness of application functionalities.

## How to Run the Application

To run the application locally, follow these steps:

1. Clone this repository.
2. Install dependencies using `npm install`.
3. Create a `.env` file in the server directory and include your MeaningCloud API key: `API_KEY=your-api-key`.
4. Build the project with `npm run build`.
5. Start the development server with `npm run start`.

## Dependencies

### Production Dependencies:

- `express`: ^4.17.1
- `body-parser`: ^1.19.0
- `dotenv`: ^16.4.5
- `node-fetch`: ^3.3.2
- `cors`: ^2.8.5

### Development Dependencies:

- `webpack`: ^5.90.3
- `webpack-cli`: ^5.1.4
- `webpack-dev-server`: ^5.0.2
- `html-webpack-plugin`: ^5.6.0
- `style-loader`: ^3.3.4
- `css-loader`: ^6.10.0
- `sass-loader`: ^14.1.1
- `sass`: ^1.72.0
- `clean-webpack-plugin`: ^4.0.0
- `babel-loader`: ^8.0.6
- `@babel/core`: ^7.5.4
- `@babel/preset-env`: ^7.5.4
- `jest`: ^29.7.0
- `jest-environment-jsdom`: ^29.7.0
- `workbox-webpack-plugin`: ^7.0.0

## API Key

You need to sign up for an API key from MeaningCloud to use the sentiment analysis API. Once you have the key, include it in the `.env` file as `API_KEY=your-api-key`.

