package com.nuplex.unis.dao;

import java.util.List;

import org.apache.ibatis.session.SqlSession;

import com.nuplex.unis.vo.Image;
import com.nuplex.unis.vo.PageVO;
import com.nuplex.unis.vo.ScrollVO;

public class ImagesDAOImpl implements ImagesDAO {
	private SqlSession sqlSession;
	
	public void setSqlSession(SqlSession sqlSession) {
		this.sqlSession = sqlSession;
	}
	
	@Override
	public int insert(Image image) {
		return sqlSession.insert("images.insert",image);
	}

	@Override
	public List<Image> selectList(PageVO pageVO) {
		return sqlSession.selectList("images.selectList",pageVO);
	}	
	
	@Override
	public List<Image> selectListByUnes(int no) {
		return sqlSession.selectList("images.selectListUnesImage",no);
	}//selectListByUnes() end

	@Override
	public List<Image> selectListByInes(int no) {
		return sqlSession.selectList("images.selectListInesImage",no);
	}//selectListByInes() end
	
	@Override
	public List<Image> selectAlbum(ScrollVO scrollVO) {
		return sqlSession.selectList("images.selectAlbum",scrollVO);
	}
}//ImagesDAOImpl end
