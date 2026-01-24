import React from 'react';
import S from './style';

const Footer = () => {
  return (
    <S.Footer>
      <S.FooterInner>
        <S.Logo>
          <S.Link to="/">
            <S.Img
              src={`${process.env.PUBLIC_URL}/assets/images/logo.png`} alt="자취연구소" maxWidth={156}/>
          </S.Link>
        </S.Logo>
        <S.FooterMenus>
          <S.Link to="/" onClick={() => alert('준비중입니다.')}>이용약관</S.Link>
          <i>|</i>
          <S.Link to="/" onClick={() => alert('준비중입니다.')}>개인정보처리방침</S.Link>
          <i>|</i>
          <S.Link to="/" onClick={() => alert('준비중입니다.')}>고객센터</S.Link>
        </S.FooterMenus>
        <S.FooterCopyright>
          <S.FooterCopyrightText>
            법인명 : 2조 ㅣ 사업자 등록번호 : 000-00-00000  |  사업장 소재지 : 서울 강남구 테헤란로 146 
          </S.FooterCopyrightText>
          <S.FooterCopyrightText>
            서울 사무소 : 서울 강남구 테헤란로 146 신한은행 건물 4층  |  통신판매등록번호 : 2024--0901 ㅣ 
          </S.FooterCopyrightText>
          <S.FooterCopyrightText>
            이메일 : 2jo@gmail.com ㅣ 팩스 : 02-538-0021
          </S.FooterCopyrightText>
          <S.FooterCopyrightText>
            Copyright 2026 2jo. All rights reserved.
          </S.FooterCopyrightText>
          <S.FooterCopyrightText> 
              이메일 : 2jo@gmail.com ㅣ 팩스 : 02-538-0021
          </S.FooterCopyrightText>
          <S.FooterCopyrightText>
            COPYRIGHT ⓒ 2jo. ALL RIGHTS RESERVED.
          </S.FooterCopyrightText>
        </S.FooterCopyright>
      </S.FooterInner>
    </S.Footer>
  );
};

export default Footer;