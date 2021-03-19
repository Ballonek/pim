import './FlipCard.css';

const FlipCard = ({ frontText, backText }) => {
  return (
    <div className='flip-card'>
      <div className='flip-card-inner'>
        <div className='flip-card-front'>
          <div>{frontText}</div>
        </div>
        <div className='flip-card-back'>
          <div>{backText}</div>
        </div>
      </div>
    </div>
  );
};

export default FlipCard;
