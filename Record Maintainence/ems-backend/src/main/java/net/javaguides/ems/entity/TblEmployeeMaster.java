package net.javaguides.ems.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.Date;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name="TblEmployeeMaster")
public class TblEmployeeMaster {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "MastCode")
    private long mastCode;

    @ManyToOne
    @JoinColumn(name = "User_Id", referencedColumnName = "UserID")
    private TblUserMaster user;

    @Column(name = "EmpID", unique = true, nullable = false)
    private String empID;

    @Column(name = "EmpName", nullable = false)
    private String empName;

    @Column(name = "Designation", nullable = false)
    private String designation;

    @Column(name = "Department", nullable = false)
    private String department;

    @Temporal(TemporalType.DATE)
    @Column(name = "JoinedDate", nullable = false)
    private Date joinedDate;

    @Column(name = "Salary", nullable = false)
    private double salary;
}

