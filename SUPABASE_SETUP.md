# Supabase Setup Instructions (Single-User Admin)

This guide will help you set up Supabase for single-user authentication and blog management in your portfolio.

## Prerequisites

- A Supabase account (free tier works)
- Node.js and npm installed

## Step 1: Create a Supabase Project

1. Go to [https://supabase.com](https://supabase.com)
2. Sign up or log in
3. Click "New Project"
4. Choose a name (e.g., "portfolio-tirtha")
5. Set a database password (save this securely)
6. Choose a region closest to you
7. Click "Create new project"
8. Wait for the project to be provisioned (2-3 minutes)

## Step 2: Get Your Credentials

1. Go to your project dashboard
2. Navigate to Settings → API
3. Copy the following values:
   - `Project URL` → This will be `NEXT_PUBLIC_SUPABASE_URL`
   - `anon public` key → This will be `NEXT_PUBLIC_SUPABASE_ANON_KEY`

## Step 3: Set Environment Variables

Create a `.env.local` file in your project root and add:

```env
NEXT_PUBLIC_SUPABASE_URL=your-project-url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
ADMIN_EMAIL=your-admin-email@example.com
```

Replace the values with your actual credentials from Step 2 and your admin email address.

## Step 4: Run the Database Schema

1. Go to your Supabase project dashboard
2. Navigate to SQL Editor
3. Click "New Query"
4. Copy the contents of `supabase-schema.sql` from your project root
5. Paste it into the SQL editor
6. Click "Run" to execute the schema

This will create:
- `blog_profiles` table (extends auth.users)
- `blogs` table (for storing blog posts)
- `blog_images` table (for storing blog images)
- Row Level Security (RLS) policies

**Note:** Auto profile creation is disabled for single-user setup.

## Step 5: Create Your Admin User

Since auto profile creation is disabled, you need to manually create your admin user:

1. Go to Authentication → Users in your Supabase dashboard
2. Click "Add user" → "Create new user"
3. Enter your email (must match `ADMIN_EMAIL` in your .env.local)
4. Set a password
5. Click "Create user"
6. Go to SQL Editor and run this query to create the profile:

```sql
INSERT INTO public.blog_profiles (id, email, full_name, role)
SELECT 
  id, 
  email, 
  'Admin' as full_name,
  'admin' as role
FROM auth.users 
WHERE email = 'your-admin-email@example.com';
```

Replace `your-admin-email@example.com` with your actual admin email.

## Step 6: Set Up Storage for Images

1. Go to Storage in your Supabase dashboard
2. Click "Create a new bucket"
3. Name it `blog-images`
4. Make it **Public** (so images can be displayed)
5. Click "Create bucket"

## Step 7: Test the Setup

1. Start your development server:
   ```bash
   npm run dev
   ```

2. Navigate to `http://localhost:3000/login`

3. Sign in with your admin email and password

4. Once logged in, navigate to `/admin`

5. Try creating a new blog post with an image

## Troubleshooting

### "Module not found" errors
Make sure you've installed all dependencies:
```bash
npm install @supabase/supabase-js @supabase/ssr
```

### "Auth session missing" errors
- Check that your environment variables are set correctly
- Ensure the `.env.local` file is in the project root
- Restart your development server after adding environment variables

### "Unauthorized access" errors
- Verify that `ADMIN_EMAIL` in .env.local matches your Supabase user email
- Ensure you've created the profile record in the profiles table

### Image upload errors
- Make sure the `blog-images` bucket is set to public
- Check that the bucket exists in Supabase Storage
- Verify your storage policies allow uploads

### Database connection errors
- Verify your Supabase project URL and anon key are correct
- Check that your project is active (not paused)
- Ensure the database schema has been run

## Security Notes

- Never commit your `.env.local` file to version control
- The `anon` key is safe to use in client-side code
- Row Level Security (RLS) policies protect your data
- Only the admin user can access the admin panel
- Published blogs are publicly readable
- Signups are disabled - only the pre-created admin user can log in

## Next Steps

After setup is complete:

1. Write your first blog post in the admin dashboard
2. Test image uploads
3. Verify that published blogs appear on the articles page
4. Check mobile responsiveness on different devices
5. Deploy to production when ready

For production deployment:
- Update your environment variables with production Supabase credentials
- Use a strong admin password
- Enable additional security features (2FA, etc.)
- Set up a custom domain for your Supabase project
