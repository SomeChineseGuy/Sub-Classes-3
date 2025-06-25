-- what is the console.log

-- SELECT * FROM authors;

-- SELECT name, description from Authors;

-- WHERE 

-- SELECT * FROM authors WHERE funny IS false;
-- SELECT * FROM authors WHERE funny IS true;

-- SELECT * FROM JOKES WHERE rating > 4;
-- SELECT jokes.question, jokes.answer FROM JOKES ;

-- Ordering the results
-- SELECT * FROM JOKES 
-- WHERE rating > 4 
-- ORDER BY rating ASC
-- LIMIT 5;
-- toLowerCase()

-- SELECT *, Upper(question) as new_questions 
-- FROM JOKES
-- -- WHERE question LIKE '% monkeys %'; 
-- -- WHERE question LIKE '%keys%'; 
-- WHERE question LIKE '%m%'; 

-- SELECT * FROM jokes
-- LEFT JOIN authors
-- ON jokes.author_id = authors.id
-- ;

-- 

-- SELECT jokes.*, 
-- authors.name as author_name,
-- authors.description as author_description,
-- authors.funny as author_funny,
-- authors.id as author_id
-- FROM jokes
-- LEFT JOIN authors
-- ON jokes.author_id = authors.id
-- ;

-- Aggregate functions
SELECT author_id,
  Avg(rating),
  MIN(rating),
  MAX(rating)
FROM jokes
GROUP BY author_id
;

-- Remember to get the basics down

-- Bonus! View Read-Only
DROP VIEW IF EXISTS jokes_from_cool_authors;
CREATE VIEW jokes_from_cool_authors AS (
  SELECT 
    jokes.*,
    authors.name as author_name,
    authors.description as author_description,
    authors.funny as author_funny
  FROM JOKES
  LEFT JOIN authors
  on jokes.author_id = authors.id
);

SELECT * FROM jokes_from_cool_authors;