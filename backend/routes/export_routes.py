from flask import Blueprint
from flask import send_file
from flask import request

from services.pdf_service import (
    PDFService
)

export_bp = Blueprint(
    "export",
    __name__,
    url_prefix="/api/export"
)


@export_bp.route(
    "/pdf",
    methods=["POST"]
)
def export_pdf():

    content = request.json["content"]

    pdf = PDFService.create_pdf(
        content
    )

    return send_file(
        pdf,
        as_attachment=True,
        download_name="email.pdf",
        mimetype="application/pdf"
    )