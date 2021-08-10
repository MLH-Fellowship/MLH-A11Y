#!/bin/sh
flask db migrate
flask db upgrade
<<<<<<< HEAD
<<<<<<< HEAD:entrypoint.sh
=======
>>>>>>> 505364ae1b8ec491e74f4f51e14f355e5d139288

if [ "$FLASK_ENV" = "development" ]
then
  echo "Running Flask Development Server"
  flask run --host=0.0.0.0 --port=5000
else
  gunicorn wsgi:app -w 1 -b 0.0.0.0:5000 --capture-output --log-level debug
fi
<<<<<<< HEAD
=======
gunicorn wsgi:app -w 1 -b 0.0.0.0:5000 --capture-output --log-level debug
# log-level prints flask logs
>>>>>>> 570f7481be49953626b0fbe00f536afd64813b82:api/entrypoint.sh
=======
>>>>>>> 505364ae1b8ec491e74f4f51e14f355e5d139288
