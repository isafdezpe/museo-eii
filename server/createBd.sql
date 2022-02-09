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
	foreign key (component_period_id) references periods(period_id),
	unique (component_name)
);

create table component_images (
	image_id int not null auto_increment,
	component_id int not null,
	image text not null,
	primary key (image_id, component_id),
	foreign key (component_id) references components(component_id)
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
	foreign key(cpu_id) references components(component_id)
);

