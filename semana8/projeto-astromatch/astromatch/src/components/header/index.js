import React from 'react'
import * as S from './styles'
import astromatch from '../../img/astromatch.svg'
import groups from '../../img/groups.svg'
import undo from '../../img/undo.svg'

function Header({ currentPage, setcurrentPage }) {
  return (
    <S.Header>
      {currentPage === 'Matches' && (
        <button title={"Voltar"} onClick={() => setcurrentPage('Profiles')}>
          <img src={undo} alt='undo' />
        </button>
      )}
      <img src={astromatch} alt='logo' />
      {currentPage === 'Profiles' && (
        <button title={"Matches"} onClick={() => setcurrentPage('Matches')}>
          <img src={groups} alt='matches' />
        </button>
      )}
    </S.Header>
  )
}

export default Header
