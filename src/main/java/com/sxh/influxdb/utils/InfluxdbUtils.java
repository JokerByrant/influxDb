package com.sxh.influxdb.utils;

import org.apache.commons.collections.CollectionUtils;
import org.influxdb.InfluxDB;
import org.influxdb.annotation.Column;
import org.influxdb.annotation.Measurement;
import org.influxdb.dto.BatchPoints;
import org.influxdb.dto.Point;
import org.influxdb.dto.Query;
import org.influxdb.dto.QueryResult;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

import java.lang.reflect.Field;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * influxdb模板操作类
 * @author sxh
 * @date 2020/8/21
 * @Description
 *
 */
@Component
public class InfluxdbUtils {

	@Autowired
	private InfluxDB influxDB;

	@Value("${spring.influx.database}")
    private String database;

	/**
	 * 批量新增
	 * @param records
	 */
	public void insertBatchByPoints(List<?> records){
		BatchPoints batchPoints = BatchPoints.database(database)
				.consistency(InfluxDB.ConsistencyLevel.ALL)
				.build();
		records.forEach(record->{
			Class<?> clasz = record.getClass();
			//获取度量
			Measurement measurement = clasz.getAnnotation(Measurement.class);
			//构建
			Point.Builder builder = Point.measurement(measurement.name());
			Field[] fieldArray = clasz.getDeclaredFields();
			Column column = null;
			OnlyRead onlyRead = null;
			for(Field field : fieldArray){
				try {
					// 如果添加了@onlyRead注解，表示该field仅在从influxdb中读数据时会生效
					onlyRead = field.getAnnotation(OnlyRead.class);
					if (onlyRead != null){
						continue;
					}
					column = field.getAnnotation(Column.class);
					//设置属性可操作
					field.setAccessible(true);
					if(column.tag()){
						//tag属性只能存储String类型
						builder.tag(column.name(), field.get(record).toString());
					}else{
						//设置field
						if(field.get(record) != null){
							builder.addField(column.name(), Double.valueOf(field.get(record).toString()));
						}
					}
				} catch (IllegalArgumentException | IllegalAccessException e) {
					e.printStackTrace();
				}
			}
			batchPoints.point(builder.build());
		});
		influxDB.write(batchPoints);
	}

	/**
	 * 查询，返回Map集合
	 * @param query 完整的查询语句
	 * @return
	 */
	public List<Map<String, Object>> fetchRecords(String query){
		List<Map<String, Object>> results = new ArrayList<>();
		QueryResult queryResult = influxDB.query(new Query(query, database));
		queryResult.getResults().forEach(result->{
			if (CollectionUtils.isNotEmpty(result.getSeries())) {
				result.getSeries().forEach(serial -> {
					List<String> columns = serial.getColumns();
					int fieldSize = columns.size();
					serial.getValues().forEach(value -> {
						Map<String, Object> obj = new HashMap<String, Object>();
						for (int i = 0; i < fieldSize; i++) {
							// 当以max函数进行查询时，查询结果字段名会发生变化，这里处理一下
							if (columns.get(i).split("_").length > 1) {
								obj.put(columns.get(i).split("_")[1], value.get(i));
							} else {
								obj.put(columns.get(i), value.get(i));
							}
						}
						results.add(obj);
					});
				});
			}
		});
		return results;
	}

	/**
	 * 查询，返回指定类型的list集合
	 * @param query
	 * @param clasz
	 * @return
	 */
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public <T> List<T> fetchResults(String query, Class<?> clasz){
		List results = new ArrayList<>();
		QueryResult queryResult = influxDB.query(new Query(query, database));
		queryResult.getResults().forEach(result->{
			if (CollectionUtils.isNotEmpty(result.getSeries())) {
				result.getSeries().forEach(serial->{
					List<String> columns = serial.getColumns();
					int fieldSize = columns.size();
					serial.getValues().forEach(value->{
						Object obj = null;
						try {
							obj = clasz.newInstance();
							for(int i=0;i<fieldSize;i++){
								String fieldName = columns.get(i);
								// 当以max函数进行查询时，查询结果字段名会发生变化，这里处理一下
								if (fieldName.split("_").length > 1) {
									fieldName = fieldName.split("_")[1];
								}
								Field field = clasz.getDeclaredField(fieldName);
								field.setAccessible(true);
								Class<?> type = field.getType();
								if(type == float.class){
									field.set(obj, Float.valueOf(value.get(i).toString()));
								}else{
									field.set(obj, value.get(i));
								}
							}
						} catch (NoSuchFieldException | SecurityException | InstantiationException | IllegalAccessException e) {
							e.printStackTrace();
						}
						results.add(obj);
					});
				});
			}
		});
		return results;
	}

	/**
	 * 查询，返回所有的field key
	 */
	public List<String> fetchFieldKeys(){
		List<String> list = new ArrayList<>();
		String query = "SHOW field KEYS FROM sensorTemp";
		QueryResult queryResult = influxDB.query(new Query(query, database));
		queryResult.getResults().forEach(result->{
			if (CollectionUtils.isNotEmpty(result.getSeries())) {
				result.getSeries().forEach(serial->{
					serial.getValues().forEach(value->{
						list.add(value.get(0).toString());
					});
				});
			}
		});

		return list;
	}
}
