package net.javaguides.ems.service;

import net.javaguides.ems.dto.TblEmployeeMasterDto;
import net.javaguides.ems.dto.TblUserMasterDto;

import java.util.List;

public interface TblEmployeeMasterService {
    TblEmployeeMasterDto createTblEmployeeMasterDto(TblEmployeeMasterDto tblEmployeeMasterDto);
    TblEmployeeMasterDto getTblEmployeeMasterDtoById(Long empId);
    List<TblEmployeeMasterDto> getAllTblEmployeeMasterDto();
    TblEmployeeMasterDto updateTblEmployeeMasterDto(Long empId, TblUserMasterDto updatedEmp);
    void deleteTblEmployeeMasterDto(Long empId);
}
