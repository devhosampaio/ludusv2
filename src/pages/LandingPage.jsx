import { useEffect, useState } from "react";
import "./LandingPage.css";

const reviews = [
  {
    id: "LP-021",
    game: "Hollow Knight",
    category: "AÇÃO · AVENTURA",
    author: "lunar",
    date: "há 2 horas",
    rating: "4,5",
    text: "Um mundo que parece silencioso, mas está cheio de histórias. Daqueles jogos que continuam com você mesmo depois dos créditos.",
    cover: "cover--hollow",
    mark: "HK",
  },
  {
    id: "LP-022",
    game: "Celeste",
    category: "PLATAFORMA",
    author: "mari.exe",
    date: "há 5 horas",
    rating: "5,0",
    text: "Uma experiência delicada e intensa. Cada fase parece conversar com aquilo que o jogo quer dizer.",
    cover: "cover--celeste",
    mark: "C",
  },
  {
    id: "LP-023",
    game: "Outer Wilds",
    category: "EXPLORAÇÃO",
    author: "pixelpoet",
    date: "ontem",
    rating: "4,8",
    text: "A curiosidade é a melhor ferramenta que esse jogo poderia oferecer. Queria poder descobrir tudo de novo.",
    cover: "cover--outer",
    mark: "OW",
  },
];

const lists = [
  { id: "LP-041", title: "jogos para sentir", author: "ana.ctrl", count: "12 jogos", covers: ["J", "C", "A"], colors: ["list-cover--one", "list-cover--two", "list-cover--three"] },
  { id: "LP-042", title: "mundos para perder a hora", author: "lunar", count: "8 jogos", covers: ["H", "O", "S"], colors: ["list-cover--four", "list-cover--five", "list-cover--six"] },
  { id: "LP-043", title: "pequenas obras-primas", author: "pixelpoet", count: "15 jogos", covers: ["P", "I", "D"], colors: ["list-cover--seven", "list-cover--eight", "list-cover--nine"] },
];

const features = [
  { id: "LP-051", symbol: "✳", title: "avalie", text: "Registre o que você jogou e dê sua nota." },
  { id: "LP-052", symbol: "▤", title: "escreva", text: "Transforme suas impressões em resenhas." },
  { id: "LP-053", symbol: "♡", title: "conecte-se", text: "Encontre pessoas que também vivem jogos." },
  { id: "LP-054", symbol: "▦", title: "organize", text: "Monte listas e reúna seus favoritos." },
];

function Stars({ value }) {
  return <span className="lp-stars" aria-label={`Nota ${value} de 5`}>★★★★★ <small>{value}</small></span>;
}

function AuthModal({ mode, onClose, onSwitch }) {
  const isRegister = mode === "register";

  useEffect(() => {
    function onKeyDown(event) {
      if (event.key === "Escape") onClose();
    }
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [onClose]);

  return (
    <div className="lp-modal-backdrop" onMouseDown={(event) => event.target === event.currentTarget && onClose()} data-ui-id="LP-061">
      <section className="lp-modal" role="dialog" aria-modal="true" aria-labelledby="lp-modal-title" data-ui-id="LP-062">
        <button className="lp-modal__close" type="button" onClick={onClose} aria-label="Fechar">×</button>
        <span className="lp-eyebrow">ludus / sua próxima página começa aqui</span>
        <h2 id="lp-modal-title">{isRegister ? "chegue mais perto." : "bom ter você de volta."}</h2>
        <p>{isRegister ? "Crie seu espaço para registrar tudo o que os jogos despertam." : "Entre para continuar sua jornada pelo LUDUS."}</p>
        <form className="lp-auth-form" onSubmit={(event) => event.preventDefault()}>
          {isRegister && <label>Nome de usuário<input type="text" name="username" placeholder="como quer ser chamado?" autoComplete="username" /></label>}
          <label>E-mail<input type="email" name="email" placeholder="voce@email.com" autoComplete="email" /></label>
          <label>Senha<input type="password" name="password" placeholder="sua senha" autoComplete={isRegister ? "new-password" : "current-password"} /></label>
          <button className="lp-button lp-button--primary" type="submit">{isRegister ? "criar conta" : "entrar"} <span>↗</span></button>
        </form>
        <div className="lp-modal__switch">
          {isRegister ? "Já tem uma conta?" : "Ainda não faz parte?"}
          <button type="button" onClick={onSwitch}>{isRegister ? "Entrar" : "Criar conta"}</button>
        </div>
        <small className="lp-modal__note">Prévia da interface · autenticação ainda não conectada</small>
      </section>
    </div>
  );
}

function LandingPage() {
  const [authMode, setAuthMode] = useState(null);

  const openAuth = (mode) => setAuthMode(mode);
  const closeAuth = () => setAuthMode(null);

  return (
    <main className="landing-page" data-ui-id="LP-001">
      <div className="lp-grain" aria-hidden="true" data-ui-id="LP-002" />
      <section className="lp-hero lp-container" id="inicio" data-ui-id="LP-003">
        <div className="lp-hero__copy" data-ui-id="LP-004">
          <a className="lp-wordmark" href="#inicio" aria-label="ludus — início" data-ui-id="LP-005">
            <span className="lp-wordmark__symbol" aria-hidden="true"><i /><i /><i /></span>
            <span>ludus</span>
          </a>
          <span className="lp-eyebrow lp-hero__eyebrow">um lugar para quem joga</span>
          <h1>Todo jogo deixa<br />uma <em>história.</em></h1>
          <p className="lp-hero__description">Um espaço para guardar suas experiências, descobrir novos mundos e encontrar quem sente os jogos como você.</p>
          <div className="lp-hero__actions">
            <button className="lp-button lp-button--primary" onClick={() => openAuth("register")}>fazer parte da comunidade <span>↗</span></button>
            <button className="lp-button lp-button--text" onClick={() => openAuth("login")}>entrar</button>
          </div>
          <span className="lp-hero__aside">jogue · registre · compartilhe</span>
        </div>

        <div className="lp-hero__visual" aria-label="Prévia ilustrativa de avaliações do LUDUS" data-ui-id="LP-006">
          <div className="lp-visual-note lp-visual-note--top">SEU OLHAR SOBRE CADA JOGO <span>✳</span></div>
          <article className="lp-featured-card" data-ui-id="LP-007">
            <div className="lp-featured-card__art cover--outer">
              <span className="art-orbit art-orbit--one" />
              <span className="art-orbit art-orbit--two" />
              <span className="art-sun" />
              <span className="lp-featured-card__art-title">OUTER<br />WILDS</span>
              <span className="lp-featured-card__art-caption">THE UNIVERSE IS WAITING</span>
            </div>
            <div className="lp-featured-card__body">
              <div><span className="lp-card-kicker">AVALIAÇÃO EM DESTAQUE</span><h3>Outer Wilds</h3><span className="lp-muted">por pixelpoet</span></div>
              <Stars value="4,8" />
            </div>
            <p className="lp-featured-card__quote">“Queria poder descobrir tudo de novo.”</p>
          </article>
          <div className="lp-floating-review" data-ui-id="LP-008">
            <span className="lp-floating-review__avatar">m.</span>
            <div><strong>mari.exe</strong><span>uma nova avaliação</span></div>
            <span className="lp-floating-review__star">★ 5,0</span>
          </div>
          <div className="lp-visual-note lp-visual-note--bottom"><span>01 / 03</span> EXPERIÊNCIAS QUE FICAM</div>
          <span className="lp-hero__asterisk" aria-hidden="true">✳</span>
        </div>
      </section>

      <section className="lp-section lp-container" id="avaliacoes" data-ui-id="LP-020">
        <div className="lp-section-heading" data-ui-id="LP-020A">
          <div><span className="lp-eyebrow">01 / o que a comunidade joga</span><h2>últimas <em>avaliações</em></h2></div>
          <span className="lp-section-heading__aside">TRÊS OLHARES, TRÊS EXPERIÊNCIAS</span>
        </div>
        <div className="lp-review-grid">
          {reviews.map((review) => (
            <article className="lp-review-card" key={review.id} data-ui-id={review.id}>
              <div className={`lp-game-art ${review.cover}`} aria-label={`Arte tipográfica ilustrativa de ${review.game}`}>
                <span className="lp-game-art__mark">{review.mark}</span><span className="lp-game-art__name">{review.game}</span><span className="lp-game-art__category">{review.category}</span>
              </div>
              <div className="lp-review-card__meta"><span>@{review.author}</span><span>{review.date}</span></div>
              <div className="lp-review-card__title"><h3>{review.game}</h3><Stars value={review.rating} /></div>
              <p>{review.text}</p>
              <div className="lp-review-card__footer"><span>♡ 24</span><span>○ 8 comentários</span><span>↗</span></div>
            </article>
          ))}
        </div>
        <p className="lp-demo-caption">Conteúdo ilustrativo para apresentar a experiência do LUDUS.</p>
      </section>

      <section className="lp-section lp-container" id="listas" data-ui-id="LP-040">
        <div className="lp-section-heading">
          <div><span className="lp-eyebrow">02 / coleções pessoais</span><h2>jogos em <em>conjunto</em></h2></div>
          <span className="lp-section-heading__aside">LISTAS FEITAS POR JOGADORES</span>
        </div>
        <div className="lp-list-grid">
          {lists.map((list) => (
            <article className="lp-list-card" key={list.id} data-ui-id={list.id}>
              <div className="lp-list-card__covers">
                {list.covers.map((cover, index) => <div className={`lp-list-cover ${list.colors[index]}`} key={cover}><span>{cover}</span></div>)}
              </div>
              <div className="lp-list-card__info"><div><h3>{list.title}</h3><span>por @{list.author}</span></div><span>{list.count}</span></div>
            </article>
          ))}
        </div>
        <p className="lp-demo-caption">Capas e listas ilustrativas.</p>
      </section>

      <section className="lp-section lp-features-section" id="funcionalidades" data-ui-id="LP-050">
        <div className="lp-container">
          <div className="lp-section-heading">
            <div><span className="lp-eyebrow">03 / seu espaço de jogo</span><h2>mais maneiras de <em>viver jogos</em></h2></div>
          </div>
          <div className="lp-feature-grid">
            {features.map((feature) => <article className="lp-feature" key={feature.id} data-ui-id={feature.id}><span className="lp-feature__symbol">{feature.symbol}</span><h3>{feature.title}</h3><p>{feature.text}</p></article>)}
          </div>
        </div>
      </section>

      <section className="lp-about lp-container" id="sobre" data-ui-id="LP-055">
        <div className="lp-about__symbol" aria-hidden="true"><span>l</span><i>✳</i></div>
        <div className="lp-about__copy"><span className="lp-eyebrow">04 / sobre o ludus</span><h2>Jogar também é<br /><em>fazer parte.</em></h2><p>Todo mundo tem um jeito próprio de viver um jogo. O LUDUS nasce para reunir essas experiências: as histórias, as descobertas, as opiniões e as pessoas que fazem parte delas.</p><button className="lp-button lp-button--primary" onClick={() => openAuth("register")}>encontre seu espaço <span>↗</span></button></div>
      </section>

      <footer className="lp-footer" data-ui-id="LP-056">
        <div className="lp-container lp-footer__inner">
          <a className="lp-wordmark lp-wordmark--footer" href="#inicio"><span className="lp-wordmark__symbol" aria-hidden="true"><i /><i /><i /></span><span>ludus</span></a>
          <span className="lp-footer__copyright">UM ESPAÇO PARA QUEM JOGA · 2026</span>
          <nav className="lp-footer__links" aria-label="Links do rodapé"><a href="#sobre">sobre</a><span>termos de uso</span><span>contato</span><span>instagram</span><a href="https://github.com/devhosampaio/ludusv2" target="_blank" rel="noreferrer">github</a></nav>
        </div>
      </footer>
      {authMode && <AuthModal mode={authMode} onClose={closeAuth} onSwitch={() => setAuthMode(authMode === "register" ? "login" : "register")} />}
    </main>
  );
}

export default LandingPage;
