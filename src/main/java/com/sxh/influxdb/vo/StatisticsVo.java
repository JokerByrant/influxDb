package com.sxh.influxdb.vo;

import lombok.Setter;

import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;

/**
 * 查询统计数据包含的查询条件
 * @author sxh
 * @date 2020/8/21
 */
@Setter
public class StatisticsVo {
    // 数据类型
    private String type;

    // 查询开始时间
    private Date startDate;

    // 查询的数据类型，0->平均值，1->最大值，2->最小值
    private int dataType;

    // 精度
    private int accuracy;

    // 显示数量
    private int num;

    public String getType() {
        return type;
    }

    public String getStartDate() {
        if (startDate == null) {
            return null;
        }
        Calendar cal = Calendar.getInstance();
        cal.setTime(startDate);
        cal.add(Calendar.HOUR_OF_DAY, -8);

        SimpleDateFormat df = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
        return df.format(cal.getTime());
    }

    public String getDataType() {
        switch (dataType) {
            case 0: return "mean";
            case 1: return "max";
            case 2: return "min";
            default: return "";
        }
    }

    public String getAccuracy() {
        switch (accuracy) {
            case 0: return "10s";
            case 1: return "1m";
            case 2: return "10m";
            case 3: return "1h";
            default: return  "";
        }
    }

    public int getNum() {
        return num;
    }
}
