# Authentication Setup Guide

This guide will help you set up the authentication system for the Issue Tracker application.

## Prerequisites

- Node.js 16.14 or later
- PostgreSQL database
- Google OAuth credentials

## Environment Variables

Create a `.env.local` file in the root of your project with the following variables:

```env
# Database
DATABASE_URL="postgresql://user:password@localhost:5432/issuetracker?schema=public"

# Authentication
NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET="your-secret-key-here"  # Generate a random string (e.g., `openssl rand -base64 32`)

# Google OAuth
GOOGLE_CLIENT_ID="your-google-client-id"
GOOGLE_CLIENT_SECRET="your-google-client-secret"
```

## Google OAuth Setup

1. Go to the [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select an existing one
3. Navigate to "APIs & Services" > "Credentials"
4. Click "Create Credentials" > "OAuth client ID"
5. Choose "Web application" as the application type
6. Add the following authorized redirect URIs:
   - `http://localhost:3000/api/auth/callback/google`
7. Copy the Client ID and Client Secret to your `.env.local` file

## Database Setup

1. Make sure PostgreSQL is running
2. Run the following commands to set up the database:

```bash
# Apply database migrations
npx prisma migrate dev

# Generate Prisma Client
npx prisma generate
```

## Running the Application

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm run dev
   ```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## Authentication Routes

- Sign in: `/login`
- Sign out: `/api/auth/signout`
- Protected routes: All routes except `/login` and API routes
