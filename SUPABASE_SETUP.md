# Supabase Setup Guide

## Step 1: Create a Supabase Account

1. Go to [https://supabase.com](https://supabase.com)
2. Sign up for a free account
3. Create a new project

## Step 2: Get Your Credentials

1. Go to Project Settings > API
2. Copy your **Project URL**
3. Copy your **anon/public** key

## Step 3: Update Environment Variables

1. Open the `.env` file in the root of your project
2. Replace the placeholders with your actual credentials:
   ```
   VITE_SUPABASE_URL=your_supabase_project_url_here
   VITE_SUPABASE_ANON_KEY=your_supabase_anon_key_here
   ```

## Step 4: Set Up Authentication

In your Supabase dashboard:

1. Go to **Authentication** > **Settings**
2. Enable **Email** provider
3. (Optional) Configure email templates

## Step 5: Create Admin Users

You can create admin users in two ways:

### Option A: Using Supabase Dashboard

1. Go to **Authentication** > **Users**
2. Click **Add User**
3. Enter email and password
4. Click **Create User**

### Option B: Using Sign Up (if you add registration feature)

Or you can add a registration page in your app.

## Step 6: Test the Login

1. Restart your development server: `npm run dev`
2. Try logging in with the admin credentials you created

## Database Setup (Optional)

If you want to store additional user data or attendance records:

1. Go to **Database** > **Tables**
2. Create tables for:
   - `attendance_records` (id, rank, name, screenshots, created_at, user_id)
   - `admin_profiles` (id, email, name, role, created_at)

## Security Notes

- Never commit your `.env` file to version control
- The `.env` file is already in `.gitignore`
- Keep your Supabase keys secure
- The anon key is safe to use in frontend code

## Documentation

- [Supabase Auth Documentation](https://supabase.com/docs/guides/auth)
- [Supabase JavaScript Client](https://supabase.com/docs/reference/javascript/introduction)
