// 구르미 갤러리 JS - main.js

////////////// 로딩구역 //////////////
window.addEventListener("DOMContentLoaded", ()=>{
    
    console.log("로딩완료!!");

    // 갤러리 박스
    let gbx = document.querySelectorAll(".gbx");

    /*************************************
     * 함수명: goSlide
     * 기능: 슬라이드 순번을 변경하여 이동함
     *************************************/
    const goSlide = (dir)=> { // dir -> 방향(0왼쪽, 1오른쪽)

        // 1. 함수호출확인
        console.log("바꿔",dir);

    };////////////goSilde///////////
    ////////////////////////////////

    /// 이동버튼 클릭설정하기 ////////
    // 대상 버튼들 > .abtn
    let abtn = document.querySelectorAll(".abtn");
    // console.log("abtn갯수",abtn.length);

    // 오른쪽 버튼 클릭시
    abtn[1].onclick = () => goSlide(1);
   
    // 왼쪽 버튼 클릭시
    abtn[0].onclick = () => goSlide(0);

    // 2. 대상선정: .gbx -> gbx변수에 할당!!

    // 대상 하위 img 요소
    let gimg = gbx.querySelectorAll("img");

    // 3. 변경내용

    // 3-1 오른쪽 버튼일 경우 : 맨앞 이미지 맨뒤로
    if(dir) gbx.appendChild(gimg[0]);
    else gbx.insertBefore(gimg[gimg.length-1],gimg[0]);
    // 3-2. 왼쪽버튼일 경우 : 맨뒤 이미지 맨앞으로    

    //////////////// if //////////////////

    // 3-2




}); /////////// 로딩구역 //////////////
//////////////////////////////////////
