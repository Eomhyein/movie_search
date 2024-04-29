// 원하는 값 출력
function poster(array) {
  // 1. data.results 인자로 받아온다.
  // 2. data.results 각 요소를 반복문으로 처리
  array.forEach(element => {
    // console.log(element);
    // 3. title, poster_path, vote_average, overview 
    // console.log(element.title);
    // console.log(element.poster_path);
    // console.log(element.vote_average);
    // console.log(element.overview);

    const movie_poster = document.createElement("div"); // 새로운 HTML 요소를 생성
    movie_poster.classList.add("movie_poster");

    const title = document.createElement("h5");
    title.classList.add("card_title");
    title.textContent = element.title;

    const post_img_top = document.createElement("img");
    post_img_top.classList.add("post_img_top");
    post_img_top.src = "https://image.tmdb.org/t/p/w500/" + element.poster_path;

    const card_body = document.createElement("div");
    card_body.classList.add("card-body");

    const card_star = document.createElement("p");
    card_star.classList.add("card-star");
    card_star.textContent = element.vote_average;

    const card_text = document.createElement("p");
    card_text.classList.add("card-text");
    card_text.textContent = element.overview;

    const id = document.createElement("p");
    id.classList.add("id_secret");
    id.textContent = element.id;

    movie_poster.appendChild(title); // 해당 요소의 하위 요소로 child를 추가
    movie_poster.appendChild(post_img_top);
    movie_poster.appendChild(id);

    movie_poster.appendChild(card_body);
    card_body.appendChild(card_star);
    card_body.appendChild(card_text);

    document.querySelector("#card_section").appendChild(movie_poster); //CSS 선택자를 이용하여 요소를 선택합니다.

  });
  poster_click();
}


// search_btn을 눌러서 영화 포스터 제목 검색하기
// 1. 돋보기 모양을 클릭하면 입력받은 데이터를 가져온다

const search = document.querySelector("#search_btn");
search.addEventListener("click", () => {
  const input = document.querySelector(".movie_text").value; // 입력한 영화 제목
  process(input, data_result.results);

})

let process = function (input, json_poster) { //입력한 영화제목과 불러온 api 데이터와 비교
  const search_arr = [];
  document.querySelector("#card_section").innerHTML = "";
  console.log(json_poster);
  json_poster.forEach(array => {
    
    // 입력한 영화제목과 불러와야될 영화 제목이 일치하면 영화의 제목과 포스터, 내용, 리뷰를 불러온다
    // 어떻게??? .push 2차배열로 
    // 하지만 일치하지 않으면, 받아온 영화 포스터들이 띄워진 첫 화면 그대로 두기 
    const title = array.title.toLowerCase(); // 소문자로 변환
    if (title.includes(input.toLowerCase())) {
      search_arr.push(array);
    }
  })
  poster(search_arr);
};


// 04.26금
// 변수에 저장한다
// 영화제목을 배열로 만든다
// 받아온 데이터와 영화 제목을 비교해서 일치하는 경우에만 배열에 저장한다 if
// 영화제목 변수명.includes(사용자에게서 받아온 문자데이터_비교대상) 반환
// 배열을 선언(function 바로 밑에 위치)한 후 영화제목이 일치하면 배열을 추가한다
// .push(배열정보)-2차배열
// 검색에 맞는 배열만 function poster에 넣어준다 
// add 이벤트 리스트 기능을 써야됨 (버튼에 클릭 이벤트 바인딩)
// 검색창에 있는 텍스트 저장하는 함수
// 



// 1. .movie_card, or ,#movie_id를 클릭한다.
// 2. 클릭시 받아온 영화 id가 alert 창에 보여준다.
function poster_click () {
  const node = document.querySelectorAll(".movie_card"); // 유사배열
  const really_node = Array.from(node);
  really_node.forEach(array => {
    array.addEventListener("click", event => {
      const clicked = event.target;
      const find_id = clicked.closest(".movie_card").querySelector(".id_secret").textContent;
      alert(find_id);
    })
  })
}

// 영화 API 가져오기
const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4ZDZmMDljYTYzZGYyOGVhMGQxZmY5NjE2NTljNmZjYSIsInN1YiI6IjY2MmEzMzhjMWM2YWE3MDBiNTkyNzE3OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.BpXPfnTiU_e6p8VN-hdSywHUlqq5uuc85va72ErFCG0'
  }
};

let data_result;

fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', options)
  .then(response => response.json())
  .then(data => {
    data_result = data;
    console.log(data.results);
    poster(data.results);
  }
  )
  .catch(err => console.error(err));