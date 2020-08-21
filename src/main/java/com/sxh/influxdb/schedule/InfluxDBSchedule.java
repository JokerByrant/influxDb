package com.sxh.influxdb.schedule;

import com.sxh.influxdb.service.IStatisticsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.Async;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;

/**
 * 定时任务，用来往influxDb中写数据
 * @author sxh
 * @date 2020/8/21
 */
@Component
@Async
public class InfluxDBSchedule {
    @Autowired
    private IStatisticsService statisticsService;

    /**
     * 每隔5秒执行一次
     */
    @Scheduled(cron = "*/5 * * * * ? ")
    public void statisticsEveryDayData() {
        statisticsService.insertNewRecord();
    }
}
