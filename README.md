# Simple Web App Readme

This is a simple web app built using Express.js to send emails. It includes an API endpoint to send emails using a provided SMTP server.

## Installation

1. Clone this repository.
2. Navigate to the project directory: `cd simple-web-app`
3. Install the required dependencies: `npm install`

## Usage

1. Start the server: `npm start`
2. Access the API endpoints using a tool like Postman or curl.

## API Endpoints

### 1. Send Email

**Endpoint:** POST `/send-mail`

**Request Body:**
```json
{
  "senderName": "Your Name",
  "senderAddress": "your-email@example.com",
  "password": "your-email-password",
  "recipientAddress": "recipient@example.com",
  "heading": "Email Subject",
  "message": "Email Body"
}
```


## Response

### 1. Send Email

**Endpoint:** POST `/send-mail`

**Response:** OK!

### 2. Health Check

**Endpoint:** GET `/health`

**Response:** OK! Status 200

