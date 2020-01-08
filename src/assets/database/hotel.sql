create table pais (
codigo integer auto_increment,
pais varchar(25) not null,
estatus varchar(1),
primary key (codigo)
);

create table agencia(
codigo integer auto_increment,
nombre varchar(30) not null,
email varchar(40),
telefono integer (25),
estatus varchar(1),
primary key (codigo)
);

create table cupon(
codigo integer auto_increment,
nombre varchar(20),
descripcion varchar(140),
finicio date,
ffin date,
descuento varchar(10),
categoria integer,
estatus varchar(1),
primary key (codigo)
);

create table tipoHabitacion(
codigo integer auto_increment,
descripcion varchar(50),
categoria varchar(50),
bano varchar(2),
tv varchar(2),
aire varchar(2),
tarifa double(100,2),
estatus varchar(1),
primary key(codigo)
);

create table impuesto(
codigo integer auto_increment,
descripcion varchar(20),
tipo varchar(10),
cargo float(20,2),
estatus varchar(1),
primary key(codigo)
);

create table formaPago(
codigo integer auto_increment,
tipo varchar(15),
impuesto float(10,2),
estatus varchar(1),
primary key (codigo)
);

create table clienteTrabajador(
codigo integer auto_increment,
tipoDocumento varchar(20),
nroDocumento varchar(25),
nacionalidad varchar(20),
nombre varchar(30),
apellido varchar(30),
fNacimiento date,
sexo varchar(1),
codPais integer,
direccion text,
tipo varchar(1),
email varchar(40),
telefono bigint(20),
profesion varchar(30),
urlDNI text,
estatus varchar(1),
primary key(codigo),
foreign key (codPais) references pais(codigo)
);

create table usuario(
username varchar(10),
clave varchar(15),
rol varchar(1),
urlFotoPerfil text,
codTrabajador integer,
estatus varchar(1),
primary key (username),
foreign key(codTrabajador) references clienteTrabajador (codigo)
);

create table habitacion(
codigo integer auto_increment,
codTipoHab integer,
nombre varchar(10),
piso integer(2),
capacidad integer(2),
estadoHabitacion varchar(10),
estatus varchar(1),
primary key(codigo),
foreign key(codTipoHab) references tipoHabitacion(codigo)
);

create table reserva(
codigo integer auto_increment,
finicio date,
fFin date,
tipoDocumento varchar(20),
nroDocumento varchar(25),
nombre varchar(50),
codAgencia integer,
codCupon integer,
cantidadPersonas integer(2),
desayuno varchar(1),
tarifa double(100,2),
impuesto double(10,2),
estadoReserva varchar(10),
estatus varchar(1),
primary key(codigo),
foreign key(codAgencia) references agencia(codigo),
foreign key(codCupon) references cupon(codigo)
);

create table caja(
codigo integer auto_increment,
fCreacion datetime,
montoApertura double(100,2),
user varchar(10),
estado varchar(10),
fCierre datetime,
montoCierre double(100,2),
estatus varchar(1),
primary key(codigo),
foreign key(user) references usuario(username)
);

create table egreso(
codigo integer auto_increment,
descripcion varchar(20),
cantidad integer(10),
costo double(100,2),
fIngreso datetime,
codCaja integer,
estatus varchar(1),
primary key(codigo),
foreign key(codCaja) references caja(codigo)
);


create table checkIn(
codReserva integer,
codCliente integer,
fIngreso datetime,
fSalida datetime,
codAgencia integer,
codHabitacion integer,
desayuno varchar(1),
urlDNI text,
urlDNIReverso text,
urlSelloIngreso text,
estatus varchar(1),
constraint codigoCheckIn primary key(codReserva,codCliente,codHabitacion),
foreign key(codReserva) references reserva(codigo),
foreign key(codCliente) references clienteTrabajador(codigo),
foreign key(codHabitacion) references habitacion(codigo)
);


create table checkOut(
codReservaOut integer,
codClienteSalida integer,
codHabSalida integer,
fSalida datetime,
checkOutLate integer(2),
cargoAdicional double(100,2),
tarifaHabitacion double(100,2),
impuesto double(100,2),
tipoPago integer,
observaciones varchar(140),
codCaja integer,
estatus varchar(1),
constraint codigoCheckOut primary key(codReservaOut,codClienteSalida,codHabSalida),
foreign key(codReservaOut,codClienteSalida,codHabSalida) references checkIn(codReserva,codCliente,codHabitacion),
foreign key(codCaja) references caja(codigo),
foreign key(tipoPago) references formaPago(codigo)
);