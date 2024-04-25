import psycopg2

# Values
status = '''
INSERT INTO
    status (name)
VALUES
    ('Draft'),
    ('In-Progress'),
    ('Done')
'''

task_type = '''
INSERT INTO
    task_type (name)
VALUES
    ('Portfolio'),
    ('Non-Portfolio'),
    ('Training and Personal Development'),
    ('Recruitment and Onboarding'),
    ('Performance Management'),
    ('Business/Resource Management'),
    ('Others (Portfolio)')
'''

projects = '''
INSERT INTO
    projects (name, task_type_id)
VALUES
    ('MARS', '1'),
    ('BSC', '1'),
    ('Development Training', '5'),
    ('Analytics Traning', '5'),
    ('Importation Parameters', '1')
'''

users = '''
INSERT INTO 
    users (name, last_name, first_name, middle_name, suffix_name, username, role)
VALUES 
    ('Administrator','Taino', 'Harvey Jose', 'Escobanas', '', 'administrator', 'admin'),
    ('Taino, Harvey Jose E.','Taino', 'Harvey Jose', 'Escobanas', '', 'harveytaino', 'user'),
    ('Celso, Krystle','Celso', 'Krystle', '', '', 'krystlecelso', 'user'),
    ('Mercado, Rainier Maalik','Mercado', 'Rainier Maalik', '', '', 'maalikmercado', 'user')
'''

task = '''
INSERT INTO
    task (name, description, task_type_id, user_id, status_id, project_id)
VALUES
    ('Creation of Docker File', 'docker.yaml configuration for new project', 4, 2, 3, 3),
    ('Creation of Database', 'Configuration of Backend for New Project', 4, 2, 3, 3),
    ('Creation of Frontend', 'Filesystem for New Project', 4, 2, 3, 3),
    ('Creation of Training Document', 'Guide Document for Development Output Based Training', 4, 3, 3, 3),
    ('Evaluate Output', 'Learnings and Progress of Interns', 4, 2, 1, 3),
    ('Create Spotfire Training Module', 'Guide Document for Analytics Output Based Training', 4, 4, 1, 3),
    ('Create Github Repository', 'Software Guide', 4, 2, 1, 3),
    ('Create CSSM Office Analytics Task', 'Software Guide', 4, 3, 1, 3)
'''

tables = [
    status,
    task_type,
    projects,
    users, 
    task
]

clear_tables = [
    'status',
    'task_type',
    'projects',
    'users',
    'task'
]

#Establishing the connection
conn = psycopg2.connect(
   database="postgres", 
   user='postgres', 
   password='secret', 
   host='postgres', 
   port= '5432'
)

#Creating a cursor object using the cursor() method
cursor = conn.cursor()

# Clean Tables
for clear_table in clear_tables:
    cursor.execute(f"TRUNCATE TABLE {clear_table} RESTART IDENTITY")

# Preparing SQL queries to INSERT a record into the database.
for table in tables:
    cursor.execute(table)


conn.commit()
print("Records inserted........")

# Closing the connection
conn.close()