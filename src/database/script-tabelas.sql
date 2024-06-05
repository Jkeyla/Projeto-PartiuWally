
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
	titulo VARCHAR(45),
	descricao VARCHAR(200),
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
("Samy Choque", "samy25@gmail.com", "samy007", "2003-02-25");

insert into feedback (fkUsuario, titulo, descricao) values 
(1, 'Melhor que vôley (na minha opinião)', "desde que comecei a jogar, tive mais disponibilidade e soube trabalhar em melhor em equipe"),
(2, 'Virou parte da minha rotina', "todo domingo depois do culto, junto com jovens da igreja nos reunimos para jogar, amo os domingos");

 insert into feedback (fkUsuario, titulo, descricao, dataHora) values 
 (1, 'competição de Wally', "ontem teve uma competição entre 5 equipes, e ganhamos UHUUL!!", "2024-05-10 10:00:00");
select * from feedback;

insert into favorito (fkUsuario, fkFeedback)values
(1, 2); 

insert into favorito (fkUsuario, fkFeedback, dataHora)values
(1, 3, '2024-07-05 12:00:00'); 

select * from favorito;
select * from feedback;
select * from usuario;

SELECT DATE_FORMAT(f.dataHora, '%d/%m/%Y') as dataHora_formatada, 
       COUNT(*) as qtdFeadbacks 
FROM usuario 
JOIN feedback f ON idUsuario = fkUsuario 
WHERE fkUsuario = 1 
GROUP BY DATE_FORMAT(f.dataHora, '%d/%m/%Y') 
ORDER BY idUsuario DESC LIMIT 5;



-- delete from feedback where idFeedback = 9;
-- lista os dados do usuário e seus feedbacks
select * from usuario JOIN feedback ON idUsuario = fkUsuario;

select u.idUsuario,
    u.nome,
    u.email,
    u.senha,
    u.dtNasc, 
    f.idFeedback,
    f.titulo,
    f.descricao,
    f.fkUsuario from usuario u JOIN feedback f ON idUsuario = fkUsuario where descricao like "%amo%";

select * from usuario JOIN feedback ON idUsuario = fkUsuario where fkUsuario = 1;

select u.idUsuario,
    u.nome,
    u.email,
    u.senha,
    u.dtNasc, 
    f.idFeedback,
    f.titulo,
    f.descricao
    from usuario u JOIN feedback f ON idUsuario = fkUsuario where fkUsuario = 1;
    
-- lista meus feeds
select u.idUsuario,
    u.nome,
    u.email,
    u.senha,
    f.idFeedback,
    f.titulo,
    f.descricao
    from usuario u JOIN feedback f ON idUsuario = fkUsuario where fkUsuario = 1;
    
-- lista o usuário que deu estrela (favoritou) um feedback 
select count(*) from favorito JOIN usuario ON fkUsuario = idUsuario
	JOIN feedback ON fkFeedback = idFeedback where idUsuario = 1 ;
    
select idUsuario, nome, idFeedback, favorito.dataHora from favorito JOIN usuario ON fkUsuario = idUsuario;

select count(*) from favorito 
	JOIN feedback ON fkFeedback = idFeedback ORDER BY fkFeedback DESC LIMIT 5;
    
select count(*) FROM usuario JOIN feedback f ON idUsuario = fkUsuario where fkUsuario = 1 ORDER BY idUsuario DESC LIMIT 5;
    
SELECT DATE_FORMAT(f.dataHora, '%d/%m/%Y') as dataFormatada,
count(*) as qtd FROM favorito f
	JOIN usuario ON fkUsuario = idUsuario
		JOIN feedback ON fkFeedback = idFeedback 
			where idUsuario = 1
				GROUP BY DATE_FORMAT(f.dataHora, '%d/%m/%Y') 
					ORDER BY idUsuario DESC LIMIT 5;
                    
SELECT DATE_FORMAT(f.dataHora, '%d/%m/%Y') as dataFormatada,
count(*) as qtd FROM favorito f
	JOIN usuario ON fkUsuario = idUsuario
		JOIN feedback ON fkFeedback = idFeedback 
			where idUsuario = 1
				GROUP BY DATE_FORMAT(f.dataHora, '%d/%m/%Y') 
					ORDER BY idUsuario DESC LIMIT 5;
                    
select u.idUsuario,
    u.nome,
    u.email,
    u.senha,
    f.idFeedback,
    f.titulo,
    f.descricao
    from usuario u JOIN feedback f ON idUsuario = fkUsuario where fkUsuario = 1;
    
SELECT idUsuario, nome, email, dtNasc FROM usuario WHERE email = 'coral.line@gmail.com' AND senha = 'lima2000';

select u.idUsuario,
    u.nome,
    u.email,
    u.senha,
    u.dtNasc, 
    f.idFeedback,
    f.titulo,
    f.descricao,
    f.fkUsuario,
    f.dataHora
    from usuario u JOIN feedback f ON u.idUsuario = f.fkUsuario
    order by idFeedback desc;    

-- SELECT idUsuario, nome, email, dtNasc FROM usuario WHERE email = '${email}' AND senha = '${senha}';