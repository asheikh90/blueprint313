/*
  # Create waitlist table and email notification function

  1. New Tables
    - `waitlist`
      - `id` (uuid, primary key)
      - `name` (text, not null)
      - `email` (text, not null)
      - `interest` (text, not null)
      - `created_at` (timestamp with time zone)
  2. Security
    - Enable RLS on `waitlist` table
    - Add policy for inserting data
  3. Functions
    - Create function to send email notifications
    - Create trigger to call function on new entries
*/

-- Create waitlist table if it doesn't exist
CREATE TABLE IF NOT EXISTS waitlist (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  interest text NOT NULL,
  created_at timestamptz DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE waitlist ENABLE ROW LEVEL SECURITY;

-- Create policy to allow inserts
CREATE POLICY "Allow anonymous inserts to waitlist" 
  ON waitlist 
  FOR INSERT 
  TO anon 
  WITH CHECK (true);

-- Create policy to allow service role to select
CREATE POLICY "Allow service role to select from waitlist" 
  ON waitlist 
  FOR SELECT 
  TO service_role 
  USING (true);

-- Create function to send email notification
CREATE OR REPLACE FUNCTION notify_new_waitlist_entry()
RETURNS TRIGGER AS $$
BEGIN
  PERFORM
    net.http_post(
      url := 'https://api.resend.com/emails',
      headers := '{"Authorization": "Bearer re_123YourResendAPIKey", "Content-Type": "application/json"}',
      body := json_build_object(
        'from', 'notifications@blueprint313.com',
        'to', 'as@blueprint313.com',
        'subject', 'New Blueprint313 Waitlist Registration',
        'html', concat(
          '<h2>New Waitlist Registration</h2>',
          '<p><strong>Name:</strong> ', NEW.name, '</p>',
          '<p><strong>Email:</strong> ', NEW.email, '</p>',
          '<p><strong>Interest:</strong> ', NEW.interest, '</p>',
          '<p><strong>Registered at:</strong> ', NEW.created_at, '</p>'
        )
      )::text
    );
  
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Create trigger to call function on insert
CREATE TRIGGER waitlist_notification_trigger
AFTER INSERT ON waitlist
FOR EACH ROW
EXECUTE FUNCTION notify_new_waitlist_entry();

-- Comment on function
COMMENT ON FUNCTION notify_new_waitlist_entry IS 'Sends an email notification to as@blueprint313.com when a new waitlist entry is created';
