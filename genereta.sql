CREATE TABLE `project` (
  `project_id` bigint(20) unsigned NOT NULL AUTO_INCREMENT COMMENT '项目id',
  `project_name` varchar(50) NOT NULL DEFAULT '' COMMENT '项目名称',
  `mail` varchar(100) NOT NULL DEFAULT '' COMMENT '负责人邮箱',
  `project_type` bigint(3) NOT NULL DEFAULT '0' COMMENT '项目类型',
  `create_time` bigint(20) NOT NULL DEFAULT '0' COMMENT '数据库创建时间',
  `update_time` bigint(20) NOT NULL DEFAULT '0' COMMENT '数据库更新时间',
  `apiKey` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`project_id`),
  UNIQUE KEY `uniq_project_name` (`project_name`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4 COMMENT='项目表'