package com.nuplex.unis.service;

import java.sql.Timestamp;
import java.util.Collection;
import java.util.List;
import java.util.Map;

import com.nuplex.unis.vo.Image;
import com.nuplex.unis.vo.Matching;
import com.nuplex.unis.vo.Need;

public interface NeedsService {
	public void registerPost(Need need, String[] images, int[] nos);
	public Map<String, Object> getNeedList(String type, int pageNo, String region, String talentNo, Timestamp startDate, Timestamp endDate, int noise, String fareType, int fare, String fareDir, int area);
	public List<Image> getImageList(int userNo, int pageNo);
	public Map<String, Object> getUnes(int no);
	public Map<String, Object> getMachedList(int no);
	public List<Matching> getMetchCalender(int no);
	public Map<String, Object> getMachingList(int pageNo,int no);

	public int matchingUpdate(int no);
	public int unMatchingUpdate(int no);
	public int matchingInsert(Matching matching);
	
	public List<Need> getNeedList(int no);
	public Map<String, Object> getInes(int no);
	public Map<String, Object> getInesMachedList(int no);
	public Map<String, Object> getInesMachingList(int pageNo,int no);
}//NeedsService end
