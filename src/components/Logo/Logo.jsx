import css from './Logo.module.css';

export const Logo = () => (
  <div>
    <span role="img" aria-label="movie" className={css.logo}>
      🎬
    </span>
  </div>
);
