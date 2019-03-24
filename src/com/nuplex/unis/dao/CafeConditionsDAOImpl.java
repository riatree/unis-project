package com.nuplex.unis.dao;

import java.util.List;

import org.apache.ibatis.session.SqlSession;

import com.nuplex.unis.vo.CafeCondition;

public class CafeConditionsDAOImpl implements CafeConditionsDAO {
	private SqlSession sqlSession;
	
	public void setSqlSession(SqlSession sqlSession) {
		this.sqlSession = sqlSession;
	}//setSqlSession() end
	
	@Override
	public void insert(CafeCondition cafeCondition) {
		sqlSession.insert("cafeConditions.insert",cafeCondition);
	}	
	
	@Override
	public List<CafeCondition> selectCafeConditions(int no) {
		return sqlSession.selectList("cafeConditions.selectConditions",no);
	}
	
	@Override
	public List<CafeCondition> selectList(int no) {
		return sqlSession.selectList("cafeConditions.selectList", no);
	}//selectList() end
}//CafeConfitionsDAOImpl end
