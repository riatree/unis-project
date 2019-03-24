package com.nuplex.unis.vo;

import java.sql.Timestamp;

import com.fasterxml.jackson.annotation.JsonGetter;

public class Need {
	private int no, userNo, talentNo, noise, fare, chairs, area, americano, needNo;
	private String type, title, fareDir, fareType, kakao, status, region, nickname, addressNew, addressOld, latitude, longitude, talentName, cafeName, open, close, restDate, phone, profile, cover, intro;
	private Timestamp startDate, endDate, regdate;
	
	public Need() {
		// TODO Auto-generated constructor stub
	}

	public int getAmericano() {
		return americano;
	}

	public void setAmericano(int americano) {
		this.americano = americano;
	}

	public int getNeedNo() {
		return needNo;
	}

	public void setNeedNo(int needNo) {
		this.needNo = needNo;
	}

	public String getAddressNew() {
		return addressNew;
	}

	public void setAddressNew(String addressNew) {
		this.addressNew = addressNew;
	}

	public String getAddressOld() {
		return addressOld;
	}

	public void setAddressOld(String addressOld) {
		this.addressOld = addressOld;
	}

	public String getLatitude() {
		return latitude;
	}

	public void setLatitude(String latitude) {
		this.latitude = latitude;
	}

	public String getLongitude() {
		return longitude;
	}

	public void setLongitude(String longitude) {
		this.longitude = longitude;
	}

	public String getTalentName() {
		return talentName;
	}

	public void setTalentName(String talentName) {
		this.talentName = talentName;
	}

	public String getCafeName() {
		return cafeName;
	}

	public void setCafeName(String cafeName) {
		this.cafeName = cafeName;
	}

	public String getOpen() {
		return open;
	}

	public void setOpen(String open) {
		this.open = open;
	}

	public String getClose() {
		return close;
	}

	public void setClose(String close) {
		this.close = close;
	}

	public String getRestDate() {
		return restDate;
	}

	public void setRestDate(String restDate) {
		this.restDate = restDate;
	}

	public String getPhone() {
		return phone;
	}

	public void setPhone(String phone) {
		this.phone = phone;
	}

	public String getProfile() {
		return profile;
	}

	public void setProfile(String profile) {
		this.profile = profile;
	}

	public String getCover() {
		return cover;
	}

	public void setCover(String cover) {
		this.cover = cover;
	}

	@JsonGetter("title")
	public String getIntro() {
		return intro;
	}

	public void setIntro(String intro) {
		this.intro = intro;
	}

	public int getNo() {
		return no;
	}

	public void setNo(int no) {
		this.no = no;
	}

	public int getUserNo() {
		return userNo;
	}

	public void setUserNo(int userNo) {
		this.userNo = userNo;
	}

	public int getTalentNo() {
		return talentNo;
	}

	public void setTalentNo(int talentNo) {
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

	public int getChairs() {
		return chairs;
	}

	public void setChairs(int chairs) {
		this.chairs = chairs;
	}

	public int getArea() {
		return area;
	}

	public void setArea(int area) {
		this.area = area;
	}

	public String getType() {
		return type;
	}

	public void setType(String type) {
		this.type = type;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
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

	public String getKakao() {
		return kakao;
	}

	public void setKakao(String kakao) {
		this.kakao = kakao;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	public String getRegion() {
		return region;
	}

	public void setRegion(String region) {
		this.region = region;
	}

	public String getNickname() {
		return nickname;
	}

	public void setNickname(String nickname) {
		this.nickname = nickname;
	}
	
	@JsonGetter(value="start")
	public Timestamp getStartDate() {
		return startDate;
	}

	public void setStartDate(Timestamp startDate) {
		this.startDate = startDate;
	}
	
	@JsonGetter(value="end")
	public Timestamp getEndDate() {
		return endDate;
	}
	
	public void setEndDate(Timestamp endDate) {
		this.endDate = endDate;
	}

	public Timestamp getRegdate() {
		return regdate;
	}

	public void setRegdate(Timestamp regdate) {
		this.regdate = regdate;
	}
	
//	public boolean isfareWon() {
//		return fareType.equals("won");
//	}
//	
	public String getStringdeal() {
		if (fareDir.equals("in")) {
			return "받겠습니다.";
		} else {
			return "주겠습니다."; 
		}
	}
	
}//Need end
