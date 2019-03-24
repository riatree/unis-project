package com.nuplex.unis.dao;

import java.util.List;

import com.nuplex.unis.vo.Follow;

public interface FollowsDAO {
	public List<Follow> selectList(int no);
	public int delete(int no);
}//FollewsDAO end
