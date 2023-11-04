import './createdBy.css';

function CreatedBy() {
  return (
    <div className='about-container'>
      <div className='about-me'>
        <h3>Created by</h3>

        <a href='https://github.com/jabaaq' target='_blank'>
          <button className='info-button'>@jabaaq</button>
        </a>
      </div>
    </div>
  );
}

export { CreatedBy };
