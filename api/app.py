import os
from flask import Flask, render_template, request
from werkzeug.security import check_password_hash, generate_password_hash
from flask_migrate import Migrate
from api.models import *

app = Flask(__name__)

app.config["SQLALCHEMY_DATABASE_URI"] = "postgresql+psycopg2://{user}:{passwd}@{host}:{port}/{table}".format(
    user=os.getenv("POSTGRES_USER"),
    passwd=os.getenv("POSTGRES_PASSWORD"),
    host=os.getenv("POSTGRES_HOST"),
    port=5432,
    table=os.getenv("POSTGRES_DB"),
)

app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False

db.init_app(app)
migrate = Migrate(app, db)


@app.route("/")
def index():
    return "hello"

@app.route("/login", methods=("GET", "POST"))
def login():
    username = "memo"
    password = "memo"
    user = User.query.filter_by(username=username).first()
    error = None
    if user is None:
        error = "Incorrect username"
    elif not check_password_hash(user.password, password):
        error = "Incorrect Password"
    
    if error is None:
        return "Logged in as {user}".format(user=username)
    else:
        return "Error: {error}".format(error=error)
    # if request.method == "POST":
    #     username = request.form.get("username")
    #     password = request.form.get("password")
    #     error = None
    #     user = User.query.filter_by(username=username).first()

    #     if user is None:
    #         error = "Incorrect username."
    #     elif not check_password_hash(user.password, password):
    #         error = "Incorrect password."

    #     if error is None:
    #         return "Login Successful", 200
    #     else:
    #         return error, 418

    # # TODO: Return a login page
    # return render_template("login.html", action_type="login"), 200


@app.route("/register", methods=("GET", "POST"))
def register():
    username = "memo"
    password = "memo"
    new_user = User(username, generate_password_hash(password))
    db.session.add(new_user)
    db.session.commit()
    return f"User {username} created successfully"
    
    # if request.method == "POST":
    #     username = request.form.get("username")
    #     password = request.form.get("password")
    #     error = None

    #     if not username:
    #         error = "Username is required."
    #     elif not password:
    #         error = "Password is required."
    #     elif User.query.filter_by(username=username).first() is not None:
    #         error = f"User {username} is already registered."

    #     if error is None:
    #         new_user = User(username, generate_password_hash(password))
    #         db.session.add(new_user)
    #         db.session.commit()
    #         return f"User {username} created successfully"
    #     else:
    #         return error, 418

    # # TODO: Return a restister page
    # return render_template("login.html", action_type="register"), 200


@app.route("/health")
def health():
    return "Health check ✅"


if __name__ == "__main__":
    app.run(host="0.0.0.0", debug=True)
