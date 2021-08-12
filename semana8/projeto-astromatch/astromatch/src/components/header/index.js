import { HeaderS } from './styles'
import astromatch from '../../img/astromatch.svg'
import groups from '../../img/groups.svg'
import undo from '../../img/undo.svg'

function Header(props) {
  const { currentPage, setRightPage } = props
  return (
    <HeaderS>
      {currentPage === 'Matches' && (
        <button onClick={() => setRightPage('Profiles')}>
          <img src={undo} alt='undo' />
        </button>
      )}
      <h2>
        <img src={astromatch} alt='logo' />
      </h2>
      {currentPage === 'Profiles' && (
        <button onClick={() => setRightPage('Matches')}>
          <img src={groups} alt='matches' />
        </button>
      )}
    </HeaderS>
  )
}

export default Header
