from flask import Blueprint
from flask import request
from flask import jsonify

from services.supabase_service import (
    SupabaseService
)

auth_bp = Blueprint(
    "auth",
    __name__,
    url_prefix="/api/auth"
)

supabase_service = SupabaseService()


@auth_bp.route(
    "/signup",
    methods=["POST"]
)
def signup():

    data = request.json

    result = supabase_service.signup(
        data["email"],
        data["password"]
    )

    return jsonify(
        result.user.model_dump()
    )


@auth_bp.route(
    "/login",
    methods=["POST"]
)
def login():

    data = request.json

    result = supabase_service.login(
        data["email"],
        data["password"]
    )

    return jsonify(
        {
            "access_token":
            result.session.access_token,

            "user_id":
            result.user.id,

            "email":
            result.user.email
        }
    )


@auth_bp.route(
    "/forgot-password",
    methods=["POST"]
)
def forgot_password():

    email = request.json["email"]

    supabase_service.reset_password(
        email
    )

    return jsonify(
        {
            "message":
            "Password reset email sent"
        }
    )