import cat from '../../images-and-icons/eyes_cat_icon.png';
import css from './NoReviews.module.css';

export const NoReviews = () => {
  return (
    <div className={css.container}>
      <h3>There are no reviews about this movie</h3>
      <img src={cat} alt="Sad cat" />
    </div>
  );
};
