from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()


class User(db.Model):
    __tablename__ = "users"

    username = db.Column(db.String(), primary_key=True)
    password = db.Column(db.String())
    current_topic = db.Column(db.Integer)

    def __init__(self, username, password, current_topic):
        self.username = username
        self.password = password
        self.current_topic = current_topic

    def __repr__(self):
        return f"<User {self.username}>"
