CREATE TABLE organizaciones(
	id_org int(11) not null auto_increment primary key,
    razon_social_org varchar(150) not null,
    descripcion_org varchar(500) not null,    
    direccion_org varchar(350) not null,
    cuit_org int(15) not null unique,
    rubro_org varchar(150) not null,    
    actividad_org varchar(200) not null,
    telefono_org int(20) not null,
    email_org varchar(150),
    created_at timestamp default current_timestamp
);

CREATE TABLE comerciantes(
	id_comer int(11) not null auto_increment primary key,
    nombre_comer varchar(150) not null,
    apellido_comer varchar(150) not null,
    dni_comer int(10) not null,
    organismo_comer varchar(200) not null,
    direccion_comer varchar(350) not null,
    localidad_comer varchar(150),
    created_at timestamp default current_timestamp
);

CREATE TABLE certificados_empleados(
	id_emp int(11) not null auto_increment primary key,
    nombre_emp varchar(150) not null,
    apellido_emp varchar(150) not null,
    dni_emp int(10) not null,    
    telefono_emp int(20),
    direccion_emp varchar(350) not null,
    localidad_emp varchar(150),    
    hora_ingreso_emp time not null,
    hora_salida_emp time not null,
    created_at timestamp default current_timestamp
);


DROP TABLE comerciantes;

select * from comerciantes;


CREATE TABLE comerciantes_empleados(
	comerciantes_id_comer INT,
    empleados_id_emp INT,
    constraint fkcomerciantes
    foreign key(comerciantes_id_comer) 
    references comerciantes(id_comer),
    constraint fkempleados
    foreign key(empleados_id_emp)
    references certificados_empleados(id_emp)
);

INSERT INTO certificados_empleados (nombre_emp,apellido_emp,dni_emp,cuit_cuil_emp,num_cuit_cuil_emp,telefono_emp,direccion_emp,hora_ingreso_emp,hora_salida_emp,dias_lab_emp,empleado_cuit_org) 
values ("gaston","fuentes",33445544,"CUIL",77667766,88776655,"SANTA CRUZ","08:00","13:00","LUNES Y MARTES",45667788);

INSERT INTO organizaciones (razon_social_org,descripcion_org,direccion_org,cuit_org,rubro_org,actividad_org,telefono_org,email_org,inciso_org) 
values ("dalee","dada","santa fe",45667788,"comercio","ferreteria",33445566,"mayor@lala","inciso5");


-- modificar --
alter table organizaciones add inciso_org varchar(500) not null after email_org;  
select * from organizaciones; 


-- modificar TABLA EMPLEADOS--
alter table certificados_empleados add dias_lab_emp varchar(150) not null after hora_salida_emp;  
select * from certificados_empleados; 
-------------------------------------------

alter table certificados_empleados add empleado_id_org INT after dias_lab_emp;  


    empleados_id_emp INT,
    constraint fkcomerciantes
    foreign key(comerciantes_id_comer) 
    references comerciantes(id_comer),


-- eliminar
alter table certificados_empleados drop cuit_cuil_emp ;  

