import google.generativeai as genai

from config.settings import Config


class GeminiService:

    def __init__(self):

        genai.configure(
            api_key=Config.GEMINI_API_KEY
        )

        self.model = genai.GenerativeModel(
            "gemini-2.5-flash"
        )

    def generate_email(
        self,
        prompt,
        tone,
        length
    ):

        final_prompt = f"""
        Generate a professional email.

        Tone:
        {tone}

        Length:
        {length}

        User Request:
        {prompt}

        Return:

        Subject:
        Email:
        """

        response = self.model.generate_content(
            final_prompt
        )

        return response.text