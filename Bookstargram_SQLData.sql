-- --------------------------------------------------------
-- 호스트:                          127.0.0.1
-- 서버 버전:                        10.11.2-MariaDB - mariadb.org binary distribution
-- 서버 OS:                        Win64
-- HeidiSQL 버전:                  11.3.0.6295
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


-- bookstargram 데이터베이스 구조 내보내기
CREATE DATABASE IF NOT EXISTS `bookstargram` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci */;
USE `bookstargram`;

-- 테이블 bookstargram.bookreview 구조 내보내기
CREATE TABLE IF NOT EXISTS `bookreview` (
  `index` int(11) unsigned NOT NULL AUTO_INCREMENT COMMENT '도서 리뷰 글 테이블',
  `userid` varchar(20) NOT NULL COMMENT '작성자 id',
  `username` varchar(30) NOT NULL COMMENT '작성자 닉네임',
  `userpic` varbinary(100) DEFAULT NULL COMMENT '작성자 프로필 이미지',
  `booktitle` varchar(50) NOT NULL DEFAULT '책 이름' COMMENT '책 타이틀',
  `bookcover` varbinary(50) DEFAULT NULL COMMENT '책 커버',
  `isbn` varchar(13) DEFAULT NULL COMMENT '책 ISBN',
  `createdtime` timestamp NOT NULL DEFAULT current_timestamp() COMMENT '작성 시간',
  `modifiedtime` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp() COMMENT '작성 시간',
  `summery` text NOT NULL DEFAULT '짧은 리뷰 내용' COMMENT '짧은 리뷰 내용',
  `body` text NOT NULL DEFAULT '리뷰 내용' COMMENT '리뷰 내용',
  `tag` varchar(50) DEFAULT NULL COMMENT '사용자 태그',
  `viewcount` int(10) unsigned NOT NULL DEFAULT 0 COMMENT '조회수 카운터',
  `likecount` int(10) unsigned DEFAULT 0 COMMENT '좋아요 수 카운터',
  PRIMARY KEY (`index`),
  KEY `user_fk` (`userid`,`username`,`userpic`),
  CONSTRAINT `user_fk` FOREIGN KEY (`userid`, `username`, `userpic`) REFERENCES `userinfo` (`user-id`, `user-name`, `user-pic`) ON DELETE NO ACTION ON UPDATE CASCADE,
  CONSTRAINT `userinfo` FOREIGN KEY (`userid`) REFERENCES `userinfo` (`user-id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci COMMENT='도서 리뷰글을 저장하는 테이블';

-- 테이블 데이터 bookstargram.bookreview:~7 rows (대략적) 내보내기
DELETE FROM `bookreview`;
/*!40000 ALTER TABLE `bookreview` DISABLE KEYS */;
INSERT INTO `bookreview` (`index`, `userid`, `username`, `userpic`, `booktitle`, `bookcover`, `isbn`, `createdtime`, `modifiedtime`, `summery`, `body`, `tag`, `viewcount`, `likecount`) VALUES
	(1, 'dgchoi3904', '대건씌', NULL, '개리포터와 개법사의 뼈', NULL, NULL, '2023-05-04 15:40:54', '2023-05-10 10:25:24', '짧은 리뷰 내용', '리뷰 내용', '#없어!', 0, 0),
	(2, 'dongju97', '동주팀장', NULL, '쟤와벌', NULL, NULL, '2023-05-04 15:41:17', '2023-05-08 17:16:57', '짧은 리뷰 내용', '리뷰 내용', '#태그', 0, 0),
	(3, 'dgchoi3904', '대거니', NULL, '책 이름', NULL, NULL, '2023-05-08 17:43:57', '2023-05-08 17:43:57', '짧은 리뷰 내용', '리뷰 내용', NULL, 0, 0),
	(4, 'admin', '관리자01', NULL, '이건 책이란다', NULL, NULL, '2023-05-08 17:43:57', '2023-05-08 17:43:57', '짧은 리뷰 내용', '리뷰 내용', NULL, 0, 0),
	(5, 'test01', 'test01', NULL, '바보도 이해하는 책쓰기', NULL, NULL, '2023-05-09 16:29:02', '2023-05-09 16:29:02', '바보도 이해할수 있었다!', '이 책은 바보도 이해할 수 있는 언어로 작성되어 있어 원숭이라도 이해할 수 있는 내용을 담고 있습니다.', NULL, 0, 0),
	(6, 'test01', 'test01', NULL, '깃이제일쉬웠어요', NULL, NULL, '2023-05-09 16:38:51', '2023-05-09 16:38:51', '깃은 참 쉽구나!', '이것은 깃이라는 것을 깨달았습니다!', NULL, 0, 0),
	(7, 'test01', 'test01', NULL, '그래서 지금 뭘했지?', NULL, NULL, '2023-05-10 09:29:33', '2023-05-10 09:29:33', '넌 대체 무엇을 했느냐?', '뭐 했는지 모르겠는데이글을 쓰게 됬습니다.', NULL, 0, 0);
/*!40000 ALTER TABLE `bookreview` ENABLE KEYS */;

-- 테이블 bookstargram.userinfo 구조 내보내기
CREATE TABLE IF NOT EXISTS `userinfo` (
  `user-id` varchar(20) NOT NULL COMMENT '사용자 id',
  `user-pwd` varchar(20) NOT NULL COMMENT '사용자 패스워드',
  `user-email` varchar(50) NOT NULL COMMENT '사용자 Email',
  `user-name` varchar(30) NOT NULL COMMENT '사용자 닉네임',
  `user-pic` varbinary(100) DEFAULT NULL COMMENT '사용자 프로필 이미지',
  PRIMARY KEY (`user-id`) USING BTREE,
  KEY `userinfo` (`user-id`,`user-name`,`user-pic`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci COMMENT='사용자 정보 테이블';

-- 테이블 데이터 bookstargram.userinfo:~5 rows (대략적) 내보내기
DELETE FROM `userinfo`;
/*!40000 ALTER TABLE `userinfo` DISABLE KEYS */;
INSERT INTO `userinfo` (`user-id`, `user-pwd`, `user-email`, `user-name`, `user-pic`) VALUES
	('admin', 'qwe123', 'admin@email.com', '관리자01', NULL),
	('dgchoi3904', 'qweasd123', 'dgchoi3904@gmail.com', '대거니', NULL),
	('dongju97', 'qwe123', 'dongju97@email.com', '동주팀장', NULL),
	('test', 'qwe123', 'tester@email.com', 'tester', NULL),
	('test01', 'qwe123', 'test01@email.com', 'test01', NULL);
/*!40000 ALTER TABLE `userinfo` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
