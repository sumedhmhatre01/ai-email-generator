from dotenv import load_dotenv
from pathlib import Path
import os

BASE_DIR = Path(__file__).resolve().parent.parent.parent

load_dotenv(BASE_DIR / ".env")


class Config:

    SECRET_KEY = os.getenv("SECRET_KEY")

    GEMINI_API_KEY = os.getenv("GEMINI_API_KEY")

    SUPABASE_URL = os.getenv("SUPABASE_URL")

    SUPABASE_KEY = os.getenv("SUPABASE_KEY")