package net.javaguides.ems.mapper;

import net.javaguides.ems.dto.TblEmployeeDetailDto;
import net.javaguides.ems.entity.TblEmployeeDetail;

public class TblEmployeeDetailMapper {
    public static TblEmployeeDetailDto mapToTblEmployeeDetail(TblEmployeeDetailDto tblEmployeeDetailDto){
        return new TblEmployeeDetailDto(
                tblEmployeeDetailDto.getEmpCode(),
                tblEmployeeDetailDto.getMastCode(),
                tblEmployeeDetailDto.getAddressLine1(),
                tblEmployeeDetailDto.getAddressLine2(),
                tblEmployeeDetailDto.getCity(),
                tblEmployeeDetailDto.getState(),
                tblEmployeeDetailDto.getCountry()
        );
    }
    public static TblEmployeeDetail mapToTblEmployeeDetailDto(TblEmployeeDetail tblEmployeeDetail){
        return new TblEmployeeDetail(
                tblEmployeeDetail.getEmpCode(),
                tblEmployeeDetail.getEmployeeMaster(),
                tblEmployeeDetail.getAddressLine1(),
                tblEmployeeDetail.getAddressLine2(),
                tblEmployeeDetail.getCity(),
                tblEmployeeDetail.getState(),
                tblEmployeeDetail.getCountry()
        );
    }

}
