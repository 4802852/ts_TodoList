# TODOLIST

타입스크립트, Redux Toolkit 의 기본적인 공부를 위한 TODOLIST APP

- Create React App with Typescript
- Redux
- Redux Toolkit
- Styled Component

## Slices

### TodoSlice.ts

- Todo Item 인터페이스 정의
- RTK 의 createSlice() 를 이용한 액션, 리듀서 생성
- 액션: CREATE, TOGGLE, REMOVE
- RTK 에서는 Immer 가 내장되어 state 의 불변성을 지켜줄 필요가 없음

## Components

### TodoHead.tsx

- todos state 정보를 useSelector 를 이용하여 불러옴
- filter 를 이용하여 완료되지 않은 todo 들의 갯수 확인

### TodoList.tsx

- todos state 정보를 useSelector 를 이용하여 불러와 map 기능을 이용하여 렌더링

### TodoItem.tsx

- 완료 버튼을 눌렀을 때 완료 처리, 다시 누르면 미완료 처리
- 삭제 버튼을 눌렀을 때 삭제 처리
- useDispatch 이용하여 구현

### TodoCreate.tsx

- useState 이용하여 + 버튼 클릭 시 Form 보이기
- useState 이용하여 Form 입력값 저장
- Form Event 생성 시 (Enter 키 누를 시), Todo 생성 dispatch