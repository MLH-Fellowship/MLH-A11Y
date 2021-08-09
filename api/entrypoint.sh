#!/bin/sh
flask db migrate
flask db upgrade
<<<<<<< HEAD:entrypoint.sh

if [ "$FLASK_ENV" = "development" ]
then
  echo "Running Flask Development Server"
  flask run --host=0.0.0.0 --port=80
else
  gunicorn wsgi:app -w 1 -b 0.0.0.0:80 --capture-output --log-level debug
fi
=======
gunicorn wsgi:app -w 1 -b 0.0.0.0:5000 --capture-output --log-level debug
# log-level prints flask logs
>>>>>>> 570f7481be49953626b0fbe00f536afd64813b82:api/entrypoint.sh
