import React, { useEffect } from 'react';

const Page = ( {match, location, history} ) => {
  console.log(match);
  console.log(location.state);

  const { title, contents } = location.state.data;

  const onClickBackBtn = () => {
    console.log('clicked');
    history.goBack();
  };

  useEffect(() => {

    const unblock = history.block('목록으로 이동합니다.');
    return () => { unblock() };

  }, [history]);

  return (
    <div>
      <div>
        Welcome to new page <b>{match.params.index}</b>
        <p><b>{title}</b></p>
        <p>{contents}</p>
      </div>
      <button onClick={onClickBackBtn}>
          ..more
      </button>
    </div>
  );
};

  export default Page;
