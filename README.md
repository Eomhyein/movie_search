[영화 검색 사이트 제작]
화면 구현 장면
![image](https://github.com/Eomhyein/movie_search/assets/26666131/71db0f8c-2f2e-4889-b13c-8e336149488b)

포스터 명을 쓰고 검색 클릭시 일치하는 데이터를 보여준다.
![image](https://github.com/Eomhyein/movie_search/assets/26666131/7884b36a-a93c-4762-ae85-4cd3bd3fff02)

포스터 클릭시 id값을 alert창으로 띄워준다
- 에러가 발생함
- 미완성


1. TMDB 오픈 API 영화 정보 불러오기
2. 영화정보 카드 리스트 UI 구현
   - 카드에는 title(제목), overview(내용 요약), poster_path(포스터 이미지 경로), vote_average(평점) 이렇게 4가지 정보가 필수
3. 영화 포스터 카드 클릭 시 클릭한 영화 id를 나타내는 alert 창띄우기
4. 영화 검색 ui 구현
- API로 받아온 전체 영화들 중 영화 제목에 input 창에 입력한 문자값이 포함되는 영화들만 화면에 보이도록 합니다.
- 입력 후 검색버튼 클릭 시 실행되도록 합니다.
5. const와 let 사용
6. 화살표 함수 1개 이상 사용
7. 배열 메소드 2개 이상 사용(forEach, map, filter, reduce, find)
8. DOM 제어하기 : api 목록 중 2개 이상 사용하기


[어려운점]
1. API를 불러왔으나 활용을 하지 못함
2. 에러 발생이 자주남
   ex) 포스터 클릭시 id값을 보여주지 않음
