// ========================================
// GLOBAL VARIABLES
// ========================================
const photos = ['imagenes/DJI_20260606153815_0242_D.webp', 'imagenes/DJI_20260606153819_0243_D.webp', 'imagenes/DJI_20260606153822_0244_D.webp', 'imagenes/DJI_20260606153825_0245_D.webp', 'imagenes/DJI_20260606153911_0246_D.webp', 'imagenes/DJI_20260606153913_0247_D.webp', 'imagenes/DJI_20260606153947_0248_D.webp', 'imagenes/DJI_20260606153954_0249_D.webp', 'imagenes/DJI_20260606153959_0250_D.webp', 'imagenes/DJI_20260606154001_0251_D.webp', 'imagenes/DJI_20260606154053_0252_D.webp', 'imagenes/DJI_20260606154058_0253_D.webp', 'imagenes/DJI_20260606154101_0254_D.webp', 'imagenes/DJI_20260606154105_0255_D.webp', 'imagenes/DJI_20260606154107_0256_D.webp', 'imagenes/DJI_20260606154139_0257_D.webp', 'imagenes/DJI_20260606154153_0258_D.webp', 'imagenes/DJI_20260606154154_0259_D.webp', 'imagenes/DJI_20260606154306_0260_D.webp', 'imagenes/DJI_20260606154308_0261_D.webp', 'imagenes/DJI_20260606154330_0262_D.webp', 'imagenes/DJI_20260606154333_0263_D.webp', 'imagenes/DJI_20260606154337_0264_D.webp', 'imagenes/DJI_20260606154338_0265_D.webp', 'imagenes/DJI_20260606154341_0266_D.webp', 'imagenes/DJI_20260606154346_0267_D.webp', 'imagenes/DJI_20260606154351_0268_D.webp', 'imagenes/DJI_20260606154402_0269_D.webp', 'imagenes/DJI_20260606154403_0270_D.webp', 'imagenes/DJI_20260606154414_0271_D.webp', 'imagenes/DJI_20260606154416_0272_D.webp', 'imagenes/DJI_20260606154807_0277_D.webp', 'imagenes/DJI_20260606154808_0278_D.webp', 'imagenes/DJI_20260606174426_0279_D.webp', 'imagenes/DSC_2371.webp', 'imagenes/DSC_2372.webp', 'imagenes/DSC_2373.webp', 'imagenes/DSC_2374.webp', 'imagenes/DSC_2375.webp', 'imagenes/DSC_2376.webp', 'imagenes/DSC_2377.webp', 'imagenes/DSC_2378.webp', 'imagenes/DSC_2379.webp', 'imagenes/DSC_2380.webp', 'imagenes/DSC_2381.webp', 'imagenes/DSC_2382.webp', 'imagenes/DSC_2383.webp', 'imagenes/DSC_2386.webp', 'imagenes/DSC_2387.webp', 'imagenes/DSC_2388.webp', 'imagenes/DSC_2389.webp', 'imagenes/DSC_2390.webp', 'imagenes/DSC_2391.webp', 'imagenes/DSC_2392.webp', 'imagenes/DSC_2393.webp', 'imagenes/DSC_2394.webp', 'imagenes/DSC_2395.webp', 'imagenes/DSC_2396.webp', 'imagenes/DSC_2397.webp', 'imagenes/DSC_2398.webp', 'imagenes/DSC_2399.webp', 'imagenes/DSC_2400.webp', 'imagenes/DSC_2401.webp', 'imagenes/DSC_2402.webp', 'imagenes/DSC_2403.webp', 'imagenes/DSC_2404.webp', 'imagenes/DSC_2405.webp', 'imagenes/DSC_2406.webp', 'imagenes/DSC_2407.webp', 'imagenes/DSC_2408.webp', 'imagenes/DSC_2409.webp', 'imagenes/DSC_2410.webp', 'imagenes/DSC_2411.webp', 'imagenes/DSC_2412.webp', 'imagenes/DSC_2413.webp', 'imagenes/DSC_2414.webp', 'imagenes/DSC_2415.webp', 'imagenes/DSC_2416.webp', 'imagenes/DSC_2418.webp', 'imagenes/DSC_2419.webp', 'imagenes/DSC_2420.webp', 'imagenes/DSC_2421.webp', 'imagenes/DSC_2422.webp', 'imagenes/DSC_2424.webp', 'imagenes/DSC_2427.webp', 'imagenes/DSC_2428.webp', 'imagenes/DSC_2430.webp', 'imagenes/DSC_2431.webp', 'imagenes/DSC_2432.webp', 'imagenes/DSC_2433.webp', 'imagenes/DSC_2434.webp', 'imagenes/DSC_2435.webp', 'imagenes/DSC_2436.webp', 'imagenes/DSC_2437.webp', 'imagenes/DSC_2438.webp', 'imagenes/DSC_2439.webp', 'imagenes/DSC_2440.webp', 'imagenes/DSC_2441.webp', 'imagenes/DSC_2442.webp', 'imagenes/DSC_2443.webp', 'imagenes/DSC_2444.webp', 'imagenes/DSC_2445.webp', 'imagenes/DSC_2446.webp', 'imagenes/DSC_2447.webp', 'imagenes/DSC_2448.webp', 'imagenes/DSC_2449.webp', 'imagenes/DSC_2450.webp', 'imagenes/DSC_2451.webp', 'imagenes/DSC_2452.webp', 'imagenes/DSC_2453.webp', 'imagenes/DSC_2454.webp', 'imagenes/DSC_2455.webp', 'imagenes/DSC_2456.webp', 'imagenes/DSC_2457.webp', 'imagenes/DSC_2458.webp', 'imagenes/DSC_2459.webp', 'imagenes/DSC_2460.webp', 'imagenes/DSC_2461.webp', 'imagenes/DSC_2462.webp', 'imagenes/DSC_2463.webp', 'imagenes/DSC_2464.webp', 'imagenes/DSC_2465.webp', 'imagenes/DSC_2466.webp', 'imagenes/DSC_2467.webp', 'imagenes/DSC_2468.webp', 'imagenes/DSC_2469.webp', 'imagenes/DSC_2470.webp', 'imagenes/DSC_2471.webp', 'imagenes/DSC_2472.webp', 'imagenes/DSC_2473.webp', 'imagenes/DSC_2474.webp', 'imagenes/DSC_2475.webp', 'imagenes/DSC_2476.webp', 'imagenes/DSC_2477.webp', 'imagenes/DSC_2478.webp', 'imagenes/DSC_2479.webp', 'imagenes/DSC_2480.webp', 'imagenes/DSC_2481.webp', 'imagenes/DSC_2482.webp', 'imagenes/DSC_2484.webp', 'imagenes/DSC_2485.webp', 'imagenes/DSC_2486.webp', 'imagenes/DSC_2487.webp', 'imagenes/DSC_2488.webp', 'imagenes/DSC_2489.webp', 'imagenes/DSC_2490.webp', 'imagenes/DSC_2491.webp', 'imagenes/DSC_2492.webp', 'imagenes/DSC_2493.webp', 'imagenes/DSC_2494.webp', 'imagenes/DSC_2495.webp', 'imagenes/DSC_2496.webp', 'imagenes/DSC_2497.webp', 'imagenes/DSC_2498.webp', 'imagenes/DSC_2499.webp', 'imagenes/DSC_2500.webp', 'imagenes/DSC_2501.webp', 'imagenes/DSC_2502.webp', 'imagenes/DSC_2503.webp', 'imagenes/DSC_2504.webp', 'imagenes/DSC_2505.webp', 'imagenes/DSC_2506.webp', 'imagenes/DSC_2507.webp', 'imagenes/DSC_2508.webp', 'imagenes/DSC_2509.webp', 'imagenes/DSC_2510.webp', 'imagenes/DSC_2511.webp', 'imagenes/DSC_2512.webp', 'imagenes/DSC_2513.webp', 'imagenes/DSC_2514.webp', 'imagenes/DSC_2515.webp', 'imagenes/DSC_2516.webp', 'imagenes/DSC_2517.webp', 'imagenes/DSC_2518.webp', 'imagenes/DSC_2519.webp', 'imagenes/DSC_2520.webp', 'imagenes/DSC_2521.webp', 'imagenes/DSC_2522.webp', 'imagenes/DSC_2523.webp', 'imagenes/DSC_2524.webp', 'imagenes/DSC_2525.webp', 'imagenes/DSC_2526.webp', 'imagenes/DSC_2527.webp', 'imagenes/DSC_2528.webp', 'imagenes/DSC_2529.webp', 'imagenes/DSC_2530.webp', 'imagenes/DSC_2531.webp', 'imagenes/DSC_2532.webp', 'imagenes/DSC_2533.webp', 'imagenes/DSC_2534.webp', 'imagenes/DSC_2535.webp', 'imagenes/DSC_2536.webp', 'imagenes/DSC_2537.webp', 'imagenes/DSC_2538.webp', 'imagenes/DSC_2539.webp', 'imagenes/DSC_2540.webp', 'imagenes/DSC_2541.webp', 'imagenes/DSC_2542.webp', 'imagenes/DSC_2543.webp', 'imagenes/DSC_2544.webp', 'imagenes/DSC_2545.webp', 'imagenes/DSC_2546.webp', 'imagenes/DSC_2547.webp', 'imagenes/DSC_2548.webp', 'imagenes/DSC_2549.webp', 'imagenes/DSC_2550.webp', 'imagenes/DSC_2551.webp', 'imagenes/DSC_2552.webp', 'imagenes/DSC_2553.webp', 'imagenes/DSC_2554.webp', 'imagenes/DSC_2555.webp', 'imagenes/DSC_2556.webp', 'imagenes/DSC_2558.webp', 'imagenes/DSC_2559.webp', 'imagenes/DSC_2560.webp', 'imagenes/DSC_2561.webp', 'imagenes/DSC_2562.webp', 'imagenes/DSC_2563.webp', 'imagenes/DSC_2564.webp', 'imagenes/DSC_2565.webp', 'imagenes/DSC_2566.webp', 'imagenes/DSC_2567.webp', 'imagenes/DSC_2568.webp', 'imagenes/DSC_2569.webp', 'imagenes/DSC_2571.webp', 'imagenes/DSC_2572.webp', 'imagenes/DSC_2573.webp', 'imagenes/DSC_2574.webp', 'imagenes/DSC_2575.webp', 'imagenes/DSC_2576.webp', 'imagenes/DSC_2577.webp', 'imagenes/DSC_2578.webp', 'imagenes/DSC_2579.webp', 'imagenes/DSC_2580.webp', 'imagenes/DSC_2581.webp', 'imagenes/DSC_2582.webp', 'imagenes/DSC_2583.webp', 'imagenes/DSC_2584.webp', 'imagenes/DSC_2585.webp', 'imagenes/DSC_2586.webp', 'imagenes/DSC_2587.webp', 'imagenes/DSC_2588.webp', 'imagenes/DSC_2589.webp', 'imagenes/DSC_2590.webp', 'imagenes/DSC_2591.webp', 'imagenes/DSC_2592.webp', 'imagenes/DSC_2593.webp', 'imagenes/DSC_2594.webp', 'imagenes/DSC_2595.webp', 'imagenes/DSC_2596.webp', 'imagenes/DSC_2597.webp', 'imagenes/DSC_2598.webp', 'imagenes/DSC_2599.webp', 'imagenes/DSC_2600.webp', 'imagenes/DSC_2601.webp', 'imagenes/DSC_2602.webp', 'imagenes/DSC_2603.webp', 'imagenes/DSC_2604.webp', 'imagenes/DSC_2605.webp', 'imagenes/DSC_2606.webp', 'imagenes/DSC_2607.webp', 'imagenes/DSC_2608.webp', 'imagenes/DSC_2609.webp', 'imagenes/DSC_2610.webp', 'imagenes/DSC_2611.webp', 'imagenes/DSC_2612.webp', 'imagenes/DSC_2613.webp', 'imagenes/DSC_2614.webp', 'imagenes/DSC_2615.webp', 'imagenes/DSC_2616.webp', 'imagenes/DSC_2617.webp', 'imagenes/DSC_2618.webp', 'imagenes/DSC_2619.webp', 'imagenes/DSC_2620.webp', 'imagenes/DSC_2621.webp', 'imagenes/DSC_2622.webp', 'imagenes/DSC_2623.webp', 'imagenes/DSC_2624.webp', 'imagenes/DSC_2625.webp', 'imagenes/DSC_2626.webp', 'imagenes/DSC_2627.webp', 'imagenes/DSC_2628.webp', 'imagenes/DSC_2629.webp', 'imagenes/DSC_2630.webp', 'imagenes/DSC_2631.webp', 'imagenes/DSC_2632.webp', 'imagenes/DSC_2633.webp', 'imagenes/DSC_2634.webp', 'imagenes/DSC_2635.webp', 'imagenes/DSC_2636.webp', 'imagenes/DSC_2637.webp', 'imagenes/DSC_2638.webp', 'imagenes/DSC_2639.webp', 'imagenes/DSC_2641.webp', 'imagenes/DSC_2642.webp', 'imagenes/DSC_2643.webp', 'imagenes/DSC_2644.webp', 'imagenes/DSC_2645.webp', 'imagenes/DSC_2646.webp', 'imagenes/DSC_2647.webp', 'imagenes/DSC_2648.webp', 'imagenes/DSC_2649.webp', 'imagenes/DSC_2650.webp', 'imagenes/DSC_2651.webp', 'imagenes/DSC_2652.webp', 'imagenes/DSC_2653.webp', 'imagenes/DSC_2654.webp', 'imagenes/DSC_2655.webp', 'imagenes/DSC_2656.webp', 'imagenes/DSC_2657.webp', 'imagenes/DSC_2658.webp', 'imagenes/DSC_2659.webp', 'imagenes/DSC_2660.webp', 'imagenes/DSC_2661.webp', 'imagenes/DSC_2662.webp', 'imagenes/DSC_2663.webp', 'imagenes/DSC_2664.webp', 'imagenes/DSC_2665.webp', 'imagenes/DSC_2666.webp', 'imagenes/DSC_2667.webp', 'imagenes/DSC_2668.webp', 'imagenes/DSC_2669.webp', 'imagenes/DSC_2670.webp', 'imagenes/DSC_2671.webp', 'imagenes/DSC_2672.webp', 'imagenes/DSC_2673.webp', 'imagenes/DSC_2674.webp', 'imagenes/DSC_2675.webp', 'imagenes/DSC_2676.webp', 'imagenes/DSC_2677.webp', 'imagenes/DSC_2678.webp', 'imagenes/DSC_2679.webp', 'imagenes/DSC_2680.webp', 'imagenes/DSC_2681.webp', 'imagenes/DSC_2682.webp', 'imagenes/DSC_2683.webp', 'imagenes/DSC_2684.webp', 'imagenes/DSC_2685.webp', 'imagenes/DSC_2686.webp', 'imagenes/DSC_2687.webp', 'imagenes/DSC_2688.webp', 'imagenes/DSC_2689.webp', 'imagenes/DSC_2690.webp', 'imagenes/DSC_2691.webp', 'imagenes/DSC_2692.webp', 'imagenes/DSC_2693.webp', 'imagenes/DSC_2694.webp', 'imagenes/DSC_2695.webp', 'imagenes/DSC_2696.webp', 'imagenes/DSC_2697.webp', 'imagenes/DSC_2698.webp', 'imagenes/DSC_2699.webp', 'imagenes/DSC_2700.webp', 'imagenes/DSC_2701.webp', 'imagenes/DSC_2702.webp', 'imagenes/DSC_2703.webp', 'imagenes/DSC_2704.webp', 'imagenes/DSC_2705.webp', 'imagenes/DSC_2706.webp', 'imagenes/DSC_2707.webp', 'imagenes/DSC_2708.webp', 'imagenes/DSC_2709.webp', 'imagenes/DSC_2710.webp', 'imagenes/DSC_2711.webp', 'imagenes/DSC_2712.webp', 'imagenes/DSC_2713.webp', 'imagenes/DSC_2714.webp', 'imagenes/DSC_2717.webp', 'imagenes/DSC_2718.webp', 'imagenes/DSC_2719.webp', 'imagenes/DSC_2720.webp', 'imagenes/DSC_2721.webp', 'imagenes/DSC_2722.webp', 'imagenes/DSC_2723.webp', 'imagenes/DSC_2724.webp', 'imagenes/DSC_2725.webp', 'imagenes/DSC_2728.webp', 'imagenes/DSC_2729.webp', 'imagenes/DSC_2730.webp', 'imagenes/DSC_2731.webp', 'imagenes/DSC_2732.webp', 'imagenes/DSC_2734.webp', 'imagenes/DSC_2735.webp', 'imagenes/DSC_2736.webp', 'imagenes/DSC_2737.webp', 'imagenes/DSC_2738.webp', 'imagenes/DSC_2739.webp', 'imagenes/DSC_2740.webp', 'imagenes/DSC_2741.webp', 'imagenes/DSC_2742.webp', 'imagenes/DSC_2743.webp', 'imagenes/DSC_2744.webp', 'imagenes/DSC_2746.webp', 'imagenes/DSC_2747.webp', 'imagenes/DSC_2748.webp', 'imagenes/DSC_2749.webp', 'imagenes/DSC_2750.webp', 'imagenes/DSC_2751.webp', 'imagenes/DSC_2752.webp', 'imagenes/DSC_2756.webp', 'imagenes/DSC_2757.webp', 'imagenes/DSC_2758.webp', 'imagenes/DSC_2759.webp', 'imagenes/DSC_2760.webp', 'imagenes/DSC_2761.webp', 'imagenes/DSC_2762.webp', 'imagenes/DSC_2763.webp', 'imagenes/DSC_2764.webp', 'imagenes/DSC_2765.webp', 'imagenes/DSC_2767.webp', 'imagenes/DSC_2769.webp', 'imagenes/DSC_2770.webp', 'imagenes/DSC_2771.webp', 'imagenes/DSC_2772.webp', 'imagenes/DSC_2773.webp', 'imagenes/DSC_2774.webp', 'imagenes/DSC_2775.webp', 'imagenes/DSC_2776.webp', 'imagenes/DSC_2777.webp', 'imagenes/DSC_2778.webp', 'imagenes/DSC_2779.webp', 'imagenes/DSC_2780.webp', 'imagenes/DSC_2781.webp', 'imagenes/DSC_2782.webp', 'imagenes/DSC_2783.webp', 'imagenes/DSC_2784.webp', 'imagenes/DSC_2785.webp', 'imagenes/DSC_2786.webp', 'imagenes/DSC_2787.webp', 'imagenes/DSC_2788.webp', 'imagenes/DSC_2789.webp', 'imagenes/DSC_2790.webp', 'imagenes/DSC_2791.webp', 'imagenes/DSC_2792.webp', 'imagenes/DSC_2793.webp', 'imagenes/DSC_2794.webp', 'imagenes/DSC_2795.webp', 'imagenes/DSC_2796.webp', 'imagenes/DSC_2797.webp', 'imagenes/DSC_2798.webp', 'imagenes/DSC_2799.webp', 'imagenes/DSC_2800.webp', 'imagenes/DSC_2804.webp', 'imagenes/DSC_2805.webp', 'imagenes/DSC_2806.webp', 'imagenes/DSC_2807.webp', 'imagenes/DSC_2808.webp', 'imagenes/DSC_2809.webp', 'imagenes/DSC_2810.webp', 'imagenes/DSC_2811.webp', 'imagenes/DSC_2812.webp', 'imagenes/DSC_2813.webp', 'imagenes/DSC_2814.webp', 'imagenes/DSC_2815.webp', 'imagenes/DSC_2816.webp', 'imagenes/DSC_2817.webp', 'imagenes/DSC_2818.webp', 'imagenes/DSC_2819.webp', 'imagenes/DSC_2820.webp', 'imagenes/DSC_2821.webp', 'imagenes/DSC_2822.webp', 'imagenes/DSC_2823.webp', 'imagenes/DSC_2824.webp', 'imagenes/DSC_2825.webp', 'imagenes/DSC_2826.webp', 'imagenes/DSC_2827.webp', 'imagenes/DSC_2828.webp', 'imagenes/DSC_2829.webp', 'imagenes/DSC_2830.webp', 'imagenes/DSC_2831.webp', 'imagenes/DSC_2832.webp', 'imagenes/DSC_2833.webp', 'imagenes/DSC_2834.webp', 'imagenes/DSC_2835.webp', 'imagenes/DSC_2836.webp', 'imagenes/DSC_2837.webp', 'imagenes/DSC_2839.webp', 'imagenes/DSC_2840.webp', 'imagenes/DSC_2841.webp', 'imagenes/DSC_2842.webp', 'imagenes/DSC_2843.webp', 'imagenes/DSC_2844.webp', 'imagenes/DSC_2845.webp', 'imagenes/DSC_2846.webp', 'imagenes/DSC_2847.webp', 'imagenes/DSC_2848.webp', 'imagenes/DSC_2849.webp', 'imagenes/DSC_2850.webp', 'imagenes/DSC_2851.webp', 'imagenes/DSC_2852.webp', 'imagenes/DSC_2853.webp', 'imagenes/DSC_2854.webp', 'imagenes/DSC_2855.webp', 'imagenes/DSC_2856.webp', 'imagenes/DSC_2857.webp', 'imagenes/DSC_2858.webp', 'imagenes/DSC_2859.webp', 'imagenes/DSC_2860.webp', 'imagenes/DSC_2861.webp', 'imagenes/DSC_2862.webp', 'imagenes/DSC_2863.webp', 'imagenes/DSC_2864.webp', 'imagenes/DSC_2865.webp', 'imagenes/DSC_2866.webp', 'imagenes/DSC_2867.webp', 'imagenes/DSC_2868.webp', 'imagenes/DSC_2869.webp', 'imagenes/DSC_2870.webp', 'imagenes/DSC_2871.webp', 'imagenes/DSC_2872.webp', 'imagenes/DSC_2873.webp', 'imagenes/DSC_2874.webp', 'imagenes/DSC_2875.webp', 'imagenes/DSC_2876.webp', 'imagenes/DSC_2877.webp', 'imagenes/DSC_2878.webp', 'imagenes/DSC_2879.webp', 'imagenes/DSC_2880.webp', 'imagenes/DSC_2881.webp', 'imagenes/DSC_2882.webp', 'imagenes/DSC_2883.webp', 'imagenes/DSC_2884.webp', 'imagenes/DSC_2885.webp', 'imagenes/DSC_2886.webp', 'imagenes/DSC_2887.webp', 'imagenes/DSC_2888.webp', 'imagenes/DSC_2889.webp', 'imagenes/DSC_2890.webp', 'imagenes/DSC_2891.webp', 'imagenes/DSC_2892.webp', 'imagenes/DSC_2893.webp', 'imagenes/DSC_2894.webp', 'imagenes/DSC_2895.webp', 'imagenes/DSC_2896.webp', 'imagenes/DSC_2897.webp', 'imagenes/DSC_2898.webp', 'imagenes/DSC_2899.webp', 'imagenes/DSC_2900.webp', 'imagenes/DSC_2901.webp', 'imagenes/DSC_2902.webp', 'imagenes/DSC_2903.webp', 'imagenes/DSC_2904.webp', 'imagenes/DSC_2905.webp', 'imagenes/DSC_2906.webp', 'imagenes/DSC_2907.webp', 'imagenes/DSC_2908.webp', 'imagenes/DSC_2909.webp', 'imagenes/DSC_2910.webp', 'imagenes/DSC_2911.webp', 'imagenes/DSC_2912.webp', 'imagenes/DSC_2913.webp', 'imagenes/DSC_2914.webp', 'imagenes/DSC_2915.webp', 'imagenes/DSC_2916.webp', 'imagenes/DSC_2917.webp', 'imagenes/DSC_2918.webp', 'imagenes/DSC_2919.webp', 'imagenes/DSC_2920.webp', 'imagenes/DSC_2921.webp', 'imagenes/DSC_2922.webp', 'imagenes/DSC_2923.webp', 'imagenes/DSC_2924.webp', 'imagenes/DSC_2925.webp', 'imagenes/DSC_2926.webp', 'imagenes/DSC_2927.webp', 'imagenes/DSC_2928.webp', 'imagenes/DSC_2929.webp', 'imagenes/DSC_2930.webp', 'imagenes/DSC_2931.webp', 'imagenes/DSC_2932.webp', 'imagenes/DSC_2933.webp', 'imagenes/DSC_2934.webp', 'imagenes/DSC_2935.webp', 'imagenes/DSC_2936.webp', 'imagenes/DSC_2937.webp', 'imagenes/DSC_2938.webp', 'imagenes/DSC_2939.webp', 'imagenes/DSC_2940.webp', 'imagenes/DSC_2941.webp', 'imagenes/DSC_2942.webp', 'imagenes/DSC_2943.webp', 'imagenes/DSC_2944.webp', 'imagenes/DSC_2945.webp', 'imagenes/DSC_2946.webp', 'imagenes/DSC_2947.webp', 'imagenes/DSC_2948.webp', 'imagenes/DSC_2949.webp', 'imagenes/DSC_2950.webp', 'imagenes/DSC_2951.webp', 'imagenes/DSC_2952.webp', 'imagenes/DSC_2953.webp', 'imagenes/DSC_2954.webp', 'imagenes/DSC_2955.webp', 'imagenes/DSC_2956.webp', 'imagenes/DSC_2957.webp', 'imagenes/DSC_2958.webp', 'imagenes/DSC_2959.webp', 'imagenes/DSC_2960.webp', 'imagenes/DSC_2961.webp', 'imagenes/DSC_2962.webp', 'imagenes/DSC_2963.webp', 'imagenes/DSC_2964.webp', 'imagenes/DSC_2965.webp', 'imagenes/DSC_2966.webp', 'imagenes/DSC_2967.webp', 'imagenes/DSC_2968.webp', 'imagenes/DSC_2969.webp', 'imagenes/DSC_2970.webp', 'imagenes/DSC_2971.webp', 'imagenes/DSC_2972.webp', 'imagenes/DSC_2973.webp', 'imagenes/DSC_2974.webp', 'imagenes/DSC_2975.webp', 'imagenes/DSC_2976.webp', 'imagenes/DSC_2977.webp', 'imagenes/DSC_2978.webp', 'imagenes/DSC_2979.webp', 'imagenes/DSC_2980.webp', 'imagenes/DSC_2981.webp', 'imagenes/DSC_2982.webp', 'imagenes/DSC_2983.webp', 'imagenes/DSC_2984.webp', 'imagenes/DSC_2985.webp', 'imagenes/DSC_2986.webp', 'imagenes/DSC_2987.webp', 'imagenes/DSC_2988.webp', 'imagenes/DSC_2989.webp', 'imagenes/DSC_2990.webp', 'imagenes/DSC_2991.webp', 'imagenes/DSC_2992.webp', 'imagenes/DSC_2993.webp', 'imagenes/DSC_2994.webp', 'imagenes/DSC_2995.webp', 'imagenes/DSC_2996.webp', 'imagenes/DSC_2997.webp', 'imagenes/DSC_2998.webp', 'imagenes/DSC_2999.webp', 'imagenes/DSC_3000.webp', 'imagenes/DSC_3001.webp', 'imagenes/DSC_3002.webp', 'imagenes/DSC_3003.webp', 'imagenes/DSC_3004.webp', 'imagenes/DSC_3005.webp', 'imagenes/DSC_3006.webp', 'imagenes/DSC_3007.webp', 'imagenes/DSC_3008.webp', 'imagenes/DSC_3009.webp', 'imagenes/DSC_3010.webp', 'imagenes/DSC_3011.webp', 'imagenes/DSC_3012.webp', 'imagenes/DSC_3013.webp', 'imagenes/DSC_3014.webp', 'imagenes/DSC_3015.webp', 'imagenes/DSC_3016.webp', 'imagenes/DSC_3017.webp', 'imagenes/DSC_3018.webp', 'imagenes/DSC_3019.webp', 'imagenes/DSC_3020.webp', 'imagenes/DSC_3021.webp', 'imagenes/DSC_3022.webp', 'imagenes/DSC_3023.webp', 'imagenes/DSC_3024.webp', 'imagenes/DSC_3025.webp', 'imagenes/DSC_3026.webp', 'imagenes/DSC_3027.webp', 'imagenes/DSC_3028.webp', 'imagenes/DSC_3029.webp', 'imagenes/DSC_3030.webp', 'imagenes/DSC_3031.webp', 'imagenes/DSC_3032.webp', 'imagenes/DSC_3033.webp', 'imagenes/DSC_3034.webp', 'imagenes/DSC_3035.webp', 'imagenes/DSC_3036.webp', 'imagenes/DSC_3037.webp', 'imagenes/DSC_3038.webp', 'imagenes/DSC_3039.webp', 'imagenes/DSC_3040.webp', 'imagenes/DSC_3041.webp', 'imagenes/DSC_3042.webp', 'imagenes/DSC_3043.webp', 'imagenes/DSC_3044.webp', 'imagenes/DSC_3045.webp', 'imagenes/DSC_3046.webp', 'imagenes/DSC_3047.webp', 'imagenes/DSC_3048.webp', 'imagenes/DSC_3049.webp', 'imagenes/DSC_3050.webp', 'imagenes/DSC_3051.webp', 'imagenes/DSC_3052.webp', 'imagenes/DSC_3053.webp', 'imagenes/DSC_3054.webp', 'imagenes/DSC_3055.webp', 'imagenes/DSC_3056.webp', 'imagenes/DSC_3057.webp', 'imagenes/DSC_3058.webp', 'imagenes/DSC_3059.webp', 'imagenes/DSC_3060.webp', 'imagenes/DSC_3061.webp', 'imagenes/DSC_3062.webp', 'imagenes/DSC_3063.webp', 'imagenes/DSC_3064.webp', 'imagenes/DSC_3065.webp', 'imagenes/DSC_3066.webp', 'imagenes/DSC_3067.webp', 'imagenes/DSC_3068.webp', 'imagenes/DSC_3069.webp', 'imagenes/DSC_3070.webp', 'imagenes/DSC_3071.webp', 'imagenes/DSC_3072.webp', 'imagenes/DSC_3073.webp', 'imagenes/DSC_3074.webp', 'imagenes/DSC_3075.webp', 'imagenes/DSC_3076.webp', 'imagenes/DSC_3077.webp', 'imagenes/DSC_3078.webp', 'imagenes/DSC_3079.webp', 'imagenes/DSC_3080.webp', 'imagenes/DSC_3081.webp', 'imagenes/DSC_3082.webp', 'imagenes/DSC_3083.webp', 'imagenes/DSC_3084.webp', 'imagenes/DSC_3085.webp', 'imagenes/DSC_3086.webp', 'imagenes/DSC_3087.webp', 'imagenes/DSC_3088.webp', 'imagenes/DSC_3089.webp', 'imagenes/DSC_3090.webp', 'imagenes/DSC_3091.webp', 'imagenes/DSC_3092.webp', 'imagenes/DSC_3093.webp', 'imagenes/DSC_3094.webp', 'imagenes/DSC_3095.webp', 'imagenes/DSC_3096.webp', 'imagenes/DSC_3097.webp', 'imagenes/DSC_3098.webp', 'imagenes/DSC_3099.webp', 'imagenes/DSC_3100.webp', 'imagenes/DSC_3101.webp', 'imagenes/DSC_3102.webp', 'imagenes/DSC_3103.webp', 'imagenes/DSC_3104.webp', 'imagenes/DSC_3105.webp', 'imagenes/DSC_3106.webp', 'imagenes/DSC_3107.webp', 'imagenes/DSC_3108.webp', 'imagenes/DSC_3109.webp', 'imagenes/DSC_3110.webp', 'imagenes/DSC_3111.webp', 'imagenes/DSC_3112.webp', 'imagenes/DSC_3113.webp', 'imagenes/DSC_3114.webp', 'imagenes/DSC_3115.webp', 'imagenes/DSC_3116.webp', 'imagenes/DSC_3117.webp', 'imagenes/DSC_3118.webp', 'imagenes/DSC_3119.webp', 'imagenes/DSC_3120.webp', 'imagenes/DSC_3121.webp', 'imagenes/DSC_3122.webp', 'imagenes/DSC_3123.webp', 'imagenes/DSC_3124.webp', 'imagenes/DSC_3125.webp', 'imagenes/DSC_3126.webp', 'imagenes/DSC_3127.webp', 'imagenes/DSC_3128.webp', 'imagenes/DSC_3129.webp', 'imagenes/DSC_3130.webp', 'imagenes/DSC_3131.webp', 'imagenes/DSC_3132.webp', 'imagenes/DSC_3133.webp', 'imagenes/DSC_3134.webp', 'imagenes/DSC_3135.webp', 'imagenes/DSC_3136.webp', 'imagenes/DSC_3137.webp', 'imagenes/DSC_3138.webp', 'imagenes/DSC_3139.webp', 'imagenes/DSC_3140.webp', 'imagenes/DSC_3141.webp', 'imagenes/DSC_3142.webp', 'imagenes/DSC_3143.webp', 'imagenes/DSC_3144.webp', 'imagenes/DSC_3145.webp', 'imagenes/DSC_3146.webp', 'imagenes/DSC_3147.webp', 'imagenes/DSC_3148.webp', 'imagenes/DSC_3149.webp', 'imagenes/DSC_3150.webp', 'imagenes/DSC_3151.webp', 'imagenes/DSC_3152.webp', 'imagenes/DSC_3153.webp', 'imagenes/DSC_3154.webp', 'imagenes/DSC_3155.webp', 'imagenes/DSC_3156.webp', 'imagenes/DSC_3157.webp', 'imagenes/DSC_3158.webp', 'imagenes/DSC_3159.webp', 'imagenes/DSC_3160.webp', 'imagenes/DSC_3161.webp', 'imagenes/DSC_3162.webp', 'imagenes/DSC_3163.webp', 'imagenes/DSC_3164.webp', 'imagenes/DSC_3165.webp', 'imagenes/DSC_3166.webp', 'imagenes/DSC_3167.webp', 'imagenes/DSC_3168.webp', 'imagenes/DSC_3169.webp', 'imagenes/DSC_3170.webp', 'imagenes/DSC_3171.webp', 'imagenes/DSC_3172.webp', 'imagenes/DSC_3173.webp', 'imagenes/DSC_3174.webp', 'imagenes/DSC_3175.webp', 'imagenes/DSC_3176.webp', 'imagenes/DSC_3177.webp', 'imagenes/DSC_3178.webp', 'imagenes/DSC_3179.webp', 'imagenes/DSC_3180.webp', 'imagenes/DSC_3181.webp', 'imagenes/DSC_3182.webp', 'imagenes/DSC_3183.webp', 'imagenes/DSC_3184.webp', 'imagenes/DSC_3185.webp', 'imagenes/DSC_3186.webp', 'imagenes/DSC_3187.webp', 'imagenes/DSC_3188.webp', 'imagenes/DSC_3189.webp', 'imagenes/DSC_3190.webp', 'imagenes/DSC_3191.webp', 'imagenes/DSC_3192.webp', 'imagenes/DSC_3193.webp', 'imagenes/DSC_3194.webp', 'imagenes/DSC_3195.webp', 'imagenes/DSC_3196.webp', 'imagenes/DSC_3197.webp', 'imagenes/DSC_3198.webp', 'imagenes/DSC_3199.webp', 'imagenes/DSC_3200.webp', 'imagenes/DSC_3201.webp', 'imagenes/DSC_3202.webp', 'imagenes/DSC_3203.webp', 'imagenes/DSC_3204.webp', 'imagenes/DSC_3205.webp', 'imagenes/DSC_3206.webp', 'imagenes/DSC_3207.webp', 'imagenes/DSC_3208.webp', 'imagenes/DSC_3209.webp', 'imagenes/DSC_3210.webp', 'imagenes/DSC_3211.webp', 'imagenes/DSC_3212.webp', 'imagenes/DSC_3213.webp', 'imagenes/DSC_3214.webp', 'imagenes/DSC_3215.webp', 'imagenes/DSC_3216.webp', 'imagenes/DSC_3217.webp', 'imagenes/DSC_3218.webp', 'imagenes/DSC_3219.webp', 'imagenes/DSC_3220.webp', 'imagenes/DSC_3221.webp', 'imagenes/DSC_3222.webp', 'imagenes/DSC_3223.webp', 'imagenes/DSC_3224.webp', 'imagenes/DSC_3225.webp', 'imagenes/DSC_3226.webp', 'imagenes/DSC_3227.webp', 'imagenes/DSC_3228.webp', 'imagenes/DSC_3229.webp', 'imagenes/DSC_3230.webp', 'imagenes/DSC_3231.webp', 'imagenes/DSC_3232.webp', 'imagenes/DSC_3233.webp', 'imagenes/DSC_3234.webp', 'imagenes/DSC_3235.webp', 'imagenes/DSC_3236.webp', 'imagenes/DSC_3237.webp', 'imagenes/DSC_3238.webp', 'imagenes/DSC_3239.webp', 'imagenes/DSC_3240.webp', 'imagenes/DSC_3241.webp', 'imagenes/DSC_3242.webp', 'imagenes/DSC_3243.webp', 'imagenes/DSC_3244.webp', 'imagenes/DSC_3245.webp', 'imagenes/DSC_3246.webp', 'imagenes/DSC_3247.webp', 'imagenes/DSC_3248.webp', 'imagenes/DSC_3249.webp', 'imagenes/DSC_3250.webp', 'imagenes/DSC_3251.webp', 'imagenes/DSC_3252.webp', 'imagenes/DSC_3253.webp', 'imagenes/DSC_3254.webp', 'imagenes/DSC_3255.webp', 'imagenes/DSC_3256.webp', 'imagenes/DSC_3257.webp', 'imagenes/DSC_3258.webp', 'imagenes/DSC_3259.webp', 'imagenes/DSC_3260.webp', 'imagenes/DSC_3261.webp', 'imagenes/DSC_3262.webp', 'imagenes/DSC_3263.webp', 'imagenes/DSC_3264.webp', 'imagenes/DSC_3265.webp', 'imagenes/DSC_3266.webp', 'imagenes/DSC_3267.webp', 'imagenes/DSC_3268.webp', 'imagenes/DSC_3269.webp', 'imagenes/DSC_3270.webp', 'imagenes/DSC_3271.webp', 'imagenes/DSC_3272.webp', 'imagenes/DSC_3273.webp', 'imagenes/DSC_3274.webp', 'imagenes/DSC_3275.webp', 'imagenes/DSC_3276.webp', 'imagenes/DSC_3277.webp', 'imagenes/DSC_3278.webp', 'imagenes/DSC_3279.webp', 'imagenes/DSC_3280.webp', 'imagenes/DSC_3281.webp', 'imagenes/DSC_3282.webp', 'imagenes/DSC_3283.webp', 'imagenes/DSC_3284.webp', 'imagenes/DSC_3285.webp', 'imagenes/DSC_3286.webp', 'imagenes/DSC_3287.webp', 'imagenes/DSC_3288.webp', 'imagenes/DSC_3289.webp', 'imagenes/DSC_3290.webp', 'imagenes/DSC_3291.webp', 'imagenes/DSC_3292.webp', 'imagenes/DSC_3293.webp', 'imagenes/DSC_3294.webp', 'imagenes/DSC_3295.webp', 'imagenes/DSC_3296.webp', 'imagenes/DSC_3297.webp', 'imagenes/DSC_3298.webp', 'imagenes/DSC_3299.webp', 'imagenes/DSC_3300.webp', 'imagenes/DSC_3301.webp', 'imagenes/DSC_3302.webp', 'imagenes/DSC_3303.webp', 'imagenes/DSC_3304.webp', 'imagenes/DSC_3305.webp', 'imagenes/DSC_3306.webp', 'imagenes/DSC_3307.webp', 'imagenes/DSC_3308.webp', 'imagenes/DSC_3309.webp', 'imagenes/DSC_3310.webp', 'imagenes/DSC_3311.webp', 'imagenes/DSC_3312.webp', 'imagenes/DSC_3313.webp', 'imagenes/DSC_3314.webp', 'imagenes/DSC_3315.webp', 'imagenes/DSC_3321.webp', 'imagenes/DSC_3322.webp', 'imagenes/DSC_3323.webp', 'imagenes/DSC_3324.webp', 'imagenes/DSC_3325.webp', 'imagenes/DSC_3326.webp', 'imagenes/DSC_3327.webp', 'imagenes/DSC_3328.webp', 'imagenes/DSC_3329.webp', 'imagenes/DSC_3330.webp', 'imagenes/DSC_3331.webp', 'imagenes/DSC_3332.webp', 'imagenes/DSC_3333.webp', 'imagenes/DSC_3334.webp', 'imagenes/DSC_3335.webp', 'imagenes/DSC_3336.webp', 'imagenes/DSC_3337.webp', 'imagenes/DSC_3338.webp', 'imagenes/DSC_3339.webp', 'imagenes/DSC_3340.webp', 'imagenes/DSC_3341.webp', 'imagenes/DSC_3342.webp', 'imagenes/DSC_3343.webp', 'imagenes/DSC_3344.webp', 'imagenes/DSC_3345.webp', 'imagenes/DSC_3346.webp', 'imagenes/DSC_3347.webp', 'imagenes/DSC_3348.webp', 'imagenes/DSC_3349.webp', 'imagenes/DSC_3350.webp', 'imagenes/DSC_3351.webp', 'imagenes/DSC_3352.webp', 'imagenes/DSC_3353.webp', 'imagenes/DSC_3354.webp', 'imagenes/DSC_3355.webp', 'imagenes/DSC_3356.webp', 'imagenes/DSC_3357.webp', 'imagenes/DSC_3358.webp', 'imagenes/DSC_3359.webp', 'imagenes/DSC_3360.webp', 'imagenes/DSC_3361.webp', 'imagenes/DSC_3362.webp', 'imagenes/DSC_3363.webp', 'imagenes/DSC_3364.webp', 'imagenes/DSC_3365.webp', 'imagenes/DSC_3366.webp', 'imagenes/DSC_3369.webp', 'imagenes/DSC_3370.webp', 'imagenes/DSC_3371.webp', 'imagenes/DSC_3372.webp', 'imagenes/DSC_3373.webp', 'imagenes/DSC_3374.webp', 'imagenes/DSC_3375.webp', 'imagenes/DSC_3376.webp', 'imagenes/DSC_3377.webp', 'imagenes/DSC_3378.webp', 'imagenes/DSC_3379.webp', 'imagenes/DSC_3380.webp', 'imagenes/DSC_3381.webp', 'imagenes/DSC_3382.webp', 'imagenes/DSC_3383.webp', 'imagenes/DSC_3384.webp', 'imagenes/DSC_3385.webp', 'imagenes/DSC_3386.webp', 'imagenes/DSC_3387.webp', 'imagenes/DSC_3388.webp', 'imagenes/DSC_3389.webp', 'imagenes/DSC_3390.webp', 'imagenes/DSC_3391.webp', 'imagenes/DSC_3392.webp', 'imagenes/DSC_3393.webp', 'imagenes/DSC_3394.webp', 'imagenes/DSC_3396.webp', 'imagenes/DSC_3397.webp', 'imagenes/DSC_3398.webp', 'imagenes/DSC_3399.webp', 'imagenes/DSC_3400.webp', 'imagenes/DSC_3401.webp', 'imagenes/DSC_3402.webp', 'imagenes/DSC_3403.webp', 'imagenes/DSC_3404.webp', 'imagenes/DSC_3405.webp', 'imagenes/DSC_3406.webp', 'imagenes/DSC_3407.webp', 'imagenes/DSC_3408.webp', 'imagenes/DSC_3409.webp', 'imagenes/DSC_3410.webp', 'imagenes/DSC_3411.webp', 'imagenes/DSC_3412.webp', 'imagenes/DSC_3413.webp', 'imagenes/DSC_3414.webp', 'imagenes/DSC_3415.webp', 'imagenes/DSC_3416.webp', 'imagenes/DSC_3417.webp', 'imagenes/DSC_3418.webp', 'imagenes/DSC_3419.webp', 'imagenes/DSC_3420.webp', 'imagenes/DSC_3421.webp', 'imagenes/DSC_3422.webp', 'imagenes/DSC_3423.webp', 'imagenes/DSC_3424.webp', 'imagenes/DSC_3425.webp', 'imagenes/DSC_3426.webp', 'imagenes/DSC_3427.webp', 'imagenes/DSC_3428.webp', 'imagenes/DSC_3431.webp', 'imagenes/DSC_3432.webp', 'imagenes/DSC_3433.webp', 'imagenes/DSC_3434.webp', 'imagenes/DSC_3435.webp', 'imagenes/DSC_3436.webp', 'imagenes/DSC_3437.webp', 'imagenes/DSC_3438.webp', 'imagenes/DSC_3439.webp', 'imagenes/DSC_3440.webp', 'imagenes/DSC_3441.webp', 'imagenes/DSC_3442.webp', 'imagenes/DSC_3443.webp', 'imagenes/DSC_3444.webp', 'imagenes/DSC_3445.webp', 'imagenes/DSC_3446.webp', 'imagenes/DSC_3447.webp', 'imagenes/DSC_3448.webp', 'imagenes/DSC_3449.webp', 'imagenes/DSC_3450.webp', 'imagenes/DSC_3451.webp', 'imagenes/DSC_3452.webp', 'imagenes/DSC_3453.webp', 'imagenes/DSC_3454.webp', 'imagenes/DSC_3455.webp', 'imagenes/DSC_3456.webp', 'imagenes/DSC_3457.webp', 'imagenes/DSC_3458.webp', 'imagenes/DSC_3459.webp', 'imagenes/DSC_3460.webp', 'imagenes/DSC_3461.webp', 'imagenes/DSC_3462.webp', 'imagenes/DSC_3463.webp', 'imagenes/DSC_3464.webp', 'imagenes/DSC_3465.webp', 'imagenes/DSC_3466.webp', 'imagenes/DSC_3467.webp', 'imagenes/DSC_3468.webp', 'imagenes/DSC_3469.webp', 'imagenes/DSC_3470.webp', 'imagenes/DSC_3471.webp', 'imagenes/DSC_3472.webp', 'imagenes/DSC_3473.webp', 'imagenes/DSC_3474.webp', 'imagenes/DSC_3475.webp', 'imagenes/DSC_3476.webp', 'imagenes/DSC_3477.webp', 'imagenes/DSC_3478.webp', 'imagenes/DSC_3479.webp', 'imagenes/DSC_3480.webp', 'imagenes/DSC_3481.webp', 'imagenes/DSC_3482.webp', 'imagenes/DSC_3483.webp', 'imagenes/DSC_3484.webp', 'imagenes/DSC_3485.webp', 'imagenes/DSC_3486.webp', 'imagenes/DSC_3487.webp', 'imagenes/DSC_3488.webp', 'imagenes/DSC_3489.webp', 'imagenes/DSC_3490.webp', 'imagenes/DSC_3491.webp', 'imagenes/DSC_3492.webp', 'imagenes/DSC_3493.webp', 'imagenes/DSC_3494.webp', 'imagenes/DSC_3495.webp', 'imagenes/DSC_3496.webp', 'imagenes/DSC_3497.webp', 'imagenes/DSC_3498.webp', 'imagenes/DSC_3499.webp', 'imagenes/DSC_3500.webp', 'imagenes/DSC_3501.webp', 'imagenes/DSC_3502.webp', 'imagenes/DSC_3503.webp'];
const STORAGE_KEY = 'xv_melina_estefania_jaime_photo_selections';
const LIMITES = {
    ampliacion: null,
    impresion: null,
    invitacion: null
};
let photoSelections = {};
let currentPhotoIndex = null;
let currentFilter = 'all';
const PAGE_SIZE = 60;
const PAGE_KEY = 'xv_melina_estefania_jaime_page';
let currentPage = parseInt(sessionStorage.getItem(PAGE_KEY) || '0', 10);

// Thumbnail helper: convierte 'imagenes/foto.webp' -> 'imagenes/thumb/foto.webp'
function getThumbPath(fullPath) {
    return fullPath.replace('imagenes/', 'imagenes/thumb/');
}

// ========================================
// LOCAL STORAGE FUNCTIONS
// ========================================
function loadSelections() {
    try {
        const saved = localStorage.getItem(STORAGE_KEY);
        if (saved) {
            photoSelections = JSON.parse(saved);
        }
    } catch (error) {
        console.error('Error cargando selecciones:', error);
        photoSelections = {};
    }
}

function normalizeSelection(selection) {
    return {
        ampliacion: !!(selection && selection.ampliacion),
        impresion: !!(selection && selection.impresion),
        invitacion: !!(selection && selection.invitacion),
        descartada: !!(selection && selection.descartada)
    };
}

function hasAnySelection(selection) {
    const normalized = normalizeSelection(selection);
    return normalized.ampliacion || normalized.impresion || normalized.invitacion || normalized.descartada;
}

function selectionsAreEqual(a, b) {
    const left = normalizeSelection(a);
    const right = normalizeSelection(b);
    return left.ampliacion === right.ampliacion
        && left.impresion === right.impresion
        && left.invitacion === right.invitacion
        && left.descartada === right.descartada;
}

function saveSelections(options) {
    const shouldSync = !options || options.sync !== false;
    try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(photoSelections));
    } catch (error) {
        showToast('Error al guardar. Verifica el espacio del navegador.', 'error');
    }
    if (shouldSync && typeof sbUpsertSelections === 'function') {
        sbUpsertSelections().catch(function(e) { console.warn('[Supabase] Sync:', e.message); });
    }
}

function clearAllSelections() {
    if (confirm('¿Estás seguro de que quieres borrar TODAS las selecciones? Esta acción no se puede deshacer.')) {
        photoSelections = {};
        try { localStorage.setItem(STORAGE_KEY, '{}'); } catch(e) {}
        if (typeof sbDeleteAll === 'function') {
            sbDeleteAll().catch(function(e) { console.warn('[Supabase] DeleteAll:', e.message); });
        }
        renderGallery();
        updateStats();
        updateFilterButtons();
        showToast('Todas las selecciones han sido eliminadas', 'success');
    }
}

// ========================================
// STATS FUNCTIONS
// ========================================
function getStats() {
    const stats = {
        ampliacion: 0,
        impresion: 0,
        invitacion: 0,
        descartada: 0,
        sinClasificar: photos.length
    };

    Object.values(photoSelections).forEach(selection => {
        if (selection.ampliacion) stats.ampliacion++;
        if (selection.impresion) stats.impresion++;
        if (selection.invitacion) stats.invitacion++;
        if (selection.descartada) stats.descartada++;
    });

    stats.sinClasificar = photos.length - Object.keys(photoSelections).length;

    return stats;
}

function updateStats() {
    const stats = getStats();

    document.getElementById('countAmpliacion').textContent = stats.ampliacion;
    document.getElementById('countImpresion').textContent = stats.impresion;
    document.getElementById('countInvitacion').textContent = stats.invitacion;
    document.getElementById('countDescartada').textContent = stats.descartada;
    document.getElementById('countSinClasificar').textContent = stats.sinClasificar;
}

// ========================================
// GALLERY FUNCTIONS
// ========================================
function getTotalPages() {
    return Math.ceil(photos.length / PAGE_SIZE);
}

function getPagePhotos() {
    const start = currentPage * PAGE_SIZE;
    return { start, end: Math.min(start + PAGE_SIZE, photos.length) };
}

function goToPage(page) {
    const total = getTotalPages();
    if (page < 0) page = 0;
    if (page >= total) page = total - 1;
    currentPage = page;
    try { sessionStorage.setItem(PAGE_KEY, String(currentPage)); } catch(e) {}
    renderGallery();
    updateStats();
    updateFilterButtons();
    window.scrollTo({ top: document.querySelector('.gallery-section').offsetTop - 10, behavior: 'smooth' });
}

function renderPagination(container) {
    const totalPages = getTotalPages();
    if (totalPages <= 1) return;

    const { start, end } = getPagePhotos();
    const nav = document.createElement('div');
    nav.className = 'pagination-nav';
    nav.style.cssText = 'grid-column:1/-1;display:flex;align-items:center;justify-content:center;gap:8px;flex-wrap:wrap;padding:16px 0;';

    const btnStyle = 'border:none;padding:10px 18px;border-radius:25px;font-size:.95rem;font-weight:600;cursor:pointer;font-family:Lato,sans-serif;transition:all .2s;';

    if (currentPage > 0) {
        const prev = document.createElement('button');
        prev.textContent = '← Anterior';
        prev.style.cssText = btnStyle + 'background:#8b6f47;color:#fff;';
        prev.addEventListener('click', () => goToPage(currentPage - 1));
        nav.appendChild(prev);
    }

    const maxBtns = 7;
    let pageStart = Math.max(0, currentPage - 3);
    let pageEnd = Math.min(totalPages, pageStart + maxBtns);
    if (pageEnd - pageStart < maxBtns) pageStart = Math.max(0, pageEnd - maxBtns);

    for (let i = pageStart; i < pageEnd; i++) {
        const btn = document.createElement('button');
        btn.textContent = i + 1;
        const isActive = i === currentPage;
        btn.style.cssText = btnStyle + (isActive
            ? 'background:#d4a373;color:#fff;transform:scale(1.1);'
            : 'background:#eee;color:#333;');
        if (!isActive) btn.addEventListener('click', () => goToPage(i));
        nav.appendChild(btn);
    }

    if (currentPage < totalPages - 1) {
        const next = document.createElement('button');
        next.textContent = 'Siguiente →';
        next.style.cssText = btnStyle + 'background:#8b6f47;color:#fff;';
        next.addEventListener('click', () => goToPage(currentPage + 1));
        nav.appendChild(next);
    }

    const info = document.createElement('div');
    info.style.cssText = 'grid-column:1/-1;text-align:center;color:#888;font-size:.85rem;padding:4px 0;';
    info.textContent = `Fotos ${start + 1}–${end} de ${photos.length}`;

    container.appendChild(info);
    container.appendChild(nav);
}

function renderGallery() {
    const grid = document.getElementById('photosGrid');
    if (!grid) return;
    const topPag = document.getElementById('paginationTop');
    const bottomPag = document.getElementById('paginationBottom');

    grid.innerHTML = '';
    if (topPag) topPag.innerHTML = '';
    if (bottomPag) bottomPag.innerHTML = '';

    if (photos.length === 0) {
        grid.innerHTML = '<div class="no-photos-message">No hay fotos disponibles aún.</div>';
        return;
    }

    // Validar página actual
    const totalPages = getTotalPages();
    if (currentPage >= totalPages) currentPage = totalPages - 1;
    if (currentPage < 0) currentPage = 0;

    // Paginación arriba
    if (topPag) renderPagination(topPag);

    const { start, end } = getPagePhotos();

    for (let index = start; index < end; index++) {
        const photo = photos[index];
        const selection = photoSelections[index] || {};
        const hasAny = selection.ampliacion || selection.impresion || selection.invitacion || selection.descartada;

        const card = document.createElement('div');
        card.className = 'photo-card';
        card.dataset.index = index;

        if (selection.descartada) {
            card.classList.add('has-descartada');
        } else {
            const categories = [];
            if (selection.ampliacion) categories.push('ampliacion');
            if (selection.impresion) categories.push('impresion');
            if (selection.invitacion) categories.push('invitacion');

            if (categories.length > 1) {
                card.classList.add('has-multiple');
            } else if (categories.length === 1) {
                card.classList.add(`has-${categories[0]}`);
            }
        }

        let badgesHTML = '';
        if (hasAny) {
            badgesHTML = '<div class="photo-badges">';
            if (selection.ampliacion) badgesHTML += '<span class="badge badge-ampliacion">🖼️ Ampliación</span>';
            if (selection.impresion) badgesHTML += '<span class="badge badge-impresion">📸 Impresión</span>';
            if (selection.invitacion) badgesHTML += '<span class="badge badge-invitacion">💌 Invitación</span>';
            if (selection.descartada) badgesHTML += '<span class="badge badge-descartada">❌ Descartada</span>';
            badgesHTML += '</div>';
        }

        const displayNumber = `Foto ${index + 1}`;
        const mediaHTML = `
            <div class="photo-image-container">
                <img src="${getThumbPath(photo)}" alt="${displayNumber}" loading="lazy">
            </div>
        `;

        card.innerHTML = `
            ${mediaHTML}
            <div class="photo-number">${displayNumber}</div>
            ${badgesHTML}
        `;

        card.addEventListener('click', () => openModal(index));
        grid.appendChild(card);
    }

    // Paginación abajo
    if (bottomPag) renderPagination(bottomPag);
    applyFilter();
}

// ========================================
// FILTER FUNCTIONS
// ========================================
function applyFilter() {
    const cards = document.querySelectorAll('.photo-card');

    cards.forEach(card => {
        const index = parseInt(card.dataset.index);
        const selection = photoSelections[index] || {};
        let show = false;

        switch (currentFilter) {
            case 'all':
                show = true;
                break;
            case 'ampliacion':
                show = selection.ampliacion === true;
                break;
            case 'impresion':
                show = selection.impresion === true;
                break;
            case 'invitacion':
                show = selection.invitacion === true;
                break;
            case 'descartada':
                show = selection.descartada === true;
                break;
            case 'sin-clasificar':
                show = !selection.ampliacion && !selection.impresion && !selection.invitacion && !selection.descartada;
                break;
        }

        card.classList.toggle('hidden', !show);
    });
}

function setFilter(filter) {
    currentFilter = filter;
    applyFilter();

    document.querySelectorAll('.btn-filter').forEach(btn => {
        btn.classList.remove('active');
    });

    const activeBtn = document.querySelector(`[data-filter="${filter}"]`);
    if (activeBtn) {
        activeBtn.classList.add('active');
    }
}

function updateFilterButtons() {
    const stats = getStats();

    document.getElementById('btnFilterAll').textContent = `Todas (${photos.length})`;
    document.getElementById('btnFilterAmpliacion').textContent = `Ampliación (${stats.ampliacion})`;
    document.getElementById('btnFilterImpresion').textContent = `Impresión (${stats.impresion})`;
    document.getElementById('btnFilterInvitacion').textContent = `Invitación (${stats.invitacion})`;
    document.getElementById('btnFilterDescartada').textContent = `Descartadas (${stats.descartada})`;
    document.getElementById('btnFilterSinClasificar').textContent = `Sin Clasificar (${stats.sinClasificar})`;
}

// ========================================
// MODAL FUNCTIONS
// ========================================
function openModal(index) {
    currentPhotoIndex = index;
    const modal = document.getElementById('photoModal');
    const modalImageContainer = document.querySelector('.modal-image-container');
    const modalPhotoNumber = document.getElementById('modalPhotoNumber');

    const photo = photos[index];
    const displayNumber = `Foto ${index + 1}`;

    modalPhotoNumber.textContent = displayNumber;

    modalImageContainer.innerHTML = `
        <img id="modalImage" src="${photo}" alt="${displayNumber}">
        <div class="modal-photo-number" id="modalPhotoNumber">${displayNumber}</div>
    `;

    const selection = photoSelections[index] || {};

    document.querySelectorAll('.option-btn').forEach(btn => {
        const category = btn.dataset.category;
        btn.classList.toggle('selected', selection[category] === true);
    });

    modal.classList.add('active');
    updateNavigationButtons();
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    saveCurrentSelections();
    renderGallery();
    const modal = document.getElementById('photoModal');
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
    currentPhotoIndex = null;
}

// ========================================
// NAVIGATION FUNCTIONS
// ========================================
function navigatePhoto(direction) {
    if (currentPhotoIndex === null) return;

    let newIndex;
    if (direction === "next") {
        newIndex = currentPhotoIndex + 1;
        if (newIndex >= photos.length) {
            newIndex = 0;
        }
    } else if (direction === "prev") {
        newIndex = currentPhotoIndex - 1;
        if (newIndex < 0) {
            newIndex = photos.length - 1;
        }
    }

    saveCurrentSelections();
    openModal(newIndex);
}

function saveCurrentSelections() {
    if (currentPhotoIndex === null) return;

    const selectedCategories = {};
    document.querySelectorAll(".option-btn").forEach(btn => {
        const category = btn.dataset.category;
        selectedCategories[category] = btn.classList.contains("selected");
    });

    persistPhotoSelection(currentPhotoIndex, selectedCategories);
    updateStats();
    updateFilterButtons();
}

function persistPhotoSelection(index, selection, options) {
    const previousSelection = photoSelections[index] || {};
    const normalized = normalizeSelection(selection);
    const changed = !selectionsAreEqual(previousSelection, normalized);
    const silent = options && options.silent;

    if (!changed) {
        saveSelections({ sync: false });
        return false;
    }

    if (hasAnySelection(normalized)) {
        photoSelections[index] = normalized;
        saveSelections({ sync: false });
        if (typeof sbSaveSelection === 'function') {
            sbSaveSelection(index, normalized).catch(function(e) { console.warn('[Supabase] Save:', e.message); });
        } else if (typeof sbUpsertSelections === 'function') {
            sbUpsertSelections().catch(function(e) { console.warn('[Supabase] Sync:', e.message); });
        }
    } else {
        delete photoSelections[index];
        saveSelections({ sync: false });
        if (typeof sbDeleteSelection === 'function') {
            sbDeleteSelection(index).catch(function(e) { console.warn('[Supabase] Delete:', e.message); });
        }
    }

    if (!silent) showToast('Selección actualizada', 'success');
    return true;
}

function updateNavigationButtons() {
    const btnPrev = document.getElementById("btnPrevPhoto");
    const btnNext = document.getElementById("btnNextPhoto");

    if (btnPrev && btnNext) {
        btnPrev.disabled = false;
        btnNext.disabled = false;
    }
}

function saveModalSelection() {
    if (currentPhotoIndex === null) return;

    const selectedCategories = {};
    document.querySelectorAll('.option-btn').forEach(btn => {
        const category = btn.dataset.category;
        selectedCategories[category] = btn.classList.contains('selected');
    });

    persistPhotoSelection(currentPhotoIndex, selectedCategories, { silent: true });
    renderGallery();
    updateStats();
    updateFilterButtons();
    closeModal();
    showToast('Selección guardada correctamente', 'success');
}

function deleteCurrentSelection() {
    if (currentPhotoIndex === null) return;
    const displayNumber = currentPhotoIndex + 1;
    if (!confirm('¿Borrar la selección de la foto ' + displayNumber + '? Esta acción se sincronizará con todos los dispositivos.')) {
        return;
    }
    persistPhotoSelection(currentPhotoIndex, {}, { silent: true });
    document.querySelectorAll('.option-btn').forEach(btn => btn.classList.remove('selected'));
    renderGallery();
    updateStats();
    updateFilterButtons();
    closeModal();
    showToast('Selección borrada', 'success');
}

// ========================================
// EXPORT FUNCTIONS
// ========================================
function exportToJSON() {
    const exportData = {
        evento: 'XV Años — Melina Estefania Jaime',
        fecha_exportacion: new Date().toISOString(),
        total_fotos: photos.length,
        estadisticas: getStats(),
        selecciones: []
    };

    photos.forEach((photo, index) => {
        const selection = photoSelections[index];
        if (selection && (selection.ampliacion || selection.impresion || selection.invitacion || selection.descartada)) {
            exportData.selecciones.push({
                numero_foto: index + 1,
                archivo: photo,
                ampliacion: selection.ampliacion || false,
                impresion: selection.impresion || false,
                invitacion: selection.invitacion || false,
                descartada: selection.descartada || false
            });
        }
    });

    const blob = new Blob([JSON.stringify(exportData, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `seleccion-fotos-xv-melina-estefania-jaime-${new Date().toISOString().split('T')[0]}.json`;
    a.click();
    URL.revokeObjectURL(url);

    showToast('Reporte descargado correctamente', 'success');
}

function generateTextSummary() {
    const stats = getStats();
    let summary = '💍 SELECCIÓN DE FOTOS - XV AÑOS MELINA ESTEFANIA JAIME\n';
    summary += '═══════════════════════════════════════════════════\n\n';
    summary += `📊 RESUMEN:\n`;
    summary += `   Total de fotos: ${photos.length}\n`;
    summary += `   🖼️  Para ampliación: ${stats.ampliacion}\n`;
    summary += `   📸 Para impresión: ${stats.impresion}\n`;
    summary += `   💌 Para invitación: ${stats.invitacion}\n`;
    summary += `   ❌ Descartadas: ${stats.descartada}\n`;
    summary += `   ⭕ Sin clasificar: ${stats.sinClasificar}\n\n`;

    const categories = ['ampliacion', 'impresion', 'invitacion', 'descartada'];
    const categoryNames = {
        ampliacion: '🖼️  AMPLIACIÓN',
        impresion: '📸 IMPRESIÓN',
        invitacion: '💌 INVITACIÓN',
        descartada: '❌ DESCARTADAS'
    };

    categories.forEach(category => {
        const photosInCategory = [];
        photos.forEach((photo, index) => {
            const selection = photoSelections[index];
            if (selection && selection[category]) {
                photosInCategory.push(index + 1);
            }
        });

        if (photosInCategory.length > 0) {
            summary += `${categoryNames[category]}:\n`;
            summary += `   Fotos: ${photosInCategory.join(', ')}\n`;
            summary += `   Total: ${photosInCategory.length}\n\n`;
        }
    });

    summary += `\n📅 Generado el: ${new Date().toLocaleString('es-MX')}\n`;

    return summary;
}

function copyToClipboard() {
    const summary = generateTextSummary();

    navigator.clipboard.writeText(summary).then(() => {
        showToast('Resumen copiado al portapapeles', 'success');
    }).catch(() => {
        showToast('No se pudo copiar. Selecciona el texto manualmente.', 'error');
    });
}

// ========================================
// TOAST NOTIFICATION
// ========================================
function showToast(message, type = 'success') {
    const toast = document.getElementById('toast');
    toast.textContent = message;
    toast.className = `toast ${type}`;

    setTimeout(() => {
        toast.classList.add('show');
    }, 100);

    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
}

// ========================================
// EVENT LISTENERS
// ========================================
document.addEventListener('DOMContentLoaded', () => {
    loadSelections();
    renderGallery();
    updateStats();
    updateFilterButtons();

    document.getElementById('btnFilterAll').addEventListener('click', () => setFilter('all'));
    document.getElementById('btnFilterAmpliacion').addEventListener('click', () => setFilter('ampliacion'));
    document.getElementById('btnFilterImpresion').addEventListener('click', () => setFilter('impresion'));
    document.getElementById('btnFilterInvitacion').addEventListener('click', () => setFilter('invitacion'));
    document.getElementById('btnFilterDescartada').addEventListener('click', () => setFilter('descartada'));
    document.getElementById('btnFilterSinClasificar').addEventListener('click', () => setFilter('sin-clasificar'));

    document.getElementById('btnFilterAll').dataset.filter = 'all';
    document.getElementById('btnFilterAmpliacion').dataset.filter = 'ampliacion';
    document.getElementById('btnFilterImpresion').dataset.filter = 'impresion';
    document.getElementById('btnFilterInvitacion').dataset.filter = 'invitacion';
    document.getElementById('btnFilterDescartada').dataset.filter = 'descartada';
    document.getElementById('btnFilterSinClasificar').dataset.filter = 'sin-clasificar';

    document.getElementById('btnFilterAll').classList.add('active');

    document.getElementById('btnExport').addEventListener('click', exportToJSON);
    document.getElementById('btnShare').addEventListener('click', copyToClipboard);
    document.getElementById('btnClear').addEventListener('click', clearAllSelections);

    document.querySelector('.modal-close').addEventListener('click', closeModal);
    document.getElementById('btnCancelSelection').addEventListener('click', closeModal);
    document.getElementById('btnSaveSelection').addEventListener('click', saveModalSelection);
    document.getElementById('btnDeleteSelection').addEventListener('click', deleteCurrentSelection);

    document.querySelectorAll('.option-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            btn.classList.toggle('selected');
        });
    });

    document.getElementById('photoModal').addEventListener('click', (e) => {
        if (e.target.id === 'photoModal') {
            closeModal();
        }
    });

    document.getElementById('btnPrevPhoto').addEventListener('click', () => {
        navigatePhoto('prev');
    });

    document.getElementById('btnNextPhoto').addEventListener('click', () => {
        navigatePhoto('next');
    });

    document.addEventListener('keydown', (e) => {
        const modal = document.getElementById('photoModal');
        if (modal.classList.contains('active')) {
            if (e.key === 'Escape') {
                closeModal();
            } else if (e.key === 'Enter') {
                saveModalSelection();
            } else if (e.key === 'ArrowLeft') {
                navigatePhoto('prev');
            } else if (e.key === 'ArrowRight') {
                navigatePhoto('next');
            }
        }
    });

});

document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
        saveSelections({ sync: false });
    } else if (typeof sbRefreshSelections === 'function') {
        sbRefreshSelections().catch(function(e) { console.warn('[Supabase] Refresh:', e.message); });
    }
});

window.addEventListener('beforeunload', (e) => {
    saveSelections({ sync: false });
});

// ========================================
// DOWNLOAD FUNCTIONS
// ========================================
async function downloadCurrentPhoto() {
    if (currentPhotoIndex === null) return;
    const url = photos[currentPhotoIndex];
    if (!url) return;
    const filename = 'foto-' + (currentPhotoIndex + 1) + '.jpg';
    showToast('Descargando...', 'success');
    try {
        const resp = await fetch(url, { mode: 'cors' });
        const blob = await resp.blob();
        let finalBlob = blob;
        if (!blob.type.includes('jpeg') && !blob.type.includes('jpg')) {
            const bmp = await createImageBitmap(blob);
            const canvas = document.createElement('canvas');
            canvas.width = bmp.width; canvas.height = bmp.height;
            canvas.getContext('2d').drawImage(bmp, 0, 0);
            finalBlob = await new Promise(function(res){ canvas.toBlob(res, 'image/jpeg', 0.95); });
        }
        const a = document.createElement('a');
        const objUrl = URL.createObjectURL(finalBlob);
        a.href = objUrl; a.download = filename;
        document.body.appendChild(a); a.click(); document.body.removeChild(a);
        setTimeout(function(){ URL.revokeObjectURL(objUrl); }, 2000);
        sbRegistrarVisita('descarga');
        showToast('Descargando ' + filename, 'success');
    } catch(e) {
        window.open(url, '_blank');
        showToast('Abriendo foto...', 'success');
    }
}

function downloadAndClose() {
    downloadCurrentPhoto();
    closeModal();
}

// Inyectar botones de descarga en el modal al cargar
(function injectDownloadButtons(){
    function tryInject(){
        var actions = document.querySelector('.modal-actions');
        if (!actions) return;
        if (document.getElementById('btnDownloadClose')) return;
        var btnDlClose = document.createElement('button');
        btnDlClose.id = 'btnDownloadClose';
        btnDlClose.className = 'btn';
        btnDlClose.textContent = '\u2B07 Descargar y Cerrar';
        btnDlClose.style.cssText = 'background:#6c5ce7;color:#fff;border:none;padding:8px 14px;border-radius:6px;cursor:pointer;font-size:.85rem;margin-right:4px;';
        btnDlClose.addEventListener('click', downloadAndClose);
        var btnDl = document.createElement('button');
        btnDl.id = 'btnDownloadPhoto';
        btnDl.className = 'btn';
        btnDl.textContent = '\u2B07 JPG';
        btnDl.style.cssText = 'background:#0984e3;color:#fff;border:none;padding:8px 14px;border-radius:6px;cursor:pointer;font-size:.85rem;margin-right:4px;';
        btnDl.addEventListener('click', downloadCurrentPhoto);
        actions.insertBefore(btnDlClose, actions.firstChild);
        actions.insertBefore(btnDl, btnDlClose);
    }
    if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', tryInject);
    else tryInject();
})();
