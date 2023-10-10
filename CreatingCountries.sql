create table Countries(
    country_id int identity(1, 1) primary key,
    country_name varchar(50) not null
);

INSERT INTO Countries (country_name)
VALUES
('Albania'), 
('Andorra'), 
('Australia'), 
('Brazil'),
('Belgium'), 
('Canada'), 
('China'),
('France'),
('Germany'),
('India'),
('Indonesia'),
('Ireland'),
('Italy'),
('Japan'),
('Kenya'),
('Lithuania'),
('Luxembourg'),
('Mexico'),
('New Zealand'),
('Nigeria'),
('Portugal'),
('Russia'),
('South Africa'),
('South Korea'),
('Spain'),
('Sweden'),
('Thailand'),
('Ukraine'),
('United Kingdom'),
('United States of America'),
('Vietnam'),
('Zambia');



select * from Countries;