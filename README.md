# Rotten-Flix-Server Documentation

## Routes

### Movies
| Type    | Route           | Description   |
| ------- | --------------- | ------------- |
| GET     | /movies         | Fetches All Movies in Collection |
| GET     | /movies/:id     | Fetches Movie That Matches :id |
| POST    | /movies         | Creates New Movie |
| PUT     | /movies/:id     | Updates Existing Movie That Matches :id |
| DELETE  | /movies/:id     | Deletes Existing Movie That Matches :id |

### Ratings

| Type    | Route            | Description   |
| ------- | ---------------  | ------------- |
| GET     | /ratings         | Fetches All Ratings in Collection |
| GET     | /ratings/:id     | Fetches Ratings That Matches :id |
| POST    | /ratings         | Creates New Rating |
| PUT     | /ratings/:id     | Updates Existing Rating That Matches :id |
| DELETE  | /ratings/:id     | Deletes Existing Rating That Matches :id |