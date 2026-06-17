# AI Email Generator SaaS

An AI-powered email generation platform that enables users to create professional, context-aware, and personalized emails in seconds using Google's Gemini AI. The application combines modern AI capabilities with secure authentication, cloud database management, analytics, and productivity features to deliver a complete email generation experience.

---

## Overview

Writing effective emails can be time-consuming, especially when balancing professionalism, tone, and clarity. AI Email Generator SaaS simplifies this process by allowing users to describe their requirements and instantly generate high-quality emails tailored to their preferred tone and length.

The platform provides a secure, user-specific workspace where generated emails are stored, managed, favorited, searched, and exported for future use.

---

## Key Features

### AI-Powered Email Generation

- Generate emails using Google Gemini AI
- Context-aware email creation
- Multiple writing styles and tones
- Customizable email lengths
- Instant content generation

### Authentication & Security

- Secure user registration
- User login system
- Password recovery functionality
- Protected dashboard access
- User-specific data isolation
- Session-based authentication

### Email Management

- Save generated emails automatically
- View complete email history
- Mark emails as favorites
- Delete unwanted emails
- Search through email history
- Retrieve previously generated emails instantly

### Analytics Dashboard

- Track total generated emails
- Monitor favorite emails count
- View most frequently used tone
- Analyze recent user activity

### Export Functionality

- Export emails as PDF documents
- Export emails as TXT files
- Easy content sharing and storage

### Modern User Experience

- Responsive design for all screen sizes
- Interactive dashboard interface
- Toast notifications
- Loading indicators
- Custom confirmation modals
- Clean and intuitive user workflow

---

## Technology Stack

### Frontend

- HTML5
- CSS3
- JavaScript (ES6)

### Backend

- Python
- Flask
- Flask-CORS

### Artificial Intelligence

- Google Gemini API

### Database & Authentication

- Supabase
- Supabase Authentication

---

## Project Architecture

```text
ai-email-generator/

├── backend/
│   ├── routes/
│   ├── services/
│   ├── app.py
│   └── requirements.txt
│
├── frontend/
│   ├── css/
│   ├── js/
│   ├── dashboard.html
│   ├── login.html
│   ├── signup.html
│   └── forgot-password.html
│
├── database/
│   └── schema.sql
│
├── README.md
└── .gitignore
```

---

## Application Workflow

```text
User Authentication
        ↓
Access Dashboard
        ↓
Enter Email Prompt
        ↓
Select Tone & Length
        ↓
Generate Email Using Gemini AI
        ↓
Store Email In Supabase
        ↓
Manage History & Favorites
        ↓
Track Analytics
        ↓
Export Email
```

---

## Installation

### Clone Repository

```bash
git clone https://github.com/your-username/ai-email-generator.git

cd ai-email-generator
```

### Create Virtual Environment

```bash
python -m venv venv
```

### Activate Virtual Environment

Windows:

```bash
venv\Scripts\activate
```

Linux / macOS:

```bash
source venv/bin/activate
```

### Install Dependencies

```bash
pip install -r backend/requirements.txt
```

---

## Environment Variables

Create a `.env` file inside the backend directory.

```env
SUPABASE_URL=your_supabase_url

SUPABASE_KEY=your_supabase_key

GEMINI_API_KEY=your_gemini_api_key
```

---

## Running the Application

### Start Backend Server

```bash
python backend/app.py
```

### Launch Frontend

Open the frontend pages in your browser:

```text
frontend/login.html
```

---

## Security Features

- User-specific data access
- Protected dashboard routes
- Secure Supabase Authentication
- Environment variable protection
- API key isolation
- Session validation

---

## Project Highlights

- Full Stack SaaS Application
- AI Integration with Gemini API
- Cloud Database Integration
- Secure Authentication System
- Real-Time Analytics
- Responsive User Interface
- Export Capabilities
- Production-Oriented Architecture

---

## License

This project is licensed under the MIT License.