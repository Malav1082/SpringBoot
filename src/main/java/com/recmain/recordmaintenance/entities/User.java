package com.recmain.recordmaintenance.entities;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
// @ToString
@Table(name = "TblUserMaster")
public class User {

  @Id
  @GeneratedValue(strategy = GenerationType.AUTO)
  @Column(name = "UserID")
  private int userid;

  @Column(name = "Email")
  private String email;

  @Column(name = "Mobile Number")
  private int mobile_number;

  @Column(name = "Password")
  private String password;

  @Override
  public String toString() {
    return (
      "User [userid=" +
      userid +
      ", email=" +
      email +
      ", mobile_number=" +
      mobile_number +
      ", password=" +
      password +
      "]"
    );
  }
}
