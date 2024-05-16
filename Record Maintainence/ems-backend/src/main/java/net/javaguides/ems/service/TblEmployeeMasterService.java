package net.javaguides.ems.service;

import net.javaguides.ems.dto.TblEmployeeMasterDto;

import java.util.List;

public interface TblEmployeeMasterService {
    TblEmployeeMasterDto createTblEmployeeMasterDto(TblEmployeeMasterDto tblEmployeeMasterDto);
    TblEmployeeMasterDto getTblEmployeeMasterDtoById(Long empId);
    List<TblEmployeeMasterDto> getAllTblEmployeeMasterDto();
    TblEmployeeMasterDto updateTblEmployeeMasterDto(Long empId, TblEmployeeMasterDto updatedEmp);
    void deleteTblEmployeeMasterDto(Long empId);
}
