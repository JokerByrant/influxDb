package com.sxh.influxdb.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.scheduling.annotation.EnableAsync;
import org.springframework.scheduling.concurrent.ThreadPoolTaskExecutor;

import java.util.concurrent.Executor;

/**
 * 定时任务配置类
 * @author sxh
 * @date 2020/8/21
 */
@Configuration
@EnableAsync
public class AsyncConfig {
    private int corePoolSize = 5; // 核心线程数
    private int queueCapacity = 40; // 队列大小
    private int maxPoolSize = 12; // 最大线程数

    @Bean
    public Executor taskExecutor() {
        ThreadPoolTaskExecutor executor = new ThreadPoolTaskExecutor();
        executor.setCorePoolSize(corePoolSize);
        executor.setMaxPoolSize(maxPoolSize);
        executor.setQueueCapacity(queueCapacity);
        executor.initialize();
        return executor;
    }
}
