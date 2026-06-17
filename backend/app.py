from flask import Flask
from flask_cors import CORS

from config.settings import Config

from routes.auth_routes import auth_bp
from routes.email_routes import email_bp
from routes.export_routes import export_bp


def create_app():

    app = Flask(__name__)

    app.config.from_object(Config)

    CORS(
        app,
        resources={r"/*": {"origins": "*"}}
    )

    app.register_blueprint(auth_bp)
    app.register_blueprint(email_bp)
    app.register_blueprint(export_bp)

    @app.route("/")
    def home():
        return {
            "status": "success",
            "message": "AI Email Generator API Running"
        }

    return app


app = create_app()

if __name__ == "__main__":
    app.run()