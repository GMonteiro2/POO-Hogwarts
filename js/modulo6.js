const conteudo = document.getElementById('conteudo');
const atividade = document.getElementById('atividade');

if (conteudo) {
  conteudo.innerHTML = `

    <div class="bloco">
      <h2 class="bloco-titulo">🔮 A Varinha Mágica</h2>
      <p class="bloco-texto">
        Quando Harry aponta a varinha e grita "Expelliarmus", ele não precisa
        saber a composição química da madeira, a frequência da onda mágica
        ou como o feitiço viaja pelo ar. Ele só precisa saber <em>o que fazer</em>
        — não <em>como funciona por dentro</em>.
      </p>
      <p class="bloco-texto" style="margin-top: 1rem;">
        Em POO, <strong>Abstração</strong> é esconder a complexidade interna
        e expor apenas o que o usuário precisa usar. Você define
        <em>o quê</em> fazer, não <em>como</em> fazer.
      </p>
    </div>

    <div class="citacao">
      "Abstração é a arte de esconder a complexidade —
      expondo apenas o essencial para quem vai usar o objeto."
    </div>

    <div class="bloco">
      <h2 class="bloco-titulo">🐍 Classes Abstratas em Python</h2>
      <p class="bloco-texto">
        Python usa o módulo <em>ABC</em> (Abstract Base Class) para criar
        classes abstratas. Uma classe abstrata define métodos que
        <strong>obrigatoriamente</strong> devem ser implementados pelas filhas —
        como um contrato que toda subclasse precisa cumprir.
      </p>
    </div>

    <div class="codigo-bloco">
      <div class="codigo-header">
        <span class="codigo-lang">Python</span>
        <div class="codigo-dots"><span></span><span></span><span></span></div>
      </div>
      <pre><span class="keyword">from</span> abc <span class="keyword">import</span> ABC, abstractmethod

<span class="comment"># Classe ABSTRATA — define o contrato</span>
<span class="keyword">class</span> <span class="func">FeiticoBase</span>(ABC):

    <span class="keyword">def</span> <span class="func">__init__</span>(<span class="self">self</span>, nome):
        <span class="self">self</span>.nome = nome

    <span class="comment"># Método abstrato — OBRIGATÓRIO nas filhas</span>
    @abstractmethod
    <span class="keyword">def</span> <span class="func">lancar</span>(<span class="self">self</span>):
        <span class="keyword">pass</span>

    <span class="comment"># Método concreto — já implementado, herdado pelas filhas</span>
    <span class="keyword">def</span> <span class="func">descricao</span>(<span class="self">self</span>):
        <span class="func">print</span>(<span class="string">f"Feitiço: {<span class="self">self</span>.nome}"</span>)


<span class="comment"># Filhas PRECISAM implementar lancar()</span>
<span class="keyword">class</span> <span class="func">Expelliarmus</span>(FeiticoBase):
    <span class="keyword">def</span> <span class="func">lancar</span>(<span class="self">self</span>):
        <span class="func">print</span>(<span class="string">"Expelliarmus! A varinha do inimigo voa!"</span>)


<span class="keyword">class</span> <span class="func">Lumos</span>(FeiticoBase):
    <span class="keyword">def</span> <span class="func">lancar</span>(<span class="self">self</span>):
        <span class="func">print</span>(<span class="string">"Lumos! A ponta da varinha acende!"</span>)


<span class="comment"># Usando os feitiços</span>
f1 = <span class="func">Expelliarmus</span>(<span class="string">"Expelliarmus"</span>)
f2 = <span class="func">Lumos</span>(<span class="string">"Lumos"</span>)

f1.descricao()  <span class="comment"># Feitiço: Expelliarmus</span>
f1.lancar()     <span class="comment"># Expelliarmus! A varinha do inimigo voa!</span>
f2.lancar()     <span class="comment"># Lumos! A ponta da varinha acende!</span>

<span class="comment"># Isso daria ERRO — não pode instanciar classe abstrata!</span>
<span class="comment"># feitico = FeiticoBase("Teste")</span></pre>
    </div>

    <div class="bloco">
      <h2 class="bloco-titulo">⚡ Abstração vs Encapsulamento</h2>
      <p class="bloco-texto">
        É fácil confundir os dois — mas são conceitos diferentes:<br><br>
        <strong>Encapsulamento</strong> — <em>esconde</em> os dados internos
        do objeto, protegendo com atributos privados.<br><br>
        <strong>Abstração</strong> — <em>esconde</em> a complexidade da
        implementação, expondo apenas uma interface simples de usar.<br><br>
        Pensa assim: o Encapsulamento tranca o cofre do Gringotes.
        A Abstração é você usar o caixa eletrônico sem saber como
        o banco processa a transação por dentro.
      </p>
    </div>

    <div class="bloco">
      <h2 class="bloco-titulo">🔑 Os 3 conceitos chave</h2>
      <p class="bloco-texto">
        <strong>1. Abstração</strong> — esconde a complexidade interna,
        expõe apenas o necessário para usar o objeto.<br><br>
        <strong>2. Classe Abstrata</strong> — não pode ser instanciada
        diretamente. Serve como contrato para as classes filhas.<br><br>
        <strong>3. @abstractmethod</strong> — decorador que marca um método
        como obrigatório. Toda classe filha precisa implementá-lo
        ou vai dar erro.
      </p>
    </div>

  `;
}

if (atividade) {
  atividade.innerHTML = `
    <div class="atividade-badge">⚡ Desafio do Módulo 6</div>
    <h2 class="atividade-titulo">O Grimório de Feitiços</h2>
    <p class="atividade-desc">
      Crie um sistema de feitiços usando classes abstratas —
      o grimório define o contrato, cada feitiço implementa do seu jeito.
    </p>
    <ul class="atividade-lista">
      <li>Importe <strong>ABC</strong> e <strong>abstractmethod</strong> do módulo abc</li>
      <li>Crie a classe abstrata <strong>Feitico</strong> com método abstrato <strong>lancar()</strong> e método concreto <strong>descricao()</strong></li>
      <li>Crie 3 feitiços concretos: <strong>Patronus</strong>, <strong>Riddikulus</strong> e <strong>Alohomora</strong></li>
      <li>Coloque os 3 em uma lista e chame <strong>lancar()</strong> em cada um</li>
      <li>Bônus: tente instanciar a classe <strong>Feitico</strong> diretamente e veja o erro!</li>
    </ul>

    <div class="nav-modulos">
      <a href="modulo-5.html" class="btn-nav">← Módulo 5</a>
      <a href="../index.html" class="btn-nav proximo">🏆 Concluir Curso →</a>
    </div>
  `;
}