package com.nuplex.unis.dao;

import java.util.List;

import com.nuplex.unis.vo.Image;
import com.nuplex.unis.vo.PageVO;
import com.nuplex.unis.vo.ScrollVO;

public interface ImagesDAO {
	public int insert(Image image);
	public List<Image> selectList(PageVO pageVO);
	public List<Image> selectListByUnes(int no);
	public List<Image> selectListByInes(int no);
	
	public List<Image> selectAlbum(ScrollVO scrollVO);
}//ImagesDAO end
