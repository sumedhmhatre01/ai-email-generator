from supabase import create_client
from config.settings import Config


class SupabaseService:

    def __init__(self):

        self.client = create_client(
            Config.SUPABASE_URL,
            Config.SUPABASE_KEY
        )

    # Authentication

    def signup(self, email, password):

        return self.client.auth.sign_up(
            {
                "email": email,
                "password": password
            }
        )

    def login(self, email, password):

        return self.client.auth.sign_in_with_password(
            {
                "email": email,
                "password": password
            }
        )

    def reset_password(self, email):

        return self.client.auth.reset_password_email(
            email
        )

    # Email Storage

    def save_email(self, data):

        print("Saving email:", data)

        result = self.client.table(
            "generated_emails"
        ).insert(
            data
        ).execute()

        print(
            "Supabase response:",
            result
        )

        return result

    def get_history(self, user_id):

        return self.client.table(
            "generated_emails"
        ).select("*").eq(
            "user_id",
            user_id
        ).order(
            "created_at",
            desc=True
        ).execute()

    # Favorites

    def add_to_favorites(
        self,
        email_id
    ):

        return self.client.table(
            "generated_emails"
        ).update(
            {
                "is_favorite": True
            }
        ).eq(
            "id",
            email_id
        ).execute()

    def get_favorites(
        self,
        user_id
    ):

        return self.client.table(
            "generated_emails"
        ).select("*").eq(
            "user_id",
            user_id
        ).eq(
            "is_favorite",
            True
        ).order(
            "created_at",
            desc=True
        ).execute()

    # Delete Email

    def delete_email(
        self,
        email_id
    ):

        return self.client.table(
            "generated_emails"
        ).delete().eq(
            "id",
            email_id
        ).execute()

    # Analytics

    def get_analytics(
        self,
        user_id
    ):

        result = self.client.table(
            "generated_emails"
        ).select("*").eq(
            "user_id",
            user_id
        ).execute()

        return result.data