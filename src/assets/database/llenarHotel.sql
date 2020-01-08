insert into pais (pais,estatus) values ('ARGENTINA','A');
insert into pais (pais,estatus) values ('BRASIL','A');
insert into pais (pais,estatus) values ('BOLIVIA','A');
insert into pais (pais,estatus) values ('COLOMBIA','A');
insert into pais (pais,estatus) values ('CANADA','A');
insert into pais (pais,estatus) values ('CHILE','A');
insert into pais (pais,estatus) values ('ECUADOR','A');
insert into pais (pais,estatus) values ('EEUU','A');
insert into pais (pais,estatus) values ('ESPANA','A');
insert into pais (pais,estatus) values ('FRANCIA','A');
insert into pais (pais,estatus) values ('HOLANDA','A');
insert into pais (pais,estatus) values ('ITALIA','A');
insert into pais (pais,estatus) values ('JAPON','A');
insert into pais (pais,estatus) values ('MEXICO','A');
insert into pais (pais,estatus) values ('PARAGUAY','A');
insert into pais (pais,estatus) values ('PERU','A');
insert into pais (pais,estatus) values ('URUGUAY','A');
insert into pais (pais,estatus) values ('VENEZUELA','A');


insert into agencia(nombre,email,telefono,estatus) values ('TRIPADVISOR','agencia@ejemplo.com',00549123456'A');
insert into agencia(nombre,email,telefono,estatus) values ('BOOKING','agencia@ejemplo.com',00549123456,'A');
insert into agencia(nombre,email,telefono,estatus) values ('DESPEGAR.COM','agencia@ejemplo.com',00549123456,'A');
insert into agencia(nombre,email,telefono,estatus) values ('TRIVAGO','agencia@ejemplo.com',00549123456,'A');

insert into cupon(nombre,descripcion,finicio,ffin,estatus) values ('PRUEBA','ESTO ES UN CUPON INVALIDO','2019-12-27','2019-12-31','A');
insert into cupon(nombre,descripcion,finicio,ffin,estatus) values ('PRIMERARESERVA','OBTIENE DESAYUNO GRATIS','2019-12-27','2019-12-31','A');
insert into cupon(nombre,descripcion,finicio,ffin,estatus) values ('PRIME','OBTIENE TOUR GRATIS','2019-12-27','2019-12-31','A');

insert into tipoHabitacion(descripcion,categoria,bano,tv,aire,tarifa,estatus) values ('TRIPLE','UNA NOCHE','C','NO','NO',900,00,'A');
insert into tipoHabitacion(descripcion,categoria,bano,tv,aire,tarifa,estatus) values ('DOBLE','MENSUAL','C','NO','NO',12000.00,'A');
insert into tipoHabitacion(descripcion,categoria,bano,tv,aire,tarifa,estatus) values ('CUADRUPLE','UNA NOCHE','P','SI','SI',3000.00,'A');

insert into formaPago(tipo,impuesto,estatus) values ('EFECTIVO',0,'A');
insert into formaPago(tipo,impuesto,estatus) values ('DEBITO',0,'A');
insert into formaPago(tipo,impuesto,estatus) values ('CREDITO',0.21,'A');

insert into clienteTrabajador
(tipoDocumento,nroDocumento,nacionalidad,nombre,apellido,fNacimiento,sexo,codPais,direccion,tipo,profesion,estatus) 
values ('PASAPORTE','088417484','VENEZOLANA','MARIA','SUAREZ','1991-10-24','F',1,'PERU 1053','H','ANALISTA DE SISTEMAS','A');
insert into clienteTrabajador
(tipoDocumento,nroDocumento,nacionalidad,nombre,apellido,fNacimiento,sexo,codPais,direccion,tipo,profesion,estatus) 
values ('PASAPORTE','352689471','CHILENA','JUAN','PEREZ','1998-02-20','M',6,'SANTIAGO DE CHILE','G','COMERCIANTE','A');
insert into clienteTrabajador
(tipoDocumento,nroDocumento,nacionalidad,nombre,apellido,fNacimiento,sexo,codPais,direccion,tipo,profesion,estatus) 
values ('DNI','95951748','VENEZOLANA','MILIBETH','OCHOA','1996-03-27','F',1,'PASEO COLON 1219','G','PSICOLOGA','A');

insert into usuario(username,clave,rol,codTrabajador,estatus)
values ('magabriela','0000',1,1,'A');

insert into habitacion(codTipoHab,nombre,piso,capacidad,estadoHabitacion,estatus)
values (1,'010',0,2,'DISPONIBLE','A');
insert into habitacion(codTipoHab,nombre,piso,capacidad,estadoHabitacion,estatus)
values (2,'101',1,3,'OCUPADA','A');
insert into habitacion(codTipoHab,nombre,piso,capacidad,estadoHabitacion,estatus)
values (3,'208',2,2,'OCUPADA','A');
insert into habitacion(codTipoHab,nombre,piso,capacidad,estadoHabitacion,estatus)
values (4,'104',1,3,'EN LIMPIEZA','A');

insert into reserva(finicio,ffin,tipoDocumento,nroDocumento,nombre,codAgencia,codCupon,cantidadPersonas,desayuno,tarifa,estatus)
values('2019-12-20','2019-12-23','PASAPORTE','352689471','JUAN PEREZ',1,1,2,'S',800.00,'A');
insert into reserva(finicio,ffin,tipoDocumento,nroDocumento,nombre,codAgencia,codCupon,cantidadPersonas,desayuno,tarifa,estatus)
values('2019-12-28','2019-12-31','DNI','95951748','MILIBETH OCHOA',2,3,3,'S',1500.00,'A');

insert into caja(fCreacion,montoApertura,user,estado,estatus)
values('2019-12-28 16:04:58',100.00,'magabriela','ABIERTA','A');

insert into egreso(descripcion,cantidad,costo,fIngreso,codCaja,estatus)
values('MEDIA LUNA',24,8.00,'2019-12-28 16:06:05',2,'A');

insert into checkIn(codReserva,codCliente,fIngreso,fSalida,codAgencia,codHabitacion,desayuno,estatus)
values(1,2,'2019-12-20 12:00:01','2019-12-23 10:00:00',1,3,'S','A');

insert into checkOut(codReservaOut,codClienteSalida,codHabSalida,fSalida,codCaja,estatus)
values(1,2,3,'2019-12-23 13:00:01',2,'A');

update habitacion set estadoHabitacion='LIMPIEZA' where codigo=3;
