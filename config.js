// 网站配置文件
// 修改这个文件来快速自定义你的网站

const SITE_CONFIG = {
    // 基本信息
    siteName: "Jin Chai's Website",
    siteTitle: "Jin Chai's Website",
    siteSubtitle: "欢迎来到柴琎的个人主页——",
    siteIntro: `&emsp;&emsp;<b>我是柴琎，一名来自中国科学技术大学工程科学学院仪器科学与技术（机器人方向）博士研究生，隶属于中国科学技术大学工程科学学院精密机械与精密仪器系、人形机器人研究院、深空探测实验室，所在实验室为中国科大仿生智能实验室BIR-Lab，导师为董二宝副教授。研究方向为人形机器人（仿人灵巧手）、灵巧操作、仿生软体机器人与人工肌肉。</b><br>
                &emsp;&emsp;本网站用于记录我的科研、学习与生活，欢迎交流！`,
    papers: [
        "<b>Chai J.</b>, Yao X., Hou M., Li Y., et. al. “<b>A 21-DOF Humanoid Dexterous Hand with Hybrid SMA-Motor Actuation: CYJ Hand-0</b>”, arXiv:2507.14538. https://doi.org/10.48550/arXiv.2507.14538",
        "<b>Chai J.</b>, Li Y., et. al. “<b>Customize-Your-Joy Hand A user-oriented, cost-effective 22-DOF platform for future human-robot community</b>”[J], in <b>IEEE Robotics and Automation Letters</b>, 2025. (二审在投)",
        "Li J., <b>Chai J.</b>, et. al. “A Universal SMA Actuator Enabled by Ultrasonic Welding and an Integrated Drive-Sense-Control System”[J], in Smart Materials and Structures , 2025. (一审在投)",
        "Hou M., <b>Chai J.</b>, et. al. “Design of a High Power-to-Weight Ratio Gripper Driven by SMA Artificial Muscles”[J], in Smart Materials and Structures , 2025. (在投)",
        "Li Y., He H., <b>Chai J.</b>, et. al. “Grasping Unknown Objects With Only One Demonstration” [J], IEEE Robotics and Automation Letters, 2025",
        "Li Y., Wang Y., Zheng L., Lv Y，<b>Chai J.</b>, et. al. “Deep reinforcement learning-based variable impedance control for grinding workpieces with complex geometry”[J], in Robotic Intelligence and Automation，2025.",
        "Lv Y., Zheng L., <b>Chai J.</b>, Chen C., Liu W., et. al. “Synergistic Pushing and Grasping in Cluttered Environments via Reinforcement Learning”[C], 2025 Chinese Intelligent Automation Conference(CIAC-2025) (Best Student Paper Award)",
        "仿人灵巧手专利正在撰写，正在申请",
        "SMA驱动器及相关机构专利正在撰写，正在申请"
    ],
    
    // 个人信息
    personalInfo: {
        name: "柴琎",
        email: "houzhouhuanghzu@mail.ustc.edu.cn",
        avatar: "head.jpg",
        title: "博士研究生 | 工程科学学院 | 仪器科学与技术（机器人方向）",
        description: "我是一名来自中国科学技术大学工程科学学院仪器科学与技术（机器人方向）博士研究生，隶属于中国科学技术大学工程科学学院精密机械与精密仪器系、人形机器人研究院、深空探测实验室，所在实验室为中国科大仿生智能实验室BIR-Lab，导师为董二宝副教授。研究方向为人形机器人（仿人灵巧手）、灵巧操作、仿生软体机器人与人工肌肉。",
        affiliation: "中国科学技术大学工程科学学院精密机械与精密仪器系、人形机器人研究院、深空探测实验室",
        research: [
            "<b>人形机器人（仿人灵巧手）<b>",
            "<b>灵巧操作<b>",
            "<b>仿生软体机器人<b>",
            "<b>人工肌肉<b>"
        ],
        education: [
            {
                period: "2023.09- 至今",
                school: "中国科学技术大学",
                degree: "硕士（已转博）",
                college: "工程科学学院",
                major: "仪器科学与技术（机器人方向）",
                gpa: "3.83/4.3",
                awards: [
                    "2024年中国科学技术大学“庆峰杯”创新创业大赛二等奖",
                    "2024年5月第十一届“挑战杯· 华安证券”安徽省大学生创业计划竞赛铜奖",
                    "安徽省大学生创新大赛(2024)高教主赛道铜奖",
                    "中国科学技术大学一等奖学金",
                    "中国科学技术大学2024秋季学期优秀助教荣誉称号"
                ]
            },
            {
                period: "2019.09-2023.06",
                school: "中国科学技术大学",
                degree: "本科",
                college: "工程科学学院",
                major: "机械设计制造及其自动化",
                gpa: "3.52/4.3",
                awards: [
                    "2020年中国科学技术大学奋进奖学金",
                    "2021年中国科学技术大学优秀学生奖学金铜奖",
                    "2022年安徽省第十五届运动会高校部游泳比赛“体育道德风尚奖”",
                    "2022年中国科学技术大学杨亚基金奖学金",
                    "2022年中国科学技术大学优秀学生奖学金金奖",
                    "2023年中国科学技术大学校级优秀本科毕业论文奖",
                    "校级优秀毕业生",
                    "第二届全国仪器类专业本科生毕业交流会获得优秀毕业设计（论文）和优秀PPT奖",
                    "2023年中国科学技术大学“庆峰杯”创新创业大赛优秀奖",
                    "2023年度安徽省机器人学会优秀本科毕业论文奖"
                ]
            }
        ]
    },
    skills: [
        { name: "编程语言", value: "C/C++，MATLAB，Python，拥有一定深度学习、计算机视觉和图像处理技术研究和实践经验。" },
        { name: "英语", value: "CET4-632，CET6-555，正在备考雅思" },
        { name: "仿真建模", value: "拥有丰富的机械设计经验，熟练掌握SOLIDWORKS、AutoCAD、ANSYS、Comsol、CoppeliaSim等机械建模和机器人仿真软件" },
        { name: "硬件开发", value: "熟练掌握电路板设计制作，拥有Altium Designer、JLC EDA、Multisim等电路设计与仿真软件经验" },
        { name: "嵌入式开发", value: "熟练掌握STM32、Arduino、51等单片机的开发方法，具有丰富的调试经验" },
        { name: "文案撰写与新媒体运营", value: "擅长写作（高考语文132/150）熟练使用Latex与Office套件（Word、PPT、Visio），拥有微信公众号推文编辑、排版、视频剪辑（剪映、PR）、图片处理与海报制作（PS、AI）的经验" },
        { name: "其他方面", value: "本科课程：《机电传动及数控技术》92分、《材料力学》95分、《传感器及测试技术》95分、《自动控制原理》99分；研究生课程：《高等工程数学》89分、《机械故障诊断学》91分。" }
    ],
    
    // 其他能力与经验
    experience: [
        "<b>教育工作</b>：2024年春季学期担任本科课程《机电控制系统设计及实践》实验助教，2024年秋季学期担任本科课程《机械制图》课程助教，2024年度担任中国科学技术大学工程科学学院辅助大一新生的学友计划志愿者；",
        "<b>院系工作</b>：2023年作为领队带领工程科学学院夺得第一届中国科大学生游泳比赛团体冠军，2024年作为领队带领工程科学学院夺得第二届中国科大学生游泳比赛团体冠军；",
        "<b>班级工作</b>：本科一年级担任班级副班长，本科三、四年级担任班级体育委员；",
        "<b>社团与体育活动</b>：中国科学技术大学学生游泳协会和中国科学技术大学学生游泳队创建人之一，历任协会联络部部长、活动部部长和校游泳队队长（国家游泳二级运动员、国家水球二级运动员）。2022年夏带队参加安徽省第十五届运动会高校部游泳比赛，个人获得一金一银，接力获得两枚金牌，个人荣获省级体育道德风尚奖，2023年春带队参加第4届中国大学生阳光体育游泳锦标赛，50m蝶泳获全国第12名；",
        "<b>科技科普活动</b>：连续两年担任中国科学技术大学科技活动周志愿者，参与实验室实验展示与讲解。"
    ],
    
    // 工作内容
    workItems: [
        {
            icon: "fas fa-code",
            title: "高自由度仿人灵巧手",
            description: "本人独立主导研发，提出了一种创新的22自由度（DOF）仿人灵巧手。该灵巧手结构布局与人手高度一致，重量仅153克，模块化设计不仅支持个性化定制，还简化了装配、维护与功能扩展；采用灵感源自达芬奇机械学的可控耦合肌腱驱动机制，支持肌腱布局及驱动器类型、数量的灵活调整；通过3D打印技术与低成本商用材料实现，单只手（不包括驱动部分）硬件成本低于60美元；在Kapandji Test和GRASP taxonomy中均实现了100%的关键性能指标，具有优异的灵活性与动作能力。",
            highlights: [
                "仿人灵巧手本体结构设计开发，3D建模，版本优化与迭代（15个版本，目前仍在迭代更新）；",
                "仿人灵巧手外置式绳驱传动系统的研发，开发创新的传动方案和绳驱肌腱安装方案；",
                "开发驱动集成臂及SMA-电机/舵机混合系统，嵌入式驱控系统搭建；",
                "完成机械零部件加工、电路系统搭建与整机装配调试。"
            ],
            results: [
                "第一代原型机作为本科毕设，获得校级优秀论文奖、全国优秀毕业设计奖、安徽省机器人学会优秀论文奖，被推荐参加全国大学生机器人科技创新营；",
                "第二代原型机（CYJ Hand）论文“Customize-Your-Joy Hand A user-oriented, cost-effective 22-DOF platform for future human-robot community” IEEE Robotics & Automation在投（二审阶段），专利申请中（学生第一申请人）。"
            ]
        },
        {
            icon: "fas fa-brain",
            title: "基于形状记忆合金等功能材料开发的驱动器（人工肌肉）",
            description: "基于形状记忆合金等功能材料功重比高、爆发力强、噪音低等优势，开发多种适用于仿生机器人的新型驱动器及控制系统。",
            highlights: [
                "参与研发单/双向弯曲的软体驱动模块（平滑肌），提出标准化制造方案，设计驱动-感知-控制一体化电路模块，开发PID控制算法；",
                "主导开发平行四边形行程放大驱动模块（骨骼肌），用于放大位移并开发折纸型可重构模块与压电驱动器模块；",
                "开发的成果应用于仿生鱼、水母、软体手、尺蠖机器人、双指夹爪等，相关专利正在撰写。"
            ]
        },
        {
            icon: "fas fa-robot",
            title: "基于人机交互的新型配网带电作业机器人控制系统设计",
            description: "搭建了基于先进人机交互技术的控制系统，用于操作高度拟人化的配网带电作业机器人。本人仿人灵巧手原型机为该课题子项目成果之一。"
        },
        {
            icon: "fas fa-chart-line",
            title: "“通臂”灵猴机器人——人机协作的智能远程特种作业系统",
            description: "参与撰写项目申请书（市场分析、核心技术、知识产权、商业模式、财务分析等），协助团队完成手臂协作机器人优化升级与供应链设计。项目获得70万元资助，成果在多项省市级双创比赛中展示。"
        },
        {
            icon: "fas fa-hand-paper",
            title: "基于 one-shot 演示学习与深度强化学习的抓取算法研究",
            description: "解决多指灵巧手抓取任意物体问题，基于 CoppeliaSim 建模，提出面向通用物体的课程学习算法，支持只需一次演示即可泛化。成果已发表在 RAL 期刊。"
        },
        {
            icon: "fas fa-cogs",
            title: "基于深度强化学习的变阻抗控制算法",
            description: "提出基于深度强化学习（DRL）的可变阻抗控制策略，适用于复杂环境下机器人的力控制，并基于 Lyapunov 理论证明其稳定性。成果已发表在 RAL 期刊。"
        }
    ],
    
    // 学习库分类
    learningCategories: [
        { icon: "fas fa-cogs", title: "机械", items: [] },
        { icon: "fas fa-bolt", title: "电机", items: [] },
        { icon: "fas fa-microchip", title: "电路设计", items: [] },
        { icon: "fas fa-microcontroller", title: "单片机", items: [] },
        { icon: "fas fa-desktop", title: "计算机", items: [] },
        { icon: "fas fa-robot", title: "机器人学", items: [] },
        { icon: "fas fa-sync", title: "控制", items: [] },
        { icon: "fas fa-project-diagram", title: "算法", items: [] },
        { icon: "fas fa-code", title: "编程", items: [] },
        { icon: "fas fa-book", title: "基础学科", items: [] },
        { icon: "fas fa-pen-nib", title: "论文写作", items: [] }
    ],
    
    //杂记
    notesCategories: [
        {
            title: "文章",
            items: [
                // 示例文章
                "科大生活纪事"
            ]
        },
        {
            title: "旅行",
            items: [
                "2025暑假辽东行"
            ]
        },
        {
            title: "游泳",
            items: [
                "个人最快成绩记录"
            ],
            table: {
                headers: ["泳姿", "距离", "最好成绩", "比赛/时间","视频链接"],
                rows: [
                    ["自由泳", "50m", "00:26.86", "2022.07","https://www.bilibili.com/video/BV1rg411z7MM/?share_source=copy_web&vd_source=1b7c7c358b36a96a651458ed336203c2"],
                    ["自由泳", "100m", "01:00.01", "2022.07","https://www.bilibili.com/video/BV1Ce4y1271Z/?share_source=copy_web&vd_source=1b7c7c358b36a96a651458ed336203c2"],
                    ["自由泳", "200m", "02:14", "-","-"],
                    ["自由泳", "400m", "04:59", "-","-"],
                    ["自由泳", "1500m", "20:42", "-","-"],
                    ["蛙泳", "50m", "00:34.64", "-","https://www.bilibili.com/video/BV1oe411R7gE/?share_source=copy_web&vd_source=1b7c7c358b36a96a651458ed336203c2"],
                    ["蝶泳", "50m", "00:28.83", "2023.03","https://www.bilibili.com/video/BV1XV4y1X7xb/?share_source=copy_web&vd_source=1b7c7c358b36a96a651458ed336203c2"],
                    ["蝶泳", "100m", "01:06.86", "2023.06","https://www.bilibili.com/video/BV12c411M7P1/?share_source=copy_web"],
                    ["仰泳", "50m", "00:32.67", "-","https://www.bilibili.com/video/BV1ww411z7G7/?share_source=copy_web&vd_source=1b7c7c358b36a96a651458ed336203c2"],
                    ["仰泳", "100m", "01:08.60", "-","https://www.bilibili.com/video/BV1G3MwzAEU3/?share_source=copy_web&vd_source=1b7c7c358b36a96a651458ed336203c2"]
                ]
            }
        }
    ],

    // 联系方式
    contactInfo: {
        email: "houzhouhuanghzu@mail.ustc.edu.cn",
        github: "https://github.com/ustcxxf",
        bilibili: "https://space.bilibili.com/480085832?spm_id_from=333.788.0.0"
    },
    
    // 社交媒体链接
    socialLinks: [
        { icon: "fab fa-youtybe", url: "https://space.bilibili.com/480085832?spm_id_from=333.788.0.0" }
    ],
    
    // 颜色主题
    colors: {
        primary: "#3498db",
        secondary: "#2c3e50",
        accent: "#667eea",
        accent2: "#764ba2",
        background: "#f8f9fa",
        text: "#333",
        textLight: "#555"
    },
    
    // 动画设置
    animations: {
        enableTypewriter: true,
        enableParticles: true,
        enableScrollAnimations: true
    }
};

// 导出配置
if (typeof module !== 'undefined' && module.exports) {
    module.exports = SITE_CONFIG;
} else {
    window.SITE_CONFIG = SITE_CONFIG;
} 