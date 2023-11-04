import './createdBy.css';

function CreatedBy() {
  return (
    <div className='about-container'>
      <div className='about-me'>
        <h3>Created by</h3>
        <button className='info-button'>
          <a href='https://github.com/jabaaq' target='_blank'>
            @jabaaq
          </a>
        </button>
      </div>
    </div>
  );
}

export { CreatedBy };
