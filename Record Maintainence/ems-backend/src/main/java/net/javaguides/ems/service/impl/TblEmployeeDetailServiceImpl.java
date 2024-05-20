package net.javaguides.ems.service.impl;

import lombok.AllArgsConstructor;
import net.javaguides.ems.dto.TblEmployeeDetailDto;
import net.javaguides.ems.entity.TblEmployeeDetail;
import net.javaguides.ems.mapper.TblEmployeeDetailMapper;
import net.javaguides.ems.repository.TblEmployeeDetailRepository;
import net.javaguides.ems.service.TblEmployeeDetailService;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor
public class TblEmployeeDetailServiceImpl implements TblEmployeeDetailService {

    private final TblEmployeeDetailRepository employeeDetailRepository;

    @Override
    public TblEmployeeDetailDto createTblEmployeeDetail(TblEmployeeDetailDto tblEmployeeDetailDto) {
        TblEmployeeDetail tblEmployeeDetail = TblEmployeeDetailMapper.mapToTblEmployeeDetail(tblEmployeeDetailDto);
        TblEmployeeDetail savedTblEmployeeDetail = employeeDetailRepository.save(tblEmployeeDetail);
        return TblEmployeeDetailMapper.mapToTblEmployeeDetailDto(savedTblEmployeeDetail);
    }

    @Override
    public TblEmployeeDetailDto getTblEmployeeDetailById(Long empCode) {
        Optional<TblEmployeeDetail> employeeDetail = employeeDetailRepository.findById(empCode);
        return employeeDetail.map(TblEmployeeDetailMapper::mapToTblEmployeeDetailDto).orElse(null);
    }

    @Override
    public List<TblEmployeeDetailDto> getAllTblEmployeeDetail() {
        return employeeDetailRepository.findAll().stream()
                .map(TblEmployeeDetailMapper::mapToTblEmployeeDetailDto)
                .collect(Collectors.toList());
    }

    @Override
    public TblEmployeeDetailDto updateTblEmployeeDetail(Long empCode, TblEmployeeDetailDto updatedEmp) {
        Optional<TblEmployeeDetail> existingEmployeeDetail = employeeDetailRepository.findById(empCode);
        if (existingEmployeeDetail.isPresent()) {
            TblEmployeeDetail employeeDetail = existingEmployeeDetail.get();
            employeeDetail.setAddressLine1(updatedEmp.getAddressLine1());
            employeeDetail.setAddressLine2(updatedEmp.getAddressLine2());
            employeeDetail.setCity(updatedEmp.getCity());
            employeeDetail.setState(updatedEmp.getState());
            employeeDetail.setCountry(updatedEmp.getCountry());
            TblEmployeeDetail updatedEmployeeDetail = employeeDetailRepository.save(employeeDetail);
            return TblEmployeeDetailMapper.mapToTblEmployeeDetailDto(updatedEmployeeDetail);
        } else {
            return null;
        }
    }

    @Override
    public void deleteTblEmployeeDetail(Long empCode) {
        employeeDetailRepository.deleteById(empCode);
    }
}
