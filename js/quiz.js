// =============================
// BANCO DE QUESTÕES
// =============================
const serieA = [
  // Módulo 1 — Classes & Objetos
  {
    modulo: "Módulo 1 — Classes & Objetos",
    pergunta: "Em POO, o que melhor representa uma Classe?",
    alternativas: ["Um objeto já criado", "A planta baixa que define como objetos serão criados", "Um método que executa ações", "Uma variável que guarda dados"],
    correta: 1
  },
  {
    modulo: "Módulo 1 — Classes & Objetos",
    pergunta: "Harry Potter é para a classe Bruxo assim como:",
    alternativas: ["Uma planta baixa é para um arquiteto", "Uma casa construída é para sua planta baixa", "Um feitiço é para uma varinha", "Um livro é para uma biblioteca"],
    correta: 1
  },
  {
    modulo: "Módulo 1 — Classes & Objetos",
    pergunta: "Qual palavra-chave em Python define uma nova classe?",
    alternativas: ["def", "object", "class", "new"],
    correta: 2
  },
  // Módulo 2 — Atributos & Métodos
  {
    modulo: "Módulo 2 — Atributos & Métodos",
    pergunta: "Qual a diferença entre atributo e método?",
    alternativas: ["Atributo é uma ação, método é uma característica", "Atributo é uma característica do objeto, método é uma ação que ele executa", "São a mesma coisa com nomes diferentes", "Atributo pertence à classe, método pertence ao objeto"],
    correta: 1
  },
  {
    modulo: "Módulo 2 — Atributos & Métodos",
    pergunta: "O que o parâmetro 'self' representa em um método?",
    alternativas: ["O nome da classe", "Uma variável global", "O próprio objeto que está executando o método", "O método pai herdado"],
    correta: 2
  },
  {
    modulo: "Módulo 2 — Atributos & Métodos",
    pergunta: "Como acessamos o atributo 'nome' de um objeto chamado 'harry'?",
    alternativas: ["harry[nome]", "nome.harry", "harry->nome", "harry.nome"],
    correta: 3
  },
  // Módulo 3 — Encapsulamento
  {
    modulo: "Módulo 3 — Encapsulamento",
    pergunta: "O que torna um atributo privado em Python?",
    alternativas: ["Usar a palavra private antes", "Adicionar __ antes do nome", "Colocar o atributo fora da classe", "Usar @ antes do nome"],
    correta: 1
  },
  {
    modulo: "Módulo 3 — Encapsulamento",
    pergunta: "Qual a analogia do Encapsulamento no universo Harry Potter?",
    alternativas: ["Harry lançando Expelliarmus", "O cofre do Gringotes protegendo o saldo", "Hermione estudando na biblioteca", "Dumbledore ensinando em aula"],
    correta: 1
  },
  {
    modulo: "Módulo 3 — Encapsulamento",
    pergunta: "Para que servem os métodos getter e setter?",
    alternativas: ["Para criar novos objetos", "Para herdar atributos da classe pai", "Para controlar o acesso a atributos privados", "Para destruir objetos da memória"],
    correta: 2
  },
  // Módulo 4 — Herança
  {
    modulo: "Módulo 4 — Herança",
    pergunta: "O que a função super() faz em Python?",
    alternativas: ["Cria uma nova classe", "Chama o método da classe pai dentro da filha", "Torna um método privado", "Deleta um atributo herdado"],
    correta: 1
  },
  {
    modulo: "Módulo 4 — Herança",
    pergunta: "Draco Malfoy herda características da família Malfoy. Em POO isso representa:",
    alternativas: ["Polimorfismo", "Encapsulamento", "Abstração", "Herança"],
    correta: 3
  },
  {
    modulo: "Módulo 4 — Herança",
    pergunta: "Quando uma classe filha redefine um método da classe pai, chamamos isso de:",
    alternativas: ["Encapsulamento", "Instanciação", "Sobrescrita", "Abstração"],
    correta: 2
  },
  // Módulo 5 — Polimorfismo
  {
    modulo: "Módulo 5 — Polimorfismo",
    pergunta: "O Expecto Patronum cria animais diferentes para cada bruxo. Em POO isso é:",
    alternativas: ["Herança múltipla", "Encapsulamento", "Polimorfismo", "Abstração"],
    correta: 2
  },
  {
    modulo: "Módulo 5 — Polimorfismo",
    pergunta: "Qual a principal vantagem do Polimorfismo?",
    alternativas: ["Esconder atributos privados", "Chamar o mesmo método em objetos diferentes sem saber o tipo exato", "Herdar métodos da classe pai", "Criar classes que não podem ser instanciadas"],
    correta: 1
  },
  {
    modulo: "Módulo 5 — Polimorfismo",
    pergunta: "Em um loop que chama patrono() em uma lista de bruxos diferentes, o que acontece?",
    alternativas: ["Todos executam o mesmo comportamento", "Dá erro pois os tipos são diferentes", "Cada objeto executa sua própria versão do método", "Só o primeiro objeto executa"],
    correta: 2
  },
  // Módulo 6 — Abstração
  {
    modulo: "Módulo 6 — Abstração",
    pergunta: "O que é uma Classe Abstrata em Python?",
    alternativas: ["Uma classe que pode ser instanciada normalmente", "Uma classe que define um contrato obrigatório para suas filhas", "Uma classe sem atributos", "Uma classe que herda de outra"],
    correta: 1
  },
  {
    modulo: "Módulo 6 — Abstração",
    pergunta: "Qual módulo Python usamos para criar classes abstratas?",
    alternativas: ["abstract", "ABC", "base", "interface"],
    correta: 1
  },
  {
    modulo: "Módulo 6 — Abstração",
    pergunta: "Qual a diferença entre Abstração e Encapsulamento?",
    alternativas: ["São a mesma coisa", "Abstração esconde complexidade de implementação, Encapsulamento protege dados internos", "Encapsulamento esconde a implementação, Abstração protege dados", "Abstração usa __, Encapsulamento usa @"],
    correta: 1
  }
];

const serieB = [
  // Módulo 1
  {
    modulo: "Módulo 1 — Classes & Objetos",
    pergunta: "O que significa 'instanciar' uma classe?",
    alternativas: ["Deletar um objeto da memória", "Criar um objeto a partir de uma classe", "Herdar métodos de outra classe", "Tornar um atributo privado"],
    correta: 1
  },
  {
    modulo: "Módulo 1 — Classes & Objetos",
    pergunta: "Qual método é chamado automaticamente ao criar um objeto em Python?",
    alternativas: ["__start__", "__create__", "__init__", "__new__"],
    correta: 2
  },
  {
    modulo: "Módulo 1 — Classes & Objetos",
    pergunta: "As Casas de Hogwarts (Grifinória, Sonserina...) representam em POO:",
    alternativas: ["Objetos", "Métodos", "Classes", "Atributos"],
    correta: 2
  },
  // Módulo 2
  {
    modulo: "Módulo 2 — Atributos & Métodos",
    pergunta: "self.nome = nome dentro do __init__ cria:",
    alternativas: ["Um método do objeto", "Uma classe nova", "Um atributo do objeto", "Uma variável global"],
    correta: 2
  },
  {
    modulo: "Módulo 2 — Atributos & Métodos",
    pergunta: "harry.lancar_feitico('Expelliarmus') está:",
    alternativas: ["Criando um novo atributo", "Chamando um método do objeto harry", "Deletando o objeto harry", "Herdando um método"],
    correta: 1
  },
  {
    modulo: "Módulo 2 — Atributos & Métodos",
    pergunta: "O que representa 'self' em def apresentar(self)?",
    alternativas: ["O nome da função", "A classe em si", "O objeto que chamou o método", "O módulo importado"],
    correta: 2
  },
  // Módulo 3
  {
    modulo: "Módulo 3 — Encapsulamento",
    pergunta: "O que acontece se tentarmos acessar cofre.__saldo diretamente?",
    alternativas: ["Retorna None", "Funciona normalmente", "Gera um erro de atributo", "Retorna 0"],
    correta: 2
  },
  {
    modulo: "Módulo 3 — Encapsulamento",
    pergunta: "Um método setter serve para:",
    alternativas: ["Ler um atributo privado", "Modificar um atributo privado com validação", "Criar novos objetos", "Herdar atributos"],
    correta: 1
  },
  {
    modulo: "Módulo 3 — Encapsulamento",
    pergunta: "Por que usamos Encapsulamento?",
    alternativas: ["Para tornar o código mais lento", "Para proteger dados e controlar como são acessados", "Para herdar métodos de outra classe", "Para criar classes abstratas"],
    correta: 1
  },
  // Módulo 4
  {
    modulo: "Módulo 4 — Herança",
    pergunta: "Como declaramos que a classe Auror herda de Bruxo?",
    alternativas: ["class Auror extends Bruxo:", "class Auror herda Bruxo:", "class Auror(Bruxo):", "class Auror -> Bruxo:"],
    correta: 2
  },
  {
    modulo: "Módulo 4 — Herança",
    pergunta: "Uma classe filha pode usar métodos da classe pai sem redefiní-los?",
    alternativas: ["Não, precisa sempre redefinir", "Sim, ela herda automaticamente", "Só se usar super()", "Só métodos privados"],
    correta: 1
  },
  {
    modulo: "Módulo 4 — Herança",
    pergunta: "Professor Snape é um Professor que também é Bruxo. Em POO Professor seria:",
    alternativas: ["Uma classe independente", "Um atributo de Bruxo", "Uma classe filha de Bruxo", "Um método de Bruxo"],
    correta: 2
  },
  // Módulo 5
  {
    modulo: "Módulo 5 — Polimorfismo",
    pergunta: "Polimorfismo vem do grego e significa:",
    alternativas: ["Uma forma", "Muitas formas", "Sem forma", "Nova forma"],
    correta: 1
  },
  {
    modulo: "Módulo 5 — Polimorfismo",
    pergunta: "Adicionamos Luna com seu próprio patrono() na lista sem alterar o loop. Isso demonstra:",
    alternativas: ["Encapsulamento", "Herança múltipla", "Extensibilidade do Polimorfismo", "Abstração"],
    correta: 2
  },
  {
    modulo: "Módulo 5 — Polimorfismo",
    pergunta: "Para o Polimorfismo funcionar, as classes precisam:",
    alternativas: ["Ter os mesmos atributos", "Implementar o mesmo método com comportamentos diferentes", "Herdar da mesma classe obrigatoriamente", "Usar atributos privados"],
    correta: 1
  },
  // Módulo 6
  {
    modulo: "Módulo 6 — Abstração",
    pergunta: "O decorador @abstractmethod indica que:",
    alternativas: ["O método é privado", "O método é opcional nas filhas", "Toda classe filha deve implementar esse método", "O método pertence à classe pai"],
    correta: 2
  },
  {
    modulo: "Módulo 6 — Abstração",
    pergunta: "Usar uma varinha sem saber a magia por trás é analogia de:",
    alternativas: ["Herança", "Polimorfismo", "Encapsulamento", "Abstração"],
    correta: 3
  },
  {
    modulo: "Módulo 6 — Abstração",
    pergunta: "Podemos instanciar diretamente uma classe abstrata?",
    alternativas: ["Sim, normalmente", "Sim, mas só com super()", "Não, gera um erro", "Só se não tiver @abstractmethod"],
    correta: 2
  }
];

// =============================
// LÓGICA DO QUIZ
// =============================
let tentativa = 1;
let questaoAtual = 0;
let respostas = [];
let questoes = [];

const letras = ['A', 'B', 'C', 'D'];

function iniciarQuiz() {
  questoes = tentativa === 1 ? [...serieA] : [...serieB];
  questaoAtual = 0;
  respostas = [];
  mostrarTela('tela-quiz');
  renderizarQuestao();
}

function renderizarQuestao() {
  const q = questoes[questaoAtual];
  const total = questoes.length;

  document.getElementById('tentativa-label').textContent = tentativa === 1 ? '1ª Tentativa' : '2ª Tentativa';
  document.getElementById('modulo-label').textContent = q.modulo;
  document.getElementById('questao-numero').textContent = `Questão ${questaoAtual + 1}`;
  document.getElementById('questao-texto').textContent = q.pergunta;
  document.getElementById('progresso-texto').textContent = `Questão ${questaoAtual + 1} de ${total}`;
  document.getElementById('barra-fill').style.width = `${((questaoAtual) / total) * 100}%`;

  const altContainer = document.getElementById('alternativas');
  altContainer.innerHTML = '';

  q.alternativas.forEach((alt, i) => {
    const btn = document.createElement('button');
    btn.className = 'alternativa';
    btn.innerHTML = `<span class="alternativa-letra">${letras[i]}</span> ${alt}`;
    btn.addEventListener('click', () => selecionarResposta(i, btn));
    altContainer.appendChild(btn);
  });

  document.getElementById('btn-proxima').style.display = 'none';
}

function selecionarResposta(indice, btnClicado) {
  document.querySelectorAll('.alternativa').forEach(b => b.classList.remove('selecionada'));
  btnClicado.classList.add('selecionada');
  respostas[questaoAtual] = indice;
  document.getElementById('btn-proxima').style.display = 'block';
}

function proximaQuestao() {
  if (respostas[questaoAtual] === undefined) return;

  if (questaoAtual < questoes.length - 1) {
    questaoAtual++;
    renderizarQuestao();
  } else {
    document.getElementById('barra-fill').style.width = '100%';
    document.getElementById('progresso-texto').textContent = 'Concluído!';
    mostrarResultado();
  }
}

function calcularResultado() {
  const porModulo = {};
  questoes.forEach((q, i) => {
    if (!porModulo[q.modulo]) porModulo[q.modulo] = { acertos: 0, total: 0 };
    porModulo[q.modulo].total++;
    if (respostas[i] === q.correta) porModulo[q.modulo].acertos++;
  });
  const totalAcertos = Object.values(porModulo).reduce((s, m) => s + m.acertos, 0);
  const porcentagem = Math.round((totalAcertos / questoes.length) * 100);
  return { porModulo, totalAcertos, porcentagem };
}

function gerarFeedbackHTML(porModulo) {
  let html = '<p class="feedback-titulo">Seu desempenho por módulo:</p>';
  Object.entries(porModulo).forEach(([modulo, dados]) => {
    const pct = Math.round((dados.acertos / dados.total) * 100);
    const nivel = pct >= 67 ? 'forte' : pct >= 34 ? 'medio' : 'fraco';
    const emoji = pct >= 67 ? '✅' : pct >= 34 ? '⚠️' : '❌';
    html += `
      <div class="feedback-item ${nivel}">
        <span class="feedback-modulo-nome">${emoji} ${modulo.split('—')[1].trim()}</span>
        <span class="feedback-acertos">${dados.acertos}/${dados.total} (${pct}%)</span>
      </div>`;
  });
  return html;
}

function mostrarResultado() {
  const { porModulo, totalAcertos, porcentagem } = calcularResultado();
  mostrarTela('tela-resultado');

  if (porcentagem >= 70) {
    document.getElementById('resultado-aprovado').style.display = 'block';
    document.getElementById('pontuacao-aprovado').textContent = `${totalAcertos}/18 — ${porcentagem}%`;

    setTimeout(() => {
      const btn = document.getElementById('btn-gerar-cert');
      if (btn) {
        btn.addEventListener('click', () => {
          const nome = document.getElementById('input-nome').value.trim();
          if (!nome) {
            alert('Digite seu nome para gerar o certificado!');
            return;
          }
          const data = new Date().toLocaleDateString('pt-BR');
          window.location.href = `certificado.html?nome=${encodeURIComponent(nome)}&data=${encodeURIComponent(data)}`;
        });
      }
    }, 100);
  } else if (tentativa === 1) {
    document.getElementById('resultado-reprovado-1').style.display = 'block';
    document.getElementById('pontuacao-rep1').textContent = `${totalAcertos}/18 — ${porcentagem}%`;
    document.getElementById('feedback-rep1').innerHTML = gerarFeedbackHTML(porModulo);
  } else {
    document.getElementById('resultado-reprovado-final').style.display = 'block';
    document.getElementById('pontuacao-rep-final').textContent = `${totalAcertos}/18 — ${porcentagem}%`;
    document.getElementById('feedback-rep-final').innerHTML = gerarFeedbackHTML(porModulo);
  }
}

function mostrarTela(id) {
  document.querySelectorAll('.tela').forEach(t => t.classList.remove('ativa'));
  const tela = document.getElementById(id);
  if (tela) tela.classList.add('ativa');
}

// =============================
// EVENTOS
// =============================
document.getElementById('btn-iniciar').addEventListener('click', iniciarQuiz);

document.getElementById('btn-proxima').addEventListener('click', proximaQuestao);

document.getElementById('btn-segunda-chance').addEventListener('click', () => {
  tentativa = 2;
  document.getElementById('resultado-reprovado-1').style.display = 'none';
  iniciarQuiz();
});

// CERTIFICADO
document.getElementById('btn-gerar-cert').addEventListener('click', () => {
  const nome = document.getElementById('input-nome').value.trim();
  if (!nome) {
    alert('Digite seu nome para gerar o certificado!');
    return;
  }
  const data = new Date().toLocaleDateString('pt-BR');
  window.location.href = `certificado.html?nome=${encodeURIComponent(nome)}&data=${encodeURIComponent(data)}`;
});