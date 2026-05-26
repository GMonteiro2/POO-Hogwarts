const conteudo = document.getElementById('conteudo');
const atividade = document.getElementById('atividade');

if (conteudo) {
  conteudo.innerHTML = `

    <div class="bloco">
      <h2 class="bloco-titulo">✨ Expecto Patronum</h2>
      <p class="bloco-texto">
        Quando Harry lança Expecto Patronum, aparece um cervo. Quando
        Hermione lança, aparece uma lontra. Quando Lupin lança, aparece
        um lobo. O mesmo feitiço — resultados completamente diferentes
        dependendo de quem o lança.
      </p>
      <p class="bloco-texto" style="margin-top: 1rem;">
        Em POO, <strong>Polimorfismo</strong> é exatamente isso — o mesmo
        método pode ter comportamentos diferentes dependendo do objeto
        que o executa.
      </p>
    </div>

    <div class="citacao">
      "Polimorfismo significa muitas formas. Um mesmo método,
      comportamentos diferentes para cada classe que o implementa."
    </div>

    <div class="bloco">
      <h2 class="bloco-titulo">🐍 Polimorfismo em Python</h2>
      <p class="bloco-texto">
        Cada classe pode implementar o mesmo método de forma diferente.
        Quando chamamos o método, Python executa a versão correta
        automaticamente baseado no tipo do objeto.
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

    <span class="keyword">def</span> <span class="func">patrono</span>(<span class="self">self</span>):
        <span class="func">print</span>(<span class="string">f"{<span class="self">self</span>.nome} conjura um Patrono!"</span>)


<span class="keyword">class</span> <span class="func">Harry</span>(Bruxo):
    <span class="comment"># Sobrescreve patrono() com seu próprio comportamento</span>
    <span class="keyword">def</span> <span class="func">patrono</span>(<span class="self">self</span>):
        <span class="func">print</span>(<span class="string">f"{<span class="self">self</span>.nome} conjura um Cervo prateado!"</span>)


<span class="keyword">class</span> <span class="func">Hermione</span>(Bruxo):
    <span class="keyword">def</span> <span class="func">patrono</span>(<span class="self">self</span>):
        <span class="func">print</span>(<span class="string">f"{<span class="self">self</span>.nome} conjura uma Lontra prateada!"</span>)


<span class="keyword">class</span> <span class="func">Lupin</span>(Bruxo):
    <span class="keyword">def</span> <span class="func">patrono</span>(<span class="self">self</span>):
        <span class="func">print</span>(<span class="string">f"{<span class="self">self</span>.nome} conjura um Lobo prateado!"</span>)


<span class="comment"># Mesmo método, comportamentos diferentes!</span>
bruxos = [
    <span class="func">Harry</span>(<span class="string">"Harry"</span>),
    <span class="func">Hermione</span>(<span class="string">"Hermione"</span>),
    <span class="func">Lupin</span>(<span class="string">"Lupin"</span>)
]

<span class="keyword">for</span> bruxo <span class="keyword">in</span> bruxos:
    bruxo.patrono()  <span class="comment"># cada um executa sua própria versão!</span></pre>
    </div>

    <div class="bloco">
      <h2 class="bloco-titulo">⚡ Por que isso é poderoso?</h2>
      <p class="bloco-texto">
        No exemplo acima, o loop não precisa saber se está lidando com
        Harry, Hermione ou Lupin. Ele simplesmente chama <em>patrono()</em>
        e cada objeto sabe o que fazer. Isso torna o código muito mais
        <strong>flexível</strong> e <strong>fácil de expandir</strong> —
        adicionar um novo bruxo é só criar uma nova classe, sem mexer
        no resto do código.
      </p>
    </div>

    <div class="codigo-bloco">
      <div class="codigo-header">
        <span class="codigo-lang">Python</span>
        <div class="codigo-dots"><span></span><span></span><span></span></div>
      </div>
      <pre><span class="comment"># Adicionando um novo bruxo não quebra nada!</span>
<span class="keyword">class</span> <span class="func">Luna</span>(Bruxo):
    <span class="keyword">def</span> <span class="func">patrono</span>(<span class="self">self</span>):
        <span class="func">print</span>(<span class="string">f"{<span class="self">self</span>.nome} conjura uma Lebre prateada!"</span>)

<span class="comment"># O loop continua funcionando igual</span>
bruxos.append(<span class="func">Luna</span>(<span class="string">"Luna"</span>))

<span class="keyword">for</span> bruxo <span class="keyword">in</span> bruxos:
    bruxo.patrono()

<span class="comment"># Harry conjura um Cervo prateado!</span>
<span class="comment"># Hermione conjura uma Lontra prateada!</span>
<span class="comment"># Lupin conjura um Lobo prateado!</span>
<span class="comment"># Luna conjura uma Lebre prateada!</span></pre>
    </div>

    <div class="bloco">
      <h2 class="bloco-titulo">🔑 Os 3 conceitos chave</h2>
      <p class="bloco-texto">
        <strong>1. Polimorfismo</strong> — mesmo método, comportamentos
        diferentes dependendo do objeto que o executa.<br><br>
        <strong>2. Flexibilidade</strong> — o código que chama o método
        não precisa saber o tipo exato do objeto, só que ele tem aquele método.<br><br>
        <strong>3. Extensibilidade</strong> — adicionar novos tipos de objetos
        não quebra o código existente, basta implementar o mesmo método.
      </p>
    </div>

  `;
}

if (atividade) {
  atividade.innerHTML = `
    <div class="atividade-badge">⚡ Desafio do Módulo 5</div>
    <h2 class="atividade-titulo">A Aula de Defesa Contra as Trevas</h2>
    <p class="atividade-desc">
      Crie um sistema onde diferentes criaturas mágicas atacam
      de formas diferentes usando polimorfismo.
    </p>
    <ul class="atividade-lista">
      <li>Crie a classe pai <strong>CriaturaMagica</strong> com método <strong>atacar()</strong> genérico</li>
      <li>Crie as filhas <strong>Dementor</strong>, <strong>Basilisco</strong> e <strong>Troll</strong> cada uma com seu próprio <strong>atacar()</strong></li>
      <li>Coloque as 3 criaturas em uma lista e chame <strong>atacar()</strong> em cada uma com um loop</li>
      <li>Bônus: adicione uma quarta criatura <strong>Hipogrifo</strong> sem alterar o loop!</li>
    </ul>

    <div class="nav-modulos">
      <a href="modulo-4.html" class="btn-nav">← Módulo 4</a>
      <a href="modulo-6.html" class="btn-nav proximo">Módulo 6 →</a>
    </div>
  `;
}