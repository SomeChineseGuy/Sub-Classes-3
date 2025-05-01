# W05D02 - Database Design

### To Do

- [ ] Primary Keys/Foreign Keys
- [ ] Naming Conventions
- [ ] Data Types
- [ ] Relationship Types
- [ ] Design Concepts
- [ ] Entity Relationship Diagrams
- [ ] Activity: Convert 2 Spreadsheets
- [ ] Student Suggestion ERD(s)

### Primary Key

- A way of id-ing any item in a database
- Serial numbering
- PK can be something else - email, username or some combination of both
- Data types? - Float Int, text, varchar, integer, bigint, serial is another data type BUT can only be used for ID

### Naming Conventions

- Tables and fields names are written in `snake_case`
- SelEcT \* FROM cUsToMErS;
- Tables are always pluralized
- Primary key id Users Pk id serialized user_id
- FK trying to connect to the users table -> FK user_id

### Datatypes

- Each field MUST have a data type defined, email -> varchar(255) or a text

email -> text length and the DB saves 100000

varchar (255)
text

- Choosing the perfect type of datatype is gonna save you space in the long run and help explain your DB to others when they read your ERD

### Relationship Types

- One - to - one : One Record in the first table is related to one (and only one ) recond in the second table
- users table and some users can be admins. 100,000,000 only 500 999,999,500

- One - to - Many One record has many of the second table.

- Many - to - Many - Many items needs many items - going to create a bridge table and you'll have a many to many for that table

### Design concepts

- Make Fields require based on the record state upon the initial creation.
- Give your users very little control of your database
  "sjasiobatiibb===oon" "Saskatoon"
- Seperate whenever you can do not do name, but always do first_name last_name
- When doing money or something of numbers, always pick the LOWEST value as your number ie don't use dollars uses cents
- NEVER EVER Delete ANYTHING, nothing on the internet will be deleted anyways
