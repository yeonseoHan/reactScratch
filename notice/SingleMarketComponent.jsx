import React from 'react';

const SingleMarketCmpnt = ({ market }) => {

    console.log(market);

    return (
        <>
        

      <div>
        <li>
          <a href="#">
              <div className="listImg">
                  {/* <!-- NEW 상품 일떄 --> */}
                  <span className="newLabel"><strong>NEW</strong></span>
                  <img src="../common/images/tump/img_product_main1.png" alt="썸네일 이미지"/>
              </div>
              <div className="listInfo">
                  <div className="infoLabel">
                      <span className="label del">{market.dlvYN === 'Y'? '배달 O': '배달 X'}</span>
                      <span className="label pic">{market.picYN === 'Y'? '픽업 O': '픽업 X'}</span>
                  </div>
                  <div className="infoTitle">
                      <p className="title">{market.name}</p>
                      <span className="direction">{market.distance}m</span>
                  </div>
                  <div className="infoDesc">
                      <ul>
                          <li>
                              <span className="startPoint"><span className="star">{market.starPoint}</span>({market.reviewCnt})</span>
                              <span className="infoDescMenu">{(market.InfoDescMenu).map((v) => v)}</span>
                          </li>
                          <li>
                              <span className="descLabel deliveryTime">{market.dlvTime}</span>
                              <span className="descLabel">배달팁 {market.dlvTip}원</span>
                              <span className="descLabel">최소주문 {market.dlvMinPrice}원</span>
                          </li>
                          <li>
                              <span className="infoLabel">{market.dlvTipDisc === 'Y' ? '배달팁할인 O':'배달팁할인 X'}</span>
                              <span className="infoLabel">{market.extraDisc}</span>
                          </li>
                      </ul>
                  </div>
              </div>
          </a>
      </li>
      </div>
      </>
    );
  }

  export default SingleMarketCmpnt;