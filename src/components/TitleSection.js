import CheckMark from '../icons/CheckMark.svg'

const TitleSection = () => {
  return (
    <div className="title-section">
      <h1 className="title">
        Get<br />
        Things<br />
        <span style={{color: '#0C0000'}}>Done!</span>
      </h1>
      <div className='check-mark'>
        <img src={CheckMark} alt='check mark'/>
      </div>
    </div>
  )
}

export default TitleSection;