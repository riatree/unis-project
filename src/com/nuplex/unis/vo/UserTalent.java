package com.nuplex.unis.vo;

import java.sql.Timestamp;

public class UserTalent {
	private int no, userNo, talentNo;
	private Timestamp regdate;
	
	public UserTalent() {
		// TODO Auto-generated constructor stub
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
	public Timestamp getRegdate() {
		return regdate;
	}
	public void setRegdate(Timestamp regdate) {
		this.regdate = regdate;
	}
	
	
}//UserTalent end
