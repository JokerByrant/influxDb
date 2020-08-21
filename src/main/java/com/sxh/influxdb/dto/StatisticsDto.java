package com.sxh.influxdb.dto;

import com.sxh.influxdb.utils.OnlyRead;
import lombok.Data;
import org.influxdb.annotation.Column;
import org.influxdb.annotation.Measurement;

/**
 * 对应influxdb中名为staticstics的measurement
 * @author sxh
 * @date 2020/8/21
 */
@Data
@Measurement(name = "statistics")
public class StatisticsDto {
    @OnlyRead
    @Column(name = "time")
    private String time;

    // tag属性类似于mysql中添加了索引的列，查询速度更快，只能是String类型
    @Column(name = "type", tag = true)
    private String type;

    @Column(name = "data1")
    private float data1;

    @Column(name = "data2")
    private float data2;

    @Column(name = "data3")
    private float data3;
}
