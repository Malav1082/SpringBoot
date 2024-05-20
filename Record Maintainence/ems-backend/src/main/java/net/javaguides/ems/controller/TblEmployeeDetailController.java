package net.javaguides.ems.controller;

import net.javaguides.ems.dto.TblEmployeeDetailDto;
import net.javaguides.ems.service.TblEmployeeDetailService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/employee-details")
public class TblEmployeeDetailController {

    private final TblEmployeeDetailService employeeDetailService;

    public TblEmployeeDetailController(TblEmployeeDetailService employeeDetailService) {
        this.employeeDetailService = employeeDetailService;
    }

    @PostMapping
    public ResponseEntity<TblEmployeeDetailDto> createEmployeeDetail(@RequestBody TblEmployeeDetailDto employeeDetailDto) {
        TblEmployeeDetailDto createdEmployeeDetail = employeeDetailService.createTblEmployeeDetail(employeeDetailDto);
        return new ResponseEntity<>(createdEmployeeDetail, HttpStatus.CREATED);
    }

    @GetMapping("/{empCode}")
    public ResponseEntity<TblEmployeeDetailDto> getEmployeeDetailById(@PathVariable Long empCode) {
        TblEmployeeDetailDto employeeDetailDto = employeeDetailService.getTblEmployeeDetailById(empCode);
        return ResponseEntity.ok(employeeDetailDto);
    }

    @GetMapping
    public ResponseEntity<List<TblEmployeeDetailDto>> getAllEmployeeDetails() {
        List<TblEmployeeDetailDto> employeeDetails = employeeDetailService.getAllTblEmployeeDetail();
        return ResponseEntity.ok(employeeDetails);
    }

    @PutMapping("/{empCode}")
    public ResponseEntity<TblEmployeeDetailDto> updateEmployeeDetail(@PathVariable Long empCode, @RequestBody TblEmployeeDetailDto updatedEmpDetail) {
        TblEmployeeDetailDto updatedEmployeeDetail = employeeDetailService.updateTblEmployeeDetail(empCode, updatedEmpDetail);
        return ResponseEntity.ok(updatedEmployeeDetail);
    }

    @DeleteMapping("/{empCode}")
    public ResponseEntity<Void> deleteEmployeeDetail(@PathVariable Long empCode) {
        employeeDetailService.deleteTblEmployeeDetail(empCode);
        return ResponseEntity.noContent().build();
    }
}
