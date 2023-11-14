import React,{useState} from 'react'
import Ad from './Ad'
// 광고 페이지
// 버튼을 클릭하면 showAd 상태가 토글되어 광고를 켜거나 끌 수 있습니다.

export default function AdPage() {
    const[showAd, setShowAd]= useState(true);//true로 설정하여 처음에 광고가 보이게 함. false면 숨겨져 있
    //useState 훅은 함수 컴포넌트에서 상태를 관리할 수 있게 해주는 React 훅 중 하나입니다.
    //showAd는 상태 변수이고, setShowAd는 이 변수를 변경하는 함수입니다.
    const handleToggleClick = ()=>{
        setShowAd(!showAd);
    }
    //클릭할 때마다 showAd 상태가 변경되어 광고를 켜거나 끌 수 있도록 합니다.
    //toggleAd 함수는 버튼을 클릭할 때 showAd 상태를 토글하여 광고를 켜거나 끕니다.
  return (
    <div>
        <button onClick={handleToggleClick}>
            {showAd ? '광고 끄기':'광고 보기'}
        </button>
        <Ad showAd={showAd} />
    </div>
  )
}
