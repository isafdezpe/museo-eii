create table periods (
	period_id int not null auto_increment,
	period_name varchar(50) not null,
	period_details text not null,
	period_trivia text not null,
	period_events text not null,
	primary key(period_id),
	unique (period_name)
);

create table components (
	component_id int not null auto_increment,
	component_name varchar(50) not null,
	component_description text not null,
	component_family text not null,
	component_type text not null,
	component_year_init int default '0' not null,
	component_year_end int default '0' not null,
	component_price decimal(10,2) default '0.00' not null,
	component_price_units varchar(10) default '$' not null,
	component_devices text not null,
	famous_system text not null,
	famous_system_img text not null,
	component_period_id int not null,
	primary key(component_id),
	foreign key (component_period_id) references periods(period_id) on delete cascade,
	unique (component_name)
);

create table component_images (
	image_id int not null auto_increment,
	component_id int not null,
	image text not null,
	primary key (image_id, component_id),
	foreign key (component_id) references components(component_id) on delete cascade
);

create table cpus (
	cpu_id int not null,
	program_memory int default '0' not null,
	program_memory_units varchar(10) default '' not null,
	ram_memory int default '0' not null,
	ram_memory_units varchar(10) default '' not null,
	clockspeed decimal(10,3) default '0.000' not null,
	clockspeed_units varchar(10) default '' not null,
	cpu_power decimal(10,3) default '0.000' not null,
	cpu_power_units varchar(10) default '' not null,
	wordsize int default '0' not null,
	wordsize_units varchar(10) default '' not null,
	transistor_size int default '0' not null,
	transistor_size_units varchar(10) default '' not null,
	passmark decimal(10,3) default '0.000' not null,
	transistors int default '0' not null,
	primary key(cpu_id),
	foreign key(cpu_id) references components(component_id) on delete cascade
);

create table administrator (
	email varchar(100) not null,
	pwd blob not null,
	primary key (email)
);

insert into administrator (email, pwd) values ("uo257829@uniovi.es", AES_ENCRYPT("museoinfo2022", 'museum_key_crypt'));

insert into periods (period_name, period_details, period_trivia, period_events) values ("CPUs pre-x86", 
"El 4004 formaba parte de la familia de chips MCS, que complementaban sus funciones.\nSus sucesores 4040, 8080 y 8085 tenían su propia familia de chips de soporte.",
"Intel originalmente fabricaba solo chips de memoria y se inició en la fabricación de CPUs con estos modelos.\nEstos chips no tienen memoria caché ni tiene sentido hablar de velocidad de bus.",
"1970: Apollo 13\n1971: email\n1971: Floppy, pantallas LCD");

insert into periods (period_name, period_details, period_trivia, period_events) values ("8086 y 8088", 
"CPUs x86, de 16 bits y primera generación.\nSe diseñaron para que portar programas de su antecesor (Intel 8080) fuera automático.",
"En 1981 IBM quería crear su PC con CPUs Intel, pero a condición de que existiese un 2º productor de las mismas.\nPor ello, Intel y AMD hicieron un acuerdo de intercambio tecnológico de 10 años.",
"1970: Apollo 13\n1971: email\n1971: Floppy, pantallas LCD");

insert into components(component_name, component_description, component_family, component_type, component_year_init, component_year_end, component_price, component_price_units, component_devices, famous_system, famous_system_img, component_period_id) values (
"Intel 4004", "Desarrollado para calculadoras de la marca Busicom, se instaló en máquinas de Pinball y fue candidato a instalarse en la nave espacial Pioneer 10. Existe una réplica funcional de 41x58cm en el Intel Museum de California.",
"Intel", "CPU", 1971, 1981, 1800, '$', "DESKTOP,PORTABLE", "Busicom 141PF", "Busicom 141PF.jpeg", 1);

insert into component_images(component_id, image) values (1, "4004-1.jpeg");
insert into component_images(component_id, image) values (1, "4004-2.jpeg");
insert into component_images(component_id, image) values (1, "4004-3.jpeg");

insert into cpus(cpu_id, program_memory, program_memory_units, ram_memory, ram_memory_units, clockspeed, clockspeed_units, cpu_power, cpu_power_units, wordsize, wordsize_units, transistor_size, transistor_size_units, passmark, transistors) values (
1, 4, "KB", 640, "b", 740, "KHz", 0.45, "W", 4, "b", 10000, "nm", 0.03, 2300);

insert into components(component_name, component_description, component_family, component_type, component_year_init, component_year_end, component_price, component_price_units, component_devices, famous_system, famous_system_img, component_period_id) values (
"Intel 8008", "Sucesor de 8 bits del 4004. Creado para el ordenador DataPoint 2200, pero no usado por su bajo rendimiento. Usado en terminales, embotelladoras, robots y computadoras simples. Tenía un juego de instrucciones propio.",
"Intel", "CPU", 1972, 1983, 120, '$', "DESKTOP", "Datapoint 2200", "Datapoint 2200.jpeg", 1);

insert into component_images(component_id, image) values (2, "8008-1.jpeg");
insert into component_images(component_id, image) values (2, "8008-2.jpeg");
insert into component_images(component_id, image) values (2, "8008-3.jpeg");

insert into cpus(cpu_id, program_memory, program_memory_units, ram_memory, ram_memory_units, clockspeed, clockspeed_units, cpu_power, cpu_power_units, wordsize, wordsize_units, transistor_size, transistor_size_units, passmark, transistors) values (
2, 16, "KB", 0, "", 200, "KHz", 1, "W", 8, "b", 10000, "nm", 0.016, 3500);

insert into components(component_name, component_description, component_family, component_type, component_year_init, component_year_end, component_price, component_price_units, component_devices, famous_system, famous_system_img, component_period_id) values (
"Intel 4040", "Uno de los dos sucesores del 4004 junto con el 8008, igualmente de 4 bits, pero que incorporaba nuevas instrucciones, registros y soporte para interrupciones hardware.",
"Intel", "CPU", 1974, 1981, 200, '$', "DESKTOP,PORTABLE", "Gottlieb Flying Carpet", "Gottlieb Flying Carpet", 1);

insert into component_images(component_id, image) values (3, "4040-1.jpeg");
insert into component_images(component_id, image) values (3, "4040-2.jpeg");
insert into component_images(component_id, image) values (3, "4040-3.jpeg");

insert into cpus(cpu_id, program_memory, program_memory_units, ram_memory, ram_memory_units, clockspeed, clockspeed_units, cpu_power, cpu_power_units, wordsize, wordsize_units, transistor_size, transistor_size_units, passmark, transistors) values (
3, 8, "KB", 640, "b", 740, "KHz", 0.6, "W", 4, "b", 10000, "nm", 0.03, 3000);

insert into components(component_name, component_description, component_family, component_type, component_year_init, component_year_end, component_price, component_price_units, component_devices, famous_system, famous_system_img, component_period_id) values (
"Intel 8086", "Era de gran complejidad para su época, motivo por el cual tardó 2 años en producirse.",
"Intel", "CPU", 1978, 1999, 86, '$', "DESKTOP", "Busicom 141PF", "Busicom 141PF.jpeg", 2);

insert into component_images(component_id, image) values (4, "8086-1.jpeg");
insert into component_images(component_id, image) values (4, "8086-2.jpeg");
insert into component_images(component_id, image) values (4, "8086-3.jpeg");

insert into cpus(cpu_id, program_memory, program_memory_units, ram_memory, ram_memory_units, clockspeed, clockspeed_units, cpu_power, cpu_power_units, wordsize, wordsize_units, transistor_size, transistor_size_units, passmark, transistors) values (
4, 0, "", 1, "MB", 10, "MHz", 1.7, "W", 36, "b", 3000, "nm", 0.21, 29000);

insert into components(component_name, component_description, component_family, component_type, component_year_init, component_year_end, component_price, component_price_units, component_devices, famous_system, famous_system_img, component_period_id) values (
"Intel 8088", "CPU del IBM PC XT original de 1983.",
"Intel", "CPU", 1979, 1998, 124, '$', "DESKTOP", "Datapoint 2200", "Datapoint 2200.jpeg", 2);

insert into component_images(component_id, image) values (5, "8088-1.jpeg");
insert into component_images(component_id, image) values (5, "8088-2.jpeg");
insert into component_images(component_id, image) values (5, "8088-3.jpeg");

insert into cpus(cpu_id, program_memory, program_memory_units, ram_memory, ram_memory_units, clockspeed, clockspeed_units, cpu_power, cpu_power_units, wordsize, wordsize_units, transistor_size, transistor_size_units, passmark, transistors) values (
5, 0, "", 1, "MB", 10, "MHz", 1.87, "W", 8, "b", 3000, "nm", 0.12, 29000);