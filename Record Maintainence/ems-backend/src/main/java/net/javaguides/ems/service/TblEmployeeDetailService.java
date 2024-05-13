package net.javaguides.ems.service;

import net.javaguides.ems.dto.TblEmployeeDetailDto;

import java.util.List;

public interface TblEmployeeDetailService {
    TblEmployeeDetailDto createTblEmployeeDetailDto(TblEmployeeDetailDto tblEmployeeDetailDto);
    TblEmployeeDetailDto getTblEmployeeDetailDtoById(Long empCode);
    List<TblEmployeeDetailDto> getAllTblEmployeeDetailDto();
    TblEmployeeDetailDto updateTblEmployeeDetailDto(Long empCode, TblEmployeeDetailDto updatedEmp);
    void deleteTblEmployeeDetailDto(Long empCode);
}
