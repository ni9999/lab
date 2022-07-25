
-- create
CREATE TABLE EMPLOYEE (
  id INTEGER NOT NULL,
  name TEXT NOT NULL,
  dept TEXT NOT NULL,
  report_id varchar(20) NOT NULL,
  CONSTRAINT EMPLOYEE_primary PRIMARY KEY(id, report_id)
);

-- insert
INSERT INTO EMPLOYEE VALUES (0001, 'Clark', 'Sales', "003");
INSERT INTO EMPLOYEE VALUES (0002, 'Dave', 'Accounting', "003");
INSERT INTO EMPLOYEE VALUES (0003, 'Ava', 'Sales', "003");
INSERT INTO EMPLOYEE VALUES (0001, 'Clark', 'Sales', "004");
INSERT INTO EMPLOYEE VALUES (0002, 'Dave', 'Accounting', "004");
INSERT INTO EMPLOYEE VALUES (0003, 'Ava', 'Sales', "004");
-- fetch 

--When MySQL's only_full_group_by mode is turned on, it means that strict ANSI SQL rules will apply when using GROUP BY. With regard to your query, this means that if you GROUP BY of the proof_type column, then you can only select two things:
-- we can try turning off
-- or use aggregates --> min max average
SELECT id, min(name), min(dept) FROM EMPLOYEE group by id;