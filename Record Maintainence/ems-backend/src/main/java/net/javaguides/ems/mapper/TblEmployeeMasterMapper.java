package net.javaguides.ems.mapper;

import net.javaguides.ems.dto.TblEmployeeMasterDto;
import net.javaguides.ems.entity.TblEmployeeMaster;

public class TblEmployeeMasterMapper {
    public static TblEmployeeMasterDto mapToTblEmployeeMaster(TblEmployeeMaster tblEmployeeMaster) {
        return new TblEmployeeMasterDto(
                tblEmployeeMaster.getMastCode(),
                tblEmployeeMaster.getUser().getUserId(),
                tblEmployeeMaster.getEmpID(),
                tblEmployeeMaster.getEmpName(),
                tblEmployeeMaster.getDesignation(),
                tblEmployeeMaster.getDepartment(),
                tblEmployeeMaster.getJoinedDate(),
                tblEmployeeMaster.getSalary()
        );
    }

    public static TblEmployeeMaster mapToTblEmployeeMaster(TblEmployeeMasterDto tblEmployeeMasterDto) {
        TblEmployeeMaster tblEmployeeMaster = new TblEmployeeMaster();
        tblEmployeeMaster.setMastCode(tblEmployeeMasterDto.getMastCode());
        // Here, you may need to fetch the user from the database based on the userId
        // and set it to employeeMaster.setUser(user);
        tblEmployeeMaster.setEmpID(tblEmployeeMasterDto.getEmpID());
        tblEmployeeMaster.setEmpName(tblEmployeeMasterDto.getEmpName());
        tblEmployeeMaster.setDesignation(tblEmployeeMasterDto.getDesignation());
        tblEmployeeMaster.setDepartment(tblEmployeeMasterDto.getDepartment());
        tblEmployeeMaster.setJoinedDate(tblEmployeeMasterDto.getJoinedDate());
        tblEmployeeMaster.setSalary(tblEmployeeMasterDto.getSalary());
        return tblEmployeeMaster;
    }
}
