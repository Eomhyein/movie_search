🎥 영화 검색 사이트 제작
1. 프로젝트 소개 : 오픈 API 이용해서 영화 데이터를 받아와서 검색 창에 데이터를 입력하면 일치하는 데이터만 보여준다.

**의도**
- 순수 바닐라 자바스크립트만으로 영화 리스트 조회 및 검색 UI 구현
- 학습해온 자바스크립트 문법을 최대한 활용
- 스타일링 작업하며 css 와 친해지기

2. 팀원 : 엄혜인 @Eomhyein

3. 개발 기간 : 2024.04.25(목)~04.29(월)

4. 기능 : 검색버튼 클릭시 영화 정보 보여주기
5. 개발 환경
FontEnd : HTML, CSS, JavaScript

6. 화면 구현 장면
**1)** 메인화면 UI
![image](https://github.com/Eomhyein/movie_search/assets/26666131/6da1507f-670f-480e-a19f-84d082f3b2da)

**2)** 포스터 명을 쓰고 검색 클릭시 일치하는 데이터를 보여준다.
![image](https://github.com/Eomhyein/movie_search/assets/26666131/747607ee-60c5-46cb-87c2-fb8c3e4aa962)

**3)** 포스터를 클릭하면 id값이 뜬다
![image](https://github.com/Eomhyein/movie_search/assets/26666131/86f88749-d2b5-4c3e-87e3-4b1b07460ba5)

7. 구현 요구사항
1) TMDB 오픈 API 영화 정보 불러오기
2) 영화정보 카드 리스트 UI 구현
   - 카드에는 title(제목), overview(내용 요약), poster_path(포스터 이미지 경로), vote_average(평점) 이렇게 4가지 정보가 필수
3) 영화 포스터 카드 클릭 시 클릭한 영화 id를 나타내는 alert 창띄우기
4) 영화 검색 ui 구현
- API로 받아온 전체 영화들 중 영화 제목에 input 창에 입력한 문자값이 포함되는 영화들만 화면에 보이도록 합니다.
- 입력 후 검색버튼 클릭 시 실행되도록 합니다.
5) const와 let 사용
6) 화살표 함수 1개 이상 사용
7) 배열 메소드 2개 이상 사용(forEach, map, filter, reduce, find)
8) DOM 제어하기 : api 목록 중 2개 이상 사용하기


[어려운점]
1. API를 불러왔으나 활용을 하지 못함
2. 에러 발생이 자주남
   ex) 검색 버튼 클릭시 포스터를 보여주지 않음, 포스터 클릭시 id값을 보여주지 않음
