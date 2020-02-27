# classroom_koa
课室申请系统--后端koa2


## 登录数据库
```
$ mysql -u root -p
```
创建数据库
```
$ create database classroom;
```
使用创建的数据库
```
$ use classroom;
```
> database: classroom  tables: user classoccupy classtable classroom


CREATE TABLE `user` (

`id`  int(11) NOT NULL AUTO_INCREMENT ,

`u_id`   varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NULL DEFAULT NULL ,

`u_password`  varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NULL DEFAULT NULL ,

`u_name`  varchar(32) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL ,

`u_role`  int(11) NULL DEFAULT NULL ,

`solt`  varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NULL DEFAULT NULL ,

`u_sex`  int(11) NULL DEFAULT NULL ,

`u_birthday`  date NULL DEFAULT NULL,

`u_position`  varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NULL DEFAULT NULL ,

PRIMARY KEY (`id`))

ENGINE=InnoDB

DEFAULT CHARACTER SET=utf8mb4 COLLATE=utf8mb4_general_ci;

BEGIN;

INSERT INTO `user` VALUES ('1', '1001', '123456', '张三','1',null,'1','1999-03-29','广东惠州'), ('2', '1002', '123456', '李四','2',null,'2','1998-03-29','广东广州'), ('3', '1003', '123456', '王五','1',null,'1','1997-03-29','广东惠州');

COMMIT;

模型名称:user--用户表					

序号	  字段名称	     英文	            类型	     	 备注

 1	     编号	         id	             int		    主键，自增
 
 2	    用户id	       u_id	          String		
 
 3	    用户密码	    u_password	     String		
 
 4	    用户姓名	     u_name	         String		
 
 5	    用户角色	     u_role	          int		
 
 6	     盐值	          solt	         String		
 
 7	    用户性别	      u_sex	           int		
 
 8	    用户生日	     u_birthday	      date		
 
 9	    用户地区	     u_position       String		

---------------------------------------

CREATE TABLE `classroom` (

`c_id`  int(11) NOT NULL ,

`c_name`  varchar(32) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL ,

`c_person`  int(11) NOT NULL ,

`c_use`  varchar(32) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL ,

`c_position`  varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL ,

`c_media`  int(11) NOT NULL ,

PRIMARY KEY (`c_id`))

ENGINE=InnoDB

DEFAULT CHARACTER SET=utf8mb4 COLLATE=utf8mb4_general_ci;

BEGIN;

INSERT INTO `classroom` VALUES ('101', 'U101', '60', '0','S2楼','0'), ('102', 'U102', '60', '1','S2楼','0'), ('103', 'U103', '50', '1','S2楼','1');

COMMIT;


模型名称:classroom--课室表			
		
 序号	    字段名称	     英文	           类型	        	备注

  1      	编号	         id	            int		         主键

  2	      名称	         c_name	       String		

  3	     容纳人数	       c_person	       int		

  4	      地点	         c_position	    String		

  5	    拥有多媒体？	    c_media	        int		
  
---------------------------------------------
  
  CREATE TABLE `classtable` (

`t_id`  int(11) NOT NULL AUTO_INCREMENT,

`c_id`  varchar(32) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL ,

`t_name`  varchar(32) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL ,

`t_contact`  varchar(32) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL ,

`t_joinPeople`  varchar(32) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL ,

`t_media`  int(11) NULL DEFAULT NULL ,

`t_useReason`  varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL ,

`u_id`  varchar(32) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL ,

`t_user`  varchar(32) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL ,

`t_class`  varchar(32) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL ,

`t_result`  varchar(32) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL ,

`t_time`  datetime NULL DEFAULT NULL,

`t_useTime`  datetime NULL DEFAULT NULL,

`t_endTime`  datetime NULL DEFAULT NULL,

`user_id`  varchar(32) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL ,

PRIMARY KEY (`t_id`))

ENGINE=InnoDB

DEFAULT CHARACTER SET=utf8mb4 COLLATE=utf8mb4_general_ci;

BEGIN;

INSERT INTO `classtable` VALUES ('1',null,'张三','181232','45','0','开会需要',null,null,null,null,null,null,null,null), ('2',null,'李四','1817606','50','1','开会需要',null,null,null,null,null,null,null,null);

COMMIT;


模型名称:classtable--课室申请表
				
  序号	  字段名称	      英文	          类型		        备注

   1	     编号	         t_id	           int		         主键

   2	    课室id	       c_id	          string		       外键 

   3	     表名	         t_name	        string	
	
   4	   联系方式	       t_contact	     String	
	
   5	   参加人数	       t_joinPeople	   String	
	
   6	  需要多媒体?	    t_media	int		

   7	   使用原因	       t_useReason	    String		

   8	    用户id	         u_id	          String		      外键

   9	     审核人	       t_user	         String		

   10	    分配课室	      t_class	        String	
	
   11	    审核结果	      t_result	      String		

   12	    申请时间	       t_time	       datetime	
	
   13	    开始时间	      t_useTime	     datetime	
	
   14	    结束时间	      t_endTime	     datetime	
	
   15	   前端来到id	       user_id	      String		


CREATE TABLE `classoccupy` (

`o_id`  int(11) NOT NULL AUTO_INCREMENT,

`c_id`  varchar(32) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL ,

`t_id`  varchar(32) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL ,

`c_name`  varchar(32) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL ,

`c_person`  varchar(32) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL ,

`c_media`  varchar(32) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL ,

`t_useTime`  datetime NULL DEFAULT NULL,

`t_endTime`  datetime NULL DEFAULT NULL,

PRIMARY KEY (`o_id`))

ENGINE=InnoDB

DEFAULT CHARACTER SET=utf8mb4 COLLATE=utf8mb4_general_ci;



模型名称:classoccupy--课室占用表
					
  序号	   字段名称	        英文	      类型	     	备注

   1	       ID	           o_id	       int		

   2	     课室id	          c_id	     String		

   3	    申请表id	         t_id	      String		

   4	    课室名称	        c_name	   String	
	
   5	    容纳人数	       c_person    String	
	
   6	   拥有多媒体？	      c_media	    String		

   7	    开始时间	       t_useTime	 datetime	
	
   8	    结束时间	       t_endTime	 datetime		



```
```
npm install
```

### Compiles and hot-reloads for development
```
npm run dev
```

