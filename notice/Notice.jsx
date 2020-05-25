import React, { useState, useEffect } from 'react';
import SingleMarketCmpnt from './SingleMarketComponent';

const Notice = ( {match, location, history} ) => {

  // dummy data from api server
  const MarketInfoData = [
    {
      index: 0,
      dlvYN: 'Y', 
      picYN: 'N',
      name: '카페 이디야 신도림점',
      distance: '200',
      starPoint: 4.8,
      reviewCnt: 20,
      InfoDescMenu: ['아메리카노 ', '카페라떼'],
      dlvTime: '10분~20분',
      dlvTip: '2,000',
      dlvMinPrice: '14,000',
      dlvTipDisc: 'Y',
      extraDisc: '추가할인 10%'
    },
    {
      index: 1,
      dlvYN: 'Y', 
      picYN: 'Y',
      name: '카페 탐앤탐스 신도림점',
      distance: '1000',
      starPoint: 4.7,
      reviewCnt: 17,
      InfoDescMenu: ['아아 ', '아카라'],
      dlvTime: '10분~20분',
      dlvTip: '2,500',
      dlvMinPrice: '12,000',
      dlvTipDisc: 'Y',
      extraDisc: '추가할인 10%'
    },
    // {
    //   index: 1,
    //   title: "second",
    //   contents: "content2"
    // }
  ];

  // states
  const [MarketInfoList, setNoticeList] = useState([]);

  useEffect(() => {
    setNoticeList([...MarketInfoData]);
  }, []);

  // useEffect(() => {
  //   return () => { unblock() };
  // }, [history]);

  const onClickBackBtn = () => {
    console.log('Back btn clicked');
    history.goBack();
  };

  return (
      <div>
        <Header />
        <h4>카페</h4>
        {/* 
        <div id="wrap">
          <div id="container">
            <div id="content">
              <div>
                <div class="listWrap">
                  <ul class="listContent"> */}
          
                  {/* </ul>
                </div>
              </div>
            </div>
          </div>
        </div> */}
        { MarketInfoList.map((market) => 
          <li key={market.index} >
              { market && <SingleMarketCmpnt market={market}/>}
          </li>
          )}
        <button onClick={onClickBackBtn}>
          Home
        </button>
      </div>
  );
};

export default Notice;

export const Header = () => {
  return (
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, width=device-width, target-densitydpi=medium-dpi" />
      <title>TITLE</title>
      <meta name="title" content="" />
      <meta name="description" content="" />
      <meta name="keywords" content="" />
      
    <meta property="og:title" content="" />
    <meta property="og:url" content=""/>
    <meta property="og:image" content=""/>
    <meta property="og:description" content="" />
    <meta property="og:site_name" content=""/>
      <meta property="fb:app_id" content=""/>

      <script type="text/javascript"  src="../common/js/lib/jquery-3.4.1.min.js"></script>    
      <script type="text/javascript"  src="../common/js/lib/swiper.js"></script>

      <link rel="stylesheet" type="text/css" href="../common/css/lib/swiper.css" />
      <link rel="stylesheet" type="text/css" href="../common/css/style.css" />
  </head>
);
}
