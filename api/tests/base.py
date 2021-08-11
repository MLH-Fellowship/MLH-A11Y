import unittest
from src.app import app, db


class FlaskTest(unittest.TestCase):
   """A base test case."""

   # Check for 200 response on '/health' endpoint
   def test_health_page(self):
      tester = app.test_client(self)
      response = tester.get('/health')
      status_code = response.status_code
      self.assertEqual(status_code, 200)

   # def setup_db(self):
   #    new_user = User(username, generate_password_hash(password))
   #    db.session.add(new_user)
   #    db.session.commit()


   # def test_

   #  def create_app(self):
   #      app.config.from_object('config.TestConfig')
   #      return app

   #  def setUp(self):
   #      db.create_all()
   #      db.session.add(User("admin", "ad@min.com", "admin"))
   #      db.session.add(
   #          BlogPost("Test post", "This is a test. Only a test.", "admin"))
   #      db.session.commit()

   #  def tearDown(self):
   #      db.session.remove()
   #      db.drop_all()

if __name__ == '__main__':
   unittest.main()