/** Base Country*/
function baseCountry() {
    /** Países predefinidos (adicionar mais) */
    info.addCountry(1, 'Portugal', 'PT');
    info.addCountry(2, 'Spain', 'ES');
    info.addCountry(3, 'United Kingdom', 'UK');
    info.addCountry(4, 'France', 'FR');
    info.addCountry(5, 'Germany', 'DE');
    info.addCountry(6, 'Italy', 'IT');
    info.addCountry(7, 'Brazil', 'BR');
    info.addCountry(8, 'Argentina', 'AR');
    info.addCountry(9, 'Mexico', 'MX');
    info.addCountry(10, 'Canada', 'CA');
    info.addCountry(11, 'United States', 'US');
    info.addCountry(12, 'Australia', 'AU');
    info.addCountry(13, 'China', 'CN');
    info.addCountry(14, 'Japan', 'JP');
    info.addCountry(15, 'South Korea', 'KR');
    info.addCountry(16, 'India', 'IN');
    info.addCountry(17, 'Russia', 'RU');
    info.addCountry(18, 'South Africa', 'ZA');
    info.addCountry(19, 'Egypt', 'EG');
    info.addCountry(20, 'Nigeria', 'NG');
    info.addCountry(21, 'Saudi Arabia', 'SA');
    info.addCountry(22, 'Turkey', 'TR');
    info.addCountry(23, 'Greece', 'GR');
    info.addCountry(24, 'Sweden', 'SE');
    info.addCountry(25, 'Norway', 'NO');
    info.addCountry(26, 'Denmark', 'DK');
    info.addCountry(27, 'Finland', 'FI');
    info.addCountry(28, 'Netherlands', 'NL');
    info.addCountry(29, 'Belgium', 'BE');
    info.addCountry(30, 'Switzerland', 'CH');
}
/**Base Posição */
function basePosicao() {
    info.addPosition('Guarda-Redes', 'GR');
    info.addPosition('Defesa', 'DF');
    info.addPosition('Médio Campo', 'MC');
    info.addPosition('Avançado', 'AV');
}

/** Base Player*/
function basePlayer() {
    info.addPlayer(1, 'Cristiano Ronaldo', '1985-02-05', 1, '1.85', 'AV');
    info.addPlayer(2, 'Sergio Ramos', '1986-03-30', 2, '1.84', 'DF');
    info.addPlayer(3, 'Harry Kane', '1993-07-28', 3, '1.88', 'AV');
    info.addPlayer(4, 'Kylian Mbappé', '1998-12-20', 4, '1.78', 'AV');
    info.addPlayer(5, 'Manuel Neuer', '1986-03-27', 5, '1.9', 'GR');
}

/** Base Team*/
function baseTeam() {
    info.addTeam(1, 'Benfica', 'SLB', 2, "", "Descrição", [
        new Player(1, 'Filipe Macaco', '1995-06-15', 1, 1.80, 'AV'),
        new Player(2, 'Rodrigo Filho', '1998-03-21', 2, 1.75, 'MC'),
        new Player(3, 'Hugo Digas', '1994-10-05', 3, 1.85, 'DF')
    ]);

    info.addTeam(2, 'Sporting', 'SCP', 3, "", "Descrição", []);

    info.addTeam(3, 'Porto', 'FCP', 1, "", "Descrição", [
        new Player(1, 'Guilherme Cruz', '1995-06-15', 1, 1.80, 'AV'),
        new Player(2, 'Diogo Veigas', '1998-03-21', 2, 1.75, 'MC'),
        new Player(3, 'André Carvalho', '1994-10-05', 3, 1.85, 'DF')
    ]);

    info.addTeam(4, 'Sporting de Braga', 'SCB', 3, "", "Descrição", [
        new Player(1, 'João Silva', '1995-06-15', 1, 1.80, 'AV'),
        new Player(2, 'Pedro Santos', '1998-03-21', 2, 1.75, 'MC'),
        new Player(3, 'Ricardo Pereira', '1994-10-05', 3, 1.85, 'DF')
    ]);

    info.addTeam(5, 'Gollaços.pt', 'GLC', 5, "", "Descrição", [
        new Player(1, 'Ola', '1995-06-15', 1, 1.80, 'AV'),
        new Player(2, 'Adeus', '1998-03-21', 2, 1.75, 'MC'),
        new Player(3, 'Ve la', '1994-10-05', 3, 1.85, 'DF'),
        new Player(4, 'Isso', '1994-10-05', 3, 1.85, 'DF')
    ]);

    info.addTeam(6, 'Veigas Eleven', 'VEE', 9, "https://www.veigas.com", "Great team.", [
        new Player(1, 'John', '1996-07-15', 1, 1.80, 'AV'),
        new Player(2, 'David', '1999-04-21', 2, 1.75, 'MC'),
        new Player(3, 'Michael', '1995-11-05', 3, 1.85, 'DF'),
        new Player(4, 'Robert', '1995-11-05', 3, 1.85, 'GR'),
        new Player(5, 'Paul', '1997-02-03', 1, 1.82, 'AV'),
        new Player(6, 'Mark', '1998-01-01', 2, 1.78, 'MC'),
        new Player(7, 'Luke', '1995-08-08', 3, 1.83, 'DF'),
        new Player(8, 'Jack', '1995-08-08', 3, 1.81, 'DF'),
        new Player(9, 'James', '1996-09-12', 2, 1.79, 'MC'),
        new Player(10, 'George', '1997-06-07', 1, 1.83, 'AV'),
        new Player(11, 'Harry', '1998-11-02', 3, 1.85, 'DF')
    ]);

    info.addTeam(7, 'Sabios Andreas', 'SAS', 2, "", "Maus jgoadores.", [
        new Player(1, 'OLA', '1996-07-15', 1, 1.80, 'AV'),
        new Player(2, 'David', '1999-04-21', 2, 1.75, 'MC'),
        new Player(3, 'Diogo', '1995-11-05', 3, 1.85, 'DF'),
        new Player(4, 'Robert', '1995-11-05', 3, 1.85, 'GR'),
        new Player(5, 'Paul', '1997-02-03', 1, 1.82, 'AV'),
        new Player(6, 'Pedro', '1998-01-01', 2, 1.78, 'MC'),
        new Player(7, 'Luke', '1995-08-08', 3, 1.83, 'DF'),
        new Player(8, 'Jack', '1995-08-08', 3, 1.81, 'DF'),
        new Player(9, 'James', '1996-09-12', 2, 1.79, 'MC'),
        new Player(10, 'George', '1997-06-07', 1, 1.83, 'AV'),
        new Player(11, 'Harry', '1998-11-02', 3, 1.85, 'DF')
    ]);

    info.addTeam(8, 'Coisas boas', 'CB', 9, "https://www.ccb.com", "HAHAHA.", [
        new Player(1, 'John', '1996-07-15', 1, 1.80, 'AV'),
        new Player(2, 'David', '1999-04-21', 2, 1.75, 'MC'),
        new Player(3, 'Michael', '1995-11-05', 3, 1.85, 'DF'),
        new Player(4, 'Robert', '1995-11-05', 3, 1.85, 'GR'),
        new Player(5, 'Paul', '1997-02-03', 1, 1.82, 'AV'),
        new Player(6, 'Mark', '1998-01-01', 2, 1.78, 'MC'),
        new Player(7, 'Luke', '1995-08-08', 3, 1.83, 'DF'),
        new Player(8, 'Jack', '1995-08-08', 3, 1.81, 'DF'),
        new Player(9, 'James', '1996-09-12', 2, 1.79, 'MC'),
        new Player(10, 'George', '1997-06-07', 1, 1.83, 'AV'),
        new Player(11, 'Harry', '1998-11-02', 3, 1.85, 'DF')
    ]);

    info.addTeam(9, 'Random', 'Random', 9, "https://www.Random.com", "Random.", [
        new Player(1, 'Random', '1996-07-15', 1, 1.80, 'AV'),
        new Player(2, 'Random', '1999-04-21', 2, 1.75, 'MC'),
        new Player(3, 'Random', '1995-11-05', 3, 1.85, 'DF'),
        new Player(4, 'Random', '1995-11-05', 3, 1.85, 'GR'),
        new Player(5, 'Random', '1997-02-03', 1, 1.82, 'AV'),
        new Player(6, 'Random', '1998-01-01', 2, 1.78, 'MC'),
        new Player(7, 'Random', '1995-08-08', 3, 1.83, 'DF'),
        new Player(8, 'Random', '1995-08-08', 3, 1.81, 'DF'),
        new Player(9, 'Random', '1996-09-12', 2, 1.79, 'MC'),
        new Player(10, 'Random', '1997-06-07', 1, 1.83, 'AV'),
        new Player(11, 'Random', '1998-11-02', 3, 1.85, 'DF')
    ]);

    info.addTeam(10, 'Master Players', 'Master Players', 9, "https://www.MasterPlayers.com", "Master Players.", [
        new Player(1, 'Master Players', '1996-07-15', 1, 1.80, 'AV'),
        new Player(2, 'Master Players', '1999-04-21', 2, 1.75, 'MC'),
        new Player(3, 'Master Players', '1995-11-05', 3, 1.85, 'DF'),
        new Player(4, 'Master Players', '1995-11-05', 3, 1.85, 'GR'),
        new Player(5, 'Master Players', '1997-02-03', 1, 1.82, 'AV'),
        new Player(6, 'Master Players', '1998-01-01', 2, 1.78, 'MC'),
        new Player(7, 'Master Players', '1995-08-08', 3, 1.83, 'DF'),
        new Player(8, 'Master Players', '1995-08-08', 3, 1.81, 'DF'),
        new Player(9, 'Master Players', '1996-09-12', 2, 1.79, 'MC'),
        new Player(10, 'Master Players', '1997-06-07', 1, 1.83, 'AV'),
        new Player(11, 'Master Players', '1998-11-02', 3, 1.85, 'DF')
    ]);

    info.addTeam(11, 'Limão e três', 'Limão e três', 9, "", "Limão e três.", [
        new Player(1, 'Limão e três', '1996-07-15', 1, 1.80, 'AV'),
        new Player(2, 'Limão e três', '1999-04-21', 2, 1.75, 'MC'),
        new Player(3, 'Limão e três', '1995-11-05', 3, 1.85, 'DF'),
        new Player(4, 'Limão e três', '1995-11-05', 3, 1.85, 'GR'),
        new Player(5, 'Limão e três', '1997-02-03', 1, 1.82, 'AV'),
        new Player(6, 'Limão e três', '1998-01-01', 2, 1.78, 'MC'),
        new Player(7, 'Limão e três', '1995-08-08', 3, 1.83, 'DF'),
        new Player(8, 'Limão e três', '1995-08-08', 3, 1.81, 'DF'),
        new Player(9, 'Limão e três', '1996-09-12', 2, 1.79, 'MC'),
        new Player(10, 'Limão e três', '1997-06-07', 1, 1.83, 'AV'),
        new Player(11, 'Limão e três', '1998-11-02', 3, 1.85, 'DF')
    ]);
    info.addTeam(12, 'Segmentos de Reta', 'Segmentos de Reta', 9, "", "Segmentos de Reta.", [
        new Player(1, 'Segmentos de Reta', '1996-07-15', 1, 1.80, 'AV'),
        new Player(2, 'Segmentos de Reta', '1999-04-21', 2, 1.75, 'MC'),
        new Player(3, 'Segmentos de Reta', '1995-11-05', 3, 1.85, 'DF'),
        new Player(4, 'Segmentos de Reta', '1995-11-05', 3, 1.85, 'GR'),
        new Player(5, 'Segmentos de Reta', '1997-02-03', 1, 1.82, 'AV'),
        new Player(6, 'Segmentos de Reta', '1998-01-01', 2, 1.78, 'MC'),
        new Player(7, 'Segmentos de Reta', '1995-08-08', 3, 1.83, 'DF'),
        new Player(8, 'Segmentos de Reta', '1995-08-08', 3, 1.81, 'DF'),
        new Player(9, 'Segmentos de Reta', '1996-09-12', 2, 1.79, 'MC'),
        new Player(10, 'Segmentos de Reta', '1997-06-07', 1, 1.83, 'AV'),
        new Player(11, 'Segmentos de Reta', '1998-11-02', 3, 1.85, 'DF')
    ]);
    info.addTeam(13, 'Enterra pastel', 'Enterra pastel', 9, "", "Enterra pastel.", [
        new Player(1, 'Enterra pastel', '1996-07-15', 1, 1.80, 'AV'),
        new Player(2, 'Enterra pastel', '1999-04-21', 2, 1.75, 'MC'),
        new Player(3, 'Enterra pastel', '1995-11-05', 3, 1.85, 'DF'),
        new Player(4, 'Enterra pastel', '1995-11-05', 3, 1.85, 'GR'),
        new Player(5, 'Enterra pastel', '1997-02-03', 1, 1.82, 'AV'),
        new Player(6, 'Enterra pastel', '1998-01-01', 2, 1.78, 'MC'),
        new Player(7, 'Enterra pastel', '1995-08-08', 3, 1.83, 'DF'),
        new Player(8, 'Enterra pastel', '1995-08-08', 3, 1.81, 'DF'),
        new Player(9, 'Enterra pastel', '1996-09-12', 2, 1.79, 'MC'),
        new Player(10, 'Enterra pastel', '1997-06-07', 1, 1.83, 'AV'),
        new Player(11, 'Enterra pastel', '1998-11-02', 3, 1.85, 'DF')
    ]);
    info.addTeam(14, 'Sabes lá tu', 'Sabes lá tu', 9, "", "Sabes lá tu.", [
        new Player(1, 'Sabes lá tu', '1996-07-15', 1, 1.80, 'AV'),
        new Player(2, 'Sabes lá tu', '1999-04-21', 2, 1.75, 'MC'),
        new Player(3, 'Sabes lá tu', '1995-11-05', 3, 1.85, 'DF'),
        new Player(4, 'Sabes lá tu', '1995-11-05', 3, 1.85, 'GR'),
        new Player(5, 'Sabes lá tu', '1997-02-03', 1, 1.82, 'AV'),
        new Player(6, 'Sabes lá tu', '1998-01-01', 2, 1.78, 'MC'),
        new Player(7, 'Sabes lá tu', '1995-08-08', 3, 1.83, 'DF'),
        new Player(8, 'Sabes lá tu', '1995-08-08', 3, 1.81, 'DF'),
        new Player(9, 'Sabes lá tu', '1996-09-12', 2, 1.79, 'MC'),
        new Player(10, 'Sabes lá tu', '1997-06-07', 1, 1.83, 'AV'),
        new Player(11, 'Sabes lá tu', '1998-11-02', 3, 1.85, 'DF')
    ]);
    info.addTeam(15, 'Sporting do Barreiro', 'Sporting do Barreiro', 9, "", "Sporting do Barreiro.", [
        new Player(1, 'Sporting do Barreiro', '1996-07-15', 1, 1.80, 'AV'),
        new Player(2, 'Sporting do Barreiro', '1999-04-21', 2, 1.75, 'MC'),
        new Player(3, 'Sporting do Barreiro', '1995-11-05', 3, 1.85, 'DF'),
        new Player(4, 'Sporting do Barreiro', '1995-11-05', 3, 1.85, 'GR'),
        new Player(5, 'Sporting do Barreiro', '1997-02-03', 1, 1.82, 'AV'),
        new Player(6, 'Sporting do Barreiro', '1998-01-01', 2, 1.78, 'MC'),
        new Player(7, 'Sporting do Barreiro', '1995-08-08', 3, 1.83, 'DF'),
        new Player(8, 'Sporting do Barreiro', '1995-08-08', 3, 1.81, 'DF'),
        new Player(9, 'Sporting do Barreiro', '1996-09-12', 2, 1.79, 'MC'),
        new Player(10, 'Sporting do Barreiro', '1997-06-07', 1, 1.83, 'AV'),
        new Player(11, 'Sporting do Barreiro', '1998-11-02', 3, 1.85, 'DF')
    ]);
    info.addTeam(16, 'É 30 sim senhor', 'É 30 sim senhor', 9, "", "É 30 sim senhor.", [
        new Player(1, 'É 30 sim senhor', '1996-07-15', 1, 1.80, 'AV'),
        new Player(2, 'É 30 sim senhor', '1999-04-21', 2, 1.75, 'MC'),
        new Player(3, 'É 30 sim senhor', '1995-11-05', 3, 1.85, 'DF'),
        new Player(4, 'É 30 sim senhor', '1995-11-05', 3, 1.85, 'GR'),
        new Player(5, 'É 30 sim senhor', '1997-02-03', 1, 1.82, 'AV'),
        new Player(6, 'É 30 sim senhor', '1998-01-01', 2, 1.78, 'MC'),
        new Player(7, 'É 30 sim senhor', '1995-08-08', 3, 1.83, 'DF'),
        new Player(8, 'É 30 sim senhor', '1995-08-08', 3, 1.81, 'DF'),
        new Player(9, 'É 30 sim senhor', '1996-09-12', 2, 1.79, 'MC'),
        new Player(10, 'É 30 sim senhor', '1997-06-07', 1, 1.83, 'AV'),
        new Player(11, 'É 30 sim senhor', '1998-11-02', 3, 1.85, 'DF')
    ]);
    info.addTeam(17, 'Com o tempo vai lá', 'Com o tempo vai lá', 9, "", "Com o tempo vai lá.", [
        new Player(1, 'Com o tempo vai lá', '1996-07-15', 1, 1.80, 'AV'),
        new Player(2, 'Com o tempo vai lá', '1999-04-21', 2, 1.75, 'MC'),
        new Player(3, 'Com o tempo vai lá', '1995-11-05', 3, 1.85, 'DF'),
        new Player(4, 'Com o tempo vai lá', '1995-11-05', 3, 1.85, 'GR'),
        new Player(5, 'Com o tempo vai lá', '1997-02-03', 1, 1.82, 'AV'),
        new Player(6, 'Com o tempo vai lá', '1998-01-01', 2, 1.78, 'MC'),
        new Player(7, 'Com o tempo vai lá', '1995-08-08', 3, 1.83, 'DF'),
        new Player(8, 'Com o tempo vai lá', '1995-08-08', 3, 1.81, 'DF'),
        new Player(9, 'Com o tempo vai lá', '1996-09-12', 2, 1.79, 'MC'),
        new Player(10, 'Com o tempo vai lá', '1997-06-07', 1, 1.83, 'AV'),
        new Player(11, 'Com o tempo vai lá', '1998-11-02', 3, 1.85, 'DF')
    ]);
    info.addTeam(18, 'Trás os Benficas', 'Trás os Benficas', 9, "", "Trás os Benficas.", [
        new Player(1, 'Trás os Benficas', '1996-07-15', 1, 1.80, 'AV'),
        new Player(2, 'Trás os Benficas', '1999-04-21', 2, 1.75, 'MC'),
        new Player(3, 'Trás os Benficas', '1995-11-05', 3, 1.85, 'DF'),
        new Player(4, 'Trás os Benficas', '1995-11-05', 3, 1.85, 'GR'),
        new Player(5, 'Trás os Benficas', '1997-02-03', 1, 1.82, 'AV'),
        new Player(6, 'Trás os Benficas', '1998-01-01', 2, 1.78, 'MC'),
        new Player(7, 'Trás os Benficas', '1995-08-08', 3, 1.83, 'DF'),
        new Player(8, 'Trás os Benficas', '1995-08-08', 3, 1.81, 'DF'),
        new Player(9, 'Trás os Benficas', '1996-09-12', 2, 1.79, 'MC'),
        new Player(10, 'Trás os Benficas', '1997-06-07', 1, 1.83, 'AV'),
        new Player(11, 'Trás os Benficas', '1998-11-02', 3, 1.85, 'DF')
    ]);
    info.addTeam(19, 'Quarenta e nove ', 'Quarenta e nove ', 9, "", "Quarenta e nove .", [
        new Player(1, 'Quarenta e nove ', '1996-07-15', 1, 1.80, 'AV'),
        new Player(2, 'Quarenta e nove ', '1999-04-21', 2, 1.75, 'MC'),
        new Player(3, 'Quarenta e nove ', '1995-11-05', 3, 1.85, 'DF'),
        new Player(4, 'Quarenta e nove ', '1995-11-05', 3, 1.85, 'GR'),
        new Player(5, 'Quarenta e nove ', '1997-02-03', 1, 1.82, 'AV'),
        new Player(6, 'Quarenta e nove ', '1998-01-01', 2, 1.78, 'MC'),
        new Player(7, 'Quarenta e nove ', '1995-08-08', 3, 1.83, 'DF'),
        new Player(8, 'Quarenta e nove ', '1995-08-08', 3, 1.81, 'DF'),
        new Player(9, 'Quarenta e nove ', '1996-09-12', 2, 1.79, 'MC'),
        new Player(10, 'Quarenta e nove ', '1997-06-07', 1, 1.83, 'AV'),
        new Player(11, 'Quarenta e nove ', '1998-11-02', 3, 1.85, 'DF')
    ]);
    info.addTeam(20, 'Marcadores de golos', 'Marcadores de golos', 9, "", "Marcadores de golos.", [
        new Player(1, 'Marcadores de golos', '1996-07-15', 1, 1.80, 'AV'),
        new Player(2, 'Marcadores de golos', '1999-04-21', 2, 1.75, 'MC'),
        new Player(3, 'Marcadores de golos', '1995-11-05', 3, 1.85, 'DF'),
        new Player(4, 'Marcadores de golos', '1995-11-05', 3, 1.85, 'GR'),
        new Player(5, 'Marcadores de golos', '1997-02-03', 1, 1.82, 'AV'),
        new Player(6, 'Marcadores de golos', '1998-01-01', 2, 1.78, 'MC'),
        new Player(7, 'Marcadores de golos', '1995-08-08', 3, 1.83, 'DF'),
        new Player(8, 'Marcadores de golos', '1995-08-08', 3, 1.81, 'DF'),
        new Player(9, 'Marcadores de golos', '1996-09-12', 2, 1.79, 'MC'),
        new Player(10, 'Marcadores de golos', '1997-06-07', 1, 1.83, 'AV'),
        new Player(11, 'Marcadores de golos', '1998-11-02', 3, 1.85, 'DF')
    ]);
    info.addTeam(21, 'Bola quadrada', 'Bola quadrada', 9, "", "Bola quadrada.", [
        new Player(1, 'Bola quadrada', '1996-07-15', 1, 1.80, 'AV'),
        new Player(2, 'Bola quadrada', '1999-04-21', 2, 1.75, 'MC'),
        new Player(3, 'Bola quadrada', '1995-11-05', 3, 1.85, 'DF'),
        new Player(4, 'Bola quadrada', '1995-11-05', 3, 1.85, 'GR'),
        new Player(5, 'Bola quadrada', '1997-02-03', 1, 1.82, 'AV'),
        new Player(6, 'Bola quadrada', '1998-01-01', 2, 1.78, 'MC'),
        new Player(7, 'Bola quadrada', '1995-08-08', 3, 1.83, 'DF'),
        new Player(8, 'Bola quadrada', '1995-08-08', 3, 1.81, 'DF'),
        new Player(9, 'Bola quadrada', '1996-09-12', 2, 1.79, 'MC'),
        new Player(10, 'Bola quadrada', '1997-06-07', 1, 1.83, 'AV'),
        new Player(11, 'Bola quadrada', '1998-11-02', 3, 1.85, 'DF')
    ]);
    info.addTeam(22, 'Simmmmmmm', 'Simmmmmmm', 9, "", "Simmmmmmm.", [
        new Player(1, 'Simmmmmmm', '1996-07-15', 1, 1.80, 'AV'),
        new Player(2, 'Simmmmmmm', '1999-04-21', 2, 1.75, 'MC'),
        new Player(3, 'Simmmmmmm', '1995-11-05', 3, 1.85, 'DF'),
        new Player(4, 'Simmmmmmm', '1995-11-05', 3, 1.85, 'GR'),
        new Player(5, 'Simmmmmmm', '1997-02-03', 1, 1.82, 'AV'),
        new Player(6, 'Simmmmmmm', '1998-01-01', 2, 1.78, 'MC'),
        new Player(7, 'Simmmmmmm', '1995-08-08', 3, 1.83, 'DF'),
        new Player(8, 'Simmmmmmm', '1995-08-08', 3, 1.81, 'DF'),
        new Player(9, 'Simmmmmmm', '1996-09-12', 2, 1.79, 'MC'),
        new Player(10, 'Simmmmmmm', '1997-06-07', 1, 1.83, 'AV'),
        new Player(11, 'Simmmmmmm', '1998-11-02', 3, 1.85, 'DF')
    ]);

}

/** Base Competition*/
function baseCompetition() {
    info.addCompetition(1, 'Taça de Portugal', '2023', '', null, []);//ult e bolean true se tiver terminado, so para testar o log
    info.addCompetition(2, 'Taça da liga', '2023', '', null, []);//ult e bolean false se estiver a decorrer 

    info.addCompetition(3, 'Liga Europa', '2023', info.teams[3], true, [
        info.teams[2],
        info.teams[3],
        info.teams[4]
    ]); //teste liga criada com o SCB e FCP la dentro
}