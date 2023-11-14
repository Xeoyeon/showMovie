import React from 'react'
// Ad 컴포넌트는 showAd prop을 통해 광고를 표시할지 여부를 받아옵니다. 
//showAd 값이 false인 경우 null을 반환하여 아무것도 표시하지 않습니다.

export default function Ad({showAd}) {
  return showAd ? (
    <div>
        <img src='../Images/AdImg.svg' alt="광고 배너" />
    </div>
  ) : null;
}