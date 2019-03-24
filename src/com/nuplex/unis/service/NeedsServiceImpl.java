package com.nuplex.unis.service;

import java.sql.Timestamp;
import java.util.List;
import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;

import org.springframework.transaction.annotation.Transactional;

import com.nuplex.unis.dao.CafeConditionsDAO;
import com.nuplex.unis.dao.ImagesDAO;
import com.nuplex.unis.dao.ImagesLinkDAO;
import com.nuplex.unis.dao.MatchingsDAO;
import com.nuplex.unis.dao.NeedsDAO;
import com.nuplex.unis.util.PaginateUtil;
import com.nuplex.unis.vo.Image;
import com.nuplex.unis.vo.ImageLink;
import com.nuplex.unis.vo.Matching;
import com.nuplex.unis.vo.Need;
import com.nuplex.unis.vo.PageVO;

public class NeedsServiceImpl implements NeedsService {
	private NeedsDAO needsDAO;
	private ImagesDAO imagesDAO;
	private ImagesLinkDAO imagesLinkDAO;
	private CafeConditionsDAO cafeConditionsDAO;
	private MatchingsDAO matchingsDAO;
	private PaginateUtil paginateUtil;
	
	public void setNeedsDAO(NeedsDAO needsDAO) {
		this.needsDAO = needsDAO;
	}//setNeedsDAO() end
	
	public void setImagesDAO(ImagesDAO imagesDAO) {
		this.imagesDAO = imagesDAO;
	}
	
	public void setImagesLinkDAO(ImagesLinkDAO imagesLinkDAO) {
		this.imagesLinkDAO = imagesLinkDAO;
	}
	
	public void setCafeConditionsDAO(CafeConditionsDAO cafeConditionsDAO) {
		this.cafeConditionsDAO = cafeConditionsDAO;
	}
	
	public void setMatchingsDAO(MatchingsDAO matchingsDAO) {
		this.matchingsDAO = matchingsDAO;
	}
	
	public void setPaginateUtil(PaginateUtil paginateUtil) {
		this.paginateUtil = paginateUtil;
	}

	@Transactional
	@Override
	public void registerPost(Need need, String[] images,int[] nos) {		
		needsDAO.insert(need);
		
		ImageLink imageLink=new ImageLink();
		
		for(int i=0;i<images.length;i++ ) {
			if(nos[i]==0) {
				Image image=new Image();
				image.setOwnerNo(need.getUserNo());
				image.setUserNo(need.getUserNo());
				image.setName(images[i]);
				
				imagesDAO.insert(image);
				imageLink.setImageNo(image.getNo());
			}
			  imageLink.setTargetType(need.getType()); imageLink.setTargetNo(need.getNo());
			  imagesLinkDAO.insert(imageLink);
		}				
	}

	@Override
	public Map<String, Object> getNeedList(String type, int pageNo, String region, String talentNo, Timestamp startDate, 
			Timestamp endDate, int noise, String fareType, int fare, String fareDir, int area) {
		Map<String, Object> map = new ConcurrentHashMap<>();		
		
		int numPage = 12;
		int numBlock = 5;
		
		PageVO pageVO = new PageVO(pageNo,numPage,type,region,talentNo,startDate,endDate,noise,fareType,fare,fareDir,area);
		
		List<Need> list = needsDAO.selectList(pageVO);
		
		int total = needsDAO.selectTotal(pageVO);
		String url = "/"+type+"/list/page/";

		String paginate = PaginateUtil.getPaginate(pageNo, total, numPage, numBlock, url);
		
		map.put("needList",list);
		map.put("paginate", paginate);

		return map;
	}

	
	
	@Override
	public List<Image> getImageList(int userNo, int pageNo) {
		int numPage = 12;
		PageVO pageVO = new PageVO(pageNo,numPage,userNo);
		
		return imagesDAO.selectList(pageVO);
	}	
	
	@Override
	public Map<String, Object> getUnes(int no) {
		Map<String, Object> map = new ConcurrentHashMap<>();
		
		System.out.println("get unes/detail/"+no);
		
		map.put("unesInfo", needsDAO.selectOneByUnes(no));
		map.put("unesImages", imagesDAO.selectListByUnes(no));
		map.put("cafeConditions", cafeConditionsDAO.selectList(no));
		map.put("matchedCount", needsDAO.selectListCount(no));
		//map.put("cafeCondition");
		
		
		return map;
	}//getUnes() end

	@Override
	public Map<String, Object> getMachedList(int no) {
		Map<String, Object> map = new ConcurrentHashMap<>();
		List<Matching> list = matchingsDAO.selectListByUnes(no);
		System.out.println(list);
		map.put("list", list);
		map.put("count", needsDAO.selectListCount(no));
		return map;
	}
	
	@Override
	public List<Matching> getMetchCalender(int no) {
		return matchingsDAO.selectListByUnes(no);
	}//getMetchCalender() end
	
	@Override
	public Map<String, Object> getMachingList(int pageNo,int no) {
		Map<String, Object> map = new ConcurrentHashMap<>();
		
		int numPage = 4;
		int numBlock = 5;

		PageVO pageVO = new PageVO(pageNo, numPage, no);
		
		List<Matching> list = matchingsDAO.selectUnesMacingList(pageVO);
		
		int total = matchingsDAO.selectUnesMacingTotal(no);
		
		String url = "/unes/detail/"+no+"/page/";
		
		String paginate = PaginateUtil.getPaginate(pageNo, total, numPage, numBlock, url);
		System.out.println(list);
		map.put("list", list);
		map.put("paginate", paginate);
		return map;
	}
	
	@Override
	public int matchingUpdate(int no) {
		return matchingsDAO.matchingUpdate(no);
	}
	@Override
	public int unMatchingUpdate(int no) {
		return matchingsDAO.unMatchingUpdate(no);
	}
	
	@Override
	public int matchingInsert(Matching matching) {
		return matchingsDAO.insert(matching);
	}
	
	@Override
	public List<Need> getNeedList(int no) {
		return needsDAO.selectNeedList(no);
	}//getNeedList() end
	
	
	@Override
	public Map<String, Object> getInesMachedList(int no) {
		Map<String, Object> map = new ConcurrentHashMap<>();
		
		List<Matching> list = matchingsDAO.selectListByInes(no);
		
		System.out.println("매칭된 리스트 : "+list);
		
		System.out.println("ines매칭된리스트 카운트 : " +  needsDAO.selectListCount(no) );
		
		map.put("list", matchingsDAO.selectListByInes(no));
		map.put("count", needsDAO.selectListCount(no));
		
		return map;
	}
	
	@Override
	public Map<String, Object> getInesMachingList(int pageNo,int no) {
		Map<String, Object> map = new ConcurrentHashMap<>();
		
		// 한페이지 당 보여지는 게시물 수
		int numPage = 2;

		// 한페이지에 보여질 페이지 블룩 수
		int numBlock = 3;

		// 페이지 처리용
		PageVO pageVO = new PageVO(pageNo, numPage, no);
		
		System.out.println("pageVO : "+ pageVO.getStart() + "/"+pageVO.getEnd()+"/"+pageVO.getUserNo());
		
		List<Matching> list = matchingsDAO.selectUnesMacingList(pageVO);
		
		int total = matchingsDAO.selectUnesMacingTotal(no);
		
		System.out.println("매칭중 리스트"+total);
		
		System.out.println("매칭중 토탈"+total);
		
		String url = "/ines/detail/"+no+"/page/";
		
		System.out.println("url : "+url);
		
		String paginate = paginateUtil.getPaginate(pageNo, total, numPage, numBlock, url);

		map.put("list", list);
		map.put("paginate", paginate);
		return map;
	}
	
	@Override
	public Map<String, Object> getInes(int no) {
		Map<String, Object> map = new ConcurrentHashMap<>();
		
		System.out.println("get unes/detail/"+no);
		
		System.out.println("이미지리스트 : "+imagesDAO.selectListByUnes(no));
		
		map.put("InesDetail", needsDAO.selectOneByInes(no));
		map.put("inesImages", imagesDAO.selectListByInes(no));
		map.put("cafeConditions", cafeConditionsDAO.selectList(no));
		map.put("matchedCount", needsDAO.selectListCount(no));
		//map.put("cafeCondition");

		return map;
	}//getUnes() end
}//NeedsServiceImpl end
