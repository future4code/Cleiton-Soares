import * as S from './styles'
import astromatch from '../../img/astromatch.svg'
import groups from '../../img/groups.svg'
import undo from '../../img/undo.svg'

function Header({ currentPage, setRightPage }) {
  return (
    <S.Header>
      {currentPage === 'Matches' && (
        <button onClick={() => setRightPage('Profiles')}>
          <img src={undo} alt='undo' />
        </button>
      )}
      <img src={astromatch} alt='logo' />
      {currentPage === 'Profiles' && (
        <button onClick={() => setRightPage('Matches')}>
          <img src={groups} alt='matches' />
        </button>
      )}
    </S.Header>
  )
}

export default Header
