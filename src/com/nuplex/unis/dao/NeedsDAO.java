package com.nuplex.unis.dao;

import java.util.List;

import com.nuplex.unis.vo.Need;
import com.nuplex.unis.vo.PageVO;

public interface NeedsDAO {
	public int insert(Need need);
	public List<Need> selectList(PageVO pageVO);
	public int selectTotal(PageVO pageVO);
	public Need selectOneByUnes(int no);
	public Need selectOneByInes(int no);
	public int selectListCount(int no);
	public List<Need> selectNeedList(int no);
}//NeedsDAO end
