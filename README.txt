==== RUN DJANGO CMD ======
• python manage.py runserver
• python manage.py startapp <NameApp>
• python manage.py createsuperuser
• python manage.py migrate              #which is responsible for applying and unapplying migrations.
• python manage.py makemigrations       #which is responsible for creating new migrations based on the changes you have made to your models.
• python manage.py sqlmigrate           #which displays the SQL statements for a migration.
• python manage.py showmigrations       #which lists a project’s migrations and their status.

• celery -A appmanager worker -l info -P eventlet
• celery -A appmanager beat -l info
sudo service redis-server restart
=== OUTPUT LIBRARIAN PIP ===
pip freeze > requirements.txt

=== LIBRARIAN REACT ===
axios
react
react-dom
react-redux
react-router-dom 
react-scripts 
redux
redux-thunk 

=== THEME UI ===
tailwindcss
semantic-ui-react
ant-design
mui-design

+++
Creater user
PUT localhost:8000/api/v1/register/  {username: "", password : "" , email=""}
-----
PUT localhost:8000/api/v1/token/  {username: "", password : ""}
