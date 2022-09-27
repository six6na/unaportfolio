const filterContainer = document.querySelector(".filterBtns");
const galleryItems = document.querySelectorAll(".cont");

filterContainer.addEventListener("click", (event) =>{
    if(event.target.classList.contains("btn")){
 
      // deactivate existing active 'filter-item'
     filterContainer.querySelector(".active").classList.remove("active");
 
      // activate new 'filter-item'
     event.target.classList.add("active");
 
     const filterValue = event.target.getAttribute("data-filter");
 
     galleryItems.forEach((item) =>{
 
        if(item.classList.contains(filterValue) || filterValue === 'all'){
         item.classList.remove("hide");
          item.classList.add("show");
        }
 
        else{
         item.classList.remove("show");
         item.classList.add("hide");
        }
 
      });
    }
  });

  const img = document.querySelectorAll('.contWrap .cont');
  const p = document.querySelectorAll('.cont')
  // 각 썹네일 이미지 요소에 이벤트 등록
  for(let i = 0; i < img.length; i++) {
    img[i].addEventListener('click', function(){
      // 이미지 탐색 후 URL값 가져오기
      let imgUrl = img[i].children[1].getAttribute('src');
      console.log(imgUrl);
  
      // 라이트 박스 표시
      const lightbox = document.getElementById('lightbox');
      lightbox.setAttribute('class', 'on');
      lightbox.classList.add('on');
      // 클릭한 이미지 표시
      const lightboxImg = document.querySelector('#lightbox .box img');
      lightboxImg.setAttribute('src', imgUrl);
      
    });
    // console.log(img[i].children[0]);
  }
  
  
  /* 팝업창 닫기
    닫기 버튼 누르면 닫힘
  */
  const closeBtn = document.getElementById('closeBtn');
  closeBtn.addEventListener('click', function(){
    const lightbox = document.getElementById('lightbox');
    lightbox.classList.remove('on');
  });

  $(function(){
    $('.cont').mouseover(function(){
      $(this).find(".projectTitle").addClass("on");
    }),
    $('.cont').mouseout(function(){
        $(".projectTitle").removeClass("on");
    })
  })