
/*
comandos para mysql server
*/

CREATE DATABASE partiuwally;

USE partiuwally;

CREATE TABLE usuario (
	idUsuario INT PRIMARY KEY AUTO_INCREMENT,
	nome varchar(80),
	email varchar(267),
    senha varchar(45),
    dtNasc date
);

CREATE TABLE feedback (
	idFeedback INT AUTO_INCREMENT,
    fkUsuario INT,
    PRIMARY KEY (idFeedback, fkUsuario),
	assunto VARCHAR(45),
	comentario VARCHAR(200),
	FOREIGN KEY (fkUsuario) REFERENCES usuario(idUsuario),
    dataHora timestamp not null default current_timestamp
);

create table favorito (
	fkUsuario INT,
	fkFeedback INT,
	PRIMARY KEY (fkUsuario, fkFeedback),
	FOREIGN KEY (fkUsuario) REFERENCES usuario(idUsuario),
    FOREIGN KEY (fkFeedback) REFERENCES feedback(idfeedback),
    dataHora timestamp not null default current_timestamp
);


insert into usuario(nome,email,senha,dtNasc) values
("Coraline Lima", "coral.line@gmail.com", "lima2000", "2002-04-20"),
("Lian Ornelas", "lianOrnelas25@gmail.com", "lian007", "2003-02-25");

insert into feedback (fkUsuario, assunto, comentario) values 
(1, 'Melhor que vôley (na minha opinião)', "desde que comecei a jogar, tive mais disponibilidade e soube trabalhar em melhor em equipe"),
(2, 'Virou parte da minha rotina', "todo domingo depois do culto, junto com jovens da igreja nos reunimos para jogar, amo os domingos");

select * from feedback;

insert into favorito (fkUsuario, fkFeedback)values
(1, 2); 

select * from favorito;
select * from feedback;
select * from usuario;

-- lista os dados do usuário e seus feedbacks 
select * from usuario JOIN feedback ON idUsuario = fkUsuario;

-- lista o usuário que deu estrela (favoritou) um feedback 
select * from favorito JOIN usuario ON fkUsuario = idUsuario
	JOIN feedback ON fkFeedback = idFeedback ;
    
-- SELECT idUsuario, nome, email, dtNasc FROM usuario WHERE email = '${email}' AND senha = '${senha}';