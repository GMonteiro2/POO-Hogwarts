const conteudo = document.getElementById('conteudo');
const atividade = document.getElementById('atividade');

if (conteudo) {
  conteudo.innerHTML = `

    <div class="bloco">
      <h2 class="bloco-titulo">🔒 A Câmara Secreta</h2>
      <p class="bloco-texto">
        Em Hogwarts existem lugares que só alguns podem acessar. A Câmara Secreta,
        o escritório de Dumbledore, o cofre do Gringotes — cada um tem seu nível
        de acesso. Você não pode simplesmente entrar em qualquer lugar.
      </p>
      <p class="bloco-texto" style="margin-top: 1rem;">
        Em POO, <strong>Encapsulamento</strong> é exatamente isso — controlar
        o acesso aos atributos e métodos de um objeto. Alguns dados devem ser
        <em>privados</em>, acessados apenas por quem tem permissão.
      </p>
    </div>

    <div class="citacao">
      "Encapsulamento é o feitiço que protege os dados do seu objeto —
      escondendo o que não deve ser tocado e expondo apenas o necessário."
    </div>

    <div class="bloco">
      <h2 class="bloco-titulo">🐍 Público vs Privado</h2>
      <p class="bloco-texto">
        Em Python, usamos <strong>underscore duplo</strong> <em>(__)</em> antes
        do nome para tornar um atributo privado. Isso significa que ele não pode
        ser acessado diretamente de fora da classe.
      </p>
    </div>

    <div class="codigo-bloco">
      <div class="codigo-header">
        <span class="codigo-lang">Python</span>
        <div class="codigo-dots"><span></span><span></span><span></span></div>
      </div>
      <pre><span class="keyword">class</span> <span class="func">Cofre</span>:
    <span class="keyword">def</span> <span class="func">__init__</span>(<span class="self">self</span>, dono, saldo):
        <span class="self">self</span>.dono    = dono     <span class="comment"># público — qualquer um acessa</span>
        <span class="self">self</span>.__saldo = saldo    <span class="comment"># privado — protegido!</span>

<span class="comment"># Criando o cofre do Harry</span>
cofre = <span class="func">Cofre</span>(<span class="string">"Harry"</span>, 1000)

<span class="func">print</span>(cofre.dono)      <span class="comment"># Harry — funciona!</span>
<span class="func">print</span>(cofre.__saldo)   <span class="comment"># ERRO! Atributo privado</span></pre>
    </div>

    <div class="bloco">
      <h2 class="bloco-titulo">🗝️ Getters e Setters — as chaves do cofre</h2>
      <p class="bloco-texto">
        Para acessar ou modificar atributos privados, criamos métodos especiais
        chamados <strong>getters</strong> (para ler) e <strong>setters</strong>
        (para modificar). É como pedir ao goblin do Gringotes para acessar
        o cofre — você não entra sozinho, passa pelo responsável.
      </p>
    </div>

    <div class="codigo-bloco">
      <div class="codigo-header">
        <span class="codigo-lang">Python</span>
        <div class="codigo-dots"><span></span><span></span><span></span></div>
      </div>
      <pre><span class="keyword">class</span> <span class="func">Cofre</span>:
    <span class="keyword">def</span> <span class="func">__init__</span>(<span class="self">self</span>, dono, saldo):
        <span class="self">self</span>.dono    = dono
        <span class="self">self</span>.__saldo = saldo    <span class="comment"># privado</span>

    <span class="comment"># Getter — lê o saldo</span>
    <span class="keyword">def</span> <span class="func">get_saldo</span>(<span class="self">self</span>):
        <span class="func">print</span>(<span class="string">f"Saldo de {<span class="self">self</span>.dono}: {<span class="self">self</span>.__saldo} Galeões"</span>)

    <span class="comment"># Setter — modifica o saldo com validação</span>
    <span class="keyword">def</span> <span class="func">depositar</span>(<span class="self">self</span>, valor):
        <span class="keyword">if</span> valor > 0:
            <span class="self">self</span>.__saldo += valor
            <span class="func">print</span>(<span class="string">f"{valor} Galeões depositados!"</span>)
        <span class="keyword">else</span>:
            <span class="func">print</span>(<span class="string">"Valor inválido!"</span>)


<span class="comment"># Usando o cofre corretamente</span>
cofre = <span class="func">Cofre</span>(<span class="string">"Harry"</span>, 1000)

cofre.get_saldo()      <span class="comment"># Saldo de Harry: 1000 Galeões</span>
cofre.depositar(500)   <span class="comment"># 500 Galeões depositados!</span>
cofre.get_saldo()      <span class="comment"># Saldo de Harry: 1500 Galeões</span>
cofre.depositar(-100)  <span class="comment"># Valor inválido!</span></pre>
    </div>

    <div class="bloco">
      <h2 class="bloco-titulo">🔑 Os 3 conceitos chave</h2>
      <p class="bloco-texto">
        <strong>1. Atributo público</strong> — acessível de qualquer lugar. Ex: <em>self.nome</em><br><br>
        <strong>2. Atributo privado</strong> — protegido com __ . Ex: <em>self.__saldo</em><br><br>
        <strong>3. Getter e Setter</strong> — métodos que controlam o acesso aos atributos privados, podendo inclusive validar os dados antes de aceitar.
      </p>
    </div>

  `;
}

if (atividade) {
  atividade.innerHTML = `
    <div class="atividade-badge">⚡ Desafio do Módulo 3</div>
    <h2 class="atividade-titulo">O Cofre de Gringotes</h2>
    <p class="atividade-desc">
      Crie uma classe <strong>Cofre</strong> que proteja o saldo do bruxo
      usando encapsulamento.
    </p>
    <ul class="atividade-lista">
      <li>Atributos: <strong>dono</strong> (público) e <strong>__saldo</strong> (privado)</li>
      <li>Método <strong>get_saldo()</strong> — exibe o saldo atual</li>
      <li>Método <strong>depositar(valor)</strong> — adiciona valor se for positivo</li>
      <li>Método <strong>sacar(valor)</strong> — remove valor se houver saldo suficiente</li>
      <li>Bônus: tente acessar <strong>cofre.__saldo</strong> diretamente e veja o erro!</li>
    </ul>
   <div class="nav-modulos">
      <a href="../index.html" class="btn-nav">← Voltar</a>
      <button id="btn-concluido" class="btn-concluido" data-modulo="modulo-3">
        Marcar como Concluído ✓
      </button>
      <a href="modulo-4.html" class="btn-nav proximo">Módulo 4 →</a>
    </div>
  `;
}