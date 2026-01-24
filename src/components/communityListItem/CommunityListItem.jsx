import React from 'react';
import S from './style';
import Icon from '../icon/Icon';

const CommunityListItem = () => {
  return (
    <S.CommunityListItem>
      <S.Link to="/community/detail">
        <S.CommunityListItemContent>
          <S.CommunityListItemTitle>
            역삼 친구 모여라 ❤️
          </S.CommunityListItemTitle>
          <S.CommunityListItemDescription>
            이사온지 얼마 되지 않은 3개월차 자취생입니다! 본가는 광주이고 회사가 선릉입니다~~ 동네 맛집이나 취미 생활 함께할 분들 구해요! 같이 볼링치고 치맥할 분 구해요.  같이 놀아요!
          </S.CommunityListItemDescription>
          <S.UserInfoWrap>
            <span>역삼동</span>
            <i>|</i>
            <span>청년자취러</span>
            <i>|</i>
            <span>약 1분 전</span>
          </S.UserInfoWrap>
          <S.CommunityListItemFooter>
          {/* 좋아요 댓글수 조회수 북마크수 */}
            <S.IconWrap>
              <Icon name="like"></Icon>
              <span>10</span>
            </S.IconWrap>
            <S.IconWrap>
              <Icon name="comment"></Icon>
              <span>10</span>
            </S.IconWrap>
            <S.IconWrap>
              <Icon name="hits"></Icon>
              <span>10</span>
            </S.IconWrap>
            <S.IconWrap>
              <Icon name="bookmark-view"></Icon>
              <span>10</span>
            </S.IconWrap>
          </S.CommunityListItemFooter>
        </S.CommunityListItemContent>
        <S.CommunityListItemImage >
          <img src={`${process.env.PUBLIC_URL}/assets/images/community-default.png`} alt="community" />
        </S.CommunityListItemImage>
      </S.Link>

    </S.CommunityListItem>
  );
};

export default CommunityListItem;