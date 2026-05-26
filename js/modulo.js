// Conteúdo do Módulo 1
const conteudo = document.getElementById('conteudo');
const atividade = document.getElementById('atividade');

if (conteudo) {
  conteudo.innerHTML = `

    <div class="bloco">
      <h2 class="bloco-titulo">🏰 A Analogia de Hogwarts</h2>
      <p class="bloco-texto">
        Imagine que você é o arquiteto de Hogwarts. Antes de construir qualquer torre,
        você precisa de uma <em>planta baixa</em> : um documento que descreve como
        cada torre deve ser construída: quantos andares, que tipo de pedra, onde ficam
        as janelas.
      </p>
      <p class="bloco-texto" style="margin-top: 1rem;">
        Em POO, essa planta baixa se chama <strong>Classe</strong>.<br>
        E cada torre construída a partir dela é um <strong>Objeto</strong>.
      </p>
    </div>

    <div class="citacao">
      "A classe <strong>Bruxo</strong> é a planta. Harry, Hermione e Rony são os objetos,
      cada um construído a partir da mesma planta, mas com características únicas."
    </div>

    <div class="bloco">
      <h2 class="bloco-titulo">🐍 Como isso fica em Python</h2>
      <p class="bloco-texto">
        Veja como criamos a classe <em>Bruxo</em> e depois instanciamos dois objetos:
      </p>
    </div>

    <div class="codigo-bloco">
      <div class="codigo-header">
        <span class="codigo-lang">Python</span>
        <div class="codigo-dots">
          <span></span><span></span><span></span>
        </div>
      </div>
      <pre><span class="comment"># Definindo a CLASSE — a planta baixa</span>
<span class="keyword">class</span> <span class="func">Bruxo</span>:

    <span class="comment"># __init__ é chamado automaticamente ao criar um objeto</span>
    <span class="keyword">def</span> <span class="func">__init__</span>(<span class="self">self</span>, nome, casa, varinha):
        <span class="self">self</span>.nome    = nome     <span class="comment"># atributo do objeto</span>
        <span class="self">self</span>.casa    = casa
        <span class="self">self</span>.varinha = varinha

    <span class="comment"># Método - uma ação que o objeto pode executar</span>
    <span class="keyword">def</span> <span class="func">apresentar</span>(<span class="self">self</span>):
        <span class="func">print</span>(<span class="string">f"Eu sou {<span class="self">self</span>.nome}, da casa {<span class="self">self</span>.casa}!"</span>)


<span class="comment"># Criando OBJETOS - as torres construídas</span>
harry   = <span class="func">Bruxo</span>(<span class="string">"Harry Potter"</span>,   <span class="string">"Grifinória"</span>, <span class="string">"Azevinho e Fênix"</span>)
hermione = <span class="func">Bruxo</span>(<span class="string">"Hermione Granger"</span>, <span class="string">"Grifinória"</span>, <span class="string">"Videira e Dragão"</span>)

<span class="comment"># Chamando o método nos objetos</span>
harry.apresentar()    <span class="comment"># Eu sou Harry Potter, da casa Grifinória!</span>
hermione.apresentar() <span class="comment"># Eu sou Hermione Granger, da casa Grifinória!</span></pre>
    </div>

    <div class="bloco">
      <h2 class="bloco-titulo">🔑 Os 3 conceitos chave</h2>
      <p class="bloco-texto">
        <strong>1. class</strong> : palavra que define uma nova classe.<br><br>
        <strong>2. __init__</strong> : método especial chamado na criação do objeto.
        O <em>self</em> representa o próprio objeto sendo criado.<br><br>
        <strong>3. Instanciar</strong> : ato de criar um objeto a partir de uma classe.
        Cada objeto tem seus próprios valores, mas segue a mesma estrutura.
      </p>
    </div>

  `;
}

if (atividade) {
  atividade.innerHTML = `
    <div class="atividade-badge">⚡ Desafio do Módulo 1</div>
    <h2 class="atividade-titulo">Crie sua própria Casa</h2>
    <p class="atividade-desc">
      Agora é sua vez! Crie uma classe chamada <strong>Casa</strong> que represente
      uma das casas de Hogwarts. Depois instancie pelo menos 2 objetos.
    </p>
    <ul class="atividade-lista">
      <li>A classe deve ter 3 atributos: <strong>nome</strong>, <strong>mascote</strong> e <strong>caracteristica</strong></li>
      <li>Crie um método <strong>apresentar()</strong> que printe as informações da casa</li>
      <li>Instancie 2 casas diferentes e chame o método nas duas</li>
      <li>Bônus: adicione um atributo <strong>fundador</strong> e inclua no apresentar()</li>
    </ul>

    <div class="nav-modulos">
      <a href="../index.html" class="btn-nav">← Voltar</a>
      <a href="#" class="btn-nav proximo">Módulo 2 — Em breve →</a>
    </div>
  `;
}