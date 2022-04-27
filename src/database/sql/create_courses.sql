CREATE TABLE IF NOT EXISTS courses(
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  "title" VARCHAR(100) NOT NULL,
  "price" DECIMAL(5,2) NOT NULL,
  "duration_hours" INTEGER NOT NULL,
  creator_id UUID NOT NULL,
  "category" VARCHAR(50) NOT NULL,
  FOREIGN KEY (creator_id) REFERENCES users (id) ON DELETE CASCADE ON UPDATE CASCADE,
  created_at TIMESTAMPTZ DEFAULT NOW()
);