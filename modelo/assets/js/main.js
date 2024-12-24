// Seleciona o elemento pelo ID
const hora = document.querySelector('#horario');

// Cria o objeto Date
const data = new Date('2019-10-07T22:52:00');

// Obtém os valores da data
const diaSemanaIndice = data.getDay();  // Índice do dia da semana (0-6)
const dia = data.getDate();             // Dia do mês
const mesIndice = data.getMonth();      // Índice do mês (0-11)
const ano = data.getFullYear();         // Ano
const horas = data.getHours();          // Horas
const minutos = data.getMinutes();      // Minutos

// Mapeia os dias da semana e meses
const diasDaSemana = ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado'];
const mesesDoAno = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];

// Formata os valores
const nomeDiaSemana = diasDaSemana[diaSemanaIndice];
const nomeMes = mesesDoAno[mesIndice];
const minutosFormatados = minutos < 10 ? `0${minutos}` : minutos;

// Cria a string formatada
const semana = `${nomeDiaSemana}, ${dia} de ${nomeMes} de ${ano}, ${horas}:${minutosFormatados}`;

// Atualiza o conteúdo do elemento
hora.innerHTML = `<h1>${semana}</h1>`;