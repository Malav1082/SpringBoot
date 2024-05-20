package net.javaguides.ems.service.impl;

import lombok.AllArgsConstructor;
import net.javaguides.ems.dto.TblEmployeeMasterDto;
import net.javaguides.ems.entity.TblEmployeeMaster;
import net.javaguides.ems.mapper.TblEmployeeMasterMapper;
import net.javaguides.ems.repository.TblEmployeeMasterRepository;
import net.javaguides.ems.service.TblEmployeeMasterService;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor
public class TblEmployeeMasterServiceImpl implements TblEmployeeMasterService {

    private final TblEmployeeMasterRepository tblEmployeeMasterRepository;
    private final TblEmployeeMasterMapper tblEmployeeMasterMapper = TblEmployeeMasterMapper.INSTANCE;

    @Override
    public TblEmployeeMasterDto createTblEmployeeMaster(TblEmployeeMasterDto tblEmployeeMasterDto) {
        TblEmployeeMaster tblEmployeeMaster = tblEmployeeMasterMapper.toEntity(tblEmployeeMasterDto);
        TblEmployeeMaster savedTblEmployeeMaster = tblEmployeeMasterRepository.save(tblEmployeeMaster);
        return tblEmployeeMasterMapper.toDto(savedTblEmployeeMaster);
    }

    @Override
    public TblEmployeeMasterDto getTblEmployeeMasterById(Long empId) {
        TblEmployeeMaster tblEmployeeMaster = tblEmployeeMasterRepository.findById(empId)
                .orElseThrow(() -> new RuntimeException("Employee not found"));
        return tblEmployeeMasterMapper.toDto(tblEmployeeMaster);
    }

    @Override
    public List<TblEmployeeMasterDto> getAllTblEmployeeMaster() {
        return tblEmployeeMasterRepository.findAll().stream()
                .map(tblEmployeeMasterMapper::toDto)
                .collect(Collectors.toList());
    }

    @Override
    public TblEmployeeMasterDto updateTblEmployeeMaster(Long empId, TblEmployeeMasterDto updatedEmp) {
        TblEmployeeMaster existingEmployeeMaster = tblEmployeeMasterRepository.findById(empId)
                .orElseThrow(() -> new RuntimeException("Employee not found"));

        existingEmployeeMaster.setEmpID(updatedEmp.getEmpID());
        existingEmployeeMaster.setEmpName(updatedEmp.getEmpName());
        existingEmployeeMaster.setDesignation(updatedEmp.getDesignation());
        existingEmployeeMaster.setDepartment(updatedEmp.getDepartment());
        existingEmployeeMaster.setJoinedDate(updatedEmp.getJoinedDate());
        existingEmployeeMaster.setSalary(updatedEmp.getSalary());

        TblEmployeeMaster updatedTblEmployeeMaster = tblEmployeeMasterRepository.save(existingEmployeeMaster);
        return tblEmployeeMasterMapper.toDto(updatedTblEmployeeMaster);
    }

    @Override
    public void deleteTblEmployeeMaster(Long empId) {
        tblEmployeeMasterRepository.deleteById(empId);
    }
}
