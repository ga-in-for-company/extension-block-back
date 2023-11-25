
## 기술스택

- Nest.js
- TypeORM
- MySQL
- EC2
- RDS

## DB

- ddl 
```
CREATE TABLE file_extension 
(
	name VARCHAR(20) NOT NULL,
	custom_or_fixed VARCHAR(10),
	is_checked TINYINT,
	PRIMARY KEY (id)
)
```

## API 명세

### GET / extension
- 선택 또는 추가한 확장자들 조회

### POST / extension
- 커스텀 확장자 저장
- 확장자 이름(name) 과 custom_or_fixed 저장

### DELETE / extension
- 커스텀 확장자 삭제
- 확장자 이름(name) 받아서 그 값으로 찾아서 삭제

### PUT /extension
- 고정 확장자 check uncheck
- name값, is_checked, 그리고 custom_or_fixed 받아서 is_checked 칼럼 변경