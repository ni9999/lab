-- url:https://onecompiler.com/mysql/3yawrk75k


-- create
CREATE TABLE students (
            id VARCHAR(20) PRIMARY KEY, 
            name TEXT NOT NULL, 
            submission_time TEXT NOT NULL, 
            submit_id TEXT NOT NULL, 
            obtained_marks INTEGER
);


INSERT INTO students (id, name, submission_time, submit_id) VALUES ('12345', 'abc', 'Sun Jul 24 2022 08:22:56 GMT+0000 (Coordinated Universal Time)', '12345_abc');
INSERT INTO students (id, name, submission_time, submit_id) VALUES ('12346', 'abcd', 'Sun Jul 24 2022 08:25:34 GMT+0000 (Coordinated Universal Time)', '12346_abcd');
INSERT INTO students (id, name, submission_time, submit_id) VALUES ('12347', 'abcde', 'Sun Jul 24 2022 08:26:38 GMT+0000 (Coordinated Universal Time)', '12347_abcde');


update students set obtained_marks = 39 where id = 12345;


CREATE TABLE if not exists students (
            id VARCHAR(20) PRIMARY KEY, 
            name TEXT NOT NULL, 
            submission_time TEXT NOT NULL, 
            submit_id TEXT NOT NULL, 
            obtained_marks INTEGER
);



-- fetch 
SELECT * FROM students;