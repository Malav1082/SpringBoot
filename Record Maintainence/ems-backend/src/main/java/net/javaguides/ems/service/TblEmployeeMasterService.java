package net.javaguides.ems.service;

import net.javaguides.ems.dto.TblEmployeeMasterDto;

import java.util.List;

public interface TblEmployeeMasterService {
    TblEmployeeMasterDto createTblEmployeeMaster(TblEmployeeMasterDto tblEmployeeMasterDto);
    TblEmployeeMasterDto getTblEmployeeMasterById(Long empId);
    List<TblEmployeeMasterDto> getAllTblEmployeeMaster();
    TblEmployeeMasterDto updateTblEmployeeMaster(Long empId, TblEmployeeMasterDto updatedEmp);
    void deleteTblEmployeeMaster(Long empId);
}
