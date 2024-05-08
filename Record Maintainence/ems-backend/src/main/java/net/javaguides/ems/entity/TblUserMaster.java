package net.javaguides.ems.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name="TblUserMaster")
public class TblUserMaster {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "UserID")
    private long UserID;

    @Column(name = "UserName", nullable = false)
    private String UserName;

    @Column(name = "MobileNumber", nullable = false)
    private String MobileNumber;

    @Column(name = "Password", nullable = false)
    private String Password;

    @Transient
    private String confirmPassword;
}
