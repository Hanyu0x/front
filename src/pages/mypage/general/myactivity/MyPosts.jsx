import React from 'react';

const MyPosts = () => {
  const items = [
    {
      id: 1,
      title: '역삼친구 모여라❤️',
      summary: '이사온지 얼마 되지 않은 3개월차 자취생입니다! 볼링 같이 칠 분 구해요.',
      region: '역삼동',
      date: '25.12.28',
      likes: 2,
      comments: 7,
      hits: 30,
      bookmarks: 7,
    },
    {
      id: 2,
      title: '역삼 맛집 추천 부탁!',
      summary: '점심에 간단히 먹을 수 있는 곳 찾고 있어요. 추천 부탁드립니다.',
      region: '역삼동',
      date: '25.12.20',
      likes: 1,
      comments: 3,
      hits: 12,
      bookmarks: 2,
    },
  ];

  return (
    <section style={styles.cardList}>
      {items.map((item) => (
        <article key={item.id} style={styles.card}>
          <h4 style={styles.cardTitle}>{item.title}</h4>
          <p style={styles.cardSummary}>{item.summary}</p>
          <div style={styles.cardFooter}>
            <div style={styles.meta}>
              <span>{item.region}</span>
              <span style={styles.dot} />
              <span>{item.date}</span>
            </div>
            <div style={styles.counts}>
              <span style={styles.countItem}>
                <img src="/assets/images/icons/like.png" alt="좋아요" style={styles.icon} />
                {item.likes}
              </span>
              <span style={styles.countItem}>
                <img src="/assets/images/icons/comment.png" alt="댓글" style={styles.icon} />
                {item.comments}
              </span>
              <span style={styles.countItem}>
                <img src="/assets/images/icons/hits.png" alt="조회" style={styles.icon} />
                {item.hits}
              </span>
              <span style={styles.countItem}>
                <img src="/assets/images/icons/bookmark-view.png" alt="북마크" style={styles.icon} />
                {item.bookmarks}
              </span>
            </div>
          </div>
        </article>
      ))}
    </section>
  );
};

const styles = {
  cardList: {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
  },
  card: {
    borderRadius: '16px',
    border: '1px solid #D9D9D9',
    padding: '24px 26px',
    backgroundColor: '#FFFFFF',
  },
  cardTitle: {
    fontSize: '16px',
    fontWeight: 700,
    color: '#0B1215',
    margin: '0 0 10px',
  },
  cardSummary: {
    fontSize: '14px',
    color: '#666666',
    margin: '0 0 18px',
    lineHeight: 1.5,
  },
  cardFooter: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    color: '#B5B5B5',
    fontSize: '14px',
  },
  meta: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
  },
  dot: {
    width: '4px',
    height: '4px',
    borderRadius: '50%',
    backgroundColor: '#D1D5DB',
    display: 'inline-block',
  },
  counts: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
  },
  icon: {
    width: '16px',
    height: '16px',
    display: 'block',
  },
  countItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '6px',
  },
};

export default MyPosts;