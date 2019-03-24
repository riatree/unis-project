package com.nuplex.unis.service;

import com.nuplex.unis.dao.CafeConditionsDAO;

public class CafeConditionsServiceImpl implements CafeConditionsService{
	private CafeConditionsDAO cafeConditionsDAO;
	
	public void setCafeConditionsDAO(CafeConditionsDAO cafeConditionsDAO) {
		this.cafeConditionsDAO = cafeConditionsDAO;
	}//setCafeConfitionsDAO() end
	
	
}//CafeConfitionsServiceImpl end
