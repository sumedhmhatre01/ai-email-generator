create table public.generated_emails (
  id bigint generated always as identity not null,
  user_id text not null,
  subject text null,
  email_body text null,
  tone text null,
  length text null,
  is_favorite boolean null default false,
  created_at timestamp with time zone null default now(),
  constraint generated_emails_pkey primary key (id)
) TABLESPACE pg_default;