package com.nuplex.unis.service;

import com.nuplex.unis.dao.MatchingsDAO;

public class MatchingsServiceImpl implements MatchingsService {
	private MatchingsDAO matchingsDAO;
	
	public void setMatchingsDAO(MatchingsDAO matchingsDAO) {
		this.matchingsDAO = matchingsDAO;
	}//setMatchingsDAO() end
	
	
	
}//MatchingsServiceImpl end
