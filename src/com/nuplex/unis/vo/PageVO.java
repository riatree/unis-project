package com.nuplex.unis.vo;

import java.sql.Timestamp;

public class PageVO {
	
	private int start, end, noise, fare, area, userNo, americano, withUnis;
	private String type, region, talentNo, fareDir, fareType, addressOld;
	private Timestamp startDate, endDate;
	
	public PageVO() {
		// TODO Auto-generated constructor stub
	}
	
	public PageVO(int pageNo, int numPage, String addressOld, int americano, int withUnis) {
		end = pageNo * numPage;
		start = end - (numPage-1);
		this.addressOld=addressOld;
		this.americano=americano;
		this.withUnis=withUnis;
	}
	
	public PageVO(int page, int numPage, int userNo) {
		end = page*numPage;
		start = end-(numPage-1);
		this.userNo=userNo;
	}

	public PageVO(int page, int numPage, String type, String region, String talentNo, Timestamp startDate, 
			Timestamp endDate, int noise, String fareType, int fare, String fareDir, int area) {
		end = page*numPage;
		start = end-(numPage-1);
		this.type = type;
		this.region=region;
		this.talentNo=talentNo;
		this.startDate=startDate;
		this.endDate=endDate;
		this.noise=noise;
		this.fareType=fareType;
		this.fare=fare;
		this.fareDir=fareDir;
		this.area=area;
	}

	public int getStart() {
		return start;
	}

	public void setStart(int start) {
		this.start = start;
	}

	public int getEnd() {
		return end;
	}

	public void setEnd(int end) {
		this.end = end;
	}

	public String getType() {
		return type;
	}

	public int getUserNo() {
		return userNo;
	}

	public void setUserNo(int userNo) {
		this.userNo = userNo;
	}

	public void setType(String type) {
		this.type = type;
	}

	public String getTalentNo() {
		return talentNo;
	}

	public void setTalentNo(String talentNo) {
		this.talentNo = talentNo;
	}

	public int getNoise() {
		return noise;
	}

	public void setNoise(int noise) {
		this.noise = noise;
	}

	public int getFare() {
		return fare;
	}

	public void setFare(int fare) {
		this.fare = fare;
	}

	public int getArea() {
		return area;
	}

	public void setArea(int area) {
		this.area = area;
	}

	public String getRegion() {
		return region;
	}

	public void setRegion(String region) {
		this.region = region;
	}

	public String getFareDir() {
		return fareDir;
	}

	public void setFareDir(String fareDir) {
		this.fareDir = fareDir;
	}

	public String getFareType() {
		return fareType;
	}

	public void setFareType(String fareType) {
		this.fareType = fareType;
	}

	public Timestamp getStartDate() {
		return startDate;
	}

	public void setStartDate(Timestamp startDate) {
		this.startDate = startDate;
	}

	public Timestamp getEndDate() {
		return endDate;
	}

	public void setEndDate(Timestamp endDate) {
		this.endDate = endDate;
	}

	public int getAmericano() {
		return americano;
	}

	public void setAmericano(int americano) {
		this.americano = americano;
	}

	public int getWithUnis() {
		return withUnis;
	}

	public void setWithUnis(int withUnis) {
		this.withUnis = withUnis;
	}

	public String getAddressOld() {
		return addressOld;
	}

	public void setAddressOld(String addressOld) {
		this.addressOld = addressOld;
	}
}
