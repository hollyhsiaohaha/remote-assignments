-- Active: 1695022465757@@127.0.0.1@3306@assignment

--  select all articles with their author’s email
SELECT a.id, a.title, a.content, b.email as author_email
FROM article a
LEFT JOIN user b ON a.author_id = b.id;

--  sselect articles from 7th to 12th sorted by id
SELECT * FROM
	(SELECT *
	FROM article
	LIMIT 5 OFFSET 6) a
ORDER BY `id`
;
