from . import db
from flask_login import UserMixin
from sqlalchemy.sql import func
from sqlalchemy import text


class Note(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    data = db.Column(db.String(8000))
    date = db.Column(db.String(16), default=text("CONVERT(varchar(16), GETDATE(), 120)"))
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'))


class User(db.Model, UserMixin):
    id = db.Column(db.Integer, primary_key=True)
    first_name = db.Column(db.String(150))
    last_name = db.Column(db.String(150))
    email = db.Column(db.String(150), unique=True)
    password = db.Column(db.String(150))
    notes = db.relationship('Note')
