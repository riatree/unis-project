package com.nuplex.unis.vo;

import java.sql.Timestamp;

public class Image {
	private int no, userNo, ownerNo;
	private String name;
	private Timestamp regdate;
	
	public Image() {
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

	public int getOwnerNo() {
		return ownerNo;
	}

	public void setOwnerNo(int ownerNo) {
		this.ownerNo = ownerNo;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public Timestamp getRegdate() {
		return regdate;
	}

	public void setRegdate(Timestamp regdate) {
		this.regdate = regdate;
	}
	
	
}//Image end
