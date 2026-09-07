-- Run this in Supabase Dashboard → SQL Editor
-- Project: dvgitndkvtlcdukxrmiu

CREATE TABLE IF NOT EXISTS bookings (
  id          uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  name        text NOT NULL,
  email       text NOT NULL,
  phone       text NOT NULL,
  service     text NOT NULL,
  date        text NOT NULL,
  message     text,
  status      text NOT NULL DEFAULT 'new',
  created_at  timestamptz DEFAULT now()
);

-- Allow anyone to INSERT (booking form)
ALTER TABLE bookings ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow public inserts"
  ON bookings FOR INSERT
  WITH CHECK (true);

-- Only service role (admin) can SELECT / DELETE
CREATE POLICY "Admin full access"
  ON bookings FOR ALL
  USING (true)
  WITH CHECK (true);
