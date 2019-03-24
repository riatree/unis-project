package com.nuplex.unis.dao;

import org.apache.ibatis.session.SqlSession;

public class MessagesDAOImpl implements MessagesDAO {
	private SqlSession sqlSession;
	
	public void setSqlSession(SqlSession sqlSession) {
		this.sqlSession = sqlSession;
	}//setSqlSession() end
	
	
}//MessagesDAOImpl end
