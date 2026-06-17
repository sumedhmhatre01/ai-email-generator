from marshmallow import Schema, fields


class EmailSchema(Schema):

    prompt = fields.String(required=True)

    tone = fields.String(required=True)

    length = fields.String(required=True)


class LoginSchema(Schema):

    email = fields.Email(required=True)

    password = fields.String(required=True)


class SignupSchema(Schema):

    email = fields.Email(required=True)

    password = fields.String(required=True)