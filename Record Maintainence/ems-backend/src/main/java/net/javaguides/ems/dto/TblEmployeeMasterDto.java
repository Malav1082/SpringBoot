package net.javaguides.ems.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.Date;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class TblEmployeeMasterDto {
    private String empID;
    private String empName;
    private String designation;
    private String department;
    private Date joinedDate;
    private double salary;
}
