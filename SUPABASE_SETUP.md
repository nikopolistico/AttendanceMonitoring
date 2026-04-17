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

## Database Setup (SQL Queries)

To set up the complete database schema, use the Supabase SQL Editor to run the following queries:

### 1. Create the `users` table

```sql
CREATE TABLE IF NOT EXISTS users (
  id BIGSERIAL PRIMARY KEY,
  rank_full_name VARCHAR(255),
  badge_number VARCHAR(100),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

### 2. Create the `submittedprof` table

```sql
CREATE TABLE IF NOT EXISTS submittedprof (
  id BIGSERIAL PRIMARY KEY,
  user_id BIGINT NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  screenshots TEXT,
  activity_id BIGINT REFERENCES activities(id) ON DELETE CASCADE,
  status BOOLEAN DEFAULT true,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

### 3. Create the `activities` table

```sql
CREATE TABLE IF NOT EXISTS activities (
  id BIGSERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  description TEXT,
  max_submissions INTEGER DEFAULT 1,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

### 4. Setup Instructions

1. Go to your Supabase Dashboard
2. Navigate to **SQL Editor**
3. Click **New Query**
4. Copy and paste the SQL queries above (one at a time, or all together)
5. Click **Run** to execute the queries
6. Tables should now appear in the **Database** > **Tables** section

### 5. Add Row Level Security (RLS) - Optional

To add security policies:

```sql
-- Enable RLS on tables
ALTER TABLE users ENABLE ROW LEVEL SECURITY;
ALTER TABLE submittedprof ENABLE ROW LEVEL SECURITY;
ALTER TABLE activities ENABLE ROW LEVEL SECURITY;

-- Users can read all users
CREATE POLICY "Users are viewable by everyone" ON users FOR SELECT USING (true);

-- Users can insert new officers
CREATE POLICY "Users can insert new officers" ON users FOR INSERT
  WITH CHECK (true);

-- Create attendance records with user_id
CREATE POLICY "Authenticated users can insert submittedprof" ON submittedprof FOR INSERT
  WITH CHECK (true);

-- View all activities
CREATE POLICY "Activities are viewable by everyone" ON activities FOR SELECT USING (true);
```

### 6. Migrate Existing Database (If You Already Have Activities)

If you already have the activities table without `max_submissions`, run this:

```sql
ALTER TABLE activities ADD COLUMN IF NOT EXISTS max_submissions INTEGER DEFAULT 1;
```

## Multi-Activity Attendance System with Submission Limits

### Features:

**Admin Features:**

- ✅ Create activities with custom submission limits
- ✅ Set how many times each officer can submit per activity (1, 3, 5, etc.)
- ✅ Generate unique attendance links for each activity
- ✅ Copy links to clipboard for sharing
- ✅ View submissions per activity
- ✅ Filter attendance records by activity
- ✅ Delete activities (cascading delete of related submissions)
- ✅ **Download activity as ZIP file** containing:
  - A folder for each officer (named after their rank/name)
  - Inside each officer's folder: all their submitted images
  - CSV file with all submission data (Officer name, badge number, submission dates, image counts)
  - Activity information file
- ✅ **Restore/Import attendance data** from previously downloaded ZIP files
  - Re-create deleted activities with all submissions
  - Re-upload all images to Supabase Storage
  - Automatically recreate officer records if needed
- ✅ **Records Table Display:**
  - Status column showing **"✓ Complied"** or **"✗ Uncomplied"** (color-coded)
  - Images column with thumbnail previews of submitted images
  - Click images to preview full details
  - "+N" indicator for additional images beyond first 3

**User/Officer Features:**

- ✅ Access attendance form via activity link (e.g., `http://site.com/#/user-dashboard?activity_id=123`)
- ✅ See activity name and description prominently displayed at the top of the form
- ✅ View activity ID and maximum submission limit
- ✅ Submission limit enforcement (can't exceed allowed submissions)
- ✅ Visual progress indicator showing how many submissions they have left
- ✅ Error message if they try to submit beyond limit
- ✅ Real-time submission count display
- ✅ **Auto-add feature**: If officer name is not in the system, they can type their name and add themselves to Supabase automatically

### How It Works:

**Step 1: Admin Creates Activity**

1. Go to Activities page
2. Enter activity name (e.g., "February 2025 Formation")
3. Enter optional description
4. Set "Maximum Submissions Per Officer" (e.g., 1 = only one submission allowed)
5. Click Create Activity

**Step 2: Admin Shares Link**

1. System generates unique link: `http://yoursite.com/#/user-dashboard?activity_id=123`
2. Click copy button next to link
3. Share with officers via email, SMS, or messaging

**Step 3: Officer Submits**

1. Officer opens the link
2. **Activity card displays:** Name, description, ID, and submission limit
3. Officer selects name from dropdown OR types their name if not found
4. **If officer doesn't exist:**
   - Type the officer's name in the search box
   - Click "Add [name] as new officer"
   - Fill in optional badge number (if available)
   - Click "Add Officer" button
   - Officer is automatically added to Supabase and selected
5. System shows: "1 / 1 Submitted" (or remaining submissions)
6. Officer uploads screenshots and submits
7. After first submission, officer can't submit again (if limit is 1)

**Step 4: Admin Reviews**

1. Go to Records page
2. Select activity from "Activity" filter dropdown
3. View only submissions for that activity
4. Export to Excel/Word
5. **Or use the Activities page to download full ZIP:**
   - Go to Activities page
   - Find the activity you want to download
   - Click "Download ZIP" button
   - **ZIP file structure:**
     - `Officer_Name_1/` - Folder with first officer's name
       - `image_1.jpg` - First submitted image
       - `image_2.jpg` - Second submitted image (if multiple)
     - `Officer_Name_2/` - Folder with second officer's name
       - `image_1.jpg` - First submitted image
       - `image_2.jpg` - Second submitted image (if multiple)
     - `submissions.csv` - All submission details (Officer, Badge, Date, Image Count)
     - `ACTIVITY_INFO.txt` - Activity metadata
6. Delete activity (all related submissions auto-delete)

### Example ZIP Structure:

```
attendance_download.zip
├── john_smith/
│   ├── image_1.jpg
│   ├── image_2.jpg
│   └── image_3.jpg
├── jane_doe/
│   ├── image_1.jpg
│   └── image_2.jpg
├── submissions.csv
└── ACTIVITY_INFO.txt
```

### Example Scenarios:

| Activity           | Limit | Purpose                                        |
| ------------------ | ----- | ---------------------------------------------- |
| Morning Formation  | 1     | Only 1 check-in per day                        |
| Weekly Seminar     | 3     | Up to 3 attendance checks for a seminar        |
| Monthly Inspection | 1     | One submission per inspection                  |
| Training Days      | 5     | Multiple attendance checks throughout training |

### Database Schema:

```sql
-- Activities table
CREATE TABLE activities (
  id BIGSERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  description TEXT,
  max_submissions INTEGER DEFAULT 1,  -- <-- Submission limit per officer
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Submissions table with activity link
CREATE TABLE submittedprof (
  id BIGSERIAL PRIMARY KEY,
  user_id BIGINT NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  activity_id BIGINT REFERENCES activities(id) ON DELETE CASCADE,  -- <-- Links to activity
  screenshots TEXT,
  status BOOLEAN DEFAULT true,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

### Usage Tips:

## Tips for Supabase Setup

1. **Create a Service Role Key** for admin operations (keep this secret!)
2. **Use the anon key** in your frontend code
3. **Enable Storage** for the Screenshots bucket if you want to store files

## Data Backup & Restore Workflow

### Step 1: Download Activity Data

- Go to Activities page
- Click "Download ZIP" button on any activity
- Save the ZIP file to a safe location

### Step 2: Delete Activity (if needed)

- You can safely delete an activity knowing you have a backup
- All data is preserved in the ZIP file

### Step 3: Restore from Backup

- Go to Activities page
- Click **"Import from ZIP"** button (green button)
- Select the previously downloaded ZIP file
- The system will:
  - Create the activity (if it doesn't exist)
  - Restore all submissions
  - Re-upload all images to Supabase Storage
  - Create officer records (if they don't exist)
  - Display a summary of restored data

### Data Recovery Examples:

**Scenario 1: Accidental Deletion**

```
1. Admin accidentally deletes "February Formation" activity
2. Admin goes to Activities page → "Import from ZIP"
3. Selects: february_formation_attendance_1708123456.zip
4. Activity is restored with all submissions and images
5. System shows: ✅ Data restored! Activity: February Formation, Submissions restored: 47
```

**Scenario 2: System Migration**

```
1. New admin takes over
2. Downloads all activity ZIPs from the old system
3. Goes to new Activities page → "Import from ZIP"
4. Imports each ZIP file one by one
5. All data including images are migrated to the new system
```

### Important Notes:

- Only ZIP files created by the "Download ZIP" feature can be imported
- Imports automatically create missing officers
- All images are re-uploaded to Supabase Storage
- No data is lost during the restore process
- Duplicate submissions are prevented (checks by officer name and date)

## Tips for Supabase Setup

1. **Create a Service Role Key** for admin operations (keep this secret!)
2. **Use the anon key** in your frontend code
3. **Enable Storage** for the Screenshots bucket if you want to store files

## Multi-Activity Attendance System Features

### Admin Features:

- Create and manage activities (attendance campaigns)
- Generate unique attendance links per activity
- Copy attendance links to clipboard
- View submissions per activity
- Filter attendance records by activity

### User Features:

- Access attendance form via activity link
- Activity name displayed in attendance form header
- Submit attendance records linked to specific activity

### Examples:

- Activity: "February 2025 Inspection"
- Link: `/?activity_id=123`
- Users can join via this link to submit attendance for that specific activity

## Not Set Up Previously

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
