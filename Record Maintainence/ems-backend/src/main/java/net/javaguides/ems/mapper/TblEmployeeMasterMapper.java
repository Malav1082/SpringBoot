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

    public static TblEmployeeMaster mapToTblEmployeeMasterDto(TblEmployeeMaster tblEmployeeMaster) {
        return new TblEmployeeMaster(
                tblEmployeeMaster.getMastCode(),
                tblEmployeeMaster.getUser(),
                tblEmployeeMaster.getEmpID(),
                tblEmployeeMaster.getEmpName(),
                tblEmployeeMaster.getDesignation(),
                tblEmployeeMaster.getDepartment(),
                tblEmployeeMaster.getJoinedDate(),
                tblEmployeeMaster.getSalary()
        );
    }
}
