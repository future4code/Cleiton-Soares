import { HeaderS } from './styles'

function Header(props) {
  const { currentPage, setRightPage } = props
  return (
    <HeaderS>
      {currentPage === 'Matches' && (
        <button onClick={setRightPage}>Back</button>
      )}
      <h2>astromatch</h2>
      {currentPage === 'Profiles' && (
        <button onClick={setRightPage}>Matches</button>
      )}
    </HeaderS>
  )
}

export default Header
