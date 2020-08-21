package com.sxh.influxdb.service.impl;

import com.sxh.influxdb.dto.StatisticsDto;
import com.sxh.influxdb.service.IStatisticsService;
import com.sxh.influxdb.utils.InfluxdbUtils;
import com.sxh.influxdb.vo.StatisticsVo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * @author sxh
 * @date 2020/8/21
 */
@Service
public class StatisticsServiceImpl implements IStatisticsService {
    @Autowired
    private InfluxdbUtils influxdbUtils;

    @Override
    public void insertNewRecord() {
        String[] typeArr = {"0", "1", "2", "3"};
        List<StatisticsDto> statisticsDtos = new ArrayList<>();
        StatisticsDto statisticsDto;
        for (String type:typeArr) {
            statisticsDto = new StatisticsDto();
            statisticsDto.setType(type);
            statisticsDto.setData1(getRandomNum());
            statisticsDto.setData2(getRandomNum());
            statisticsDto.setData3(getRandomNum());
            statisticsDtos.add(statisticsDto);
        }

        influxdbUtils.insertBatchByPoints(statisticsDtos);
    }

    @Override
    public void insertNewRecordByMap() {
        List<Map<String, Object>> list = new ArrayList<>();
        String[] typeArr = {"0", "1", "2", "3"};
        Map<String, Object> map;
        for (String type:typeArr) {
            map = new HashMap<>();
            map.put("measurement", "statistics");
            map.put("type", type);
            map.put("data1", getRandomNum());
            map.put("data2", getRandomNum());
            map.put("data3", getRandomNum());
            list.add(map);
        }

        influxdbUtils.insertBatchByPoints(list);
    }

    @Override
    public List<Map<String, Object>> selectDataForLineChart(StatisticsVo statisticsVo) {
        List<Map<String, Object>> statisticsList = influxdbUtils.fetchRecords("select " + statisticsVo.getDataType() + "(*::field) from statistics" +
                " where type = '" + statisticsVo.getType() + "'" +
                " and time > '" + statisticsVo.getStartDate() + "'" +
                " group by time(" + statisticsVo.getAccuracy() + ")" +
                " fill(0)" +
                " limit " + statisticsVo.getNum());

        return statisticsList;
    }

    /**
     * 生成随机数
     */
    private int getRandomNum() {
        return (int) (Math.random() * 100);
    }
}
