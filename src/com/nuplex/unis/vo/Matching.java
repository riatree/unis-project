package com.nuplex.unis.vo;

import java.sql.Timestamp;

import com.fasterxml.jackson.annotation.JsonGetter;

public class Matching {
	private int no, needNo, userNo, count;
	private String status, nickname, profile, intro, startDate, endDate, needTitle, userNickname, userProfile;
	private Timestamp regdate, startEvent, endEvent;
	
	public void setStartEvent(Timestamp startEvent) {
		this.startEvent = startEvent;
	}

	public void setEndEvent(Timestamp endEvent) {
		this.endEvent = endEvent;
	}

	public Matching() {
		// TODO Auto-generated constructor stub
	}

	public int getCount() {
		return count;
	}

	public void setCount(int count) {
		this.count = count;
	}

	public String getNickname() {
		return nickname;
	}

	public void setNickname(String nickname) {
		this.nickname = nickname;
	}

	public String getProfile() {
		return profile;
	}

	public void setProfile(String profile) {
		this.profile = profile;
	}
	
	@JsonGetter("title")
	public String getIntro() {
		return intro;
	}

	public void setIntro(String intro) {
		this.intro = intro;
	}

	public String getStartDate() {
		return startDate;
	}

	public void setStartDate(String startDate) {
		this.startDate = startDate;
	}

	public String getEndDate() {
		return endDate;
	}

	public void setEndDate(String endDate) {
		this.endDate = endDate;
	}

	public String getNeedTitle() {
		return needTitle;
	}

	public void setNeedTitle(String needTitle) {
		this.needTitle = needTitle;
	}

	public String getUserNickname() {
		return userNickname;
	}

	public void setUserNickname(String userNickname) {
		this.userNickname = userNickname;
	}

	public String getUserProfile() {
		return userProfile;
	}

	public void setUserProfile(String userProfile) {
		this.userProfile = userProfile;
	}

	public int getNo() {
		return no;
	}

	public void setNo(int no) {
		this.no = no;
	}

	public int getNeedNo() {
		return needNo;
	}

	public void setNeedNo(int needNo) {
		this.needNo = needNo;
	}

	public int getUserNo() {
		return userNo;
	}

	public void setUserNo(int userNo) {
		this.userNo = userNo;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}
	
	@JsonGetter("start")
	public long getStart() {
		return startEvent.getTime();
	}
	
	@JsonGetter("end")
	public long getEnd() {
		return endEvent.getTime();
	}

	public Timestamp getRegdate() {
		return regdate;
	}

	public void setRegdate(Timestamp regdate) {
		this.regdate = regdate;
	}
	
	
}//Matching end
