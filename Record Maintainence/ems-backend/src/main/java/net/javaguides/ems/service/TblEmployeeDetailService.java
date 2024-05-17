package net.javaguides.ems.service;

import net.javaguides.ems.dto.TblEmployeeDetailDto;

import java.util.List;

public interface TblEmployeeDetailService {
    TblEmployeeDetailDto createTblEmployeeDetail(TblEmployeeDetailDto tblEmployeeDetailDto);
    TblEmployeeDetailDto getTblEmployeeDetailById(Long empCode);
    List<TblEmployeeDetailDto> getAllTblEmployeeDetail();
    TblEmployeeDetailDto updateTblEmployeeDetail(Long empCode, TblEmployeeDetailDto updatedEmp);
    void deleteTblEmployeeDetail(Long empCode);
}
