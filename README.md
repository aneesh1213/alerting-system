# Alerting System for Monitoring Failed POST Requests

This project is a backend system designed to monitor a specific POST endpoint for failed requests, track invalid requests, and send alert notifications when a threshold of failed attempts is exceeded.

## Features

- **Monitor Endpoint**: Tracks failed POST requests caused by invalid headers or incorrect access tokens.
- **Threshold-Based Alerts**: Sends email alerts using Google's SMTP server when a specific threshold of failed attempts (default: 5) is reached for an IP address within a configurable time window (default: 10 minutes).
- **Metrics Logging**: Logs and stores failed request data, including IP, timestamp, and reason for failure.
- **Metrics API**: Exposes an endpoint to fetch logged metrics.

## Tech Stack

- **Backend**: Node.js with Express.js
- **Database**: MongoDB
- **Email Service**: Google's SMTP server
- **Environment Configuration**: dotenv for managing environment variables

## Installation and Setup

### Prerequisites
- Node.js (v14 or higher)
- MongoDB (local or cloud-based, e.g., MongoDB Atlas)
- Google account with an App Password for SMTP

### Steps
1. Clone the repository:
       git clone https://github.com/aneesh1213/alerting-system.git
       cd alerting-system

2. install dependencies:
       npm install

3. Start the application :
       npm start 
