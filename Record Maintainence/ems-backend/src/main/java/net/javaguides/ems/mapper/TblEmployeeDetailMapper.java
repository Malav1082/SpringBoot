package net.javaguides.ems.mapper;

import net.javaguides.ems.dto.TblEmployeeDetailDto;
import net.javaguides.ems.entity.TblEmployeeDetail;

public class TblEmployeeDetailMapper {
    public static TblEmployeeDetailDto mapToTblEmployeeDetailDto(TblEmployeeDetail tblEmployeeDetail) {
        return new TblEmployeeDetailDto(
                tblEmployeeDetail.getAddressLine1(),
                tblEmployeeDetail.getAddressLine2(),
                tblEmployeeDetail.getCity(),
                tblEmployeeDetail.getState(),
                tblEmployeeDetail.getCountry()
        );
    }

    public static TblEmployeeDetail mapToTblEmployeeDetail(TblEmployeeDetailDto tblEmployeeDetailDto) {
        return new TblEmployeeDetail(
                tblEmployeeDetailDto.getAddressLine1(),
                tblEmployeeDetailDto.getAddressLine2(),
                tblEmployeeDetailDto.getCity(),
                tblEmployeeDetailDto.getState(),
                tblEmployeeDetailDto.getCountry()
        );
    }
}
