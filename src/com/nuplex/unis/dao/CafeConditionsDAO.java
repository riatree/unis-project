package com.nuplex.unis.dao;

import java.util.List;

import com.nuplex.unis.vo.CafeCondition;

public interface CafeConditionsDAO {
	public void insert(CafeCondition cafeCondition);
	public List<CafeCondition> selectCafeConditions(int no);
	public List<CafeCondition> selectList(int no);
}//CafeConfitionsDAO end
