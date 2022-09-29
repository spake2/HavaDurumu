import CheckPicture from "./CheckPicture"

function index({back}) {
  return (
    <div className='back'>
      <CheckPicture durum={back}/>
    </div>
  )
}

export default index
