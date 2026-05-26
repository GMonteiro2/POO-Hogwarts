const conteudo = document.getElementById('conteudo');
const atividade = document.getElementById('atividade');

if (conteudo) {
  conteudo.innerHTML = `

    <div class="bloco">
      <h2 class="bloco-titulo">🧙‍♂️ Todo bruxo tem características e habilidades</h2>
      <p class="bloco-texto">
        Pensa no Harry Potter. Ele tem características únicas, cabelo bagunçado,
        olhos verdes, uma cicatriz em forma de raio. E ele também <em>faz coisas</em>,
        lança feitiços, voa em vassoura, fala com cobras.
      </p>
      <p class="bloco-texto" style="margin-top: 1rem;">
        Em POO, as características se chamam <strong>Atributos</strong> e
        as ações se chamam <strong>Métodos</strong>. Todo objeto tem os dois.
      </p>
    </div>

    <div class="citacao">
      "Atributos são o que o objeto <strong>é</strong>.<br>
      Métodos são o que o objeto <strong>faz</strong>."
    </div>

    <div class="bloco">
      <h2 class="bloco-titulo">📖 Atributos : as características</h2>
      <p class="bloco-texto">
        Atributos são variáveis que pertencem ao objeto. Cada objeto tem
        os seus próprios valores, Harry e Draco são ambos Bruxos, mas
        têm atributos completamente diferentes.
      </p>
    </div>

    <div class="codigo-bloco">
      <div class="codigo-header">
        <span class="codigo-lang">Python</span>
        <div class="codigo-dots"><span></span><span></span><span></span></div>
      </div>
      <pre><span class="keyword">class</span> <span class="func">Bruxo</span>:
    <span class="keyword">def</span> <span class="func">__init__</span>(<span class="self">self</span>, nome, casa, varinha, pontos):
        <span class="self">self</span>.nome    = nome      <span class="comment"># atributo: nome do bruxo</span>
        <span class="self">self</span>.casa    = casa      <span class="comment"># atributo: casa de Hogwarts</span>
        <span class="self">self</span>.varinha = varinha   <span class="comment"># atributo: tipo de varinha</span>
        <span class="self">self</span>.pontos  = pontos    <span class="comment"># atributo: pontos da casa</span>

<span class="comment"># Cada objeto tem seus próprios valores</span>
harry = <span class="func">Bruxo</span>(<span class="string">"Harry"</span>,  <span class="string">"Grifinória"</span>, <span class="string">"Azevinho"</span>, 100)
draco = <span class="func">Bruxo</span>(<span class="string">"Draco"</span>,  <span class="string">"Sonserina"</span>,  <span class="string">"Espinheiro"</span>, 50)

<span class="comment"># Acessando atributos com ponto (.)</span>
<span class="func">print</span>(harry.nome)    <span class="comment"># Harry</span>
<span class="func">print</span>(draco.casa)    <span class="comment"># Sonserina</span></pre>
    </div>

    <div class="bloco">
      <h2 class="bloco-titulo">⚡ Métodos : as ações</h2>
      <p class="bloco-texto">
        Métodos são funções dentro da classe. Eles definem o que o objeto
        pode <em>fazer</em>. O primeiro parâmetro sempre é <strong>self</strong>,
        o próprio objeto executando a ação.
      </p>
    </div>

    <div class="codigo-bloco">
      <div class="codigo-header">
        <span class="codigo-lang">Python</span>
        <div class="codigo-dots"><span></span><span></span><span></span></div>
      </div>
      <pre><span class="keyword">class</span> <span class="func">Bruxo</span>:
    <span class="keyword">def</span> <span class="func">__init__</span>(<span class="self">self</span>, nome, casa, pontos):
        <span class="self">self</span>.nome   = nome
        <span class="self">self</span>.casa   = casa
        <span class="self">self</span>.pontos = pontos

    <span class="comment"># Método 1 — apresentar o bruxo</span>
    <span class="keyword">def</span> <span class="func">apresentar</span>(<span class="self">self</span>):
        <span class="func">print</span>(<span class="string">f"Eu sou {<span class="self">self</span>.nome} da casa {<span class="self">self</span>.casa}!"</span>)

    <span class="comment"># Método 2 — ganhar pontos</span>
    <span class="keyword">def</span> <span class="func">ganhar_pontos</span>(<span class="self">self</span>, quantidade):
        <span class="self">self</span>.pontos += quantidade
        <span class="func">print</span>(<span class="string">f"{<span class="self">self</span>.nome} ganhou {quantidade} pontos!"</span>)

    <span class="comment"># Método 3 — lançar feitiço</span>
    <span class="keyword">def</span> <span class="func">lancar_feitico</span>(<span class="self">self</span>, feitico):
        <span class="func">print</span>(<span class="string">f"{<span class="self">self</span>.nome} lança {feitico}!"</span>)


<span class="comment"># Usando os métodos</span>
harry = <span class="func">Bruxo</span>(<span class="string">"Harry"</span>, <span class="string">"Grifinória"</span>, 0)

harry.apresentar()                   <span class="comment"># Eu sou Harry da casa Grifinória!</span>
harry.ganhar_pontos(10)              <span class="comment"># Harry ganhou 10 pontos!</span>
harry.lancar_feitico(<span class="string">"Expelliarmus"</span>) <span class="comment"># Harry lança Expelliarmus!</span>
<span class="func">print</span>(harry.pontos)                  <span class="comment"># 10</span></pre>
    </div>

    <div class="bloco">
      <h2 class="bloco-titulo">🔑 Os 3 conceitos chave</h2>
      <p class="bloco-texto">
        <strong>1. Atributo</strong> : variável do objeto, definida com <em>self.nome = valor</em>.<br><br>
        <strong>2. Método</strong> : função do objeto, sempre recebe <em>self</em> como primeiro parâmetro.<br><br>
        <strong>3. Acesso com ponto</strong> : para acessar atributo ou chamar método use <em>objeto.atributo</em> ou <em>objeto.metodo()</em>.
      </p>
    </div>

  `;
}

if (atividade) {
  atividade.innerHTML = `
    <div class="atividade-badge">⚡ Desafio do Módulo 2</div>
    <h2 class="atividade-titulo">O Bruxo Completo</h2>
    <p class="atividade-desc">
      Crie uma classe <strong>Bruxo</strong> mais completa, com atributos e pelo menos 3 métodos diferentes.
    </p>
    <ul class="atividade-lista">
      <li>Atributos: <strong>nome</strong>, <strong>casa</strong>, <strong>varinha</strong>, <strong>pontos</strong></li>
      <li>Método <strong>apresentar()</strong> : printa todos os atributos</li>
      <li>Método <strong>ganhar_pontos(quantidade)</strong> : soma pontos ao total</li>
      <li>Método <strong>lancar_feitico(feitico)</strong> : printa o feitiço lançado</li>
      <li>Bônus : crie um método <strong>perder_pontos(quantidade)</strong> e teste com o Draco</li>
    </ul>

    <div class="nav-modulos">
      <a href="modulo-1.html" class="btn-nav">← Módulo 1</a>
      <a href="modulo-3.html" class="btn-nav proximo">Módulo 3 →</a>
    </div>
  `;
}