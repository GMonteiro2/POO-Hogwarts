const conteudo = document.getElementById('conteudo');
const atividade = document.getElementById('atividade');

if (conteudo) {
  conteudo.innerHTML = `

    <div class="bloco">
      <h2 class="bloco-titulo">👨‍👩‍👦 A Família Malfoy</h2>
      <p class="bloco-texto">
        Draco Malfoy não nasceu do nada. Ele herdou o sobrenome, a riqueza,
        o preconceito e os poderes da família Malfoy. Tudo que Lúcio Malfoy
        tinha, Draco recebeu — e ainda adicionou suas próprias características.
      </p>
      <p class="bloco-texto" style="margin-top: 1rem;">
        Em POO, <strong>Herança</strong> funciona igual. Uma classe filha
        herda todos os atributos e métodos da classe pai — e pode adicionar
        os seus próprios ou modificar os que já existem.
      </p>
    </div>

    <div class="citacao">
      "A classe filha herda tudo da classe pai — e ainda pode
      adicionar seus próprios poderes ou reescrever os que herdou."
    </div>

    <div class="bloco">
      <h2 class="bloco-titulo">🐍 Herança básica em Python</h2>
      <p class="bloco-texto">
        Para criar uma classe filha, passamos a classe pai entre parênteses
        na definição. A filha herda automaticamente tudo da pai.
      </p>
    </div>

    <div class="codigo-bloco">
      <div class="codigo-header">
        <span class="codigo-lang">Python</span>
        <div class="codigo-dots"><span></span><span></span><span></span></div>
      </div>
      <pre><span class="comment"># Classe PAI — o molde base</span>
<span class="keyword">class</span> <span class="func">Bruxo</span>:
    <span class="keyword">def</span> <span class="func">__init__</span>(<span class="self">self</span>, nome, casa):
        <span class="self">self</span>.nome = nome
        <span class="self">self</span>.casa = casa

    <span class="keyword">def</span> <span class="func">apresentar</span>(<span class="self">self</span>):
        <span class="func">print</span>(<span class="string">f"Eu sou {<span class="self">self</span>.nome} da casa {<span class="self">self</span>.casa}!"</span>)


<span class="comment"># Classe FILHA — herda tudo de Bruxo</span>
<span class="keyword">class</span> <span class="func">Auror</span>(Bruxo):
    <span class="keyword">def</span> <span class="func">__init__</span>(<span class="self">self</span>, nome, casa, especialidade):
        <span class="func">super</span>().__init__(nome, casa)  <span class="comment"># chama o __init__ do pai</span>
        <span class="self">self</span>.especialidade = especialidade

    <span class="keyword">def</span> <span class="func">missao</span>(<span class="self">self</span>):
        <span class="func">print</span>(<span class="string">f"{<span class="self">self</span>.nome} é Auror especialista em {<span class="self">self</span>.especialidade}!"</span>)


<span class="comment"># Auror herda apresentar() de Bruxo</span>
harry = <span class="func">Auror</span>(<span class="string">"Harry"</span>, <span class="string">"Grifinória"</span>, <span class="string">"Caça-Bruxos das Trevas"</span>)

harry.apresentar()  <span class="comment"># herdado do pai — Eu sou Harry da casa Grifinória!</span>
harry.missao()      <span class="comment"># próprio da filha — Harry é Auror especialista em...</span></pre>
    </div>

    <div class="bloco">
      <h2 class="bloco-titulo">✏️ Sobrescrita de métodos</h2>
      <p class="bloco-texto">
        A classe filha pode <strong>sobrescrever</strong> um método do pai —
        ou seja, redefinir o comportamento. É como Draco usar os poderes
        da família Malfoy do seu próprio jeito, diferente do pai.
      </p>
    </div>

    <div class="codigo-bloco">
      <div class="codigo-header">
        <span class="codigo-lang">Python</span>
        <div class="codigo-dots"><span></span><span></span><span></span></div>
      </div>
      <pre><span class="keyword">class</span> <span class="func">Bruxo</span>:
    <span class="keyword">def</span> <span class="func">__init__</span>(<span class="self">self</span>, nome):
        <span class="self">self</span>.nome = nome

    <span class="keyword">def</span> <span class="func">saudacao</span>(<span class="self">self</span>):
        <span class="func">print</span>(<span class="string">f"Olá, eu sou {<span class="self">self</span>.nome}!"</span>)


<span class="keyword">class</span> <span class="func">BruxoMaldoso</span>(Bruxo):
    <span class="comment"># Sobrescreve o método saudacao do pai</span>
    <span class="keyword">def</span> <span class="func">saudacao</span>(<span class="self">self</span>):
        <span class="func">print</span>(<span class="string">f"Eu sou {<span class="self">self</span>.nome}... e você vai se arrepender!"</span>)


harry = <span class="func">Bruxo</span>(<span class="string">"Harry"</span>)
voldemort = <span class="func">BruxoMaldoso</span>(<span class="string">"Voldemort"</span>)

harry.saudacao()      <span class="comment"># Olá, eu sou Harry!</span>
voldemort.saudacao()  <span class="comment"># Eu sou Voldemort... e você vai se arrepender!</span></pre>
    </div>

    <div class="bloco">
      <h2 class="bloco-titulo">🔑 Os 3 conceitos chave</h2>
      <p class="bloco-texto">
        <strong>1. Herança</strong> — classe filha recebe todos os atributos
        e métodos da classe pai automaticamente.<br><br>
        <strong>2. super()</strong> — chama o método da classe pai dentro
        da filha. Essencial no <em>__init__</em> para não perder os atributos do pai.<br><br>
        <strong>3. Sobrescrita</strong> — a filha pode redefinir um método
        herdado, mudando seu comportamento sem alterar a classe pai.
      </p>
    </div>

  `;
}

if (atividade) {
  atividade.innerHTML = `
    <div class="atividade-badge">⚡ Desafio do Módulo 4</div>
    <h2 class="atividade-titulo">A Família de Bruxos</h2>
    <p class="atividade-desc">
      Crie uma hierarquia de classes usando herança para representar
      diferentes tipos de bruxos em Hogwarts.
    </p>
    <ul class="atividade-lista">
      <li>Crie a classe pai <strong>Bruxo</strong> com atributos <strong>nome</strong> e <strong>casa</strong> e método <strong>apresentar()</strong></li>
      <li>Crie a classe filha <strong>Professor</strong> que herda de Bruxo e adiciona o atributo <strong>disciplina</strong></li>
      <li>Crie a classe filha <strong>Auror</strong> que herda de Bruxo e adiciona o atributo <strong>missoes_completas</strong></li>
      <li>Sobrescreva o <strong>apresentar()</strong> em cada filha para incluir os novos atributos</li>
      <li>Bônus: crie uma terceira filha <strong>BruxoMaldoso</strong> com um apresentar() intimidador!</li>
    </ul>

    <div class="nav-modulos">
      <a href="../index.html" class="btn-nav">← Voltar</a>
      <button id="btn-concluido" class="btn-concluido" data-modulo="modulo-4">
        Marcar como Concluído ✓
      </button>
      <a href="modulo-5.html" class="btn-nav proximo">Módulo 5 →</a>
    </div>
  `;
}