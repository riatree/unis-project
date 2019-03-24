package com.nuplex.unis.dao;

import java.util.List;

import org.apache.ibatis.session.SqlSession;

import com.nuplex.unis.vo.Talent;

public class TalentsDAOImpl implements TalentsDAO {
	private SqlSession sqlSession;
	
	public void setSqlSession(SqlSession sqlSession) {
		this.sqlSession = sqlSession;
	}//setSqlSession() end

	@Override
	public List<Talent> selectList(int no) {
		return sqlSession.selectList("talents.selectTalents", no);
	}
	
	
}//TalentsDAOImpl end
