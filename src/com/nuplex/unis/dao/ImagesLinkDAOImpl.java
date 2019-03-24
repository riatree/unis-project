package com.nuplex.unis.dao;

import java.util.List;

import org.apache.ibatis.session.SqlSession;

import com.nuplex.unis.vo.Image;
import com.nuplex.unis.vo.ImageLink;

public class ImagesLinkDAOImpl implements ImagesLinkDAO {
	private SqlSession sqlSession;
	
	public void setSqlSession(SqlSession sqlSession) {
		this.sqlSession = sqlSession;
	}

	@Override
	public void insert(ImageLink imageLink) {
		sqlSession.insert("imagesLink.insert",imageLink);
	}	
	
	@Override
	public List<Image> selectRepresentImages(int no) {
		return sqlSession.selectList("imagesLink.selectIHAS", no);
	}
}//ImagesLinkDAOImpl end
