package com.nuplex.unis.vo;

import java.sql.Date;
import java.sql.Timestamp;

public class User {
	private int no, americano, withUnis;
	private String name, email, password, nickname, gender, cell, profile, cover, intro, license, cafeName, zipcode, addressNew, addressOld, open, close,restDate, phone;
	private Date birthDate;
	private Timestamp regdate, lastLogin, unregdate;
	private String[] condition;
	private double latitude, longitude;
	
	public int getNo() {
		return no;
	}
	public int getWithUnis() {
		return withUnis;
	}
	public void setWithUnis(int withUnis) {
		this.withUnis = withUnis;
	}
	public void setNo(int no) {
		this.no = no;
	}
	public int getAmericano() {
		return americano;
	}
	public void setAmericano(int americano) {
		this.americano = americano;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public String getNickname() {
		return nickname;
	}
	public void setNickname(String nickname) {
		this.nickname = nickname;
	}
	public String getGender() {
		return gender;
	}
	public void setGender(String gender) {
		this.gender = gender;
	}
	public String getCell() {
		return cell;
	}
	public void setCell(String cell) {
		this.cell = cell;
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
	public String getIntro() {
		return intro;
	}
	public void setIntro(String intro) {
		this.intro = intro;
	}
	public String getLicense() {
		return license;
	}
	public void setLicense(String license) {
		this.license = license;
	}
	public String getCafeName() {
		return cafeName;
	}
	public void setCafeName(String cafeName) {
		this.cafeName = cafeName;
	}
	public String getZipcode() {
		return zipcode;
	}
	public void setZipcode(String zipcode) {
		this.zipcode = zipcode;
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
	public Date getBirthDate() {
		return birthDate;
	}
	public void setBirthDate(Date birthDate) {
		this.birthDate = birthDate;
	}
	public Timestamp getRegdate() {
		return regdate;
	}
	public void setRegdate(Timestamp regdate) {
		this.regdate = regdate;
	}
	public Timestamp getLastLogin() {
		return lastLogin;
	}
	public void setLastLogin(Timestamp lastLogin) {
		this.lastLogin = lastLogin;
	}
	public Timestamp getUnregdate() {
		return unregdate;
	}
	public void setUnregdate(Timestamp unregdate) {
		this.unregdate = unregdate;
	}
	public String[] getCondition() {
		return condition;
	}
	public void setCondition(String[] condition) {
		this.condition = condition;
	}
	public double getLatitude() {
		return latitude;
	}
	public void setLatitude(double latitude) {
		this.latitude = latitude;
	}
	public double getLongitude() {
		return longitude;
	}
	public void setLongitude(double longitude) {
		this.longitude = longitude;
	}
	public boolean with() {
		return withUnis > 0;
	}
}//User end
