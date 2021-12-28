
import { calendar } from '../js/calendar'

Component({

    /**
     * 组件的属性列表
     */
    properties: {
        value: {
            type: String,
            value: ''
        }
    },

    /**
     * 组件的初始数据
     */
    data: {
        show: false,
        //阴历年、月、日
        lunarYear: ["1900 庚子", "1901 辛丑", "1902 壬寅", "1903 癸卯", "1904 甲辰", "1905 乙巳", "1906 丙午", "1907 丁未", "1908 戊申", "1909 己酉", "1910 庚戌", "1911 辛亥", "1912 壬子", "1913 癸丑", "1914 甲寅", "1915 乙卯", "1916 丙辰", "1917 丁巳", "1918 戊午", "1919 己未", "1920 庚申", "1921 辛酉", "1922 壬戌", "1923 癸亥", "1924 甲子", "1925 乙丑", "1926 丙寅", "1927 丁卯", "1928 戊辰", "1929 己巳", "1930 庚午", "1931 辛未", "1932 壬申", "1933 癸酉", "1934 甲戌", "1935 乙亥", "1936 丙子", "1937 丁丑", "1938 戊寅", "1939 己卯", "1940 庚辰", "1941 辛巳", "1942 壬午", "1943 癸未", "1944 甲申", "1945 乙酉", "1946 丙戌", "1947 丁亥", "1948 戊子", "1949 己丑", "1950 庚寅", "1951 辛卯", "1952 壬辰", "1953 癸巳", "1954 甲午", "1955 乙未", "1956 丙申", "1957 丁酉", "1958 戊戌", "1959 己亥", "1960 庚子", "1961 辛丑", "1962 壬寅", "1963 癸卯", "1964 甲辰", "1965 乙巳", "1966 丙午", "1967 丁未", "1968 戊申", "1969 己酉", "1970 庚戌", "1971 辛亥", "1972 壬子", "1973 癸丑", "1974 甲寅", "1975 乙卯", "1976 丙辰", "1977 丁巳", "1978 戊午", "1979 己未", "1980 庚申", "1981 辛酉", "1982 壬戌", "1983 癸亥", "1984 甲子", "1985 乙丑", "1986 丙寅", "1987 丁卯", "1988 戊辰", "1989 己巳", "1990 庚午", "1991 辛未", "1992 壬申", "1993 癸酉", "1994 甲戌", "1995 乙亥", "1996 丙子", "1997 丁丑", "1998 戊寅", "1999 己卯", "2000 庚辰", "2001 辛巳", "2002 壬午", "2003 癸未", "2004 甲申", "2005 乙酉", "2006 丙戌", "2007 丁亥", "2008 戊子", "2009 己丑", "2010 庚寅", "2011 辛卯", "2012 壬辰", "2013 癸巳", "2014 甲午", "2015 乙未", "2016 丙申", "2017 丁酉", "2018 戊戌", "2019 己亥", "2020 庚子", "2021 辛丑", "2022 壬寅", "2023 癸卯", "2024 甲辰", "2025 乙巳", "2026 丙午", "2027 丁未", "2028 戊申", "2029 己酉", "2030 庚戌", "2031 辛亥", "2032 壬子", "2033 癸丑", "2034 甲寅", "2035 乙卯", "2036 丙辰", "2037 丁巳", "2038 戊午", "2039 己未", "2040 庚申", "2041 辛酉", "2042 壬戌", "2043 癸亥", "2044 甲子", "2045 乙丑", "2046 丙寅", "2047 丁卯", "2048 戊辰", "2049 己巳", "2050 庚午", "2051 辛未", "2052 壬申", "2053 癸酉", "2054 甲戌", "2055 乙亥", "2056 丙子", "2057 丁丑", "2058 戊寅", "2059 己卯", "2060 庚辰", "2061 辛巳", "2062 壬午", "2063 癸未", "2064 甲申", "2065 乙酉", "2066 丙戌", "2067 丁亥", "2068 戊子", "2069 己丑", "2070 庚寅", "2071 辛卯", "2072 壬辰", "2073 癸巳", "2074 甲午", "2075 乙未", "2076 丙申", "2077 丁酉", "2078 戊戌", "2079 己亥", "2080 庚子", "2081 辛丑", "2082 壬寅", "2083 癸卯", "2084 甲辰", "2085 乙巳", "2086 丙午", "2087 丁未", "2088 戊申", "2089 己酉", "2090 庚戌", "2091 辛亥", "2092 壬子", "2093 癸丑", "2094 甲寅", "2095 乙卯", "2096 丙辰", "2097 丁巳", "2098 戊午", "2099 己未", "2100 庚申"],
        lunarMonth: [],
        lunarDay: [],
        valueArray: [1, 1, 1],
        contrast: {
            '正': 1,
            '二': 2,
            '三': 3,
            '四': 4,
            '五': 5,
            '六': 6,
            '七': 7,
            '八': 8,
            '九': 9,
            '十': 10,
            '冬': 11,
            '腊': 12
        },
        pickedLunarDate: {
            yearNumber: '',
            monthNumber: '',
            dayNumber: '',
            leap: ''
        }
    },

    /**
     * 组件的方法列表
     */
    methods: {
        handleMaskTap() {
            this.setData({
                show: false
            })
        },

        handleContentAreaTap(e) {
            return;
        },

        handleSlotTap() {
            this.setData({
                show: true
            })
        },

        handleConfirmTap() {
            const { yearNumber, monthNumber, dayNumber, leap } = this.data.pickedLunarDate;
            var myEventDetail = calendar.lunar2solar(yearNumber, monthNumber, dayNumber, leap);
            const { lYear, gzYear, IMonthCn, IDayCn } = myEventDetail;
            myEventDetail.format = `${lYear} ${gzYear} ${IMonthCn} ${IDayCn}`;
            var myEventOption = {};
            this.triggerEvent('confirm', myEventDetail, myEventOption);

            let yearIndex = this.data.lunarYear.indexOf(`${lYear} ${gzYear}`);
            let monthIndex = this.data.lunarMonth.indexOf(IMonthCn);
            let dayIndex = this.data.lunarDay.indexOf(IDayCn);
            this.setData({
                show: false,
                valueArray: [yearIndex, monthIndex, dayIndex]
            });
        },

        handleCancelTap() {
            this.setData({
                show: false
            });
        },

        handlePickerViewChange(e) {
            // 根据选择的年份，确定月份数
            const [yearIndex, monthIndex, dayIndex] = e.detail.value;
            let yearNumber = +this.data.lunarYear[yearIndex].slice(0, 4);  // string => number
            let lunarMonth = this.getMonths(yearNumber);
            this.setData({
                lunarMonth: lunarMonth
            });
            // 根据选择的月份，确定天份数
            let monthPicked = this.data.lunarMonth[monthIndex];
            let leap = monthPicked.includes('闰') ? true : false;//是否是闰月
            let monthNumber = this.data.contrast[leap ? monthPicked.slice(1, 2) : monthPicked.slice(0, 1)];  // 选择的月份数字 *** 需要正确解析 闰 字的位置
            let lunarDay = this.getDays(yearNumber, monthNumber, leap);
            this.setData({
                lunarDay: lunarDay,
            })
            // 选中的日子 
            let dayNumber = dayIndex + 1;
            this.setData({
                pickedLunarDate: {
                    yearNumber, monthNumber, dayNumber, leap
                }
            });
            console.log('选择的农历日期为:' + `${this.data.lunarYear[yearIndex]} ${this.data.lunarMonth[monthIndex]} ${this.data.lunarDay[dayIndex]}`);
            console.log('选择的农历日期数字为:' + `${yearNumber} ${monthNumber} ${dayNumber} ${leap}`);
            // 触发事件
            var myEventDetail = calendar.lunar2solar(yearNumber, monthNumber, dayNumber, leap);
            const { lYear, gzYear, IMonthCn, IDayCn } = myEventDetail;
            myEventDetail.format = `${lYear} ${gzYear} ${IMonthCn} ${IDayCn}`;
            var myEventOption = {};
            this.triggerEvent('change', myEventDetail, myEventOption);
        },

        getMonths(y) {
            let leapMonth = (calendar.leapMonth(y)); // 1,2,3...,11,12
            let month = ["正月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "冬月", "腊月"];
            leapMonth ? month.splice(leapMonth, 0, `闰${month[leapMonth - 1]}`) : '';
            return month;
        },

        getDays(y, m, leap = false) {
            try {
                let days = leap ? calendar.leapDays(y) : calendar.monthDays(y, m);
                let tem = [];
                for (let i = 1; i <= days; i++) {
                    tem.push(calendar.toChinaDay(i));
                }
                return tem;
            } catch (error) {
                console.log(error);
            }
        },

        /**
         * 从传入的日期中，解析对应的月份，即可确定year、month、day 的渲染数组
         * @param {2021 辛丑 正月 初一   => [2021, 1, 1, false ]}
         * @param {2033 癸丑 闰冬月 初一 => [2033 ,11, 1, true ]} 
         */
        lunarDateStringToNumber(format = '') {
            try {
                // 解析参数
                let [a, b, c, d] = format.split(' ');
                let yearNumber = +a;
                let leap = c.includes('闰') ? true : false;//是否是闰月
                let monthNumber = this.data.contrast[leap ? c.slice(1, 2) : c.slice(0, 1)];
                //校验参数有效性
                let yearEffective = 1900 <= yearNumber && yearNumber <= 2100;  // 年份有效值
                let monthReg = /闰?[正二三四五六七八九十冬腊]{1}月{1}/g // 月份有效值
                if (yearEffective && monthReg.test(c)) {
                    return [yearNumber, monthNumber, leap];
                } else {
                    return false;
                }
            } catch (error) {
                console.warn('请检查参数');
                return false;
            }
        },

        /**
         * 从传入的日期中，解析对应的月份，即可确定year、month、day 的渲染数组
         * @param {2021 辛丑 正月 初一} format 
         * @param {2033 癸丑 闰冬月 初一} format 
         */
        initYMD() {
            try {
                let result = this.lunarDateStringToNumber(this.data._value);
                if (result) {
                    const [yearNumber, monthNumber, leap] = result;
                    let lunarMonth = this.getMonths(yearNumber);
                    let lunarDay = this.getDays(yearNumber, monthNumber, leap);
                    this.setData({
                        lunarMonth: lunarMonth,
                        lunarDay: lunarDay
                    });
                    // 计算索引的位置
                    const [a, b, c, d] = this.data._value.split(' ');
                    let yearIndex = this.data.lunarYear.indexOf(`${a} ${b}`);
                    let monthIndex = this.data.lunarMonth.indexOf(c);
                    let dayIndex = this.data.lunarDay.indexOf(d);
                    this.setData({
                        valueArray: [yearIndex, monthIndex, dayIndex]
                    });
                } else {
                    let date = new Date();
                    const { lYear, lMonth, isLeap, gzYear, IMonthCn, IDayCn } = calendar.solar2lunar(date.getFullYear(), date.getMonth() + 1, date.getDate())
                    this.setData({
                        lunarMonth: this.getMonths(lYear),
                        lunarDay: this.getDays(lYear, lMonth, isLeap)
                    });
                    let yearIndex = this.data.lunarYear.indexOf(`${lYear} ${gzYear}`);
                    let monthIndex = this.data.lunarMonth.indexOf(IMonthCn);
                    let dayIndex = this.data.lunarDay.indexOf(IDayCn);
                    this.setData({
                        valueArray: [yearIndex, monthIndex, dayIndex]
                    });
                }
            } catch (error) {
                console.log(error);
            }
        },
    },
    lifetimes: {
        attached: function () {
            this.initYMD();
        }
    }
})
