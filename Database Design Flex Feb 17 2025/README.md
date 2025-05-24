### To Do

- [ ] Primary Keys/Foreign Keys
- [ ] Naming Conventions
- [ ] Data Types
- [ ] Relationship Types
- [ ] Design Concepts
- [ ] Entity Relationship Diagrams

### Primary Keys

- PK - we serial number - PK as a string - Don't make it a value that can be changed. IE we don't want our PK to be an email.
- When naming the PK row, in LHL we want to call it ID. users Table serial id. FK that is where we want to use the user_id

### Naming Conventions

- SQL `SelecT * fRoM users;`
- Tables are Users, Videos, images
- snake_case

### Data Types

### Relationship

- One to One - One record in the first table is equal to one record
  1,000,000 - add a boolean for is_Admin - is_admin
- One to Many - One record in the first table is related to one ot more records from the second table. 1 youtube video has many comments
- Many to Many - One or more records from the first tables is related to one or more things from the second table. 1 Song has many artist and an artist has many songs. Bridging table Song has many Artist and artist has many songs - A song has many song_artist and an artist has many song_artist tables

### Design concepts for DB

- Make fields required based on initial values. Think of a login and the only thing you need for a login is a password and email. That is the only required item
- Intelligent default values - if you have a boolean don't always set it to null, pick a true or false value that most users will have as a default.
- Do not uses calculated fields. If you're making youtube and you're building a playlist feature and you want to show your users the total amount of time (in seconds) for the playlist. Do NOT make a field called "total_playlist_time"
- Pull repeat values as look up
- If you have values that are set. So think address or city names, rather than letting your users type that name out, just set those values in a table and let the user pick from that table
