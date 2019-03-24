package com.nuplex.unis.dao;

import java.util.List;

import com.nuplex.unis.vo.Matching;
import com.nuplex.unis.vo.PageVO;

public interface MatchingsDAO {
	public List<Matching> selectListByUnes(int no);
	public List<Matching> selectListByInes(int no);
	public int insert(Matching matching);
	public List<Matching> selectUnesMacingList(PageVO pageVO);
	public int selectUnesMacingTotal(int no);
	public int matchingUpdate(int no);
	public int unMatchingUpdate(int no);
	public List<Matching> selectUserMacingList(PageVO pageVO);
	public int selectUserMacingTotal(int no);
}//MatchingsDAO end
