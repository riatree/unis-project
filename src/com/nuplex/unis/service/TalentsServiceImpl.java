package com.nuplex.unis.service;

import com.nuplex.unis.dao.TalentsDAO;

public class TalentsServiceImpl implements TalentsService {
	private TalentsDAO talentsDAO;
	
	public void setTalentsDAO(TalentsDAO talentsDAO) {
		this.talentsDAO = talentsDAO;
	}//setTalentsDAO() end
	
	
}//TalentsServiceImpl end
