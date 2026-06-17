from flask import Blueprint
from flask import request
from flask import jsonify

from services.gemini_service import (
    GeminiService
)

from services.supabase_service import (
    SupabaseService
)

email_bp = Blueprint(
    "email",
    __name__,
    url_prefix="/api/email"
)

gemini_service = GeminiService()

supabase_service = SupabaseService()


# Generate Email

@email_bp.route(
    "/generate",
    methods=["POST"]
)
def generate_email():

    data = request.json

    prompt = data["prompt"]

    tone = data["tone"]

    length = data["length"]

    result = gemini_service.generate_email(
        prompt=prompt,
        tone=tone,
        length=length
    )

    subject = None

    if result.startswith("Subject:"):

        subject = result.split(
            "\n"
        )[0]

        subject = subject.replace(
            "Subject:",
            ""
        ).strip()

    user_id = data.get(
        "user_id"
    )

    supabase_service.save_email(
        {
            "user_id": user_id,
            "subject": subject,
            "email_body": result,
            "tone": tone,
            "length": length
        }
    )

    return jsonify(
        {
            "generated_email":
            result
        }
    )


# History

@email_bp.route(
    "/history/<user_id>",
    methods=["GET"]
)
def get_history(user_id):

    result = supabase_service.get_history(
        user_id
    )

    return jsonify(
        result.data
    )


# Add To Favorites

@email_bp.route(
    "/favorite/<int:email_id>",
    methods=["PUT"]
)
def favorite_email(email_id):

    result = supabase_service.add_to_favorites(
        email_id
    )

    return jsonify(
        result.data
    )


# Get Favorites

@email_bp.route(
    "/favorites/<user_id>",
    methods=["GET"]
)
def get_favorites(user_id):

    result = supabase_service.get_favorites(
        user_id
    )

    return jsonify(
        result.data
    )


# Delete Email

@email_bp.route(
    "/delete/<int:email_id>",
    methods=["DELETE"]
)
def delete_email(email_id):

    result = supabase_service.delete_email(
        email_id
    )

    return jsonify(
        {
            "message":
            "Email deleted successfully",
            "data":
            result.data
        }
    )


# Analytics

@email_bp.route(
    "/analytics/<user_id>",
    methods=["GET"]
)
def get_analytics(user_id):

    result = supabase_service.get_analytics(
        user_id
    )

    return jsonify(
        result
    )