import React from 'react';

import * as S from './styles';

export function Main({
  title = 'React Avançado',
  description = 'Typescript, ReactJS, NextJS e Styled Components'
}) {
  return (
    <S.Wrapper>
      <S.Logo
        src="/img/logo.svg"
        alt="Imagem de um átomo e React Avançado escrito ao lado"
      />
      <S.Title>{title}</S.Title>
      <S.Description>{description}</S.Description>

      <S.Ilustration
        src="/img/hero-illustration.svg"
        alt="Rapaz sentado em frente a tela com códigos"
      />
    </S.Wrapper>
  );
}
