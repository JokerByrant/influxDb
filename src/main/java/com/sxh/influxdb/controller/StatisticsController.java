package com.sxh.influxdb.controller;

import com.alibaba.fastjson.JSONObject;
import com.sxh.influxdb.service.IStatisticsService;
import com.sxh.influxdb.vo.StatisticsVo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

import java.util.List;
import java.util.Map;

/**
 * 统计数据Controller
 * @author sxh
 * @date 2020/8/21
 */
@RequestMapping("/statistics")
@RestController
public class StatisticsController {
    @Autowired
    private IStatisticsService statisticsService;

    @GetMapping("/init")
    public ModelAndView init(){
        return new ModelAndView("statistics/graph");
    }

    @GetMapping("/selectDataForLineChart")
    public JSONObject selectDataForLineChart(StatisticsVo statisticsVo) {
        List<Map<String, Object>> maps = statisticsService.selectDataForLineChart(statisticsVo);
        JSONObject response = new JSONObject();
        response.put("code", 200);
        response.put("rows", maps);
        return response;
    }

}
