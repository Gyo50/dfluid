# 구현요건

1. 마크업과 스타일시트 작성 및 프레임워크 사용의 제한은 없어요.
2. 모든 텍스트는 지정된 폰트(webfont)와 속성을 적용하세요.
3. 첫번째 섹션의 3개의 프로필 카드는 페이지를 열때마다 순서가 임의로 배치되도록 구현하세요.
4. 두번째 섹션의 풀블리드 배경 이미지는 아래와 같은 이미지 API를 이용해 임의의 이미지를 삽입하고, 
같은 브라우저로 페이지를 다시 열거나 새로고침 해도 기존 이미지가 변경되지 않도록 구현하세요.
(unsplash API와 유사한 타서비스를 활용해도 무관합니다.)
    
    > `https://api.unsplash.com/photos/random?client_id=RfZSbn_rdvEPrnhslq8HRwmCwyayZg3DBo_LDcXXaTM`
    
    API Documentation - https://unsplash.com/documentation#get-a-random-photo
    
    Access key - `RfZSbn_rdvEPrnhslq8HRwmCwyayZg3DBo_LDcXXaTM`
    Secret key - `oBOMkDmHrJicTHkT1RUBrpa4ZbL7f8MzrcOU2HTPRZ0`
    
    해당키가 발급된 계정은 데모앱이므로 시간당 50회의 호출 제한이 있습니다. 
    시간을 두고 테스트하시거나, 별도의 키를 발급받아 진행하셔도 무관합니다.
    > 
5. 두번째 섹션 내 ‘@input validation’ 영역을 참고하여 ‘뉴스레터 구독 양식(Subscribe to our newsletter)’의 기능을 구현하세요.
(valid/invalid 케이스의 유효성 검증 결과 스타일과 기능을 해당 영역에 적용하세요.)
6. 세번째 섹션의 카드 데이터를 정의하고 2개의 필터 기능을 구현하세요.
(결과 없을 경우 화면은 임의로 정의하세요.)
이 외에 제한사항과 기능정의는 임의 지정하여 진행 바랍니다.