package com.sxh.influxdb.service;

import com.sxh.influxdb.vo.StatisticsVo;

import java.util.List;
import java.util.Map;

/**
 * 统计数据Service
 * @author sxh
 * @date 2020/8/21
 */
public interface IStatisticsService {
    /**
     * 模拟一些数据插入到influxDb中
     */
    void insertNewRecord();

    /**
     * 模拟一些数据插入到influxDb中,通过Map组装数据
     */
    void insertNewRecordByMap();

    List<Map<String, Object>> selectDataForLineChart(StatisticsVo statisticsVo);
}
