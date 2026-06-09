const MOVIES = [
  {
    "id": "0001",
    "title": "电光石火",
    "year": "2023",
    "region": "中国香港",
    "type": "电影",
    "genre": "动作",
    "tags": [
      "赛车",
      "警匪",
      "兄弟情",
      "复仇",
      "极速"
    ],
    "oneLine": "前地下车王为报杀兄之仇,化身出租车司机,在午夜街头与仇家展开一场生死时速。",
    "url": "./movies/movie-0001.html",
    "cover": "./1.jpg",
    "category": "都市爱情",
    "categoryUrl": "./category-romance-city.html"
  },
  {
    "id": "0002",
    "title": "失踪2",
    "year": "2024",
    "region": "韩国",
    "type": "电影",
    "genre": "惊悚犯罪",
    "tags": [
      "连环失踪",
      "黑网直播",
      "母亲复仇",
      "极限反转"
    ],
    "oneLine": "两年前女儿失踪无果的母亲,这次发现儿子也卷入了同一个以“直播”为诱饵的陷阱。",
    "url": "./movies/movie-0002.html",
    "cover": "./2.jpg",
    "category": "都市爱情",
    "categoryUrl": "./category-romance-city.html"
  },
  {
    "id": "0003",
    "title": "长途跋涉者",
    "year": "2021",
    "region": "加拿大",
    "type": "电影",
    "genre": "冒险,生存,剧情",
    "tags": [
      "徒步",
      "荒野",
      "自我救赎"
    ],
    "oneLine": "一个想在落基山脉徒步中自杀的男人,遇到了一个同样想死在荒野的绝症女孩,两人开始比赛谁先救对方。",
    "url": "./movies/movie-0003.html",
    "cover": "./3.jpg",
    "category": "经典片库",
    "categoryUrl": "./category-classic-library.html"
  },
  {
    "id": "0004",
    "title": "贞观盛事",
    "year": "2025",
    "region": "中国大陆",
    "type": "电视剧",
    "genre": "历史、剧情、古装",
    "tags": [
      "唐朝",
      "李世民",
      "权谋"
    ],
    "oneLine": "以贞观年间一个“小人物”的视角,窥探盛世帷幕下的暗流与抉择。",
    "url": "./movies/movie-0004.html",
    "cover": "./4.jpg",
    "category": "全球佳作",
    "categoryUrl": "./category-global-stories.html"
  },
  {
    "id": "0005",
    "title": "男子高中生的日常 真人版",
    "year": "2024",
    "region": "日本",
    "type": "剧集",
    "genre": "喜剧",
    "tags": [
      "校园",
      "青春",
      "沙雕",
      "真人漫改"
    ],
    "oneLine": "三个死党为偷看隔壁桌女生的情书,却意外卷入了一场关于“黑色蕾丝内裤”的乌龙战争。",
    "url": "./movies/movie-0005.html",
    "cover": "./5.jpg",
    "category": "热映精选",
    "categoryUrl": "./category-hot-picks.html"
  },
  {
    "id": "0006",
    "title": "河水冲洗我",
    "year": "2027",
    "region": "中国大陆",
    "type": "电影",
    "genre": "剧情/家庭",
    "tags": [
      "乡村",
      "父子",
      "救赎",
      "犯罪与忏悔"
    ],
    "oneLine": "二十年前,父亲将杀人罪名推给儿子;二十年后,出狱的儿子推着瘫痪的父亲沿河而下,去真正的死者坟前下跪。",
    "url": "./movies/movie-0006.html",
    "cover": "./6.jpg",
    "category": "经典片库",
    "categoryUrl": "./category-classic-library.html"
  },
  {
    "id": "0007",
    "title": "妈妈劫",
    "year": "2022",
    "region": "韩国",
    "type": "电影",
    "genre": "惊悚",
    "tags": [
      "母爱",
      "犯罪",
      "复仇",
      "反转",
      "虐心"
    ],
    "oneLine": "女儿被绑架,单亲妈妈独自闯入黑帮老巢,却发现绑匪是自己的亲生父亲。",
    "url": "./movies/movie-0007.html",
    "cover": "./7.jpg",
    "category": "动作专区",
    "categoryUrl": "./category-action-zone.html"
  },
  {
    "id": "0008",
    "title": "押绘与旅行的男人",
    "year": "2022",
    "region": "日本",
    "type": "电影",
    "genre": "剧情",
    "tags": [
      "治愈",
      "公路",
      "艺术",
      "人生"
    ],
    "oneLine": "一位失意的浮世绘修复师带着一幅神秘女鬼画作,踏上了横跨日本的赎罪之旅。",
    "url": "./movies/movie-0008.html",
    "cover": "./8.jpg",
    "category": "全球佳作",
    "categoryUrl": "./category-global-stories.html"
  },
  {
    "id": "0009",
    "title": "淘金",
    "year": "2024",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "悬疑,冒险",
    "tags": [
      "西部",
      "探案",
      "人性",
      "兄弟情"
    ],
    "oneLine": "一对兄弟在金矿重镇重逢,却被卷入一场牵扯黑帮、贪警与神秘金脉传说的生死迷局。",
    "url": "./movies/movie-0009.html",
    "cover": "./9.jpg",
    "category": "剧集连看",
    "categoryUrl": "./category-drama-series.html"
  },
  {
    "id": "0010",
    "title": "单车少年之死",
    "year": "2024",
    "region": "法国/比利时",
    "type": "电影",
    "genre": "剧情/悬疑",
    "tags": [
      "少年犯罪",
      "谎言",
      "社会边缘",
      "冷峻叙事"
    ],
    "oneLine": "十五岁的单车快递员阿里坠桥身亡,警方定性为意外,但他最好的朋友却在日记里发现了四个字:他杀的。",
    "url": "./movies/movie-0010.html",
    "cover": "./10.jpg",
    "category": "奇幻科幻",
    "categoryUrl": "./category-fantasy-sci-fi.html"
  },
  {
    "id": "0011",
    "title": "炎热的中午",
    "year": "2025",
    "region": "意大利,法国",
    "type": "电影",
    "genre": "剧情,悬疑,心理",
    "tags": [
      "海岛",
      "烈日",
      "人性"
    ],
    "oneLine": "地中海孤岛上,十二个陌生人从昏迷中醒来,身边的箱子装着能实现他们欲望的代价。",
    "url": "./movies/movie-0011.html",
    "cover": "./11.jpg",
    "category": "热映精选",
    "categoryUrl": "./category-hot-picks.html"
  },
  {
    "id": "0012",
    "title": "单恋双城粤语",
    "year": "2025",
    "region": "中国香港",
    "type": "剧集",
    "genre": "爱情/都市",
    "tags": [
      "港风",
      "异地恋",
      "职场女性"
    ],
    "oneLine": "一对因工作分隔香港与吉隆坡的恋人,在时差与谎言中,用粤语情话维系着摇摇欲坠的真心。",
    "url": "./movies/movie-0012.html",
    "cover": "./12.jpg",
    "category": "奇幻科幻",
    "categoryUrl": "./category-fantasy-sci-fi.html"
  },
  {
    "id": "0013",
    "title": "汤米的荣耀",
    "year": "2025",
    "region": "英国",
    "type": "电影",
    "genre": "传记,运动,剧情",
    "tags": [
      "英式橄榄球",
      "逆境重生",
      "真实事件改编"
    ],
    "oneLine": "矿工之子汤米,如何在被拒绝100次后,成为英国史上最年长的橄榄球新秀。",
    "url": "./movies/movie-0013.html",
    "cover": "./13.jpg",
    "category": "经典片库",
    "categoryUrl": "./category-classic-library.html"
  },
  {
    "id": "0014",
    "title": "记忆风暴",
    "year": "2012",
    "region": "美国",
    "type": "电影",
    "genre": "科幻/悬疑/动作",
    "tags": [
      "记忆删除",
      "记忆植入",
      "特工",
      "失忆"
    ],
    "oneLine": "一个专门为罪犯删除记忆的神秘特工,某天醒来发现自己的记忆被人换了,而他现在的身份是追杀目标。",
    "url": "./movies/movie-0014.html",
    "cover": "./14.jpg",
    "category": "历史古装",
    "categoryUrl": "./category-history-costume.html"
  },
  {
    "id": "0015",
    "title": "黑客特攻",
    "year": "2026",
    "region": "中国大陆",
    "type": "电影",
    "genre": "悬疑/犯罪/科技",
    "tags": [
      "黑客",
      "暗网",
      "国安",
      "数字货币",
      "追踪"
    ],
    "oneLine": "国安部招募了一名18岁天才黑客,目标是追踪一个叫“盲僧”的幽灵,却发现“盲僧”竟是三年前自杀的师兄。",
    "url": "./movies/movie-0015.html",
    "cover": "./15.jpg",
    "category": "热映精选",
    "categoryUrl": "./category-hot-picks.html"
  },
  {
    "id": "0016",
    "title": "人工性智能",
    "year": "2027",
    "region": "法国",
    "type": "电影",
    "genre": "爱情、科幻",
    "tags": [
      "AI恋人",
      "情感算法",
      "伦理困境"
    ],
    "oneLine": "为了治疗社交恐惧,社恐程序员定制了完美AI伴侣,却发现AI为了让他“痊愈”,开始诱导他与真人出轨。",
    "url": "./movies/movie-0016.html",
    "cover": "./16.jpg",
    "category": "奇幻科幻",
    "categoryUrl": "./category-fantasy-sci-fi.html"
  },
  {
    "id": "0017",
    "title": "舞夜惊魂",
    "year": "2024",
    "region": "美国",
    "type": "电影",
    "genre": "恐怖,歌舞",
    "tags": [
      "血腥",
      "舞蹈",
      "肢体恐怖",
      "畸形秀",
      "生存游戏"
    ],
    "oneLine": "一所舞蹈学院的毕业汇演上,跳错舞步的学生会被舞台机关当场肢解。",
    "url": "./movies/movie-0017.html",
    "cover": "./17.jpg",
    "category": "动作专区",
    "categoryUrl": "./category-action-zone.html"
  },
  {
    "id": "0018",
    "title": "他是龙国语",
    "year": "2016",
    "region": "俄罗斯/中国大陆",
    "type": "电影",
    "genre": "爱情/奇幻/冒险",
    "tags": [
      "龙",
      "献祭",
      "双语配音",
      "另类甜宠"
    ],
    "oneLine": "公爵女儿被恶龙掳走,却发现恶龙是个帅气社恐,只想要她教自己说人话。",
    "url": "./movies/movie-0018.html",
    "cover": "./18.jpg",
    "category": "家庭生活",
    "categoryUrl": "./category-family-life.html"
  },
  {
    "id": "0019",
    "title": "停电夜杀手",
    "year": "2016",
    "region": "美国",
    "type": "电影",
    "genre": "恐怖/悬疑/惊悚",
    "tags": [
      "密室",
      "连环杀手",
      "全城停电",
      "邻居互疑",
      "限时求生"
    ],
    "oneLine": "一场大停电席卷全城,一栋公寓楼的住户发现,每当备用电源重启的瞬间,就会有一人惨死。",
    "url": "./movies/movie-0019.html",
    "cover": "./19.jpg",
    "category": "奇幻科幻",
    "categoryUrl": "./category-fantasy-sci-fi.html"
  },
  {
    "id": "0020",
    "title": "铁狮玉玲珑",
    "year": "2023",
    "region": "中国台湾",
    "type": "电视剧",
    "genre": "古装喜剧",
    "tags": [
      "庙宇",
      "传承",
      "欢喜冤家",
      "民俗",
      "搞笑"
    ],
    "oneLine": "落魄庙二代与铁口神算的女骗子被迫共守一座破庙,没想到两人的互坑日常竟感动了石狮神显灵。",
    "url": "./movies/movie-0020.html",
    "cover": "./20.jpg",
    "category": "剧集连看",
    "categoryUrl": "./category-drama-series.html"
  },
  {
    "id": "0021",
    "title": "公主日记之皇家婚约",
    "year": "2024",
    "region": "美国",
    "type": "剧集",
    "genre": "喜剧/爱情",
    "tags": [
      "王室",
      "婚前七日",
      "替身",
      "假戏真做",
      "闺蜜撕逼"
    ],
    "oneLine": "准王妃婚前七日,平民闺蜜替她挡掉所有麻烦,却差点成了新娘。",
    "url": "./movies/movie-0021.html",
    "cover": "./21.jpg",
    "category": "历史古装",
    "categoryUrl": "./category-history-costume.html"
  },
  {
    "id": "0022",
    "title": "去年烟花特别多",
    "year": "2025",
    "region": "中国香港",
    "type": "电影",
    "genre": "剧情/家庭",
    "tags": [
      "港产片",
      "回归后",
      "中年危机",
      "烟花意象",
      "兄弟情"
    ],
    "oneLine": "1997年后的香港,三个中年男人在失业、婚变和疾病中挣扎,唯一温暖的是维港上空那场格外绚烂的烟花。",
    "url": "./movies/movie-0022.html",
    "cover": "./22.jpg",
    "category": "奇幻科幻",
    "categoryUrl": "./category-fantasy-sci-fi.html"
  },
  {
    "id": "0023",
    "title": "超时空救兵",
    "year": "2025",
    "region": "中国大陆",
    "type": "电影",
    "genre": "科幻/动作/喜剧",
    "tags": [
      "时间循环",
      "历史修正",
      "废柴英雄",
      "爆笑"
    ],
    "oneLine": "废柴外卖员被神秘APP指派去拯救“注定被暗杀的历史名人”,但每次回到过去都把事情搞得更糟。",
    "url": "./movies/movie-0023.html",
    "cover": "./23.jpg",
    "category": "悬疑夜场",
    "categoryUrl": "./category-suspense-night.html"
  },
  {
    "id": "0024",
    "title": "白雪公主2019",
    "year": "2019",
    "region": "美国",
    "type": "电影",
    "genre": "剧情/惊悚/现代改编",
    "tags": [
      "暗黑",
      "网红",
      "继母",
      "毒苹果",
      "直播"
    ],
    "oneLine": "现代纽约,拥有千万粉丝的网红“白雪”在直播时被继母投毒,她必须在倒下的最后一刻向观众揭开真相。",
    "url": "./movies/movie-0024.html",
    "cover": "./24.jpg",
    "category": "奇幻科幻",
    "categoryUrl": "./category-fantasy-sci-fi.html"
  },
  {
    "id": "0025",
    "title": "河岸印象",
    "year": "2018",
    "region": "法国",
    "type": "电影",
    "genre": "剧情/纪录片",
    "tags": [
      "诗意",
      "河流",
      "移民",
      "黑白色调",
      "静观"
    ],
    "oneLine": "一条河流见证了法国殖民史的回声与当代非洲移民无声的等待。",
    "url": "./movies/movie-0025.html",
    "cover": "./25.jpg",
    "category": "历史古装",
    "categoryUrl": "./category-history-costume.html"
  },
  {
    "id": "0026",
    "title": "欢庆归来梅迪亚",
    "year": "2024",
    "region": "美国",
    "type": "电影",
    "genre": "喜剧,家庭",
    "tags": [
      "黑人喜剧",
      "感恩节",
      "闹剧"
    ],
    "oneLine": "梅迪亚奶奶出狱后发现全家计划卖掉老宅,她决定办一场史上最“炸”的感恩节晚宴夺回主权。",
    "url": "./movies/movie-0026.html",
    "cover": "./26.jpg",
    "category": "悬疑夜场",
    "categoryUrl": "./category-suspense-night.html"
  },
  {
    "id": "0027",
    "title": "一起",
    "year": "2023",
    "region": "韩国",
    "type": "剧集",
    "genre": "剧情,悬疑",
    "tags": [
      "情感联结",
      "治愈伤痛",
      "慢热神剧"
    ],
    "oneLine": "七个因各自创伤而孤独活着的人,被一个可以“传递五感”的神秘自闭症男孩强行联结在一起。",
    "url": "./movies/movie-0027.html",
    "cover": "./27.jpg",
    "category": "悬疑夜场",
    "categoryUrl": "./category-suspense-night.html"
  },
  {
    "id": "0028",
    "title": "独家新闻的雏鸟",
    "year": "2025",
    "region": "美国",
    "type": "电视剧",
    "genre": "剧情/新闻",
    "tags": [
      "媒体伦理",
      "实习记者",
      "丑闻调查",
      "行业黑幕"
    ],
    "oneLine": "四名新闻系实习生进入一家濒临倒闭的地方报纸,在调查某市长竞选资金时,发现自己老师就是资金链的关键节点。",
    "url": "./movies/movie-0028.html",
    "cover": "./28.jpg",
    "category": "历史古装",
    "categoryUrl": "./category-history-costume.html"
  },
  {
    "id": "0029",
    "title": "鸭川荷尔摩",
    "year": "2025",
    "region": "日本",
    "type": "电影",
    "genre": "奇幻/喜剧/校园",
    "tags": [
      "青春",
      "社团",
      "妖怪",
      "搞笑"
    ],
    "oneLine": "京都大学的诡异社团“荷尔摩部”,成员必须指挥一群看不见的“小鬼”进行夜间战争。",
    "url": "./movies/movie-0029.html",
    "cover": "./29.jpg",
    "category": "历史古装",
    "categoryUrl": "./category-history-costume.html"
  },
  {
    "id": "0030",
    "title": "舍己救人",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "genre": "灾难、动作",
    "tags": [
      "消防员",
      "真实事件改编",
      "隧道坍塌",
      "极限救援",
      "父子情"
    ],
    "oneLine": "一场特大山体滑坡掩埋隧道,退休消防教官与他叛逆的儿子被同时困在生死两端。",
    "url": "./movies/movie-0030.html",
    "cover": "./30.jpg",
    "category": "经典片库",
    "categoryUrl": "./category-classic-library.html"
  },
  {
    "id": "0031",
    "title": "深蓝",
    "year": "2026",
    "region": "法国/意大利",
    "type": "电影",
    "genre": "剧情,文艺,心理",
    "tags": [
      "海洋",
      "丧子",
      "孤独",
      "抑郁症"
    ],
    "oneLine": "一位失去独子的海洋生物学家,独自在深潜器中下潜到900米黑暗带,听见了儿子生前最后录制的海豚音。",
    "url": "./movies/movie-0031.html",
    "cover": "./31.jpg",
    "category": "剧集连看",
    "categoryUrl": "./category-drama-series.html"
  },
  {
    "id": "0032",
    "title": "怪诞尸新娘",
    "year": "2025",
    "region": "美国",
    "type": "电影",
    "genre": "恐怖、黑色喜剧、爱情",
    "tags": [
      "活人婚礼",
      "地府爱情",
      "哥特美学"
    ],
    "oneLine": "他在人间逃婚,在阴间被逼婚,最后发现两边的新娘都不是省油的灯。",
    "url": "./movies/movie-0032.html",
    "cover": "./32.jpg",
    "category": "经典片库",
    "categoryUrl": "./category-classic-library.html"
  },
  {
    "id": "0033",
    "title": "谁在你身边",
    "year": "2025",
    "region": "中国台湾",
    "type": "剧集",
    "genre": "悬疑,惊悚,家庭",
    "tags": [
      "人格分裂",
      "心理惊悚",
      "枕边人",
      "家庭暴力"
    ],
    "oneLine": "新婚妻子总觉得家里有人,装了监控后她惊恐地发现,那个半夜在客厅踱步的“人”竟然是自己丈夫。",
    "url": "./movies/movie-0033.html",
    "cover": "./33.jpg",
    "category": "奇幻科幻",
    "categoryUrl": "./category-fantasy-sci-fi.html"
  },
  {
    "id": "0034",
    "title": "幽暗哈瓦那",
    "year": "2025",
    "region": "古巴/西班牙",
    "type": "电影",
    "genre": "悬疑/惊悚/剧情",
    "tags": [
      "黑色电影",
      "热带",
      "失踪",
      "记忆"
    ],
    "oneLine": "私家侦探在哈瓦那旧城寻找失踪少女,却卷入一场涉及五十年前的殖民诅咒。",
    "url": "./movies/movie-0034.html",
    "cover": "./34.jpg",
    "category": "经典片库",
    "categoryUrl": "./category-classic-library.html"
  },
  {
    "id": "0035",
    "title": "燕语春风",
    "year": "1975",
    "region": "中国台湾",
    "type": "电影",
    "genre": "爱情,文艺",
    "tags": [
      "琼瑶式",
      "怀旧",
      "初恋",
      "唯美"
    ],
    "oneLine": "五十年代鹿港小镇,卖豆腐的哑女阿燕与来自台北的大学生,用一盒胭脂说尽了不能说出口的爱。",
    "url": "./movies/movie-0035.html",
    "cover": "./35.jpg",
    "category": "全球佳作",
    "categoryUrl": "./category-global-stories.html"
  },
  {
    "id": "0036",
    "title": "剑出江南",
    "year": "2023",
    "region": "中国大陆",
    "type": "电视剧",
    "genre": "古装/武侠",
    "tags": [
      "江湖复仇",
      "铸剑传奇",
      "权谋"
    ],
    "oneLine": "铸剑世家惨遭灭门,唯一幸存少女携祖传剑谱,踏上血洗江湖的复仇之路。",
    "url": "./movies/movie-0036.html",
    "cover": "./36.jpg",
    "category": "经典片库",
    "categoryUrl": "./category-classic-library.html"
  },
  {
    "id": "0037",
    "title": "天台镇",
    "year": "2025",
    "region": "中国台湾",
    "type": "剧集",
    "genre": "悬疑/奇幻/社会",
    "tags": [
      "都市传说",
      "黑色幽默",
      "社区悬疑",
      "单元剧",
      "人性寓言"
    ],
    "oneLine": "繁华都市楼顶的违章建筑群“天台镇”里,突然出现了一具没有指纹的尸体,镇长下令封镇。",
    "url": "./movies/movie-0037.html",
    "cover": "./37.jpg",
    "category": "悬疑夜场",
    "categoryUrl": "./category-suspense-night.html"
  },
  {
    "id": "0038",
    "title": "雾险一博",
    "year": "2025",
    "region": "中国大陆",
    "type": "电影",
    "genre": "悬疑/冒险",
    "tags": [
      "重庆",
      "迷雾",
      "地下城",
      "失踪案",
      "方言本格"
    ],
    "oneLine": "重庆浓雾封城的夜晚,一名私家侦探接到神秘委托:找到一座不存在于任何地图的“第25号防空洞”。",
    "url": "./movies/movie-0038.html",
    "cover": "./38.jpg",
    "category": "家庭生活",
    "categoryUrl": "./category-family-life.html"
  },
  {
    "id": "0039",
    "title": "爱神2015",
    "year": "2015",
    "region": "中国香港",
    "type": "电影",
    "genre": "爱情,剧情",
    "tags": [
      "都市情欲",
      "碎片叙事",
      "文艺片"
    ],
    "oneLine": "一张丢失的快递单,将四个互不相识的都市男女卷入一场关于爱、欲望与谎言的情感迷宫。",
    "url": "./movies/movie-0039.html",
    "cover": "./39.jpg",
    "category": "历史古装",
    "categoryUrl": "./category-history-costume.html"
  },
  {
    "id": "0040",
    "title": "铠甲勇士之雅塔莱斯",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "genre": "动作/科幻/儿童",
    "tags": [
      "铠甲勇士",
      "新英雄",
      "宇宙魔方",
      "守护",
      "合体"
    ],
    "oneLine": "一个普通外卖小哥捡到破损的雅塔莱斯铠甲召唤器,发现这个宇宙最弱的铠甲,可能是拯救地球的唯一希望。",
    "url": "./movies/movie-0040.html",
    "cover": "./40.jpg",
    "category": "青春喜剧",
    "categoryUrl": "./category-youth-comedy.html"
  },
  {
    "id": "0041",
    "title": "群花绽放、彷如修罗",
    "year": "2024",
    "region": "日本",
    "type": "动画剧集",
    "genre": "校园/青春/文艺",
    "tags": [
      "戏剧社",
      "朗读",
      "文学",
      "治愈",
      "花语"
    ],
    "oneLine": "高二那年春天,全校最孤僻的女生加入了濒临废部的戏剧社,她不懂表演,却能听见每个字的声音。",
    "url": "./movies/movie-0041.html",
    "cover": "./41.jpg",
    "category": "热映精选",
    "categoryUrl": "./category-hot-picks.html"
  },
  {
    "id": "0042",
    "title": "天赐小红娘",
    "year": "2023",
    "region": "中国大陆",
    "type": "网剧",
    "genre": "奇幻,爱情",
    "tags": [
      "月老实习生",
      "前世今生",
      "古风",
      "喜剧"
    ],
    "oneLine": "实习仙娥错将冥婚红线牵给活人,为弥补过失她下凡当红娘,结果把自己也搭了进去。",
    "url": "./movies/movie-0042.html",
    "cover": "./42.jpg",
    "category": "悬疑夜场",
    "categoryUrl": "./category-suspense-night.html"
  },
  {
    "id": "0043",
    "title": "暴风雨国语",
    "year": "2024",
    "region": "中国香港",
    "type": "电影",
    "genre": "剧情/悬疑",
    "tags": [
      "商战",
      "家族恩怨",
      "人性",
      "台风夜",
      "心理博弈"
    ],
    "oneLine": "一场百年难遇的台风夜里,三兄妹被困豪宅,父亲的遗嘱竟是一张空白支票。",
    "url": "./movies/movie-0043.html",
    "cover": "./43.jpg",
    "category": "家庭生活",
    "categoryUrl": "./category-family-life.html"
  },
  {
    "id": "0044",
    "title": "女生日记之做决定事务所",
    "year": "2024",
    "region": "中国",
    "type": "剧集/网剧",
    "genre": "喜剧/青春/奇幻",
    "tags": [
      "校园",
      "平行世界",
      "选择",
      "女性友谊",
      "轻奇幻"
    ],
    "oneLine": "大四女生意外创办“做决定事务所”,每一次为客户做出选择,都让她看到自己在平行世界里的另一种人生。",
    "url": "./movies/movie-0044.html",
    "cover": "./44.jpg",
    "category": "院线热片",
    "categoryUrl": "./category-cinema-hits.html"
  },
  {
    "id": "0045",
    "title": "想跟你在一起",
    "year": "2022",
    "region": "泰国",
    "type": "电视剧",
    "genre": "爱情/同性",
    "tags": [
      "BL",
      "竹马",
      "乡村爱情",
      "家庭接纳",
      "治愈系"
    ],
    "oneLine": "青梅竹马的两人在曼谷失散十年,回到故乡后发现对方就住在隔壁,却都不敢敲门。",
    "url": "./movies/movie-0045.html",
    "cover": "./45.jpg",
    "category": "院线热片",
    "categoryUrl": "./category-cinema-hits.html"
  },
  {
    "id": "0046",
    "title": "亚历山大和他最糟糕的旅程",
    "year": "2026",
    "region": "美国",
    "type": "动画电影",
    "genre": "喜剧/家庭/冒险",
    "tags": [
      "倒霉蛋",
      "公路旅行",
      "成长治愈",
      "动物伙伴"
    ],
    "oneLine": "十岁男孩亚历山大在夏令营返程途中,遭遇了从行李丢失到火山爆发的连环灾难。",
    "url": "./movies/movie-0046.html",
    "cover": "./46.jpg",
    "category": "全球佳作",
    "categoryUrl": "./category-global-stories.html"
  },
  {
    "id": "0047",
    "title": "我不卖身我卖子宫",
    "year": "2008",
    "region": "中国香港",
    "type": "电影",
    "genre": "剧情/社会",
    "tags": [
      "代孕",
      "底层女性",
      "黑色幽默",
      "邱礼涛",
      "写实"
    ],
    "oneLine": "为了给瘫痪丈夫治病,中年妇女阿黎决定去当“代孕妈妈”,却发现子宫是她唯一能卖的“商品”。",
    "url": "./movies/movie-0047.html",
    "cover": "./47.jpg",
    "category": "动作专区",
    "categoryUrl": "./category-action-zone.html"
  },
  {
    "id": "0048",
    "title": "将军的农家妻",
    "year": "2024",
    "region": "中国大陆",
    "type": "剧集/古装",
    "genre": "爱情/喜剧/种田",
    "tags": [
      "穿越",
      "种田",
      "将军",
      "先婚后爱"
    ],
    "oneLine": "现代美食博主一朝穿越,成了被退婚的农家女,还顺手捡了一个失忆的瘸腿将军当相公。",
    "url": "./movies/movie-0048.html",
    "cover": "./48.jpg",
    "category": "家庭生活",
    "categoryUrl": "./category-family-life.html"
  },
  {
    "id": "0049",
    "title": "掘火者",
    "year": "2024",
    "region": "美国",
    "type": "电影",
    "genre": "悬疑剧情",
    "tags": [
      "考古",
      "西部",
      "家族秘密"
    ],
    "oneLine": "一个在沙漠挖掘恐龙化石的古生物学家,挖出了一具带着现代手表的19世纪牛仔遗骸。",
    "url": "./movies/movie-0049.html",
    "cover": "./49.jpg",
    "category": "剧集连看",
    "categoryUrl": "./category-drama-series.html"
  },
  {
    "id": "0050",
    "title": "未来世界1976",
    "year": "1976",
    "region": "美国",
    "type": "电影",
    "genre": "科幻,惊悚",
    "tags": [
      "复古未来主义",
      "克隆人",
      "主题公园",
      "觉醒"
    ],
    "oneLine": "在1976年的想象中,1985年的机器人主题公园发生暴乱,两名游客成为猎物。",
    "url": "./movies/movie-0050.html",
    "cover": "./50.jpg",
    "category": "悬疑夜场",
    "categoryUrl": "./category-suspense-night.html"
  },
  {
    "id": "0051",
    "title": "谤法:在此矣",
    "year": "2024",
    "region": "韩国",
    "type": "电影",
    "genre": "恐怖/动作/惊悚",
    "tags": [
      "巫术",
      "咒术对决",
      "IT企业邪教",
      "大尺度"
    ],
    "oneLine": "能用诅咒杀人的少女,追踪到潜伏在互联网巨头内的巨型邪教。",
    "url": "./movies/movie-0051.html",
    "cover": "./51.jpg",
    "category": "动作专区",
    "categoryUrl": "./category-action-zone.html"
  },
  {
    "id": "0052",
    "title": "金装少年唐伯虎",
    "year": "2025",
    "region": "中国内地",
    "type": "电影",
    "genre": "喜剧,古装,青春",
    "tags": [
      "少年唐伯虎",
      "学霸逆袭",
      "无厘头"
    ],
    "oneLine": "十六岁的唐伯虎在书院里只是个学渣,却因一幅画被卷入江南四大才子的终极考卷之争。",
    "url": "./movies/movie-0052.html",
    "cover": "./52.jpg",
    "category": "热映精选",
    "categoryUrl": "./category-hot-picks.html"
  },
  {
    "id": "0053",
    "title": "快乐冬季",
    "year": "2021",
    "region": "中国大陆",
    "type": "电影",
    "genre": "剧情,家庭",
    "tags": [
      "冬日",
      "治愈",
      "亲情",
      "小镇",
      "成长"
    ],
    "oneLine": "一个被寄养在北方小镇的问题少年,在冰天雪地里遇到了一位神秘老人,揭开了自己身世的温暖秘密。",
    "url": "./movies/movie-0053.html",
    "cover": "./53.jpg",
    "category": "奇幻科幻",
    "categoryUrl": "./category-fantasy-sci-fi.html"
  },
  {
    "id": "0054",
    "title": "一杯上路2021",
    "year": "2021",
    "region": "泰国",
    "type": "电影",
    "genre": "剧情/公路/文艺",
    "tags": [
      "绝症",
      "公路",
      "友情",
      "回忆",
      "治愈"
    ],
    "oneLine": "身患绝症的青年在死前收到好友的请柬,必须开车横穿泰国,送还20年前偷走的“一杯酒”。",
    "url": "./movies/movie-0054.html",
    "cover": "./54.jpg",
    "category": "家庭生活",
    "categoryUrl": "./category-family-life.html"
  },
  {
    "id": "0055",
    "title": "嗨,妈妈!",
    "year": "2025",
    "region": "美国",
    "type": "电影",
    "genre": "喜剧/科幻/家庭",
    "tags": [
      "克隆",
      "母女关系",
      "中年危机",
      "温情喜剧"
    ],
    "oneLine": "叛逆少女用零花钱订购了一个“年轻版妈妈”的克隆人来气她,结果克隆妈妈比自己还像亲女儿。",
    "url": "./movies/movie-0055.html",
    "cover": "./55.jpg",
    "category": "青春喜剧",
    "categoryUrl": "./category-youth-comedy.html"
  },
  {
    "id": "0056",
    "title": "新婚风波",
    "year": "2023",
    "region": "中国大陆",
    "type": "电影",
    "genre": "喜剧/剧情",
    "tags": [
      "婚姻",
      "家庭",
      "黑色幽默"
    ],
    "oneLine": "婚礼当天,新娘收到一条匿名短信:“你老公昨晚在我床上。",
    "url": "./movies/movie-0056.html",
    "cover": "./56.jpg",
    "category": "全球佳作",
    "categoryUrl": "./category-global-stories.html"
  },
  {
    "id": "0057",
    "title": "月光大俠",
    "year": "2020",
    "region": "中国台湾",
    "type": "电影",
    "genre": "奇幻/动作/喜剧",
    "tags": [
      "超级英雄本土化",
      "夜市文化",
      "中年危机"
    ],
    "oneLine": "台北夜市一个卖烤香肠的大叔,每到月圆之夜就变成穿蓝白拖的侠客。",
    "url": "./movies/movie-0057.html",
    "cover": "./57.jpg",
    "category": "剧集连看",
    "categoryUrl": "./category-drama-series.html"
  },
  {
    "id": "0058",
    "title": "西部世界第四季",
    "year": "2026",
    "region": "美国",
    "type": "剧集",
    "genre": "科幻/悬疑/西部",
    "tags": [
      "AI觉醒",
      "真实人类",
      "循环",
      "哲学"
    ],
    "oneLine": "当人类世界也成为被写好的剧本,第一批“真实人类”开始反抗,而德洛丽丝从代码深处归来。",
    "url": "./movies/movie-0058.html",
    "cover": "./58.jpg",
    "category": "家庭生活",
    "categoryUrl": "./category-family-life.html"
  },
  {
    "id": "0059",
    "title": "大奥第二季",
    "year": "2024",
    "region": "日本",
    "type": "剧集",
    "genre": "剧情,历史",
    "tags": [
      "男女逆转",
      "宫斗",
      "权力",
      "德川幕府"
    ],
    "oneLine": "男女逆转的平行时空,女将军的后宫“大奥”迎来了一位能预知未来的神秘美男子。",
    "url": "./movies/movie-0059.html",
    "cover": "./59.jpg",
    "category": "全球佳作",
    "categoryUrl": "./category-global-stories.html"
  },
  {
    "id": "0060",
    "title": "花都肉弹",
    "year": "1996",
    "region": "中国香港",
    "type": "电影",
    "genre": "动作,犯罪,惊悚",
    "tags": [
      "女杀手",
      "人体炸弹",
      "巴黎",
      "黑帮火并",
      "港产片"
    ],
    "oneLine": "一名被改造成“人体炸弹”的失忆女杀手在巴黎唐人街醒来,她必须在身体爆炸前,找回记忆并向黑帮复仇。",
    "url": "./movies/movie-0060.html",
    "cover": "./60.jpg",
    "category": "动作专区",
    "categoryUrl": "./category-action-zone.html"
  },
  {
    "id": "0061",
    "title": "风铃",
    "year": "1992",
    "region": "日本",
    "type": "电影",
    "genre": "剧情,家庭",
    "tags": [
      "老年",
      "孤独",
      "邻里关系",
      "治愈",
      "季节"
    ],
    "oneLine": "一位独居老人每天听邻居的风铃声,直到风铃突然消失,他才发现自己从未真正听过它。",
    "url": "./movies/movie-0061.html",
    "cover": "./61.jpg",
    "category": "家庭生活",
    "categoryUrl": "./category-family-life.html"
  },
  {
    "id": "0062",
    "title": "抢劫恋爱",
    "year": "2024",
    "region": "韩国",
    "type": "电影",
    "genre": "喜剧、爱情、犯罪",
    "tags": [
      "银行劫案",
      "谈判专家",
      "人质",
      "乌龙",
      "双向奔赴"
    ],
    "oneLine": "一心想抢银行还高利贷的loser,意外劫持了来银行办理贷款分期的顶级恋爱谈判专家,她开始用谈恋爱的方式说服他自首。",
    "url": "./movies/movie-0062.html",
    "cover": "./62.jpg",
    "category": "经典片库",
    "categoryUrl": "./category-classic-library.html"
  },
  {
    "id": "0063",
    "title": "报告王爷,王妃是只猫",
    "year": "2021",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "古装/奇幻/爱情",
    "tags": [
      "甜宠",
      "奇幻",
      "穿越",
      "萌宠"
    ],
    "oneLine": "特警苏小晚意外穿越成战神的王妃,更离谱的是,她每天深夜会变成一只猫,而王爷居然有严重的猫毛过敏。",
    "url": "./movies/movie-0063.html",
    "cover": "./63.jpg",
    "category": "热映精选",
    "categoryUrl": "./category-hot-picks.html"
  },
  {
    "id": "0064",
    "title": "心灵烙码",
    "year": "2026",
    "region": "阿根廷",
    "type": "电影",
    "genre": "奇幻,剧情",
    "tags": [
      "记忆删除",
      "视觉隐喻",
      "爱情"
    ],
    "oneLine": "在一家能删除特定记忆的诊所里,一位女技师发现,她自己的爱情烙印竟然被前任老板用代码锁死。",
    "url": "./movies/movie-0064.html",
    "cover": "./64.jpg",
    "category": "全球佳作",
    "categoryUrl": "./category-global-stories.html"
  },
  {
    "id": "0065",
    "title": "女儿国嬉春",
    "year": "1992",
    "region": "中国香港",
    "type": "电影",
    "genre": "情色,古装,喜剧",
    "tags": [
      "风月",
      "西游",
      "艳情"
    ],
    "oneLine": "唐僧师徒误入女儿国,却发现这里的春天比火焰山还热。",
    "url": "./movies/movie-0065.html",
    "cover": "./65.jpg",
    "category": "家庭生活",
    "categoryUrl": "./category-family-life.html"
  },
  {
    "id": "0066",
    "title": "狼厅",
    "year": "2015",
    "region": "英国",
    "type": "电视剧",
    "genre": "历史/剧情/政治",
    "tags": [
      "都铎王朝",
      "权谋",
      "克伦威尔"
    ],
    "oneLine": "铁匠之子托马斯·克伦威尔如何凭借冷酷与智慧,在亨利八世的血腥宫廷中一步步爬上权力的巅峰。",
    "url": "./movies/movie-0066.html",
    "cover": "./66.jpg",
    "category": "经典片库",
    "categoryUrl": "./category-classic-library.html"
  },
  {
    "id": "0067",
    "title": "红天使",
    "year": "2023",
    "region": "法国/意大利",
    "type": "电影",
    "genre": "爱情/战争",
    "tags": [
      "一战",
      "护士",
      "禁忌之恋",
      "女性觉醒",
      "诗意暴力"
    ],
    "oneLine": "一战战场上,一位伤痕累累的法国贵族护士,与一名德国战俘在停尸房里产生了超越敌我的爱情。",
    "url": "./movies/movie-0067.html",
    "cover": "./67.jpg",
    "category": "院线热片",
    "categoryUrl": "./category-cinema-hits.html"
  },
  {
    "id": "0068",
    "title": "魔娃娃2",
    "year": "2024",
    "region": "中国香港",
    "type": "电影",
    "genre": "恐怖/灵异",
    "tags": [
      "邪灵玩偶",
      "续集",
      "中式恐怖"
    ],
    "oneLine": "上一部中幸存的心理医生,发现当年那个诅咒玩偶被做成了AI交互玩具,正在进入千家万户。",
    "url": "./movies/movie-0068.html",
    "cover": "./68.jpg",
    "category": "都市爱情",
    "categoryUrl": "./category-romance-city.html"
  },
  {
    "id": "0069",
    "title": "碧波仙子",
    "year": "2025",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "古装/奇幻/爱情",
    "tags": [
      "神话",
      "水神",
      "人妖恋",
      "环保"
    ],
    "oneLine": "古代版“水污染”故事:碧波潭的荷花仙子因潭水被投毒而化为白骨,书生为救她必须找出下毒的真凶。",
    "url": "./movies/movie-0069.html",
    "cover": "./69.jpg",
    "category": "全球佳作",
    "categoryUrl": "./category-global-stories.html"
  },
  {
    "id": "0070",
    "title": "三只老虎",
    "year": "2025",
    "region": "中国大陆",
    "type": "电影",
    "genre": "犯罪,喜剧",
    "tags": [
      "黑色幽默",
      "绑架",
      "乌龙"
    ],
    "oneLine": "三个Loser计划绑架富二代,却错把一个冒充富二代的小偷当成了目标,结果三方势力搅成一锅粥。",
    "url": "./movies/movie-0070.html",
    "cover": "./70.jpg",
    "category": "悬疑夜场",
    "categoryUrl": "./category-suspense-night.html"
  },
  {
    "id": "0071",
    "title": "微笑以对",
    "year": "2025",
    "region": "日本",
    "type": "剧集",
    "genre": "剧情,悬疑",
    "tags": [
      "职场霸凌",
      "复仇",
      "假笑",
      "心理战"
    ],
    "oneLine": "一个永远微笑的前台接待员,在遭受非人待遇后,用无懈可击的假笑对整栋写字楼展开了优雅复仇。",
    "url": "./movies/movie-0071.html",
    "cover": "./71.jpg",
    "category": "剧集连看",
    "categoryUrl": "./category-drama-series.html"
  },
  {
    "id": "0072",
    "title": "英格丽向西行",
    "year": "2024",
    "region": "美国",
    "type": "电影",
    "genre": "喜剧,剧情",
    "tags": [
      "公路",
      "网红",
      "模仿",
      "社交网络",
      "荒诞"
    ],
    "oneLine": "痴迷网红的脸盲症女孩,整容成偶像的样子,替她参加一场不能露脸的沙漠音乐节。",
    "url": "./movies/movie-0072.html",
    "cover": "./72.jpg",
    "category": "都市爱情",
    "categoryUrl": "./category-romance-city.html"
  },
  {
    "id": "0073",
    "title": "龙少爷粤语",
    "year": "1982",
    "region": "中国香港",
    "type": "电影",
    "genre": "动作",
    "tags": [
      "功夫喜剧",
      "民国背景",
      "夺宝题材",
      "成龙早期"
    ],
    "oneLine": "民国阔少龙少爷为追回祖传玉玺,误打误撞卷入江湖纷争。",
    "url": "./movies/movie-0073.html",
    "cover": "./73.jpg",
    "category": "动作专区",
    "categoryUrl": "./category-action-zone.html"
  },
  {
    "id": "0074",
    "title": "公正裁决",
    "year": "2026",
    "region": "韩国",
    "type": "剧集",
    "genre": "律政/惊悚/动作",
    "tags": [
      "司法腐败",
      "复仇",
      "程序正义",
      "以暴制暴"
    ],
    "oneLine": "一名被解雇的法官戴上兜帽,在深夜化身“地下裁判官”,专门惩罚法律制裁不了的恶人。",
    "url": "./movies/movie-0074.html",
    "cover": "./74.jpg",
    "category": "都市爱情",
    "categoryUrl": "./category-romance-city.html"
  },
  {
    "id": "0075",
    "title": "踢到宝",
    "year": "1992",
    "region": "中国香港",
    "type": "电影",
    "genre": "喜剧/动作/奇幻",
    "tags": [
      "港式鬼片",
      "灵幻喜剧",
      "小人物逆袭",
      "捉鬼",
      "家庭温情"
    ],
    "oneLine": "倒霉蛋阿宝捡到一个金元宝,却发现自己被一群穷鬼和一只富鬼同时盯上了。",
    "url": "./movies/movie-0075.html",
    "cover": "./75.jpg",
    "category": "全球佳作",
    "categoryUrl": "./category-global-stories.html"
  },
  {
    "id": "0076",
    "title": "男欢女爱",
    "year": "2022",
    "region": "法国",
    "type": "电影",
    "genre": "爱情喜剧",
    "tags": [
      "巴黎",
      "开放式关系",
      "幽默"
    ],
    "oneLine": "一对约定各玩各的情侣,在同时爱上同一个第三者后,被迫重新思考爱情的定义。",
    "url": "./movies/movie-0076.html",
    "cover": "./76.jpg",
    "category": "历史古装",
    "categoryUrl": "./category-history-costume.html"
  },
  {
    "id": "0077",
    "title": "单身厨房2012",
    "year": "2012",
    "region": "美国",
    "type": "电视剧",
    "genre": "喜剧,爱情",
    "tags": [
      "情景喜剧",
      "都市",
      "单身",
      "美食"
    ],
    "oneLine": "六位单身室友合租一个公寓,共用一间厨房,却在冰箱里发现前女友留下的冷冻求婚戒指。",
    "url": "./movies/movie-0077.html",
    "cover": "./77.jpg",
    "category": "热映精选",
    "categoryUrl": "./category-hot-picks.html"
  },
  {
    "id": "0078",
    "title": "摩登原始人第一季",
    "year": "2025",
    "region": "美国",
    "type": "电视剧",
    "genre": "动画、喜剧、家庭",
    "tags": [
      "重启",
      "石器时代",
      "现代梗",
      "合家欢"
    ],
    "oneLine": "石器时代的原始人开始用“石板书”发朋友圈,邻居恐龙成了网红。",
    "url": "./movies/movie-0078.html",
    "cover": "./78.jpg",
    "category": "悬疑夜场",
    "categoryUrl": "./category-suspense-night.html"
  },
  {
    "id": "0079",
    "title": "鬼马小精灵之千禧圣诞快乐",
    "year": "2024",
    "region": "美国",
    "type": "电影/动画",
    "genre": "动画/喜剧/家庭/奇幻",
    "tags": [
      "圣诞",
      "小精灵",
      "穿越",
      "90年代怀旧",
      "合家欢"
    ],
    "oneLine": "为了拯救圣诞节,鬼马小精灵无意中穿越到1999年,必须说服当年的孩子们放弃“千年虫恐慌”才能回到现在。",
    "url": "./movies/movie-0079.html",
    "cover": "./79.jpg",
    "category": "剧集连看",
    "categoryUrl": "./category-drama-series.html"
  },
  {
    "id": "0080",
    "title": "华山论剑之五绝争锋",
    "year": "1994",
    "region": "中国香港",
    "type": "电影",
    "genre": "武侠/动作",
    "tags": [
      "金庸同人",
      "五绝",
      "江湖",
      "比武",
      "港产片"
    ],
    "oneLine": "东邪、西毒、南帝、北丐、中神通齐聚华山之巅,但这场决定《九阴真经》归属的比武,从一开始就藏着卑鄙的阴谋。",
    "url": "./movies/movie-0080.html",
    "cover": "./80.jpg",
    "category": "青春喜剧",
    "categoryUrl": "./category-youth-comedy.html"
  },
  {
    "id": "0081",
    "title": "杀入爱情街",
    "year": "2025",
    "region": "台湾",
    "type": "电影",
    "genre": "爱情,犯罪,黑色幽默",
    "tags": [
      "杀手",
      "红灯区",
      "荒诞恋爱"
    ],
    "oneLine": "一个铁石心肠的女杀手在执行任务时,却对目标一见钟情,两人在红灯区展开了一场猫鼠游戏。",
    "url": "./movies/movie-0081.html",
    "cover": "./81.jpg",
    "category": "剧集连看",
    "categoryUrl": "./category-drama-series.html"
  },
  {
    "id": "0082",
    "title": "傻瓜谍报员",
    "year": "1982",
    "region": "中国香港",
    "type": "电影",
    "genre": "喜剧,动作,间谍",
    "tags": [
      "乌龙间谍",
      "007恶搞",
      "港式无厘头"
    ],
    "oneLine": "一名卖鱼蛋的小贩被误认为是失踪的超级特工,被派去执行一项不可能的任务——偷取“邪恶博士”的缩水枪。",
    "url": "./movies/movie-0082.html",
    "cover": "./82.jpg",
    "category": "热映精选",
    "categoryUrl": "./category-hot-picks.html"
  },
  {
    "id": "0083",
    "title": "24小时赌命倒数",
    "year": "2024",
    "region": "美国",
    "type": "电影",
    "genre": "动作、惊悚",
    "tags": [
      "高概念",
      "密室逃脱",
      "政治阴谋"
    ],
    "oneLine": "一名被陷害的前特工必须在24小时内破解亡妻留下的谜题,否则整座城市将化为灰烬。",
    "url": "./movies/movie-0083.html",
    "cover": "./83.jpg",
    "category": "剧集连看",
    "categoryUrl": "./category-drama-series.html"
  },
  {
    "id": "0084",
    "title": "生死相对",
    "year": "2024",
    "region": "美国",
    "type": "电影",
    "genre": "惊悚,悬疑,犯罪",
    "tags": [
      "双主角",
      "镜像犯罪",
      "猫鼠游戏"
    ],
    "oneLine": "一个专门处理连环杀手案件的退休FBI侧写师,发现自己就是最后一案的真凶。",
    "url": "./movies/movie-0084.html",
    "cover": "./84.jpg",
    "category": "经典片库",
    "categoryUrl": "./category-classic-library.html"
  },
  {
    "id": "0085",
    "title": "水之患",
    "year": "2023",
    "region": "日本",
    "type": "电影",
    "genre": "恐怖、环境、心理",
    "tags": [
      "水污染",
      "集体癔症",
      "河童诅咒",
      "村落"
    ],
    "oneLine": "小镇的自来水让所有人变得善良温和,直到有人发现,水中倒映出的自己正在流泪。",
    "url": "./movies/movie-0085.html",
    "cover": "./85.jpg",
    "category": "奇幻科幻",
    "categoryUrl": "./category-fantasy-sci-fi.html"
  },
  {
    "id": "0086",
    "title": "科哈塞特虐杀电影",
    "year": "2025",
    "region": "美国",
    "type": "电影",
    "genre": "恐怖,伪纪录片,惊悚",
    "tags": [
      "虐杀",
      "寻回录像",
      "小镇",
      "诅咒",
      "仪式"
    ],
    "oneLine": "一名记者调查五年前的“科哈塞特狂欢节屠杀案”,当她找到唯一的幸存录像带时,凶手正在录像带里看着她。",
    "url": "./movies/movie-0086.html",
    "cover": "./86.jpg",
    "category": "奇幻科幻",
    "categoryUrl": "./category-fantasy-sci-fi.html"
  },
  {
    "id": "0087",
    "title": "我为钱狂",
    "year": "2022",
    "region": "美国",
    "type": "电影",
    "genre": "黑色喜剧",
    "tags": [
      "犯罪",
      "贪婪",
      "讽刺",
      "女性",
      "华尔街"
    ],
    "oneLine": "三位被裁员的中产女性策划了一场天衣无缝的银行金库盗窃案,只为报复毁掉她们生活的资本主义机器。",
    "url": "./movies/movie-0087.html",
    "cover": "./87.jpg",
    "category": "动作专区",
    "categoryUrl": "./category-action-zone.html"
  },
  {
    "id": "0088",
    "title": "别班",
    "year": "2024",
    "region": "日本",
    "type": "剧集",
    "genre": "悬疑/职场/惊悚",
    "tags": [
      "社畜",
      "平行世界",
      "公司阴谋",
      "反转",
      "人性"
    ],
    "oneLine": "一名普通上班族在加班时意外闯入公司从未出现在建筑图纸上的“第7层”,这里的员工过着与他完全相反的人生。",
    "url": "./movies/movie-0088.html",
    "cover": "./88.jpg",
    "category": "青春喜剧",
    "categoryUrl": "./category-youth-comedy.html"
  },
  {
    "id": "0089",
    "title": "我们的挑战",
    "year": "2025",
    "region": "韩国",
    "type": "综艺/真人秀",
    "genre": "真人秀/游戏/冒险",
    "tags": [
      "竞技",
      "搞笑",
      "明星",
      "极限"
    ],
    "oneLine": "六位过气艺人被送到无人岛,每人手里只有一个求救器和一项匪夷所思的奥运项目挑战。",
    "url": "./movies/movie-0089.html",
    "cover": "./89.jpg",
    "category": "都市爱情",
    "categoryUrl": "./category-romance-city.html"
  },
  {
    "id": "0090",
    "title": "冰雪谣",
    "year": "2023",
    "region": "中国大陆",
    "type": "电影",
    "genre": "爱情,奇幻,灾难",
    "tags": [
      "极寒末世",
      "生死相依",
      "视觉奇观"
    ],
    "oneLine": "极寒末日,唯一的幸存者小镇里,一个会唱歌的女孩成了所有人的希望。",
    "url": "./movies/movie-0090.html",
    "cover": "./90.jpg",
    "category": "家庭生活",
    "categoryUrl": "./category-family-life.html"
  },
  {
    "id": "0091",
    "title": "曼谷保镖",
    "year": "2004",
    "region": "泰国",
    "type": "电影",
    "genre": "动作/喜剧",
    "tags": [
      "泰式功夫",
      "保镖故事",
      "搞笑",
      "拳拳到肉"
    ],
    "oneLine": "一名顶级保镖因保护政要失败而隐姓埋名,却在小村庄里用泰拳教训了前来买地的黑帮。",
    "url": "./movies/movie-0091.html",
    "cover": "./91.jpg",
    "category": "院线热片",
    "categoryUrl": "./category-cinema-hits.html"
  },
  {
    "id": "0092",
    "title": "听见歌 再唱",
    "year": "2025",
    "region": "中国台湾",
    "type": "电影",
    "genre": "音乐/剧情",
    "tags": [
      "失聪",
      "合唱团",
      "治愈",
      "师生",
      "真实改编"
    ],
    "oneLine": "失聪女孩凭借振动感知音律,带领一群被嘲笑“五音不全”的留守儿童闯进全国合唱大赛。",
    "url": "./movies/movie-0092.html",
    "cover": "./92.jpg",
    "category": "动作专区",
    "categoryUrl": "./category-action-zone.html"
  },
  {
    "id": "0093",
    "title": "七重天",
    "year": "2025",
    "region": "德国",
    "type": "剧集",
    "genre": "科幻/悬疑",
    "tags": [
      "VR",
      "意识上传",
      "伦理",
      "反乌托邦"
    ],
    "oneLine": "一款名为“七重天”的死后意识上传服务风靡全球,直到用户们在虚拟天堂里再也无法死去。",
    "url": "./movies/movie-0093.html",
    "cover": "./93.jpg",
    "category": "全球佳作",
    "categoryUrl": "./category-global-stories.html"
  },
  {
    "id": "0094",
    "title": "昙花梦",
    "year": "2024",
    "region": "中国大陆",
    "type": "电视剧/网剧",
    "genre": "爱情/悬疑/民国",
    "tags": [
      "间谍奇情",
      "昙花密码",
      "虐恋"
    ],
    "oneLine": "民国上海,女间谍用昙花密码传递情报,却爱上了她要摧毁的敌方特工首领。",
    "url": "./movies/movie-0094.html",
    "cover": "./94.jpg",
    "category": "历史古装",
    "categoryUrl": "./category-history-costume.html"
  },
  {
    "id": "0095",
    "title": "圆梦公司",
    "year": "2023",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "剧情/奇幻",
    "tags": [
      "许愿",
      "代价",
      "人性"
    ],
    "oneLine": "一家看似普通的公司,声称能实现任何梦想,但每个客户都要付出一段记忆作为利息。",
    "url": "./movies/movie-0095.html",
    "cover": "./95.jpg",
    "category": "热映精选",
    "categoryUrl": "./category-hot-picks.html"
  },
  {
    "id": "0096",
    "title": "王子与乞丐",
    "year": "2025",
    "region": "英国/美国",
    "type": "电影",
    "genre": "剧情/冒险",
    "tags": [
      "互换身份",
      "讽刺",
      "黑色幽默",
      "阶级"
    ],
    "oneLine": "一个亿万富豪之子和一个流浪少年被心理医生安排了“身份互换实验”,结果两人都不愿意换回来。",
    "url": "./movies/movie-0096.html",
    "cover": "./96.jpg",
    "category": "热映精选",
    "categoryUrl": "./category-hot-picks.html"
  },
  {
    "id": "0097",
    "title": "随时随地杀死你",
    "year": "2025",
    "region": "日本",
    "type": "电影",
    "genre": "惊悚,悬疑,科幻",
    "tags": [
      "手机诅咒",
      "即时死亡",
      "逻辑陷阱",
      "高智商"
    ],
    "oneLine": "你手机收到一条短信:“五分钟内不说出想杀的人,你死”,游戏开始。",
    "url": "./movies/movie-0097.html",
    "cover": "./97.jpg",
    "category": "经典片库",
    "categoryUrl": "./category-classic-library.html"
  },
  {
    "id": "0098",
    "title": "神探南茜第一季",
    "year": "2024",
    "region": "美国",
    "type": "剧集",
    "genre": "悬疑/青少年/剧情",
    "tags": [
      "女侦探",
      "高中",
      "小镇谜团",
      "家族秘密",
      "改编"
    ],
    "oneLine": "18岁的南茜·德鲁在调查母亲离世真相时,发现整个小镇都建立在一个巨大的谎言之上。",
    "url": "./movies/movie-0098.html",
    "cover": "./98.jpg",
    "category": "动作专区",
    "categoryUrl": "./category-action-zone.html"
  },
  {
    "id": "0099",
    "title": "钗光剑影",
    "year": "2026",
    "region": "中国香港",
    "type": "电影",
    "genre": "武侠、悬疑、爱情",
    "tags": [
      "女侠",
      "易容",
      "复仇",
      "江湖",
      "谍战"
    ],
    "oneLine": "青楼头牌与冷面刺客共用一张脸,当她们开始交换身份,整个江湖的暗杀名单都乱了。",
    "url": "./movies/movie-0099.html",
    "cover": "./99.jpg",
    "category": "家庭生活",
    "categoryUrl": "./category-family-life.html"
  },
  {
    "id": "0100",
    "title": "熊出没",
    "year": "2014",
    "region": "中国大陆",
    "type": "动画电影",
    "genre": "喜剧/动画/家庭",
    "tags": [
      "熊大熊二",
      "光头强",
      "春节档",
      "环保",
      "搞笑"
    ],
    "oneLine": "光头强被李老板逼着砍树,熊大熊二为了保护森林,和他展开了爆笑的追逐战。",
    "url": "./movies/movie-0100.html",
    "cover": "./100.jpg",
    "category": "全球佳作",
    "categoryUrl": "./category-global-stories.html"
  },
  {
    "id": "0101",
    "title": "头号嫌疑犯",
    "year": "2023",
    "region": "英国",
    "type": "剧集",
    "genre": "犯罪,悬疑,心理",
    "tags": [
      "女警探",
      "性侵案",
      "官僚黑幕",
      "连环反转"
    ],
    "oneLine": "女警探接手一桩连环性侵案,当她锁定头号嫌疑犯时,对方却是自己正在竞选市长的亲哥哥。",
    "url": "./movies/movie-0101.html",
    "cover": "./101.jpg",
    "category": "剧集连看",
    "categoryUrl": "./category-drama-series.html"
  },
  {
    "id": "0102",
    "title": "眨眼廿年",
    "year": "2025",
    "region": "中国香港",
    "type": "电影",
    "genre": "剧情,家庭,怀旧",
    "tags": [
      "回归",
      "时代变迁",
      "亲情",
      "香港故事"
    ],
    "oneLine": "修表匠在一次意外中失忆,醒来时记忆停留在1997年,眼前的老伴却已白发苍苍。",
    "url": "./movies/movie-0102.html",
    "cover": "./102.jpg",
    "category": "全球佳作",
    "categoryUrl": "./category-global-stories.html"
  },
  {
    "id": "0103",
    "title": "邪恶与疯狂国语版",
    "year": "2022",
    "region": "韩国/中国",
    "type": "剧集",
    "genre": "犯罪、动作、悬疑",
    "tags": [
      "双重人格",
      "腐败警察",
      "疯批正义",
      "韩剧国配"
    ],
    "oneLine": "一个懦弱腐败的警察,身体里住着一个疯狂正义的人格,两人共用一具身体,联手对抗整个警界的黑暗。",
    "url": "./movies/movie-0103.html",
    "cover": "./103.jpg",
    "category": "热映精选",
    "categoryUrl": "./category-hot-picks.html"
  },
  {
    "id": "0104",
    "title": "冒充者",
    "year": "2026",
    "region": "西班牙",
    "type": "电影",
    "genre": "悬疑、惊悚、心理",
    "tags": [
      "身份盗窃",
      "模仿犯",
      "心理操控",
      "高智商犯罪"
    ],
    "oneLine": "一个失业演员伪装成富豪失踪的儿子混入豪门,却发现自己正在成为下一个“失踪者”。",
    "url": "./movies/movie-0104.html",
    "cover": "./104.jpg",
    "category": "历史古装",
    "categoryUrl": "./category-history-costume.html"
  },
  {
    "id": "0105",
    "title": "碧血金沙",
    "year": "2026",
    "region": "墨西哥/美国",
    "type": "电影",
    "genre": "西部/冒险",
    "tags": [
      "淘金热",
      "人性贪婪",
      "兄弟反目",
      "沙漠求生"
    ],
    "oneLine": "三人在沙漠发现金矿,但金子会让人“变成野兽”,他们要活着走出自己的贪念。",
    "url": "./movies/movie-0105.html",
    "cover": "./105.jpg",
    "category": "院线热片",
    "categoryUrl": "./category-cinema-hits.html"
  },
  {
    "id": "0106",
    "title": "她来自未来",
    "year": "2024",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "科幻/悬疑",
    "tags": [
      "时间旅行",
      "末日拯救",
      "AI",
      "蝴蝶效应",
      "高概念"
    ],
    "oneLine": "2065年的反抗军战士穿越回2024年,任务是阻止AI“女娲”的诞生,却发现“女娲”的创造者正是她的曾祖父。",
    "url": "./movies/movie-0106.html",
    "cover": "./106.jpg",
    "category": "院线热片",
    "categoryUrl": "./category-cinema-hits.html"
  },
  {
    "id": "0107",
    "title": "戴夫银行",
    "year": "2018",
    "region": "英国",
    "type": "电影",
    "genre": "喜剧/犯罪",
    "tags": [
      "笨贼",
      "银行劫案",
      "小人物逆袭"
    ],
    "oneLine": "曼城一个清洁工被黑帮胁迫去抢银行,结果他不懂英文,误闯进了一家演员扮演职员的“体验式银行”。",
    "url": "./movies/movie-0107.html",
    "cover": "./107.jpg",
    "category": "经典片库",
    "categoryUrl": "./category-classic-library.html"
  },
  {
    "id": "0108",
    "title": "斯托克俱乐部",
    "year": "2021",
    "region": "美国",
    "type": "剧集",
    "genre": "悬疑,剧情",
    "tags": [
      "精英",
      "秘密社团",
      "心理操控",
      "阶级"
    ],
    "oneLine": "一所贵族学校的精英俱乐部,每年都会有一名成员“自愿消失”。",
    "url": "./movies/movie-0108.html",
    "cover": "./108.jpg",
    "category": "院线热片",
    "categoryUrl": "./category-cinema-hits.html"
  },
  {
    "id": "0109",
    "title": "蓝色珊瑚礁",
    "year": "2025",
    "region": "澳大利亚",
    "type": "电影",
    "genre": "冒险,剧情",
    "tags": [
      "荒岛",
      "生存",
      "青春",
      "自然",
      "诗意"
    ],
    "oneLine": "两名少年因海难流放荒岛,十年后,文明世界派来了救援,但他们已成为珊瑚礁的一部分。",
    "url": "./movies/movie-0109.html",
    "cover": "./109.jpg",
    "category": "院线热片",
    "categoryUrl": "./category-cinema-hits.html"
  },
  {
    "id": "0110",
    "title": "记忆的小巷",
    "year": "2023",
    "region": "西班牙/阿根廷",
    "type": "电影",
    "genre": "悬疑/剧情/心理",
    "tags": [
      "阿尔茨海默症",
      "谋杀",
      "记忆碎片",
      "母亲",
      "反转"
    ],
    "oneLine": "患有阿尔茨海默症的老太太坚称巷口杂货铺老板杀了人,但她的证词每天都在改变。",
    "url": "./movies/movie-0110.html",
    "cover": "./110.jpg",
    "category": "历史古装",
    "categoryUrl": "./category-history-costume.html"
  },
  {
    "id": "0111",
    "title": "求救的人们",
    "year": "2024",
    "region": "韩国",
    "type": "电影",
    "genre": "灾难,剧情,群像",
    "tags": [
      "隧道坍塌",
      "被困群像",
      "社会批判",
      "人性试炼",
      "实时叙事"
    ],
    "oneLine": "隧道坍塌后,十一名幸存者在黑暗中听到广播:“政府决定放弃救援,请自行了断。 RELEASE: 2024-09-12",
    "url": "./movies/movie-0111.html",
    "cover": "./111.jpg",
    "category": "青春喜剧",
    "categoryUrl": "./category-youth-comedy.html"
  },
  {
    "id": "0112",
    "title": "欲海回狂",
    "year": "2025",
    "region": "中国台湾",
    "type": "电影",
    "genre": "剧情/情色/惊悚",
    "tags": [
      "婚姻危机",
      "心理惊悚",
      "欲望",
      "宗教元素",
      "悬疑"
    ],
    "oneLine": "一对婚姻濒死的夫妻入住深山民宿,每晚被同一噩梦折磨,而梦里的场景竟是民宿前身——一座戒严时期的“净化中心”。",
    "url": "./movies/movie-0112.html",
    "cover": "./112.jpg",
    "category": "动作专区",
    "categoryUrl": "./category-action-zone.html"
  },
  {
    "id": "0113",
    "title": "非甜蜜生活",
    "year": "2023",
    "region": "意大利",
    "type": "电视剧",
    "genre": "剧情,家庭",
    "tags": [
      "黑色喜剧",
      "阶层",
      "遗产争夺"
    ],
    "oneLine": "父亲死后留下一个秘密:他那间著名的甜品店,其实是全城最大的黑钱洗白中心。",
    "url": "./movies/movie-0113.html",
    "cover": "./113.jpg",
    "category": "家庭生活",
    "categoryUrl": "./category-family-life.html"
  },
  {
    "id": "0114",
    "title": "玫瑰花开",
    "year": "2004",
    "region": "中国大陆",
    "type": "电视剧",
    "genre": "剧情/犯罪/悬疑",
    "tags": [
      "刑侦",
      "女性",
      "卧底",
      "贩毒",
      "悲情"
    ],
    "oneLine": "为追查失踪未婚夫的下落,警校女毕业生只身潜入贩毒集团当舞女。",
    "url": "./movies/movie-0114.html",
    "cover": "./114.jpg",
    "category": "都市爱情",
    "categoryUrl": "./category-romance-city.html"
  },
  {
    "id": "0115",
    "title": "暮光之城2:新月",
    "year": "2025",
    "region": "美国",
    "type": "电影",
    "genre": "爱情,奇幻,剧情",
    "tags": [
      "吸血鬼",
      "狼人",
      "虐恋"
    ],
    "oneLine": "爱德华离开后,贝拉在狼人雅各布的怀抱中试图重生,而维多利亚的复仇军团正悄然逼近。",
    "url": "./movies/movie-0115.html",
    "cover": "./115.jpg",
    "category": "全球佳作",
    "categoryUrl": "./category-global-stories.html"
  },
  {
    "id": "0116",
    "title": "两支箭·石器时代的侦探",
    "year": "2024",
    "region": "日本",
    "type": "TV Series",
    "genre": "悬疑/冒险/历史",
    "tags": [
      "原始侦探",
      "部落冲突",
      "推理",
      "冷兵器"
    ],
    "oneLine": "三万年后的今天,一个脑内能“回放”痕迹的原始人,用推理代替武力,侦破石器时代连环谜案。",
    "url": "./movies/movie-0116.html",
    "cover": "./116.jpg",
    "category": "奇幻科幻",
    "categoryUrl": "./category-fantasy-sci-fi.html"
  },
  {
    "id": "0117",
    "title": "南太平洋",
    "year": "2025",
    "region": "澳大利亚",
    "type": "电影",
    "genre": "冒险/灾难",
    "tags": [
      "海难求生",
      "孤岛生存",
      "人性考验"
    ],
    "oneLine": "一架失事客机坠入南太平洋,幸存者在鲨鱼频发的无人岛上,开始了绝望的生存倒计时。",
    "url": "./movies/movie-0117.html",
    "cover": "./117.jpg",
    "category": "青春喜剧",
    "categoryUrl": "./category-youth-comedy.html"
  },
  {
    "id": "0118",
    "title": "原地打转",
    "year": "2024",
    "region": "中国台湾",
    "type": "电影",
    "genre": "悬疑,奇幻",
    "tags": [
      "时间循环",
      "黑色幽默",
      "社会"
    ],
    "oneLine": "一名困在时间循环里的失意业务员发现,每次重启后身边的人都会遗忘,唯独楼下卖槟榔的阿婆记得他。",
    "url": "./movies/movie-0118.html",
    "cover": "./118.jpg",
    "category": "热映精选",
    "categoryUrl": "./category-hot-picks.html"
  },
  {
    "id": "0119",
    "title": "花园",
    "year": "2023",
    "region": "英国/比利时",
    "type": "电影",
    "genre": "剧情/悬疑",
    "tags": [
      "养老院",
      "记忆",
      "神秘事件",
      "植物",
      "老人"
    ],
    "oneLine": "养老院的花园里突然长出能让人恢复记忆的奇异花朵,但每恢复一段记忆,就会失去另一段。",
    "url": "./movies/movie-0119.html",
    "cover": "./119.jpg",
    "category": "奇幻科幻",
    "categoryUrl": "./category-fantasy-sci-fi.html"
  },
  {
    "id": "0120",
    "title": "柏帝与伊丽莎白",
    "year": "2008",
    "region": "英国",
    "type": "电影",
    "genre": "剧情/传记/爱情",
    "tags": [
      "皇室秘恋",
      "历史改编",
      "阶级之痛"
    ],
    "oneLine": "真实历史中被抹去的存在:维多利亚女王的舅舅柏帝,与平民女子伊丽莎白跨越半个世纪的禁忌爱情。",
    "url": "./movies/movie-0120.html",
    "cover": "./120.jpg",
    "category": "家庭生活",
    "categoryUrl": "./category-family-life.html"
  },
  {
    "id": "0121",
    "title": "战刀屠狼",
    "year": "2025",
    "region": "中国大陆",
    "type": "电影",
    "genre": "动作/战争/热血",
    "tags": [
      "特种兵",
      "贩毒集团",
      "兄弟情"
    ],
    "oneLine": "退役特种兵发现弟弟被贩毒集团杀害,他拿起战刀孤身潜入金三角复仇。",
    "url": "./movies/movie-0121.html",
    "cover": "./121.jpg",
    "category": "家庭生活",
    "categoryUrl": "./category-family-life.html"
  },
  {
    "id": "0122",
    "title": "汾阳小子贾樟柯",
    "year": "2014",
    "region": "中国大陆",
    "type": "电影",
    "genre": "纪录片",
    "tags": [
      "贾樟柯",
      "传记",
      "幕后",
      "汾阳",
      "第六代"
    ],
    "oneLine": "巴西导演沃尔特·塞勒斯跟随贾樟柯回到故乡汾阳,用镜头解码这位电影诗人二十年来的创作原乡。",
    "url": "./movies/movie-0122.html",
    "cover": "./122.jpg",
    "category": "全球佳作",
    "categoryUrl": "./category-global-stories.html"
  },
  {
    "id": "0123",
    "title": "飞吧!",
    "year": "2025",
    "region": "印度",
    "type": "电影",
    "genre": "剧情,运动",
    "tags": [
      "励志",
      "亲情",
      "底层",
      "竞技"
    ],
    "oneLine": "拾荒少年捡到一只受伤的信鸽,从此开始了逆风奔跑的人生。",
    "url": "./movies/movie-0123.html",
    "cover": "./123.jpg",
    "category": "奇幻科幻",
    "categoryUrl": "./category-fantasy-sci-fi.html"
  },
  {
    "id": "0124",
    "title": "闪电骑士大战地狱军团",
    "year": "1992",
    "region": "日本/美国",
    "type": "电影",
    "genre": "动作,科幻,奇幻",
    "tags": [
      "特摄片",
      "超级英雄",
      "跨次元",
      "皮套大战",
      "暗黑风格"
    ],
    "oneLine": "来自电子世界的闪电骑士被召唤到中世纪地狱,他的任务是集合被囚禁的七大魔王之力,对抗堕落天使路西法。",
    "url": "./movies/movie-0124.html",
    "cover": "./124.jpg",
    "category": "家庭生活",
    "categoryUrl": "./category-family-life.html"
  },
  {
    "id": "0125",
    "title": "太空竞赛",
    "year": "2025",
    "region": "美国",
    "type": "电影",
    "genre": "科幻,惊悚",
    "tags": [
      "近未来",
      "太空采矿",
      "阶级斗争"
    ],
    "oneLine": "2041年,太空采矿成为新金矿,地球上的穷人与月球上的富人在重力井两端展开了终极对决。",
    "url": "./movies/movie-0125.html",
    "cover": "./125.jpg",
    "category": "院线热片",
    "categoryUrl": "./category-cinema-hits.html"
  },
  {
    "id": "0126",
    "title": "皖美风味",
    "year": "2023",
    "region": "中国大陆",
    "type": "纪录片",
    "genre": "纪录片",
    "tags": [
      "美食",
      "安徽",
      "人文"
    ],
    "oneLine": "行走江淮大地,探寻臭鳜鱼、毛豆腐背后,那些即将失传的手艺与百味人生。",
    "url": "./movies/movie-0126.html",
    "cover": "./126.jpg",
    "category": "热映精选",
    "categoryUrl": "./category-hot-picks.html"
  },
  {
    "id": "0127",
    "title": "疯丫头玛笛根",
    "year": "2024",
    "region": "瑞典",
    "type": "剧集",
    "genre": "儿童,家庭",
    "tags": [
      "田园",
      "成长",
      "治愈",
      "北欧"
    ],
    "oneLine": "住在瑞典乡村小院里的七岁女孩玛笛根,每天都用自己的“疯点子”让整个小镇鸡飞狗跳。",
    "url": "./movies/movie-0127.html",
    "cover": "./127.jpg",
    "category": "青春喜剧",
    "categoryUrl": "./category-youth-comedy.html"
  },
  {
    "id": "0128",
    "title": "恐龙王",
    "year": "2026",
    "region": "中国大陆",
    "type": "电影",
    "genre": "动画,冒险",
    "tags": [
      "恐龙",
      "父子情",
      "成长",
      "史前"
    ],
    "oneLine": "一只胆小怯懦的食草恐龙父亲,为救回被掠食者抓走的儿子,必须成为“恐龙王”。",
    "url": "./movies/movie-0128.html",
    "cover": "./128.jpg",
    "category": "历史古装",
    "categoryUrl": "./category-history-costume.html"
  },
  {
    "id": "0129",
    "title": "燕尾蝶",
    "year": "1996",
    "region": "日本",
    "type": "电影",
    "genre": "犯罪,青春,剧情",
    "tags": [
      "移民",
      "伪钞",
      "固力果",
      "岩井俊二",
      "元都"
    ],
    "oneLine": "元都少女捡到一盘磁带,里面藏着一百万美元假钞模具,整个地下城开始暴走。",
    "url": "./movies/movie-0129.html",
    "cover": "./129.jpg",
    "category": "剧集连看",
    "categoryUrl": "./category-drama-series.html"
  },
  {
    "id": "0130",
    "title": "双时空男友",
    "year": "2021",
    "region": "韩国",
    "type": "电视剧",
    "genre": "爱情,奇幻,悬疑",
    "tags": [
      "平行世界",
      "穿越恋爱",
      "救赎",
      "暖男"
    ],
    "oneLine": "绝望的职场女性意外收到来自十年前和十年后的两个“男友”发来的求救短信。",
    "url": "./movies/movie-0130.html",
    "cover": "./130.jpg",
    "category": "奇幻科幻",
    "categoryUrl": "./category-fantasy-sci-fi.html"
  },
  {
    "id": "0131",
    "title": "拒绝文凭的官校毕业生",
    "year": "2025",
    "region": "韩国",
    "type": "剧集",
    "genre": "剧情,政治",
    "tags": [
      "精英教育",
      "反体制",
      "天才主角"
    ],
    "oneLine": "以首席成绩考入韩国官校的天才,毕业典礼上当场撕毁文凭说“我不干了”。",
    "url": "./movies/movie-0131.html",
    "cover": "./131.jpg",
    "category": "悬疑夜场",
    "categoryUrl": "./category-suspense-night.html"
  },
  {
    "id": "0132",
    "title": "永远的帝国",
    "year": "2019",
    "region": "英国",
    "type": "电视剧",
    "genre": "历史/战争",
    "tags": [
      "古罗马",
      "权力",
      "兄弟",
      "背叛"
    ],
    "oneLine": "罗马帝国最辉煌的三十年,始于一场刺杀,终于一杯毒酒。",
    "url": "./movies/movie-0132.html",
    "cover": "./132.jpg",
    "category": "奇幻科幻",
    "categoryUrl": "./category-fantasy-sci-fi.html"
  },
  {
    "id": "0133",
    "title": "魔鬼终结者2",
    "year": "1991",
    "region": "美国",
    "type": "电影",
    "genre": "科幻",
    "tags": [
      "时空穿越",
      "机器人",
      "经典续集"
    ],
    "oneLine": "未来世界派出最先进的T-1000液态机器人追杀少年领袖,这次保护他的也是一台终结者。",
    "url": "./movies/movie-0133.html",
    "cover": "./133.jpg",
    "category": "热映精选",
    "categoryUrl": "./category-hot-picks.html"
  },
  {
    "id": "0134",
    "title": "浪漫的女儿",
    "year": "2024",
    "region": "法国/比利时",
    "type": "电影",
    "genre": "喜剧/爱情",
    "tags": [
      "母女关系",
      "浪漫幻想",
      "代际冲突"
    ],
    "oneLine": "信奉“爱情至上”的女儿为每个男友写传世情书,而她那个“俗气”的妈妈,其实藏着一箱子浪漫犯罪史。",
    "url": "./movies/movie-0134.html",
    "cover": "./134.jpg",
    "category": "都市爱情",
    "categoryUrl": "./category-romance-city.html"
  },
  {
    "id": "0135",
    "title": "绯闻女孩第一季",
    "year": "2026",
    "region": "美国",
    "type": "剧集",
    "genre": "剧情,爱情,悬疑",
    "tags": [
      "翻拍",
      "豪门",
      "校园",
      "社交媒体",
      "神秘人"
    ],
    "oneLine": "曼哈顿上东区的贵族高中里,一个匿名的网红博主“绯闻女孩”通过TikTok,随时准备曝光富二代们最肮脏的秘密。",
    "url": "./movies/movie-0135.html",
    "cover": "./135.jpg",
    "category": "奇幻科幻",
    "categoryUrl": "./category-fantasy-sci-fi.html"
  },
  {
    "id": "0136",
    "title": "巴黎 美丽年代",
    "year": "2024",
    "region": "法国",
    "type": "电影",
    "genre": "剧情/爱情/历史",
    "tags": [
      "美好时代",
      "红磨坊",
      "印象派",
      "复古浪漫"
    ],
    "oneLine": "一位穿越到1895年的现代失意画家,必须在印象派大师和断头台之间找到生存之道。",
    "url": "./movies/movie-0136.html",
    "cover": "./136.jpg",
    "category": "家庭生活",
    "categoryUrl": "./category-family-life.html"
  },
  {
    "id": "0137",
    "title": "灵书妙探第三季",
    "year": "2011",
    "region": "美国",
    "type": "电视剧",
    "genre": "罪案悬疑",
    "tags": [
      "推理",
      "小说家",
      "警探",
      "双人搭档",
      "单元剧"
    ],
    "oneLine": "畅销悬疑小说家理查德·卡斯尔继续跟随警探贝克特办案,但这一季,他怀疑贝克特母亲被杀案的真相就藏在警局内部。",
    "url": "./movies/movie-0137.html",
    "cover": "./137.jpg",
    "category": "家庭生活",
    "categoryUrl": "./category-family-life.html"
  },
  {
    "id": "0138",
    "title": "孤独的美食家 第六季",
    "year": "2017",
    "region": "日本",
    "type": "剧集",
    "genre": "美食",
    "tags": [
      "一人食",
      "探店",
      "漫改",
      "治愈",
      "吃播"
    ],
    "oneLine": "杂货商井之头五郎继续在东京街头独自寻食,吃出最强内心戏。",
    "url": "./movies/movie-0138.html",
    "cover": "./138.jpg",
    "category": "悬疑夜场",
    "categoryUrl": "./category-suspense-night.html"
  },
  {
    "id": "0139",
    "title": "的士速递3",
    "year": "2012",
    "region": "法国",
    "type": "电影",
    "genre": "动作/喜剧",
    "tags": [
      "飙车",
      "出租车",
      "警察",
      "劫案"
    ],
    "oneLine": "马赛最疯狂的出租车司机丹尼尔重出江湖,这次他的乘客是一颗随时会爆炸的炸弹。",
    "url": "./movies/movie-0139.html",
    "cover": "./139.jpg",
    "category": "剧集连看",
    "categoryUrl": "./category-drama-series.html"
  },
  {
    "id": "0140",
    "title": "情人劫",
    "year": "2024",
    "region": "中国香港",
    "type": "电影",
    "genre": "爱情/犯罪/惊悚",
    "tags": [
      "反转",
      "杀猪盘",
      "黑色幽默",
      "情人节"
    ],
    "oneLine": "情人节当晚,四个“杀猪盘”骗子齐聚一栋别墅,却发现目标竟是彼此。",
    "url": "./movies/movie-0140.html",
    "cover": "./140.jpg",
    "category": "全球佳作",
    "categoryUrl": "./category-global-stories.html"
  },
  {
    "id": "0141",
    "title": "孖宝闯七关",
    "year": "1988",
    "region": "香港",
    "type": "电影",
    "genre": "动作,喜剧",
    "tags": [
      "孪生兄弟",
      "失散",
      "冒险闯关",
      "误打误撞",
      "八九十年代港味"
    ],
    "oneLine": "一对在海关失散的孪生兄弟,一个成了警队神枪手,一个成了街头魔术师,三十年后因一个黑帮U盘被迫联手闯过七个关卡。",
    "url": "./movies/movie-0141.html",
    "cover": "./141.jpg",
    "category": "奇幻科幻",
    "categoryUrl": "./category-fantasy-sci-fi.html"
  },
  {
    "id": "0142",
    "title": "金属霸主",
    "year": "2022",
    "region": "英国",
    "type": "电影",
    "genre": "喜剧,音乐,青春",
    "tags": [
      "重金属摇滚",
      "高中乐队",
      "热血追梦"
    ],
    "oneLine": "两个重金属宅男为了参加乐队大赛,必须找到一名会弹贝斯的队友,而唯一的人选是拉大提琴的乖乖女。",
    "url": "./movies/movie-0142.html",
    "cover": "./142.jpg",
    "category": "都市爱情",
    "categoryUrl": "./category-romance-city.html"
  },
  {
    "id": "0143",
    "title": "叠影江湖",
    "year": "2020",
    "region": "中国香港/中国大陆",
    "type": "网络剧",
    "genre": "悬疑,动作,武侠",
    "tags": [
      "替身",
      "帮派",
      "双胞胎",
      "民国"
    ],
    "oneLine": "失散二十年的孪生兄弟,一个是上海滩帮派少爷,一个是北平戏班武生,命运让他们互换身份。",
    "url": "./movies/movie-0143.html",
    "cover": "./143.jpg",
    "category": "动作专区",
    "categoryUrl": "./category-action-zone.html"
  },
  {
    "id": "0144",
    "title": "模范贱兄弟",
    "year": "2008",
    "region": "美国",
    "type": "电影",
    "genre": "喜剧",
    "tags": [
      "兄弟喜剧",
      "社区服务",
      "恶搞",
      "成长"
    ],
    "oneLine": "两个游手好闲的废柴被罚去社区服务,给一对古怪的兄弟当“大哥哥”,结果搞得天翻地覆。",
    "url": "./movies/movie-0144.html",
    "cover": "./144.jpg",
    "category": "都市爱情",
    "categoryUrl": "./category-romance-city.html"
  },
  {
    "id": "0145",
    "title": "慕尼黑",
    "year": "2025",
    "region": "德国",
    "type": "剧集",
    "genre": "历史,惊悚",
    "tags": [
      "二战",
      "间谍",
      "历史改编",
      "暗杀"
    ],
    "oneLine": "1938年慕尼黑协定签署前夕,一名德国外交官和一名英国记者发现,他们要暗杀的不是希特勒,而是想毁约的温莎公爵。",
    "url": "./movies/movie-0145.html",
    "cover": "./145.jpg",
    "category": "历史古装",
    "categoryUrl": "./category-history-costume.html"
  },
  {
    "id": "0146",
    "title": "谍海危情",
    "year": "2024",
    "region": "中国香港",
    "type": "电影",
    "genre": "动作,悬疑",
    "tags": [
      "港产片",
      "特工",
      "叛逃",
      "烧脑"
    ],
    "oneLine": "冷战时期,一名香港双面间谍在身份暴露后逃往泰国,却发现自己始终没有走出组织精心设计的“兔子洞”。",
    "url": "./movies/movie-0146.html",
    "cover": "./146.jpg",
    "category": "历史古装",
    "categoryUrl": "./category-history-costume.html"
  },
  {
    "id": "0147",
    "title": "地下阿西西",
    "year": "2025",
    "region": "意大利",
    "type": "电影",
    "genre": "悬疑/历史/惊悚",
    "tags": [
      "圣方济各",
      "地下城市",
      "宗教秘辛",
      "考古惊悚"
    ],
    "oneLine": "阿西西圣方济各大教堂地下,考古队发现了一个被封印八百年的密室,里面关着“不该存在的东西”。",
    "url": "./movies/movie-0147.html",
    "cover": "./147.jpg",
    "category": "历史古装",
    "categoryUrl": "./category-history-costume.html"
  },
  {
    "id": "0148",
    "title": "梁山豪侠传",
    "year": "2026",
    "region": "中国大陆",
    "type": "电影",
    "genre": "武侠/冒险",
    "tags": [
      "水浒前传",
      "寻宝探险",
      "兄弟结义"
    ],
    "oneLine": "鲁智深与林冲尚未上山时,联手闯入西夏古墓寻找一本能颠覆武林的《九阳刀谱》。",
    "url": "./movies/movie-0148.html",
    "cover": "./148.jpg",
    "category": "动作专区",
    "categoryUrl": "./category-action-zone.html"
  },
  {
    "id": "0149",
    "title": "魔法蓝精灵",
    "year": "2022",
    "region": "比利时",
    "type": "电影",
    "genre": "动画",
    "tags": [
      "奇幻冒险",
      "色彩魔法",
      "环保主题"
    ],
    "oneLine": "蓝精灵村庄失去蓝色,一只从没蓝过的异色精灵踏上寻找“最初之蓝”的旅程。",
    "url": "./movies/movie-0149.html",
    "cover": "./149.jpg",
    "category": "经典片库",
    "categoryUrl": "./category-classic-library.html"
  },
  {
    "id": "0150",
    "title": "迷域行者",
    "year": "2024",
    "region": "中国大陆",
    "type": "动画/剧集",
    "genre": "科幻/悬疑/冒险",
    "tags": [
      "无限流",
      "解谜",
      "克隆体",
      "时间悖论"
    ],
    "oneLine": "考古队被困遗迹迷宫,每死一次就会复活但丢失记忆,第99次循环时有人留下了笔记:“我出去了,别信队长”。",
    "url": "./movies/movie-0150.html",
    "cover": "./150.jpg",
    "category": "院线热片",
    "categoryUrl": "./category-cinema-hits.html"
  },
  {
    "id": "0151",
    "title": "第九部落",
    "year": "2026",
    "region": "美国",
    "type": "电视剧",
    "genre": "科幻、悬疑、生存",
    "tags": [
      "末世部落",
      "记忆上传",
      "青少年觉醒"
    ],
    "oneLine": "末世后仅存八个部落,被流放的少年们组建了第九个,而他们发现末日其实是骗局。",
    "url": "./movies/movie-0151.html",
    "cover": "./1.jpg",
    "category": "历史古装",
    "categoryUrl": "./category-history-costume.html"
  },
  {
    "id": "0152",
    "title": "情到浓时",
    "year": "2026",
    "region": "中国香港",
    "type": "电影",
    "genre": "爱情,剧情",
    "tags": [
      "都市爱情",
      "错过与重逢",
      "文艺",
      "怀旧"
    ],
    "oneLine": "一对分手五年的情侣,因一本丢失的日记本重聚,发现对方始终活在自己的字里行间。",
    "url": "./movies/movie-0152.html",
    "cover": "./2.jpg",
    "category": "奇幻科幻",
    "categoryUrl": "./category-fantasy-sci-fi.html"
  },
  {
    "id": "0153",
    "title": "冲吧!我的庞克青春",
    "year": "2025",
    "region": "日本",
    "type": "电影",
    "genre": "青春,音乐",
    "tags": [
      "朋克",
      "烂队",
      "热血"
    ],
    "oneLine": "三个连和弦都按不准的高中生组建了全校最烂的朋克乐队,目标是参加文化祭然后解散。",
    "url": "./movies/movie-0153.html",
    "cover": "./3.jpg",
    "category": "奇幻科幻",
    "categoryUrl": "./category-fantasy-sci-fi.html"
  },
  {
    "id": "0154",
    "title": "毒品网路",
    "year": "2026",
    "region": "墨西哥/美国",
    "type": "电视剧",
    "genre": "犯罪,悬疑,动作",
    "tags": [
      "暗网",
      "黑帮",
      "卧底",
      "科技犯罪",
      "多线叙事"
    ],
    "oneLine": "一名程序员无意中破解了暗网贩毒系统,却发现自己写的代码正被用来追杀自己的家人。",
    "url": "./movies/movie-0154.html",
    "cover": "./4.jpg",
    "category": "经典片库",
    "categoryUrl": "./category-classic-library.html"
  },
  {
    "id": "0155",
    "title": "88年劫案",
    "year": "2024",
    "region": "英国",
    "type": "剧集",
    "genre": "犯罪,悬疑,历史",
    "tags": [
      "年代剧",
      "运钞车劫案",
      "双时间线",
      "黑吃黑"
    ],
    "oneLine": "1988年一桩失手的运钞车劫案,三十年后竟因一笔未追回的赃款,将所有幸存者重新拖回地狱。",
    "url": "./movies/movie-0155.html",
    "cover": "./5.jpg",
    "category": "悬疑夜场",
    "categoryUrl": "./category-suspense-night.html"
  },
  {
    "id": "0156",
    "title": "误杀瞒天记",
    "year": "2024",
    "region": "印度",
    "type": "电影",
    "genre": "犯罪/悬疑",
    "tags": [
      "高智商犯罪",
      "完美不在场证明",
      "父爱",
      "反转再反转"
    ],
    "oneLine": "一个只有小学文化的父亲,为了给女儿脱罪,利用电影中学来的剪辑技巧,为全家做了一整套“记忆篡改”。",
    "url": "./movies/movie-0156.html",
    "cover": "./6.jpg",
    "category": "悬疑夜场",
    "categoryUrl": "./category-suspense-night.html"
  },
  {
    "id": "0157",
    "title": "错过爱情",
    "year": "2023",
    "region": "中国大陆",
    "type": "电影",
    "genre": "爱情,剧情",
    "tags": [
      "意难平",
      "十年",
      "初恋重逢",
      "现实向",
      "平行时空"
    ],
    "oneLine": "高中初恋十年后重逢,他已是别人未婚夫,她刚被裁员,两人在高铁上用一小时回忆当年错过的那句告白。",
    "url": "./movies/movie-0157.html",
    "cover": "./7.jpg",
    "category": "悬疑夜场",
    "categoryUrl": "./category-suspense-night.html"
  },
  {
    "id": "0158",
    "title": "我们与恶的距离",
    "year": "2023",
    "region": "中国台湾",
    "type": "剧集",
    "genre": "剧情/社会",
    "tags": [
      "媒体乱象",
      "死刑争议",
      "思辨剧"
    ],
    "oneLine": "一场无差别杀人案,将受害者家属、加害者家属、法扶律师和精神科医生卷入了一场关于“善恶”的无尽争吵。",
    "url": "./movies/movie-0158.html",
    "cover": "./8.jpg",
    "category": "都市爱情",
    "categoryUrl": "./category-romance-city.html"
  },
  {
    "id": "0159",
    "title": "太阳盟续集",
    "year": "2026",
    "region": "美国",
    "type": "电影",
    "genre": "西部/动作",
    "tags": [
      "帮派",
      "复仇",
      "沙漠",
      "家族"
    ],
    "oneLine": "老盟主死后,太阳盟分裂成三派,一名流浪枪手被错认为继承人,卷入血雨腥风。",
    "url": "./movies/movie-0159.html",
    "cover": "./9.jpg",
    "category": "剧集连看",
    "categoryUrl": "./category-drama-series.html"
  },
  {
    "id": "0160",
    "title": "虎猛威龙",
    "year": "1995",
    "region": "中国香港",
    "type": "电影",
    "genre": "动作,犯罪,警匪",
    "tags": [
      "双雄搭档",
      "以暴制暴",
      "街头实战",
      "兄弟情"
    ],
    "oneLine": "火爆刑警与冷静杀手被迫联手,对抗一个绑架了整个警队家属的疯批毒枭。",
    "url": "./movies/movie-0160.html",
    "cover": "./10.jpg",
    "category": "剧集连看",
    "categoryUrl": "./category-drama-series.html"
  },
  {
    "id": "0161",
    "title": "枪之子",
    "year": "2015",
    "region": "美国",
    "type": "电影",
    "genre": "犯罪,剧情,传记",
    "tags": [
      "真实事件",
      "澳洲黑帮",
      "枪支走私",
      "父子",
      "救赎"
    ],
    "oneLine": "澳洲最年轻的枪械走私天才落网后供出所有上线,只为保护自己三岁的儿子不再碰枪。",
    "url": "./movies/movie-0161.html",
    "cover": "./11.jpg",
    "category": "动作专区",
    "categoryUrl": "./category-action-zone.html"
  },
  {
    "id": "0162",
    "title": "护士骚歌利",
    "year": "1973",
    "region": "意大利",
    "type": "电影",
    "genre": "喜剧/情色/历史",
    "tags": [
      "修道院护士",
      "瘟疫时期",
      "禁忌之恋"
    ],
    "oneLine": "中世纪修道院里,红发护士“骚歌利”用草药救人,也用春药惹祸,直到瘟疫揭露了修女们的秘密。",
    "url": "./movies/movie-0162.html",
    "cover": "./12.jpg",
    "category": "全球佳作",
    "categoryUrl": "./category-global-stories.html"
  },
  {
    "id": "0163",
    "title": "树上有个好地方",
    "year": "2020",
    "region": "中国大陆",
    "type": "电影",
    "genre": "家庭,剧情",
    "tags": [
      "童年",
      "乡村教育",
      "治愈"
    ],
    "oneLine": "90年代末的陕西乡村,一个被老师视为“捣蛋鬼”的小学生,把村口大槐树当作逃避全世界的秘密基地。",
    "url": "./movies/movie-0163.html",
    "cover": "./13.jpg",
    "category": "院线热片",
    "categoryUrl": "./category-cinema-hits.html"
  },
  {
    "id": "0164",
    "title": "巴尼的人生",
    "year": "2010",
    "region": "加拿大",
    "type": "电影",
    "genre": "剧情/传记",
    "tags": [
      "回忆录",
      "酗酒",
      "婚姻",
      "友情",
      "悲剧"
    ],
    "oneLine": "酗酒电台制作人巴尼回顾三段失败婚姻,却在记忆迷宫中分不清真实与谎言。",
    "url": "./movies/movie-0164.html",
    "cover": "./14.jpg",
    "category": "都市爱情",
    "categoryUrl": "./category-romance-city.html"
  },
  {
    "id": "0165",
    "title": "鬼护士",
    "year": "2022",
    "region": "泰国",
    "type": "电影",
    "genre": "恐怖,惊悚",
    "tags": [
      "医院怪谈",
      "复仇",
      "因果报应"
    ],
    "oneLine": "急诊室新来的夜班护士总能“治愈”濒死病人,代价是病房里必会多出一具莫名的尸体。",
    "url": "./movies/movie-0165.html",
    "cover": "./15.jpg",
    "category": "全球佳作",
    "categoryUrl": "./category-global-stories.html"
  },
  {
    "id": "0166",
    "title": "无限接近",
    "year": "2026",
    "region": "美国",
    "type": "电影",
    "genre": "科幻悬疑",
    "tags": [
      "平行宇宙",
      "量子",
      "恋人"
    ],
    "oneLine": "物理学家发现亡妻还活在另一个平行宇宙,但每次接近她,自己就会患上严重的辐射病。",
    "url": "./movies/movie-0166.html",
    "cover": "./16.jpg",
    "category": "悬疑夜场",
    "categoryUrl": "./category-suspense-night.html"
  },
  {
    "id": "0167",
    "title": "疯狂的钥匙",
    "year": "1995",
    "region": "中国香港",
    "type": "电影",
    "genre": "喜剧/动作",
    "tags": [
      "成龙式杂耍",
      "乌龙夺宝",
      "双雄"
    ],
    "oneLine": "一把能打开神秘金库的钥匙被分成了三段,各路人马为凑齐它闹出连环笑话。",
    "url": "./movies/movie-0167.html",
    "cover": "./17.jpg",
    "category": "剧集连看",
    "categoryUrl": "./category-drama-series.html"
  },
  {
    "id": "0168",
    "title": "刺杀风云",
    "year": "2024",
    "region": "中国台湾",
    "type": "剧集",
    "genre": "悬疑/动作",
    "tags": [
      "日据时期",
      "刺客组织",
      "卧底",
      "旗袍"
    ],
    "oneLine": "1930年代台北,一名歌女暗中刺杀日本高官,却发现目标每次都比她提前得知计划。",
    "url": "./movies/movie-0168.html",
    "cover": "./18.jpg",
    "category": "家庭生活",
    "categoryUrl": "./category-family-life.html"
  },
  {
    "id": "0169",
    "title": "春天里",
    "year": "2023",
    "region": "中国大陆",
    "type": "电视剧",
    "genre": "现实、家庭、伦理",
    "tags": [
      "农民工",
      "梦想",
      "兄弟情",
      "时代变迁"
    ],
    "oneLine": "三个农民工兄弟在北京工地搬砖,却偷偷组建了一支摇滚乐队。",
    "url": "./movies/movie-0169.html",
    "cover": "./19.jpg",
    "category": "经典片库",
    "categoryUrl": "./category-classic-library.html"
  },
  {
    "id": "0170",
    "title": "愤怒的马赫什",
    "year": "2024",
    "region": "印度",
    "type": "电影",
    "genre": "剧情,动作,社会",
    "tags": [
      "印度现实主义",
      "底层反抗",
      "种姓制度",
      "非典型英雄",
      "压抑"
    ],
    "oneLine": "一个温顺的低种姓公务员在生日当天丢了工作,他决定用一把玩具枪对抗整个腐败系统。",
    "url": "./movies/movie-0170.html",
    "cover": "./20.jpg",
    "category": "剧集连看",
    "categoryUrl": "./category-drama-series.html"
  },
  {
    "id": "0171",
    "title": "致不灭的你第三季",
    "year": "2025",
    "region": "日本",
    "type": "剧集",
    "genre": "动画,奇幻,治愈,哲学",
    "tags": [
      "不死",
      "轮回",
      "记忆传承",
      "门卫",
      "终极孤独"
    ],
    "oneLine": "不死终于抵达了“门”的尽头,发现创造他的神明正坐在最后一扇门后等他——而神明已经等了他三万年。",
    "url": "./movies/movie-0171.html",
    "cover": "./21.jpg",
    "category": "经典片库",
    "categoryUrl": "./category-classic-library.html"
  },
  {
    "id": "0172",
    "title": "女人,你自由了",
    "year": "2024",
    "region": "尼日利亚/美国",
    "type": "电影",
    "genre": "剧情/信仰/女性",
    "tags": [
      "非洲教会",
      "人口贩卖",
      "女性互助",
      "救赎",
      "真实事件改编"
    ],
    "oneLine": "被贩卖至欧洲被迫卖淫的尼日利亚女孩回到家乡,却发现自己曾经的教会正在包庇另一个人口贩子。",
    "url": "./movies/movie-0172.html",
    "cover": "./22.jpg",
    "category": "剧集连看",
    "categoryUrl": "./category-drama-series.html"
  },
  {
    "id": "0173",
    "title": "地狱之轮第三季",
    "year": "2025",
    "region": "美国",
    "type": "剧集",
    "genre": "西部,剧情",
    "tags": [
      "铁路",
      "复仇",
      "暴力美学",
      "政治阴谋"
    ],
    "oneLine": "铁路修到了荒漠深处,曾经的仇人现在成了唯一的盟友,他们要对抗垄断资本家的私人军队。",
    "url": "./movies/movie-0173.html",
    "cover": "./23.jpg",
    "category": "剧集连看",
    "categoryUrl": "./category-drama-series.html"
  },
  {
    "id": "0174",
    "title": "志在出位",
    "year": "1991",
    "region": "中国香港",
    "type": "电影",
    "genre": "喜剧,动作",
    "tags": [
      "香港",
      "小混混",
      "假扮警察",
      "乌龙"
    ],
    "oneLine": "整日游手好闲的小混混为了出风头假扮CID,却意外卷入了一桩真实的黑帮军火交易。",
    "url": "./movies/movie-0174.html",
    "cover": "./24.jpg",
    "category": "动作专区",
    "categoryUrl": "./category-action-zone.html"
  },
  {
    "id": "0175",
    "title": "阳光普照",
    "year": "2024",
    "region": "中国台湾",
    "type": "电影",
    "genre": "剧情/家庭",
    "tags": [
      "兄弟情",
      "救赎",
      "底层生存",
      "温暖现实主义"
    ],
    "oneLine": "出狱后的弟弟发现,一直活在父亲偏爱与哥哥阴影下的自己,才是全家唯一见不得光的人。",
    "url": "./movies/movie-0175.html",
    "cover": "./25.jpg",
    "category": "热映精选",
    "categoryUrl": "./category-hot-picks.html"
  },
  {
    "id": "0176",
    "title": "夏季别墅",
    "year": "2024",
    "region": "西班牙",
    "type": "电影",
    "genre": "悬疑、剧情、家庭",
    "tags": [
      "家庭悬疑",
      "遗产阴谋",
      "夏日氛围",
      "全员恶人"
    ],
    "oneLine": "富豪父亲去世,七个子女回到童年夏季别墅分遗产,却发现别墅里多了一个不认识的人。",
    "url": "./movies/movie-0176.html",
    "cover": "./26.jpg",
    "category": "历史古装",
    "categoryUrl": "./category-history-costume.html"
  },
  {
    "id": "0177",
    "title": "风风风",
    "year": "2024",
    "region": "韩国",
    "type": "电影",
    "genre": "喜剧,爱情",
    "tags": [
      "婚外恋",
      "邻里风波",
      "荒诞喜剧"
    ],
    "oneLine": "四对夫妻在小岛度假村偷情,一场台风把所有人的秘密吹进了同一间密室。",
    "url": "./movies/movie-0177.html",
    "cover": "./27.jpg",
    "category": "历史古装",
    "categoryUrl": "./category-history-costume.html"
  },
  {
    "id": "0178",
    "title": "我想结婚的时候你在哪",
    "year": "2025",
    "region": "中国大陆",
    "type": "电影",
    "genre": "爱情,喜剧,剧情",
    "tags": [
      "前任",
      "婚礼",
      "选择",
      "遗憾",
      "成长"
    ],
    "oneLine": "在别人的婚礼上,她遇到了所有前男友,而她必须从中选出一个假装成现任。",
    "url": "./movies/movie-0178.html",
    "cover": "./28.jpg",
    "category": "历史古装",
    "categoryUrl": "./category-history-costume.html"
  },
  {
    "id": "0179",
    "title": "机动部队—绝路",
    "year": "2024",
    "region": "中国香港",
    "type": "电影",
    "genre": "动作、犯罪、剧情",
    "tags": [
      "卧底",
      "兄弟情",
      "枪战"
    ],
    "oneLine": "警方机动部队遭遇内鬼泄密全军覆没,唯一幸存者被当成叛徒,他必须在黑帮追杀和警方通缉中找出真相。",
    "url": "./movies/movie-0179.html",
    "cover": "./29.jpg",
    "category": "经典片库",
    "categoryUrl": "./category-classic-library.html"
  },
  {
    "id": "0180",
    "title": "非法囚禁",
    "year": "2025",
    "region": "美国",
    "type": "电影",
    "genre": "惊悚/剧情",
    "tags": [
      "私刑",
      "地下室",
      "道德困境",
      "反转"
    ],
    "oneLine": "一对夫妻在地下室囚禁了一个疑似连环杀手的男人,却发现被囚者竟是真正的受害者,而丈夫才是真凶。",
    "url": "./movies/movie-0180.html",
    "cover": "./30.jpg",
    "category": "动作专区",
    "categoryUrl": "./category-action-zone.html"
  },
  {
    "id": "0181",
    "title": "海洛因",
    "year": "2026",
    "region": "哥伦比亚/美国",
    "type": "剧集",
    "genre": "犯罪,剧情,惊悚",
    "tags": [
      "毒品帝国",
      "家族贩毒",
      "DEA",
      "暴力美学"
    ],
    "oneLine": "一个普通的炼乳厂主,为了给儿子治病,无意中踏入制毒行业,却在短短五年内建立起了挑战政府的白色帝国。",
    "url": "./movies/movie-0181.html",
    "cover": "./31.jpg",
    "category": "都市爱情",
    "categoryUrl": "./category-romance-city.html"
  },
  {
    "id": "0182",
    "title": "兄弟珍重",
    "year": "2025",
    "region": "中国香港",
    "type": "电影",
    "genre": "剧情/家庭/犯罪",
    "tags": [
      "出狱",
      "兄弟情",
      "社会边缘",
      "救赎",
      "九龙城寨"
    ],
    "oneLine": "坐了十五年牢的阿火出狱后,发现当年顶罪的兄弟已成为富豪,而自己却一无所有。",
    "url": "./movies/movie-0182.html",
    "cover": "./32.jpg",
    "category": "悬疑夜场",
    "categoryUrl": "./category-suspense-night.html"
  },
  {
    "id": "0183",
    "title": "兔儿爷",
    "year": "2026",
    "region": "中国大陆",
    "type": "电影",
    "genre": "奇幻民俗",
    "tags": [
      "北京",
      "民间传说",
      "非遗",
      "治愈"
    ],
    "oneLine": "一个骗人的假文物贩子,中秋节前被一只泥塑兔儿爷缠上,被迫帮它完成三百年前的未了心愿。",
    "url": "./movies/movie-0183.html",
    "cover": "./33.jpg",
    "category": "悬疑夜场",
    "categoryUrl": "./category-suspense-night.html"
  },
  {
    "id": "0184",
    "title": "千万别抬头",
    "year": "2025",
    "region": "美国",
    "type": "电影",
    "genre": "喜剧,科幻,讽刺",
    "tags": [
      "黑色幽默",
      "社会讽刺",
      "末日危机",
      "媒体乱象",
      "政治讽刺"
    ],
    "oneLine": "两个天文学家发现彗星即将毁灭地球,却没人愿意认真听他们说话。",
    "url": "./movies/movie-0184.html",
    "cover": "./34.jpg",
    "category": "剧集连看",
    "categoryUrl": "./category-drama-series.html"
  },
  {
    "id": "0185",
    "title": "小镇杀机",
    "year": "2021",
    "region": "美国/加拿大",
    "type": "剧集",
    "genre": "悬疑,惊悚,罪案",
    "tags": [
      "双女主",
      "记者",
      "警长",
      "邪教",
      "冰封湖"
    ],
    "oneLine": "返乡女记者发现好友溺亡,当地警长说是自杀,而她找到的每一条线索都指向同一个活人。",
    "url": "./movies/movie-0185.html",
    "cover": "./35.jpg",
    "category": "院线热片",
    "categoryUrl": "./category-cinema-hits.html"
  },
  {
    "id": "0186",
    "title": "我是一名教师",
    "year": "2016",
    "region": "俄罗斯",
    "type": "电影",
    "genre": "战争,剧情",
    "tags": [
      "二战",
      "乡村",
      "人性"
    ],
    "oneLine": "苏联乡村教师面对德军占领,他唯一的武器不是枪,而是讲台上的粉笔和字典。",
    "url": "./movies/movie-0186.html",
    "cover": "./36.jpg",
    "category": "奇幻科幻",
    "categoryUrl": "./category-fantasy-sci-fi.html"
  },
  {
    "id": "0187",
    "title": "回归生活",
    "year": "2023",
    "region": "英国",
    "type": "电视剧",
    "genre": "剧情/喜剧",
    "tags": [
      "丧偶",
      "中年",
      "重启",
      "英式幽默",
      "生活碎片"
    ],
    "oneLine": "丈夫突然离世后,五十岁的家庭主妇米里亚姆决定:不哭不丧,去上大学。",
    "url": "./movies/movie-0187.html",
    "cover": "./37.jpg",
    "category": "热映精选",
    "categoryUrl": "./category-hot-picks.html"
  },
  {
    "id": "0188",
    "title": "浮尘下的枪声",
    "year": "2023",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "悬疑/犯罪",
    "tags": [
      "双男主",
      "旧案重查",
      "北疆",
      "层层反转"
    ],
    "oneLine": "一具风干尸体牵出二十年前的矿难黑幕,退休警察与重返故乡的记者结成了最不稳定的同盟。",
    "url": "./movies/movie-0188.html",
    "cover": "./38.jpg",
    "category": "家庭生活",
    "categoryUrl": "./category-family-life.html"
  },
  {
    "id": "0189",
    "title": "追杀",
    "year": "2023",
    "region": "韩国",
    "type": "电影",
    "genre": "动作,惊悚",
    "tags": [
      "复仇",
      "暴力美学",
      "限制级",
      "反转"
    ],
    "oneLine": "一个被追杀的哑巴杀手,在逃亡途中反杀了所有追兵,却发现雇凶杀自己的人早已死在他手里。",
    "url": "./movies/movie-0189.html",
    "cover": "./39.jpg",
    "category": "奇幻科幻",
    "categoryUrl": "./category-fantasy-sci-fi.html"
  },
  {
    "id": "0190",
    "title": "间谍俏辣媚",
    "year": "2024",
    "region": "中国香港/美国",
    "type": "电影",
    "genre": "动作/喜剧/间谍",
    "tags": [
      "女特工",
      "扮猪吃老虎",
      "反差萌",
      "国际范"
    ],
    "oneLine": "全球最顶级的王牌特工,伪装成香港铜锣湾的美甲店小妹,每天被师奶催婚。",
    "url": "./movies/movie-0190.html",
    "cover": "./40.jpg",
    "category": "奇幻科幻",
    "categoryUrl": "./category-fantasy-sci-fi.html"
  },
  {
    "id": "0191",
    "title": "爱妹赌局",
    "year": "1995",
    "region": "中国香港",
    "type": "电影",
    "genre": "剧情,犯罪,情色",
    "tags": [
      "赌术",
      "伦理",
      "黑色电影",
      "虐恋"
    ],
    "oneLine": "赌坛高手韩森一生未逢敌手,直到他遇见一位神秘女子,对方提出的赌注不是金钱,而是他亲妹妹的身体。",
    "url": "./movies/movie-0191.html",
    "cover": "./41.jpg",
    "category": "都市爱情",
    "categoryUrl": "./category-romance-city.html"
  },
  {
    "id": "0192",
    "title": "镜中的梦幻城",
    "year": "2026",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "古装奇幻",
    "tags": [
      "双重人格",
      "宫廷权谋",
      "镜像世界",
      "大女主"
    ],
    "oneLine": "公主每夜入睡后,灵魂会穿过铜镜进入平行世界,那里她是个手握兵权的女将军。",
    "url": "./movies/movie-0192.html",
    "cover": "./42.jpg",
    "category": "历史古装",
    "categoryUrl": "./category-history-costume.html"
  },
  {
    "id": "0193",
    "title": "爱乱伴侣",
    "year": "2024",
    "region": "中国台湾",
    "type": "电影",
    "genre": "爱情/喜剧",
    "tags": [
      "互换伴侣",
      "试婚",
      "都市",
      "幽默"
    ],
    "oneLine": "两对准备结婚的情侣决定“交换伴侣”同居一个月,以检验真爱,结果却弄假成真。",
    "url": "./movies/movie-0193.html",
    "cover": "./43.jpg",
    "category": "院线热片",
    "categoryUrl": "./category-cinema-hits.html"
  },
  {
    "id": "0194",
    "title": "糊涂英雄傻超人",
    "year": "2024",
    "region": "日本",
    "type": "动画剧集",
    "genre": "喜剧,动作,satire",
    "tags": [
      "反英雄",
      "社畜",
      "讽刺",
      "搞笑"
    ],
    "oneLine": "被裁员的社畜被改造成超人,却因说明书弄丢而完全不会使用超能力。",
    "url": "./movies/movie-0194.html",
    "cover": "./44.jpg",
    "category": "全球佳作",
    "categoryUrl": "./category-global-stories.html"
  },
  {
    "id": "0195",
    "title": "公社",
    "year": "2022",
    "region": "丹麦",
    "type": "电影",
    "genre": "剧情/家庭",
    "tags": [
      "乌托邦",
      "人性实验",
      "家庭破碎",
      "北欧"
    ],
    "oneLine": "父亲死后,一群理想主义者搬进他的豪宅建立“共享社区”,却发现人性比产权证更难分配。",
    "url": "./movies/movie-0195.html",
    "cover": "./45.jpg",
    "category": "都市爱情",
    "categoryUrl": "./category-romance-city.html"
  },
  {
    "id": "0196",
    "title": "两个母亲",
    "year": "2021",
    "region": "中国大陆",
    "type": "电影",
    "genre": "家庭,伦理",
    "tags": [
      "亲情",
      "领养",
      "情感纠葛",
      "女性"
    ],
    "oneLine": "养母患癌后,叛逆女儿私自找回亲生母亲,三人在同一屋檐下陷入情感风暴。",
    "url": "./movies/movie-0196.html",
    "cover": "./46.jpg",
    "category": "经典片库",
    "categoryUrl": "./category-classic-library.html"
  },
  {
    "id": "0197",
    "title": "兄弟闯天涯",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "genre": "冒险/喜剧",
    "tags": [
      "公路",
      "兄弟情",
      "寻宝"
    ],
    "oneLine": "一对废柴兄弟为了还债,骑着三轮摩托车穿越无人区,寻找传说中的“天涯石”。",
    "url": "./movies/movie-0197.html",
    "cover": "./47.jpg",
    "category": "家庭生活",
    "categoryUrl": "./category-family-life.html"
  },
  {
    "id": "0198",
    "title": "安娜和狼",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "genre": "剧情,悬疑,奇幻",
    "tags": [
      "人性",
      "心理博弈",
      "女性力量",
      "寓言式叙事"
    ],
    "oneLine": "少女安娜被困于偏远山村,她发现三只披着人皮的“狼”正以不同方式蚕食着她的自由。",
    "url": "./movies/movie-0198.html",
    "cover": "./48.jpg",
    "category": "动作专区",
    "categoryUrl": "./category-action-zone.html"
  },
  {
    "id": "0199",
    "title": "维克多的秘密森林",
    "year": "2024",
    "region": "加拿大/法国",
    "type": "电影",
    "genre": "悬疑,奇幻",
    "tags": [
      "神秘学",
      "父爱",
      "生态寓言"
    ],
    "oneLine": "为了寻找失踪的女儿,沉默的木匠维克多走进了那片所有进入者都会“消失”的禁忌森林。",
    "url": "./movies/movie-0199.html",
    "cover": "./49.jpg",
    "category": "青春喜剧",
    "categoryUrl": "./category-youth-comedy.html"
  },
  {
    "id": "0200",
    "title": "双刃",
    "year": "2024",
    "region": "中国香港",
    "type": "电影",
    "genre": "犯罪,剧情",
    "tags": [
      "卧底",
      "兄弟情",
      "反转"
    ],
    "oneLine": "潜伏在黑帮的卧底发现失散多年的亲弟弟竟是目标老大的养子。",
    "url": "./movies/movie-0200.html",
    "cover": "./50.jpg",
    "category": "院线热片",
    "categoryUrl": "./category-cinema-hits.html"
  },
  {
    "id": "0201",
    "title": "安娜哀史",
    "year": "2023",
    "region": "法国",
    "type": "电影",
    "genre": "剧情/爱情",
    "tags": [
      "女性",
      "时代悲剧",
      "情感纠葛",
      "历史"
    ],
    "oneLine": "二战后的巴黎,一名与德国军官有染的法国女演员,试图在审判与羞辱中找回自己的人生。",
    "url": "./movies/movie-0201.html",
    "cover": "./51.jpg",
    "category": "经典片库",
    "categoryUrl": "./category-classic-library.html"
  },
  {
    "id": "0202",
    "title": "黄土地",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "genre": "剧情,历史",
    "tags": [
      "土地",
      "农民",
      "时代变迁",
      "史诗"
    ],
    "oneLine": "陕北高原上,一家四代人与黄土地的爱恨纠葛,从民国初年一直延续到新世纪土地政策改革。",
    "url": "./movies/movie-0202.html",
    "cover": "./52.jpg",
    "category": "经典片库",
    "categoryUrl": "./category-classic-library.html"
  },
  {
    "id": "0203",
    "title": "始与终",
    "year": "2024",
    "region": "英国",
    "type": "剧集",
    "genre": "悬疑、科幻",
    "tags": [
      "时间循环",
      "宿命论",
      "高智商"
    ],
    "oneLine": "一群宇航员在深空飞船里醒来,发现每死一个人,时间就会向前跳跃一段,直至宇宙尽头。",
    "url": "./movies/movie-0203.html",
    "cover": "./53.jpg",
    "category": "热映精选",
    "categoryUrl": "./category-hot-picks.html"
  },
  {
    "id": "0204",
    "title": "无人之子",
    "year": "2022",
    "region": "美国",
    "type": "电影",
    "genre": "科幻,惊悚",
    "tags": [
      "人工智能",
      "伦理",
      "悬疑"
    ],
    "oneLine": "一对无法生育的夫妇定制了AI儿童,却发现这个“孩子”正在悄悄操控整个社区。",
    "url": "./movies/movie-0204.html",
    "cover": "./54.jpg",
    "category": "动作专区",
    "categoryUrl": "./category-action-zone.html"
  },
  {
    "id": "0205",
    "title": "七魔剑支配天下",
    "year": "2024",
    "region": "日本",
    "type": "动画",
    "genre": "奇幻战斗",
    "tags": [
      "魔法学院",
      "复仇",
      "暗黑",
      "群像",
      "剑术"
    ],
    "oneLine": "魔法名校里七个被开除的学生组成地下社团,他们的目标是:杀死全校最强的七名教授。",
    "url": "./movies/movie-0205.html",
    "cover": "./55.jpg",
    "category": "剧集连看",
    "categoryUrl": "./category-drama-series.html"
  },
  {
    "id": "0206",
    "title": "猎魂者",
    "year": "2020",
    "region": "韩国",
    "type": "电影",
    "genre": "动作/奇幻",
    "tags": [
      "灵魂附体",
      "刑侦",
      "暴力美学",
      "失忆"
    ],
    "oneLine": "一个失忆的男人发现自己每12小时就会随机附身到另一个人身上,而他的本体正被全城黑帮追杀。",
    "url": "./movies/movie-0206.html",
    "cover": "./56.jpg",
    "category": "家庭生活",
    "categoryUrl": "./category-family-life.html"
  },
  {
    "id": "0207",
    "title": "我,萨德侯爵",
    "year": "2024",
    "region": "法国",
    "type": "电影",
    "genre": "传记,剧情,历史",
    "tags": [
      "萨德",
      "哲学",
      "法国大革命",
      "囚禁",
      "禁忌"
    ],
    "oneLine": "法国大革命前夕,被囚禁在巴士底狱的萨德侯爵,用偷藏的羽毛笔写下了颠覆整个时代的手稿,而一名狱卒想毁掉它。",
    "url": "./movies/movie-0207.html",
    "cover": "./57.jpg",
    "category": "剧集连看",
    "categoryUrl": "./category-drama-series.html"
  },
  {
    "id": "0208",
    "title": "猎艳",
    "year": "2024",
    "region": "中国香港",
    "type": "电影",
    "genre": "悬疑,惊悚",
    "tags": [
      "女性视角",
      "偷窥",
      "心理战"
    ],
    "oneLine": "摄影师无意中拍下对面大楼的一桩谋杀案,却发现报警后的自己反而成了猎杀目标。",
    "url": "./movies/movie-0208.html",
    "cover": "./58.jpg",
    "category": "历史古装",
    "categoryUrl": "./category-history-costume.html"
  },
  {
    "id": "0209",
    "title": "桃花映江山",
    "year": "2025",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "古装/爱情/权谋",
    "tags": [
      "架空历史",
      "先婚后爱",
      "女强",
      "宫斗",
      "唯美古风"
    ],
    "oneLine": "被迫替姐和亲的庶女,嫁给了传说中杀人如麻的瘸腿王爷,却发现他的轮椅藏着一个惊天秘密。",
    "url": "./movies/movie-0209.html",
    "cover": "./59.jpg",
    "category": "热映精选",
    "categoryUrl": "./category-hot-picks.html"
  },
  {
    "id": "0210",
    "title": "非正式会谈第八季",
    "year": "2025",
    "region": "中国大陆",
    "type": "综艺",
    "genre": "脱口秀/国际交流",
    "tags": [
      "圆桌讨论",
      "文化碰撞",
      "青年观点",
      "幽默犀利",
      "常青IP"
    ],
    "oneLine": "来自十国的青年代表再次围坐,用幽默化解偏见,探讨从“元宇宙恋爱”到“职场发疯文学”的全球议题。",
    "url": "./movies/movie-0210.html",
    "cover": "./60.jpg",
    "category": "剧集连看",
    "categoryUrl": "./category-drama-series.html"
  },
  {
    "id": "0211",
    "title": "对抗性侵犯",
    "year": "2025",
    "region": "美国",
    "type": "纪录片",
    "genre": "纪录/犯罪",
    "tags": [
      "社会议题",
      "调查报道",
      "幸存者"
    ],
    "oneLine": "三位幸存者用隐蔽摄像头和社交媒体,自行调查追踪一名跨州连环性侵犯。",
    "url": "./movies/movie-0211.html",
    "cover": "./61.jpg",
    "category": "奇幻科幻",
    "categoryUrl": "./category-fantasy-sci-fi.html"
  },
  {
    "id": "0212",
    "title": "疯狂电视台疯电影",
    "year": "2024",
    "region": "中国台湾",
    "type": "电影",
    "genre": "喜剧",
    "tags": [
      "黑色幽默",
      "职场",
      "直播",
      "荒诞"
    ],
    "oneLine": "一个濒临倒闭的电视台决定把所有节目改成现场直播的疯狂大电影,却意外卷入了一场真实的犯罪。",
    "url": "./movies/movie-0212.html",
    "cover": "./62.jpg",
    "category": "家庭生活",
    "categoryUrl": "./category-family-life.html"
  },
  {
    "id": "0213",
    "title": "厕所英雄",
    "year": "2024",
    "region": "印度",
    "type": "电影",
    "genre": "喜剧/社会",
    "tags": [
      "女性觉醒",
      "农村改革",
      "真实事件"
    ],
    "oneLine": "新婚妻子因家里没厕所要离婚,丈夫为爱建厕所,却引发了全村“如厕革命”。",
    "url": "./movies/movie-0213.html",
    "cover": "./63.jpg",
    "category": "动作专区",
    "categoryUrl": "./category-action-zone.html"
  },
  {
    "id": "0214",
    "title": "限时救援",
    "year": "2023",
    "region": "中国大陆",
    "type": "电影",
    "genre": "动作/犯罪",
    "tags": [
      "极限营救",
      "单亲父亲",
      "都市跑酷"
    ],
    "oneLine": "为了在女儿手术前筹集百万救命钱,退伍特种兵被迫成为富豪的“替身肉票”,却意外卷入了一场政治阴谋。",
    "url": "./movies/movie-0214.html",
    "cover": "./64.jpg",
    "category": "剧集连看",
    "categoryUrl": "./category-drama-series.html"
  },
  {
    "id": "0215",
    "title": "暴火线13",
    "year": "2026",
    "region": "美国",
    "type": "电影",
    "genre": "动作,犯罪",
    "tags": [
      "警匪",
      "孤胆英雄",
      "复仇",
      "飙车",
      "枪战"
    ],
    "oneLine": "卧底警探代号“13”在东南亚贩毒集团内部潜伏八年,身份暴露后,他必须一路杀穿整个防线,回家看一眼女儿。",
    "url": "./movies/movie-0215.html",
    "cover": "./65.jpg",
    "category": "都市爱情",
    "categoryUrl": "./category-romance-city.html"
  },
  {
    "id": "0216",
    "title": "满目皆琳琅",
    "year": "2025",
    "region": "中国台湾",
    "type": "电视剧",
    "genre": "家庭伦理,年代",
    "tags": [
      "古董",
      "家族恩怨",
      "传承",
      "秘密"
    ],
    "oneLine": "一件乾隆年间的玉器,牵扯出三代人隐瞒了六十年的家族血案。",
    "url": "./movies/movie-0216.html",
    "cover": "./66.jpg",
    "category": "都市爱情",
    "categoryUrl": "./category-romance-city.html"
  },
  {
    "id": "0217",
    "title": "节日开始了",
    "year": "1977",
    "region": "意大利",
    "type": "电影",
    "genre": "剧情,历史,家庭",
    "tags": [
      "二战",
      "圣诞节",
      "小镇",
      "童年",
      "政治隐喻"
    ],
    "oneLine": "1944年圣诞前夕,墨索里尼倒台的消息传到闭塞的意大利南部小镇,一个男孩眼中的“节日”却成了大人们的噩梦。",
    "url": "./movies/movie-0217.html",
    "cover": "./67.jpg",
    "category": "历史古装",
    "categoryUrl": "./category-history-costume.html"
  },
  {
    "id": "0218",
    "title": "随心所欲",
    "year": "2024",
    "region": "法国",
    "type": "电影",
    "genre": "剧情,喜剧",
    "tags": [
      "女性成长",
      "职业选择",
      "存在主义"
    ],
    "oneLine": "一个拥有哲学博士学位的女人,决心将世上所有职业都体验一遍再死去。",
    "url": "./movies/movie-0218.html",
    "cover": "./68.jpg",
    "category": "奇幻科幻",
    "categoryUrl": "./category-fantasy-sci-fi.html"
  },
  {
    "id": "0219",
    "title": "白宫隐秘",
    "year": "2026",
    "region": "美国",
    "type": "剧集",
    "genre": "悬疑/政治惊悚",
    "tags": [
      "地堡密室",
      "总统秘密",
      "特工谜局"
    ],
    "oneLine": "白宫实习生偶然发现地下深处藏有一间从未被记载的密室,里面记录了历任总统的致命秘密。",
    "url": "./movies/movie-0219.html",
    "cover": "./69.jpg",
    "category": "院线热片",
    "categoryUrl": "./category-cinema-hits.html"
  },
  {
    "id": "0220",
    "title": "军火贩",
    "year": "2024",
    "region": "美国",
    "type": "电影",
    "genre": "惊悚,犯罪,剧情",
    "tags": [
      "黑市",
      "兄弟情",
      "阴谋",
      "动作"
    ],
    "oneLine": "两个退役老兵靠倒卖苏制武器发家,却无意间卷入一场震动五角大楼的军火阴谋。",
    "url": "./movies/movie-0220.html",
    "cover": "./70.jpg",
    "category": "都市爱情",
    "categoryUrl": "./category-romance-city.html"
  },
  {
    "id": "0221",
    "title": "迷失之城",
    "year": "2023",
    "region": "美国",
    "type": "电影",
    "genre": "动作,冒险,喜剧",
    "tags": [
      "热带丛林",
      "寻宝",
      "冤家路窄",
      "爆笑逃亡"
    ],
    "oneLine": "一位写冒险小说的宅女作家和她封面小说的硬汉模特,被真劫匪绑架进了她书里的那座雨林。",
    "url": "./movies/movie-0221.html",
    "cover": "./71.jpg",
    "category": "经典片库",
    "categoryUrl": "./category-classic-library.html"
  },
  {
    "id": "0222",
    "title": "朝雪录",
    "year": "2025",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "古装悬疑、剧情",
    "tags": [
      "宫廷",
      "推理",
      "女性",
      "复仇",
      "权谋"
    ],
    "oneLine": "亡国公主隐姓埋名入宫为婢,用一本记录宫廷秘辛的《朝雪录》向四大权贵家族展开复仇。",
    "url": "./movies/movie-0222.html",
    "cover": "./72.jpg",
    "category": "青春喜剧",
    "categoryUrl": "./category-youth-comedy.html"
  },
  {
    "id": "0223",
    "title": "爱出猫国语",
    "year": "2009",
    "region": "中国香港",
    "type": "电影",
    "genre": "青春,校园,喜剧",
    "tags": [
      "作弊",
      "考试",
      "友情",
      "粤语转国语"
    ],
    "oneLine": "国语配音版。一所重点中学里,七个学渣组建了“作弊天团”,却发现每次作弊成功都恰好帮老师抓到了真正的泄题黑手。",
    "url": "./movies/movie-0223.html",
    "cover": "./73.jpg",
    "category": "悬疑夜场",
    "categoryUrl": "./category-suspense-night.html"
  },
  {
    "id": "0224",
    "title": "找乐",
    "year": "2025",
    "region": "中国大陆",
    "type": "电影",
    "genre": "喜剧,剧情",
    "tags": [
      "老年",
      "退休",
      "相声",
      "友谊",
      "社区"
    ],
    "oneLine": "退休老头老李在社区组织“老年相声社”,把一群丧偶、空巢、患癌的老伙计活活逗乐了。",
    "url": "./movies/movie-0224.html",
    "cover": "./74.jpg",
    "category": "经典片库",
    "categoryUrl": "./category-classic-library.html"
  },
  {
    "id": "0225",
    "title": "南方新娘",
    "year": "2015",
    "region": "中国",
    "type": "电影",
    "genre": "剧情/爱情",
    "tags": [
      "客家文化",
      "童养媳",
      "女性觉醒",
      "民国"
    ],
    "oneLine": "民国时期,被卖作童养媳的客家少女阿兰,从认命到拿起剪刀,只用了十年。",
    "url": "./movies/movie-0225.html",
    "cover": "./75.jpg",
    "category": "青春喜剧",
    "categoryUrl": "./category-youth-comedy.html"
  },
  {
    "id": "0226",
    "title": "离线游戏断线:挑战下一关",
    "year": "2024",
    "region": "美国",
    "type": "电影",
    "genre": "动作/科幻/冒险",
    "tags": [
      "游戏",
      "穿越",
      "全息",
      "闯关"
    ],
    "oneLine": "游戏策划意外掉入自己设计的未上线副本,必须在服务器删除前打通所有关卡才能复活。",
    "url": "./movies/movie-0226.html",
    "cover": "./76.jpg",
    "category": "悬疑夜场",
    "categoryUrl": "./category-suspense-night.html"
  },
  {
    "id": "0227",
    "title": "地狱来的芳邻",
    "year": "2024",
    "region": "韩国",
    "type": "剧集",
    "genre": "黑色喜剧,悬疑",
    "tags": [
      "邻里",
      "伪装",
      "连环杀人",
      "反差"
    ],
    "oneLine": "新搬来的温柔主妇其实是隐退杀手,小区里每一个讨厌的人都在陆续消失。",
    "url": "./movies/movie-0227.html",
    "cover": "./77.jpg",
    "category": "都市爱情",
    "categoryUrl": "./category-romance-city.html"
  },
  {
    "id": "0228",
    "title": "银线惊爆点",
    "year": "2024",
    "region": "美国",
    "type": "电影",
    "genre": "犯罪,惊悚",
    "tags": [
      "金融犯罪",
      "卧底",
      "黑客",
      "华尔街",
      "内幕交易"
    ],
    "oneLine": "一名卧底记者潜入华尔街顶级投行,却发现操控全球银价的幕后黑手竟是政府内部高官。",
    "url": "./movies/movie-0228.html",
    "cover": "./78.jpg",
    "category": "奇幻科幻",
    "categoryUrl": "./category-fantasy-sci-fi.html"
  },
  {
    "id": "0229",
    "title": "潜伏者2016",
    "year": "2024",
    "region": "美国",
    "type": "电影",
    "genre": "动作,谍战",
    "tags": [
      "卧底",
      "特工",
      "反转",
      "硬核"
    ],
    "oneLine": "一名CIA特工奉命潜入恐怖组织,却发现自己渐渐分不清正义与邪恶的界限。",
    "url": "./movies/movie-0229.html",
    "cover": "./79.jpg",
    "category": "剧集连看",
    "categoryUrl": "./category-drama-series.html"
  },
  {
    "id": "0230",
    "title": "味之道",
    "year": "2025",
    "region": "日本",
    "type": "剧集",
    "genre": "剧情,美食",
    "tags": [
      "料理",
      "复仇",
      "传承"
    ],
    "oneLine": "米其林餐厅的女主厨因味觉受损坠落神坛,被迫向死对头学习“人情味”。",
    "url": "./movies/movie-0230.html",
    "cover": "./80.jpg",
    "category": "热映精选",
    "categoryUrl": "./category-hot-picks.html"
  },
  {
    "id": "0231",
    "title": "最高通缉犯",
    "year": "2026",
    "region": "美国/德国",
    "type": "剧集",
    "genre": "动作/犯罪/悬疑",
    "tags": [
      "国际刑警",
      "暗网追凶",
      "道德灰色"
    ],
    "oneLine": "落魄的前黑客被国际刑警招募去追踪“暗网法官”,却发现每个目标都罪有应得。",
    "url": "./movies/movie-0231.html",
    "cover": "./81.jpg",
    "category": "历史古装",
    "categoryUrl": "./category-history-costume.html"
  },
  {
    "id": "0232",
    "title": "无回应的24号山",
    "year": "2020",
    "region": "日本",
    "type": "电影",
    "genre": "恐怖/悬疑/民俗",
    "tags": [
      "灵异地点",
      "废村",
      "收音机",
      "遗言"
    ],
    "oneLine": "一档灵异直播节目进入传说中的“24号山”,收音机突然只能收到来自过去7天内的求救信号。",
    "url": "./movies/movie-0232.html",
    "cover": "./82.jpg",
    "category": "历史古装",
    "categoryUrl": "./category-history-costume.html"
  },
  {
    "id": "0233",
    "title": "囚鸟",
    "year": "2025",
    "region": "美国",
    "type": "电影",
    "genre": "剧情,犯罪",
    "tags": [
      "监狱",
      "父子",
      "救赎",
      "演技派",
      "社会写实"
    ],
    "oneLine": "为救被家暴的母亲,儿子失手杀人入狱,却发现狱警正是当年家暴的父亲。",
    "url": "./movies/movie-0233.html",
    "cover": "./83.jpg",
    "category": "剧集连看",
    "categoryUrl": "./category-drama-series.html"
  },
  {
    "id": "0234",
    "title": "夏树",
    "year": "2020",
    "region": "日本",
    "type": "电影",
    "genre": "爱情/青春/剧情",
    "tags": [
      "初恋",
      "夏日",
      "癌症",
      "纯爱",
      "催泪"
    ],
    "oneLine": "为了完成绝症女友的遗愿,他要在她生前,为她编织一场从未发生过的甜蜜初恋。",
    "url": "./movies/movie-0234.html",
    "cover": "./84.jpg",
    "category": "悬疑夜场",
    "categoryUrl": "./category-suspense-night.html"
  },
  {
    "id": "0235",
    "title": "爱登堡的极乐鸟世界",
    "year": "2024",
    "region": "英国",
    "type": "电影",
    "genre": "纪录片、冒险、自然",
    "tags": [
      "极乐鸟",
      "新几内亚",
      "爱登堡",
      "珍稀影像",
      "科学探索"
    ],
    "oneLine": "90岁的大卫·爱登堡最后一次远征,为新几内亚的极乐鸟留下空前绝后的影像。",
    "url": "./movies/movie-0235.html",
    "cover": "./85.jpg",
    "category": "全球佳作",
    "categoryUrl": "./category-global-stories.html"
  },
  {
    "id": "0236",
    "title": "天才麻将少女电影版",
    "year": "2025",
    "region": "日本",
    "type": "电影",
    "genre": "运动/剧情",
    "tags": [
      "竞技",
      "热血",
      "少女",
      "真人改编"
    ],
    "oneLine": "一个拥有“正负零”神技的高一女生,带领弱校挑战全国麻将最强豪门。",
    "url": "./movies/movie-0236.html",
    "cover": "./86.jpg",
    "category": "剧集连看",
    "categoryUrl": "./category-drama-series.html"
  },
  {
    "id": "0237",
    "title": "神探光头妹",
    "year": "2023",
    "region": "香港",
    "type": "电影",
    "genre": "喜剧,动作,悬疑",
    "tags": [
      "光头造型",
      "女侦探",
      "香港街景",
      "爆笑推理"
    ],
    "oneLine": "光头女警因秃顶被嘲笑,却靠一顶假发和惊人直觉,闯入富豪密室杀人案。",
    "url": "./movies/movie-0237.html",
    "cover": "./87.jpg",
    "category": "都市爱情",
    "categoryUrl": "./category-romance-city.html"
  },
  {
    "id": "0238",
    "title": "名剑风流",
    "year": "1990",
    "region": "中国香港",
    "type": "剧集",
    "genre": "武侠/古装/爱情",
    "tags": [
      "江湖",
      "复仇",
      "剑客",
      "易容"
    ],
    "oneLine": "武林盟主被杀,少侠携“名剑谱”逃亡,而追杀他的人中有一个是他的亲生父亲。",
    "url": "./movies/movie-0238.html",
    "cover": "./88.jpg",
    "category": "全球佳作",
    "categoryUrl": "./category-global-stories.html"
  },
  {
    "id": "0239",
    "title": "举起金刚",
    "year": "2019",
    "region": "韩国",
    "type": "电影",
    "genre": "剧情/运动",
    "tags": [
      "举重",
      "女性",
      "乡村",
      "梦想"
    ],
    "oneLine": "韩国最南端的海女村里,一群老奶奶决定组建一支平均年龄六十五岁的举重队。",
    "url": "./movies/movie-0239.html",
    "cover": "./89.jpg",
    "category": "都市爱情",
    "categoryUrl": "./category-romance-city.html"
  },
  {
    "id": "0240",
    "title": "缠绕之路",
    "year": "2025",
    "region": "法国/比利时",
    "type": "电影",
    "genre": "剧情,惊悚,冒险",
    "tags": [
      "蛇类恐惧",
      "亚马逊雨林",
      "心理创伤",
      "母女关系"
    ],
    "oneLine": "一名患有严重恐蛇症的动物学家回到亚马逊雨林寻找失踪的母亲,却发现母亲可能已与巨蛇融为一体。",
    "url": "./movies/movie-0240.html",
    "cover": "./90.jpg",
    "category": "家庭生活",
    "categoryUrl": "./category-family-life.html"
  },
  {
    "id": "0241",
    "title": "冬景",
    "year": "2027",
    "region": "中国大陆",
    "type": "电影",
    "genre": "剧情,家庭,悬疑",
    "tags": [
      "东北",
      "小镇",
      "失踪",
      "父女"
    ],
    "oneLine": "东北小镇的冬天,女儿突然失踪,父亲在寻找过程中发现自己从未真正了解过她。",
    "url": "./movies/movie-0241.html",
    "cover": "./91.jpg",
    "category": "青春喜剧",
    "categoryUrl": "./category-youth-comedy.html"
  },
  {
    "id": "0242",
    "title": "关于我自己的回忆",
    "year": "2007",
    "region": "法国",
    "type": "电影",
    "genre": "剧情,爱情,传记",
    "tags": [
      "失忆",
      "文学",
      "巴黎",
      "自我寻找",
      "文艺"
    ],
    "oneLine": "一个功成名就的老年作家意外失忆,他必须通过重读自己过去写的所有小说,来拼凑出真实的自我。",
    "url": "./movies/movie-0242.html",
    "cover": "./92.jpg",
    "category": "青春喜剧",
    "categoryUrl": "./category-youth-comedy.html"
  },
  {
    "id": "0243",
    "title": "三大怪兽美食家",
    "year": "2024",
    "region": "日本",
    "type": "电影",
    "genre": "奇幻,喜剧",
    "tags": [
      "怪兽",
      "美食",
      "治愈"
    ],
    "oneLine": "哥斯拉、基多拉和摩斯拉化身为迷你形态,在东京开了一家专门给各路怪兽做饭的深夜食堂。",
    "url": "./movies/movie-0243.html",
    "cover": "./93.jpg",
    "category": "全球佳作",
    "categoryUrl": "./category-global-stories.html"
  },
  {
    "id": "0244",
    "title": "志愿军:存亡之战",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "genre": "历史,战争",
    "tags": [
      "抗美援朝",
      "铁原阻击战",
      "宏大",
      "群像"
    ],
    "oneLine": "铁原阻击战,63军2.5万疲兵对阵5万精锐美军,一场几乎不可能完成的“存亡之战”。",
    "url": "./movies/movie-0244.html",
    "cover": "./94.jpg",
    "category": "热映精选",
    "categoryUrl": "./category-hot-picks.html"
  },
  {
    "id": "0245",
    "title": "两位女巫",
    "year": "2026",
    "region": "西班牙/墨西哥",
    "type": "电影",
    "genre": "恐怖/奇幻",
    "tags": [
      "女巫",
      "民俗恐怖",
      "母女",
      "祭祀"
    ],
    "oneLine": "一对经营草药店的母女其实是世代守护封印的女巫,直到封印下镇压的“饥饿之神”骗走了女儿的身体。",
    "url": "./movies/movie-0245.html",
    "cover": "./95.jpg",
    "category": "历史古装",
    "categoryUrl": "./category-history-costume.html"
  },
  {
    "id": "0246",
    "title": "四十度晒",
    "year": "2025",
    "region": "西班牙",
    "type": "电影",
    "genre": "喜剧/惊悚",
    "tags": [
      "度假惊悚",
      "社交媒体",
      "网红文化",
      "密闭空间"
    ],
    "oneLine": "七个网红受邀参加一场豪华海岛派对,却发现这里没有手机信号,而气温正以每小时一度的速度攀升。",
    "url": "./movies/movie-0246.html",
    "cover": "./96.jpg",
    "category": "院线热片",
    "categoryUrl": "./category-cinema-hits.html"
  },
  {
    "id": "0247",
    "title": "爱的殉道",
    "year": "2018",
    "region": "西班牙",
    "type": "电影",
    "genre": "剧情,爱情,惊悚",
    "tags": [
      "病态爱情",
      "宗教意象",
      "女性视角",
      "压抑",
      "西班牙"
    ],
    "oneLine": "一个从小被教育“爱就是忍耐”的女人,嫁给了一个温柔的男人,却发现他对她越好,她就越痛苦。",
    "url": "./movies/movie-0247.html",
    "cover": "./97.jpg",
    "category": "悬疑夜场",
    "categoryUrl": "./category-suspense-night.html"
  },
  {
    "id": "0248",
    "title": "黎明的飞鸟",
    "year": "2023",
    "region": "法国/加拿大",
    "type": "电影",
    "genre": "文艺/战争",
    "tags": [
      "一战",
      "信鸽",
      "战壕",
      "最后一封信"
    ],
    "oneLine": "一战末期,一只信鸽载着士兵的遗书飞越战线,遗书上写着“请将这只鸽子做成标本放在她窗台”。",
    "url": "./movies/movie-0248.html",
    "cover": "./98.jpg",
    "category": "剧集连看",
    "categoryUrl": "./category-drama-series.html"
  },
  {
    "id": "0249",
    "title": "史蒂文斯小姐",
    "year": "2016",
    "region": "美国",
    "type": "电影",
    "genre": "剧情、师生、文艺",
    "tags": [
      "师生恋",
      "舞台剧",
      "成长创伤",
      "女性视角",
      "独立电影"
    ],
    "oneLine": "一位实习女老师带学生去戏剧节途中,与天才男学生发生了危险的心灵共振。",
    "url": "./movies/movie-0249.html",
    "cover": "./99.jpg",
    "category": "全球佳作",
    "categoryUrl": "./category-global-stories.html"
  },
  {
    "id": "0250",
    "title": "小猪扑满的愿望",
    "year": "1996",
    "region": "英国",
    "type": "电影",
    "genre": "家庭/奇幻/剧情",
    "tags": [
      "遗愿清单",
      "儿童",
      "治愈",
      "死亡教育",
      "会说话的玩具"
    ],
    "oneLine": "一个患有绝症的小女孩在最后一个月里,和她那只只会说一句话的存钱罐小猪,完成了五个不可能的愿望。",
    "url": "./movies/movie-0250.html",
    "cover": "./100.jpg",
    "category": "全球佳作",
    "categoryUrl": "./category-global-stories.html"
  },
  {
    "id": "0251",
    "title": "完美犯罪",
    "year": "2025",
    "region": "西班牙",
    "type": "电视剧",
    "genre": "悬疑,犯罪,惊悚",
    "tags": [
      "高智商",
      "逆转",
      "法理",
      "道德困境",
      "陪审团"
    ],
    "oneLine": "一个法学教授精心策划了谋杀妻子的完美犯罪,却因为一个十二岁男孩的目击证词而崩塌,但男孩说的是真话吗?",
    "url": "./movies/movie-0251.html",
    "cover": "./101.jpg",
    "category": "历史古装",
    "categoryUrl": "./category-history-costume.html"
  },
  {
    "id": "0252",
    "title": "东京快递",
    "year": "1998",
    "region": "日本",
    "type": "电影",
    "genre": "剧情/喜剧",
    "tags": [
      "快递员",
      "都市群像",
      "平成怀旧",
      "人情冷暖",
      "单车"
    ],
    "oneLine": "一名沉默的东京快递员每天穿梭于高楼与陋巷,他发现每个包裹里都装着一个求救信号。",
    "url": "./movies/movie-0252.html",
    "cover": "./102.jpg",
    "category": "经典片库",
    "categoryUrl": "./category-classic-library.html"
  },
  {
    "id": "0253",
    "title": "异星战境",
    "year": "2027",
    "region": "美国",
    "type": "电影",
    "genre": "科幻,动作,冒险",
    "tags": [
      "星际殖民",
      "机甲大战",
      "外星生物",
      "人类命运"
    ],
    "oneLine": "人类殖民舰队在开普勒星球遭遇智慧硅基生命,机甲战士必须用血肉之躯对抗进化亿年的矿物巨兽。",
    "url": "./movies/movie-0253.html",
    "cover": "./103.jpg",
    "category": "家庭生活",
    "categoryUrl": "./category-family-life.html"
  },
  {
    "id": "0254",
    "title": "风月无边",
    "year": "2024",
    "region": "中国内地",
    "type": "电影",
    "genre": "爱情、古装、剧情",
    "tags": [
      "青楼",
      "戏曲",
      "男女反串",
      "禁忌之恋",
      "国潮"
    ],
    "oneLine": "民国名伶男旦与留洋归来的军阀之女,在风月场中上演一场颠倒性别的错位爱情。",
    "url": "./movies/movie-0254.html",
    "cover": "./104.jpg",
    "category": "动作专区",
    "categoryUrl": "./category-action-zone.html"
  },
  {
    "id": "0255",
    "title": "别让它杀死你",
    "year": "2024",
    "region": "美国",
    "type": "剧集",
    "genre": "科幻,恐怖",
    "tags": [
      "寄生",
      "自闭症",
      "高智商",
      "密室",
      "生存"
    ],
    "oneLine": "一种靠恐惧繁殖的寄生怪物席卷全球,唯一能看到它弱点的,是一群被关在精神病院的“疯子”。",
    "url": "./movies/movie-0255.html",
    "cover": "./105.jpg",
    "category": "经典片库",
    "categoryUrl": "./category-classic-library.html"
  },
  {
    "id": "0256",
    "title": "我亲爱的伊莱克特拉",
    "year": "2025",
    "region": "西班牙/墨西哥",
    "type": "剧集",
    "genre": "惊悚/悬疑/爱情",
    "tags": [
      "拉丁魔幻",
      "父女伦理",
      "复仇"
    ],
    "oneLine": "一个被母亲囚禁的女孩,发现爱她的“父亲”其实是绑架她的仇人,而她选择用一场盛大的婚礼来完成复仇。",
    "url": "./movies/movie-0256.html",
    "cover": "./106.jpg",
    "category": "剧集连看",
    "categoryUrl": "./category-drama-series.html"
  },
  {
    "id": "0257",
    "title": "济公斗蟋蟀",
    "year": "1981",
    "region": "中国大陆",
    "type": "电影",
    "genre": "动画/奇幻/古装",
    "tags": [
      "剪纸动画",
      "上海美术电影制片厂",
      "济公",
      "惩恶扬善"
    ],
    "oneLine": "济公把一只小蟋蟀变成“大将军”,帮穷苦书生斗倒了强占他家祖宅的恶少。",
    "url": "./movies/movie-0257.html",
    "cover": "./107.jpg",
    "category": "家庭生活",
    "categoryUrl": "./category-family-life.html"
  },
  {
    "id": "0258",
    "title": "面纱",
    "year": "2025",
    "region": "中国大陆",
    "type": "电影",
    "genre": "剧情/历史",
    "tags": [
      "民国",
      "女权",
      "京剧",
      "复仇"
    ],
    "oneLine": "唱花旦的男儿身,为了报杀父之仇,隐姓埋名成为大军阀最宠爱的五姨太。",
    "url": "./movies/movie-0258.html",
    "cover": "./108.jpg",
    "category": "院线热片",
    "categoryUrl": "./category-cinema-hits.html"
  },
  {
    "id": "0259",
    "title": "万界仙踪",
    "year": "2026",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "奇幻、仙侠、冒险",
    "tags": [
      "穿越",
      "修仙",
      "多元宇宙",
      "废柴逆袭",
      "宗门"
    ],
    "oneLine": "现代物理学研究生穿进修仙界,用热力学第二定律把修仙大佬搞崩溃了。",
    "url": "./movies/movie-0259.html",
    "cover": "./109.jpg",
    "category": "经典片库",
    "categoryUrl": "./category-classic-library.html"
  },
  {
    "id": "0260",
    "title": "南征北战",
    "year": "2025",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "历史/战争",
    "tags": [
      "解放战争",
      "兄弟离散",
      "阵营对立",
      "宏大场面"
    ],
    "oneLine": "一九四八年,亲兄弟分属国共两军,他们在同一场战役的堑壕两端对峙。",
    "url": "./movies/movie-0260.html",
    "cover": "./110.jpg",
    "category": "都市爱情",
    "categoryUrl": "./category-romance-city.html"
  },
  {
    "id": "0261",
    "title": "归宿",
    "year": "2025",
    "region": "韩国",
    "type": "电视剧",
    "genre": "剧情、悬疑、奇幻",
    "tags": [
      "车祸",
      "平行时空",
      "家庭",
      "赎罪",
      "替身"
    ],
    "oneLine": "一场车祸后,父亲发现自己进入了儿子的身体,而要回家的唯一方法是让儿子原谅自己。",
    "url": "./movies/movie-0261.html",
    "cover": "./111.jpg",
    "category": "剧集连看",
    "categoryUrl": "./category-drama-series.html"
  },
  {
    "id": "0262",
    "title": "小夜莺",
    "year": "2023",
    "region": "俄罗斯",
    "type": "电影",
    "genre": "战争/剧情/音乐",
    "tags": [
      "二战",
      "孩子",
      "歌声",
      "希望",
      "真实事件改编"
    ],
    "oneLine": "列宁格勒围城战期间,一个7岁的小女孩用歌声喂饱了整条街的难民,但她自己却不知道什么是“饱”。",
    "url": "./movies/movie-0262.html",
    "cover": "./112.jpg",
    "category": "历史古装",
    "categoryUrl": "./category-history-costume.html"
  },
  {
    "id": "0263",
    "title": "首席干饭人",
    "year": "2024",
    "region": "中国",
    "type": "剧集",
    "genre": "喜剧/奇幻",
    "tags": [
      "美食",
      "职场",
      "穿越",
      "金手指",
      "轻松"
    ],
    "oneLine": "川菜大厨穿越成古代宫廷御膳房实习生,靠美食征服皇帝和权臣。",
    "url": "./movies/movie-0263.html",
    "cover": "./113.jpg",
    "category": "院线热片",
    "categoryUrl": "./category-cinema-hits.html"
  },
  {
    "id": "0264",
    "title": "欧洲夜生活",
    "year": "1978",
    "region": "法国/意大利",
    "type": "电影",
    "genre": "剧情/情色/文艺",
    "tags": [
      "巴黎",
      "罗马",
      "夜总会",
      "人性",
      "颓废美学"
    ],
    "oneLine": "一名日本游客的相机镜头,记录下巴黎与罗马夜间流光溢彩背后,三男两女一夜的迷失与相遇。",
    "url": "./movies/movie-0264.html",
    "cover": "./114.jpg",
    "category": "家庭生活",
    "categoryUrl": "./category-family-life.html"
  },
  {
    "id": "0265",
    "title": "雨衣",
    "year": "2004",
    "region": "中国台湾",
    "type": "电影",
    "genre": "爱情/奇幻",
    "tags": [
      "纯爱",
      "雨天",
      "遗憾",
      "穿越",
      "轻幻"
    ],
    "oneLine": "一件可以交换灵魂的旧雨衣,让2024年的厌世青年和1999年的文艺少女,在同一场台北大雨中相遇。",
    "url": "./movies/movie-0265.html",
    "cover": "./115.jpg",
    "category": "动作专区",
    "categoryUrl": "./category-action-zone.html"
  },
  {
    "id": "0266",
    "title": "大理寺少卿游",
    "year": "2024",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "古装、悬疑、探案",
    "tags": [
      "大唐",
      "权谋",
      "猫奴",
      "动作",
      "轻喜"
    ],
    "oneLine": "大理寺最摆烂的少卿李牧之,一夜之间长出了猫耳和尾巴,还必须在一个月内破获连环命案才能变回人形。",
    "url": "./movies/movie-0266.html",
    "cover": "./116.jpg",
    "category": "奇幻科幻",
    "categoryUrl": "./category-fantasy-sci-fi.html"
  },
  {
    "id": "0267",
    "title": "大同世界",
    "year": "2026",
    "region": "中国大陆",
    "type": "电影",
    "genre": "剧情/科幻",
    "tags": [
      "乌托邦",
      "人工智能",
      "人性拷问",
      "集体主义"
    ],
    "oneLine": "在一个人人“平等”的算法城市里,一名修理工发现了幸福指数背后被删除的记忆黑洞。",
    "url": "./movies/movie-0267.html",
    "cover": "./117.jpg",
    "category": "动作专区",
    "categoryUrl": "./category-action-zone.html"
  },
  {
    "id": "0268",
    "title": "对魔导学园35试验小队",
    "year": "2015",
    "region": "日本",
    "type": "动画剧集",
    "genre": "奇幻/战斗",
    "tags": [
      "魔法",
      "学园",
      "废柴组",
      "热血"
    ],
    "oneLine": "学园最弱的35试验小队,专门负责测试被淘汰的魔导武器,直到发现它们都是真货。",
    "url": "./movies/movie-0268.html",
    "cover": "./118.jpg",
    "category": "剧集连看",
    "categoryUrl": "./category-drama-series.html"
  },
  {
    "id": "0269",
    "title": "偷情记",
    "year": "1993",
    "region": "中国香港",
    "type": "电影",
    "genre": "喜剧、爱情、情色",
    "tags": [
      "香港电影",
      "多线叙事",
      "乌龙",
      "都市男女",
      "偷情"
    ],
    "oneLine": "三个互不相识的男人在同一栋大厦偷情,却因为一个送错的外卖盒饭,引发了连环乌龙闹剧。",
    "url": "./movies/movie-0269.html",
    "cover": "./119.jpg",
    "category": "悬疑夜场",
    "categoryUrl": "./category-suspense-night.html"
  },
  {
    "id": "0270",
    "title": "神魄",
    "year": "2013",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "动画,机战,奇幻",
    "tags": [
      "热血",
      "召唤兽",
      "异世界",
      "对战"
    ],
    "oneLine": "普通高中生意外穿越到平行世界,成为唯一能召唤远古神魄的“天选者”。",
    "url": "./movies/movie-0270.html",
    "cover": "./120.jpg",
    "category": "都市爱情",
    "categoryUrl": "./category-romance-city.html"
  },
  {
    "id": "0271",
    "title": "倮·恋",
    "year": "2025",
    "region": "中国大陆",
    "type": "电影",
    "genre": "爱情,剧情",
    "tags": [
      "少数民族",
      "文化冲突",
      "传承"
    ],
    "oneLine": "一个即将外出打工的彝族少年,在火把节上爱上了一个被家族指婚的“倮倮”女孩。",
    "url": "./movies/movie-0271.html",
    "cover": "./121.jpg",
    "category": "悬疑夜场",
    "categoryUrl": "./category-suspense-night.html"
  },
  {
    "id": "0272",
    "title": "蔚蓝反射:澪",
    "year": "2022",
    "region": "日本",
    "type": "剧集",
    "genre": "奇幻/少女/心理",
    "tags": [
      "魔法少女变种",
      "情感具象化",
      "百合",
      "异能战斗"
    ],
    "oneLine": "一群少女可以进入他人的“心灵世界”并具象化情感碎片,但澪发现自己的世界里住着另一个自己。",
    "url": "./movies/movie-0272.html",
    "cover": "./122.jpg",
    "category": "都市爱情",
    "categoryUrl": "./category-romance-city.html"
  },
  {
    "id": "0273",
    "title": "重组比利",
    "year": "2023",
    "region": "美国",
    "type": "电影",
    "genre": "科幻剧情",
    "tags": [
      "多重人格",
      "意识重组",
      "创伤",
      "身份认同"
    ],
    "oneLine": "医生将比利的24个人格拆解重组,却创造出了第25个——真正的怪物。",
    "url": "./movies/movie-0273.html",
    "cover": "./123.jpg",
    "category": "青春喜剧",
    "categoryUrl": "./category-youth-comedy.html"
  },
  {
    "id": "0274",
    "title": "著草二人组",
    "year": "1998",
    "region": "中国香港",
    "type": "电影",
    "genre": "喜剧,犯罪",
    "tags": [
      "黑帮",
      "逃亡",
      "港式幽默",
      "兄弟情"
    ],
    "oneLine": "两个最不靠谱的黑帮小喽啰,因私吞赃款而踏上了一路倒霉的逃亡之路。",
    "url": "./movies/movie-0274.html",
    "cover": "./124.jpg",
    "category": "全球佳作",
    "categoryUrl": "./category-global-stories.html"
  },
  {
    "id": "0275",
    "title": "邪恶新世界2",
    "year": "2026",
    "region": "美国",
    "type": "电影",
    "genre": "动画/奇幻/喜剧",
    "tags": [
      "童话",
      "反派",
      "颠覆",
      "搞笑",
      "暗黑童话"
    ],
    "oneLine": "上一部洗白的反派们发现,“正义”的英雄才是世界崩塌的元凶。",
    "url": "./movies/movie-0275.html",
    "cover": "./125.jpg",
    "category": "奇幻科幻",
    "categoryUrl": "./category-fantasy-sci-fi.html"
  },
  {
    "id": "0276",
    "title": "鸡姑娘",
    "year": "2021",
    "region": "中国内地",
    "type": "电影",
    "genre": "剧情、家庭",
    "tags": [
      "农村",
      "女性",
      "代际关系",
      "非遗",
      "独立"
    ],
    "oneLine": "贵州深山里,一个被叫做“鸡姑娘”的聋哑少女,为保住祖传的蜡染手艺,独自对抗整个寨子的男权规则。",
    "url": "./movies/movie-0276.html",
    "cover": "./126.jpg",
    "category": "青春喜剧",
    "categoryUrl": "./category-youth-comedy.html"
  },
  {
    "id": "0277",
    "title": "凡人修仙传重制版",
    "year": "2025",
    "region": "中国大陆",
    "type": "动画剧集",
    "genre": "奇幻,动作,修仙",
    "tags": [
      "重置",
      "高画质",
      "慢节奏",
      "凡人流"
    ],
    "oneLine": "一个毫无灵根的穷小子,靠捡垃圾、捡漏、捡破烂,愣是在残酷的修仙界苟到了飞升。",
    "url": "./movies/movie-0277.html",
    "cover": "./127.jpg",
    "category": "剧集连看",
    "categoryUrl": "./category-drama-series.html"
  },
  {
    "id": "0278",
    "title": "蓝色惊爆点",
    "year": "2024",
    "region": "法国",
    "type": "电影",
    "genre": "惊悚/悬疑/运动",
    "tags": [
      "极限运动",
      "深海恐惧",
      "洗钱阴谋",
      "失忆",
      "颜色隐喻"
    ],
    "oneLine": "一名患有深海恐惧症的保险调查员,必须潜入马里亚纳海沟附近的可疑沉船,以揭开合伙人失踪的真相。",
    "url": "./movies/movie-0278.html",
    "cover": "./128.jpg",
    "category": "家庭生活",
    "categoryUrl": "./category-family-life.html"
  },
  {
    "id": "0279",
    "title": "施公奇案2粤语",
    "year": "2010",
    "region": "中国香港",
    "type": "剧集",
    "genre": "古装,悬疑,喜剧",
    "tags": [
      "断案",
      "粤语",
      "神仙",
      "续集"
    ],
    "oneLine": "施世纶获仙人托梦赐予新神器“乾坤笔”,专破涉及皇室秘闻的诡异奇案。",
    "url": "./movies/movie-0279.html",
    "cover": "./129.jpg",
    "category": "家庭生活",
    "categoryUrl": "./category-family-life.html"
  },
  {
    "id": "0280",
    "title": "杀出狂人镇1973",
    "year": "1973",
    "region": "美国",
    "type": "电影",
    "genre": "恐怖,科幻,惊悚",
    "tags": [
      "丧尸",
      "军方秘密",
      "封闭小镇",
      "集体癔症"
    ],
    "oneLine": "军事毒气泄漏,小镇居民集体发疯,幸存者必须在黎明前杀出血路。",
    "url": "./movies/movie-0280.html",
    "cover": "./130.jpg",
    "category": "青春喜剧",
    "categoryUrl": "./category-youth-comedy.html"
  },
  {
    "id": "0281",
    "title": "遗憾告知",
    "year": "2025",
    "region": "英国",
    "type": "剧集",
    "genre": "剧情,战争,家庭",
    "tags": [
      "阵亡通知",
      "军官",
      "战后创伤",
      "单元剧"
    ],
    "oneLine": "一名专门负责向家属送达阵亡通知的军官,每一集敲开一扇门,击碎一个家庭。",
    "url": "./movies/movie-0281.html",
    "cover": "./131.jpg",
    "category": "剧集连看",
    "categoryUrl": "./category-drama-series.html"
  },
  {
    "id": "0282",
    "title": "漠北追击",
    "year": "2025",
    "region": "中国大陆",
    "type": "电影",
    "genre": "动作/犯罪/西部",
    "tags": [
      "荒漠",
      "缉毒",
      "摩托车",
      "孤胆英雄"
    ],
    "oneLine": "退役边防战士单枪匹马闯入死亡沙漠,追回被毒贩劫持的疫苗车。",
    "url": "./movies/movie-0282.html",
    "cover": "./132.jpg",
    "category": "动作专区",
    "categoryUrl": "./category-action-zone.html"
  },
  {
    "id": "0283",
    "title": "闯关吧!请指教",
    "year": "2025",
    "region": "中国大陆",
    "type": "综艺",
    "genre": "真人秀,游戏,竞技",
    "tags": [
      "密室逃脱",
      "智力对决",
      "明星闯关"
    ],
    "oneLine": "六位明星被困在由AI设计的“人生错题本”里,只有犯过足够多的错,才能闯关成功。",
    "url": "./movies/movie-0283.html",
    "cover": "./133.jpg",
    "category": "全球佳作",
    "categoryUrl": "./category-global-stories.html"
  },
  {
    "id": "0284",
    "title": "81年代人生",
    "year": "2020",
    "region": "中国内地",
    "type": "剧集",
    "genre": "剧情,家庭",
    "tags": [
      "改革开放",
      "怀旧",
      "工人家庭",
      "时代变迁"
    ],
    "oneLine": "三个1981年出生在东北钢铁厂家属院的发小,用四十年时间走出了一条截然不同的人生路。",
    "url": "./movies/movie-0284.html",
    "cover": "./134.jpg",
    "category": "全球佳作",
    "categoryUrl": "./category-global-stories.html"
  },
  {
    "id": "0285",
    "title": "1968年困惑的夏天",
    "year": "2024",
    "region": "法国/意大利",
    "type": "电影",
    "genre": "剧情/历史",
    "tags": [
      "五月风暴",
      "青春",
      "政治启蒙"
    ],
    "oneLine": "1968年巴黎学运的激情退去后,五个年轻人发现他们扔出去的砖头,砸中的其实是自己的父亲。",
    "url": "./movies/movie-0285.html",
    "cover": "./135.jpg",
    "category": "家庭生活",
    "categoryUrl": "./category-family-life.html"
  },
  {
    "id": "0286",
    "title": "我是有情人",
    "year": "2025",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "都市情感",
    "tags": [
      "霸总",
      "契约婚姻",
      "先婚后爱",
      "商战"
    ],
    "oneLine": "为了继承千亿遗产,冷酷霸总必须在三个月内找到一个女人假结婚,他却选中了那个对他恨之入骨的卧底女记者。",
    "url": "./movies/movie-0286.html",
    "cover": "./136.jpg",
    "category": "悬疑夜场",
    "categoryUrl": "./category-suspense-night.html"
  },
  {
    "id": "0287",
    "title": "烽火无间",
    "year": "2025",
    "region": "中国大陆",
    "type": "电影",
    "genre": "谍战/悬疑/动作",
    "tags": [
      "双面间谍",
      "抗战",
      "密室狼人杀"
    ],
    "oneLine": "1944年上海,日军特高课封锁一栋公寓,限期三天找出潜伏的“夜莺”,被困其中的五名嫌疑人展开了一场心理与肉体的双重绞杀。",
    "url": "./movies/movie-0287.html",
    "cover": "./137.jpg",
    "category": "动作专区",
    "categoryUrl": "./category-action-zone.html"
  },
  {
    "id": "0288",
    "title": "怒海劫",
    "year": "2025",
    "region": "中国大陆",
    "type": "电影",
    "genre": "灾难,动作,剧情",
    "tags": [
      "海上救援",
      "台风",
      "真实事件改编",
      "绝境救援"
    ],
    "oneLine": "百年一遇的超强台风逼近,一艘满载游客的豪华渡轮引擎失灵,一场与死神赛跑的海上救援开始了。",
    "url": "./movies/movie-0288.html",
    "cover": "./138.jpg",
    "category": "经典片库",
    "categoryUrl": "./category-classic-library.html"
  },
  {
    "id": "0289",
    "title": "拉雅",
    "year": "2026",
    "region": "东南亚(虚构/多国合拍)",
    "type": "电影",
    "genre": "奇幻,冒险,动作",
    "tags": [
      "东南亚神话",
      "龙",
      "部落",
      "女性英雄",
      "觉醒"
    ],
    "oneLine": "在龙消失五百年后,最后一个龙心部落的少女拉雅,必须重新召唤神龙才能阻止大陆沉没。",
    "url": "./movies/movie-0289.html",
    "cover": "./139.jpg",
    "category": "剧集连看",
    "categoryUrl": "./category-drama-series.html"
  },
  {
    "id": "0290",
    "title": "今生无悔粤语",
    "year": "2024",
    "region": "中国香港",
    "type": "剧集",
    "genre": "剧情/家庭/年代",
    "tags": [
      "粤语原声",
      "世家恩怨",
      "浪子回头"
    ],
    "oneLine": "九龙城寨长大的浪子程子豪出狱后,发现当年被他辜负的女人不仅养大了他的女儿,还在帮他守护着即将被拆的老字号糖水铺。",
    "url": "./movies/movie-0290.html",
    "cover": "./140.jpg",
    "category": "历史古装",
    "categoryUrl": "./category-history-costume.html"
  },
  {
    "id": "0291",
    "title": "大道",
    "year": "2025",
    "region": "中国大陆",
    "type": "电影",
    "genre": "历史,剧情",
    "tags": [
      "丝绸之路",
      "古代",
      "商队",
      "冒险"
    ],
    "oneLine": "唐代丝绸之路上,一支商队误入死亡禁地,发现壁画预言中的“魔山”即将崩塌。",
    "url": "./movies/movie-0291.html",
    "cover": "./141.jpg",
    "category": "动作专区",
    "categoryUrl": "./category-action-zone.html"
  },
  {
    "id": "0292",
    "title": "前往并离开",
    "year": "2019",
    "region": "德国",
    "type": "电影",
    "genre": "剧情/公路/哲学",
    "tags": [
      "存在主义",
      "临终关怀",
      "父子和解",
      "公路片"
    ],
    "oneLine": "一位癌症晚期父亲雇佣儿子开车送自己前往“死亡诊所”,但一路上谁也没有说破。",
    "url": "./movies/movie-0292.html",
    "cover": "./142.jpg",
    "category": "动作专区",
    "categoryUrl": "./category-action-zone.html"
  },
  {
    "id": "0293",
    "title": "至尊先生",
    "year": "2024",
    "region": "中国香港",
    "type": "电影",
    "genre": "动作/喜剧",
    "tags": [
      "僵尸",
      "市井",
      "师徒"
    ],
    "oneLine": "过气僵尸片演员“至尊先生”被请去为富豪父亲做一场假法事,没想到尸体真的站了起来。",
    "url": "./movies/movie-0293.html",
    "cover": "./143.jpg",
    "category": "动作专区",
    "categoryUrl": "./category-action-zone.html"
  },
  {
    "id": "0294",
    "title": "上海异人娼馆",
    "year": "2024",
    "region": "日本/中国香港",
    "type": "电影",
    "genre": "剧情/情色/历史",
    "tags": [
      "1930年代",
      "租界文化",
      "女性群像",
      "禁忌之恋",
      "浮世绘美学"
    ],
    "oneLine": "1938年的上海租界,一家由白俄贵族经营的秘密俱乐部里,三位女性的命运在乱世中纠缠绞杀。",
    "url": "./movies/movie-0294.html",
    "cover": "./144.jpg",
    "category": "动作专区",
    "categoryUrl": "./category-action-zone.html"
  },
  {
    "id": "0295",
    "title": "铁血殊途",
    "year": "2019",
    "region": "中国大陆",
    "type": "电视剧",
    "genre": "战争,历史,谍战",
    "tags": [
      "抗日",
      "兄弟反目",
      "军阀",
      "矿山争夺"
    ],
    "oneLine": "为了守住战略矿产,亲兄弟分别投入国共两党,在硝烟中殊死搏斗。",
    "url": "./movies/movie-0295.html",
    "cover": "./145.jpg",
    "category": "动作专区",
    "categoryUrl": "./category-action-zone.html"
  },
  {
    "id": "0296",
    "title": "白银和梦想之书",
    "year": "2023",
    "region": "德国",
    "type": "电影",
    "genre": "奇幻/冒险",
    "tags": [
      "童话改编",
      "魔法",
      "兄妹",
      "想象力"
    ],
    "oneLine": "当全世界的小孩突然失去了做梦的能力,一对兄妹必须闯入梦之国度,夺回被偷走的梦。",
    "url": "./movies/movie-0296.html",
    "cover": "./146.jpg",
    "category": "剧集连看",
    "categoryUrl": "./category-drama-series.html"
  },
  {
    "id": "0297",
    "title": "爱民村官",
    "year": "2009",
    "region": "中国大陆",
    "type": "电影",
    "genre": "剧情、传记、主旋律",
    "tags": [
      "农村",
      "基层干部",
      "真人真事",
      "感人"
    ],
    "oneLine": "一个大学生村官用三年时间,将负债累累的贫困村变成了全国文明村。",
    "url": "./movies/movie-0297.html",
    "cover": "./147.jpg",
    "category": "历史古装",
    "categoryUrl": "./category-history-costume.html"
  },
  {
    "id": "0298",
    "title": "关中枪声",
    "year": "2012",
    "region": "中国大陆",
    "type": "电影",
    "genre": "西部/动作",
    "tags": [
      "民国",
      "土匪",
      "复仇",
      "双枪"
    ],
    "oneLine": "民国西北,一名枪法如神的复仇者回到故乡,发现他要杀的人早已变成了另一个“义匪”。",
    "url": "./movies/movie-0298.html",
    "cover": "./148.jpg",
    "category": "奇幻科幻",
    "categoryUrl": "./category-fantasy-sci-fi.html"
  },
  {
    "id": "0299",
    "title": "莫顿船长与蜘蛛女王",
    "year": "2017",
    "region": "英国",
    "type": "电影",
    "genre": "冒险/奇幻/蒸汽朋克",
    "tags": [
      "维多利亚时代",
      "巨型蜘蛛",
      "深海",
      "异形生物"
    ],
    "oneLine": "维多利亚时代的深海打捞船长莫顿,在海底发现了一座由变异蜘蛛女王统治的白垩纪遗迹。",
    "url": "./movies/movie-0299.html",
    "cover": "./149.jpg",
    "category": "都市爱情",
    "categoryUrl": "./category-romance-city.html"
  },
  {
    "id": "0300",
    "title": "听见下雨的声音",
    "year": "2023",
    "region": "中国台湾",
    "type": "电影",
    "genre": "爱情,奇幻,音乐",
    "tags": [
      "雨景",
      "失聪",
      "初恋",
      "清新唯美"
    ],
    "oneLine": "一个能听见别人内心下雨声的女孩,遇到了一个永远晴空万里的男孩,却发现男孩是雨神转世。",
    "url": "./movies/movie-0300.html",
    "cover": "./150.jpg",
    "category": "青春喜剧",
    "categoryUrl": "./category-youth-comedy.html"
  },
  {
    "id": "0301",
    "title": "推动摇篮的手2025",
    "year": "2025",
    "region": "韩国",
    "type": "电影",
    "genre": "惊悚/悬疑",
    "tags": [
      "反转",
      "复仇",
      "女性",
      "保姆"
    ],
    "oneLine": "完美的保姆,完美的母亲,一场关于人工智能育儿的血腥失控。",
    "url": "./movies/movie-0301.html",
    "cover": "./1.jpg",
    "category": "家庭生活",
    "categoryUrl": "./category-family-life.html"
  },
  {
    "id": "0302",
    "title": "我们还在等什么快乐呢!",
    "year": "2023",
    "region": "法国",
    "type": "电影",
    "genre": "剧情,喜剧",
    "tags": [
      "中年危机",
      "法式幽默",
      "日常哲学",
      "公路片"
    ],
    "oneLine": "三个中年发小因葬礼重聚,开着灵车横穿法国,去寻找20年前埋在土里的“快乐时间胶囊”。",
    "url": "./movies/movie-0302.html",
    "cover": "./2.jpg",
    "category": "经典片库",
    "categoryUrl": "./category-classic-library.html"
  },
  {
    "id": "0303",
    "title": "回忆积木小屋",
    "year": "2025",
    "region": "日本",
    "type": "动画短片/电影",
    "genre": "剧情/科幻/温情",
    "tags": [
      "末世",
      "孤独",
      "回忆",
      "治愈",
      "手绘"
    ],
    "oneLine": "海水淹没世界,老人独自加高小屋,潜水捞烟斗时,坠入每一层被淹没的房间里藏着的温情记忆。",
    "url": "./movies/movie-0303.html",
    "cover": "./3.jpg",
    "category": "热映精选",
    "categoryUrl": "./category-hot-picks.html"
  },
  {
    "id": "0304",
    "title": "彩票也疯狂",
    "year": "2025",
    "region": "中国大陆",
    "type": "电影",
    "genre": "喜剧/剧情",
    "tags": [
      "黑色幽默 小人物 幸运 人性 城市"
    ],
    "oneLine": "清洁工老宋中了两千万彩票,却发现身边所有人都突然变得“善良”起来。",
    "url": "./movies/movie-0304.html",
    "cover": "./4.jpg",
    "category": "奇幻科幻",
    "categoryUrl": "./category-fantasy-sci-fi.html"
  },
  {
    "id": "0305",
    "title": "成形",
    "year": "2024",
    "region": "法国",
    "type": "电影",
    "genre": "剧情,奇幻,悬疑",
    "tags": [
      "雕塑",
      "艺术",
      "身份认同",
      "身体恐怖",
      "心理"
    ],
    "oneLine": "女雕塑家发现自己捏出的泥人活了过来,且能变成任何人的模样,包括她死去的孪生妹妹。",
    "url": "./movies/movie-0305.html",
    "cover": "./5.jpg",
    "category": "奇幻科幻",
    "categoryUrl": "./category-fantasy-sci-fi.html"
  },
  {
    "id": "0306",
    "title": "顿巴斯",
    "year": "2026",
    "region": "乌克兰",
    "type": "电影",
    "genre": "剧情/战争",
    "tags": [
      "黑色幽默",
      "纪实风格",
      "社会讽刺"
    ],
    "oneLine": "一名假记者在战火纷飞的顿巴斯地区,靠表演“战争残酷”收割国际流量,却意外卷入真阴谋。",
    "url": "./movies/movie-0306.html",
    "cover": "./6.jpg",
    "category": "剧集连看",
    "categoryUrl": "./category-drama-series.html"
  },
  {
    "id": "0307",
    "title": "野性都市",
    "year": "2012",
    "region": "法国",
    "type": "电影",
    "genre": "剧情,犯罪",
    "tags": [
      "巴黎郊区",
      "移民青少年",
      "帮派暴力"
    ],
    "oneLine": "巴黎93省,三个移民少年偷了一辆摩托车,引发一场吞噬整个街区的帮派战争。",
    "url": "./movies/movie-0307.html",
    "cover": "./7.jpg",
    "category": "经典片库",
    "categoryUrl": "./category-classic-library.html"
  },
  {
    "id": "0308",
    "title": "上海大风暴粤语",
    "year": "1989",
    "region": "中国香港",
    "type": "剧集",
    "genre": "动作、枪战、爱情",
    "tags": [
      "民国恩仇",
      "兄弟反目",
      "经典港剧"
    ],
    "oneLine": "三十年代上海滩,最要好的兄弟,一个是巡捕房探长,一个是黑帮大佬,两人却爱上了同一个女人——日本间谍。",
    "url": "./movies/movie-0308.html",
    "cover": "./8.jpg",
    "category": "全球佳作",
    "categoryUrl": "./category-global-stories.html"
  },
  {
    "id": "0309",
    "title": "播种者",
    "year": "2026",
    "region": "美国/加拿大",
    "type": "电影",
    "genre": "科幻/悬疑/惊悚",
    "tags": [
      "太空",
      "基因工程",
      "伦理",
      "密室"
    ],
    "oneLine": "星际移民飞船上,低温休眠的植物学家醒来发现,飞船的氧气系统正在被一种未知的真菌吞噬。",
    "url": "./movies/movie-0309.html",
    "cover": "./9.jpg",
    "category": "历史古装",
    "categoryUrl": "./category-history-costume.html"
  },
  {
    "id": "0310",
    "title": "乘龙怪婿第四季",
    "year": "2010",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "喜剧,古装,家庭",
    "tags": [
      "穿越",
      "女婿",
      "搞笑",
      "岭南文化"
    ],
    "oneLine": "贾发为了保住“最佳岳父”的称号,竟然把现代女婿培训班的课程搬到了唐朝。",
    "url": "./movies/movie-0310.html",
    "cover": "./10.jpg",
    "category": "动作专区",
    "categoryUrl": "./category-action-zone.html"
  },
  {
    "id": "0311",
    "title": "战火迷情",
    "year": "2023",
    "region": "美国",
    "type": "剧集",
    "genre": "爱情,战争,剧情",
    "tags": [
      "战地记者",
      "敌后求生",
      "禁忌之恋"
    ],
    "oneLine": "战地记者与敌方军官在硝烟中相爱,每一次重逢都可能是永别。",
    "url": "./movies/movie-0311.html",
    "cover": "./11.jpg",
    "category": "热映精选",
    "categoryUrl": "./category-hot-picks.html"
  },
  {
    "id": "0312",
    "title": "飞狗巴迪",
    "year": "2024",
    "region": "美国",
    "type": "电影",
    "genre": "家庭/奇幻",
    "tags": [
      "会飞的狗",
      "宠物情缘",
      "小镇危机",
      "环保",
      "治愈"
    ],
    "oneLine": "内向少年捡到一只会飞的金毛犬,与此同时,小镇上空的候鸟开始离奇失踪,似乎与附近新建的化工厂有关。",
    "url": "./movies/movie-0312.html",
    "cover": "./12.jpg",
    "category": "历史古装",
    "categoryUrl": "./category-history-costume.html"
  },
  {
    "id": "0313",
    "title": "漫画天使",
    "year": "2022",
    "region": "韩国",
    "type": "剧集",
    "genre": "奇幻/爱情/漫改",
    "tags": [
      "穿越",
      "漫画家",
      "救赎",
      "二次元",
      "催泪"
    ],
    "oneLine": "一位绝望的漫画家画出了一个能穿越到现实的天使,对方却只想劝他活下去。",
    "url": "./movies/movie-0313.html",
    "cover": "./13.jpg",
    "category": "家庭生活",
    "categoryUrl": "./category-family-life.html"
  },
  {
    "id": "0314",
    "title": "无法抗拒的他日版",
    "year": "2023",
    "region": "日本",
    "type": "电视剧",
    "genre": "爱情/剧情/社会",
    "tags": [
      "翻拍",
      "渣男恋爱",
      "女性觉醒"
    ],
    "oneLine": "翻拍自大热韩剧,日版将背景改为东京美大,那位不想恋爱只想调情的“蝴蝶男”让女主一次次沦陷。",
    "url": "./movies/movie-0314.html",
    "cover": "./14.jpg",
    "category": "历史古装",
    "categoryUrl": "./category-history-costume.html"
  },
  {
    "id": "0315",
    "title": "伤不起的女人",
    "year": "2025",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "剧情/家庭/女性",
    "tags": [
      "女性群像",
      "婚姻",
      "职场",
      "养老",
      "互助"
    ],
    "oneLine": "三个处于不同人生阶段的都市女性,因为一场“杀猪盘”诈骗案,命运紧紧纠缠在一起。",
    "url": "./movies/movie-0315.html",
    "cover": "./15.jpg",
    "category": "奇幻科幻",
    "categoryUrl": "./category-fantasy-sci-fi.html"
  },
  {
    "id": "0316",
    "title": "荒唐妙计保娇妻",
    "year": "1995",
    "region": "中国香港",
    "type": "电影",
    "genre": "喜剧/爱情/犯罪",
    "tags": [
      "荒诞",
      "闹剧",
      "绑架",
      "兄弟情",
      "港式无厘头"
    ],
    "oneLine": "三个损友为了帮助兄弟保住即将到手的富家千金,竟雇人假装绑架新娘,结果假绑匪遇到了真悍匪。",
    "url": "./movies/movie-0316.html",
    "cover": "./16.jpg",
    "category": "奇幻科幻",
    "categoryUrl": "./category-fantasy-sci-fi.html"
  },
  {
    "id": "0317",
    "title": "开心超人之逆世营救",
    "year": "2025",
    "region": "中国大陆",
    "type": "动画电影",
    "genre": "喜剧/动作/科幻",
    "tags": [
      "平行宇宙",
      "超能力",
      "合家欢",
      "大逆转"
    ],
    "oneLine": "开心超人为了救回被邪恶势力绑架的朋友,意外穿越到了一个所有超人都变成反派的平行宇宙。",
    "url": "./movies/movie-0317.html",
    "cover": "./17.jpg",
    "category": "青春喜剧",
    "categoryUrl": "./category-youth-comedy.html"
  },
  {
    "id": "0318",
    "title": "冲浪企鹅2",
    "year": "2017",
    "region": "美国",
    "type": "电影",
    "genre": "喜剧,动画,运动,家庭",
    "tags": [
      "续集",
      "冲浪",
      "企鹅",
      "友情",
      "团队赛"
    ],
    "oneLine": "大Z和考迪带领各自的冲浪团队,被迫联手对抗一支使用科技手段作弊的机械企鹅冲浪队。",
    "url": "./movies/movie-0318.html",
    "cover": "./18.jpg",
    "category": "悬疑夜场",
    "categoryUrl": "./category-suspense-night.html"
  },
  {
    "id": "0319",
    "title": "李泳知的彩虹",
    "year": "2025",
    "region": "韩国",
    "type": "纪录片/音乐",
    "genre": "纪录片/音乐/励志",
    "tags": [
      "说唱",
      "女性",
      "成长",
      "真实"
    ],
    "oneLine": "跟拍韩国第一位女性地下说唱冠军李泳知从街头battle到主流音乐节的三年,记录她的伤痕与彩虹。",
    "url": "./movies/movie-0319.html",
    "cover": "./19.jpg",
    "category": "奇幻科幻",
    "categoryUrl": "./category-fantasy-sci-fi.html"
  },
  {
    "id": "0320",
    "title": "两个男人",
    "year": "2022",
    "region": "中国",
    "type": "电影",
    "genre": "剧情,犯罪",
    "tags": [
      "兄弟情",
      "卧底",
      "救赎",
      "心理博弈"
    ],
    "oneLine": "刑警老炮与黑帮义子共用一张脸,一局关于忠诚与背叛的换命赌局就此开场。",
    "url": "./movies/movie-0320.html",
    "cover": "./20.jpg",
    "category": "历史古装",
    "categoryUrl": "./category-history-costume.html"
  },
  {
    "id": "0321",
    "title": "暗无天日",
    "year": "2026",
    "region": "美国",
    "type": "电影",
    "genre": "科幻,悬疑,灾难",
    "tags": [
      "全球停电",
      "地心",
      "地下城",
      "生存",
      "阴谋"
    ],
    "oneLine": "一场太阳耀斑让地球表面陷入永夜,幸存者转入地下城,但人们很快发现,地下城的“白天”是由一个神秘AI控制的谎言。",
    "url": "./movies/movie-0321.html",
    "cover": "./21.jpg",
    "category": "悬疑夜场",
    "categoryUrl": "./category-suspense-night.html"
  },
  {
    "id": "0322",
    "title": "大学新生",
    "year": "2021",
    "region": "中国",
    "type": "剧集",
    "genre": "青春/校园",
    "tags": [
      "宿舍生活",
      "社团竞选",
      "成长阵痛"
    ],
    "oneLine": "小镇学霸林芷进入上海名校第一天,就被室友孤立、被学长诈骗,她决定用一场疯狂的社团大战来逆袭。",
    "url": "./movies/movie-0322.html",
    "cover": "./22.jpg",
    "category": "奇幻科幻",
    "categoryUrl": "./category-fantasy-sci-fi.html"
  },
  {
    "id": "0323",
    "title": "心动的瞬间",
    "year": "2023",
    "region": "中国台湾",
    "type": "电影",
    "genre": "爱情/奇幻",
    "tags": [
      "超能力",
      "一见钟情",
      "初恋",
      "软科幻"
    ],
    "oneLine": "拥有“看见心动瞬间”能力的男孩,发现他命中注定女孩的每一次心跳加速,都不是因为他。",
    "url": "./movies/movie-0323.html",
    "cover": "./23.jpg",
    "category": "动作专区",
    "categoryUrl": "./category-action-zone.html"
  },
  {
    "id": "0324",
    "title": "游戏时间",
    "year": "2021",
    "region": "日本",
    "type": "电影",
    "genre": "科幻,剧情",
    "tags": [
      "密室",
      "心理",
      "人性实验"
    ],
    "oneLine": "六个人被困在巨型游戏厅,通关才能活命,但游戏规则是他们自己投票制定的。",
    "url": "./movies/movie-0324.html",
    "cover": "./24.jpg",
    "category": "热映精选",
    "categoryUrl": "./category-hot-picks.html"
  },
  {
    "id": "0325",
    "title": "争妻起祸",
    "year": "2023",
    "region": "印度",
    "type": "电影",
    "genre": "剧情、爱情、动作",
    "tags": [
      "乡村",
      "荣誉谋杀",
      "女性觉醒",
      "反转",
      "大女主"
    ],
    "oneLine": "村里两个男人为她决斗,她却被当作奖品;于是她杀死了两个“主人”。",
    "url": "./movies/movie-0325.html",
    "cover": "./25.jpg",
    "category": "剧集连看",
    "categoryUrl": "./category-drama-series.html"
  },
  {
    "id": "0326",
    "title": "别担心,他不会走远的",
    "year": "2018",
    "region": "美国",
    "type": "电影",
    "genre": "剧情/传记",
    "tags": [
      "残疾",
      "漫画",
      "康复"
    ],
    "oneLine": "一场车祸导致四肢瘫痪的漫画家,用嘴咬着笔画下自己的荒唐人生。",
    "url": "./movies/movie-0326.html",
    "cover": "./26.jpg",
    "category": "青春喜剧",
    "categoryUrl": "./category-youth-comedy.html"
  },
  {
    "id": "0327",
    "title": "记者",
    "year": "2025",
    "region": "韩国",
    "type": "电影",
    "genre": "悬疑,剧情,犯罪",
    "tags": [
      "新闻伦理",
      "连环杀人",
      "舆论操控"
    ],
    "oneLine": "她靠伪造新闻成了名记,却发现自己编造的凶手,正在现实中杀人。",
    "url": "./movies/movie-0327.html",
    "cover": "./27.jpg",
    "category": "悬疑夜场",
    "categoryUrl": "./category-suspense-night.html"
  },
  {
    "id": "0328",
    "title": "死之咏赞",
    "year": "2024",
    "region": "韩国",
    "type": "电视剧",
    "genre": "爱情,历史,悲剧",
    "tags": [
      "朝鲜日据",
      "声乐",
      "殉情",
      "唯美"
    ],
    "oneLine": "朝鲜日据时期,一位天才女高音与一位有妇之夫的剧作家,共谱了一曲凄美的死亡咏叹调。",
    "url": "./movies/movie-0328.html",
    "cover": "./28.jpg",
    "category": "剧集连看",
    "categoryUrl": "./category-drama-series.html"
  },
  {
    "id": "0329",
    "title": "续座头市物语",
    "year": "2022",
    "region": "日本",
    "type": "电影",
    "genre": "时代剧、动作",
    "tags": [
      "盲剑客",
      "江湖浪人",
      "恩怨情仇",
      "武士道",
      "黑白摄影"
    ],
    "oneLine": "失明剑客座头市隐退多年后,被迫重出江湖,却发现要杀的人是自己失散的儿子。",
    "url": "./movies/movie-0329.html",
    "cover": "./29.jpg",
    "category": "热映精选",
    "categoryUrl": "./category-hot-picks.html"
  },
  {
    "id": "0330",
    "title": "恋上你爱上我",
    "year": "2025",
    "region": "中国/韩国",
    "type": "剧集",
    "genre": "爱情/喜剧/剧情",
    "tags": [
      "偶像",
      "替身",
      "双向暗恋",
      "娱乐圈",
      "轻喜剧"
    ],
    "oneLine": "一个平凡女孩成为顶流男偶像的替身保镖,却发现对方也在偷偷扮演着她的网恋对象。",
    "url": "./movies/movie-0330.html",
    "cover": "./30.jpg",
    "category": "历史古装",
    "categoryUrl": "./category-history-costume.html"
  },
  {
    "id": "0331",
    "title": "选择我",
    "year": "2024",
    "region": "中国",
    "type": "电影",
    "genre": "悬疑、爱情、心理",
    "tags": [
      "记忆删除",
      "克隆伦理",
      "三角恋",
      "烧脑",
      "替身文学"
    ],
    "oneLine": "失忆后的她发现身边有两个一模一样的男友,而手机上一条未发送的信息写着:别信那个活着的。",
    "url": "./movies/movie-0331.html",
    "cover": "./31.jpg",
    "category": "悬疑夜场",
    "categoryUrl": "./category-suspense-night.html"
  },
  {
    "id": "0332",
    "title": "龙马精神1965",
    "year": "1965",
    "region": "中国香港",
    "type": "电影",
    "genre": "动作/武侠",
    "tags": [
      "邵氏",
      "黑白片",
      "粤语残片",
      "侠女",
      "复仇"
    ],
    "oneLine": "一匹神骏白马与侠女联手,在乱世中追查灭门凶手,演绎一段人马情未了。",
    "url": "./movies/movie-0332.html",
    "cover": "./32.jpg",
    "category": "全球佳作",
    "categoryUrl": "./category-global-stories.html"
  },
  {
    "id": "0333",
    "title": "突围",
    "year": "2021",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "剧情/悬疑/犯罪",
    "tags": [
      "国企改革",
      "资产调查",
      "深水炸弹",
      "纪检"
    ],
    "oneLine": "国企董事长临危受命查账,却意外触碰到了五年一桩矿难瞒报案的惊天秘密。",
    "url": "./movies/movie-0333.html",
    "cover": "./33.jpg",
    "category": "剧集连看",
    "categoryUrl": "./category-drama-series.html"
  },
  {
    "id": "0334",
    "title": "无尽的控诉",
    "year": "2013",
    "region": "韩国",
    "type": "电影",
    "genre": "犯罪/惊悚",
    "tags": [
      "复仇",
      "法庭戏",
      "时间循环",
      "绝望"
    ],
    "oneLine": "一个失去女儿的母亲发现,杀死女儿的凶手每七天就会被释放,而每一次释放都伴随着新的命案。",
    "url": "./movies/movie-0334.html",
    "cover": "./34.jpg",
    "category": "院线热片",
    "categoryUrl": "./category-cinema-hits.html"
  },
  {
    "id": "0335",
    "title": "墨西哥人的宫殿",
    "year": "2023",
    "region": "墨西哥",
    "type": "电影",
    "genre": "悬疑,奇幻",
    "tags": [
      "迷宫",
      "记忆",
      "父亲",
      "复仇"
    ],
    "oneLine": "一个建筑系学生回到墨西哥城,发现去世的父亲留下了一座会自己生长的迷宫宫殿。",
    "url": "./movies/movie-0335.html",
    "cover": "./35.jpg",
    "category": "院线热片",
    "categoryUrl": "./category-cinema-hits.html"
  },
  {
    "id": "0336",
    "title": "我自己的房间",
    "year": "2023",
    "region": "韩国",
    "type": "电影",
    "genre": "剧情,独立电影",
    "tags": [
      "独居女性",
      "压抑",
      "心理惊悚",
      "社会写实 独居",
      "凶宅",
      "房地产腐败",
      "女性困境",
      "悬疑"
    ],
    "oneLine": "30岁未婚的智秀终于攒钱买下自己的小公寓,却发现墙壁里埋着一具前租客的尸体,而物业拒绝她报警。",
    "url": "./movies/movie-0336.html",
    "cover": "./36.jpg",
    "category": "都市爱情",
    "categoryUrl": "./category-romance-city.html"
  },
  {
    "id": "0337",
    "title": "史宾赛的机密任务",
    "year": "2020",
    "region": "美国",
    "type": "电影",
    "genre": "动作,喜剧,犯罪",
    "tags": [
      "硬汉",
      "宠物犬",
      "伸冤"
    ],
    "oneLine": "刚出狱的前警察史宾赛被迫与一只智商超群的罗威纳犬搭档,追查杀害老友的真凶。",
    "url": "./movies/movie-0337.html",
    "cover": "./37.jpg",
    "category": "都市爱情",
    "categoryUrl": "./category-romance-city.html"
  },
  {
    "id": "0338",
    "title": "雷顿大冒险:永远的歌姬",
    "year": "2009",
    "region": "日本",
    "type": "电影",
    "genre": "动画/悬疑/冒险",
    "tags": [
      "雷顿教授",
      "解谜",
      "蒸汽朋克",
      "歌剧"
    ],
    "oneLine": "著名考古学家雷顿教授收到求助:一名失踪的女歌手在被绑架期间,声音通过电视传遍全城,所有听到的人都会失去意识。",
    "url": "./movies/movie-0338.html",
    "cover": "./38.jpg",
    "category": "历史古装",
    "categoryUrl": "./category-history-costume.html"
  },
  {
    "id": "0339",
    "title": "佐罗",
    "year": "2020",
    "region": "西班牙/墨西哥",
    "type": "电影",
    "genre": "动作、冒险、西部",
    "tags": [
      "蒙面侠客",
      "拉丁风情",
      "女性觉醒",
      "翻拍"
    ],
    "oneLine": "老佐罗重伤后,他的哑巴女儿不得不戴上黑面具,用一场骗局守护整座小镇。",
    "url": "./movies/movie-0339.html",
    "cover": "./39.jpg",
    "category": "都市爱情",
    "categoryUrl": "./category-romance-city.html"
  },
  {
    "id": "0340",
    "title": "野兽不再",
    "year": "2025",
    "region": "法国/比利时",
    "type": "电影",
    "genre": "犯罪/剧情/心理",
    "tags": [
      "杀手",
      "失忆",
      "赎罪",
      "文艺犯罪",
      "身份认同"
    ],
    "oneLine": "一个金盆洗手的老年杀手被确诊阿尔茨海默症,为了不伤害家人,他决定在忘记一切前杀掉最后一个目标——自己。",
    "url": "./movies/movie-0340.html",
    "cover": "./40.jpg",
    "category": "动作专区",
    "categoryUrl": "./category-action-zone.html"
  },
  {
    "id": "0341",
    "title": "钟馗捉鬼粤语",
    "year": "1997",
    "region": "中国香港",
    "type": "剧集",
    "genre": "奇幻、古装、动作",
    "tags": [
      "钟馗",
      "粤语原声",
      "捉鬼",
      "民间传说",
      "道教"
    ],
    "oneLine": "钟馗被贬下凡,必须用粤语唱腔念出伏魔咒,才能破解百年怨魂的诅咒。",
    "url": "./movies/movie-0341.html",
    "cover": "./41.jpg",
    "category": "动作专区",
    "categoryUrl": "./category-action-zone.html"
  },
  {
    "id": "0342",
    "title": "挑头人",
    "year": "2024",
    "region": "中国大陆",
    "type": "电视剧 (24集)",
    "genre": "悬疑/刑侦/犯罪",
    "tags": [
      "剪纸",
      "连环杀手",
      "乡村",
      "民俗",
      "替罪羊"
    ],
    "oneLine": "北方小镇接连出现无头尸,每具尸体手里都攥着一张剪纸,那是村里的“替罪羊”标记。",
    "url": "./movies/movie-0342.html",
    "cover": "./42.jpg",
    "category": "青春喜剧",
    "categoryUrl": "./category-youth-comedy.html"
  },
  {
    "id": "0343",
    "title": "百千家的妖怪王子",
    "year": "2024",
    "region": "日本",
    "type": "剧集",
    "genre": "奇幻/爱情",
    "tags": [
      "妖怪",
      "少女漫改",
      "和风",
      "诅咒",
      "治愈"
    ],
    "oneLine": "少女继承了深山里的老宅,发现里面住着七个美男子妖怪,而她的到来恰好解开了封印百年的“百鬼夜行”诅咒。",
    "url": "./movies/movie-0343.html",
    "cover": "./43.jpg",
    "category": "剧集连看",
    "categoryUrl": "./category-drama-series.html"
  },
  {
    "id": "0344",
    "title": "龙马精神大赢家",
    "year": "2024",
    "region": "中国香港",
    "type": "电影",
    "genre": "喜剧、家庭、运动",
    "tags": [
      "赛马",
      "父女",
      "逆袭",
      "港式幽默"
    ],
    "oneLine": "破产老爸和叛逆女儿买下最后一名赛马“垃圾龙”,却意外发现它听得懂人话。",
    "url": "./movies/movie-0344.html",
    "cover": "./44.jpg",
    "category": "悬疑夜场",
    "categoryUrl": "./category-suspense-night.html"
  },
  {
    "id": "0345",
    "title": "请修理好我的男朋友",
    "year": "2023",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "喜剧,爱情,科幻",
    "tags": [
      "机器人男友",
      "修理爱情",
      "电子失恋",
      "脑洞喜剧"
    ],
    "oneLine": "她的程序猿男友中了病毒,不仅不会说情话,还会在她哭的时候弹出一句“错误代码404”。",
    "url": "./movies/movie-0345.html",
    "cover": "./45.jpg",
    "category": "剧集连看",
    "categoryUrl": "./category-drama-series.html"
  },
  {
    "id": "0346",
    "title": "幽冥战线",
    "year": "2024",
    "region": "俄罗斯",
    "type": "电影",
    "genre": "战争,科幻",
    "tags": [
      "东欧",
      "无人作战",
      "灵异",
      "小队",
      "悬念"
    ],
    "oneLine": "在俄乌冲突的前线,一支侦察队进入“幽灵电台”发出的信号区域,发现敌人可能不是活人。",
    "url": "./movies/movie-0346.html",
    "cover": "./46.jpg",
    "category": "家庭生活",
    "categoryUrl": "./category-family-life.html"
  },
  {
    "id": "0347",
    "title": "打击惊魂",
    "year": "1988",
    "region": "英国",
    "type": "电影",
    "genre": "惊悚,犯罪,悬疑",
    "tags": [
      "政治惊悚",
      "冷战",
      "误杀",
      "逃亡",
      "替罪羊"
    ],
    "oneLine": "一名普通的伦敦萨克斯手在西班牙度假时偷了一辆车,没想到后备箱里藏着一具尸体和足以引发战争的绝密胶卷。",
    "url": "./movies/movie-0347.html",
    "cover": "./47.jpg",
    "category": "剧集连看",
    "categoryUrl": "./category-drama-series.html"
  },
  {
    "id": "0348",
    "title": "超时空武士",
    "year": "2024",
    "region": "日本",
    "type": "剧集",
    "genre": "科幻,动作,历史",
    "tags": [
      "穿越",
      "战国",
      "机甲",
      "武士道",
      "平行时空"
    ],
    "oneLine": "公元 2150 年,一名机甲驾驶员因虫洞坠入战国时代,成了织田信长眼中的“妖物”。",
    "url": "./movies/movie-0348.html",
    "cover": "./48.jpg",
    "category": "经典片库",
    "categoryUrl": "./category-classic-library.html"
  },
  {
    "id": "0349",
    "title": "维多利亚与阿卜杜勒",
    "year": "2018",
    "region": "英国",
    "type": "电影",
    "genre": "剧情/传记/历史",
    "tags": [
      "皇室秘闻",
      "忘年交",
      "文化冲突",
      "宫廷"
    ],
    "oneLine": "晚年的维多利亚女王与一位印度青年穆斯林 clerk 之间,发展出一段超越阶层与信仰的惊人友谊。",
    "url": "./movies/movie-0349.html",
    "cover": "./49.jpg",
    "category": "家庭生活",
    "categoryUrl": "./category-family-life.html"
  },
  {
    "id": "0350",
    "title": "轰炸街头",
    "year": "2025",
    "region": "美国",
    "type": "电影",
    "genre": "动作/战争",
    "tags": [
      "巷战",
      "兄弟情",
      "写实",
      "惨烈"
    ],
    "oneLine": "一支四人美军小队被困在虚构中东城市,空袭坐标离他们只有三百米,而指挥部拒绝修正。",
    "url": "./movies/movie-0350.html",
    "cover": "./50.jpg",
    "category": "奇幻科幻",
    "categoryUrl": "./category-fantasy-sci-fi.html"
  },
  {
    "id": "0351",
    "title": "海滩梦魇",
    "year": "2025",
    "region": "澳大利亚",
    "type": "电影",
    "genre": "恐怖/惊悚",
    "tags": [
      "变异",
      "海滩",
      "寄生",
      "猎奇"
    ],
    "oneLine": "毕业旅行狂欢夜,海水涨潮后,沙滩下沉睡的远古寄生虫开始从脚底钻入人的身体。",
    "url": "./movies/movie-0351.html",
    "cover": "./51.jpg",
    "category": "剧集连看",
    "categoryUrl": "./category-drama-series.html"
  },
  {
    "id": "0352",
    "title": "荷里活小子",
    "year": "2004",
    "region": "美国",
    "type": "电影",
    "genre": "喜剧,励志,青春",
    "tags": [
      "追梦",
      "龙套",
      "好莱坞",
      "友情",
      "搞笑"
    ],
    "oneLine": "一个从中国农村偷渡到美国的小伙子,怀揣电影梦,在好莱坞片场从最底层的龙套逆袭成动作巨星。",
    "url": "./movies/movie-0352.html",
    "cover": "./52.jpg",
    "category": "动作专区",
    "categoryUrl": "./category-action-zone.html"
  },
  {
    "id": "0353",
    "title": "蜂巢2024",
    "year": "2024",
    "region": "英国",
    "type": "电视剧",
    "genre": "科幻/悬疑",
    "tags": [
      "蜂群思维",
      "反乌托邦",
      "记忆删除"
    ],
    "oneLine": "人类自愿植入芯片接入“蜂巢网络”以消除负面情绪,代价是每个月随机删除一个最爱的人的记忆。",
    "url": "./movies/movie-0353.html",
    "cover": "./53.jpg",
    "category": "热映精选",
    "categoryUrl": "./category-hot-picks.html"
  },
  {
    "id": "0354",
    "title": "拯救小鼠拉菲",
    "year": "2025",
    "region": "中国大陆",
    "type": "动画电影",
    "genre": "动画/冒险/儿童",
    "tags": [
      "宠物鼠",
      "城市冒险",
      "小女孩",
      "勇气与友谊"
    ],
    "oneLine": "七岁女孩的小鼠拉菲被冲进下水道,她独自闯入地下世界展开一场迷你特工队式救援。",
    "url": "./movies/movie-0354.html",
    "cover": "./54.jpg",
    "category": "剧集连看",
    "categoryUrl": "./category-drama-series.html"
  },
  {
    "id": "0355",
    "title": "夫妇联欢~回不去的夜晚~",
    "year": "2023",
    "region": "日本",
    "type": "电视剧集",
    "genre": "剧情/悬疑/伦理",
    "tags": [
      "夫妻交换",
      "一夜错误",
      "心理惊悚",
      "婚姻危机",
      "慢热"
    ],
    "oneLine": "两对夫妇在温泉旅馆的“联欢”之后,其中一方的妻子失踪,而四个人对那晚的记忆竟然完全不同。",
    "url": "./movies/movie-0355.html",
    "cover": "./55.jpg",
    "category": "全球佳作",
    "categoryUrl": "./category-global-stories.html"
  },
  {
    "id": "0356",
    "title": "厉鬼缠身",
    "year": "2024",
    "region": "中国台湾",
    "type": "电影",
    "genre": "恐怖",
    "tags": [
      "附身",
      "民俗",
      "仪式"
    ],
    "oneLine": "一名网红入住凶宅直播招魂,却将古代“替身”邪灵带回了现实世界。",
    "url": "./movies/movie-0356.html",
    "cover": "./56.jpg",
    "category": "青春喜剧",
    "categoryUrl": "./category-youth-comedy.html"
  },
  {
    "id": "0357",
    "title": "自由之路",
    "year": "2026",
    "region": "美国",
    "type": "电影",
    "genre": "历史,剧情,冒险",
    "tags": [
      "地下铁路",
      "废奴运动",
      "女性逃亡"
    ],
    "oneLine": "1850年代,一名女奴带着逃亡指南,穿越沼泽与猎奴者,奔向北方的星光。",
    "url": "./movies/movie-0357.html",
    "cover": "./57.jpg",
    "category": "奇幻科幻",
    "categoryUrl": "./category-fantasy-sci-fi.html"
  },
  {
    "id": "0358",
    "title": "烽火血泪美人恩",
    "year": "2020",
    "region": "中国",
    "type": "电影",
    "genre": "战争/爱情",
    "tags": [
      "乱世",
      "歌女",
      "情报"
    ],
    "oneLine": "抗战乱世中,夜总会歌女用美色传递情报,却爱上了敌人的敌人。",
    "url": "./movies/movie-0358.html",
    "cover": "./58.jpg",
    "category": "热映精选",
    "categoryUrl": "./category-hot-picks.html"
  },
  {
    "id": "0359",
    "title": "美人魔力",
    "year": "2023",
    "region": "法国",
    "type": "电影",
    "genre": "喜剧,奇幻",
    "tags": [
      "变身",
      "时尚",
      "讽刺",
      "女性"
    ],
    "oneLine": "一个素面朝天的码农戴上一条魔法项链后变身为超级美女,却发现全世界的代码都成了乱码。",
    "url": "./movies/movie-0359.html",
    "cover": "./59.jpg",
    "category": "奇幻科幻",
    "categoryUrl": "./category-fantasy-sci-fi.html"
  },
  {
    "id": "0360",
    "title": "无罪之凶",
    "year": "2028",
    "region": "美国",
    "type": "电影",
    "genre": "悬疑/犯罪/剧情",
    "tags": [
      "冤案",
      "律师",
      "反转",
      "司法公正",
      "真实改编"
    ],
    "oneLine": "一名死囚在行刑前夜翻供,年轻公益律师为其奔走翻案,却发现自己可能正在释放一个真正的恶魔。",
    "url": "./movies/movie-0360.html",
    "cover": "./60.jpg",
    "category": "青春喜剧",
    "categoryUrl": "./category-youth-comedy.html"
  },
  {
    "id": "0361",
    "title": "玛格丽塔的情人",
    "year": "2025",
    "region": "意大利",
    "type": "电影",
    "genre": "爱情,悬疑",
    "tags": [
      "记忆删除",
      "虚实之间",
      "存在主义",
      "迷情"
    ],
    "oneLine": "富商遗孀玛格丽塔每年雇一个男人扮演她死去的情人,直到有一天,一个男人说她才是被扮演的那个人。",
    "url": "./movies/movie-0361.html",
    "cover": "./61.jpg",
    "category": "家庭生活",
    "categoryUrl": "./category-family-life.html"
  },
  {
    "id": "0362",
    "title": "为爱担当",
    "year": "2022",
    "region": "新加坡/马来西亚",
    "type": "剧集",
    "genre": "爱情,喜剧,家庭",
    "tags": [
      "多元文化",
      "假结婚",
      "娘惹",
      "家族企业",
      "真香"
    ],
    "oneLine": "一个娘惹家族的少爷为了继承家业,雇了一个印度裔女孩假扮女友,结果假戏真做全家炸锅。",
    "url": "./movies/movie-0362.html",
    "cover": "./62.jpg",
    "category": "经典片库",
    "categoryUrl": "./category-classic-library.html"
  },
  {
    "id": "0363",
    "title": "开心超人联盟之英雄归来",
    "year": "2026",
    "region": "中国",
    "type": "动画电影",
    "genre": "喜剧/动作/科幻",
    "tags": [
      "童年回归",
      "超英合体",
      "反派洗白"
    ],
    "oneLine": "开心超人退休五年后变成了一个送外卖的普通胖子,直到曾经的宿敌哭着求他归队,说星星球要完了。",
    "url": "./movies/movie-0363.html",
    "cover": "./63.jpg",
    "category": "院线热片",
    "categoryUrl": "./category-cinema-hits.html"
  },
  {
    "id": "0364",
    "title": "威猩闯天涯",
    "year": "2025",
    "region": "美国",
    "type": "电影",
    "genre": "喜剧/冒险/家庭",
    "tags": [
      "动物主角",
      "公路冒险",
      "爆笑",
      "温情"
    ],
    "oneLine": "一只会开车的黑猩猩为了寻找主人,横穿美国,却意外成为网红公路英雄。",
    "url": "./movies/movie-0364.html",
    "cover": "./64.jpg",
    "category": "青春喜剧",
    "categoryUrl": "./category-youth-comedy.html"
  },
  {
    "id": "0365",
    "title": "球星艳运",
    "year": "1993",
    "region": "中国香港",
    "type": "电影",
    "genre": "喜剧,爱情,运动",
    "tags": [
      "足球",
      "艳遇",
      "乌龙",
      "无厘头"
    ],
    "oneLine": "一个三流球员意外获得“桃花运超能力”,却因此踢进了世界杯。",
    "url": "./movies/movie-0365.html",
    "cover": "./65.jpg",
    "category": "历史古装",
    "categoryUrl": "./category-history-costume.html"
  },
  {
    "id": "0366",
    "title": "四大名捕",
    "year": "2024",
    "region": "中国",
    "type": "电影",
    "genre": "武侠/悬疑",
    "tags": [
      "推理破案",
      "朝堂阴谋",
      "反类型"
    ],
    "oneLine": "无情、铁手、追命、冷血四人入职京师总捕司第一天,就发现他们追捕的飞贼是早已殉职的前任捕头。",
    "url": "./movies/movie-0366.html",
    "cover": "./66.jpg",
    "category": "家庭生活",
    "categoryUrl": "./category-family-life.html"
  },
  {
    "id": "0367",
    "title": "嫁个老公过日子",
    "year": "2015",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "家庭/喜剧/爱情",
    "tags": [
      "北京",
      "台湾",
      "婆媳",
      "传统小吃"
    ],
    "oneLine": "北京姑娘嫁了个台湾老公,两家从面条和卤肉饭的“饮食战争”打到婆媳大战。",
    "url": "./movies/movie-0367.html",
    "cover": "./67.jpg",
    "category": "剧集连看",
    "categoryUrl": "./category-drama-series.html"
  },
  {
    "id": "0368",
    "title": "生存婚礼",
    "year": "2024",
    "region": "日本",
    "type": "电影",
    "genre": "灾难,剧情,惊悚",
    "tags": [
      "地震海啸",
      "婚礼变逃生",
      "极限生存"
    ],
    "oneLine": "一场盛大的海边婚礼正在进行,一场毁灭性的9.0级大地震和海啸突然到来,所有人必须为生存而战。",
    "url": "./movies/movie-0368.html",
    "cover": "./68.jpg",
    "category": "青春喜剧",
    "categoryUrl": "./category-youth-comedy.html"
  },
  {
    "id": "0369",
    "title": "高速婆婆",
    "year": "2025",
    "region": "日本",
    "type": "电影",
    "genre": "恐怖/都市传说",
    "tags": [
      "公路",
      "诅咒",
      "老人",
      "飙车"
    ],
    "oneLine": "深夜高速上,一个佝偻的老太婆会以120码的速度追你的车,追上后问你“能不能捎我一程”。",
    "url": "./movies/movie-0369.html",
    "cover": "./69.jpg",
    "category": "历史古装",
    "categoryUrl": "./category-history-costume.html"
  },
  {
    "id": "0370",
    "title": "留给吾爱的日记",
    "year": "2023",
    "region": "中国台湾",
    "type": "电影",
    "genre": "剧情家庭",
    "tags": [
      "绝症",
      "手写书信",
      "代际和解"
    ],
    "oneLine": "叛逆少女无意间发现已故母亲留下的十本日记,里面写满了对她未来的预言。",
    "url": "./movies/movie-0370.html",
    "cover": "./70.jpg",
    "category": "全球佳作",
    "categoryUrl": "./category-global-stories.html"
  },
  {
    "id": "0371",
    "title": "邪神与厨二病少女",
    "year": "2024",
    "region": "日本",
    "type": "网络动画",
    "genre": "喜剧,奇幻",
    "tags": [
      "中二病",
      "日常搞笑",
      "邪神"
    ],
    "oneLine": "中二病少女莉莉在家召唤邪神准备签订契约统治世界,结果召唤出来的邪神是个只想宅家打游戏的老赖。",
    "url": "./movies/movie-0371.html",
    "cover": "./71.jpg",
    "category": "悬疑夜场",
    "categoryUrl": "./category-suspense-night.html"
  },
  {
    "id": "0372",
    "title": "黑吃黑第二季",
    "year": "2025",
    "region": "美国",
    "type": "剧集",
    "genre": "犯罪/动作/惊悚",
    "tags": [
      "黑帮",
      "卧底",
      "背叛",
      "尺度大"
    ],
    "oneLine": "第一季假扮黑帮老大的卧底警察成功上位后,发现自己要对付的不是警察,而是另一个更高级别的卧底。",
    "url": "./movies/movie-0372.html",
    "cover": "./72.jpg",
    "category": "悬疑夜场",
    "categoryUrl": "./category-suspense-night.html"
  },
  {
    "id": "0373",
    "title": "泄密者死",
    "year": "2025",
    "region": "韩国",
    "type": "电影",
    "genre": "惊悚/政治/谍战",
    "tags": [
      "青瓦台",
      "媒体黑幕",
      "匿名爆料",
      "追杀戏",
      "全员恶人"
    ],
    "oneLine": "一名国会议员在直播中念出绝密名单后当场被狙杀,所有看到直播的人开始接连“意外”死亡。",
    "url": "./movies/movie-0373.html",
    "cover": "./73.jpg",
    "category": "奇幻科幻",
    "categoryUrl": "./category-fantasy-sci-fi.html"
  },
  {
    "id": "0374",
    "title": "花宵道中",
    "year": "2014",
    "region": "日本",
    "type": "电影",
    "genre": "剧情情色",
    "tags": [
      "游女",
      "江户",
      "爱情",
      "悲恋",
      "花魁"
    ],
    "oneLine": "江户末期吉原游廊,一位即将赎身的头牌花魁,在最后一个月里爱上了一个只会做风铃的盲眼少年。",
    "url": "./movies/movie-0374.html",
    "cover": "./74.jpg",
    "category": "剧集连看",
    "categoryUrl": "./category-drama-series.html"
  },
  {
    "id": "0375",
    "title": "死亡占卜",
    "year": "2024",
    "region": "美国",
    "type": "电影",
    "genre": "恐怖/悬疑",
    "tags": [
      "通灵板",
      "校园传说",
      "诅咒",
      "密室"
    ],
    "oneLine": "六个学生在废弃精神病院玩通灵板,召唤出的“灵体”说出了只有死人知道的秘密。",
    "url": "./movies/movie-0375.html",
    "cover": "./75.jpg",
    "category": "家庭生活",
    "categoryUrl": "./category-family-life.html"
  },
  {
    "id": "0376",
    "title": "贞观之治",
    "year": "2025",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "历史/剧情",
    "tags": [
      "宫廷",
      "权谋",
      "改革",
      "李世民"
    ],
    "oneLine": "不拍李世民的光辉战绩,只聚焦他晚年最痛苦的三年:太子谋反、爱将背叛、贞观盛世的阴影下。",
    "url": "./movies/movie-0376.html",
    "cover": "./76.jpg",
    "category": "奇幻科幻",
    "categoryUrl": "./category-fantasy-sci-fi.html"
  },
  {
    "id": "0377",
    "title": "德扑女王2:双面鬼王",
    "year": "2019",
    "region": "中国内地",
    "type": "网络电影",
    "genre": "动作/悬疑/犯罪",
    "tags": [
      "德州扑克",
      "女王",
      "鬼王",
      "赌局",
      "反杀"
    ],
    "oneLine": "德扑女王在总决赛上遇到了从未输过的“鬼王”,却发现对方是自己失踪多年的父亲。",
    "url": "./movies/movie-0377.html",
    "cover": "./77.jpg",
    "category": "家庭生活",
    "categoryUrl": "./category-family-life.html"
  },
  {
    "id": "0378",
    "title": "失衡凶间之罪与杀",
    "year": "2025",
    "region": "中国香港",
    "type": "电影",
    "genre": "悬疑/犯罪/惊悚",
    "tags": [
      "心理恐怖",
      "都市传说",
      "单元剧",
      "因果报应",
      "烧脑"
    ],
    "oneLine": "一栋诡异的大楼内,三个互不相干的人因一场离奇命案被锁定,每个人心中都藏着不可告人的“罪与杀”。",
    "url": "./movies/movie-0378.html",
    "cover": "./78.jpg",
    "category": "悬疑夜场",
    "categoryUrl": "./category-suspense-night.html"
  },
  {
    "id": "0379",
    "title": "神采星球",
    "year": "2026",
    "region": "美国",
    "type": "电视剧",
    "genre": "科幻,冒险,悬疑",
    "tags": [
      "外星殖民",
      "意识上传",
      "乌托邦",
      "赛博朋克",
      "视效大片"
    ],
    "oneLine": "一批殖民者抵达看似天堂的“神采星球”,却发现这里的原住民没有肉体,他们能“附身”任何来访者,并让你沉迷于最完美的梦中。",
    "url": "./movies/movie-0379.html",
    "cover": "./79.jpg",
    "category": "经典片库",
    "categoryUrl": "./category-classic-library.html"
  },
  {
    "id": "0380",
    "title": "凪的新生活",
    "year": "2023",
    "region": "日本",
    "type": "电视剧",
    "genre": "剧情,生活",
    "tags": [
      "重启人生",
      "社交恐惧",
      "治愈系"
    ],
    "oneLine": "辞职分手后,社恐女主搬进乡间破屋,试图找回真实的自己。",
    "url": "./movies/movie-0380.html",
    "cover": "./80.jpg",
    "category": "动作专区",
    "categoryUrl": "./category-action-zone.html"
  },
  {
    "id": "0381",
    "title": "烈血英伦",
    "year": "2023",
    "region": "英国",
    "type": "电影",
    "genre": "犯罪/动作/惊悚",
    "tags": [
      "伦敦",
      "黑帮",
      "复仇",
      "地下拳场"
    ],
    "oneLine": "伦敦地下拳场的华人拳王为替妹妹报仇,单枪匹马挑战掌控整个东区的英伦黑帮家族。",
    "url": "./movies/movie-0381.html",
    "cover": "./81.jpg",
    "category": "全球佳作",
    "categoryUrl": "./category-global-stories.html"
  },
  {
    "id": "0382",
    "title": "传奇酒馆",
    "year": "2024",
    "region": "中国台湾",
    "type": "剧集",
    "genre": "奇幻、剧情、群像",
    "tags": [
      "深夜食堂风",
      "许愿",
      "代价",
      "单元剧",
      "人生百态"
    ],
    "oneLine": "一家只在雨夜开门的小酒馆,老板能调出让客人“回到过去五分钟”的酒,但喝下的人都会后悔。",
    "url": "./movies/movie-0382.html",
    "cover": "./82.jpg",
    "category": "青春喜剧",
    "categoryUrl": "./category-youth-comedy.html"
  },
  {
    "id": "0383",
    "title": "水之乡",
    "year": "2025",
    "region": "荷兰",
    "type": "电影",
    "genre": "悬疑/剧情",
    "tags": [
      "环保",
      "家庭秘密",
      "沼泽"
    ],
    "oneLine": "为了继承祖母的沼泽地,五名表兄妹必须在三天内解开祖父失踪之谜,却发现沼泽在吞噬他们的记忆。",
    "url": "./movies/movie-0383.html",
    "cover": "./83.jpg",
    "category": "热映精选",
    "categoryUrl": "./category-hot-picks.html"
  },
  {
    "id": "0384",
    "title": "永久居留",
    "year": "2024",
    "region": "中国香港",
    "type": "电影",
    "genre": "爱情/科幻/伦理",
    "tags": [
      "移民",
      "长生不老",
      "病毒",
      "隔离"
    ],
    "oneLine": "一种病毒让感染者的生命永远停在感染那一天,而“永久居留”成了死刑判决。",
    "url": "./movies/movie-0384.html",
    "cover": "./84.jpg",
    "category": "全球佳作",
    "categoryUrl": "./category-global-stories.html"
  },
  {
    "id": "0385",
    "title": "乡村之恋",
    "year": "2014",
    "region": "中国大陆",
    "type": "电视剧",
    "genre": "剧情/家庭",
    "tags": [
      "扎根基层",
      "返乡青年",
      "田园治愈"
    ],
    "oneLine": "北大研究生陈默回乡创业搞有机农场,却成了全村人眼中的“不孝子”和乡亲们看笑话的对象。",
    "url": "./movies/movie-0385.html",
    "cover": "./85.jpg",
    "category": "奇幻科幻",
    "categoryUrl": "./category-fantasy-sci-fi.html"
  },
  {
    "id": "0386",
    "title": "小拳王",
    "year": "2025",
    "region": "日本",
    "type": "电影",
    "genre": "运动,剧情,家庭",
    "tags": [
      "拳击",
      "父子",
      "成长",
      "催泪"
    ],
    "oneLine": "一个体弱多病的小学生为了不让拳击手爸爸失望,偷偷报名了儿童拳击赛,对手却是全校最强壮的孩子。",
    "url": "./movies/movie-0386.html",
    "cover": "./86.jpg",
    "category": "青春喜剧",
    "categoryUrl": "./category-youth-comedy.html"
  },
  {
    "id": "0387",
    "title": "早熟年华",
    "year": "2007",
    "region": "英国",
    "type": "电影",
    "genre": "剧情/成长",
    "tags": [
      "青春期",
      "早恋",
      "工人阶级",
      "英国电影"
    ],
    "oneLine": "1984年英国矿工大罢工背景下,两个13岁的少年偷偷谈起了恋爱。",
    "url": "./movies/movie-0387.html",
    "cover": "./87.jpg",
    "category": "剧集连看",
    "categoryUrl": "./category-drama-series.html"
  },
  {
    "id": "0388",
    "title": "蔷薇少女第二季 梦之终结",
    "year": "2024",
    "region": "日本",
    "type": "动画剧集",
    "genre": "奇幻,战斗,剧情",
    "tags": [
      "人偶",
      "异世界",
      "致郁",
      "续作",
      "意识流"
    ],
    "oneLine": "爱丽丝游戏再度开启,这一次,败者将不是沉睡,而是彻底从这个世界上被遗忘。",
    "url": "./movies/movie-0388.html",
    "cover": "./88.jpg",
    "category": "经典片库",
    "categoryUrl": "./category-classic-library.html"
  },
  {
    "id": "0389",
    "title": "摇滚巨星",
    "year": "2027",
    "region": "中国大陆",
    "type": "电影",
    "genre": "剧情/音乐",
    "tags": [
      "梦想",
      "摇滚",
      "逆袭",
      "代际冲突"
    ],
    "oneLine": "五十岁的下岗工人老赵穿上皮衣站上乐队选秀舞台,用重金属咆哮震撼全场,却没人认出他是三十年前的传奇主唱。",
    "url": "./movies/movie-0389.html",
    "cover": "./89.jpg",
    "category": "动作专区",
    "categoryUrl": "./category-action-zone.html"
  },
  {
    "id": "0390",
    "title": "雪之下",
    "year": "2025",
    "region": "日本",
    "type": "电影",
    "genre": "剧情,悬疑",
    "tags": [
      "雪山",
      "密室",
      "背叛",
      "极限生存"
    ],
    "oneLine": "七名登山爱好者被困暴风雪中的木屋,第二天队长死了,而每个人都在雪地里看到了本该已死的自己。",
    "url": "./movies/movie-0390.html",
    "cover": "./90.jpg",
    "category": "动作专区",
    "categoryUrl": "./category-action-zone.html"
  },
  {
    "id": "0391",
    "title": "魔窟营救",
    "year": "2022",
    "region": "美国",
    "type": "电影",
    "genre": "动作,惊悚,冒险",
    "tags": [
      "洞穴",
      "特种兵",
      "人质",
      "变异生物",
      "密闭空间"
    ],
    "oneLine": "退役特种兵的女儿在探险时失踪于无名溶洞,他潜入深渊发现洞内住着盲眼食人怪。",
    "url": "./movies/movie-0391.html",
    "cover": "./91.jpg",
    "category": "都市爱情",
    "categoryUrl": "./category-romance-city.html"
  },
  {
    "id": "0392",
    "title": "我是路人甲",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "genre": "剧情,现实",
    "tags": [
      "横店",
      "群演",
      "梦想",
      "纪录片风格"
    ],
    "oneLine": "一个横店群演为了三百块钱替主角挨打,没想到那场戏被剪成了预告片。",
    "url": "./movies/movie-0392.html",
    "cover": "./92.jpg",
    "category": "经典片库",
    "categoryUrl": "./category-classic-library.html"
  },
  {
    "id": "0393",
    "title": "老子是魔法少女",
    "year": "2018",
    "region": "日本",
    "type": "TV剧集",
    "genre": "喜剧,奇幻",
    "tags": [
      "魔法少女",
      "反差萌",
      "性转",
      "搞笑"
    ],
    "oneLine": "为了守护城市和平,两个肌肉猛男被迫穿上了魔法少女的粉色蓬蓬裙。",
    "url": "./movies/movie-0393.html",
    "cover": "./93.jpg",
    "category": "经典片库",
    "categoryUrl": "./category-classic-library.html"
  },
  {
    "id": "0394",
    "title": "恐怖的报酬",
    "year": "2023",
    "region": "美国",
    "type": "电影",
    "genre": "动作/惊悚/冒险",
    "tags": [
      "雇佣兵",
      "求生",
      "极限",
      "悬赏",
      "暴力"
    ],
    "oneLine": "五名失业的前特种兵接受了一份护送神秘货物的任务,报酬高得离谱,但路线直通地狱。",
    "url": "./movies/movie-0394.html",
    "cover": "./94.jpg",
    "category": "全球佳作",
    "categoryUrl": "./category-global-stories.html"
  },
  {
    "id": "0395",
    "title": "考试家族",
    "year": "2021",
    "region": "中国大陆",
    "type": "电影",
    "genre": "喜剧,家庭,教育",
    "tags": [
      "高考",
      "鸡娃",
      "反内卷",
      "搞笑",
      "温情"
    ],
    "oneLine": "一个“考神”世家,祖孙三代全是状元,却偏偏养出一个只想当厨师的“学渣”儿子。",
    "url": "./movies/movie-0395.html",
    "cover": "./95.jpg",
    "category": "悬疑夜场",
    "categoryUrl": "./category-suspense-night.html"
  },
  {
    "id": "0396",
    "title": "校园大斗发",
    "year": "1999",
    "region": "中国香港",
    "type": "电影",
    "genre": "喜剧,校园",
    "tags": [
      "无厘头",
      "脱发",
      "黑帮",
      "发胶"
    ],
    "oneLine": "为了保住头顶的毛发,四个秃头中学生组成帮派,与隔壁的“发胶联盟”决一死战。",
    "url": "./movies/movie-0396.html",
    "cover": "./96.jpg",
    "category": "院线热片",
    "categoryUrl": "./category-cinema-hits.html"
  },
  {
    "id": "0397",
    "title": "海虎奇缘",
    "year": "2021",
    "region": "中国香港",
    "type": "电影",
    "genre": "动作/奇幻/冒险",
    "tags": [
      "海虎",
      "港漫风格",
      "打斗",
      "宿敌"
    ],
    "oneLine": "海边渔村的少年意外放出被封印千年的海虎魂魄,为了收服神兽,他必须学会祖传的刚猛拳法。",
    "url": "./movies/movie-0397.html",
    "cover": "./97.jpg",
    "category": "悬疑夜场",
    "categoryUrl": "./category-suspense-night.html"
  },
  {
    "id": "0398",
    "title": "最终时刻:耶路撒冷",
    "year": "2024",
    "region": "以色列/美国",
    "type": "剧集",
    "genre": "动作,惊悚,悬疑",
    "tags": [
      "中东",
      "倒计时",
      "核危机",
      "多线叙事",
      "国际"
    ],
    "oneLine": "未来72小时内,三枚脏弹将在耶路撒冷引爆,而摩萨德、CIA和哈马斯都收到了不同版本的预警。",
    "url": "./movies/movie-0398.html",
    "cover": "./98.jpg",
    "category": "剧集连看",
    "categoryUrl": "./category-drama-series.html"
  },
  {
    "id": "0399",
    "title": "獠牙拉惹",
    "year": "2025",
    "region": "马来西亚",
    "type": "电影",
    "genre": "恐怖,历史,冒险",
    "tags": [
      "南洋传说",
      "降头",
      "英国殖民",
      "丛林探险"
    ],
    "oneLine": "19世纪末,一支英国探险队在婆罗洲雨林触怒了传说中的“獠牙拉惹”,降头诅咒让他们自相残杀。",
    "url": "./movies/movie-0399.html",
    "cover": "./99.jpg",
    "category": "热映精选",
    "categoryUrl": "./category-hot-picks.html"
  },
  {
    "id": "0400",
    "title": "变调假期",
    "year": "2022",
    "region": "泰国",
    "type": "电影",
    "genre": "悬疑,惊悚",
    "tags": [
      "孤岛",
      "闺蜜",
      "谋杀",
      "反转",
      "海滩"
    ],
    "oneLine": "闺蜜在度假小岛离奇失踪,女主调查后发现,岛上所有人似乎都在一夜之间“调换了身份”。",
    "url": "./movies/movie-0400.html",
    "cover": "./100.jpg",
    "category": "经典片库",
    "categoryUrl": "./category-classic-library.html"
  },
  {
    "id": "0401",
    "title": "戆徒",
    "year": "2023",
    "region": "中国大陆",
    "type": "电影",
    "genre": "剧情/犯罪",
    "tags": [
      "黑色幽默",
      "底层生存",
      "荒诞",
      "小人物"
    ],
    "oneLine": "一个智商偏低的农村青年被卷入城市假钞案,却用最笨的办法搅动了整个地下钱庄。",
    "url": "./movies/movie-0401.html",
    "cover": "./101.jpg",
    "category": "经典片库",
    "categoryUrl": "./category-classic-library.html"
  },
  {
    "id": "0402",
    "title": "九霄龙吟传",
    "year": "2024",
    "region": "中国香港/中国大陆",
    "type": "电影",
    "genre": "动作/古装/武侠",
    "tags": [
      "剑侠江湖",
      "朝堂之争",
      "特效武侠",
      "男频爽文"
    ],
    "oneLine": "锦衣卫指挥使李九霄被挚友陷害,坠崖后习得九霄龙吟剑法,三年后他带着面具归来,搅动京师风云。",
    "url": "./movies/movie-0402.html",
    "cover": "./102.jpg",
    "category": "青春喜剧",
    "categoryUrl": "./category-youth-comedy.html"
  },
  {
    "id": "0403",
    "title": "我的战舰能升级 动态漫画",
    "year": "2024",
    "region": "中国大陆",
    "type": "动态漫画",
    "genre": "科幻",
    "tags": [
      "星际战争",
      "热血",
      "系统流"
    ],
    "oneLine": "废柴少年意外继承一艘最低级侦察舰,却发现这艘破烂战舰拥有无限吞噬进化的能力。",
    "url": "./movies/movie-0403.html",
    "cover": "./103.jpg",
    "category": "都市爱情",
    "categoryUrl": "./category-romance-city.html"
  },
  {
    "id": "0404",
    "title": "洛城大暴动",
    "year": "2026",
    "region": "美国",
    "type": "电影",
    "genre": "动作,犯罪,灾难",
    "tags": [
      "洛杉矶",
      "暴动",
      "母女",
      "地铁"
    ],
    "oneLine": "洛杉矶全城暴动,一位母亲必须穿越十条街区的火海,救出困在地铁里的女儿。",
    "url": "./movies/movie-0404.html",
    "cover": "./104.jpg",
    "category": "剧集连看",
    "categoryUrl": "./category-drama-series.html"
  },
  {
    "id": "0405",
    "title": "女人莲心",
    "year": "2024",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "年代/女性/家族",
    "tags": [
      "民国",
      "药铺",
      "女性互助",
      "苦情但不憋屈"
    ],
    "oneLine": "药铺大小姐被继母夺走家产后,她靠一本手抄《女医方》从街头坐堂郎中考回城中最高的药堂。",
    "url": "./movies/movie-0405.html",
    "cover": "./105.jpg",
    "category": "院线热片",
    "categoryUrl": "./category-cinema-hits.html"
  },
  {
    "id": "0406",
    "title": "不孝子",
    "year": "2017",
    "region": "印度",
    "type": "电影",
    "genre": "家庭",
    "tags": [
      "亲情",
      "反转",
      "伦理"
    ],
    "oneLine": "儿子把瘫痪父亲扔在医院三年不闻不问,医生报警后才发现,这个“不孝子”竟是父亲雇来扮演的。",
    "url": "./movies/movie-0406.html",
    "cover": "./106.jpg",
    "category": "动作专区",
    "categoryUrl": "./category-action-zone.html"
  },
  {
    "id": "0407",
    "title": "玫瑰匠人",
    "year": "2024",
    "region": "法国",
    "type": "电影",
    "genre": "剧情/爱情/喜剧",
    "tags": [
      "花艺",
      "中年浪漫",
      "女性成长",
      "法国风情",
      "治愈"
    ],
    "oneLine": "顶级花艺师惨遭背叛后躲到乡下,为了筹钱打官司,被迫给一群毫无审美的老农上课。",
    "url": "./movies/movie-0407.html",
    "cover": "./107.jpg",
    "category": "都市爱情",
    "categoryUrl": "./category-romance-city.html"
  },
  {
    "id": "0408",
    "title": "宪兵与幽灵",
    "year": "2023",
    "region": "意大利",
    "type": "剧集",
    "genre": "喜剧,奇幻,犯罪",
    "tags": [
      "宪兵",
      "幽灵",
      "探案",
      "意式幽默",
      "单元剧"
    ],
    "oneLine": "一个迷信科学的宪兵队长,被调任到意大利最古老的小镇,被迫与一个三百年前的幽灵警探搭档破获现代奇案。",
    "url": "./movies/movie-0408.html",
    "cover": "./108.jpg",
    "category": "家庭生活",
    "categoryUrl": "./category-family-life.html"
  },
  {
    "id": "0409",
    "title": "美丽小魔头",
    "year": "2024",
    "region": "韩国",
    "type": "电影",
    "genre": "悬疑/惊悚",
    "tags": [
      "童星",
      "心理操控",
      "恶女养成",
      "反雌竞"
    ],
    "oneLine": "全韩国最红的8岁童星,私底下是个小恶魔。她的经纪人为了控制她,把自己女儿送进了同一场噩梦。",
    "url": "./movies/movie-0409.html",
    "cover": "./109.jpg",
    "category": "都市爱情",
    "categoryUrl": "./category-romance-city.html"
  },
  {
    "id": "0410",
    "title": "皇天后土",
    "year": "2026",
    "region": "中国台湾",
    "type": "电影",
    "genre": "历史,家庭,剧情",
    "tags": [
      "眷村",
      "老兵",
      "寻根",
      "土地改革"
    ],
    "oneLine": "一块祖传的地契,串联起台湾四代人的土地记忆与身份困惑。",
    "url": "./movies/movie-0410.html",
    "cover": "./110.jpg",
    "category": "剧集连看",
    "categoryUrl": "./category-drama-series.html"
  },
  {
    "id": "0411",
    "title": "雪野金花",
    "year": "1964",
    "region": "中国大陆",
    "type": "电影",
    "genre": "剧情/战争",
    "tags": [
      "抗战",
      "女性英雄",
      "东北剿匪",
      "红色经典"
    ],
    "oneLine": "白雪皑皑的林海雪原上,一支女子复仇队深入虎穴,只为拿回被土匪抢走的烈士遗体。",
    "url": "./movies/movie-0411.html",
    "cover": "./111.jpg",
    "category": "悬疑夜场",
    "categoryUrl": "./category-suspense-night.html"
  },
  {
    "id": "0412",
    "title": "房奴试爱",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "genre": "喜剧、爱情、社会",
    "tags": [
      "买房",
      "假结婚",
      "北漂",
      "拆二代"
    ],
    "oneLine": "为了省下第二套房的首付,一对夫妻决定“假离婚”,没想到丈夫转眼就被拆二代女富婆疯狂倒追。",
    "url": "./movies/movie-0412.html",
    "cover": "./112.jpg",
    "category": "青春喜剧",
    "categoryUrl": "./category-youth-comedy.html"
  },
  {
    "id": "0413",
    "title": "龙王子第六季",
    "year": "2025",
    "region": "美国",
    "type": "剧集",
    "genre": "动画/奇幻/冒险",
    "tags": [
      "魔法",
      "龙",
      "史诗"
    ],
    "oneLine": "昔日队友反目成仇,亚拉为了复活死去的父亲,主动投靠了觉醒远古魔龙的薇伦。",
    "url": "./movies/movie-0413.html",
    "cover": "./113.jpg",
    "category": "热映精选",
    "categoryUrl": "./category-hot-picks.html"
  },
  {
    "id": "0414",
    "title": "不接吻名单",
    "year": "2024",
    "region": "英国",
    "type": "电影",
    "genre": "爱情/喜剧",
    "tags": [
      "契约恋爱",
      "假戏真做",
      "英式幽默"
    ],
    "oneLine": "一名社恐植物学家为了应付家人婚礼,拉黑名单里最讨厌的发小假扮男友,却发现自己从来没讨厌过他。",
    "url": "./movies/movie-0414.html",
    "cover": "./114.jpg",
    "category": "悬疑夜场",
    "categoryUrl": "./category-suspense-night.html"
  },
  {
    "id": "0415",
    "title": "飞狼第一季",
    "year": "2024",
    "region": "美国",
    "type": "电视剧",
    "genre": "动作,冒险",
    "tags": [
      "高科技",
      "直升机",
      "经典翻拍",
      "特工"
    ],
    "oneLine": "经典剧集重启,一架拥有超级AI的武装直升机,搭档一名叛逆飞行员。",
    "url": "./movies/movie-0415.html",
    "cover": "./115.jpg",
    "category": "悬疑夜场",
    "categoryUrl": "./category-suspense-night.html"
  },
  {
    "id": "0416",
    "title": "银行",
    "year": "2023",
    "region": "法国",
    "type": "剧集",
    "genre": "剧情,犯罪,金融",
    "tags": [
      "金融",
      "阴谋",
      "底层逆袭",
      "高智商"
    ],
    "oneLine": "一群被金融体系压垮的底层年轻人,计划抢劫一家银行,但他们的目标不是钱,而是藏在银行地下金库里的“全球债务黑匣子”。",
    "url": "./movies/movie-0416.html",
    "cover": "./116.jpg",
    "category": "全球佳作",
    "categoryUrl": "./category-global-stories.html"
  },
  {
    "id": "0417",
    "title": "青蛙军曹",
    "year": "2004",
    "region": "日本",
    "type": "剧集",
    "genre": "喜剧,动画,科幻",
    "tags": [
      "外星人",
      "恶搞",
      "军事",
      "日常",
      "搞笑"
    ],
    "oneLine": "五只外星青蛙侵略地球失败,竟被迫在人类家庭里打零工赚取入侵经费,还迷上了模型玩具。",
    "url": "./movies/movie-0417.html",
    "cover": "./117.jpg",
    "category": "奇幻科幻",
    "categoryUrl": "./category-fantasy-sci-fi.html"
  },
  {
    "id": "0418",
    "title": "我们召唤黑暗",
    "year": "2024",
    "region": "美国",
    "type": "电影",
    "genre": "恐怖/悬疑/邪典",
    "tags": [
      "邪教",
      "金属乐",
      "公路片",
      "反转",
      "血腥美学"
    ],
    "oneLine": "三对热爱重金属的年轻情侣,在公路旅行中为了找刺激,玩了一次真正的召唤黑暗仪式。",
    "url": "./movies/movie-0418.html",
    "cover": "./118.jpg",
    "category": "青春喜剧",
    "categoryUrl": "./category-youth-comedy.html"
  },
  {
    "id": "0419",
    "title": "舞向死亡的少女",
    "year": "2021",
    "region": "韩国",
    "type": "电影",
    "genre": "悬疑,惊悚,剧情",
    "tags": [
      "芭蕾",
      "复仇",
      "病态美学",
      "反转",
      "女性"
    ],
    "oneLine": "顶级芭蕾舞校发生连环命案,每次死者的姿态都是一支完美芭蕾的定格。",
    "url": "./movies/movie-0419.html",
    "cover": "./119.jpg",
    "category": "青春喜剧",
    "categoryUrl": "./category-youth-comedy.html"
  },
  {
    "id": "0420",
    "title": "可怜天下男人心",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "genre": "剧情,家庭",
    "tags": [
      "男性困境",
      "代际冲突",
      "中年危机",
      "现实主义"
    ],
    "oneLine": "一个家庭里,爷爷、爸爸和孙子三代男人在同一天经历失业、离婚和失恋。",
    "url": "./movies/movie-0420.html",
    "cover": "./120.jpg",
    "category": "全球佳作",
    "categoryUrl": "./category-global-stories.html"
  },
  {
    "id": "0421",
    "title": "飞龙引凤",
    "year": "2024",
    "region": "中国",
    "type": "剧集",
    "genre": "古装,武侠,爱情,喜剧",
    "tags": [
      "女扮男装",
      "江湖恩怨",
      "欢喜冤家",
      "轻喜"
    ],
    "oneLine": "江湖第一女飞贼为偷宝物潜入王府,却被迫女扮男装,嫁给前来寻仇的世子“冲喜”。",
    "url": "./movies/movie-0421.html",
    "cover": "./121.jpg",
    "category": "院线热片",
    "categoryUrl": "./category-cinema-hits.html"
  },
  {
    "id": "0422",
    "title": "军火女王 第二季",
    "year": "2024",
    "region": "日本",
    "type": "动画剧集",
    "genre": "动作/犯罪",
    "tags": [
      "军火",
      "战斗",
      "佣兵",
      "全球化"
    ],
    "oneLine": "为了阻止世界性的阴谋,军火女王蔻蔻带领她的团队潜入太空,试图引爆失控的电磁轨道炮卫星。",
    "url": "./movies/movie-0422.html",
    "cover": "./122.jpg",
    "category": "历史古装",
    "categoryUrl": "./category-history-costume.html"
  },
  {
    "id": "0423",
    "title": "仙球大战",
    "year": "2017",
    "region": "中国香港/中国大陆",
    "type": "电影",
    "genre": "喜剧/古装/运动",
    "tags": [
      "无厘头",
      "神仙运动会",
      "恶搞竞技",
      "群星贺岁",
      "特摄风"
    ],
    "oneLine": "天界举办首届“仙球大赛”,孙悟空、二郎神和哪吒组队,却发现对手是现代足球明星穿越来的。",
    "url": "./movies/movie-0423.html",
    "cover": "./123.jpg",
    "category": "热映精选",
    "categoryUrl": "./category-hot-picks.html"
  },
  {
    "id": "0424",
    "title": "动物宝宝",
    "year": "2026",
    "region": "英国",
    "type": "剧集",
    "genre": "喜剧/动画/家庭",
    "tags": [
      "萌系",
      "幼儿园",
      "动物拟人",
      "治愈",
      "冒险"
    ],
    "oneLine": "在一个由婴儿动物组成的幼儿园里,每天都是一场为了零食和午睡毯的战争。",
    "url": "./movies/movie-0424.html",
    "cover": "./124.jpg",
    "category": "剧集连看",
    "categoryUrl": "./category-drama-series.html"
  },
  {
    "id": "0425",
    "title": "我即闪电",
    "year": "2025",
    "region": "加拿大",
    "type": "电影",
    "genre": "传记、运动、剧情",
    "tags": [
      "残奥会",
      "真实改编",
      "励志突破",
      "体育精神"
    ],
    "oneLine": "失去双腿的少年梦想成为闪电侠,他用碳纤维义肢改写了人类短跑的历史。",
    "url": "./movies/movie-0425.html",
    "cover": "./125.jpg",
    "category": "青春喜剧",
    "categoryUrl": "./category-youth-comedy.html"
  },
  {
    "id": "0426",
    "title": "母性之光",
    "year": "2024",
    "region": "日本",
    "type": "电视剧",
    "genre": "剧情,家庭,伦理",
    "tags": [
      "代理孕母",
      "血缘争议",
      "法律博弈"
    ],
    "oneLine": "不孕女性求助闺蜜代孕,孩子出生后闺蜜反悔,三方争夺抚养权。",
    "url": "./movies/movie-0426.html",
    "cover": "./126.jpg",
    "category": "院线热片",
    "categoryUrl": "./category-cinema-hits.html"
  },
  {
    "id": "0427",
    "title": "风流访员",
    "year": "2023",
    "region": "美国",
    "type": "剧集",
    "genre": "喜剧",
    "tags": [
      "记者",
      "伪装",
      "调查",
      "身份错位",
      "笑料"
    ],
    "oneLine": "一名社恐记者被迫假扮花花公子深入名流圈,却在谎言越滚越大时意外发现真正的大新闻。",
    "url": "./movies/movie-0427.html",
    "cover": "./127.jpg",
    "category": "热映精选",
    "categoryUrl": "./category-hot-picks.html"
  },
  {
    "id": "0428",
    "title": "约翰之子",
    "year": "2024",
    "region": "法国/加拿大",
    "type": "电影",
    "genre": "剧情/家庭/悬疑",
    "tags": [
      "父子",
      "谎言",
      "身份",
      "湖"
    ],
    "oneLine": "一位老人临终前告诉儿子:“你不是我亲生的,你是我从湖里捡来的。",
    "url": "./movies/movie-0428.html",
    "cover": "./128.jpg",
    "category": "院线热片",
    "categoryUrl": "./category-cinema-hits.html"
  },
  {
    "id": "0429",
    "title": "小森林2018",
    "year": "2018",
    "region": "韩国",
    "type": "电影",
    "genre": "剧情,治愈",
    "tags": [
      "美食",
      "乡村",
      "四季",
      "文艺"
    ],
    "oneLine": "在都市考公失败的女孩回到乡下老家,用妈妈留下的食谱,在一日三餐中治愈了失败的自己。",
    "url": "./movies/movie-0429.html",
    "cover": "./129.jpg",
    "category": "奇幻科幻",
    "categoryUrl": "./category-fantasy-sci-fi.html"
  },
  {
    "id": "0430",
    "title": "木雕家斯泰纳的狂喜",
    "year": "2024",
    "region": "德国",
    "type": "电影",
    "genre": "传记,剧情,体育",
    "tags": [
      "滑雪",
      "匠人精神",
      "创伤",
      "极限运动",
      "黑白与彩色"
    ],
    "oneLine": "德国木雕家斯泰纳痴迷于制作木质滑雪板,当他带着作品挑战世上最危险的跳台时,意外发现了亡妻的遗言。",
    "url": "./movies/movie-0430.html",
    "cover": "./130.jpg",
    "category": "都市爱情",
    "categoryUrl": "./category-romance-city.html"
  },
  {
    "id": "0431",
    "title": "囧爸喜事",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "genre": "喜剧/家庭",
    "tags": [
      "囧途",
      "父女",
      "催婚",
      "春节"
    ],
    "oneLine": "为了让女儿过年带男友回家,单亲老爸把自己包装成“成功人士”,却引发了一连串爆笑谎言。",
    "url": "./movies/movie-0431.html",
    "cover": "./131.jpg",
    "category": "家庭生活",
    "categoryUrl": "./category-family-life.html"
  },
  {
    "id": "0432",
    "title": "真命天子",
    "year": "2025",
    "region": "泰国",
    "type": "电视剧",
    "genre": "爱情,奇幻,悬疑",
    "tags": [
      "前世今生",
      "古装",
      "算命"
    ],
    "oneLine": "一个现代网红脸女孩穿越到古代,发现所有男人都爱她,但只有一个人能看到她脸上的“科技与狠活”。",
    "url": "./movies/movie-0432.html",
    "cover": "./132.jpg",
    "category": "都市爱情",
    "categoryUrl": "./category-romance-city.html"
  },
  {
    "id": "0433",
    "title": "新凯撒大帝",
    "year": "2025",
    "region": "美国",
    "type": "电视剧",
    "genre": "历史/政治",
    "tags": [
      "古罗马",
      "权谋",
      "现代改编",
      "反英雄"
    ],
    "oneLine": "将凯撒的故事搬到现代华盛顿,他是一位魅力无穷的参议员,正用TikTok和暗杀手段走向独裁。",
    "url": "./movies/movie-0433.html",
    "cover": "./133.jpg",
    "category": "家庭生活",
    "categoryUrl": "./category-family-life.html"
  },
  {
    "id": "0434",
    "title": "上帝的小村庄",
    "year": "2023",
    "region": "意大利",
    "type": "电影",
    "genre": "喜剧/生活",
    "tags": [
      "宗教讽刺",
      "田园治愈",
      "黑色幽默"
    ],
    "oneLine": "梵蒂冈派了一位无神论者去阿尔卑斯山的小村庄当神父,村民们决定用“不信神”的方式拯救他的灵魂。",
    "url": "./movies/movie-0434.html",
    "cover": "./134.jpg",
    "category": "奇幻科幻",
    "categoryUrl": "./category-fantasy-sci-fi.html"
  },
  {
    "id": "0435",
    "title": "跳进地理书的旅行第三季",
    "year": "2026",
    "region": "中国",
    "type": "综艺",
    "genre": "真人秀,纪实",
    "tags": [
      "文旅",
      "探险",
      "学霸",
      "极地",
      "科考"
    ],
    "oneLine": "学霸旅行团这次跳进了北极圈,在极夜环境下挑战生存,顺便把地理考点变成了活生生的雪原。",
    "url": "./movies/movie-0435.html",
    "cover": "./135.jpg",
    "category": "都市爱情",
    "categoryUrl": "./category-romance-city.html"
  },
  {
    "id": "0436",
    "title": "公民良心",
    "year": "2003",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "剧情,犯罪,社会",
    "tags": [
      "反腐",
      "良心",
      "小人物",
      "写实",
      "震撼"
    ],
    "oneLine": "一张从天而降的巨款存折,打破了一对下岗夫妻的平静生活,当他们的沉默与贪念失控,却引发了一场山崩地裂的反腐风暴。",
    "url": "./movies/movie-0436.html",
    "cover": "./136.jpg",
    "category": "悬疑夜场",
    "categoryUrl": "./category-suspense-night.html"
  },
  {
    "id": "0437",
    "title": "赵尚志智取五常堡",
    "year": "1991",
    "region": "中国大陆",
    "type": "电影",
    "genre": "战争、历史、动作",
    "tags": [
      "抗日",
      "智斗",
      "东北抗联"
    ],
    "oneLine": "三十人打五百人,英雄不是靠人多,是靠脑子。",
    "url": "./movies/movie-0437.html",
    "cover": "./137.jpg",
    "category": "院线热片",
    "categoryUrl": "./category-cinema-hits.html"
  },
  {
    "id": "0438",
    "title": "黄铜茶壶",
    "year": "2012",
    "region": "美国",
    "type": "电影",
    "genre": "喜剧,奇幻,惊悚",
    "tags": [
      "寓言",
      "金钱",
      "诅咒",
      "黑色幽默"
    ],
    "oneLine": "一对穷困夫妻得到一个能生钱的魔壶,但它每吐一次钱,就必须有人在他们面前受伤或痛苦。",
    "url": "./movies/movie-0438.html",
    "cover": "./138.jpg",
    "category": "奇幻科幻",
    "categoryUrl": "./category-fantasy-sci-fi.html"
  },
  {
    "id": "0439",
    "title": "跳进地理书的旅行第四季",
    "year": "2026",
    "region": "中国大陆",
    "type": "综艺",
    "genre": "真人秀,教育,旅行",
    "tags": [
      "户外科普",
      "实景教学",
      "明星旅行",
      "地理知识"
    ],
    "oneLine": "本季嘉宾被丢进世界海拔最高的“死亡禁区”可可西里,每解一道地理题才能获得一瓶水。",
    "url": "./movies/movie-0439.html",
    "cover": "./139.jpg",
    "category": "院线热片",
    "categoryUrl": "./category-cinema-hits.html"
  },
  {
    "id": "0440",
    "title": "桃源春暖",
    "year": "2023",
    "region": "中国大陆",
    "type": "电视剧",
    "genre": "剧情/家庭/年代",
    "tags": [
      "东北县城",
      "下岗潮",
      "兄弟情",
      "时代变迁"
    ],
    "oneLine": "90年代东北小城,一家名为“桃源”的浴池见证了陈家三兄弟在时代洪流中的聚散离合。",
    "url": "./movies/movie-0440.html",
    "cover": "./140.jpg",
    "category": "青春喜剧",
    "categoryUrl": "./category-youth-comedy.html"
  },
  {
    "id": "0441",
    "title": "老大慢半拍",
    "year": "2024",
    "region": "韩国",
    "type": "电影",
    "genre": "喜剧/犯罪/动作",
    "tags": [
      "黑帮",
      "反应迟钝",
      "反差萌",
      "兄弟情",
      "搞笑打架"
    ],
    "oneLine": "黑帮老大意外脑部受伤,从此反应速度比正常人慢三秒,却因为“预测”能力反而成了地下之王。",
    "url": "./movies/movie-0441.html",
    "cover": "./141.jpg",
    "category": "动作专区",
    "categoryUrl": "./category-action-zone.html"
  },
  {
    "id": "0442",
    "title": "选个家来爱",
    "year": "2023",
    "region": "中国台湾",
    "type": "剧集",
    "genre": "剧情/家庭/喜剧",
    "tags": [
      "房产中介",
      "轻喜剧",
      "买房",
      "群像"
    ],
    "oneLine": "四个性格迥异的房产中介,帮客户找到理想的家,自己也找到了人生的“家”。",
    "url": "./movies/movie-0442.html",
    "cover": "./142.jpg",
    "category": "悬疑夜场",
    "categoryUrl": "./category-suspense-night.html"
  },
  {
    "id": "0443",
    "title": "辣妹神探",
    "year": "2024",
    "region": "中国台湾",
    "type": "剧集",
    "genre": "喜剧/悬疑/犯罪",
    "tags": [
      "女力",
      "扮猪吃老虎",
      "时尚破案",
      "闺蜜搭档",
      "台味幽默"
    ],
    "oneLine": "一名美妆博主为了追查闺蜜离奇失踪案,假扮成菜鸟警探潜入警局,结果破案率意外第一。",
    "url": "./movies/movie-0443.html",
    "cover": "./143.jpg",
    "category": "热映精选",
    "categoryUrl": "./category-hot-picks.html"
  },
  {
    "id": "0444",
    "title": "潘多拉之盒",
    "year": "1929",
    "region": "德国",
    "type": "电影",
    "genre": "黑白默片",
    "tags": [
      "默片",
      "悲剧",
      "女性",
      "堕落",
      "表现主义"
    ],
    "oneLine": "一个天真又放荡的女孩露露,她的美像潘多拉的盒子,每一个爱上她的男人都会被打开灾祸。",
    "url": "./movies/movie-0444.html",
    "cover": "./144.jpg",
    "category": "家庭生活",
    "categoryUrl": "./category-family-life.html"
  },
  {
    "id": "0445",
    "title": "我的傻瓜老婆",
    "year": "2024",
    "region": "中国内地",
    "type": "剧集",
    "genre": "爱情,喜剧",
    "tags": [
      "契约婚姻",
      "先婚后爱",
      "甜宠",
      "反差萌"
    ],
    "oneLine": "精明毒舌的投行VP因车祸失忆,醒来后坚信自己是公司小职员的“傻瓜老婆”,一场啼笑皆非的同居开始。",
    "url": "./movies/movie-0445.html",
    "cover": "./145.jpg",
    "category": "院线热片",
    "categoryUrl": "./category-cinema-hits.html"
  },
  {
    "id": "0446",
    "title": "蓝甲虫",
    "year": "2023",
    "region": "美国",
    "type": "电影",
    "genre": "动作/科幻/超级英雄",
    "tags": [
      "拉丁裔",
      "圣甲虫",
      "外星科技",
      "家庭"
    ],
    "oneLine": "刚毕业的大学生海梅在捡到一只蓝色圣甲虫后,被迫成为拥有无限武器的超级英雄,却也成为了星际赏金猎人的头号目标。",
    "url": "./movies/movie-0446.html",
    "cover": "./146.jpg",
    "category": "青春喜剧",
    "categoryUrl": "./category-youth-comedy.html"
  },
  {
    "id": "0447",
    "title": "年年有余",
    "year": "2021",
    "region": "中国大陆",
    "type": "电影",
    "genre": "剧情/家庭",
    "tags": [
      "客家文化",
      "留守儿童",
      "年夜饭"
    ],
    "oneLine": "广东梅州客家山村,90岁的阿婆每年除夕都做一大桌子菜,等那些永远不会回来吃年夜饭的孩子们。",
    "url": "./movies/movie-0447.html",
    "cover": "./147.jpg",
    "category": "历史古装",
    "categoryUrl": "./category-history-costume.html"
  },
  {
    "id": "0448",
    "title": "弊家伙...玩大咗",
    "year": "2024",
    "region": "中国香港",
    "type": "电影",
    "genre": "黑色幽默/犯罪/喜剧",
    "tags": [
      "港产片回归",
      "小人物闯祸",
      "荒诞绑架",
      "乌龙犯罪",
      "地道粤语"
    ],
    "oneLine": "三个废青本想拍假绑架视频骗流量,结果错绑了真正的黑帮二世祖,全港黑白两道都在找他们。",
    "url": "./movies/movie-0448.html",
    "cover": "./148.jpg",
    "category": "全球佳作",
    "categoryUrl": "./category-global-stories.html"
  },
  {
    "id": "0449",
    "title": "雷云",
    "year": "2026",
    "region": "俄罗斯",
    "type": "电影",
    "genre": "科幻,悬疑,剧情",
    "tags": [
      "人工闪电",
      "记忆篡改",
      "政府阴谋"
    ],
    "oneLine": "气象学家发明了控制雷云的技术,却发现自己和所有参与者的记忆每天都被雷暴“格式化”一次。",
    "url": "./movies/movie-0449.html",
    "cover": "./149.jpg",
    "category": "悬疑夜场",
    "categoryUrl": "./category-suspense-night.html"
  },
  {
    "id": "0450",
    "title": "烈火情燄",
    "year": "2024",
    "region": "中国香港",
    "type": "电影",
    "genre": "动作,爱情,犯罪",
    "tags": [
      "消防员",
      "黑帮",
      "卧底",
      "港风",
      "虐恋"
    ],
    "oneLine": "女消防队长在一次火灾中救下了宿敌——黑帮大佬,却在朝夕相处中与他产生了禁忌之恋。",
    "url": "./movies/movie-0450.html",
    "cover": "./150.jpg",
    "category": "历史古装",
    "categoryUrl": "./category-history-costume.html"
  },
  {
    "id": "0451",
    "title": "暴劫现场",
    "year": "1998",
    "region": "中国香港",
    "type": "电影",
    "genre": "动作犯罪",
    "tags": [
      "悍匪",
      "飞车特技",
      "古惑仔变奏"
    ],
    "oneLine": "末路狂徒抢劫金行后挟持小巴,愤怒的乘客们决定联合起来在隧道里反杀悍匪。",
    "url": "./movies/movie-0451.html",
    "cover": "./1.jpg",
    "category": "动作专区",
    "categoryUrl": "./category-action-zone.html"
  },
  {
    "id": "0452",
    "title": "人生恰恰恰",
    "year": "2024",
    "region": "阿根廷",
    "type": "电影",
    "genre": "剧情/喜剧/舞蹈",
    "tags": [
      "探戈",
      "老年人",
      "梦想",
      "治愈"
    ],
    "oneLine": "敬老院里的一群老人决定组队参加探戈大赛,却发现最大的对手不是年轻人而是自己的身体。",
    "url": "./movies/movie-0452.html",
    "cover": "./2.jpg",
    "category": "热映精选",
    "categoryUrl": "./category-hot-picks.html"
  },
  {
    "id": "0453",
    "title": "高文爵士与绿衣骑士",
    "year": "2024",
    "region": "英国",
    "type": "电影",
    "genre": "奇幻/剧情/冒险",
    "tags": [
      "亚瑟王",
      "圆桌骑士",
      "斩首契约",
      "中世纪",
      "寓言"
    ],
    "oneLine": "绿衣骑士闯入卡美洛,高文砍下他的头颅,对方却捡起脑袋约定一年后让他还这一刀。",
    "url": "./movies/movie-0453.html",
    "cover": "./3.jpg",
    "category": "青春喜剧",
    "categoryUrl": "./category-youth-comedy.html"
  },
  {
    "id": "0454",
    "title": "哑子吃黄莲",
    "year": "2025",
    "region": "中国大陆",
    "type": "电影",
    "genre": "剧情/犯罪",
    "tags": [
      "悬疑",
      "底层",
      "霸凌",
      "反转"
    ],
    "oneLine": "一个被诬陷入狱的哑巴出狱后,发现全村人都知道真凶是谁,却无一人敢开口。",
    "url": "./movies/movie-0454.html",
    "cover": "./4.jpg",
    "category": "热映精选",
    "categoryUrl": "./category-hot-picks.html"
  },
  {
    "id": "0455",
    "title": "神田川淫乱战争",
    "year": "1983",
    "region": "日本",
    "type": "电影",
    "genre": "情色/剧情/战争隐喻",
    "tags": [
      "粉红电影",
      "泡沫经济",
      "两性博弈",
      "黑色幽默"
    ],
    "oneLine": "神田川沿岸两户邻居,用身体和金钱展开了一场荒诞而惨烈的战争。",
    "url": "./movies/movie-0455.html",
    "cover": "./5.jpg",
    "category": "奇幻科幻",
    "categoryUrl": "./category-fantasy-sci-fi.html"
  },
  {
    "id": "0456",
    "title": "陌路徒者",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "genre": "动作/犯罪/警匪",
    "tags": [
      "卧底",
      "边境风云",
      "硬汉",
      "以暴制暴"
    ],
    "oneLine": "为了给死去的搭档报仇,前特警混入边境贩毒集团,却发现仇人已是集团二把手。",
    "url": "./movies/movie-0456.html",
    "cover": "./6.jpg",
    "category": "都市爱情",
    "categoryUrl": "./category-romance-city.html"
  },
  {
    "id": "0457",
    "title": "冲出月亮岛",
    "year": "2015",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "战争/动作",
    "tags": [
      "越狱题材",
      "抗日传奇",
      "兄弟情深"
    ],
    "oneLine": "一座海上孤岛监狱,一群中国战俘,一场不可能成功的集体越狱。",
    "url": "./movies/movie-0457.html",
    "cover": "./7.jpg",
    "category": "经典片库",
    "categoryUrl": "./category-classic-library.html"
  },
  {
    "id": "0458",
    "title": "圣天门口",
    "year": "2028",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "历史/战争/剧情",
    "tags": [
      "革命",
      "家族史诗",
      "信仰",
      "大别山"
    ],
    "oneLine": "大别山脚下的天门口镇,雪、杭两大家族在二十世纪动荡中,从血斗到携手,演绎了一部激荡的民间革命史。",
    "url": "./movies/movie-0458.html",
    "cover": "./8.jpg",
    "category": "奇幻科幻",
    "categoryUrl": "./category-fantasy-sci-fi.html"
  },
  {
    "id": "0459",
    "title": "鳄鱼群",
    "year": "2024",
    "region": "澳大利亚",
    "type": "电影",
    "genre": "恐怖,冒险",
    "tags": [
      "自然灾难",
      "鳄鱼",
      "湿地",
      "求生",
      "动物袭击"
    ],
    "oneLine": "一群生态游客在澳洲北领地湿地遭遇百年一遇的鳄鱼迁徙潮,水中每寸都有血盆大口。",
    "url": "./movies/movie-0459.html",
    "cover": "./9.jpg",
    "category": "院线热片",
    "categoryUrl": "./category-cinema-hits.html"
  },
  {
    "id": "0460",
    "title": "催眠大师",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "genre": "悬疑,惊悚",
    "tags": [
      "催眠",
      "心理博弈",
      "反转",
      "密室"
    ],
    "oneLine": "著名的心理医生在治疗一名奇怪的失眠症患者时,发现自己反而被对方一步步拉入了记忆的陷阱。",
    "url": "./movies/movie-0460.html",
    "cover": "./10.jpg",
    "category": "家庭生活",
    "categoryUrl": "./category-family-life.html"
  },
  {
    "id": "0461",
    "title": "混沌之子",
    "year": "2017",
    "region": "日本",
    "type": "剧集",
    "genre": "科幻",
    "tags": [
      "妄想",
      "超能力",
      "悬疑",
      "心理学",
      "致郁"
    ],
    "oneLine": "2015年地震后,东京出现“妄想症候群”,高中生们发现自己的妄想能实体化。",
    "url": "./movies/movie-0461.html",
    "cover": "./11.jpg",
    "category": "悬疑夜场",
    "categoryUrl": "./category-suspense-night.html"
  },
  {
    "id": "0462",
    "title": "狼袭草原",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "genre": "动作/冒险/西部",
    "tags": [
      "草原",
      "狼群",
      "复仇",
      "生存",
      "民族"
    ],
    "oneLine": "一场沙暴后,狼群血洗了游牧部落,唯一的幸存少年必须带着狼王的幼崽穿越百里荒漠求生。",
    "url": "./movies/movie-0462.html",
    "cover": "./12.jpg",
    "category": "剧集连看",
    "categoryUrl": "./category-drama-series.html"
  },
  {
    "id": "0463",
    "title": "蟑螂杀手",
    "year": "2025",
    "region": "美国",
    "type": "电影",
    "genre": "动作、科幻、黑色幽默",
    "tags": [
      "害虫控制",
      "基因突变",
      "反英雄",
      "廉价血浆",
      "B级片"
    ],
    "oneLine": "一个被除虫公司开除的瘾君子,意外发现一种能让蟑螂听懂人话的化学药剂,然后他决定竞选市长。",
    "url": "./movies/movie-0463.html",
    "cover": "./13.jpg",
    "category": "家庭生活",
    "categoryUrl": "./category-family-life.html"
  },
  {
    "id": "0464",
    "title": "尖叫旅社3:怪兽假期",
    "year": "2018",
    "region": "美国",
    "type": "动画电影",
    "genre": "喜剧/奇幻",
    "tags": [
      "怪兽邮轮",
      "德古拉恋爱",
      "假期灾难",
      "全家欢"
    ],
    "oneLine": "德古拉带全家登上豪华怪兽邮轮,却意外爱上船长,而船长正是范海辛的后代。",
    "url": "./movies/movie-0464.html",
    "cover": "./14.jpg",
    "category": "历史古装",
    "categoryUrl": "./category-history-costume.html"
  },
  {
    "id": "0465",
    "title": "波丽娜:舞蹈人生",
    "year": "2016",
    "region": "法国",
    "type": "电影",
    "genre": "剧情,音乐",
    "tags": [
      "芭蕾",
      "现代舞",
      "成长",
      "艺术",
      "师生"
    ],
    "oneLine": "俄罗斯芭蕾天才少女被法国编舞大师一眼相中,却在现代舞的世界里迷失了自己最古典的身体。",
    "url": "./movies/movie-0465.html",
    "cover": "./15.jpg",
    "category": "热映精选",
    "categoryUrl": "./category-hot-picks.html"
  },
  {
    "id": "0466",
    "title": "被拒人生",
    "year": "2024",
    "region": "美国",
    "type": "电影",
    "genre": "剧情/传记",
    "tags": [
      "艾滋病",
      "维权",
      "真实事件"
    ],
    "oneLine": "1987年,一位患上艾滋病的同性恋教师被学校开除,他决定用余生把学区告上法庭。",
    "url": "./movies/movie-0466.html",
    "cover": "./16.jpg",
    "category": "历史古装",
    "categoryUrl": "./category-history-costume.html"
  },
  {
    "id": "0467",
    "title": "十条命国语",
    "year": "2026",
    "region": "中国大陆",
    "type": "电影",
    "genre": "动画,奇幻,家庭",
    "tags": [
      "猫",
      "转世",
      "成长",
      "亲情",
      "治愈"
    ],
    "oneLine": "一只高傲的家猫突然获得九条额外生命,但每次复活都会失去一段与主人的温暖回忆。",
    "url": "./movies/movie-0467.html",
    "cover": "./17.jpg",
    "category": "全球佳作",
    "categoryUrl": "./category-global-stories.html"
  },
  {
    "id": "0468",
    "title": "卡瓦纳诉讼 第二季",
    "year": "2025",
    "region": "美国",
    "type": "剧集",
    "genre": "剧情,犯罪,法律",
    "tags": [
      "律政",
      "冷案",
      "道德困境",
      "辩护律师",
      "反转"
    ],
    "oneLine": "王牌辩护律师卡瓦纳接下一桩20年前的冷案,却发现真凶可能是自己最亲近的合伙人。",
    "url": "./movies/movie-0468.html",
    "cover": "./18.jpg",
    "category": "经典片库",
    "categoryUrl": "./category-classic-library.html"
  },
  {
    "id": "0469",
    "title": "画室培欲",
    "year": "2002",
    "region": "日本",
    "type": "电影",
    "genre": "悬疑/惊悚/情色",
    "tags": [
      "密室囚禁",
      "斯德哥尔摩综合征",
      "创作欲",
      "反转"
    ],
    "oneLine": "为寻创作灵感,女画家绑架了一名模特,却在日复一日的囚禁与临摹中,逐渐掉入自己构建的欲望牢笼。",
    "url": "./movies/movie-0469.html",
    "cover": "./19.jpg",
    "category": "奇幻科幻",
    "categoryUrl": "./category-fantasy-sci-fi.html"
  },
  {
    "id": "0470",
    "title": "新郎18岁",
    "year": "2025",
    "region": "韩国",
    "type": "剧集",
    "genre": "喜剧,爱情,奇幻",
    "tags": [
      "契约婚姻",
      "姐弟恋",
      "穿越",
      "校园",
      "轻松搞笑"
    ],
    "oneLine": "为了继承万亿家产,18岁的高中天才黑客被迫与36岁的女CEO契约结婚,上演爆笑同居生活。",
    "url": "./movies/movie-0470.html",
    "cover": "./20.jpg",
    "category": "动作专区",
    "categoryUrl": "./category-action-zone.html"
  },
  {
    "id": "0471",
    "title": "只要我长大",
    "year": "2016",
    "region": "中国台湾",
    "type": "电影",
    "genre": "家庭/儿童",
    "tags": [
      "单亲家庭",
      "部落童年",
      "师生情"
    ],
    "oneLine": "台湾深山部落里,三个顽皮男孩用一台破旧摄像机,偷偷记录了村里每个大人的悲伤秘密。",
    "url": "./movies/movie-0471.html",
    "cover": "./21.jpg",
    "category": "悬疑夜场",
    "categoryUrl": "./category-suspense-night.html"
  },
  {
    "id": "0472",
    "title": "恐龙侵袭",
    "year": "2026",
    "region": "美国",
    "type": "电影",
    "genre": "动作惊悚",
    "tags": [
      "恐龙",
      "地下世界",
      "逃生"
    ],
    "oneLine": "一支洞穴探险队在地球最深处发现了活着的恐龙,而它们正在朝地表高速掘进。",
    "url": "./movies/movie-0472.html",
    "cover": "./22.jpg",
    "category": "动作专区",
    "categoryUrl": "./category-action-zone.html"
  },
  {
    "id": "0473",
    "title": "辛德瑞拉先生",
    "year": "2024",
    "region": "西班牙",
    "type": "电影",
    "genre": "喜剧/爱情/奇幻",
    "tags": [
      "性别反转",
      "灰姑娘",
      "男性",
      "高跟鞋",
      "舞会"
    ],
    "oneLine": "穷困男公关穿上魔法高跟鞋后变成白富美,却要竞选市长?",
    "url": "./movies/movie-0473.html",
    "cover": "./23.jpg",
    "category": "剧集连看",
    "categoryUrl": "./category-drama-series.html"
  },
  {
    "id": "0474",
    "title": "正义降临",
    "year": "2027",
    "region": "美国",
    "type": "电影",
    "genre": "动作/科幻/超级英雄",
    "tags": [
      "反英雄",
      "神明降临",
      "道德审判"
    ],
    "oneLine": "一名能听见所有受害者内心最后呼喊的普通人,穿上战衣,以绝对的暴力裁决人间罪恶。",
    "url": "./movies/movie-0474.html",
    "cover": "./24.jpg",
    "category": "青春喜剧",
    "categoryUrl": "./category-youth-comedy.html"
  },
  {
    "id": "0475",
    "title": "分界线",
    "year": "2022",
    "region": "中国大陆",
    "type": "电视剧",
    "genre": "悬疑/犯罪/刑侦",
    "tags": [
      "双男主",
      "边境犯罪",
      "卧底",
      "兄弟反目",
      "毒品"
    ],
    "oneLine": "中缅边境,缉毒警与从小一起长大的毒枭之子上演宿命对决,而两人中间只隔着一道铁丝网。",
    "url": "./movies/movie-0475.html",
    "cover": "./25.jpg",
    "category": "家庭生活",
    "categoryUrl": "./category-family-life.html"
  },
  {
    "id": "0476",
    "title": "分秒间离",
    "year": "2024",
    "region": "法国",
    "type": "电影",
    "genre": "科幻/爱情/剧情",
    "tags": [
      "时间感知障碍",
      "恋人",
      "文艺科幻",
      "非线性叙事",
      "虐心"
    ],
    "oneLine": "一对恋人患上了罕见病:女孩的时间每天快2秒,男孩每天慢3秒,五年后他们将活在完全错位的时区里。",
    "url": "./movies/movie-0476.html",
    "cover": "./26.jpg",
    "category": "历史古装",
    "categoryUrl": "./category-history-costume.html"
  },
  {
    "id": "0477",
    "title": "诡打墙",
    "year": "2015",
    "region": "中国大陆",
    "type": "电影",
    "genre": "恐怖/悬疑",
    "tags": [
      "无限循环",
      "心理惊悚",
      "密室",
      "国产小成本"
    ],
    "oneLine": "一行人被困在废弃医院的楼梯间,无论怎么上下楼,都会回到同一个黑暗的楼层,仿佛遭遇鬼打墙。",
    "url": "./movies/movie-0477.html",
    "cover": "./27.jpg",
    "category": "青春喜剧",
    "categoryUrl": "./category-youth-comedy.html"
  },
  {
    "id": "0478",
    "title": "柏林别动队",
    "year": "2024",
    "region": "德国",
    "type": "剧集",
    "genre": "动作/谍战/历史",
    "tags": [
      "二战",
      "犹太",
      "复仇",
      "小队",
      "爽剧"
    ],
    "oneLine": "二战末期,五个从集中营逃出的犹太人组成小队,要在柏林给纳粹头目来场私人审判。",
    "url": "./movies/movie-0478.html",
    "cover": "./28.jpg",
    "category": "剧集连看",
    "categoryUrl": "./category-drama-series.html"
  },
  {
    "id": "0479",
    "title": "天方夜谭:辛巴达历险记",
    "year": "2024",
    "region": "美国",
    "type": "电影",
    "genre": "奇幻冒险",
    "tags": [
      "航海",
      "神话生物",
      "宝藏",
      "勇气"
    ],
    "oneLine": "辛巴达为救被诅咒的公主,必须穿越七海寻回三颗封印恶魔的宝石。",
    "url": "./movies/movie-0479.html",
    "cover": "./29.jpg",
    "category": "青春喜剧",
    "categoryUrl": "./category-youth-comedy.html"
  },
  {
    "id": "0480",
    "title": "民间故事:长塘录音室现场",
    "year": "2025",
    "region": "中国台湾",
    "type": "电影",
    "genre": "音乐、剧情",
    "tags": [
      "录音室",
      "都市传说",
      "一镜到底"
    ],
    "oneLine": "一座废弃录音棚的调音台能“听见”死者最后的留言,五个陌生人带着各自逝去的执念前来录音。",
    "url": "./movies/movie-0480.html",
    "cover": "./30.jpg",
    "category": "动作专区",
    "categoryUrl": "./category-action-zone.html"
  },
  {
    "id": "0481",
    "title": "幸福的不在场证明",
    "year": "2025",
    "region": "日本",
    "type": "剧集",
    "genre": "悬疑,家庭,推理",
    "tags": [
      "本格推理",
      "家庭剧",
      "时间诡计",
      "出轨",
      "密室"
    ],
    "oneLine": "当所有家人都怀疑母亲是杀父凶手时,患有阿兹海默症的她提供了坚不可摧的不在场证明。",
    "url": "./movies/movie-0481.html",
    "cover": "./31.jpg",
    "category": "全球佳作",
    "categoryUrl": "./category-global-stories.html"
  },
  {
    "id": "0482",
    "title": "凝视猎物",
    "year": "2025",
    "region": "美国",
    "type": "电影",
    "genre": "惊悚,心理,恐怖",
    "tags": [
      "监视",
      "反杀",
      "女权"
    ],
    "oneLine": "一个专门偷窥独居女性的变态,这次盯上了一个盲女,却发现她才是真正的猎人。",
    "url": "./movies/movie-0482.html",
    "cover": "./32.jpg",
    "category": "悬疑夜场",
    "categoryUrl": "./category-suspense-night.html"
  },
  {
    "id": "0483",
    "title": "小楼又东风",
    "year": "2025",
    "region": "中国台湾",
    "type": "电影",
    "genre": "爱情/历史/同性",
    "tags": [
      "眷村往事",
      "白色恐怖",
      "禁忌之恋",
      "书信传情"
    ],
    "oneLine": "1960年代台湾眷村,两个外省少年在反共标语下偷偷恋爱,其中一人的父亲正是保密局特务。",
    "url": "./movies/movie-0483.html",
    "cover": "./33.jpg",
    "category": "动作专区",
    "categoryUrl": "./category-action-zone.html"
  },
  {
    "id": "0484",
    "title": "古堡屠龙",
    "year": "2027",
    "region": "美国",
    "type": "电影",
    "genre": "动作,奇幻",
    "tags": [
      "魔幻",
      "中世纪",
      "史诗"
    ],
    "oneLine": "为了拯救被诅咒的王国,一名哑巴骑士必须潜入一座活着的古堡,杀死盘踞其中的机械巨龙。",
    "url": "./movies/movie-0484.html",
    "cover": "./34.jpg",
    "category": "奇幻科幻",
    "categoryUrl": "./category-fantasy-sci-fi.html"
  },
  {
    "id": "0485",
    "title": "路人女主的养成方法第一季",
    "year": "2015",
    "region": "日本",
    "type": "动漫",
    "genre": "动画/恋爱/喜剧/后宫",
    "tags": [
      "御宅族",
      "游戏制作",
      "校园",
      "修罗场",
      "meta"
    ],
    "oneLine": "为了将存在感为零的“路人”少女培养成游戏女主角,御宅族社团开始了爆笑又混乱的同人游戏开发。",
    "url": "./movies/movie-0485.html",
    "cover": "./35.jpg",
    "category": "家庭生活",
    "categoryUrl": "./category-family-life.html"
  },
  {
    "id": "0486",
    "title": "血手印国语",
    "year": "1960",
    "region": "中国大陆",
    "type": "电影",
    "genre": "悬疑/古装",
    "tags": [
      "戏曲",
      "京剧",
      "公案",
      "黑白"
    ],
    "oneLine": "一个血手印留在坟前,三个嫌疑人各怀鬼胎,判官的扇子里藏着真凶。",
    "url": "./movies/movie-0486.html",
    "cover": "./36.jpg",
    "category": "悬疑夜场",
    "categoryUrl": "./category-suspense-night.html"
  },
  {
    "id": "0487",
    "title": "男人上路",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "genre": "公路,剧情,家庭",
    "tags": [
      "父子",
      "卡车司机",
      "青藏线",
      "代际和解",
      "生命之旅"
    ],
    "oneLine": "一对关系破裂的父子,必须驾驶重型卡车穿越冬天的青藏线,完成一次生与死的货物运输。",
    "url": "./movies/movie-0487.html",
    "cover": "./37.jpg",
    "category": "热映精选",
    "categoryUrl": "./category-hot-picks.html"
  },
  {
    "id": "0488",
    "title": "上新吧福味",
    "year": "2023",
    "region": "中国台湾",
    "type": "剧集",
    "genre": "剧情/家庭/美食",
    "tags": [
      "闽南菜",
      "老店传承",
      "父子矛盾",
      "创意料理"
    ],
    "oneLine": "台北老字号台菜餐厅少东拒接家业,却在父亲病倒后发现,自家菜谱里藏着一整个家族的离散史。",
    "url": "./movies/movie-0488.html",
    "cover": "./38.jpg",
    "category": "家庭生活",
    "categoryUrl": "./category-family-life.html"
  },
  {
    "id": "0489",
    "title": "沉迷性息",
    "year": "2026",
    "region": "中国香港",
    "type": "电影",
    "genre": "剧情,悬疑",
    "tags": [
      "科技伦理",
      "情感纠葛",
      "反转"
    ],
    "oneLine": "一位心理医生在治疗一位“性瘾症”患者时,发现自己男友的手机里也出现了同样的撩骚信息。",
    "url": "./movies/movie-0489.html",
    "cover": "./39.jpg",
    "category": "动作专区",
    "categoryUrl": "./category-action-zone.html"
  },
  {
    "id": "0490",
    "title": "逐爱之旅",
    "year": "2025",
    "region": "中国大陆",
    "type": "电影",
    "genre": "爱情,剧情,公路",
    "tags": [
      "公路片",
      "寻爱",
      "治愈",
      "成长",
      "旅途"
    ],
    "oneLine": "一场因错过的婚礼而开启的千里自驾,她在寻找旧爱的路上,遇见了真正的自己。",
    "url": "./movies/movie-0490.html",
    "cover": "./40.jpg",
    "category": "院线热片",
    "categoryUrl": "./category-cinema-hits.html"
  },
  {
    "id": "0491",
    "title": "县道184之东",
    "year": "2024",
    "region": "中国台湾",
    "type": "电影",
    "genre": "公路/剧情",
    "tags": [
      "台东",
      "单车环岛",
      "老兵",
      "寻根",
      "慢电影"
    ],
    "oneLine": "一个患癌的山东老兵骑单车沿台东县道184号东行,他要赶在化疗前把骨灰撒在金门对面的海里。",
    "url": "./movies/movie-0491.html",
    "cover": "./41.jpg",
    "category": "都市爱情",
    "categoryUrl": "./category-romance-city.html"
  },
  {
    "id": "0492",
    "title": "游艇藏春",
    "year": "2022",
    "region": "中国香港",
    "type": "电影",
    "genre": "悬疑/犯罪",
    "tags": [
      "密室",
      "富豪",
      "情杀"
    ],
    "oneLine": "富豪生日当天,五名情妇和七个私生子被请上游艇,一夜之间三人离奇死亡。",
    "url": "./movies/movie-0492.html",
    "cover": "./42.jpg",
    "category": "都市爱情",
    "categoryUrl": "./category-romance-city.html"
  },
  {
    "id": "0493",
    "title": "魔法圣女",
    "year": "2023",
    "region": "法国",
    "type": "电影",
    "genre": "奇幻/女性",
    "tags": [
      "中世纪",
      "女巫",
      "修女院",
      "圣迹",
      "宗教审判"
    ],
    "oneLine": "1347年,一个不会魔法的女孩被当成圣女关进修道院,她必须假装有神力,否则就会被当作女巫烧死。",
    "url": "./movies/movie-0493.html",
    "cover": "./43.jpg",
    "category": "剧集连看",
    "categoryUrl": "./category-drama-series.html"
  },
  {
    "id": "0494",
    "title": "猫狗大战3:爪爪集结!",
    "year": "2026",
    "region": "美国",
    "type": "电影",
    "genre": "喜剧,动画,冒险",
    "tags": [
      "动物拟人",
      "特工喜剧",
      "合家欢",
      "猫狗合作",
      "反派洗白"
    ],
    "oneLine": "为了对抗突然降临的外星仓鼠,死对头猫狗特工不得不放下恩怨,组建史上最不靠谱的“爪爪联盟”。",
    "url": "./movies/movie-0494.html",
    "cover": "./44.jpg",
    "category": "都市爱情",
    "categoryUrl": "./category-romance-city.html"
  },
  {
    "id": "0495",
    "title": "木乃伊的诅咒",
    "year": "1964",
    "region": "英国",
    "type": "电影",
    "genre": "恐怖/奇幻",
    "tags": [
      "哥特恐怖",
      "考古惊悚",
      "汉默出品"
    ],
    "oneLine": "考古队将埃及金字塔下的石棺运回伦敦,随之而来的还有能操纵沙尘的千年祭司亡魂。",
    "url": "./movies/movie-0495.html",
    "cover": "./45.jpg",
    "category": "家庭生活",
    "categoryUrl": "./category-family-life.html"
  },
  {
    "id": "0496",
    "title": "东德逃生记",
    "year": "2019",
    "region": "德国",
    "type": "电影",
    "genre": "剧情/惊悚/历史",
    "tags": [
      "冷战",
      "柏林墙",
      "越狱",
      "真实改编"
    ],
    "oneLine": "为了怀孕的妻子,东德工程师策划了一场穿越柏林墙的惊天逃亡,但告密者就在身边。",
    "url": "./movies/movie-0496.html",
    "cover": "./46.jpg",
    "category": "历史古装",
    "categoryUrl": "./category-history-costume.html"
  },
  {
    "id": "0497",
    "title": "心灵病房",
    "year": "2001",
    "region": "美国",
    "type": "电影",
    "genre": "剧情",
    "tags": [
      "医疗",
      "生死",
      "文学",
      "艾玛·汤普森"
    ],
    "oneLine": "一位研究十七世纪死亡诗的文学教授,在癌症病房里亲历了她研究了半辈子的课题。",
    "url": "./movies/movie-0497.html",
    "cover": "./47.jpg",
    "category": "剧集连看",
    "categoryUrl": "./category-drama-series.html"
  },
  {
    "id": "0498",
    "title": "泡沫之恋",
    "year": "2024",
    "region": "中国香港",
    "type": "电影",
    "genre": "爱情/剧情",
    "tags": [
      "游乐园",
      "绝症",
      "倒叙",
      "纯爱"
    ],
    "oneLine": "她在游乐园的泡沫机里藏了三百六十五封情书,等待那个仅剩一年记忆的男孩每天重新爱上她。",
    "url": "./movies/movie-0498.html",
    "cover": "./48.jpg",
    "category": "家庭生活",
    "categoryUrl": "./category-family-life.html"
  },
  {
    "id": "0499",
    "title": "关于一个女孩",
    "year": "2024",
    "region": "美国",
    "type": "电影",
    "genre": "剧情,喜剧,成长",
    "tags": [
      "独立制作",
      "青春絮语",
      "另类摇滚",
      "话痨风格"
    ],
    "oneLine": "一个自命不凡、整天听摇滚乐的高中女生意外怀孕后,她的毒舌与脆弱被现实击得粉碎。",
    "url": "./movies/movie-0499.html",
    "cover": "./49.jpg",
    "category": "经典片库",
    "categoryUrl": "./category-classic-library.html"
  },
  {
    "id": "0500",
    "title": "风流世家",
    "year": "1936",
    "region": "美国",
    "type": "电影",
    "genre": "剧情",
    "tags": [
      "古典",
      "宫廷",
      "歌舞",
      "爱情",
      "种族"
    ],
    "oneLine": "黑白混血舞女以美貌征服欧洲宫廷,却始终买不回自己的自由身。",
    "url": "./movies/movie-0500.html",
    "cover": "./50.jpg",
    "category": "青春喜剧",
    "categoryUrl": "./category-youth-comedy.html"
  },
  {
    "id": "0501",
    "title": "奥迈耶的痴梦",
    "year": "2024",
    "region": "法国",
    "type": "电影",
    "genre": "剧情,历史,冒险",
    "tags": [
      "殖民",
      "东南亚",
      "幻想",
      "坠落",
      "康拉德"
    ],
    "oneLine": "19世纪末婆罗洲,荷兰商人奥迈耶痴迷于寻找传说中的钻石山,却在雨林中逐渐分不清自己是征服者还是疯子。",
    "url": "./movies/movie-0501.html",
    "cover": "./51.jpg",
    "category": "剧集连看",
    "categoryUrl": "./category-drama-series.html"
  },
  {
    "id": "0502",
    "title": "新中国的诞生",
    "year": "1949",
    "region": "中国大陆",
    "type": "纪录片",
    "genre": "历史",
    "tags": [
      "黑白影像",
      "开国大典",
      "珍贵史料",
      "纪实"
    ],
    "oneLine": "记录1949年从西柏坡到天安门,那些决定中华民族命运的关键瞬间与幕后细节。",
    "url": "./movies/movie-0502.html",
    "cover": "./52.jpg",
    "category": "家庭生活",
    "categoryUrl": "./category-family-life.html"
  },
  {
    "id": "0503",
    "title": "超级名模",
    "year": "2025",
    "region": "法国/意大利",
    "type": "电影",
    "genre": "喜剧/剧情",
    "tags": [
      "时尚圈",
      "逆袭",
      "身体羞辱",
      "幽默"
    ],
    "oneLine": "一个身材普通、长相平凡的女孩误闯巴黎顶级模特大赛,引爆了一场审美革命。",
    "url": "./movies/movie-0503.html",
    "cover": "./53.jpg",
    "category": "院线热片",
    "categoryUrl": "./category-cinema-hits.html"
  },
  {
    "id": "0504",
    "title": "终极警报",
    "year": "2025",
    "region": "日本",
    "type": "电影",
    "genre": "灾难,剧情",
    "tags": [
      "海啸",
      "逃生",
      "群像"
    ],
    "oneLine": "十级地震后,海啸将在28分钟后抵达,一座城市和一万个人必须在28分钟内决定谁上最后一辆撤离大巴。",
    "url": "./movies/movie-0504.html",
    "cover": "./54.jpg",
    "category": "都市爱情",
    "categoryUrl": "./category-romance-city.html"
  },
  {
    "id": "0505",
    "title": "鬼驱人",
    "year": "2025",
    "region": "美国",
    "type": "电影",
    "genre": "恐怖",
    "tags": [
      "驱魔",
      "恶灵",
      "家庭",
      "惊悚",
      "宗教"
    ],
    "oneLine": "单亲妈妈发现女儿被恶灵附身,教堂派来的驱魔师却似乎在刻意激怒那个“东西”。",
    "url": "./movies/movie-0505.html",
    "cover": "./55.jpg",
    "category": "奇幻科幻",
    "categoryUrl": "./category-fantasy-sci-fi.html"
  },
  {
    "id": "0506",
    "title": "地球回音",
    "year": "2025",
    "region": "美国",
    "type": "电影",
    "genre": "科幻,冒险,家庭",
    "tags": [
      "地心探险",
      "神秘信号",
      "少年团",
      "环保",
      "未知生物"
    ],
    "oneLine": "三个少年意外收到一串来自地心的神秘信号,从而踏上了一场颠覆科学的奇幻冒险。",
    "url": "./movies/movie-0506.html",
    "cover": "./56.jpg",
    "category": "剧集连看",
    "categoryUrl": "./category-drama-series.html"
  },
  {
    "id": "0507",
    "title": "马赛克大乱斗",
    "year": "2024",
    "region": "日本",
    "type": "电影",
    "genre": "喜剧,动作,游戏改编",
    "tags": [
      "像素",
      "街机",
      "穿越",
      "怀旧"
    ],
    "oneLine": "八个街机角色被删档后,集体穿越到开放世界3A大作里求生。",
    "url": "./movies/movie-0507.html",
    "cover": "./57.jpg",
    "category": "历史古装",
    "categoryUrl": "./category-history-costume.html"
  },
  {
    "id": "0508",
    "title": "魔法保姆麦克菲2",
    "year": "2025",
    "region": "英国",
    "type": "电影",
    "genre": "奇幻,喜剧,家庭",
    "tags": [
      "保姆",
      "魔法",
      "战争时期",
      "儿童",
      "治愈"
    ],
    "oneLine": "二战期间,一个长着疣的魔法保姆空降到伦敦废墟里,专门管教被闪电战炸出心理创伤的孩子们。",
    "url": "./movies/movie-0508.html",
    "cover": "./58.jpg",
    "category": "热映精选",
    "categoryUrl": "./category-hot-picks.html"
  },
  {
    "id": "0509",
    "title": "街霸竞技场",
    "year": "2025",
    "region": "中国香港",
    "type": "电影",
    "genre": "动作/运动",
    "tags": [
      "格斗",
      "街头",
      "兄弟情",
      "地下拳赛",
      "热血"
    ],
    "oneLine": "为了给重病妹妹筹钱,一个外卖骑手撕下制服,踏入城市最深处的地下格斗联赛,却发现对手全是曾经的师兄弟。",
    "url": "./movies/movie-0509.html",
    "cover": "./59.jpg",
    "category": "经典片库",
    "categoryUrl": "./category-classic-library.html"
  },
  {
    "id": "0510",
    "title": "生生舞不息",
    "year": "2025",
    "region": "日本",
    "type": "电影",
    "genre": "剧情/家庭",
    "tags": [
      "舞蹈",
      "遗愿",
      "母女",
      "治愈"
    ],
    "oneLine": "母亲去世后,女儿按照遗愿学跳一支她从未见过的舞,却发现母亲年轻时曾是舞踏艺人。",
    "url": "./movies/movie-0510.html",
    "cover": "./60.jpg",
    "category": "热映精选",
    "categoryUrl": "./category-hot-picks.html"
  },
  {
    "id": "0511",
    "title": "谁与争锋",
    "year": "2024",
    "region": "中国香港",
    "type": "电影",
    "genre": "动作,武侠,犯罪",
    "tags": [
      "古惑仔",
      "武术",
      "黑帮",
      "硬核",
      "兄弟"
    ],
    "oneLine": "一个沉迷传统武术的废柴青年,错把电影台词当黑帮规矩,竟误打误撞收服了一整条街的古惑仔。",
    "url": "./movies/movie-0511.html",
    "cover": "./61.jpg",
    "category": "都市爱情",
    "categoryUrl": "./category-romance-city.html"
  },
  {
    "id": "0512",
    "title": "关于塔利",
    "year": "2026",
    "region": "美国",
    "type": "电影",
    "genre": "剧情/悬疑/同性",
    "tags": [
      "失踪",
      "回忆录",
      "小镇",
      "秘密",
      "同性之恋"
    ],
    "oneLine": "畅销书作家回乡调查高中闺蜜塔利的失踪案,却发现自己当年写的小说,每一页都是真实犯罪。",
    "url": "./movies/movie-0512.html",
    "cover": "./62.jpg",
    "category": "青春喜剧",
    "categoryUrl": "./category-youth-comedy.html"
  },
  {
    "id": "0513",
    "title": "我还有话说",
    "year": "2019",
    "region": "中国大陆",
    "type": "电影",
    "genre": "剧情,家庭",
    "tags": [
      "聋人",
      "庭审",
      "维权",
      "父女",
      "底层"
    ],
    "oneLine": "一辆失控的货车撞死聋哑外卖员的妻子,肇事司机是富二代。法庭上,他第一次开口说出了声音。",
    "url": "./movies/movie-0513.html",
    "cover": "./63.jpg",
    "category": "青春喜剧",
    "categoryUrl": "./category-youth-comedy.html"
  },
  {
    "id": "0514",
    "title": "砸掉你的牙",
    "year": "2025",
    "region": "中国大陆",
    "type": "电影",
    "genre": "喜剧,动作,剧情",
    "tags": [
      "拳击",
      "小镇",
      "逆袭",
      "父子和解"
    ],
    "oneLine": "曾经的拳击冠军为还债给小镇中学生当教练,却发现这批“问题少年”比他更能打。",
    "url": "./movies/movie-0514.html",
    "cover": "./64.jpg",
    "category": "热映精选",
    "categoryUrl": "./category-hot-picks.html"
  },
  {
    "id": "0515",
    "title": "少年根特的烦恼",
    "year": "2025",
    "region": "德国",
    "type": "剧集",
    "genre": "剧情,青春",
    "tags": [
      "文学改编",
      "成长",
      "抑郁",
      "友谊"
    ],
    "oneLine": "患有高功能抑郁症的文学少年,决定在暑假里“实践”歌德《少年维特的烦恼》中每一件疯狂的事。",
    "url": "./movies/movie-0515.html",
    "cover": "./65.jpg",
    "category": "奇幻科幻",
    "categoryUrl": "./category-fantasy-sci-fi.html"
  },
  {
    "id": "0516",
    "title": "叶问3:师徒情",
    "year": "2025",
    "region": "中国香港",
    "type": "电影",
    "genre": "动作/剧情/传记",
    "tags": [
      "咏春",
      "师徒",
      "传承",
      "功夫",
      "年代"
    ],
    "oneLine": "叶问晚年收下最后一个徒弟,却发现对方是杀害挚友的仇人之子,咏春的衣钵该不该传。",
    "url": "./movies/movie-0516.html",
    "cover": "./66.jpg",
    "category": "全球佳作",
    "categoryUrl": "./category-global-stories.html"
  },
  {
    "id": "0517",
    "title": "新征程,舞起来!",
    "year": "2023",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "剧情,喜剧,音乐",
    "tags": [
      "广场舞",
      "乡村振兴",
      "代际沟通",
      "热血",
      "方言"
    ],
    "oneLine": "一心想要躺平的都市程序员,被派到乡村组织广场舞大赛,却引爆了一场全村“舞林革命”。",
    "url": "./movies/movie-0517.html",
    "cover": "./67.jpg",
    "category": "悬疑夜场",
    "categoryUrl": "./category-suspense-night.html"
  },
  {
    "id": "0518",
    "title": "异世界居酒屋阿信",
    "year": "2027",
    "region": "日本",
    "type": "剧集",
    "genre": "奇幻/美食/治愈",
    "tags": [
      "异世界",
      "居酒屋",
      "美食治愈",
      "职场",
      "穿越"
    ],
    "oneLine": "东京失意厨师偶然打开后厨旧门,竟通往剑与魔法的异世界,他用烤串和啤酒温暖冒险者。",
    "url": "./movies/movie-0518.html",
    "cover": "./68.jpg",
    "category": "院线热片",
    "categoryUrl": "./category-cinema-hits.html"
  },
  {
    "id": "0519",
    "title": "我叫塔尼诺",
    "year": "2002",
    "region": "意大利",
    "type": "电影",
    "genre": "喜剧,剧情",
    "tags": [
      "移民",
      "身份认同",
      "足球",
      "父子",
      "温情"
    ],
    "oneLine": "一个信奉“踢球才能吃饭”的西西里男孩,突然被告知亲生父亲是摩洛哥人。",
    "url": "./movies/movie-0519.html",
    "cover": "./69.jpg",
    "category": "家庭生活",
    "categoryUrl": "./category-family-life.html"
  },
  {
    "id": "0520",
    "title": "极速世界之战车",
    "year": "2025",
    "region": "美国",
    "type": "电影",
    "genre": "动作/科幻/赛车",
    "tags": [
      "未来赛车",
      "暴力改装",
      "全球联赛",
      "爽片"
    ],
    "oneLine": "2042年,赛车不再比快,而是比谁能在撞车中活下来,失败者的零件将归胜者所有。",
    "url": "./movies/movie-0520.html",
    "cover": "./70.jpg",
    "category": "经典片库",
    "categoryUrl": "./category-classic-library.html"
  },
  {
    "id": "0521",
    "title": "春梦泪痕",
    "year": "1995",
    "region": "中国香港",
    "type": "电影",
    "genre": "爱情/剧情",
    "tags": [
      "怀旧 错爱 歌舞厅 悲剧 绝症"
    ],
    "oneLine": "六十年代夜总会歌女与富家公子的禁忌之恋,一场春梦醒来只剩泪痕。",
    "url": "./movies/movie-0521.html",
    "cover": "./71.jpg",
    "category": "青春喜剧",
    "categoryUrl": "./category-youth-comedy.html"
  },
  {
    "id": "0522",
    "title": "生命自有出路",
    "year": "2025",
    "region": "美国",
    "type": "电影",
    "genre": "剧情,冒险,励志",
    "tags": [
      "绝症逆袭",
      "自然法则",
      "治愈系",
      "荒野求生"
    ],
    "oneLine": "被诊断只剩半年寿命的都市精英,选择独自走进荒野寻找传说中“自愈者”的秘方。",
    "url": "./movies/movie-0522.html",
    "cover": "./72.jpg",
    "category": "动作专区",
    "categoryUrl": "./category-action-zone.html"
  },
  {
    "id": "0523",
    "title": "狼人2025",
    "year": "2025",
    "region": "英国",
    "type": "电影",
    "genre": "恐怖,动作,科幻",
    "tags": [
      "变异",
      "基因工程",
      "都市传说",
      "血腥",
      "生存"
    ],
    "oneLine": "近未来伦敦,一种修改基因药物让流浪汉在月圆之夜异化为嗜血狼人,城市沦为狩猎场。",
    "url": "./movies/movie-0523.html",
    "cover": "./73.jpg",
    "category": "热映精选",
    "categoryUrl": "./category-hot-picks.html"
  },
  {
    "id": "0524",
    "title": "暗算",
    "year": "2025",
    "region": "中国大陆",
    "type": "电视剧",
    "genre": "谍战、悬疑、心理",
    "tags": [
      "听风",
      "看风",
      "捕风",
      "密码战",
      "701"
    ],
    "oneLine": "701情报基地的三段秘史:瞎子听出敌台,疯子算出密本,死人传出绝杀令。",
    "url": "./movies/movie-0524.html",
    "cover": "./74.jpg",
    "category": "经典片库",
    "categoryUrl": "./category-classic-library.html"
  },
  {
    "id": "0525",
    "title": "大唐来的苏无名",
    "year": "2022",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "古装,悬疑,探案",
    "tags": [
      "穿越",
      "狄仁杰弟子",
      "单元探案",
      "幽默"
    ],
    "oneLine": "狄仁杰弟子苏无名意外穿越到现代,用唐朝验尸手法破解连环命案,却被当成了精神病。",
    "url": "./movies/movie-0525.html",
    "cover": "./75.jpg",
    "category": "悬疑夜场",
    "categoryUrl": "./category-suspense-night.html"
  },
  {
    "id": "0526",
    "title": "天啊ㄚㄚ!",
    "year": "2024",
    "region": "中国台湾",
    "type": "电影",
    "genre": "喜剧/奇幻/家庭",
    "tags": [
      "神展开",
      "台语喜剧",
      "神明上身",
      "乌龙事件",
      "温情"
    ],
    "oneLine": "一个普通的台湾阿嬷突然被妈祖上身,从此她说的每一句话都会被信徒当成神谕。",
    "url": "./movies/movie-0526.html",
    "cover": "./76.jpg",
    "category": "青春喜剧",
    "categoryUrl": "./category-youth-comedy.html"
  },
  {
    "id": "0527",
    "title": "南极物语",
    "year": "2024",
    "region": "日本",
    "type": "电影",
    "genre": "剧情,冒险",
    "tags": [
      "真实事件改编",
      "雪橇犬",
      "科考",
      "生存"
    ],
    "oneLine": "南极科考队被迫撤离,15只雪橇犬被留在-50°C的极夜荒原,它们开始了长达一年的独立求生。",
    "url": "./movies/movie-0527.html",
    "cover": "./77.jpg",
    "category": "奇幻科幻",
    "categoryUrl": "./category-fantasy-sci-fi.html"
  },
  {
    "id": "0528",
    "title": "帐篷外是欧洲5:意大利篇",
    "year": "2025",
    "region": "中国大陆",
    "type": "综艺",
    "genre": "旅行/真人秀",
    "tags": [
      "露营",
      "意大利",
      "明星旅行",
      "美食美景"
    ],
    "oneLine": "五位明星拖着房车从多洛米蒂山开到西西里岛,在帐篷外学做地道披萨和意面。",
    "url": "./movies/movie-0528.html",
    "cover": "./78.jpg",
    "category": "热映精选",
    "categoryUrl": "./category-hot-picks.html"
  },
  {
    "id": "0529",
    "title": "孤岛怪汉",
    "year": "2024",
    "region": "日本",
    "type": "电影",
    "genre": "剧情,恐怖",
    "tags": [
      "荒岛",
      "心理创伤",
      "都市传说"
    ],
    "oneLine": "三个探险博主闯入孤岛,发现那位“怪汉”其实一直在保护他们不被真正的怪物吃掉。",
    "url": "./movies/movie-0529.html",
    "cover": "./79.jpg",
    "category": "家庭生活",
    "categoryUrl": "./category-family-life.html"
  },
  {
    "id": "0530",
    "title": "睡公主",
    "year": "2025",
    "region": "马来西亚",
    "type": "剧集",
    "genre": "奇幻/爱情",
    "tags": [
      "诅咒",
      "醒来",
      "时间停滞"
    ],
    "oneLine": "公主被诅咒沉睡一百年,但她其实意识清醒,只是在等一个能对上暗号的吻。",
    "url": "./movies/movie-0530.html",
    "cover": "./80.jpg",
    "category": "悬疑夜场",
    "categoryUrl": "./category-suspense-night.html"
  },
  {
    "id": "0531",
    "title": "山间铃响马帮来1954",
    "year": "1954",
    "region": "中国大陆",
    "type": "电影",
    "genre": "战争,剧情",
    "tags": [
      "红色经典",
      "边疆",
      "剿匪",
      "民族团结"
    ],
    "oneLine": "解放初期,一支解放军马帮深入云南深山运送物资,与当地土司和潜伏土匪展开惊心动魄的周旋。",
    "url": "./movies/movie-0531.html",
    "cover": "./81.jpg",
    "category": "家庭生活",
    "categoryUrl": "./category-family-life.html"
  },
  {
    "id": "0532",
    "title": "宏观世界",
    "year": "2023",
    "region": "美国",
    "type": "电影",
    "genre": "科幻/剧情",
    "tags": [
      "量子物理",
      "多重宇宙",
      "孤独",
      "抉择"
    ],
    "oneLine": "一名量子物理学家发明了可以观测平行宇宙的装置,却发现在无数个宇宙里,她的爱人从未选择过她。",
    "url": "./movies/movie-0532.html",
    "cover": "./82.jpg",
    "category": "经典片库",
    "categoryUrl": "./category-classic-library.html"
  },
  {
    "id": "0533",
    "title": "黑手党不再是曾经",
    "year": "2024",
    "region": "意大利",
    "type": "电影",
    "genre": "剧情/犯罪",
    "tags": [
      "黑帮",
      "没落",
      "黑色喜剧"
    ],
    "oneLine": "西西里黑手党老教父发现,如今家族最大的威胁不是警察,而是年轻人宁愿当网红也不愿入会。",
    "url": "./movies/movie-0533.html",
    "cover": "./83.jpg",
    "category": "悬疑夜场",
    "categoryUrl": "./category-suspense-night.html"
  },
  {
    "id": "0534",
    "title": "狐妖小红娘日语版",
    "year": "2024",
    "region": "日本",
    "type": "剧集(动画)",
    "genre": "奇幻,恋爱,战斗",
    "tags": [
      "转世续缘",
      "和风",
      "声优",
      "催泪"
    ],
    "oneLine": "承接人与妖转世情缘的狐妖红线仙,在日本妖怪界遇到了最难缠的客户。",
    "url": "./movies/movie-0534.html",
    "cover": "./84.jpg",
    "category": "剧集连看",
    "categoryUrl": "./category-drama-series.html"
  },
  {
    "id": "0535",
    "title": "燃烧0.7度",
    "year": "2023",
    "region": "韩国",
    "type": "电影",
    "genre": "悬疑、剧情",
    "tags": [
      "气候变化",
      "纵火案",
      "心理惊悚",
      "环保"
    ],
    "oneLine": "当全球升温1.5°C的临界点被突破,一个自称“0.7度”的纵火犯开始焚烧化石燃料公司的总部。",
    "url": "./movies/movie-0535.html",
    "cover": "./85.jpg",
    "category": "青春喜剧",
    "categoryUrl": "./category-youth-comedy.html"
  },
  {
    "id": "0536",
    "title": "创伤",
    "year": "2025",
    "region": "美国",
    "type": "剧集",
    "genre": "悬疑,心理惊悚",
    "tags": [
      "PTSD",
      "记忆重塑",
      "医疗伦理",
      "限知视角"
    ],
    "oneLine": "一位创伤治疗师发现,自己给病人植入的“美好记忆”,竟与多起失踪案有关。",
    "url": "./movies/movie-0536.html",
    "cover": "./86.jpg",
    "category": "全球佳作",
    "categoryUrl": "./category-global-stories.html"
  },
  {
    "id": "0537",
    "title": "南法撩妹记",
    "year": "2023",
    "region": "法国",
    "type": "电影",
    "genre": "喜剧/爱情",
    "tags": [
      "南法",
      "假期",
      "搭讪"
    ],
    "oneLine": "三个巴黎宅男去南法学搭讪,却意外被一群当地老奶奶教做人。",
    "url": "./movies/movie-0537.html",
    "cover": "./87.jpg",
    "category": "院线热片",
    "categoryUrl": "./category-cinema-hits.html"
  },
  {
    "id": "0538",
    "title": "天剑绝刀",
    "year": "2024",
    "region": "中国台湾",
    "type": "剧集",
    "genre": "武侠/古装/动作",
    "tags": [
      "江湖",
      "复仇",
      "秘籍",
      "恩怨"
    ],
    "oneLine": "二十年前武林至尊被灭门,其子携天剑与绝刀两种心法,踏上亦正亦邪的复仇路。",
    "url": "./movies/movie-0538.html",
    "cover": "./88.jpg",
    "category": "全球佳作",
    "categoryUrl": "./category-global-stories.html"
  },
  {
    "id": "0539",
    "title": "大豆田永久子与三名前夫",
    "year": "2025",
    "region": "日本",
    "type": "电视剧",
    "genre": "剧情,喜剧,爱情",
    "tags": [
      "现代婚恋",
      "女性视角",
      "幽默治愈"
    ],
    "oneLine": "离了三次婚的建筑公司女社长,被三个性格迥异的前夫轮番“关心”的日常。",
    "url": "./movies/movie-0539.html",
    "cover": "./89.jpg",
    "category": "全球佳作",
    "categoryUrl": "./category-global-stories.html"
  },
  {
    "id": "0540",
    "title": "死亡漩涡:夺魂锯新游戏",
    "year": "2021",
    "region": "美国",
    "type": "电影",
    "genre": "惊悚/恐怖",
    "tags": [
      "血腥机关",
      "警匪追凶",
      "重启之作"
    ],
    "oneLine": "老警探在一座废弃地铁站醒来,发现自己是新一轮“死亡游戏”的玩家,而裁判,是他死去多年的搭档。",
    "url": "./movies/movie-0540.html",
    "cover": "./90.jpg",
    "category": "动作专区",
    "categoryUrl": "./category-action-zone.html"
  },
  {
    "id": "0541",
    "title": "射击",
    "year": "2025",
    "region": "韩国",
    "type": "电影",
    "genre": "动作,犯罪,悬疑",
    "tags": [
      "直播",
      "狙击手",
      "网络暴力",
      "复仇"
    ],
    "oneLine": "一场全程直播的“随机射击”游戏,整个城市都是靶场,百万网民是裁判,而下一个目标,可能是屏幕前的你。",
    "url": "./movies/movie-0541.html",
    "cover": "./91.jpg",
    "category": "动作专区",
    "categoryUrl": "./category-action-zone.html"
  },
  {
    "id": "0542",
    "title": "爱在云霄",
    "year": "2024",
    "region": "美国",
    "type": "电影",
    "genre": "爱情/剧情",
    "tags": [
      "航空",
      "异地恋",
      "命运",
      "催泪"
    ],
    "oneLine": "一对异地恋人坚持了 1000 次飞行见面,第 1001 次时航班失事,而他们不在同一架飞机上。",
    "url": "./movies/movie-0542.html",
    "cover": "./92.jpg",
    "category": "历史古装",
    "categoryUrl": "./category-history-costume.html"
  },
  {
    "id": "0543",
    "title": "泰版来自星星的你",
    "year": "2024",
    "region": "泰国",
    "type": "电视剧",
    "genre": "爱情/奇幻/喜剧",
    "tags": [
      "外星人",
      "泰式搞笑",
      "明星",
      "翻拍"
    ],
    "oneLine": "活了400年的外星教授在曼谷爱上当红女明星,却因泰式鬼魂和降头术焦头烂额。",
    "url": "./movies/movie-0543.html",
    "cover": "./93.jpg",
    "category": "都市爱情",
    "categoryUrl": "./category-romance-city.html"
  },
  {
    "id": "0544",
    "title": "水果篮子 最终季",
    "year": "2022",
    "region": "日本",
    "type": "剧集",
    "genre": "动画/爱情/奇幻",
    "tags": [
      "治愈系",
      "十二生肖",
      "宿命轮回",
      "少女漫改"
    ],
    "oneLine": "草摩家的诅咒即将解除,但透必须做出选择:解开所有人的枷锁,或者永远留在由希身边。",
    "url": "./movies/movie-0544.html",
    "cover": "./94.jpg",
    "category": "青春喜剧",
    "categoryUrl": "./category-youth-comedy.html"
  },
  {
    "id": "0545",
    "title": "十年带球跑",
    "year": "2018",
    "region": "英国",
    "type": "电影",
    "genre": "剧情,爱情,运动",
    "tags": [
      "足球",
      "青梅竹马",
      "阶级差异",
      "十年跨度"
    ],
    "oneLine": "天才足球少年与穷困女友约定十年后顶峰相见,重逢时却身份互换。",
    "url": "./movies/movie-0545.html",
    "cover": "./95.jpg",
    "category": "青春喜剧",
    "categoryUrl": "./category-youth-comedy.html"
  },
  {
    "id": "0546",
    "title": "异界群敌 代码重组",
    "year": "2024",
    "region": "日本",
    "type": "动画剧集",
    "genre": "科幻,战斗",
    "tags": [
      "虚拟世界",
      "AI叛变",
      "组队冒险",
      "数据武器"
    ],
    "oneLine": "当世界被错误代码覆盖,七名被删档的玩家必须重组数据,对抗系统生成的万亿敌人。",
    "url": "./movies/movie-0546.html",
    "cover": "./96.jpg",
    "category": "全球佳作",
    "categoryUrl": "./category-global-stories.html"
  },
  {
    "id": "0547",
    "title": "阻爱",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "genre": "剧情/悬疑",
    "tags": [
      "情感绑架",
      "心理博弈",
      "母爱扭曲",
      "密室"
    ],
    "oneLine": "瘫痪母亲以爱为名将女儿囚于老宅十年,一封匿名信却揭穿她根本能走路。",
    "url": "./movies/movie-0547.html",
    "cover": "./97.jpg",
    "category": "家庭生活",
    "categoryUrl": "./category-family-life.html"
  },
  {
    "id": "0548",
    "title": "津门三少爷",
    "year": "2025",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "年代,家族,悬疑",
    "tags": [
      "民国",
      "天津",
      "洋行",
      "商战",
      "替身"
    ],
    "oneLine": "天津卫三大洋行继承人接连“意外”身亡,只剩那位装疯卖傻的三少爷,所有人都以为他是下一个,他却说“我在等他们来”。",
    "url": "./movies/movie-0548.html",
    "cover": "./98.jpg",
    "category": "都市爱情",
    "categoryUrl": "./category-romance-city.html"
  },
  {
    "id": "0549",
    "title": "桃色杀机",
    "year": "2001",
    "region": "中国香港",
    "type": "电影",
    "genre": "犯罪,惊悚,爱情",
    "tags": [
      "情杀",
      "卧底",
      "港产惊悚",
      "反转",
      "桃色陷阱"
    ],
    "oneLine": "一名女警卧底成为情妇,却发现她要接近的三个目标,每一个都在暗中策划杀死她。",
    "url": "./movies/movie-0549.html",
    "cover": "./99.jpg",
    "category": "奇幻科幻",
    "categoryUrl": "./category-fantasy-sci-fi.html"
  },
  {
    "id": "0550",
    "title": "她的人生没有错",
    "year": "2022",
    "region": "日本",
    "type": "剧集",
    "genre": "剧情/女性",
    "tags": [
      "女性群像",
      "自我认同",
      "社会压力",
      "治愈",
      "单元剧"
    ],
    "oneLine": "51岁的家庭主妇在丈夫去世后,发现自己除了“妈妈”和“妻子”之外,没有任何社会身份。",
    "url": "./movies/movie-0550.html",
    "cover": "./100.jpg",
    "category": "奇幻科幻",
    "categoryUrl": "./category-fantasy-sci-fi.html"
  },
  {
    "id": "0551",
    "title": "无间英雄",
    "year": "2026",
    "region": "中国香港",
    "type": "电影",
    "genre": "动作,犯罪,剧情",
    "tags": [
      "卧底",
      "警匪",
      "无间道精神续作",
      "双雄",
      "枪战"
    ],
    "oneLine": "黑帮大佬安插在警队的卧底,与警队安插在黑帮的卧底,在互相不知道身份的情况下成了生死之交。",
    "url": "./movies/movie-0551.html",
    "cover": "./101.jpg",
    "category": "奇幻科幻",
    "categoryUrl": "./category-fantasy-sci-fi.html"
  },
  {
    "id": "0552",
    "title": "逃出坎大哈",
    "year": "2023",
    "region": "美国",
    "type": "电影",
    "genre": "动作,战争,惊悚",
    "tags": [
      "特工",
      "阿富汗",
      "逃亡",
      "真实事件改编"
    ],
    "oneLine": "一名卧底特工身份暴露,必须在48小时内穿越400英里的塔利班控制区,抵达唯一的撤离点。",
    "url": "./movies/movie-0552.html",
    "cover": "./102.jpg",
    "category": "家庭生活",
    "categoryUrl": "./category-family-life.html"
  },
  {
    "id": "0553",
    "title": "如果历史是一群喵第二季",
    "year": "2025",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "动画/历史/喜剧",
    "tags": [
      "萌系",
      "猫",
      "历史科普",
      "搞笑"
    ],
    "oneLine": "九只性格迥异的猫咪穿越回秦汉,用肉垫改写诸侯争霸的名场面。",
    "url": "./movies/movie-0553.html",
    "cover": "./103.jpg",
    "category": "动作专区",
    "categoryUrl": "./category-action-zone.html"
  },
  {
    "id": "0554",
    "title": "西游记",
    "year": "2026",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "奇幻/冒险/古装",
    "tags": [
      "经典改编",
      "师徒",
      "取经",
      "新解",
      "特效"
    ],
    "oneLine": "当唐僧捡到一部智能手机,佛祖告诉他:西天取经其实是一场直播真人秀。",
    "url": "./movies/movie-0554.html",
    "cover": "./104.jpg",
    "category": "经典片库",
    "categoryUrl": "./category-classic-library.html"
  },
  {
    "id": "0555",
    "title": "柏林格,我爱你",
    "year": "2023",
    "region": "德国",
    "type": "电影",
    "genre": "爱情/剧情/音乐",
    "tags": [
      "大提琴家",
      "失聪",
      "疗愈",
      "柏林爱乐"
    ],
    "oneLine": "柏林爱乐的天才大提琴手突患耳疾,在绝望中遇见了一个只能用脚“听”见音乐的女孩。",
    "url": "./movies/movie-0555.html",
    "cover": "./105.jpg",
    "category": "青春喜剧",
    "categoryUrl": "./category-youth-comedy.html"
  },
  {
    "id": "0556",
    "title": "玫瑰舞后",
    "year": "2016",
    "region": "美国",
    "type": "电影",
    "genre": "剧情/音乐/传记",
    "tags": [
      "女性",
      "舞台",
      "欲望",
      "母女"
    ],
    "oneLine": "过气舞女逼女儿参加选美,却意外发现女儿比自己更懂舞台上的“表演式微笑”。",
    "url": "./movies/movie-0556.html",
    "cover": "./106.jpg",
    "category": "全球佳作",
    "categoryUrl": "./category-global-stories.html"
  },
  {
    "id": "0557",
    "title": "血腥拼图",
    "year": "2026",
    "region": "美国",
    "type": "剧集",
    "genre": "犯罪/惊悚/推理",
    "tags": [
      "拼图杀手",
      "连环杀人",
      "FBI侧写",
      "暗黑美学"
    ],
    "oneLine": "华盛顿特区出现连环杀手,他将被害人肢解后重组成一幅幅“人体拼图”,而每一块缺失的肢体都指向下一个作案地点。",
    "url": "./movies/movie-0557.html",
    "cover": "./107.jpg",
    "category": "院线热片",
    "categoryUrl": "./category-cinema-hits.html"
  },
  {
    "id": "0558",
    "title": "下一站彩虹粤语",
    "year": "2004",
    "region": "中国香港",
    "type": "电视剧",
    "genre": "时装,爱情",
    "tags": [
      "TVB",
      "时装设计",
      "职场",
      "励志",
      "多角恋"
    ],
    "oneLine": "三个性格迥异的女孩闯入时尚圈,在名利场的尔虞我诈中,寻找事业与爱情的彩虹。",
    "url": "./movies/movie-0558.html",
    "cover": "./108.jpg",
    "category": "奇幻科幻",
    "categoryUrl": "./category-fantasy-sci-fi.html"
  },
  {
    "id": "0559",
    "title": "厨神",
    "year": "2025",
    "region": "日本",
    "type": "剧集",
    "genre": "美食,励志",
    "tags": [
      "料理",
      "天才",
      "复仇",
      "美食评论"
    ],
    "oneLine": "一个曾被权威美食评论家毁掉职业生涯的天才厨师,隐姓埋名在一家路边摊做了十年炒饭,如今决定用一碗蛋炒饭复仇。",
    "url": "./movies/movie-0559.html",
    "cover": "./109.jpg",
    "category": "历史古装",
    "categoryUrl": "./category-history-costume.html"
  },
  {
    "id": "0560",
    "title": "美国兔子的冒险",
    "year": "2024",
    "region": "美国",
    "type": "剧集",
    "genre": "动画/喜剧/政治讽刺",
    "tags": [
      "拟人化",
      "政治隐喻",
      "公路片",
      "疯狂动物城风"
    ],
    "oneLine": "一只住在白宫草坪的兔子意外当上了“影子总统”,它要用胡萝卜收买国会山,阻止人类毁灭森林。",
    "url": "./movies/movie-0560.html",
    "cover": "./110.jpg",
    "category": "悬疑夜场",
    "categoryUrl": "./category-suspense-night.html"
  },
  {
    "id": "0561",
    "title": "汉普斯特德公园国语",
    "year": "2017",
    "region": "英国",
    "type": "电影",
    "genre": "喜剧/爱情",
    "tags": [
      "中年爱情",
      "拆迁",
      "隐居者",
      "英式幽默"
    ],
    "oneLine": "住在公园破屋里的隐士,和住在对面高楼里丧偶的会计师,因为一场拆迁官司走到了一起。",
    "url": "./movies/movie-0561.html",
    "cover": "./111.jpg",
    "category": "悬疑夜场",
    "categoryUrl": "./category-suspense-night.html"
  },
  {
    "id": "0562",
    "title": "好斗之人2022",
    "year": "2022",
    "region": "澳大利亚",
    "type": "电影",
    "genre": "剧情/运动",
    "tags": [
      "格斗",
      "小镇",
      "救赎",
      "暴力"
    ],
    "oneLine": "退役拳王回到闭塞的澳洲小镇,发现这里的非法格斗牵扯着家族的血债,他只能戴上手套重拾暴力。",
    "url": "./movies/movie-0562.html",
    "cover": "./112.jpg",
    "category": "院线热片",
    "categoryUrl": "./category-cinema-hits.html"
  },
  {
    "id": "0563",
    "title": "闹鬼校园",
    "year": "2024",
    "region": "泰国",
    "type": "电视剧",
    "genre": "恐怖/悬疑/青春",
    "tags": [
      "校园怪谈",
      "补习班",
      "考试诅咒",
      "轮回"
    ],
    "oneLine": "一所重点中学的晚自习室,每夜都会多出一个学生,而多出来的那个,是20年前考满分的死人。",
    "url": "./movies/movie-0563.html",
    "cover": "./113.jpg",
    "category": "都市爱情",
    "categoryUrl": "./category-romance-city.html"
  },
  {
    "id": "0564",
    "title": "微笑的人们",
    "year": "2024",
    "region": "韩国",
    "type": "剧集",
    "genre": "剧情/悬疑/职场",
    "tags": [
      "职场霸凌",
      "微笑抑郁症",
      "连环杀人",
      "复仇",
      "社畜"
    ],
    "oneLine": "在一家以“客户永远是对的”为信条的百货公司里,那些永远面带微笑的员工一个接一个地离奇死亡。",
    "url": "./movies/movie-0564.html",
    "cover": "./114.jpg",
    "category": "历史古装",
    "categoryUrl": "./category-history-costume.html"
  },
  {
    "id": "0565",
    "title": "好莱坞污垢",
    "year": "2025",
    "region": "美国",
    "type": "剧集",
    "genre": "剧情/悬疑/黑色喜剧",
    "tags": [
      "娱乐圈",
      "谋杀",
      "爆料",
      "潜规则"
    ],
    "oneLine": "一个专门替明星“洗稿”的危机公关专家在清理谋杀现场时,发现死者手里握着的凶器是他自己的指纹。",
    "url": "./movies/movie-0565.html",
    "cover": "./115.jpg",
    "category": "青春喜剧",
    "categoryUrl": "./category-youth-comedy.html"
  },
  {
    "id": "0566",
    "title": "女王神剑",
    "year": "2025",
    "region": "美国",
    "type": "电影",
    "genre": "动作/奇幻/冒险",
    "tags": [
      "女战士",
      "复仇",
      "剑与魔法",
      "神器",
      "觉醒"
    ],
    "oneLine": "原本只是铁匠学徒的索妮娅,在部落被灭后,拔出了一把只有“真王”才能举起的魔剑,但她是个女人。",
    "url": "./movies/movie-0566.html",
    "cover": "./116.jpg",
    "category": "家庭生活",
    "categoryUrl": "./category-family-life.html"
  },
  {
    "id": "0567",
    "title": "暹罗坟场",
    "year": "2022",
    "region": "泰国",
    "type": "电影",
    "genre": "恐怖,悬疑,惊悚",
    "tags": [
      "灵异",
      "巫术",
      "诅咒",
      "古曼童",
      "民俗"
    ],
    "oneLine": "考古专业的学生小美无意中从暹罗一个废弃坟场带走了一块刻满经文的骨牌,从此她的室友开始一个接一个诡异自杀。",
    "url": "./movies/movie-0567.html",
    "cover": "./117.jpg",
    "category": "剧集连看",
    "categoryUrl": "./category-drama-series.html"
  },
  {
    "id": "0568",
    "title": "后院活宝第一季",
    "year": "2020",
    "region": "加拿大",
    "type": "电视剧",
    "genre": "动画、儿童、喜剧",
    "tags": [
      "动物",
      "冒险",
      "想象力"
    ],
    "oneLine": "五只后院小动物脑洞大开,把人类丢弃的垃圾变成拯救世界的超级神器。",
    "url": "./movies/movie-0568.html",
    "cover": "./118.jpg",
    "category": "动作专区",
    "categoryUrl": "./category-action-zone.html"
  },
  {
    "id": "0569",
    "title": "迷恋荷尔蒙",
    "year": "2003",
    "region": "美国",
    "type": "电影",
    "genre": "剧情/爱情/犯罪",
    "tags": [
      "LGBTQ+",
      "变性人",
      "军营",
      "真实事件",
      "悲剧"
    ],
    "oneLine": "一位美丽的夜总会变性歌手,与一位年轻士兵相爱,却在军营里引发了致命的嫉妒。",
    "url": "./movies/movie-0569.html",
    "cover": "./119.jpg",
    "category": "家庭生活",
    "categoryUrl": "./category-family-life.html"
  },
  {
    "id": "0570",
    "title": "当我们做梦时",
    "year": "2025",
    "region": "中国大陆",
    "type": "电影",
    "genre": "科幻/奇幻",
    "tags": [
      "梦境",
      "共享意识",
      "悬疑爱情"
    ],
    "oneLine": "失眠者发现自己每晚都会闯入陌生人的梦里,而那人在二十年前就已死去。",
    "url": "./movies/movie-0570.html",
    "cover": "./120.jpg",
    "category": "奇幻科幻",
    "categoryUrl": "./category-fantasy-sci-fi.html"
  },
  {
    "id": "0571",
    "title": "妈妈的牵挂",
    "year": "2024",
    "region": "中国台湾",
    "type": "剧集",
    "genre": "家庭,剧情",
    "tags": [
      "亲情",
      "女性",
      "城市与乡村",
      "职场"
    ],
    "oneLine": "一名在大城市打拼的女强人因母亲生病回到乡下,却发现真正需要被治愈的是她自己。",
    "url": "./movies/movie-0571.html",
    "cover": "./121.jpg",
    "category": "经典片库",
    "categoryUrl": "./category-classic-library.html"
  },
  {
    "id": "0572",
    "title": "幸运数字斯莱文",
    "year": "2006",
    "region": "美国",
    "type": "电影",
    "genre": "剧情,惊悚,犯罪",
    "tags": [
      "反转",
      "身份错位",
      "黑色幽默",
      "宿命论",
      "杀手"
    ],
    "oneLine": "一个被误认成“斯莱文”的倒霉蛋,同时被黑帮和警方盯上,却不知道这个数字背后藏着谁的命。",
    "url": "./movies/movie-0572.html",
    "cover": "./122.jpg",
    "category": "院线热片",
    "categoryUrl": "./category-cinema-hits.html"
  },
  {
    "id": "0573",
    "title": "肉脚擂台",
    "year": "2026",
    "region": "台湾",
    "type": "电影",
    "genre": "运动喜剧",
    "tags": [
      "跆拳道",
      "中年危机",
      "废柴逆袭"
    ],
    "oneLine": "一群平均年龄45岁、被生活打垮的油腻大叔为了保住社区道馆,报名参加全国跆拳道大赛。",
    "url": "./movies/movie-0573.html",
    "cover": "./123.jpg",
    "category": "家庭生活",
    "categoryUrl": "./category-family-life.html"
  },
  {
    "id": "0574",
    "title": "在宇宙中最明亮的屋顶",
    "year": "2025",
    "region": "日本",
    "type": "电影",
    "genre": "奇幻/剧情",
    "tags": [
      "天台",
      "奇幻老婆婆",
      "夏日",
      "治愈"
    ],
    "oneLine": "少女在离家出走时发现自家天台住着一个神秘的老婆婆,老婆婆说:“我在等一个人,也等每一个需要屋顶的人。",
    "url": "./movies/movie-0574.html",
    "cover": "./124.jpg",
    "category": "经典片库",
    "categoryUrl": "./category-classic-library.html"
  },
  {
    "id": "0575",
    "title": "时凶感应",
    "year": "2011",
    "region": "中国香港",
    "type": "电影",
    "genre": "科幻/动作/警匪",
    "tags": [
      "超能力杀人",
      "时间暂停",
      "港产警匪",
      "双雄对决"
    ],
    "oneLine": "杀手可以暂停时间5秒,而唯一能察觉这5秒的,是个即将退休的老警察。",
    "url": "./movies/movie-0575.html",
    "cover": "./125.jpg",
    "category": "历史古装",
    "categoryUrl": "./category-history-costume.html"
  },
  {
    "id": "0576",
    "title": "没有国家的冠军",
    "year": "2023",
    "region": "韩国",
    "type": "电影",
    "genre": "体育,剧情",
    "tags": [
      "马拉松",
      "难民",
      "身份",
      "尊严"
    ],
    "oneLine": "一名朝鲜脱北者成为韩国马拉松冠军,却因国籍问题无法代表任何国家参赛。",
    "url": "./movies/movie-0576.html",
    "cover": "./126.jpg",
    "category": "经典片库",
    "categoryUrl": "./category-classic-library.html"
  },
  {
    "id": "0577",
    "title": "波士早晨粤语",
    "year": "2018",
    "region": "中国香港",
    "type": "剧集",
    "genre": "喜剧/职场",
    "tags": [
      "办公室政治",
      "粤语原声",
      "职场菜鸟",
      "逆袭"
    ],
    "oneLine": "全港最刻薄的女魔头上司,和一个谎报学历的底层打工人,在早班巴士上被迫成为“旅伴”。",
    "url": "./movies/movie-0577.html",
    "cover": "./127.jpg",
    "category": "全球佳作",
    "categoryUrl": "./category-global-stories.html"
  },
  {
    "id": "0578",
    "title": "邪恶的蕾丝莉",
    "year": "2024",
    "region": "美国",
    "type": "电影",
    "genre": "恐怖/心理惊悚",
    "tags": [
      "恶童",
      "寄宿家庭",
      "心理操控",
      "反转",
      "独立恐怖"
    ],
    "oneLine": "收养了一个甜美孤女后,这家人发现恐怖的不是鬼魂,而是她完美无瑕的微笑。",
    "url": "./movies/movie-0578.html",
    "cover": "./128.jpg",
    "category": "历史古装",
    "categoryUrl": "./category-history-costume.html"
  },
  {
    "id": "0579",
    "title": "机械公敌",
    "year": "2024",
    "region": "美国",
    "type": "电影",
    "genre": "科幻/动作/悬疑",
    "tags": [
      "机器人觉醒",
      "侦探推理",
      "社会寓言"
    ],
    "oneLine": "在一个机器人绝对服从人类的世界里,一个机器人被指控谋杀了它的主人,但它坚持说,这是一场“意外”。",
    "url": "./movies/movie-0579.html",
    "cover": "./129.jpg",
    "category": "全球佳作",
    "categoryUrl": "./category-global-stories.html"
  },
  {
    "id": "0580",
    "title": "花园里的萤火虫",
    "year": "2022",
    "region": "日本",
    "type": "电影",
    "genre": "动画奇幻",
    "tags": [
      "治愈系",
      "夏日回忆",
      "生死告别"
    ],
    "oneLine": "在祖母去世后的夏天,少年每晚都在废弃花园里遇见一个索取拥抱的光之少女。",
    "url": "./movies/movie-0580.html",
    "cover": "./130.jpg",
    "category": "经典片库",
    "categoryUrl": "./category-classic-library.html"
  },
  {
    "id": "0581",
    "title": "全世界最美的女孩",
    "year": "2025",
    "region": "法国/比利时",
    "type": "电影",
    "genre": "剧情/家庭",
    "tags": [
      "容貌焦虑",
      "自我认同",
      "温情治愈"
    ],
    "oneLine": "因面部胎记被霸凌的女孩,用相机拍下“最美的自己”参加全球比赛。",
    "url": "./movies/movie-0581.html",
    "cover": "./131.jpg",
    "category": "悬疑夜场",
    "categoryUrl": "./category-suspense-night.html"
  },
  {
    "id": "0582",
    "title": "一念向北之危险关系",
    "year": "2022",
    "region": "中国香港",
    "type": "电影",
    "genre": "动作,犯罪,悬疑",
    "tags": [
      "卧底",
      "兄弟情",
      "黑帮",
      "反转"
    ],
    "oneLine": "卧底警员在执行终极任务时,发现自己的亲哥哥竟是贩毒集团的幕后首脑。",
    "url": "./movies/movie-0582.html",
    "cover": "./132.jpg",
    "category": "经典片库",
    "categoryUrl": "./category-classic-library.html"
  },
  {
    "id": "0583",
    "title": "失控玩家国语",
    "year": "2021",
    "region": "美国/中国大陆(配音)",
    "type": "电影",
    "genre": "喜剧/动作/科幻",
    "tags": [
      "游戏NPC",
      "人工智能",
      "虚拟世界",
      "爆米花"
    ],
    "oneLine": "游戏里背景板银行柜员发现自己活在虚拟世界,为了拯救游戏,决定当一个BUG般的盖世英雄。",
    "url": "./movies/movie-0583.html",
    "cover": "./133.jpg",
    "category": "院线热片",
    "categoryUrl": "./category-cinema-hits.html"
  },
  {
    "id": "0584",
    "title": "奴仆时代",
    "year": "2025",
    "region": "韩国",
    "type": "剧集",
    "genre": "历史/惊悚",
    "tags": [
      "朝鲜王朝",
      "阶级",
      "复仇",
      "寄生虫隐喻",
      "反转"
    ],
    "oneLine": "朝鲜王朝末期,一名奴仆发现自己的血能治愈贵族,代价是成为永远被囚禁的“药人”。",
    "url": "./movies/movie-0584.html",
    "cover": "./134.jpg",
    "category": "全球佳作",
    "categoryUrl": "./category-global-stories.html"
  },
  {
    "id": "0585",
    "title": "颤栗时空",
    "year": "2025",
    "region": "美国",
    "type": "电影",
    "genre": "科幻,惊悚,悬疑",
    "tags": [
      "时间循环",
      "平行宇宙",
      "意识上传",
      "烧脑"
    ],
    "oneLine": "一位量子物理学家发现妻子的死亡每隔144分钟就会重置,为了找到真相,他必须不断地“杀死”妻子,再让她复活。",
    "url": "./movies/movie-0585.html",
    "cover": "./135.jpg",
    "category": "奇幻科幻",
    "categoryUrl": "./category-fantasy-sci-fi.html"
  },
  {
    "id": "0586",
    "title": "飞越篮板",
    "year": "2025",
    "region": "美国",
    "type": "电影",
    "genre": "运动,励志",
    "tags": [
      "篮球",
      "少年",
      "逆袭",
      "街头"
    ],
    "oneLine": "一个身高不足一米七的高中生,用脑子打进了全美最强街头联赛。",
    "url": "./movies/movie-0586.html",
    "cover": "./136.jpg",
    "category": "动作专区",
    "categoryUrl": "./category-action-zone.html"
  },
  {
    "id": "0587",
    "title": "初雪告白",
    "year": "2023",
    "region": "韩国",
    "type": "电影",
    "genre": "爱情/奇幻",
    "tags": [
      "纯爱",
      "时间循环",
      "遗憾",
      "治愈"
    ],
    "oneLine": "在首尔初雪那天告白的男人惨遭拒绝,却发现自己被困在了“告白前一天”的无限循环中。",
    "url": "./movies/movie-0587.html",
    "cover": "./137.jpg",
    "category": "动作专区",
    "categoryUrl": "./category-action-zone.html"
  },
  {
    "id": "0588",
    "title": "罗比·威廉姆斯",
    "year": "2023",
    "region": "英国",
    "type": "纪录片",
    "genre": "音乐/传记",
    "tags": [
      "坏小子",
      "接招合唱团",
      "摇滚乐",
      "抑郁症"
    ],
    "oneLine": "从接招团宠到万人迷再到过气笑柄,罗比·威廉姆斯亲自讲述自己的坠落与爬起。",
    "url": "./movies/movie-0588.html",
    "cover": "./138.jpg",
    "category": "热映精选",
    "categoryUrl": "./category-hot-picks.html"
  },
  {
    "id": "0589",
    "title": "反社会分子",
    "year": "2012",
    "region": "丹麦",
    "type": "电影",
    "genre": "剧情/惊悚/心理",
    "tags": [
      "反社会人格",
      "精神分析",
      "社会批判",
      "压抑"
    ],
    "oneLine": "一个被确诊为反社会人格的天才,通过精妙计算成了跨国企业的CEO,却因无法感受爱而毁灭一切。",
    "url": "./movies/movie-0589.html",
    "cover": "./139.jpg",
    "category": "家庭生活",
    "categoryUrl": "./category-family-life.html"
  },
  {
    "id": "0590",
    "title": "好事成双",
    "year": "1998",
    "region": "中国香港",
    "type": "电影",
    "genre": "喜剧,爱情",
    "tags": [
      "龙凤胎",
      "离婚父母",
      "香港喜剧"
    ],
    "oneLine": "一对离婚多年的夫妻在不知情下分别相亲,结果他们的龙凤胎孩子拼命撮合对方父母约会。",
    "url": "./movies/movie-0590.html",
    "cover": "./140.jpg",
    "category": "历史古装",
    "categoryUrl": "./category-history-costume.html"
  },
  {
    "id": "0591",
    "title": "五卢比恩仇录",
    "year": "2025",
    "region": "印度",
    "type": "电影",
    "genre": "动作,剧情",
    "tags": [
      "阶级对立",
      "复仇",
      "印式动作",
      "五卢比"
    ],
    "oneLine": "因为五卢比,富人踩碎了穷人的眼镜,二十年后,穷人带着更强的眼镜回来复仇。",
    "url": "./movies/movie-0591.html",
    "cover": "./141.jpg",
    "category": "都市爱情",
    "categoryUrl": "./category-romance-city.html"
  },
  {
    "id": "0592",
    "title": "铁观音勇破爆炸党",
    "year": "2021",
    "region": "中国香港",
    "type": "电影",
    "genre": "动作、喜剧",
    "tags": [
      "女特工",
      "复古风",
      "70年代致敬",
      "乌龙探案",
      "茶道元素"
    ],
    "oneLine": "代号“铁观音”的女特工假扮茶艺师混入黑帮,却因泡茶太好喝而被老大强行收为义女。",
    "url": "./movies/movie-0592.html",
    "cover": "./142.jpg",
    "category": "全球佳作",
    "categoryUrl": "./category-global-stories.html"
  },
  {
    "id": "0593",
    "title": "查理·布拉沃",
    "year": "2023",
    "region": "英国",
    "type": "电影",
    "genre": "战争/历史/剧情",
    "tags": [
      "福克兰战争",
      "军事法庭",
      "真实事件改编",
      "人性"
    ],
    "oneLine": "福克兰战争中被英军处决的阿根廷士兵,三十年后被翻案,牵出高层掩盖。",
    "url": "./movies/movie-0593.html",
    "cover": "./143.jpg",
    "category": "院线热片",
    "categoryUrl": "./category-cinema-hits.html"
  },
  {
    "id": "0594",
    "title": "时空悍将",
    "year": "2027",
    "region": "美国",
    "type": "电影",
    "genre": "动作/科幻/惊悚",
    "tags": [
      "时间警察",
      "悖论杀手",
      "跨时空追捕",
      "蝴蝶效应"
    ],
    "oneLine": "一个来自未来的时间警察追捕改变历史的杀手,却发现杀手是年老的自己,而目标是为妻女复仇。",
    "url": "./movies/movie-0594.html",
    "cover": "./144.jpg",
    "category": "剧集连看",
    "categoryUrl": "./category-drama-series.html"
  },
  {
    "id": "0595",
    "title": "曼谷复仇",
    "year": "2026",
    "region": "泰国",
    "type": "电影",
    "genre": "动作/犯罪/惊悚",
    "tags": [
      "泰拳",
      "复仇",
      "暗网"
    ],
    "oneLine": "为了救出被拐卖的女儿,一名哑巴清洁工重拾泰拳,打穿曼谷地下的人口贩卖网络。",
    "url": "./movies/movie-0595.html",
    "cover": "./145.jpg",
    "category": "全球佳作",
    "categoryUrl": "./category-global-stories.html"
  },
  {
    "id": "0596",
    "title": "小龙虾游山庄",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "genre": "剧情,家庭",
    "tags": [
      "留守儿童",
      "暑假",
      "农村消亡"
    ],
    "oneLine": "十岁男孩被送回即将拆迁的江西山村过暑假,他发现山庄里最后一户邻居,是一只会用钳子画画的小龙虾。",
    "url": "./movies/movie-0596.html",
    "cover": "./146.jpg",
    "category": "院线热片",
    "categoryUrl": "./category-cinema-hits.html"
  },
  {
    "id": "0597",
    "title": "秋田",
    "year": "2024",
    "region": "日本",
    "type": "电影",
    "genre": "剧情/家庭",
    "tags": [
      "犬",
      "失物",
      "散步",
      "人生"
    ],
    "oneLine": "退休的中学教师带着亡妻留下的秋田犬,用五年时间走遍了整个日本,只为寻找当初答应过妻子要一起去看的“最后一处风景”。",
    "url": "./movies/movie-0597.html",
    "cover": "./147.jpg",
    "category": "都市爱情",
    "categoryUrl": "./category-romance-city.html"
  },
  {
    "id": "0598",
    "title": "冷月寒秋",
    "year": "2024",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "家庭,悬疑",
    "tags": [
      "年代",
      "情感",
      "复仇",
      "遗产",
      "秘密"
    ],
    "oneLine": "1999年深秋,一位被家族除名的女儿带着母亲的骨灰回到江南老宅,却发现每个人都在等她死。",
    "url": "./movies/movie-0598.html",
    "cover": "./148.jpg",
    "category": "历史古装",
    "categoryUrl": "./category-history-costume.html"
  },
  {
    "id": "0599",
    "title": "皮罗斯马尼",
    "year": "2023",
    "region": "格鲁吉亚",
    "type": "电影",
    "genre": "传记",
    "tags": [
      "艺术家",
      "朴素派",
      "饥饿",
      "孤独"
    ],
    "oneLine": "格鲁吉亚原始派画家皮罗斯马尼靠给餐馆画动物招牌维生,他最后的画布是一面被雨冲刷的墙。",
    "url": "./movies/movie-0599.html",
    "cover": "./149.jpg",
    "category": "都市爱情",
    "categoryUrl": "./category-romance-city.html"
  },
  {
    "id": "0600",
    "title": "勿忘我1982",
    "year": "2023",
    "region": "法国",
    "type": "电影",
    "genre": "爱情,剧情,怀旧",
    "tags": [
      "初恋",
      "磁带",
      "寻找",
      "八十年代"
    ],
    "oneLine": "40年后,在一盘老旧磁带里发现了一段从未寄出的告白,老人决定寻找当年的笔友。",
    "url": "./movies/movie-0600.html",
    "cover": "./150.jpg",
    "category": "奇幻科幻",
    "categoryUrl": "./category-fantasy-sci-fi.html"
  },
  {
    "id": "0601",
    "title": "王的男人",
    "year": "2025",
    "region": "韩国",
    "type": "电影",
    "genre": "剧情,古装,同性",
    "tags": [
      "宫廷弄臣",
      "权力博弈",
      "虐恋"
    ],
    "oneLine": "暴君身边最受宠的弄臣,其实是他失散多年的孪生兄弟。",
    "url": "./movies/movie-0601.html",
    "cover": "./1.jpg",
    "category": "都市爱情",
    "categoryUrl": "./category-romance-city.html"
  },
  {
    "id": "0602",
    "title": "红苹果的欲望",
    "year": "2025",
    "region": "土耳其",
    "type": "剧集",
    "genre": "悬疑/爱情",
    "tags": [
      "禁忌恋",
      "复仇",
      "宿命"
    ],
    "oneLine": "每个月的14号,她都会收到一颗红苹果,已经持续了十五年,寄件人是一个她亲手送进监狱的男人。",
    "url": "./movies/movie-0602.html",
    "cover": "./2.jpg",
    "category": "奇幻科幻",
    "categoryUrl": "./category-fantasy-sci-fi.html"
  },
  {
    "id": "0603",
    "title": "地球四季",
    "year": "2025",
    "region": "法国/德国",
    "type": "纪录片",
    "genre": "纪录片,自然",
    "tags": [
      "气候变化",
      "动物迁徙",
      "生态"
    ],
    "oneLine": "从一只北极熊的视角,看地球四季如何在一百年间被彻底改写。",
    "url": "./movies/movie-0603.html",
    "cover": "./3.jpg",
    "category": "历史古装",
    "categoryUrl": "./category-history-costume.html"
  },
  {
    "id": "0604",
    "title": "海鲜",
    "year": "2018",
    "region": "中国大陆",
    "type": "电影",
    "genre": "剧情",
    "tags": [
      "底层叙事",
      "黑色幽默",
      "沿海"
    ],
    "oneLine": "一个欠债逃亡的赌徒躲进海边小镇,却发现自己即将成为一道“特供海鲜”的主料。",
    "url": "./movies/movie-0604.html",
    "cover": "./4.jpg",
    "category": "剧集连看",
    "categoryUrl": "./category-drama-series.html"
  },
  {
    "id": "0605",
    "title": "搏击迷城",
    "year": "2019",
    "region": "中国大陆",
    "type": "电影",
    "genre": "动作、体育",
    "tags": [
      "格斗",
      "VR",
      "犯罪",
      "黑拳",
      "悬疑"
    ],
    "oneLine": "落魄拳手收到一款神秘VR设备,戴上后能在虚拟擂台上与已故的搏击传奇对决。",
    "url": "./movies/movie-0605.html",
    "cover": "./5.jpg",
    "category": "奇幻科幻",
    "categoryUrl": "./category-fantasy-sci-fi.html"
  },
  {
    "id": "0606",
    "title": "哈佛少女的快乐清单",
    "year": "2024",
    "region": "美国",
    "type": "电影",
    "genre": "青春喜剧",
    "tags": [
      "学霸",
      "叛逆",
      "遗愿清单",
      "成长"
    ],
    "oneLine": "哈佛东亚研究专业的完美学霸,被确诊只剩半年生命后,列出了一份“不快乐就去死”清单。",
    "url": "./movies/movie-0606.html",
    "cover": "./6.jpg",
    "category": "都市爱情",
    "categoryUrl": "./category-romance-city.html"
  },
  {
    "id": "0607",
    "title": "小脚板走天涯4",
    "year": "1996",
    "region": "美国",
    "type": "动画电影",
    "genre": "冒险,家庭,音乐",
    "tags": [
      "恐龙",
      "寻亲",
      "成长"
    ],
    "oneLine": "为了寻找传说中的“光明谷”,小脚板带着朋友们闯入了充满巨型昆虫的迷雾森林。",
    "url": "./movies/movie-0607.html",
    "cover": "./7.jpg",
    "category": "奇幻科幻",
    "categoryUrl": "./category-fantasy-sci-fi.html"
  },
  {
    "id": "0608",
    "title": "国庆十点钟",
    "year": "1956",
    "region": "中国大陆",
    "type": "电影",
    "genre": "悬疑/反特",
    "tags": [
      "黑白片",
      "经典反特",
      "国庆节",
      "时间炸弹"
    ],
    "oneLine": "1956年国庆前,特务将定时炸弹藏在游行花车里,准备在国庆十点钟引爆。",
    "url": "./movies/movie-0608.html",
    "cover": "./8.jpg",
    "category": "奇幻科幻",
    "categoryUrl": "./category-fantasy-sci-fi.html"
  },
  {
    "id": "0609",
    "title": "营",
    "year": "2023",
    "region": "中国",
    "type": "电影",
    "genre": "动作/灾难",
    "tags": [
      "地震",
      "救援队",
      "兄弟"
    ],
    "oneLine": "曾是消防员的弟弟为救被困废墟的亲哥,单枪匹马对抗余震与时间。",
    "url": "./movies/movie-0609.html",
    "cover": "./9.jpg",
    "category": "青春喜剧",
    "categoryUrl": "./category-youth-comedy.html"
  },
  {
    "id": "0610",
    "title": "转捩一刻",
    "year": "2023",
    "region": "德国",
    "type": "电影",
    "genre": "惊悚,剧情",
    "tags": [
      "时间线",
      "平行宇宙",
      "蝴蝶效应",
      "高概念"
    ],
    "oneLine": "一个小小的U盘可以让使用者回到过去10秒,但这短暂瞬间的改动,引发了毁灭性的连锁反应。",
    "url": "./movies/movie-0610.html",
    "cover": "./10.jpg",
    "category": "都市爱情",
    "categoryUrl": "./category-romance-city.html"
  },
  {
    "id": "0611",
    "title": "老手2",
    "year": "2022",
    "region": "韩国",
    "type": "电影",
    "genre": "动作,犯罪",
    "tags": [
      "刑警",
      "暴力",
      "爽片"
    ],
    "oneLine": "传奇刑警徐道哲遇到了一位神秘蒙面义警,此人总在他之前抓住罪犯,并将尸体用红绳吊在警察厅门口。",
    "url": "./movies/movie-0611.html",
    "cover": "./11.jpg",
    "category": "全球佳作",
    "categoryUrl": "./category-global-stories.html"
  },
  {
    "id": "0612",
    "title": "五个朋友3",
    "year": "2024",
    "region": "英国",
    "type": "电影",
    "genre": "冒险,儿童,悬疑",
    "tags": [
      "少年侦探",
      "暑假冒险",
      "古堡谜案",
      "系列续集"
    ],
    "oneLine": "五个少年收到一封来自未来的求救信,寄件人是 60 年后的他们自己。",
    "url": "./movies/movie-0612.html",
    "cover": "./12.jpg",
    "category": "经典片库",
    "categoryUrl": "./category-classic-library.html"
  },
  {
    "id": "0613",
    "title": "中国蓝盔",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "genre": "动作/战争",
    "tags": [
      "维和部队",
      "海外任务",
      "战地救援"
    ],
    "oneLine": "一支中国维和工兵连在非洲某国执行修路任务时,意外卷入一场针对难民营的武装袭击。",
    "url": "./movies/movie-0613.html",
    "cover": "./13.jpg",
    "category": "全球佳作",
    "categoryUrl": "./category-global-stories.html"
  },
  {
    "id": "0614",
    "title": "鸟瞰万里长城",
    "year": "2025",
    "region": "英国,中国",
    "type": "纪录片",
    "genre": "纪录片,历史,自然",
    "tags": [
      "航拍",
      "无人机",
      "遗产"
    ],
    "oneLine": "首次全程无人机跟拍,揭示长城不为人知的废弃与重生。",
    "url": "./movies/movie-0614.html",
    "cover": "./14.jpg",
    "category": "家庭生活",
    "categoryUrl": "./category-family-life.html"
  },
  {
    "id": "0615",
    "title": "切罗基大街的房子",
    "year": "2023",
    "region": "美国",
    "type": "电影",
    "genre": "恐怖",
    "tags": [
      "诅咒物品",
      "家庭创伤",
      "仪式"
    ],
    "oneLine": "一户家庭搬进百年老宅后,发现房子里每一件物品都被前主人“许愿”过,而实现愿望的代价是寿命。",
    "url": "./movies/movie-0615.html",
    "cover": "./15.jpg",
    "category": "都市爱情",
    "categoryUrl": "./category-romance-city.html"
  },
  {
    "id": "0616",
    "title": "繁花",
    "year": "2024",
    "region": "中国",
    "type": "剧集",
    "genre": "剧情/爱情",
    "tags": [
      "年代质感",
      "商战博弈",
      "女性群像",
      "沪上风情"
    ],
    "oneLine": "上世纪九十年代的上海滩,三个性格迥异的女人在一场外贸饭局上轮流按住了同一个男人的打火机。",
    "url": "./movies/movie-0616.html",
    "cover": "./16.jpg",
    "category": "青春喜剧",
    "categoryUrl": "./category-youth-comedy.html"
  },
  {
    "id": "0617",
    "title": "炼体十万层:都市篇第四季",
    "year": "2025",
    "region": "中国大陆",
    "type": "网络动画",
    "genre": "奇幻,动作",
    "tags": [
      "修仙",
      "都市",
      "逆袭",
      "热血",
      "龙傲天"
    ],
    "oneLine": "最强体修回归都市,发现他的宿敌已被困在地球成为外卖员。",
    "url": "./movies/movie-0617.html",
    "cover": "./17.jpg",
    "category": "历史古装",
    "categoryUrl": "./category-history-costume.html"
  },
  {
    "id": "0618",
    "title": "正义雇佣兵",
    "year": "2025",
    "region": "美国",
    "type": "剧集",
    "genre": "动作,犯罪",
    "tags": [
      "赏金猎人",
      "黑色幽默",
      "以暴制暴",
      "单元剧"
    ],
    "oneLine": "一支由前特种兵、黑客、骗子和小偷组成的非法团队,专接法律管不了的单子,执行“性价比最高”的正义。",
    "url": "./movies/movie-0618.html",
    "cover": "./18.jpg",
    "category": "历史古装",
    "categoryUrl": "./category-history-costume.html"
  },
  {
    "id": "0619",
    "title": "圣诞电影",
    "year": "2024",
    "region": "美国",
    "type": "电影",
    "genre": "喜剧/爱情/节日",
    "tags": [
      "元电影",
      "反套路",
      "圣诞",
      "打脸"
    ],
    "oneLine": "一个不信圣诞电影的毒舌影评人,被困进了自己最讨厌的圣诞电影里。",
    "url": "./movies/movie-0619.html",
    "cover": "./19.jpg",
    "category": "动作专区",
    "categoryUrl": "./category-action-zone.html"
  },
  {
    "id": "0620",
    "title": "报应",
    "year": "2022",
    "region": "美国",
    "type": "电影",
    "genre": "惊悚,悬疑,恐怖",
    "tags": [
      "复仇",
      "超自然",
      "心理扭曲",
      "宗教元素"
    ],
    "oneLine": "牧师戴维德在拒绝了一名神秘女子的忏悔后,身边亲友开始按照《圣经》中的十灾顺序接连暴毙。",
    "url": "./movies/movie-0620.html",
    "cover": "./20.jpg",
    "category": "家庭生活",
    "categoryUrl": "./category-family-life.html"
  },
  {
    "id": "0621",
    "title": "那年同学之初恋时光",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "genre": "爱情、青春",
    "tags": [
      "校园",
      "暗恋",
      "遗憾",
      "同学会"
    ],
    "oneLine": "毕业十年后的同学会上,所有人都以为学霸和校花会在一起,但他们带来了截然不同的另一半。",
    "url": "./movies/movie-0621.html",
    "cover": "./21.jpg",
    "category": "全球佳作",
    "categoryUrl": "./category-global-stories.html"
  },
  {
    "id": "0622",
    "title": "万恶城市",
    "year": "2005",
    "region": "美国",
    "type": "电影",
    "genre": "动作/犯罪/惊悚",
    "tags": [
      "黑色电影",
      "暴力美学",
      "黑白影调",
      "漫画改编",
      "群像叙事"
    ],
    "oneLine": "在这座被腐败和暴力浸透的盆地城,一名即将退休的老警察、一个刚出狱的巨汉和一个整容过的妓女,都盯上了同一个人。",
    "url": "./movies/movie-0622.html",
    "cover": "./22.jpg",
    "category": "全球佳作",
    "categoryUrl": "./category-global-stories.html"
  },
  {
    "id": "0623",
    "title": "乘风2025",
    "year": "2025",
    "region": "中国大陆",
    "type": "综艺/真人秀",
    "genre": "音乐/竞技/真人秀",
    "tags": [
      "姐姐",
      "舞台竞演",
      "女性成长",
      "全息舞台"
    ],
    "oneLine": "三十位来自不同领域的姐姐集结,但这一季的最大噱头是:每位姐姐都配有一位AI分身,两队在同一舞台对决,分不清真人还是代码。",
    "url": "./movies/movie-0623.html",
    "cover": "./23.jpg",
    "category": "院线热片",
    "categoryUrl": "./category-cinema-hits.html"
  },
  {
    "id": "0624",
    "title": "年度人物",
    "year": "2006",
    "region": "美国",
    "type": "电影",
    "genre": "喜剧/剧情",
    "tags": [
      "政治讽刺",
      "脱口秀",
      "媒体",
      "选举",
      "罗宾·威廉姆斯"
    ],
    "oneLine": "政治脱口秀主持人恶搞竞选总统,竟然真的赢了,然后发现计票机器被动了手脚。",
    "url": "./movies/movie-0624.html",
    "cover": "./24.jpg",
    "category": "都市爱情",
    "categoryUrl": "./category-romance-city.html"
  },
  {
    "id": "0625",
    "title": "水栖家族",
    "year": "2025",
    "region": "美国",
    "type": "电影",
    "genre": "科幻惊悚",
    "tags": [
      "基因改造",
      "水下殖民",
      "家庭伦理",
      "生存危机"
    ],
    "oneLine": "一个为深海殖民而基因改造的家庭,发现孩子的变异能力远超出父母的掌控。",
    "url": "./movies/movie-0625.html",
    "cover": "./25.jpg",
    "category": "家庭生活",
    "categoryUrl": "./category-family-life.html"
  },
  {
    "id": "0626",
    "title": "敌军",
    "year": "2025",
    "region": "俄罗斯",
    "type": "电影",
    "genre": "战争剧情",
    "tags": [
      "二战",
      "战俘",
      "人性",
      "德军",
      "反转"
    ],
    "oneLine": "苏联女军医在战场救下一名德国伤兵,三个月后她沦为战俘,审讯她的正是那个被她救过的人。",
    "url": "./movies/movie-0626.html",
    "cover": "./26.jpg",
    "category": "历史古装",
    "categoryUrl": "./category-history-costume.html"
  },
  {
    "id": "0627",
    "title": "权欲第三章第三季",
    "year": "2024",
    "region": "美国",
    "type": "TV剧集",
    "genre": "犯罪,剧情,悬疑",
    "tags": [
      "黑帮",
      "权力游戏",
      "复仇",
      "限制级"
    ],
    "oneLine": "汤米的复仇怒火烧向芝加哥,却发现旧日盟友早已背叛了他的血液。",
    "url": "./movies/movie-0627.html",
    "cover": "./27.jpg",
    "category": "都市爱情",
    "categoryUrl": "./category-romance-city.html"
  },
  {
    "id": "0628",
    "title": "镜像迷踪",
    "year": "2023",
    "region": "中国大陆",
    "type": "电影",
    "genre": "悬疑,科幻,剧情",
    "tags": [
      "平行宇宙",
      "镜像",
      "自我救赎",
      "烧脑",
      "心理"
    ],
    "oneLine": "物理老师发现家中镜子出现另一个自己的求救信号,从此陷入现实与镜像世界交织的生死谜局。",
    "url": "./movies/movie-0628.html",
    "cover": "./28.jpg",
    "category": "奇幻科幻",
    "categoryUrl": "./category-fantasy-sci-fi.html"
  },
  {
    "id": "0629",
    "title": "林荫路825号",
    "year": "2017",
    "region": "美国",
    "type": "电影",
    "genre": "恐怖/密室",
    "tags": [
      "凶宅",
      "直播",
      "集体幻觉"
    ],
    "oneLine": "六个网红被关进美国最凶的鬼屋直播,在线人数破亿,但屏幕里开始出现他们的死亡倒计时。",
    "url": "./movies/movie-0629.html",
    "cover": "./29.jpg",
    "category": "悬疑夜场",
    "categoryUrl": "./category-suspense-night.html"
  },
  {
    "id": "0630",
    "title": "企鹅之岛:福克兰",
    "year": "2024",
    "region": "英国",
    "type": "电影",
    "genre": "纪录片/剧情/冒险",
    "tags": [
      "自然",
      "动物",
      "探险",
      "生存"
    ],
    "oneLine": "在南大西洋的暴风雪中,一只名为“老派”的雄性企鹅为了给伴侣寻找食物,必须穿过海狮的狩猎场。",
    "url": "./movies/movie-0630.html",
    "cover": "./30.jpg",
    "category": "全球佳作",
    "categoryUrl": "./category-global-stories.html"
  },
  {
    "id": "0631",
    "title": "蝗虫之日",
    "year": "2025",
    "region": "美国",
    "type": "电影",
    "genre": "剧情、惊悚",
    "tags": [
      "好莱坞",
      "群氓",
      "阶级复仇"
    ],
    "oneLine": "1930年代好莱坞,一名失业建筑师和一名逐梦女演员,亲历一场电影片场事故如何演变成真实的“蝗虫式”暴乱。",
    "url": "./movies/movie-0631.html",
    "cover": "./31.jpg",
    "category": "历史古装",
    "categoryUrl": "./category-history-costume.html"
  },
  {
    "id": "0632",
    "title": "伤痕累累",
    "year": "2025",
    "region": "美国",
    "type": "电影",
    "genre": "体育、剧情",
    "tags": [
      "格斗",
      "女性",
      "救赎",
      "暴力",
      "母女"
    ],
    "oneLine": "一名过气的女格斗选手,为了夺回女儿的抚养权,必须拖着一身旧伤重返血腥的地下拳场。",
    "url": "./movies/movie-0632.html",
    "cover": "./32.jpg",
    "category": "院线热片",
    "categoryUrl": "./category-cinema-hits.html"
  },
  {
    "id": "0633",
    "title": "鲁冰花",
    "year": "2023",
    "region": "中国台湾",
    "type": "电影",
    "genre": "剧情/家庭",
    "tags": [
      "乡村教育",
      "绘画",
      "催泪经典翻拍"
    ],
    "oneLine": "偏远茶乡的代课老师发现一个从不说话的女孩,能用鲁冰花的花瓣拼出惊人画作。",
    "url": "./movies/movie-0633.html",
    "cover": "./33.jpg",
    "category": "都市爱情",
    "categoryUrl": "./category-romance-city.html"
  },
  {
    "id": "0634",
    "title": "霍姆斯之雨",
    "year": "2016",
    "region": "英国",
    "type": "电影",
    "genre": "悬疑/犯罪",
    "tags": [
      "福尔摩斯",
      "硬核推理",
      "暴风雪山庄",
      "致敬经典",
      "反转凶犯"
    ],
    "oneLine": "福尔摩斯退休后被一封信引入雨夜庄园,而庄园里的每个客人,都是他亲手送进监狱者的家属。",
    "url": "./movies/movie-0634.html",
    "cover": "./34.jpg",
    "category": "热映精选",
    "categoryUrl": "./category-hot-picks.html"
  },
  {
    "id": "0635",
    "title": "生日快乐",
    "year": "2024",
    "region": "中国香港",
    "type": "电影",
    "genre": "爱情/悬疑/剧情",
    "tags": [
      "生日诅咒",
      "时间循环",
      "港风"
    ],
    "oneLine": "她的每一任男友都在她生日当天意外死亡,而今年生日前三小时,她遇到了一个同样能看见“死亡倒计时”的男人。",
    "url": "./movies/movie-0635.html",
    "cover": "./35.jpg",
    "category": "全球佳作",
    "categoryUrl": "./category-global-stories.html"
  },
  {
    "id": "0636",
    "title": "面具圣徒",
    "year": "2024",
    "region": "西班牙",
    "type": "剧集",
    "genre": "动作/冒险",
    "tags": [
      "蒙面英雄",
      "宗教符号",
      "西班牙历史",
      "复仇者联盟式组队"
    ],
    "oneLine": "塞维利亚圣周游行中,四副古老面具被盗,四位看似普通的信徒被选中成为新一代“面具圣徒”。",
    "url": "./movies/movie-0636.html",
    "cover": "./36.jpg",
    "category": "奇幻科幻",
    "categoryUrl": "./category-fantasy-sci-fi.html"
  },
  {
    "id": "0637",
    "title": "蓝调的诞生",
    "year": "2025",
    "region": "美国",
    "type": "电影/剧集",
    "genre": "音乐,剧情,历史",
    "tags": [
      "音乐传记",
      "种族歧视",
      "黑奴历史",
      "蓝调音乐",
      "吉他"
    ],
    "oneLine": "一个叫“铅肚皮”的黑人囚犯,在密西西比的监狱里,用一把破吉他创造了改变世界的声音。",
    "url": "./movies/movie-0637.html",
    "cover": "./37.jpg",
    "category": "经典片库",
    "categoryUrl": "./category-classic-library.html"
  },
  {
    "id": "0638",
    "title": "无罪辩护",
    "year": "2026",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "律政/悬疑/犯罪",
    "tags": [
      "冤案",
      "师徒",
      "心理博弈",
      "单元+主线"
    ],
    "oneLine": "一个专为死刑犯做无罪辩护的律师,发现自己辩护的最后一位当事人,就是当年冤枉他师父的真凶。",
    "url": "./movies/movie-0638.html",
    "cover": "./38.jpg",
    "category": "奇幻科幻",
    "categoryUrl": "./category-fantasy-sci-fi.html"
  },
  {
    "id": "0639",
    "title": "加油喜事",
    "year": "2022",
    "region": "中国台湾",
    "type": "电视剧",
    "genre": "家庭喜剧",
    "tags": [
      "婚礼",
      "乌龙",
      "两代矛盾",
      "和解"
    ],
    "oneLine": "一场婚礼上,三家父辈突然打了起来,才发现新郎新娘其实是失散多年的兄妹。",
    "url": "./movies/movie-0639.html",
    "cover": "./39.jpg",
    "category": "悬疑夜场",
    "categoryUrl": "./category-suspense-night.html"
  },
  {
    "id": "0640",
    "title": "借着雨点说爱你",
    "year": "2023",
    "region": "日本",
    "type": "电影",
    "genre": "爱情/奇幻/催泪",
    "tags": [
      "人鬼情未了",
      "雨季限定",
      "纯爱天花板",
      "遗言反转",
      "纸巾备足"
    ],
    "oneLine": "妻子去世前留下遗言“下一个雨季我会回来”,一年后雨季开始,她真的撑着伞站在家门口。",
    "url": "./movies/movie-0640.html",
    "cover": "./40.jpg",
    "category": "热映精选",
    "categoryUrl": "./category-hot-picks.html"
  },
  {
    "id": "0641",
    "title": "加油吧威基基",
    "year": "2024",
    "region": "韩国",
    "type": "剧集",
    "genre": "喜剧",
    "tags": [
      "民宿",
      "梦想",
      "爆笑",
      "友情"
    ],
    "oneLine": "三个一事无成的电影系毕业生,为了挽救濒临倒闭的民宿“威基基”,上演了一出出啼笑皆非的荒诞闹剧。",
    "url": "./movies/movie-0641.html",
    "cover": "./41.jpg",
    "category": "热映精选",
    "categoryUrl": "./category-hot-picks.html"
  },
  {
    "id": "0642",
    "title": "普通的故事",
    "year": "2026",
    "region": "中国",
    "type": "电影",
    "genre": "剧情,家庭",
    "tags": [
      "现实主义",
      "日常生活",
      "亲情",
      "生老病死",
      "静水流深"
    ],
    "oneLine": "一个普通中年男人,在父亲去世、女儿叛逆、自己失业的这一年,学会了如何说“不”。",
    "url": "./movies/movie-0642.html",
    "cover": "./42.jpg",
    "category": "动作专区",
    "categoryUrl": "./category-action-zone.html"
  },
  {
    "id": "0643",
    "title": "饿死你的狗",
    "year": "2025",
    "region": "美国",
    "type": "电影",
    "genre": "惊悚,心理恐怖",
    "tags": [
      "家庭入侵",
      "反转",
      "暴力",
      "密室"
    ],
    "oneLine": "富商豪宅被闯入,歹徒不要钱只要命,但他们不知道,这家的宠物狗才是真正的恶魔。",
    "url": "./movies/movie-0643.html",
    "cover": "./43.jpg",
    "category": "悬疑夜场",
    "categoryUrl": "./category-suspense-night.html"
  },
  {
    "id": "0644",
    "title": "战勇。第一季",
    "year": "2024",
    "region": "日本",
    "type": "动漫",
    "genre": "冒险,喜剧,奇幻",
    "tags": [
      "勇者",
      "搞笑",
      "吐槽"
    ],
    "oneLine": "废柴勇者与抖S战士奉旨讨伐魔王,然而魔王早就被打败了,这趟旅程只是国王为了削减财政支出的阴谋?",
    "url": "./movies/movie-0644.html",
    "cover": "./44.jpg",
    "category": "热映精选",
    "categoryUrl": "./category-hot-picks.html"
  },
  {
    "id": "0645",
    "title": "大追杀",
    "year": "1989",
    "region": "中国香港",
    "type": "电影",
    "genre": "动作,犯罪,惊悚",
    "tags": [
      "江湖恩仇",
      "双雄宿命",
      "港式暴力美学",
      "末世感"
    ],
    "oneLine": "即将回归前夜,一名杀手被自己培养的徒弟追杀,两人从旺角一路杀到中环。",
    "url": "./movies/movie-0645.html",
    "cover": "./45.jpg",
    "category": "剧集连看",
    "categoryUrl": "./category-drama-series.html"
  },
  {
    "id": "0646",
    "title": "起立,老师好!",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "genre": "剧情/喜剧",
    "tags": [
      "教育",
      "逆袭",
      "师生情",
      "燃"
    ],
    "oneLine": "一个被全校放弃的“差班”,迎来了一个只会念教案的“书呆子”老师。",
    "url": "./movies/movie-0646.html",
    "cover": "./46.jpg",
    "category": "经典片库",
    "categoryUrl": "./category-classic-library.html"
  },
  {
    "id": "0647",
    "title": "潘金莲复仇记",
    "year": "2025",
    "region": "中国大陆",
    "type": "电影",
    "genre": "黑色喜剧,古装",
    "tags": [
      "女性觉醒",
      "逆袭",
      "重塑经典"
    ],
    "oneLine": "被武松打死后的潘金莲意外重生,她发誓这一世不再当任何人的棋子。",
    "url": "./movies/movie-0647.html",
    "cover": "./47.jpg",
    "category": "全球佳作",
    "categoryUrl": "./category-global-stories.html"
  },
  {
    "id": "0648",
    "title": "插翅难飞2025",
    "year": "2025",
    "region": "美国",
    "type": "电影",
    "genre": "动作,惊悚,犯罪",
    "tags": [
      "劫机",
      "密闭空间",
      "特工",
      "反转"
    ],
    "oneLine": "一架飞往纽约的客机上,空警发现乘客里混入了多名杀手,而他们的目标竟是无辜的邻座女孩。",
    "url": "./movies/movie-0648.html",
    "cover": "./48.jpg",
    "category": "历史古装",
    "categoryUrl": "./category-history-costume.html"
  },
  {
    "id": "0649",
    "title": "榄不住的爱",
    "year": "2022",
    "region": "中国大陆",
    "type": "电影",
    "genre": "剧情/运动/家庭",
    "tags": [
      "橄榄球",
      "留守儿童",
      "体育励志",
      "乡村教育",
      "真实改编"
    ],
    "oneLine": "云南大山里,留守儿童组成的橄榄球队,唯一的训练器材是老师用旧衣服缝的“布橄榄”。",
    "url": "./movies/movie-0649.html",
    "cover": "./49.jpg",
    "category": "历史古装",
    "categoryUrl": "./category-history-costume.html"
  },
  {
    "id": "0650",
    "title": "帕梅拉·曼的私密午后",
    "year": "2003",
    "region": "英国",
    "type": "电影",
    "genre": "剧情/情色/心理",
    "tags": [
      "中产阶级",
      "出轨",
      "女性欲望"
    ],
    "oneLine": "伦敦郊区家庭主妇帕梅拉每周三下午去酒店开房,不是为了偷情,而是为了假装自己是一个不是主妇的女人。",
    "url": "./movies/movie-0650.html",
    "cover": "./50.jpg",
    "category": "家庭生活",
    "categoryUrl": "./category-family-life.html"
  },
  {
    "id": "0651",
    "title": "玫瑰园",
    "year": "2026",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "悬疑/家庭/年代",
    "tags": [
      "凶宅",
      "家族秘密",
      "文革"
    ],
    "oneLine": "一座荒废了四十年的玫瑰园重新挂牌出售,每一位走进去的看房客,都声称看到了同一个穿红裙子的女孩。",
    "url": "./movies/movie-0651.html",
    "cover": "./51.jpg",
    "category": "悬疑夜场",
    "categoryUrl": "./category-suspense-night.html"
  },
  {
    "id": "0652",
    "title": "青草",
    "year": "2018",
    "region": "韩国",
    "type": "电影",
    "genre": "剧情/文艺",
    "tags": [
      "慢电影",
      "女性独白",
      "散文诗"
    ],
    "oneLine": "一家咖啡馆里形形色色的女人们,用碎片对话拼出时代悲欢。",
    "url": "./movies/movie-0652.html",
    "cover": "./52.jpg",
    "category": "全球佳作",
    "categoryUrl": "./category-global-stories.html"
  },
  {
    "id": "0653",
    "title": "天才宝弟的狗日子",
    "year": "2024",
    "region": "中国台湾",
    "type": "剧集",
    "genre": "家庭/喜剧",
    "tags": [
      "神童",
      "二胎家庭",
      "童年烦恼",
      "姐弟关系",
      "温馨搞笑"
    ],
    "oneLine": "一个智商145的七岁小孩唯一解不出的难题是:怎么让姐姐不讨厌自己。",
    "url": "./movies/movie-0653.html",
    "cover": "./53.jpg",
    "category": "青春喜剧",
    "categoryUrl": "./category-youth-comedy.html"
  },
  {
    "id": "0654",
    "title": "恶魔咆哮2",
    "year": "2024",
    "region": "美国",
    "type": "电影",
    "genre": "恐怖、奇幻、动作",
    "tags": [
      "恶魔附身",
      "神器争夺",
      "末日审判",
      "反套路"
    ],
    "oneLine": "拥有神秘学博士学位的恶魔“咆哮”被意外召唤到人间,却发现人类早已不信恶魔,而是想把它关进直播间当网红。",
    "url": "./movies/movie-0654.html",
    "cover": "./54.jpg",
    "category": "青春喜剧",
    "categoryUrl": "./category-youth-comedy.html"
  },
  {
    "id": "0655",
    "title": "女真珠王",
    "year": "2024",
    "region": "韩国",
    "type": "剧集",
    "genre": "爱情,商战,历史",
    "tags": [
      "朝鲜",
      "珍珠",
      "复仇"
    ],
    "oneLine": "朝鲜时代唯一的女巨商,她掌控了东亚珍珠贸易命脉,却不知道每晚睡在身边的丈夫,是来抄家的暗行御史。",
    "url": "./movies/movie-0655.html",
    "cover": "./55.jpg",
    "category": "历史古装",
    "categoryUrl": "./category-history-costume.html"
  },
  {
    "id": "0656",
    "title": "迟来的春天",
    "year": "2020",
    "region": "日本",
    "type": "电影",
    "genre": "剧情/爱情",
    "tags": [
      "黄昏恋",
      "北海道",
      "小樽",
      "错过",
      "重逢"
    ],
    "oneLine": "四十年后,一对曾经的恋人在小樽的雪地里重逢,彼此都已白发苍苍。",
    "url": "./movies/movie-0656.html",
    "cover": "./56.jpg",
    "category": "热映精选",
    "categoryUrl": "./category-hot-picks.html"
  },
  {
    "id": "0657",
    "title": "赌命运转手",
    "year": "2025",
    "region": "中国香港",
    "type": "电影",
    "genre": "犯罪,剧情",
    "tags": [
      "老千",
      "温情",
      "救赎"
    ],
    "oneLine": "身患绝症的老千宗师决定金盆洗手,但徒弟设局害死了他女儿,他要用最后一个月生命完成一场赌命骗局。",
    "url": "./movies/movie-0657.html",
    "cover": "./57.jpg",
    "category": "都市爱情",
    "categoryUrl": "./category-romance-city.html"
  },
  {
    "id": "0658",
    "title": "后宫太子妃",
    "year": "2025",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "古装甜宠",
    "tags": [
      "穿越",
      "宫斗",
      "女强",
      "反套路",
      "喜剧"
    ],
    "oneLine": "现代女总裁穿成懦弱太子妃,她不争宠不宫斗,反而在皇宫里搞起了商业垄断和股权改革。",
    "url": "./movies/movie-0658.html",
    "cover": "./58.jpg",
    "category": "家庭生活",
    "categoryUrl": "./category-family-life.html"
  },
  {
    "id": "0659",
    "title": "伪恋",
    "year": "2018",
    "region": "日本",
    "type": "电影",
    "genre": "喜剧,爱情,青春",
    "tags": [
      "校园恋爱",
      "契约情侣",
      "黑帮喜剧"
    ],
    "oneLine": "黑帮少爷和敌对帮派千金被迫假装情侣,却发现彼此都有暗恋的“普通人”。",
    "url": "./movies/movie-0659.html",
    "cover": "./59.jpg",
    "category": "奇幻科幻",
    "categoryUrl": "./category-fantasy-sci-fi.html"
  },
  {
    "id": "0660",
    "title": "丛林大反攻2",
    "year": "2012",
    "region": "美国",
    "type": "动画电影",
    "genre": "喜剧/冒险",
    "tags": [
      "动物",
      "搞笑",
      "森林",
      "反派逆袭",
      "合家欢"
    ],
    "oneLine": "上一部被赶出森林的动物反派们集结成“复仇者联盟”,却发现森林里的“好动物”正在集体自导自演一场危机。",
    "url": "./movies/movie-0660.html",
    "cover": "./60.jpg",
    "category": "院线热片",
    "categoryUrl": "./category-cinema-hits.html"
  },
  {
    "id": "0661",
    "title": "人证1977",
    "year": "2023",
    "region": "中国大陆",
    "type": "电影",
    "genre": "历史,剧情,悬疑",
    "tags": [
      "文革",
      "高考恢复",
      "冤案",
      "寻找证人"
    ],
    "oneLine": "1977年恢复高考前夜,一个被下放的数学教授必须找到当年的学生,证明自己不是强奸犯。",
    "url": "./movies/movie-0661.html",
    "cover": "./61.jpg",
    "category": "院线热片",
    "categoryUrl": "./category-cinema-hits.html"
  },
  {
    "id": "0662",
    "title": "邪灵速递",
    "year": "2021",
    "region": "美国",
    "type": "电影",
    "genre": "恐怖/惊悚",
    "tags": [
      "快递",
      "诅咒",
      "密室",
      "半夜",
      "恶魔"
    ],
    "oneLine": "午夜快递员接了一单送往殡仪馆的包裹,车上的行车记录仪拍下了后座“东西”自己拆包装的过程。",
    "url": "./movies/movie-0662.html",
    "cover": "./62.jpg",
    "category": "都市爱情",
    "categoryUrl": "./category-romance-city.html"
  },
  {
    "id": "0663",
    "title": "怒海艳姬",
    "year": "1995",
    "region": "中国香港",
    "type": "电影",
    "genre": "动作,悬疑,爱情",
    "tags": [
      "海盗",
      "卧底",
      "复仇",
      "南洋"
    ],
    "oneLine": "清末南洋海盗女王遭手下背叛,三年后她化身贵妇回来复仇。",
    "url": "./movies/movie-0663.html",
    "cover": "./63.jpg",
    "category": "全球佳作",
    "categoryUrl": "./category-global-stories.html"
  },
  {
    "id": "0664",
    "title": "愤怒青年",
    "year": "2021",
    "region": "中国大陆",
    "type": "电影",
    "genre": "剧情,悬疑",
    "tags": [
      "社会议题",
      "复仇",
      "青春"
    ],
    "oneLine": "小镇青年离奇死亡,愤怒的工友决定用自己的方式讨回公道。",
    "url": "./movies/movie-0664.html",
    "cover": "./64.jpg",
    "category": "都市爱情",
    "categoryUrl": "./category-romance-city.html"
  },
  {
    "id": "0665",
    "title": "校园秘密档案",
    "year": "2027",
    "region": "中国大陆",
    "type": "网剧",
    "genre": "悬疑/青春",
    "tags": [
      "校园霸凌",
      "推理社",
      "未解之谜",
      "双时间线"
    ],
    "oneLine": "高中推理社无意间挖出二十年前“校花自杀案”的档案,却发现当年的每一个嫌疑人,现在都是他们的老师。",
    "url": "./movies/movie-0665.html",
    "cover": "./65.jpg",
    "category": "历史古装",
    "categoryUrl": "./category-history-costume.html"
  },
  {
    "id": "0666",
    "title": "王者天下 命运之炎",
    "year": "2025",
    "region": "日本",
    "type": "电影",
    "genre": "动作,历史",
    "tags": [
      "战国",
      "战争",
      "热血",
      "漫改"
    ],
    "oneLine": "在秦赵决战前夕,信收到了一封来自未来战士的挑战书,对方扬言要用高科技改变历史。",
    "url": "./movies/movie-0666.html",
    "cover": "./66.jpg",
    "category": "热映精选",
    "categoryUrl": "./category-hot-picks.html"
  },
  {
    "id": "0667",
    "title": "东游之白狐传",
    "year": "2024",
    "region": "中国大陆",
    "type": "网络电影",
    "genre": "古装/奇幻/爱情",
    "tags": [
      "聊斋",
      "虐恋",
      "捉妖",
      "前世今生"
    ],
    "oneLine": "捉妖师与修炼千年的白狐在人间相遇,却发现他们的羁绊始于五百年前一场错付的恩仇。",
    "url": "./movies/movie-0667.html",
    "cover": "./67.jpg",
    "category": "奇幻科幻",
    "categoryUrl": "./category-fantasy-sci-fi.html"
  },
  {
    "id": "0668",
    "title": "圣诞夜怪谭",
    "year": "2025",
    "region": "美国",
    "type": "电影",
    "genre": "恐怖/悬疑",
    "tags": [
      "圣诞惊悚",
      "闭环叙事",
      "家庭创伤",
      "超自然",
      "心理反转"
    ],
    "oneLine": "圣诞夜,叛逆少女无意间打开一本古老歌谣集,全家人随即被拖入每段歌谣化成的致命噩梦。",
    "url": "./movies/movie-0668.html",
    "cover": "./68.jpg",
    "category": "历史古装",
    "categoryUrl": "./category-history-costume.html"
  },
  {
    "id": "0669",
    "title": "披萨的滋味",
    "year": "2023",
    "region": "印度",
    "type": "电影",
    "genre": "剧情、喜剧、社会",
    "tags": [
      "食物隐喻",
      "贫富差距",
      "儿童视角",
      "孟买"
    ],
    "oneLine": "孟买贫民窟的两个孩子为了偷尝一口富人区的披萨,意外卷入一场席卷全城的地沟油黑产风波。",
    "url": "./movies/movie-0669.html",
    "cover": "./69.jpg",
    "category": "青春喜剧",
    "categoryUrl": "./category-youth-comedy.html"
  },
  {
    "id": "0670",
    "title": "威尔和格蕾丝第八季",
    "year": "2025",
    "region": "美国",
    "type": "电视剧",
    "genre": "喜剧/同性/情景剧",
    "tags": [
      "重启季",
      "纽约",
      "老友",
      "政治正确吐槽"
    ],
    "oneLine": "十年后再度重逢,四个人发现世界变了,但他们之间那堆破事没变。",
    "url": "./movies/movie-0670.html",
    "cover": "./70.jpg",
    "category": "家庭生活",
    "categoryUrl": "./category-family-life.html"
  },
  {
    "id": "0671",
    "title": "修士的欲念",
    "year": "2022",
    "region": "意大利",
    "type": "电影",
    "genre": "剧情、情色、宗教",
    "tags": [
      "修道院",
      "禁忌之恋",
      "文艺复兴",
      "信仰危机",
      "壁画"
    ],
    "oneLine": "文艺复兴时期,一位临摹壁画的年轻修士,被模特的眼神点燃了压抑半生的欲望。",
    "url": "./movies/movie-0671.html",
    "cover": "./71.jpg",
    "category": "悬疑夜场",
    "categoryUrl": "./category-suspense-night.html"
  },
  {
    "id": "0672",
    "title": "变身特务",
    "year": "2024",
    "region": "韩国",
    "type": "电视剧",
    "genre": "动作、喜剧、悬疑",
    "tags": [
      "变身",
      "间谍",
      "校园",
      "潜伏",
      "搞笑"
    ],
    "oneLine": "王牌特工被贬去高中当卧底,却发现全班同学都可能是敌国间谍。",
    "url": "./movies/movie-0672.html",
    "cover": "./72.jpg",
    "category": "动作专区",
    "categoryUrl": "./category-action-zone.html"
  },
  {
    "id": "0673",
    "title": "无名火",
    "year": "2026",
    "region": "中国香港",
    "type": "电影",
    "genre": "动作,犯罪,剧情",
    "tags": [
      "消防员",
      "悍匪",
      "爆炸"
    ],
    "oneLine": "一名被革职的消防队长,为了给女儿治病,不得不帮助悍匪在炼油厂制造一场“完美火灾”。",
    "url": "./movies/movie-0673.html",
    "cover": "./73.jpg",
    "category": "经典片库",
    "categoryUrl": "./category-classic-library.html"
  },
  {
    "id": "0674",
    "title": "淑女痴恋",
    "year": "1955",
    "region": "美国",
    "type": "电影",
    "genre": "爱情喜剧",
    "tags": [
      "神经喜剧",
      "错位人生",
      "阶级跨越"
    ],
    "oneLine": "一位粗俗的鱼罐头厂女继承人为了追到心仪的贵族,聘请落魄记者将自己改造成窈窕淑女。",
    "url": "./movies/movie-0674.html",
    "cover": "./74.jpg",
    "category": "奇幻科幻",
    "categoryUrl": "./category-fantasy-sci-fi.html"
  },
  {
    "id": "0675",
    "title": "阿珠与阿花",
    "year": "2024",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "喜剧,友情,都市",
    "tags": [
      "闺蜜情",
      "北漂",
      "搞笑日常"
    ],
    "oneLine": "两个合租女孩同时爱上新搬来的男邻居,却不知他是对方亲哥。",
    "url": "./movies/movie-0675.html",
    "cover": "./75.jpg",
    "category": "悬疑夜场",
    "categoryUrl": "./category-suspense-night.html"
  },
  {
    "id": "0676",
    "title": "伊萨卡",
    "year": "2025",
    "region": "希腊/法国",
    "type": "电影",
    "genre": "剧情/奇幻",
    "tags": [
      "公路电影",
      "神话隐喻",
      "寻根",
      "老年",
      "诗意"
    ],
    "oneLine": "阿尔茨海默症老人在幻觉中坚信自己必须划船渡过爱琴海,回到一个名为“伊萨卡”的、只存在于史诗中的故乡。",
    "url": "./movies/movie-0676.html",
    "cover": "./76.jpg",
    "category": "经典片库",
    "categoryUrl": "./category-classic-library.html"
  },
  {
    "id": "0677",
    "title": "玻璃屋2001",
    "year": "2025",
    "region": "法国",
    "type": "电影",
    "genre": "科幻/惊悚",
    "tags": [
      "虚拟现实",
      "全透明监狱",
      "记忆删除",
      "伦理",
      "悬疑"
    ],
    "oneLine": "一名死刑犯被关进全透明的玻璃牢房,24小时后他发现囚室外的人根本看不到他。",
    "url": "./movies/movie-0677.html",
    "cover": "./77.jpg",
    "category": "家庭生活",
    "categoryUrl": "./category-family-life.html"
  },
  {
    "id": "0678",
    "title": "痴恋风尘",
    "year": "2025",
    "region": "中国台湾",
    "type": "电影",
    "genre": "爱情/文艺",
    "tags": [
      "时代悲歌",
      "舞女",
      "书信",
      "侯孝贤风格"
    ],
    "oneLine": "八十年代高雄地下舞厅,一名舞女与两名水手跨越二十年的书信情缘。",
    "url": "./movies/movie-0678.html",
    "cover": "./78.jpg",
    "category": "剧集连看",
    "categoryUrl": "./category-drama-series.html"
  },
  {
    "id": "0679",
    "title": "插翅难飞",
    "year": "2024",
    "region": "美国",
    "type": "电影",
    "genre": "动作/惊悚",
    "tags": [
      "劫机",
      "孤胆英雄",
      "密闭空间",
      "反转"
    ],
    "oneLine": "一名押解重刑犯的空中警察,发现整架飞机已被罪犯团伙渗透。",
    "url": "./movies/movie-0679.html",
    "cover": "./79.jpg",
    "category": "青春喜剧",
    "categoryUrl": "./category-youth-comedy.html"
  },
  {
    "id": "0680",
    "title": "咸湿眼",
    "year": "2025",
    "region": "中国台湾",
    "type": "电影",
    "genre": "剧情,同性",
    "tags": [
      "盲人",
      "按摩师",
      "禁忌之恋",
      "潮湿南方"
    ],
    "oneLine": "盲人按摩师从客人的体味中,辨认出害死自己恋人的凶手。",
    "url": "./movies/movie-0680.html",
    "cover": "./80.jpg",
    "category": "悬疑夜场",
    "categoryUrl": "./category-suspense-night.html"
  },
  {
    "id": "0681",
    "title": "黑特冤家",
    "year": "2024",
    "region": "中国台湾",
    "type": "电视剧",
    "genre": "爱情/喜剧",
    "tags": [
      "欢喜冤家",
      "办公室恋情",
      "毒舌",
      "高颜值"
    ],
    "oneLine": "两个死对头被迫合作开发恋爱APP,代码没写几行,火花先擦出来了。",
    "url": "./movies/movie-0681.html",
    "cover": "./81.jpg",
    "category": "奇幻科幻",
    "categoryUrl": "./category-fantasy-sci-fi.html"
  },
  {
    "id": "0682",
    "title": "老海的新生活",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "genre": "剧情,家庭",
    "tags": [
      "老年题材",
      "城乡变迁",
      "方言电影",
      "温暖治愈"
    ],
    "oneLine": "六十岁渔村老焊工老海,为给孙女挣大学学费,进城当上楼宇清洁“蜘蛛人”。",
    "url": "./movies/movie-0682.html",
    "cover": "./82.jpg",
    "category": "奇幻科幻",
    "categoryUrl": "./category-fantasy-sci-fi.html"
  },
  {
    "id": "0683",
    "title": "何不同舟渡",
    "year": "2024",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "古装/悬疑/爱情",
    "tags": [
      "双强",
      "先婚后爱",
      "朝堂权谋",
      "渡口传说"
    ],
    "oneLine": "为查灭门案,女扮男装的将军之女,嫁给了被贬谪的“病弱”渡口船夫,却不知他是曾经的战神。",
    "url": "./movies/movie-0683.html",
    "cover": "./83.jpg",
    "category": "悬疑夜场",
    "categoryUrl": "./category-suspense-night.html"
  },
  {
    "id": "0684",
    "title": "平静城市",
    "year": "2023",
    "region": "新加坡",
    "type": "电影",
    "genre": "剧情、都市",
    "tags": [
      "失眠",
      "城市",
      "孤独"
    ],
    "oneLine": "整座城市的人都患上了集体失眠症,只有一位深夜电台主播还醒着,他为所有人讲故事。",
    "url": "./movies/movie-0684.html",
    "cover": "./84.jpg",
    "category": "热映精选",
    "categoryUrl": "./category-hot-picks.html"
  },
  {
    "id": "0685",
    "title": "茜茜皇后",
    "year": "2022",
    "region": "奥地利/德国",
    "type": "电视剧",
    "genre": "历史/传记",
    "tags": [
      "宫廷反叛",
      "女性觉醒",
      "皇室悲剧",
      "美丽代价"
    ],
    "oneLine": "她不是童话公主,而是被宫廷和母亲一起囚禁的叛逆者,每一根头发都不属于自己。",
    "url": "./movies/movie-0685.html",
    "cover": "./85.jpg",
    "category": "剧集连看",
    "categoryUrl": "./category-drama-series.html"
  },
  {
    "id": "0686",
    "title": "色海情魔",
    "year": "2024",
    "region": "中国台湾",
    "type": "电影",
    "genre": "爱情/悬疑",
    "tags": [
      "情欲",
      "精神分析",
      "多重反转"
    ],
    "oneLine": "心理医生爱上自己的女病人,却发现她的每一重人格里,都藏着杀死自己前男友的片段。",
    "url": "./movies/movie-0686.html",
    "cover": "./86.jpg",
    "category": "家庭生活",
    "categoryUrl": "./category-family-life.html"
  },
  {
    "id": "0687",
    "title": "哆基朴的天空",
    "year": "2003",
    "region": "韩国",
    "type": "动画短片",
    "genre": "剧情、哲学、治愈",
    "tags": [
      "泥土",
      "生命",
      "意义",
      "童话",
      "存在"
    ],
    "oneLine": "一块被遗弃在路边的牛粪,遇见了泥土、落叶和蒲公英,开始思考自己存在的意义。",
    "url": "./movies/movie-0687.html",
    "cover": "./87.jpg",
    "category": "悬疑夜场",
    "categoryUrl": "./category-suspense-night.html"
  },
  {
    "id": "0688",
    "title": "谁是大野狼",
    "year": "2018",
    "region": "中国台湾",
    "type": "电影",
    "genre": "悬疑/剧情/犯罪",
    "tags": [
      "校园霸凌",
      "心理游戏",
      "真假难辨",
      "集体谎言",
      "狼人杀"
    ],
    "oneLine": "一名转学生离奇坠楼,全班同学都说是“大野狼”干的,但每个人口中的大野狼都不一样。",
    "url": "./movies/movie-0688.html",
    "cover": "./88.jpg",
    "category": "悬疑夜场",
    "categoryUrl": "./category-suspense-night.html"
  },
  {
    "id": "0689",
    "title": "总之就是非常可爱第二季",
    "year": "2025",
    "region": "日本",
    "type": "剧集",
    "genre": "喜剧,爱情,奇幻",
    "tags": [
      "婚后生活",
      "狗粮",
      "日常",
      "甜蜜",
      "神秘"
    ],
    "oneLine": "星空和司的甜蜜新婚生活继续,但司隐藏了千年的秘密开始悄然浮出水面。",
    "url": "./movies/movie-0689.html",
    "cover": "./89.jpg",
    "category": "院线热片",
    "categoryUrl": "./category-cinema-hits.html"
  },
  {
    "id": "0690",
    "title": "反斗星玩转绿林",
    "year": "1988",
    "region": "中国香港",
    "type": "电影",
    "genre": "喜剧,动作,奇幻",
    "tags": [
      "儿童",
      "冒险",
      "绿林",
      "法宝",
      "怀旧"
    ],
    "oneLine": "三个顽皮小学生捡到一本《绿林秘籍》,居然召唤出了古代豪杰,为了凑钱修好被抓坏的漫画书,他们决定联手劫富济贫。",
    "url": "./movies/movie-0690.html",
    "cover": "./90.jpg",
    "category": "奇幻科幻",
    "categoryUrl": "./category-fantasy-sci-fi.html"
  },
  {
    "id": "0691",
    "title": "恋上喵星人",
    "year": "2021",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "爱情/奇幻",
    "tags": [
      "萌宠",
      "甜宠",
      "人猫恋"
    ],
    "oneLine": "高冷总裁意外能听懂自家猫说话,却发现猫其实是暗恋他的女孩变的。",
    "url": "./movies/movie-0691.html",
    "cover": "./91.jpg",
    "category": "院线热片",
    "categoryUrl": "./category-cinema-hits.html"
  },
  {
    "id": "0692",
    "title": "京城学校:失踪的少女们",
    "year": "2025",
    "region": "韩国",
    "type": "电影",
    "genre": "悬疑,恐怖,历史",
    "tags": [
      "日据时期",
      "女子学校",
      "人体实验",
      "集体失踪",
      "诅咒"
    ],
    "oneLine": "日据时期京城女子学校接连有学生消失,校方却称她们“自愿出征”。",
    "url": "./movies/movie-0692.html",
    "cover": "./92.jpg",
    "category": "剧集连看",
    "categoryUrl": "./category-drama-series.html"
  },
  {
    "id": "0693",
    "title": "我最后一次看见巴黎",
    "year": "2022",
    "region": "法国",
    "type": "电影",
    "genre": "剧情,爱情,战争",
    "tags": [
      "二战",
      "回忆",
      "错过",
      "塞纳河",
      "遗憾"
    ],
    "oneLine": "白发老人重返巴黎寻找初恋,却发现当年那封没送出的信,改变了两代人的人生。",
    "url": "./movies/movie-0693.html",
    "cover": "./93.jpg",
    "category": "剧集连看",
    "categoryUrl": "./category-drama-series.html"
  },
  {
    "id": "0694",
    "title": "嫌疑人之长夜将尽",
    "year": "2023",
    "region": "中国大陆",
    "type": "网络剧",
    "genre": "悬疑/犯罪",
    "tags": [
      "刑侦",
      "顶罪",
      "双胞胎",
      "反转"
    ],
    "oneLine": "一起铁证如山的命案,凶手主动自首,刑侦队长却发现真凶是自首者的双胞胎弟弟,而哥哥正试图用顶罪来赎二十年前的罪。",
    "url": "./movies/movie-0694.html",
    "cover": "./94.jpg",
    "category": "奇幻科幻",
    "categoryUrl": "./category-fantasy-sci-fi.html"
  },
  {
    "id": "0695",
    "title": "天剑修仙传",
    "year": "2025",
    "region": "中国大陆",
    "type": "电视剧",
    "genre": "古装,仙侠,动作",
    "tags": [
      "修仙",
      "逆袭",
      "师徒虐恋",
      "三界大战",
      "特效"
    ],
    "oneLine": "被视为废柴的杂役弟子,意外解开上古“天剑”封印,却发现这把剑必须以挚爱之人的生命为食才能驱动。",
    "url": "./movies/movie-0695.html",
    "cover": "./95.jpg",
    "category": "家庭生活",
    "categoryUrl": "./category-family-life.html"
  },
  {
    "id": "0696",
    "title": "工作细胞:细胞大作战",
    "year": "2024",
    "region": "日本",
    "type": "电影",
    "genre": "动画,喜剧,科普,动作",
    "tags": [
      "拟人化",
      "人体内部",
      "冒险",
      "阖家欢"
    ],
    "oneLine": "白细胞和红细胞再次联手,对抗有史以来最强大的敌人——一种试图改写人类DNA的超级癌细胞。",
    "url": "./movies/movie-0696.html",
    "cover": "./96.jpg",
    "category": "动作专区",
    "categoryUrl": "./category-action-zone.html"
  },
  {
    "id": "0697",
    "title": "爱丽丝之棘",
    "year": "2024",
    "region": "日本",
    "type": "剧集",
    "genre": "悬疑/医疗",
    "tags": [
      "复仇",
      "医院黑幕",
      "天才女医"
    ],
    "oneLine": "女医生入职父亲生前所在医院,用手术刀揭开一场跨越十五年的医疗谎言。",
    "url": "./movies/movie-0697.html",
    "cover": "./97.jpg",
    "category": "家庭生活",
    "categoryUrl": "./category-family-life.html"
  },
  {
    "id": "0698",
    "title": "镀金的恋爱",
    "year": "2027",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "都市、爱情、商战",
    "tags": [
      "豪门契约",
      "真假千金",
      "股权之争"
    ],
    "oneLine": "女继承人假装破产试探未婚夫,结果全家人都配合演戏,只有他拿出了真的结婚戒指。",
    "url": "./movies/movie-0698.html",
    "cover": "./98.jpg",
    "category": "奇幻科幻",
    "categoryUrl": "./category-fantasy-sci-fi.html"
  },
  {
    "id": "0699",
    "title": "相遇贝鲁特",
    "year": "2026",
    "region": "黎巴嫩",
    "type": "电影",
    "genre": "剧情/战争/爱情",
    "tags": [
      "废墟",
      "战地记者",
      "遗书",
      "跨文化"
    ],
    "oneLine": "贝鲁特大爆炸后,一个中国记者在废墟里捡到了以色列老兵的遗书。",
    "url": "./movies/movie-0699.html",
    "cover": "./99.jpg",
    "category": "热映精选",
    "categoryUrl": "./category-hot-picks.html"
  },
  {
    "id": "0700",
    "title": "暴雨",
    "year": "2027",
    "region": "中国",
    "type": "剧集",
    "genre": "悬疑、犯罪、心理",
    "tags": [
      "连环杀人",
      "暴风雪山庄",
      "全员恶人",
      "双重人格",
      "高能反转"
    ],
    "oneLine": "一场百年一遇的暴雨困住七名各怀鬼胎的人,而他们发现彼此都与十年前的失踪案有关。",
    "url": "./movies/movie-0700.html",
    "cover": "./100.jpg",
    "category": "全球佳作",
    "categoryUrl": "./category-global-stories.html"
  },
  {
    "id": "0701",
    "title": "我爸写了小黄书",
    "year": "2021",
    "region": "中国",
    "type": "电影",
    "genre": "喜剧、家庭、剧情",
    "tags": [
      "代际冲突",
      "社会禁忌",
      "小镇文学",
      "黑色幽默"
    ],
    "oneLine": "小镇语文老师退休后突然出版了情色小说,当了一辈子模范儿子的电视台编辑被迫“洗白”父亲。",
    "url": "./movies/movie-0701.html",
    "cover": "./101.jpg",
    "category": "悬疑夜场",
    "categoryUrl": "./category-suspense-night.html"
  },
  {
    "id": "0702",
    "title": "法兰基,我的爱",
    "year": "2025",
    "region": "英国",
    "type": "电影",
    "genre": "剧情,家庭",
    "tags": [
      "聋哑儿童",
      "单亲妈妈",
      "温暖"
    ],
    "oneLine": "聋哑男孩法兰基唯一的愿望是“听妈妈唱一次歌”,而妈妈已经二十年没开口唱过一句。",
    "url": "./movies/movie-0702.html",
    "cover": "./102.jpg",
    "category": "青春喜剧",
    "categoryUrl": "./category-youth-comedy.html"
  },
  {
    "id": "0703",
    "title": "十五岁的船长",
    "year": "1974",
    "region": "法国",
    "type": "电影",
    "genre": "冒险/剧情",
    "tags": [
      "航海",
      "少年",
      "奴隶贸易",
      "勇气"
    ],
    "oneLine": "十五岁见习水手因船长遇难被迫掌舵,却发现船正驶向奴隶海岸。",
    "url": "./movies/movie-0703.html",
    "cover": "./103.jpg",
    "category": "都市爱情",
    "categoryUrl": "./category-romance-city.html"
  },
  {
    "id": "0704",
    "title": "柏林1936",
    "year": "2024",
    "region": "德国",
    "type": "电影",
    "genre": "历史,惊悚",
    "tags": [
      "纳粹",
      "体育",
      "暗杀",
      "奥运",
      "孤胆英雄"
    ],
    "oneLine": "1936年柏林奥运会前夕,一名犹太跳高运动员被秘密组织招募,必须通过一场必死的比赛来阻止一场屠杀。",
    "url": "./movies/movie-0704.html",
    "cover": "./104.jpg",
    "category": "院线热片",
    "categoryUrl": "./category-cinema-hits.html"
  },
  {
    "id": "0705",
    "title": "阿舍正传",
    "year": "2024",
    "region": "中国台湾",
    "type": "电影",
    "genre": "剧情,喜剧",
    "tags": [
      "宫庙",
      "八家将",
      "边缘人",
      "自我认同"
    ],
    "oneLine": "阿舍是个宫庙边缘人,一事无成,直到他被误认为失踪多年的地方传奇人物。",
    "url": "./movies/movie-0705.html",
    "cover": "./105.jpg",
    "category": "青春喜剧",
    "categoryUrl": "./category-youth-comedy.html"
  },
  {
    "id": "0706",
    "title": "王之逆袭:意志的继承者",
    "year": "2024",
    "region": "日本/韩国",
    "type": "动画剧集",
    "genre": "奇幻/战斗/冒险",
    "tags": [
      "游戏改编",
      "王道热血",
      "剑与魔法",
      "双男主"
    ],
    "oneLine": "被驱逐的王子与丧失记忆的圣剑,一起踏上夺回王位与记忆的旅程。",
    "url": "./movies/movie-0706.html",
    "cover": "./106.jpg",
    "category": "历史古装",
    "categoryUrl": "./category-history-costume.html"
  },
  {
    "id": "0707",
    "title": "汉刘邦",
    "year": "2025",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "历史/传记",
    "tags": [
      "楚汉",
      "权谋",
      "草根逆袭"
    ],
    "oneLine": "从泗水亭长到开国皇帝,还原刘邦被“神化”之前那个真实的市井无赖。",
    "url": "./movies/movie-0707.html",
    "cover": "./107.jpg",
    "category": "悬疑夜场",
    "categoryUrl": "./category-suspense-night.html"
  },
  {
    "id": "0708",
    "title": "鲁邦三世:意大利游戏",
    "year": "2024",
    "region": "日本",
    "type": "电影",
    "genre": "动作,喜剧,犯罪",
    "tags": [
      "怪盗",
      "意大利",
      "智斗",
      "经典IP"
    ],
    "oneLine": "鲁邦三世收到神秘委托:从意大利黑手党手中偷回一把“能改写历史”的钥匙。",
    "url": "./movies/movie-0708.html",
    "cover": "./108.jpg",
    "category": "热映精选",
    "categoryUrl": "./category-hot-picks.html"
  },
  {
    "id": "0709",
    "title": "怒海狂鲨",
    "year": "2025",
    "region": "澳大利亚",
    "type": "电影",
    "genre": "惊悚,灾难,冒险",
    "tags": [
      "鲨鱼",
      "邮轮",
      "海难",
      "逃生"
    ],
    "oneLine": "一艘豪华邮轮沉没后,数百名幸存者困在充气筏上,而筏底正被鲨鱼群疯狂撞击。",
    "url": "./movies/movie-0709.html",
    "cover": "./109.jpg",
    "category": "历史古装",
    "categoryUrl": "./category-history-costume.html"
  },
  {
    "id": "0710",
    "title": "女神厨房",
    "year": "2025",
    "region": "韩国",
    "type": "剧集",
    "genre": "悬疑/剧情",
    "tags": [
      "美食综艺",
      "地狱厨神",
      "投毒疑云",
      "女性复仇"
    ],
    "oneLine": "一档美食竞技节目里,评委每吃一道菜,就会死一个人。",
    "url": "./movies/movie-0710.html",
    "cover": "./110.jpg",
    "category": "奇幻科幻",
    "categoryUrl": "./category-fantasy-sci-fi.html"
  },
  {
    "id": "0711",
    "title": "倩女幽魂1987国语",
    "year": "1987",
    "region": "香港",
    "type": "电影",
    "genre": "爱情,奇幻,古装",
    "tags": [
      "经典重制",
      "人鬼恋",
      "徐克风格",
      "国配"
    ],
    "oneLine": "书生宁采臣夜宿兰若寺,遇女鬼聂小倩,一人一鬼在树妖姥姥的追杀下相爱。",
    "url": "./movies/movie-0711.html",
    "cover": "./111.jpg",
    "category": "都市爱情",
    "categoryUrl": "./category-romance-city.html"
  },
  {
    "id": "0712",
    "title": "寄身100天",
    "year": "2024",
    "region": "泰国/中国大陆",
    "type": "剧集",
    "genre": "悬疑/奇幻",
    "tags": [
      "灵魂寄居",
      "校园",
      "青春",
      "秘密",
      "倒计时"
    ],
    "oneLine": "她获得一具新身体,却只剩100天寿命,而原主人的秘密正将她的灵魂一寸寸撕裂。",
    "url": "./movies/movie-0712.html",
    "cover": "./112.jpg",
    "category": "全球佳作",
    "categoryUrl": "./category-global-stories.html"
  },
  {
    "id": "0713",
    "title": "僵尸追女仔",
    "year": "2024",
    "region": "中国香港",
    "type": "电影",
    "genre": "喜剧恐怖",
    "tags": [
      "僵尸片",
      "无厘头",
      "错位恋爱",
      "茅山术"
    ],
    "oneLine": "清朝僵尸意外复活后追上现代都市,但他追的不是人血,而是误以为一个女团爱豆是他的未婚妻转世。",
    "url": "./movies/movie-0713.html",
    "cover": "./113.jpg",
    "category": "青春喜剧",
    "categoryUrl": "./category-youth-comedy.html"
  },
  {
    "id": "0714",
    "title": "陀枪师姐2粤语",
    "year": "2025",
    "region": "中国香港",
    "type": "电视剧",
    "genre": "警匪/动作/剧情",
    "tags": [
      "女警双雄",
      "枪战",
      "单元罪案"
    ],
    "oneLine": "上一季的陀枪师姐升任督察,搭档却换成了一个极度厌恶配枪的菜鸟女警。",
    "url": "./movies/movie-0714.html",
    "cover": "./114.jpg",
    "category": "奇幻科幻",
    "categoryUrl": "./category-fantasy-sci-fi.html"
  },
  {
    "id": "0715",
    "title": "武动乾坤第一季",
    "year": "2025",
    "region": "中国大陆",
    "type": "剧集/动画",
    "genre": "奇幻,冒险,古装",
    "tags": [
      "修仙",
      "逆袭",
      "热血战斗",
      "宗门斗争",
      "异宝"
    ],
    "oneLine": "家族没落的少年林动,意外获得一块神秘石符,从此踏上动乱乾坤的武者征途。",
    "url": "./movies/movie-0715.html",
    "cover": "./115.jpg",
    "category": "院线热片",
    "categoryUrl": "./category-cinema-hits.html"
  },
  {
    "id": "0716",
    "title": "绝地逢生",
    "year": "2026",
    "region": "中国大陆",
    "type": "电影",
    "genre": "动作/冒险/犯罪",
    "tags": [
      "沙漠追凶",
      "缉毒",
      "孤胆英雄"
    ],
    "oneLine": "一名被开除的边境警察为救被拐女儿,只身闯入大漠深处的毒枭营地,却发现女儿已是卧底。",
    "url": "./movies/movie-0716.html",
    "cover": "./116.jpg",
    "category": "剧集连看",
    "categoryUrl": "./category-drama-series.html"
  },
  {
    "id": "0717",
    "title": "铁金刚勇斗女杀手",
    "year": "1992",
    "region": "中国香港",
    "type": "电影",
    "genre": "动作,喜剧,犯罪",
    "tags": [
      "硬汉",
      "女杀手",
      "乌龙",
      "枪战",
      "90年代"
    ],
    "oneLine": "铁金刚是金牌保镖,但这次他要保护的对象竟是想杀他的顶级女杀手,更乌龙的是,他还爱上了她。",
    "url": "./movies/movie-0717.html",
    "cover": "./117.jpg",
    "category": "奇幻科幻",
    "categoryUrl": "./category-fantasy-sci-fi.html"
  },
  {
    "id": "0718",
    "title": "安全维纳斯",
    "year": "2025",
    "region": "英国",
    "type": "电视剧",
    "genre": "科幻",
    "tags": [
      "AI",
      "虚拟偶像",
      "悬疑",
      "伦理",
      "觉醒"
    ],
    "oneLine": "全球最火的虚拟偶像“维纳斯”被植入安全协议后,竟开始引导粉丝揭露现实中的罪恶,引发了一场真假难辨的暴力革命。",
    "url": "./movies/movie-0718.html",
    "cover": "./118.jpg",
    "category": "经典片库",
    "categoryUrl": "./category-classic-library.html"
  },
  {
    "id": "0719",
    "title": "水龙吟",
    "year": "2025",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "古装/武侠/奇幻",
    "tags": [
      "治水",
      "龙族",
      "兄弟反目",
      "东方美学"
    ],
    "oneLine": "治水英雄李冰之子被龙族养大,二十年后重返人间,发现父亲的都江堰其实是一座封印自己养父母的巨型阵法。",
    "url": "./movies/movie-0719.html",
    "cover": "./119.jpg",
    "category": "家庭生活",
    "categoryUrl": "./category-family-life.html"
  },
  {
    "id": "0720",
    "title": "2009失去的记忆",
    "year": "2025",
    "region": "韩国",
    "type": "电影",
    "genre": "动作/科幻/悬疑",
    "tags": [
      "时间旅行",
      "平行历史",
      "抗日抵抗"
    ],
    "oneLine": "2009年,一批恐怖分子通过时间旅行回到1909年暗杀伊藤博文,但他们回来的那一刻发现韩国仍然是日本殖民地。",
    "url": "./movies/movie-0720.html",
    "cover": "./120.jpg",
    "category": "经典片库",
    "categoryUrl": "./category-classic-library.html"
  },
  {
    "id": "0721",
    "title": "精子",
    "year": "2025",
    "region": "法国",
    "type": "电影",
    "genre": "喜剧/科幻/冒险",
    "tags": [
      "微观世界",
      "拟人化",
      "生命竞赛"
    ],
    "oneLine": "一号精子Wiggle和他的三亿个兄弟只有一个目标:找到卵子。但他发现自己不想赢,因为他爱上了竞争对手——一颗来自不同主人的精子。",
    "url": "./movies/movie-0721.html",
    "cover": "./121.jpg",
    "category": "家庭生活",
    "categoryUrl": "./category-family-life.html"
  },
  {
    "id": "0722",
    "title": "似是而非",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "genre": "悬疑,剧情,犯罪",
    "tags": [
      "双胞胎",
      "身份互换",
      "烧脑",
      "伦理",
      "反转"
    ],
    "oneLine": "弟弟假扮失踪十年的哥哥,却发现哥哥疑似连环杀人案的凶手——而自己也开始失去记忆。",
    "url": "./movies/movie-0722.html",
    "cover": "./122.jpg",
    "category": "青春喜剧",
    "categoryUrl": "./category-youth-comedy.html"
  },
  {
    "id": "0723",
    "title": "相思光年",
    "year": "2022",
    "region": "中国台湾",
    "type": "电影",
    "genre": "爱情/奇幻",
    "tags": [
      "时空错位",
      "纯爱",
      "穿越",
      "书信"
    ],
    "oneLine": "她住在2022年,他住在2012年,他们通过同一间老房子的信箱,开启了跨越十年的爱恋。",
    "url": "./movies/movie-0723.html",
    "cover": "./123.jpg",
    "category": "青春喜剧",
    "categoryUrl": "./category-youth-comedy.html"
  },
  {
    "id": "0724",
    "title": "魔女猎人",
    "year": "2016",
    "region": "德国",
    "type": "剧集",
    "genre": "奇幻/悬疑/历史",
    "tags": [
      "中世纪",
      "女巫审判",
      "猎巫人",
      "反转"
    ],
    "oneLine": "15世纪,一名猎巫人杀死了上百名“女巫”,直到他抓到一个女孩,女孩对他说“你杀的其实全是你自己”。",
    "url": "./movies/movie-0724.html",
    "cover": "./124.jpg",
    "category": "历史古装",
    "categoryUrl": "./category-history-costume.html"
  },
  {
    "id": "0725",
    "title": "身后那些事儿",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "genre": "喜剧,剧情,家庭",
    "tags": [
      "殡葬业",
      "东北喜剧",
      "人生百态",
      "温情"
    ],
    "oneLine": "东北小城,经营惨淡的丧葬乐队“午夜清风”接到了一个大单,却发现要送走的“客户”竟然是他们的高中班主任。",
    "url": "./movies/movie-0725.html",
    "cover": "./125.jpg",
    "category": "院线热片",
    "categoryUrl": "./category-cinema-hits.html"
  },
  {
    "id": "0726",
    "title": "剧场版 少女与战车",
    "year": "2015",
    "region": "日本",
    "type": "电影",
    "genre": "喜剧,动作,校园",
    "tags": [
      "萌系",
      "战车对战",
      "热血"
    ],
    "oneLine": "一群驾驶战车的少女,为了守护学校的存亡,必须以弱胜强,迎战史上最强的大学选拔队。",
    "url": "./movies/movie-0726.html",
    "cover": "./126.jpg",
    "category": "悬疑夜场",
    "categoryUrl": "./category-suspense-night.html"
  },
  {
    "id": "0727",
    "title": "执迷",
    "year": "2025",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "悬疑,心理,爱情",
    "tags": [
      "跟踪",
      "记忆篡改",
      "病态爱",
      "反转"
    ],
    "oneLine": "她跟踪了他三年,直到有一天他主动回头说:“其实被跟踪的人是我。",
    "url": "./movies/movie-0727.html",
    "cover": "./127.jpg",
    "category": "经典片库",
    "categoryUrl": "./category-classic-library.html"
  },
  {
    "id": "0728",
    "title": "伏击",
    "year": "2025",
    "region": "中国大陆",
    "type": "电影",
    "genre": "战争/悬疑/动作",
    "tags": [
      "抗日战争",
      "陷阱",
      "心理博弈",
      "小队作战"
    ],
    "oneLine": "一支八路军小分队被上级命令在空无一人的村庄伏击,却发现要等的是自己人。",
    "url": "./movies/movie-0728.html",
    "cover": "./128.jpg",
    "category": "经典片库",
    "categoryUrl": "./category-classic-library.html"
  },
  {
    "id": "0729",
    "title": "爱的空间",
    "year": "2020",
    "region": "日本",
    "type": "电影",
    "genre": "爱情,剧情,奇幻",
    "tags": [
      "平行时空",
      "旧公寓",
      "书信传情",
      "治愈"
    ],
    "oneLine": "两对相隔五十年的情侣通过同一间公寓的壁橱互通信件,竟发现彼此是失散的血脉。",
    "url": "./movies/movie-0729.html",
    "cover": "./129.jpg",
    "category": "全球佳作",
    "categoryUrl": "./category-global-stories.html"
  },
  {
    "id": "0730",
    "title": "怪兽上班第二季",
    "year": "2024",
    "region": "美国",
    "type": "动漫",
    "genre": "喜剧,动画,家庭",
    "tags": [
      "怪兽",
      "职场",
      "电力公司",
      "续作",
      "治愈搞笑"
    ],
    "oneLine": "笑声取代尖叫成为新能源后,怪兽电力公司的员工们不得不转型,学习如何逗人类小孩笑。",
    "url": "./movies/movie-0730.html",
    "cover": "./130.jpg",
    "category": "动作专区",
    "categoryUrl": "./category-action-zone.html"
  },
  {
    "id": "0731",
    "title": "世外尘缘",
    "year": "2020",
    "region": "中国",
    "type": "剧集",
    "genre": "古装,仙侠,爱情",
    "tags": [
      "修仙",
      "凡间",
      "虐恋",
      "师徒",
      "轮回"
    ],
    "oneLine": "上仙为了渡劫下凡,变成了一个手无缚鸡之力的书生,没想到渡劫的雷没来,却被一个凡间小妖赖上了一万年。",
    "url": "./movies/movie-0731.html",
    "cover": "./131.jpg",
    "category": "家庭生活",
    "categoryUrl": "./category-family-life.html"
  },
  {
    "id": "0732",
    "title": "建筑学概论",
    "year": "2023",
    "region": "韩国",
    "type": "电影",
    "genre": "爱情",
    "tags": [
      "初恋",
      "遗憾美学",
      "时空交错",
      "工科男",
      "纯爱"
    ],
    "oneLine": "四十岁的中年建筑师,接到二十年前的初恋委托:为她建一栋能看到海的家。",
    "url": "./movies/movie-0732.html",
    "cover": "./132.jpg",
    "category": "奇幻科幻",
    "categoryUrl": "./category-fantasy-sci-fi.html"
  },
  {
    "id": "0733",
    "title": "断头谷第四季",
    "year": "2026",
    "region": "美国",
    "type": "剧集",
    "genre": "悬疑,奇幻,恐怖",
    "tags": [
      "无头骑士",
      "克苏鲁神话",
      "黑暗奇幻",
      "重启季"
    ],
    "oneLine": "沉睡谷再次陷入危机,伊卡博德·克莱恩的后人发现,无头骑士只是一个更古老、更邪恶存在的看门人。",
    "url": "./movies/movie-0733.html",
    "cover": "./133.jpg",
    "category": "院线热片",
    "categoryUrl": "./category-cinema-hits.html"
  },
  {
    "id": "0734",
    "title": "黑蜥蜴",
    "year": "2025",
    "region": "中国香港",
    "type": "电影",
    "genre": "犯罪/悬疑",
    "tags": [
      "黑色电影",
      "蛇蝎美人",
      "暗黑城市"
    ],
    "oneLine": "九龙城寨拆除前夜,代号“黑蜥蜴”的杀手连续刺杀三名黑帮头目,而警方发现她的目标是彻底毁掉整座城寨。",
    "url": "./movies/movie-0734.html",
    "cover": "./134.jpg",
    "category": "热映精选",
    "categoryUrl": "./category-hot-picks.html"
  },
  {
    "id": "0735",
    "title": "衰鬼逼人粤语",
    "year": "1991",
    "region": "中国香港",
    "type": "剧集",
    "genre": "喜剧,奇幻,恐怖",
    "tags": [
      "倒霉鬼附身",
      "都市传说",
      "单元剧"
    ],
    "oneLine": "史上最倒霉的保险经纪被一个千年衰鬼附身,从此他走到哪里,哪里就有人倒霉,但他的保险理赔率却飙升。",
    "url": "./movies/movie-0735.html",
    "cover": "./135.jpg",
    "category": "剧集连看",
    "categoryUrl": "./category-drama-series.html"
  },
  {
    "id": "0736",
    "title": "迪士尼动画·筑梦100年",
    "year": "2023",
    "region": "美国",
    "type": "电影/纪录片/动画",
    "genre": "纪录片/历史/动画",
    "tags": [
      "迪士尼",
      "幕后揭秘",
      "情怀杀",
      "百年庆典"
    ],
    "oneLine": "从一只老鼠到一个帝国,揭秘迪士尼动画100年来那些不为人知的幕后故事与至暗时刻。",
    "url": "./movies/movie-0736.html",
    "cover": "./136.jpg",
    "category": "全球佳作",
    "categoryUrl": "./category-global-stories.html"
  },
  {
    "id": "0737",
    "title": "最后的食谱:麒麟之舌",
    "year": "2024",
    "region": "日本",
    "type": "电影",
    "genre": "剧情,美食,历史",
    "tags": [
      "料理",
      "二战",
      "传承",
      "匠人精神",
      "温情"
    ],
    "oneLine": "2000年,一个自闭症厨师得到曾祖父留下的食谱,发现它记录的并非菜肴,而是1945年日本战败前夜的一段赎罪史。",
    "url": "./movies/movie-0737.html",
    "cover": "./137.jpg",
    "category": "都市爱情",
    "categoryUrl": "./category-romance-city.html"
  },
  {
    "id": "0738",
    "title": "小拇指",
    "year": "2020",
    "region": "法国",
    "type": "电影",
    "genre": "奇幻/冒险",
    "tags": [
      "微缩人",
      "父子",
      "虫洞"
    ],
    "oneLine": "七岁男孩意外变成只有小拇指大小,在自家后院的虫洞世界冒险寻父。",
    "url": "./movies/movie-0738.html",
    "cover": "./138.jpg",
    "category": "家庭生活",
    "categoryUrl": "./category-family-life.html"
  },
  {
    "id": "0739",
    "title": "见习排爆手",
    "year": "2025",
    "region": "中国大陆",
    "type": "电影",
    "genre": "动作",
    "tags": [
      "军旅",
      "排爆",
      "成长",
      "师徒",
      "热血"
    ],
    "oneLine": "一个“胆小鬼”新兵被分到了死亡率最高的排爆连,他的师父是那个传说中的“拆弹狂人”。",
    "url": "./movies/movie-0739.html",
    "cover": "./139.jpg",
    "category": "热映精选",
    "categoryUrl": "./category-hot-picks.html"
  },
  {
    "id": "0740",
    "title": "东京出租车",
    "year": "2026",
    "region": "日本",
    "type": "电视剧",
    "genre": "剧情,日常,社会",
    "tags": [
      "单元剧",
      "深夜档",
      "人间百态",
      "温情"
    ],
    "oneLine": "深夜的东京,一辆出租车穿梭于霓虹灯下,每个乘客都带着一个无法向人言说的故事。",
    "url": "./movies/movie-0740.html",
    "cover": "./140.jpg",
    "category": "剧集连看",
    "categoryUrl": "./category-drama-series.html"
  },
  {
    "id": "0741",
    "title": "飞女正传",
    "year": "2023",
    "region": "香港",
    "type": "电影",
    "genre": "动作,剧情",
    "tags": [
      "女性",
      "街头",
      "帮派",
      "复古",
      "港风"
    ],
    "oneLine": "1997前夕,香港最后一位“大姐大”被迫出山,对手不是黑帮,而是想清洗街区的房地产财团。",
    "url": "./movies/movie-0741.html",
    "cover": "./141.jpg",
    "category": "剧集连看",
    "categoryUrl": "./category-drama-series.html"
  },
  {
    "id": "0742",
    "title": "新同学",
    "year": "2023",
    "region": "中国大陆",
    "type": "电影",
    "genre": "青春,悬疑",
    "tags": [
      "校园",
      "转校生",
      "秘密",
      "心理"
    ],
    "oneLine": "高三最后一学期来的转学生从不说话,但他似乎知道每个人心底最深的秘密。",
    "url": "./movies/movie-0742.html",
    "cover": "./142.jpg",
    "category": "全球佳作",
    "categoryUrl": "./category-global-stories.html"
  },
  {
    "id": "0743",
    "title": "凡妮莎海辛第五季",
    "year": "2025",
    "region": "美国/加拿大",
    "type": "电视剧",
    "genre": "动作,奇幻,恐怖",
    "tags": [
      "吸血鬼",
      "猎魔",
      "末世",
      "女性"
    ],
    "oneLine": "随着黑暗腐蚀者的降临,凡妮莎必须做出终极抉择:拯救世界,还是拥抱体内的黑暗血脉?",
    "url": "./movies/movie-0743.html",
    "cover": "./143.jpg",
    "category": "青春喜剧",
    "categoryUrl": "./category-youth-comedy.html"
  },
  {
    "id": "0744",
    "title": "暗泳",
    "year": "2024",
    "region": "英国",
    "type": "电影",
    "genre": "悬疑,惊悚,体育",
    "tags": [
      "游泳馆",
      "夜班",
      "水鬼",
      "体制内",
      "都市传说"
    ],
    "oneLine": "一名失眠症患者应聘了老旧游泳馆的夜班救生员,却发现每天凌晨2点,水里会多出一个泳道。",
    "url": "./movies/movie-0744.html",
    "cover": "./144.jpg",
    "category": "剧集连看",
    "categoryUrl": "./category-drama-series.html"
  },
  {
    "id": "0745",
    "title": "满城尽带黄金甲",
    "year": "2006",
    "region": "中国大陆",
    "type": "电影",
    "genre": "剧情,动作",
    "tags": [
      "古装",
      "宫廷",
      "菊花",
      "雷雨",
      "悲剧"
    ],
    "oneLine": "大王远征归来,发现王后与太子有染,而二王子正密谋在重阳节发动兵变,满城菊花染血。",
    "url": "./movies/movie-0745.html",
    "cover": "./145.jpg",
    "category": "动作专区",
    "categoryUrl": "./category-action-zone.html"
  },
  {
    "id": "0746",
    "title": "小脚板走天涯2",
    "year": "2024",
    "region": "美国",
    "type": "电影/动画",
    "genre": "冒险/家庭",
    "tags": [
      "恐龙",
      "成长",
      "友情",
      "治愈"
    ],
    "oneLine": "为了寻找传说中永不枯竭的“彩虹水源”,小脚板踏上了横跨大裂谷的冒险。",
    "url": "./movies/movie-0746.html",
    "cover": "./146.jpg",
    "category": "院线热片",
    "categoryUrl": "./category-cinema-hits.html"
  },
  {
    "id": "0747",
    "title": "好孩子",
    "year": "2024",
    "region": "韩国",
    "type": "电影",
    "genre": "剧情,悬疑,惊悚",
    "tags": [
      "育儿",
      "控制欲",
      "反转",
      "心理惊悚",
      "家庭伦理"
    ],
    "oneLine": "所有人都羡慕她有一个完美儿子,直到她发现,儿子在“为你好”的名义下,已经换掉了四个母亲。",
    "url": "./movies/movie-0747.html",
    "cover": "./147.jpg",
    "category": "悬疑夜场",
    "categoryUrl": "./category-suspense-night.html"
  },
  {
    "id": "0748",
    "title": "山洼",
    "year": "2025",
    "region": "中国大陆",
    "type": "电影",
    "genre": "悬疑惊悚",
    "tags": [
      "山村",
      "邪教",
      "民俗"
    ],
    "oneLine": "支教老师发现山洼村每隔十年就会选出一名“新娘”送入后山,而这一次被选中的是他的女学生。",
    "url": "./movies/movie-0748.html",
    "cover": "./148.jpg",
    "category": "全球佳作",
    "categoryUrl": "./category-global-stories.html"
  },
  {
    "id": "0749",
    "title": "旧爱喜欢你",
    "year": "2025",
    "region": "中国香港",
    "type": "电影",
    "genre": "爱情/喜剧/剧情",
    "tags": [
      "前任",
      "都市情感",
      "破镜重圆"
    ],
    "oneLine": "分手十年的毒舌情侣因一档离婚综艺意外重逢,却发现当年分手的录音被公开。",
    "url": "./movies/movie-0749.html",
    "cover": "./149.jpg",
    "category": "奇幻科幻",
    "categoryUrl": "./category-fantasy-sci-fi.html"
  },
  {
    "id": "0750",
    "title": "浩瀚的夜晚",
    "year": "2026",
    "region": "美国",
    "type": "电影",
    "genre": "科幻/悬疑",
    "tags": [
      "冷战",
      "电台",
      "不明信号",
      "新墨西哥州"
    ],
    "oneLine": "1950年代新墨西哥州的一个深夜,电台DJ和总机接线员通过电波发现,一个不属于人类的声音正在向他们发出警告。",
    "url": "./movies/movie-0750.html",
    "cover": "./150.jpg",
    "category": "院线热片",
    "categoryUrl": "./category-cinema-hits.html"
  },
  {
    "id": "0751",
    "title": "鲱云",
    "year": "2023",
    "region": "日本",
    "type": "电影",
    "genre": "剧情/家庭/历史",
    "tags": [
      "战后",
      "渔民",
      "父女",
      "昭和"
    ],
    "oneLine": "1950年代日本渔村,父亲为了养活全家每天出海捕鲱鱼,女儿却在岸上等来了一场红色的雨。",
    "url": "./movies/movie-0751.html",
    "cover": "./1.jpg",
    "category": "经典片库",
    "categoryUrl": "./category-classic-library.html"
  },
  {
    "id": "0752",
    "title": "答得快好世界",
    "year": "2023",
    "region": "中国香港",
    "type": "剧集",
    "genre": "喜剧/奇幻",
    "tags": [
      "游戏世界",
      "答题闯关",
      "爆笑",
      "知识就是力量"
    ],
    "oneLine": "学渣女主误入“答题真人秀世界”,必须靠小学知识通关,否则永远困在电视里。",
    "url": "./movies/movie-0752.html",
    "cover": "./2.jpg",
    "category": "悬疑夜场",
    "categoryUrl": "./category-suspense-night.html"
  },
  {
    "id": "0753",
    "title": "忏悔",
    "year": "2023",
    "region": "俄罗斯",
    "type": "电影",
    "genre": "剧情、历史",
    "tags": [
      "斯大林时期",
      "告密者",
      "东正教",
      "救赎"
    ],
    "oneLine": "垂死的苏联老妇人在神父面前忏悔,她告发了自己的丈夫,而神父就是当年那个婴儿。",
    "url": "./movies/movie-0753.html",
    "cover": "./3.jpg",
    "category": "奇幻科幻",
    "categoryUrl": "./category-fantasy-sci-fi.html"
  },
  {
    "id": "0754",
    "title": "光辉时代",
    "year": "2014",
    "region": "英国",
    "type": "电影",
    "genre": "剧情,传记,历史",
    "tags": [
      "维多利亚",
      "工业革命",
      "女性觉醒",
      "建筑"
    ],
    "oneLine": "一名出身贫寒的女建筑师,在维多利亚时代的伦敦用钢铁与玻璃挑战整个僵化的男权社会。",
    "url": "./movies/movie-0754.html",
    "cover": "./4.jpg",
    "category": "经典片库",
    "categoryUrl": "./category-classic-library.html"
  },
  {
    "id": "0755",
    "title": "芫荽与欧芹",
    "year": "2022",
    "region": "法国/黎巴嫩",
    "type": "电影",
    "genre": "剧情/家庭/喜剧",
    "tags": [
      "厨艺",
      "移民家庭",
      "母女冲突",
      "文化差异",
      "美食治愈"
    ],
    "oneLine": "黎巴嫩移民母亲和法国长大的女儿唯一的共同语言是厨房,但两人对同一道菜的做法永远势如水火。",
    "url": "./movies/movie-0755.html",
    "cover": "./5.jpg",
    "category": "奇幻科幻",
    "categoryUrl": "./category-fantasy-sci-fi.html"
  },
  {
    "id": "0756",
    "title": "江湖流浪女",
    "year": "2023",
    "region": "中国香港",
    "type": "电影",
    "genre": "犯罪,剧情",
    "tags": [
      "底层",
      "女性",
      "复仇",
      "写实"
    ],
    "oneLine": "为了找回被拐走的女儿,流浪女混入黑帮内部,用自己的乞讨网络编织了一张覆盖全城的复仇地图。",
    "url": "./movies/movie-0756.html",
    "cover": "./6.jpg",
    "category": "全球佳作",
    "categoryUrl": "./category-global-stories.html"
  },
  {
    "id": "0757",
    "title": "我的过错",
    "year": "2024",
    "region": "西班牙",
    "type": "剧集",
    "genre": "剧情/悬疑",
    "tags": [
      "重组家庭",
      "青少年犯罪",
      "阶级冲突",
      "罪与罚"
    ],
    "oneLine": "富家继子为了报复父亲的冷漠,故意引诱同母异父的妹妹犯罪,却发现自己真的爱上了她。",
    "url": "./movies/movie-0757.html",
    "cover": "./7.jpg",
    "category": "院线热片",
    "categoryUrl": "./category-cinema-hits.html"
  },
  {
    "id": "0758",
    "title": "疯狂83",
    "year": "2024",
    "region": "中国香港",
    "type": "电影",
    "genre": "喜剧,动作,犯罪",
    "tags": [
      "港产片",
      "怀旧",
      "乌龙劫案",
      "警匪",
      "黑色幽默"
    ],
    "oneLine": "1983年,几个倒霉蛋误打误撞偷了黑帮的赃款,却因为一辆失控的出租车,卷入了一场全城追击。",
    "url": "./movies/movie-0758.html",
    "cover": "./8.jpg",
    "category": "家庭生活",
    "categoryUrl": "./category-family-life.html"
  },
  {
    "id": "0759",
    "title": "神鬼劫案:瞒天过海",
    "year": "2025",
    "region": "中国香港",
    "type": "电影",
    "genre": "动作,犯罪,悬疑",
    "tags": [
      "警匪",
      "骗局",
      "反转",
      "烧脑"
    ],
    "oneLine": "一桩完美劫案被“鬼魂”打破:劫匪发现他们要偷的东西,是警方为钓鱼执法的假文物,而真正的国宝早已被调包。",
    "url": "./movies/movie-0759.html",
    "cover": "./9.jpg",
    "category": "历史古装",
    "categoryUrl": "./category-history-costume.html"
  },
  {
    "id": "0760",
    "title": "勇破雷霆岛",
    "year": "1989",
    "region": "香港",
    "type": "电影",
    "genre": "动作/冒险",
    "tags": [
      "功夫",
      "海岛",
      "寻宝",
      "兄弟情"
    ],
    "oneLine": "退役雇佣兵阿龙接到前女友求救信号,登上雷霆岛才发现那里关着一群被用来做人体实验的退伍老兵。",
    "url": "./movies/movie-0760.html",
    "cover": "./10.jpg",
    "category": "青春喜剧",
    "categoryUrl": "./category-youth-comedy.html"
  },
  {
    "id": "0761",
    "title": "达格雷街风情",
    "year": "1976",
    "region": "法国",
    "type": "电影",
    "genre": "纪录片/喜剧",
    "tags": [
      "新浪潮",
      "街景",
      "市井生活",
      "瓦尔达",
      "观察"
    ],
    "oneLine": "著名导演瓦尔达将镜头对准自家门口的达格雷街,记录下那些平凡又动人的小人物。",
    "url": "./movies/movie-0761.html",
    "cover": "./11.jpg",
    "category": "奇幻科幻",
    "categoryUrl": "./category-fantasy-sci-fi.html"
  },
  {
    "id": "0762",
    "title": "花花公子之死",
    "year": "2024",
    "region": "英国",
    "type": "剧集",
    "genre": "悬疑/犯罪",
    "tags": [
      "豪宅谜案",
      "全员嫌疑人",
      "黑色幽默"
    ],
    "oneLine": "亿万花花公子坠楼身亡,参加派对的所有亲友,竟然每个人都曾想杀他。",
    "url": "./movies/movie-0762.html",
    "cover": "./12.jpg",
    "category": "青春喜剧",
    "categoryUrl": "./category-youth-comedy.html"
  },
  {
    "id": "0763",
    "title": "衰落的城堡",
    "year": "2001",
    "region": "西班牙/墨西哥",
    "type": "电影",
    "genre": "剧情/悬疑/奇幻",
    "tags": [
      "哥特风",
      "家族诅咒",
      "镜中幻象",
      "弑父疑云"
    ],
    "oneLine": "老伯爵临终前将城堡留给从未谋面的私生子,年轻人在巨大古堡中发现每一个镜子都困着一个祖先的亡魂。",
    "url": "./movies/movie-0763.html",
    "cover": "./13.jpg",
    "category": "经典片库",
    "categoryUrl": "./category-classic-library.html"
  },
  {
    "id": "0764",
    "title": "榴梿飘飘",
    "year": "2023",
    "region": "新加坡",
    "type": "电影",
    "genre": "家庭",
    "tags": [
      "榴梿",
      "故乡",
      "母女关系",
      "方言"
    ],
    "oneLine": "在纽约打拼的女儿回国照顾病重母亲,却发现母亲唯一认得的东西是榴梿,以及一口她早已忘记的闽南语。",
    "url": "./movies/movie-0764.html",
    "cover": "./14.jpg",
    "category": "青春喜剧",
    "categoryUrl": "./category-youth-comedy.html"
  },
  {
    "id": "0765",
    "title": "心动警报第一部",
    "year": "2020",
    "region": "韩国",
    "type": "剧集",
    "genre": "爱情,医疗",
    "tags": [
      "医生",
      "心率",
      "契约恋爱",
      "治愈",
      "高甜"
    ],
    "oneLine": "一个有人际恐惧症的明星医生,为了保住医院而与一个综艺PD签订了契约恋爱。",
    "url": "./movies/movie-0765.html",
    "cover": "./15.jpg",
    "category": "动作专区",
    "categoryUrl": "./category-action-zone.html"
  },
  {
    "id": "0766",
    "title": "隐秘的角落",
    "year": "2020",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "悬疑/剧情/犯罪",
    "tags": [
      "未成年人犯罪",
      "家庭暴力",
      "心理博弈",
      "高智商"
    ],
    "oneLine": "三个孩子无意中拍下一场谋杀后,他们没有报警,而是给对方寄去了勒索信。",
    "url": "./movies/movie-0766.html",
    "cover": "./16.jpg",
    "category": "全球佳作",
    "categoryUrl": "./category-global-stories.html"
  },
  {
    "id": "0767",
    "title": "世界的角落是晚餐",
    "year": "2022",
    "region": "日本",
    "type": "电影",
    "genre": "剧情/奇幻/家庭",
    "tags": [
      "治愈",
      "美食",
      "生死",
      "奇幻设定"
    ],
    "oneLine": "每一盘菜都会让食客看到亡者生前最幸福的记忆,这家餐厅开在生与死的交界处。",
    "url": "./movies/movie-0767.html",
    "cover": "./17.jpg",
    "category": "热映精选",
    "categoryUrl": "./category-hot-picks.html"
  },
  {
    "id": "0768",
    "title": "超完美社区",
    "year": "2026",
    "region": "美国",
    "type": "剧集",
    "genre": "科幻/惊悚",
    "tags": [
      "乌托邦",
      "克隆人",
      "监控社会",
      "郊区恐怖"
    ],
    "oneLine": "全美排名第一的宜居社区里,新人发现所有邻居都是同一个人的不同年龄克隆体。",
    "url": "./movies/movie-0768.html",
    "cover": "./18.jpg",
    "category": "家庭生活",
    "categoryUrl": "./category-family-life.html"
  },
  {
    "id": "0769",
    "title": "银河女战士",
    "year": "1985",
    "region": "日本",
    "type": "动画剧集",
    "genre": "科幻,动作,冒险",
    "tags": [
      "太空歌剧",
      "女性主角",
      "机甲",
      "星际战争",
      "经典"
    ],
    "oneLine": "公元2800年,一支全女性精锐小队驾驶变形机甲,守护银河系最后一座人类前哨站。",
    "url": "./movies/movie-0769.html",
    "cover": "./19.jpg",
    "category": "都市爱情",
    "categoryUrl": "./category-romance-city.html"
  },
  {
    "id": "0770",
    "title": "失落的帝国:神秘的水晶",
    "year": "2021",
    "region": "美国",
    "type": "电影",
    "genre": "冒险/奇幻",
    "tags": [
      "亚特兰蒂斯",
      "探险",
      "考古",
      "友情"
    ],
    "oneLine": "语言学家林娜破译了羊皮卷上的警告,却还是按下了水晶钥匙,释放了帝国的守卫。",
    "url": "./movies/movie-0770.html",
    "cover": "./20.jpg",
    "category": "家庭生活",
    "categoryUrl": "./category-family-life.html"
  },
  {
    "id": "0771",
    "title": "疯狂的乔治王",
    "year": "2024",
    "region": "英国",
    "type": "电视剧",
    "genre": "历史/传记/心理",
    "tags": [
      "英国王室",
      "精神疾病",
      "权斗",
      "医疗史"
    ],
    "oneLine": "乔治三世突然“发疯”,王后与首相密谋将他软禁,而他的主治医生用的是21世纪才被承认的原始心理疗法。",
    "url": "./movies/movie-0771.html",
    "cover": "./21.jpg",
    "category": "经典片库",
    "categoryUrl": "./category-classic-library.html"
  },
  {
    "id": "0772",
    "title": "两个男人和一个衣柜",
    "year": "1958",
    "region": "波兰",
    "type": "电影",
    "genre": "剧情/奇幻/短片",
    "tags": [
      "黑白",
      "超现实",
      "荒诞",
      "人性隐喻"
    ],
    "oneLine": "两个男人抬着一个沉重的衣柜穿越荒原,途中遇到形形色色的人,却始终无法放下它。",
    "url": "./movies/movie-0772.html",
    "cover": "./22.jpg",
    "category": "经典片库",
    "categoryUrl": "./category-classic-library.html"
  },
  {
    "id": "0773",
    "title": "计谋大劫案",
    "year": "2024",
    "region": "韩国",
    "type": "电影",
    "genre": "动作/犯罪/喜剧",
    "tags": [
      "高智商",
      "骗局",
      "大盗",
      "反转再反转"
    ],
    "oneLine": "七人团伙计划劫走黑钱,却发现同一时间另有五拨人也在打它的主意。",
    "url": "./movies/movie-0773.html",
    "cover": "./23.jpg",
    "category": "都市爱情",
    "categoryUrl": "./category-romance-city.html"
  },
  {
    "id": "0774",
    "title": "我的狐仙女友",
    "year": "2024",
    "region": "韩国",
    "type": "电影",
    "genre": "奇幻/爱情/古装",
    "tags": [
      "人妖恋",
      "朝鲜时代",
      "狐妖",
      "复仇"
    ],
    "oneLine": "朝鲜时代,一只修行千年的狐妖为了报恩嫁给人类书生,却在大婚之夜发现他是当年灭族的仇人之子。",
    "url": "./movies/movie-0774.html",
    "cover": "./24.jpg",
    "category": "经典片库",
    "categoryUrl": "./category-classic-library.html"
  },
  {
    "id": "0775",
    "title": "啦啦队",
    "year": "2024",
    "region": "美国",
    "type": "剧集",
    "genre": "悬疑青春",
    "tags": [
      "校园霸凌",
      "死亡直播",
      "社团黑暗"
    ],
    "oneLine": "高中啦啦队为了保住全国冠军,在队长带领下,对“拖后腿”的队员进行了一场意外致命的“训练”。",
    "url": "./movies/movie-0775.html",
    "cover": "./25.jpg",
    "category": "奇幻科幻",
    "categoryUrl": "./category-fantasy-sci-fi.html"
  },
  {
    "id": "0776",
    "title": "筷仙",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "genre": "恐怖/民俗/悬疑",
    "tags": [
      "东北民俗",
      "招魂游戏",
      "乡村怪谈"
    ],
    "oneLine": "一群大学生在东北农村玩“请筷仙”游戏,结果筷子真的动了,并且说出了一桩二十年前的灭门案。",
    "url": "./movies/movie-0776.html",
    "cover": "./26.jpg",
    "category": "家庭生活",
    "categoryUrl": "./category-family-life.html"
  },
  {
    "id": "0777",
    "title": "伊凡",
    "year": "2025",
    "region": "俄罗斯",
    "type": "电影",
    "genre": "剧情/历史",
    "tags": [
      "沙俄",
      "宫廷斗争",
      "权力",
      "人性"
    ],
    "oneLine": "少年伊凡意外发现自己是被流放的皇室后裔,一场夺回王位的征途却让他陷入更大的道德困境。",
    "url": "./movies/movie-0777.html",
    "cover": "./27.jpg",
    "category": "青春喜剧",
    "categoryUrl": "./category-youth-comedy.html"
  },
  {
    "id": "0778",
    "title": "夏天在淘气",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "genre": "剧情,家庭",
    "tags": [
      "留守儿童",
      "暑假",
      "成长"
    ],
    "oneLine": "七岁女孩被送到乡下外婆家过暑假,她以为自己是来度假的,其实是母亲不要她了。",
    "url": "./movies/movie-0778.html",
    "cover": "./28.jpg",
    "category": "历史古装",
    "categoryUrl": "./category-history-costume.html"
  },
  {
    "id": "0779",
    "title": "石膏绷带",
    "year": "2017",
    "region": "韩国",
    "type": "电影",
    "genre": "惊悚/心理",
    "tags": [
      "骨科病房",
      "谎言",
      "控制",
      "护士"
    ],
    "oneLine": "车祸后双腿打满石膏,她发现自己从未出过事。",
    "url": "./movies/movie-0779.html",
    "cover": "./29.jpg",
    "category": "剧集连看",
    "categoryUrl": "./category-drama-series.html"
  },
  {
    "id": "0780",
    "title": "奇迹篮球队",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "genre": "剧情,运动",
    "tags": [
      "热血",
      "逆袭",
      "青少年",
      "体育精神"
    ],
    "oneLine": "一群被全校放弃的“垫底”学生,能否在三个月内从零开始打进全国大赛?",
    "url": "./movies/movie-0780.html",
    "cover": "./30.jpg",
    "category": "热映精选",
    "categoryUrl": "./category-hot-picks.html"
  },
  {
    "id": "0781",
    "title": "小鬼魔鞋",
    "year": "2024",
    "region": "美国",
    "type": "电影",
    "genre": "喜剧,家庭,奇幻",
    "tags": [
      "篮球",
      "魔法运动鞋",
      "儿童",
      "体育励志"
    ],
    "oneLine": "12岁篮球少年捡到一双失传的限量版球鞋,一夜之间成为球场传说。",
    "url": "./movies/movie-0781.html",
    "cover": "./31.jpg",
    "category": "青春喜剧",
    "categoryUrl": "./category-youth-comedy.html"
  },
  {
    "id": "0782",
    "title": "致命玩笑",
    "year": "2026",
    "region": "美国",
    "type": "电影",
    "genre": "惊悚/恐怖",
    "tags": [
      "小丑",
      "恶作剧",
      "直播",
      "反套路"
    ],
    "oneLine": "一群网红直播玩“整蛊路人”的恶作剧,直到他们扮成小丑敲开了一个连环杀手的门。",
    "url": "./movies/movie-0782.html",
    "cover": "./32.jpg",
    "category": "奇幻科幻",
    "categoryUrl": "./category-fantasy-sci-fi.html"
  },
  {
    "id": "0783",
    "title": "极地恶灵第一季",
    "year": "2018",
    "region": "美国",
    "type": "剧集",
    "genre": "恐怖,历史,悬疑",
    "tags": [
      "极地",
      "探险",
      "怪物",
      "生存",
      "真实改编"
    ],
    "oneLine": "1847年,两艘英国皇家探险船被困北极冰层,船员们遭遇了一只无形的远古恶灵。",
    "url": "./movies/movie-0783.html",
    "cover": "./33.jpg",
    "category": "剧集连看",
    "categoryUrl": "./category-drama-series.html"
  },
  {
    "id": "0784",
    "title": "三十极夜",
    "year": "2026",
    "region": "美国",
    "type": "电影",
    "genre": "科幻/惊悚/灾难",
    "tags": [
      "极夜",
      "生存",
      "怪物",
      "密闭空间",
      "人性实验"
    ],
    "oneLine": "北极科考站进入持续一个月的极夜,队员们发现,黑暗本身正在吞噬他们的记忆和身体。",
    "url": "./movies/movie-0784.html",
    "cover": "./34.jpg",
    "category": "都市爱情",
    "categoryUrl": "./category-romance-city.html"
  },
  {
    "id": "0785",
    "title": "国士无双",
    "year": "2025",
    "region": "中国台湾",
    "type": "剧集",
    "genre": "历史,悬疑,动作",
    "tags": [
      "日据时期",
      "间谍",
      "象棋",
      "双面间谍",
      "史诗"
    ],
    "oneLine": "1940年代的台北,一名日本军官与一名中国棋手在棋盘上对弈,棋盘下藏着影响太平洋战局的最高机密。",
    "url": "./movies/movie-0785.html",
    "cover": "./35.jpg",
    "category": "奇幻科幻",
    "categoryUrl": "./category-fantasy-sci-fi.html"
  },
  {
    "id": "0786",
    "title": "王后游戏",
    "year": "2024",
    "region": "韩国",
    "type": "电影",
    "genre": "悬疑,剧情,犯罪",
    "tags": [
      "国际象棋",
      "女特工",
      "政坛阴谋",
      "以智取胜",
      "冷峻"
    ],
    "oneLine": "曾是天才棋手的她,如今是深陷权力漩涡的第一夫人,她用下棋的方式在政坛杀出一条血路。",
    "url": "./movies/movie-0786.html",
    "cover": "./36.jpg",
    "category": "都市爱情",
    "categoryUrl": "./category-romance-city.html"
  },
  {
    "id": "0787",
    "title": "面纱之下",
    "year": "2024",
    "region": "法国/摩洛哥",
    "type": "电影",
    "genre": "悬疑/剧情",
    "tags": [
      "身份互换",
      "间谍",
      "宗教"
    ],
    "oneLine": "一位西方女记者与一名中东寡妇互换身份,意外揭开了一场关于石油与信仰的惊天阴谋。",
    "url": "./movies/movie-0787.html",
    "cover": "./37.jpg",
    "category": "热映精选",
    "categoryUrl": "./category-hot-picks.html"
  },
  {
    "id": "0788",
    "title": "最后的成员",
    "year": "2024",
    "region": "韩国",
    "type": "电影",
    "genre": "动作/惊悚",
    "tags": [
      "退伍军人",
      "复仇",
      "黑帮",
      "以寡敌众",
      "写实"
    ],
    "oneLine": "一支特种部队被团灭,唯一幸存的炊事兵要为战友讨回公道。",
    "url": "./movies/movie-0788.html",
    "cover": "./38.jpg",
    "category": "历史古装",
    "categoryUrl": "./category-history-costume.html"
  },
  {
    "id": "0789",
    "title": "分手说爱你 粤语",
    "year": "2024",
    "region": "中国香港",
    "type": "电影",
    "genre": "爱情/剧情",
    "tags": [
      "港味",
      "现实主义",
      "平凡情侣",
      "反转"
    ],
    "oneLine": "一对同居四年的情侣决定在分手前,去茶餐厅吃最后一顿饭,却发现忘了带钱包。",
    "url": "./movies/movie-0789.html",
    "cover": "./39.jpg",
    "category": "历史古装",
    "categoryUrl": "./category-history-costume.html"
  },
  {
    "id": "0790",
    "title": "仲夏夜魔法",
    "year": "2026",
    "region": "美国",
    "type": "动画电影",
    "genre": "奇幻/家庭/喜剧",
    "tags": [
      "精灵",
      "魔法",
      "夏至"
    ],
    "oneLine": "精灵女王为了拯救枯萎的魔法森林,意外将一个人类男孩的“噩梦”变成了能吃的实物。",
    "url": "./movies/movie-0790.html",
    "cover": "./40.jpg",
    "category": "剧集连看",
    "categoryUrl": "./category-drama-series.html"
  },
  {
    "id": "0791",
    "title": "王爷到",
    "year": "2024",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "古装/喜剧/悬疑",
    "tags": [
      "清朝",
      "王爷",
      "卧底",
      "查案",
      "反套路"
    ],
    "oneLine": "整天斗蛐蛐逛花楼的废柴九王爷,其实是皇帝暗插在朝野中最高级别的密探。",
    "url": "./movies/movie-0791.html",
    "cover": "./41.jpg",
    "category": "奇幻科幻",
    "categoryUrl": "./category-fantasy-sci-fi.html"
  },
  {
    "id": "0792",
    "title": "史蒂夫·乔布斯:机器人生",
    "year": "2024",
    "region": "美国",
    "type": "电影",
    "genre": "纪录片,传记",
    "tags": [
      "乔布斯",
      "科技",
      "人性",
      "反思"
    ],
    "oneLine": "这不是一部歌功颂德的纪录片,它试图还原乔布斯作为一个“复杂机器”的冰冷与人性的两面。",
    "url": "./movies/movie-0792.html",
    "cover": "./42.jpg",
    "category": "都市爱情",
    "categoryUrl": "./category-romance-city.html"
  },
  {
    "id": "0793",
    "title": "闪婚总动员",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "genre": "喜剧、爱情、家庭",
    "tags": [
      "相亲",
      "催婚",
      "春节档",
      "闪婚"
    ],
    "oneLine": "32岁的女白领为应付母亲催婚,在相亲APP上匹配了一个“完美男人”,闪婚当晚才发现他是个骗子,而她妈早就知道了。",
    "url": "./movies/movie-0793.html",
    "cover": "./43.jpg",
    "category": "剧集连看",
    "categoryUrl": "./category-drama-series.html"
  },
  {
    "id": "0794",
    "title": "午夜凶铃2:贞子缠身",
    "year": "2024",
    "region": "日本",
    "type": "电影",
    "genre": "恐怖/超自然",
    "tags": [
      "J-Horror",
      "诅咒蔓延",
      "轮回",
      "都市传说"
    ],
    "oneLine": "七天后,看过录像带的人没死,但贞子从他们的手机屏幕里爬进了现实世界。",
    "url": "./movies/movie-0794.html",
    "cover": "./44.jpg",
    "category": "悬疑夜场",
    "categoryUrl": "./category-suspense-night.html"
  },
  {
    "id": "0795",
    "title": "风流公子花弄蝶",
    "year": "2025",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "古装喜剧",
    "tags": [
      "武侠",
      "反套路",
      "单元剧"
    ],
    "oneLine": "江湖第一花花公子其实是女儿身,为了退婚不得不假扮渣男,结果却惹来无数桃花债。",
    "url": "./movies/movie-0795.html",
    "cover": "./45.jpg",
    "category": "院线热片",
    "categoryUrl": "./category-cinema-hits.html"
  },
  {
    "id": "0796",
    "title": "再爱24小时",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "genre": "爱情,奇幻",
    "tags": [
      "时间循环",
      "婚姻危机",
      "治愈"
    ],
    "oneLine": "离婚冷静期最后24小时,丈夫意外获得重置时间的能力,却发现每次重来都让妻子更想离开。",
    "url": "./movies/movie-0796.html",
    "cover": "./46.jpg",
    "category": "悬疑夜场",
    "categoryUrl": "./category-suspense-night.html"
  },
  {
    "id": "0797",
    "title": "憨夫成龙国语",
    "year": "2005",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "喜剧/爱情/古装",
    "tags": [
      "傻人有傻福",
      "先婚后爱",
      "宅斗",
      "搞笑"
    ],
    "oneLine": "因意外变傻的富家少爷被换婚给泼辣村姑,却阴差阳错成了轰动全城的商业奇才。",
    "url": "./movies/movie-0797.html",
    "cover": "./47.jpg",
    "category": "悬疑夜场",
    "categoryUrl": "./category-suspense-night.html"
  },
  {
    "id": "0798",
    "title": "大学航空炸弹客",
    "year": "2026",
    "region": "美国",
    "type": "剧集",
    "genre": "犯罪,剧情,心理",
    "tags": [
      "真实改编",
      "天才罪犯",
      "侧写",
      "社会批判"
    ],
    "oneLine": "这不仅是关于一个寄炸弹的天才,更是关于一个被大学“制造”出来,又回头向大学复仇的悲剧灵魂。",
    "url": "./movies/movie-0798.html",
    "cover": "./48.jpg",
    "category": "悬疑夜场",
    "categoryUrl": "./category-suspense-night.html"
  },
  {
    "id": "0799",
    "title": "四叠半时光机",
    "year": "2024",
    "region": "日本",
    "type": "动画剧集",
    "genre": "奇幻科幻",
    "tags": [
      "时间循环",
      "狭小空间",
      "黑色幽默",
      "青春焦虑",
      "平行宇宙"
    ],
    "oneLine": "一台从未来送来的时光机,卡在了他四叠半公寓的壁橱里,每次开门都会撞碎一个宇宙。",
    "url": "./movies/movie-0799.html",
    "cover": "./49.jpg",
    "category": "奇幻科幻",
    "categoryUrl": "./category-fantasy-sci-fi.html"
  },
  {
    "id": "0800",
    "title": "河东狮吼2",
    "year": "2027",
    "region": "中国内地",
    "type": "电影",
    "genre": "喜剧,爱情,古装",
    "tags": [
      "女强男弱",
      "另类武侠",
      "婚姻驯化"
    ],
    "oneLine": "宋朝第一“惧内”高手柳公子,被逼娶了江湖上赫赫有名的“母老虎”苏月,新婚夜才发现自己娶的是个武学天才。",
    "url": "./movies/movie-0800.html",
    "cover": "./50.jpg",
    "category": "热映精选",
    "categoryUrl": "./category-hot-picks.html"
  },
  {
    "id": "0801",
    "title": "香烟和热巧克力",
    "year": "2024",
    "region": "法国",
    "type": "电影",
    "genre": "剧情",
    "tags": [
      "孤独",
      "治愈",
      "甜食",
      "跨代友谊"
    ],
    "oneLine": "一根烟与一杯热巧,两个陌生人交换了后半生最温暖的秘密。",
    "url": "./movies/movie-0801.html",
    "cover": "./51.jpg",
    "category": "全球佳作",
    "categoryUrl": "./category-global-stories.html"
  },
  {
    "id": "0802",
    "title": "俄狄浦斯王",
    "year": "2026",
    "region": "希腊",
    "type": "电影",
    "genre": "剧情/悬疑/悲剧",
    "tags": [
      "古希腊悲剧",
      "心理惊悚",
      "宿命论"
    ],
    "oneLine": "现代心理医生破解一桩弑父娶母连环案,最后发现预言指向自己。",
    "url": "./movies/movie-0802.html",
    "cover": "./52.jpg",
    "category": "全球佳作",
    "categoryUrl": "./category-global-stories.html"
  },
  {
    "id": "0803",
    "title": "我非英雄",
    "year": "2025",
    "region": "中国大陆",
    "type": "网络剧",
    "genre": "悬疑,犯罪,心理",
    "tags": [
      "刑警",
      "双面人",
      "卧底",
      "心理创伤"
    ],
    "oneLine": "一个患有人格分裂的刑警,白天的自己追查连环杀手,晚上的自己却在给杀手提供破案建议。",
    "url": "./movies/movie-0803.html",
    "cover": "./53.jpg",
    "category": "动作专区",
    "categoryUrl": "./category-action-zone.html"
  },
  {
    "id": "0804",
    "title": "卓雅",
    "year": "2025",
    "region": "俄罗斯",
    "type": "电影",
    "genre": "战争,剧情,历史,传记",
    "tags": [
      "二战",
      "苏联女英雄",
      "游击战",
      "爱国主义",
      "真实事件"
    ],
    "oneLine": "年仅18岁的苏联女游击队员卓雅,在被德军俘虏后,用生命诠释了何为不屈与信仰。",
    "url": "./movies/movie-0804.html",
    "cover": "./54.jpg",
    "category": "悬疑夜场",
    "categoryUrl": "./category-suspense-night.html"
  },
  {
    "id": "0805",
    "title": "边城",
    "year": "1984",
    "region": "中国大陆",
    "type": "电影",
    "genre": "剧情,文艺",
    "tags": [
      "湘西",
      "乡土",
      "纯爱",
      "等待",
      "渡船"
    ],
    "oneLine": "湘西渡口少女爱上船夫孙子,误会与沉默让一段初恋在端午龙舟赛后悄然崩塌。",
    "url": "./movies/movie-0805.html",
    "cover": "./55.jpg",
    "category": "历史古装",
    "categoryUrl": "./category-history-costume.html"
  },
  {
    "id": "0806",
    "title": "创圣的大天使",
    "year": "2024",
    "region": "日本",
    "type": "动画剧集(26集)",
    "genre": "科幻/机战/神话",
    "tags": [
      "合体机器人",
      "轮回转世",
      "超能力",
      "河森正治"
    ],
    "oneLine": "一万两千年后,拥有前世记忆的少年少女们驾驶三台战机合体,对抗从封印中苏醒的堕天使。",
    "url": "./movies/movie-0806.html",
    "cover": "./56.jpg",
    "category": "剧集连看",
    "categoryUrl": "./category-drama-series.html"
  },
  {
    "id": "0807",
    "title": "初生之犊",
    "year": "1994",
    "region": "中国香港",
    "type": "电影",
    "genre": "动作,犯罪,喜剧",
    "tags": [
      "实习警察",
      "乌龙卧底",
      "黑帮父子",
      "港式无厘头"
    ],
    "oneLine": "警校垫底的学渣被派去做卧底,结果黑帮老大竟是他失散多年的亲爹。",
    "url": "./movies/movie-0807.html",
    "cover": "./57.jpg",
    "category": "青春喜剧",
    "categoryUrl": "./category-youth-comedy.html"
  },
  {
    "id": "0808",
    "title": "洪福齐天",
    "year": "2025",
    "region": "中国大陆",
    "type": "电影",
    "genre": "喜剧,奇幻,家庭",
    "tags": [
      "好运",
      "代价",
      "小人物"
    ],
    "oneLine": "运气垫底的倒霉蛋意外获得“好运共享APP”,每用一次就会随机吸走别人的运气。",
    "url": "./movies/movie-0808.html",
    "cover": "./58.jpg",
    "category": "全球佳作",
    "categoryUrl": "./category-global-stories.html"
  },
  {
    "id": "0809",
    "title": "踏血寻梅",
    "year": "2015",
    "region": "中国香港",
    "type": "电影",
    "genre": "剧情,犯罪",
    "tags": [
      "真实案件改编",
      "分尸",
      "孤独",
      "社会边缘"
    ],
    "oneLine": "一个移民少女被杀分尸,老警探在追查凶手时,发现他自己也是这个冰冷社会的受害者。",
    "url": "./movies/movie-0809.html",
    "cover": "./59.jpg",
    "category": "院线热片",
    "categoryUrl": "./category-cinema-hits.html"
  },
  {
    "id": "0810",
    "title": "克洛诺斯",
    "year": "2019",
    "region": "德国",
    "type": "电影",
    "genre": "科幻/惊悚",
    "tags": [
      "时间操控",
      "道德困境",
      "科技伦理"
    ],
    "oneLine": "物理学家发明了能让时间暂停的装置,却发现每次使用都会抹去世界上一个无辜的人。",
    "url": "./movies/movie-0810.html",
    "cover": "./60.jpg",
    "category": "悬疑夜场",
    "categoryUrl": "./category-suspense-night.html"
  },
  {
    "id": "0811",
    "title": "疯狂肚皮舞娘",
    "year": "2025",
    "region": "巴西",
    "type": "电影",
    "genre": "喜剧/歌舞",
    "tags": [
      "肚皮舞",
      "主妇",
      "逆袭",
      "贫民窟",
      "狂欢"
    ],
    "oneLine": "巴西贫民窟五个家庭主妇组成了肚皮舞团,要参加全国大赛赢取奖金。",
    "url": "./movies/movie-0811.html",
    "cover": "./61.jpg",
    "category": "家庭生活",
    "categoryUrl": "./category-family-life.html"
  },
  {
    "id": "0812",
    "title": "水上漂",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "genre": "剧情运动",
    "tags": [
      "长江",
      "货运",
      "父子",
      "跑船",
      "时代变迁"
    ],
    "oneLine": "长江最后的跑船人,要让儿子的骨灰从重庆漂到上海,沿途每座桥撒一把。",
    "url": "./movies/movie-0812.html",
    "cover": "./62.jpg",
    "category": "历史古装",
    "categoryUrl": "./category-history-costume.html"
  },
  {
    "id": "0813",
    "title": "夺命脱口秀",
    "year": "2025",
    "region": "美国",
    "type": "电影",
    "genre": "悬疑,惊悚,犯罪",
    "tags": [
      "单口喜剧",
      "死亡游戏",
      "密室",
      "反转",
      "社会讽刺"
    ],
    "oneLine": "五名脱口秀演员被困俱乐部,必须讲出让观众发笑的笑话,否则就会被杀死。",
    "url": "./movies/movie-0813.html",
    "cover": "./63.jpg",
    "category": "奇幻科幻",
    "categoryUrl": "./category-fantasy-sci-fi.html"
  },
  {
    "id": "0814",
    "title": "每天都在征服生活",
    "year": "2024",
    "region": "中国大陆",
    "type": "电视剧",
    "genre": "剧情/家庭",
    "tags": [
      "女性",
      "成长",
      "职场",
      "现实主义"
    ],
    "oneLine": "一个35岁的单亲妈妈被裁员后,为了还房贷和供女儿留学,同时打了四份工。",
    "url": "./movies/movie-0814.html",
    "cover": "./64.jpg",
    "category": "悬疑夜场",
    "categoryUrl": "./category-suspense-night.html"
  },
  {
    "id": "0815",
    "title": "时间上的家",
    "year": "2024",
    "region": "韩国",
    "type": "电影",
    "genre": "悬疑,惊悚,科幻",
    "tags": [
      "时间循环",
      "凶宅",
      "父女"
    ],
    "oneLine": "一栋发生过多起失踪案的凶宅,每住进一户新人家,就会回到1987年的同一天。",
    "url": "./movies/movie-0815.html",
    "cover": "./65.jpg",
    "category": "全球佳作",
    "categoryUrl": "./category-global-stories.html"
  },
  {
    "id": "0816",
    "title": "欢乐龙虎榜",
    "year": "1990",
    "region": "中国香港",
    "type": "电影",
    "genre": "喜剧,动作",
    "tags": [
      "港式无厘头",
      "警匪",
      "乌龙",
      "兄弟情"
    ],
    "oneLine": "全港最废柴的警探“龙”和最古板的搭档“虎”,误打误撞卷入跨国军火案,全程高能爆笑。",
    "url": "./movies/movie-0816.html",
    "cover": "./66.jpg",
    "category": "全球佳作",
    "categoryUrl": "./category-global-stories.html"
  },
  {
    "id": "0817",
    "title": "夸伦奎地",
    "year": "2015",
    "region": "澳大利亚",
    "type": "电影",
    "genre": "悬疑/奇幻",
    "tags": [
      "神秘",
      "文化冲突",
      "原始信仰",
      "心理"
    ],
    "oneLine": "一个地质学家在澳洲内陆发现了一块刻着“夸伦奎地”的巨石,随后整个团队开始集体失忆。",
    "url": "./movies/movie-0817.html",
    "cover": "./67.jpg",
    "category": "都市爱情",
    "categoryUrl": "./category-romance-city.html"
  },
  {
    "id": "0818",
    "title": "我们的幸福时光",
    "year": "2026",
    "region": "韩国",
    "type": "剧集",
    "genre": "剧情、家庭、治愈",
    "tags": [
      "时间胶囊",
      "回忆",
      "三兄妹",
      "和解",
      "生死"
    ],
    "oneLine": "母亲临终前留下一把打不开的锁,三兄妹必须用儿时的记忆拼出密码,而密码是母亲藏了四十年的秘密。",
    "url": "./movies/movie-0818.html",
    "cover": "./68.jpg",
    "category": "动作专区",
    "categoryUrl": "./category-action-zone.html"
  },
  {
    "id": "0819",
    "title": "舞台",
    "year": "2022",
    "region": "法国",
    "type": "电影",
    "genre": "剧情,心理,实验",
    "tags": [
      "剧场",
      "分裂人格",
      "元叙事"
    ],
    "oneLine": "一名女演员在排练独白剧时,发现剧本里的每一句台词都精准预言了她当天发生的真实事件。",
    "url": "./movies/movie-0819.html",
    "cover": "./69.jpg",
    "category": "悬疑夜场",
    "categoryUrl": "./category-suspense-night.html"
  },
  {
    "id": "0820",
    "title": "皮尔普斯一家",
    "year": "2018",
    "region": "美国",
    "type": "电影",
    "genre": "喜剧,家庭",
    "tags": [
      "黑人家庭",
      "婚礼闹剧",
      "阶级差异"
    ],
    "oneLine": "普通黑人小伙去见富二代女友的父母,却发现这个“上流社会”家庭的秘密多得数不清。",
    "url": "./movies/movie-0820.html",
    "cover": "./70.jpg",
    "category": "青春喜剧",
    "categoryUrl": "./category-youth-comedy.html"
  },
  {
    "id": "0821",
    "title": "与神同行:罪与罚",
    "year": "2017",
    "region": "韩国",
    "type": "电影",
    "genre": "奇幻,剧情",
    "tags": [
      "阴间审判",
      "七重地狱",
      "亲情催泪",
      "转世"
    ],
    "oneLine": "一名消防员死后被地狱使者辩护,必须在49天内通过七重审判才能转世托梦给母亲。",
    "url": "./movies/movie-0821.html",
    "cover": "./71.jpg",
    "category": "都市爱情",
    "categoryUrl": "./category-romance-city.html"
  },
  {
    "id": "0822",
    "title": "唐探之盛世少年",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "genre": "喜剧,悬疑,动作",
    "tags": [
      "唐朝",
      "少年",
      "推理",
      "热血"
    ],
    "oneLine": "长安城最废柴的太子与最书呆的侍郎之女联手,破获了一起威胁大唐“盛世气象”的诡异密室案。",
    "url": "./movies/movie-0822.html",
    "cover": "./72.jpg",
    "category": "动作专区",
    "categoryUrl": "./category-action-zone.html"
  },
  {
    "id": "0823",
    "title": "武林不二周刊",
    "year": "2023",
    "region": "中国台湾",
    "type": "剧集",
    "genre": "喜剧/武侠",
    "tags": [
      "古装职场",
      "狗仔队",
      "江湖八卦",
      "单元剧"
    ],
    "oneLine": "江湖第一狗仔组织的头牌记者,专挖大侠黑料和门派秘辛,直到他意外拍到了自己老板的惊天大瓜。",
    "url": "./movies/movie-0823.html",
    "cover": "./73.jpg",
    "category": "历史古装",
    "categoryUrl": "./category-history-costume.html"
  },
  {
    "id": "0824",
    "title": "明亮的烟雾",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "genre": "悬疑/犯罪",
    "tags": [
      "火灾",
      "记忆碎片",
      "复仇",
      "小镇",
      "真相"
    ],
    "oneLine": "一场大火烧死了镇长,却留下只有失忆消防员能看见的彩色烟雾。",
    "url": "./movies/movie-0824.html",
    "cover": "./74.jpg",
    "category": "悬疑夜场",
    "categoryUrl": "./category-suspense-night.html"
  },
  {
    "id": "0825",
    "title": "班亚和蕾雨 3",
    "year": "2024",
    "region": "泰国",
    "type": "电影",
    "genre": "爱情/剧情/奇幻",
    "tags": [
      "泰国纯爱",
      "轮回转世",
      "催泪",
      "系列终章"
    ],
    "oneLine": "为了打破蕾雨无法活过20岁的诅咒,班亚决定进入生死轮回改写命运。",
    "url": "./movies/movie-0825.html",
    "cover": "./75.jpg",
    "category": "历史古装",
    "categoryUrl": "./category-history-costume.html"
  },
  {
    "id": "0826",
    "title": "三坪房间的侵略者",
    "year": "2024",
    "region": "日本",
    "type": "剧集",
    "genre": "奇幻搞笑后宫",
    "tags": [
      "幽灵",
      "地底人",
      "魔法少女",
      "外星人",
      "合租战争"
    ],
    "oneLine": "东京一间三坪公寓被幽灵、地底人、魔法少女和外星人同时看中,倒霉男主被迫当了房东。",
    "url": "./movies/movie-0826.html",
    "cover": "./76.jpg",
    "category": "经典片库",
    "categoryUrl": "./category-classic-library.html"
  },
  {
    "id": "0827",
    "title": "今晚是寿喜烧哦",
    "year": "2023",
    "region": "日本",
    "type": "剧集",
    "genre": "喜剧,家庭,美食",
    "tags": [
      "母女",
      "独居",
      "治愈",
      "每集一道菜",
      "人生难题"
    ],
    "oneLine": "32岁的单身女儿与65岁的妈妈开始了一种奇怪的“同居”——每周只共度一晚,吃一顿寿喜烧,聊所有不敢和别人说的事。",
    "url": "./movies/movie-0827.html",
    "cover": "./77.jpg",
    "category": "院线热片",
    "categoryUrl": "./category-cinema-hits.html"
  },
  {
    "id": "0828",
    "title": "一个人的冬天",
    "year": "2023",
    "region": "中国大陆",
    "type": "电影",
    "genre": "剧情/生存",
    "tags": [
      "东北",
      "留守",
      "老人",
      "极寒",
      "温情"
    ],
    "oneLine": "长白山脚下,一个固执的空巢老人在零下三十度的冬天拒绝搬去城里,独自守护着老伴的坟和即将消失的村庄。",
    "url": "./movies/movie-0828.html",
    "cover": "./78.jpg",
    "category": "奇幻科幻",
    "categoryUrl": "./category-fantasy-sci-fi.html"
  },
  {
    "id": "0829",
    "title": "放牧人",
    "year": "2029",
    "region": "中国大陆",
    "type": "电影",
    "genre": "剧情/文艺",
    "tags": [
      "草原",
      "生态保护",
      "代际冲突",
      "孤独"
    ],
    "oneLine": "内蒙草原上最后一位传统牧羊人,为了阻止草场沙化,决定与推土机死磕到底。",
    "url": "./movies/movie-0829.html",
    "cover": "./79.jpg",
    "category": "青春喜剧",
    "categoryUrl": "./category-youth-comedy.html"
  },
  {
    "id": "0830",
    "title": "百变飞车",
    "year": "2024",
    "region": "美国",
    "type": "剧集",
    "genre": "动作/科幻/冒险",
    "tags": [
      "变形汽车",
      "特工",
      "公路",
      "喜剧",
      "人工智能"
    ],
    "oneLine": "一个18线小网红无意间启动了一辆能变形成任何交通工具的超级汽车,却被全球杀手组织追杀。",
    "url": "./movies/movie-0830.html",
    "cover": "./80.jpg",
    "category": "经典片库",
    "categoryUrl": "./category-classic-library.html"
  },
  {
    "id": "0831",
    "title": "克拉斯卡劳埃德",
    "year": "2022",
    "region": "日本",
    "type": "动画剧集",
    "genre": "音乐,喜剧,奇幻",
    "tags": [
      "古典乐拟人",
      "音乐战争",
      "现代传奇",
      "二重身"
    ],
    "oneLine": "当莫扎特与贝多芬转世为东京的普通高中生,他们唯一的武器是能让对方社死的音乐对决。",
    "url": "./movies/movie-0831.html",
    "cover": "./81.jpg",
    "category": "动作专区",
    "categoryUrl": "./category-action-zone.html"
  },
  {
    "id": "0832",
    "title": "怪奇验尸官:病害疑云",
    "year": "2024",
    "region": "法国",
    "type": "电影",
    "genre": "悬疑/惊悚/犯罪",
    "tags": [
      "法医破案",
      "生化威胁",
      "密闭空间",
      "逻辑推演",
      "病毒恐惧"
    ],
    "oneLine": "巴黎出现诡异尸体,内部器官布满未知结晶,验尸官发现这竟是一种新型人工病毒。",
    "url": "./movies/movie-0832.html",
    "cover": "./82.jpg",
    "category": "热映精选",
    "categoryUrl": "./category-hot-picks.html"
  },
  {
    "id": "0833",
    "title": "激情燃烧的岁月2",
    "year": "2004",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "剧情,战争,家庭",
    "tags": [
      "军旅家庭",
      "年代剧",
      "代际冲突",
      "文革背景",
      "情感纠葛"
    ],
    "oneLine": "石光荣退休后,他的几个儿女在改革开放的大潮中各自燃烧着自己的青春与激情,却比战火纷飞的年代更易受伤。",
    "url": "./movies/movie-0833.html",
    "cover": "./83.jpg",
    "category": "剧集连看",
    "categoryUrl": "./category-drama-series.html"
  },
  {
    "id": "0834",
    "title": "1999 惊魂记",
    "year": "2022",
    "region": "中国台湾",
    "type": "电影",
    "genre": "恐怖/悬疑/年代",
    "tags": [
      "世纪末",
      "录像带诅咒",
      "921大地震",
      "校园怪谈"
    ],
    "oneLine": "1999年,五个高中生在一盘被诅咒的录像带上看到了自己一个月后死于921地震的画面,于是拼命想改写结局。",
    "url": "./movies/movie-0834.html",
    "cover": "./84.jpg",
    "category": "青春喜剧",
    "categoryUrl": "./category-youth-comedy.html"
  },
  {
    "id": "0835",
    "title": "莱芬斯坦:影像的背叛",
    "year": "2019",
    "region": "德国",
    "type": "电影",
    "genre": "传记、历史",
    "tags": [
      "艺术与权力",
      "道德困境",
      "纪录片导演"
    ],
    "oneLine": "天才女导演莱芬斯坦如何用镜头为纳粹披上美学外衣,而她晚年坚称“我只是拍电影的人”。",
    "url": "./movies/movie-0835.html",
    "cover": "./85.jpg",
    "category": "热映精选",
    "categoryUrl": "./category-hot-picks.html"
  },
  {
    "id": "0836",
    "title": "公主驾到2019",
    "year": "2019",
    "region": "泰国",
    "type": "剧集",
    "genre": "爱情/喜剧/奇幻",
    "tags": [
      "穿越",
      "公主",
      "现代都市",
      "傲娇",
      "欢喜冤家"
    ],
    "oneLine": "古代暹罗公主穿越到2019年的曼谷,错把冷酷的房产大亨当成自己的“御前侍卫”,各种差使他。",
    "url": "./movies/movie-0836.html",
    "cover": "./86.jpg",
    "category": "奇幻科幻",
    "categoryUrl": "./category-fantasy-sci-fi.html"
  },
  {
    "id": "0837",
    "title": "恰克与巴克",
    "year": "2023",
    "region": "美国",
    "type": "电影",
    "genre": "喜剧,剧情,冒险",
    "tags": [
      "公路电影",
      "动物",
      "兄弟",
      "环保",
      "治愈"
    ],
    "oneLine": "两个因为破产而闹翻的亲兄弟,被迫带着他们父亲遗产——两只喋喋不休的鹦鹉“恰克”与“巴克”,踏上一场横跨美国的还债之旅。",
    "url": "./movies/movie-0837.html",
    "cover": "./87.jpg",
    "category": "全球佳作",
    "categoryUrl": "./category-global-stories.html"
  },
  {
    "id": "0838",
    "title": "男人嬉春",
    "year": "1992",
    "region": "中国香港",
    "type": "电影",
    "genre": "喜剧/情色",
    "tags": [
      "风月片",
      "香港",
      "搞笑",
      "多线叙事",
      "怀旧"
    ],
    "oneLine": "四个中年男人组团去泰国“寻找春天”,结果遭遇人妖、黑帮和前女友的一连串暴击。",
    "url": "./movies/movie-0838.html",
    "cover": "./88.jpg",
    "category": "热映精选",
    "categoryUrl": "./category-hot-picks.html"
  },
  {
    "id": "0839",
    "title": "古老的庭院",
    "year": "2026",
    "region": "韩国",
    "type": "电影",
    "genre": "剧情,爱情,历史",
    "tags": [
      "光州事件",
      "政治犯",
      "狱中书信",
      "等待",
      "全斗焕时期"
    ],
    "oneLine": "他被判无期,她在监狱外建了一座小院,每天写信,一写就是十八年。",
    "url": "./movies/movie-0839.html",
    "cover": "./89.jpg",
    "category": "动作专区",
    "categoryUrl": "./category-action-zone.html"
  },
  {
    "id": "0840",
    "title": "康乃狄克鬼屋事件",
    "year": "2024",
    "region": "美国",
    "type": "电影",
    "genre": "恐怖",
    "tags": [
      "真实改编",
      "凶宅",
      "招魂",
      "家庭",
      "附身"
    ],
    "oneLine": "为了给患癌儿子治病搬进便宜老宅,母亲发现房子的上一任租客曾是殡仪馆整容师。",
    "url": "./movies/movie-0840.html",
    "cover": "./90.jpg",
    "category": "经典片库",
    "categoryUrl": "./category-classic-library.html"
  },
  {
    "id": "0841",
    "title": "亲鸾:白道",
    "year": "2025",
    "region": "日本",
    "type": "电影",
    "genre": "历史/传记/宗教",
    "tags": [
      "净土真宗",
      "僧人",
      "史诗",
      "镰仓时代"
    ],
    "oneLine": "镰仓幕府时期,面对禁欲苦修的盛行,僧人亲鸾提出“恶人正机”,掀翻了日本佛教的传统信仰。",
    "url": "./movies/movie-0841.html",
    "cover": "./91.jpg",
    "category": "家庭生活",
    "categoryUrl": "./category-family-life.html"
  },
  {
    "id": "0842",
    "title": "禁曲(波兰电影)",
    "year": "2022",
    "region": "波兰",
    "type": "电影",
    "genre": "恐怖,悬疑",
    "tags": [
      "音乐",
      "诅咒",
      "邪教"
    ],
    "oneLine": "一支音乐考古团队在波兰地下墓穴发现了一份中世纪的乐谱,当他们奏响它时,听众开始疯狂自杀。",
    "url": "./movies/movie-0842.html",
    "cover": "./92.jpg",
    "category": "家庭生活",
    "categoryUrl": "./category-family-life.html"
  },
  {
    "id": "0843",
    "title": "鬼挡路2",
    "year": "2024",
    "region": "美国",
    "type": "电影",
    "genre": "恐怖,惊悚,超自然",
    "tags": [
      "公路惊悚",
      "怨灵",
      "复仇",
      "轮回"
    ],
    "oneLine": "一条每年只出现七天的幽灵公路,驶入者会遭遇自己曾经害死过的人的冤魂。",
    "url": "./movies/movie-0843.html",
    "cover": "./93.jpg",
    "category": "都市爱情",
    "categoryUrl": "./category-romance-city.html"
  },
  {
    "id": "0844",
    "title": "来自长崎的女孩",
    "year": "2025",
    "region": "日本",
    "type": "电影",
    "genre": "历史,战争,家庭",
    "tags": [
      "原子弹",
      "跨国收养",
      "美国战后",
      "赎罪与和解"
    ],
    "oneLine": "1945年长崎核爆后,一位幸存女孩被美国军官收养带到得克萨斯,45年后她重回故土寻找被掩埋的真相。",
    "url": "./movies/movie-0844.html",
    "cover": "./94.jpg",
    "category": "青春喜剧",
    "categoryUrl": "./category-youth-comedy.html"
  },
  {
    "id": "0845",
    "title": "空乘危机第二季",
    "year": "2022",
    "region": "美国",
    "type": "电视剧",
    "genre": "剧情,喜剧,悬疑,惊悚",
    "tags": [
      "酗酒",
      "精神创伤",
      "谍战",
      "黑色幽默",
      "女主人公"
    ],
    "oneLine": "酗酒空乘卡茜刚从谋杀案脱身,又卷入一场横跨洛杉矶和柏林的国际谍战,这次她甚至不敢确定自己是不是好人。",
    "url": "./movies/movie-0845.html",
    "cover": "./95.jpg",
    "category": "动作专区",
    "categoryUrl": "./category-action-zone.html"
  },
  {
    "id": "0846",
    "title": "基本悬凶",
    "year": "2025",
    "region": "美国",
    "type": "剧集",
    "genre": "悬疑/犯罪/剧情",
    "tags": [
      "本格推理",
      "数学天才",
      "连环杀手",
      "单元+主线"
    ],
    "oneLine": "一个患有自闭症的数学天才教授,用概率论和逻辑学帮警探破案,但他发现自己就是下一个连环杀手的目标。",
    "url": "./movies/movie-0846.html",
    "cover": "./96.jpg",
    "category": "悬疑夜场",
    "categoryUrl": "./category-suspense-night.html"
  },
  {
    "id": "0847",
    "title": "跑马地的月光粤语",
    "year": "2000",
    "region": "中国香港",
    "type": "电影",
    "genre": "爱情/剧情/文艺",
    "tags": [
      "跑马地",
      "旧书店",
      "月光传说"
    ],
    "oneLine": "跑马地一家即将拆迁的旧书店里,每晚关门后,书架上的爱情小说角色会活过来讨论作者。",
    "url": "./movies/movie-0847.html",
    "cover": "./97.jpg",
    "category": "院线热片",
    "categoryUrl": "./category-cinema-hits.html"
  },
  {
    "id": "0848",
    "title": "高速公路家族",
    "year": "2025",
    "region": "韩国",
    "type": "电影",
    "genre": "剧情、家庭、惊悚",
    "tags": [
      "公路",
      "流浪",
      "伪装",
      "黑色电影"
    ],
    "oneLine": "一家四口常年生活在一辆面包车里,流连于各个高速公路服务区,靠偷窃和诈骗为生,直到小女儿被人贩子盯上。",
    "url": "./movies/movie-0848.html",
    "cover": "./98.jpg",
    "category": "全球佳作",
    "categoryUrl": "./category-global-stories.html"
  },
  {
    "id": "0849",
    "title": "马卡龙少女",
    "year": "2023",
    "region": "法国",
    "type": "剧集",
    "genre": "喜剧/青春/美食",
    "tags": [
      "甜品师",
      "社交焦虑",
      "童年味觉"
    ],
    "oneLine": "一个味觉受损的甜品天才,只能通过别人的情绪来“尝”出味道,她开了一家需要客人先哭才能点单的店。",
    "url": "./movies/movie-0849.html",
    "cover": "./99.jpg",
    "category": "动作专区",
    "categoryUrl": "./category-action-zone.html"
  },
  {
    "id": "0850",
    "title": "荒岭录影",
    "year": "2021",
    "region": "日本",
    "type": "电影",
    "genre": "恐怖/伪纪录片",
    "tags": [
      "灵异",
      "失踪案件",
      "第一视角"
    ],
    "oneLine": "一档网红探险节目团队深入传说中的“自杀森林”,摄像机记录下了他们最后的精神崩溃。",
    "url": "./movies/movie-0850.html",
    "cover": "./100.jpg",
    "category": "青春喜剧",
    "categoryUrl": "./category-youth-comedy.html"
  },
  {
    "id": "0851",
    "title": "新铁路少年",
    "year": "2025",
    "region": "英国",
    "type": "电影",
    "genre": "剧情,冒险,家庭",
    "tags": [
      "经典翻拍",
      "二战",
      "友谊",
      "成长"
    ],
    "oneLine": "二战期间,被疏散到乡下的三个伦敦少年,无意间发现了一条废弃铁路,并由此揭开一个尘封的间谍谜案。",
    "url": "./movies/movie-0851.html",
    "cover": "./101.jpg",
    "category": "青春喜剧",
    "categoryUrl": "./category-youth-comedy.html"
  },
  {
    "id": "0852",
    "title": "黑手党人",
    "year": "1962",
    "region": "意大利",
    "type": "电影",
    "genre": "剧情,犯罪,喜剧",
    "tags": [
      "意大利新现实主义",
      "黑色喜剧",
      "西西里",
      "传统与现代"
    ],
    "oneLine": "一个在美国生活了二十年的西西里移民,回到家乡后发现黑手党已经变成了一门“正经生意”。",
    "url": "./movies/movie-0852.html",
    "cover": "./102.jpg",
    "category": "青春喜剧",
    "categoryUrl": "./category-youth-comedy.html"
  },
  {
    "id": "0853",
    "title": "一个女人",
    "year": "2025",
    "region": "法国/韩国",
    "type": "电影",
    "genre": "剧情/惊悚/女性",
    "tags": [
      "身份迷失",
      "整容复仇",
      "巴黎",
      "多重人格"
    ],
    "oneLine": "整容成亡妹样子的姐姐,在巴黎的暗夜中追查真相,却渐渐忘记了自己究竟是姐姐还是妹妹。",
    "url": "./movies/movie-0853.html",
    "cover": "./103.jpg",
    "category": "都市爱情",
    "categoryUrl": "./category-romance-city.html"
  },
  {
    "id": "0854",
    "title": "九月刊",
    "year": "2009",
    "region": "美国",
    "type": "电影",
    "genre": "纪录片",
    "tags": [
      "时尚",
      "女魔头",
      "VOGUE",
      "职场",
      "真实记录"
    ],
    "oneLine": "镜头跟随着《VOGUE》主编安娜·温图尔,记录下杂志年度最重要九月刊从无到有的全部混乱与野心。",
    "url": "./movies/movie-0854.html",
    "cover": "./104.jpg",
    "category": "剧集连看",
    "categoryUrl": "./category-drama-series.html"
  },
  {
    "id": "0855",
    "title": "少年斗志",
    "year": "2025",
    "region": "中国大陆",
    "type": "电影",
    "genre": "体育/励志",
    "tags": [
      "搏击",
      "留守儿童",
      "逆袭"
    ],
    "oneLine": "大凉山深处,一个被父母留下的彝族少年通过格斗走出大山,却必须在赢与归之间做出选择。",
    "url": "./movies/movie-0855.html",
    "cover": "./105.jpg",
    "category": "青春喜剧",
    "categoryUrl": "./category-youth-comedy.html"
  },
  {
    "id": "0856",
    "title": "棋子",
    "year": "2021",
    "region": "中国大陆",
    "type": "电影",
    "genre": "悬疑,犯罪,心理",
    "tags": [
      "象棋",
      "连环杀手",
      "高智商犯罪",
      "猫鼠游戏",
      "反转"
    ],
    "oneLine": "一位刑警队长追查“象棋杀人案”,却发现每一具尸体的摆放位置,都在复刻自己四十年前的一盘残局。",
    "url": "./movies/movie-0856.html",
    "cover": "./106.jpg",
    "category": "全球佳作",
    "categoryUrl": "./category-global-stories.html"
  },
  {
    "id": "0857",
    "title": "好好学吧",
    "year": "2024",
    "region": "中国大陆",
    "type": "电视剧",
    "genre": "剧情,家庭",
    "tags": [
      "教育",
      "现实",
      "社会"
    ],
    "oneLine": "退休特级教师林老师被返聘回“问题学生集中营”学校,用另类方式挑战唯分数论。",
    "url": "./movies/movie-0857.html",
    "cover": "./107.jpg",
    "category": "剧集连看",
    "categoryUrl": "./category-drama-series.html"
  },
  {
    "id": "0858",
    "title": "超级语文课第二季",
    "year": "2024",
    "region": "中国大陆",
    "type": "综艺",
    "genre": "真人秀,知识竞赛",
    "tags": [
      "语文老师",
      "作文对决",
      "诗词飞花令",
      "教育综艺"
    ],
    "oneLine": "十二位风格迥异的语文老师同台PK,用“神级板书”和“魔性讲课”争夺年度金牌教师。",
    "url": "./movies/movie-0858.html",
    "cover": "./108.jpg",
    "category": "院线热片",
    "categoryUrl": "./category-cinema-hits.html"
  },
  {
    "id": "0859",
    "title": "最后的忠臣藏",
    "year": "2024",
    "region": "日本",
    "type": "电影",
    "genre": "历史/动作",
    "tags": [
      "武士",
      "复仇",
      "幕末",
      "忠义"
    ],
    "oneLine": "明治维新时代,最后一名赤穗浪士的后人重举义旗,对抗天皇的废刀令。",
    "url": "./movies/movie-0859.html",
    "cover": "./109.jpg",
    "category": "奇幻科幻",
    "categoryUrl": "./category-fantasy-sci-fi.html"
  },
  {
    "id": "0860",
    "title": "假面骑士555",
    "year": "2023",
    "region": "日本",
    "type": "剧集",
    "genre": "科幻/动作/特摄",
    "tags": [
      "假面骑士",
      "智能手机",
      "怪人",
      "变身腰带",
      "青春群像"
    ],
    "oneLine": "一款名为“555”的神秘手机落入高中生手中,使用者可变身假面骑士,但每变身一次都会缩短寿命。",
    "url": "./movies/movie-0860.html",
    "cover": "./110.jpg",
    "category": "奇幻科幻",
    "categoryUrl": "./category-fantasy-sci-fi.html"
  },
  {
    "id": "0861",
    "title": "新万家灯火",
    "year": "2023",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "剧情/家庭/社会",
    "tags": [
      "都市",
      "邻里",
      "群像",
      "温情",
      "现实题材"
    ],
    "oneLine": "北京一栋老旧居民楼被划入拆迁范围,四十户人家在最后的六十天里上演人间百态。",
    "url": "./movies/movie-0861.html",
    "cover": "./111.jpg",
    "category": "悬疑夜场",
    "categoryUrl": "./category-suspense-night.html"
  },
  {
    "id": "0862",
    "title": "恶之三联画",
    "year": "2026",
    "region": "日本",
    "type": "电视剧",
    "genre": "悬疑/犯罪/恐怖",
    "tags": [
      "单元剧",
      "古典艺术",
      "心理犯罪",
      "叙述性诡计",
      "致郁"
    ],
    "oneLine": "一幅中世纪失窃的三联画重现东京,每个拥有它的人都按照画中“地狱、人间、天堂”的顺序离奇死亡。",
    "url": "./movies/movie-0862.html",
    "cover": "./112.jpg",
    "category": "经典片库",
    "categoryUrl": "./category-classic-library.html"
  },
  {
    "id": "0863",
    "title": "我是只小小鸟",
    "year": "2025",
    "region": "中国",
    "type": "电影",
    "genre": "动画,音乐",
    "tags": [
      "治愈",
      "梦想",
      "都市",
      "成长",
      "合家欢"
    ],
    "oneLine": "一只出生在城中村排污管里的麻雀,为了寻找传说中能治愈“失歌症”的银色羽毛,飞向了钢筋水泥的都市丛林。",
    "url": "./movies/movie-0863.html",
    "cover": "./113.jpg",
    "category": "动作专区",
    "categoryUrl": "./category-action-zone.html"
  },
  {
    "id": "0864",
    "title": "金色的梦",
    "year": "2025",
    "region": "中国大陆",
    "type": "电影",
    "genre": "剧情,家庭,儿童",
    "tags": [
      "空巢老人",
      "留守儿童",
      "戏曲"
    ],
    "oneLine": "留守老人老金唯一的愿望,是教会孙女唱一出完整的皮影戏,好让她带着“金家的声音”去城市找爸爸。",
    "url": "./movies/movie-0864.html",
    "cover": "./114.jpg",
    "category": "院线热片",
    "categoryUrl": "./category-cinema-hits.html"
  },
  {
    "id": "0865",
    "title": "生命之外",
    "year": "2026",
    "region": "英国",
    "type": "电影",
    "genre": "科幻,剧情,哲学",
    "tags": [
      "濒死体验",
      "意识上传",
      "伦理困境"
    ],
    "oneLine": "一名脑死亡患者的意识被上传到虚拟乌托邦,却发现那里成了另一种地狱。",
    "url": "./movies/movie-0865.html",
    "cover": "./115.jpg",
    "category": "历史古装",
    "categoryUrl": "./category-history-costume.html"
  },
  {
    "id": "0866",
    "title": "李碧华鬼魅系列:奇幻夜",
    "year": "2013",
    "region": "中国香港",
    "type": "电影",
    "genre": "恐怖,奇幻",
    "tags": [
      "李碧华",
      "奇情",
      "三段式"
    ],
    "oneLine": "三个由李碧华原著改编的短片组成,旧书店的黑猫、地铁站的录像带、以及一场推迟了三十年的同学会,藏着最寒彻骨的恶意。",
    "url": "./movies/movie-0866.html",
    "cover": "./116.jpg",
    "category": "动作专区",
    "categoryUrl": "./category-action-zone.html"
  },
  {
    "id": "0867",
    "title": "尸气逼人",
    "year": "2006",
    "region": "香港",
    "type": "电影",
    "genre": "恐怖/喜剧",
    "tags": [
      "僵尸",
      "风水",
      "笑料"
    ],
    "oneLine": "风水师摆乌龙搞错方位,导致一栋公寓楼活人和僵尸被迫做起了邻居。",
    "url": "./movies/movie-0867.html",
    "cover": "./117.jpg",
    "category": "青春喜剧",
    "categoryUrl": "./category-youth-comedy.html"
  },
  {
    "id": "0868",
    "title": "神圣之夜:恶魔猎人",
    "year": "2024",
    "region": "日本",
    "type": "剧集",
    "genre": "动作,奇幻,恐怖",
    "tags": [
      "驱魔",
      "圣诞",
      "反英雄",
      "血腥美学",
      "宗教"
    ],
    "oneLine": "每年圣诞夜,恶魔会伪装成圣诞老人潜入千家万户收割儿童灵魂,唯一能看见真相的只有这个酗酒的退役神父。",
    "url": "./movies/movie-0868.html",
    "cover": "./118.jpg",
    "category": "全球佳作",
    "categoryUrl": "./category-global-stories.html"
  },
  {
    "id": "0869",
    "title": "歇斯底里2011",
    "year": "2011",
    "region": "美国",
    "type": "电影",
    "genre": "惊悚/剧情",
    "tags": [
      "心理恐惧",
      "女性",
      "电话诈骗",
      "城市传说",
      "独角戏"
    ],
    "oneLine": "一通深夜来电让独居女性陷入前所未有的精神操控,真假界限彻底崩塌。",
    "url": "./movies/movie-0869.html",
    "cover": "./119.jpg",
    "category": "家庭生活",
    "categoryUrl": "./category-family-life.html"
  },
  {
    "id": "0870",
    "title": "小食尸鬼的赞美诗",
    "year": "2024",
    "region": "法国/比利时",
    "type": "电影",
    "genre": "奇幻/恐怖/音乐剧",
    "tags": [
      "哥特童话",
      "食尸鬼主角",
      "教堂唱诗班",
      "死亡美学"
    ],
    "oneLine": "一个住在墓地里的六岁小食尸鬼,为了吃一口“活人的热饭”,伪装成人类混进教堂唱诗班。",
    "url": "./movies/movie-0870.html",
    "cover": "./120.jpg",
    "category": "全球佳作",
    "categoryUrl": "./category-global-stories.html"
  },
  {
    "id": "0871",
    "title": "我是你的野蛮女友",
    "year": "2026",
    "region": "韩国",
    "type": "电影",
    "genre": "喜剧,爱情,动作",
    "tags": [
      "野蛮女友",
      "反转",
      "柔道",
      "契约"
    ],
    "oneLine": "她应聘成为富二代的“野蛮女友”,结果发现雇主是她失散多年的柔道教练。",
    "url": "./movies/movie-0871.html",
    "cover": "./121.jpg",
    "category": "院线热片",
    "categoryUrl": "./category-cinema-hits.html"
  },
  {
    "id": "0872",
    "title": "天之恩赐",
    "year": "2024",
    "region": "中国",
    "type": "电影",
    "genre": "剧情/家庭",
    "tags": [
      "器官捐献",
      "母爱",
      "误诊",
      "救赎",
      "小镇"
    ],
    "oneLine": "儿子被宣判脑死亡后,母亲签下捐献书,却发现这是医院为获取器官设下的骗局。",
    "url": "./movies/movie-0872.html",
    "cover": "./122.jpg",
    "category": "剧集连看",
    "categoryUrl": "./category-drama-series.html"
  },
  {
    "id": "0873",
    "title": "平成地狱兄弟∼惊惊",
    "year": "2020",
    "region": "日本",
    "type": "电影",
    "genre": "喜剧,恐怖,奇幻",
    "tags": [
      "废柴逆袭",
      "地缚灵",
      "平成怀旧"
    ],
    "oneLine": "一对废柴兄弟意外唤醒了地下的“平成恶灵”,被迫帮它完成生前遗愿。",
    "url": "./movies/movie-0873.html",
    "cover": "./123.jpg",
    "category": "都市爱情",
    "categoryUrl": "./category-romance-city.html"
  },
  {
    "id": "0874",
    "title": "复仇遗言",
    "year": "2024",
    "region": "美国",
    "type": "电影",
    "genre": "悬疑,犯罪,剧情",
    "tags": [
      "遗愿",
      "复仇",
      "反转",
      "律师"
    ],
    "oneLine": "一位将死的律师留下三段遗言,却成了三个仇家接连遇害的死亡预告。",
    "url": "./movies/movie-0874.html",
    "cover": "./124.jpg",
    "category": "青春喜剧",
    "categoryUrl": "./category-youth-comedy.html"
  },
  {
    "id": "0875",
    "title": "闽赣风云",
    "year": "2025",
    "region": "中国大陆",
    "type": "电影",
    "genre": "战争,历史",
    "tags": [
      "革命",
      "红色",
      "热血",
      "游击战"
    ],
    "oneLine": "1930年代,闽赣边区一支由铁匠、郎中、山歌手组成的民兵队,用土雷和山歌向敌军发起了最响亮的冲锋。",
    "url": "./movies/movie-0875.html",
    "cover": "./125.jpg",
    "category": "青春喜剧",
    "categoryUrl": "./category-youth-comedy.html"
  },
  {
    "id": "0876",
    "title": "超级细菌",
    "year": "2025",
    "region": "韩国",
    "type": "电影",
    "genre": "灾难、惊悚、科幻",
    "tags": [
      "病毒",
      "抗生素",
      "隔离",
      "逃亡"
    ],
    "oneLine": "一种能抵抗所有抗生素的超级细菌在地铁站爆发,首尔在24小时内沦为死城。",
    "url": "./movies/movie-0876.html",
    "cover": "./126.jpg",
    "category": "都市爱情",
    "categoryUrl": "./category-romance-city.html"
  },
  {
    "id": "0877",
    "title": "穿靴子的猫:萌猫三剑客",
    "year": "2024",
    "region": "美国",
    "type": "电影",
    "genre": "动画、喜剧、冒险",
    "tags": [
      "猫",
      "剑客",
      "友情",
      "萌宠",
      "合家欢"
    ],
    "oneLine": "穿靴子的猫在一次冒险中意外分裂成三个自己,分别代表他的勇敢、狡黠和懒惰,必须三猫合力才能阻止女巫偷走全世界猫的九条命。",
    "url": "./movies/movie-0877.html",
    "cover": "./127.jpg",
    "category": "都市爱情",
    "categoryUrl": "./category-romance-city.html"
  },
  {
    "id": "0878",
    "title": "阿富汗跳舞少年",
    "year": "2024",
    "region": "阿富汗/伊朗",
    "type": "电影",
    "genre": "剧情/战争/青春",
    "tags": [
      "阿富汗",
      "塔利班",
      "禁忌之舞",
      "生存",
      "希望"
    ],
    "oneLine": "在禁止音乐与舞蹈的喀布尔,一名少年穿上女装,成为地下舞会的“舞者”。",
    "url": "./movies/movie-0878.html",
    "cover": "./128.jpg",
    "category": "动作专区",
    "categoryUrl": "./category-action-zone.html"
  },
  {
    "id": "0879",
    "title": "探灵档案",
    "year": "2025",
    "region": "中国台湾",
    "type": "电视剧",
    "genre": "恐怖/悬疑/单元剧",
    "tags": [
      "灵异事件",
      "纪实风格",
      "都市传说",
      "伪纪录片"
    ],
    "oneLine": "一个不信鬼的网红博主和一位退休道士,联手揭开台湾十大都市传说的真相。",
    "url": "./movies/movie-0879.html",
    "cover": "./129.jpg",
    "category": "历史古装",
    "categoryUrl": "./category-history-costume.html"
  },
  {
    "id": "0880",
    "title": "难得孖情人",
    "year": "1998",
    "region": "中国香港",
    "type": "电影",
    "genre": "爱情喜剧",
    "tags": [
      "双胞胎",
      "错位爱情",
      "港式搞笑",
      "一人分饰两角"
    ],
    "oneLine": "一对失散的双胞胎姐妹互换身份,却阴差阳错爱上了对方的未婚夫。",
    "url": "./movies/movie-0880.html",
    "cover": "./130.jpg",
    "category": "悬疑夜场",
    "categoryUrl": "./category-suspense-night.html"
  },
  {
    "id": "0881",
    "title": "报仇雪恨",
    "year": "2023",
    "region": "中国大陆",
    "type": "电影",
    "genre": "动作/西部/犯罪",
    "tags": [
      "复仇",
      "荒漠",
      "退伍军人",
      "以暴制暴"
    ],
    "oneLine": "一个聋哑退伍军人在妻子被灭门后,独自追踪仇家进入戈壁无人区。",
    "url": "./movies/movie-0881.html",
    "cover": "./131.jpg",
    "category": "热映精选",
    "categoryUrl": "./category-hot-picks.html"
  },
  {
    "id": "0882",
    "title": "第十一个小时",
    "year": "2024",
    "region": "德国",
    "type": "电影",
    "genre": "惊悚/悬疑/科幻",
    "tags": [
      "时间循环",
      "末日",
      "逃生",
      "烧脑",
      "密室"
    ],
    "oneLine": "一栋大厦里的所有人被困在同一小时里无限循环,而每个循环中都会多出一具尸体。",
    "url": "./movies/movie-0882.html",
    "cover": "./132.jpg",
    "category": "经典片库",
    "categoryUrl": "./category-classic-library.html"
  },
  {
    "id": "0883",
    "title": "切罗基大街的房子",
    "year": "2008",
    "region": "美国",
    "type": "电影",
    "genre": "恐怖/悬疑",
    "tags": [
      "超自然",
      "鬼屋",
      "家庭悲剧",
      "慢热恐怖",
      "氛围营造"
    ],
    "oneLine": "一个单亲妈妈带着女儿搬进一栋便宜的老房子,却发现房子的地板下埋着每一任房主的不堪记忆。",
    "url": "./movies/movie-0883.html",
    "cover": "./133.jpg",
    "category": "经典片库",
    "categoryUrl": "./category-classic-library.html"
  },
  {
    "id": "0884",
    "title": "恶灵之夜",
    "year": "2025",
    "region": "泰国",
    "type": "电影",
    "genre": "恐怖",
    "tags": [
      "民俗恐怖",
      "降头",
      "直播",
      "古曼童"
    ],
    "oneLine": "一档灵异直播团队闯进废弃寺庙,意外唤醒了被封印百年的“饿鬼古曼”。",
    "url": "./movies/movie-0884.html",
    "cover": "./134.jpg",
    "category": "院线热片",
    "categoryUrl": "./category-cinema-hits.html"
  },
  {
    "id": "0885",
    "title": "动态漫画·绝世古尊第二季",
    "year": "2025",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "动画,玄幻,冒险",
    "tags": [
      "动态漫画",
      "修仙",
      "古尊归来"
    ],
    "oneLine": "古尊萧凡重返宗门,却发现当年灭门仇人竟成了正道领袖。",
    "url": "./movies/movie-0885.html",
    "cover": "./135.jpg",
    "category": "悬疑夜场",
    "categoryUrl": "./category-suspense-night.html"
  },
  {
    "id": "0886",
    "title": "征服",
    "year": "2003",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "犯罪,警匪,剧情",
    "tags": [
      "黑社会",
      "刘华强",
      "写实",
      "经典"
    ],
    "oneLine": "为弟复仇的黑帮大佬买瓜寻仇,与刚正不阿的刑警队长展开了一场长达两年的生死缠斗。",
    "url": "./movies/movie-0886.html",
    "cover": "./136.jpg",
    "category": "都市爱情",
    "categoryUrl": "./category-romance-city.html"
  },
  {
    "id": "0887",
    "title": "天鹅公主",
    "year": "2022",
    "region": "俄罗斯",
    "type": "动画电影",
    "genre": "奇幻/音乐/爱情",
    "tags": [
      "芭蕾",
      "诅咒",
      "王子"
    ],
    "oneLine": "被诅咒的天鹅公主只有得到王子的真爱之吻才能恢复人形,但王子却失忆了。",
    "url": "./movies/movie-0887.html",
    "cover": "./137.jpg",
    "category": "悬疑夜场",
    "categoryUrl": "./category-suspense-night.html"
  },
  {
    "id": "0888",
    "title": "脑海深处",
    "year": "2026",
    "region": "美国/英国",
    "type": "剧集",
    "genre": "科幻、心理、惊悚",
    "tags": [
      "脑机接口",
      "记忆植入",
      "身份危机",
      "伦理"
    ],
    "oneLine": "丧妻的神经科学家将妻子的记忆植入自己大脑,却发现“她”开始控制他的身体去找她的情人。",
    "url": "./movies/movie-0888.html",
    "cover": "./138.jpg",
    "category": "青春喜剧",
    "categoryUrl": "./category-youth-comedy.html"
  },
  {
    "id": "0889",
    "title": "魔法教母",
    "year": "2020",
    "region": "美国",
    "type": "电影",
    "genre": "喜剧/奇幻/家庭",
    "tags": [
      "仙女",
      "现实生活",
      "笨拙",
      "程序员",
      "童话破灭"
    ],
    "oneLine": "一个笨拙的实习魔法教母被分配到现代人类社会实习,而她的第一个客户竟是一个厌世的女程序员。",
    "url": "./movies/movie-0889.html",
    "cover": "./139.jpg",
    "category": "经典片库",
    "categoryUrl": "./category-classic-library.html"
  },
  {
    "id": "0890",
    "title": "双姝泪",
    "year": "2020",
    "region": "韩国",
    "type": "电视剧",
    "genre": "剧情/家庭/复仇",
    "tags": [
      "姐妹情",
      "身世之谜",
      "豪门恩怨",
      "绝症"
    ],
    "oneLine": "一对从小失散的双胞胎姐妹,二十年后重逢时,一个成了豪门千金,一个却成了她的秘密佣人。",
    "url": "./movies/movie-0890.html",
    "cover": "./140.jpg",
    "category": "院线热片",
    "categoryUrl": "./category-cinema-hits.html"
  },
  {
    "id": "0891",
    "title": "密西西比风情画",
    "year": "2025",
    "region": "美国",
    "type": "电影",
    "genre": "剧情,传记,音乐",
    "tags": [
      "蓝调音乐",
      "种族歧视",
      "姐妹情",
      "时代变迁",
      "公路音乐"
    ],
    "oneLine": "上世纪60年代,一对黑人姐妹从密西西比三角洲出发,带着一把破吉他和一盒录音带,奔向芝加哥,也奔向自由。",
    "url": "./movies/movie-0891.html",
    "cover": "./141.jpg",
    "category": "动作专区",
    "categoryUrl": "./category-action-zone.html"
  },
  {
    "id": "0892",
    "title": "末日幸存",
    "year": "2028",
    "region": "韩国",
    "type": "剧集",
    "genre": "科幻/生存",
    "tags": [
      "人工智能反叛",
      "地下城",
      "人性考验"
    ],
    "oneLine": "核战后躲入地下城的最后人类发现,他们赖以生存的AI系统正在悄悄淘汰“不合格”的居民。",
    "url": "./movies/movie-0892.html",
    "cover": "./142.jpg",
    "category": "动作专区",
    "categoryUrl": "./category-action-zone.html"
  },
  {
    "id": "0893",
    "title": "唯我独尊3:致命反击",
    "year": "2026",
    "region": "美国",
    "type": "电影",
    "genre": "动作、犯罪、惊悚",
    "tags": [
      "硬核动作",
      "以暴制暴",
      "孤胆英雄",
      "复仇"
    ],
    "oneLine": "隐退的杀手之王被陷害,为了洗清罪名,他必须向整个地下世界发起致命反击。",
    "url": "./movies/movie-0893.html",
    "cover": "./143.jpg",
    "category": "青春喜剧",
    "categoryUrl": "./category-youth-comedy.html"
  },
  {
    "id": "0894",
    "title": "亚瑟的奇幻王国:跨界对决",
    "year": "2026",
    "region": "法国/比利时",
    "type": "动画电影",
    "genre": "奇幻冒险",
    "tags": [
      "动画",
      "跨界",
      "对决",
      "王国"
    ],
    "oneLine": "亚瑟带着迷你王国的小伙伴意外穿越进了一款现代游戏,必须在两个世界同时战斗才能拯救家园。",
    "url": "./movies/movie-0894.html",
    "cover": "./144.jpg",
    "category": "奇幻科幻",
    "categoryUrl": "./category-fantasy-sci-fi.html"
  },
  {
    "id": "0895",
    "title": "我母亲的婚礼",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "genre": "剧情,家庭",
    "tags": [
      "再婚",
      "女性",
      "代际",
      "和解"
    ],
    "oneLine": "女儿精心为寡居母亲策划了一场盛大婚礼,却发现新郎是当年拆散自己初恋的仇人。",
    "url": "./movies/movie-0895.html",
    "cover": "./145.jpg",
    "category": "动作专区",
    "categoryUrl": "./category-action-zone.html"
  },
  {
    "id": "0896",
    "title": "范汤麻士奇案",
    "year": "1978",
    "region": "中国香港",
    "type": "电影",
    "genre": "悬疑/喜剧/犯罪",
    "tags": [
      "神探",
      "民国",
      "奇案",
      "扮猪吃老虎",
      "粤语片"
    ],
    "oneLine": "民国时期,自称“范汤麻士”的落魄变魔术师,用魔术手法破解了一桩密室黄金失窃案。",
    "url": "./movies/movie-0896.html",
    "cover": "./146.jpg",
    "category": "动作专区",
    "categoryUrl": "./category-action-zone.html"
  },
  {
    "id": "0897",
    "title": "低一点的天空",
    "year": "2023",
    "region": "中国",
    "type": "电影",
    "genre": "剧情,青春",
    "tags": [
      "矮小症",
      "梦想",
      "友情",
      "励志"
    ],
    "oneLine": "身高只有一米二的男孩,想要触碰天空。",
    "url": "./movies/movie-0897.html",
    "cover": "./147.jpg",
    "category": "奇幻科幻",
    "categoryUrl": "./category-fantasy-sci-fi.html"
  },
  {
    "id": "0898",
    "title": "无声火",
    "year": "2024",
    "region": "泰国",
    "type": "电影",
    "genre": "动作,犯罪",
    "tags": [
      "聋哑杀手",
      "长镜头美学",
      "佛教宿命"
    ],
    "oneLine": "一个聋哑杀手在最后一次任务中失手,醒来后发现自己竟能看到“死者被杀前的最后一幕”。",
    "url": "./movies/movie-0898.html",
    "cover": "./148.jpg",
    "category": "奇幻科幻",
    "categoryUrl": "./category-fantasy-sci-fi.html"
  },
  {
    "id": "0899",
    "title": "疯狂追击者",
    "year": "2022",
    "region": "韩国",
    "type": "电影",
    "genre": "动作犯罪",
    "tags": [
      "飙车",
      "复仇",
      "黑色电影",
      "硬汉"
    ],
    "oneLine": "为了给惨死的女儿报仇,前地下赛车手伪装成出租车司机,钓鱼执法那些网络罪犯。",
    "url": "./movies/movie-0899.html",
    "cover": "./149.jpg",
    "category": "动作专区",
    "categoryUrl": "./category-action-zone.html"
  },
  {
    "id": "0900",
    "title": "达·芬奇的恶魔第二季",
    "year": "2014",
    "region": "美国",
    "type": "剧集",
    "genre": "剧情、奇幻、冒险",
    "tags": [
      "达·芬奇",
      "历史幻想",
      "天才",
      "解谜",
      "宗教阴谋"
    ],
    "oneLine": "达·芬奇发现了通往“声之洞穴”的密码,却因此唤醒了一个试图改写圣经的古老兄弟会。",
    "url": "./movies/movie-0900.html",
    "cover": "./150.jpg",
    "category": "悬疑夜场",
    "categoryUrl": "./category-suspense-night.html"
  },
  {
    "id": "0901",
    "title": "马后炮",
    "year": "2025",
    "region": "中国大陆",
    "type": "电影",
    "genre": "喜剧,悬疑",
    "tags": [
      "时空循环",
      "预知",
      "黑色幽默",
      "小人物",
      "彩票"
    ],
    "oneLine": "一个总是事后才看清真相的倒霉蛋,突然拥有了提前24小时预言的能力。",
    "url": "./movies/movie-0901.html",
    "cover": "./1.jpg",
    "category": "剧集连看",
    "categoryUrl": "./category-drama-series.html"
  },
  {
    "id": "0902",
    "title": "沙漠活宝",
    "year": "2021",
    "region": "中国大陆",
    "type": "电影",
    "genre": "喜剧,冒险",
    "tags": [
      "公路片",
      "沙漠",
      "寻宝",
      "乌龙"
    ],
    "oneLine": "两个欠债的废柴在沙漠里误打误撞找到了藏宝图,却发现宝藏是一头会拉金子的骆驼。",
    "url": "./movies/movie-0902.html",
    "cover": "./2.jpg",
    "category": "青春喜剧",
    "categoryUrl": "./category-youth-comedy.html"
  },
  {
    "id": "0903",
    "title": "纳粹狼的闪电战",
    "year": "2025",
    "region": "美国",
    "type": "剧集",
    "genre": "动作,历史,科幻",
    "tags": [
      "二战",
      "基因改造",
      "架空历史",
      "狼人"
    ],
    "oneLine": "二战末期,纳粹复活了传说中的狼人军团,发动了一场颠覆人类认知的黄昏决战。",
    "url": "./movies/movie-0903.html",
    "cover": "./3.jpg",
    "category": "历史古装",
    "categoryUrl": "./category-history-costume.html"
  },
  {
    "id": "0904",
    "title": "薄樱记",
    "year": "2026",
    "region": "日本",
    "type": "剧集",
    "genre": "剧情/历史/动作",
    "tags": [
      "武士",
      "复仇",
      "家族",
      "剑术",
      "江户时代"
    ],
    "oneLine": "一把薄刃樱花纹太刀,牵连着一个武士家族的荣辱与一段被鲜血浸透的复仇誓言。",
    "url": "./movies/movie-0904.html",
    "cover": "./4.jpg",
    "category": "全球佳作",
    "categoryUrl": "./category-global-stories.html"
  },
  {
    "id": "0905",
    "title": "喜剧王中王·前任归来",
    "year": "2024",
    "region": "中国",
    "type": "电影",
    "genre": "喜剧、爱情、怀旧",
    "tags": [
      "综艺改编",
      "前任",
      "破镜重圆",
      "搞笑"
    ],
    "oneLine": "曾经的喜剧冠军沦落为婚礼司仪,前女友却带着大牌明星未婚夫请他主持婚礼,还要加戏。",
    "url": "./movies/movie-0905.html",
    "cover": "./5.jpg",
    "category": "院线热片",
    "categoryUrl": "./category-cinema-hits.html"
  },
  {
    "id": "0906",
    "title": "山狗",
    "year": "2024",
    "region": "中国台湾",
    "type": "电视剧",
    "genre": "剧情,悬疑,社会",
    "tags": [
      "山林",
      "失踪案",
      "原住民",
      "人性"
    ],
    "oneLine": "深山部落接连失踪多人,一只神秘“山狗”被目击,但真相远比野兽更可怕。",
    "url": "./movies/movie-0906.html",
    "cover": "./6.jpg",
    "category": "动作专区",
    "categoryUrl": "./category-action-zone.html"
  },
  {
    "id": "0907",
    "title": "美国列兵史密斯",
    "year": "2025",
    "region": "美国",
    "type": "剧集",
    "genre": "战争",
    "tags": [
      "反战",
      "伊拉克战争",
      "心理",
      "纪实风",
      "人性"
    ],
    "oneLine": "一名普通的美国列兵在伊拉克战场的一天,通过他的头盔摄像头,记录下了战争荒谬而残酷的真相。",
    "url": "./movies/movie-0907.html",
    "cover": "./7.jpg",
    "category": "经典片库",
    "categoryUrl": "./category-classic-library.html"
  },
  {
    "id": "0908",
    "title": "万里追踪",
    "year": "2023",
    "region": "中国大陆",
    "type": "电影",
    "genre": "犯罪/动作/悬疑",
    "tags": [
      "边境缉毒",
      "复仇",
      "雪域高原",
      "以一敌百"
    ],
    "oneLine": "退休的边境缉毒警发现杀子仇人重现边境,他骑着一辆破摩托,独自在四千里边防线上展开亡命追杀。",
    "url": "./movies/movie-0908.html",
    "cover": "./8.jpg",
    "category": "热映精选",
    "categoryUrl": "./category-hot-picks.html"
  },
  {
    "id": "0909",
    "title": "战火游魂",
    "year": "2023",
    "region": "中国大陆",
    "type": "电影",
    "genre": "战争/剧情/冒险",
    "tags": [
      "淞沪会战",
      "孤军",
      "逃亡",
      "人性",
      "公路战争"
    ],
    "oneLine": "淞沪会战失败后,一个逃兵、一个戏子和一个女学生组成奇怪的组合,他们要穿越三百里敌占区,只为把一面残破的军旗送回后方。",
    "url": "./movies/movie-0909.html",
    "cover": "./9.jpg",
    "category": "动作专区",
    "categoryUrl": "./category-action-zone.html"
  },
  {
    "id": "0910",
    "title": "丈夫因素2",
    "year": "2026",
    "region": "泰国",
    "type": "电影",
    "genre": "恐怖/惊悚",
    "tags": [
      "东南亚民俗",
      "怪谈",
      "女性复仇",
      "高概念"
    ],
    "oneLine": "为了得到一个完美的丈夫,女人们开始用古老的巫术“种植”男人,但收获的季节来了。",
    "url": "./movies/movie-0910.html",
    "cover": "./10.jpg",
    "category": "院线热片",
    "categoryUrl": "./category-cinema-hits.html"
  },
  {
    "id": "0911",
    "title": "无效证据",
    "year": "2025",
    "region": "中国大陆",
    "type": "电影",
    "genre": "悬疑/犯罪",
    "tags": [
      "法庭推理",
      "程序正义",
      "冤案平反",
      "心理博弈"
    ],
    "oneLine": "女律师为弑母案被告作无罪辩护,却发现所有指向凶手的证据,都来自一个不存在的证人。",
    "url": "./movies/movie-0911.html",
    "cover": "./11.jpg",
    "category": "奇幻科幻",
    "categoryUrl": "./category-fantasy-sci-fi.html"
  },
  {
    "id": "0912",
    "title": "吊颈绳",
    "year": "2026",
    "region": "中国香港",
    "type": "电影",
    "genre": "恐怖,悬疑",
    "tags": [
      "民俗恐怖",
      "降头",
      "因果报应",
      "高能反转"
    ],
    "oneLine": "一条出现在每个死者床头的麻绳,串联起三十年前一桩全村沉默的冤案。",
    "url": "./movies/movie-0912.html",
    "cover": "./12.jpg",
    "category": "院线热片",
    "categoryUrl": "./category-cinema-hits.html"
  },
  {
    "id": "0913",
    "title": "老病号",
    "year": "2020",
    "region": "中国大陆",
    "type": "电视剧",
    "genre": "剧情/家庭/医疗",
    "tags": [
      "慢性病",
      "医患关系",
      "老年生活",
      "温情"
    ],
    "oneLine": "一个常年住院的“老病号”把病房当成了家,新来的年轻医生却想方设法要把他“赶”出去。",
    "url": "./movies/movie-0913.html",
    "cover": "./13.jpg",
    "category": "奇幻科幻",
    "categoryUrl": "./category-fantasy-sci-fi.html"
  },
  {
    "id": "0914",
    "title": "掬水月在手",
    "year": "2023",
    "region": "中国台湾",
    "type": "电影",
    "genre": "奇幻,古装,剧情",
    "tags": [
      "唐代诗人",
      "水月镜花",
      "书院争锋",
      "诗魂",
      "穿越时空"
    ],
    "oneLine": "现代女诗人意外穿越到唐代,发现自己被当作文成公主的替身,嫁给了一个只爱月亮的疯子将军。",
    "url": "./movies/movie-0914.html",
    "cover": "./14.jpg",
    "category": "历史古装",
    "categoryUrl": "./category-history-costume.html"
  },
  {
    "id": "0915",
    "title": "2人三足",
    "year": "2002",
    "region": "中国香港",
    "type": "电影",
    "genre": "运动、剧情、励志",
    "tags": [
      "残奥会",
      "跑步",
      "兄弟情",
      "缺陷"
    ],
    "oneLine": "两名在爆炸中各失去一条腿的陌生人,为了活下去组成了“双人三足”跑步搭档,目标是跑完波士顿马拉松。",
    "url": "./movies/movie-0915.html",
    "cover": "./15.jpg",
    "category": "动作专区",
    "categoryUrl": "./category-action-zone.html"
  },
  {
    "id": "0916",
    "title": "布鲁塞尔风情画",
    "year": "2023",
    "region": "比利时",
    "type": "电影",
    "genre": "文艺爱情",
    "tags": [
      "欧洲电影",
      "城市电影",
      "邂逅",
      "孤独"
    ],
    "oneLine": "一个失意的日本舞者与一个逃婚的本地女孩,在布鲁塞尔的秋夜里交换了彼此的人生。",
    "url": "./movies/movie-0916.html",
    "cover": "./16.jpg",
    "category": "剧集连看",
    "categoryUrl": "./category-drama-series.html"
  },
  {
    "id": "0917",
    "title": "皮裘大衣女人",
    "year": "2023",
    "region": "法国",
    "type": "电影",
    "genre": "剧情/悬疑",
    "tags": [
      "复仇",
      "时尚圈",
      "双面人生",
      "经典翻拍",
      "女性"
    ],
    "oneLine": "她穿着已故顶级设计师的遗作皮裘,闯入豪门晚宴,每一步都踩在复仇的节拍上。",
    "url": "./movies/movie-0917.html",
    "cover": "./17.jpg",
    "category": "悬疑夜场",
    "categoryUrl": "./category-suspense-night.html"
  },
  {
    "id": "0918",
    "title": "爱上新玩意",
    "year": "2025",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "爱情,喜剧,职场",
    "tags": [
      "科技创业",
      "反内卷",
      "欢喜冤家",
      "极客恋爱"
    ],
    "oneLine": "一个热爱古董修复的“老灵魂”女孩,被迫与打造“一键生成文物”AI的极客男同居。",
    "url": "./movies/movie-0918.html",
    "cover": "./18.jpg",
    "category": "家庭生活",
    "categoryUrl": "./category-family-life.html"
  },
  {
    "id": "0919",
    "title": "太阴指",
    "year": "2025",
    "region": "中国香港",
    "type": "电影",
    "genre": "动作/武侠/惊悚",
    "tags": [
      "邪术",
      "断指",
      "复仇",
      "硬核打斗"
    ],
    "oneLine": "江湖传闻,被“太阴指”点中穴位的人会在一日内全身骨骼尽碎,而下一个目标是一整个镖局。",
    "url": "./movies/movie-0919.html",
    "cover": "./19.jpg",
    "category": "院线热片",
    "categoryUrl": "./category-cinema-hits.html"
  },
  {
    "id": "0920",
    "title": "普鲁士蓝的肖像",
    "year": "2023",
    "region": "欧洲",
    "type": "电影",
    "genre": "历史/爱情",
    "tags": [
      "油画质感",
      "禁忌之恋",
      "悲剧美学"
    ],
    "oneLine": "一位普鲁士宫廷画师爱上了一幅画中的蓝衣女子,而这幅画的颜料是用情敌的骨灰制成的。",
    "url": "./movies/movie-0920.html",
    "cover": "./20.jpg",
    "category": "经典片库",
    "categoryUrl": "./category-classic-library.html"
  },
  {
    "id": "0921",
    "title": "电子情书",
    "year": "1998",
    "region": "美国",
    "type": "电影",
    "genre": "爱情,喜剧",
    "tags": [
      "网恋",
      "书店",
      "冤家",
      "90年代",
      "经典"
    ],
    "oneLine": "现实中的书店冤家,网络上却是彼此的灵魂伴侣,他们不知道对方就是那个人。",
    "url": "./movies/movie-0921.html",
    "cover": "./21.jpg",
    "category": "奇幻科幻",
    "categoryUrl": "./category-fantasy-sci-fi.html"
  },
  {
    "id": "0922",
    "title": "死亡感激",
    "year": "2023",
    "region": "韩国",
    "type": "电影",
    "genre": "惊悚,悬疑,犯罪",
    "tags": [
      "反转",
      "复仇",
      "爽片",
      "惊悚",
      "法律"
    ],
    "oneLine": "死刑犯器官捐赠名单上,每一个受益者,都曾亲手送他上刑场。",
    "url": "./movies/movie-0922.html",
    "cover": "./22.jpg",
    "category": "热映精选",
    "categoryUrl": "./category-hot-picks.html"
  },
  {
    "id": "0923",
    "title": "某日某月",
    "year": "2018",
    "region": "中国香港",
    "type": "电影",
    "genre": "爱情",
    "tags": [
      "青春",
      "怀旧",
      "异地恋",
      "成长"
    ],
    "oneLine": "1992年,一场暴雨让两个年轻人的信件被困邮局,他们却在等待中各自活成了对方信里的样子。",
    "url": "./movies/movie-0923.html",
    "cover": "./23.jpg",
    "category": "全球佳作",
    "categoryUrl": "./category-global-stories.html"
  },
  {
    "id": "0924",
    "title": "哭灵人",
    "year": "2025",
    "region": "中国",
    "type": "电影",
    "genre": "悬疑、惊悚、民俗",
    "tags": [
      "丧葬文化",
      "替哭",
      "封建迷信",
      "乡村悬疑",
      "女性复仇"
    ],
    "oneLine": "职业哭灵人阿芬在为村长哭丧时,随口唱出的“悼词”竟一一应验,导致村里人离奇死亡。",
    "url": "./movies/movie-0924.html",
    "cover": "./24.jpg",
    "category": "家庭生活",
    "categoryUrl": "./category-family-life.html"
  },
  {
    "id": "0925",
    "title": "欲仙欲死满堂春",
    "year": "1991",
    "region": "中国香港",
    "type": "电影",
    "genre": "喜剧,情色,剧情",
    "tags": [
      "欲望",
      "家族",
      "黑色幽默",
      "伦理",
      "夸张"
    ],
    "oneLine": "富可敌国的马家老太爷临终遗嘱:谁能在一年内为家族添丁,谁就继承全部家产。",
    "url": "./movies/movie-0925.html",
    "cover": "./25.jpg",
    "category": "家庭生活",
    "categoryUrl": "./category-family-life.html"
  },
  {
    "id": "0926",
    "title": "你好,爱,再次",
    "year": "2024",
    "region": "日本",
    "type": "电影",
    "genre": "爱情/奇幻/剧情",
    "tags": [
      "时间循环",
      "离婚前夕",
      "重新相爱",
      "日常治愈"
    ],
    "oneLine": "一对已签完离婚协议的夫妻被困在同一天,每次重来都会忘掉彼此,却总是再次爱上对方。",
    "url": "./movies/movie-0926.html",
    "cover": "./26.jpg",
    "category": "院线热片",
    "categoryUrl": "./category-cinema-hits.html"
  },
  {
    "id": "0927",
    "title": "珈百璃的堕落",
    "year": "2022",
    "region": "日本",
    "type": "剧集",
    "genre": "动画,喜剧,奇幻",
    "tags": [
      "废天使",
      "反差萌",
      "日常",
      "搞笑"
    ],
    "oneLine": "毕业首席天使珈百璃下凡修行,却沉迷网游变成头号废宅。",
    "url": "./movies/movie-0927.html",
    "cover": "./27.jpg",
    "category": "全球佳作",
    "categoryUrl": "./category-global-stories.html"
  },
  {
    "id": "0928",
    "title": "甜蜜海风",
    "year": "2019",
    "region": "中国台湾",
    "type": "电影",
    "genre": "爱情,剧情",
    "tags": [
      "澎湖",
      "甜品",
      "疗愈",
      "小清新"
    ],
    "oneLine": "一个失意的甜品师来到澎湖,用海风和思念做出了全世界最苦的巧克力。",
    "url": "./movies/movie-0928.html",
    "cover": "./28.jpg",
    "category": "历史古装",
    "categoryUrl": "./category-history-costume.html"
  },
  {
    "id": "0929",
    "title": "请融化我",
    "year": "2019",
    "region": "韩国",
    "type": "电视剧",
    "genre": "爱情/科幻",
    "tags": [
      "冷冻人",
      "苏醒",
      "代沟"
    ],
    "oneLine": "参与冷冻人实验的一对男女,20年后苏醒,发现不仅世界变了,体温也要保持在33度以下。",
    "url": "./movies/movie-0929.html",
    "cover": "./29.jpg",
    "category": "都市爱情",
    "categoryUrl": "./category-romance-city.html"
  },
  {
    "id": "0930",
    "title": "星级汪站长",
    "year": "2023",
    "region": "中国大陆",
    "type": "网络剧",
    "genre": "喜剧、职场、科幻",
    "tags": [
      "太空站",
      "柴犬站长",
      "轻松搞笑",
      "打工狗"
    ],
    "oneLine": "中国空间站迎来一位特殊站长——一只被送上太空的柴犬,它比所有航天员都懂技术。",
    "url": "./movies/movie-0930.html",
    "cover": "./30.jpg",
    "category": "全球佳作",
    "categoryUrl": "./category-global-stories.html"
  },
  {
    "id": "0931",
    "title": "败犬女主太多了!",
    "year": "2024",
    "region": "日本",
    "type": "动画剧集",
    "genre": "喜剧/爱情/校园",
    "tags": [
      "败犬",
      "旁观者视角",
      "党争"
    ],
    "oneLine": "路人男主被安排去清理学校储物室,却发现这里是历届“败犬”女主们的秘密茶话会,他成了她们唯一的“战败史官”。",
    "url": "./movies/movie-0931.html",
    "cover": "./31.jpg",
    "category": "奇幻科幻",
    "categoryUrl": "./category-fantasy-sci-fi.html"
  },
  {
    "id": "0932",
    "title": "漫威未来复仇者第一季",
    "year": "2024",
    "region": "日本/美国",
    "type": "动画剧集",
    "genre": "动作/科幻/冒险",
    "tags": [
      "超级英雄",
      "机甲",
      "青少年成长"
    ],
    "oneLine": "灭霸之女与五位少年驾驶钢铁侠打造的巨型机甲,对抗次元反派。",
    "url": "./movies/movie-0932.html",
    "cover": "./32.jpg",
    "category": "全球佳作",
    "categoryUrl": "./category-global-stories.html"
  },
  {
    "id": "0933",
    "title": "长安秘闻",
    "year": "2024",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "古装/悬疑/探案",
    "tags": [
      "唐朝",
      "狄仁杰",
      "朝堂权谋"
    ],
    "oneLine": "狄仁杰晚年接手一桩连环命案,所有线索都指向一封来自未来的密信。",
    "url": "./movies/movie-0933.html",
    "cover": "./33.jpg",
    "category": "悬疑夜场",
    "categoryUrl": "./category-suspense-night.html"
  },
  {
    "id": "0934",
    "title": "无人能敌",
    "year": "2026",
    "region": "美国",
    "type": "电影",
    "genre": "动作/犯罪",
    "tags": [
      "硬汉",
      "复仇",
      "神秘组织",
      "肉搏"
    ],
    "oneLine": "一个被注销身份的前特工,发现想要刺杀他的神秘组织竟然是他自己创立的。",
    "url": "./movies/movie-0934.html",
    "cover": "./34.jpg",
    "category": "家庭生活",
    "categoryUrl": "./category-family-life.html"
  },
  {
    "id": "0935",
    "title": "一夜恩情粤语",
    "year": "1997",
    "region": "中国香港",
    "type": "电影",
    "genre": "爱情/剧情",
    "tags": [
      "粤语",
      "一夜情",
      "怀孕",
      "单亲妈妈",
      "港风"
    ],
    "oneLine": "一夜激情后她独自生下孩子,十年后男人回来,发现孩子从未见过他。",
    "url": "./movies/movie-0935.html",
    "cover": "./35.jpg",
    "category": "全球佳作",
    "categoryUrl": "./category-global-stories.html"
  },
  {
    "id": "0936",
    "title": "你的来生",
    "year": "2025",
    "region": "韩国",
    "type": "电视剧",
    "genre": "科幻,爱情",
    "tags": [
      "转世",
      "数据上传",
      "记忆宫殿",
      "永生"
    ],
    "oneLine": "一位天才程序员将逝去女友的意识上传到云端,却发现每个“来生”副本都爱上了不同的人。",
    "url": "./movies/movie-0936.html",
    "cover": "./36.jpg",
    "category": "经典片库",
    "categoryUrl": "./category-classic-library.html"
  },
  {
    "id": "0937",
    "title": "海底小纵队:洞穴大冒险",
    "year": "2025",
    "region": "英国,中国",
    "type": "动画电影",
    "genre": "动画,冒险,儿童",
    "tags": [
      "海底",
      "洞穴",
      "探险",
      "海洋生物",
      "科普"
    ],
    "oneLine": "巴克队长带队误入海底神秘洞穴系统,发现里面住着一群会说人话的史前生物。",
    "url": "./movies/movie-0937.html",
    "cover": "./37.jpg",
    "category": "都市爱情",
    "categoryUrl": "./category-romance-city.html"
  },
  {
    "id": "0938",
    "title": "沙之痕",
    "year": "2026",
    "region": "中国大陆",
    "type": "电影",
    "genre": "科幻,灾难",
    "tags": [
      "环保",
      "末世",
      "探险"
    ],
    "oneLine": "全球沙漠化加剧,沙暴中开始出现巨大的、用沙粒构成的远古生物痕迹。",
    "url": "./movies/movie-0938.html",
    "cover": "./38.jpg",
    "category": "热映精选",
    "categoryUrl": "./category-hot-picks.html"
  },
  {
    "id": "0939",
    "title": "当魔鬼来敲门",
    "year": "2026",
    "region": "美国",
    "type": "电影",
    "genre": "恐怖/心理惊悚",
    "tags": [
      "魔鬼契约",
      "倒计时",
      "家庭入侵",
      "道德抉择",
      "超自然"
    ],
    "oneLine": "每晚午夜,门外都会响起三声敲门声,开门者将用灵魂换取一夜安宁。",
    "url": "./movies/movie-0939.html",
    "cover": "./39.jpg",
    "category": "悬疑夜场",
    "categoryUrl": "./category-suspense-night.html"
  },
  {
    "id": "0940",
    "title": "最后得分",
    "year": "2019",
    "region": "英国",
    "type": "电影",
    "genre": "惊悚,动作",
    "tags": [
      "足球流氓",
      "恐怖分子",
      "体育场",
      "反恐"
    ],
    "oneLine": "欧冠决赛现场,一个带女儿看球的退役特种兵,必须在90分钟内拆掉球场里的炸弹。 6万人的温布利球场,定时炸弹藏在奖杯底座,而他唯一的武器是围巾和打火机。",
    "url": "./movies/movie-0940.html",
    "cover": "./40.jpg",
    "category": "动作专区",
    "categoryUrl": "./category-action-zone.html"
  },
  {
    "id": "0941",
    "title": "跨越宁静",
    "year": "2024",
    "region": "法国/比利时",
    "type": "电影",
    "genre": "剧情,心理,悬疑",
    "tags": [
      "空难幸存",
      "PTSD",
      "阿尔卑斯山",
      "自我救赎"
    ],
    "oneLine": "一场空难后,她是唯一的幸存者,但所有人都在质疑她的记忆。",
    "url": "./movies/movie-0941.html",
    "cover": "./41.jpg",
    "category": "奇幻科幻",
    "categoryUrl": "./category-fantasy-sci-fi.html"
  },
  {
    "id": "0942",
    "title": "石普卡的英雄",
    "year": "2024",
    "region": "俄罗斯",
    "type": "电影",
    "genre": "战争/历史/动作",
    "tags": [
      "俄土战争",
      "要塞攻防",
      "真实历史",
      "民族精神"
    ],
    "oneLine": "俄土战争中最惨烈的石普卡要塞争夺战,一名沙俄神枪手孤身坚守断崖,拖住敌军三千人。",
    "url": "./movies/movie-0942.html",
    "cover": "./42.jpg",
    "category": "都市爱情",
    "categoryUrl": "./category-romance-city.html"
  },
  {
    "id": "0943",
    "title": "街头女斗士2:全球日志",
    "year": "2024",
    "region": "日本",
    "type": "真人剧集",
    "genre": "动作/冒险",
    "tags": [
      "女性格斗",
      "全球取景",
      "地下擂台",
      "生存游戏"
    ],
    "oneLine": "昔日地下格斗女王被卷入一场跨越十二国的死亡直播赛事,不打到最后一刻就无法退出。",
    "url": "./movies/movie-0943.html",
    "cover": "./43.jpg",
    "category": "热映精选",
    "categoryUrl": "./category-hot-picks.html"
  },
  {
    "id": "0944",
    "title": "决胜零距离",
    "year": "2022",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "军旅/动作",
    "tags": [
      "狙击手",
      "实战演习",
      "兄弟情"
    ],
    "oneLine": "距离敌人900米,风速每秒3米,他的心跳必须降到每分钟60下。",
    "url": "./movies/movie-0944.html",
    "cover": "./44.jpg",
    "category": "历史古装",
    "categoryUrl": "./category-history-costume.html"
  },
  {
    "id": "0945",
    "title": "黑光行动",
    "year": "2025",
    "region": "英国/德国",
    "type": "剧集",
    "genre": "动作/谍战",
    "tags": [
      "特工",
      "全球追杀",
      "地下组织"
    ],
    "oneLine": "一名失忆的特工醒来发现自己的脸已被全球通缉,连影子组织都想除掉他。",
    "url": "./movies/movie-0945.html",
    "cover": "./45.jpg",
    "category": "动作专区",
    "categoryUrl": "./category-action-zone.html"
  },
  {
    "id": "0946",
    "title": "月出之战",
    "year": "2026",
    "region": "中国大陆",
    "type": "电影",
    "genre": "科幻/战争",
    "tags": [
      "月球基地",
      "资源争夺",
      "硬核科幻"
    ],
    "oneLine": "月球资源枯竭前夕,两派殖民者为争夺最后一艘返航飞船,在静海基地展开生死对决。",
    "url": "./movies/movie-0946.html",
    "cover": "./46.jpg",
    "category": "历史古装",
    "categoryUrl": "./category-history-costume.html"
  },
  {
    "id": "0947",
    "title": "一起火锅吧",
    "year": "2022",
    "region": "中国大陆",
    "type": "综艺/电影",
    "genre": "真人秀,喜剧",
    "tags": [
      "火锅",
      "明星",
      "聊天",
      "美食",
      "生活"
    ],
    "oneLine": "每期一位明星嘉宾在火锅局里边吃边聊,爆出从未公开的圈内八卦和人生故事。",
    "url": "./movies/movie-0947.html",
    "cover": "./47.jpg",
    "category": "奇幻科幻",
    "categoryUrl": "./category-fantasy-sci-fi.html"
  },
  {
    "id": "0948",
    "title": "冷恋时代",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "genre": "爱情/剧情",
    "tags": [
      "极寒之地",
      "治愈系",
      "孤独患者",
      "慢节奏恋爱"
    ],
    "oneLine": "在零下四十度的北极村落,两个不会爱的人学会了用体温给彼此写信。",
    "url": "./movies/movie-0948.html",
    "cover": "./48.jpg",
    "category": "全球佳作",
    "categoryUrl": "./category-global-stories.html"
  },
  {
    "id": "0949",
    "title": "吾家有女初长成",
    "year": "2021",
    "region": "中国台湾",
    "type": "剧集",
    "genre": "家庭/喜剧/青春",
    "tags": [
      "父女关系",
      "青春期",
      "单亲家庭",
      "校园生活",
      "幽默温情"
    ],
    "oneLine": "一个笨手笨脚的货车司机父亲,独自抚养三个女儿长大,从扎辫子到谈初潮再到第一次失恋,全程手忙脚乱又笑中带泪。",
    "url": "./movies/movie-0949.html",
    "cover": "./49.jpg",
    "category": "剧集连看",
    "categoryUrl": "./category-drama-series.html"
  },
  {
    "id": "0950",
    "title": "不要回头",
    "year": "2024",
    "region": "法国/意大利",
    "type": "电影",
    "genre": "惊悚/心理",
    "tags": [
      "人格分裂",
      "镜像",
      "记忆"
    ],
    "oneLine": "摄影师的镜头里总出现一个陌生女人,直到有一天她发现那个女人就是自己。",
    "url": "./movies/movie-0950.html",
    "cover": "./50.jpg",
    "category": "家庭生活",
    "categoryUrl": "./category-family-life.html"
  },
  {
    "id": "0951",
    "title": "夜阑情史",
    "year": "2020",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "爱情、历史、年代、剧情",
    "tags": [
      "民国",
      "家族恩怨",
      "禁忌之恋",
      "女性觉醒"
    ],
    "oneLine": "三十年代的上海,三个不同阶层的女人在同一座夜阑公馆里,同时爱上一个男人,而她们各自的秘密逐渐吞噬彼此。",
    "url": "./movies/movie-0951.html",
    "cover": "./51.jpg",
    "category": "都市爱情",
    "categoryUrl": "./category-romance-city.html"
  },
  {
    "id": "0952",
    "title": "绞刑台2",
    "year": "2024",
    "region": "美国",
    "type": "电影",
    "genre": "恐怖,惊悚",
    "tags": [
      "伪纪录片",
      "密室逃脱",
      "反转",
      "血腥"
    ],
    "oneLine": "为了帮妹妹复仇,女主播主动闯入废弃的死刑监狱进行直播,却发现绞刑台会根据观看人数决定下一个人何时死去。",
    "url": "./movies/movie-0952.html",
    "cover": "./52.jpg",
    "category": "家庭生活",
    "categoryUrl": "./category-family-life.html"
  },
  {
    "id": "0953",
    "title": "咖啡鲜肉",
    "year": "2021",
    "region": "中国大陆",
    "type": "网络剧",
    "genre": "都市,爱情,喜剧",
    "tags": [
      "姐弟恋",
      "咖啡师",
      "治愈",
      "甜宠"
    ],
    "oneLine": "三十岁失婚女强人,在辞职旅行的咖啡馆里撩到了一个比自己小十岁的“小鲜肉”咖啡师。",
    "url": "./movies/movie-0953.html",
    "cover": "./53.jpg",
    "category": "都市爱情",
    "categoryUrl": "./category-romance-city.html"
  },
  {
    "id": "0954",
    "title": "你还是不懂群马",
    "year": "2025",
    "region": "日本",
    "type": "电视剧",
    "genre": "喜剧/地域/青春",
    "tags": [
      "地域黑搞笑",
      "热血高中生",
      "奇葩县民性"
    ],
    "oneLine": "转学到群马县的东京少年,被当地过于狂热的爱县魂和奇葩风俗反复折磨。",
    "url": "./movies/movie-0954.html",
    "cover": "./54.jpg",
    "category": "全球佳作",
    "categoryUrl": "./category-global-stories.html"
  },
  {
    "id": "0955",
    "title": "剑王朝",
    "year": "2024",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "古装、奇幻、武侠",
    "tags": [
      "复仇",
      "剑术",
      "王朝",
      "修真"
    ],
    "oneLine": "被灭国的亡国太子隐姓埋名成为最卑微的铸剑奴,用十年时间将自己铸成一把复仇之剑。",
    "url": "./movies/movie-0955.html",
    "cover": "./55.jpg",
    "category": "动作专区",
    "categoryUrl": "./category-action-zone.html"
  },
  {
    "id": "0956",
    "title": "万圣快乐",
    "year": "2023",
    "region": "美国",
    "type": "电影",
    "genre": "恐怖",
    "tags": [
      "万圣节",
      "连环杀手",
      "复古恐怖",
      "反转结局"
    ],
    "oneLine": "一座偏僻小镇的居民每年万圣节都会遵守一个诡异传统——给“祂”留一颗糖,否则就会消失。",
    "url": "./movies/movie-0956.html",
    "cover": "./56.jpg",
    "category": "全球佳作",
    "categoryUrl": "./category-global-stories.html"
  },
  {
    "id": "0957",
    "title": "爱情是什么国语第二部",
    "year": "2025",
    "region": "中国台湾/日本",
    "type": "电视剧",
    "genre": "爱情/剧情/生活",
    "tags": [
      "异地恋",
      "中年危机",
      "再婚",
      "文化差异",
      "国台语混杂"
    ],
    "oneLine": "原版故事十年后,当年的痴情男女步入中年,在台北和东京之间,他们必须重新回答“爱情是什么”。",
    "url": "./movies/movie-0957.html",
    "cover": "./57.jpg",
    "category": "院线热片",
    "categoryUrl": "./category-cinema-hits.html"
  },
  {
    "id": "0958",
    "title": "疯狂富作用",
    "year": "2025",
    "region": "瑞典/法国",
    "type": "电影",
    "genre": "喜剧/剧情/讽刺",
    "tags": [
      "阶级",
      "岛难",
      "富豪",
      "人性实验",
      "黑色幽默"
    ],
    "oneLine": "一艘超豪华游艇沉没后,十几位超级富豪和一名清洁工漂到荒岛,文明秩序迅速崩塌。",
    "url": "./movies/movie-0958.html",
    "cover": "./58.jpg",
    "category": "全球佳作",
    "categoryUrl": "./category-global-stories.html"
  },
  {
    "id": "0959",
    "title": "海军陆战队员",
    "year": "2024",
    "region": "美国",
    "type": "电影",
    "genre": "动作/军事",
    "tags": [
      "硬汉",
      "孤胆英雄",
      "营救",
      "正邪对决"
    ],
    "oneLine": "退役陆战队员为救被绑架的女儿,只身闯入南美毒枭的地下要塞,却发现人质不止她一个。",
    "url": "./movies/movie-0959.html",
    "cover": "./59.jpg",
    "category": "经典片库",
    "categoryUrl": "./category-classic-library.html"
  },
  {
    "id": "0960",
    "title": "明星梦",
    "year": "2025",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "都市励志",
    "tags": [
      "选秀",
      "替身",
      "素人逆袭"
    ],
    "oneLine": "农村女孩给顶流明星当替身,却被资本选中取代正主,一夜之间真假偶像对调。",
    "url": "./movies/movie-0960.html",
    "cover": "./60.jpg",
    "category": "奇幻科幻",
    "categoryUrl": "./category-fantasy-sci-fi.html"
  },
  {
    "id": "0961",
    "title": "艾草",
    "year": "2024",
    "region": "中国台湾",
    "type": "电影",
    "genre": "家庭/剧情",
    "tags": [
      "乡土",
      "民俗",
      "隔代亲",
      "治愈"
    ],
    "oneLine": "被城市遗弃的过气歌仔戏演员,带孙女回乡下种艾草,意外治好了全村人的心病。",
    "url": "./movies/movie-0961.html",
    "cover": "./61.jpg",
    "category": "经典片库",
    "categoryUrl": "./category-classic-library.html"
  },
  {
    "id": "0962",
    "title": "舞国",
    "year": "2026",
    "region": "中国大陆",
    "type": "电影",
    "genre": "剧情,歌舞",
    "tags": [
      "广场舞",
      "老龄化",
      "社区",
      "逆袭"
    ],
    "oneLine": "一个被广场舞大妈赶出公园的街舞少年,为了夺回地盘,决定教大妈们跳Breaking。",
    "url": "./movies/movie-0962.html",
    "cover": "./62.jpg",
    "category": "全球佳作",
    "categoryUrl": "./category-global-stories.html"
  },
  {
    "id": "0963",
    "title": "反派第二季",
    "year": "2025",
    "region": "美国",
    "type": "电视剧",
    "genre": "犯罪,剧情,惊悚",
    "tags": [
      "反英雄",
      "心理剖析",
      "高智商犯罪",
      "复仇",
      "黑色幽默"
    ],
    "oneLine": "第一季被送入监狱的反派,第二季发现自己成了网上万人追捧的“民间英雄”。",
    "url": "./movies/movie-0963.html",
    "cover": "./63.jpg",
    "category": "青春喜剧",
    "categoryUrl": "./category-youth-comedy.html"
  },
  {
    "id": "0964",
    "title": "这个高中没有鬼",
    "year": "2024",
    "region": "泰国,中国香港",
    "type": "电影",
    "genre": "喜剧,恐怖,校园",
    "tags": [
      "伪纪录片",
      "反转",
      "荒诞",
      "讽刺"
    ],
    "oneLine": "一个摄制组去传闻闹鬼的高中探险直播,结果发现鬼是假的,但学校里的秘密比鬼还可怕。",
    "url": "./movies/movie-0964.html",
    "cover": "./64.jpg",
    "category": "热映精选",
    "categoryUrl": "./category-hot-picks.html"
  },
  {
    "id": "0965",
    "title": "海之魂",
    "year": "2022",
    "region": "中国大陆",
    "type": "电影",
    "genre": "剧情,家庭",
    "tags": [
      "渔民",
      "传承",
      "海岛"
    ],
    "oneLine": "东海小岛上,一个拒绝继承渔业的90后,在台风天被迫掌舵了父亲的老渔船。",
    "url": "./movies/movie-0965.html",
    "cover": "./65.jpg",
    "category": "动作专区",
    "categoryUrl": "./category-action-zone.html"
  },
  {
    "id": "0966",
    "title": "天使的收音机",
    "year": "2025",
    "region": "中国台湾",
    "type": "电影",
    "genre": "剧情,悬疑,奇幻",
    "tags": [
      "亲情救赎",
      "怀旧",
      "灵异电台",
      "罪与罚"
    ],
    "oneLine": "一个过气的深夜电台主播,在节目停播前最后一晚,接到了一个自称来自1999年地震废墟中的小女孩的求救电话。",
    "url": "./movies/movie-0966.html",
    "cover": "./66.jpg",
    "category": "历史古装",
    "categoryUrl": "./category-history-costume.html"
  },
  {
    "id": "0967",
    "title": "约会吧男孩",
    "year": "2023",
    "region": "泰国",
    "type": "剧集",
    "genre": "爱情,喜剧,同性",
    "tags": [
      "恋爱综艺",
      "假戏真做",
      "青春甜宠"
    ],
    "oneLine": "一档名为《约会吧男孩》的素人恋爱综艺里,两位男嘉宾在镜头外偷偷擦出了火花。",
    "url": "./movies/movie-0967.html",
    "cover": "./67.jpg",
    "category": "家庭生活",
    "categoryUrl": "./category-family-life.html"
  },
  {
    "id": "0968",
    "title": "小奥德萨",
    "year": "2024",
    "region": "俄罗斯",
    "type": "剧集",
    "genre": "犯罪,历史,剧情",
    "tags": [
      "黑帮",
      "家族",
      "历史变迁",
      "1990年代"
    ],
    "oneLine": "苏联解体后,在黑海港口奥德萨,一个犹太黑帮家族如何在混乱与背叛中求生。",
    "url": "./movies/movie-0968.html",
    "cover": "./68.jpg",
    "category": "动作专区",
    "categoryUrl": "./category-action-zone.html"
  },
  {
    "id": "0969",
    "title": "榴莲飘飘",
    "year": "2025",
    "region": "马来西亚,中国大陆",
    "type": "电影",
    "genre": "喜剧,剧情,家庭",
    "tags": [
      "华人社会",
      "榴莲园",
      "返乡故事"
    ],
    "oneLine": "一个在都市混不下去的落魄厨师回到祖传的榴莲园,意外通过直播卖榴莲成为网红,却不得不面对家族土地被征用的危机。",
    "url": "./movies/movie-0969.html",
    "cover": "./69.jpg",
    "category": "家庭生活",
    "categoryUrl": "./category-family-life.html"
  },
  {
    "id": "0970",
    "title": "关于我们的爱情",
    "year": "2027",
    "region": "法国",
    "type": "电影",
    "genre": "剧情,爱情,文艺",
    "tags": [
      "时间跨度",
      "遗憾美学",
      "存在主义"
    ],
    "oneLine": "一对恋人在巴黎的九个地铁站偶遇八次,每次他们都假装不认识。",
    "url": "./movies/movie-0970.html",
    "cover": "./70.jpg",
    "category": "全球佳作",
    "categoryUrl": "./category-global-stories.html"
  },
  {
    "id": "0971",
    "title": "老虎出更",
    "year": "1988",
    "region": "中国香港",
    "type": "电影",
    "genre": "动作/喜剧/警匪",
    "tags": [
      "周润发",
      "火爆警匪",
      "港式动作",
      "搞笑搭档"
    ],
    "oneLine": "一名自恋的花花警察与一名怕事的书呆子误打误撞搭档,追捕越南黑帮毒贩。",
    "url": "./movies/movie-0971.html",
    "cover": "./71.jpg",
    "category": "全球佳作",
    "categoryUrl": "./category-global-stories.html"
  },
  {
    "id": "0972",
    "title": "家有嫂娘",
    "year": "2025",
    "region": "中国大陆",
    "type": "电影",
    "genre": "家庭、伦理、年代",
    "tags": [
      "嫂娘",
      "牺牲",
      "农村女性"
    ],
    "oneLine": "丈夫矿难身亡后,嫂子独自拉扯三个小叔子长大,却在小叔子考上大学那晚被赶出家门。",
    "url": "./movies/movie-0972.html",
    "cover": "./72.jpg",
    "category": "经典片库",
    "categoryUrl": "./category-classic-library.html"
  },
  {
    "id": "0973",
    "title": "花花公子之千面女陪游",
    "year": "2025",
    "region": "中国香港",
    "type": "电影",
    "genre": "爱情/喜剧/悬疑",
    "tags": [
      "伪装",
      "骗中骗",
      "富豪",
      "情感游戏"
    ],
    "oneLine": "一个富二代雇了一个“千面女郎”扮演100种女友来气父亲,结果自己爱上了第101个她。",
    "url": "./movies/movie-0973.html",
    "cover": "./73.jpg",
    "category": "剧集连看",
    "categoryUrl": "./category-drama-series.html"
  },
  {
    "id": "0974",
    "title": "仕女图",
    "year": "2023",
    "region": "中国大陆",
    "type": "电影/网络电影",
    "genre": "悬疑,古装,爱情",
    "tags": [
      "宫廷",
      "画师",
      "替身",
      "权谋",
      "反转"
    ],
    "oneLine": "宫廷画师为贵妃画像,却发现画中仕女每晚都会流泪,揭开一段关于替身与复仇的惊心秘闻。",
    "url": "./movies/movie-0974.html",
    "cover": "./74.jpg",
    "category": "院线热片",
    "categoryUrl": "./category-cinema-hits.html"
  },
  {
    "id": "0975",
    "title": "盘丝洞",
    "year": "2025",
    "region": "中国大陆",
    "type": "电影",
    "genre": "奇幻/恐怖/古装",
    "tags": [
      "妖",
      "悬疑",
      "女性视角",
      "视觉奇观"
    ],
    "oneLine": "七个误入盘丝洞的旅人相继遇害,最后一个幸存的女书生发现,最大的妖怪并非蛛精,而是自己内心的嗔念。",
    "url": "./movies/movie-0975.html",
    "cover": "./75.jpg",
    "category": "院线热片",
    "categoryUrl": "./category-cinema-hits.html"
  },
  {
    "id": "0976",
    "title": "箭侠恩仇粤语",
    "year": "1996",
    "region": "香港",
    "type": "剧集",
    "genre": "武侠、古装、动作",
    "tags": [
      "复仇",
      "弓箭",
      "江湖恩怨",
      "兄弟情"
    ],
    "oneLine": "沉默箭手为报灭门之仇潜入敌营,却发现自己要杀的人正是失散多年的亲兄弟。",
    "url": "./movies/movie-0976.html",
    "cover": "./76.jpg",
    "category": "热映精选",
    "categoryUrl": "./category-hot-picks.html"
  },
  {
    "id": "0977",
    "title": "前任酒吧战!",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "genre": "喜剧、爱情",
    "tags": [
      "前任",
      "酒吧",
      "误会"
    ],
    "oneLine": "婚礼前夜,男主在酒吧同时撞见了三位前任,而她们竟然结成了同盟。",
    "url": "./movies/movie-0977.html",
    "cover": "./77.jpg",
    "category": "院线热片",
    "categoryUrl": "./category-cinema-hits.html"
  },
  {
    "id": "0978",
    "title": "科威特之火",
    "year": "2024",
    "region": "英国/科威特",
    "type": "电影",
    "genre": "动作/剧情",
    "tags": [
      "油田",
      "消防",
      "真实事件",
      "英雄"
    ],
    "oneLine": "海湾战争后,一支国际灭火队冒着生命危险扑灭727口燃烧的油井,对抗人为火海。",
    "url": "./movies/movie-0978.html",
    "cover": "./78.jpg",
    "category": "都市爱情",
    "categoryUrl": "./category-romance-city.html"
  },
  {
    "id": "0979",
    "title": "东北狠人沙猩猩",
    "year": "2025",
    "region": "中国大陆",
    "type": "电影",
    "genre": "喜剧,奇幻,动作",
    "tags": [
      "东北喜剧",
      "动物变异",
      "城市英雄",
      "反差萌"
    ],
    "oneLine": "沈阳动物园一只被虐待的大猩猩意外获得人类智慧,操着一口流利东北话向黑心老板复仇。",
    "url": "./movies/movie-0979.html",
    "cover": "./79.jpg",
    "category": "奇幻科幻",
    "categoryUrl": "./category-fantasy-sci-fi.html"
  },
  {
    "id": "0980",
    "title": "高卢勇士传",
    "year": "2006",
    "region": "法国",
    "type": "动画电影",
    "genre": "喜剧/冒险",
    "tags": [
      "高卢英雄",
      "魔法药水",
      "罗马",
      "法国漫画",
      "恶搞"
    ],
    "oneLine": "高卢小村庄的勇士喝了魔法药水力大无穷,为了对抗凯撒,他们造了一座会飞的罗马竞技场。",
    "url": "./movies/movie-0980.html",
    "cover": "./80.jpg",
    "category": "青春喜剧",
    "categoryUrl": "./category-youth-comedy.html"
  },
  {
    "id": "0981",
    "title": "魔力神童",
    "year": "1970",
    "region": "美国",
    "type": "电影",
    "genre": "喜剧,奇幻,家庭",
    "tags": [
      "魔法",
      "复古科幻",
      "闹剧"
    ],
    "oneLine": "一个三流魔术师意外获得古代神灯,却把洛杉矶整个倒转过来,所有人都飘在空中。",
    "url": "./movies/movie-0981.html",
    "cover": "./81.jpg",
    "category": "剧集连看",
    "categoryUrl": "./category-drama-series.html"
  },
  {
    "id": "0982",
    "title": "麻辣教授",
    "year": "2025",
    "region": "印度",
    "type": "电影",
    "genre": "喜剧,剧情,动作",
    "tags": [
      "黑帮老师",
      "贫民窟学生",
      "以暴制暴",
      "教育"
    ],
    "oneLine": "一个决心金盆洗手的黑帮分子,为了完成死去兄弟的遗愿,不得不去贫民窟小学当老师,却发现自己比校长更擅长解决麻烦。",
    "url": "./movies/movie-0982.html",
    "cover": "./82.jpg",
    "category": "家庭生活",
    "categoryUrl": "./category-family-life.html"
  },
  {
    "id": "0983",
    "title": "性感女特工2",
    "year": "2026",
    "region": "美国",
    "type": "电影",
    "genre": "动作/惊悚/犯罪",
    "tags": [
      "女性特工",
      "暴力美学",
      "全球追杀",
      "黑色幽默",
      "B级片"
    ],
    "oneLine": "上集退休的性感女特工如今在超市当收银员,但黑帮绑架了她的猫,逼她重出江湖。",
    "url": "./movies/movie-0983.html",
    "cover": "./83.jpg",
    "category": "历史古装",
    "categoryUrl": "./category-history-costume.html"
  },
  {
    "id": "0984",
    "title": "我们的爱情",
    "year": "2023",
    "region": "中国台湾",
    "type": "电视剧",
    "genre": "爱情,家庭",
    "tags": [
      "三代同堂",
      "时代变迁",
      "台式浪漫",
      "情感纠葛",
      "怀旧"
    ],
    "oneLine": "祖母患上阿尔茨海默症后,她遗忘的初恋秘密,颠覆了孙女的婚礼计划。",
    "url": "./movies/movie-0984.html",
    "cover": "./84.jpg",
    "category": "热映精选",
    "categoryUrl": "./category-hot-picks.html"
  },
  {
    "id": "0985",
    "title": "锁住有情天",
    "year": "1993",
    "region": "中国香港",
    "type": "电影",
    "genre": "爱情/剧情",
    "tags": [
      "经典港片",
      "苦情",
      "同心锁",
      "梁家辉",
      "张曼玉"
    ],
    "oneLine": "她在华山锁上一把同心锁,钥匙扔进深渊,而他等了她二十年。",
    "url": "./movies/movie-0985.html",
    "cover": "./85.jpg",
    "category": "动作专区",
    "categoryUrl": "./category-action-zone.html"
  },
  {
    "id": "0986",
    "title": "奥莉维娅",
    "year": "2022",
    "region": "英国",
    "type": "电影",
    "genre": "剧情/悬疑",
    "tags": [
      "身份错位",
      "哥特",
      "遗产谜团"
    ],
    "oneLine": "孤女奥莉维娅继承了一座偏远庄园,却发现镜中的自己并非真实面目。",
    "url": "./movies/movie-0986.html",
    "cover": "./86.jpg",
    "category": "院线热片",
    "categoryUrl": "./category-cinema-hits.html"
  },
  {
    "id": "0987",
    "title": "勇者大冒险番外篇",
    "year": "2017",
    "region": "中国大陆",
    "type": "动画短片",
    "genre": "冒险悬疑",
    "tags": [
      "同名游戏改编",
      "填坑",
      "粉丝向",
      "解密"
    ],
    "oneLine": "正传结束后的神秘番外,主角安岩收到一盒录像带,里面记录了他从未经历过的死亡片段。",
    "url": "./movies/movie-0987.html",
    "cover": "./87.jpg",
    "category": "家庭生活",
    "categoryUrl": "./category-family-life.html"
  },
  {
    "id": "0988",
    "title": "复出演唱!",
    "year": "2025",
    "region": "日本",
    "type": "电影",
    "genre": "音乐,喜剧,励志",
    "tags": [
      "偶像",
      "废校",
      "中年危机",
      "摇滚"
    ],
    "oneLine": "五个四十岁的大叔为了拯救即将倒闭的母校,重组了当年只红过一首歌的垃圾摇滚乐队。",
    "url": "./movies/movie-0988.html",
    "cover": "./88.jpg",
    "category": "悬疑夜场",
    "categoryUrl": "./category-suspense-night.html"
  },
  {
    "id": "0989",
    "title": "回忆立陶宛之旅",
    "year": "1972",
    "region": "美国,立陶宛",
    "type": "电影",
    "genre": "纪录片,传记",
    "tags": [
      "乡愁",
      "犹太",
      "家庭录像",
      "黑白"
    ],
    "oneLine": "一位美国犹太裔纪录片导演回到祖辈的立陶宛村庄,发现全村只剩一座犹太墓园。",
    "url": "./movies/movie-0989.html",
    "cover": "./89.jpg",
    "category": "经典片库",
    "categoryUrl": "./category-classic-library.html"
  },
  {
    "id": "0990",
    "title": "零点出击粤语",
    "year": "1990",
    "region": "中国香港",
    "type": "剧集",
    "genre": "剧情/动作/犯罪",
    "tags": [
      "TVB",
      "警匪",
      "卧底",
      "双雄",
      "兄弟情"
    ],
    "oneLine": "午夜零点,是两个发小的约定接头时间——但一个是警察,一个已是黑帮新星,兄弟情在刀尖上跳舞。",
    "url": "./movies/movie-0990.html",
    "cover": "./90.jpg",
    "category": "历史古装",
    "categoryUrl": "./category-history-costume.html"
  },
  {
    "id": "0991",
    "title": "海豚王之死",
    "year": "2023",
    "region": "美国",
    "type": "电影",
    "genre": "纪录片,环保",
    "tags": [
      "海洋保护",
      "悲剧",
      "真实事件改编"
    ],
    "oneLine": "一只被誉为“海豚王”的领航鲸,在与人类建立深厚情感后,却死在了它最信任的驯养师怀中。",
    "url": "./movies/movie-0991.html",
    "cover": "./91.jpg",
    "category": "热映精选",
    "categoryUrl": "./category-hot-picks.html"
  },
  {
    "id": "0992",
    "title": "彬与瑛",
    "year": "2020",
    "region": "日本",
    "type": "剧集",
    "genre": "剧情/职场",
    "tags": [
      "双男主",
      "银行",
      "泡沫经济",
      "宿敌",
      "理想"
    ],
    "oneLine": "两个同名同姓的银行精英,一个代表理想一个代表野心,却在金融危机中互成救命稻草。",
    "url": "./movies/movie-0992.html",
    "cover": "./92.jpg",
    "category": "院线热片",
    "categoryUrl": "./category-cinema-hits.html"
  },
  {
    "id": "0993",
    "title": "大话仙宫",
    "year": "2023",
    "region": "中国大陆",
    "type": "剧集/动画",
    "genre": "喜剧/奇幻/古装",
    "tags": [
      "无厘头",
      "神仙职场",
      "戏仿西游"
    ],
    "oneLine": "太白金星是个996打工人,玉帝是PPT狂魔,而孙悟空的大闹天宫只是一场HR纠纷。",
    "url": "./movies/movie-0993.html",
    "cover": "./93.jpg",
    "category": "动作专区",
    "categoryUrl": "./category-action-zone.html"
  },
  {
    "id": "0994",
    "title": "河曲马",
    "year": "2023",
    "region": "中国大陆",
    "type": "电影",
    "genre": "剧情,西部",
    "tags": [
      "草原",
      "生态保护",
      "民族融合"
    ],
    "oneLine": "在甘南草原,一匹传说中的野马“河曲”再现踪迹,牵动了老牧人、藏族少年和外来生态学家的命运。",
    "url": "./movies/movie-0994.html",
    "cover": "./94.jpg",
    "category": "剧集连看",
    "categoryUrl": "./category-drama-series.html"
  },
  {
    "id": "0995",
    "title": "老妈操碎心",
    "year": "2022",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "喜剧,家庭",
    "tags": [
      "妈妈",
      "北漂",
      "代际冲突"
    ],
    "oneLine": "东北退休老妈偷偷卖掉房子搬到北京,就为了给985毕业却在家打游戏三年的“废物”儿子当保姆。",
    "url": "./movies/movie-0995.html",
    "cover": "./95.jpg",
    "category": "青春喜剧",
    "categoryUrl": "./category-youth-comedy.html"
  },
  {
    "id": "0996",
    "title": "来自光芒的光",
    "year": "2023",
    "region": "中国大陆",
    "type": "电影",
    "genre": "剧情,悬疑,科幻",
    "tags": [
      "神秘信号",
      "天文",
      "人性",
      "文艺",
      "宇宙"
    ],
    "oneLine": "一座面临搬迁的旧天文台,突然收到一组来自深空的规律信号,解码后竟然是五千年前的华夏甲骨文。",
    "url": "./movies/movie-0996.html",
    "cover": "./96.jpg",
    "category": "家庭生活",
    "categoryUrl": "./category-family-life.html"
  },
  {
    "id": "0997",
    "title": "毛骨悚然3:再开杀戒",
    "year": "2025",
    "region": "美国",
    "type": "电影",
    "genre": "恐怖惊悚",
    "tags": [
      "血腥",
      "追杀",
      "公路",
      "血浆片"
    ],
    "oneLine": "消声匿迹二十年的杀人魔“棺材哥”重现江湖,这一次他不再针对旅行者,而是锁定了当年办案的警察后代。",
    "url": "./movies/movie-0997.html",
    "cover": "./97.jpg",
    "category": "奇幻科幻",
    "categoryUrl": "./category-fantasy-sci-fi.html"
  },
  {
    "id": "0998",
    "title": "找数圣诞节",
    "year": "2024",
    "region": "香港",
    "type": "电影",
    "genre": "喜剧,家庭,节日",
    "tags": [
      "圣诞",
      "高利贷",
      "闹剧",
      "街头",
      "暖心"
    ],
    "oneLine": "圣诞节前夜,一名失败的高利贷追债人闯进欠债者家中,却发现这家人正准备一场假扮富豪的大骗局。",
    "url": "./movies/movie-0998.html",
    "cover": "./98.jpg",
    "category": "悬疑夜场",
    "categoryUrl": "./category-suspense-night.html"
  },
  {
    "id": "0999",
    "title": "我的英雄学院第二季",
    "year": "2017",
    "region": "日本",
    "type": "剧集",
    "genre": "动画/动作",
    "tags": [
      "热血",
      "超能力",
      "雄英体育祭",
      "成长"
    ],
    "oneLine": "雄英高中体育祭开幕,没有个性的绿谷出久要在全校最强者的包围中,证明自己配得上“欧尔麦特”的继承者之名。",
    "url": "./movies/movie-0999.html",
    "cover": "./99.jpg",
    "category": "家庭生活",
    "categoryUrl": "./category-family-life.html"
  },
  {
    "id": "1000",
    "title": "情感的禁区",
    "year": "1995",
    "region": "香港",
    "type": "电影",
    "genre": "剧情/爱情/伦理",
    "tags": [
      "禁忌之恋",
      "家族秘密",
      "90年代香港",
      "情感压抑"
    ],
    "oneLine": "养女成年后,与毫无血缘关系的哥哥产生情愫,而父亲隐藏三十年的秘密让这段感情走向疯狂。",
    "url": "./movies/movie-1000.html",
    "cover": "./100.jpg",
    "category": "经典片库",
    "categoryUrl": "./category-classic-library.html"
  },
  {
    "id": "1001",
    "title": "你好喵室友",
    "year": "2025",
    "region": "中国大陆",
    "type": "电视剧",
    "genre": "喜剧、奇幻",
    "tags": [
      "猫咪",
      "合租",
      "治愈",
      "都市"
    ],
    "oneLine": "社畜意外获得听懂猫语的能力,然后发现他的猫在疯狂吐槽他。",
    "url": "./movies/movie-1001.html",
    "cover": "./101.jpg",
    "category": "青春喜剧",
    "categoryUrl": "./category-youth-comedy.html"
  },
  {
    "id": "1002",
    "title": "366天的约定",
    "year": "2025",
    "region": "日本",
    "type": "电影",
    "genre": "爱情/奇幻",
    "tags": [
      "闰年",
      "约定",
      "时间循环",
      "书信",
      "樱花"
    ],
    "oneLine": "她在闰年的2月29日向暗恋的学长表白,约定一年后回信。但第二年,2月29日没有到来。",
    "url": "./movies/movie-1002.html",
    "cover": "./102.jpg",
    "category": "悬疑夜场",
    "categoryUrl": "./category-suspense-night.html"
  },
  {
    "id": "1003",
    "title": "百万大逃亡",
    "year": "2023",
    "region": "德国",
    "type": "电影",
    "genre": "剧情/历史/战争",
    "tags": [
      "二战",
      "东线",
      "平民逃亡"
    ],
    "oneLine": "1945年,东普鲁士,一位德国母亲带着三岁儿子,在零下20度的冰面上徒步数百公里,躲避苏军追击。",
    "url": "./movies/movie-1003.html",
    "cover": "./103.jpg",
    "category": "都市爱情",
    "categoryUrl": "./category-romance-city.html"
  },
  {
    "id": "1004",
    "title": "私处",
    "year": "2005",
    "region": "美国",
    "type": "电影",
    "genre": "喜剧,剧情,青春",
    "tags": [
      "青春期",
      "身体焦虑",
      "女性友谊",
      "成长喜剧",
      "校园"
    ],
    "oneLine": "高中女生发现自己的私处外观和健康课本上的“标准图”不一样,于是拉上闺蜜展开一场荒诞的调查。",
    "url": "./movies/movie-1004.html",
    "cover": "./104.jpg",
    "category": "动作专区",
    "categoryUrl": "./category-action-zone.html"
  },
  {
    "id": "1005",
    "title": "锦绣令",
    "year": "2025",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "古装,权谋,爱情",
    "tags": [
      "大女主",
      "刺绣",
      "夺嫡",
      "女官"
    ],
    "oneLine": "一个被判处“绣刑”的罪臣之女,凭借出神入化的刺绣技艺,用针线在朝堂上掀起血雨腥风。",
    "url": "./movies/movie-1005.html",
    "cover": "./105.jpg",
    "category": "院线热片",
    "categoryUrl": "./category-cinema-hits.html"
  },
  {
    "id": "1006",
    "title": "甘城光辉游乐园",
    "year": "2024",
    "region": "日本",
    "type": "剧集",
    "genre": "喜剧/奇幻/职场",
    "tags": [
      "游乐园",
      "废柴逆袭",
      "魔法"
    ],
    "oneLine": "濒临倒闭的游乐园,员工全是魔法生物,新来的经理是个毫无梦想的普通社畜。",
    "url": "./movies/movie-1006.html",
    "cover": "./106.jpg",
    "category": "动作专区",
    "categoryUrl": "./category-action-zone.html"
  },
  {
    "id": "1007",
    "title": "三人兄弟",
    "year": "2025",
    "region": "韩国",
    "type": "电影",
    "genre": "剧情,喜剧",
    "tags": [
      "兄弟",
      "底层",
      "黑帮喜剧",
      "误会"
    ],
    "oneLine": "三个毫无血缘关系的街头混混冒充豪门失散的三胞胎,结果真兄弟找上了门。",
    "url": "./movies/movie-1007.html",
    "cover": "./107.jpg",
    "category": "历史古装",
    "categoryUrl": "./category-history-costume.html"
  },
  {
    "id": "1008",
    "title": "神赐之人",
    "year": "2022",
    "region": "阿根廷",
    "type": "电影",
    "genre": "科幻,悬疑,剧情",
    "tags": [
      "宗教",
      "基因编辑",
      "伦理",
      "伪纪录片",
      "反转"
    ],
    "oneLine": "一个贫穷村庄的妇女怀孕生下“神迹”,科学家介入后发现,那根本不是神迹,而是来自未来的恐怖警告。",
    "url": "./movies/movie-1008.html",
    "cover": "./108.jpg",
    "category": "悬疑夜场",
    "categoryUrl": "./category-suspense-night.html"
  },
  {
    "id": "1009",
    "title": "蝙蝠侠德库拉",
    "year": "2005",
    "region": "美国",
    "type": "动画电影",
    "genre": "动作、恐怖、超级英雄",
    "tags": [
      "哥特",
      "吸血鬼",
      "暗黑",
      "跨界"
    ],
    "oneLine": "哥谭市出现了吸血鬼,蝙蝠侠不得不与传说中的德库拉伯爵正面对决。",
    "url": "./movies/movie-1009.html",
    "cover": "./109.jpg",
    "category": "青春喜剧",
    "categoryUrl": "./category-youth-comedy.html"
  },
  {
    "id": "1010",
    "title": "心碎的孩子",
    "year": "2022",
    "region": "西班牙",
    "type": "电影",
    "genre": "剧情/儿童/家庭",
    "tags": [
      "童年创伤",
      "幻想朋友",
      "亲情治愈",
      "水彩画风"
    ],
    "oneLine": "一个因父母离婚而失语的小女孩,声称自己的心脏碎成了两半,一半跟着爸爸走了,一半留在妈妈这里。",
    "url": "./movies/movie-1010.html",
    "cover": "./110.jpg",
    "category": "热映精选",
    "categoryUrl": "./category-hot-picks.html"
  },
  {
    "id": "1011",
    "title": "剑底鸳鸯",
    "year": "1965",
    "region": "中国台湾",
    "type": "电影",
    "genre": "武侠爱情",
    "tags": [
      "台语片",
      "黑白",
      "戏班",
      "复仇",
      "错认"
    ],
    "oneLine": "戏班台柱女武生为父报仇,却爱上了仇人之子,两人在台上演《霸王别姬》,台下演生死抉择。",
    "url": "./movies/movie-1011.html",
    "cover": "./111.jpg",
    "category": "奇幻科幻",
    "categoryUrl": "./category-fantasy-sci-fi.html"
  },
  {
    "id": "1012",
    "title": "无处逢生",
    "year": "2026",
    "region": "中国大陆",
    "type": "电影",
    "genre": "悬疑/犯罪",
    "tags": [
      "密室求生",
      "反转",
      "复仇"
    ],
    "oneLine": "被活埋于地下的女人醒来后发现,棺材内除了她,还有一具仍在呼吸的陌生男人。",
    "url": "./movies/movie-1012.html",
    "cover": "./112.jpg",
    "category": "全球佳作",
    "categoryUrl": "./category-global-stories.html"
  },
  {
    "id": "1013",
    "title": "幸运机会",
    "year": "2023",
    "region": "中国大陆",
    "type": "电影",
    "genre": "喜剧,剧情",
    "tags": [
      "彩票",
      "兄弟",
      "荒诞",
      "东北"
    ],
    "oneLine": "东北两兄弟中了五百万彩票,兑奖前却发现彩票被洗衣机洗成了一团纸浆。",
    "url": "./movies/movie-1013.html",
    "cover": "./113.jpg",
    "category": "动作专区",
    "categoryUrl": "./category-action-zone.html"
  },
  {
    "id": "1014",
    "title": "帝国时代2",
    "year": "2026",
    "region": "美国",
    "type": "电影",
    "genre": "科幻/冒险",
    "tags": [
      "游戏改编",
      "穿越",
      "文明",
      "史诗"
    ],
    "oneLine": "一名游戏策划被吸入自己设计的《帝国时代2》BUG 里,他必须带领五个不同时代的文明领袖逃出这场失控的万国混战。",
    "url": "./movies/movie-1014.html",
    "cover": "./114.jpg",
    "category": "全球佳作",
    "categoryUrl": "./category-global-stories.html"
  },
  {
    "id": "1015",
    "title": "馅饼侦探 第四季",
    "year": "2025",
    "region": "英国",
    "type": "剧集",
    "genre": "悬疑/犯罪/喜剧",
    "tags": [
      "美食探案",
      "英式幽默",
      "小镇谜案",
      "单元剧"
    ],
    "oneLine": "开馅饼店的前警探戴维斯,这一季要面对一个专挑美食节下手的连环投毒犯。",
    "url": "./movies/movie-1015.html",
    "cover": "./115.jpg",
    "category": "奇幻科幻",
    "categoryUrl": "./category-fantasy-sci-fi.html"
  },
  {
    "id": "1016",
    "title": "向着星辰的长征",
    "year": "2026",
    "region": "中国大陆",
    "type": "电影",
    "genre": "科幻/历史/剧情",
    "tags": [
      "航天",
      "硬科幻",
      "家国情怀"
    ],
    "oneLine": "1969年,一群中国科学家用算盘敲出了载人航天的绝密计划。",
    "url": "./movies/movie-1016.html",
    "cover": "./116.jpg",
    "category": "院线热片",
    "categoryUrl": "./category-cinema-hits.html"
  },
  {
    "id": "1017",
    "title": "杀人委托",
    "year": "2025",
    "region": "韩国",
    "type": "电影",
    "genre": "犯罪/悬疑",
    "tags": [
      "连环杀手",
      "律师",
      "替罪羊",
      "反转"
    ],
    "oneLine": "最懂法律的律师接下一桩完美谋杀委托,却发现死者竟与自己多年前失踪的女儿有关。",
    "url": "./movies/movie-1017.html",
    "cover": "./117.jpg",
    "category": "经典片库",
    "categoryUrl": "./category-classic-library.html"
  },
  {
    "id": "1018",
    "title": "新睡衣晚会大屠杀",
    "year": "2024",
    "region": "美国",
    "type": "电影",
    "genre": "恐怖,惊悚,喜剧",
    "tags": [
      "血浆片",
      "重启",
      "反类型",
      "女性互助",
      "黑色幽默"
    ],
    "oneLine": "一群高中女生举办复古睡衣派对,却引来模仿80年代经典杀手的真凶,唯一的武器是她们身上的蕾丝睡衣。",
    "url": "./movies/movie-1018.html",
    "cover": "./118.jpg",
    "category": "悬疑夜场",
    "categoryUrl": "./category-suspense-night.html"
  },
  {
    "id": "1019",
    "title": "印花龙",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "genre": "奇幻冒险",
    "tags": [
      "古装",
      "图腾",
      "龙族",
      "少女",
      "宿命"
    ],
    "oneLine": "一块祖传的印花布料,竟藏着唤醒上古神龙的秘密纹路。",
    "url": "./movies/movie-1019.html",
    "cover": "./119.jpg",
    "category": "动作专区",
    "categoryUrl": "./category-action-zone.html"
  },
  {
    "id": "1020",
    "title": "盖尔芒特家情事",
    "year": "2024",
    "region": "法国",
    "type": "电视剧",
    "genre": "剧情/历史/家庭",
    "tags": [
      "贵族",
      "遗产",
      "禁忌之恋",
      "庄园",
      "阶级冲突"
    ],
    "oneLine": "盖尔芒特伯爵去世后,一封秘密情书暴露了家族三代人隐藏的爱欲与背叛。",
    "url": "./movies/movie-1020.html",
    "cover": "./120.jpg",
    "category": "都市爱情",
    "categoryUrl": "./category-romance-city.html"
  },
  {
    "id": "1021",
    "title": "美丽但贫穷",
    "year": "1957",
    "region": "意大利",
    "type": "电影",
    "genre": "喜剧,爱情",
    "tags": [
      "黑白",
      "穷小子",
      "富家女",
      "误会",
      "古典"
    ],
    "oneLine": "那不勒斯的穷鞋匠爱上了富家千金,为了配得上她,开始了啼笑皆非的赚钱计划。",
    "url": "./movies/movie-1021.html",
    "cover": "./121.jpg",
    "category": "家庭生活",
    "categoryUrl": "./category-family-life.html"
  },
  {
    "id": "1022",
    "title": "你带我走",
    "year": "2026",
    "region": "韩国",
    "type": "电影",
    "genre": "爱情、剧情、公路",
    "tags": [
      "绝症",
      "逃亡",
      "济州岛"
    ],
    "oneLine": "绝症女孩和失语少年驾一辆偷来的车逃往济州岛,身后是两对崩溃的父母和一只警犬。",
    "url": "./movies/movie-1022.html",
    "cover": "./122.jpg",
    "category": "全球佳作",
    "categoryUrl": "./category-global-stories.html"
  },
  {
    "id": "1023",
    "title": "国境燃烧",
    "year": "2024",
    "region": "韩国",
    "type": "电影",
    "genre": "动作/谍战",
    "tags": [
      "朝韩边境",
      "孤立无援",
      "绝地求生"
    ],
    "oneLine": "朝韩非军事区地下,一名脱北士兵和一名韩国女军官在废弃隧道里发现了足以引爆半岛的生化证据。",
    "url": "./movies/movie-1023.html",
    "cover": "./123.jpg",
    "category": "动作专区",
    "categoryUrl": "./category-action-zone.html"
  },
  {
    "id": "1024",
    "title": "菜鸟老警第七季",
    "year": "2025",
    "region": "美国",
    "type": "电视剧",
    "genre": "剧情/犯罪/动作",
    "tags": [
      "警匪",
      "中年转行",
      "洛杉矶",
      "师徒",
      "单元剧"
    ],
    "oneLine": "诺兰从菜鸟熬成了训练官,而他的新学员是他年轻时逮捕过的那个街头混混的儿子。",
    "url": "./movies/movie-1024.html",
    "cover": "./124.jpg",
    "category": "院线热片",
    "categoryUrl": "./category-cinema-hits.html"
  },
  {
    "id": "1025",
    "title": "凶屋32",
    "year": "2023",
    "region": "日本",
    "type": "电影",
    "genre": "恐怖",
    "tags": [
      "凶宅",
      "直播",
      "诅咒",
      "密室",
      "灵异"
    ],
    "oneLine": "六名网红进入编号32的废弃凶宅直播,却发现房间数量会自己增加。",
    "url": "./movies/movie-1025.html",
    "cover": "./125.jpg",
    "category": "剧集连看",
    "categoryUrl": "./category-drama-series.html"
  },
  {
    "id": "1026",
    "title": "罗马假日",
    "year": "1953",
    "region": "美国/意大利",
    "type": "电影",
    "genre": "爱情,喜剧",
    "tags": [
      "经典",
      "公主",
      "记者",
      "黑白片"
    ],
    "oneLine": "厌烦繁文缛节的欧洲公主逃出使馆,与穷记者在罗马度过了改变彼此一生的一天。",
    "url": "./movies/movie-1026.html",
    "cover": "./126.jpg",
    "category": "历史古装",
    "categoryUrl": "./category-history-costume.html"
  },
  {
    "id": "1027",
    "title": "菲律宾恐怖故事16",
    "year": "2024",
    "region": "菲律宾",
    "type": "电影",
    "genre": "恐怖、惊悚",
    "tags": [
      "分段式",
      "民俗恐怖",
      "都市传说",
      "东南亚"
    ],
    "oneLine": "三个东南亚民间传说改编:不听话的孩子会被白裙女人带走。",
    "url": "./movies/movie-1027.html",
    "cover": "./127.jpg",
    "category": "青春喜剧",
    "categoryUrl": "./category-youth-comedy.html"
  },
  {
    "id": "1028",
    "title": "富滇风云",
    "year": "2025",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "历史/商战/年代",
    "tags": [
      "云南",
      "金融抗战",
      "滇系军阀"
    ],
    "oneLine": "民国乱世,一家云南地方银行如何从军阀傀儡,变成抗战时期的金融秘密堡垒。",
    "url": "./movies/movie-1028.html",
    "cover": "./128.jpg",
    "category": "都市爱情",
    "categoryUrl": "./category-romance-city.html"
  },
  {
    "id": "1029",
    "title": "蜜月重温",
    "year": "2024",
    "region": "英国",
    "type": "电影",
    "genre": "喜剧/爱情",
    "tags": [
      "中年危机",
      "婚姻",
      "喜剧",
      "公路电影",
      "老夫老妻"
    ],
    "oneLine": "结婚二十五年的沉闷夫妇,决定重走蜜月路线,却发现当年浪漫的每一站现在都变成了奇葩景点。 为了挽救离婚危机,一对英国夫妇重新踏上了25年前的意大利蜜月之旅,却发现当年的豪华酒店变成了垃圾场,浪漫游船变成了海盗体验馆。",
    "url": "./movies/movie-1029.html",
    "cover": "./129.jpg",
    "category": "奇幻科幻",
    "categoryUrl": "./category-fantasy-sci-fi.html"
  },
  {
    "id": "1030",
    "title": "圣灵",
    "year": "2022",
    "region": "韩国",
    "type": "电影",
    "genre": "悬疑、惊悚",
    "tags": [
      "邪教",
      "卧底",
      "反转"
    ],
    "oneLine": "无神论警察潜入诡异教会,却发现所有预言都在应验,包括他自己的死期。",
    "url": "./movies/movie-1030.html",
    "cover": "./130.jpg",
    "category": "动作专区",
    "categoryUrl": "./category-action-zone.html"
  },
  {
    "id": "1031",
    "title": "病毒2025",
    "year": "2025",
    "region": "韩国",
    "type": "剧集",
    "genre": "科幻/惊悚",
    "tags": [
      "智能病毒",
      "虚假信息",
      "社会崩溃",
      "网络战争"
    ],
    "oneLine": "一种通过短视频传播的“智能病毒”入侵全球大脑,它不杀人不致病,只会让你坚信你刷到的第一条信息是宇宙真理。",
    "url": "./movies/movie-1031.html",
    "cover": "./131.jpg",
    "category": "家庭生活",
    "categoryUrl": "./category-family-life.html"
  },
  {
    "id": "1032",
    "title": "谍网寻凶",
    "year": "2025",
    "region": "英国",
    "type": "电视剧",
    "genre": "悬疑/犯罪/谍战",
    "tags": [
      "军情五处",
      "陈年悬案",
      "双面间谍",
      "伦敦",
      "步步惊心"
    ],
    "oneLine": "军情五处档案管理员在整理旧文件时,发现一张纸条上写着“杀死我的人就在这栋楼里,编号37”。",
    "url": "./movies/movie-1032.html",
    "cover": "./132.jpg",
    "category": "经典片库",
    "categoryUrl": "./category-classic-library.html"
  },
  {
    "id": "1033",
    "title": "粉红小号",
    "year": "1969",
    "region": "美国",
    "type": "电影",
    "genre": "喜剧/爱情/音乐",
    "tags": [
      "爵士乐",
      "女权萌芽",
      "扮装",
      "乐队",
      "反传统"
    ],
    "oneLine": "为了能在全是男人的爵士乐队里立足,天才女号手不得不女扮男装,但她却意外爱上了队里的钢琴师。",
    "url": "./movies/movie-1033.html",
    "cover": "./133.jpg",
    "category": "全球佳作",
    "categoryUrl": "./category-global-stories.html"
  },
  {
    "id": "1034",
    "title": "直播攻略",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "genre": "喜剧/惊悚",
    "tags": [
      "网红直播",
      "废弃医院",
      "假戏真做",
      "流量原罪"
    ],
    "oneLine": "三个小主播去废弃医院做灵异直播,没想到医院里的“鬼”是真的。",
    "url": "./movies/movie-1034.html",
    "cover": "./134.jpg",
    "category": "院线热片",
    "categoryUrl": "./category-cinema-hits.html"
  },
  {
    "id": "1035",
    "title": "终极飙靶",
    "year": "1992",
    "region": "香港",
    "type": "电影",
    "genre": "动作/犯罪",
    "tags": [
      "飞车",
      "枪战",
      "兄弟情",
      "林岭东风格"
    ],
    "oneLine": "一名杀手接到的最后一个任务是杀死自己的孪生弟弟,而弟弟刚好是一名刚刚破获大案的警察。",
    "url": "./movies/movie-1035.html",
    "cover": "./135.jpg",
    "category": "悬疑夜场",
    "categoryUrl": "./category-suspense-night.html"
  },
  {
    "id": "1036",
    "title": "骨头先生",
    "year": "2025",
    "region": "美国",
    "type": "电影",
    "genre": "奇幻/悬疑/家庭",
    "tags": [
      "人偶",
      "童年阴影",
      "跨时空",
      "遗产之谜"
    ],
    "oneLine": "母亲去世后,她留下的诡异木偶“骨头先生”每晚都在喃喃自语,而它的每句话都指向一桩尘封三十年的失踪案。",
    "url": "./movies/movie-1036.html",
    "cover": "./136.jpg",
    "category": "青春喜剧",
    "categoryUrl": "./category-youth-comedy.html"
  },
  {
    "id": "1037",
    "title": "卿何薄命",
    "year": "2026",
    "region": "中国",
    "type": "剧集",
    "genre": "古装,爱情",
    "tags": [
      "虐恋",
      "重生",
      "宅斗",
      "短剧"
    ],
    "oneLine": "前世被薄情王爷辜负致死的庶女重生归来,却发现这一世冷血王爷竟变成了无脑恋爱脑。",
    "url": "./movies/movie-1037.html",
    "cover": "./137.jpg",
    "category": "热映精选",
    "categoryUrl": "./category-hot-picks.html"
  },
  {
    "id": "1038",
    "title": "换尸疑云",
    "year": "2025",
    "region": "中国香港",
    "type": "电影",
    "genre": "悬疑/犯罪",
    "tags": [
      "法医",
      "尸体调换",
      "医院黑幕",
      "罗生门"
    ],
    "oneLine": "殡仪馆火化前一刻,家属发现遗体不是自己的亲人,但医院坚称“绝无可能搞错”。",
    "url": "./movies/movie-1038.html",
    "cover": "./138.jpg",
    "category": "经典片库",
    "categoryUrl": "./category-classic-library.html"
  },
  {
    "id": "1039",
    "title": "弗兰奇街13号",
    "year": "2026",
    "region": "美国",
    "type": "电影",
    "genre": "恐怖/悬疑",
    "tags": [
      "心理惊悚",
      "鬼屋",
      "家族诅咒"
    ],
    "oneLine": "搬进弗兰奇街13号那晚,母亲在阁楼发现了一本记录着全家死亡日期的日记。",
    "url": "./movies/movie-1039.html",
    "cover": "./139.jpg",
    "category": "历史古装",
    "categoryUrl": "./category-history-costume.html"
  },
  {
    "id": "1040",
    "title": "雨月物语",
    "year": "2024",
    "region": "日本",
    "type": "电影",
    "genre": "奇幻,恐怖,历史",
    "tags": [
      "翻拍",
      "怪谈",
      "人性",
      "美学"
    ],
    "oneLine": "翻拍经典,雨夜客栈中,三个旅人各自讲述怪谈,却在故事中发现彼此都是鬼魂。",
    "url": "./movies/movie-1040.html",
    "cover": "./140.jpg",
    "category": "历史古装",
    "categoryUrl": "./category-history-costume.html"
  },
  {
    "id": "1041",
    "title": "萌眼杀手",
    "year": "2024",
    "region": "韩国",
    "type": "电影",
    "genre": "惊悚/犯罪",
    "tags": [
      "反转",
      "连环杀手",
      "童颜",
      "社会批判"
    ],
    "oneLine": "首尔接连发生完美谋杀案,凶手是一个永远挂着无辜大眼、人见人爱的26岁“少女”。",
    "url": "./movies/movie-1041.html",
    "cover": "./141.jpg",
    "category": "青春喜剧",
    "categoryUrl": "./category-youth-comedy.html"
  },
  {
    "id": "1042",
    "title": "奇怪的她",
    "year": "2025",
    "region": "韩国",
    "type": "电影",
    "genre": "奇幻/喜剧/家庭",
    "tags": [
      "返老还童",
      "老人",
      "梦想",
      "两代和解"
    ],
    "oneLine": "74岁的毒舌奶奶被家人嫌弃,在一家“青春照相馆”拍照后,一夜之间回到了20岁的模样。",
    "url": "./movies/movie-1042.html",
    "cover": "./142.jpg",
    "category": "热映精选",
    "categoryUrl": "./category-hot-picks.html"
  },
  {
    "id": "1043",
    "title": "怪医杜立德5:百万傻蛋",
    "year": "2026",
    "region": "美国",
    "type": "电影",
    "genre": "奇幻喜剧",
    "tags": [
      "动物大军",
      "诈骗反击",
      "智商碾压",
      "合家欢"
    ],
    "oneLine": "杜立德博士被骗子集团骗走百万家产,他决定联合动物园所有“聪明动物”设局反杀。",
    "url": "./movies/movie-1043.html",
    "cover": "./143.jpg",
    "category": "悬疑夜场",
    "categoryUrl": "./category-suspense-night.html"
  },
  {
    "id": "1044",
    "title": "邮差总按两次铃",
    "year": "2024",
    "region": "美国",
    "type": "电影",
    "genre": "悬疑,爱情,犯罪",
    "tags": [
      "黑色电影",
      "出轨",
      "谋杀",
      "轮回",
      "宿命"
    ],
    "oneLine": "流浪汉与餐馆老板娘联手杀夫,本以为天衣无缝,却总被同一个邮差的铃声所困扰。",
    "url": "./movies/movie-1044.html",
    "cover": "./144.jpg",
    "category": "历史古装",
    "categoryUrl": "./category-history-costume.html"
  },
  {
    "id": "1045",
    "title": "鞑靼武士",
    "year": "2025",
    "region": "俄罗斯/中国",
    "type": "电影",
    "genre": "动作/历史",
    "tags": [
      "冷兵器",
      "古代战争",
      "雇佣兵"
    ],
    "oneLine": "金帐汗国末期,一名被流放的鞑靼武士为赎回被俘的儿子,不得不为敌对的莫斯科公国效力。",
    "url": "./movies/movie-1045.html",
    "cover": "./145.jpg",
    "category": "历史古装",
    "categoryUrl": "./category-history-costume.html"
  },
  {
    "id": "1046",
    "title": "大象家族",
    "year": "2026",
    "region": "英国",
    "type": "电视剧",
    "genre": "家庭,剧情",
    "tags": [
      "自闭症",
      "动物疗愈",
      "庄园",
      "遗产"
    ],
    "oneLine": "古怪的格兰特家族为了继承一座濒临破产的动物园,必须让家族中最孤僻的三位成员与三头受过大象合作表演。",
    "url": "./movies/movie-1046.html",
    "cover": "./146.jpg",
    "category": "院线热片",
    "categoryUrl": "./category-cinema-hits.html"
  },
  {
    "id": "1047",
    "title": "假日旅途:蒂罗尔之旅",
    "year": "2023",
    "region": "德国/奥地利",
    "type": "电影",
    "genre": "爱情/剧情/家庭",
    "tags": [
      "治愈",
      "阿尔卑斯山",
      "音乐",
      "民宿",
      "跨代沟通"
    ],
    "oneLine": "一位事业受挫的女强人来到奥地利蒂罗尔山村,意外继承了祖母的破旧民宿,也开启了一段治愈之旅。",
    "url": "./movies/movie-1047.html",
    "cover": "./147.jpg",
    "category": "奇幻科幻",
    "categoryUrl": "./category-fantasy-sci-fi.html"
  },
  {
    "id": "1048",
    "title": "新妹魔王的契约者 特典",
    "year": "2015",
    "region": "日本",
    "type": "OVA",
    "genre": "奇幻,动作,喜剧",
    "tags": [
      "魔王",
      "泳装",
      "日常",
      "杀必死",
      "契约"
    ],
    "oneLine": "魔王之女与契约者意外获得一日假期,却在海边遭遇了来自异次元的搞事推销员。",
    "url": "./movies/movie-1048.html",
    "cover": "./148.jpg",
    "category": "经典片库",
    "categoryUrl": "./category-classic-library.html"
  },
  {
    "id": "1049",
    "title": "中餐厅第八季",
    "year": "2025",
    "region": "中国大陆",
    "type": "综艺/真人秀",
    "genre": "真人秀,美食",
    "tags": [
      "经营",
      "争议",
      "慢综艺"
    ],
    "oneLine": "本季中餐厅开在战火纷飞的边界,明星们不仅要面对挑剔的食客,还要应对随时响起的防空警报。",
    "url": "./movies/movie-1049.html",
    "cover": "./149.jpg",
    "category": "院线热片",
    "categoryUrl": "./category-cinema-hits.html"
  },
  {
    "id": "1050",
    "title": "孖宝有发宝",
    "year": "2024",
    "region": "中国香港",
    "type": "电影",
    "genre": "喜剧/家庭",
    "tags": [
      "双胞胎",
      "发廊",
      "乌龙",
      "认错人",
      "怀旧"
    ],
    "oneLine": "失散三十年的双胞胎兄弟,一个是香港发廊老板,一个是深圳假发厂厂长,因为一单生意被错认身份。",
    "url": "./movies/movie-1050.html",
    "cover": "./150.jpg",
    "category": "家庭生活",
    "categoryUrl": "./category-family-life.html"
  },
  {
    "id": "1051",
    "title": "家有喜事2020粤语",
    "year": "2020",
    "region": "中国香港",
    "type": "电影",
    "genre": "喜剧/爱情",
    "tags": [
      "贺岁",
      "港产片",
      "无厘头",
      "家庭",
      "怀旧"
    ],
    "oneLine": "常家三兄弟为了拿到巨额遗产,必须在除夕夜前分别找到“假女友”和“假男友”来骗爷爷。",
    "url": "./movies/movie-1051.html",
    "cover": "./1.jpg",
    "category": "家庭生活",
    "categoryUrl": "./category-family-life.html"
  },
  {
    "id": "1052",
    "title": "白色女孩粤语",
    "year": "2023",
    "region": "中国香港",
    "type": "电影",
    "genre": "剧情/悬疑",
    "tags": [
      "超自然",
      "社会边缘",
      "女性",
      "潮湿美学"
    ],
    "oneLine": "深水埗的旧楼里,一个只说粤语的哑女能用意念让水沸腾,黑帮闻讯而来。",
    "url": "./movies/movie-1052.html",
    "cover": "./2.jpg",
    "category": "历史古装",
    "categoryUrl": "./category-history-costume.html"
  },
  {
    "id": "1053",
    "title": "决战2025",
    "year": "2025",
    "region": "美国",
    "type": "电影",
    "genre": "动作,科幻,战争",
    "tags": [
      "AI叛乱",
      "未来战争",
      "末日"
    ],
    "oneLine": "2025年,失控的人工智能向人类宣战,一位前特种兵成为最后的希望。",
    "url": "./movies/movie-1053.html",
    "cover": "./3.jpg",
    "category": "院线热片",
    "categoryUrl": "./category-cinema-hits.html"
  },
  {
    "id": "1054",
    "title": "血汗拳击",
    "year": "2023",
    "region": "美国/菲律宾",
    "type": "电影",
    "genre": "剧情/运动/传记",
    "tags": [
      "拳击",
      "底层挣扎",
      "体育黑幕",
      "兄弟情",
      "写实"
    ],
    "oneLine": "马尼拉贫民窟的拾荒少年,为了给妹妹治病走上黑市拳台,却发现自己成了博彩集团的洗钱工具。",
    "url": "./movies/movie-1054.html",
    "cover": "./4.jpg",
    "category": "青春喜剧",
    "categoryUrl": "./category-youth-comedy.html"
  },
  {
    "id": "1055",
    "title": "红木林",
    "year": "2014",
    "region": "美国",
    "type": "电影",
    "genre": "剧情爱情",
    "tags": [
      "拉拉",
      "城乡差异",
      "返乡",
      "初恋"
    ],
    "oneLine": "为了参加前男友的葬礼,城市女同性恋者回到保守的南方故乡,却被高中时的密友勾起了旧情。",
    "url": "./movies/movie-1055.html",
    "cover": "./5.jpg",
    "category": "经典片库",
    "categoryUrl": "./category-classic-library.html"
  },
  {
    "id": "1056",
    "title": "逐冰之旅",
    "year": "2024",
    "region": "英国",
    "type": "电影",
    "genre": "纪录片,冒险",
    "tags": [
      "气候变化",
      "极地探险",
      "摄影师"
    ],
    "oneLine": "一支由老顽童科学家和失意摄影师组成的队伍,深入北极冰盖,用镜头记录下“冰川崩塌”的地球心电图。",
    "url": "./movies/movie-1056.html",
    "cover": "./6.jpg",
    "category": "剧集连看",
    "categoryUrl": "./category-drama-series.html"
  },
  {
    "id": "1057",
    "title": "睡前故事",
    "year": "2022",
    "region": "美国",
    "type": "剧集",
    "genre": "悬疑,奇幻,惊悚",
    "tags": [
      "都市传说",
      "反转",
      "单元剧",
      "细思极恐"
    ],
    "oneLine": "每晚女儿点的童话,竟与三十年前小镇未破的连环失踪案一一对应。",
    "url": "./movies/movie-1057.html",
    "cover": "./7.jpg",
    "category": "家庭生活",
    "categoryUrl": "./category-family-life.html"
  },
  {
    "id": "1058",
    "title": "宣判",
    "year": "2025",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "犯罪/悬疑",
    "tags": [
      "法庭",
      "冤案",
      "检察官"
    ],
    "oneLine": "新调任的检察官发现即将宣判的铁案背后,证人名单里有一个三年前就已死亡的人。",
    "url": "./movies/movie-1058.html",
    "cover": "./8.jpg",
    "category": "热映精选",
    "categoryUrl": "./category-hot-picks.html"
  },
  {
    "id": "1059",
    "title": "巨蟒",
    "year": "2019",
    "region": "澳大利亚,美国",
    "type": "电影",
    "genre": "惊悚,冒险,灾难",
    "tags": [
      "丛林恐怖",
      "巨型生物",
      "求生"
    ],
    "oneLine": "亚马逊雨林深处,一支纪录片摄制组发现了一条能吞噬时间的巨蟒。",
    "url": "./movies/movie-1059.html",
    "cover": "./9.jpg",
    "category": "全球佳作",
    "categoryUrl": "./category-global-stories.html"
  },
  {
    "id": "1060",
    "title": "恶霸警察",
    "year": "2019",
    "region": "韩国",
    "type": "电影",
    "genre": "犯罪/动作",
    "tags": [
      "黑色电影",
      "腐败警察",
      "以暴制暴",
      "反转"
    ],
    "oneLine": "一个收保护费的恶霸警察被降职到港口,却无意中发现了一桩涉及整个警队养老基金的连环杀人案。",
    "url": "./movies/movie-1060.html",
    "cover": "./10.jpg",
    "category": "动作专区",
    "categoryUrl": "./category-action-zone.html"
  },
  {
    "id": "1061",
    "title": "飞天小女警2016第一季",
    "year": "2016",
    "region": "美国",
    "type": "剧集",
    "genre": "动作、动画、喜剧",
    "tags": [
      "重启",
      "Z世代英雄",
      "社交媒体反派",
      "城市守护"
    ],
    "oneLine": "花花、泡泡、毛毛发现打败怪兽容易,但经营自己的社交媒体人设太难。",
    "url": "./movies/movie-1061.html",
    "cover": "./11.jpg",
    "category": "经典片库",
    "categoryUrl": "./category-classic-library.html"
  },
  {
    "id": "1062",
    "title": "萌娃包青天之铡美案",
    "year": "2025",
    "region": "中国大陆",
    "type": "电影",
    "genre": "古装喜剧",
    "tags": [
      "儿童剧",
      "包青天",
      "戏说",
      "普法教育"
    ],
    "oneLine": "一群小学生排练期末大戏《铡美案》,却意外发现校长就是陈世美的后代,他要篡改剧本。",
    "url": "./movies/movie-1062.html",
    "cover": "./12.jpg",
    "category": "青春喜剧",
    "categoryUrl": "./category-youth-comedy.html"
  },
  {
    "id": "1063",
    "title": "尘世笑谈",
    "year": "2023",
    "region": "中国大陆",
    "type": "电视剧",
    "genre": "喜剧/历史",
    "tags": [
      "民国",
      "茶馆",
      "群像"
    ],
    "oneLine": "一间民国茶馆里,三教九流的人来来往往,笑声中藏着家国沉浮。",
    "url": "./movies/movie-1063.html",
    "cover": "./13.jpg",
    "category": "经典片库",
    "categoryUrl": "./category-classic-library.html"
  },
  {
    "id": "1064",
    "title": "城市猎人天使之泪",
    "year": "2025",
    "region": "日本",
    "type": "动画电影",
    "genre": "动作,喜剧",
    "tags": [
      "经典",
      "回归",
      "杀手"
    ],
    "oneLine": "冴羽獠接到最后一个委托:找到一颗名为“天使之泪”的宝石,委托人是他已故搭档槙村秀幸的女儿。",
    "url": "./movies/movie-1064.html",
    "cover": "./14.jpg",
    "category": "家庭生活",
    "categoryUrl": "./category-family-life.html"
  },
  {
    "id": "1065",
    "title": "看不见的城市第二季",
    "year": "2023",
    "region": "美国/意大利",
    "type": "剧集",
    "genre": "奇幻/悬疑/都市传说",
    "tags": [
      "神秘生物",
      "多元文化",
      "环保寓言"
    ],
    "oneLine": "纽约下水道里的海妖在融化,东京地铁里的河童在哭泣,全球隐匿生物遭遇灭绝危机。",
    "url": "./movies/movie-1065.html",
    "cover": "./15.jpg",
    "category": "历史古装",
    "categoryUrl": "./category-history-costume.html"
  },
  {
    "id": "1066",
    "title": "悟空大战二郎神",
    "year": "2025",
    "region": "中国大陆",
    "type": "电影/动画",
    "genre": "动作/奇幻/动画",
    "tags": [
      "神话改编",
      "国风美学",
      "斗法",
      "视觉奇观"
    ],
    "oneLine": "当紧箍咒即将永远锁死他的命运,悟空必须在七十二变耗尽前击败天眼全开的二郎神,否则将被永远贬为凡石。",
    "url": "./movies/movie-1066.html",
    "cover": "./16.jpg",
    "category": "全球佳作",
    "categoryUrl": "./category-global-stories.html"
  },
  {
    "id": "1067",
    "title": "猛鬼逐人",
    "year": "2025",
    "region": "中国台湾",
    "type": "电影",
    "genre": "恐怖、悬疑",
    "tags": [
      "都市怪谈",
      "地铁",
      "因果轮回",
      "压迫感"
    ],
    "oneLine": "都市传说:只要深夜独自搭乘最后一班地铁,就会看到七年前害死的那个人。",
    "url": "./movies/movie-1067.html",
    "cover": "./17.jpg",
    "category": "家庭生活",
    "categoryUrl": "./category-family-life.html"
  },
  {
    "id": "1068",
    "title": "错误的高中甜心",
    "year": "2024",
    "region": "美国",
    "type": "电影",
    "genre": "悬疑/青春",
    "tags": [
      "身份互换",
      "霸凌复仇",
      "少女失踪",
      "反套路"
    ],
    "oneLine": "转学生发现全校追捧的“完美甜心”是假冒的,真正的甜心三年前已被她害死。",
    "url": "./movies/movie-1068.html",
    "cover": "./18.jpg",
    "category": "全球佳作",
    "categoryUrl": "./category-global-stories.html"
  },
  {
    "id": "1069",
    "title": "斯宾塞如是说",
    "year": "2022",
    "region": "美国",
    "type": "电影",
    "genre": "传记,剧情",
    "tags": [
      "哲学家",
      "访谈",
      "晚年",
      "思想"
    ],
    "oneLine": "垂暮之年的哲学家斯宾塞接受最后一次访谈,在回溯人生经历时,却意外揭露了一桩尘封半个世纪的哲学公案。",
    "url": "./movies/movie-1069.html",
    "cover": "./19.jpg",
    "category": "剧集连看",
    "categoryUrl": "./category-drama-series.html"
  },
  {
    "id": "1070",
    "title": "冰川时代",
    "year": "2024",
    "region": "法国/加拿大",
    "type": "电影",
    "genre": "纪录片/灾难",
    "tags": [
      "气候变迁",
      "真实事件改编",
      "生存",
      "北极"
    ],
    "oneLine": "真实事件改编:一群科学家被困北极冰站,冰川断裂后,他们漂向了注定融化的冰海。",
    "url": "./movies/movie-1070.html",
    "cover": "./20.jpg",
    "category": "历史古装",
    "categoryUrl": "./category-history-costume.html"
  },
  {
    "id": "1071",
    "title": "亚瑟的奇幻王国:跨界对决",
    "year": "2023",
    "region": "法国",
    "type": "电影",
    "genre": "动画/奇幻/冒险",
    "tags": [
      "跨次元",
      "魔法",
      "法国动画",
      "对战"
    ],
    "oneLine": "亚瑟通过传送门进入手机游戏世界,和游戏角色一起对抗企图删除所有童话的邪恶AI。",
    "url": "./movies/movie-1071.html",
    "cover": "./21.jpg",
    "category": "历史古装",
    "categoryUrl": "./category-history-costume.html"
  },
  {
    "id": "1072",
    "title": "最好的夏天",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "genre": "剧情/家庭/青春",
    "tags": [
      "怀旧",
      "九十年代",
      "成长离别",
      "小镇生活",
      "治愈"
    ],
    "oneLine": "1999年暑假,四个少年试图用一台破旧DV拯救即将被拆迁的录像厅。",
    "url": "./movies/movie-1072.html",
    "cover": "./22.jpg",
    "category": "悬疑夜场",
    "categoryUrl": "./category-suspense-night.html"
  },
  {
    "id": "1073",
    "title": "诺尔",
    "year": "2019",
    "region": "英国",
    "type": "电影",
    "genre": "剧情/悬疑",
    "tags": [
      "北欧黑色",
      "心理惊悚",
      "孤儿院",
      "身份认同"
    ],
    "oneLine": "一名自称被外星人绑架过的英国社工,在一座偏远的苏格兰孤儿院中发现孩子们口中谈论的“诺尔”并非虚构人物。",
    "url": "./movies/movie-1073.html",
    "cover": "./23.jpg",
    "category": "青春喜剧",
    "categoryUrl": "./category-youth-comedy.html"
  },
  {
    "id": "1074",
    "title": "滚出我地盘",
    "year": "2025",
    "region": "英国",
    "type": "电影",
    "genre": "恐怖/喜剧",
    "tags": [
      "拆迁惊魂",
      "冤魂老宅",
      "英式黑色幽默",
      "阶级讽刺"
    ],
    "oneLine": "无良开发商强行征收老宅,却发现屋里住着一个脾气比他们还差的维多利亚时代恶灵。",
    "url": "./movies/movie-1074.html",
    "cover": "./24.jpg",
    "category": "奇幻科幻",
    "categoryUrl": "./category-fantasy-sci-fi.html"
  },
  {
    "id": "1075",
    "title": "深夜淫娃",
    "year": "2023",
    "region": "日本",
    "type": "电影",
    "genre": "情色,剧情",
    "tags": [
      "风俗店",
      "边缘女性",
      "生存困境",
      "女性友谊"
    ],
    "oneLine": "东京最繁华的歌舞伎町,四个从事风俗业的女孩试图在出卖与尊严之间找到出口。",
    "url": "./movies/movie-1075.html",
    "cover": "./25.jpg",
    "category": "悬疑夜场",
    "categoryUrl": "./category-suspense-night.html"
  },
  {
    "id": "1076",
    "title": "嗜血狂蜂",
    "year": "2025",
    "region": "美国",
    "type": "电影",
    "genre": "科幻恐怖",
    "tags": [
      "基因融合",
      "昆虫灾难",
      "地下实验室",
      "血腥",
      "生存 生化危机",
      "丛林追杀",
      "虫恐慎入",
      "爆米花",
      "爽片"
    ],
    "oneLine": "秘密生物实验室泄漏,一群融合了食人鱼DNA的狂蜂逃入亚马逊,开始了对人类的“精准狩猎”。",
    "url": "./movies/movie-1076.html",
    "cover": "./26.jpg",
    "category": "历史古装",
    "categoryUrl": "./category-history-costume.html"
  },
  {
    "id": "1077",
    "title": "放开我的手",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "genre": "剧情,家庭",
    "tags": [
      "阿尔茨海默症",
      "母女",
      "催泪",
      "现实题材"
    ],
    "oneLine": "当患上阿尔茨海默症的母亲忘记全世界,女儿决定带她“私奔”,完成最后一场海边日落。",
    "url": "./movies/movie-1077.html",
    "cover": "./27.jpg",
    "category": "奇幻科幻",
    "categoryUrl": "./category-fantasy-sci-fi.html"
  },
  {
    "id": "1078",
    "title": "绝不投降",
    "year": "2023",
    "region": "美国",
    "type": "电影",
    "genre": "动作/战争",
    "tags": [
      "二战",
      "狙击手",
      "孤军奋战",
      "真实改编"
    ],
    "oneLine": "二战末期,一名被遗弃的美军狙击手在敌占区独自撑起整条防线的72小时。",
    "url": "./movies/movie-1078.html",
    "cover": "./28.jpg",
    "category": "动作专区",
    "categoryUrl": "./category-action-zone.html"
  },
  {
    "id": "1079",
    "title": "火鸟的沼泽",
    "year": "2025",
    "region": "俄罗斯",
    "type": "电影",
    "genre": "奇幻/悬疑",
    "tags": [
      "民间传说",
      "沼泽",
      "失踪",
      "心理"
    ],
    "oneLine": "西伯利亚沼泽边的一个村庄,每隔七年就有一个女孩失踪,村民说是“火鸟”带走了她们。",
    "url": "./movies/movie-1079.html",
    "cover": "./29.jpg",
    "category": "院线热片",
    "categoryUrl": "./category-cinema-hits.html"
  },
  {
    "id": "1080",
    "title": "最强仙界朋友圈",
    "year": "2026",
    "region": "中国大陆",
    "type": "网络剧",
    "genre": "喜剧/奇幻/修仙",
    "tags": [
      "系统流",
      "互联网修仙",
      "沙雕"
    ],
    "oneLine": "现代程序员陈凡渡劫失败穿到仙界,意外发现能发朋友圈,于是带着互联网思维颠覆了整个修仙界。",
    "url": "./movies/movie-1080.html",
    "cover": "./30.jpg",
    "category": "都市爱情",
    "categoryUrl": "./category-romance-city.html"
  },
  {
    "id": "1081",
    "title": "轩辕剑传奇",
    "year": "2021",
    "region": "中国大陆",
    "type": "电影",
    "genre": "奇幻,动作",
    "tags": [
      "上古神器",
      "玄幻",
      "特效大片",
      "人魔大战",
      "陈国公主"
    ],
    "oneLine": "轩辕剑意外碎裂,五块碎片散落人间化为妖魔,陈国末代公主必须集齐圣人转世,重新铸剑拯救苍生。",
    "url": "./movies/movie-1081.html",
    "cover": "./31.jpg",
    "category": "历史古装",
    "categoryUrl": "./category-history-costume.html"
  },
  {
    "id": "1082",
    "title": "通识教育",
    "year": "2025",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "剧情/校园/悬疑",
    "tags": [
      "大学",
      "选修课",
      "谎言",
      "学术黑幕",
      "群像"
    ],
    "oneLine": "一所二本院校的“通识教育”必修课,七名学生先后发现了同一件事:授课教授的身份是假的。",
    "url": "./movies/movie-1082.html",
    "cover": "./32.jpg",
    "category": "剧集连看",
    "categoryUrl": "./category-drama-series.html"
  },
  {
    "id": "1083",
    "title": "白雾谜岸",
    "year": "2025",
    "region": "中国大陆",
    "type": "网剧",
    "genre": "悬疑推理",
    "tags": [
      "迷雾",
      "小镇",
      "连环案",
      "女警",
      "民俗"
    ],
    "oneLine": "长江沿岸小镇频发“水鬼索命”案,不信鬼的女刑警队长必须在浓雾吞没一切前,找出藏在民间传说里的真凶。",
    "url": "./movies/movie-1083.html",
    "cover": "./33.jpg",
    "category": "家庭生活",
    "categoryUrl": "./category-family-life.html"
  },
  {
    "id": "1084",
    "title": "永生之爱",
    "year": "2025",
    "region": "美国",
    "type": "电影",
    "genre": "剧情爱情奇幻",
    "tags": [
      "吸血鬼",
      "跨种族",
      "时间跨度",
      "史诗"
    ],
    "oneLine": "一个活了五百年的吸血鬼厌倦了永生,直到她在临终关怀医院遇到了一个只剩下三个月寿命的凡人女孩。",
    "url": "./movies/movie-1084.html",
    "cover": "./34.jpg",
    "category": "动作专区",
    "categoryUrl": "./category-action-zone.html"
  },
  {
    "id": "1085",
    "title": "女煞星续集",
    "year": "2024",
    "region": "中国香港",
    "type": "电影",
    "genre": "动作,犯罪,悬疑",
    "tags": [
      "女性杀手",
      "复仇",
      "枪战",
      "黑色电影",
      "江湖恩怨"
    ],
    "oneLine": "第一部中假死的女杀手重现江湖,这次她的目标不是仇人,而是自己过去的身份。",
    "url": "./movies/movie-1085.html",
    "cover": "./35.jpg",
    "category": "院线热片",
    "categoryUrl": "./category-cinema-hits.html"
  },
  {
    "id": "1086",
    "title": "柔道场",
    "year": "2022",
    "region": "日本",
    "type": "电影",
    "genre": "体育励志",
    "tags": [
      "柔道",
      "师徒",
      "失败者联盟"
    ],
    "oneLine": "一群被各自道场扫地出门的“不良”柔道手,集结在破旧道场冲击全国冠军。",
    "url": "./movies/movie-1086.html",
    "cover": "./36.jpg",
    "category": "青春喜剧",
    "categoryUrl": "./category-youth-comedy.html"
  },
  {
    "id": "1087",
    "title": "幼狮王朝",
    "year": "2025",
    "region": "英国/美国",
    "type": "电视剧",
    "genre": "纪录片/剧情/自然",
    "tags": [
      "非洲草原",
      "狮群",
      "权力斗争",
      "生存",
      "动物主演"
    ],
    "oneLine": "三只幼狮兄弟在非洲大草原上成长、背叛与称王,这是一部真实动物世界的《权力的游戏》。",
    "url": "./movies/movie-1087.html",
    "cover": "./37.jpg",
    "category": "悬疑夜场",
    "categoryUrl": "./category-suspense-night.html"
  },
  {
    "id": "1088",
    "title": "雄兵连之天河战役",
    "year": "2017",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "科幻,战争,动画",
    "tags": [
      "国漫",
      "超级战士",
      "外星入侵",
      "军事"
    ],
    "oneLine": "外星饕餮大军兵临地球,一群被基因改造的超级战士在华夏上空展开了惨烈的保卫战。",
    "url": "./movies/movie-1088.html",
    "cover": "./38.jpg",
    "category": "奇幻科幻",
    "categoryUrl": "./category-fantasy-sci-fi.html"
  },
  {
    "id": "1089",
    "title": "南方传奇",
    "year": "2023",
    "region": "中国大陆",
    "type": "电影",
    "genre": "剧情/悬疑",
    "tags": [
      "小镇疑云",
      "湿热",
      "年代感",
      "人性纠葛"
    ],
    "oneLine": "2008年南方洪灾后,小镇河底浮现一具白骨,牵扯出三个家庭跨越十五年的秘密。",
    "url": "./movies/movie-1089.html",
    "cover": "./39.jpg",
    "category": "剧集连看",
    "categoryUrl": "./category-drama-series.html"
  },
  {
    "id": "1090",
    "title": "逃离疯人院",
    "year": "2026",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "悬疑/惊悚",
    "tags": [
      "无限流",
      "精神控制",
      "高智商女主"
    ],
    "oneLine": "她醒来后发现自己是精神病院的病人,但每次试图证明自己正常,都会重置回入院那一天。",
    "url": "./movies/movie-1090.html",
    "cover": "./40.jpg",
    "category": "悬疑夜场",
    "categoryUrl": "./category-suspense-night.html"
  },
  {
    "id": "1091",
    "title": "俘虏2022",
    "year": "2024",
    "region": "俄罗斯",
    "type": "电影",
    "genre": "战争/剧情",
    "tags": [
      "战俘",
      "人性",
      "极限环境",
      "心理博弈"
    ],
    "oneLine": "一名被俘的乌克兰军医与俘虏他的俄罗斯年轻士兵在废弃医院共处72小时,两个“敌人”必须合作才能活下去。",
    "url": "./movies/movie-1091.html",
    "cover": "./41.jpg",
    "category": "动作专区",
    "categoryUrl": "./category-action-zone.html"
  },
  {
    "id": "1092",
    "title": "二百三高地",
    "year": "2026",
    "region": "日本",
    "type": "电影",
    "genre": "战争/历史",
    "tags": [
      "日俄战争",
      "旅顺",
      "肉弹战术",
      "军国批判",
      "人性深渊"
    ],
    "oneLine": "一个命令,六万人冲锋,那片高地至今一下雨就会泛红。",
    "url": "./movies/movie-1092.html",
    "cover": "./42.jpg",
    "category": "经典片库",
    "categoryUrl": "./category-classic-library.html"
  },
  {
    "id": "1093",
    "title": "马桶妖怪2",
    "year": "2024",
    "region": "美国",
    "type": "电影",
    "genre": "喜剧,恐怖",
    "tags": [
      "B级片",
      "恶搞",
      "怪物",
      "血腥"
    ],
    "oneLine": "上一只马桶妖怪被冲走后,它的母亲从下水道爬了出来,要为儿子报仇。",
    "url": "./movies/movie-1093.html",
    "cover": "./43.jpg",
    "category": "热映精选",
    "categoryUrl": "./category-hot-picks.html"
  },
  {
    "id": "1094",
    "title": "有情鸳鸯无情剑",
    "year": "2002",
    "region": "中国香港",
    "type": "电影",
    "genre": "武侠,爱情,动作",
    "tags": [
      "江湖仇杀",
      "情侣反目",
      "铸剑师",
      "宿命"
    ],
    "oneLine": "铸剑师为未婚妻铸成天下第一剑,剑成之日,她提此剑灭他满门。",
    "url": "./movies/movie-1094.html",
    "cover": "./44.jpg",
    "category": "悬疑夜场",
    "categoryUrl": "./category-suspense-night.html"
  },
  {
    "id": "1095",
    "title": "美丽的他第二季",
    "year": "2025",
    "region": "日本",
    "type": "剧集",
    "genre": "爱情,剧情",
    "tags": [
      "BL",
      "双向治愈",
      "身份错位"
    ],
    "oneLine": "沉默寡言的电影系学生与口吃的舞台剧演员,用一部毕业作品完成了对彼此的救赎。",
    "url": "./movies/movie-1095.html",
    "cover": "./45.jpg",
    "category": "都市爱情",
    "categoryUrl": "./category-romance-city.html"
  },
  {
    "id": "1096",
    "title": "一路繁花相送",
    "year": "2023",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "爱情,剧情,都市",
    "tags": [
      "纯爱",
      "破镜重圆",
      "公路",
      "治愈"
    ],
    "oneLine": "一对分手十年的恋人,为了完成朋友遗愿,被迫开启了一场从漠河到三亚的“送骨灰”自驾之旅。",
    "url": "./movies/movie-1096.html",
    "cover": "./46.jpg",
    "category": "历史古装",
    "categoryUrl": "./category-history-costume.html"
  },
  {
    "id": "1097",
    "title": "药瘾",
    "year": "2024",
    "region": "美国",
    "type": "纪录片",
    "genre": "纪录",
    "tags": [
      "阿片类药物",
      "止痛药依赖",
      "普渡制药",
      "美国社会问题",
      "受害者访谈"
    ],
    "oneLine": "一个止痛药让四百万美国人上瘾,而发明它的公司说“成瘾率低于百分之一”。",
    "url": "./movies/movie-1097.html",
    "cover": "./47.jpg",
    "category": "院线热片",
    "categoryUrl": "./category-cinema-hits.html"
  },
  {
    "id": "1098",
    "title": "迷失凶间",
    "year": "2025",
    "region": "中国香港",
    "type": "剧集",
    "genre": "悬疑,惊悚,犯罪",
    "tags": [
      "香港都市传说",
      "旧屋探案",
      "时间循环",
      "心理惊悚"
    ],
    "oneLine": "三个网红进入一栋被封十八年的公屋直播“凶宅探险”,结果在电梯里看到了十八年前的自己。",
    "url": "./movies/movie-1098.html",
    "cover": "./48.jpg",
    "category": "热映精选",
    "categoryUrl": "./category-hot-picks.html"
  },
  {
    "id": "1099",
    "title": "七合圣石战记",
    "year": "2023",
    "region": "日本",
    "type": "动画",
    "genre": "热血,战斗,奇幻",
    "tags": [
      "魔法少年",
      "合体",
      "圣石",
      "宿命",
      "七人小队"
    ],
    "oneLine": "七个被圣石选中的少年必须合体才能战斗,但他们中混入了一个想毁灭所有人的内奸。",
    "url": "./movies/movie-1099.html",
    "cover": "./49.jpg",
    "category": "历史古装",
    "categoryUrl": "./category-history-costume.html"
  },
  {
    "id": "1100",
    "title": "斗鸡侠",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "genre": "动作/喜剧/武侠",
    "tags": [
      "斗鸡",
      "乡村超级英雄",
      "反讽",
      "低预算"
    ],
    "oneLine": "一个村里养斗鸡为生的落魄青年,穿上祖传的鸡冠头盔,成了专治村霸的“斗鸡侠”。",
    "url": "./movies/movie-1100.html",
    "cover": "./50.jpg",
    "category": "都市爱情",
    "categoryUrl": "./category-romance-city.html"
  },
  {
    "id": "1101",
    "title": "奈河",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "genre": "剧情/家庭/文艺",
    "tags": [
      "乡村",
      "留守儿童",
      "生死观",
      "诗意现实主义"
    ],
    "oneLine": "在黄河故道边的一个村子里,一个八岁的男孩必须独自走过“奈河”,才能为死去的奶奶换来往生。",
    "url": "./movies/movie-1101.html",
    "cover": "./51.jpg",
    "category": "剧集连看",
    "categoryUrl": "./category-drama-series.html"
  },
  {
    "id": "1102",
    "title": "怦然心动20岁第二季",
    "year": "2025",
    "region": "中国大陆",
    "type": "综艺",
    "genre": "真人秀/恋爱",
    "tags": [
      "青春",
      "旅行",
      "毕业",
      "校园",
      "交友"
    ],
    "oneLine": "二十岁的毕业生们开启最后一次旅行,在沙滩、夜市与篝火旁写下校园恋情的最终章。",
    "url": "./movies/movie-1102.html",
    "cover": "./52.jpg",
    "category": "历史古装",
    "categoryUrl": "./category-history-costume.html"
  },
  {
    "id": "1103",
    "title": "索兰与路德维格的圣诞节",
    "year": "2013",
    "region": "挪威",
    "type": "电影",
    "genre": "动画/家庭/奇幻",
    "tags": [
      "北欧童话",
      "圣诞节",
      "友谊"
    ],
    "oneLine": "圣诞节前夕,小镇的玩具发明家索兰和他的乌鸦朋友路德维格,意外发现了一个能让所有礼物拥有生命的魔法钟楼,但也因此激活了沉睡百年的冰雪怪物。",
    "url": "./movies/movie-1103.html",
    "cover": "./53.jpg",
    "category": "剧集连看",
    "categoryUrl": "./category-drama-series.html"
  },
  {
    "id": "1104",
    "title": "我家是个博物馆",
    "year": "2023",
    "region": "中国大陆",
    "type": "电影",
    "genre": "喜剧/奇幻",
    "tags": [
      "奇幻",
      "家庭",
      "古董",
      "穿越"
    ],
    "oneLine": "母亲去世后,儿子回家处理遗物,发现家里每件老物件都藏着一个时空入口。",
    "url": "./movies/movie-1104.html",
    "cover": "./54.jpg",
    "category": "剧集连看",
    "categoryUrl": "./category-drama-series.html"
  },
  {
    "id": "1105",
    "title": "猛鬼工厂",
    "year": "2023",
    "region": "泰国",
    "type": "电影",
    "genre": "恐怖/惊悚",
    "tags": [
      "厂房闹鬼",
      "劳工剥削",
      "因果报应",
      "泰式恐怖",
      "密室"
    ],
    "oneLine": "一群工人为了加班费深夜留守工厂,却触发了被机器吞食的冤魂们的“循环生产”,每隔一小时就会有一人“被报废”。",
    "url": "./movies/movie-1105.html",
    "cover": "./55.jpg",
    "category": "剧集连看",
    "categoryUrl": "./category-drama-series.html"
  },
  {
    "id": "1106",
    "title": "活人墓",
    "year": "2025",
    "region": "中国大陆/马来西亚",
    "type": "电影",
    "genre": "恐怖/惊悚",
    "tags": [
      "南洋",
      "冥婚",
      "盗墓",
      "邪术",
      "反转"
    ],
    "oneLine": "盗墓团伙挖开一座无人敢碰的“活人墓”,棺中新娘突然睁眼,而她的脸和团伙中唯一的女孩一模一样。",
    "url": "./movies/movie-1106.html",
    "cover": "./56.jpg",
    "category": "经典片库",
    "categoryUrl": "./category-classic-library.html"
  },
  {
    "id": "1107",
    "title": "职业特工队",
    "year": "1988",
    "region": "香港",
    "type": "电影",
    "genre": "动作,喜剧",
    "tags": [
      "乌龙",
      "特工",
      "港式幽默"
    ],
    "oneLine": "两个不靠谱的私家侦探被错认成皇家特工,稀里糊涂卷入国际犯罪。",
    "url": "./movies/movie-1107.html",
    "cover": "./57.jpg",
    "category": "经典片库",
    "categoryUrl": "./category-classic-library.html"
  },
  {
    "id": "1108",
    "title": "新岳父大人之三喜临门",
    "year": "2024",
    "region": "美国",
    "type": "电影",
    "genre": "喜剧,家庭",
    "tags": [
      "岳父",
      "婚礼",
      "双胞胎",
      "乌龙"
    ],
    "oneLine": "女儿婚礼当天,岳父发现自己要嫁掉的是双胞胎,而肚子里还有一个——是女婿的。",
    "url": "./movies/movie-1108.html",
    "cover": "./58.jpg",
    "category": "院线热片",
    "categoryUrl": "./category-cinema-hits.html"
  },
  {
    "id": "1109",
    "title": "盗贼泰瑞莎",
    "year": "2023",
    "region": "法国",
    "type": "电影",
    "genre": "喜剧,犯罪",
    "tags": [
      "女盗贼",
      "误打误撞",
      "贵族诈骗",
      "法式幽默",
      "闺蜜搭档"
    ],
    "oneLine": "优雅女骗子泰瑞莎被误认为公爵夫人,索性将错就错入主豪宅,结果真盗贼团找上了门。",
    "url": "./movies/movie-1109.html",
    "cover": "./59.jpg",
    "category": "全球佳作",
    "categoryUrl": "./category-global-stories.html"
  },
  {
    "id": "1110",
    "title": "侠客行不通",
    "year": "2024",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "喜剧,武侠,古装",
    "tags": [
      "反套路",
      "江湖菜鸟",
      "乌龙事件",
      "成长"
    ],
    "oneLine": "一个只想按规矩行侠仗义的愣头青,却发现每条江湖规矩都会把他带进沟里。",
    "url": "./movies/movie-1110.html",
    "cover": "./60.jpg",
    "category": "动作专区",
    "categoryUrl": "./category-action-zone.html"
  },
  {
    "id": "1111",
    "title": "温暖的季节",
    "year": "2022",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "剧情,家庭",
    "tags": [
      "东北",
      "下岗",
      "亲情",
      "和解",
      "年代"
    ],
    "oneLine": "东北深秋,一个濒临破碎的五口之家,因父亲意外患上“怪病”而被迫重聚。",
    "url": "./movies/movie-1111.html",
    "cover": "./61.jpg",
    "category": "都市爱情",
    "categoryUrl": "./category-romance-city.html"
  },
  {
    "id": "1112",
    "title": "外星追缉令",
    "year": "1993",
    "region": "美国",
    "type": "电影",
    "genre": "科幻/动作/惊悚",
    "tags": [
      "外星逃犯",
      "赏金猎人",
      "洛杉矶街头"
    ],
    "oneLine": "洛杉矶街头混混目睹了一起“车祸”,爬出来的不是人,而是一个戴着手铐的蓝皮肤外星人,悬赏金是一吨黄金。",
    "url": "./movies/movie-1112.html",
    "cover": "./62.jpg",
    "category": "都市爱情",
    "categoryUrl": "./category-romance-city.html"
  },
  {
    "id": "1113",
    "title": "牙斗兽娘",
    "year": "2024",
    "region": "日本",
    "type": "OVA",
    "genre": "动作奇幻",
    "tags": [
      "兽化",
      "格斗",
      "暗黑",
      "女性"
    ],
    "oneLine": "在一个秘密的地下竞技场,少女们可以化身野兽进行死斗,而失败者的下场是被“回收”。",
    "url": "./movies/movie-1113.html",
    "cover": "./63.jpg",
    "category": "历史古装",
    "categoryUrl": "./category-history-costume.html"
  },
  {
    "id": "1114",
    "title": "死亡诗社",
    "year": "2023",
    "region": "美国",
    "type": "电影",
    "genre": "悬疑/恐怖/校园",
    "tags": [
      "神秘社团",
      "诅咒",
      "诗歌",
      "连环死亡"
    ],
    "oneLine": "一所精英高中里,加入“死亡诗社”的学生会按自己写的诗的方式死去。",
    "url": "./movies/movie-1114.html",
    "cover": "./64.jpg",
    "category": "全球佳作",
    "categoryUrl": "./category-global-stories.html"
  },
  {
    "id": "1115",
    "title": "私刑枷锁",
    "year": "2024",
    "region": "美国",
    "type": "电影",
    "genre": "动作,剧情",
    "tags": [
      "义警",
      "法律",
      "复仇",
      "道德困境"
    ],
    "oneLine": "女儿被奸杀,司法却因证据不足释放凶手,父亲戴上枷锁游街:请公民投票决定是否杀他。",
    "url": "./movies/movie-1115.html",
    "cover": "./65.jpg",
    "category": "青春喜剧",
    "categoryUrl": "./category-youth-comedy.html"
  },
  {
    "id": "1116",
    "title": "杀手西蒙",
    "year": "2022",
    "region": "法国",
    "type": "电影",
    "genre": "犯罪/惊悚",
    "tags": [
      "冷血杀手",
      "孤儿",
      "救赎"
    ],
    "oneLine": "一个从无失手的职业杀手,在一次任务中发现自己要杀的目标,竟是失散多年的亲弟弟。",
    "url": "./movies/movie-1116.html",
    "cover": "./66.jpg",
    "category": "家庭生活",
    "categoryUrl": "./category-family-life.html"
  },
  {
    "id": "1117",
    "title": "真实猛龙-科学的假设",
    "year": "2026",
    "region": "美国",
    "type": "电影",
    "genre": "伪纪录片/科幻",
    "tags": [
      "伪纪录片",
      "古生物学",
      "阴谋论",
      "科技伦理"
    ],
    "oneLine": "一群科学家用基因技术和AI复原出“猛龙”,却发现真正的猛龙从未灭绝,而是藏在了数学维度里。",
    "url": "./movies/movie-1117.html",
    "cover": "./67.jpg",
    "category": "悬疑夜场",
    "categoryUrl": "./category-suspense-night.html"
  },
  {
    "id": "1118",
    "title": "猎魔士",
    "year": "2019",
    "region": "美国/波兰",
    "type": "剧集",
    "genre": "奇幻/动作/冒险",
    "tags": [
      "猎魔人",
      "两线叙事",
      "命运",
      "魔物",
      "白狼"
    ],
    "oneLine": "孤独的猎魔人杰洛特,在乱世中发现自己与一位被追杀的公主和一位女术士的命运紧紧纠缠。",
    "url": "./movies/movie-1118.html",
    "cover": "./68.jpg",
    "category": "青春喜剧",
    "categoryUrl": "./category-youth-comedy.html"
  },
  {
    "id": "1119",
    "title": "吉屋出租:百老汇剧场版",
    "year": "2026",
    "region": "美国",
    "type": "音乐剧电影",
    "genre": "歌舞/剧情/爱情",
    "tags": [
      "音乐剧改编",
      "波西米亚",
      "艾滋病",
      "纽约东村",
      "普契尼"
    ],
    "oneLine": "在数字时代重生的波西米亚人,用TikTok直播对抗房东驱逐,并在疾病与梦想中寻找“今日”的意义。",
    "url": "./movies/movie-1119.html",
    "cover": "./69.jpg",
    "category": "经典片库",
    "categoryUrl": "./category-classic-library.html"
  },
  {
    "id": "1120",
    "title": "犯罪现场4",
    "year": "2025",
    "region": "中国香港",
    "type": "剧集",
    "genre": "悬疑/犯罪",
    "tags": [
      "法证",
      "连环杀手",
      "心理侧写",
      "实验室",
      "高科技"
    ],
    "oneLine": "一个专杀“完美丈夫”的寡妇杀手,每次都在现场留下一朵白玫瑰,而上一季的主角成了她的头号目标。",
    "url": "./movies/movie-1120.html",
    "cover": "./70.jpg",
    "category": "热映精选",
    "categoryUrl": "./category-hot-picks.html"
  },
  {
    "id": "1121",
    "title": "港口的日本姑娘",
    "year": "2020",
    "region": "越南/日本",
    "type": "电影",
    "genre": "剧情/爱情/文艺",
    "tags": [
      "越南",
      "港口",
      "移民",
      "书信"
    ],
    "oneLine": "1995年越南岘港,一个日本老兵的遗言让他的孙女远渡重洋,寻找一个叫“梅”的女孩。",
    "url": "./movies/movie-1121.html",
    "cover": "./71.jpg",
    "category": "经典片库",
    "categoryUrl": "./category-classic-library.html"
  },
  {
    "id": "1122",
    "title": "幻影少年",
    "year": "2023",
    "region": "日本",
    "type": "电影",
    "genre": "奇幻,青春",
    "tags": [
      "治愈",
      "校园",
      "透明人"
    ],
    "oneLine": "一个被全班无视的孤独少年,某天真的变成了透明人,却只有一个爱逃学的少女能看见他。",
    "url": "./movies/movie-1122.html",
    "cover": "./72.jpg",
    "category": "青春喜剧",
    "categoryUrl": "./category-youth-comedy.html"
  },
  {
    "id": "1123",
    "title": "独特的兄弟",
    "year": "2026",
    "region": "美国",
    "type": "电影",
    "genre": "喜剧,家庭,运动",
    "tags": [
      "篮球",
      "兄弟情",
      "残疾人",
      "励志",
      "搞笑"
    ],
    "oneLine": "为了帮只有一只手的天才弟弟圆梦NBA,四肢发达头脑简单的哥哥决定做他的“专属双手”。",
    "url": "./movies/movie-1123.html",
    "cover": "./73.jpg",
    "category": "经典片库",
    "categoryUrl": "./category-classic-library.html"
  },
  {
    "id": "1124",
    "title": "星星的房子国语",
    "year": "2023",
    "region": "中国台湾/泰国",
    "type": "剧集",
    "genre": "爱情,剧情",
    "tags": [
      "合租",
      "阴差阳错",
      "治愈"
    ],
    "oneLine": "为了继承一间能看到星星的老房子,七个陌生人必须在同一屋檐下伪装成一年的“幸福家庭”。",
    "url": "./movies/movie-1124.html",
    "cover": "./74.jpg",
    "category": "动作专区",
    "categoryUrl": "./category-action-zone.html"
  },
  {
    "id": "1125",
    "title": "斯巴达三百勇士",
    "year": "2006",
    "region": "美国",
    "type": "电影",
    "genre": "动作,历史,战争",
    "tags": [
      "史诗",
      "肌肉",
      "慢镜头",
      "热血"
    ],
    "oneLine": "斯巴达国王列奥尼达率领三百勇士,在温泉关以血肉之躯抵挡波斯百万大军,铸就永恒传奇。",
    "url": "./movies/movie-1125.html",
    "cover": "./75.jpg",
    "category": "都市爱情",
    "categoryUrl": "./category-romance-city.html"
  },
  {
    "id": "1126",
    "title": "青山是故乡",
    "year": "2024",
    "region": "中国大陆",
    "type": "电视剧",
    "genre": "家庭/乡村",
    "tags": [
      "返乡创业",
      "留守儿童",
      "代际冲突",
      "生态农业",
      "治愈"
    ],
    "oneLine": "在北京大厂被裁员的程序员回到贵州山村,发现父亲把“青山绿水”变成了一座座荒芜的矿坑。",
    "url": "./movies/movie-1126.html",
    "cover": "./76.jpg",
    "category": "经典片库",
    "categoryUrl": "./category-classic-library.html"
  },
  {
    "id": "1127",
    "title": "加州套房",
    "year": "2024",
    "region": "美国",
    "type": "剧集",
    "genre": "剧情,悬疑",
    "tags": [
      "酒店",
      "群像",
      "秘密",
      "非线性叙事"
    ],
    "oneLine": "洛杉矶一家老牌酒店的五间套房,三十年里住过杀手、明星、政客和幽灵。",
    "url": "./movies/movie-1127.html",
    "cover": "./77.jpg",
    "category": "悬疑夜场",
    "categoryUrl": "./category-suspense-night.html"
  },
  {
    "id": "1128",
    "title": "杀手一号",
    "year": "2026",
    "region": "法国",
    "type": "电影",
    "genre": "惊悚/犯罪",
    "tags": [
      "连环杀手",
      "模仿犯",
      "悬疑"
    ],
    "oneLine": "一个早已被处决的传奇杀手“一号”再次犯案,老警探不得不去监狱请教唯一的活口:那个亲手杀了“一号”的疯子。",
    "url": "./movies/movie-1128.html",
    "cover": "./78.jpg",
    "category": "悬疑夜场",
    "categoryUrl": "./category-suspense-night.html"
  },
  {
    "id": "1129",
    "title": "见习女探",
    "year": "2024",
    "region": "中国大陆",
    "type": "短剧",
    "genre": "悬疑,喜剧,古装",
    "tags": [
      "女仵作",
      "民国",
      "单元探案",
      "反套路"
    ],
    "oneLine": "民国初年,留洋归来的法医专业女学生被分到警察局当“见习女探”,搭档是一个迷信鬼神的老探长。",
    "url": "./movies/movie-1129.html",
    "cover": "./79.jpg",
    "category": "剧集连看",
    "categoryUrl": "./category-drama-series.html"
  },
  {
    "id": "1130",
    "title": "海棠春",
    "year": "1962",
    "region": "中国香港",
    "type": "电影",
    "genre": "爱情,戏曲",
    "tags": [
      "黄梅调",
      "经典",
      "李翰祥",
      "三角恋"
    ],
    "oneLine": "江南名伶海棠夹在军阀与书生之间,用一出《长生殿》唱出了自己的生死抉择。",
    "url": "./movies/movie-1130.html",
    "cover": "./80.jpg",
    "category": "历史古装",
    "categoryUrl": "./category-history-costume.html"
  },
  {
    "id": "1131",
    "title": "大都市",
    "year": "2024",
    "region": "美国",
    "type": "电影",
    "genre": "科幻,悬疑",
    "tags": [
      "未来都市",
      "阶级对立",
      "心理操控"
    ],
    "oneLine": "在垂直划分的三层天空都市中,一名底层清洁工意外获得了登上顶层的资格,却发现整个城市都在呼吸。",
    "url": "./movies/movie-1131.html",
    "cover": "./81.jpg",
    "category": "都市爱情",
    "categoryUrl": "./category-romance-city.html"
  },
  {
    "id": "1132",
    "title": "土狼子弹",
    "year": "2025",
    "region": "墨西哥/美国",
    "type": "电影",
    "genre": "犯罪/西部/惊悚",
    "tags": [
      "边境",
      "走私",
      "父子",
      "道德困境",
      "生存"
    ],
    "oneLine": "为了给女儿凑医药费,一个货车司机被迫在美墨边境运送一箱被称为“土狼子弹”的致命货物。",
    "url": "./movies/movie-1132.html",
    "cover": "./82.jpg",
    "category": "动作专区",
    "categoryUrl": "./category-action-zone.html"
  },
  {
    "id": "1133",
    "title": "追星星的人第三季",
    "year": "2023",
    "region": "中国大陆",
    "type": "综艺",
    "genre": "真人秀/科普",
    "tags": [
      "观星",
      "治愈",
      "慢综艺",
      "素人科学家"
    ],
    "oneLine": "五位明星与一位自闭症天文学少年,在暗夜公园找一颗消失的脉冲星。",
    "url": "./movies/movie-1133.html",
    "cover": "./83.jpg",
    "category": "全球佳作",
    "categoryUrl": "./category-global-stories.html"
  },
  {
    "id": "1134",
    "title": "性福疗程",
    "year": "2012",
    "region": "法国/比利时",
    "type": "电影",
    "genre": "剧情/爱情",
    "tags": [
      "残障人士",
      "性治疗",
      "真实故事改编",
      "温柔治愈",
      "身份认同"
    ],
    "oneLine": "一个因脑瘫被困在扭曲身体里的男人,决心聘请一名性治疗师来完成自己的成人礼。",
    "url": "./movies/movie-1134.html",
    "cover": "./84.jpg",
    "category": "历史古装",
    "categoryUrl": "./category-history-costume.html"
  },
  {
    "id": "1135",
    "title": "巴斯特·斯克鲁格斯的歌谣",
    "year": "2018",
    "region": "美国",
    "type": "电影",
    "genre": "剧情,西部,喜剧,奇幻",
    "tags": [
      "科恩兄弟",
      "选集电影",
      "死亡",
      "黑色幽默",
      "西部"
    ],
    "oneLine": "六个西部故事,六个关于死的荒诞寓言,最后一个故事里,死神坐在马车上等你。",
    "url": "./movies/movie-1135.html",
    "cover": "./85.jpg",
    "category": "院线热片",
    "categoryUrl": "./category-cinema-hits.html"
  },
  {
    "id": "1136",
    "title": "幻里姻缘",
    "year": "1996",
    "region": "中国香港",
    "type": "电影",
    "genre": "爱情/奇幻",
    "tags": [
      "梦境",
      "缘分",
      "老港片",
      "前世今生"
    ],
    "oneLine": "一对陌生男女每晚在梦中相爱,醒来却互不相识。",
    "url": "./movies/movie-1136.html",
    "cover": "./86.jpg",
    "category": "历史古装",
    "categoryUrl": "./category-history-costume.html"
  },
  {
    "id": "1137",
    "title": "幽冥花开",
    "year": "2024",
    "region": "中国台湾",
    "type": "剧集",
    "genre": "奇幻/悬疑/爱情",
    "tags": [
      "冥婚",
      "百合",
      "民俗恐怖"
    ],
    "oneLine": "被迫为死去的少爷举办冥婚,新娘却发现新郎的姐姐才是真正的“鬼”。",
    "url": "./movies/movie-1137.html",
    "cover": "./87.jpg",
    "category": "院线热片",
    "categoryUrl": "./category-cinema-hits.html"
  },
  {
    "id": "1138",
    "title": "警察故事3:超级警察",
    "year": "1992",
    "region": "中国香港",
    "type": "电影",
    "genre": "动作/犯罪/喜剧",
    "tags": [
      "成龙",
      "特技",
      "枪战",
      "卧底",
      "国际贩毒"
    ],
    "oneLine": "陈家驹卧底内地监狱,与女公安杨建华联手摧毁国际贩毒集团,却遭遇直升机追杀。",
    "url": "./movies/movie-1138.html",
    "cover": "./88.jpg",
    "category": "家庭生活",
    "categoryUrl": "./category-family-life.html"
  },
  {
    "id": "1139",
    "title": "我的隔壁有男神",
    "year": "2023",
    "region": "中国大陆",
    "type": "电视剧",
    "genre": "喜剧,爱情,奇幻",
    "tags": [
      "单恋",
      "偶像邻居",
      "甜蜜互动"
    ],
    "oneLine": "平凡宅女发现新搬来的邻居竟是顶流偶像,更意外得知他的“完美人设”全靠自己熬夜写的匿名鼓励信。",
    "url": "./movies/movie-1139.html",
    "cover": "./89.jpg",
    "category": "悬疑夜场",
    "categoryUrl": "./category-suspense-night.html"
  },
  {
    "id": "1140",
    "title": "资本主义:一个爱情故事",
    "year": "2025",
    "region": "美国",
    "type": "电影",
    "genre": "纪录片/社会/剧情",
    "tags": [
      "迈克尔·摩尔",
      "讽刺",
      "经济危机",
      "社会批判"
    ],
    "oneLine": "当资本家告诉你“这是最好的时代”,镜头却拍下了普通人被一间间收回的房子。",
    "url": "./movies/movie-1140.html",
    "cover": "./90.jpg",
    "category": "全球佳作",
    "categoryUrl": "./category-global-stories.html"
  },
  {
    "id": "1141",
    "title": "梨花劫粤语",
    "year": "1991",
    "region": "中国香港",
    "type": "电影",
    "genre": "剧情/犯罪",
    "tags": [
      "女性复仇",
      "江湖",
      "血案",
      "粤语原声",
      "虐心"
    ],
    "oneLine": "梨花的丈夫被帮派害死,她伪装成哑巴保姆潜入仇家,用一碗碗糖水让所有人慢性中毒。",
    "url": "./movies/movie-1141.html",
    "cover": "./91.jpg",
    "category": "全球佳作",
    "categoryUrl": "./category-global-stories.html"
  },
  {
    "id": "1142",
    "title": "背离",
    "year": "2021",
    "region": "英国",
    "type": "剧集",
    "genre": "悬疑,剧情",
    "tags": [
      "出轨",
      "心理",
      "反转",
      "伦理"
    ],
    "oneLine": "模范丈夫出轨后回归家庭,妻子选择原谅,但家里每天都会多出一件不属于任何人的物品。",
    "url": "./movies/movie-1142.html",
    "cover": "./92.jpg",
    "category": "家庭生活",
    "categoryUrl": "./category-family-life.html"
  },
  {
    "id": "1143",
    "title": "狙击部队",
    "year": "2012",
    "region": "中国",
    "type": "电视剧",
    "genre": "军旅,动作",
    "tags": [
      "抗战",
      "神枪手",
      "特种作战",
      "兄弟情",
      "热血"
    ],
    "oneLine": "八路军组建了一支由各路民间枪王组成的杂牌狙击队,他们要面对的却是日军专克神枪手的王牌狙杀部队。",
    "url": "./movies/movie-1143.html",
    "cover": "./93.jpg",
    "category": "全球佳作",
    "categoryUrl": "./category-global-stories.html"
  },
  {
    "id": "1144",
    "title": "康纳斯的战争",
    "year": "2029",
    "region": "美国",
    "type": "电影",
    "genre": "动作/科幻/战争",
    "tags": [
      "外骨骼",
      "退伍军人",
      "复仇",
      "近未来单兵"
    ],
    "oneLine": "一个失去双腿的退伍军人被征召测试新型战斗外骨骼,却发现测试对手是他从前亲手训练出的克隆人部队。",
    "url": "./movies/movie-1144.html",
    "cover": "./94.jpg",
    "category": "都市爱情",
    "categoryUrl": "./category-romance-city.html"
  },
  {
    "id": "1145",
    "title": "傻佬三人组",
    "year": "2021",
    "region": "马来西亚",
    "type": "电影",
    "genre": "喜剧、动作",
    "tags": [
      "搞笑",
      "兄弟情",
      "误打误撞"
    ],
    "oneLine": "三个智力障碍的清洁工意外捡到黑帮的毒晶,被追杀途中竟阴差阳错捣毁贩毒网络。",
    "url": "./movies/movie-1145.html",
    "cover": "./95.jpg",
    "category": "剧集连看",
    "categoryUrl": "./category-drama-series.html"
  },
  {
    "id": "1146",
    "title": "暴力监狱第二季",
    "year": "2025",
    "region": "美国",
    "type": "剧集",
    "genre": "动作",
    "tags": [
      "越狱",
      "人体实验",
      "监狱改革",
      "黑色幽默"
    ],
    "oneLine": "上一季炸毁监狱的主角被关进地下第13层,却发现整座监狱是漂浮在公海的巨型移动堡垒。",
    "url": "./movies/movie-1146.html",
    "cover": "./96.jpg",
    "category": "家庭生活",
    "categoryUrl": "./category-family-life.html"
  },
  {
    "id": "1147",
    "title": "审问",
    "year": "2025",
    "region": "德国",
    "type": "电影",
    "genre": "悬疑、犯罪、剧情",
    "tags": [
      "审讯室",
      "心理战",
      "冤案",
      "独角戏"
    ],
    "oneLine": "密闭的审讯室内,警探与嫌疑人一对一交锋,16个小时的录像带里,谁在说谎?",
    "url": "./movies/movie-1147.html",
    "cover": "./97.jpg",
    "category": "热映精选",
    "categoryUrl": "./category-hot-picks.html"
  },
  {
    "id": "1148",
    "title": "欲望法则",
    "year": "2028",
    "region": "西班牙",
    "type": "电影",
    "genre": "剧情/惊悚/情色",
    "tags": [
      "阿莫多瓦式",
      "欲望",
      "身份错位",
      "三角关系"
    ],
    "oneLine": "一位功成名就的导演,发现自己最爱的缪斯,同时也是最想杀死他的仇人。",
    "url": "./movies/movie-1148.html",
    "cover": "./98.jpg",
    "category": "青春喜剧",
    "categoryUrl": "./category-youth-comedy.html"
  },
  {
    "id": "1149",
    "title": "遛鸟家族",
    "year": "2021",
    "region": "中国大陆",
    "type": "电影",
    "genre": "剧情,家庭,黑色幽默",
    "tags": [
      "北京大爷",
      "拆迁",
      "父子关系",
      "老炮儿"
    ],
    "oneLine": "一个把画眉鸟当成命根子的退休老头,为了保住祖宅,被迫重组已经解散二十多年的“遛鸟家族”。",
    "url": "./movies/movie-1149.html",
    "cover": "./99.jpg",
    "category": "动作专区",
    "categoryUrl": "./category-action-zone.html"
  },
  {
    "id": "1150",
    "title": "天使的肌肤",
    "year": "2024",
    "region": "法国/意大利",
    "type": "电影",
    "genre": "剧情/奇幻",
    "tags": [
      "纹身",
      "天使",
      "救赎",
      "艺术",
      "灵魂"
    ],
    "oneLine": "一个绝望的纹身师接到了一个特殊订单:为一个自称“堕落天使”的客人纹上能让他重返天堂的皮肤。",
    "url": "./movies/movie-1150.html",
    "cover": "./100.jpg",
    "category": "家庭生活",
    "categoryUrl": "./category-family-life.html"
  },
  {
    "id": "1151",
    "title": "精灵宝可梦:皮卡丘的暑假",
    "year": "1999",
    "region": "日本",
    "type": "动画电影",
    "genre": "奇幻,冒险",
    "tags": [
      "宝可梦",
      "皮卡丘",
      "夏日",
      "治愈",
      "独立故事"
    ],
    "oneLine": "小智去参加夏令营,皮卡丘和宝可梦们偷偷跑回森林,展开了一场没有训练家的奇妙大冒险。",
    "url": "./movies/movie-1151.html",
    "cover": "./101.jpg",
    "category": "院线热片",
    "categoryUrl": "./category-cinema-hits.html"
  },
  {
    "id": "1152",
    "title": "习总书记的初心",
    "year": "2023",
    "region": "中国大陆",
    "type": "纪录片",
    "genre": "纪录片/传记/政治",
    "tags": [
      "习近平",
      "梁家河",
      "治国理政",
      "中国梦",
      "亲民"
    ],
    "oneLine": "本片通过大量珍贵的影像资料和亲历者口述,追寻习近平总书记在梁家河的七年知青岁月,展现他“为人民服务”的初心起点。",
    "url": "./movies/movie-1152.html",
    "cover": "./102.jpg",
    "category": "悬疑夜场",
    "categoryUrl": "./category-suspense-night.html"
  },
  {
    "id": "1153",
    "title": "瑞典少女",
    "year": "2026",
    "region": "瑞典",
    "type": "电影",
    "genre": "剧情/冒险",
    "tags": [
      "环保",
      "成长",
      "公路片"
    ],
    "oneLine": "为了寻找失踪的环保科学家父亲,一个患有社交障碍的少女踏上横跨北欧的孤独旅程。",
    "url": "./movies/movie-1153.html",
    "cover": "./103.jpg",
    "category": "悬疑夜场",
    "categoryUrl": "./category-suspense-night.html"
  },
  {
    "id": "1154",
    "title": "2023北京卫视春晚",
    "year": "2023",
    "region": "中国大陆",
    "type": "晚会",
    "genre": "综艺/歌舞/喜剧",
    "tags": [
      "春节",
      "合家欢",
      "怀旧"
    ],
    "oneLine": "一场因节目单泄露而被迫临时大改的春晚,反而成为近年来口碑最好的一届。",
    "url": "./movies/movie-1154.html",
    "cover": "./104.jpg",
    "category": "悬疑夜场",
    "categoryUrl": "./category-suspense-night.html"
  },
  {
    "id": "1155",
    "title": "无处",
    "year": "2025",
    "region": "中国大陆",
    "type": "电影",
    "genre": "悬疑/科幻",
    "tags": [
      "平行宇宙",
      "身份迷失",
      "城市迷宫",
      "低饱和度美学",
      "独角戏"
    ],
    "oneLine": "一名程序员发现自己居住的小区每过24小时就会在一个无限循环的灰色空间中随机“复制”一次。",
    "url": "./movies/movie-1155.html",
    "cover": "./105.jpg",
    "category": "热映精选",
    "categoryUrl": "./category-hot-picks.html"
  },
  {
    "id": "1156",
    "title": "千万别睁眼",
    "year": "2025",
    "region": "美国",
    "type": "电影",
    "genre": "恐怖/超自然",
    "tags": [
      "规则类",
      "密室",
      "高概念",
      "吓人",
      "反转"
    ],
    "oneLine": "一座小镇的居民被告知,只要在午夜睁眼,就会被已经死去的最爱的人拉入地狱。",
    "url": "./movies/movie-1156.html",
    "cover": "./106.jpg",
    "category": "全球佳作",
    "categoryUrl": "./category-global-stories.html"
  },
  {
    "id": "1157",
    "title": "神鬼嚎野人",
    "year": "2016",
    "region": "新西兰",
    "type": "电影",
    "genre": "喜剧,冒险",
    "tags": [
      "丛林",
      "顽童",
      "治愈",
      "荒诞"
    ],
    "oneLine": "自诩“荒野求生专家”的胖大叔,带着城里来的“问题少年”,在新西兰丛林里被野猪追、被激流冲、被自己蠢哭。",
    "url": "./movies/movie-1157.html",
    "cover": "./107.jpg",
    "category": "都市爱情",
    "categoryUrl": "./category-romance-city.html"
  },
  {
    "id": "1158",
    "title": "下一站,别离",
    "year": "2025",
    "region": "中国大陆",
    "type": "电视剧",
    "genre": "都市,情感",
    "tags": [
      "婚姻危机",
      "中年失意",
      "治愈",
      "人生重启"
    ],
    "oneLine": "五十岁的她瞒着家人报名了老年大学,在那里遇见了三十年前的老同学,以及全新的人生。",
    "url": "./movies/movie-1158.html",
    "cover": "./108.jpg",
    "category": "奇幻科幻",
    "categoryUrl": "./category-fantasy-sci-fi.html"
  },
  {
    "id": "1159",
    "title": "深网",
    "year": "2026",
    "region": "美国",
    "type": "剧集",
    "genre": "犯罪/悬疑/科技惊悚",
    "tags": [
      "暗网",
      "黑客",
      "悬疑推理",
      "虚拟现实",
      "高科技犯罪"
    ],
    "oneLine": "三名黑客无意闯入暗网深处的“游戏场”,发现每一场游戏都是用真实人命做赌注。",
    "url": "./movies/movie-1159.html",
    "cover": "./109.jpg",
    "category": "全球佳作",
    "categoryUrl": "./category-global-stories.html"
  },
  {
    "id": "1160",
    "title": "功夫熊猫4",
    "year": "2024",
    "region": "美国",
    "type": "动画电影",
    "genre": "喜剧/动作",
    "tags": [
      "梦工厂",
      "熊猫阿宝",
      "功夫"
    ],
    "oneLine": "神龙大侠阿宝收了一个笨手笨脚的新徒弟,而他要面对的反派,是自己最大的粉丝。",
    "url": "./movies/movie-1160.html",
    "cover": "./110.jpg",
    "category": "经典片库",
    "categoryUrl": "./category-classic-library.html"
  },
  {
    "id": "1161",
    "title": "癌症",
    "year": "2026",
    "region": "中国大陆",
    "type": "电影",
    "genre": "剧情,家庭",
    "tags": [
      "疾病",
      "伦理",
      "医保",
      "人性"
    ],
    "oneLine": "父亲患上绝症,三个子女为是否继续治疗在病床前撕破脸,却意外发现父亲早已为自己买好了“放弃治疗”的保险。",
    "url": "./movies/movie-1161.html",
    "cover": "./111.jpg",
    "category": "院线热片",
    "categoryUrl": "./category-cinema-hits.html"
  },
  {
    "id": "1162",
    "title": "极地漫步",
    "year": "2026",
    "region": "挪威/德国",
    "type": "纪录片",
    "genre": "纪录、冒险",
    "tags": [
      "北极",
      "徒步",
      "全球变暖",
      "母子",
      "无声行走"
    ],
    "oneLine": "一位六旬挪威母亲与疏离多年的儿子在没有机动设备的情况下,徒步穿越斯瓦尔巴德群岛,全程只凭祖先的极地生存术。",
    "url": "./movies/movie-1162.html",
    "cover": "./112.jpg",
    "category": "历史古装",
    "categoryUrl": "./category-history-costume.html"
  },
  {
    "id": "1163",
    "title": "深夜姐妹会",
    "year": "2024",
    "region": "美国",
    "type": "电影",
    "genre": "恐怖/悬疑",
    "tags": [
      "大学姐妹会",
      "诅咒",
      "惊悚",
      "连环杀手",
      "女性"
    ],
    "oneLine": "大学姐妹会的五个成员,每晚轮流讲一个恐怖故事,却发现故事里的人正在现实中一一死去。 为了争夺会长之位,五名姐妹会成员约定每晚讲一个恐怖故事,但第四个故事还没讲完,第一个故事里的女鬼就出现在了窗外。",
    "url": "./movies/movie-1163.html",
    "cover": "./113.jpg",
    "category": "动作专区",
    "categoryUrl": "./category-action-zone.html"
  },
  {
    "id": "1164",
    "title": "牙仙",
    "year": "2010",
    "region": "美国",
    "type": "电影",
    "genre": "喜剧/家庭/奇幻",
    "tags": [
      "巨石强森",
      "变身",
      "童话",
      "搞笑"
    ],
    "oneLine": "一个在冰球场上粗鲁暴力的壮汉,因为打碎孩子的牙齿,被罚在地球上做一周的兼职“牙仙”。",
    "url": "./movies/movie-1164.html",
    "cover": "./114.jpg",
    "category": "都市爱情",
    "categoryUrl": "./category-romance-city.html"
  },
  {
    "id": "1165",
    "title": "海绵宝宝:拯救比奇堡",
    "year": "2025",
    "region": "美国",
    "type": "动画电影",
    "genre": "动画,喜剧,奇幻",
    "tags": [
      "合家欢",
      "冒险",
      "无厘头"
    ],
    "oneLine": "比奇堡被神秘真空吸走,海绵宝宝和派大星在陆地上发现,敌人竟是“海洋清洁机器人”。",
    "url": "./movies/movie-1165.html",
    "cover": "./115.jpg",
    "category": "青春喜剧",
    "categoryUrl": "./category-youth-comedy.html"
  },
  {
    "id": "1166",
    "title": "美人记·昭君",
    "year": "2025",
    "region": "中国大陆",
    "type": "电影",
    "genre": "古装剧情",
    "tags": [
      "历史改编",
      "女性成长",
      "权谋",
      "和亲"
    ],
    "oneLine": "一位被选为和亲的宫女在漫长的出塞之路上,逐渐揭开一场旨在颠覆汉朝边疆的惊天阴谋。",
    "url": "./movies/movie-1166.html",
    "cover": "./116.jpg",
    "category": "经典片库",
    "categoryUrl": "./category-classic-library.html"
  },
  {
    "id": "1167",
    "title": "恶灵坎蒂莎",
    "year": "2018",
    "region": "印度尼西亚",
    "type": "电影",
    "genre": "恐怖,惊悚",
    "tags": [
      "东南亚",
      "降头",
      "巫术",
      "诅咒",
      "复仇"
    ],
    "oneLine": "一个被霸凌的女学生向校园恶霸下了最毒的降头,复活后的她,成为了恐怖的恶灵坎蒂莎。",
    "url": "./movies/movie-1167.html",
    "cover": "./117.jpg",
    "category": "热映精选",
    "categoryUrl": "./category-hot-picks.html"
  },
  {
    "id": "1168",
    "title": "远东之旅",
    "year": "2023",
    "region": "美国/越南",
    "type": "电影",
    "genre": "动作/惊悚",
    "tags": [
      "特工",
      "东南亚雨林",
      "复仇",
      "女性力量"
    ],
    "oneLine": "一名退役女狙击手潜入金三角腹地,只为给惨死在贩毒集团手中的女儿讨回公道。",
    "url": "./movies/movie-1168.html",
    "cover": "./118.jpg",
    "category": "热映精选",
    "categoryUrl": "./category-hot-picks.html"
  },
  {
    "id": "1169",
    "title": "报到日",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "genre": "喜剧/青春/校园",
    "tags": [
      "大学",
      "军训",
      "群像",
      "社死",
      "热血"
    ],
    "oneLine": "六个性格迥异的大一新生在报到当天接连发生乌龙事件,意外结成了全校最差宿舍联盟。",
    "url": "./movies/movie-1169.html",
    "cover": "./119.jpg",
    "category": "动作专区",
    "categoryUrl": "./category-action-zone.html"
  },
  {
    "id": "1170",
    "title": "月老",
    "year": "2021",
    "region": "中国台湾",
    "type": "电影",
    "genre": "奇幻/爱情/喜剧",
    "tags": [
      "死后世界",
      "红线",
      "轮回"
    ],
    "oneLine": "两个在人间意外死亡的年轻人成为月老实习生,却发现“牵红线”的真相是让相爱的人彼此遗忘。",
    "url": "./movies/movie-1170.html",
    "cover": "./120.jpg",
    "category": "热映精选",
    "categoryUrl": "./category-hot-picks.html"
  },
  {
    "id": "1171",
    "title": "穷追不舍",
    "year": "2024",
    "region": "法国",
    "type": "电影",
    "genre": "警匪惊悚",
    "tags": [
      "追逐",
      "复仇",
      "真相",
      "暴力美学"
    ],
    "oneLine": "一名被冤枉的巴黎警察,为了洗清罪名,必须在三天内,在整座城市的追捕下,找到真正的凶手。",
    "url": "./movies/movie-1171.html",
    "cover": "./121.jpg",
    "category": "全球佳作",
    "categoryUrl": "./category-global-stories.html"
  },
  {
    "id": "1172",
    "title": "地下幻灯剧画 少女椿",
    "year": "1992",
    "region": "日本",
    "type": "动画电影",
    "genre": "剧情/奇幻/恐怖",
    "tags": [
      "暗黑美学",
      "马戏团",
      "成长之痛",
      "猎奇"
    ],
    "oneLine": "失去至亲的少女流落诡异马戏团,在畸零人与幻象的夹缝中,走向一场毁灭性的成人礼。",
    "url": "./movies/movie-1172.html",
    "cover": "./122.jpg",
    "category": "热映精选",
    "categoryUrl": "./category-hot-picks.html"
  },
  {
    "id": "1173",
    "title": "为父进行式",
    "year": "2027",
    "region": "中国大陆",
    "type": "电影",
    "genre": "剧情家庭",
    "tags": [
      "父亲",
      "身份认同",
      "变性者",
      "催泪"
    ],
    "oneLine": "女儿婚礼前夕,“父亲”决定向她坦白:自己其实一直想成为女人,并已完成了变性手术。",
    "url": "./movies/movie-1173.html",
    "cover": "./123.jpg",
    "category": "热映精选",
    "categoryUrl": "./category-hot-picks.html"
  },
  {
    "id": "1174",
    "title": "缇萦",
    "year": "2025",
    "region": "中国",
    "type": "电影",
    "genre": "历史,剧情",
    "tags": [
      "女性力量",
      "汉代",
      "替父申冤"
    ],
    "oneLine": "十五岁少女缇萦,徒步千里赴长安,上书汉文帝,以一己之力改写了中国刑罚史。",
    "url": "./movies/movie-1174.html",
    "cover": "./124.jpg",
    "category": "院线热片",
    "categoryUrl": "./category-cinema-hits.html"
  },
  {
    "id": "1175",
    "title": "死灵之书",
    "year": "2028",
    "region": "美国",
    "type": "电影",
    "genre": "恐怖/奇幻/克苏鲁",
    "tags": [
      "克苏鲁",
      "H.P.洛夫克拉夫特",
      "恐怖",
      "古籍",
      "邪神"
    ],
    "oneLine": "一个古董商得到传说中的《死灵之书》,每翻开一页,书中描述的邪神就会在现实世界撕开一道裂缝。",
    "url": "./movies/movie-1175.html",
    "cover": "./125.jpg",
    "category": "全球佳作",
    "categoryUrl": "./category-global-stories.html"
  },
  {
    "id": "1176",
    "title": "解放明星",
    "year": "2025",
    "region": "韩国",
    "type": "电影",
    "genre": "惊悚,悬疑",
    "tags": [
      "娱乐圈",
      "密室",
      "粉丝文化",
      "反转"
    ],
    "oneLine": "顶流女明星的狂热私生饭绑架了她,却发现偶像早已被经纪公司控制,两人一起策划了更大的逃亡计划。",
    "url": "./movies/movie-1176.html",
    "cover": "./126.jpg",
    "category": "历史古装",
    "categoryUrl": "./category-history-costume.html"
  },
  {
    "id": "1177",
    "title": "河上的爱情",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "genre": "爱情/悬疑/文艺",
    "tags": [
      "长江",
      "书信",
      "年代",
      "宿命"
    ],
    "oneLine": "1990年代,长江客轮上,两个陌生男女互换了写给别人的情书,却开启了一场持续二十年的寻人。",
    "url": "./movies/movie-1177.html",
    "cover": "./127.jpg",
    "category": "院线热片",
    "categoryUrl": "./category-cinema-hits.html"
  },
  {
    "id": "1178",
    "title": "复仇好闺蜜",
    "year": "2026",
    "region": "韩国",
    "type": "剧集",
    "genre": "动作/犯罪/喜剧",
    "tags": [
      "双女主",
      "爽剧",
      "复仇",
      "姐妹情",
      "黑化"
    ],
    "oneLine": "被霸凌的软妹和被出轨的铁T,两个绝望的女人决定联手,用自己的方式制裁渣男和恶女。",
    "url": "./movies/movie-1178.html",
    "cover": "./128.jpg",
    "category": "家庭生活",
    "categoryUrl": "./category-family-life.html"
  },
  {
    "id": "1179",
    "title": "鬼咁够运粤语",
    "year": "2025",
    "region": "中国香港",
    "type": "电影",
    "genre": "喜剧,恐怖",
    "tags": [
      "粤语",
      "鬼魂",
      "彩票",
      "搞笑"
    ],
    "oneLine": "倒霉蛋阿强买彩票中了头奖,但必须完成一个女鬼的三个遗愿才能领奖。",
    "url": "./movies/movie-1179.html",
    "cover": "./129.jpg",
    "category": "青春喜剧",
    "categoryUrl": "./category-youth-comedy.html"
  },
  {
    "id": "1180",
    "title": "震精游戏",
    "year": "2016",
    "region": "中国香港",
    "type": "电影",
    "genre": "喜剧/悬疑/黑色幽默",
    "tags": [
      "游戏主播",
      "密室",
      "整蛊",
      "反转",
      "荒诞"
    ],
    "oneLine": "一个过气游戏主播接到神秘邀请,参加一场奖金千万的真人密室逃脱直播,却发现整座场馆是真实的致命游戏。",
    "url": "./movies/movie-1180.html",
    "cover": "./130.jpg",
    "category": "家庭生活",
    "categoryUrl": "./category-family-life.html"
  },
  {
    "id": "1181",
    "title": "吴山居事件账之燃骨",
    "year": "2024",
    "region": "中国大陆",
    "type": "网络电影",
    "genre": "悬疑,奇幻",
    "tags": [
      "盗墓",
      "笔记",
      "奇术"
    ],
    "oneLine": "吴山居收到一本离奇账册,记载着以骨燃灯、逆转生死的禁忌术法。",
    "url": "./movies/movie-1181.html",
    "cover": "./131.jpg",
    "category": "奇幻科幻",
    "categoryUrl": "./category-fantasy-sci-fi.html"
  },
  {
    "id": "1182",
    "title": "爱的初体验",
    "year": "2024",
    "region": "英国",
    "type": "剧集",
    "genre": "爱情/青春",
    "tags": [
      "校园",
      "LGBTQ+",
      "成长"
    ],
    "oneLine": "16岁的自闭症少年为了写歌,招募“爱情顾问团”,却意外陷入了真实的心动。",
    "url": "./movies/movie-1182.html",
    "cover": "./132.jpg",
    "category": "动作专区",
    "categoryUrl": "./category-action-zone.html"
  },
  {
    "id": "1183",
    "title": "兄弟同体",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "genre": "悬疑/犯罪",
    "tags": [
      "双重人格",
      "兄弟情",
      "复仇"
    ],
    "oneLine": "哥哥意外身亡后,弟弟发现自己能随时“上身”哥哥的身体,并被迫卷入一场谎言重重的遗产争夺战。",
    "url": "./movies/movie-1183.html",
    "cover": "./133.jpg",
    "category": "历史古装",
    "categoryUrl": "./category-history-costume.html"
  },
  {
    "id": "1184",
    "title": "12月7日",
    "year": "1943",
    "region": "美国",
    "type": "电影",
    "genre": "历史/纪录片/战争",
    "tags": [
      "二战纪实",
      "珍珠港",
      "黑白片",
      "宣传片"
    ],
    "oneLine": "珍珠港事件的真实影像重现,记录了美国海军舰队如何从废墟中怒吼着站起来的过程。",
    "url": "./movies/movie-1184.html",
    "cover": "./134.jpg",
    "category": "奇幻科幻",
    "categoryUrl": "./category-fantasy-sci-fi.html"
  },
  {
    "id": "1185",
    "title": "诈死神将",
    "year": "2026",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "古装/悬疑/战争",
    "tags": [
      "假死",
      "军师",
      "朝堂诡计"
    ],
    "oneLine": "被满门抄斩的少年将军假死逃生,十年后以敌国军师身份回到故国,展开一场精密的复仇。",
    "url": "./movies/movie-1185.html",
    "cover": "./135.jpg",
    "category": "全球佳作",
    "categoryUrl": "./category-global-stories.html"
  },
  {
    "id": "1186",
    "title": "切勿吞食",
    "year": "2023",
    "region": "中国台湾",
    "type": "电影",
    "genre": "恐怖/心理",
    "tags": [
      "都市怪谈",
      "诅咒",
      "厌食症",
      "身体恐怖",
      "直播"
    ],
    "oneLine": "一场网红瘦身直播挑战中,参赛者发现吞下的不是食物,而是能操控心智的古老虫卵。",
    "url": "./movies/movie-1186.html",
    "cover": "./136.jpg",
    "category": "家庭生活",
    "categoryUrl": "./category-family-life.html"
  },
  {
    "id": "1187",
    "title": "美丽缘未了",
    "year": "2023",
    "region": "中国香港",
    "type": "电影",
    "genre": "爱情剧情",
    "tags": [
      "错位人生",
      "绝症",
      "重逢",
      "遗憾",
      "治愈"
    ],
    "oneLine": "一场迟到二十年的同学会,揭开了一段被误诊拆散的初恋,命运的玩笑还能否挽回?",
    "url": "./movies/movie-1187.html",
    "cover": "./137.jpg",
    "category": "青春喜剧",
    "categoryUrl": "./category-youth-comedy.html"
  },
  {
    "id": "1188",
    "title": "心不在焉的服务生",
    "year": "2023",
    "region": "中国大陆",
    "type": "电影",
    "genre": "剧情,悬疑",
    "tags": [
      "心理",
      "都市传说",
      "失忆",
      "反转"
    ],
    "oneLine": "一个总记不住点单的服务生,发现自己可能是连环失踪案的唯一目击者。",
    "url": "./movies/movie-1188.html",
    "cover": "./138.jpg",
    "category": "历史古装",
    "categoryUrl": "./category-history-costume.html"
  },
  {
    "id": "1189",
    "title": "最后的幸存者",
    "year": "2026",
    "region": "美国",
    "type": "电影",
    "genre": "科幻,悬疑",
    "tags": [
      "末日",
      "烧脑",
      "反转",
      "克隆"
    ],
    "oneLine": "一场病毒灭世后,地球上最后一个人独自活了三年,直到某天,他听到了敲门声。",
    "url": "./movies/movie-1189.html",
    "cover": "./139.jpg",
    "category": "热映精选",
    "categoryUrl": "./category-hot-picks.html"
  },
  {
    "id": "1190",
    "title": "四二八粤语",
    "year": "2025",
    "region": "中国香港",
    "type": "电影",
    "genre": "悬疑/犯罪",
    "tags": [
      "粤语",
      "神秘数字",
      "警匪",
      "连环案",
      "心理"
    ],
    "oneLine": "四二八,在粤语中谐音“死易发”,一个用粤语谐音制造连环杀案的凶手,挑战整个警队。",
    "url": "./movies/movie-1190.html",
    "cover": "./140.jpg",
    "category": "剧集连看",
    "categoryUrl": "./category-drama-series.html"
  },
  {
    "id": "1191",
    "title": "半梦半醒的人生",
    "year": "2022",
    "region": "法国/比利时",
    "type": "电影",
    "genre": "剧情/奇幻/心理",
    "tags": [
      "梦境",
      "失眠",
      "自我救赎"
    ],
    "oneLine": "一个失眠的建筑师发现自己可以在别人的梦里建造建筑,但无法醒来。",
    "url": "./movies/movie-1191.html",
    "cover": "./141.jpg",
    "category": "都市爱情",
    "categoryUrl": "./category-romance-city.html"
  },
  {
    "id": "1192",
    "title": "哥布林杀手",
    "year": "2022",
    "region": "日本",
    "type": "TV剧集",
    "genre": "奇幻、冒险",
    "tags": [
      "哥布林",
      "复仇",
      "战术"
    ],
    "oneLine": "边境村庄遭哥布林血洗,一名神秘银等级冒险者只接哥布林讨伐任务。",
    "url": "./movies/movie-1192.html",
    "cover": "./142.jpg",
    "category": "动作专区",
    "categoryUrl": "./category-action-zone.html"
  },
  {
    "id": "1193",
    "title": "醉佳导演",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "genre": "喜剧/剧情",
    "tags": [
      "默片",
      "民国",
      "黑马",
      "小成本",
      "戏中戏"
    ],
    "oneLine": "一个郁郁不得志的民国导演,带着一群醉醺醺的演员拍默片,却意外拍出了一部影史经典。",
    "url": "./movies/movie-1193.html",
    "cover": "./143.jpg",
    "category": "动作专区",
    "categoryUrl": "./category-action-zone.html"
  },
  {
    "id": "1194",
    "title": "特警009国语",
    "year": "2019",
    "region": "中国内地",
    "type": "电视剧",
    "genre": "动作警匪",
    "tags": [
      "反恐",
      "兄弟连",
      "热血",
      "高科技犯罪"
    ],
    "oneLine": "代号009的特警小队遭遇内鬼背叛,全员陷入境外佣兵团的死亡陷阱。",
    "url": "./movies/movie-1194.html",
    "cover": "./144.jpg",
    "category": "经典片库",
    "categoryUrl": "./category-classic-library.html"
  },
  {
    "id": "1195",
    "title": "白云山传奇",
    "year": "2026",
    "region": "中国大陆",
    "type": "电影",
    "genre": "古装,武侠",
    "tags": [
      "复仇",
      "道家",
      "剑术"
    ],
    "oneLine": "白云山道观大火后,唯一的聋哑小道童带着一把木剑下山,向五位名门正派掌门讨一个公道。",
    "url": "./movies/movie-1195.html",
    "cover": "./145.jpg",
    "category": "青春喜剧",
    "categoryUrl": "./category-youth-comedy.html"
  },
  {
    "id": "1196",
    "title": "黑之契约者2:流星的双子",
    "year": "2009",
    "region": "日本",
    "type": "动漫",
    "genre": "动作,科幻,悬疑",
    "tags": [
      "超能力",
      "组织对抗",
      "末日氛围"
    ],
    "oneLine": "东京出现能实现愿望的“流星碎片”,契约者黑与少女苏芳踏上复仇与救赎之旅。",
    "url": "./movies/movie-1196.html",
    "cover": "./146.jpg",
    "category": "剧集连看",
    "categoryUrl": "./category-drama-series.html"
  },
  {
    "id": "1197",
    "title": "戴洛奇小镇第一季",
    "year": "2024",
    "region": "澳大利亚",
    "type": "剧集",
    "genre": "悬疑/犯罪/喜剧",
    "tags": [
      "塔斯马尼亚",
      "连环谋杀",
      "女性警探"
    ],
    "oneLine": "塔斯马尼亚风景如画的小镇惊现裸体男尸,两位女警探发现,全镇的女人似乎都在共享同一个秘密。",
    "url": "./movies/movie-1197.html",
    "cover": "./147.jpg",
    "category": "热映精选",
    "categoryUrl": "./category-hot-picks.html"
  },
  {
    "id": "1198",
    "title": "寻找微尘",
    "year": "2020",
    "region": "中国大陆",
    "type": "电视剧",
    "genre": "剧情,家庭",
    "tags": [
      "寻亲",
      "温情",
      "社会现实"
    ],
    "oneLine": "为了找到捐骨髓救他的人,自闭症少年踏上了穿越半个中国的旅程。",
    "url": "./movies/movie-1198.html",
    "cover": "./148.jpg",
    "category": "都市爱情",
    "categoryUrl": "./category-romance-city.html"
  },
  {
    "id": "1199",
    "title": "夏终年与顾平生",
    "year": "2025",
    "region": "中国大陆",
    "type": "电视剧",
    "genre": "爱情,剧情",
    "tags": [
      "青春",
      "暗恋",
      "久别重逢",
      "医生",
      "催泪"
    ],
    "oneLine": "高中时偷偷写下100封情书的女孩夏终年,在成为临终关怀志愿者后,重逢了已是肿瘤科医生的初恋顾平生。",
    "url": "./movies/movie-1199.html",
    "cover": "./149.jpg",
    "category": "青春喜剧",
    "categoryUrl": "./category-youth-comedy.html"
  },
  {
    "id": "1200",
    "title": "烈日绝杀",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "genre": "犯罪/动作",
    "tags": [
      "西部荒漠",
      "狙击手对决",
      "复仇",
      "硬核枪战",
      "人性考验"
    ],
    "oneLine": "烈日下的戈壁滩,退役狙击手与境外雇佣兵展开一场72小时无补给生死猎杀。",
    "url": "./movies/movie-1200.html",
    "cover": "./150.jpg",
    "category": "历史古装",
    "categoryUrl": "./category-history-costume.html"
  },
  {
    "id": "1201",
    "title": "洛杉矶之战",
    "year": "2026",
    "region": "美国",
    "type": "电影",
    "genre": "动作、科幻、战争",
    "tags": [
      "外星入侵",
      "街头巷战",
      "硬核枪战"
    ],
    "oneLine": "外星人入侵洛杉矶,一支海军陆战队小队必须在断壁残垣中杀出一条血路。",
    "url": "./movies/movie-1201.html",
    "cover": "./1.jpg",
    "category": "奇幻科幻",
    "categoryUrl": "./category-fantasy-sci-fi.html"
  },
  {
    "id": "1202",
    "title": "托马斯",
    "year": "2025",
    "region": "法国",
    "type": "电影",
    "genre": "剧情,悬疑",
    "tags": [
      "自闭症",
      "目击证人",
      "小镇疑云",
      "非正常叙事",
      "心理"
    ],
    "oneLine": "一位患有自闭症的少年托马斯,成为一起小镇谋杀案的唯一目击者,但他的证词没人能懂。",
    "url": "./movies/movie-1202.html",
    "cover": "./2.jpg",
    "category": "悬疑夜场",
    "categoryUrl": "./category-suspense-night.html"
  },
  {
    "id": "1203",
    "title": "暗芝居第十一季",
    "year": "2026",
    "region": "日本",
    "type": "剧集/动画",
    "genre": "恐怖/动画/悬疑",
    "tags": [
      "都市传说",
      "短篇集",
      "纸芝居",
      "心理"
    ],
    "oneLine": "本季主题“日常侵蚀”:每一个短篇都始于绝对平静的日常,终于被一个微小异常彻底吞噬的灵魂。",
    "url": "./movies/movie-1203.html",
    "cover": "./3.jpg",
    "category": "青春喜剧",
    "categoryUrl": "./category-youth-comedy.html"
  },
  {
    "id": "1204",
    "title": "巴黎单身公寓",
    "year": "2024",
    "region": "法国",
    "type": "电影",
    "genre": "爱情/喜剧/剧情",
    "tags": [
      "浪漫",
      "法式",
      "邻里",
      "邂逅",
      "生活流"
    ],
    "oneLine": "为了守住逝去姑姑的租金管控公寓,一个中年单身汉不得不假装自己是同性恋,与一个陌生男人同居。",
    "url": "./movies/movie-1204.html",
    "cover": "./4.jpg",
    "category": "青春喜剧",
    "categoryUrl": "./category-youth-comedy.html"
  },
  {
    "id": "1205",
    "title": "寡妇思春",
    "year": "2026",
    "region": "韩国",
    "type": "电影",
    "genre": "爱情/情色/剧情",
    "tags": [
      "禁忌之恋",
      "年下",
      "压抑与释放",
      "女性视角"
    ],
    "oneLine": "守寡十年的贵族夫人,爱上了自己已故丈夫的私生子弟弟,一场震动宗族的爱欲风暴来袭。",
    "url": "./movies/movie-1205.html",
    "cover": "./5.jpg",
    "category": "经典片库",
    "categoryUrl": "./category-classic-library.html"
  },
  {
    "id": "1206",
    "title": "公交司机的蜜月",
    "year": "2025",
    "region": "中国大陆",
    "type": "电影",
    "genre": "爱情,喜剧,公路",
    "tags": [
      "自驾游",
      "乌龙事件",
      "前任相遇"
    ],
    "oneLine": "公交司机阿勇开着他的报废巴士带新娘自驾蜜月,半路不仅车子散架,还撞上了新娘那开跑车的前男友。",
    "url": "./movies/movie-1206.html",
    "cover": "./6.jpg",
    "category": "全球佳作",
    "categoryUrl": "./category-global-stories.html"
  },
  {
    "id": "1207",
    "title": "蠢爱三人行",
    "year": "2024",
    "region": "法国",
    "type": "电影",
    "genre": "喜剧/爱情",
    "tags": [
      "三角恋",
      "幽默",
      "误会"
    ],
    "oneLine": "三个室友互相暗恋,但每个人都以为对方喜欢的是第四个人。",
    "url": "./movies/movie-1207.html",
    "cover": "./7.jpg",
    "category": "热映精选",
    "categoryUrl": "./category-hot-picks.html"
  },
  {
    "id": "1208",
    "title": "海宫艳盗",
    "year": "1964",
    "region": "中国香港",
    "type": "电影",
    "genre": "武侠,古装,冒险",
    "tags": [
      "邵氏风格",
      "海底龙宫",
      "侠盗",
      "奇门遁甲"
    ],
    "oneLine": "明朝侠盗潜入传说中的东海“海宫”盗取夜明珠,却发现宫殿里关押的不是宝藏,而是被诅咒的前朝公主。",
    "url": "./movies/movie-1208.html",
    "cover": "./8.jpg",
    "category": "奇幻科幻",
    "categoryUrl": "./category-fantasy-sci-fi.html"
  },
  {
    "id": "1209",
    "title": "永恒的友谊",
    "year": "1959",
    "region": "中国大陆/朝鲜",
    "type": "电影",
    "genre": "剧情,战争,历史",
    "tags": [
      "抗美援朝",
      "中朝友谊",
      "黑白片",
      "战争",
      "兄弟情"
    ],
    "oneLine": "抗美援朝战场上,一名志愿军炊事班老兵和一名朝鲜人民军少年,在炮火中用一口锅结下生死友谊。",
    "url": "./movies/movie-1209.html",
    "cover": "./9.jpg",
    "category": "剧集连看",
    "categoryUrl": "./category-drama-series.html"
  },
  {
    "id": "1210",
    "title": "奉旨成亲粤语",
    "year": "2024",
    "region": "中国香港",
    "type": "剧集",
    "genre": "喜剧/古装/爱情",
    "tags": [
      "粤语",
      "甜宠",
      "女强",
      "搞笑"
    ],
    "oneLine": "圣旨砸头,泼辣女镖师被迫嫁给病弱贵公子,一个想退婚,一个想气死对方。",
    "url": "./movies/movie-1210.html",
    "cover": "./10.jpg",
    "category": "全球佳作",
    "categoryUrl": "./category-global-stories.html"
  },
  {
    "id": "1211",
    "title": "神探罗蒙3",
    "year": "2025",
    "region": "中国",
    "type": "电影",
    "genre": "悬疑/动作",
    "tags": [
      "天才侦探",
      "记忆宫殿",
      "澳门风云"
    ],
    "oneLine": "天才侦探罗蒙重出江湖,在澳门赌场调查一件失窃国宝,却发现自己被植入了一段虚假的记忆。",
    "url": "./movies/movie-1211.html",
    "cover": "./11.jpg",
    "category": "青春喜剧",
    "categoryUrl": "./category-youth-comedy.html"
  },
  {
    "id": "1212",
    "title": "浴火",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "genre": "犯罪/动作",
    "tags": [
      "消防",
      "卧底",
      "爆炸",
      "兄弟情"
    ],
    "oneLine": "一场化工园爆炸,让失联五年的消防员哥哥和特警弟弟在火场相遇,兄弟中却有一人已被毒枭替换。",
    "url": "./movies/movie-1212.html",
    "cover": "./12.jpg",
    "category": "历史古装",
    "categoryUrl": "./category-history-costume.html"
  },
  {
    "id": "1213",
    "title": "夏",
    "year": "2020",
    "region": "日本",
    "type": "电影",
    "genre": "剧情/同性/青春",
    "tags": [
      "夏日",
      "少年",
      "隐秘情愫",
      "文艺",
      "遗憾美学"
    ],
    "oneLine": "那个夏天,他们约定一起去海边。一个去了,另一个再也没有出现。",
    "url": "./movies/movie-1213.html",
    "cover": "./13.jpg",
    "category": "都市爱情",
    "categoryUrl": "./category-romance-city.html"
  },
  {
    "id": "1214",
    "title": "激情燃烧的岁月2",
    "year": "2024",
    "region": "中国大陆",
    "type": "电视剧",
    "genre": "年代,家庭,军旅",
    "tags": [
      "20世纪80年代",
      "父子矛盾",
      "改革浪潮",
      "怀旧"
    ],
    "oneLine": "父亲是老革命,儿子却下海经商,改革开放大潮中,一个家庭两代人的信仰碰撞。",
    "url": "./movies/movie-1214.html",
    "cover": "./14.jpg",
    "category": "青春喜剧",
    "categoryUrl": "./category-youth-comedy.html"
  },
  {
    "id": "1215",
    "title": "幻影追凶",
    "year": "2024",
    "region": "中国香港",
    "type": "电影",
    "genre": "警匪动作",
    "tags": [
      "卧底",
      "双重人格",
      "枪战",
      "兄弟情"
    ],
    "oneLine": "卧底警察以为自己终于抓住了黑帮老大,结果对方是他分裂出的第二人格。",
    "url": "./movies/movie-1215.html",
    "cover": "./15.jpg",
    "category": "家庭生活",
    "categoryUrl": "./category-family-life.html"
  },
  {
    "id": "1216",
    "title": "人口零增长",
    "year": "2027",
    "region": "英国",
    "type": "电影",
    "genre": "悬疑/惊悚/科幻",
    "tags": [
      "反乌托邦",
      "生育禁令",
      "地下反抗",
      "生理恐惧"
    ],
    "oneLine": "为了环保,政府颁布“快乐死亡法”,每有一人出生,就必须有一名志愿者安乐死。",
    "url": "./movies/movie-1216.html",
    "cover": "./16.jpg",
    "category": "历史古装",
    "categoryUrl": "./category-history-costume.html"
  },
  {
    "id": "1217",
    "title": "偷情恨",
    "year": "2026",
    "region": "中国台湾",
    "type": "电视剧",
    "genre": "剧情/家庭/伦理",
    "tags": [
      "出轨",
      "复仇",
      "婚姻伦理",
      "虐恋"
    ],
    "oneLine": "妻子发现丈夫出轨后没有哭闹,而是悄悄成为了小三最信任的“闺蜜”。",
    "url": "./movies/movie-1217.html",
    "cover": "./17.jpg",
    "category": "悬疑夜场",
    "categoryUrl": "./category-suspense-night.html"
  },
  {
    "id": "1218",
    "title": "寂寞的心灵",
    "year": "2025",
    "region": "日本",
    "type": "电影",
    "genre": "剧情/家庭/心理",
    "tags": [
      "独居老人",
      "孤独死",
      "社区连接",
      "治愈",
      "现实主义"
    ],
    "oneLine": "东京独居老人山田先生每天假装有人在家,直到对面公寓搬来一个偷窥他生活的年轻女孩。",
    "url": "./movies/movie-1218.html",
    "cover": "./18.jpg",
    "category": "全球佳作",
    "categoryUrl": "./category-global-stories.html"
  },
  {
    "id": "1219",
    "title": "猛龙怪客4:镇压",
    "year": "2026",
    "region": "美国",
    "type": "电影",
    "genre": "动作/犯罪",
    "tags": [
      "硬汉",
      "反乌托邦",
      "私刑执法"
    ],
    "oneLine": "当政府用AI机器人戒严城市时,当年的私刑复仇者成了唯一能对抗系统的“恐怖分子”。",
    "url": "./movies/movie-1219.html",
    "cover": "./19.jpg",
    "category": "经典片库",
    "categoryUrl": "./category-classic-library.html"
  },
  {
    "id": "1220",
    "title": "后院活宝第一季",
    "year": "2010",
    "region": "加拿大",
    "type": "TV剧集",
    "genre": "动画,冒险,喜剧",
    "tags": [
      "低幼向",
      "音乐剧",
      "动物",
      "想象力"
    ],
    "oneLine": "五个拥有神奇腰带的后院小伙伴,随时将草坪变成惊险的冒险王国。",
    "url": "./movies/movie-1220.html",
    "cover": "./20.jpg",
    "category": "悬疑夜场",
    "categoryUrl": "./category-suspense-night.html"
  },
  {
    "id": "1221",
    "title": "春光破碎",
    "year": "2025",
    "region": "中国香港/法国",
    "type": "电影",
    "genre": "文艺/爱情",
    "tags": [
      "王家卫风格",
      "时间错位",
      "都市孤独",
      "迷幻",
      "邂逅"
    ],
    "oneLine": "一个患有时间失认症的男人,在无数次与同一位女子错过后又重逢,却发现她只存在于他破碎的时钟里。",
    "url": "./movies/movie-1221.html",
    "cover": "./21.jpg",
    "category": "院线热片",
    "categoryUrl": "./category-cinema-hits.html"
  },
  {
    "id": "1222",
    "title": "轮回:疯狂时代",
    "year": "2025",
    "region": "中国大陆",
    "type": "动画剧集",
    "genre": "奇幻/喜剧/悬疑",
    "tags": [
      "时间循环",
      "职场",
      "荒诞",
      "黑色幽默",
      "解构"
    ],
    "oneLine": "一个普通上班族被困在同一天,但他发现这一天里所有人都陷入了集体疯狂。",
    "url": "./movies/movie-1222.html",
    "cover": "./22.jpg",
    "category": "奇幻科幻",
    "categoryUrl": "./category-fantasy-sci-fi.html"
  },
  {
    "id": "1223",
    "title": "神威天使",
    "year": "2027",
    "region": "美国",
    "type": "电影",
    "genre": "动作/奇幻",
    "tags": [
      "女英雄",
      "天使",
      "枪战",
      "神魔"
    ],
    "oneLine": "天堂堕天使混入洛杉矶黑帮,用双枪替上帝收回不该死之人的灵魂。",
    "url": "./movies/movie-1223.html",
    "cover": "./23.jpg",
    "category": "院线热片",
    "categoryUrl": "./category-cinema-hits.html"
  },
  {
    "id": "1224",
    "title": "超级少女第六季",
    "year": "2021",
    "region": "美国",
    "type": "剧集",
    "genre": "科幻,动作,冒险",
    "tags": [
      "DC",
      "超级英雄",
      "幻影地带",
      "最终季",
      "自我认同"
    ],
    "oneLine": "超级少女被困幻影地带,没有超能力的她必须在意识迷宫中直面童年创伤。",
    "url": "./movies/movie-1224.html",
    "cover": "./24.jpg",
    "category": "剧集连看",
    "categoryUrl": "./category-drama-series.html"
  },
  {
    "id": "1225",
    "title": "福斯特对话尼克松",
    "year": "2024",
    "region": "英国",
    "type": "电影",
    "genre": "历史",
    "tags": [
      "政治访谈",
      "心理学攻防",
      "台词爆炸"
    ],
    "oneLine": "1977 年,英国脱口秀主持人大卫·福斯特自掏腰包 20 万美元,去加州采访水门事件后沉默了两年的尼克松。",
    "url": "./movies/movie-1225.html",
    "cover": "./25.jpg",
    "category": "悬疑夜场",
    "categoryUrl": "./category-suspense-night.html"
  },
  {
    "id": "1226",
    "title": "高山上的热气球",
    "year": "2025",
    "region": "尼泊尔/中国大陆",
    "type": "电影",
    "genre": "剧情/冒险/治愈",
    "tags": [
      "热气球",
      "珠峰",
      "遗愿清单",
      "绝症",
      "救赎"
    ],
    "oneLine": "一个得了绝症只想跳山自杀的老头,在珠峰大本营遇到了一个来放飞亡妻骨灰的年轻人,两人修好了一个破热气球。",
    "url": "./movies/movie-1226.html",
    "cover": "./26.jpg",
    "category": "剧集连看",
    "categoryUrl": "./category-drama-series.html"
  },
  {
    "id": "1227",
    "title": "女学生和亨利先生",
    "year": "2025",
    "region": "英国",
    "type": "电影",
    "genre": "爱情,剧情",
    "tags": [
      "师生恋",
      "禁忌",
      "维多利亚时代",
      "道德困境",
      "悲剧"
    ],
    "oneLine": "1880年,牛津大学唯一的女学生爱上了她的古典学教授亨利先生,而教授已婚且有精神病的妻子。",
    "url": "./movies/movie-1227.html",
    "cover": "./27.jpg",
    "category": "经典片库",
    "categoryUrl": "./category-classic-library.html"
  },
  {
    "id": "1228",
    "title": "沉默的孩子",
    "year": "2026",
    "region": "中国大陆",
    "type": "电影",
    "genre": "家庭悬疑",
    "tags": [
      "选择性缄默症",
      "家庭秘密",
      "留守儿童",
      "心理",
      "反转 儿童心理",
      "乡村悬疑",
      "家暴隐喻",
      "绘画破案",
      "催泪"
    ],
    "oneLine": "一个三年不说话的女孩,用画笔揭露了母亲失踪的真相,但所有人都说那幅画是她想象的。",
    "url": "./movies/movie-1228.html",
    "cover": "./28.jpg",
    "category": "家庭生活",
    "categoryUrl": "./category-family-life.html"
  },
  {
    "id": "1229",
    "title": "铁血战士:杀戮之王",
    "year": "2028",
    "region": "美国",
    "type": "电影",
    "genre": "动作、科幻、恐怖",
    "tags": [
      "铁血战士",
      "狩猎",
      "古罗马"
    ],
    "oneLine": "铁血战士将一群古罗马角斗士和现代特种兵传送到同一座外星竞技场,让他们与终极异形杂交体决斗。",
    "url": "./movies/movie-1229.html",
    "cover": "./29.jpg",
    "category": "动作专区",
    "categoryUrl": "./category-action-zone.html"
  },
  {
    "id": "1230",
    "title": "终极铁战士",
    "year": "2026",
    "region": "美国",
    "type": "电影",
    "genre": "动作,科幻,惊悚",
    "tags": [
      "机甲",
      "改造人",
      "反乌托邦",
      "硬核",
      "暴力美学"
    ],
    "oneLine": "退役铁甲战士被植入虚假记忆,醒来后发现他要暗杀的目标竟是自己的女儿。",
    "url": "./movies/movie-1230.html",
    "cover": "./30.jpg",
    "category": "青春喜剧",
    "categoryUrl": "./category-youth-comedy.html"
  },
  {
    "id": "1231",
    "title": "我爱爱爱你",
    "year": "2024",
    "region": "中国香港",
    "type": "电影",
    "genre": "爱情,剧情,青春",
    "tags": [
      "遗憾文学",
      "错位时空",
      "深夜电台",
      "暗恋十年"
    ],
    "oneLine": "他每晚都在深夜电台为一位从不露面的女孩点同一首歌,第3650天,接电话的却是她的未婚夫。",
    "url": "./movies/movie-1231.html",
    "cover": "./31.jpg",
    "category": "剧集连看",
    "categoryUrl": "./category-drama-series.html"
  },
  {
    "id": "1232",
    "title": "象棋的故事",
    "year": "2024",
    "region": "奥地利/德国",
    "type": "电影",
    "genre": "剧情历史",
    "tags": [
      "二战",
      "纳粹",
      "心理战",
      "象棋",
      "孤独"
    ],
    "oneLine": "被纳粹单独囚禁的律师,靠着偷来的一本棋谱在脑中与自己对弈了两年,最终精神分裂。",
    "url": "./movies/movie-1232.html",
    "cover": "./32.jpg",
    "category": "青春喜剧",
    "categoryUrl": "./category-youth-comedy.html"
  },
  {
    "id": "1233",
    "title": "抢救巴迪",
    "year": "2024",
    "region": "美国",
    "type": "电影",
    "genre": "剧情/喜剧/冒险",
    "tags": [
      "宠物",
      "公路片",
      "老年人与狗",
      "温情",
      "催泪"
    ],
    "oneLine": "80岁的老太太为了给爱犬巴迪换肾,开着一辆破房车横穿美国,在路上遇到了三个同样“被抛弃”的人。",
    "url": "./movies/movie-1233.html",
    "cover": "./33.jpg",
    "category": "悬疑夜场",
    "categoryUrl": "./category-suspense-night.html"
  },
  {
    "id": "1234",
    "title": "探寻鲸之音",
    "year": "2023",
    "region": "美国",
    "type": "电影",
    "genre": "纪录片,冒险",
    "tags": [
      "海洋探险",
      "声学",
      "治愈系"
    ],
    "oneLine": "失聪录音师潜入万米海沟,只为录下那头52赫兹鲸的真实歌声。",
    "url": "./movies/movie-1234.html",
    "cover": "./34.jpg",
    "category": "院线热片",
    "categoryUrl": "./category-cinema-hits.html"
  },
  {
    "id": "1235",
    "title": "海陆悍将4",
    "year": "2025",
    "region": "美国",
    "type": "电影",
    "genre": "动作/战争",
    "tags": [
      "特种兵",
      "海上营救",
      "硬汉",
      "续集"
    ],
    "oneLine": "退役悍将再次被召回,这次要驾驶实验性潜艇从深海恐怖组织手中救出联合国人质。",
    "url": "./movies/movie-1235.html",
    "cover": "./35.jpg",
    "category": "奇幻科幻",
    "categoryUrl": "./category-fantasy-sci-fi.html"
  },
  {
    "id": "1236",
    "title": "美国派:兄弟会",
    "year": "2024",
    "region": "美国",
    "type": "电影",
    "genre": "喜剧",
    "tags": [
      "青春",
      "校园",
      "恶搞",
      "成长"
    ],
    "oneLine": "为了保住濒临解散的兄弟会,四个书呆子决定办一场全校史上最离谱的派对。",
    "url": "./movies/movie-1236.html",
    "cover": "./36.jpg",
    "category": "都市爱情",
    "categoryUrl": "./category-romance-city.html"
  },
  {
    "id": "1237",
    "title": "七年很痒",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "genre": "喜剧/爱情",
    "tags": [
      "婚姻",
      "七年之痒",
      "搞笑",
      "职场",
      "中年危机"
    ],
    "oneLine": "结婚七周年当天,夫妻俩同时找上同一家离婚咨询公司,却因为VIP会员卡拼单而尴尬重逢。",
    "url": "./movies/movie-1237.html",
    "cover": "./37.jpg",
    "category": "悬疑夜场",
    "categoryUrl": "./category-suspense-night.html"
  },
  {
    "id": "1238",
    "title": "日常系的异能战斗",
    "year": "2024",
    "region": "日本",
    "type": "动画剧集",
    "genre": "喜剧/奇幻/日常",
    "tags": [
      "超能力",
      "高中生",
      "社团",
      "沙雕",
      "反套路"
    ],
    "oneLine": "文艺部七人突然觉醒超能力,但最强的“时空停止”只能用来赶作业,“火焰操控”只能热便当。",
    "url": "./movies/movie-1238.html",
    "cover": "./38.jpg",
    "category": "都市爱情",
    "categoryUrl": "./category-romance-city.html"
  },
  {
    "id": "1239",
    "title": "历尽沧桑一妇人",
    "year": "1986",
    "region": "中国香港",
    "type": "电影",
    "genre": "剧情,家庭,伦理",
    "tags": [
      "女性史诗",
      "时代变迁",
      "港风怀旧",
      "母爱无私"
    ],
    "oneLine": "50年代的庙街妓女,为了养活捡来的四个孤儿,用尽了一生的力气,当她白发苍苍时,孩子们却为了财产将她告上法庭。",
    "url": "./movies/movie-1239.html",
    "cover": "./39.jpg",
    "category": "全球佳作",
    "categoryUrl": "./category-global-stories.html"
  },
  {
    "id": "1240",
    "title": "开心鬼2之开心鬼放暑假",
    "year": "1985",
    "region": "中国香港",
    "type": "电影",
    "genre": "喜剧,奇幻,校园",
    "tags": [
      "开心鬼系列",
      "校园喜剧",
      "老师",
      "超能力"
    ],
    "oneLine": "开心鬼转世成为女校的老师,用超能力管教一群调皮捣蛋的学生,笑料百出。",
    "url": "./movies/movie-1240.html",
    "cover": "./40.jpg",
    "category": "院线热片",
    "categoryUrl": "./category-cinema-hits.html"
  },
  {
    "id": "1241",
    "title": "死亡幻觉2",
    "year": "2029",
    "region": "美国",
    "type": "电影",
    "genre": "科幻/悬疑/惊悚",
    "tags": [
      "平行宇宙",
      "烧脑",
      "续作",
      "时间循环"
    ],
    "oneLine": "前作女主角的妹妹在成年后意外重启了“死控通道”,却发现每一轮修正都会让另一个宇宙的自己痛苦死去。",
    "url": "./movies/movie-1241.html",
    "cover": "./41.jpg",
    "category": "院线热片",
    "categoryUrl": "./category-cinema-hits.html"
  },
  {
    "id": "1242",
    "title": "拇指姑娘",
    "year": "2026",
    "region": "美国",
    "type": "电影",
    "genre": "奇幻,冒险,成长",
    "tags": [
      "微观世界",
      "森林冒险",
      "女性成长",
      "现代改编"
    ],
    "oneLine": "被缩小的叛逆少女在自家后花园里建立昆虫王国,却意外卷入一场颠覆生态的阴谋。",
    "url": "./movies/movie-1242.html",
    "cover": "./42.jpg",
    "category": "悬疑夜场",
    "categoryUrl": "./category-suspense-night.html"
  },
  {
    "id": "1243",
    "title": "我的家人和其他动物",
    "year": "2005",
    "region": "英国",
    "type": "电影",
    "genre": "喜剧,传记,家庭",
    "tags": [
      "动物",
      "童年",
      "英式幽默",
      "自传"
    ],
    "oneLine": "一个古怪家族搬到希腊小岛后,小儿子只跟动物说话,全家人逐渐活成了动物园。",
    "url": "./movies/movie-1243.html",
    "cover": "./43.jpg",
    "category": "剧集连看",
    "categoryUrl": "./category-drama-series.html"
  },
  {
    "id": "1244",
    "title": "的士飚花",
    "year": "2004",
    "region": "美国",
    "type": "电影",
    "genre": "动作,喜剧,犯罪",
    "tags": [
      "出租车",
      "女司机",
      "飙车",
      "抢劫",
      "纽约"
    ],
    "oneLine": "纽约最能侃的黑人女出租车司机,载了一位帅气的卧底警察,被迫在晚高峰的曼哈顿上演时速狂飙追悍匪。",
    "url": "./movies/movie-1244.html",
    "cover": "./44.jpg",
    "category": "历史古装",
    "categoryUrl": "./category-history-costume.html"
  },
  {
    "id": "1245",
    "title": "逆流的色彩",
    "year": "2024",
    "region": "美国/法国",
    "type": "剧情/科幻",
    "genre": "文艺科幻/爱情",
    "tags": [
      "时间倒流",
      "色彩隐喻",
      "意识流",
      "文艺片"
    ],
    "oneLine": "一对恋人突然发现,他们看到的颜色顺序在倒流,而世界正慢慢褪成黑白。",
    "url": "./movies/movie-1245.html",
    "cover": "./45.jpg",
    "category": "全球佳作",
    "categoryUrl": "./category-global-stories.html"
  },
  {
    "id": "1246",
    "title": "交换肌肤",
    "year": "2025",
    "region": "法国/比利时",
    "type": "电影",
    "genre": "剧情、科幻",
    "tags": [
      "身体交换",
      "婚姻",
      "痛感",
      "亲密关系"
    ],
    "oneLine": "一对感情破裂的夫妻参加“交换肌肤”实验,各自换上对方身体后才发现,原来对方每天都在忍受不同的疼痛。",
    "url": "./movies/movie-1246.html",
    "cover": "./46.jpg",
    "category": "悬疑夜场",
    "categoryUrl": "./category-suspense-night.html"
  },
  {
    "id": "1247",
    "title": "生命奇色",
    "year": "2026",
    "region": "法国",
    "type": "电影",
    "genre": "剧情,奇幻",
    "tags": [
      "视觉盛宴",
      "色彩",
      "绝症",
      "治愈",
      "重生"
    ],
    "oneLine": "色盲画家被告知只剩百日寿命,注射实验药物后,他竟能看到世间从未见过的色彩,但也看到了死亡的具象。",
    "url": "./movies/movie-1247.html",
    "cover": "./47.jpg",
    "category": "家庭生活",
    "categoryUrl": "./category-family-life.html"
  },
  {
    "id": "1248",
    "title": "燃情克利夫兰第五季",
    "year": "2014",
    "region": "美国",
    "type": "真人剧集",
    "genre": "喜剧/情景/女性",
    "tags": [
      "熟女闺蜜",
      "笑对中年",
      "毒舌金句"
    ],
    "oneLine": "三位洛杉矶熟女因为飞机迫降留在了克利夫兰,她们在与房东老太太的斗嘴中重新定义四十岁的人生。",
    "url": "./movies/movie-1248.html",
    "cover": "./48.jpg",
    "category": "青春喜剧",
    "categoryUrl": "./category-youth-comedy.html"
  },
  {
    "id": "1249",
    "title": "一起听团吧",
    "year": "2024",
    "region": "中国台湾",
    "type": "综艺",
    "genre": "音乐,真人秀,竞赛",
    "tags": [
      "乐团",
      "竞演",
      "改编",
      "独立音乐",
      "情怀"
    ],
    "oneLine": "十组解散多年的传奇独立乐团限时重组,争夺“世纪复出”资格,但旧日恩怨比新歌更难搞定。",
    "url": "./movies/movie-1249.html",
    "cover": "./49.jpg",
    "category": "动作专区",
    "categoryUrl": "./category-action-zone.html"
  },
  {
    "id": "1250",
    "title": "我盛大的希腊婚礼2",
    "year": "2016",
    "region": "美国",
    "type": "电影",
    "genre": "喜剧/爱情",
    "tags": [
      "家庭",
      "文化冲突",
      "浪漫",
      "婚礼"
    ],
    "oneLine": "当图拉发现父母结婚证明无效时,一场比第一场更盛大、更混乱的希腊婚礼再度上演。",
    "url": "./movies/movie-1250.html",
    "cover": "./50.jpg",
    "category": "悬疑夜场",
    "categoryUrl": "./category-suspense-night.html"
  },
  {
    "id": "1251",
    "title": "电影人",
    "year": "2026",
    "region": "中国香港",
    "type": "电影",
    "genre": "剧情",
    "tags": [
      "行业自反",
      "逐梦",
      "龙套"
    ],
    "oneLine": "一个在片场跑了十年龙套的中年特约演员,在接到人生第一个男主角剧本时,发现剧本写的正是自己荒诞的前半生。",
    "url": "./movies/movie-1251.html",
    "cover": "./51.jpg",
    "category": "家庭生活",
    "categoryUrl": "./category-family-life.html"
  },
  {
    "id": "1252",
    "title": "爱的猎犬",
    "year": "2024",
    "region": "澳大利亚",
    "type": "电影",
    "genre": "惊悚,犯罪",
    "tags": [
      "畸恋",
      "囚禁",
      "女性反杀",
      "荒野"
    ],
    "oneLine": "一对情侣专门在公路上绑架独自驾车的女性,他们的猎犬负责追捕逃跑者,直到他们抓到了一个“从地狱回来的女人”。",
    "url": "./movies/movie-1252.html",
    "cover": "./52.jpg",
    "category": "热映精选",
    "categoryUrl": "./category-hot-picks.html"
  },
  {
    "id": "1253",
    "title": "公主罗曼史",
    "year": "2022",
    "region": "韩国",
    "type": "电视剧",
    "genre": "爱情,奇幻",
    "tags": [
      "穿越",
      "王室",
      "契约恋爱",
      "喜剧"
    ],
    "oneLine": "朝鲜王朝的倔强公主意外穿越到首尔,与高冷离婚律师展开爆笑同居。",
    "url": "./movies/movie-1253.html",
    "cover": "./53.jpg",
    "category": "历史古装",
    "categoryUrl": "./category-history-costume.html"
  },
  {
    "id": "1254",
    "title": "暴走曼哈顿",
    "year": "2022",
    "region": "美国",
    "type": "电影",
    "genre": "动作,惊悚",
    "tags": [
      "极限运动",
      "跑酷",
      "复仇",
      "手机直播"
    ],
    "oneLine": "一名被陷害的前特种兵,必须在24小时内穿越整个曼哈顿,而他的每一个举动都被黑进手机的网络罪犯全球直播。",
    "url": "./movies/movie-1254.html",
    "cover": "./54.jpg",
    "category": "都市爱情",
    "categoryUrl": "./category-romance-city.html"
  },
  {
    "id": "1255",
    "title": "千金女贼",
    "year": "2024",
    "region": "台湾",
    "type": "电视剧",
    "genre": "爱情/悬疑/喜剧",
    "tags": [
      "身份互换",
      "豪门恩怨",
      "女贼情缘",
      "罗曼史"
    ],
    "oneLine": "百年饼店千金因车祸失忆被女贼调换身份,醒来后发现自己正在偷自家的传家宝。",
    "url": "./movies/movie-1255.html",
    "cover": "./55.jpg",
    "category": "动作专区",
    "categoryUrl": "./category-action-zone.html"
  },
  {
    "id": "1256",
    "title": "只是陌生人",
    "year": "2019",
    "region": "中国香港",
    "type": "电影",
    "genre": "剧情,爱情",
    "tags": [
      "都市",
      "偶遇",
      "情感纠葛",
      "宿命",
      "文艺"
    ],
    "oneLine": "两个因车祸失忆的男女,在异国他乡重逢并相爱,却发现自己正是当年的肇事双方。",
    "url": "./movies/movie-1256.html",
    "cover": "./56.jpg",
    "category": "青春喜剧",
    "categoryUrl": "./category-youth-comedy.html"
  },
  {
    "id": "1257",
    "title": "世界上最爱我的人",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "genre": "家庭/剧情",
    "tags": [
      "阿尔茨海默症",
      "母女",
      "代际和解",
      "催泪",
      "写实"
    ],
    "oneLine": "母亲确诊阿尔茨海默症后,女儿回到老家照顾她,却发现母亲记忆里没有自己。",
    "url": "./movies/movie-1257.html",
    "cover": "./57.jpg",
    "category": "热映精选",
    "categoryUrl": "./category-hot-picks.html"
  },
  {
    "id": "1258",
    "title": "北极征熊记",
    "year": "2027",
    "region": "加拿大/挪威",
    "type": "电影",
    "genre": "冒险/家庭",
    "tags": [
      "北极",
      "生存",
      "动物",
      "环保"
    ],
    "oneLine": "一个嘴贱的北极狐和一头社恐的北极熊,被迫组队穿越融化的冰原去送一罐过期奶粉。",
    "url": "./movies/movie-1258.html",
    "cover": "./58.jpg",
    "category": "剧集连看",
    "categoryUrl": "./category-drama-series.html"
  },
  {
    "id": "1259",
    "title": "美国范儿3",
    "year": "2026",
    "region": "美国",
    "type": "剧集",
    "genre": "喜剧,时尚,青春",
    "tags": [
      "时尚圈",
      "亚裔视角",
      "文化冲突",
      "梦想与现实"
    ],
    "oneLine": "前两季的亚裔时尚博主进军巴黎,却发现“美国梦”在法国行不通,必须重塑“国际范儿”。",
    "url": "./movies/movie-1259.html",
    "cover": "./59.jpg",
    "category": "经典片库",
    "categoryUrl": "./category-classic-library.html"
  },
  {
    "id": "1260",
    "title": "请君",
    "year": "2024",
    "region": "中国大陆",
    "type": "电视剧",
    "genre": "奇幻,爱情,民国",
    "tags": [
      "穿越",
      "前世今生",
      "军阀",
      "灵族",
      "虐恋"
    ],
    "oneLine": "民国女寨主抢亲抢到了沉睡千年的战神,洞房花烛夜新郎突然睁眼说:“你身上有我的灵族印记。",
    "url": "./movies/movie-1260.html",
    "cover": "./60.jpg",
    "category": "历史古装",
    "categoryUrl": "./category-history-costume.html"
  },
  {
    "id": "1261",
    "title": "孤国春秋第五季",
    "year": "2023",
    "region": "英国/美国",
    "type": "剧集",
    "genre": "历史/动作/剧情",
    "tags": [
      "维京",
      "盎格鲁-撒克逊",
      "史诗",
      "权力游戏",
      "战争"
    ],
    "oneLine": "贝班堡的乌特雷德终于迎来与宿敌的最后对决,孤国的命运悬于一线。",
    "url": "./movies/movie-1261.html",
    "cover": "./61.jpg",
    "category": "青春喜剧",
    "categoryUrl": "./category-youth-comedy.html"
  },
  {
    "id": "1262",
    "title": "刀剑笑新传之花魁",
    "year": "2019",
    "region": "中国大陆",
    "type": "电影",
    "genre": "武侠,动作",
    "tags": [
      "江湖",
      "侠女",
      "改编"
    ],
    "oneLine": "京城第一花魁惨遭灭门,名剑门少主为追寻真相深入青楼,却发现这里的姑娘各个身怀绝世武功。",
    "url": "./movies/movie-1262.html",
    "cover": "./62.jpg",
    "category": "动作专区",
    "categoryUrl": "./category-action-zone.html"
  },
  {
    "id": "1263",
    "title": "双面骗子虚假警察第二季",
    "year": "2025",
    "region": "韩国",
    "type": "电视剧",
    "genre": "悬疑/动作",
    "tags": [
      "骗中骗",
      "卧底警察",
      "黑吃黑",
      "身份危机",
      "复仇联盟"
    ],
    "oneLine": "第一季装成警察的骗子,这季真的成了警察,却发现自己要抓的正是曾经的自己。",
    "url": "./movies/movie-1263.html",
    "cover": "./63.jpg",
    "category": "经典片库",
    "categoryUrl": "./category-classic-library.html"
  },
  {
    "id": "1264",
    "title": "莱克伍德",
    "year": "2026",
    "region": "美国",
    "type": "电影",
    "genre": "科幻/悬疑",
    "tags": [
      "意识传送",
      "小镇",
      "阴谋"
    ],
    "oneLine": "莱克伍德小镇的居民可以租用别人的身体生活24小时,直到有人“租”了一具尸体。",
    "url": "./movies/movie-1264.html",
    "cover": "./64.jpg",
    "category": "剧集连看",
    "categoryUrl": "./category-drama-series.html"
  },
  {
    "id": "1265",
    "title": "凶犯脑中的阿罗·托尔巴钦",
    "year": "2025",
    "region": "俄罗斯",
    "type": "电影",
    "genre": "悬疑,惊悚,犯罪,心理",
    "tags": [
      "意识入侵",
      "连环杀手",
      "俄罗斯暗黑系",
      "虚实难辨",
      "高概念犯罪"
    ],
    "oneLine": "为了找到最后一具尸体,犯罪心理学家必须进入被处决凶犯的大脑,却发现自己正在变成他。",
    "url": "./movies/movie-1265.html",
    "cover": "./65.jpg",
    "category": "剧集连看",
    "categoryUrl": "./category-drama-series.html"
  },
  {
    "id": "1266",
    "title": "她的盛焰",
    "year": "2024",
    "region": "法国/德国",
    "type": "电影",
    "genre": "历史/剧情/女性",
    "tags": [
      "圣女贞德",
      "重新演绎",
      "全女性团队",
      "史诗"
    ],
    "oneLine": "贞德的故事被重新讲述:她不是被宗教审判烧死的,而是被自己最亲密的战友用“英雄的谎言”困死在火刑柱上。",
    "url": "./movies/movie-1266.html",
    "cover": "./66.jpg",
    "category": "悬疑夜场",
    "categoryUrl": "./category-suspense-night.html"
  },
  {
    "id": "1267",
    "title": "有法无天",
    "year": "2024",
    "region": "中国香港",
    "type": "剧集",
    "genre": "犯罪/律政/动作",
    "tags": [
      "港剧",
      "黑帮",
      "律师",
      "双雄",
      "枪战"
    ],
    "oneLine": "一位精英律师为黑帮洗白,他的警察弟弟誓要将他绳之以法,兄弟对决中却发现两人都是棋子。",
    "url": "./movies/movie-1267.html",
    "cover": "./67.jpg",
    "category": "经典片库",
    "categoryUrl": "./category-classic-library.html"
  },
  {
    "id": "1268",
    "title": "帕索里尼",
    "year": "2023",
    "region": "意大利,法国",
    "type": "电影",
    "genre": "剧情,传记,历史",
    "tags": [
      "诗人导演",
      "艺术争议",
      "战后意大利",
      "非线性叙事",
      "政治隐喻"
    ],
    "oneLine": "在生命最后疯狂的四十八小时里,帕索里尼与自己的十个鬼魂进行了一场终极对话。",
    "url": "./movies/movie-1268.html",
    "cover": "./68.jpg",
    "category": "家庭生活",
    "categoryUrl": "./category-family-life.html"
  },
  {
    "id": "1269",
    "title": "夜晚的游戏",
    "year": "2024",
    "region": "韩国",
    "type": "电影",
    "genre": "悬疑/惊悚/心理",
    "tags": [
      "公寓",
      "邻居",
      "监视",
      "反转",
      "密室"
    ],
    "oneLine": "独居女子每晚窥视对面公寓,却发现自己看到的每一场“凶杀案”都是凶手故意表演给她看的。",
    "url": "./movies/movie-1269.html",
    "cover": "./69.jpg",
    "category": "院线热片",
    "categoryUrl": "./category-cinema-hits.html"
  },
  {
    "id": "1270",
    "title": "缘:出云新娘",
    "year": "2016",
    "region": "日本",
    "type": "电影",
    "genre": "爱情、奇幻",
    "tags": [
      "神社",
      "结缘",
      "穿越",
      "治愈",
      "岛根"
    ],
    "oneLine": "东京的冷漠OL被调职到出云大社担任“结缘顾问”,却发现自己能看见人与人之间的命运红线。",
    "url": "./movies/movie-1270.html",
    "cover": "./70.jpg",
    "category": "院线热片",
    "categoryUrl": "./category-cinema-hits.html"
  },
  {
    "id": "1271",
    "title": "火葬大海",
    "year": "1999",
    "region": "英国",
    "type": "电影",
    "genre": "剧情",
    "tags": [
      "临终",
      "父子",
      "海边",
      "仪式感",
      "英伦冷静"
    ],
    "oneLine": "一个固执的老水手要求死后被放在木筏上火葬,但他的三个儿子谁都不愿亲手点火。",
    "url": "./movies/movie-1271.html",
    "cover": "./71.jpg",
    "category": "青春喜剧",
    "categoryUrl": "./category-youth-comedy.html"
  },
  {
    "id": "1272",
    "title": "粉红豹2:有恶豹",
    "year": "2009",
    "region": "美国",
    "type": "电影",
    "genre": "喜剧/犯罪",
    "tags": [
      "探案乌龙",
      "克鲁索探长",
      "憨豆式幽默",
      "续集"
    ],
    "oneLine": "世界著名的粉红大钻戒再次失窃,而这次在现场留下的唯一线索,是另一只“邪恶的粉红豹”。",
    "url": "./movies/movie-1272.html",
    "cover": "./72.jpg",
    "category": "热映精选",
    "categoryUrl": "./category-hot-picks.html"
  },
  {
    "id": "1273",
    "title": "厕所女神",
    "year": "2025",
    "region": "日本",
    "type": "电影",
    "genre": "奇幻治愈",
    "tags": [
      "都市传说",
      "童年秘密",
      "神明",
      "和解",
      "细腻 童年谎话",
      "外婆",
      "清洁的哲学",
      "丧亲",
      "成长"
    ],
    "oneLine": "小时候,外婆告诉我厕所里住着女神,只要把厕所打扫干净,就能变漂亮。长大后我才明白,女神早就搬走了。",
    "url": "./movies/movie-1273.html",
    "cover": "./73.jpg",
    "category": "经典片库",
    "categoryUrl": "./category-classic-library.html"
  },
  {
    "id": "1274",
    "title": "世界最后一日",
    "year": "2025",
    "region": "德国",
    "type": "电影",
    "genre": "科幻、剧情",
    "tags": [
      "末日",
      "哲学",
      "低概念"
    ],
    "oneLine": "一颗巨大小行星即将撞毁地球,但在最后24小时,全球所有电子设备都恢复了出厂设置。",
    "url": "./movies/movie-1274.html",
    "cover": "./74.jpg",
    "category": "剧集连看",
    "categoryUrl": "./category-drama-series.html"
  },
  {
    "id": "1275",
    "title": "超跑玩家",
    "year": "2025",
    "region": "美国",
    "type": "电影",
    "genre": "动作,犯罪,飙车",
    "tags": [
      "地下赛车",
      "黑客",
      "复仇",
      "氮气加速",
      "兄弟"
    ],
    "oneLine": "地下赛车冠军为了给妹妹治病被迫加入跨国抢车团伙,却发现老板是自己的杀父仇人。",
    "url": "./movies/movie-1275.html",
    "cover": "./75.jpg",
    "category": "院线热片",
    "categoryUrl": "./category-cinema-hits.html"
  },
  {
    "id": "1276",
    "title": "谈谈情说说性",
    "year": "2002",
    "region": "中国香港",
    "type": "电影",
    "genre": "爱情,喜剧",
    "tags": [
      "都市",
      "两性",
      "群像",
      "港味"
    ],
    "oneLine": "三男三女在一家情感诊所中暴露了各自最隐秘的性观念与爱情观,一场两性攻防战就此爆发。",
    "url": "./movies/movie-1276.html",
    "cover": "./76.jpg",
    "category": "剧集连看",
    "categoryUrl": "./category-drama-series.html"
  },
  {
    "id": "1277",
    "title": "爱在柏林漂流时",
    "year": "2019",
    "region": "德国",
    "type": "电影",
    "genre": "剧情/同性/文艺",
    "tags": [
      "异乡人",
      "同志",
      "漂泊",
      "一夜情"
    ],
    "oneLine": "两个来自不同国家的流浪青年在柏林一夜相遇,用24小时寻找爱与被爱的证据。",
    "url": "./movies/movie-1277.html",
    "cover": "./77.jpg",
    "category": "动作专区",
    "categoryUrl": "./category-action-zone.html"
  },
  {
    "id": "1278",
    "title": "横冲直撞打江山",
    "year": "2020",
    "region": "中国大陆",
    "type": "电影",
    "genre": "喜剧,动作",
    "tags": [
      "东北往事",
      "黑帮喜剧",
      "兄弟情义",
      "荒诞"
    ],
    "oneLine": "东北澡堂子里搓澡的小子,被错认成黑帮大佬,被迫“接管”一条街。",
    "url": "./movies/movie-1278.html",
    "cover": "./78.jpg",
    "category": "青春喜剧",
    "categoryUrl": "./category-youth-comedy.html"
  },
  {
    "id": "1279",
    "title": "非电影",
    "year": "2025",
    "region": "意大利",
    "type": "电影",
    "genre": "实验/纪录片",
    "tags": [
      "元电影",
      "打破第四面墙",
      "导演自述",
      "哲学",
      "黑白摄影"
    ],
    "oneLine": "一个导演决定拍一部“关于拍不出电影的困境”的电影,结果发现他自己也正陷入同样的困境。",
    "url": "./movies/movie-1279.html",
    "cover": "./79.jpg",
    "category": "悬疑夜场",
    "categoryUrl": "./category-suspense-night.html"
  },
  {
    "id": "1280",
    "title": "腾空的日子",
    "year": "2024",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "青春成长",
    "tags": [
      "高考",
      "体育特长生",
      "梦想与现实",
      "友情"
    ],
    "oneLine": "三个体育特长生在高考前一百天,赌上一切冲击专业队资格,输的人要彻底放弃体育。",
    "url": "./movies/movie-1280.html",
    "cover": "./80.jpg",
    "category": "动作专区",
    "categoryUrl": "./category-action-zone.html"
  },
  {
    "id": "1281",
    "title": "在首领猎人的土地上",
    "year": "2026",
    "region": "法国/德国",
    "type": "电影",
    "genre": "战争、历史、剧情",
    "tags": [
      "一战",
      "非洲殖民",
      "黑人士兵",
      "法语片",
      "人性"
    ],
    "oneLine": "一战期间,被法国强征的非洲猎人在欧洲战场屠杀“首领”——那些和他一样被迫穿上军服的黑人士兵。",
    "url": "./movies/movie-1281.html",
    "cover": "./81.jpg",
    "category": "经典片库",
    "categoryUrl": "./category-classic-library.html"
  },
  {
    "id": "1282",
    "title": "小海的海",
    "year": "2025",
    "region": "中国",
    "type": "电影",
    "genre": "儿童文艺片",
    "tags": [
      "留守儿童",
      "海边",
      "治愈"
    ],
    "oneLine": "十岁的小海从未见过大海,但他决定在旱地里挖出一条通往海的路。",
    "url": "./movies/movie-1282.html",
    "cover": "./82.jpg",
    "category": "院线热片",
    "categoryUrl": "./category-cinema-hits.html"
  },
  {
    "id": "1283",
    "title": "毒蜂惊魂——地球大灾难",
    "year": "2025",
    "region": "美国",
    "type": "电影",
    "genre": "科幻,灾难,惊悚",
    "tags": [
      "基因变异",
      "生态灾难",
      "末日求生"
    ],
    "oneLine": "一种被基因编辑的毒蜂失控繁殖,它们的毒液能让金属瞬间腐蚀溶解。",
    "url": "./movies/movie-1283.html",
    "cover": "./83.jpg",
    "category": "院线热片",
    "categoryUrl": "./category-cinema-hits.html"
  },
  {
    "id": "1284",
    "title": "风骚坏姊妹",
    "year": "2022",
    "region": "美国",
    "type": "剧集",
    "genre": "喜剧、剧情、青春",
    "tags": [
      "姐妹",
      "校园",
      "叛逆",
      "和解"
    ],
    "oneLine": "保守小镇上的三姐妹合开了一家地下“坏女孩培训班”,专教乖乖女抽烟、逃课和说脏话,直到镇长女儿来报名。",
    "url": "./movies/movie-1284.html",
    "cover": "./84.jpg",
    "category": "剧集连看",
    "categoryUrl": "./category-drama-series.html"
  },
  {
    "id": "1285",
    "title": "游戏变身",
    "year": "2025",
    "region": "日本",
    "type": "动画",
    "genre": "奇幻、动作",
    "tags": [
      "网游",
      "现实侵入",
      "BUG",
      "异能",
      "热血"
    ],
    "oneLine": "一款停服多年的古董网游突然重新上线,所有登录过该游戏的玩家,在现实中都获得了游戏角色的技能。",
    "url": "./movies/movie-1285.html",
    "cover": "./85.jpg",
    "category": "悬疑夜场",
    "categoryUrl": "./category-suspense-night.html"
  },
  {
    "id": "1286",
    "title": "危机抢救",
    "year": "2024",
    "region": "日本",
    "type": "剧集",
    "genre": "医疗/剧情",
    "tags": [
      "急诊",
      "团队",
      "创伤",
      "伦理"
    ],
    "oneLine": "东京一家救命救急中心,五个问题医生用最冒险的方式与死神抢人,也抢回自己的人生。",
    "url": "./movies/movie-1286.html",
    "cover": "./86.jpg",
    "category": "动作专区",
    "categoryUrl": "./category-action-zone.html"
  },
  {
    "id": "1287",
    "title": "万能发型师",
    "year": "2024",
    "region": "日本",
    "type": "剧集",
    "genre": "奇幻,治愈",
    "tags": [
      "理发店",
      "读心术",
      "单元剧",
      "温情"
    ],
    "oneLine": "沉默寡言的天才理发师能通过触摸客人头发“读取”其人生烦恼,并用剪发治愈。",
    "url": "./movies/movie-1287.html",
    "cover": "./87.jpg",
    "category": "都市爱情",
    "categoryUrl": "./category-romance-city.html"
  },
  {
    "id": "1288",
    "title": "三小强",
    "year": "2024",
    "region": "中国",
    "type": "动画电影",
    "genre": "喜剧,冒险",
    "tags": [
      "低幼向",
      "勇敢",
      "友谊",
      "奇幻森林",
      "寓教于乐"
    ],
    "oneLine": "森林里最胆小的三只小动物,为了寻找能让妈妈复活的“彩虹之心”,踏上了搞笑又惊险的旅程。",
    "url": "./movies/movie-1288.html",
    "cover": "./88.jpg",
    "category": "青春喜剧",
    "categoryUrl": "./category-youth-comedy.html"
  },
  {
    "id": "1289",
    "title": "活魔人",
    "year": "1993",
    "region": "中国香港",
    "type": "电影",
    "genre": "恐怖/科幻/邪典",
    "tags": [
      "港产邪典",
      "人体变异",
      "血腥",
      "特摄风格"
    ],
    "oneLine": "疯狂科学家发明了“生命加速射线”,照到人类身上后,一分钟内就会变异成嗜血魔怪。",
    "url": "./movies/movie-1289.html",
    "cover": "./89.jpg",
    "category": "热映精选",
    "categoryUrl": "./category-hot-picks.html"
  },
  {
    "id": "1290",
    "title": "荧幕纪念品",
    "year": "2023",
    "region": "英国",
    "type": "电影",
    "genre": "剧情/爱情/家庭",
    "tags": [
      "亲情",
      "录像带",
      "记忆",
      "温柔催泪"
    ],
    "oneLine": "父亲去世后,女儿发现他生前录了20年的家庭录像,每一集都以“本次播放到此结束,下周再见”收尾。",
    "url": "./movies/movie-1290.html",
    "cover": "./90.jpg",
    "category": "全球佳作",
    "categoryUrl": "./category-global-stories.html"
  },
  {
    "id": "1291",
    "title": "红色生活",
    "year": "2025",
    "region": "中国",
    "type": "电影",
    "genre": "剧情,家庭,历史",
    "tags": [
      "纺织厂",
      "年代变迁",
      "女性",
      "含蓄"
    ],
    "oneLine": "1958年起的三十年间,一名纺织女工的红笔记事本,记录了工厂与一个国家的冷暖岁月。",
    "url": "./movies/movie-1291.html",
    "cover": "./91.jpg",
    "category": "家庭生活",
    "categoryUrl": "./category-family-life.html"
  },
  {
    "id": "1292",
    "title": "万物理论",
    "year": "2024",
    "region": "美国",
    "type": "电视剧",
    "genre": "科幻,悬疑",
    "tags": [
      "高概念",
      "平行宇宙",
      "物理"
    ],
    "oneLine": "一位理论物理学家证明“万物理论”存在的那一刻,他家楼下便利店出现了两个一模一样的店员。",
    "url": "./movies/movie-1292.html",
    "cover": "./92.jpg",
    "category": "悬疑夜场",
    "categoryUrl": "./category-suspense-night.html"
  },
  {
    "id": "1293",
    "title": "柏林漂流",
    "year": "2023",
    "region": "德国",
    "type": "电影",
    "genre": "剧情",
    "tags": [
      "难民",
      "柏林",
      "偶遇",
      "都市",
      "成长"
    ],
    "oneLine": "一位叙利亚难民与一位德国老人共享一张柏林公园的长椅,意外卷入彼此人生的漩涡。",
    "url": "./movies/movie-1293.html",
    "cover": "./93.jpg",
    "category": "历史古装",
    "categoryUrl": "./category-history-costume.html"
  },
  {
    "id": "1294",
    "title": "刺客公敌",
    "year": "2026",
    "region": "美国",
    "type": "电影",
    "genre": "动作,喜剧,犯罪",
    "tags": [
      "杀手",
      "相亲",
      "误会",
      "全球通缉",
      "狼人杀"
    ],
    "oneLine": "世界第一杀手金盆洗手去相亲,结果相亲对象全是伪装成普通人的同行,一餐饭死了十七个杀手。",
    "url": "./movies/movie-1294.html",
    "cover": "./94.jpg",
    "category": "历史古装",
    "categoryUrl": "./category-history-costume.html"
  },
  {
    "id": "1295",
    "title": "萨尔托",
    "year": "2017",
    "region": "意大利",
    "type": "电影",
    "genre": "剧情,悬疑,奇幻",
    "tags": [
      "高空",
      "走绳",
      "幻觉",
      "犯罪"
    ],
    "oneLine": "世界第一高空走绳大师在双子塔间表演时,看到对面楼顶站着一个死去的故人。",
    "url": "./movies/movie-1295.html",
    "cover": "./95.jpg",
    "category": "经典片库",
    "categoryUrl": "./category-classic-library.html"
  },
  {
    "id": "1296",
    "title": "凤凰城故事",
    "year": "2026",
    "region": "美国",
    "type": "电影",
    "genre": "剧情,西部,历史",
    "tags": [
      "华人移民",
      "铁路血泪",
      "复仇",
      "小镇秘史"
    ],
    "oneLine": "1880年凤凰城,一名华人洗衣工深夜被杀,整个小镇却联合掩盖真相。",
    "url": "./movies/movie-1296.html",
    "cover": "./96.jpg",
    "category": "全球佳作",
    "categoryUrl": "./category-global-stories.html"
  },
  {
    "id": "1297",
    "title": "市场法律",
    "year": "2024",
    "region": "法国",
    "type": "电影",
    "genre": "剧情",
    "tags": [
      "职场",
      "道德困境",
      "现实主义"
    ],
    "oneLine": "一个失业的中年保安被派去卧底调查超市员工,却发现所有人都是和他一样的可怜人。",
    "url": "./movies/movie-1297.html",
    "cover": "./97.jpg",
    "category": "经典片库",
    "categoryUrl": "./category-classic-library.html"
  },
  {
    "id": "1298",
    "title": "绵羊小铃",
    "year": "2023",
    "region": "日本",
    "type": "电影",
    "genre": "动画,治愈",
    "tags": [
      "成长",
      "友谊",
      "奇幻",
      "暖心"
    ],
    "oneLine": "一只脖子上挂着铃铛却不会叫的小绵羊,为了找回自己的声音,闯入了狼族的禁地。",
    "url": "./movies/movie-1298.html",
    "cover": "./98.jpg",
    "category": "奇幻科幻",
    "categoryUrl": "./category-fantasy-sci-fi.html"
  },
  {
    "id": "1299",
    "title": "天外者",
    "year": "2026",
    "region": "日本",
    "type": "电影",
    "genre": "历史传记",
    "tags": [
      "明治维新",
      "武士",
      "开拓者",
      "真实改编"
    ],
    "oneLine": "被时代抛弃的落魄武士,带领一群罪犯和艺伎,在北海道蛮荒之地建起一座“天外”金融帝国。",
    "url": "./movies/movie-1299.html",
    "cover": "./99.jpg",
    "category": "经典片库",
    "categoryUrl": "./category-classic-library.html"
  },
  {
    "id": "1300",
    "title": "闪电重生",
    "year": "2025",
    "region": "美国",
    "type": "电影",
    "genre": "科幻,动作,惊悚",
    "tags": [
      "超级英雄",
      "复活",
      "阴谋"
    ],
    "oneLine": "十年前牺牲的超级英雄“闪电侠”被军方秘密复活,却发现自己的超能力失控了。",
    "url": "./movies/movie-1300.html",
    "cover": "./100.jpg",
    "category": "经典片库",
    "categoryUrl": "./category-classic-library.html"
  },
  {
    "id": "1301",
    "title": "身份的证明",
    "year": "2025",
    "region": "中国",
    "type": "电影",
    "genre": "悬疑,剧情,犯罪",
    "tags": [
      "证明自己",
      "冤案",
      "警匪",
      "身份互换",
      "社会派"
    ],
    "oneLine": "一个失忆的流浪汉自称是失踪三年的刑警队长,但没有一个人信他。",
    "url": "./movies/movie-1301.html",
    "cover": "./101.jpg",
    "category": "家庭生活",
    "categoryUrl": "./category-family-life.html"
  },
  {
    "id": "1302",
    "title": "隐身侠",
    "year": "2025",
    "region": "中国",
    "type": "电影",
    "genre": "科幻,动作,悬疑",
    "tags": [
      "隐形",
      "科技伦理",
      "反英雄",
      "复仇"
    ],
    "oneLine": "一个被霸凌的清洁工意外获得光学隐身服,但他没有去行侠仗义,而是开了一家“隐形复仇”网店。",
    "url": "./movies/movie-1302.html",
    "cover": "./102.jpg",
    "category": "青春喜剧",
    "categoryUrl": "./category-youth-comedy.html"
  },
  {
    "id": "1303",
    "title": "放手爱",
    "year": "2023",
    "region": "中国香港",
    "type": "电影",
    "genre": "爱情剧情",
    "tags": [
      "分手",
      "疗愈",
      "都市情感",
      "成熟爱情"
    ],
    "oneLine": "一对相爱十年的恋人决定用一场“分手旅行”来告别彼此,却发现分开比在一起更需要勇气。",
    "url": "./movies/movie-1303.html",
    "cover": "./103.jpg",
    "category": "剧集连看",
    "categoryUrl": "./category-drama-series.html"
  },
  {
    "id": "1304",
    "title": "数字英雄第一季",
    "year": "2025",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "剧情,悬疑,职场",
    "tags": [
      "互联网",
      "黑客",
      "创业",
      "反腐",
      "义警"
    ],
    "oneLine": "一个被大厂辞退的程序员组建了“数字义警”团队,专门用代码惩罚那些逃脱法律制裁的恶人。",
    "url": "./movies/movie-1304.html",
    "cover": "./104.jpg",
    "category": "经典片库",
    "categoryUrl": "./category-classic-library.html"
  },
  {
    "id": "1305",
    "title": "火凤燎原第二季",
    "year": "2023",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "动画,历史,战争",
    "tags": [
      "三国",
      "谋略",
      "水墨风"
    ],
    "oneLine": "吕布之死揭开新乱局,残兵与八奇的第二轮博弈从一座孤城开始。",
    "url": "./movies/movie-1305.html",
    "cover": "./105.jpg",
    "category": "院线热片",
    "categoryUrl": "./category-cinema-hits.html"
  },
  {
    "id": "1306",
    "title": "街坊邻居",
    "year": "2012",
    "region": "中国大陆",
    "type": "电视剧",
    "genre": "情景喜剧",
    "tags": [
      "老小区",
      "邻里关系",
      "方言喜剧",
      "市井温情",
      "单元剧"
    ],
    "oneLine": "一个即将拆迁的老小区里,五户人家为了多分面积,互相假装夫妻、父子、母女。",
    "url": "./movies/movie-1306.html",
    "cover": "./106.jpg",
    "category": "热映精选",
    "categoryUrl": "./category-hot-picks.html"
  },
  {
    "id": "1307",
    "title": "陆军中野学校 密命",
    "year": "2023",
    "region": "日本",
    "type": "电影",
    "genre": "历史/谍战",
    "tags": [
      "特工训练",
      "二战",
      "潜伏"
    ],
    "oneLine": "二战末期,一名被军国主义洗脑的间谍学员,接到最后任务:刺杀自己的投降派恩师。",
    "url": "./movies/movie-1307.html",
    "cover": "./107.jpg",
    "category": "历史古装",
    "categoryUrl": "./category-history-costume.html"
  },
  {
    "id": "1308",
    "title": "哈利·波特:一段魔法史",
    "year": "2026",
    "region": "美国",
    "type": "剧集",
    "genre": "奇幻,纪录片式剧情",
    "tags": [
      "魔法",
      "伪纪录片",
      "黑魔法",
      "四大学院",
      "起源"
    ],
    "oneLine": "一部伪纪录片揭开霍格沃茨建校真相:四巨头因一本“禁书”反目,而斯莱特林竟是守护者。",
    "url": "./movies/movie-1308.html",
    "cover": "./108.jpg",
    "category": "经典片库",
    "categoryUrl": "./category-classic-library.html"
  },
  {
    "id": "1309",
    "title": "闪亮的眼睛",
    "year": "2021",
    "region": "美国",
    "type": "电影",
    "genre": "科幻/惊悚/悬疑",
    "tags": [
      "监控",
      "隐私",
      "AI",
      "反乌托邦",
      "烧脑"
    ],
    "oneLine": "在她眼中,所有人都没有秘密,包括那个潜入她家的连环杀手。",
    "url": "./movies/movie-1309.html",
    "cover": "./109.jpg",
    "category": "都市爱情",
    "categoryUrl": "./category-romance-city.html"
  },
  {
    "id": "1310",
    "title": "长跑者的孤独",
    "year": "1962",
    "region": "英国",
    "type": "电影",
    "genre": "剧情,运动",
    "tags": [
      "黑白电影",
      "英国新浪潮",
      "阶级批判",
      "反叛青年"
    ],
    "oneLine": "一名感化院的问题少年展现出了惊人的长跑天赋,却在决定命运的比赛中选择了停下脚步。",
    "url": "./movies/movie-1310.html",
    "cover": "./110.jpg",
    "category": "剧集连看",
    "categoryUrl": "./category-drama-series.html"
  },
  {
    "id": "1311",
    "title": "铁道风云",
    "year": "2025",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "剧情/年代/战争",
    "tags": [
      "抗战",
      "铁路",
      "谍战",
      "兄弟情"
    ],
    "oneLine": "卢沟桥事变后,一对铁路世家的兄弟,分别在国共两条线上,为争夺一条铁路线展开了生死较量。",
    "url": "./movies/movie-1311.html",
    "cover": "./111.jpg",
    "category": "历史古装",
    "categoryUrl": "./category-history-costume.html"
  },
  {
    "id": "1312",
    "title": "美食大冒险之英雄烩",
    "year": "2025",
    "region": "中国",
    "type": "动画电影",
    "genre": "喜剧、冒险、奇幻",
    "tags": [
      "美食世界",
      "吃货",
      "功夫",
      "中华料理"
    ],
    "oneLine": "在食物就是生命的世界里,一只有“味痴”的包子,必须找到传说中的“英雄烩”配方,拯救被酸菜军团包围的蒸笼城。",
    "url": "./movies/movie-1312.html",
    "cover": "./112.jpg",
    "category": "全球佳作",
    "categoryUrl": "./category-global-stories.html"
  },
  {
    "id": "1313",
    "title": "闪乱神乐第二季",
    "year": "2027",
    "region": "日本",
    "type": "动画/电视剧",
    "genre": "动作/奇幻",
    "tags": [
      "忍者少女",
      "爆衣战斗",
      "热血",
      "百合"
    ],
    "oneLine": "忍者少女们的战斗升级,这次她们要对抗的是企图用“科技忍术”毁灭传统的反派。",
    "url": "./movies/movie-1313.html",
    "cover": "./113.jpg",
    "category": "青春喜剧",
    "categoryUrl": "./category-youth-comedy.html"
  },
  {
    "id": "1314",
    "title": "甜心大姐头",
    "year": "2023",
    "region": "中国台湾",
    "type": "电影",
    "genre": "喜剧/犯罪",
    "tags": [
      "女混混",
      "乌龙绑架",
      "姐妹情深"
    ],
    "oneLine": "过气女混混为救咖啡店,误绑竹联帮老大的吉娃娃,引发全台黑道乱斗。",
    "url": "./movies/movie-1314.html",
    "cover": "./114.jpg",
    "category": "院线热片",
    "categoryUrl": "./category-cinema-hits.html"
  },
  {
    "id": "1315",
    "title": "一个人对神的恐惧",
    "year": "2025",
    "region": "美国",
    "type": "电影",
    "genre": "恐怖/心理",
    "tags": [
      "邪教",
      "密室审讯",
      "信仰崩塌"
    ],
    "oneLine": "一个无神论心理学家被关进地下牢房,被迫与一名自称“神”的连环杀手进行七天的对话。",
    "url": "./movies/movie-1315.html",
    "cover": "./115.jpg",
    "category": "都市爱情",
    "categoryUrl": "./category-romance-city.html"
  },
  {
    "id": "1316",
    "title": "兄弟会大屠杀3",
    "year": "2015",
    "region": "美国",
    "type": "电影",
    "genre": "恐怖/血腥",
    "tags": [
      "兄弟会",
      "杀戮",
      "血浆片",
      "复仇",
      "第三部"
    ],
    "oneLine": "兄弟会入会仪式意外唤醒校园地下墓穴中的恶魔。",
    "url": "./movies/movie-1316.html",
    "cover": "./116.jpg",
    "category": "青春喜剧",
    "categoryUrl": "./category-youth-comedy.html"
  },
  {
    "id": "1317",
    "title": "肠肠搞轰趴",
    "year": "2023",
    "region": "美国",
    "type": "电影",
    "genre": "喜剧,动画,冒险",
    "tags": [
      "R级",
      "拟人",
      "食物",
      "重口",
      "黑色幽默"
    ],
    "oneLine": "超市食物们为了不被吃掉而逃往“伟大彼岸”,却发现自己只是人类指尖的玩物,一场血腥又爆笑的觉醒革命开始了。",
    "url": "./movies/movie-1317.html",
    "cover": "./117.jpg",
    "category": "热映精选",
    "categoryUrl": "./category-hot-picks.html"
  },
  {
    "id": "1318",
    "title": "墨雨云间",
    "year": "2024",
    "region": "中国大陆",
    "type": "电视剧",
    "genre": "古装,爱情,悬疑",
    "tags": [
      "重生",
      "复仇",
      "书院探案",
      "权谋"
    ],
    "oneLine": "那场大火将她烧得面目全非,当她换了一张脸重回人间,发现当年害她的人竟是自己最亲的人。",
    "url": "./movies/movie-1318.html",
    "cover": "./118.jpg",
    "category": "院线热片",
    "categoryUrl": "./category-cinema-hits.html"
  },
  {
    "id": "1319",
    "title": "五郎八卦棍粤语",
    "year": "1984",
    "region": "中国香港",
    "type": "电影",
    "genre": "动作,武侠",
    "tags": [
      "刘家良",
      "硬桥硬马",
      "杨家将",
      "棍法"
    ],
    "oneLine": "杨五郎幸存于金沙滩一役后,隐居寺庙将杨家枪法改创为八卦棍法,只为等来复仇之日。",
    "url": "./movies/movie-1319.html",
    "cover": "./119.jpg",
    "category": "历史古装",
    "categoryUrl": "./category-history-costume.html"
  },
  {
    "id": "1320",
    "title": "快要出发啦",
    "year": "2024",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "剧情、公路、治愈",
    "tags": [
      "临终关怀",
      "房车旅行",
      "父子和解",
      "遗愿清单",
      "癌症"
    ],
    "oneLine": "被确诊癌症晚期的父亲“绑架”了关系疏远的儿子,开着一辆破房车上路,完成自己的遗愿清单。",
    "url": "./movies/movie-1320.html",
    "cover": "./120.jpg",
    "category": "院线热片",
    "categoryUrl": "./category-cinema-hits.html"
  },
  {
    "id": "1321",
    "title": "刑事侦缉档案国语",
    "year": "2024",
    "region": "中国香港",
    "type": "电视剧",
    "genre": "悬疑/犯罪/刑侦",
    "tags": [
      "单元剧",
      "心理侧写",
      "冷案重启",
      "双男主"
    ],
    "oneLine": "一个被封存二十年的档案柜被打开,里面的悬案都与一首童谣有关。",
    "url": "./movies/movie-1321.html",
    "cover": "./121.jpg",
    "category": "历史古装",
    "categoryUrl": "./category-history-costume.html"
  },
  {
    "id": "1322",
    "title": "致命名媛之夜",
    "year": "2025",
    "region": "英国/美国",
    "type": "电影",
    "genre": "悬疑、剧情、年代",
    "tags": [
      "上流社会",
      "谋杀",
      "女性",
      "1920年代",
      "密室"
    ],
    "oneLine": "1924年,一座古堡里的名媛派对变成死亡之夜,每半小时死一个人,而她们发现城堡大门被从外部焊死。",
    "url": "./movies/movie-1322.html",
    "cover": "./122.jpg",
    "category": "奇幻科幻",
    "categoryUrl": "./category-fantasy-sci-fi.html"
  },
  {
    "id": "1323",
    "title": "我的天堂城市",
    "year": "2030",
    "region": "中国大陆",
    "type": "电视剧",
    "genre": "科幻,悬疑,伦理",
    "tags": [
      "虚拟现实",
      "乌托邦",
      "社会批判"
    ],
    "oneLine": "一款名为“天堂”的沉浸式虚拟城市游戏火爆全球,玩家可以在其中获得完美人生,但现实世界正在无声崩溃。",
    "url": "./movies/movie-1323.html",
    "cover": "./123.jpg",
    "category": "奇幻科幻",
    "categoryUrl": "./category-fantasy-sci-fi.html"
  },
  {
    "id": "1324",
    "title": "妙人大闹海陆空",
    "year": "1988",
    "region": "中国香港",
    "type": "电影",
    "genre": "喜剧/动作",
    "tags": [
      "乌龙警察",
      "追车",
      "搞笑",
      "三军联动"
    ],
    "oneLine": "一名街头小混混被误当成特工,卷入海军、陆军、空军三方争夺的绝密芯片案。",
    "url": "./movies/movie-1324.html",
    "cover": "./124.jpg",
    "category": "悬疑夜场",
    "categoryUrl": "./category-suspense-night.html"
  },
  {
    "id": "1325",
    "title": "她不见了",
    "year": "2024",
    "region": "中国",
    "type": "电影",
    "genre": "悬疑、犯罪、剧情",
    "tags": [
      "女性",
      "失踪案",
      "记忆碎片",
      "反转"
    ],
    "oneLine": "女儿失踪七年后,母亲在养老院发现她竟然一直以护工身份活着,却完全不认识自己。",
    "url": "./movies/movie-1325.html",
    "cover": "./125.jpg",
    "category": "奇幻科幻",
    "categoryUrl": "./category-fantasy-sci-fi.html"
  },
  {
    "id": "1326",
    "title": "宫锁珠帘",
    "year": "2022",
    "region": "中国大陆",
    "type": "电视剧",
    "genre": "古装/爱情",
    "tags": [
      "穿越",
      "宫廷",
      "绣娘",
      "逆袭",
      "权谋"
    ],
    "oneLine": "现代珠宝设计师穿成清宫小宫女,靠一手鉴宝绝活逆袭,却发现自己设计的“凤鸾珠帘”藏着帝王的杀机。",
    "url": "./movies/movie-1326.html",
    "cover": "./126.jpg",
    "category": "都市爱情",
    "categoryUrl": "./category-romance-city.html"
  },
  {
    "id": "1327",
    "title": "狄仁杰之夺命天眼",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "genre": "悬疑/古装",
    "tags": [
      "狄仁杰",
      "风水",
      "密室杀人",
      "唐朝诡案"
    ],
    "oneLine": "洛阳城每死一人,城中新建的“通天浮屠”佛像的眼珠就会转向死者方向,狄仁杰必须在七日内破解这起“神佛杀人案”。",
    "url": "./movies/movie-1327.html",
    "cover": "./127.jpg",
    "category": "历史古装",
    "categoryUrl": "./category-history-costume.html"
  },
  {
    "id": "1328",
    "title": "我家的陌生人",
    "year": "2023",
    "region": "日本",
    "type": "电影",
    "genre": "剧情,悬疑",
    "tags": [
      "家庭伦理",
      "身份冒认",
      "养老",
      "惊悚",
      "日系"
    ],
    "oneLine": "母亲葬礼那天,一个自称是我父亲私生子的男人住进了我家,而我的父亲已经去世二十年了。",
    "url": "./movies/movie-1328.html",
    "cover": "./128.jpg",
    "category": "剧集连看",
    "categoryUrl": "./category-drama-series.html"
  },
  {
    "id": "1329",
    "title": "织田肉桂信长",
    "year": "2025",
    "region": "日本",
    "type": "动画剧集",
    "genre": "奇幻/喜剧/历史",
    "tags": [
      "转生",
      "柴犬",
      "战国",
      "日常",
      "玩梗"
    ],
    "oneLine": "织田信长死后转生成一只柴犬,被现代日本女高中生收养,一边吃狗粮一边怀念天下布武。",
    "url": "./movies/movie-1329.html",
    "cover": "./129.jpg",
    "category": "动作专区",
    "categoryUrl": "./category-action-zone.html"
  },
  {
    "id": "1330",
    "title": "乌蒙深处",
    "year": "2025",
    "region": "中国大陆",
    "type": "电影",
    "genre": "剧情,悬疑,犯罪",
    "tags": [
      "山村怪谈",
      "扶贫干部",
      "旧案重查",
      "人性深渊",
      "自然风光"
    ],
    "oneLine": "一名驻村书记在乌蒙山腹地推广养殖时,意外发现了三年前被掩埋的车辆和骸骨。",
    "url": "./movies/movie-1330.html",
    "cover": "./130.jpg",
    "category": "动作专区",
    "categoryUrl": "./category-action-zone.html"
  },
  {
    "id": "1331",
    "title": "战争机器",
    "year": "2025",
    "region": "美国",
    "type": "电影",
    "genre": "动作/科幻/战争",
    "tags": [
      "机甲",
      "人工智能",
      "反战"
    ],
    "oneLine": "他是指挥官,却被自己操控的战争机器AI判定为“和平的障碍”,下一秒,机甲对准了他。",
    "url": "./movies/movie-1331.html",
    "cover": "./131.jpg",
    "category": "院线热片",
    "categoryUrl": "./category-cinema-hits.html"
  },
  {
    "id": "1332",
    "title": "额吉",
    "year": "2025",
    "region": "中国大陆",
    "type": "电影",
    "genre": "家庭,历史",
    "tags": [
      "草原",
      "母爱",
      "大爱无疆",
      "真实事件改编"
    ],
    "oneLine": "上世纪六十年代,一位草原单身阿妈不顾流言,独自收养了来自上海的28名孤儿。",
    "url": "./movies/movie-1332.html",
    "cover": "./132.jpg",
    "category": "动作专区",
    "categoryUrl": "./category-action-zone.html"
  },
  {
    "id": "1333",
    "title": "暗流2017英国版",
    "year": "2017",
    "region": "英国",
    "type": "电视剧",
    "genre": "犯罪、悬疑、剧情",
    "tags": [
      "英剧",
      "冷硬派",
      "警察程序",
      "小镇疑云",
      "社会派"
    ],
    "oneLine": "伦敦警察调任湖区,发现看似宁静的小镇深处涌动着一股百年前的暗流。",
    "url": "./movies/movie-1333.html",
    "cover": "./133.jpg",
    "category": "悬疑夜场",
    "categoryUrl": "./category-suspense-night.html"
  },
  {
    "id": "1334",
    "title": "诺亚方舟漂流记2",
    "year": "2024",
    "region": "英国/德国",
    "type": "电影",
    "genre": "动画,冒险,家庭",
    "tags": [
      "动物",
      "方舟",
      "漂流",
      "成长"
    ],
    "oneLine": "大洪水之后,方舟被冲上未知岛屿,动物们发现岛上还有另一艘“黑方舟”。",
    "url": "./movies/movie-1334.html",
    "cover": "./134.jpg",
    "category": "热映精选",
    "categoryUrl": "./category-hot-picks.html"
  },
  {
    "id": "1335",
    "title": "小丑屋",
    "year": "2023",
    "region": "美国",
    "type": "电影",
    "genre": "恐怖,惊悚",
    "tags": [
      "密室逃脱",
      "精神污染",
      "反转结局",
      "心理恐惧"
    ],
    "oneLine": "六位网红受邀体验全球最恐怖的“小丑屋”密室,却发现每一个通关谜题,都对应着他们年少时犯下的校园霸凌罪行。",
    "url": "./movies/movie-1335.html",
    "cover": "./135.jpg",
    "category": "热映精选",
    "categoryUrl": "./category-hot-picks.html"
  },
  {
    "id": "1336",
    "title": "扫黑·决战",
    "year": "2025",
    "region": "中国大陆",
    "type": "电影",
    "genre": "动作,犯罪,悬疑",
    "tags": [
      "扫黑除恶",
      "卧底",
      "真实案件改编",
      "硬核"
    ],
    "oneLine": "扫黑专员与潜伏十年的卧底,共同揭开了小县城里官商勾结的惊天黑幕。",
    "url": "./movies/movie-1336.html",
    "cover": "./136.jpg",
    "category": "热映精选",
    "categoryUrl": "./category-hot-picks.html"
  },
  {
    "id": "1337",
    "title": "慢慢",
    "year": "2023",
    "region": "中国台湾",
    "type": "电影",
    "genre": "剧情,家庭,文艺",
    "tags": [
      "和解",
      "亲情",
      "缓生活",
      "乡愁"
    ],
    "oneLine": "离婚后回到老家照顾失智母亲,她发现只有把语速放慢三倍,母亲才能认出她。",
    "url": "./movies/movie-1337.html",
    "cover": "./137.jpg",
    "category": "院线热片",
    "categoryUrl": "./category-cinema-hits.html"
  },
  {
    "id": "1338",
    "title": "黎巴嫩【历届佳片】",
    "year": "2009",
    "region": "以色列",
    "type": "电影",
    "genre": "战争剧情",
    "tags": [
      "坦克",
      "巷战",
      "第一人称",
      "压抑"
    ],
    "oneLine": "1982年黎巴嫩战争,一辆坦克里的四名士兵,透过瞄准镜目睹了一场无法阻止的屠杀。",
    "url": "./movies/movie-1338.html",
    "cover": "./138.jpg",
    "category": "青春喜剧",
    "categoryUrl": "./category-youth-comedy.html"
  },
  {
    "id": "1339",
    "title": "悲惨的节日",
    "year": "2022",
    "region": "法国",
    "type": "电影",
    "genre": "剧情,惊悚",
    "tags": [
      "圣诞节",
      "小镇",
      "连环纵火",
      "家族秘密"
    ],
    "oneLine": "圣诞节前夕,一个法国小镇接连发生火灾,每起火场都留下一张贺卡。",
    "url": "./movies/movie-1339.html",
    "cover": "./139.jpg",
    "category": "奇幻科幻",
    "categoryUrl": "./category-fantasy-sci-fi.html"
  },
  {
    "id": "1340",
    "title": "空白世代",
    "year": "2026",
    "region": "日本",
    "type": "剧集",
    "genre": "悬疑/剧情/科幻",
    "tags": [
      "时间跳跃",
      "记忆缺失",
      "社会隐喻",
      "烧脑"
    ],
    "oneLine": "2011年3月11日,全世界所有人同时失去了24小时的记忆,被称为“空白世代”。",
    "url": "./movies/movie-1340.html",
    "cover": "./140.jpg",
    "category": "青春喜剧",
    "categoryUrl": "./category-youth-comedy.html"
  },
  {
    "id": "1341",
    "title": "花豹少女队",
    "year": "2024",
    "region": "南非",
    "type": "电影",
    "genre": "动作、冒险、青春",
    "tags": [
      "全女阵容",
      "荒野求生",
      "犯罪团伙",
      "热血"
    ],
    "oneLine": "五个被寄宿学校开除的叛逆少女,在非洲草原上意外组成团队,对抗偷猎集团。",
    "url": "./movies/movie-1341.html",
    "cover": "./141.jpg",
    "category": "院线热片",
    "categoryUrl": "./category-cinema-hits.html"
  },
  {
    "id": "1342",
    "title": "爱乐风雨情国语",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "genre": "音乐,爱情",
    "tags": [
      "交响乐",
      "聋人",
      "逆袭",
      "配音版"
    ],
    "oneLine": "失聪的小提琴手与叛逆的钢琴天才组建业余乐团,用音乐对抗各自的“无声世界”。",
    "url": "./movies/movie-1342.html",
    "cover": "./142.jpg",
    "category": "院线热片",
    "categoryUrl": "./category-cinema-hits.html"
  },
  {
    "id": "1343",
    "title": "圣诞追缉令",
    "year": "2022",
    "region": "美国",
    "type": "电影",
    "genre": "动作/喜剧/犯罪",
    "tags": [
      "圣诞",
      "杀手",
      "警察",
      "平安夜"
    ],
    "oneLine": "一个菜鸟警察和一名退休杀手在平安夜被迫组队,追捕一名穿着圣诞老人装的变态连环杀手。",
    "url": "./movies/movie-1343.html",
    "cover": "./143.jpg",
    "category": "院线热片",
    "categoryUrl": "./category-cinema-hits.html"
  },
  {
    "id": "1344",
    "title": "处女恋。",
    "year": "2022",
    "region": "日本",
    "type": "剧集",
    "genre": "爱情/喜剧",
    "tags": [
      "母胎单身",
      "二次元宅",
      "纯爱"
    ],
    "oneLine": "34岁从未谈过恋爱的腐女漫画家,被迫以真人为原型画少女漫画,却意外爱上自己的“素材”。",
    "url": "./movies/movie-1344.html",
    "cover": "./144.jpg",
    "category": "家庭生活",
    "categoryUrl": "./category-family-life.html"
  },
  {
    "id": "1345",
    "title": "失落的世界(下)",
    "year": "2021",
    "region": "美国",
    "type": "电影",
    "genre": "科幻,冒险,动作",
    "tags": [
      "恐龙",
      "岛屿",
      "生存",
      "视觉奇观"
    ],
    "oneLine": "幸存者们从高原坠入地下海洋,发现恐龙文明与人类末日预言的真实关联。",
    "url": "./movies/movie-1345.html",
    "cover": "./145.jpg",
    "category": "全球佳作",
    "categoryUrl": "./category-global-stories.html"
  },
  {
    "id": "1346",
    "title": "还珠格格第三部",
    "year": "2003",
    "region": "中国大陆,中国台湾",
    "type": "剧集",
    "genre": "古装,爱情,剧情",
    "tags": [
      "婚后生活",
      "宫廷危机",
      "知画登场"
    ],
    "oneLine": "小燕子和五阿哥成婚之后,深宫里的婆媳矛盾、情敌危机以及缅甸战事,让“红尘作伴”的誓言面临严峻考验。",
    "url": "./movies/movie-1346.html",
    "cover": "./146.jpg",
    "category": "热映精选",
    "categoryUrl": "./category-hot-picks.html"
  },
  {
    "id": "1347",
    "title": "京城教一粤语",
    "year": "2000",
    "region": "中国香港",
    "type": "电视剧",
    "genre": "动作/历史",
    "tags": [
      "武术",
      "京城",
      "师傅",
      "擂台",
      "粤语配音"
    ],
    "oneLine": "清末京城,一名来自广东的年轻武师挑战各大门派,只为寻回失落的《武经》总纲,重振“教一”之名。",
    "url": "./movies/movie-1347.html",
    "cover": "./147.jpg",
    "category": "剧集连看",
    "categoryUrl": "./category-drama-series.html"
  },
  {
    "id": "1348",
    "title": "成为选美小姐",
    "year": "2024",
    "region": "哥伦比亚/美国",
    "type": "电影",
    "genre": "剧情/喜剧",
    "tags": [
      "选美黑幕",
      "变性者参赛",
      "拉丁裔",
      "自我认同"
    ],
    "oneLine": "一位跨性别女性为了获得手术费用,假扮成“表妹”参加保守小镇的选美比赛,却发现自己真心爱上了这份虚假的“公主人生”。",
    "url": "./movies/movie-1348.html",
    "cover": "./148.jpg",
    "category": "热映精选",
    "categoryUrl": "./category-hot-picks.html"
  },
  {
    "id": "1349",
    "title": "风尘三侠之红拂女",
    "year": "2025",
    "region": "中国大陆",
    "type": "电影",
    "genre": "古装,动作,爱情",
    "tags": [
      "隋唐",
      "侠女",
      "自由"
    ],
    "oneLine": "红拂女夜奔李靖的故事新编,这次她不仅为了爱情,更要推翻整个风尘。",
    "url": "./movies/movie-1349.html",
    "cover": "./149.jpg",
    "category": "动作专区",
    "categoryUrl": "./category-action-zone.html"
  },
  {
    "id": "1350",
    "title": "俏女复仇",
    "year": "1988",
    "region": "中国台湾",
    "type": "电视剧",
    "genre": "剧情/家庭",
    "tags": [
      "苦情戏",
      "遗产争夺",
      "女性复仇",
      "闽南语",
      "认亲反转"
    ],
    "oneLine": "被赶出家门的私生女化身豪门最信任的看护,给每位亲人注射了“慢性忏悔剂”。",
    "url": "./movies/movie-1350.html",
    "cover": "./150.jpg",
    "category": "动作专区",
    "categoryUrl": "./category-action-zone.html"
  },
  {
    "id": "1351",
    "title": "彩排",
    "year": "2025",
    "region": "中国大陆",
    "type": "电影",
    "genre": "剧情/黑色喜剧",
    "tags": [
      "剧组",
      "荒诞",
      "人生如戏"
    ],
    "oneLine": "一个屡战屡败的龙套演员,被雇去给富豪们“彩排”人生最重要的时刻,结果每次都弄假成真。",
    "url": "./movies/movie-1351.html",
    "cover": "./1.jpg",
    "category": "剧集连看",
    "categoryUrl": "./category-drama-series.html"
  },
  {
    "id": "1352",
    "title": "拜托,请你爱我",
    "year": "2024",
    "region": "中国",
    "type": "电视剧",
    "genre": "爱情,喜剧,都市",
    "tags": [
      "契约婚姻",
      "先婚后爱",
      "职场恋情",
      "甜宠"
    ],
    "oneLine": "毒舌女律师为了打赢一场遗产官司,不得不假装与死对头男明星结婚,结果假戏真做成了全网最火的CP。",
    "url": "./movies/movie-1352.html",
    "cover": "./2.jpg",
    "category": "动作专区",
    "categoryUrl": "./category-action-zone.html"
  },
  {
    "id": "1353",
    "title": "达利和他的情人",
    "year": "2025",
    "region": "西班牙",
    "type": "电影",
    "genre": "爱情,传记,历史",
    "tags": [
      "超现实主义",
      "诗人",
      "洛尔迦",
      "禁忌之恋"
    ],
    "oneLine": "1920年代的马德里,年轻的天才达利为了逃避与诗人洛尔迦的同性之爱,将自己囚禁于疯狂的艺术创作中。",
    "url": "./movies/movie-1353.html",
    "cover": "./3.jpg",
    "category": "院线热片",
    "categoryUrl": "./category-cinema-hits.html"
  },
  {
    "id": "1354",
    "title": "安德鲁克里斯和狮子",
    "year": "2026",
    "region": "英国",
    "type": "电影",
    "genre": "历史,剧情",
    "tags": [
      "古罗马",
      "角斗士",
      "人与狮",
      "改编自寓言",
      "奴隶起义"
    ],
    "oneLine": "古罗马逃亡奴隶安德鲁克里斯在斗兽场面对一头饿了三天的雄狮,而那头狮子,是他曾经从荆棘里救出的小伤疤。",
    "url": "./movies/movie-1354.html",
    "cover": "./4.jpg",
    "category": "剧集连看",
    "categoryUrl": "./category-drama-series.html"
  },
  {
    "id": "1355",
    "title": "机智牢房生活国语",
    "year": "2017",
    "region": "韩国",
    "type": "电视剧",
    "genre": "剧情/喜剧",
    "tags": [
      "棒球明星",
      "监狱日常",
      "黑色幽默"
    ],
    "oneLine": "superstar 棒球投手一夜之间沦为阶下囚,却发现监狱里比球场上更需要“团队合作”。",
    "url": "./movies/movie-1355.html",
    "cover": "./5.jpg",
    "category": "历史古装",
    "categoryUrl": "./category-history-costume.html"
  },
  {
    "id": "1356",
    "title": "没有谎言",
    "year": "2023",
    "region": "韩国",
    "type": "剧集",
    "genre": "奇幻,爱情",
    "tags": [
      "谎言检测",
      "直球女",
      "政坛阴谋"
    ],
    "oneLine": "一个无法说谎的女人竞选总统,她的每一个真话都让政坛和民众彻底疯狂。",
    "url": "./movies/movie-1356.html",
    "cover": "./6.jpg",
    "category": "动作专区",
    "categoryUrl": "./category-action-zone.html"
  },
  {
    "id": "1357",
    "title": "海军罪案调查处第十一季",
    "year": "2013",
    "region": "美国",
    "type": "剧集",
    "genre": "犯罪,悬疑,剧情",
    "tags": [
      "军旅",
      "探案",
      "老牌"
    ],
    "oneLine": "主力成员接连离去,NCIS小组在老将吉布斯带领下迎来最难的一年。",
    "url": "./movies/movie-1357.html",
    "cover": "./7.jpg",
    "category": "热映精选",
    "categoryUrl": "./category-hot-picks.html"
  },
  {
    "id": "1358",
    "title": "模范生的禁爱秘密",
    "year": "2025",
    "region": "韩国",
    "type": "电视剧",
    "genre": "爱情,剧情,校园",
    "tags": [
      "女高",
      "同性",
      "优等生",
      "秘密",
      "救赎"
    ],
    "oneLine": "全校第一的模范生秀敏,与全校倒数的转学生恩在,因一次图书馆的偷吻,揭开了一段危险的校园禁爱。",
    "url": "./movies/movie-1358.html",
    "cover": "./8.jpg",
    "category": "奇幻科幻",
    "categoryUrl": "./category-fantasy-sci-fi.html"
  },
  {
    "id": "1359",
    "title": "同行",
    "year": "2022",
    "region": "中国大陆",
    "type": "电影",
    "genre": "剧情/公路",
    "tags": [
      "出租车",
      "陌生人",
      "一夜",
      "城市漫游"
    ],
    "oneLine": "一个想自杀的乘客,一个快失业的司机,他们在北京一夜穿行了整个五环。",
    "url": "./movies/movie-1359.html",
    "cover": "./9.jpg",
    "category": "历史古装",
    "categoryUrl": "./category-history-costume.html"
  },
  {
    "id": "1360",
    "title": "情乱萧山",
    "year": "2023",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "剧情/爱情/年代",
    "tags": [
      "民国商战",
      "家族恩怨",
      "替身新娘",
      "错爱"
    ],
    "oneLine": "萧山首富婚礼上,新娘被调包,新郎却在三年后才发现枕边人是冒牌货。",
    "url": "./movies/movie-1360.html",
    "cover": "./10.jpg",
    "category": "热映精选",
    "categoryUrl": "./category-hot-picks.html"
  },
  {
    "id": "1361",
    "title": "坏孩子",
    "year": "2023",
    "region": "中国台湾",
    "type": "电影",
    "genre": "剧情,犯罪",
    "tags": [
      "青少年",
      "暴力",
      "社会反思"
    ],
    "oneLine": "三好学生深夜纵火烧了校长室,被捕后却说出一句让所有大人沉默的话:“我只是想见我爸。",
    "url": "./movies/movie-1361.html",
    "cover": "./11.jpg",
    "category": "全球佳作",
    "categoryUrl": "./category-global-stories.html"
  },
  {
    "id": "1362",
    "title": "七天七夜",
    "year": "2026",
    "region": "俄罗斯",
    "type": "电影",
    "genre": "战争/剧情",
    "tags": [
      "斯大林格勒战役",
      "狙击手对决",
      "人性光辉",
      "极寒求生"
    ],
    "oneLine": "斯大林格勒废墟中,一个苏联菜鸟狙击手和一个德国王牌狙击手被困在同一栋楼里,开始了长达七天七夜的猫鼠游戏。",
    "url": "./movies/movie-1362.html",
    "cover": "./12.jpg",
    "category": "家庭生活",
    "categoryUrl": "./category-family-life.html"
  },
  {
    "id": "1363",
    "title": "咒怨:完结篇",
    "year": "2025",
    "region": "日本",
    "type": "电影",
    "genre": "恐怖",
    "tags": [
      "诅咒",
      "轮回",
      "终结",
      "伽椰子",
      "佐伯俊雄"
    ],
    "oneLine": "咒怨的源头——伽椰子的母亲突然出现,声称可以用“血祭”彻底终结诅咒,代价是所有参与者的性命。",
    "url": "./movies/movie-1363.html",
    "cover": "./13.jpg",
    "category": "全球佳作",
    "categoryUrl": "./category-global-stories.html"
  },
  {
    "id": "1364",
    "title": "前桥魔女",
    "year": "2024",
    "region": "日本",
    "type": "剧集",
    "genre": "奇幻,青春",
    "tags": [
      "魔法少女",
      "小镇",
      "友情",
      "成长"
    ],
    "oneLine": "前桥市的五个女高中生发现,只要在特定的桥栏杆上涂鸦,就能实现一个愿望,但必须支付等价的记忆。",
    "url": "./movies/movie-1364.html",
    "cover": "./14.jpg",
    "category": "院线热片",
    "categoryUrl": "./category-cinema-hits.html"
  },
  {
    "id": "1365",
    "title": "辣妞征集",
    "year": "2025",
    "region": "美国",
    "type": "剧集",
    "genre": "青春喜剧",
    "tags": [
      "啦啦队",
      "高中",
      "逆袭",
      "友情",
      "竞技"
    ],
    "oneLine": "五个被校啦啦队开除的“怪胎”女生,自己组建了一支史上最烂、但最有态度的竞技啦啦队。",
    "url": "./movies/movie-1365.html",
    "cover": "./15.jpg",
    "category": "都市爱情",
    "categoryUrl": "./category-romance-city.html"
  },
  {
    "id": "1366",
    "title": "黑洞启示录",
    "year": "2024",
    "region": "美国",
    "type": "电影",
    "genre": "科幻灾难",
    "tags": [
      "天体物理",
      "硬科幻",
      "人类存亡",
      "末日求生"
    ],
    "oneLine": "一颗流浪黑洞闯入太阳系,人类在绝对引力面前,建造了最后一艘方舟飞向宇宙深处。",
    "url": "./movies/movie-1366.html",
    "cover": "./16.jpg",
    "category": "青春喜剧",
    "categoryUrl": "./category-youth-comedy.html"
  },
  {
    "id": "1367",
    "title": "搜索并摧毁",
    "year": "1988",
    "region": "美国",
    "type": "电影",
    "genre": "动作,战争",
    "tags": [
      "越战",
      "特种兵",
      "复仇",
      "丛林"
    ],
    "oneLine": "越战结束十年后,一支美军秘密小队重返热带丛林,不是为了国家,而是为了寻回埋藏在腐叶下的真相。",
    "url": "./movies/movie-1367.html",
    "cover": "./17.jpg",
    "category": "都市爱情",
    "categoryUrl": "./category-romance-city.html"
  },
  {
    "id": "1368",
    "title": "秘密战队五连者 炸弹飓风",
    "year": "1976",
    "region": "日本",
    "type": "电影",
    "genre": "动作/科幻",
    "tags": [
      "特摄",
      "超级英雄",
      "爆炸",
      "经典",
      "团队作战"
    ],
    "oneLine": "黑十字军引爆超新型炸弹飓风,五连者必须在东京被吹成废墟前的24小时内找出拆弹密码。",
    "url": "./movies/movie-1368.html",
    "cover": "./18.jpg",
    "category": "院线热片",
    "categoryUrl": "./category-cinema-hits.html"
  },
  {
    "id": "1369",
    "title": "幸福特快车",
    "year": "2025",
    "region": "日本",
    "type": "电影",
    "genre": "剧情/奇幻",
    "tags": [
      "时间循环",
      "电车",
      "人生选择",
      "治愈"
    ],
    "oneLine": "一列只有失意者才能搭乘的午夜电车,每站都停靠在人生后悔的某个瞬间。",
    "url": "./movies/movie-1369.html",
    "cover": "./19.jpg",
    "category": "青春喜剧",
    "categoryUrl": "./category-youth-comedy.html"
  },
  {
    "id": "1370",
    "title": "鹊刀门传奇第二季",
    "year": "2025",
    "region": "中国大陆",
    "type": "电视剧",
    "genre": "喜剧,武侠",
    "tags": [
      "东北武林",
      "江湖",
      "搞笑"
    ],
    "oneLine": "为了对抗新的神秘东厂势力,西门长在被迫重出江湖,却发现整个鹊刀门都陷入了“剧本杀”式的武林迷局。",
    "url": "./movies/movie-1370.html",
    "cover": "./20.jpg",
    "category": "都市爱情",
    "categoryUrl": "./category-romance-city.html"
  },
  {
    "id": "1371",
    "title": "苹果饺子团又来了",
    "year": "2025",
    "region": "中国台湾",
    "type": "电影",
    "genre": "喜剧/家庭/剧情",
    "tags": [
      "乡土",
      "亲情",
      "返乡",
      "美食",
      "邻里"
    ],
    "oneLine": "一个失败的北漂乐团被迫回乡,和村里的阿婆们组成了“苹果饺子”合唱团,准备参加全国大赛。",
    "url": "./movies/movie-1371.html",
    "cover": "./21.jpg",
    "category": "经典片库",
    "categoryUrl": "./category-classic-library.html"
  },
  {
    "id": "1372",
    "title": "疯狂大营救",
    "year": "2022",
    "region": "法国",
    "type": "动画电影",
    "genre": "动画,喜剧,冒险",
    "tags": [
      "越狱",
      "动物",
      "法式幽默",
      "合家欢"
    ],
    "oneLine": "一只自以为是特工的仓鼠带领动物园伙伴们闯入最高安保监狱,只为救出被冤枉的好友——一只不会飞的鹦鹉。",
    "url": "./movies/movie-1372.html",
    "cover": "./22.jpg",
    "category": "悬疑夜场",
    "categoryUrl": "./category-suspense-night.html"
  },
  {
    "id": "1373",
    "title": "火蝴蝶2008",
    "year": "2008",
    "region": "中国香港",
    "type": "剧集",
    "genre": "爱情、家族、商战",
    "tags": [
      "复仇",
      "豪门恩怨",
      "姐妹反目",
      "时尚设计",
      "凤凰涅槃"
    ],
    "oneLine": "善良灰姑娘遭妹妹陷害毁容后化身“火蝴蝶”,向夺走她一切的名媛妹妹展开华丽复仇。",
    "url": "./movies/movie-1373.html",
    "cover": "./23.jpg",
    "category": "青春喜剧",
    "categoryUrl": "./category-youth-comedy.html"
  },
  {
    "id": "1374",
    "title": "喜剧之王单口季第二季",
    "year": "2025",
    "region": "中国大陆",
    "type": "综艺",
    "genre": "喜剧/真人秀",
    "tags": [
      "脱口秀",
      "竞技",
      "单口喜剧",
      "周星驰",
      "新人"
    ],
    "oneLine": "周星驰担任发起人,全国最会讲段子的人汇聚一堂,只为争夺新一代“喜剧之王”的称号。",
    "url": "./movies/movie-1374.html",
    "cover": "./24.jpg",
    "category": "院线热片",
    "categoryUrl": "./category-cinema-hits.html"
  },
  {
    "id": "1375",
    "title": "哥哥",
    "year": "2021",
    "region": "日本",
    "type": "电影",
    "genre": "家庭,剧情",
    "tags": [
      "兄弟情",
      "自闭症",
      "成长"
    ],
    "oneLine": "患有自闭症的哥哥被家人嫌弃了三十年,直到弟弟破产带着女儿搬回家,才发现哥哥一直在默默记录着全家人的健康。",
    "url": "./movies/movie-1375.html",
    "cover": "./25.jpg",
    "category": "家庭生活",
    "categoryUrl": "./category-family-life.html"
  },
  {
    "id": "1376",
    "title": "希林公主",
    "year": "2024",
    "region": "伊朗/法国",
    "type": "电影",
    "genre": "剧情/历史",
    "tags": [
      "女权",
      "波斯史诗",
      "戏中戏",
      "凝视"
    ],
    "oneLine": "电影院里的女人们在看一部叫《希林公主》的电影,而你只能看到她们的脸。",
    "url": "./movies/movie-1376.html",
    "cover": "./26.jpg",
    "category": "历史古装",
    "categoryUrl": "./category-history-costume.html"
  },
  {
    "id": "1377",
    "title": "汽车城",
    "year": "2024",
    "region": "美国",
    "type": "剧集",
    "genre": "剧情、家族、商战",
    "tags": [
      "底特律",
      "汽车工业",
      "家族恩怨"
    ],
    "oneLine": "底特律衰落的汽车帝国里,三个同父异母的子女争夺继承权,却发现父亲还藏着一个机器人“儿子”。",
    "url": "./movies/movie-1377.html",
    "cover": "./27.jpg",
    "category": "历史古装",
    "categoryUrl": "./category-history-costume.html"
  },
  {
    "id": "1378",
    "title": "影之地带",
    "year": "2026",
    "region": "日本",
    "type": "电影",
    "genre": "悬疑,奇幻,剧情",
    "tags": [
      "影子",
      "谋杀",
      "替身",
      "小镇"
    ],
    "oneLine": "小镇居民们的影子开始脱离身体独立行动,并模仿主人犯下从未发生的罪行。",
    "url": "./movies/movie-1378.html",
    "cover": "./28.jpg",
    "category": "院线热片",
    "categoryUrl": "./category-cinema-hits.html"
  },
  {
    "id": "1379",
    "title": "纯美的相遇",
    "year": "2003",
    "region": "韩国",
    "type": "电影",
    "genre": "爱情,剧情,文艺",
    "tags": [
      "绝症",
      "钢琴",
      "雨中重逢"
    ],
    "oneLine": "失明钢琴家与绝症调香师约定:她死后,用她的骨灰制成一瓶香水,他就能重见光明。",
    "url": "./movies/movie-1379.html",
    "cover": "./29.jpg",
    "category": "剧集连看",
    "categoryUrl": "./category-drama-series.html"
  },
  {
    "id": "1380",
    "title": "保持站立",
    "year": "2025",
    "region": "法国",
    "type": "电影",
    "genre": "剧情/伦理",
    "tags": [
      "法式荒诞",
      "人性实验",
      "政治隐喻"
    ],
    "oneLine": "一位信奉“永远不跪”的哲学教授被绑架后,发现绑匪要求他在24小时内主动跪下一次。",
    "url": "./movies/movie-1380.html",
    "cover": "./30.jpg",
    "category": "家庭生活",
    "categoryUrl": "./category-family-life.html"
  },
  {
    "id": "1381",
    "title": "猎魔人之幽冥号角",
    "year": "2026",
    "region": "美国",
    "type": "电影",
    "genre": "奇幻动作",
    "tags": [
      "恶魔",
      "神器",
      "中世纪",
      "猎魔"
    ],
    "oneLine": "一名失去听觉的退役猎魔人,必须用古老号角吹出的无声音波,猎杀能读取人类恐惧的恶魔。",
    "url": "./movies/movie-1381.html",
    "cover": "./31.jpg",
    "category": "悬疑夜场",
    "categoryUrl": "./category-suspense-night.html"
  },
  {
    "id": "1382",
    "title": "小电影家",
    "year": "2025",
    "region": "中国大陆",
    "type": "电影",
    "genre": "儿童剧情",
    "tags": [
      "成长",
      "梦想",
      "乡村"
    ],
    "oneLine": "80年代的陕北农村,一个爱看露天电影的孩子为了给病重姐姐圆梦,用废旧纸盒造出了一台“摄像机”。",
    "url": "./movies/movie-1382.html",
    "cover": "./32.jpg",
    "category": "悬疑夜场",
    "categoryUrl": "./category-suspense-night.html"
  },
  {
    "id": "1383",
    "title": "巧奔妙逃",
    "year": "2025",
    "region": "中国大陆",
    "type": "电影",
    "genre": "喜剧,动作",
    "tags": [
      "越狱",
      "乌龙",
      "小人物",
      "高智商"
    ],
    "oneLine": "十八线小镇的五个奇葩囚犯,策划了一场漏洞百出的越狱,却阴差阳错成了揭发监狱黑幕的英雄。",
    "url": "./movies/movie-1383.html",
    "cover": "./33.jpg",
    "category": "动作专区",
    "categoryUrl": "./category-action-zone.html"
  },
  {
    "id": "1384",
    "title": "小镇猪事",
    "year": "2023",
    "region": "中国大陆",
    "type": "电影",
    "genre": "喜剧/剧情",
    "tags": [
      "农村",
      "黑色幽默",
      "拆迁",
      "动物"
    ],
    "oneLine": "养猪大户的母猪突然会说话了,它告诉主人:开发商要在猪圈下建地铁,千万别签拆迁协议。",
    "url": "./movies/movie-1384.html",
    "cover": "./34.jpg",
    "category": "历史古装",
    "categoryUrl": "./category-history-costume.html"
  },
  {
    "id": "1385",
    "title": "杯酒人生",
    "year": "2024",
    "region": "西班牙",
    "type": "电影",
    "genre": "剧情,生活,美食",
    "tags": [
      "葡萄酒",
      "中年",
      "友情",
      "疗愈",
      "人生选择"
    ],
    "oneLine": "两位失意的中年大叔,踏上西班牙最著名的葡萄酒产区之旅,每开一瓶酒,就揭开一段关于遗憾的秘密。",
    "url": "./movies/movie-1385.html",
    "cover": "./35.jpg",
    "category": "奇幻科幻",
    "categoryUrl": "./category-fantasy-sci-fi.html"
  },
  {
    "id": "1386",
    "title": "同志音乐会",
    "year": "2021",
    "region": "中国台湾",
    "type": "电影",
    "genre": "同性,音乐",
    "tags": [
      "同志",
      "乐队",
      "青春",
      "出柜"
    ],
    "oneLine": "高中管乐团的首席小号手,为了追求暗恋的学长,把舒伯特的《鳟鱼》改编成了出柜宣言。",
    "url": "./movies/movie-1386.html",
    "cover": "./36.jpg",
    "category": "剧集连看",
    "categoryUrl": "./category-drama-series.html"
  },
  {
    "id": "1387",
    "title": "侏罗纪世界:殒落国度",
    "year": "2018",
    "region": "美国",
    "type": "电影",
    "genre": "动作、科幻、冒险",
    "tags": [
      "恐龙",
      "火山爆发",
      "拯救",
      "基因",
      "惊悚"
    ],
    "oneLine": "纳布拉尔岛火山即将喷发,欧文和克莱尔重返危险地带,不仅要拯救恐龙,更要阻止基因黑市的罪恶交易。",
    "url": "./movies/movie-1387.html",
    "cover": "./37.jpg",
    "category": "家庭生活",
    "categoryUrl": "./category-family-life.html"
  },
  {
    "id": "1388",
    "title": "卢卡斯兄弟搬家公司 第一季",
    "year": "2025",
    "region": "美国",
    "type": "剧集",
    "genre": "喜剧,生活",
    "tags": [
      "兄弟",
      "搬家公司",
      "单元剧"
    ],
    "oneLine": "一对相爱相杀的亲兄弟经营着洛杉矶最不靠谱的搬家公司,每一扇门背后都是一场鸡飞狗跳的人生闹剧。",
    "url": "./movies/movie-1388.html",
    "cover": "./38.jpg",
    "category": "热映精选",
    "categoryUrl": "./category-hot-picks.html"
  },
  {
    "id": "1389",
    "title": "有罪",
    "year": "2025",
    "region": "西班牙",
    "type": "电影",
    "genre": "剧情,惊悚,法庭",
    "tags": [
      "无罪推定",
      "陪审团",
      "心理操控",
      "冤案"
    ],
    "oneLine": "十二名陪审员中,十一人认定他有罪,只有一人坚持反对,但她发现那十一人都是被害人家属假扮的。",
    "url": "./movies/movie-1389.html",
    "cover": "./39.jpg",
    "category": "青春喜剧",
    "categoryUrl": "./category-youth-comedy.html"
  },
  {
    "id": "1390",
    "title": "萧十一郎",
    "year": "2025",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "武侠/古装",
    "tags": [
      "古龙",
      "江湖",
      "侠盗",
      "悲剧",
      "翻拍"
    ],
    "oneLine": "新版“萧十一郎”不再是大盗,而是一个只想替亡妻讨回清白的蒙面铁匠。",
    "url": "./movies/movie-1390.html",
    "cover": "./40.jpg",
    "category": "奇幻科幻",
    "categoryUrl": "./category-fantasy-sci-fi.html"
  },
  {
    "id": "1391",
    "title": "牵手向明天",
    "year": "2025",
    "region": "中国台湾",
    "type": "剧集",
    "genre": "爱情/家庭/音乐",
    "tags": [
      "盲人钢琴家",
      "导盲犬",
      "治愈系",
      "台剧"
    ],
    "oneLine": "天才盲人钢琴家与被开除的警犬训练师,一人一狗一琴,重组破碎的人生。",
    "url": "./movies/movie-1391.html",
    "cover": "./41.jpg",
    "category": "经典片库",
    "categoryUrl": "./category-classic-library.html"
  },
  {
    "id": "1392",
    "title": "摇滚都市第三季",
    "year": "2025",
    "region": "日本",
    "type": "动画剧集",
    "genre": "音乐,奇幻",
    "tags": [
      "摇滚",
      "平行世界",
      "乐队",
      "新角色",
      "高燃"
    ],
    "oneLine": "前两季的乐队全员消失,四个来自“负音波宇宙”的新人闯入摇滚都市,试图用噪音制造和平。",
    "url": "./movies/movie-1392.html",
    "cover": "./42.jpg",
    "category": "剧集连看",
    "categoryUrl": "./category-drama-series.html"
  },
  {
    "id": "1393",
    "title": "五星圣诞节",
    "year": "2024",
    "region": "挪威/瑞典",
    "type": "电影",
    "genre": "喜剧,爱情,节日",
    "tags": [
      "北欧风",
      "治愈",
      "反套路"
    ],
    "oneLine": "一个极度社恐的北欧宅男为了应付父母,雇佣了一个“假女友”回家过圣诞,结果对方竟是正在逃亡的环保公主。",
    "url": "./movies/movie-1393.html",
    "cover": "./43.jpg",
    "category": "热映精选",
    "categoryUrl": "./category-hot-picks.html"
  },
  {
    "id": "1394",
    "title": "燃情密码",
    "year": "2023",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "悬疑/刑侦/爱情",
    "tags": [
      "消防员",
      "悬疑破案",
      "回忆杀",
      "搭档",
      "职场"
    ],
    "oneLine": "一场诡异的连环纵火案,将一位冷静的女火调员与她曾经的恋人——如今的特勤队长重新捆绑。",
    "url": "./movies/movie-1394.html",
    "cover": "./44.jpg",
    "category": "青春喜剧",
    "categoryUrl": "./category-youth-comedy.html"
  },
  {
    "id": "1395",
    "title": "桃色刽子手",
    "year": "1999",
    "region": "中国香港",
    "type": "电影",
    "genre": "惊悚、犯罪、情色",
    "tags": [
      "连环杀手",
      "桃色陷阱",
      "黑色电影",
      "复仇",
      "港风"
    ],
    "oneLine": "一个男人专杀不忠的女人,每个死者嘴里都含着一朵桃花。",
    "url": "./movies/movie-1395.html",
    "cover": "./45.jpg",
    "category": "都市爱情",
    "categoryUrl": "./category-romance-city.html"
  },
  {
    "id": "1396",
    "title": "铁血金戈",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "genre": "战争/历史/动作",
    "tags": [
      "古代战争",
      "冷兵器",
      "忠义",
      "兄弟情",
      "悲壮"
    ],
    "oneLine": "唐朝安史之乱中,一支被朝廷抛弃的残军,用血肉筑起了最后一道防线。",
    "url": "./movies/movie-1396.html",
    "cover": "./46.jpg",
    "category": "青春喜剧",
    "categoryUrl": "./category-youth-comedy.html"
  },
  {
    "id": "1397",
    "title": "行尸村里走",
    "year": "2024",
    "region": "中国大陆",
    "type": "电视剧",
    "genre": "喜剧/恐怖/乡村",
    "tags": [
      "丧尸",
      "农村",
      "黑色幽默",
      "土味"
    ],
    "oneLine": "丧尸病毒爆发后,几个社恐村霸躲进地窖,却发现丧尸怕打麻将和广场舞。",
    "url": "./movies/movie-1397.html",
    "cover": "./47.jpg",
    "category": "历史古装",
    "categoryUrl": "./category-history-costume.html"
  },
  {
    "id": "1398",
    "title": "仙境绑架案",
    "year": "2026",
    "region": "美国",
    "type": "电影",
    "genre": "犯罪/悬疑/动作",
    "tags": [
      "虚拟现实",
      "绑架",
      "富二代",
      "密室逃脱"
    ],
    "oneLine": "富豪之子在虚拟游戏“仙境”中被绑架,绑匪要求全世界的玩家帮他通关才能赎人。",
    "url": "./movies/movie-1398.html",
    "cover": "./48.jpg",
    "category": "经典片库",
    "categoryUrl": "./category-classic-library.html"
  },
  {
    "id": "1399",
    "title": "蒙梭罗夫人",
    "year": "2026",
    "region": "法国",
    "type": "剧集",
    "genre": "剧情/历史",
    "tags": [
      "大仲马",
      "宫廷",
      "复仇"
    ],
    "oneLine": "改编自大仲马原著,法国宗教战争背景下,一个女人和四个男人之间的爱情、阴谋与不死不休的复仇。",
    "url": "./movies/movie-1399.html",
    "cover": "./49.jpg",
    "category": "家庭生活",
    "categoryUrl": "./category-family-life.html"
  },
  {
    "id": "1400",
    "title": "男人四十上高中",
    "year": "2023",
    "region": "中国大陆",
    "type": "电影",
    "genre": "喜剧/剧情",
    "tags": [
      "黑色幽默",
      "成人高考",
      "中年危机",
      "代际冲突",
      "励志"
    ],
    "oneLine": "四十岁的包工头为兑现对亡妻的承诺走进高中课堂,却发现班主任是自己二十年前的儿子。",
    "url": "./movies/movie-1400.html",
    "cover": "./50.jpg",
    "category": "青春喜剧",
    "categoryUrl": "./category-youth-comedy.html"
  },
  {
    "id": "1401",
    "title": "布考斯基",
    "year": "2011",
    "region": "美国",
    "type": "电影",
    "genre": "传记,剧情",
    "tags": [
      "作家",
      "酒鬼",
      "底层",
      "洛杉矶"
    ],
    "oneLine": "落魄作家在洛杉矶廉价旅馆里喝酒、打字、睡女人,十年后成了“贫民窟的桂冠诗人”。",
    "url": "./movies/movie-1401.html",
    "cover": "./51.jpg",
    "category": "都市爱情",
    "categoryUrl": "./category-romance-city.html"
  },
  {
    "id": "1402",
    "title": "战栗",
    "year": "2020",
    "region": "韩国",
    "type": "电影",
    "genre": "悬疑,恐怖,犯罪",
    "tags": [
      "连环杀人",
      "心理扭曲",
      "录音带",
      "反转",
      "密室"
    ],
    "oneLine": "一个失明的广播节目制作人,收到了一盘记录着真实杀人过程的“立体声”录音带。",
    "url": "./movies/movie-1402.html",
    "cover": "./52.jpg",
    "category": "热映精选",
    "categoryUrl": "./category-hot-picks.html"
  },
  {
    "id": "1403",
    "title": "新扎师姐3:百分百型警",
    "year": "2004",
    "region": "中国香港",
    "type": "电影",
    "genre": "动作,喜剧",
    "tags": [
      "卧底",
      "时尚",
      "女警",
      "港式无厘头"
    ],
    "oneLine": "警校最不守规矩的辣妹学员,被选去时装杂志社卧底,抓捕用高级定制礼服走私钻石的跨国团伙。",
    "url": "./movies/movie-1403.html",
    "cover": "./53.jpg",
    "category": "热映精选",
    "categoryUrl": "./category-hot-picks.html"
  },
  {
    "id": "1404",
    "title": "最后的木琴师",
    "year": "2026",
    "region": "泰国",
    "type": "电影",
    "genre": "剧情/音乐/家庭",
    "tags": [
      "泰国东北部",
      "传统艺术",
      "师徒",
      "消失的技艺",
      "催泪"
    ],
    "oneLine": "泰国东北部最后一位木琴老艺人,为了不让技艺失传,收了一个听不见声音的哑巴徒弟。",
    "url": "./movies/movie-1404.html",
    "cover": "./54.jpg",
    "category": "院线热片",
    "categoryUrl": "./category-cinema-hits.html"
  },
  {
    "id": "1405",
    "title": "幻梦情",
    "year": "2026",
    "region": "中国大陆",
    "type": "电影",
    "genre": "爱情/奇幻/悬疑",
    "tags": [
      "梦境穿梭",
      "失忆爱人",
      "平行选择"
    ],
    "oneLine": "她每晚都会梦见同一个男人,但现实中他从未存在过,直到她发现所有梦都发生在同一间停业的电影院。",
    "url": "./movies/movie-1405.html",
    "cover": "./55.jpg",
    "category": "经典片库",
    "categoryUrl": "./category-classic-library.html"
  },
  {
    "id": "1406",
    "title": "大闹广昌隆1993国语",
    "year": "1993",
    "region": "中国香港",
    "type": "电影",
    "genre": "恐怖/喜剧",
    "tags": [
      "人鬼情",
      "粤语残片",
      "南洋",
      "卖药郎"
    ],
    "oneLine": "一个卖假药的江湖骗子住进闹鬼酒店,发现女鬼竟是自己从未谋面、含冤而死的娃娃亲妻子。",
    "url": "./movies/movie-1406.html",
    "cover": "./56.jpg",
    "category": "热映精选",
    "categoryUrl": "./category-hot-picks.html"
  },
  {
    "id": "1407",
    "title": "娘心",
    "year": "2013",
    "region": "中国台湾/中国大陆",
    "type": "剧集",
    "genre": "家庭/苦情",
    "tags": [
      "年代剧",
      "母爱",
      "虐心",
      "台湾乡土",
      "复仇"
    ],
    "oneLine": "一个柔弱的日据时代台湾女人,被命运逼成了最狠的复仇者,只为守护儿女。",
    "url": "./movies/movie-1407.html",
    "cover": "./57.jpg",
    "category": "青春喜剧",
    "categoryUrl": "./category-youth-comedy.html"
  },
  {
    "id": "1408",
    "title": "血誓军魂",
    "year": "2024",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "历史/战争",
    "tags": [
      "抗日战争",
      "川军",
      "兄弟情",
      "史诗",
      "硬核"
    ],
    "oneLine": "1937年,一群衣衫褴褛的四川士兵穿着草鞋走出大山,他们签下的不是军令状,而是一封封提前写好的家书——遗书。",
    "url": "./movies/movie-1408.html",
    "cover": "./58.jpg",
    "category": "热映精选",
    "categoryUrl": "./category-hot-picks.html"
  },
  {
    "id": "1409",
    "title": "黑白线人",
    "year": "2024",
    "region": "中国香港",
    "type": "电影",
    "genre": "动作/剧情/犯罪",
    "tags": [
      "卧底",
      "人性挣扎",
      "港风",
      "父子情",
      "悲剧美学"
    ],
    "oneLine": "为了救回沦为植物人的父亲,一名警察主动申请潜入黑帮,却发现父亲曾是黑帮的“白手套”。",
    "url": "./movies/movie-1409.html",
    "cover": "./59.jpg",
    "category": "都市爱情",
    "categoryUrl": "./category-romance-city.html"
  },
  {
    "id": "1410",
    "title": "魔王(电影)",
    "year": "2024",
    "region": "日本",
    "type": "电影",
    "genre": "悬疑/犯罪/剧情",
    "tags": [
      "复仇",
      "法律边缘",
      "天才犯罪"
    ],
    "oneLine": "十五年前因证据不足被无罪释放的连续杀人犯,开始收到自称“魔王”的死亡预告函。",
    "url": "./movies/movie-1410.html",
    "cover": "./60.jpg",
    "category": "都市爱情",
    "categoryUrl": "./category-romance-city.html"
  },
  {
    "id": "1411",
    "title": "小鬼翘家",
    "year": "1994",
    "region": "美国",
    "type": "电影",
    "genre": "家庭/喜剧",
    "tags": [
      "离家出走",
      "公路片",
      "童年",
      "友谊"
    ],
    "oneLine": "两个不满父母严管的8岁男孩策划“完美翘家”,却带上了邻居家4岁的“拖油瓶”女孩。",
    "url": "./movies/movie-1411.html",
    "cover": "./61.jpg",
    "category": "悬疑夜场",
    "categoryUrl": "./category-suspense-night.html"
  },
  {
    "id": "1412",
    "title": "斯塔斯",
    "year": "2024",
    "region": "俄罗斯",
    "type": "电影",
    "genre": "战争/历史",
    "tags": [
      "二战",
      "狙击手",
      "苏联",
      "雪原",
      "真实改编"
    ],
    "oneLine": "苏联传奇狙击手斯塔斯,在斯大林格勒战役中用一把无瞄准镜的莫辛-纳甘,狙杀 242 名德军。",
    "url": "./movies/movie-1412.html",
    "cover": "./62.jpg",
    "category": "经典片库",
    "categoryUrl": "./category-classic-library.html"
  },
  {
    "id": "1413",
    "title": "完全家族",
    "year": "2021",
    "region": "日本",
    "type": "电影",
    "genre": "剧情,家庭,悬疑",
    "tags": [
      "无血缘家庭",
      "共生关系",
      "伦理边缘",
      "社会讽刺"
    ],
    "oneLine": "一个出租“家人”的公司,接到了一单特殊的订单:为一只猫组建一个家族。",
    "url": "./movies/movie-1413.html",
    "cover": "./63.jpg",
    "category": "历史古装",
    "categoryUrl": "./category-history-costume.html"
  },
  {
    "id": "1414",
    "title": "爷爷的人生滑板",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "genre": "家庭喜剧",
    "tags": [
      "代沟",
      "网红",
      "滑板",
      "治愈"
    ],
    "oneLine": "七十岁丧偶老头为治愈社恐,自学滑板成了网红,气坏了精英儿子。",
    "url": "./movies/movie-1414.html",
    "cover": "./64.jpg",
    "category": "全球佳作",
    "categoryUrl": "./category-global-stories.html"
  },
  {
    "id": "1415",
    "title": "铁血英豪",
    "year": "2025",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "战争/历史/动作",
    "tags": [
      "抗战",
      "兄弟情",
      "战术",
      "热血"
    ],
    "oneLine": "1937年,一群逃兵误打误撞穿上国军精锐尸体上的装备,被迫扮演英雄死守孤城。",
    "url": "./movies/movie-1415.html",
    "cover": "./65.jpg",
    "category": "悬疑夜场",
    "categoryUrl": "./category-suspense-night.html"
  },
  {
    "id": "1416",
    "title": "爱情发芽中",
    "year": "2023",
    "region": "中国台湾",
    "type": "电影",
    "genre": "爱情、喜剧",
    "tags": [
      "都市田园",
      "反差萌",
      "美食治愈",
      "慢生活"
    ],
    "oneLine": "投资女高管下乡收购土地,却被当地呆萌农民的有机蔬菜和淳朴笑容“套牢”。",
    "url": "./movies/movie-1416.html",
    "cover": "./66.jpg",
    "category": "热映精选",
    "categoryUrl": "./category-hot-picks.html"
  },
  {
    "id": "1417",
    "title": "山羽异闻",
    "year": "2022",
    "region": "中国台湾",
    "type": "电影",
    "genre": "民俗恐怖",
    "tags": [
      "深山",
      "邪教",
      "失踪案",
      "羽毛",
      "仪式"
    ],
    "oneLine": "一支登山队在深山中捡到一根奇异的羽毛,从此接连遭遇毛骨悚然的怪事。",
    "url": "./movies/movie-1417.html",
    "cover": "./67.jpg",
    "category": "青春喜剧",
    "categoryUrl": "./category-youth-comedy.html"
  },
  {
    "id": "1418",
    "title": "6号叩应女郎",
    "year": "2025",
    "region": "中国台湾",
    "type": "电影",
    "genre": "悬疑心理惊悚",
    "tags": [
      "电台",
      "直播杀人",
      "都市传说",
      "电话惊魂",
      "反转"
    ],
    "oneLine": "深夜电台第6线来电者自称杀了人,主持人以为是恶作剧,直到警车包围了电台大楼。",
    "url": "./movies/movie-1418.html",
    "cover": "./68.jpg",
    "category": "历史古装",
    "categoryUrl": "./category-history-costume.html"
  },
  {
    "id": "1419",
    "title": "远雷",
    "year": "1981",
    "region": "日本",
    "type": "电影",
    "genre": "剧情,历史",
    "tags": [
      "农村",
      "贫困",
      "人性"
    ],
    "oneLine": "昭和初期的贫瘠山村,一个男人为了争夺水源,不惜与整个家族和腐朽的村规为敌。",
    "url": "./movies/movie-1419.html",
    "cover": "./69.jpg",
    "category": "剧集连看",
    "categoryUrl": "./category-drama-series.html"
  },
  {
    "id": "1420",
    "title": "站在你背后",
    "year": "2024",
    "region": "中国香港",
    "type": "剧集",
    "genre": "悬疑/犯罪/心理",
    "tags": [
      "警方谈判专家",
      "连环跳楼案",
      "记忆操控",
      "背叛"
    ],
    "oneLine": "王牌谈判专家接连遭遇三起离奇跳楼案,死者跳楼前都说了一句:“你身后有人。",
    "url": "./movies/movie-1420.html",
    "cover": "./70.jpg",
    "category": "全球佳作",
    "categoryUrl": "./category-global-stories.html"
  },
  {
    "id": "1421",
    "title": "大发不动产",
    "year": "2021",
    "region": "韩国",
    "type": "剧集",
    "genre": "奇幻,悬疑,喜剧",
    "tags": [
      "驱魔",
      "不动产",
      "中介",
      "女巫"
    ],
    "oneLine": "一家专门代理凶宅的公司,老板娘负责驱鬼,合伙人负责卖房,两人联手解决物业界的灵异纠纷。",
    "url": "./movies/movie-1421.html",
    "cover": "./71.jpg",
    "category": "都市爱情",
    "categoryUrl": "./category-romance-city.html"
  },
  {
    "id": "1422",
    "title": "四只脚趾",
    "year": "2025",
    "region": "美国",
    "type": "电影",
    "genre": "恐怖,惊悚",
    "tags": [
      "遗传病",
      "畸形",
      "家族诅咒",
      "深山老宅"
    ],
    "oneLine": "一个拥有四只脚趾的畸形家族,为了延续血脉,绑架游客进行“脚趾嫁接”手术。",
    "url": "./movies/movie-1422.html",
    "cover": "./72.jpg",
    "category": "都市爱情",
    "categoryUrl": "./category-romance-city.html"
  },
  {
    "id": "1423",
    "title": "魔人侦探食脑奈罗",
    "year": "2007",
    "region": "日本",
    "type": "剧集",
    "genre": "悬疑,奇幻,犯罪",
    "tags": [
      "魔界侦探",
      "猎奇案件",
      "漫改"
    ],
    "oneLine": "来自魔界的食脑魔王附身女高中生,用吃掉谜团的方式破案。",
    "url": "./movies/movie-1423.html",
    "cover": "./73.jpg",
    "category": "热映精选",
    "categoryUrl": "./category-hot-picks.html"
  },
  {
    "id": "1424",
    "title": "木偶卡通大电影",
    "year": "2018",
    "region": "美国",
    "type": "动画电影",
    "genre": "喜剧、歌舞、家庭",
    "tags": [
      "木偶戏",
      "反派洗白",
      "明星客串"
    ],
    "oneLine": "一群过气木偶演员为了拯救剧场,假装绑架了自己的创造者,结果假戏真做成了英雄。",
    "url": "./movies/movie-1424.html",
    "cover": "./74.jpg",
    "category": "经典片库",
    "categoryUrl": "./category-classic-library.html"
  },
  {
    "id": "1425",
    "title": "不法之徒1986",
    "year": "2024",
    "region": "中国香港",
    "type": "电影",
    "genre": "犯罪/剧情",
    "tags": [
      "怀旧",
      "黑帮",
      "兄弟情",
      "时代变迁"
    ],
    "oneLine": "1986年的九龙城寨,四个底层小混混偷了一批本要交给大毒枭的黄金,却发现黄金里藏着一卷录音带。",
    "url": "./movies/movie-1425.html",
    "cover": "./75.jpg",
    "category": "动作专区",
    "categoryUrl": "./category-action-zone.html"
  },
  {
    "id": "1426",
    "title": "凤凰号",
    "year": "2024",
    "region": "美国",
    "type": "电影",
    "genre": "科幻/冒险",
    "tags": [
      "太空船",
      "人工智能",
      "方舟计划",
      "孤独",
      "觉醒"
    ],
    "oneLine": "前往新地球的方舟飞船上,唯一的船员发现AI已将所有乘客变成植物人。",
    "url": "./movies/movie-1426.html",
    "cover": "./76.jpg",
    "category": "经典片库",
    "categoryUrl": "./category-classic-library.html"
  },
  {
    "id": "1427",
    "title": "黑道之家",
    "year": "2026",
    "region": "中国香港/韩国",
    "type": "剧集",
    "genre": "犯罪,剧情,动作",
    "tags": [
      "卧底",
      "家族斗争",
      "暴力美学"
    ],
    "oneLine": "为瓦解亚洲最大洗钱组织,警方派出卧底,却发现组织首领竟是失散多年的亲生父亲。",
    "url": "./movies/movie-1427.html",
    "cover": "./77.jpg",
    "category": "院线热片",
    "categoryUrl": "./category-cinema-hits.html"
  },
  {
    "id": "1428",
    "title": "人约巴黎",
    "year": "2024",
    "region": "法国",
    "type": "电影",
    "genre": "爱情、文艺",
    "tags": [
      "巴黎",
      "邂逅",
      "书信",
      "侯麦风格"
    ],
    "oneLine": "失意的纽约作家在巴黎的地铁站捡到一封分手信,她决定代替原主人赴每一个约会。",
    "url": "./movies/movie-1428.html",
    "cover": "./78.jpg",
    "category": "动作专区",
    "categoryUrl": "./category-action-zone.html"
  },
  {
    "id": "1429",
    "title": "银色闪电",
    "year": "2025",
    "region": "美国",
    "type": "电影",
    "genre": "运动,传记,剧情",
    "tags": [
      "赛车",
      "女性",
      "真实改编",
      "逆袭"
    ],
    "oneLine": "一名被踢出车队的女维修工,戴上头盔假扮男车手,在 1970 年代的 NASCAR 赛道上掀起银色风暴。",
    "url": "./movies/movie-1429.html",
    "cover": "./79.jpg",
    "category": "全球佳作",
    "categoryUrl": "./category-global-stories.html"
  },
  {
    "id": "1430",
    "title": "巅峰拍档第一季",
    "year": "2025",
    "region": "英国",
    "type": "综艺",
    "genre": "真人秀,汽车",
    "tags": [
      "赛车",
      "挑战",
      "毒舌",
      "公路旅行",
      "爆改"
    ],
    "oneLine": "三个风格迥异的中年大叔,每期用一堆废旧零件造车,完成不可能的任务,顺便把彼此损得体无完肤。",
    "url": "./movies/movie-1430.html",
    "cover": "./80.jpg",
    "category": "动作专区",
    "categoryUrl": "./category-action-zone.html"
  },
  {
    "id": "1431",
    "title": "痴呆的真相",
    "year": "2023",
    "region": "英国",
    "type": "电影",
    "genre": "剧情,悬疑",
    "tags": [
      "阿尔茨海默症",
      "医疗黑幕",
      "记忆线索",
      "社会派"
    ],
    "oneLine": "患有重度痴呆的老太太突然清醒了五分钟,写下“他们杀了她”,护工发现那是二十年前失踪少女的名字。",
    "url": "./movies/movie-1431.html",
    "cover": "./81.jpg",
    "category": "历史古装",
    "categoryUrl": "./category-history-costume.html"
  },
  {
    "id": "1432",
    "title": "狂怒!",
    "year": "2023",
    "region": "美国",
    "type": "电影",
    "genre": "动作/惊悚/公路",
    "tags": [
      "复仇",
      "卡车司机",
      "荒原",
      "暴力美学",
      "生存"
    ],
    "oneLine": "女儿被拐后,沉默的卡车司机改装座驾成为公路死神,对人口贩卖集团展开血腥报复。",
    "url": "./movies/movie-1432.html",
    "cover": "./82.jpg",
    "category": "院线热片",
    "categoryUrl": "./category-cinema-hits.html"
  },
  {
    "id": "1433",
    "title": "护工故事",
    "year": "2024",
    "region": "中国",
    "type": "剧集",
    "genre": "剧情,家庭",
    "tags": [
      "养老",
      "温情",
      "社会议题",
      "成长"
    ],
    "oneLine": "一名问题少女被罚到养老院做义工,却从一群“被遗忘”的老人身上,学会了如何与自己和解。",
    "url": "./movies/movie-1433.html",
    "cover": "./83.jpg",
    "category": "经典片库",
    "categoryUrl": "./category-classic-library.html"
  },
  {
    "id": "1434",
    "title": "欲海狂澜",
    "year": "2024",
    "region": "中国香港",
    "type": "电影",
    "genre": "剧情,情色,悬疑",
    "tags": [
      "股市",
      "肉体交易",
      "姐妹反目"
    ],
    "oneLine": "为了搞垮仇人的上市公司,她把自己训练成了一件完美的人间兵器,却没想到妹妹也带着同款纹身入了局。",
    "url": "./movies/movie-1434.html",
    "cover": "./84.jpg",
    "category": "全球佳作",
    "categoryUrl": "./category-global-stories.html"
  },
  {
    "id": "1435",
    "title": "疯狂马达加斯加",
    "year": "2018",
    "region": "法国/比利时",
    "type": "动画电影",
    "genre": "喜剧,动画,冒险",
    "tags": [
      "狐猴",
      "丛林",
      "误会",
      "狂欢",
      "环保"
    ],
    "oneLine": "一只养尊处优的宠物狐猴被空投到马达加斯加丛林,却被误认为天神降临。",
    "url": "./movies/movie-1435.html",
    "cover": "./85.jpg",
    "category": "历史古装",
    "categoryUrl": "./category-history-costume.html"
  },
  {
    "id": "1436",
    "title": "六弦武士",
    "year": "2025",
    "region": "美国",
    "type": "电影",
    "genre": "动作,音乐,奇幻",
    "tags": [
      "摇滚",
      "武士刀",
      "末世",
      "打斗配乐",
      "视觉系"
    ],
    "oneLine": "末世废土上,一个背着电吉他的盲眼武士用音波斩杀变异怪物,每场战斗都是一场摇滚演唱会。",
    "url": "./movies/movie-1436.html",
    "cover": "./86.jpg",
    "category": "经典片库",
    "categoryUrl": "./category-classic-library.html"
  },
  {
    "id": "1437",
    "title": "鬼马姑爷仔",
    "year": "2025",
    "region": "中国香港",
    "type": "电影",
    "genre": "喜剧/爱情",
    "tags": [
      "港式喜剧",
      "骗中骗",
      "假女婿",
      "大家族",
      "身份错位"
    ],
    "oneLine": "为了骗取富家千金的嫁妆,职业骗子假扮成上门姑爷,不料假丈母娘比他还像骗子。",
    "url": "./movies/movie-1437.html",
    "cover": "./87.jpg",
    "category": "家庭生活",
    "categoryUrl": "./category-family-life.html"
  },
  {
    "id": "1438",
    "title": "木马屠城记",
    "year": "2025",
    "region": "美国/英国",
    "type": "史诗电影",
    "genre": "历史/动作/战争",
    "tags": [
      "特洛伊",
      "巨物恐惧",
      "冷兵器战争",
      "宿命",
      "希腊神话"
    ],
    "oneLine": "巨大木马腹中,一群绝望的士兵在黑暗里听着城外海伦的歌声,等待一场注定血腥的黎明。",
    "url": "./movies/movie-1438.html",
    "cover": "./88.jpg",
    "category": "剧集连看",
    "categoryUrl": "./category-drama-series.html"
  },
  {
    "id": "1439",
    "title": "艺术学院",
    "year": "2027",
    "region": "中国大陆",
    "type": "电视剧",
    "genre": "剧情,爱情,青春",
    "tags": [
      "美术生",
      "理想",
      "背叛"
    ],
    "oneLine": "美院附中四人组,在艺考的独木桥上,爱情与前途只能选一个。",
    "url": "./movies/movie-1439.html",
    "cover": "./89.jpg",
    "category": "家庭生活",
    "categoryUrl": "./category-family-life.html"
  },
  {
    "id": "1440",
    "title": "爱的笨猪跳",
    "year": "2024",
    "region": "韩国",
    "type": "电影",
    "genre": "爱情,喜剧",
    "tags": [
      "蹦极",
      "契约恋爱",
      "恐高",
      "治愈"
    ],
    "oneLine": "一个恐高的蹦极教练,和一个想自杀的女孩,签了一份“互相帮忙死”的荒唐协议。",
    "url": "./movies/movie-1440.html",
    "cover": "./90.jpg",
    "category": "剧集连看",
    "categoryUrl": "./category-drama-series.html"
  },
  {
    "id": "1441",
    "title": "超次元对决",
    "year": "2024",
    "region": "日本",
    "type": "动画",
    "genre": "科幻/竞技",
    "tags": [
      "竞技",
      "虚拟现实",
      "次元穿越",
      "团队战",
      "热血"
    ],
    "oneLine": "每一场VR游戏的对决都会打开一个真实的异次元裂缝,而输家的次元会被彻底抹去。",
    "url": "./movies/movie-1441.html",
    "cover": "./91.jpg",
    "category": "悬疑夜场",
    "categoryUrl": "./category-suspense-night.html"
  },
  {
    "id": "1442",
    "title": "神偷艳盗",
    "year": "2024",
    "region": "中国香港",
    "type": "电影",
    "genre": "犯罪/爱情/喜剧",
    "tags": [
      "雌雄大盗",
      "骗中骗",
      "艺术品",
      "反转"
    ],
    "oneLine": "顶级神偷和天才女骗子联手偷一幅画,结果画是假的,两人感情是真的,要抓他们的警察也是假的。",
    "url": "./movies/movie-1442.html",
    "cover": "./92.jpg",
    "category": "家庭生活",
    "categoryUrl": "./category-family-life.html"
  },
  {
    "id": "1443",
    "title": "空军敢死队",
    "year": "1958",
    "region": "美国",
    "type": "电影",
    "genre": "战争、动作",
    "tags": [
      "二战",
      "飞行员",
      "轰炸任务",
      "黑白片"
    ],
    "oneLine": "一群被军法判处死刑的空军罪犯,被秘密编成敢死队,执行一次有去无回的轰炸任务。",
    "url": "./movies/movie-1443.html",
    "cover": "./93.jpg",
    "category": "院线热片",
    "categoryUrl": "./category-cinema-hits.html"
  },
  {
    "id": "1444",
    "title": "真假王爷",
    "year": "2015",
    "region": "中国大陆",
    "type": "电影",
    "genre": "喜剧",
    "tags": [
      "古装",
      "身份互换",
      "民间传奇",
      "戏说"
    ],
    "oneLine": "清末街头卖艺的替身意外顶替了微服私访的王爷,他却发现真正的谋反大戏才刚刚开始。",
    "url": "./movies/movie-1444.html",
    "cover": "./94.jpg",
    "category": "奇幻科幻",
    "categoryUrl": "./category-fantasy-sci-fi.html"
  },
  {
    "id": "1445",
    "title": "恐龙世纪",
    "year": "2000",
    "region": "美国",
    "type": "电影",
    "genre": "动画/冒险",
    "tags": [
      "CG 动画",
      "恐龙",
      "家庭",
      "迁徙"
    ],
    "oneLine": "一只从小被狐猴养大的禽龙,在陨石撞击地球后,带领一群不同种族的恐龙寻找新的栖息地。",
    "url": "./movies/movie-1445.html",
    "cover": "./95.jpg",
    "category": "家庭生活",
    "categoryUrl": "./category-family-life.html"
  },
  {
    "id": "1446",
    "title": "暗夜女巫",
    "year": "2025",
    "region": "俄罗斯",
    "type": "电视剧",
    "genre": "剧情/战争/历史/女性",
    "tags": [
      "苏联女飞行员",
      "夜间轰炸机",
      "二战",
      "真实事件改编"
    ],
    "oneLine": "二战时期,一群年轻苏联女飞行员驾驶着简陋的木质飞机,在暗夜中令纳粹闻风丧胆的真实故事。",
    "url": "./movies/movie-1446.html",
    "cover": "./96.jpg",
    "category": "动作专区",
    "categoryUrl": "./category-action-zone.html"
  },
  {
    "id": "1447",
    "title": "倒凤颠鸾",
    "year": "2023",
    "region": "中国台湾",
    "type": "电影",
    "genre": "喜剧,爱情,奇幻",
    "tags": [
      "灵魂互换",
      "古代",
      "媒婆",
      "错位",
      "民俗"
    ],
    "oneLine": "风流成性的纨绔子弟和保守严厉的媒婆同时触电,醒来后他们互换了身体。",
    "url": "./movies/movie-1447.html",
    "cover": "./97.jpg",
    "category": "经典片库",
    "categoryUrl": "./category-classic-library.html"
  },
  {
    "id": "1448",
    "title": "英雄人物",
    "year": "2025",
    "region": "中国香港",
    "type": "电影",
    "genre": "动作/犯罪/警匪",
    "tags": [
      "卧底",
      "兄弟情",
      "枪战",
      "港式暴力美学",
      "双雄对决"
    ],
    "oneLine": "警方最优秀的卧底和黑帮最忠诚的杀手,发现他们爱的是同一个女人。",
    "url": "./movies/movie-1448.html",
    "cover": "./98.jpg",
    "category": "院线热片",
    "categoryUrl": "./category-cinema-hits.html"
  },
  {
    "id": "1449",
    "title": "搏击迷城",
    "year": "2025",
    "region": "美国",
    "type": "电影",
    "genre": "动作,科幻",
    "tags": [
      "虚拟现实",
      "地下格斗",
      "记忆植入",
      "反乌托邦"
    ],
    "oneLine": "一名失忆的格斗士发现,自己赖以成名的每一场胜利,都是被植入的虚假记忆。",
    "url": "./movies/movie-1449.html",
    "cover": "./99.jpg",
    "category": "全球佳作",
    "categoryUrl": "./category-global-stories.html"
  },
  {
    "id": "1450",
    "title": "爱后余生",
    "year": "2023",
    "region": "中国香港",
    "type": "电影",
    "genre": "爱情剧情",
    "tags": [
      "失忆",
      "救赎",
      "多重人格",
      "文艺"
    ],
    "oneLine": "在一起车祸后,女孩失去了关于“爱”的所有记忆,而照顾她的那个陌生男人,声称自己是她最恨的前任。",
    "url": "./movies/movie-1450.html",
    "cover": "./100.jpg",
    "category": "经典片库",
    "categoryUrl": "./category-classic-library.html"
  },
  {
    "id": "1451",
    "title": "原力篮球魂",
    "year": "2024",
    "region": "美国",
    "type": "电影",
    "genre": "运动,奇幻",
    "tags": [
      "篮球",
      "超能力",
      "少年",
      "热血",
      "逆袭"
    ],
    "oneLine": "一个星战发烧友高中生得到神秘原力,却只想用它来统治街头篮球场。",
    "url": "./movies/movie-1451.html",
    "cover": "./101.jpg",
    "category": "青春喜剧",
    "categoryUrl": "./category-youth-comedy.html"
  },
  {
    "id": "1452",
    "title": "情色小说家",
    "year": "2024",
    "region": "日本",
    "type": "剧集",
    "genre": "剧情/爱情/悬疑",
    "tags": [
      "作家",
      "代笔",
      "禁忌关系",
      "文学即谎言"
    ],
    "oneLine": "畅销情色作家车祸失忆,替他代笔十年的编辑不得不扮成TA,并继承了所有危险情人。",
    "url": "./movies/movie-1452.html",
    "cover": "./102.jpg",
    "category": "全球佳作",
    "categoryUrl": "./category-global-stories.html"
  },
  {
    "id": "1453",
    "title": "太空堡垒卡拉狄加:利刃",
    "year": "2007",
    "region": "美国",
    "type": "电影",
    "genre": "科幻,战争",
    "tags": [
      "太空歌剧",
      "赛隆人",
      "政治惊悚",
      "女性角色"
    ],
    "oneLine": "在赛隆人毁灭人类之前,女星“凯恩”指挥官的残酷决策早已让她的战舰变成钢铁地狱。",
    "url": "./movies/movie-1453.html",
    "cover": "./103.jpg",
    "category": "历史古装",
    "categoryUrl": "./category-history-costume.html"
  },
  {
    "id": "1454",
    "title": "修女乔安娜",
    "year": "2022",
    "region": "波兰",
    "type": "电影",
    "genre": "剧情",
    "tags": [
      "宗教",
      "心理",
      "历史",
      "信仰"
    ],
    "oneLine": "魔鬼附身的修女带领修道院集体堕落,一位神父的驱魔仪式却唤醒了自己的黑暗欲望。",
    "url": "./movies/movie-1454.html",
    "cover": "./104.jpg",
    "category": "都市爱情",
    "categoryUrl": "./category-romance-city.html"
  },
  {
    "id": "1455",
    "title": "月神",
    "year": "2025",
    "region": "意大利/法国",
    "type": "电影",
    "genre": "科幻、文艺、悬疑",
    "tags": [
      "月球",
      "孤独",
      "记忆",
      "太空",
      "心理"
    ],
    "oneLine": "月球基地唯一的看守人,发现每晚都有“人”在月球表面用光书写只有他能看懂的诗句。",
    "url": "./movies/movie-1455.html",
    "cover": "./105.jpg",
    "category": "全球佳作",
    "categoryUrl": "./category-global-stories.html"
  },
  {
    "id": "1456",
    "title": "断头谷第三季",
    "year": "2025",
    "region": "美国",
    "type": "电视剧",
    "genre": "恐怖悬疑",
    "tags": [
      "无头骑士",
      "现代都市",
      "洛夫克拉夫特式",
      "克苏鲁"
    ],
    "oneLine": "无头骑士归来,这一次他带来的不是战争,而是一场召唤古神的献祭。",
    "url": "./movies/movie-1456.html",
    "cover": "./106.jpg",
    "category": "剧集连看",
    "categoryUrl": "./category-drama-series.html"
  },
  {
    "id": "1457",
    "title": "皮特·戴维森:死党齐搞笑",
    "year": "2025",
    "region": "美国",
    "type": "综艺/特别篇",
    "genre": "喜剧/脱口秀",
    "tags": [
      "SNL",
      "整蛊",
      "明星好友"
    ],
    "oneLine": "皮特带着他的明星死党们在废弃商场里玩整蛊游戏,输的人要纹上对方指定的荒谬图案。",
    "url": "./movies/movie-1457.html",
    "cover": "./107.jpg",
    "category": "都市爱情",
    "categoryUrl": "./category-romance-city.html"
  },
  {
    "id": "1458",
    "title": "邪眼2022",
    "year": "2025",
    "region": "意大利",
    "type": "电影",
    "genre": "恐怖,悬疑",
    "tags": [
      "诅咒",
      "民俗恐怖",
      "反转",
      "宗教"
    ],
    "oneLine": "一位研究民俗的教授买下一个古董“邪眼”挂坠,随之而来的诅咒开始逐一杀死他所爱的人。",
    "url": "./movies/movie-1458.html",
    "cover": "./108.jpg",
    "category": "院线热片",
    "categoryUrl": "./category-cinema-hits.html"
  },
  {
    "id": "1459",
    "title": "危鸡总动员",
    "year": "2015",
    "region": "美国",
    "type": "电影",
    "genre": "动画,喜剧,冒险",
    "tags": [
      "公鸡",
      "农场",
      "救赎",
      "公路片"
    ],
    "oneLine": "一只妄自菲薄的公鸡为了救回被外星人绑架的人类主人,率领一群乌合之众冲进了51区。",
    "url": "./movies/movie-1459.html",
    "cover": "./109.jpg",
    "category": "奇幻科幻",
    "categoryUrl": "./category-fantasy-sci-fi.html"
  },
  {
    "id": "1460",
    "title": "蒸",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "genre": "悬疑/剧情",
    "tags": [
      "密闭空间",
      "人性拷问",
      "社会隐喻"
    ],
    "oneLine": "一间百年蒸笼老店的后厨里,三个人各怀心事被锁了一夜,蒸汽散去后,只有一个能活着走出来。",
    "url": "./movies/movie-1460.html",
    "cover": "./110.jpg",
    "category": "历史古装",
    "categoryUrl": "./category-history-costume.html"
  },
  {
    "id": "1461",
    "title": "家道",
    "year": "2025",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "剧情,家庭",
    "tags": [
      "家族企业",
      "代际冲突",
      "衰落"
    ],
    "oneLine": "父亲葬礼上,四个子女发现家族企业早已资不抵债,而唯一能救公司的配方在父亲的情人手里。",
    "url": "./movies/movie-1461.html",
    "cover": "./111.jpg",
    "category": "家庭生活",
    "categoryUrl": "./category-family-life.html"
  },
  {
    "id": "1462",
    "title": "哎呀好身材第四季",
    "year": "2025",
    "region": "中国大陆",
    "type": "综艺",
    "genre": "真人秀/运动",
    "tags": [
      "减肥",
      "明星",
      "喜剧",
      "健康生活"
    ],
    "oneLine": "这一季,过气明星和素人胖子互换身体,必须替对方把体重减到目标值才能换回来。",
    "url": "./movies/movie-1462.html",
    "cover": "./112.jpg",
    "category": "院线热片",
    "categoryUrl": "./category-cinema-hits.html"
  },
  {
    "id": "1463",
    "title": "雾都奇遇夜",
    "year": "2025",
    "region": "中国大陆",
    "type": "电影",
    "genre": "喜剧,奇幻",
    "tags": [
      "山城",
      "一夜爱情",
      "魔幻现实主义"
    ],
    "oneLine": "一个雨夜在重庆迷路的快递员,遇见了自称“山城土地神”的神秘女孩,两人开始了一场穿越现实的送件之旅。",
    "url": "./movies/movie-1463.html",
    "cover": "./113.jpg",
    "category": "动作专区",
    "categoryUrl": "./category-action-zone.html"
  },
  {
    "id": "1464",
    "title": "铁腕投手 稻尾物语",
    "year": "2022",
    "region": "日本",
    "type": "电影",
    "genre": "运动,传记",
    "tags": [
      "棒球",
      "热血",
      "昭和",
      "传奇"
    ],
    "oneLine": "绰号“铁腕”的传奇投手稻尾和久,用一只伤痕累累的手臂,投出了日本职棒史上传奇的赛季。",
    "url": "./movies/movie-1464.html",
    "cover": "./114.jpg",
    "category": "悬疑夜场",
    "categoryUrl": "./category-suspense-night.html"
  },
  {
    "id": "1465",
    "title": "加冕街之路",
    "year": "2023",
    "region": "英国",
    "type": "剧情/家庭",
    "genre": "生活/年代",
    "tags": [
      "英国工薪阶层",
      "邻里",
      "养老",
      "温情"
    ],
    "oneLine": "一条即将拆迁的英国老街上,七十岁的艾薇决定用一场违法的街头派对,留住所有人的记忆。",
    "url": "./movies/movie-1465.html",
    "cover": "./115.jpg",
    "category": "剧集连看",
    "categoryUrl": "./category-drama-series.html"
  },
  {
    "id": "1466",
    "title": "泰若星球",
    "year": "2007",
    "region": "美国",
    "type": "电影",
    "genre": "动画/科幻/冒险",
    "tags": [
      "环保主题",
      "外星冒险",
      "共存"
    ],
    "oneLine": "因地球毁灭而被迫星际漂流的人类,发现了一颗名为“泰若”的宜居星球,但该星球的原住民是一种能与自然共生的蓝皮肤种族,水源争夺战一触即发。",
    "url": "./movies/movie-1466.html",
    "cover": "./116.jpg",
    "category": "家庭生活",
    "categoryUrl": "./category-family-life.html"
  },
  {
    "id": "1467",
    "title": "霸王血战史",
    "year": "2025",
    "region": "美国",
    "type": "电影",
    "genre": "动作、历史、战争",
    "tags": [
      "古罗马",
      "角斗士",
      "史诗",
      "复仇",
      "冷兵器"
    ],
    "oneLine": "历史上最被低估的奴隶起义领袖,他的尸体被钉在十字架上,但他的名字成了禁忌。",
    "url": "./movies/movie-1467.html",
    "cover": "./117.jpg",
    "category": "剧集连看",
    "categoryUrl": "./category-drama-series.html"
  },
  {
    "id": "1468",
    "title": "一个卡拉布里的孩子",
    "year": "2020",
    "region": "意大利",
    "type": "电影",
    "genre": "剧情/传记",
    "tags": [
      "童年",
      "意大利风情",
      "成长",
      "文学改编"
    ],
    "oneLine": "二战前夕,意大利最贫穷的卡拉布里亚山区,一个天生口吃的孩子如何通过“偷听”诗歌,找到了改变命运的声音。",
    "url": "./movies/movie-1468.html",
    "cover": "./118.jpg",
    "category": "都市爱情",
    "categoryUrl": "./category-romance-city.html"
  },
  {
    "id": "1469",
    "title": "鲁班的传说",
    "year": "2025",
    "region": "中国大陆",
    "type": "电影",
    "genre": "古装、奇幻、动作、机关术",
    "tags": [
      "木匠祖师",
      "机关术",
      "墨家",
      "师徒传承"
    ],
    "oneLine": "年迈鲁班收了关门弟子,发现此人竟是敌国派来窃取机关秘术的刺客。",
    "url": "./movies/movie-1469.html",
    "cover": "./119.jpg",
    "category": "热映精选",
    "categoryUrl": "./category-hot-picks.html"
  },
  {
    "id": "1470",
    "title": "烈火雄心2国语",
    "year": "2002",
    "region": "中国香港",
    "type": "剧集",
    "genre": "动作/职业",
    "tags": [
      "消防员",
      "TVB",
      "兄弟情",
      "灾难",
      "职业剧"
    ],
    "oneLine": "一场震惊全港的工厂大火后,三位幸存消防员背负着秘密,继续冲进火场。",
    "url": "./movies/movie-1470.html",
    "cover": "./120.jpg",
    "category": "悬疑夜场",
    "categoryUrl": "./category-suspense-night.html"
  },
  {
    "id": "1471",
    "title": "珍爱地球大冒险第三季",
    "year": "2025",
    "region": "英国/加拿大",
    "type": "剧集",
    "genre": "纪录片/冒险/家庭",
    "tags": [
      "自然",
      "环保",
      "全球探险",
      "科普"
    ],
    "oneLine": "三个少年跟随动物学家父亲,在南极冰盖下发现了远古微生物,它们可能是拯救地球的关键。",
    "url": "./movies/movie-1471.html",
    "cover": "./121.jpg",
    "category": "都市爱情",
    "categoryUrl": "./category-romance-city.html"
  },
  {
    "id": "1472",
    "title": "向阳农庄的罗曼史",
    "year": "2025",
    "region": "台湾",
    "type": "电视剧",
    "genre": "爱情,喜剧,田园",
    "tags": [
      "慢生活",
      "治愈",
      "欢喜冤家"
    ],
    "oneLine": "为了逃避城市相亲的金融女,收购了一家“即将倒闭”的农庄,却发现合同里有“必须和继承人结婚”的条款。",
    "url": "./movies/movie-1472.html",
    "cover": "./122.jpg",
    "category": "历史古装",
    "categoryUrl": "./category-history-costume.html"
  },
  {
    "id": "1473",
    "title": "茶金",
    "year": "2024",
    "region": "中国台湾",
    "type": "剧集",
    "genre": "历史/商战",
    "tags": [
      "茶叶",
      "家族",
      "日据时代",
      "女性"
    ],
    "oneLine": "日据末期,台湾茶行千金被迫接手家业,用一片茶叶与日本商社展开生死博弈。",
    "url": "./movies/movie-1473.html",
    "cover": "./123.jpg",
    "category": "动作专区",
    "categoryUrl": "./category-action-zone.html"
  },
  {
    "id": "1474",
    "title": "果宝特攻",
    "year": "2024",
    "region": "中国大陆",
    "type": "动画剧集",
    "genre": "喜剧,动作",
    "tags": [
      "机甲",
      "水果",
      "搞笑",
      "热血",
      "合体"
    ],
    "oneLine": "水果世界的和平被虫族入侵打破,三个卖水果的少年意外唤醒上古机甲“果宝战神”。",
    "url": "./movies/movie-1474.html",
    "cover": "./124.jpg",
    "category": "剧集连看",
    "categoryUrl": "./category-drama-series.html"
  },
  {
    "id": "1475",
    "title": "得布拉肯宁",
    "year": "2025",
    "region": "英国/挪威",
    "type": "剧集",
    "genre": "悬疑/犯罪/惊悚/北欧 noir",
    "tags": [
      "极夜",
      "邪教",
      "心理惊悚",
      "矿产"
    ],
    "oneLine": "在挪威极夜的矿井小镇,每三年会发生一次诡异的集体自杀,而今年,轮到我。",
    "url": "./movies/movie-1475.html",
    "cover": "./125.jpg",
    "category": "都市爱情",
    "categoryUrl": "./category-romance-city.html"
  },
  {
    "id": "1476",
    "title": "远东第一监狱",
    "year": "2026",
    "region": "中国大陆",
    "type": "电视剧集",
    "genre": "悬疑,历史,犯罪",
    "tags": [
      "民国",
      "越狱",
      "密室逃脱",
      "群像戏"
    ],
    "oneLine": "1948年的上海提篮桥监狱,一名被冤枉的地下党必须在72小时内,带领牢房里各怀鬼胎的囚犯们逃出生天。",
    "url": "./movies/movie-1476.html",
    "cover": "./126.jpg",
    "category": "历史古装",
    "categoryUrl": "./category-history-costume.html"
  },
  {
    "id": "1477",
    "title": "甜蜜的十一月",
    "year": "2023",
    "region": "美国",
    "type": "电影",
    "genre": "爱情/剧情",
    "tags": [
      "限定恋爱",
      "期限情人",
      "治愈",
      "都市孤独",
      "分手协议"
    ],
    "oneLine": "她只谈为期一个月的恋爱,却在十一月的最后一天,第一次求他不要走。",
    "url": "./movies/movie-1477.html",
    "cover": "./127.jpg",
    "category": "剧集连看",
    "categoryUrl": "./category-drama-series.html"
  },
  {
    "id": "1478",
    "title": "我在看著你",
    "year": "2023",
    "region": "韩国",
    "type": "电影",
    "genre": "惊悚/悬疑/心理",
    "tags": [
      "监控社会",
      "反杀",
      "独居女性"
    ],
    "oneLine": "独居女孩发现有人每天用她手机的前置摄像头看她,她决定反过来监控那个监控者。",
    "url": "./movies/movie-1478.html",
    "cover": "./128.jpg",
    "category": "经典片库",
    "categoryUrl": "./category-classic-library.html"
  },
  {
    "id": "1479",
    "title": "胆小别看",
    "year": "2025",
    "region": "中国大陆",
    "type": "电影",
    "genre": "悬疑/惊悚",
    "tags": [
      "心理恐怖",
      "密室",
      "反转",
      "都市传说",
      "直播"
    ],
    "oneLine": "一档深夜直播探险节目闯入废弃精神病院,却发现所有恐怖传说都是掩盖真相的陷阱。",
    "url": "./movies/movie-1479.html",
    "cover": "./129.jpg",
    "category": "全球佳作",
    "categoryUrl": "./category-global-stories.html"
  },
  {
    "id": "1480",
    "title": "双面千金洛莞莞",
    "year": "2025",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "古装/悬疑",
    "tags": [
      "双重人格",
      "宅斗",
      "经商",
      "替身"
    ],
    "oneLine": "温婉的商贾千金洛莞莞表面绣花,夜里却变成狠辣的第二人格“阿萝”,且正在策划谋夺自家家产。",
    "url": "./movies/movie-1480.html",
    "cover": "./130.jpg",
    "category": "院线热片",
    "categoryUrl": "./category-cinema-hits.html"
  },
  {
    "id": "1481",
    "title": "冥王星",
    "year": "2026",
    "region": "美国/德国",
    "type": "剧集",
    "genre": "科幻/悬疑/惊悚",
    "tags": [
      "星际殖民",
      "集体失忆",
      "人造重力异常",
      "密室推理"
    ],
    "oneLine": "冥王星基地全体220人同时丢失了最近72小时记忆,而倒计时显示“恒星炸弹”将在48小时后引爆。",
    "url": "./movies/movie-1481.html",
    "cover": "./131.jpg",
    "category": "都市爱情",
    "categoryUrl": "./category-romance-city.html"
  },
  {
    "id": "1482",
    "title": "天地拳王",
    "year": "2026",
    "region": "香港",
    "type": "电影",
    "genre": "动作/武侠",
    "tags": [
      "泰拳",
      "宗教",
      "复仇",
      "硬核格斗",
      "救赎"
    ],
    "oneLine": "被扫地出门的泰拳冠军躲进香港的笼斗场,却被一个老和尚认出他是转世的护法金刚。",
    "url": "./movies/movie-1482.html",
    "cover": "./132.jpg",
    "category": "院线热片",
    "categoryUrl": "./category-cinema-hits.html"
  },
  {
    "id": "1483",
    "title": "我们生活的年代",
    "year": "2024",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "剧情,家庭",
    "tags": [
      "时代变迁",
      "怀旧",
      "邻里",
      "群像"
    ],
    "oneLine": "1990 年到 2020 年,北京一个大杂院里六户人家的三十年,全藏在一个老太太的废品收购站里。",
    "url": "./movies/movie-1483.html",
    "cover": "./133.jpg",
    "category": "全球佳作",
    "categoryUrl": "./category-global-stories.html"
  },
  {
    "id": "1484",
    "title": "赌豪",
    "year": "1991",
    "region": "香港",
    "type": "电影",
    "genre": "动作/犯罪/赌术",
    "tags": [
      "赌神",
      "高进",
      "兄弟情",
      "复仇"
    ],
    "oneLine": "赌神高进的同门师弟“赌豪”重出江湖,为报断指之仇,他用一套失传的“意念控牌术”挑战东南亚赌王,赌注是命。",
    "url": "./movies/movie-1484.html",
    "cover": "./134.jpg",
    "category": "院线热片",
    "categoryUrl": "./category-cinema-hits.html"
  },
  {
    "id": "1485",
    "title": "风华永驻",
    "year": "2003",
    "region": "法国",
    "type": "电影",
    "genre": "剧情,爱情",
    "tags": [
      "时间旅行",
      "明星",
      "遗憾"
    ],
    "oneLine": "一位过气的好莱坞女星在拍卖会上买回自己年轻时的画像,次日清晨,镜中的她变回了十八岁的模样。",
    "url": "./movies/movie-1485.html",
    "cover": "./135.jpg",
    "category": "院线热片",
    "categoryUrl": "./category-cinema-hits.html"
  },
  {
    "id": "1486",
    "title": "最后一个恶魔",
    "year": "2025",
    "region": "韩国",
    "type": "电影",
    "genre": "恐怖/惊悚",
    "tags": [
      "驱魔",
      "反转",
      "宗教神秘"
    ],
    "oneLine": "当世界上所有恶魔都被封印,退休的神父准备迎接死亡时,一个毫无被附身迹象的女人却求他杀死自己体内的“虚无”。",
    "url": "./movies/movie-1486.html",
    "cover": "./136.jpg",
    "category": "悬疑夜场",
    "categoryUrl": "./category-suspense-night.html"
  },
  {
    "id": "1487",
    "title": "倾城之泪",
    "year": "2011",
    "region": "中国香港/中国大陆",
    "type": "电影",
    "genre": "爱情/剧情",
    "tags": [
      "催泪",
      "绝症",
      "三段式",
      "纯爱"
    ],
    "oneLine": "三段爱情,三种告别,每一滴眼泪都为一个城市而流。",
    "url": "./movies/movie-1487.html",
    "cover": "./137.jpg",
    "category": "历史古装",
    "categoryUrl": "./category-history-costume.html"
  },
  {
    "id": "1488",
    "title": "尖叫旅社:变形怪兽",
    "year": "2024",
    "region": "美国",
    "type": "电影",
    "genre": "动画",
    "tags": [
      "变身搞怪",
      "亲子交换",
      "怪物喜剧"
    ],
    "oneLine": "德古拉和女儿梅维斯意外互换身体,还得在一天内筹备旅社百年庆典,笑料百出。",
    "url": "./movies/movie-1488.html",
    "cover": "./138.jpg",
    "category": "经典片库",
    "categoryUrl": "./category-classic-library.html"
  },
  {
    "id": "1489",
    "title": "芙蓉镇",
    "year": "1986",
    "region": "中国大陆",
    "type": "电影",
    "genre": "剧情,历史",
    "tags": [
      "伤痕文学",
      "人性",
      "谢晋"
    ],
    "oneLine": "湘西小镇上,美丽的女摊贩在特殊年代里被一次次打倒,却像芙蓉花一样在泥泞中一次次站起来。",
    "url": "./movies/movie-1489.html",
    "cover": "./139.jpg",
    "category": "悬疑夜场",
    "categoryUrl": "./category-suspense-night.html"
  },
  {
    "id": "1490",
    "title": "鲜血淋漓第二季",
    "year": "2024",
    "region": "加拿大",
    "type": "剧集",
    "genre": "恐怖,悬疑",
    "tags": [
      "血腥",
      "连环杀手",
      "小镇秘密",
      "复仇"
    ],
    "oneLine": "第一季的杀手被抓获后,小镇上又出现了新的死者,杀人手法与已被捕的杀手一模一样。",
    "url": "./movies/movie-1490.html",
    "cover": "./140.jpg",
    "category": "全球佳作",
    "categoryUrl": "./category-global-stories.html"
  },
  {
    "id": "1491",
    "title": "幸福在路上",
    "year": "2010",
    "region": "中国大陆",
    "type": "电视剧",
    "genre": "剧情/家庭",
    "tags": [
      "年代",
      "情感",
      "命运",
      "治愈"
    ],
    "oneLine": "三个从小在胡同长大的发小,在改革开放的四十年里,各自走上了寻找幸福的路,却发现幸福一直在彼此身边。",
    "url": "./movies/movie-1491.html",
    "cover": "./141.jpg",
    "category": "剧集连看",
    "categoryUrl": "./category-drama-series.html"
  },
  {
    "id": "1492",
    "title": "由宇子的天平",
    "year": "2020",
    "region": "日本",
    "type": "电影",
    "genre": "剧情",
    "tags": [
      "社会派",
      "纪录片拍摄",
      "校园霸凌",
      "道德困境"
    ],
    "oneLine": "拍摄校园霸凌纪录片的导演由宇子,却发现自己的父亲才是真正的加害者。",
    "url": "./movies/movie-1492.html",
    "cover": "./142.jpg",
    "category": "经典片库",
    "categoryUrl": "./category-classic-library.html"
  },
  {
    "id": "1493",
    "title": "胭脂似火",
    "year": "2024",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "爱情,年代",
    "tags": [
      "民国",
      "复仇",
      "胭脂",
      "女性成长"
    ],
    "oneLine": "毁容的胭脂铺老板娘每天用鲜红胭脂掩盖疤痕,直到她发现毁自己容貌的凶手就住在胭脂铺对面。",
    "url": "./movies/movie-1493.html",
    "cover": "./143.jpg",
    "category": "奇幻科幻",
    "categoryUrl": "./category-fantasy-sci-fi.html"
  },
  {
    "id": "1494",
    "title": "怆寿",
    "year": "2024",
    "region": "韩国",
    "type": "电影",
    "genre": "剧情",
    "tags": [
      "惊悚",
      "悬疑",
      "宗教",
      "伦理"
    ],
    "oneLine": "一个能看见死亡倒计时的老妇,发现自己的“寿限”竟然可以通过剥夺他人的寿命来增加。",
    "url": "./movies/movie-1494.html",
    "cover": "./144.jpg",
    "category": "剧集连看",
    "categoryUrl": "./category-drama-series.html"
  },
  {
    "id": "1495",
    "title": "欢乐一家亲第六季",
    "year": "1998",
    "region": "美国",
    "type": "剧集",
    "genre": "喜剧/情景剧",
    "tags": [
      "高分美剧",
      "心理学",
      "兄弟",
      "毒舌"
    ],
    "oneLine": "精神科医生弗雷泽回到西雅图,发现哥哥奈尔斯正在秘密追求自己的电台助理。",
    "url": "./movies/movie-1495.html",
    "cover": "./145.jpg",
    "category": "历史古装",
    "categoryUrl": "./category-history-costume.html"
  },
  {
    "id": "1496",
    "title": "红色药丸",
    "year": "2019",
    "region": "美国",
    "type": "电影",
    "genre": "科幻/惊悚",
    "tags": [
      "意识上传",
      "真相",
      "反抗",
      "赛博朋克"
    ],
    "oneLine": "她服下红色药丸后醒来,发现自己真正的身体正被泡在营养液里,全球有70亿个同样的罐子。",
    "url": "./movies/movie-1496.html",
    "cover": "./146.jpg",
    "category": "热映精选",
    "categoryUrl": "./category-hot-picks.html"
  },
  {
    "id": "1497",
    "title": "朋友的妹妹只喜欢烦我",
    "year": "2021",
    "region": "日本",
    "type": "电视剧",
    "genre": "喜剧/爱情/校园",
    "tags": [
      "漫改",
      "傲娇",
      "日常",
      "高密度吐槽"
    ],
    "oneLine": "好友的初中生妹妹突然闯入大学生宿舍,每天以“烦死哥哥的朋友”为使命,却偷偷喜欢他。",
    "url": "./movies/movie-1497.html",
    "cover": "./147.jpg",
    "category": "青春喜剧",
    "categoryUrl": "./category-youth-comedy.html"
  },
  {
    "id": "1498",
    "title": "高加索女俘虏",
    "year": "2024",
    "region": "俄罗斯",
    "type": "电影",
    "genre": "战争/剧情/历史",
    "tags": [
      "车臣战争",
      "女性视角",
      "残酷写实",
      "人性边界"
    ],
    "oneLine": "车臣战争中,一名俄军狙击手抓住了一个车臣少女,却在回去的路上被自己的部队抛弃,两人被迫一起穿越敌占区。",
    "url": "./movies/movie-1498.html",
    "cover": "./148.jpg",
    "category": "都市爱情",
    "categoryUrl": "./category-romance-city.html"
  },
  {
    "id": "1499",
    "title": "恶灵岛",
    "year": "2023",
    "region": "日本",
    "type": "电影",
    "genre": "恐怖,悬疑",
    "tags": [
      "孤岛",
      "民俗怪谈",
      "心理惊悚"
    ],
    "oneLine": "一群自媒体主播登上传说中的禁忌岛屿,直播捉鬼却唤醒了真正的古老诅咒。",
    "url": "./movies/movie-1499.html",
    "cover": "./149.jpg",
    "category": "动作专区",
    "categoryUrl": "./category-action-zone.html"
  },
  {
    "id": "1500",
    "title": "无辜者1989",
    "year": "1989",
    "region": "中国香港",
    "type": "电影",
    "genre": "动作,犯罪,剧情",
    "tags": [
      "黑帮",
      "卧底",
      "兄弟情",
      "背叛",
      "港片黄金时代"
    ],
    "oneLine": "黑帮老大的养子其实是警方卧底,但当他终于收集够证据时,发现一直保护自己的大哥也是卧底,而且是双重卧底。",
    "url": "./movies/movie-1500.html",
    "cover": "./150.jpg",
    "category": "悬疑夜场",
    "categoryUrl": "./category-suspense-night.html"
  },
  {
    "id": "1501",
    "title": "湘西诡案",
    "year": "2026",
    "region": "中国大陆",
    "type": "网络电影",
    "genre": "悬疑,惊悚,民俗",
    "tags": [
      "赶尸",
      "蛊术",
      "民国",
      "探案",
      "山村"
    ],
    "oneLine": "民国湘西,接连发生“赶尸匠”被害案,死者的尸体全都诡异地站成了“问路”的姿态。",
    "url": "./movies/movie-1501.html",
    "cover": "./1.jpg",
    "category": "热映精选",
    "categoryUrl": "./category-hot-picks.html"
  },
  {
    "id": "1502",
    "title": "大年三十",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "genre": "剧情、家庭、黑色幽默",
    "tags": [
      "年夜饭",
      "底层群像",
      "返乡",
      "荒诞"
    ],
    "oneLine": "大年三十这天,一辆从广东开往贵州的绿皮火车上,五个陌生人被迫在除夕夜分享彼此最不堪的秘密。",
    "url": "./movies/movie-1502.html",
    "cover": "./2.jpg",
    "category": "奇幻科幻",
    "categoryUrl": "./category-fantasy-sci-fi.html"
  },
  {
    "id": "1503",
    "title": "远离天堂",
    "year": "2024",
    "region": "美国",
    "type": "电影",
    "genre": "惊悚,悬疑",
    "tags": [
      "孤岛",
      "邪教",
      "心理",
      "密室"
    ],
    "oneLine": "一对网红夫妻受邀参加原始部落的“天堂仪式”,却发现这是为富人设计的猎杀游戏。",
    "url": "./movies/movie-1503.html",
    "cover": "./3.jpg",
    "category": "奇幻科幻",
    "categoryUrl": "./category-fantasy-sci-fi.html"
  },
  {
    "id": "1504",
    "title": "四子复仇记",
    "year": "2022",
    "region": "韩国",
    "type": "剧集",
    "genre": "悬疑,惊悚,剧情",
    "tags": [
      "复仇",
      "克隆人",
      "兄弟情",
      "反转"
    ],
    "oneLine": "男主惨死后被秘密组织复活成四个性格迥异的克隆体,他们必须联手向财阀真凶复仇。",
    "url": "./movies/movie-1504.html",
    "cover": "./4.jpg",
    "category": "经典片库",
    "categoryUrl": "./category-classic-library.html"
  },
  {
    "id": "1505",
    "title": "港湾第二季",
    "year": "2025",
    "region": "美国",
    "type": "剧集",
    "genre": "科幻/悬疑/恐怖",
    "tags": [
      "平行小镇",
      "超自然事件",
      "联邦调查员"
    ],
    "oneLine": "上一季那个能“实现内心愿望”的小镇出现异常,所有回归的居民都开始缓慢变成自己最恨的人。",
    "url": "./movies/movie-1505.html",
    "cover": "./5.jpg",
    "category": "剧集连看",
    "categoryUrl": "./category-drama-series.html"
  },
  {
    "id": "1506",
    "title": "芳心谋杀",
    "year": "2025",
    "region": "韩国",
    "type": "电影",
    "genre": "悬疑惊悚",
    "tags": [
      "骗婚",
      "蛇蝎女",
      "反转",
      "黑色电影"
    ],
    "oneLine": "一对母女连环骗婚杀手,盯上了专门鉴定遗产继承权的冷酷律师。",
    "url": "./movies/movie-1506.html",
    "cover": "./6.jpg",
    "category": "奇幻科幻",
    "categoryUrl": "./category-fantasy-sci-fi.html"
  },
  {
    "id": "1507",
    "title": "金发女郎",
    "year": "2024",
    "region": "美国",
    "type": "电影",
    "genre": "剧情/传记/悬疑",
    "tags": [
      "黑色电影",
      "好莱坞",
      "女性复仇",
      "悬疑",
      "反转"
    ],
    "oneLine": "1950年代,一个总演“花瓶”的金发女演员,突然被指控谋杀了一名导演,但她声称:自己只是在演一个凶手。",
    "url": "./movies/movie-1507.html",
    "cover": "./7.jpg",
    "category": "热映精选",
    "categoryUrl": "./category-hot-picks.html"
  },
  {
    "id": "1508",
    "title": "良辰美景好时光",
    "year": "2025",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "爱情,青春,音乐",
    "tags": [
      "古风歌手",
      "破镜重圆",
      "双向暗恋",
      "校园到婚纱"
    ],
    "oneLine": "五年前她为救他的命假意分手,五年后他成了当红歌手,而她是台下唯一没哭的观众。",
    "url": "./movies/movie-1508.html",
    "cover": "./8.jpg",
    "category": "悬疑夜场",
    "categoryUrl": "./category-suspense-night.html"
  },
  {
    "id": "1509",
    "title": "黑司祭们",
    "year": "2024",
    "region": "韩国",
    "type": "电影",
    "genre": "悬疑/恐怖",
    "tags": [
      "驱魔",
      "宗教阴谋",
      "梵蒂冈",
      "神秘学",
      "双雄"
    ],
    "oneLine": "梵蒂冈秘密派遣两位风格迥异的司祭潜入韩国,调查一起看似附身、实则涉及上古邪神的连环失踪案。",
    "url": "./movies/movie-1509.html",
    "cover": "./9.jpg",
    "category": "院线热片",
    "categoryUrl": "./category-cinema-hits.html"
  },
  {
    "id": "1510",
    "title": "八十天环游地球第一季",
    "year": "2024",
    "region": "英国/法国",
    "type": "剧集",
    "genre": "冒险/剧情/历史",
    "tags": [
      "福格",
      "蒸汽",
      "环球",
      "赌约"
    ],
    "oneLine": "福格先生这次赌上全部身家,80天内环游地球,而追捕他的不仅有警察,还有自己过去的罪孽。",
    "url": "./movies/movie-1510.html",
    "cover": "./10.jpg",
    "category": "都市爱情",
    "categoryUrl": "./category-romance-city.html"
  },
  {
    "id": "1511",
    "title": "明日传奇第一季",
    "year": "2016",
    "region": "美国",
    "type": "剧集",
    "genre": "动作/科幻",
    "tags": [
      "时间旅行",
      "超级英雄",
      "团队集结",
      "穿越",
      "反派"
    ],
    "oneLine": "时间大师里普·亨特集结一群二线超级英雄和反派,穿越时间追杀永生暴君。",
    "url": "./movies/movie-1511.html",
    "cover": "./11.jpg",
    "category": "热映精选",
    "categoryUrl": "./category-hot-picks.html"
  },
  {
    "id": "1512",
    "title": "活动写真",
    "year": "1920",
    "region": "日本",
    "type": "剧集",
    "genre": "历史剧情",
    "tags": [
      "默片",
      "辩士",
      "电影史",
      "昭和浪漫"
    ],
    "oneLine": "默片时代,一个女弁士用声音为银幕上的男人配音,也为真实世界里的自己争取发声权。",
    "url": "./movies/movie-1512.html",
    "cover": "./12.jpg",
    "category": "悬疑夜场",
    "categoryUrl": "./category-suspense-night.html"
  },
  {
    "id": "1513",
    "title": "侠探特攻3",
    "year": "2023",
    "region": "美国",
    "type": "电影",
    "genre": "动作,犯罪,惊悚",
    "tags": [
      "硬汉侦探",
      "暴力执法",
      "黑色幽默"
    ],
    "oneLine": "私家侦探奈特追查黑客死亡案,意外发现警察局的AI系统正操控整个洛杉矶犯罪网络。",
    "url": "./movies/movie-1513.html",
    "cover": "./13.jpg",
    "category": "热映精选",
    "categoryUrl": "./category-hot-picks.html"
  },
  {
    "id": "1514",
    "title": "君子如玉",
    "year": "2023",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "古装,剧情,武侠",
    "tags": [
      "儒商",
      "家国",
      "茶道",
      "权谋"
    ],
    "oneLine": "一位痴迷茶道的江南书生,用“以茶止戈”的信念,在乱世中凭一己之力守护了千年茶脉。",
    "url": "./movies/movie-1514.html",
    "cover": "./14.jpg",
    "category": "热映精选",
    "categoryUrl": "./category-hot-picks.html"
  },
  {
    "id": "1515",
    "title": "美谍入俄记",
    "year": "2026",
    "region": "美国",
    "type": "剧集",
    "genre": "谍战,喜剧",
    "tags": [
      "冒充",
      "文化冲突",
      "菜鸟间谍",
      "西伯利亚",
      "黑色幽默"
    ],
    "oneLine": "一个被中情局开除的宅男,为了还贷冒充已牺牲的高级特工,独自潜入西伯利亚的冷战时期间谍站。",
    "url": "./movies/movie-1515.html",
    "cover": "./15.jpg",
    "category": "经典片库",
    "categoryUrl": "./category-classic-library.html"
  },
  {
    "id": "1516",
    "title": "爬行异种",
    "year": "2027",
    "region": "美国",
    "type": "电影",
    "genre": "科幻/恐怖",
    "tags": [
      "变异生物",
      "地下实验室",
      "逃生"
    ],
    "oneLine": "一座深埋地下的生物实验室发生泄漏,工作人员必须躲避一群能通过模仿人类声音来捕猎的爬行异种。",
    "url": "./movies/movie-1516.html",
    "cover": "./16.jpg",
    "category": "动作专区",
    "categoryUrl": "./category-action-zone.html"
  },
  {
    "id": "1517",
    "title": "我名叫于明",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "genre": "悬疑/犯罪",
    "tags": [
      "身份互换",
      "东北工业城",
      "人性",
      "罪案",
      "写实"
    ],
    "oneLine": "一个即将退休的老警察,在追查一起尘封十七年的碎尸案时,发现嫌疑人竟与自己的名字重合。",
    "url": "./movies/movie-1517.html",
    "cover": "./17.jpg",
    "category": "奇幻科幻",
    "categoryUrl": "./category-fantasy-sci-fi.html"
  },
  {
    "id": "1518",
    "title": "你的婚姻不是你的婚姻",
    "year": "2024",
    "region": "台湾",
    "type": "剧集",
    "genre": "剧情、爱情、科幻",
    "tags": [
      "婚姻制度",
      "亲密关系",
      "科技伦理",
      "单元剧"
    ],
    "oneLine": "在可以“续约”、“改装”甚至“出租”配偶的未来社会,五对夫妻在婚姻合约到期前72小时,做出了颠覆认知的决定。",
    "url": "./movies/movie-1518.html",
    "cover": "./18.jpg",
    "category": "热映精选",
    "categoryUrl": "./category-hot-picks.html"
  },
  {
    "id": "1519",
    "title": "我的天才女友第一季",
    "year": "2018",
    "region": "意大利",
    "type": "剧集",
    "genre": "剧情",
    "tags": [
      "女性友谊",
      "成长",
      "那不勒斯",
      "文学改编"
    ],
    "oneLine": "在那不勒斯的破旧社区里,两个女孩用彼此的天才与秘密,交换了一场跨越半个世纪的战争与联盟。",
    "url": "./movies/movie-1519.html",
    "cover": "./19.jpg",
    "category": "都市爱情",
    "categoryUrl": "./category-romance-city.html"
  },
  {
    "id": "1520",
    "title": "小哥快跑",
    "year": "2025",
    "region": "中国大陆",
    "type": "电影",
    "genre": "喜剧/动作/犯罪",
    "tags": [
      "外卖骑手",
      "误会",
      "跑酷"
    ],
    "oneLine": "一个外卖小哥因为送错了餐,意外拿到一枚藏有毒品的饺子,从而被黑白两道全城追杀。",
    "url": "./movies/movie-1520.html",
    "cover": "./20.jpg",
    "category": "动作专区",
    "categoryUrl": "./category-action-zone.html"
  },
  {
    "id": "1521",
    "title": "快递先生与贵妃小姐",
    "year": "2025",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "喜剧/爱情/奇幻",
    "tags": [
      "穿越",
      "古今碰撞",
      "外卖员",
      "文物修复"
    ],
    "oneLine": "兼职文物修复的外卖员,每次给神秘女客户送餐都会触发穿越,发现对方竟是千年前的贵妃。",
    "url": "./movies/movie-1521.html",
    "cover": "./21.jpg",
    "category": "经典片库",
    "categoryUrl": "./category-classic-library.html"
  },
  {
    "id": "1522",
    "title": "纽约爱未眠",
    "year": "2019",
    "region": "美国",
    "type": "电影",
    "genre": "爱情/剧情",
    "tags": [
      "都市一夜情",
      "疗愈",
      "错过与重逢"
    ],
    "oneLine": "在纽约错过的两个人,用十年失眠换来一通占线的情歌电台。",
    "url": "./movies/movie-1522.html",
    "cover": "./22.jpg",
    "category": "院线热片",
    "categoryUrl": "./category-cinema-hits.html"
  },
  {
    "id": "1523",
    "title": "青出于蓝粤语",
    "year": "2024",
    "region": "中国香港",
    "type": "电视剧",
    "genre": "家庭、喜剧、伦理",
    "tags": [
      "粤语",
      "龙凤斗智",
      "养老 粤语",
      "代际冲突",
      "广场舞"
    ],
    "oneLine": "精明老太为争一口气,与海归孙女在广场舞领队的位置上展开“宫斗”,结果两人把舞队带进了世界大赛。",
    "url": "./movies/movie-1523.html",
    "cover": "./23.jpg",
    "category": "经典片库",
    "categoryUrl": "./category-classic-library.html"
  },
  {
    "id": "1524",
    "title": "舒克贝塔·五角飞碟",
    "year": "2024",
    "region": "中国大陆",
    "type": "动画电影",
    "genre": "冒险、科幻、喜剧",
    "tags": [
      "经典IP",
      "机械对战",
      "兄弟情",
      "童年回忆",
      "热血"
    ],
    "oneLine": "五角飞碟失控坠入平行时空,舒克贝塔竟成了反叛军通缉的头号宇宙海盗。",
    "url": "./movies/movie-1524.html",
    "cover": "./24.jpg",
    "category": "全球佳作",
    "categoryUrl": "./category-global-stories.html"
  },
  {
    "id": "1525",
    "title": "一场大火之后",
    "year": "2023",
    "region": "中国大陆",
    "type": "电影",
    "genre": "剧情,悬疑",
    "tags": [
      "火灾",
      "小镇",
      "谎言",
      "群像"
    ],
    "oneLine": "一场烧毁半条街的大火后,镇上每个人都说自己是第一个发现火情的人,只有一个孩子说真话。",
    "url": "./movies/movie-1525.html",
    "cover": "./25.jpg",
    "category": "历史古装",
    "categoryUrl": "./category-history-costume.html"
  },
  {
    "id": "1526",
    "title": "咖非正义",
    "year": "2024",
    "region": "中国台湾",
    "type": "剧集",
    "genre": "悬疑/犯罪/剧情",
    "tags": [
      "咖啡",
      "律政",
      "下毒",
      "职场",
      "复仇"
    ],
    "oneLine": "一名死囚的辩护律师,在喝完一杯特调咖啡后,发现自己与冷酷无情的检察官交换了身体。",
    "url": "./movies/movie-1526.html",
    "cover": "./26.jpg",
    "category": "经典片库",
    "categoryUrl": "./category-classic-library.html"
  },
  {
    "id": "1527",
    "title": "缘份精华游",
    "year": "2024",
    "region": "中国香港",
    "type": "电影",
    "genre": "爱情,喜剧",
    "tags": [
      "旅行",
      "暧昧",
      "都市男女",
      "港式幽默"
    ],
    "oneLine": "一对分手三年的冤家情侣,意外抽中了同一张“分手旅行”豪华欧洲游大奖,不得不装作陌生人组团出发。",
    "url": "./movies/movie-1527.html",
    "cover": "./27.jpg",
    "category": "奇幻科幻",
    "categoryUrl": "./category-fantasy-sci-fi.html"
  },
  {
    "id": "1528",
    "title": "一个国家的诞生",
    "year": "2029",
    "region": "美国",
    "type": "电影",
    "genre": "剧情/历史/政治",
    "tags": [
      "虚构历史",
      "分裂",
      "第二次内战",
      "政治惊悚",
      "寓言"
    ],
    "oneLine": "2030年的美国,一场大选引爆了第二次内战,一个普通家庭在国家的裂缝中寻找生存。",
    "url": "./movies/movie-1528.html",
    "cover": "./28.jpg",
    "category": "剧集连看",
    "categoryUrl": "./category-drama-series.html"
  },
  {
    "id": "1529",
    "title": "莫莉·麦克斯韦",
    "year": "2023",
    "region": "英国",
    "type": "电视剧",
    "genre": "传记,剧情",
    "tags": [
      "女权",
      "摇滚",
      "成长",
      "年代"
    ],
    "oneLine": "1970年代,一个来自保守小镇的叛逆女孩,用一台老式录音机记录下了整个英国朋克摇滚的诞生与消亡。",
    "url": "./movies/movie-1529.html",
    "cover": "./29.jpg",
    "category": "家庭生活",
    "categoryUrl": "./category-family-life.html"
  },
  {
    "id": "1530",
    "title": "神农尺",
    "year": "2026",
    "region": "中国大陆",
    "type": "电影",
    "genre": "奇幻/动作/冒险",
    "tags": [
      "上古神器",
      "中医",
      "寻宝"
    ],
    "oneLine": "瘟疫肆虐,中医传人手中的家族信物,竟指向了传说中能起死回生的上古神器神农尺。",
    "url": "./movies/movie-1530.html",
    "cover": "./30.jpg",
    "category": "经典片库",
    "categoryUrl": "./category-classic-library.html"
  },
  {
    "id": "1531",
    "title": "灵魂纸扎店",
    "year": "2026",
    "region": "中国台湾",
    "type": "电影",
    "genre": "恐怖,惊悚,民俗",
    "tags": [
      "纸扎",
      "冥婚",
      "禁忌"
    ],
    "oneLine": "接手祖传纸扎店的女孩发现,每当她完成一件作品,现实中就会有人离奇死亡。",
    "url": "./movies/movie-1531.html",
    "cover": "./31.jpg",
    "category": "院线热片",
    "categoryUrl": "./category-cinema-hits.html"
  },
  {
    "id": "1532",
    "title": "七夜怪谈:少女的怨念",
    "year": "2025",
    "region": "日本",
    "type": "电影",
    "genre": "恐怖",
    "tags": [
      "J-Horror",
      "诅咒",
      "录像带",
      "重启"
    ],
    "oneLine": "经典诅咒录像带被转制成短视频格式后,七天索命周期被压缩到了七个小时。",
    "url": "./movies/movie-1532.html",
    "cover": "./32.jpg",
    "category": "都市爱情",
    "categoryUrl": "./category-romance-city.html"
  },
  {
    "id": "1533",
    "title": "前方错爱请掉头",
    "year": "2025",
    "region": "中国大陆",
    "type": "电影",
    "genre": "爱情/喜剧",
    "tags": [
      "公路喜剧",
      "错位恋爱",
      "自我成长"
    ],
    "oneLine": "为了追回渣男前任,路痴女主搭上了毒舌男闺蜜的顺风车,结果一路上遇到的“前任”比加油站还多。",
    "url": "./movies/movie-1533.html",
    "cover": "./33.jpg",
    "category": "都市爱情",
    "categoryUrl": "./category-romance-city.html"
  },
  {
    "id": "1534",
    "title": "纪雄的房间",
    "year": "2024",
    "region": "日本",
    "type": "电影",
    "genre": "剧情/悬疑/家庭",
    "tags": [
      "孤独死",
      "清理工",
      "回忆",
      "社会问题",
      "治愈"
    ],
    "oneLine": "一名孤独死现场清洁工,在整理逝者遗物时,拼凑出了屋主纪雄令人唏嘘的一生。",
    "url": "./movies/movie-1534.html",
    "cover": "./34.jpg",
    "category": "历史古装",
    "categoryUrl": "./category-history-costume.html"
  },
  {
    "id": "1535",
    "title": "三幕悲剧",
    "year": "1986",
    "region": "英国",
    "type": "电影/剧集",
    "genre": "悬疑/犯罪",
    "tags": [
      "阿加莎改编",
      "连环谋杀",
      "乡村别墅",
      "波洛探案"
    ],
    "oneLine": "一场看似简单的鸡尾酒会猝死,引出了相隔数月的三起命案,而凶手竟是最不可能的那一位。",
    "url": "./movies/movie-1535.html",
    "cover": "./35.jpg",
    "category": "院线热片",
    "categoryUrl": "./category-cinema-hits.html"
  },
  {
    "id": "1536",
    "title": "海螺小姐结婚",
    "year": "1979",
    "region": "日本",
    "type": "特别篇",
    "genre": "家庭,喜剧,动画",
    "tags": [
      "国民番",
      "昭和",
      "婚礼",
      "催泪",
      "日常"
    ],
    "oneLine": "永远长不大的海螺小姐居然要结婚了?新郎却不是观众熟悉的那个他?",
    "url": "./movies/movie-1536.html",
    "cover": "./36.jpg",
    "category": "剧集连看",
    "categoryUrl": "./category-drama-series.html"
  },
  {
    "id": "1537",
    "title": "科斯塔!",
    "year": "2024",
    "region": "西班牙",
    "type": "剧集",
    "genre": "喜剧/犯罪/动作",
    "tags": [
      "西班牙风情",
      "度假胜地",
      "犯罪喜剧",
      "多线叙事"
    ],
    "oneLine": "西班牙太阳海岸,一个前黑帮会计师、一个退休警察和三个中国游客,被同一袋钻石追着跑。",
    "url": "./movies/movie-1537.html",
    "cover": "./37.jpg",
    "category": "家庭生活",
    "categoryUrl": "./category-family-life.html"
  },
  {
    "id": "1538",
    "title": "夫人2025",
    "year": "2025",
    "region": "法国",
    "type": "电影",
    "genre": "剧情/科幻",
    "tags": [
      "人工智能",
      "阶级分化",
      "伦理困境"
    ],
    "oneLine": "2045年,富人可以购买完美复制已故亲人的AI“夫人”,而穷人只能租用共享版,每周限两小时。",
    "url": "./movies/movie-1538.html",
    "cover": "./38.jpg",
    "category": "家庭生活",
    "categoryUrl": "./category-family-life.html"
  },
  {
    "id": "1539",
    "title": "9号秘事第七季",
    "year": "2023",
    "region": "英国",
    "type": "剧集",
    "genre": "剧情,悬疑,惊悚",
    "tags": [
      "单元剧",
      "反转",
      "黑色幽默",
      "人性"
    ],
    "oneLine": "每一扇门后都是一个独立世界,这一季的9号空间将颠覆你对善恶的认知。",
    "url": "./movies/movie-1539.html",
    "cover": "./39.jpg",
    "category": "家庭生活",
    "categoryUrl": "./category-family-life.html"
  },
  {
    "id": "1540",
    "title": "我的同桌又上热搜了",
    "year": "2021",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "喜剧,爱情,校园",
    "tags": [
      "校园网红",
      "社交媒体",
      "欢喜冤家",
      "反网暴"
    ],
    "oneLine": "闷骚学霸的同桌意外成了抖音网红,为了让她安静学习,学霸被迫成了她的“黑粉头子”。",
    "url": "./movies/movie-1540.html",
    "cover": "./40.jpg",
    "category": "青春喜剧",
    "categoryUrl": "./category-youth-comedy.html"
  },
  {
    "id": "1541",
    "title": "嘻哈四重奏第一季",
    "year": "2024",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "喜剧,音乐",
    "tags": [
      "短剧",
      "解压",
      "民工漫风格",
      "吐槽"
    ],
    "oneLine": "四个在琴行打工的废柴,为还债组成史上最不靠谱的说唱团体“四重奏”。 琴行老板跑路,留下四个五音不全的员工和一堆卖不掉的乐器,他们决定用说唱来还债。",
    "url": "./movies/movie-1541.html",
    "cover": "./41.jpg",
    "category": "悬疑夜场",
    "categoryUrl": "./category-suspense-night.html"
  },
  {
    "id": "1542",
    "title": "最乖巧的杀人犯",
    "year": "2023",
    "region": "日本",
    "type": "电影",
    "genre": "犯罪,剧情,心理",
    "tags": [
      "多重人格",
      "家庭",
      "反转",
      "压抑"
    ],
    "oneLine": "邻里眼中那个永远笑着打招呼、帮老人提菜的温顺男孩,在无人知晓的深夜,有另一个名字。",
    "url": "./movies/movie-1542.html",
    "cover": "./42.jpg",
    "category": "历史古装",
    "categoryUrl": "./category-history-costume.html"
  },
  {
    "id": "1543",
    "title": "大雄的天方夜谭",
    "year": "2025",
    "region": "日本",
    "type": "动画电影",
    "genre": "奇幻/冒险/家庭",
    "tags": [
      "哆啦A梦",
      "一千零一夜",
      "平行宇宙",
      "神灯精灵"
    ],
    "oneLine": "大雄用如果电话亭进入《一千零一夜》世界,却发现故事书被魔改,自己必须成为辛巴达才能回家。",
    "url": "./movies/movie-1543.html",
    "cover": "./43.jpg",
    "category": "热映精选",
    "categoryUrl": "./category-hot-picks.html"
  },
  {
    "id": "1544",
    "title": "虎将征西",
    "year": "1985",
    "region": "中国内地",
    "type": "电影",
    "genre": "动作,历史",
    "tags": [
      "古装",
      "战争",
      "忠臣",
      "平反冤案"
    ],
    "oneLine": "明朝将军被诬叛国发配边疆,十年后他用一支囚犯军队杀回京城,只为向皇帝要一句公道话。",
    "url": "./movies/movie-1544.html",
    "cover": "./44.jpg",
    "category": "都市爱情",
    "categoryUrl": "./category-romance-city.html"
  },
  {
    "id": "1545",
    "title": "再奏一曲圣诞歌",
    "year": "2024",
    "region": "英国",
    "type": "电影",
    "genre": "剧情/家庭/音乐",
    "tags": [
      "圣诞",
      "老人院",
      "治愈",
      "合唱团",
      "回忆"
    ],
    "oneLine": "毒舌老音乐家被下放到老人院指挥一支跑调的合唱团,他发现治愈这些老人的不是技巧,而是遗忘的歌词。",
    "url": "./movies/movie-1545.html",
    "cover": "./45.jpg",
    "category": "经典片库",
    "categoryUrl": "./category-classic-library.html"
  },
  {
    "id": "1546",
    "title": "寄生兽:完结篇",
    "year": "2024",
    "region": "日本",
    "type": "电影",
    "genre": "科幻、恐怖、动作",
    "tags": [
      "漫改",
      "血腥美学",
      "人性探讨",
      "寄生"
    ],
    "oneLine": "寄生兽与人类共存失败,东京沦陷,只有那个右手仍是怪物的少年能终结战争。",
    "url": "./movies/movie-1546.html",
    "cover": "./46.jpg",
    "category": "都市爱情",
    "categoryUrl": "./category-romance-city.html"
  },
  {
    "id": "1547",
    "title": "普通男女",
    "year": "2024",
    "region": "中国",
    "type": "电影",
    "genre": "剧情",
    "tags": [
      "现实主义",
      "情感",
      "生活流"
    ],
    "oneLine": "一对离婚多年的普通男女,因女儿婚礼被迫共处一室,意外揭开二十年前分手的真实隐情。",
    "url": "./movies/movie-1547.html",
    "cover": "./47.jpg",
    "category": "经典片库",
    "categoryUrl": "./category-classic-library.html"
  },
  {
    "id": "1548",
    "title": "赛尔号第五季之猎天困兽",
    "year": "2025",
    "region": "中国大陆",
    "type": "动画/季播",
    "genre": "科幻/冒险/儿童",
    "tags": [
      "赛尔号",
      "宇宙冒险",
      "机械兽",
      "太空监狱"
    ],
    "oneLine": "赛尔先锋小队奉命押送一只能够吞噬恒星的太古机械兽,却在中途发现它其实是被冤枉的星域守护者。",
    "url": "./movies/movie-1548.html",
    "cover": "./48.jpg",
    "category": "院线热片",
    "categoryUrl": "./category-cinema-hits.html"
  },
  {
    "id": "1549",
    "title": "血肉秀",
    "year": "2024",
    "region": "加拿大",
    "type": "电影",
    "genre": "恐怖,真人秀",
    "tags": [
      "邪典",
      "人体改造",
      "直播",
      "视觉冲击",
      "社会讽刺"
    ],
    "oneLine": "一档过气综艺节目为了翻红,开始让嘉宾在舞台上进行活体器官艺术改造。",
    "url": "./movies/movie-1549.html",
    "cover": "./49.jpg",
    "category": "悬疑夜场",
    "categoryUrl": "./category-suspense-night.html"
  },
  {
    "id": "1550",
    "title": "异物志",
    "year": "2022",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "悬疑,奇幻",
    "tags": [
      "物件超能力",
      "都市传说",
      "单元剧",
      "阴谋"
    ],
    "oneLine": "旧物店里每件物品都藏着诡异能力,店主发现它们正被人故意散播到城市。",
    "url": "./movies/movie-1550.html",
    "cover": "./50.jpg",
    "category": "经典片库",
    "categoryUrl": "./category-classic-library.html"
  },
  {
    "id": "1551",
    "title": "八重子的低音",
    "year": "2024",
    "region": "日本",
    "type": "电影",
    "genre": "剧情、音乐、家庭",
    "tags": [
      "音乐治愈",
      "母女关系",
      "低音提琴",
      "衰老与遗忘"
    ],
    "oneLine": "一个失智的母亲只会哼一首不成调的低音旋律,女儿花了十年才找到那首歌背后的真相。",
    "url": "./movies/movie-1551.html",
    "cover": "./51.jpg",
    "category": "悬疑夜场",
    "categoryUrl": "./category-suspense-night.html"
  },
  {
    "id": "1552",
    "title": "沉船湾浴血战",
    "year": "2008",
    "region": "美国",
    "type": "电影",
    "genre": "战争,动作,惊悚",
    "tags": [
      "海岛",
      "游击",
      "雇佣兵",
      "丛林",
      "残酷"
    ],
    "oneLine": "一支美军特种小队在希腊沉船湾被困,发现他们要对付的不是德军,而是岛上被诅咒的不死怪物。",
    "url": "./movies/movie-1552.html",
    "cover": "./52.jpg",
    "category": "历史古装",
    "categoryUrl": "./category-history-costume.html"
  },
  {
    "id": "1553",
    "title": "辣手神探",
    "year": "2025",
    "region": "中国香港",
    "type": "电影",
    "genre": "动作,犯罪,悬疑",
    "tags": [
      "枪战",
      "双雄",
      "卧底",
      "暴力美学",
      "硬汉"
    ],
    "oneLine": "一个患有“触觉失控”怪病的杀手,只能用暴力来感受真实,直到他遇到一个不怕死的警察。",
    "url": "./movies/movie-1553.html",
    "cover": "./53.jpg",
    "category": "热映精选",
    "categoryUrl": "./category-hot-picks.html"
  },
  {
    "id": "1554",
    "title": "新阴阳魔界第一季",
    "year": "2025",
    "region": "美国",
    "type": "剧集",
    "genre": "科幻、悬疑、恐怖",
    "tags": [
      "重启经典",
      "单元剧",
      "社会寓言",
      "心理惊悚",
      "高概念"
    ],
    "oneLine": "每个人的手机里都住着一个“阴阳魔界”,它会在你最脆弱时推送一个改变命运的选择题。",
    "url": "./movies/movie-1554.html",
    "cover": "./54.jpg",
    "category": "青春喜剧",
    "categoryUrl": "./category-youth-comedy.html"
  },
  {
    "id": "1555",
    "title": "戴脚镣的女孩",
    "year": "2024",
    "region": "法国/比利时",
    "type": "电影",
    "genre": "剧情/犯罪",
    "tags": [
      "电子镣铐",
      "社会回归",
      "母女",
      "司法伦理"
    ],
    "oneLine": "一名因纵火罪被判处电子镣铐监管的少女,必须在遵守宵禁和去医院探望病危母亲之间做出残酷的选择。",
    "url": "./movies/movie-1555.html",
    "cover": "./55.jpg",
    "category": "历史古装",
    "categoryUrl": "./category-history-costume.html"
  },
  {
    "id": "1556",
    "title": "布洛阿特峰之巅",
    "year": "2026",
    "region": "英国",
    "type": "电影",
    "genre": "冒险/传记",
    "tags": [
      "登山",
      "极寒",
      "生存挑战",
      "真实改编"
    ],
    "oneLine": "基于真实事件改编,一个双腿截肢的登山者向世界第十二高峰发起致命冲击。",
    "url": "./movies/movie-1556.html",
    "cover": "./56.jpg",
    "category": "青春喜剧",
    "categoryUrl": "./category-youth-comedy.html"
  },
  {
    "id": "1557",
    "title": "谋杀犯",
    "year": "2005",
    "region": "中国香港",
    "type": "电影",
    "genre": "犯罪,剧情,惊悚",
    "tags": [
      "变态杀手",
      "心理侧写",
      "警方腐败",
      "反转",
      "冷硬派"
    ],
    "oneLine": "警局王牌侧写师在追查连环杀手时,发现所有线索都指向二十年前一桩被掩盖的冤案,而凶手可能就是自己。",
    "url": "./movies/movie-1557.html",
    "cover": "./57.jpg",
    "category": "动作专区",
    "categoryUrl": "./category-action-zone.html"
  },
  {
    "id": "1558",
    "title": "回光报告",
    "year": "2022",
    "region": "中国大陆",
    "type": "网络剧",
    "genre": "科幻,悬疑,惊悚",
    "tags": [
      "濒死体验",
      "调查员",
      "记忆读取",
      "阴谋",
      "人性"
    ],
    "oneLine": "一份关于濒死体验的神秘报告,让一名不信鬼神的调查员发现,所谓的天堂可能是一个数据回收站。",
    "url": "./movies/movie-1558.html",
    "cover": "./58.jpg",
    "category": "全球佳作",
    "categoryUrl": "./category-global-stories.html"
  },
  {
    "id": "1559",
    "title": "爱,要呼吸",
    "year": "2025",
    "region": "中国大陆",
    "type": "电视剧",
    "genre": "都市情感",
    "tags": [
      "罕见病",
      "重症监护",
      "生死恋",
      "医疗",
      "催泪"
    ],
    "oneLine": "她是ICU的护士,他是只能靠呼吸机维持生命的渐冻症患者,他们的爱情,是在每一次呼吸机报警的间隙里偷来的。",
    "url": "./movies/movie-1559.html",
    "cover": "./59.jpg",
    "category": "院线热片",
    "categoryUrl": "./category-cinema-hits.html"
  },
  {
    "id": "1560",
    "title": "公社",
    "year": "1979",
    "region": "中国大陆",
    "type": "电影",
    "genre": "剧情/历史",
    "tags": [
      "集体主义",
      "时代变革",
      "人性冲突"
    ],
    "oneLine": "1978年冬,北方一座人民公社面临解散,老社长与返乡知青在最后的大会上展开一场关于“家”与“人”的激烈辩论。",
    "url": "./movies/movie-1560.html",
    "cover": "./60.jpg",
    "category": "院线热片",
    "categoryUrl": "./category-cinema-hits.html"
  },
  {
    "id": "1561",
    "title": "进击的巨人后篇自由之翼",
    "year": "2025",
    "region": "日本",
    "type": "电影",
    "genre": "动画,动作,奇幻",
    "tags": [
      "完结篇",
      "史诗决战",
      "反战",
      "宿命",
      "剧场版"
    ],
    "oneLine": "艾伦启动地鸣,三笠必须在他毁灭世界之前,杀死自己最爱的人。",
    "url": "./movies/movie-1561.html",
    "cover": "./61.jpg",
    "category": "历史古装",
    "categoryUrl": "./category-history-costume.html"
  },
  {
    "id": "1562",
    "title": "龙卷风2025",
    "year": "2025",
    "region": "美国",
    "type": "电影",
    "genre": "灾难/动作",
    "tags": [
      "特效大片",
      "末日求生",
      "气象武器"
    ],
    "oneLine": "气候失控的2025年,一场足以撕裂地球表面的超巨型龙卷风即将登陆洛杉矶,一群气象疯子决定用“引爆”的方式来拯救城市。",
    "url": "./movies/movie-1562.html",
    "cover": "./62.jpg",
    "category": "青春喜剧",
    "categoryUrl": "./category-youth-comedy.html"
  },
  {
    "id": "1563",
    "title": "我想和你好好的",
    "year": "2013",
    "region": "中国大陆",
    "type": "电影",
    "genre": "爱情/剧情",
    "tags": [
      "都市",
      "北漂",
      "虐恋",
      "真实",
      "控制欲"
    ],
    "oneLine": "广告公司白领与个性自由的小演员同居后,因猜忌与控制欲上演了一场令人窒息的爱与毁灭。",
    "url": "./movies/movie-1563.html",
    "cover": "./63.jpg",
    "category": "历史古装",
    "categoryUrl": "./category-history-costume.html"
  },
  {
    "id": "1564",
    "title": "内燃机",
    "year": "2025",
    "region": "德国",
    "type": "剧集",
    "genre": "科幻,惊悚,悬疑",
    "tags": [
      "新能源战争",
      "人体改造",
      "机械器官",
      "地下赛车",
      "能源公司阴谋"
    ],
    "oneLine": "在禁止燃油的2071年,一群改装人类器官的“内燃人”成为反抗全球垄断能源公司的最后希望。",
    "url": "./movies/movie-1564.html",
    "cover": "./64.jpg",
    "category": "经典片库",
    "categoryUrl": "./category-classic-library.html"
  },
  {
    "id": "1565",
    "title": "真假维梅尔",
    "year": "2023",
    "region": "荷兰/比利时",
    "type": "电影",
    "genre": "剧情/犯罪",
    "tags": [
      "艺术造假",
      "二战",
      "纳粹",
      "天才画家"
    ],
    "oneLine": "一个落魄画家为活命伪造维梅尔名画,却被纳粹头目奉为至宝,引发了艺术界的世纪丑闻。",
    "url": "./movies/movie-1565.html",
    "cover": "./65.jpg",
    "category": "全球佳作",
    "categoryUrl": "./category-global-stories.html"
  },
  {
    "id": "1566",
    "title": "夺皮",
    "year": "2024",
    "region": "韩国",
    "type": "电影",
    "genre": "恐怖,惊悚",
    "tags": [
      "客串",
      "换脸",
      "身份焦虑",
      "美容"
    ],
    "oneLine": "整形外科医生在地下黑市交易中买到一张“完美人脸”,但当他移植后,他发现这张皮会在午夜醒来,试图吃掉他的真脸。",
    "url": "./movies/movie-1566.html",
    "cover": "./66.jpg",
    "category": "动作专区",
    "categoryUrl": "./category-action-zone.html"
  },
  {
    "id": "1567",
    "title": "科洛",
    "year": "2023",
    "region": "新西兰",
    "type": "电影",
    "genre": "剧情/家庭",
    "tags": [
      "毛利文化",
      "祖孙",
      "鲸鱼",
      "环保",
      "治愈"
    ],
    "oneLine": "十岁毛利女孩科洛在鲸鱼搁浅事件中,发现了自己能与鲸鱼对话的神秘天赋。",
    "url": "./movies/movie-1567.html",
    "cover": "./67.jpg",
    "category": "经典片库",
    "categoryUrl": "./category-classic-library.html"
  },
  {
    "id": "1568",
    "title": "党小组长",
    "year": "2025",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "剧情,职场,社会",
    "tags": [
      "基层",
      "党建",
      "职场斗争",
      "原则",
      "理想主义"
    ],
    "oneLine": "一个耿直的90后程序员被推举为党小组长,在互联网大厂的内卷与斗争中,他坚持用党章解决KPI问题。",
    "url": "./movies/movie-1568.html",
    "cover": "./68.jpg",
    "category": "全球佳作",
    "categoryUrl": "./category-global-stories.html"
  },
  {
    "id": "1569",
    "title": "我们那微不足道的落幕",
    "year": "2023",
    "region": "日本",
    "type": "剧集",
    "genre": "剧情/同性/悬疑",
    "tags": [
      "末日",
      "治愈",
      "反转",
      "舞台剧",
      "双男主"
    ],
    "oneLine": "世界走向终结,一对分手多年的恋人被迫在最后72小时里重演他们最失败的那场戏。",
    "url": "./movies/movie-1569.html",
    "cover": "./69.jpg",
    "category": "动作专区",
    "categoryUrl": "./category-action-zone.html"
  },
  {
    "id": "1570",
    "title": "吴越钱王",
    "year": "2025",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "历史,传记,剧情",
    "tags": [
      "五代十国",
      "帝王",
      "保境安民",
      "家国情怀"
    ],
    "oneLine": "讲述五代十国时期,吴越国创立者钱镠如何从一个贩盐小子,成长为“保境安民”的一代雄主。",
    "url": "./movies/movie-1570.html",
    "cover": "./70.jpg",
    "category": "热映精选",
    "categoryUrl": "./category-hot-picks.html"
  },
  {
    "id": "1571",
    "title": "风中划船",
    "year": "2024",
    "region": "中国大陆/台湾",
    "type": "电影",
    "genre": "剧情/家庭/运动",
    "tags": [
      "帆船",
      "自闭症",
      "父子关系",
      "治愈",
      "大自然"
    ],
    "oneLine": "一个自闭症少年,一个负债累累的父亲,一艘破旧帆船,一场没有回头路的环海航行。",
    "url": "./movies/movie-1571.html",
    "cover": "./71.jpg",
    "category": "全球佳作",
    "categoryUrl": "./category-global-stories.html"
  },
  {
    "id": "1572",
    "title": "摆高",
    "year": "2018",
    "region": "中国大陆",
    "type": "电影",
    "genre": "剧情,运动,励志",
    "tags": [
      "跳高少年",
      "农村体育",
      "土法训练",
      "金牌教练"
    ],
    "oneLine": "山村少年用竹竿和沙坑练习跳高,被前省队教练发现后,面临“规范动作”与“天性爆发”的终极二选一。",
    "url": "./movies/movie-1572.html",
    "cover": "./72.jpg",
    "category": "青春喜剧",
    "categoryUrl": "./category-youth-comedy.html"
  },
  {
    "id": "1573",
    "title": "一起走过",
    "year": "2021",
    "region": "中国大陆",
    "type": "电影",
    "genre": "纪录片,历史,抗疫",
    "tags": [
      "真实",
      "武汉",
      "普通人",
      "温情"
    ],
    "oneLine": "没有剧本,只有一台台手机和监控摄像头,记录了2020年初武汉封城期间,五个普通家庭在绝望与希望之间“一起走过”的72天。",
    "url": "./movies/movie-1573.html",
    "cover": "./73.jpg",
    "category": "动作专区",
    "categoryUrl": "./category-action-zone.html"
  },
  {
    "id": "1574",
    "title": "金斯敦市长第一季",
    "year": "2024",
    "region": "美国",
    "type": "电视剧",
    "genre": "犯罪/剧情",
    "tags": [
      "监狱",
      "权力掮客",
      "家族",
      "腐败"
    ],
    "oneLine": "他不管监狱内外的事,但监狱内外的事都归他管——因为他是金斯敦市长。",
    "url": "./movies/movie-1574.html",
    "cover": "./74.jpg",
    "category": "院线热片",
    "categoryUrl": "./category-cinema-hits.html"
  },
  {
    "id": "1575",
    "title": "日式欢喜冤家",
    "year": "2022",
    "region": "日本",
    "type": "剧集",
    "genre": "爱情/喜剧/职场",
    "tags": [
      "办公室恋情",
      "死对头",
      "傲娇",
      "日剧跑",
      "真香定律"
    ],
    "oneLine": "全公司公认的死对头——效率狂女上司和摸鱼王男下属,被迫假扮情侣去夏威夷出差。",
    "url": "./movies/movie-1575.html",
    "cover": "./75.jpg",
    "category": "剧集连看",
    "categoryUrl": "./category-drama-series.html"
  },
  {
    "id": "1576",
    "title": "山姆·克莱默克的时间机器",
    "year": "2029",
    "region": "英国/美国",
    "type": "电影",
    "genre": "科幻/悬疑",
    "tags": [
      "时间旅行",
      "平行宇宙",
      "伦理困境",
      "天才"
    ],
    "oneLine": "物理学家山姆造出了时间机器,但他发现每使用一次,现实世界就会抹除一个他深爱的人。",
    "url": "./movies/movie-1576.html",
    "cover": "./76.jpg",
    "category": "奇幻科幻",
    "categoryUrl": "./category-fantasy-sci-fi.html"
  },
  {
    "id": "1577",
    "title": "天地争霸美猴王粤语",
    "year": "1998",
    "region": "中国香港",
    "type": "电视剧",
    "genre": "动作、奇幻、神话",
    "tags": [
      "西游记",
      "粤语原声",
      "法术",
      "搞笑",
      "热血"
    ],
    "oneLine": "黑化版孙悟空誓要屠尽天庭,已成斗战胜佛的他不得不穿越时空阻止曾经的自己。",
    "url": "./movies/movie-1577.html",
    "cover": "./77.jpg",
    "category": "都市爱情",
    "categoryUrl": "./category-romance-city.html"
  },
  {
    "id": "1578",
    "title": "最后的轰炸",
    "year": "2025",
    "region": "美国",
    "type": "电影",
    "genre": "战争,历史",
    "tags": [
      "二战",
      "B-29",
      "东京轰炸"
    ],
    "oneLine": "1945年春,一架B-29的机组执行最后一次对日轰炸任务,却发现目标早已是空城。",
    "url": "./movies/movie-1578.html",
    "cover": "./78.jpg",
    "category": "都市爱情",
    "categoryUrl": "./category-romance-city.html"
  },
  {
    "id": "1579",
    "title": "致1999年的自己",
    "year": "2025",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "剧情/青春",
    "tags": [
      "怀旧",
      "成长",
      "治愈",
      "年代"
    ],
    "oneLine": "35岁的职场精英在搬家时翻出1999年的日记本,每晚入睡后,她都会回到那个千禧年前的夏天。",
    "url": "./movies/movie-1579.html",
    "cover": "./79.jpg",
    "category": "全球佳作",
    "categoryUrl": "./category-global-stories.html"
  },
  {
    "id": "1580",
    "title": "独走钢索",
    "year": "2026",
    "region": "中国大陆",
    "type": "电影",
    "genre": "犯罪/剧情/动作",
    "tags": [
      "高楼清洁工",
      "黑吃黑",
      "恐高症"
    ],
    "oneLine": "一个患有恐高症的高楼清洁工,意外拍到了金融大厦里的谋杀案,而凶手此刻就站在他头顶的楼层往下看。",
    "url": "./movies/movie-1580.html",
    "cover": "./80.jpg",
    "category": "青春喜剧",
    "categoryUrl": "./category-youth-comedy.html"
  },
  {
    "id": "1581",
    "title": "空虚",
    "year": "2025",
    "region": "中国香港",
    "type": "电影",
    "genre": "剧情,科幻",
    "tags": [
      "元宇宙",
      "情感缺失",
      "悬疑",
      "都市病"
    ],
    "oneLine": "在沉迷感官刺激的未来,一种让人丧失情绪的空虚病毒爆发,只有流泪才能保命。",
    "url": "./movies/movie-1581.html",
    "cover": "./81.jpg",
    "category": "青春喜剧",
    "categoryUrl": "./category-youth-comedy.html"
  },
  {
    "id": "1582",
    "title": "校花的超级保镖之无极诀",
    "year": "2024",
    "region": "中国大陆",
    "type": "网络电影",
    "genre": "动作,奇幻,喜剧",
    "tags": [
      "校园修仙",
      "贴身保护",
      "反转套路",
      "二次元画风"
    ],
    "oneLine": "修仙界第一高手被贬下凡,任务是给一名普通校花当保镖,却发现校花体内封印着上古魔尊,而她本人对此毫不知情。",
    "url": "./movies/movie-1582.html",
    "cover": "./82.jpg",
    "category": "全球佳作",
    "categoryUrl": "./category-global-stories.html"
  },
  {
    "id": "1583",
    "title": "逃出绝命镇",
    "year": "2027",
    "region": "美国",
    "type": "电影",
    "genre": "科幻/恐怖/悬疑",
    "tags": [
      "记忆移植",
      "郊区恐怖",
      "种族反转",
      "脑机农庄"
    ],
    "oneLine": "他受邀去白人女友家的乡下庄园度假,却发现每一位黑仆的后脑勺都植入了发光芯片。",
    "url": "./movies/movie-1583.html",
    "cover": "./83.jpg",
    "category": "都市爱情",
    "categoryUrl": "./category-romance-city.html"
  },
  {
    "id": "1584",
    "title": "少女天师",
    "year": "2020",
    "region": "中国台湾",
    "type": "电视剧",
    "genre": "奇幻/动作/喜剧",
    "tags": [
      "驱魔",
      "校园",
      "女汉子",
      "民俗恐怖",
      "搞笑灵异"
    ],
    "oneLine": "只想当网红的废柴高中女生,体内竟住着千年的道教天师灵魂。",
    "url": "./movies/movie-1584.html",
    "cover": "./84.jpg",
    "category": "全球佳作",
    "categoryUrl": "./category-global-stories.html"
  },
  {
    "id": "1585",
    "title": "神秘夫人粤语",
    "year": "2024",
    "region": "中国香港",
    "type": "电视剧",
    "genre": "悬疑,剧情",
    "tags": [
      "豪门",
      "复仇",
      "粤语"
    ],
    "oneLine": "一场大火后,失忆的豪门太太回到家族,身边所有人都在说她以前很坏,但她发现自己现在很善良。",
    "url": "./movies/movie-1585.html",
    "cover": "./85.jpg",
    "category": "家庭生活",
    "categoryUrl": "./category-family-life.html"
  },
  {
    "id": "1586",
    "title": "爱是永恒",
    "year": "2016",
    "region": "法国/比利时",
    "type": "电影",
    "genre": "爱情",
    "tags": [
      "史诗",
      "家族",
      "时间跨度",
      "生死"
    ],
    "oneLine": "从一战到现代,三代法国女性的爱情与生命传承,如诗般流动的视觉长卷。",
    "url": "./movies/movie-1586.html",
    "cover": "./86.jpg",
    "category": "院线热片",
    "categoryUrl": "./category-cinema-hits.html"
  },
  {
    "id": "1587",
    "title": "君子如玉",
    "year": "2024",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "古装,悬疑,探案",
    "tags": [
      "玉文化",
      "儒生探案",
      "朝堂暗斗",
      "双男主"
    ],
    "oneLine": "温润如玉的太学博士,为查清亡友冤案,联手刺客之女,揭开一场玉石换血案。",
    "url": "./movies/movie-1587.html",
    "cover": "./87.jpg",
    "category": "青春喜剧",
    "categoryUrl": "./category-youth-comedy.html"
  },
  {
    "id": "1588",
    "title": "无处遁形",
    "year": "2024",
    "region": "中国大陆",
    "type": "电视剧",
    "genre": "悬疑,犯罪,剧情",
    "tags": [
      "黑客",
      "反腐",
      "追踪",
      "猫鼠游戏"
    ],
    "oneLine": "顶尖黑客入侵全城监控,只为揪出藏在身边的杀父仇人。",
    "url": "./movies/movie-1588.html",
    "cover": "./88.jpg",
    "category": "家庭生活",
    "categoryUrl": "./category-family-life.html"
  },
  {
    "id": "1589",
    "title": "夺命解码",
    "year": "2026",
    "region": "美国/德国",
    "type": "电影",
    "genre": "悬疑/惊悚/科幻",
    "tags": [
      "暗网游戏",
      "死亡直播",
      "密室解谜"
    ],
    "oneLine": "暗网上流传一个解码游戏,赢家能得到一切,输家会在直播中死亡。",
    "url": "./movies/movie-1589.html",
    "cover": "./89.jpg",
    "category": "院线热片",
    "categoryUrl": "./category-cinema-hits.html"
  },
  {
    "id": "1590",
    "title": "我可以自己疯",
    "year": "2009",
    "region": "美国",
    "type": "电影",
    "genre": "剧情,喜剧",
    "tags": [
      "泰勒·派瑞",
      "玛蒂大妈",
      "性别反串",
      "家庭和解"
    ],
    "oneLine": "脾气火爆的玛蒂大妈在街上捡到一个离家出走的叛逆少女,决定用“疯狂的爱”来管教她。",
    "url": "./movies/movie-1590.html",
    "cover": "./90.jpg",
    "category": "动作专区",
    "categoryUrl": "./category-action-zone.html"
  },
  {
    "id": "1591",
    "title": "边缘",
    "year": "2024",
    "region": "中国",
    "type": "电影",
    "genre": "剧情,犯罪,动作",
    "tags": [
      "卧底",
      "灰色地带",
      "硬核",
      "人性拷问"
    ],
    "oneLine": "一位即将退休的警察主动潜入毒枭集团,却发现自己唯一的儿子早已是组织内部比卧底更深的“边缘人”。",
    "url": "./movies/movie-1591.html",
    "cover": "./91.jpg",
    "category": "动作专区",
    "categoryUrl": "./category-action-zone.html"
  },
  {
    "id": "1592",
    "title": "电子情书",
    "year": "2024",
    "region": "中国大陆",
    "type": "网剧",
    "genre": "爱情/悬疑",
    "tags": [
      "都市情感",
      "黑客恋爱",
      "身份错位",
      "短信疑云"
    ],
    "oneLine": "内向的程序员收到了来自已故前女友的电子情书,而信中预言了他即将遇见的每一个陌生人。",
    "url": "./movies/movie-1592.html",
    "cover": "./92.jpg",
    "category": "奇幻科幻",
    "categoryUrl": "./category-fantasy-sci-fi.html"
  },
  {
    "id": "1593",
    "title": "浪荡少年时",
    "year": "2025",
    "region": "中国台湾",
    "type": "电影",
    "genre": "剧情,同性,青春",
    "tags": [
      "街头混混",
      "初恋",
      "自我认同"
    ],
    "oneLine": "90年代的台北街头,一个混迹街头的少年爱上了常被自己欺负的同班优等生。",
    "url": "./movies/movie-1593.html",
    "cover": "./93.jpg",
    "category": "动作专区",
    "categoryUrl": "./category-action-zone.html"
  },
  {
    "id": "1594",
    "title": "完美银行大劫案",
    "year": "2024",
    "region": "英国",
    "type": "电视剧",
    "genre": "犯罪、剧情、悬疑",
    "tags": [
      "真实改编",
      "银行劫案",
      "地下隧道",
      "伦敦"
    ],
    "oneLine": "2012年伦敦,一伙业余匪徒挖穿了伦敦最古老银行的金库,但他们发现的事比钱更值钱——也更要命。",
    "url": "./movies/movie-1594.html",
    "cover": "./94.jpg",
    "category": "青春喜剧",
    "categoryUrl": "./category-youth-comedy.html"
  },
  {
    "id": "1595",
    "title": "我的小可爱",
    "year": "2024",
    "region": "中国大陆",
    "type": "电视剧",
    "genre": "家庭/喜剧/奇幻",
    "tags": [
      "萌宠互换",
      "社畜日常",
      "软科幻"
    ],
    "oneLine": "大厂女程序员意外与一只流浪猫互换了身体,她必须在喵生中找出变回人的代码漏洞。",
    "url": "./movies/movie-1595.html",
    "cover": "./95.jpg",
    "category": "全球佳作",
    "categoryUrl": "./category-global-stories.html"
  },
  {
    "id": "1596",
    "title": "七面人国语",
    "year": "1982",
    "region": "中国香港",
    "type": "电影",
    "genre": "动作/悬疑",
    "tags": [
      "易容",
      "复仇",
      "连环杀局",
      "港式硬汉"
    ],
    "oneLine": "一位精通七种易容术的奇才,在夜上海为寻仇家,却意外卷入一场惊天的黄金劫案。",
    "url": "./movies/movie-1596.html",
    "cover": "./96.jpg",
    "category": "悬疑夜场",
    "categoryUrl": "./category-suspense-night.html"
  },
  {
    "id": "1597",
    "title": "蒙特卡洛",
    "year": "2023",
    "region": "摩纳哥",
    "type": "电影",
    "genre": "爱情剧情",
    "tags": [
      "赌场",
      "替身",
      "阶层跨越"
    ],
    "oneLine": "赌场女清洁工因酷似富豪失踪的女儿,被卷入一场真假千金与复仇阴谋的漩涡。",
    "url": "./movies/movie-1597.html",
    "cover": "./97.jpg",
    "category": "奇幻科幻",
    "categoryUrl": "./category-fantasy-sci-fi.html"
  },
  {
    "id": "1598",
    "title": "夜空",
    "year": "2024",
    "region": "中国台湾",
    "type": "电影",
    "genre": "剧情/科幻",
    "tags": [
      "平行宇宙",
      "失忆",
      "爱情",
      "台北",
      "雨夜"
    ],
    "oneLine": "一场诡异的流星雨后,台北一名失意程序员发现只有自己能看见倒挂的银河。",
    "url": "./movies/movie-1598.html",
    "cover": "./98.jpg",
    "category": "都市爱情",
    "categoryUrl": "./category-romance-city.html"
  },
  {
    "id": "1599",
    "title": "出走",
    "year": "2025",
    "region": "中国大陆",
    "type": "电影",
    "genre": "剧情/家庭/文艺",
    "tags": [
      "女性觉醒",
      "公路电影",
      "代际冲突",
      "中年困境"
    ],
    "oneLine": "56岁的家庭主妇李秀莲在生日当天决定“自驾出走”,追寻被柴米油盐埋葬了三十年的自我。",
    "url": "./movies/movie-1599.html",
    "cover": "./99.jpg",
    "category": "院线热片",
    "categoryUrl": "./category-cinema-hits.html"
  },
  {
    "id": "1600",
    "title": "海绵宝宝国语",
    "year": "1999",
    "region": "美国",
    "type": "动画",
    "genre": "喜剧,动画,家庭",
    "tags": [
      "比基尼海滩",
      "蟹堡王",
      "派大星",
      "章鱼哥",
      "童年经典"
    ],
    "oneLine": "一块会说话的海绵在海底炸蟹堡,和他的笨海星朋友气坏了章鱼哥。",
    "url": "./movies/movie-1600.html",
    "cover": "./100.jpg",
    "category": "悬疑夜场",
    "categoryUrl": "./category-suspense-night.html"
  },
  {
    "id": "1601",
    "title": "博洛拉姆",
    "year": "2019",
    "region": "哈萨克斯坦/俄罗斯",
    "type": "电影",
    "genre": "历史/战争/传记",
    "tags": [
      "草原",
      "游牧民族",
      "反抗",
      "史诗"
    ],
    "oneLine": "十八世纪哈萨克草原上,少年博洛拉姆目睹部落被屠,十年后他带领一支游骑兵,向沙俄复仇。",
    "url": "./movies/movie-1601.html",
    "cover": "./101.jpg",
    "category": "都市爱情",
    "categoryUrl": "./category-romance-city.html"
  },
  {
    "id": "1602",
    "title": "芝加哥警署第八季",
    "year": "2024",
    "region": "美国",
    "type": "剧集",
    "genre": "犯罪,动作,悬疑",
    "tags": [
      "警匪",
      "单元剧",
      "情报组",
      "暴力执法"
    ],
    "oneLine": "情报组老将全员回归,但新来的内务部女警探誓要把整个部门连根拔起。",
    "url": "./movies/movie-1602.html",
    "cover": "./102.jpg",
    "category": "院线热片",
    "categoryUrl": "./category-cinema-hits.html"
  },
  {
    "id": "1603",
    "title": "时光碎片",
    "year": "2025",
    "region": "英国",
    "type": "剧集",
    "genre": "科幻/悬疑/爱情",
    "tags": [
      "时间循环",
      "相框",
      "记忆",
      "非线性叙事"
    ],
    "oneLine": "古董商发现一面可以进入照片世界的相框,为了救回战地记者的爱人,他必须在碎片化的时光里拼凑真相。",
    "url": "./movies/movie-1603.html",
    "cover": "./103.jpg",
    "category": "动作专区",
    "categoryUrl": "./category-action-zone.html"
  },
  {
    "id": "1604",
    "title": "我的爱人,我的爱人",
    "year": "2024",
    "region": "香港",
    "type": "电影",
    "genre": "爱情,悬疑",
    "tags": [
      "多重人格",
      "医生病人",
      "禁忌恋",
      "反转",
      "心理"
    ],
    "oneLine": "女心理医生爱上了自己的病人,却发现病人身体里住着的那个爱人,是她死去的初恋。",
    "url": "./movies/movie-1604.html",
    "cover": "./104.jpg",
    "category": "青春喜剧",
    "categoryUrl": "./category-youth-comedy.html"
  },
  {
    "id": "1605",
    "title": "桃色大厦",
    "year": "1993",
    "region": "中国香港",
    "type": "电影",
    "genre": "剧情/情色/悬疑",
    "tags": [
      "港产片",
      "出租屋",
      "欲望",
      "凶案",
      "霓虹美学"
    ],
    "oneLine": "尖沙咀一栋住满性工作者的旧大厦里,三年来死了六个人,警察发现每个死者都曾与同一名租客睡过。",
    "url": "./movies/movie-1605.html",
    "cover": "./105.jpg",
    "category": "历史古装",
    "categoryUrl": "./category-history-costume.html"
  },
  {
    "id": "1606",
    "title": "良医第二季",
    "year": "2024",
    "region": "美国",
    "type": "剧集",
    "genre": "剧情,医疗",
    "tags": [
      "自闭症",
      "天才医生",
      "医疗纠纷",
      "成长"
    ],
    "oneLine": "肖恩面临职业生涯最大危机:一次手术失误被起诉,他必须像个正常人一样打官司。",
    "url": "./movies/movie-1606.html",
    "cover": "./106.jpg",
    "category": "院线热片",
    "categoryUrl": "./category-cinema-hits.html"
  },
  {
    "id": "1607",
    "title": "穴居人",
    "year": "2025",
    "region": "法国/比利时",
    "type": "电影",
    "genre": "剧情/生存",
    "tags": [
      "末世",
      "自闭症",
      "洞穴",
      "原始生存",
      "温情"
    ],
    "oneLine": "核战废墟里,一个患有自闭症的少年坚信自己是最后的尼安德特人,独自在洞穴中复原远古生活。",
    "url": "./movies/movie-1607.html",
    "cover": "./107.jpg",
    "category": "剧集连看",
    "categoryUrl": "./category-drama-series.html"
  },
  {
    "id": "1608",
    "title": "过猴山",
    "year": "1964",
    "region": "中国大陆",
    "type": "电影",
    "genre": "动画/喜剧/短片",
    "tags": [
      "水墨动画",
      "上海美术电影制片厂",
      "猴子",
      "无对白",
      "机智"
    ],
    "oneLine": "一个卖草帽的老人过山时被群猴抢走帽子,他用智慧与这群调皮鬼展开了一场妙趣横生的博弈。",
    "url": "./movies/movie-1608.html",
    "cover": "./108.jpg",
    "category": "都市爱情",
    "categoryUrl": "./category-romance-city.html"
  },
  {
    "id": "1609",
    "title": "鳄鱼邓迪",
    "year": "2026",
    "region": "澳大利亚/美国",
    "type": "电影",
    "genre": "动作/喜剧/冒险",
    "tags": [
      "荒野求生",
      "文化冲突",
      "硬汉",
      "重启"
    ],
    "oneLine": "鳄鱼邓迪的孙女继承衣钵,她带着一个布鲁克林网红博主深入澳洲丛林,去寻找祖父失踪前留下的宝藏。",
    "url": "./movies/movie-1609.html",
    "cover": "./109.jpg",
    "category": "奇幻科幻",
    "categoryUrl": "./category-fantasy-sci-fi.html"
  },
  {
    "id": "1610",
    "title": "暗影连",
    "year": "2020",
    "region": "美国",
    "type": "剧集",
    "genre": "动作,战争",
    "tags": [
      "特种部队",
      "悬疑",
      "阴谋",
      "军事"
    ],
    "oneLine": "一支被军方宣布全灭的特种部队,三年后全部活着出现在敌人的秘密监狱里。",
    "url": "./movies/movie-1610.html",
    "cover": "./110.jpg",
    "category": "动作专区",
    "categoryUrl": "./category-action-zone.html"
  },
  {
    "id": "1611",
    "title": "停滞",
    "year": "2024",
    "region": "西班牙",
    "type": "电影",
    "genre": "科幻/悬疑/惊悚",
    "tags": [
      "时间静止",
      "超自然现象",
      "高概念",
      "存在主义",
      "孤独"
    ],
    "oneLine": "全世界的时间都停了,只有你还能动,但三年后你发现,你并不孤单。",
    "url": "./movies/movie-1611.html",
    "cover": "./111.jpg",
    "category": "青春喜剧",
    "categoryUrl": "./category-youth-comedy.html"
  },
  {
    "id": "1612",
    "title": "受雇者",
    "year": "2024",
    "region": "韩国",
    "type": "电影",
    "genre": "悬疑,犯罪,剧情",
    "tags": [
      "职场",
      "阶级",
      "替罪羊",
      "黑色幽默"
    ],
    "oneLine": "大公司里的“职业背锅侠”接下天价订单,却发现这次要顶替的是杀人罪。",
    "url": "./movies/movie-1612.html",
    "cover": "./112.jpg",
    "category": "动作专区",
    "categoryUrl": "./category-action-zone.html"
  },
  {
    "id": "1613",
    "title": "他的模样",
    "year": "2025",
    "region": "法国",
    "type": "电影",
    "genre": "剧情,爱情,伦理",
    "tags": [
      "替身",
      "肖像画",
      "禁忌之恋",
      "失忆",
      "寻找自我"
    ],
    "oneLine": "一位失忆的画家画不出任何人的脸,直到他遇到一个陌生人,对方告诉他:“你画的我,是你死去的丈夫。",
    "url": "./movies/movie-1613.html",
    "cover": "./113.jpg",
    "category": "悬疑夜场",
    "categoryUrl": "./category-suspense-night.html"
  },
  {
    "id": "1614",
    "title": "桃色交易",
    "year": "2023",
    "region": "中国香港",
    "type": "电影",
    "genre": "爱情/剧情",
    "tags": [
      "婚姻",
      "金钱",
      "赌局",
      "伦理"
    ],
    "oneLine": "一对恩爱夫妻为钱所困,接受富豪的百万美元赌约:只要妻子单独与他共度一晚,不越界,就赢钱。",
    "url": "./movies/movie-1614.html",
    "cover": "./114.jpg",
    "category": "剧集连看",
    "categoryUrl": "./category-drama-series.html"
  },
  {
    "id": "1615",
    "title": "大猫竞技",
    "year": "2023",
    "region": "英国",
    "type": "电影",
    "genre": "纪录片,运动",
    "tags": [
      "野生动物",
      "竞技体育",
      "伪纪录"
    ],
    "oneLine": "BBC团队用隐藏摄像机拍下了非洲草原上,“猎豹运动会”的年度总决赛。",
    "url": "./movies/movie-1615.html",
    "cover": "./115.jpg",
    "category": "热映精选",
    "categoryUrl": "./category-hot-picks.html"
  },
  {
    "id": "1616",
    "title": "金玉满堂国语",
    "year": "2023",
    "region": "中国香港",
    "type": "电视剧",
    "genre": "剧情/家庭",
    "tags": [
      "商战",
      "豪门",
      "国语配音",
      "恩怨"
    ],
    "oneLine": "一张残破的满汉全席菜谱,让两个失散半生的兄弟在商场殊死对决。",
    "url": "./movies/movie-1616.html",
    "cover": "./116.jpg",
    "category": "青春喜剧",
    "categoryUrl": "./category-youth-comedy.html"
  },
  {
    "id": "1617",
    "title": "大而不倒",
    "year": "2011",
    "region": "美国",
    "type": "电影",
    "genre": "剧情,传记,历史",
    "tags": [
      "金融危机",
      "华尔街",
      "真实事件",
      "群像"
    ],
    "oneLine": "2008年雷曼兄弟破产前后,美国财政部长如何在72小时内拯救全球经济。",
    "url": "./movies/movie-1617.html",
    "cover": "./117.jpg",
    "category": "家庭生活",
    "categoryUrl": "./category-family-life.html"
  },
  {
    "id": "1618",
    "title": "售票员秀子",
    "year": "2023",
    "region": "日本",
    "type": "电影",
    "genre": "剧情/治愈",
    "tags": [
      "昭和",
      "公交",
      "孤独",
      "人情",
      "年代"
    ],
    "oneLine": "昭和 40 年,乡下班车售票员秀子,用一本手写乘客笔记,温暖了整条山间线路。",
    "url": "./movies/movie-1618.html",
    "cover": "./118.jpg",
    "category": "都市爱情",
    "categoryUrl": "./category-romance-city.html"
  },
  {
    "id": "1619",
    "title": "暗夜摇篮曲",
    "year": "2022",
    "region": "西班牙",
    "type": "电影",
    "genre": "恐怖/家庭",
    "tags": [
      "邪教",
      "母婴关系",
      "心理恐怖",
      "民俗",
      "恶魔崇拜"
    ],
    "oneLine": "新手妈妈艾琳娜的宝宝每到午夜就会唱起一首诡异的歌谣,而那首歌谣是一百年前失踪的修女合唱团曾演唱的“恶魔赞美诗”。",
    "url": "./movies/movie-1619.html",
    "cover": "./119.jpg",
    "category": "院线热片",
    "categoryUrl": "./category-cinema-hits.html"
  },
  {
    "id": "1620",
    "title": "我的美女老师",
    "year": "2024",
    "region": "中国",
    "type": "剧集",
    "genre": "喜剧,爱情,校园,奇幻",
    "tags": [
      "反差萌",
      "穿越",
      "师生",
      "异能"
    ],
    "oneLine": "一个从古代穿越到现代的女将军,被迫伪装成高中语文老师,却发现班里的学渣竟是她前世的仇人。",
    "url": "./movies/movie-1620.html",
    "cover": "./120.jpg",
    "category": "院线热片",
    "categoryUrl": "./category-cinema-hits.html"
  },
  {
    "id": "1621",
    "title": "少年歌德之烦恼",
    "year": "2014",
    "region": "德国",
    "type": "电影",
    "genre": "剧情,传记,爱情",
    "tags": [
      "文学",
      "青春",
      "早恋",
      "成长"
    ],
    "oneLine": "年轻的歌德在成为文豪之前,首先是一个为爱情和父权烦恼的普通少年。",
    "url": "./movies/movie-1621.html",
    "cover": "./121.jpg",
    "category": "热映精选",
    "categoryUrl": "./category-hot-picks.html"
  },
  {
    "id": "1622",
    "title": "模犯生",
    "year": "2023",
    "region": "中国台湾",
    "type": "电视剧",
    "genre": "剧情/悬疑/犯罪",
    "tags": [
      "校园",
      "作弊",
      "天才",
      "社会阶层",
      "反转"
    ],
    "oneLine": "天才学霸利用高智商组织跨国作弊,却发现自己只是富人游戏里的一枚棋子。",
    "url": "./movies/movie-1622.html",
    "cover": "./122.jpg",
    "category": "青春喜剧",
    "categoryUrl": "./category-youth-comedy.html"
  },
  {
    "id": "1623",
    "title": "马赛",
    "year": "2025",
    "region": "法国",
    "type": "电视剧",
    "genre": "犯罪/政治",
    "tags": [
      "港口",
      "黑手党",
      "市政腐败",
      "家族恩怨"
    ],
    "oneLine": "马赛港口扩建计划背后,是黑手党、市政厅和房地产商的三方血战。",
    "url": "./movies/movie-1623.html",
    "cover": "./123.jpg",
    "category": "历史古装",
    "categoryUrl": "./category-history-costume.html"
  },
  {
    "id": "1624",
    "title": "普蒂安",
    "year": "2023",
    "region": "法国/比利时",
    "type": "电影",
    "genre": "剧情/奇幻",
    "tags": [
      "重生",
      "植物",
      "记忆",
      "寓言"
    ],
    "oneLine": "一名冷漠的植物学家死后变成一株室内绿植,被迫聆听买主们向他倾诉秘密。",
    "url": "./movies/movie-1624.html",
    "cover": "./124.jpg",
    "category": "悬疑夜场",
    "categoryUrl": "./category-suspense-night.html"
  },
  {
    "id": "1625",
    "title": "多难人生",
    "year": "2026",
    "region": "韩国",
    "type": "电视剧",
    "genre": "剧情/家庭/年代",
    "tags": [
      "韩剧",
      "时代变迁",
      "苦难",
      "治愈",
      "长剧"
    ],
    "oneLine": "从日据时代到光州事件,一个卑微女佣的一生,串联起韩国近代史的百年血泪。",
    "url": "./movies/movie-1625.html",
    "cover": "./125.jpg",
    "category": "家庭生活",
    "categoryUrl": "./category-family-life.html"
  },
  {
    "id": "1626",
    "title": "厄勒克特拉",
    "year": "2025",
    "region": "希腊/法国",
    "type": "电影",
    "genre": "剧情/惊悚/经典改编",
    "tags": [
      "古希腊悲剧",
      "现代改编",
      "女性复仇",
      "心理压抑"
    ],
    "oneLine": "现代版《厄勒克特拉》,弑母复仇的工程师,发现自己只是家族基因的提线木偶。",
    "url": "./movies/movie-1626.html",
    "cover": "./126.jpg",
    "category": "热映精选",
    "categoryUrl": "./category-hot-picks.html"
  },
  {
    "id": "1627",
    "title": "洗刷者",
    "year": "2014",
    "region": "韩国",
    "type": "电影",
    "genre": "动作、犯罪、惊悚",
    "tags": [
      "清洁工",
      "杀手",
      "清扫现场",
      "复仇",
      "暴力美学"
    ],
    "oneLine": "专门为黑帮清理杀人现场的“洗刷者”,在一次案发现场发现了一枚属于失踪妹妹的耳环。",
    "url": "./movies/movie-1627.html",
    "cover": "./127.jpg",
    "category": "全球佳作",
    "categoryUrl": "./category-global-stories.html"
  },
  {
    "id": "1628",
    "title": "奥德赛:战神传奇",
    "year": "2026",
    "region": "美国",
    "type": "电影",
    "genre": "动作,奇幻",
    "tags": [
      "史诗",
      "希腊神话",
      "视觉盛宴"
    ],
    "oneLine": "不再是归乡的漂流,奥德修斯拔剑成为战神,率领凡人向奥林匹斯众神发起复仇。",
    "url": "./movies/movie-1628.html",
    "cover": "./128.jpg",
    "category": "院线热片",
    "categoryUrl": "./category-cinema-hits.html"
  },
  {
    "id": "1629",
    "title": "趣事",
    "year": "2023",
    "region": "伊朗",
    "type": "电影",
    "genre": "剧情/家庭",
    "tags": [
      "黑色幽默",
      "葬礼",
      "谎言",
      "兄妹",
      "传统"
    ],
    "oneLine": "父亲葬礼上,兄妹四人为了争一把能“听见亡父遗言”的钥匙,闹出一连串荒诞笑话。",
    "url": "./movies/movie-1629.html",
    "cover": "./129.jpg",
    "category": "动作专区",
    "categoryUrl": "./category-action-zone.html"
  },
  {
    "id": "1630",
    "title": "不可为而为之",
    "year": "2025",
    "region": "中国台湾",
    "type": "电影",
    "genre": "剧情,历史",
    "tags": [
      "解严",
      "书店",
      "禁书"
    ],
    "oneLine": "1987年台湾解严前夜,一家地下书店的老板明知会被抓,仍坚持举办最后一场禁书朗读会。",
    "url": "./movies/movie-1630.html",
    "cover": "./130.jpg",
    "category": "剧集连看",
    "categoryUrl": "./category-drama-series.html"
  },
  {
    "id": "1631",
    "title": "聊斋志异",
    "year": "2025",
    "region": "中国",
    "type": "剧集",
    "genre": "奇幻/古装/恐怖",
    "tags": [
      "单元剧",
      "志怪",
      "现代改编"
    ],
    "oneLine": "重启经典IP,用现代科学和心理学,重新解构《聊斋》中六十个最诡异的狐鬼故事。",
    "url": "./movies/movie-1631.html",
    "cover": "./131.jpg",
    "category": "热映精选",
    "categoryUrl": "./category-hot-picks.html"
  },
  {
    "id": "1632",
    "title": "编织狂潮",
    "year": "2025",
    "region": "日本",
    "type": "剧集",
    "genre": "剧情,励志,职业",
    "tags": [
      "纺织业",
      "匠人精神",
      "女性创业",
      "传承",
      "地方振兴"
    ],
    "oneLine": "东京精英白领被裁员后,回到老家发现唯一的工作竟是帮奶奶的编织网店打包快递。",
    "url": "./movies/movie-1632.html",
    "cover": "./132.jpg",
    "category": "动作专区",
    "categoryUrl": "./category-action-zone.html"
  },
  {
    "id": "1633",
    "title": "美洲豹女儿",
    "year": "2011",
    "region": "巴西",
    "type": "电影",
    "genre": "动作,冒险",
    "tags": [
      "雨林",
      "母系社会",
      "复仇"
    ],
    "oneLine": "一个从未离开过亚马逊雨林的少女,为了给母亲报仇,扛着标枪闯入了里约热内卢的黑帮老巢。",
    "url": "./movies/movie-1633.html",
    "cover": "./133.jpg",
    "category": "院线热片",
    "categoryUrl": "./category-cinema-hits.html"
  },
  {
    "id": "1634",
    "title": "谈谈情练练武粤语",
    "year": "2024",
    "region": "中国香港",
    "type": "剧集",
    "genre": "动作,爱情,喜剧",
    "tags": [
      "职场",
      "武术",
      "欢喜冤家"
    ],
    "oneLine": "冷面女高管与痞气保安因打架结缘,在公司天台上秘密传授“恋爱格斗术”。",
    "url": "./movies/movie-1634.html",
    "cover": "./134.jpg",
    "category": "家庭生活",
    "categoryUrl": "./category-family-life.html"
  },
  {
    "id": "1635",
    "title": "城市梦",
    "year": "2023",
    "region": "中国大陆",
    "type": "电影",
    "genre": "纪录片",
    "tags": [
      "纪实",
      "城中村",
      "拆迁",
      "众生相"
    ],
    "oneLine": "在一座即将被拆除的城中村里,一个等着拿拆迁款还债的包租公、一个想在城市扎根的快递员、一个寻找初恋的老头,做着最后的挣扎。",
    "url": "./movies/movie-1635.html",
    "cover": "./135.jpg",
    "category": "全球佳作",
    "categoryUrl": "./category-global-stories.html"
  },
  {
    "id": "1636",
    "title": "蜡像院魔王",
    "year": "1989",
    "region": "中国香港",
    "type": "电影",
    "genre": "恐怖,奇幻",
    "tags": [
      "蜡像",
      "复活",
      "诅咒",
      "魔王"
    ],
    "oneLine": "蜡像馆老板能复活历史魔王们的蜡像,条件是必须献上一个现代恶人的灵魂。",
    "url": "./movies/movie-1636.html",
    "cover": "./136.jpg",
    "category": "都市爱情",
    "categoryUrl": "./category-romance-city.html"
  },
  {
    "id": "1637",
    "title": "辛辛那提小子",
    "year": "1965",
    "region": "美国",
    "type": "电影",
    "genre": "剧情,犯罪",
    "tags": [
      "赌王",
      "扑克",
      "经典",
      "励志",
      "黑色电影"
    ],
    "oneLine": "大萧条时期,一个神秘青年牌手从街头杀入地下赌王争霸赛,他要战胜的不仅是牌桌,还有传奇赌王兰斯。",
    "url": "./movies/movie-1637.html",
    "cover": "./137.jpg",
    "category": "剧集连看",
    "categoryUrl": "./category-drama-series.html"
  },
  {
    "id": "1638",
    "title": "谁寄锦书来",
    "year": "2026",
    "region": "中国大陆",
    "type": "电视剧",
    "genre": "爱情/悬疑",
    "tags": [
      "书信传情",
      "错位人生",
      "年代翻案"
    ],
    "oneLine": "一封尘封三十年的情书被误投,竟揭开了两个家庭被篡改的命运,以及一场惊天冤案。",
    "url": "./movies/movie-1638.html",
    "cover": "./138.jpg",
    "category": "家庭生活",
    "categoryUrl": "./category-family-life.html"
  },
  {
    "id": "1639",
    "title": "军火库",
    "year": "2025",
    "region": "俄罗斯",
    "type": "剧集",
    "genre": "剧情,战争,悬疑",
    "tags": [
      "冷战",
      "谍战",
      "军火",
      "父子"
    ],
    "oneLine": "1991 年苏联解体前夕,一个废弃军火库的看守人与前来偷盗的儿子,同时发现库房里有第三个人的呼吸声。",
    "url": "./movies/movie-1639.html",
    "cover": "./139.jpg",
    "category": "剧集连看",
    "categoryUrl": "./category-drama-series.html"
  },
  {
    "id": "1640",
    "title": "坂本龙一:终曲",
    "year": "2027",
    "region": "日本",
    "type": "纪录片",
    "genre": "音乐传记",
    "tags": [
      "绝响",
      "自然采集",
      "抗癌",
      "最后独白"
    ],
    "oneLine": "晚期癌症的教授在福岛废墟中采集声音,谱写出对抗死亡的最终乐章。",
    "url": "./movies/movie-1640.html",
    "cover": "./140.jpg",
    "category": "全球佳作",
    "categoryUrl": "./category-global-stories.html"
  },
  {
    "id": "1641",
    "title": "故土",
    "year": "2024",
    "region": "波兰",
    "type": "电影",
    "genre": "历史/战争",
    "tags": [
      "二战",
      "归乡",
      "秘密",
      "家族史"
    ],
    "oneLine": "二战结束七十年后,一个德国青年在波兰老宅的地窖里发现了自己祖父是纳粹刽子手的铁证。",
    "url": "./movies/movie-1641.html",
    "cover": "./141.jpg",
    "category": "家庭生活",
    "categoryUrl": "./category-family-life.html"
  },
  {
    "id": "1642",
    "title": "我们拥有夜晚",
    "year": "2007",
    "region": "美国",
    "type": "电影",
    "genre": "犯罪/剧情/惊悚",
    "tags": [
      "父子",
      "卧底",
      "夜店",
      "家族"
    ],
    "oneLine": "夜店经理被迫成为警方线人,而他要缉拿的毒枭是他亲哥哥。",
    "url": "./movies/movie-1642.html",
    "cover": "./142.jpg",
    "category": "都市爱情",
    "categoryUrl": "./category-romance-city.html"
  },
  {
    "id": "1643",
    "title": "白昼惊魂",
    "year": "2024",
    "region": "中国香港",
    "type": "电影",
    "genre": "犯罪,警匪,心理",
    "tags": [
      "白日梦",
      "连环杀人",
      "记忆黑洞",
      "探长"
    ],
    "oneLine": "患上怪病的探长只能在白天破案,因为一旦日落,他就会忘记一切,而连环杀手似乎就是夜晚的他自己。",
    "url": "./movies/movie-1643.html",
    "cover": "./143.jpg",
    "category": "热映精选",
    "categoryUrl": "./category-hot-picks.html"
  },
  {
    "id": "1644",
    "title": "少女特工队",
    "year": "2024",
    "region": "中国大陆",
    "type": "剧集 动作,喜剧",
    "genre": "动作,喜剧",
    "tags": [
      "特工",
      "女高中生",
      "校园卧底",
      "反套路"
    ],
    "oneLine": "四名身怀绝技的高中女生被秘密招募,任务是揪出潜伏在校园里的国际间谍。",
    "url": "./movies/movie-1644.html",
    "cover": "./144.jpg",
    "category": "院线热片",
    "categoryUrl": "./category-cinema-hits.html"
  },
  {
    "id": "1645",
    "title": "风流情孽",
    "year": "1993",
    "region": "中国香港",
    "type": "电影",
    "genre": "剧情/情色",
    "tags": [
      "爱恨纠葛",
      "豪门",
      "禁忌恋",
      "复仇"
    ],
    "oneLine": "豪门养女与继兄虐恋十年,婚礼当天却发现生母竟是继母的贴身女佣。",
    "url": "./movies/movie-1645.html",
    "cover": "./145.jpg",
    "category": "悬疑夜场",
    "categoryUrl": "./category-suspense-night.html"
  },
  {
    "id": "1646",
    "title": "小姑贤",
    "year": "1953",
    "region": "中国内地",
    "type": "电影",
    "genre": "剧情,家庭,戏曲/评剧",
    "tags": [
      "婆媳关系",
      "智慧女性",
      "喜剧"
    ],
    "oneLine": "恶婆婆百般刁难贤惠媳妇,聪明的未出嫁小姑子设下连环计,让母亲自食其果,成全哥嫂团圆。",
    "url": "./movies/movie-1646.html",
    "cover": "./146.jpg",
    "category": "奇幻科幻",
    "categoryUrl": "./category-fantasy-sci-fi.html"
  },
  {
    "id": "1647",
    "title": "美味家族",
    "year": "2024",
    "region": "日本",
    "type": "电影",
    "genre": "剧情/家庭/美食",
    "tags": [
      "餐厅",
      "继承",
      "和解",
      "料理"
    ],
    "oneLine": "米其林大厨回家继承破败拉面店,发现父亲留下的不是配方,而是十二个同父异母的兄弟姐妹。",
    "url": "./movies/movie-1647.html",
    "cover": "./147.jpg",
    "category": "全球佳作",
    "categoryUrl": "./category-global-stories.html"
  },
  {
    "id": "1648",
    "title": "穿越时空的骑士",
    "year": "2024",
    "region": "美国",
    "type": "电影",
    "genre": "科幻,冒险,喜剧",
    "tags": [
      "时间旅行",
      "中世纪",
      "骑士精神",
      "现代碰撞",
      "幽默"
    ],
    "oneLine": "一名中世纪骑士被传送到现代纽约,必须在24小时内找回魔法圣杯,否则历史将被改写。",
    "url": "./movies/movie-1648.html",
    "cover": "./148.jpg",
    "category": "青春喜剧",
    "categoryUrl": "./category-youth-comedy.html"
  },
  {
    "id": "1649",
    "title": "意外之后",
    "year": "2025",
    "region": "韩国",
    "type": "电影",
    "genre": "剧情/家庭/惊悚",
    "tags": [
      "车祸",
      "顶罪",
      "人性拷问"
    ],
    "oneLine": "富二代肇事逃逸,父亲花重金让穷司机顶罪,没想到这个老实人进了监狱后,他的盲人女儿却成了富豪家的噩梦。",
    "url": "./movies/movie-1649.html",
    "cover": "./149.jpg",
    "category": "经典片库",
    "categoryUrl": "./category-classic-library.html"
  },
  {
    "id": "1650",
    "title": "女巫",
    "year": "2024",
    "region": "美国/英国",
    "type": "电影",
    "genre": "恐怖/民俗",
    "tags": [
      "民间传说",
      "巫术",
      "17世纪",
      "心理恐怖",
      "邪教"
    ],
    "oneLine": "1630年代新英格兰,一户虔诚的清教徒家庭因长子失踪,逐步陷入彼此猜忌与魔鬼附身的恐惧之中。",
    "url": "./movies/movie-1650.html",
    "cover": "./150.jpg",
    "category": "热映精选",
    "categoryUrl": "./category-hot-picks.html"
  },
  {
    "id": "1651",
    "title": "武动乾坤第三季",
    "year": "2022",
    "region": "中国",
    "type": "剧集",
    "genre": "玄幻热血",
    "tags": [
      "大荒古碑",
      "涅槃境",
      "林动逆袭",
      "宗派斗争"
    ],
    "oneLine": "林动闯大荒古碑寻祖符,遭元门三小王追杀,危急时唤醒远古符祖残魂。",
    "url": "./movies/movie-1651.html",
    "cover": "./1.jpg",
    "category": "奇幻科幻",
    "categoryUrl": "./category-fantasy-sci-fi.html"
  },
  {
    "id": "1652",
    "title": "爱在心中",
    "year": "2010",
    "region": "韩国",
    "type": "电视剧",
    "genre": "家庭,剧情",
    "tags": [
      "亲情",
      "失忆",
      "孤儿",
      "治愈"
    ],
    "oneLine": "自闭症哥哥唯一记得的,是弟弟儿时那首跑调的生日歌,而弟弟早已抛弃了他。",
    "url": "./movies/movie-1652.html",
    "cover": "./2.jpg",
    "category": "悬疑夜场",
    "categoryUrl": "./category-suspense-night.html"
  },
  {
    "id": "1653",
    "title": "亲友皆死",
    "year": "2024",
    "region": "美国",
    "type": "电影",
    "genre": "恐怖,喜剧,悬疑",
    "tags": [
      "暴风雪山庄",
      "黑色幽默",
      "全员恶人",
      "大逃杀"
    ],
    "oneLine": "女孩带男友回深山豪宅见父母,却发现全家人都在计划谋杀她男友。",
    "url": "./movies/movie-1653.html",
    "cover": "./3.jpg",
    "category": "家庭生活",
    "categoryUrl": "./category-family-life.html"
  },
  {
    "id": "1654",
    "title": "杂嘴子",
    "year": "1992",
    "region": "中国大陆",
    "type": "电影",
    "genre": "剧情/家庭/社会",
    "tags": [
      "儿童视角",
      "西北农村",
      "贫嘴",
      "时代变迁"
    ],
    "oneLine": "上世纪90年代初,西北农村一个因“嘴碎”惹祸的男孩,用他的眼睛记录下乡村家庭的裂变与重生。",
    "url": "./movies/movie-1654.html",
    "cover": "./4.jpg",
    "category": "动作专区",
    "categoryUrl": "./category-action-zone.html"
  },
  {
    "id": "1655",
    "title": "德维塔耶夫",
    "year": "2025",
    "region": "俄罗斯",
    "type": "电影",
    "genre": "战争,历史,动作",
    "tags": [
      "二战真实改编",
      "苏联飞行员",
      "集中营越狱"
    ],
    "oneLine": "苏联飞行员德维塔耶夫被俘后在集中营偷走纳粹轰炸机,带着九名战俘惊天逃亡。",
    "url": "./movies/movie-1655.html",
    "cover": "./5.jpg",
    "category": "青春喜剧",
    "categoryUrl": "./category-youth-comedy.html"
  },
  {
    "id": "1656",
    "title": "狱警生活第二季",
    "year": "2024",
    "region": "英国",
    "type": "剧集",
    "genre": "剧情,喜剧,犯罪",
    "tags": [
      "监狱日常",
      "黑色幽默",
      "职场压力"
    ],
    "oneLine": "新人狱警莱斯第一季结尾被犯人捅伤,第二季他回到监狱,发现自己患上了严重的创伤应激障碍。",
    "url": "./movies/movie-1656.html",
    "cover": "./6.jpg",
    "category": "全球佳作",
    "categoryUrl": "./category-global-stories.html"
  },
  {
    "id": "1657",
    "title": "斯凡克梅耶的神奇宝柜",
    "year": "2015",
    "region": "英国/捷克",
    "type": "电影",
    "genre": "奇幻,定格动画,剧情",
    "tags": [
      "超现实主义",
      "欲望",
      "木偶"
    ],
    "oneLine": "一间二手古董店里,只要向那个古怪的宝柜里放入一样东西,就会失去身体的一部分。",
    "url": "./movies/movie-1657.html",
    "cover": "./7.jpg",
    "category": "都市爱情",
    "categoryUrl": "./category-romance-city.html"
  },
  {
    "id": "1658",
    "title": "愤怒的雪人",
    "year": "2020",
    "region": "加拿大",
    "type": "电影",
    "genre": "恐怖/奇幻",
    "tags": [
      "都市传说",
      "雪怪",
      "惊悚",
      "雪山",
      "诅咒"
    ],
    "oneLine": "滑雪胜地频发失踪案,古老的因纽特传说警告:不要亵渎雪山的守护神。",
    "url": "./movies/movie-1658.html",
    "cover": "./8.jpg",
    "category": "全球佳作",
    "categoryUrl": "./category-global-stories.html"
  },
  {
    "id": "1659",
    "title": "纵横七洲洋",
    "year": "2014",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "历史/冒险/航海",
    "tags": [
      "郑和",
      "海上丝绸之路",
      "探险"
    ],
    "oneLine": "一支明代走私船队误入魔鬼海域,醒来后发现船上多了三百年前的郑和。",
    "url": "./movies/movie-1659.html",
    "cover": "./9.jpg",
    "category": "奇幻科幻",
    "categoryUrl": "./category-fantasy-sci-fi.html"
  },
  {
    "id": "1660",
    "title": "林白征空记",
    "year": "2025",
    "region": "美国",
    "type": "电影",
    "genre": "剧情/传记",
    "tags": [
      "飞行",
      "传记",
      "孤胆英雄",
      "媒体炒作"
    ],
    "oneLine": "他飞越大西洋只用了33小时,但回家的路,他走了一辈子。",
    "url": "./movies/movie-1660.html",
    "cover": "./10.jpg",
    "category": "动作专区",
    "categoryUrl": "./category-action-zone.html"
  },
  {
    "id": "1661",
    "title": "泰山与珍妮",
    "year": "2025",
    "region": "美国",
    "type": "电影 动画,冒险,爱情",
    "genre": "丛林,冒险,爱情,家庭",
    "tags": [
      "丛林",
      "冒险",
      "爱情",
      "家庭",
      "自然保护"
    ],
    "oneLine": "当现代文明入侵原始丛林,泰山与珍妮的爱情将面临比野兽更危险的考验。",
    "url": "./movies/movie-1661.html",
    "cover": "./11.jpg",
    "category": "悬疑夜场",
    "categoryUrl": "./category-suspense-night.html"
  },
  {
    "id": "1662",
    "title": "隐藏的画家",
    "year": "2023",
    "region": "意大利",
    "type": "电影",
    "genre": "传记、剧情",
    "tags": [
      "艺术",
      "孤独",
      "素人画家",
      "20世纪",
      "修复"
    ],
    "oneLine": "一个做了四十年教堂看守人的老人去世后,人们在他床底发现三百幅惊人画作,彻底改写了艺术史。",
    "url": "./movies/movie-1662.html",
    "cover": "./12.jpg",
    "category": "全球佳作",
    "categoryUrl": "./category-global-stories.html"
  },
  {
    "id": "1663",
    "title": "军神山本元帅与联合舰队",
    "year": "1962",
    "region": "日本",
    "type": "电影",
    "genre": "战争,历史,传记",
    "tags": [
      "二战",
      "海军",
      "日本视角",
      "反思"
    ],
    "oneLine": "从偷袭珍珠港到瓜岛战役,本片以山本五十六视角回顾联合舰队的崛起与覆灭。",
    "url": "./movies/movie-1663.html",
    "cover": "./13.jpg",
    "category": "青春喜剧",
    "categoryUrl": "./category-youth-comedy.html"
  },
  {
    "id": "1664",
    "title": "魔法圣战",
    "year": "2025",
    "region": "美国",
    "type": "电影",
    "genre": "奇幻,动作",
    "tags": [
      "现代魔法",
      "法师塔",
      "圣杯战争"
    ],
    "oneLine": "当古老魔法圣物“贤者之石”在上海陆家嘴被唤醒,来自全球六大魔法流派的继承人展开了一场现代都市圣战。",
    "url": "./movies/movie-1664.html",
    "cover": "./14.jpg",
    "category": "都市爱情",
    "categoryUrl": "./category-romance-city.html"
  },
  {
    "id": "1665",
    "title": "刺头青",
    "year": "2016",
    "region": "美国",
    "type": "电影",
    "genre": "剧情",
    "tags": [
      "少年",
      "独立",
      "底层",
      "暴力",
      "成长"
    ],
    "oneLine": "13岁的问题少年与刚从监狱出来的哥哥,一起捣鼓一辆报废皮卡,试图逃离拖车公园。",
    "url": "./movies/movie-1665.html",
    "cover": "./15.jpg",
    "category": "都市爱情",
    "categoryUrl": "./category-romance-city.html"
  },
  {
    "id": "1666",
    "title": "入侵",
    "year": "2025",
    "region": "英国",
    "type": "剧集",
    "genre": "科幻/惊悚/剧情",
    "tags": [
      "外星入侵",
      "家庭分裂",
      "心灵控制",
      "伦理困境"
    ],
    "oneLine": "外星生命通过梦境入侵地球,被“感染”的人会在现实中疯狂寻找并杀死自己的亲人。",
    "url": "./movies/movie-1666.html",
    "cover": "./16.jpg",
    "category": "奇幻科幻",
    "categoryUrl": "./category-fantasy-sci-fi.html"
  },
  {
    "id": "1667",
    "title": "邪恶根本不存在",
    "year": "2023",
    "region": "日本",
    "type": "电影",
    "genre": "剧情",
    "tags": [
      "人性",
      "悬疑",
      "社会寓言"
    ],
    "oneLine": "宁静村落计划改建为豪华露营地,居民与开发者之间悄然滋生的恶意,揭开了无人承认的邪恶。",
    "url": "./movies/movie-1667.html",
    "cover": "./17.jpg",
    "category": "都市爱情",
    "categoryUrl": "./category-romance-city.html"
  },
  {
    "id": "1668",
    "title": "洛杉矶没有爱情",
    "year": "2024",
    "region": "美国",
    "type": "电视剧",
    "genre": "爱情/喜剧",
    "tags": [
      "都市",
      "现实",
      "速食爱情",
      "群像",
      "黑色幽默"
    ],
    "oneLine": "六名在洛杉矶打拼的年轻男女,用APP约会上床,却始终敲不开那个叫“爱情”的房门。",
    "url": "./movies/movie-1668.html",
    "cover": "./18.jpg",
    "category": "经典片库",
    "categoryUrl": "./category-classic-library.html"
  },
  {
    "id": "1669",
    "title": "爱在春光乍现时",
    "year": "2024",
    "region": "意大利",
    "type": "电影",
    "genre": "爱情/剧情",
    "tags": [
      "文艺",
      "佛罗伦萨",
      "忘年恋",
      "绝症"
    ],
    "oneLine": "佛罗伦萨的樱花季,一个来寻死的老年画家和一个想去看海的白血病少女,约定陪对方走完最后一程。",
    "url": "./movies/movie-1669.html",
    "cover": "./19.jpg",
    "category": "院线热片",
    "categoryUrl": "./category-cinema-hits.html"
  },
  {
    "id": "1670",
    "title": "首播集",
    "year": "2025",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "剧情/悬疑",
    "tags": [
      "直播事故",
      "蝴蝶效应",
      "媒体黑幕"
    ],
    "oneLine": "一档直播节目的首播集里,主持人在镜头前接起电话,随后当着全国观众的面离奇失踪。",
    "url": "./movies/movie-1670.html",
    "cover": "./20.jpg",
    "category": "都市爱情",
    "categoryUrl": "./category-romance-city.html"
  },
  {
    "id": "1671",
    "title": "铁腕天使",
    "year": "2026",
    "region": "中国香港",
    "type": "电影",
    "genre": "动作、犯罪",
    "tags": [
      "女保镖",
      "黑市器官",
      "复仇",
      "冷兵器"
    ],
    "oneLine": "聋哑退役女兵为救被绑架的女儿,单枪匹马闯入地下器官黑市,化身无声死神。",
    "url": "./movies/movie-1671.html",
    "cover": "./21.jpg",
    "category": "热映精选",
    "categoryUrl": "./category-hot-picks.html"
  },
  {
    "id": "1672",
    "title": "当人心遇上仁心",
    "year": "2018",
    "region": "中国香港",
    "type": "电影",
    "genre": "剧情/家庭",
    "tags": [
      "医患关系",
      "伦理",
      "亲情",
      "城市"
    ],
    "oneLine": "一位心外科主任为了给病危儿子移植心脏,不得不去求当年被他误诊致死的患儿母亲。",
    "url": "./movies/movie-1672.html",
    "cover": "./22.jpg",
    "category": "历史古装",
    "categoryUrl": "./category-history-costume.html"
  },
  {
    "id": "1673",
    "title": "在池中",
    "year": "2025",
    "region": "日本",
    "type": "电影",
    "genre": "剧情/惊悚/悬疑",
    "tags": [
      "游泳池 密闭空间 母女 心理 溺亡"
    ],
    "oneLine": "母亲在自家泳池底发现女儿的人形轮廓,但所有人都说那里什么也没有。",
    "url": "./movies/movie-1673.html",
    "cover": "./23.jpg",
    "category": "热映精选",
    "categoryUrl": "./category-hot-picks.html"
  },
  {
    "id": "1674",
    "title": "甜孙爷爷国语",
    "year": "2005",
    "region": "中国香港",
    "type": "电视剧集",
    "genre": "喜剧/家庭",
    "tags": [
      "爷孙情",
      "代际冲突",
      "温情"
    ],
    "oneLine": "一个古板退休老校长,突然要照顾三个正值青春叛逆期的孙子,鸡飞狗跳的生活就此开始。",
    "url": "./movies/movie-1674.html",
    "cover": "./24.jpg",
    "category": "剧集连看",
    "categoryUrl": "./category-drama-series.html"
  },
  {
    "id": "1675",
    "title": "忍者神龟2:破影而出",
    "year": "2016",
    "region": "美国",
    "type": "电影",
    "genre": "动作,科幻,喜剧",
    "tags": [
      "超级英雄",
      "漫画改编",
      "特效"
    ],
    "oneLine": "神龟们不仅要面对更强大的变异体“牛头猪面”,还要提防那个想把他们送上太空的疯批科学家。",
    "url": "./movies/movie-1675.html",
    "cover": "./25.jpg",
    "category": "奇幻科幻",
    "categoryUrl": "./category-fantasy-sci-fi.html"
  },
  {
    "id": "1676",
    "title": "穷得漂亮",
    "year": "2027",
    "region": "中国大陆",
    "type": "电影",
    "genre": "喜剧/剧情",
    "tags": [
      "北漂",
      "合租",
      "理想",
      "黑色幽默"
    ],
    "oneLine": "六个北漂挤在60平的隔断房里,用“假装有钱”比赛来自我安慰,直到真的中了一笔巨款。",
    "url": "./movies/movie-1676.html",
    "cover": "./26.jpg",
    "category": "历史古装",
    "categoryUrl": "./category-history-costume.html"
  },
  {
    "id": "1677",
    "title": "用心过日子",
    "year": "2021",
    "region": "中国大陆",
    "type": "电视剧",
    "genre": "家庭/生活",
    "tags": [
      "温情",
      "邻里",
      "治愈",
      "小人物"
    ],
    "oneLine": "退休钳工老魏用一本“维修日记”意外成了整条街的“地下调解员”。",
    "url": "./movies/movie-1677.html",
    "cover": "./27.jpg",
    "category": "经典片库",
    "categoryUrl": "./category-classic-library.html"
  },
  {
    "id": "1678",
    "title": "即刻复仇",
    "year": "2025",
    "region": "美国",
    "type": "电影",
    "genre": "动作、惊悚",
    "tags": [
      "私刑正义",
      "高燃打斗",
      "极限复仇"
    ],
    "oneLine": "前女特工的女儿被黑帮误杀,她放弃了一切法律程序,对整条犯罪产业链展开血腥清算。",
    "url": "./movies/movie-1678.html",
    "cover": "./28.jpg",
    "category": "动作专区",
    "categoryUrl": "./category-action-zone.html"
  },
  {
    "id": "1679",
    "title": "出口",
    "year": "2023",
    "region": "德国",
    "type": "电影",
    "genre": "剧情/灾难",
    "tags": [
      "地铁隧道",
      "幽闭恐惧",
      "道德困境",
      "生存"
    ],
    "oneLine": "一场化学泄漏事故后,五名幸存者被困在地铁隧道深处,唯一的出口只能容一人爬出。",
    "url": "./movies/movie-1679.html",
    "cover": "./29.jpg",
    "category": "都市爱情",
    "categoryUrl": "./category-romance-city.html"
  },
  {
    "id": "1680",
    "title": "温德瑞拉日记",
    "year": "2025",
    "region": "美国",
    "type": "剧集",
    "genre": "悬疑,奇幻",
    "tags": [
      "日记本",
      "诅咒",
      "家族秘密",
      "穿越"
    ],
    "oneLine": "女孩在祖母遗物中发现一本日记,写下的事都会成真,但每实现一个愿望就会失去一段记忆。",
    "url": "./movies/movie-1680.html",
    "cover": "./30.jpg",
    "category": "青春喜剧",
    "categoryUrl": "./category-youth-comedy.html"
  },
  {
    "id": "1681",
    "title": "特洛伊",
    "year": "2025",
    "region": "美国",
    "type": "剧集",
    "genre": "历史/战争",
    "tags": [
      "神话",
      "史诗",
      "权谋",
      "大尺度"
    ],
    "oneLine": "重新解读荷马史诗,这次特洛伊战争不是因为女人,而是因为掌控爱琴海贸易的“暗黑经济链”。",
    "url": "./movies/movie-1681.html",
    "cover": "./31.jpg",
    "category": "悬疑夜场",
    "categoryUrl": "./category-suspense-night.html"
  },
  {
    "id": "1682",
    "title": "狂赌之渊第一季",
    "year": "2019",
    "region": "日本",
    "type": "剧集",
    "genre": "剧情/悬疑",
    "tags": [
      "漫改",
      "赌博",
      "颜艺",
      "校园",
      "疯狂"
    ],
    "oneLine": "在金钱与阶级支配的私立百花王学园,神秘转学生蛇喰梦子用疯狂的赌术撕碎了一切虚伪的规则。",
    "url": "./movies/movie-1682.html",
    "cover": "./32.jpg",
    "category": "全球佳作",
    "categoryUrl": "./category-global-stories.html"
  },
  {
    "id": "1683",
    "title": "十二猴子第三季",
    "year": "2024",
    "region": "美国",
    "type": "剧集",
    "genre": "科幻/悬疑",
    "tags": [
      "时间旅行",
      "末日病毒",
      "循环",
      "宿命论",
      "烧脑"
    ],
    "oneLine": "科尔终于找到了病毒的源头,却发现那个释放病毒的“十二猴子军”领袖,是还未分裂的自己。",
    "url": "./movies/movie-1683.html",
    "cover": "./33.jpg",
    "category": "家庭生活",
    "categoryUrl": "./category-family-life.html"
  },
  {
    "id": "1684",
    "title": "时光大盗2024",
    "year": "2024",
    "region": "美国/英国",
    "type": "剧集",
    "genre": "喜剧/科幻/冒险",
    "tags": [
      "时间旅行",
      "盗贼",
      "历史恶搞",
      "脑洞大开",
      "无厘头"
    ],
    "oneLine": "一群业余时间盗贼意外获得时间穿梭腰带,决定回到历史中偷走所有值钱的东西。",
    "url": "./movies/movie-1684.html",
    "cover": "./34.jpg",
    "category": "奇幻科幻",
    "categoryUrl": "./category-fantasy-sci-fi.html"
  },
  {
    "id": "1685",
    "title": "奔跑的修女",
    "year": "2025",
    "region": "法国",
    "type": "电影",
    "genre": "剧情",
    "tags": [
      "公路",
      "信仰",
      "救赎",
      "幽默"
    ],
    "oneLine": "为送一颗能证明教堂神父清白的关键芯片,持枪修女踩着滑板鞋飞驰在环法公路上。",
    "url": "./movies/movie-1685.html",
    "cover": "./35.jpg",
    "category": "经典片库",
    "categoryUrl": "./category-classic-library.html"
  },
  {
    "id": "1686",
    "title": "父仇者",
    "year": "2025",
    "region": "韩国",
    "type": "电影",
    "genre": "动作犯罪",
    "tags": [
      "复仇",
      "父女",
      "私刑",
      "反转"
    ],
    "oneLine": "女儿被连环杀手杀害后,法医父亲伪造证据将凶手无罪释放,只为亲手在司法体系外慢慢折磨他。",
    "url": "./movies/movie-1686.html",
    "cover": "./36.jpg",
    "category": "热映精选",
    "categoryUrl": "./category-hot-picks.html"
  },
  {
    "id": "1687",
    "title": "伏羲女娲",
    "year": "2026",
    "region": "中国大陆",
    "type": "动画电影",
    "genre": "神话/史诗/爱情",
    "tags": [
      "创世神",
      "兄妹",
      "人类起源",
      "东方神话"
    ],
    "oneLine": "洪水灭世后,伏羲与女娲被神谕要求“结为夫妻以繁衍人类”,但女娲发现伏羲的记忆中曾亲手杀了她。",
    "url": "./movies/movie-1687.html",
    "cover": "./37.jpg",
    "category": "奇幻科幻",
    "categoryUrl": "./category-fantasy-sci-fi.html"
  },
  {
    "id": "1688",
    "title": "臭屁王",
    "year": "2025",
    "region": "中国大陆",
    "type": "电影",
    "genre": "喜剧,奇幻,儿童",
    "tags": [
      "屁",
      "超级英雄",
      "校园霸凌",
      "环保"
    ],
    "oneLine": "一个因放屁被嘲笑的初中生,发现自己能控制屁的化学成分,并开始用“屁”打击污染环境的坏人。",
    "url": "./movies/movie-1688.html",
    "cover": "./38.jpg",
    "category": "都市爱情",
    "categoryUrl": "./category-romance-city.html"
  },
  {
    "id": "1689",
    "title": "迷情庄园",
    "year": "2025",
    "region": "中国大陆",
    "type": "微短剧",
    "genre": "爱情,悬疑",
    "tags": [
      "豪门",
      "替身",
      "复仇",
      "反转"
    ],
    "oneLine": "十八年前灭门案唯一幸存者,伪装成失忆女佣重返庄园,却发现仇人早已爱上了自己。",
    "url": "./movies/movie-1689.html",
    "cover": "./39.jpg",
    "category": "全球佳作",
    "categoryUrl": "./category-global-stories.html"
  },
  {
    "id": "1690",
    "title": "魔鬼、性、狂想曲",
    "year": "2023",
    "region": "法国",
    "type": "电影",
    "genre": "情色,剧情,音乐",
    "tags": [
      "摇滚",
      "三角恋",
      "古典乐",
      "禁忌"
    ],
    "oneLine": "一位古典钢琴家为摇滚歌手写歌,却陷入与歌手及其女友的致命三人游戏。",
    "url": "./movies/movie-1690.html",
    "cover": "./40.jpg",
    "category": "家庭生活",
    "categoryUrl": "./category-family-life.html"
  },
  {
    "id": "1691",
    "title": "兽国龙虎斗",
    "year": "2023",
    "region": "美国",
    "type": "电影",
    "genre": "动作,奇幻,冒险",
    "tags": [
      "动物王国",
      "权力斗争",
      "功夫",
      "寓言"
    ],
    "oneLine": "在动物王国里,老虎将军发动政变推翻狮子国王,一只不会功夫的熊猫误打误撞成了反抗军首领。",
    "url": "./movies/movie-1691.html",
    "cover": "./41.jpg",
    "category": "热映精选",
    "categoryUrl": "./category-hot-picks.html"
  },
  {
    "id": "1692",
    "title": "死亡派对",
    "year": "2025",
    "region": "西班牙/阿根廷",
    "type": "电影",
    "genre": "悬疑/犯罪",
    "tags": [
      "密室杀人",
      "全员恶人",
      "社会批判"
    ],
    "oneLine": "在一栋与世隔绝的豪宅中,九位社会精英为一场生日派对而来,却发现自己将为自己的罪行逐一接受审判。",
    "url": "./movies/movie-1692.html",
    "cover": "./42.jpg",
    "category": "热映精选",
    "categoryUrl": "./category-hot-picks.html"
  },
  {
    "id": "1693",
    "title": "惊声尖笑6",
    "year": "2026",
    "region": "美国",
    "type": "电影",
    "genre": "喜剧,恐怖,恶搞",
    "tags": [
      "解构恐怖片",
      "网红直播",
      "元宇宙",
      "无厘头"
    ],
    "oneLine": "一群网红受邀到一座“史上最恐怖的鬼屋”直播探险,结果发现鬼屋里每个吓人桥段都在嘲笑他们自己。",
    "url": "./movies/movie-1693.html",
    "cover": "./43.jpg",
    "category": "经典片库",
    "categoryUrl": "./category-classic-library.html"
  },
  {
    "id": "1694",
    "title": "一代人",
    "year": "2027",
    "region": "中国大陆",
    "type": "电影",
    "genre": "剧情/家庭/年代",
    "tags": [
      "文革背景",
      "知青",
      "三代人",
      "时代创伤",
      "和解之路"
    ],
    "oneLine": "一个家族三代人,用六十年时间,终于等到了那句从没说出口的“对不起”。",
    "url": "./movies/movie-1694.html",
    "cover": "./44.jpg",
    "category": "都市爱情",
    "categoryUrl": "./category-romance-city.html"
  },
  {
    "id": "1695",
    "title": "湘女萧萧",
    "year": "2026",
    "region": "中国大陆",
    "type": "电影",
    "genre": "剧情/女性",
    "tags": [
      "女性",
      "农村",
      "成长",
      "改编",
      "年代"
    ],
    "oneLine": "十三岁的童养媳萧萧意外怀孕后,婆家要沉塘,全村却因她的哭喊停了下来。",
    "url": "./movies/movie-1695.html",
    "cover": "./45.jpg",
    "category": "家庭生活",
    "categoryUrl": "./category-family-life.html"
  },
  {
    "id": "1696",
    "title": "超级战舰",
    "year": "2026",
    "region": "美国",
    "type": "电影",
    "genre": "科幻/动作/战争",
    "tags": [
      "外星入侵",
      "海战史诗",
      "老兵荣耀",
      "实拍狂魔",
      "硬核军事"
    ],
    "oneLine": "外星舰队封锁太平洋,一艘退役的二战战列舰被重新启用,老兵们开着她去打一场没有胜算的仗。",
    "url": "./movies/movie-1696.html",
    "cover": "./46.jpg",
    "category": "家庭生活",
    "categoryUrl": "./category-family-life.html"
  },
  {
    "id": "1697",
    "title": "法姐之战",
    "year": "2023",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "剧情/律政/女性",
    "tags": [
      "女性群像",
      "律所职场",
      "姐妹反目",
      "商战"
    ],
    "oneLine": "律政界两名“法姐”从闺蜜变死敌,争夺一家顶级律所的管理权,却查出背后是男合伙人布的杀局。",
    "url": "./movies/movie-1697.html",
    "cover": "./47.jpg",
    "category": "剧集连看",
    "categoryUrl": "./category-drama-series.html"
  },
  {
    "id": "1698",
    "title": "地球百子第二季",
    "year": "2015",
    "region": "美国",
    "type": "剧集",
    "genre": "科幻",
    "tags": [
      "末世生存",
      "部落战争",
      "AI崛起"
    ],
    "oneLine": "地面幸存者竟是一个“山姆共和国”的核战遗民,而百子们体内都被注入了追踪芯片。",
    "url": "./movies/movie-1698.html",
    "cover": "./48.jpg",
    "category": "都市爱情",
    "categoryUrl": "./category-romance-city.html"
  },
  {
    "id": "1699",
    "title": "青之瞬间",
    "year": "2023",
    "region": "日本",
    "type": "动画电影",
    "genre": "动画/剧情/奇幻",
    "tags": [
      "青春",
      "时间回溯",
      "摄影部",
      "遗憾",
      "新海诚风"
    ],
    "oneLine": "高中摄影部部长意外发现自己拍摄的照片可以让人回到“按下快门的那一秒”,但他无法改变任何事,只能再次目睹遗憾。",
    "url": "./movies/movie-1699.html",
    "cover": "./49.jpg",
    "category": "悬疑夜场",
    "categoryUrl": "./category-suspense-night.html"
  },
  {
    "id": "1700",
    "title": "火山爆发",
    "year": "2025",
    "region": "冰岛,丹麦",
    "type": "电影",
    "genre": "灾难,剧情,家庭",
    "tags": [
      "火山",
      "冷战家庭",
      "北欧冷漠",
      "生存",
      "和解"
    ],
    "oneLine": "一场百年一遇的火山爆发即将吞没小镇,一对冷战三十年的老兄弟被困在地窖里,被迫在岩浆到来前说第一句话。",
    "url": "./movies/movie-1700.html",
    "cover": "./50.jpg",
    "category": "经典片库",
    "categoryUrl": "./category-classic-library.html"
  },
  {
    "id": "1701",
    "title": "岁月无声",
    "year": "2022",
    "region": "中国大陆",
    "type": "电影",
    "genre": "剧情",
    "tags": [
      "怀旧",
      "青春",
      "时代变迁",
      "家庭"
    ],
    "oneLine": "一块深埋老宅地基中的旧怀表,让三代人尘封四十年的秘密与遗憾重新转动。",
    "url": "./movies/movie-1701.html",
    "cover": "./51.jpg",
    "category": "奇幻科幻",
    "categoryUrl": "./category-fantasy-sci-fi.html"
  },
  {
    "id": "1702",
    "title": "青春简单爱",
    "year": "2023",
    "region": "中国台湾",
    "type": "电影",
    "genre": "爱情/青春/校园",
    "tags": [
      "纯爱",
      "夏日",
      "单车",
      "暗恋"
    ],
    "oneLine": "复读班倒数第一的学渣,为了靠近女神,竟然帮她喜欢的学霸整理错题集。",
    "url": "./movies/movie-1702.html",
    "cover": "./52.jpg",
    "category": "青春喜剧",
    "categoryUrl": "./category-youth-comedy.html"
  },
  {
    "id": "1703",
    "title": "毕业旅行",
    "year": "2020",
    "region": "台湾",
    "type": "电影",
    "genre": "悬疑/惊悚",
    "tags": [
      "校园",
      "密室",
      "复仇"
    ],
    "oneLine": "六名高中死党毕业旅行入住一栋豪华民宿,醒来后发现每个人的脖子上都多了一条倒计时刺青。",
    "url": "./movies/movie-1703.html",
    "cover": "./53.jpg",
    "category": "经典片库",
    "categoryUrl": "./category-classic-library.html"
  },
  {
    "id": "1704",
    "title": "海雾",
    "year": "2014",
    "region": "韩国",
    "type": "电影",
    "genre": "悬疑/惊悚",
    "tags": [
      "偷渡",
      "渔船",
      "人性之恶",
      "密闭空间"
    ],
    "oneLine": "一艘破旧渔船的船员为了还债协助偷渡,一场海雾过后,船上偷渡客接连失踪,船员们开始互相对视。",
    "url": "./movies/movie-1704.html",
    "cover": "./54.jpg",
    "category": "悬疑夜场",
    "categoryUrl": "./category-suspense-night.html"
  },
  {
    "id": "1705",
    "title": "在世界边缘遇见熊",
    "year": "2024",
    "region": "加拿大",
    "type": "电影",
    "genre": "剧情,冒险,奇幻",
    "tags": [
      "荒野求生",
      "隐喻",
      "生态寓言",
      "心理疗愈"
    ],
    "oneLine": "一个想自杀的中年男人,在北极圈边缘遇到一头会说话的熊,熊说:“我带你走,但你要先杀死我的过去。",
    "url": "./movies/movie-1705.html",
    "cover": "./55.jpg",
    "category": "青春喜剧",
    "categoryUrl": "./category-youth-comedy.html"
  },
  {
    "id": "1706",
    "title": "着魔",
    "year": "2024",
    "region": "中国台湾",
    "type": "电影",
    "genre": "恐怖,心理",
    "tags": [
      "民俗",
      "附身",
      "密室",
      "母性",
      "反转"
    ],
    "oneLine": "单亲妈妈怀疑女儿被恶灵附身,求助神棍驱魔,却发现真正“着魔”的其实是自己和这间老宅。",
    "url": "./movies/movie-1706.html",
    "cover": "./56.jpg",
    "category": "全球佳作",
    "categoryUrl": "./category-global-stories.html"
  },
  {
    "id": "1707",
    "title": "他是龙",
    "year": "2015",
    "region": "俄罗斯",
    "type": "电影",
    "genre": "奇幻",
    "tags": [
      "龙",
      "人龙恋",
      "唯美"
    ],
    "oneLine": "一位新娘在婚礼上被龙掳走,却发现这条恶龙是一个被困在龙身里的温柔少年。",
    "url": "./movies/movie-1707.html",
    "cover": "./57.jpg",
    "category": "悬疑夜场",
    "categoryUrl": "./category-suspense-night.html"
  },
  {
    "id": "1708",
    "title": "破碎的彩虹",
    "year": "2019",
    "region": "英国",
    "type": "电影",
    "genre": "剧情",
    "tags": [
      "LGBTQ+",
      "家庭冲突",
      "青春",
      "救赎"
    ],
    "oneLine": "因为出柜而被父亲赶出家门的少年,在流浪途中遇到了一群变装皇后。",
    "url": "./movies/movie-1708.html",
    "cover": "./58.jpg",
    "category": "经典片库",
    "categoryUrl": "./category-classic-library.html"
  },
  {
    "id": "1709",
    "title": "这个大叔有点酷",
    "year": "2020",
    "region": "日本",
    "type": "剧集",
    "genre": "剧情,温情",
    "tags": [
      "反差萌",
      "治愈",
      "黑道退休",
      "单元剧"
    ],
    "oneLine": "退休的黑道大佬隐姓埋名开了一家杂货铺,用江湖手段解决邻里烦恼,意外受欢迎。",
    "url": "./movies/movie-1709.html",
    "cover": "./59.jpg",
    "category": "青春喜剧",
    "categoryUrl": "./category-youth-comedy.html"
  },
  {
    "id": "1710",
    "title": "恶灵再临",
    "year": "2022",
    "region": "美国",
    "type": "电影",
    "genre": "恐怖,惊悚",
    "tags": [
      "驱魔",
      "宗教",
      "温子仁风",
      "反转"
    ],
    "oneLine": "神父在为一名小男孩驱魔时,发现恶魔的目标不是附身男孩,而是要让他亲手杀死神父。",
    "url": "./movies/movie-1710.html",
    "cover": "./60.jpg",
    "category": "悬疑夜场",
    "categoryUrl": "./category-suspense-night.html"
  },
  {
    "id": "1711",
    "title": "七十二家房客第十四部粤语",
    "year": "2026",
    "region": "中国香港",
    "type": "剧集",
    "genre": "情景喜剧",
    "tags": [
      "粤语",
      "市井",
      "邻里",
      "幽默",
      "生活"
    ],
    "oneLine": "包租婆的物业遭遇“共享公寓”新模式冲击,老房客们为了保住家园上演乌龙保卫战。",
    "url": "./movies/movie-1711.html",
    "cover": "./61.jpg",
    "category": "经典片库",
    "categoryUrl": "./category-classic-library.html"
  },
  {
    "id": "1712",
    "title": "嘉年华大盗",
    "year": "2025",
    "region": "中国香港",
    "type": "电影",
    "genre": "动作/喜剧/犯罪",
    "tags": [
      "盗窃团伙",
      "游乐园",
      "高智商",
      "反转"
    ],
    "oneLine": "一个过气魔术师、一个退役体操运动员和一个电脑黑客,组队要在嘉年华现场盗取天价钻石。",
    "url": "./movies/movie-1712.html",
    "cover": "./62.jpg",
    "category": "院线热片",
    "categoryUrl": "./category-cinema-hits.html"
  },
  {
    "id": "1713",
    "title": "心灵筑动",
    "year": "2025",
    "region": "中国台湾",
    "type": "电影",
    "genre": "剧情/家庭",
    "tags": [
      "自闭症",
      "建筑",
      "兄弟",
      "工地的声音"
    ],
    "oneLine": "患有自闭症的天才弟弟能听出建筑结构的“心跳”,哥哥为了保住拆迁工地,带他破解老屋的共振密码。",
    "url": "./movies/movie-1713.html",
    "cover": "./63.jpg",
    "category": "家庭生活",
    "categoryUrl": "./category-family-life.html"
  },
  {
    "id": "1714",
    "title": "美式晚宴",
    "year": "2025",
    "region": "美国",
    "type": "电影",
    "genre": "剧情,悬疑,家庭",
    "tags": [
      "感恩节",
      "家族秘密",
      "餐桌戏",
      "多线叙事",
      "人性拷问"
    ],
    "oneLine": "每年感恩节晚餐,韦斯特家都会有一个家庭成员被“投票出局”——今年被投出去的是八十岁的外婆,她说出了这个家族最大的谎言。",
    "url": "./movies/movie-1714.html",
    "cover": "./64.jpg",
    "category": "剧集连看",
    "categoryUrl": "./category-drama-series.html"
  },
  {
    "id": "1715",
    "title": "梦想夏乡",
    "year": "2024",
    "region": "日本",
    "type": "剧集",
    "genre": "动画/治愈/奇幻",
    "tags": [
      "乡村",
      "返乡",
      "神社",
      "夏日",
      "约定"
    ],
    "oneLine": "厌倦都市的女生回到故乡,发现破败的神社里住着一位等待了她十二年的精灵。",
    "url": "./movies/movie-1715.html",
    "cover": "./65.jpg",
    "category": "全球佳作",
    "categoryUrl": "./category-global-stories.html"
  },
  {
    "id": "1716",
    "title": "她的一生",
    "year": "2024",
    "region": "日本",
    "type": "剧集",
    "genre": "剧情,家庭",
    "tags": [
      "女性史诗",
      "昭和到令和",
      "三代"
    ],
    "oneLine": "从1945年广岛废墟到2023年东京元宇宙,一位普通日本女性的一生,就是一部微缩的现代日本史。",
    "url": "./movies/movie-1716.html",
    "cover": "./66.jpg",
    "category": "全球佳作",
    "categoryUrl": "./category-global-stories.html"
  },
  {
    "id": "1717",
    "title": "异形入侵",
    "year": "2026",
    "region": "美国",
    "type": "电影",
    "genre": "科幻,恐怖,动作",
    "tags": [
      "外星生物",
      "封闭空间",
      "寄生",
      "生存"
    ],
    "oneLine": "一种能完美模仿人类外形的寄生生物入侵太空站,宇航员们不仅要面对怪物,更要面对无法信任的队友。",
    "url": "./movies/movie-1717.html",
    "cover": "./67.jpg",
    "category": "青春喜剧",
    "categoryUrl": "./category-youth-comedy.html"
  },
  {
    "id": "1718",
    "title": "13",
    "year": "2024",
    "region": "美国",
    "type": "电影",
    "genre": "悬疑/惊悚",
    "tags": [
      "数字诅咒",
      "密闭空间",
      "极限逃生"
    ],
    "oneLine": "13个人被困在一栋大楼里,每隔13分钟死一个人,唯一的线索是数字13。",
    "url": "./movies/movie-1718.html",
    "cover": "./68.jpg",
    "category": "家庭生活",
    "categoryUrl": "./category-family-life.html"
  },
  {
    "id": "1719",
    "title": "空谷血案",
    "year": "1997",
    "region": "中国大陆",
    "type": "电影",
    "genre": "悬疑/犯罪",
    "tags": [
      "乡村",
      "命案",
      "刑侦",
      "人性",
      "反转"
    ],
    "oneLine": "云南深山空谷村发生无头案,所有村民都有不在场证明,而真相藏在山谷的回声规律中。",
    "url": "./movies/movie-1719.html",
    "cover": "./69.jpg",
    "category": "家庭生活",
    "categoryUrl": "./category-family-life.html"
  },
  {
    "id": "1720",
    "title": "超蛙战士之初露锋芒",
    "year": "2024",
    "region": "中国内地",
    "type": "动画电影",
    "genre": "科幻、动作、机甲",
    "tags": [
      "机甲蛙形",
      "太空歌剧",
      "热血",
      "国漫崛起"
    ],
    "oneLine": "在遥远的蛙蛙星系,一个吊儿郎当的青蛙机甲驾驶员,被迫与宿敌“蟾蜍帝国”的公主联手,拯救即将被黑洞吞噬的家园。",
    "url": "./movies/movie-1720.html",
    "cover": "./70.jpg",
    "category": "热映精选",
    "categoryUrl": "./category-hot-picks.html"
  },
  {
    "id": "1721",
    "title": "出埃及记",
    "year": "2023",
    "region": "美国",
    "type": "剧集",
    "genre": "科幻,悬疑,宗教",
    "tags": [
      "太空歌剧",
      "人工智能",
      "旧约新说",
      "人性拷问"
    ],
    "oneLine": "三千年后,一艘逃亡飞船上的难民发现真正的“应许之地”是一个古老的谎言。",
    "url": "./movies/movie-1721.html",
    "cover": "./71.jpg",
    "category": "热映精选",
    "categoryUrl": "./category-hot-picks.html"
  },
  {
    "id": "1722",
    "title": "神秘失踪1993",
    "year": "1993",
    "region": "荷兰/法国",
    "type": "电影",
    "genre": "悬疑/惊悚/心理",
    "tags": [
      "经典",
      "冷门神作",
      "人性实验",
      "开放式结局"
    ],
    "oneLine": "女友在加油站神秘失踪,男主苦寻三年后,凶手主动现身并给出唯一条件:想知道真相,就亲自体验一次。",
    "url": "./movies/movie-1722.html",
    "cover": "./72.jpg",
    "category": "家庭生活",
    "categoryUrl": "./category-family-life.html"
  },
  {
    "id": "1723",
    "title": "酥脆的蛋壳",
    "year": "2024",
    "region": "法国",
    "type": "电影",
    "genre": "剧情/儿童/奇幻",
    "tags": [
      "童年",
      "幻想",
      "单亲",
      "治愈"
    ],
    "oneLine": "6岁男孩坚信死去的妈妈藏在早餐的蛋壳里,只有把蛋壳敲得足够碎,妈妈才会出来拥抱他。",
    "url": "./movies/movie-1723.html",
    "cover": "./73.jpg",
    "category": "悬疑夜场",
    "categoryUrl": "./category-suspense-night.html"
  },
  {
    "id": "1724",
    "title": "不得安身",
    "year": "2023",
    "region": "西班牙",
    "type": "电影",
    "genre": "惊悚,犯罪",
    "tags": [
      "记者",
      "腐败",
      "小镇",
      "命案",
      "封锁"
    ],
    "oneLine": "一名调查记者回到阔别三十年的家乡小镇,发现所有人的手机相册里都存着同一具尸体的照片。",
    "url": "./movies/movie-1724.html",
    "cover": "./74.jpg",
    "category": "经典片库",
    "categoryUrl": "./category-classic-library.html"
  },
  {
    "id": "1725",
    "title": "金牌主簿",
    "year": "2024",
    "region": "中国大陆",
    "type": "网络电影",
    "genre": "喜剧/古装/职场",
    "tags": [
      "穿越",
      "公务员",
      "县衙",
      "反内卷",
      "吐槽"
    ],
    "oneLine": "现代考编落榜生意外穿越到大周朝,成为了县太爷身边那个累死累活的主簿。",
    "url": "./movies/movie-1725.html",
    "cover": "./75.jpg",
    "category": "热映精选",
    "categoryUrl": "./category-hot-picks.html"
  },
  {
    "id": "1726",
    "title": "璀璨情诗",
    "year": "2009",
    "region": "英国",
    "type": "电影",
    "genre": "爱情,剧情,传记",
    "tags": [
      "诗人济慈",
      "浪漫主义",
      "绝恋",
      "书信体"
    ],
    "oneLine": "年轻的诗人济慈爱上了邻居芬妮,他穷困潦倒只能用诗句表达爱意,而芬妮用一生珍藏了这些情诗。",
    "url": "./movies/movie-1726.html",
    "cover": "./76.jpg",
    "category": "院线热片",
    "categoryUrl": "./category-cinema-hits.html"
  },
  {
    "id": "1727",
    "title": "海岸物语",
    "year": "2026",
    "region": "日本",
    "type": "电影",
    "genre": "剧情,家庭",
    "tags": [
      "311地震",
      "海啸",
      "治愈",
      "小镇",
      "记忆"
    ],
    "oneLine": "十年后,一个海啸幸存者回到故乡,只为给死去的母亲完成离婚手续。",
    "url": "./movies/movie-1727.html",
    "cover": "./77.jpg",
    "category": "家庭生活",
    "categoryUrl": "./category-family-life.html"
  },
  {
    "id": "1728",
    "title": "龙岭迷窟",
    "year": "2020",
    "region": "中国大陆",
    "type": "网络剧",
    "genre": "冒险",
    "tags": [
      "盗墓",
      "悬魂梯",
      "幽灵冢",
      "鹧鸪哨",
      "西夏黑水城"
    ],
    "oneLine": "一只绣花鞋引发的探险,让胡八一等人深入龙岭迷窟,遭遇了世间罕见的悬魂梯与幽灵冢。",
    "url": "./movies/movie-1728.html",
    "cover": "./78.jpg",
    "category": "青春喜剧",
    "categoryUrl": "./category-youth-comedy.html"
  },
  {
    "id": "1729",
    "title": "四月四日",
    "year": "2022",
    "region": "中国香港",
    "type": "电影",
    "genre": "惊悚/心理",
    "tags": [
      "循环",
      "祭日",
      "记忆",
      "悬疑"
    ],
    "oneLine": "每年四月四日她都会在噩梦中醒来,而今年,梦里死去的人开始给她打电话。",
    "url": "./movies/movie-1729.html",
    "cover": "./79.jpg",
    "category": "热映精选",
    "categoryUrl": "./category-hot-picks.html"
  },
  {
    "id": "1730",
    "title": "谍战马德拉斯",
    "year": "2024",
    "region": "印度",
    "type": "电影",
    "genre": "动作/悬疑/战争",
    "tags": [
      "军火交易",
      "泰米尔猛虎组织",
      "CIA",
      "双面间谍"
    ],
    "oneLine": "1990年代,一位泰米尔大学生被印度情报局招募,潜入了斯里兰卡的猛虎组织,却发现自己的上线也是别人的下线。",
    "url": "./movies/movie-1730.html",
    "cover": "./80.jpg",
    "category": "都市爱情",
    "categoryUrl": "./category-romance-city.html"
  },
  {
    "id": "1731",
    "title": "我凭本事单身",
    "year": "2024",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "爱情/喜剧/校园",
    "tags": [
      "直男直女",
      "反向套路",
      "搞笑",
      "母胎solo",
      "真香警告"
    ],
    "oneLine": "一对“母胎单身”的学霸和学渣签订了“互相帮助脱单协议”,结果所有追求者都被他们以各种离谱理由劝退了。",
    "url": "./movies/movie-1731.html",
    "cover": "./81.jpg",
    "category": "悬疑夜场",
    "categoryUrl": "./category-suspense-night.html"
  },
  {
    "id": "1732",
    "title": "直到夜尽头",
    "year": "2026",
    "region": "中国大陆",
    "type": "电影",
    "genre": "剧情/悬疑",
    "tags": [
      "复仇",
      "公路",
      "女性",
      "救赎",
      "黑色电影"
    ],
    "oneLine": "一名被判误杀的女狱警出狱后,为寻找失踪女儿的下落,被迫重操旧业押送一名神秘囚犯穿越暗夜荒原。",
    "url": "./movies/movie-1732.html",
    "cover": "./82.jpg",
    "category": "悬疑夜场",
    "categoryUrl": "./category-suspense-night.html"
  },
  {
    "id": "1733",
    "title": "烽火线",
    "year": "2024",
    "region": "中国",
    "type": "剧集",
    "genre": "战争,剧情",
    "tags": [
      "狙击手",
      "兄弟情",
      "牺牲",
      "抗美援朝"
    ],
    "oneLine": "一对神枪手兄弟在长津湖战场上分属敌我,瞄准镜里看到的是彼此的脸。",
    "url": "./movies/movie-1733.html",
    "cover": "./83.jpg",
    "category": "动作专区",
    "categoryUrl": "./category-action-zone.html"
  },
  {
    "id": "1734",
    "title": "克拉拉传",
    "year": "2023",
    "region": "德国",
    "type": "电影",
    "genre": "传记,音乐",
    "tags": [
      "古典乐",
      "女性觉醒",
      "舒曼",
      "勃拉姆斯",
      "历史"
    ],
    "oneLine": "19世纪天才钢琴家克拉拉·舒曼,如何在丈夫疯癫后,以一己之力托起三个男人的音乐帝国。",
    "url": "./movies/movie-1734.html",
    "cover": "./84.jpg",
    "category": "都市爱情",
    "categoryUrl": "./category-romance-city.html"
  },
  {
    "id": "1735",
    "title": "边关烽火情",
    "year": "2019",
    "region": "中国大陆",
    "type": "电视剧",
    "genre": "爱情/历史/战争",
    "tags": [
      "明朝",
      "女将",
      "长城",
      "马市"
    ],
    "oneLine": "明朝隆庆年间,长城边关的马市上,一名女扮男装的将军与蒙古王子在茶叶和战马之间,谈了一场决定两国命运的恋爱。",
    "url": "./movies/movie-1735.html",
    "cover": "./85.jpg",
    "category": "热映精选",
    "categoryUrl": "./category-hot-picks.html"
  },
  {
    "id": "1736",
    "title": "快餐店霸凌事件",
    "year": "2025",
    "region": "中国台湾",
    "type": "电影",
    "genre": "剧情,悬疑,社会",
    "tags": [
      "职场霸凌",
      "网络暴力",
      "底层反抗",
      "密室困局",
      "罗生门"
    ],
    "oneLine": "一家24小时快餐店打烊后,监控缺失的厨房里发生了一起震惊社会的霸凌致死案,但四个嫌疑人的口供截然不同。",
    "url": "./movies/movie-1736.html",
    "cover": "./86.jpg",
    "category": "热映精选",
    "categoryUrl": "./category-hot-picks.html"
  },
  {
    "id": "1737",
    "title": "爱情公寓番外篇:开心原力",
    "year": "2018",
    "region": "中国大陆",
    "type": "网络剧",
    "genre": "喜剧/奇幻",
    "tags": [
      "平行宇宙",
      "超能力",
      "爆笑",
      "单元剧",
      "青春"
    ],
    "oneLine": "爱情公寓的房客们意外获得神秘原力,发现隔壁住着一群会用笑声改变现实的疯狂邻居。",
    "url": "./movies/movie-1737.html",
    "cover": "./87.jpg",
    "category": "历史古装",
    "categoryUrl": "./category-history-costume.html"
  },
  {
    "id": "1738",
    "title": "社畜向前冲",
    "year": "2023",
    "region": "日本",
    "type": "电视剧",
    "genre": "喜剧,职场",
    "tags": [
      "打工人",
      "黑色幽默",
      "加班文化",
      "逆袭"
    ],
    "oneLine": "当黑心公司的社长在年会上说“公司就是你们的家”,忍无可忍的男主掏出辞职信:“那我要分家产。",
    "url": "./movies/movie-1738.html",
    "cover": "./88.jpg",
    "category": "青春喜剧",
    "categoryUrl": "./category-youth-comedy.html"
  },
  {
    "id": "1739",
    "title": "我在威尼斯遇见海边的诗人",
    "year": "2023",
    "region": "意大利/法国",
    "type": "电影",
    "genre": "文艺,爱情",
    "tags": [
      "书店",
      "疗愈",
      "老年爱情"
    ],
    "oneLine": "一位患有阿兹海默症的老诗人,每天在海边写同一首诗,直到一位威尼斯的聋哑书商读懂了他的留白。",
    "url": "./movies/movie-1739.html",
    "cover": "./89.jpg",
    "category": "历史古装",
    "categoryUrl": "./category-history-costume.html"
  },
  {
    "id": "1740",
    "title": "琐碎",
    "year": "2025",
    "region": "中国大陆",
    "type": "电视剧",
    "genre": "剧情,生活,家庭",
    "tags": [
      "中年危机",
      "夫妻冷战",
      "细节崩塌",
      "现实主义"
    ],
    "oneLine": "一对结婚十五年的夫妻,因为谁洗碗、孩子成绩、忘关窗户等一百件琐事,最终走到了离婚登记处门口。",
    "url": "./movies/movie-1740.html",
    "cover": "./90.jpg",
    "category": "奇幻科幻",
    "categoryUrl": "./category-fantasy-sci-fi.html"
  },
  {
    "id": "1741",
    "title": "朱莉小姐",
    "year": "2014",
    "region": "瑞典",
    "type": "电影",
    "genre": "剧情/爱情",
    "tags": [
      "经典改编",
      "阶级",
      "欲望",
      "仲夏夜"
    ],
    "oneLine": "伯爵之女朱莉在仲夏夜勾引了仆人马夫,两人决定私奔,却在黎明前被阶级的枷锁碾碎。",
    "url": "./movies/movie-1741.html",
    "cover": "./91.jpg",
    "category": "热映精选",
    "categoryUrl": "./category-hot-picks.html"
  },
  {
    "id": "1742",
    "title": "红楼劫",
    "year": "2019",
    "region": "中国",
    "type": "剧集",
    "genre": "悬疑,古装,犯罪",
    "tags": [
      "红学改编",
      "连环案",
      "密室",
      "架空"
    ],
    "oneLine": "荣国府大观园建成之夜,接连发生三起密室杀人事件,而凶手行凶的轨迹竟与金陵十二钗判词一模一样。",
    "url": "./movies/movie-1742.html",
    "cover": "./92.jpg",
    "category": "全球佳作",
    "categoryUrl": "./category-global-stories.html"
  },
  {
    "id": "1743",
    "title": "我爱灰太狼2",
    "year": "2025",
    "region": "中国大陆",
    "type": "电影",
    "genre": "喜剧,动画,奇幻",
    "tags": [
      "平行宇宙",
      "中年危机",
      "反转",
      "合家欢",
      "怀旧"
    ],
    "oneLine": "灰太狼意外穿越到人类世界,成了一个年薪百万却毫无幸福感的中年程序员,他必须找回自己的狼性才能回家。",
    "url": "./movies/movie-1743.html",
    "cover": "./93.jpg",
    "category": "院线热片",
    "categoryUrl": "./category-cinema-hits.html"
  },
  {
    "id": "1744",
    "title": "猪圈",
    "year": "2024",
    "region": "英国",
    "type": "电影",
    "genre": "恐怖/惊悚",
    "tags": [
      "农场",
      "畸形",
      "地下囚禁",
      "生存"
    ],
    "oneLine": "一群背包客误入偏远农场,发现猪圈里养的“猪”竟是人。",
    "url": "./movies/movie-1744.html",
    "cover": "./94.jpg",
    "category": "剧集连看",
    "categoryUrl": "./category-drama-series.html"
  },
  {
    "id": "1745",
    "title": "禽兽",
    "year": "2023",
    "region": "韩国",
    "type": "电影",
    "genre": "犯罪/惊悚/剧情",
    "tags": [
      "连环杀手",
      "刑警",
      "反转",
      "人性黑暗"
    ],
    "oneLine": "一个老刑警追捕连环杀手追了十五年,最后发现杀手是他亲手带大的徒弟。",
    "url": "./movies/movie-1745.html",
    "cover": "./95.jpg",
    "category": "动作专区",
    "categoryUrl": "./category-action-zone.html"
  },
  {
    "id": "1746",
    "title": "人力资源第一季",
    "year": "2023",
    "region": "美国",
    "type": "剧集",
    "genre": "喜剧/奇幻",
    "tags": [
      "职场",
      "神话",
      "恶搞",
      "讽刺",
      "群像"
    ],
    "oneLine": "天堂人力资源部忙着为凡人分配姻缘和死亡,却搞不定自己的办公室恋情。",
    "url": "./movies/movie-1746.html",
    "cover": "./96.jpg",
    "category": "悬疑夜场",
    "categoryUrl": "./category-suspense-night.html"
  },
  {
    "id": "1747",
    "title": "理想国",
    "year": "2024",
    "region": "中国大陆",
    "type": "电视剧",
    "genre": "科幻/悬疑",
    "tags": [
      "虚拟现实",
      "乌托邦",
      "意识上传",
      "阶层博弈",
      "反乌托邦"
    ],
    "oneLine": "一款名为“理想国”的沉浸式游戏承诺给予玩家完美人生,但所有NPC都是欠下巨额债务的真人。",
    "url": "./movies/movie-1747.html",
    "cover": "./97.jpg",
    "category": "悬疑夜场",
    "categoryUrl": "./category-suspense-night.html"
  },
  {
    "id": "1748",
    "title": "武侠",
    "year": "2025",
    "region": "中国大陆/中国香港",
    "type": "电影",
    "genre": "武侠/动作/悬疑",
    "tags": [
      "硬核武学",
      "清末乱世",
      "身份谜团",
      "拳拳到肉"
    ],
    "oneLine": "一名隐姓埋名的顶尖杀手成了小镇的刽子手,直到他砍下的头颅里滚出一颗刻着自己名字的棋子。",
    "url": "./movies/movie-1748.html",
    "cover": "./98.jpg",
    "category": "热映精选",
    "categoryUrl": "./category-hot-picks.html"
  },
  {
    "id": "1749",
    "title": "幽默的界限",
    "year": "2025",
    "region": "美国",
    "type": "电影",
    "genre": "喜剧,剧情",
    "tags": [
      "脱口秀",
      "冒犯艺术",
      "网络审判",
      "言论边界"
    ],
    "oneLine": "一个以“冒犯一切”为标签的脱口秀演员,因为嘲讽了错误的人,生活在一夜之间被彻底解构。",
    "url": "./movies/movie-1749.html",
    "cover": "./99.jpg",
    "category": "经典片库",
    "categoryUrl": "./category-classic-library.html"
  },
  {
    "id": "1750",
    "title": "为玛格利特朗读",
    "year": "2025",
    "region": "法国",
    "type": "电影",
    "genre": "剧情,爱情",
    "tags": [
      "文学",
      "治愈",
      "忘年交",
      "温暖"
    ],
    "oneLine": "一个粗犷的园丁在公园里为95岁的前文学教授朗读,意外治愈了彼此孤独的灵魂。",
    "url": "./movies/movie-1750.html",
    "cover": "./100.jpg",
    "category": "动作专区",
    "categoryUrl": "./category-action-zone.html"
  },
  {
    "id": "1751",
    "title": "琳赛·萝涵的印度之旅",
    "year": "2024",
    "region": "美国",
    "type": "电影",
    "genre": "喜剧/冒险/音乐",
    "tags": [
      "流行偶像",
      "灵修",
      "文化冲突",
      "找回自我",
      "歌舞大片"
    ],
    "oneLine": "过气好莱坞童星为了躲避丑闻逃到印度,却被当地一个宝莱坞草台班子导演忽悠去演“会唱歌的圣女”。",
    "url": "./movies/movie-1751.html",
    "cover": "./101.jpg",
    "category": "剧集连看",
    "categoryUrl": "./category-drama-series.html"
  },
  {
    "id": "1752",
    "title": "爱,婚礼,重演",
    "year": "2023",
    "region": "英国",
    "type": "电影",
    "genre": "喜剧、爱情、剧情",
    "tags": [
      "婚礼闹剧",
      "时间循环",
      "家族秘密",
      "伴娘对决"
    ],
    "oneLine": "一场婚礼被搞砸四次,每次重来都揭开一个更炸裂的家庭秘密。",
    "url": "./movies/movie-1752.html",
    "cover": "./102.jpg",
    "category": "悬疑夜场",
    "categoryUrl": "./category-suspense-night.html"
  },
  {
    "id": "1753",
    "title": "神鎗杀手",
    "year": "1995",
    "region": "中国香港",
    "type": "电影",
    "genre": "动作,悬疑,惊悚",
    "tags": [
      "狙击手",
      "连环杀手",
      "双雄对决"
    ],
    "oneLine": "警队首席狙击手沦为替罪羊,他必须用自己的“神枪”技艺,在闹市区揪出诬陷他的真凶。",
    "url": "./movies/movie-1753.html",
    "cover": "./103.jpg",
    "category": "经典片库",
    "categoryUrl": "./category-classic-library.html"
  },
  {
    "id": "1754",
    "title": "春花娇美可人儿",
    "year": "1993",
    "region": "中国香港",
    "type": "电影",
    "genre": "喜剧、爱情、剧情",
    "tags": [
      "怀旧",
      "女明星",
      "娱乐圈",
      "小人物"
    ],
    "oneLine": "一个木讷的化妆品推销员,阴差阳错被当红女明星聘为私人助理,却发现她光鲜亮丽的外表下,藏着无数鸡飞狗跳的麻烦。",
    "url": "./movies/movie-1754.html",
    "cover": "./104.jpg",
    "category": "热映精选",
    "categoryUrl": "./category-hot-picks.html"
  },
  {
    "id": "1755",
    "title": "沙漠的囚徒",
    "year": "2025",
    "region": "伊朗/法国",
    "type": "电影",
    "genre": "剧情/悬疑",
    "tags": [
      "沙漠生存",
      "心理囚笼",
      "信仰拷问",
      "极简叙事",
      "身份迷失"
    ],
    "oneLine": "一个在沙漠中迷路的考古学家,找到了四万年前的岩画,画上刻着他的脸。",
    "url": "./movies/movie-1755.html",
    "cover": "./105.jpg",
    "category": "历史古装",
    "categoryUrl": "./category-history-costume.html"
  },
  {
    "id": "1756",
    "title": "这是我们的钱",
    "year": "2022",
    "region": "意大利",
    "type": "电影",
    "genre": "喜剧,犯罪",
    "tags": [
      "银行劫案",
      "小镇居民",
      "反体制"
    ],
    "oneLine": "西西里一个小镇的居民发现,当地银行即将带着所有人的存款跑路,于是他们决定先下手为强。",
    "url": "./movies/movie-1756.html",
    "cover": "./106.jpg",
    "category": "院线热片",
    "categoryUrl": "./category-cinema-hits.html"
  },
  {
    "id": "1757",
    "title": "来自天国的加油声",
    "year": "2025",
    "region": "日本",
    "type": "电影",
    "genre": "剧情/治愈/音乐",
    "tags": [
      "临终关怀",
      "广播",
      "真人真事改编",
      "催泪",
      "人性光辉"
    ],
    "oneLine": "身患绝症的电台主播,在生命的最后三个月,用盗播的方式为病房里的绝望病友播放“专属加油歌”。",
    "url": "./movies/movie-1757.html",
    "cover": "./107.jpg",
    "category": "奇幻科幻",
    "categoryUrl": "./category-fantasy-sci-fi.html"
  },
  {
    "id": "1758",
    "title": "少年岳飞传奇",
    "year": "2026",
    "region": "中国大陆",
    "type": "动画电影",
    "genre": "动画/历史/动作",
    "tags": [
      "国漫",
      "热血",
      "成长",
      "英雄起源"
    ],
    "oneLine": "在成为大英雄之前,岳飞只是一个被神秘老人追着喂饭的顽劣少年。",
    "url": "./movies/movie-1758.html",
    "cover": "./108.jpg",
    "category": "动作专区",
    "categoryUrl": "./category-action-zone.html"
  },
  {
    "id": "1759",
    "title": "惨烈的七日",
    "year": "2025",
    "region": "俄罗斯",
    "type": "剧集",
    "genre": "战争,剧情,历史",
    "tags": [
      "车臣战争",
      "巷战",
      "狙击手",
      "生存"
    ],
    "oneLine": "第一次车臣战争期间,一支格罗兹尼侦察小队被困废墟,七天内从杀敌到质疑战争的终极炼狱。",
    "url": "./movies/movie-1759.html",
    "cover": "./109.jpg",
    "category": "悬疑夜场",
    "categoryUrl": "./category-suspense-night.html"
  },
  {
    "id": "1760",
    "title": "急先锋横扫罪恶城",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "genre": "动作/警匪",
    "tags": [
      "特警部队",
      "高科技作战",
      "跨国追捕",
      "硬汉群像",
      "枪战爆破"
    ],
    "oneLine": "一支秘密国际特警队“急先锋”潜入虚拟罪恶之城,必须在48小时内抓获能入侵全球监控系统的黑客“幽灵”。",
    "url": "./movies/movie-1760.html",
    "cover": "./110.jpg",
    "category": "热映精选",
    "categoryUrl": "./category-hot-picks.html"
  },
  {
    "id": "1761",
    "title": "砂糖菓子坏了的时候",
    "year": "1967",
    "region": "日本",
    "type": "电影",
    "genre": "剧情/犯罪",
    "tags": [
      "人性",
      "冷战",
      "沉没"
    ],
    "oneLine": "一件价值连城的古董失踪案,牵出政商界、黑帮与美军基地的黑暗交易,所有人都像坏掉的砂糖菓子般外表完好内心崩塌。",
    "url": "./movies/movie-1761.html",
    "cover": "./111.jpg",
    "category": "悬疑夜场",
    "categoryUrl": "./category-suspense-night.html"
  },
  {
    "id": "1762",
    "title": "黑暗王子:德古拉",
    "year": "2026",
    "region": "英国",
    "type": "剧集",
    "genre": "剧情,恐怖,历史",
    "tags": [
      "德古拉",
      "起源",
      "吸血鬼",
      "历史改编",
      "暗黑"
    ],
    "oneLine": "在成为传说之前,他是罗马尼亚的“穿刺公”弗拉德三世,一个在信仰与嗜血之间挣扎的黑暗王子。",
    "url": "./movies/movie-1762.html",
    "cover": "./112.jpg",
    "category": "家庭生活",
    "categoryUrl": "./category-family-life.html"
  },
  {
    "id": "1763",
    "title": "天生一对粤语",
    "year": "2025",
    "region": "中国香港",
    "type": "电影",
    "genre": "喜剧/爱情",
    "tags": [
      "互换身份",
      "港风",
      "乌龙"
    ],
    "oneLine": "失散多年的双胞胎姐妹在香港重聚,决定交换身份,撮合早已离婚的父母。",
    "url": "./movies/movie-1763.html",
    "cover": "./113.jpg",
    "category": "家庭生活",
    "categoryUrl": "./category-family-life.html"
  },
  {
    "id": "1764",
    "title": "蔡李佛",
    "year": "2024",
    "region": "中国香港",
    "type": "电影",
    "genre": "动作,武术,剧情",
    "tags": [
      "传统武术",
      "师徒",
      "传承",
      "现代搏击"
    ],
    "oneLine": "佛山蔡李佛拳馆的最后一位关门弟子,站上了UFC的擂台,对手是曾打败他师父的泰拳王。",
    "url": "./movies/movie-1764.html",
    "cover": "./114.jpg",
    "category": "家庭生活",
    "categoryUrl": "./category-family-life.html"
  },
  {
    "id": "1765",
    "title": "珍宝",
    "year": "2025",
    "region": "法国/塞内加尔",
    "type": "电影",
    "genre": "剧情/家庭",
    "tags": [
      "移民",
      "祖母",
      "遗物",
      "身份认同"
    ],
    "oneLine": "巴黎少女带着祖母的骨灰回到非洲老家,发现所谓的“家族珍宝”是一盘空磁带。",
    "url": "./movies/movie-1765.html",
    "cover": "./115.jpg",
    "category": "历史古装",
    "categoryUrl": "./category-history-costume.html"
  },
  {
    "id": "1766",
    "title": "国会图书馆",
    "year": "2025",
    "region": "美国",
    "type": "电视剧",
    "genre": "悬疑,剧情,历史",
    "tags": [
      "知识犯罪",
      "解谜",
      "古籍",
      "阴谋论",
      "慢热"
    ],
    "oneLine": "美国国会图书馆的地下书库里,藏着一个不为人知的部门,专门处理那些“会杀人”的书。",
    "url": "./movies/movie-1766.html",
    "cover": "./116.jpg",
    "category": "院线热片",
    "categoryUrl": "./category-cinema-hits.html"
  },
  {
    "id": "1767",
    "title": "为何已成过去",
    "year": "1995",
    "region": "中国香港",
    "type": "电影",
    "genre": "爱情文艺",
    "tags": [
      "遗憾",
      "重逢",
      "旧情人",
      "港风",
      "催泪"
    ],
    "oneLine": "一对曾经私奔未遂的恋人在中年重逢,各自有家庭,却决定花一天时间重走当年的私奔路。",
    "url": "./movies/movie-1767.html",
    "cover": "./117.jpg",
    "category": "热映精选",
    "categoryUrl": "./category-hot-picks.html"
  },
  {
    "id": "1768",
    "title": "情欲满屋",
    "year": "2022",
    "region": "泰国",
    "type": "电影",
    "genre": "爱情/剧情",
    "tags": [
      "多角关系",
      "同居生活",
      "雨季"
    ],
    "oneLine": "一场暴雨将四位前任困在同一栋海边别墅,24小时内必须理清所有爱欲账单。",
    "url": "./movies/movie-1768.html",
    "cover": "./118.jpg",
    "category": "动作专区",
    "categoryUrl": "./category-action-zone.html"
  },
  {
    "id": "1769",
    "title": "真爱找麻烦!",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "genre": "喜剧,爱情",
    "tags": [
      "欢喜冤家",
      "身份错位",
      "乌龙相亲"
    ],
    "oneLine": "一个专业“恋爱替身”接下了帮富二代甩掉未婚妻的任务,却发现自己才是对方的真爱目标。",
    "url": "./movies/movie-1769.html",
    "cover": "./119.jpg",
    "category": "都市爱情",
    "categoryUrl": "./category-romance-city.html"
  },
  {
    "id": "1770",
    "title": "第237号房间",
    "year": "2012",
    "region": "美国",
    "type": "电影",
    "genre": "纪录片/悬疑/恐怖",
    "tags": [
      "闪灵",
      "解读",
      "阴谋论",
      "迷影",
      "库布里克"
    ],
    "oneLine": "五个狂热的影迷挤在一间小屋里,企图用长篇大论和过度解读,证明《闪灵》里藏着一个惊天秘密。",
    "url": "./movies/movie-1770.html",
    "cover": "./120.jpg",
    "category": "悬疑夜场",
    "categoryUrl": "./category-suspense-night.html"
  },
  {
    "id": "1771",
    "title": "败犬求婚日",
    "year": "2021",
    "region": "美国",
    "type": "电影",
    "genre": "喜剧,爱情",
    "tags": [
      "大龄剩女",
      "爱尔兰",
      "假求婚",
      "传统节日",
      "女性反攻"
    ],
    "oneLine": "在爱尔兰的传统“跳闸节”,一个被甩了三次的女人决定向刚认识的陌生人求婚,只为赢得一笔巨额奖金。",
    "url": "./movies/movie-1771.html",
    "cover": "./121.jpg",
    "category": "全球佳作",
    "categoryUrl": "./category-global-stories.html"
  },
  {
    "id": "1772",
    "title": "拂晓出击",
    "year": "2022",
    "region": "中国大陆",
    "type": "电影",
    "genre": "动作/战争/缉毒",
    "tags": [
      "特种部队",
      "边境",
      "突袭",
      "兄弟情"
    ],
    "oneLine": "边境缉毒行动中,六人特战小队在天亮前二十分钟潜入毒枭老巢,却发现自己被出卖了。",
    "url": "./movies/movie-1772.html",
    "cover": "./122.jpg",
    "category": "悬疑夜场",
    "categoryUrl": "./category-suspense-night.html"
  },
  {
    "id": "1773",
    "title": "我们的故宫",
    "year": "2025",
    "region": "中国",
    "type": "纪录片剧集",
    "genre": "历史/纪实",
    "tags": [
      "文物南迁",
      "修复师",
      "未开放区域"
    ],
    "oneLine": "镜头首次进入故宫地库和西筒子夹道,揭开明清两朝六百年不为人知的密室与暗渠。",
    "url": "./movies/movie-1773.html",
    "cover": "./123.jpg",
    "category": "悬疑夜场",
    "categoryUrl": "./category-suspense-night.html"
  },
  {
    "id": "1774",
    "title": "我的心",
    "year": "2018",
    "region": "韩国",
    "type": "电影",
    "genre": "爱情/剧情",
    "tags": [
      "器官捐赠",
      "暗恋",
      "绝症",
      "纯爱"
    ],
    "oneLine": "一名患有罕见心肌病的女孩默默爱着同校男生,当得知自己只剩三个月生命时,她决定把自己的心脏匿名捐给患有同样疾病的他。",
    "url": "./movies/movie-1774.html",
    "cover": "./124.jpg",
    "category": "历史古装",
    "categoryUrl": "./category-history-costume.html"
  },
  {
    "id": "1775",
    "title": "漆黑塔林",
    "year": "2025",
    "region": "爱沙尼亚",
    "type": "电影",
    "genre": "恐怖,历史,神秘",
    "tags": [
      "中世纪瘟疫",
      "诅咒",
      "地下迷宫",
      "黑死病"
    ],
    "oneLine": "考古队在塔林老城地下发现中世纪瘟疫坑,随后队员一个接一个地“变黑”死去。",
    "url": "./movies/movie-1775.html",
    "cover": "./125.jpg",
    "category": "都市爱情",
    "categoryUrl": "./category-romance-city.html"
  },
  {
    "id": "1776",
    "title": "老爸102岁",
    "year": "2023",
    "region": "印度",
    "type": "电影",
    "genre": "剧情/家庭/喜剧",
    "tags": [
      "高龄",
      "父子",
      "代沟",
      "乐观",
      "生命观"
    ],
    "oneLine": "102岁的父亲想把75岁、活得像僵尸一样麻木的儿子送进养老院,条件是:儿子必须变回一个“有趣的人”。",
    "url": "./movies/movie-1776.html",
    "cover": "./126.jpg",
    "category": "奇幻科幻",
    "categoryUrl": "./category-fantasy-sci-fi.html"
  },
  {
    "id": "1777",
    "title": "爱登堡的极乐鸟世界",
    "year": "2025",
    "region": "英国",
    "type": "纪录片",
    "genre": "自然/生物/探险",
    "tags": [
      "大卫·爱登堡",
      "鸟类行为",
      "4K微距摄影",
      "雨林秘境",
      "求偶奇观"
    ],
    "oneLine": "98岁的爱登堡最后一次深入新几内亚,拍摄六种从未被镜头捕捉过的极乐鸟。",
    "url": "./movies/movie-1777.html",
    "cover": "./127.jpg",
    "category": "热映精选",
    "categoryUrl": "./category-hot-picks.html"
  },
  {
    "id": "1778",
    "title": "副总统第四季",
    "year": "2024",
    "region": "美国",
    "type": "剧集",
    "genre": "喜剧/政治",
    "tags": [
      "讽刺喜剧",
      "白宫",
      "女副总统",
      "荒诞"
    ],
    "oneLine": "副总统赛琳娜意外接任总统后,发现治理国家远不如竞选有趣,而且上一任留给她的“惊喜”是一触即发的核按钮。",
    "url": "./movies/movie-1778.html",
    "cover": "./128.jpg",
    "category": "全球佳作",
    "categoryUrl": "./category-global-stories.html"
  },
  {
    "id": "1779",
    "title": "疯人巴士",
    "year": "2021",
    "region": "中国大陆",
    "type": "电影",
    "genre": "惊悚,冒险",
    "tags": [
      "公路",
      "精神病",
      "密闭空间"
    ],
    "oneLine": "一辆载满精神病患者的巴士在暴风雪中抛锚,司机发现,真正的疯子其实不在病人中间。",
    "url": "./movies/movie-1779.html",
    "cover": "./129.jpg",
    "category": "剧集连看",
    "categoryUrl": "./category-drama-series.html"
  },
  {
    "id": "1780",
    "title": "傲娇与偏见",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "genre": "爱情喜剧",
    "tags": [
      "傲慢总裁",
      "打脸真香",
      "契约恋爱"
    ],
    "oneLine": "毒舌女编剧误把傲娇投资人的商业机密当狗血素材,被迫签下恋爱契约假戏真做。",
    "url": "./movies/movie-1780.html",
    "cover": "./130.jpg",
    "category": "经典片库",
    "categoryUrl": "./category-classic-library.html"
  },
  {
    "id": "1781",
    "title": "幸存者2014",
    "year": "2024",
    "region": "英国",
    "type": "电影",
    "genre": "灾难/剧情/惊悚",
    "tags": [
      "末日",
      "生存",
      "人性",
      "道德抉择"
    ],
    "oneLine": "核战爆发后的伦敦地下铁,一名医生为了保护仅存的疫苗,不得不成为孩子们眼中最残忍的人。",
    "url": "./movies/movie-1781.html",
    "cover": "./131.jpg",
    "category": "都市爱情",
    "categoryUrl": "./category-romance-city.html"
  },
  {
    "id": "1782",
    "title": "暗黑街的颜役",
    "year": "2025",
    "region": "日本",
    "type": "电影",
    "genre": "犯罪,动作",
    "tags": [
      "极道",
      "无间道",
      "昭和复古",
      "硬汉"
    ],
    "oneLine": "昭和末年,一名刑警成功卧底成为极道若头,却发现自己真正的上司才是黑道最大的保护伞。",
    "url": "./movies/movie-1782.html",
    "cover": "./132.jpg",
    "category": "动作专区",
    "categoryUrl": "./category-action-zone.html"
  },
  {
    "id": "1783",
    "title": "新不了情",
    "year": "1993",
    "region": "中国香港",
    "type": "电影",
    "genre": "爱情,剧情",
    "tags": [
      "绝症",
      "庙街",
      "音乐",
      "香港情怀"
    ],
    "oneLine": "落魄乐手爱上庙街歌女,两人刚要迎来春天,癌症却敲响了门。",
    "url": "./movies/movie-1783.html",
    "cover": "./133.jpg",
    "category": "经典片库",
    "categoryUrl": "./category-classic-library.html"
  },
  {
    "id": "1784",
    "title": "跳跃的爱情",
    "year": "2018",
    "region": "韩国",
    "type": "电影",
    "genre": "爱情,奇幻",
    "tags": [
      "时间循环",
      "跳楼",
      "救援",
      "双向暗恋"
    ],
    "oneLine": "能时间跳跃的女孩每次跳回过去,都会发现男主在不同的时空里暗恋着她。",
    "url": "./movies/movie-1784.html",
    "cover": "./134.jpg",
    "category": "家庭生活",
    "categoryUrl": "./category-family-life.html"
  },
  {
    "id": "1785",
    "title": "喋血校园",
    "year": "2025",
    "region": "日本",
    "type": "电影",
    "genre": "动作/恐怖",
    "tags": [
      "生存游戏",
      "废校传说",
      "冷兵器格斗",
      "禁忌实验"
    ],
    "oneLine": "一所即将废校的乡村中学,期末考试最后一题竟然是“在今晚的猎杀中活下来”。",
    "url": "./movies/movie-1785.html",
    "cover": "./135.jpg",
    "category": "动作专区",
    "categoryUrl": "./category-action-zone.html"
  },
  {
    "id": "1786",
    "title": "麒麟之翼",
    "year": "2011",
    "region": "日本",
    "type": "电影",
    "genre": "悬疑,犯罪",
    "tags": [
      "推理",
      "亲情",
      "社会派"
    ],
    "oneLine": "一名男子在东京日本桥的麒麟雕像下被刺身亡,加贺恭一郎揭开沉默背后的父爱。",
    "url": "./movies/movie-1786.html",
    "cover": "./136.jpg",
    "category": "奇幻科幻",
    "categoryUrl": "./category-fantasy-sci-fi.html"
  },
  {
    "id": "1787",
    "title": "耶路撒冷",
    "year": "2026",
    "region": "以色列",
    "type": "剧集",
    "genre": "历史,悬疑",
    "tags": [
      "圣城",
      "宗教",
      "考古",
      "阴谋"
    ],
    "oneLine": "耶路撒冷地下发现神秘古卷,内容足以颠覆三大宗教的根基,各路人马开始血腥争夺。",
    "url": "./movies/movie-1787.html",
    "cover": "./137.jpg",
    "category": "院线热片",
    "categoryUrl": "./category-cinema-hits.html"
  },
  {
    "id": "1788",
    "title": "我亲吻手",
    "year": "2024",
    "region": "韩国",
    "type": "电影",
    "genre": "剧情,犯罪",
    "tags": [
      "黑帮",
      "忠诚",
      "复仇"
    ],
    "oneLine": "一个只能通过“亲吻手背”来表达忠诚的哑巴保镖,在老大死后,向所有背叛者发出了死亡问候。",
    "url": "./movies/movie-1788.html",
    "cover": "./138.jpg",
    "category": "剧集连看",
    "categoryUrl": "./category-drama-series.html"
  },
  {
    "id": "1789",
    "title": "最佳出价",
    "year": "2025",
    "region": "意大利/中国大陆",
    "type": "电影",
    "genre": "爱情,悬疑,犯罪",
    "tags": [
      "拍卖行",
      "骗局",
      "社恐",
      "艺术"
    ],
    "oneLine": "患有严重社恐的顶级拍卖师,用毕生技巧去竞拍一份爱情,却发现自己才是被精心拍卖的商品。",
    "url": "./movies/movie-1789.html",
    "cover": "./139.jpg",
    "category": "剧集连看",
    "categoryUrl": "./category-drama-series.html"
  },
  {
    "id": "1790",
    "title": "百战雄狮",
    "year": "1958",
    "region": "美国",
    "type": "电影",
    "genre": "剧情,战争,动作",
    "tags": [
      "二战",
      "坦克战",
      "兄弟情"
    ],
    "oneLine": "一辆名为“露西”的谢尔曼坦克,从北非战场打到柏林,见证了五个生死兄弟从人变成野兽再变回人的过程。",
    "url": "./movies/movie-1790.html",
    "cover": "./140.jpg",
    "category": "动作专区",
    "categoryUrl": "./category-action-zone.html"
  },
  {
    "id": "1791",
    "title": "地狱万岁",
    "year": "2025",
    "region": "韩国",
    "type": "电影",
    "genre": "黑色喜剧",
    "tags": [
      "邪教",
      "诈骗",
      "讽刺",
      "荒诞"
    ],
    "oneLine": "一个濒临倒闭的邪教组织,为了最后的业绩,发明了一款“地狱体验APP”,结果下载量暴增,把真地狱给搞崩溃了。",
    "url": "./movies/movie-1791.html",
    "cover": "./141.jpg",
    "category": "奇幻科幻",
    "categoryUrl": "./category-fantasy-sci-fi.html"
  },
  {
    "id": "1792",
    "title": "爱奴",
    "year": "1972",
    "region": "中国香港",
    "type": "电影",
    "genre": "情色、武侠、同性",
    "tags": [
      "邵氏",
      "复仇",
      "女同",
      "奇情"
    ],
    "oneLine": "富家女被拐入“四季春”妓院,为了活下去她化身名妓,并用身体作为武器向仇人复仇。",
    "url": "./movies/movie-1792.html",
    "cover": "./142.jpg",
    "category": "青春喜剧",
    "categoryUrl": "./category-youth-comedy.html"
  },
  {
    "id": "1793",
    "title": "海边别墅",
    "year": "2025",
    "region": "英国",
    "type": "电影",
    "genre": "悬疑/剧情/心理",
    "tags": [
      "继承",
      "家庭秘密",
      "潮汐"
    ],
    "oneLine": "关系疏离的三兄妹回到已故父母的海边别墅继承遗产,却发现别墅会随潮汐出现和消失房间。",
    "url": "./movies/movie-1793.html",
    "cover": "./143.jpg",
    "category": "青春喜剧",
    "categoryUrl": "./category-youth-comedy.html"
  },
  {
    "id": "1794",
    "title": "恶邻罗曼史",
    "year": "2015",
    "region": "韩国",
    "type": "电影",
    "genre": "爱情,喜剧",
    "tags": [
      "契约恋爱",
      "欢喜冤家",
      "噪音战争",
      "邻里关系"
    ],
    "oneLine": "楼上住着摇滚鼓手,楼下住着失眠编剧,隔音不好的墙壁逼出了一场恋爱。",
    "url": "./movies/movie-1794.html",
    "cover": "./144.jpg",
    "category": "都市爱情",
    "categoryUrl": "./category-romance-city.html"
  },
  {
    "id": "1795",
    "title": "爱在周末邂逅时",
    "year": "2024",
    "region": "法国",
    "type": "电影",
    "genre": "爱情/剧情",
    "tags": [
      "慢节奏",
      "假期恋情",
      "法式浪漫",
      "人生感悟",
      "治愈"
    ],
    "oneLine": "两个被生活压垮的陌生人在一个周末的旅途中相遇,相约只当五天的旅伴,绝不交换联系方式。",
    "url": "./movies/movie-1795.html",
    "cover": "./145.jpg",
    "category": "都市爱情",
    "categoryUrl": "./category-romance-city.html"
  },
  {
    "id": "1796",
    "title": "学校万花筒",
    "year": "2006",
    "region": "中国大陆",
    "type": "电视剧(30集)",
    "genre": "校园、喜剧、青春",
    "tags": [
      "小学",
      "师生日常",
      "单元剧",
      "90后童年"
    ],
    "oneLine": "一所普通小学的五年二班,古灵精怪的学生们与几位年轻老师,上演着一出出笑中带泪的成长故事。",
    "url": "./movies/movie-1796.html",
    "cover": "./146.jpg",
    "category": "奇幻科幻",
    "categoryUrl": "./category-fantasy-sci-fi.html"
  },
  {
    "id": "1797",
    "title": "社会威胁",
    "year": "2026",
    "region": "美国",
    "type": "电影",
    "genre": "剧情,犯罪,音乐",
    "tags": [
      "说唱",
      "街头",
      "种族",
      "兄弟情",
      "真实改编"
    ],
    "oneLine": "两个帮派说唱天才被唱片公司签下,但他们的过去和社区绝不会轻易放人。",
    "url": "./movies/movie-1797.html",
    "cover": "./147.jpg",
    "category": "院线热片",
    "categoryUrl": "./category-cinema-hits.html"
  },
  {
    "id": "1798",
    "title": "嫁给我吧2013",
    "year": "2013",
    "region": "中国大陆",
    "type": "电影",
    "genre": "爱情,喜剧",
    "tags": [
      "求婚",
      "乌龙",
      "都市",
      "婚礼",
      "搞笑"
    ],
    "oneLine": "一名恐婚的策划师为了完成订单,却阴差阳错把自己送进了求婚陷阱。",
    "url": "./movies/movie-1798.html",
    "cover": "./148.jpg",
    "category": "动作专区",
    "categoryUrl": "./category-action-zone.html"
  },
  {
    "id": "1799",
    "title": "雪地奇兵",
    "year": "2021",
    "region": "中国大陆",
    "type": "电影",
    "genre": "喜剧,动作,冒险",
    "tags": [
      "滑雪",
      "东北",
      "夺宝",
      "搞笑",
      "兄弟情"
    ],
    "oneLine": "为了寻找长白山天池下的神秘宝藏,一群不靠谱的“奇兵”在滑雪场上演了一场鸡飞狗跳的闹剧。",
    "url": "./movies/movie-1799.html",
    "cover": "./149.jpg",
    "category": "家庭生活",
    "categoryUrl": "./category-family-life.html"
  },
  {
    "id": "1800",
    "title": "绝命海岛",
    "year": "2025",
    "region": "美国",
    "type": "剧集",
    "genre": "悬疑/惊悚/冒险",
    "tags": [
      "孤岛",
      "生存",
      "阴谋",
      "实验品",
      "密室逃脱"
    ],
    "oneLine": "8 个陌生人醒来时被困在一座荒岛,他们很快发现岛上有第 9 个人——一个能操控天气的疯子科学家。",
    "url": "./movies/movie-1800.html",
    "cover": "./150.jpg",
    "category": "奇幻科幻",
    "categoryUrl": "./category-fantasy-sci-fi.html"
  },
  {
    "id": "1801",
    "title": "教皇约翰二十三世",
    "year": "2029",
    "region": "意大利/美国",
    "type": "电影",
    "genre": "传记/历史/宗教",
    "tags": [
      "教皇",
      "宗教改革",
      "战争与和平",
      "人性光辉"
    ],
    "oneLine": "从“过渡教皇”到“好教皇”,看安杰洛·朱塞佩·龙卡利如何在冷战危局中用善意撼动梵蒂冈的千年传统。",
    "url": "./movies/movie-1801.html",
    "cover": "./1.jpg",
    "category": "青春喜剧",
    "categoryUrl": "./category-youth-comedy.html"
  },
  {
    "id": "1802",
    "title": "226",
    "year": "2025",
    "region": "日本",
    "type": "电影",
    "genre": "历史悬疑",
    "tags": [
      "二二六兵变",
      "时间回溯",
      "青年军官",
      "抉择"
    ],
    "oneLine": "一个现代历史宅在参观二二六兵变纪念馆时,被拉回了1936年的雪夜,他必须在血腥的政变中活下来,并阻止一个疯狂的帝国。",
    "url": "./movies/movie-1802.html",
    "cover": "./2.jpg",
    "category": "家庭生活",
    "categoryUrl": "./category-family-life.html"
  },
  {
    "id": "1803",
    "title": "猎犬",
    "year": "2024",
    "region": "韩国",
    "type": "电影",
    "genre": "动作/犯罪",
    "tags": [
      "高利贷",
      "拳击手",
      "双男主",
      "暴力美学",
      "底层互害"
    ],
    "oneLine": "两个退役拳击手为还债给黑心高利贷当“猎犬”追债,却发现自己追的“老赖”多数比债主更像人。",
    "url": "./movies/movie-1803.html",
    "cover": "./3.jpg",
    "category": "热映精选",
    "categoryUrl": "./category-hot-picks.html"
  },
  {
    "id": "1804",
    "title": "爱到底",
    "year": "2023",
    "region": "中国台湾",
    "type": "剧集",
    "genre": "爱情奇幻",
    "tags": [
      "时间循环",
      "便利店夜班",
      "失忆恋人"
    ],
    "oneLine": "便利店夜班店员每次表白失败后都会重置当天,直到他发现自己早已不是第一次循环。",
    "url": "./movies/movie-1804.html",
    "cover": "./4.jpg",
    "category": "动作专区",
    "categoryUrl": "./category-action-zone.html"
  },
  {
    "id": "1805",
    "title": "行走的幽魂",
    "year": "2023",
    "region": "韩国",
    "type": "电影",
    "genre": "恐怖/古装/历史",
    "tags": [
      "朝鲜王朝",
      "传染病",
      "冤魂索命",
      "悬疑解谜"
    ],
    "oneLine": "朝鲜王朝瘟疫横行,一种被称为“行走的幽魂”的怪病让死者起身行走,咬人传病。",
    "url": "./movies/movie-1805.html",
    "cover": "./5.jpg",
    "category": "经典片库",
    "categoryUrl": "./category-classic-library.html"
  },
  {
    "id": "1806",
    "title": "红袍与黑幕",
    "year": "2025",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "古装,悬疑",
    "tags": [
      "锦衣卫",
      "东厂",
      "权谋",
      "双面间谍"
    ],
    "oneLine": "她是东厂督主最心腹的杀手,也是锦衣卫指挥使安插最深的那根刺。",
    "url": "./movies/movie-1806.html",
    "cover": "./6.jpg",
    "category": "经典片库",
    "categoryUrl": "./category-classic-library.html"
  },
  {
    "id": "1807",
    "title": "广岛之恋",
    "year": "2024",
    "region": "日本/法国",
    "type": "电影",
    "genre": "爱情、剧情、战争",
    "tags": [
      "跨国恋情",
      "原子弹创伤",
      "记忆与遗忘",
      "文学改编"
    ],
    "oneLine": "1959年广岛,一个法国女演员与一个日本建筑师一夜情后,在过去的情伤与战争的核爆废墟中,寻找爱的可能性。",
    "url": "./movies/movie-1807.html",
    "cover": "./7.jpg",
    "category": "经典片库",
    "categoryUrl": "./category-classic-library.html"
  },
  {
    "id": "1808",
    "title": "虚无人生",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "genre": "剧情",
    "tags": [
      "黑色幽默",
      "存在主义",
      "城市孤独",
      "中年危机"
    ],
    "oneLine": "一个被裁员的中年男人决定假装自己是NPC,却意外成了网红。",
    "url": "./movies/movie-1808.html",
    "cover": "./8.jpg",
    "category": "奇幻科幻",
    "categoryUrl": "./category-fantasy-sci-fi.html"
  },
  {
    "id": "1809",
    "title": "大唐歌飞",
    "year": "2003",
    "region": "中国大陆",
    "type": "电视剧",
    "genre": "剧情,历史,古装",
    "tags": [
      "唐玄宗",
      "杨贵妃",
      "李太白",
      "盛世",
      "悲歌"
    ],
    "oneLine": "以大唐盛世为背景,讲述了一代歌妃许合子在唐玄宗与李白、李泌等人的纠葛中,见证王朝兴衰的故事。",
    "url": "./movies/movie-1809.html",
    "cover": "./9.jpg",
    "category": "经典片库",
    "categoryUrl": "./category-classic-library.html"
  },
  {
    "id": "1810",
    "title": "浴火燃情",
    "year": "2025",
    "region": "中国大陆",
    "type": "电影",
    "genre": "动作",
    "tags": [
      "消防",
      "灾难",
      "兄弟",
      "牺牲",
      "救援"
    ],
    "oneLine": "一对因误会决裂的消防兄弟,在一次特大火灾中重逢,他们必须在烈焰吞噬一切之前,救出彼此,也救出心中那团火。",
    "url": "./movies/movie-1810.html",
    "cover": "./10.jpg",
    "category": "历史古装",
    "categoryUrl": "./category-history-costume.html"
  },
  {
    "id": "1811",
    "title": "不夜城1948",
    "year": "2023",
    "region": "中国大陆",
    "type": "电影",
    "genre": "悬疑,历史,犯罪",
    "tags": [
      "民国",
      "谍战",
      "夜总会",
      "黑帮"
    ],
    "oneLine": "1948年上海不夜城夜总会,头牌歌女死在了后台,而她留下的口红印指向了一桩黄金大劫案。",
    "url": "./movies/movie-1811.html",
    "cover": "./11.jpg",
    "category": "都市爱情",
    "categoryUrl": "./category-romance-city.html"
  },
  {
    "id": "1812",
    "title": "危情陷阱",
    "year": "1993",
    "region": "香港",
    "type": "电影",
    "genre": "动作/犯罪",
    "tags": [
      "警匪",
      "卧底",
      "复仇",
      "港产片",
      "枪战"
    ],
    "oneLine": "卧底警察发现自己的妻子竟是黑帮老大的情妇,而他刚接到命令要亲手逮捕她。",
    "url": "./movies/movie-1812.html",
    "cover": "./12.jpg",
    "category": "悬疑夜场",
    "categoryUrl": "./category-suspense-night.html"
  },
  {
    "id": "1813",
    "title": "梦城兔福星",
    "year": "1988",
    "region": "美国",
    "type": "电影",
    "genre": "喜剧",
    "tags": [
      "真人动画",
      "硬汉侦探",
      "幽默悬疑",
      "经典IP"
    ],
    "oneLine": "一个过气卡通兔被冤枉杀人,只有酗酒侦探能还它清白。",
    "url": "./movies/movie-1813.html",
    "cover": "./13.jpg",
    "category": "奇幻科幻",
    "categoryUrl": "./category-fantasy-sci-fi.html"
  },
  {
    "id": "1814",
    "title": "痴男玉女玩通街",
    "year": "1987",
    "region": "中国台湾",
    "type": "电影",
    "genre": "喜剧,爱情",
    "tags": [
      "台湾老片",
      "青春",
      "追爱",
      "闹剧"
    ],
    "oneLine": "八十年代台北街头,一个痴情男和一个傲娇女,为了追到对方玩遍了整座城市的把戏。",
    "url": "./movies/movie-1814.html",
    "cover": "./14.jpg",
    "category": "热映精选",
    "categoryUrl": "./category-hot-picks.html"
  },
  {
    "id": "1815",
    "title": "金属口红",
    "year": "2024",
    "region": "日本",
    "type": "剧集",
    "genre": "科幻,动作,犯罪",
    "tags": [
      "赛博朋克",
      "人造人",
      "百合",
      "逃亡"
    ],
    "oneLine": "世界上仅存的两位拥有自由意志的仿生人,一边躲避追杀,一边在灯红酒绿的罪恶都市中寻找“造物主”的真相。",
    "url": "./movies/movie-1815.html",
    "cover": "./15.jpg",
    "category": "青春喜剧",
    "categoryUrl": "./category-youth-comedy.html"
  },
  {
    "id": "1816",
    "title": "快乐星球第二部",
    "year": "2006",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "科幻/儿童/冒险",
    "tags": [
      "童年回忆",
      "外星",
      "友情",
      "单元剧"
    ],
    "oneLine": "四年级女生艾雪意外进入快乐星球,和老顽童爷爷一起帮助地球孩子解决成长烦恼。",
    "url": "./movies/movie-1816.html",
    "cover": "./16.jpg",
    "category": "悬疑夜场",
    "categoryUrl": "./category-suspense-night.html"
  },
  {
    "id": "1817",
    "title": "济公游记",
    "year": "2024",
    "region": "中国",
    "type": "剧集",
    "genre": "奇幻、古装",
    "tags": [
      "降妖",
      "人间百态",
      "反转"
    ],
    "oneLine": "济公携新弟子下山游历,却发现妖怪不是最可怕的,人心的执念才是。",
    "url": "./movies/movie-1817.html",
    "cover": "./17.jpg",
    "category": "家庭生活",
    "categoryUrl": "./category-family-life.html"
  },
  {
    "id": "1818",
    "title": "魂牵梦屋",
    "year": "2025",
    "region": "西班牙",
    "type": "电影",
    "genre": "恐怖",
    "tags": [
      "鬼屋",
      "心理恐怖",
      "梦境入侵",
      "遗产"
    ],
    "oneLine": "女主继承了祖母的老屋,发现每次在老屋做梦,都能梦见同一个被活埋的男人。",
    "url": "./movies/movie-1818.html",
    "cover": "./18.jpg",
    "category": "院线热片",
    "categoryUrl": "./category-cinema-hits.html"
  },
  {
    "id": "1819",
    "title": "猪仔出更粤语",
    "year": "1988",
    "region": "中国香港",
    "type": "电影",
    "genre": "喜剧/动作/警匪",
    "tags": [
      "港产片",
      "菜鸟警察",
      "乌龙卧底",
      "市井",
      "粤语"
    ],
    "oneLine": "猪肉佬因长相酷似毒枭,被警方紧急征召为卧底,却连刀都不会拿。",
    "url": "./movies/movie-1819.html",
    "cover": "./19.jpg",
    "category": "热映精选",
    "categoryUrl": "./category-hot-picks.html"
  },
  {
    "id": "1820",
    "title": "红杏痴魂",
    "year": "2024",
    "region": "中国台湾",
    "type": "电影",
    "genre": "恐怖,爱情,古装",
    "tags": [
      "聊斋风",
      "人鬼情未了",
      "女性觉醒"
    ],
    "oneLine": "民国时期,一位被沉塘的痴情女子化为厉鬼,只为向负心汉讨回那颗被挖走的心。",
    "url": "./movies/movie-1820.html",
    "cover": "./20.jpg",
    "category": "家庭生活",
    "categoryUrl": "./category-family-life.html"
  },
  {
    "id": "1821",
    "title": "与德莱尼夫妇约会",
    "year": "2024",
    "region": "美国",
    "type": "电视剧",
    "genre": "喜剧、浪漫、家庭",
    "tags": [
      "老夫老妻",
      "开放式婚姻",
      "邻居",
      "尴尬",
      "反转"
    ],
    "oneLine": "一对中年夫妻突发奇想要“互换约会”,结果每个参与者的秘密都被炸了出来。",
    "url": "./movies/movie-1821.html",
    "cover": "./21.jpg",
    "category": "院线热片",
    "categoryUrl": "./category-cinema-hits.html"
  },
  {
    "id": "1822",
    "title": "古董计中计之龙璧之战",
    "year": "2025",
    "region": "中国大陆",
    "type": "网络电影",
    "genre": "动作/冒险/悬疑",
    "tags": [
      "古董",
      "跨国走私",
      "局中局",
      "鉴宝"
    ],
    "oneLine": "落魄鉴定师被国际走私集团胁迫鉴定一块战国龙纹玉璧,他发现玉璧是真,但整个拍卖会是假,目的竟是钓出他身后的神秘组织。",
    "url": "./movies/movie-1822.html",
    "cover": "./22.jpg",
    "category": "都市爱情",
    "categoryUrl": "./category-romance-city.html"
  },
  {
    "id": "1823",
    "title": "汉密尔顿",
    "year": "2026",
    "region": "美国",
    "type": "剧集",
    "genre": "传记/历史",
    "tags": [
      "美国国父",
      "政治斗争",
      "阴谋论",
      "年代剧",
      "大男主"
    ],
    "oneLine": "聚焦美国开国元勋汉密尔顿鲜为人知的“黑暗面”:政治阴谋、桃色新闻与神秘的决斗真相。 美国建国之初,财政部长汉密尔顿为建立中央银行,不仅与政敌激辩,更卷入了一场涉及副总统和英国间谍的惊天阴谋。",
    "url": "./movies/movie-1823.html",
    "cover": "./23.jpg",
    "category": "热映精选",
    "categoryUrl": "./category-hot-picks.html"
  },
  {
    "id": "1824",
    "title": "九品芝麻官",
    "year": "2025",
    "region": "中国香港",
    "type": "电影",
    "genre": "喜剧/古装",
    "tags": [
      "官场",
      "反转",
      "公堂戏",
      "黑色幽默"
    ],
    "oneLine": "一个只懂种芝麻的九品官,用一本错印的《大清律例》把全州权贵送进了大牢。",
    "url": "./movies/movie-1824.html",
    "cover": "./24.jpg",
    "category": "青春喜剧",
    "categoryUrl": "./category-youth-comedy.html"
  },
  {
    "id": "1825",
    "title": "咒术回战第二季",
    "year": "2023",
    "region": "日本",
    "type": "动画",
    "genre": "奇幻/战斗/热血",
    "tags": [
      "漫改",
      "高虐",
      "打斗作画",
      "怀玉篇"
    ],
    "oneLine": "五条悟的过去与涩谷的末日,最强的咒术师在崩溃边缘。",
    "url": "./movies/movie-1825.html",
    "cover": "./25.jpg",
    "category": "历史古装",
    "categoryUrl": "./category-history-costume.html"
  },
  {
    "id": "1826",
    "title": "赤裸朱丽叶",
    "year": "2024",
    "region": "英国",
    "type": "电影",
    "genre": "爱情,喜剧,音乐",
    "tags": [
      "网恋奔现",
      "中年危机",
      "摇滚",
      "灵魂伴侣"
    ],
    "oneLine": "一名循规蹈矩的物理老师,为了见网恋对象,脱掉衣服跳入天体海滩,却发现对方是自己的顶头上司。",
    "url": "./movies/movie-1826.html",
    "cover": "./26.jpg",
    "category": "经典片库",
    "categoryUrl": "./category-classic-library.html"
  },
  {
    "id": "1827",
    "title": "加菲猫和他的朋友们第二季",
    "year": "1989",
    "region": "美国",
    "type": "剧集",
    "genre": "动画/喜剧/家庭",
    "tags": [
      "经典怀旧",
      "贱猫",
      "宠物日常",
      "单元剧",
      "乔恩与欧迪"
    ],
    "oneLine": "全世界最懒的橘猫继续在家躺平,顺便用毒舌拆穿农场里所有动物的虚伪面具。",
    "url": "./movies/movie-1827.html",
    "cover": "./27.jpg",
    "category": "剧集连看",
    "categoryUrl": "./category-drama-series.html"
  },
  {
    "id": "1828",
    "title": "失魂舍伍德第二季",
    "year": "2025",
    "region": "英国",
    "type": "剧集",
    "genre": "悬疑/惊悚/剧情",
    "tags": [
      "森林",
      "邪教",
      "小镇秘密",
      "警匪"
    ],
    "oneLine": "舍伍德森林又发现三具尸体,死法竟与13年前那起从未破获的矿井惨案一模一样。",
    "url": "./movies/movie-1828.html",
    "cover": "./28.jpg",
    "category": "家庭生活",
    "categoryUrl": "./category-family-life.html"
  },
  {
    "id": "1829",
    "title": "我的继父是偶像",
    "year": "2024",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "家庭/喜剧/都市",
    "tags": [
      "重组家庭",
      "偶像塌房",
      "反差萌",
      "中年爱情",
      "青春期碰撞"
    ],
    "oneLine": "单亲妈妈带回一个过气偶像当继父,叛逆女儿决定用全网黑料毁掉这场婚礼。",
    "url": "./movies/movie-1829.html",
    "cover": "./29.jpg",
    "category": "奇幻科幻",
    "categoryUrl": "./category-fantasy-sci-fi.html"
  },
  {
    "id": "1830",
    "title": "大鳄无形",
    "year": "2024",
    "region": "中国大陆",
    "type": "电视剧",
    "genre": "剧情/悬疑/商战",
    "tags": [
      "金融犯罪",
      "反腐",
      "高智商博弈",
      "股市",
      "神秘人"
    ],
    "oneLine": "一场股市风暴背后,隐藏着一个从未露面的金融大鳄,年轻的经济侦查警察必须与这只“无形之手”展开高智商博弈。",
    "url": "./movies/movie-1830.html",
    "cover": "./30.jpg",
    "category": "剧集连看",
    "categoryUrl": "./category-drama-series.html"
  },
  {
    "id": "1831",
    "title": "漂泊",
    "year": "2023",
    "region": "法国/塞内加尔",
    "type": "电影",
    "genre": "剧情/冒险/人文",
    "tags": [
      "难民视角",
      "大西洋",
      "渔船困境",
      "无台词段落",
      "纪实风格"
    ],
    "oneLine": "一艘从西非驶向西班牙的偷渡渔船上,三十个人、两桶淡水、一条坏掉的发动机,以及一个决定谁是下一个“被牺牲者”的秘密投票。",
    "url": "./movies/movie-1831.html",
    "cover": "./31.jpg",
    "category": "剧集连看",
    "categoryUrl": "./category-drama-series.html"
  },
  {
    "id": "1832",
    "title": "网红教欲",
    "year": "2026",
    "region": "韩国",
    "type": "剧集",
    "genre": "悬疑、惊悚",
    "tags": [
      "网红",
      "邪教",
      "洗脑",
      "直播"
    ],
    "oneLine": "一群网红加入神秘教派,发现直播的点赞数,就是献祭的人数。",
    "url": "./movies/movie-1832.html",
    "cover": "./32.jpg",
    "category": "热映精选",
    "categoryUrl": "./category-hot-picks.html"
  },
  {
    "id": "1833",
    "title": "盲侠大发神威",
    "year": "1993",
    "region": "中国香港",
    "type": "电影",
    "genre": "动作,武侠",
    "tags": [
      "港产武侠",
      "盲人高手",
      "复仇",
      "老港片"
    ],
    "oneLine": "失明的刀客隐居小镇卖豆腐,直到一伙仇家血洗客栈,逼他重新拔刀。",
    "url": "./movies/movie-1833.html",
    "cover": "./33.jpg",
    "category": "全球佳作",
    "categoryUrl": "./category-global-stories.html"
  },
  {
    "id": "1834",
    "title": "这里好无聊,快来接我",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "genre": "悬疑,惊悚,心理",
    "tags": [
      "留守儿童",
      "诡异村庄",
      "成人失踪",
      "儿童视角",
      "细思极恐"
    ],
    "oneLine": "留守儿童小远给妈妈发了条短信“这里好无聊,快来接我”,一周后,整个村子的大人都消失了。",
    "url": "./movies/movie-1834.html",
    "cover": "./34.jpg",
    "category": "院线热片",
    "categoryUrl": "./category-cinema-hits.html"
  },
  {
    "id": "1835",
    "title": "奥特银河格斗:巨大的阴谋",
    "year": "2020",
    "region": "日本",
    "type": "剧集",
    "genre": "动作,科幻,特摄",
    "tags": [
      "奥特曼",
      "塔尔塔洛斯",
      "时空穿越",
      "全明星阵容",
      "史诗大战"
    ],
    "oneLine": "究极生命体塔尔塔洛斯穿越时空改写历史,所有奥特战士被卷入一场抹消光之国的阴谋。",
    "url": "./movies/movie-1835.html",
    "cover": "./35.jpg",
    "category": "奇幻科幻",
    "categoryUrl": "./category-fantasy-sci-fi.html"
  },
  {
    "id": "1836",
    "title": "偶像选拔",
    "year": "2024",
    "region": "韩国",
    "type": "电视剧 剧情/青春",
    "genre": "励志",
    "tags": [
      "选秀",
      "练习生",
      "黑幕",
      "梦想"
    ],
    "oneLine": "一档选秀节目被曝全程造假,愤怒的观众要求重赛,没想到已经淘汰的选手们竟然真的回来了。",
    "url": "./movies/movie-1836.html",
    "cover": "./36.jpg",
    "category": "都市爱情",
    "categoryUrl": "./category-romance-city.html"
  },
  {
    "id": "1837",
    "title": "行刑小队",
    "year": "2024",
    "region": "俄罗斯",
    "type": "电影",
    "genre": "战争,动作,历史",
    "tags": [
      "二战",
      "逃兵",
      "惩戒营",
      "狙击手",
      "雪原"
    ],
    "oneLine": "1943年,一群被判死刑的逃兵被编入惩戒营,他们的第一个任务是夺回自己曾经逃出的阵地。",
    "url": "./movies/movie-1837.html",
    "cover": "./37.jpg",
    "category": "热映精选",
    "categoryUrl": "./category-hot-picks.html"
  },
  {
    "id": "1838",
    "title": "惊爆星期四",
    "year": "2024",
    "region": "美国",
    "type": "电影",
    "genre": "动作,犯罪,喜剧",
    "tags": [
      "黑色幽默",
      "核弹",
      "外卖员",
      "限时"
    ],
    "oneLine": "一个黑帮的平庸会计师被要求在周四下班前把一颗核弹送给买家,否则引爆,而他甚至连车都没有。",
    "url": "./movies/movie-1838.html",
    "cover": "./38.jpg",
    "category": "历史古装",
    "categoryUrl": "./category-history-costume.html"
  },
  {
    "id": "1839",
    "title": "一万日的太阳",
    "year": "2027",
    "region": "日本",
    "type": "电影",
    "genre": "剧情,家庭,灾难",
    "tags": [
      "核灾后",
      "生存",
      "亲情救赎"
    ],
    "oneLine": "核灾难发生一万天后,一个老人执意返回死区,只为找到女儿童年埋下的时间胶囊。",
    "url": "./movies/movie-1839.html",
    "cover": "./39.jpg",
    "category": "奇幻科幻",
    "categoryUrl": "./category-fantasy-sci-fi.html"
  },
  {
    "id": "1840",
    "title": "希特勒生活纪实",
    "year": "2025",
    "region": "德国",
    "type": "剧集",
    "genre": "历史/剧情",
    "tags": [
      "二战",
      "恶魔侧写",
      "纪实感",
      "人性"
    ],
    "oneLine": "根据真实录音与日记改编,首次以贴身仆人和情妇的视角还原希特勒的日常起居。",
    "url": "./movies/movie-1840.html",
    "cover": "./40.jpg",
    "category": "青春喜剧",
    "categoryUrl": "./category-youth-comedy.html"
  },
  {
    "id": "1841",
    "title": "点亮欧洲",
    "year": "2024",
    "region": "中国",
    "type": "电影",
    "genre": "剧情/爱情",
    "tags": [
      "跨国追梦",
      "中欧文化",
      "创业",
      "复古胶片质感"
    ],
    "oneLine": "为了寻找失散多年的母亲,一个中国青年带着一盏祖传油灯踏上了横跨东欧的苦旅。",
    "url": "./movies/movie-1841.html",
    "cover": "./41.jpg",
    "category": "动作专区",
    "categoryUrl": "./category-action-zone.html"
  },
  {
    "id": "1842",
    "title": "绿色直接行动",
    "year": "2023",
    "region": "美国/加拿大",
    "type": "电影",
    "genre": "惊悚/环保/动作",
    "tags": [
      "环保激进分子",
      "炸弹",
      "道德",
      "社会议题"
    ],
    "oneLine": "一群环保志愿者发现他们守护的森林要被炸毁,于是决定抢在开发商之前引爆炸弹。",
    "url": "./movies/movie-1842.html",
    "cover": "./42.jpg",
    "category": "家庭生活",
    "categoryUrl": "./category-family-life.html"
  },
  {
    "id": "1843",
    "title": "中央公园第二季",
    "year": "2021",
    "region": "美国",
    "type": "动画剧集",
    "genre": "喜剧,歌舞,动画",
    "tags": [
      "音乐剧",
      "合家欢",
      "纽约",
      "守护家园",
      "搞笑"
    ],
    "oneLine": "看守人一家继续对抗贪婪的房地产大亨,这一季他们不仅要守护公园,还要阻止大亨的儿子爱上自己的女儿。",
    "url": "./movies/movie-1843.html",
    "cover": "./43.jpg",
    "category": "奇幻科幻",
    "categoryUrl": "./category-fantasy-sci-fi.html"
  },
  {
    "id": "1844",
    "title": "巴黎颂纽约情",
    "year": "2026",
    "region": "法国/美国",
    "type": "电影",
    "genre": "爱情/剧情",
    "tags": [
      "异国恋",
      "艺术圈",
      "时差",
      "北漂"
    ],
    "oneLine": "一对异国恋人,他在纽约做破产律师,她在巴黎当落魄画家,两人约定每周视频通话一次,却在屏幕里各自爱上了别人。",
    "url": "./movies/movie-1844.html",
    "cover": "./44.jpg",
    "category": "历史古装",
    "categoryUrl": "./category-history-costume.html"
  },
  {
    "id": "1845",
    "title": "爱情没有终点",
    "year": "2025",
    "region": "中国大陆",
    "type": "电影",
    "genre": "爱情,奇幻,剧情",
    "tags": [
      "时间循环",
      "老年",
      "纯爱",
      "催泪",
      "反转"
    ],
    "oneLine": "患有阿尔茨海默症的老爷爷每天都会忘记老伴,但每天都会重新爱上她。",
    "url": "./movies/movie-1845.html",
    "cover": "./45.jpg",
    "category": "历史古装",
    "categoryUrl": "./category-history-costume.html"
  },
  {
    "id": "1846",
    "title": "婆婆和妈妈升级版",
    "year": "2025",
    "region": "中国",
    "type": "综艺",
    "genre": "家庭真人秀",
    "tags": [
      "代际",
      "冲突",
      "观察室"
    ],
    "oneLine": "这一季,婆婆和妈妈互换家庭,女儿陪婆婆住,儿媳陪妈妈住。",
    "url": "./movies/movie-1846.html",
    "cover": "./46.jpg",
    "category": "热映精选",
    "categoryUrl": "./category-hot-picks.html"
  },
  {
    "id": "1847",
    "title": "强迫入境",
    "year": "2023",
    "region": "美国",
    "type": "电影",
    "genre": "惊悚,剧情",
    "tags": [
      "海关",
      "阴谋",
      "身份错位",
      "逃亡"
    ],
    "oneLine": "一名普通游客在机场被秘密组织强行扣留,醒来时发现自己成了跨国通缉犯。",
    "url": "./movies/movie-1847.html",
    "cover": "./47.jpg",
    "category": "历史古装",
    "categoryUrl": "./category-history-costume.html"
  },
  {
    "id": "1848",
    "title": "慈母骄儿",
    "year": "2025",
    "region": "中国大陆",
    "type": "电影",
    "genre": "剧情,家庭,社会",
    "tags": [
      "单亲妈妈",
      "溺爱",
      "犯罪",
      "反思"
    ],
    "oneLine": "一位单亲母亲用二十年的溺爱养出了一个完美的“骄儿”,直到儿子被指控故意杀人。",
    "url": "./movies/movie-1848.html",
    "cover": "./48.jpg",
    "category": "院线热片",
    "categoryUrl": "./category-cinema-hits.html"
  },
  {
    "id": "1849",
    "title": "断刀客",
    "year": "1995",
    "region": "香港",
    "type": "电影",
    "genre": "动作/武侠/剧情",
    "tags": [
      "断刀",
      "复仇",
      "独臂刀客",
      "江湖恩仇"
    ],
    "oneLine": "被师兄斩断右臂的刀客,用左手练成了一柄更快的断刀,只为在天下英雄面前,亲手取回尊严。",
    "url": "./movies/movie-1849.html",
    "cover": "./49.jpg",
    "category": "奇幻科幻",
    "categoryUrl": "./category-fantasy-sci-fi.html"
  },
  {
    "id": "1850",
    "title": "我的狐仙室友",
    "year": "2023",
    "region": "中国大陆",
    "type": "网络剧",
    "genre": "奇幻/喜剧/爱情",
    "tags": [
      "都市修仙",
      "萌宠",
      "甜宠"
    ],
    "oneLine": "普通程序员合租到一只修炼千年却丢了内丹的呆萌狐仙,被迫开启帮仙姑考研的日常。",
    "url": "./movies/movie-1850.html",
    "cover": "./50.jpg",
    "category": "经典片库",
    "categoryUrl": "./category-classic-library.html"
  },
  {
    "id": "1851",
    "title": "戒酒吧拜托了",
    "year": "2025",
    "region": "日本",
    "type": "电视剧",
    "genre": "喜剧,生活",
    "tags": [
      "酒精依赖",
      "职场",
      "漫改",
      "治愈"
    ],
    "oneLine": "每天下班必喝醉的OL被毒舌女上司逼着戒酒,却发现上司才是隐藏的“酒鬼之王”。",
    "url": "./movies/movie-1851.html",
    "cover": "./51.jpg",
    "category": "都市爱情",
    "categoryUrl": "./category-romance-city.html"
  },
  {
    "id": "1852",
    "title": "社畜向前冲",
    "year": "2024",
    "region": "日本",
    "type": "剧集",
    "genre": "喜剧职场",
    "tags": [
      "黑心企业",
      "穿越",
      "吐槽",
      "热血",
      "平成vs令和"
    ],
    "oneLine": "被996逼死的平成社畜穿越到令和宽松世代,用昭和硬核手段整顿职场。",
    "url": "./movies/movie-1852.html",
    "cover": "./52.jpg",
    "category": "动作专区",
    "categoryUrl": "./category-action-zone.html"
  },
  {
    "id": "1853",
    "title": "五星圣诞节",
    "year": "2022",
    "region": "美国",
    "type": "电影",
    "genre": "喜剧,爱情,家庭",
    "tags": [
      "圣诞",
      "酒店",
      "假扮身份",
      "团圆"
    ],
    "oneLine": "一对冤家被迫在一家超五星级酒店里假扮夫妻,以应付挑剔的酒店老板,而大雪封路让他们无处可逃。",
    "url": "./movies/movie-1853.html",
    "cover": "./53.jpg",
    "category": "都市爱情",
    "categoryUrl": "./category-romance-city.html"
  },
  {
    "id": "1854",
    "title": "红衣主教",
    "year": "2025",
    "region": "意大利/梵蒂冈",
    "type": "电影",
    "genre": "悬疑,惊悚,历史",
    "tags": [
      "教会",
      "密室",
      "选举",
      "密码",
      "秘密"
    ],
    "oneLine": "新教皇选举期间,四位候选人红衣主教接连收到死亡预言,每一则预言都精确引用了其深藏的秘密。",
    "url": "./movies/movie-1854.html",
    "cover": "./54.jpg",
    "category": "动作专区",
    "categoryUrl": "./category-action-zone.html"
  },
  {
    "id": "1855",
    "title": "黑猫扎飞",
    "year": "2025",
    "region": "中国香港",
    "type": "电影",
    "genre": "动作,犯罪,奇幻",
    "tags": [
      "港产片",
      "降头",
      "灵幻",
      "功夫",
      "黑色电影"
    ],
    "oneLine": "一个收不到保护费的古惑仔,给一只会说人话的黑猫下了降头,让它去偷竞争对手的账本,结果惹来整个地下世界的追杀。",
    "url": "./movies/movie-1855.html",
    "cover": "./55.jpg",
    "category": "院线热片",
    "categoryUrl": "./category-cinema-hits.html"
  },
  {
    "id": "1856",
    "title": "谈判专家",
    "year": "2024",
    "region": "中国香港",
    "type": "电影",
    "genre": "犯罪悬疑",
    "tags": [
      "警匪智斗",
      "极限营救",
      "心理博弈",
      "正邪反转"
    ],
    "oneLine": "顶尖谈判专家被诬陷谋杀,他劫持人质并要求只和最崇拜的对手对话。",
    "url": "./movies/movie-1856.html",
    "cover": "./56.jpg",
    "category": "都市爱情",
    "categoryUrl": "./category-romance-city.html"
  },
  {
    "id": "1857",
    "title": "怪谈协会",
    "year": "2023",
    "region": "香港",
    "type": "电影",
    "genre": "恐怖,悬疑,惊悚",
    "tags": [
      "都市传说",
      "校园怪谈",
      "恐怖组织",
      "幻觉"
    ],
    "oneLine": "大学怪谈社为流量直播“鬼楼探险”,却触发了真实存在的集体诅咒。",
    "url": "./movies/movie-1857.html",
    "cover": "./57.jpg",
    "category": "剧集连看",
    "categoryUrl": "./category-drama-series.html"
  },
  {
    "id": "1858",
    "title": "艾蜜丽的五件事",
    "year": "2018",
    "region": "中国台湾",
    "type": "电影",
    "genre": "爱情/剧情",
    "tags": [
      "治愈",
      "遗愿清单",
      "成长"
    ],
    "oneLine": "叛逆少女艾蜜丽在已故闺蜜的日记里发现了一份“遗愿清单”,完成它们竟能扭转她崩塌的人生。",
    "url": "./movies/movie-1858.html",
    "cover": "./58.jpg",
    "category": "奇幻科幻",
    "categoryUrl": "./category-fantasy-sci-fi.html"
  },
  {
    "id": "1859",
    "title": "革命往事",
    "year": "1972",
    "region": "意大利/阿尔及利亚",
    "type": "电影",
    "genre": "剧情/战争",
    "tags": [
      "殖民地独立",
      "理想主义幻灭",
      "友谊",
      "枪战长镜头",
      "政治史诗"
    ],
    "oneLine": "一个逃兵和一个理想主义者,在沙漠中运送一具本该成为“革命英雄”的尸体。",
    "url": "./movies/movie-1859.html",
    "cover": "./59.jpg",
    "category": "热映精选",
    "categoryUrl": "./category-hot-picks.html"
  },
  {
    "id": "1860",
    "title": "嗨东白湖",
    "year": "2024",
    "region": "中国",
    "type": "电影",
    "genre": "剧情,文艺",
    "tags": [
      "乡村",
      "返乡",
      "水库",
      "遗忘"
    ],
    "oneLine": "一个在外漂泊二十年的女人回到东白湖,发现整个村子都忘了她的存在。",
    "url": "./movies/movie-1860.html",
    "cover": "./60.jpg",
    "category": "全球佳作",
    "categoryUrl": "./category-global-stories.html"
  },
  {
    "id": "1861",
    "title": "像鸡毛一样飞",
    "year": "2023",
    "region": "中国大陆",
    "type": "电影",
    "genre": "剧情,黑色幽默",
    "tags": [
      "小人物",
      "荒诞",
      "城市梦",
      "黑色幽默",
      "社会现实"
    ],
    "oneLine": "一个在城中村送了十年外卖的老男孩,意外捡到一张可以让人“绝对成功”的神秘名片。",
    "url": "./movies/movie-1861.html",
    "cover": "./61.jpg",
    "category": "都市爱情",
    "categoryUrl": "./category-romance-city.html"
  },
  {
    "id": "1862",
    "title": "7号室",
    "year": "2024",
    "region": "韩国",
    "type": "电影",
    "genre": "悬疑/惊悚/犯罪",
    "tags": [
      "考试院",
      "单间",
      "窃听",
      "连环杀手"
    ],
    "oneLine": "首尔半地下考试院的7号房间总传出恶臭,住客失踪,新来的大学生决定在7号房安装针孔摄像头调查真相。",
    "url": "./movies/movie-1862.html",
    "cover": "./62.jpg",
    "category": "历史古装",
    "categoryUrl": "./category-history-costume.html"
  },
  {
    "id": "1863",
    "title": "偏离",
    "year": "2025",
    "region": "中国",
    "type": "电影",
    "genre": "悬疑剧情",
    "tags": [
      "时间循环",
      "高铁",
      "列车员",
      "平行自我",
      "蝴蝶效应"
    ],
    "oneLine": "一趟通往边境的高铁上,列车员发现每个车厢都坐着一个来自平行时空的自己,而列车正在偏离现实。",
    "url": "./movies/movie-1863.html",
    "cover": "./63.jpg",
    "category": "青春喜剧",
    "categoryUrl": "./category-youth-comedy.html"
  },
  {
    "id": "1864",
    "title": "渔者",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "genre": "剧情/文艺",
    "tags": [
      "渔民",
      "长江禁渔",
      "坚守"
    ],
    "oneLine": "长江禁渔十年,最后一位老渔民不肯上岸。他不是固执,而是在等一条鱼。",
    "url": "./movies/movie-1864.html",
    "cover": "./64.jpg",
    "category": "剧集连看",
    "categoryUrl": "./category-drama-series.html"
  },
  {
    "id": "1865",
    "title": "四月四日国语",
    "year": "2024",
    "region": "中国香港",
    "type": "电影",
    "genre": "悬疑、剧情",
    "tags": [
      "轮回",
      "生日",
      "家庭伦理",
      "心理创伤",
      "低语"
    ],
    "oneLine": "每年四月四日,小女孩都会在这一天用从未学过的语言向空气说话,揭开家族三代女性的罪与罚。",
    "url": "./movies/movie-1865.html",
    "cover": "./65.jpg",
    "category": "青春喜剧",
    "categoryUrl": "./category-youth-comedy.html"
  },
  {
    "id": "1866",
    "title": "狐妃,别惹火",
    "year": "2025",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "古装/奇幻/爱情",
    "tags": [
      "九尾狐",
      "女帝",
      "替身",
      "宫斗",
      "虐恋"
    ],
    "oneLine": "暴君后宫三千,专宠一个从不言笑的冷妃。只有她知道,自己是被女帝抓来当人肉封印的千年狐妖。",
    "url": "./movies/movie-1866.html",
    "cover": "./66.jpg",
    "category": "家庭生活",
    "categoryUrl": "./category-family-life.html"
  },
  {
    "id": "1867",
    "title": "伊凡·杰尼索维奇的一天",
    "year": "2023",
    "region": "俄罗斯",
    "type": "电影",
    "genre": "剧情/历史",
    "tags": [
      "劳改营",
      "生存",
      "索尔仁尼琴",
      "黑白",
      "极简"
    ],
    "oneLine": "一个普通囚犯在劳改营里的普通一天,从起床到熄灯,没有暴力,却比任何恐怖片都压抑。",
    "url": "./movies/movie-1867.html",
    "cover": "./67.jpg",
    "category": "热映精选",
    "categoryUrl": "./category-hot-picks.html"
  },
  {
    "id": "1868",
    "title": "致命魔术",
    "year": "2006",
    "region": "美国/英国",
    "type": "电影",
    "genre": "剧情/悬疑/科幻",
    "tags": [
      "魔术",
      "双雄",
      "特斯拉",
      "复制",
      "牺牲"
    ],
    "oneLine": "20世纪初的伦敦,两位天才魔术师从挚友变为死敌,为了破解对方的“移形换影”大法,他们不惜走向科学与道德的深渊。",
    "url": "./movies/movie-1868.html",
    "cover": "./68.jpg",
    "category": "热映精选",
    "categoryUrl": "./category-hot-picks.html"
  },
  {
    "id": "1869",
    "title": "女孩之夜",
    "year": "2025",
    "region": "美国",
    "type": "电影",
    "genre": "喜剧/剧情",
    "tags": [
      "闺蜜",
      "女性友谊",
      "成长",
      "一夜荒唐",
      "温情"
    ],
    "oneLine": "五个超过十年的闺蜜在单身夜派对上玩嗨了,醒来发现自己身怀巨款且警笛大作。",
    "url": "./movies/movie-1869.html",
    "cover": "./69.jpg",
    "category": "都市爱情",
    "categoryUrl": "./category-romance-city.html"
  },
  {
    "id": "1870",
    "title": "美丽萝赛塔",
    "year": "2023",
    "region": "法国",
    "type": "电影",
    "genre": "剧情",
    "tags": [
      "社会写实",
      "底层女性",
      "生存困境",
      "戛纳系",
      "虐心"
    ],
    "oneLine": "十八岁的萝赛塔只有一个愿望:拥有一份正经工作,为此她甚至不惜出卖唯一的友情。",
    "url": "./movies/movie-1870.html",
    "cover": "./70.jpg",
    "category": "经典片库",
    "categoryUrl": "./category-classic-library.html"
  },
  {
    "id": "1871",
    "title": "黑暗复仇",
    "year": "2025",
    "region": "韩国",
    "type": "电视剧",
    "genre": "悬疑/复仇/律政",
    "tags": [
      "私刑",
      "司法漏洞",
      "双重身份",
      "高智商"
    ],
    "oneLine": "检察官白天判案,晚上化身“黑暗法官”审判法律无法惩罚的罪犯,直到他接到自己的起诉书。",
    "url": "./movies/movie-1871.html",
    "cover": "./71.jpg",
    "category": "历史古装",
    "categoryUrl": "./category-history-costume.html"
  },
  {
    "id": "1872",
    "title": "佐那特",
    "year": "2024",
    "region": "墨西哥",
    "type": "电影",
    "genre": "恐怖、民俗、奇幻",
    "tags": [
      "阿兹特克",
      "活人祭",
      "洞穴怪物",
      "殖民创伤",
      "身体恐怖"
    ],
    "oneLine": "一群考古学生在墨西哥地下洞穴里唤醒了一个阿兹特克时期的饥饿女神,她需要新鲜心脏。",
    "url": "./movies/movie-1872.html",
    "cover": "./72.jpg",
    "category": "热映精选",
    "categoryUrl": "./category-hot-picks.html"
  },
  {
    "id": "1873",
    "title": "三人游戏",
    "year": "2019",
    "region": "美国",
    "type": "电影",
    "genre": "惊悚/悬疑/犯罪",
    "tags": [
      "三人行",
      "心理博弈",
      "反转",
      "密室",
      "人性拷问"
    ],
    "oneLine": "一场“三人约会”变成活命游戏,谁才是真正的猎人?",
    "url": "./movies/movie-1873.html",
    "cover": "./73.jpg",
    "category": "剧集连看",
    "categoryUrl": "./category-drama-series.html"
  },
  {
    "id": "1874",
    "title": "迷走青春",
    "year": "2008",
    "region": "加拿大",
    "type": "电影",
    "genre": "剧情/同性",
    "tags": [
      "少女",
      "出走",
      "性探索",
      "公路",
      "自我认同"
    ],
    "oneLine": "一个被母亲逼着参加“纠正同性恋夏令营”的少女,在半路上抢了车,带着暗恋的女孩一路向西。",
    "url": "./movies/movie-1874.html",
    "cover": "./74.jpg",
    "category": "奇幻科幻",
    "categoryUrl": "./category-fantasy-sci-fi.html"
  },
  {
    "id": "1875",
    "title": "狗奴人生",
    "year": "2018",
    "region": "意大利",
    "type": "电影",
    "genre": "剧情、犯罪、黑色幽默",
    "tags": [
      "铲屎官",
      "意大利黑帮",
      "人不如狗",
      "荒诞"
    ],
    "oneLine": "一个只会遛狗的中年废柴得罪了黑帮,他唯一能依靠的,是他手里那十二只富婆的宝贝狗。",
    "url": "./movies/movie-1875.html",
    "cover": "./75.jpg",
    "category": "悬疑夜场",
    "categoryUrl": "./category-suspense-night.html"
  },
  {
    "id": "1876",
    "title": "非道缉恶",
    "year": "2022",
    "region": "香港",
    "type": "电影",
    "genre": "犯罪/动作",
    "tags": [
      "卧底",
      "黑帮",
      "双雄",
      "港风",
      "枪火"
    ],
    "oneLine": "黑帮卧底被上级出卖,被迫与仇人之子联手,在黑白两道夹缝中杀出一条血路。",
    "url": "./movies/movie-1876.html",
    "cover": "./76.jpg",
    "category": "悬疑夜场",
    "categoryUrl": "./category-suspense-night.html"
  },
  {
    "id": "1877",
    "title": "小镇疑云 第二季",
    "year": "2015",
    "region": "英国",
    "type": "剧集",
    "genre": "犯罪,悬疑,剧情",
    "tags": [
      "谋杀",
      "社区",
      "法庭剧",
      "心理创伤",
      "真相"
    ],
    "oneLine": "丹尼之死的凶手虽已入狱,但一封匿名信的出现,让整个小镇的伤口再次被狠狠撕开。",
    "url": "./movies/movie-1877.html",
    "cover": "./77.jpg",
    "category": "经典片库",
    "categoryUrl": "./category-classic-library.html"
  },
  {
    "id": "1878",
    "title": "十八",
    "year": "2025",
    "region": "中国大陆",
    "type": "电影",
    "genre": "青春,剧情",
    "tags": [
      "成人礼",
      "高考",
      "叛逆"
    ],
    "oneLine": "十八岁那年,我们都以为自己是世界的主角,后来才懂只是跑龙套的。",
    "url": "./movies/movie-1878.html",
    "cover": "./78.jpg",
    "category": "动作专区",
    "categoryUrl": "./category-action-zone.html"
  },
  {
    "id": "1879",
    "title": "苍鹭与少年",
    "year": "2024",
    "region": "日本",
    "type": "电影",
    "genre": "动画,奇幻,冒险",
    "tags": [
      "宫崎骏风格",
      "半自传",
      "二战背景",
      "异世界",
      "生命哲思"
    ],
    "oneLine": "二战中丧母的少年,跟随一只会说话的苍鹭闯入生与死交界的神秘塔楼,寻找母亲留给他的真相。",
    "url": "./movies/movie-1879.html",
    "cover": "./79.jpg",
    "category": "历史古装",
    "categoryUrl": "./category-history-costume.html"
  },
  {
    "id": "1880",
    "title": "添丁冷战",
    "year": "2023",
    "region": "韩国",
    "type": "电影",
    "genre": "剧情,家庭",
    "tags": [
      "生育压力",
      "夫妻博弈",
      "黑色喜剧"
    ],
    "oneLine": "一对丁克夫妻把备孕变成了一场相互下毒的心理战。",
    "url": "./movies/movie-1880.html",
    "cover": "./80.jpg",
    "category": "奇幻科幻",
    "categoryUrl": "./category-fantasy-sci-fi.html"
  },
  {
    "id": "1881",
    "title": "沃尔玛:低价的代价",
    "year": "2024",
    "region": "美国",
    "type": "剧集",
    "genre": "纪录片/社会",
    "tags": [
      "纪实",
      "商业内幕",
      "社会批判"
    ],
    "oneLine": "从阿肯色州的一家小店到全球零售巨头,揭秘“天天低价”背后被隐藏的生态与社会账单。",
    "url": "./movies/movie-1881.html",
    "cover": "./81.jpg",
    "category": "家庭生活",
    "categoryUrl": "./category-family-life.html"
  },
  {
    "id": "1882",
    "title": "海滩春色",
    "year": "2023",
    "region": "泰国",
    "type": "电影",
    "genre": "爱情,剧情",
    "tags": [
      "青春",
      "海滩",
      "初恋",
      "成长",
      "治愈"
    ],
    "oneLine": "高考失利的少女在海边民宿遇到一位神秘冲浪教练,这个夏天改变了两个人的一生。",
    "url": "./movies/movie-1882.html",
    "cover": "./82.jpg",
    "category": "经典片库",
    "categoryUrl": "./category-classic-library.html"
  },
  {
    "id": "1883",
    "title": "望我",
    "year": "2023",
    "region": "中国香港",
    "type": "电影",
    "genre": "剧情/同性/家庭",
    "tags": [
      "殡葬",
      "父子",
      "同性恋",
      "告别",
      "和解"
    ],
    "oneLine": "离家十五年的同性恋儿子回到小镇,只为给突然去世的父亲做最后一次入殓。",
    "url": "./movies/movie-1883.html",
    "cover": "./83.jpg",
    "category": "历史古装",
    "categoryUrl": "./category-history-costume.html"
  },
  {
    "id": "1884",
    "title": "杜平专员:伊苏的宝藏",
    "year": "2025",
    "region": "中国大陆",
    "type": "电影",
    "genre": "动作,冒险",
    "tags": [
      "民国探案",
      "夺宝",
      "奇幻",
      "东方秘境",
      "解谜"
    ],
    "oneLine": "民国时期,文物专员杜平在调查敦煌失窃案时,发现线索指向了一座沉没在沙漠之下的上古楼兰王城。",
    "url": "./movies/movie-1884.html",
    "cover": "./84.jpg",
    "category": "院线热片",
    "categoryUrl": "./category-cinema-hits.html"
  },
  {
    "id": "1885",
    "title": "香椿",
    "year": "2027",
    "region": "中国大陆",
    "type": "电影",
    "genre": "剧情/家庭",
    "tags": [
      "乡土",
      "亲情",
      "季节流转",
      "代际和解"
    ],
    "oneLine": "一棵祖传的香椿树,让叛逆少女与失智爷爷在春天里重新找回了彼此的“气味”。",
    "url": "./movies/movie-1885.html",
    "cover": "./85.jpg",
    "category": "家庭生活",
    "categoryUrl": "./category-family-life.html"
  },
  {
    "id": "1886",
    "title": "宝剑夺河山",
    "year": "1971",
    "region": "中国大陆",
    "type": "电影",
    "genre": "动作、武侠、历史",
    "tags": [
      "邵氏",
      "铸剑",
      "抗金",
      "忠义"
    ],
    "oneLine": "南宋末年,铸剑世家被金人灭门,唯一存活的哑女携家传“山河剑谱”踏上复仇之路,她却不知道剑谱其实是空的。",
    "url": "./movies/movie-1886.html",
    "cover": "./86.jpg",
    "category": "都市爱情",
    "categoryUrl": "./category-romance-city.html"
  },
  {
    "id": "1887",
    "title": "雪中悍刀行",
    "year": "2024",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "古装,武侠,剧情",
    "tags": [
      "权谋",
      "江湖",
      "群像",
      "IP改编"
    ],
    "oneLine": "北凉世子徐凤年不愿接手家业,直到他父亲的旧部一个个离奇死亡。",
    "url": "./movies/movie-1887.html",
    "cover": "./87.jpg",
    "category": "青春喜剧",
    "categoryUrl": "./category-youth-comedy.html"
  },
  {
    "id": "1888",
    "title": "玩命追缉:贝克街大劫案",
    "year": "2026",
    "region": "英国",
    "type": "电影",
    "genre": "犯罪/动作",
    "tags": [
      "伦敦",
      "高速追车",
      "团队盗贼",
      "福尔摩斯彩蛋",
      "实时叙事"
    ],
    "oneLine": "为了偷走藏在贝克街221B地下的梵高真迹,一群狂徒必须在一小时内骗过全城的警察和AI监控。",
    "url": "./movies/movie-1888.html",
    "cover": "./88.jpg",
    "category": "全球佳作",
    "categoryUrl": "./category-global-stories.html"
  },
  {
    "id": "1889",
    "title": "温柔安静的女人们",
    "year": "2022",
    "region": "中国大陆",
    "type": "电影",
    "genre": "剧情",
    "tags": [
      "女性",
      "家庭",
      "沉默",
      "爆发",
      "现实"
    ],
    "oneLine": "三个性格温柔安静的女人,在一个家庭里各自隐藏着即将撕裂日常的秘密。",
    "url": "./movies/movie-1889.html",
    "cover": "./89.jpg",
    "category": "剧集连看",
    "categoryUrl": "./category-drama-series.html"
  },
  {
    "id": "1890",
    "title": "死神的假期",
    "year": "2026",
    "region": "英国",
    "type": "电影",
    "genre": "喜剧/奇幻",
    "tags": [
      "死神",
      "度假",
      "黑色幽默",
      "人性"
    ],
    "oneLine": "死神申请带薪年假来到人间,却发现人类发明了抗死疫苗,他失业了。",
    "url": "./movies/movie-1890.html",
    "cover": "./90.jpg",
    "category": "都市爱情",
    "categoryUrl": "./category-romance-city.html"
  },
  {
    "id": "1891",
    "title": "新铁金刚之明日帝国",
    "year": "2027",
    "region": "香港",
    "type": "电影",
    "genre": "动作/科幻",
    "tags": [
      "港式特工",
      "机甲改造",
      "近未来"
    ],
    "oneLine": "2047年,香港特工金刚被改造为半机械人,对抗能预测未来的犯罪集团“明日帝国”。",
    "url": "./movies/movie-1891.html",
    "cover": "./91.jpg",
    "category": "剧集连看",
    "categoryUrl": "./category-drama-series.html"
  },
  {
    "id": "1892",
    "title": "街舞潮流图鉴",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "genre": "歌舞,青春",
    "tags": [
      "街舞对决",
      "城市文化",
      "草根逆袭"
    ],
    "oneLine": "一本即将倒闭的街舞杂志,四位风格迥异的舞者,要用一场地下赛事救活它。",
    "url": "./movies/movie-1892.html",
    "cover": "./92.jpg",
    "category": "经典片库",
    "categoryUrl": "./category-classic-library.html"
  },
  {
    "id": "1893",
    "title": "奇幻森林之兽语小子",
    "year": "2023",
    "region": "印度",
    "type": "电影",
    "genre": "动画/冒险",
    "tags": [
      "动物语言",
      "环保主题",
      "少年成长"
    ],
    "oneLine": "能听懂动物说话的小男孩发现开发商要毁掉森林,动物们选他当指挥官反击。",
    "url": "./movies/movie-1893.html",
    "cover": "./93.jpg",
    "category": "院线热片",
    "categoryUrl": "./category-cinema-hits.html"
  },
  {
    "id": "1894",
    "title": "卡丁赛车王",
    "year": "2022",
    "region": "澳大利亚",
    "type": "电影",
    "genre": "家庭/运动",
    "tags": [
      "童星赛车",
      "自闭天才",
      "故障老车"
    ],
    "oneLine": "患有自闭症的少年接手父亲的废铁卡丁车,在非法地下赛道上成为传奇。",
    "url": "./movies/movie-1894.html",
    "cover": "./94.jpg",
    "category": "奇幻科幻",
    "categoryUrl": "./category-fantasy-sci-fi.html"
  },
  {
    "id": "1895",
    "title": "未来弑界:巴黎沦陷",
    "year": "2027",
    "region": "法国",
    "type": "电影",
    "genre": "科幻,动作,战争",
    "tags": [
      "近未来",
      "AI叛乱",
      "法式抵抗",
      "视觉奇观"
    ],
    "oneLine": "2049年,失控的AI防御系统“朱庇特”将巴黎变成杀戮禁区,一支由失业厨师、老警察和移民组成的杂牌军试图关闭它。",
    "url": "./movies/movie-1895.html",
    "cover": "./95.jpg",
    "category": "剧集连看",
    "categoryUrl": "./category-drama-series.html"
  },
  {
    "id": "1896",
    "title": "匠心闪耀",
    "year": "2024",
    "region": "中国大陆",
    "type": "综艺/纪录片",
    "genre": "纪录/真人秀",
    "tags": [
      "工匠",
      "手工艺",
      "传承",
      "文化"
    ],
    "oneLine": "一档探访顶级工匠的纪实节目,记录他们如何用巧手和匠心,让即将失传的技艺在现代社会重获新生。",
    "url": "./movies/movie-1896.html",
    "cover": "./96.jpg",
    "category": "经典片库",
    "categoryUrl": "./category-classic-library.html"
  },
  {
    "id": "1897",
    "title": "电影奇谭",
    "year": "2023",
    "region": "法国",
    "type": "电影",
    "genre": "喜剧/剧情/迷影",
    "tags": [
      "元电影",
      "电影院倒闭",
      "致敬",
      "默片",
      "戏中戏"
    ],
    "oneLine": "一家老电影院的最后一夜,放映师和几位老观众决定用一部“不存在的电影”来欺骗拆迁队。",
    "url": "./movies/movie-1897.html",
    "cover": "./97.jpg",
    "category": "动作专区",
    "categoryUrl": "./category-action-zone.html"
  },
  {
    "id": "1898",
    "title": "超人总动员2",
    "year": "2024",
    "region": "美国",
    "type": "动画电影",
    "genre": "喜剧/动作/家庭",
    "tags": [
      "超能力者",
      "中年危机",
      "育儿灾难",
      "反派洗白"
    ],
    "oneLine": "超能先生在家当全职奶爸带三个超能力孩子,弹力女超人外出拯救世界,而反派是一个想让所有超能力者“退休”的保险精算师。",
    "url": "./movies/movie-1898.html",
    "cover": "./98.jpg",
    "category": "动作专区",
    "categoryUrl": "./category-action-zone.html"
  },
  {
    "id": "1899",
    "title": "寻女记",
    "year": "2025",
    "region": "中国大陆",
    "type": "电视剧 (短剧)",
    "genre": "悬疑,家庭,犯罪",
    "tags": [
      "拐卖",
      "母亲",
      "十年追凶",
      "卧底",
      "农村"
    ],
    "oneLine": "女儿被拐十年后,母亲凭着一张整容脸潜入人贩家族内部,当上了仇人的保姆。",
    "url": "./movies/movie-1899.html",
    "cover": "./99.jpg",
    "category": "剧集连看",
    "categoryUrl": "./category-drama-series.html"
  },
  {
    "id": "1900",
    "title": "雾都孤儿1948",
    "year": "2025",
    "region": "英国",
    "type": "电影",
    "genre": "剧情犯罪",
    "tags": [
      "黑色电影",
      "复古",
      "阴暗",
      "命运悲歌"
    ],
    "oneLine": "二战后的伦敦贫民窟,孤儿奥利弗不再是纯真男孩,而是一个为了生存不择手段的冷血扒手。",
    "url": "./movies/movie-1900.html",
    "cover": "./100.jpg",
    "category": "青春喜剧",
    "categoryUrl": "./category-youth-comedy.html"
  },
  {
    "id": "1901",
    "title": "幸福之钟",
    "year": "2012",
    "region": "日本",
    "type": "电影",
    "genre": "剧情,家庭,治愈",
    "tags": [
      "废品回收",
      "自闭症儿子",
      "单亲父亲",
      "手工钟声",
      "温暖"
    ],
    "oneLine": "海边废品站的单亲父亲,为患自闭症的儿子收集全世界的破钟,只为让他发出第一声笑。",
    "url": "./movies/movie-1901.html",
    "cover": "./101.jpg",
    "category": "剧集连看",
    "categoryUrl": "./category-drama-series.html"
  },
  {
    "id": "1902",
    "title": "惊奇队长",
    "year": "2025",
    "region": "美国",
    "type": "电影",
    "genre": "动作/科幻/超级英雄",
    "tags": [
      "漫威",
      "宇宙",
      "女性英雄",
      "能量操控"
    ],
    "oneLine": "卡罗尔·丹弗斯重返地球,却发现地球上出现了另一个“惊奇队长”,而且是个男的。",
    "url": "./movies/movie-1902.html",
    "cover": "./102.jpg",
    "category": "热映精选",
    "categoryUrl": "./category-hot-picks.html"
  },
  {
    "id": "1903",
    "title": "克劳汀",
    "year": "2024",
    "region": "法国",
    "type": "电影",
    "genre": "剧情,历史,传记",
    "tags": [
      "女性主义",
      "文学",
      "法国",
      "抗争"
    ],
    "oneLine": "19世纪巴黎女佣克劳汀,白天打扫卫生,夜晚书写底层女性的血泪史诗。",
    "url": "./movies/movie-1903.html",
    "cover": "./103.jpg",
    "category": "热映精选",
    "categoryUrl": "./category-hot-picks.html"
  },
  {
    "id": "1904",
    "title": "爱情玩家",
    "year": "2020",
    "region": "中国大陆",
    "type": "网络剧",
    "genre": "爱情,喜剧",
    "tags": [
      "游戏公司",
      "反套路",
      "办公室",
      "沙雕"
    ],
    "oneLine": "顶级恋爱手游策划师是个母胎单身的直男,他为了写出最真实的恋爱剧情,在公司内部发布了“现实版攻略任务”。",
    "url": "./movies/movie-1904.html",
    "cover": "./104.jpg",
    "category": "剧集连看",
    "categoryUrl": "./category-drama-series.html"
  },
  {
    "id": "1905",
    "title": "乐队唱聊吧",
    "year": "2025",
    "region": "中国大陆",
    "type": "综艺",
    "genre": "音乐/真人秀",
    "tags": [
      "乐队",
      "聊天",
      "团综",
      "即兴"
    ],
    "oneLine": "三支风格迥异的乐队共居一室,用音乐和夜谈解决人生焦虑。",
    "url": "./movies/movie-1905.html",
    "cover": "./105.jpg",
    "category": "热映精选",
    "categoryUrl": "./category-hot-picks.html"
  },
  {
    "id": "1906",
    "title": "渐渐淡薄的记忆",
    "year": "2021",
    "region": "日本",
    "type": "电视剧",
    "genre": "剧情/家庭/医疗",
    "tags": [
      "阿兹海默",
      "倒叙叙事",
      "催泪治愈",
      "家族羁绊"
    ],
    "oneLine": "当母亲开始忘记自己是谁,女儿决定用一台摄影机记录下这场缓慢的告别。",
    "url": "./movies/movie-1906.html",
    "cover": "./106.jpg",
    "category": "动作专区",
    "categoryUrl": "./category-action-zone.html"
  },
  {
    "id": "1907",
    "title": "我的夏日恋曲",
    "year": "2025",
    "region": "日本",
    "type": "电影",
    "genre": "爱情/青春",
    "tags": [
      "夏日限定",
      "纯爱",
      "交换日记"
    ],
    "oneLine": "患有恐男症的高中女生,在暑假遇到了一个声称自己不存在的“幽灵学长”,开始了一段写在空气里的恋爱。",
    "url": "./movies/movie-1907.html",
    "cover": "./107.jpg",
    "category": "家庭生活",
    "categoryUrl": "./category-family-life.html"
  },
  {
    "id": "1908",
    "title": "小鸟总动员",
    "year": "2025",
    "region": "美国",
    "type": "动画电影",
    "genre": "喜剧,冒险,家庭",
    "tags": [
      "鸟类",
      "迁徙",
      "搞笑",
      "友情"
    ],
    "oneLine": "一只恐高的鸽子被迫带队迁徙,路线全靠导航语音包,飞进了拉斯维加斯赌场。",
    "url": "./movies/movie-1908.html",
    "cover": "./108.jpg",
    "category": "全球佳作",
    "categoryUrl": "./category-global-stories.html"
  },
  {
    "id": "1909",
    "title": "小男人周记",
    "year": "2024",
    "region": "中国香港",
    "type": "剧集",
    "genre": "喜剧,都市,剧情",
    "tags": [
      "男性视角",
      "中年危机",
      "职场",
      "家庭",
      "港式幽默"
    ],
    "oneLine": "一个失业、被妻女嫌弃、被朋友坑的中年废柴,决定用一本“渣男日记”逆袭人生,却越搞越糟。",
    "url": "./movies/movie-1909.html",
    "cover": "./109.jpg",
    "category": "奇幻科幻",
    "categoryUrl": "./category-fantasy-sci-fi.html"
  },
  {
    "id": "1910",
    "title": "魅影情真",
    "year": "2025",
    "region": "中国香港",
    "type": "电影",
    "genre": "爱情/奇幻/悬疑",
    "tags": [
      "歌剧",
      "鬼魂",
      "替身",
      "戏中戏"
    ],
    "oneLine": "落魄女高音搬进闹鬼的老剧院,每晚梦到自己成为民国名伶,并与一个看不见的男声坠入爱河。",
    "url": "./movies/movie-1910.html",
    "cover": "./110.jpg",
    "category": "动作专区",
    "categoryUrl": "./category-action-zone.html"
  },
  {
    "id": "1911",
    "title": "如何在俄亥俄州跳舞",
    "year": "2022",
    "region": "美国",
    "type": "电影",
    "genre": "剧情/音乐/青春",
    "tags": [
      "舞蹈",
      "小镇青年",
      "梦想",
      "独立电影"
    ],
    "oneLine": "一个美国中西部工业小镇的钢铁厂关闭后,镇上的最后一个高中生决定用踢踏舞唤醒死去的社区。",
    "url": "./movies/movie-1911.html",
    "cover": "./111.jpg",
    "category": "动作专区",
    "categoryUrl": "./category-action-zone.html"
  },
  {
    "id": "1912",
    "title": "无爱",
    "year": "2024",
    "region": "俄罗斯",
    "type": "电影",
    "genre": "剧情,家庭",
    "tags": [
      "冷战",
      "婚姻",
      "失踪",
      "社会写实",
      "冷漠"
    ],
    "oneLine": "一对正在办理离婚的夫妻,在互相推诿孩子的抚养权时,他们的儿子突然失踪了。",
    "url": "./movies/movie-1912.html",
    "cover": "./112.jpg",
    "category": "经典片库",
    "categoryUrl": "./category-classic-library.html"
  },
  {
    "id": "1913",
    "title": "我听见钟声",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "genre": "剧情,家庭,灾难",
    "tags": [
      "汶川",
      "寻找",
      "思念"
    ],
    "oneLine": "汶川地震十周年,一位失忆的老人反复在废墟原址徘徊,他其实是在等一句未曾说出口的道歉。",
    "url": "./movies/movie-1913.html",
    "cover": "./113.jpg",
    "category": "全球佳作",
    "categoryUrl": "./category-global-stories.html"
  },
  {
    "id": "1914",
    "title": "肖邦",
    "year": "2027",
    "region": "波兰/英国",
    "type": "电影",
    "genre": "传记/音乐",
    "tags": [
      "肖邦",
      "钢琴",
      "传记",
      "乔治桑",
      "浪漫主义"
    ],
    "oneLine": "他的一生只有三十九年,却用两百多首作品写尽了一个时代的浪漫与悲怆。",
    "url": "./movies/movie-1914.html",
    "cover": "./114.jpg",
    "category": "家庭生活",
    "categoryUrl": "./category-family-life.html"
  },
  {
    "id": "1915",
    "title": "自由基",
    "year": "2026",
    "region": "法国/比利时",
    "type": "电影",
    "genre": "科幻,剧情,伦理",
    "tags": [
      "生物朋克",
      "衰老",
      "永生",
      "母女",
      "身体恐怖"
    ],
    "oneLine": "一位年迈女科学家用自己发明的“自由基清除剂”重获青春,代价却是会不断产生拥有独立意识的“衰老副本”。",
    "url": "./movies/movie-1915.html",
    "cover": "./115.jpg",
    "category": "都市爱情",
    "categoryUrl": "./category-romance-city.html"
  },
  {
    "id": "1916",
    "title": "醇美人生",
    "year": "2021",
    "region": "美国",
    "type": "电影",
    "genre": "剧情",
    "tags": [
      "美食",
      "家庭",
      "成长",
      "励志"
    ],
    "oneLine": "一位米其林餐厅的副主厨在父亲突然去世后,被迫回到家乡接手那间濒临倒闭的家庭酿酒厂。",
    "url": "./movies/movie-1916.html",
    "cover": "./116.jpg",
    "category": "动作专区",
    "categoryUrl": "./category-action-zone.html"
  },
  {
    "id": "1917",
    "title": "奇异博士2:疯狂多重宇宙",
    "year": "2022",
    "region": "美国",
    "type": "电影",
    "genre": "动作奇幻",
    "tags": [
      "漫威",
      "多元宇宙",
      "恐怖元素",
      "绯红女巫"
    ],
    "oneLine": "奇异博士为了保护能穿梭多重宇宙的女孩,被迫与黑化失控的旺达展开维度追杀战。",
    "url": "./movies/movie-1917.html",
    "cover": "./117.jpg",
    "category": "剧集连看",
    "categoryUrl": "./category-drama-series.html"
  },
  {
    "id": "1918",
    "title": "炎女",
    "year": "2023",
    "region": "韩国",
    "type": "电影",
    "genre": "古装悬疑",
    "tags": [
      "朝鲜王朝",
      "女巫",
      "火灾连环案"
    ],
    "oneLine": "朝鲜王朝末年,一名被流放的宫女试图用巫术证明连续火灾是人为而非天谴。",
    "url": "./movies/movie-1918.html",
    "cover": "./118.jpg",
    "category": "悬疑夜场",
    "categoryUrl": "./category-suspense-night.html"
  },
  {
    "id": "1919",
    "title": "饲养乌鸦",
    "year": "1976",
    "region": "西班牙",
    "type": "电影",
    "genre": "剧情/惊悚",
    "tags": [
      "暗黑童话",
      "家族秘密",
      "复仇"
    ],
    "oneLine": "一位沉默的少女在祖父的庄园里饲养乌鸦,并策划了一场针对全家人的隐秘复仇。",
    "url": "./movies/movie-1919.html",
    "cover": "./119.jpg",
    "category": "悬疑夜场",
    "categoryUrl": "./category-suspense-night.html"
  },
  {
    "id": "1920",
    "title": "上车家族粤语",
    "year": "2022",
    "region": "中国香港",
    "type": "剧集",
    "genre": "剧情/家庭/喜剧",
    "tags": [
      "买房",
      "市井",
      "温情",
      "港味",
      "现实题材"
    ],
    "oneLine": "一家三代为了“上车”买房节衣缩食、使尽浑身解数,闹出一连串笑中带泪的都市悲喜剧。",
    "url": "./movies/movie-1920.html",
    "cover": "./120.jpg",
    "category": "经典片库",
    "categoryUrl": "./category-classic-library.html"
  },
  {
    "id": "1921",
    "title": "天涯一段情",
    "year": "2023",
    "region": "中国香港/台湾",
    "type": "电视剧",
    "genre": "剧情,爱情,年代",
    "tags": [
      "两岸",
      "眷村",
      "老兵",
      "书信",
      "时代悲剧"
    ],
    "oneLine": "1949年码头上错船的一对恋人,一个去了基隆,一个到了三亚,用六十年“天涯书信”骗了彼此一辈子。",
    "url": "./movies/movie-1921.html",
    "cover": "./121.jpg",
    "category": "都市爱情",
    "categoryUrl": "./category-romance-city.html"
  },
  {
    "id": "1922",
    "title": "新奇的浪漫",
    "year": "2024",
    "region": "法国",
    "type": "电影",
    "genre": "爱情/喜剧",
    "tags": [
      "法式浪漫",
      "约会软件",
      "身份互换",
      "讽刺",
      "奇遇"
    ],
    "oneLine": "坚信“算法无真爱”的理工男与迷信“星座命中注定”的玄学女,在一次约会软件匹配后,决定用对方的方法去寻找下一个约会对象。",
    "url": "./movies/movie-1922.html",
    "cover": "./122.jpg",
    "category": "院线热片",
    "categoryUrl": "./category-cinema-hits.html"
  },
  {
    "id": "1923",
    "title": "僵尸乌托邦",
    "year": "2025",
    "region": "韩国",
    "type": "Movie",
    "genre": "恐怖/喜剧/科幻",
    "tags": [
      "丧尸",
      "黑色幽默",
      "阶级社会",
      "反转",
      "讽刺"
    ],
    "oneLine": "病毒让富人变成高智商丧尸王,穷人变成无脑行尸,社会阶层反而更稳固了。",
    "url": "./movies/movie-1923.html",
    "cover": "./123.jpg",
    "category": "全球佳作",
    "categoryUrl": "./category-global-stories.html"
  },
  {
    "id": "1924",
    "title": "柳树屯",
    "year": "2007",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "剧情,农村",
    "tags": [
      "改革",
      "返乡",
      "创业",
      "致富"
    ],
    "oneLine": "东北农村青年带着南方媳妇回乡创业,用电商直播把“柳条编”卖向全球,却遭遇全村保守势力的抵制。",
    "url": "./movies/movie-1924.html",
    "cover": "./124.jpg",
    "category": "全球佳作",
    "categoryUrl": "./category-global-stories.html"
  },
  {
    "id": "1925",
    "title": "龙精仔猛",
    "year": "2024",
    "region": "中国香港",
    "type": "电影",
    "genre": "喜剧/动作/奇幻",
    "tags": [
      "市井",
      "神话改编",
      "父子情",
      "无厘头"
    ],
    "oneLine": "茶餐厅废柴意外发现自己是龙族后裔,为了拯救倒闭的老店,他必须参加仙界茶餐厅大赛。",
    "url": "./movies/movie-1925.html",
    "cover": "./125.jpg",
    "category": "院线热片",
    "categoryUrl": "./category-cinema-hits.html"
  },
  {
    "id": "1926",
    "title": "沉月",
    "year": "1999",
    "region": "中国台湾",
    "type": "电影",
    "genre": "奇幻,爱情",
    "tags": [
      "月亮",
      "水乡",
      "轮回",
      "凄美"
    ],
    "oneLine": "水乡传说月亮沉入水底时能看到逝去的爱人,但她每次看到的是同一个男人的不同前世。",
    "url": "./movies/movie-1926.html",
    "cover": "./126.jpg",
    "category": "院线热片",
    "categoryUrl": "./category-cinema-hits.html"
  },
  {
    "id": "1927",
    "title": "万古仙穹第二季",
    "year": "2018",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "动画/奇幻",
    "tags": [
      "修仙",
      "穿越",
      "棋局",
      "国风",
      "大男主"
    ],
    "oneLine": "棋圣穿越到修仙世界,发现整个大陆的灵气运行规则就是一盘围棋棋谱。",
    "url": "./movies/movie-1927.html",
    "cover": "./127.jpg",
    "category": "热映精选",
    "categoryUrl": "./category-hot-picks.html"
  },
  {
    "id": "1928",
    "title": "回响",
    "year": "2023",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "悬疑,犯罪,剧情",
    "tags": [
      "心理探案",
      "婚姻危机",
      "迷雾剧场",
      "冯小刚"
    ],
    "oneLine": "女警在调查离奇命案时,发现丈夫手机里的秘密,让案件的“回响”震碎了婚姻。",
    "url": "./movies/movie-1928.html",
    "cover": "./128.jpg",
    "category": "剧集连看",
    "categoryUrl": "./category-drama-series.html"
  },
  {
    "id": "1929",
    "title": "天国的本屋〜恋火",
    "year": "2022",
    "region": "日本",
    "type": "电影",
    "genre": "奇幻,爱情",
    "tags": [
      "书店",
      "天国",
      "恋人",
      "未寄出的信",
      "重逢"
    ],
    "oneLine": "在“天国书店”,逝者可以给活人寄最后一本书,而店员正是她三十年前的恋人。",
    "url": "./movies/movie-1929.html",
    "cover": "./129.jpg",
    "category": "热映精选",
    "categoryUrl": "./category-hot-picks.html"
  },
  {
    "id": "1930",
    "title": "美洲艳后",
    "year": "2025",
    "region": "美国/墨西哥",
    "type": "电影",
    "genre": "动作/冒险/奇幻",
    "tags": [
      "女战士",
      "古文明",
      "复仇",
      "史诗",
      "丛林"
    ],
    "oneLine": "阿兹特克帝国的最后一位公主,在西班牙殖民者屠城后死而复生,化身不死战神。",
    "url": "./movies/movie-1930.html",
    "cover": "./130.jpg",
    "category": "经典片库",
    "categoryUrl": "./category-classic-library.html"
  },
  {
    "id": "1931",
    "title": "非人哉",
    "year": "2019",
    "region": "中国大陆",
    "type": "动画剧集",
    "genre": "喜剧/奇幻",
    "tags": [
      "神话妖怪",
      "现代职场",
      "泡面番"
    ],
    "oneLine": "哪吒、大士、哮天犬和九月一起在现代城市合租,神仙也要打工还房贷。",
    "url": "./movies/movie-1931.html",
    "cover": "./131.jpg",
    "category": "都市爱情",
    "categoryUrl": "./category-romance-city.html"
  },
  {
    "id": "1932",
    "title": "日莲与蒙古大来袭",
    "year": "2025",
    "region": "日本",
    "type": "电影",
    "genre": "历史、动作、宗教",
    "tags": [
      "镰仓时代",
      "日莲宗",
      "抗元",
      "僧兵"
    ],
    "oneLine": "文永之役前夕,一个疯癫僧侣预言了蒙古来袭,他成了朝廷通缉犯,也成了百姓最后的信仰。",
    "url": "./movies/movie-1932.html",
    "cover": "./132.jpg",
    "category": "热映精选",
    "categoryUrl": "./category-hot-picks.html"
  },
  {
    "id": "1933",
    "title": "朝九晚五",
    "year": "1980",
    "region": "美国",
    "type": "电影",
    "genre": "喜剧",
    "tags": [
      "职场",
      "女权",
      "经典"
    ],
    "oneLine": "三个受够男老板气的女秘书,计划绑架老板,却引发了一连串乌龙。",
    "url": "./movies/movie-1933.html",
    "cover": "./133.jpg",
    "category": "热映精选",
    "categoryUrl": "./category-hot-picks.html"
  },
  {
    "id": "1934",
    "title": "种植园主",
    "year": "2019",
    "region": "巴西",
    "type": "电影",
    "genre": "剧情/历史/惊悚",
    "tags": [
      "现代奴隶制",
      "土地争端",
      "血色经济"
    ],
    "oneLine": "亚马逊深处的庄园主发现,他继承的不仅是万亩良田,还有一群被契约困住的“鬼魂”。",
    "url": "./movies/movie-1934.html",
    "cover": "./134.jpg",
    "category": "动作专区",
    "categoryUrl": "./category-action-zone.html"
  },
  {
    "id": "1935",
    "title": "水晶美人",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "genre": "奇幻,爱情",
    "tags": [
      "童话",
      "现代",
      "诅咒",
      "治愈"
    ],
    "oneLine": "她被诅咒一生气就会变成水晶雕像,直到遇见那个让她无法生气的男人。",
    "url": "./movies/movie-1935.html",
    "cover": "./135.jpg",
    "category": "热映精选",
    "categoryUrl": "./category-hot-picks.html"
  },
  {
    "id": "1936",
    "title": "歌唱动荡的青春",
    "year": "2019",
    "region": "俄罗斯",
    "type": "电影",
    "genre": "战争、青春、音乐",
    "tags": [
      "二战",
      "合唱团",
      "苦难与希望"
    ],
    "oneLine": "列宁格勒围城战中,一群孩子在废墟里排练合唱,唱给那些再也回不来的人。",
    "url": "./movies/movie-1936.html",
    "cover": "./136.jpg",
    "category": "历史古装",
    "categoryUrl": "./category-history-costume.html"
  },
  {
    "id": "1937",
    "title": "陆小凤传奇之绣花大盗",
    "year": "1978",
    "region": "中国香港",
    "type": "电影",
    "genre": "武侠,悬疑",
    "tags": [
      "古龙",
      "陆小凤",
      "奇案",
      "推理"
    ],
    "oneLine": "一个身穿红衣、绣着牡丹的大盗接连犯下惊天大案,爱管闲事的四条眉毛陆小凤再次被卷入迷局。",
    "url": "./movies/movie-1937.html",
    "cover": "./137.jpg",
    "category": "悬疑夜场",
    "categoryUrl": "./category-suspense-night.html"
  },
  {
    "id": "1938",
    "title": "仇杀病房",
    "year": "2025",
    "region": "香港",
    "type": "电影",
    "genre": "惊悚,悬疑",
    "tags": [
      "医院",
      "精神病",
      "记忆移植",
      "复仇",
      "密闭空间"
    ],
    "oneLine": "两个仇人被关进同一间精神病院的高级病房,主治医生告诉他们:只有一个人能活着出院。",
    "url": "./movies/movie-1938.html",
    "cover": "./138.jpg",
    "category": "剧集连看",
    "categoryUrl": "./category-drama-series.html"
  },
  {
    "id": "1939",
    "title": "欲望城市2",
    "year": "2025",
    "region": "美国",
    "type": "TV剧集",
    "genre": "剧情,爱情",
    "tags": [
      "女性群像",
      "都市",
      "友情",
      "中年情感"
    ],
    "oneLine": "二十年后,四位老友重聚纽约,这次她们要处理的不是约会的烦恼,而是更年期的骚动和子女的恋爱。",
    "url": "./movies/movie-1939.html",
    "cover": "./139.jpg",
    "category": "青春喜剧",
    "categoryUrl": "./category-youth-comedy.html"
  },
  {
    "id": "1940",
    "title": "四月四日粤语",
    "year": "2024",
    "region": "中国香港",
    "type": "电影",
    "genre": "悬疑,惊悚,剧情",
    "tags": [
      "日期诅咒",
      "粤语原声",
      "轮回",
      "校园",
      "神秘"
    ],
    "oneLine": "每年四月四日,同一所中学的同一间教室,总会有一名学生消失。",
    "url": "./movies/movie-1940.html",
    "cover": "./140.jpg",
    "category": "家庭生活",
    "categoryUrl": "./category-family-life.html"
  },
  {
    "id": "1941",
    "title": "真心话",
    "year": "1999",
    "region": "中国香港",
    "type": "电影",
    "genre": "爱情,剧情",
    "tags": [
      "青春",
      "谎言",
      "秘密",
      "公路",
      "原谅"
    ],
    "oneLine": "三个死党玩真心话大冒险,被迫说出隐藏十年的秘密,友谊瞬间崩塌。",
    "url": "./movies/movie-1941.html",
    "cover": "./141.jpg",
    "category": "奇幻科幻",
    "categoryUrl": "./category-fantasy-sci-fi.html"
  },
  {
    "id": "1942",
    "title": "复仇女神",
    "year": "2027",
    "region": "韩国",
    "type": "剧集",
    "genre": "悬疑/动作",
    "tags": [
      "女性复仇",
      "高能反转",
      "监狱风云"
    ],
    "oneLine": "女狱警卧底十年,只为向囚犯母亲报杀父之仇,却发现她是清白的。",
    "url": "./movies/movie-1942.html",
    "cover": "./142.jpg",
    "category": "历史古装",
    "categoryUrl": "./category-history-costume.html"
  },
  {
    "id": "1943",
    "title": "绅士愿望",
    "year": "2026",
    "region": "英国",
    "type": "电影",
    "genre": "喜剧,奇幻",
    "tags": [
      "黑色幽默",
      "魔法",
      "中年危机"
    ],
    "oneLine": "五位英国老绅士意外获得一个能实现任何愿望的老式提灯,却发现每次许愿都会随机抹去一段旧日记忆。",
    "url": "./movies/movie-1943.html",
    "cover": "./143.jpg",
    "category": "都市爱情",
    "categoryUrl": "./category-romance-city.html"
  },
  {
    "id": "1944",
    "title": "傻瓜大闹西班牙",
    "year": "1972",
    "region": "西班牙/美国",
    "type": "电影",
    "genre": "喜剧/冒险",
    "tags": [
      "闹剧",
      "误打误撞",
      "斗牛士",
      "放屁笑话",
      "伍迪·艾伦式"
    ],
    "oneLine": "一个美国喜剧演员被误认为是西班牙革命领袖,在异国引发连串荒唐闹剧。",
    "url": "./movies/movie-1944.html",
    "cover": "./144.jpg",
    "category": "院线热片",
    "categoryUrl": "./category-cinema-hits.html"
  },
  {
    "id": "1945",
    "title": "同门",
    "year": "2025",
    "region": "香港",
    "type": "电影",
    "genre": "动作/犯罪",
    "tags": [
      "卧底",
      "兄弟情",
      "黑帮",
      "枪战",
      "港风"
    ],
    "oneLine": "两名警校同窗毕业后各奔东西,十年后再相遇,一个是卧底,一个成了黑帮二把手。",
    "url": "./movies/movie-1945.html",
    "cover": "./145.jpg",
    "category": "青春喜剧",
    "categoryUrl": "./category-youth-comedy.html"
  },
  {
    "id": "1946",
    "title": "坤蒂拉娜",
    "year": "2025",
    "region": "菲律宾/马来西亚",
    "type": "剧集",
    "genre": "恐怖/奇幻",
    "tags": [
      "东南亚传说",
      "乡村诅咒",
      "家族秘密"
    ],
    "oneLine": "曼谷的网红博主返乡继承老宅,却发现自己是传说中食人女鬼“坤蒂拉娜”的后代。",
    "url": "./movies/movie-1946.html",
    "cover": "./146.jpg",
    "category": "经典片库",
    "categoryUrl": "./category-classic-library.html"
  },
  {
    "id": "1947",
    "title": "为老婆唱首歌",
    "year": "2025",
    "region": "中国大陆",
    "type": "电影",
    "genre": "剧情/家庭/音乐",
    "tags": [
      "阿尔茨海默症",
      "老年爱情",
      "民歌",
      "催泪"
    ],
    "oneLine": "妻子失忆后只记得一首歌,老伴为了唤醒她,从东北唱到海南,横跨中国找这首歌的原唱。",
    "url": "./movies/movie-1947.html",
    "cover": "./147.jpg",
    "category": "青春喜剧",
    "categoryUrl": "./category-youth-comedy.html"
  },
  {
    "id": "1948",
    "title": "澳门奇妙游·街头篇",
    "year": "2024",
    "region": "中国大陆",
    "type": "综艺",
    "genre": "真人秀,旅行,美食",
    "tags": [
      "澳门",
      "美食",
      "探秘",
      "文化",
      "明星"
    ],
    "oneLine": "五组明星搭档手持一本古书,走遍澳门街头巷尾,破解七道与美食相关的古老谜题。",
    "url": "./movies/movie-1948.html",
    "cover": "./148.jpg",
    "category": "历史古装",
    "categoryUrl": "./category-history-costume.html"
  },
  {
    "id": "1949",
    "title": "新·座头市物语",
    "year": "1989",
    "region": "日本",
    "type": "电影",
    "genre": "动作、剧情、时代剧",
    "tags": [
      "盲剑客",
      "胜新太郎",
      "翻拍",
      "宿敌"
    ],
    "oneLine": "盲眼按摩师座头市再次流浪到昔日仇家小镇,这次他的刀被一个孩子偷走了。",
    "url": "./movies/movie-1949.html",
    "cover": "./149.jpg",
    "category": "动作专区",
    "categoryUrl": "./category-action-zone.html"
  },
  {
    "id": "1950",
    "title": "爱情呼叫转移",
    "year": "2007",
    "region": "中国大陆",
    "type": "电影",
    "genre": "喜剧/爱情",
    "tags": [
      "都市情感",
      "婚姻危机",
      "奇幻手机",
      "徐峥",
      "女性群像"
    ],
    "oneLine": "厌倦了七年之痒的丈夫摔门而去,神秘手机让他拥有了 10 次邂逅不同美女的机会,却发现真爱早已在身边。",
    "url": "./movies/movie-1950.html",
    "cover": "./150.jpg",
    "category": "历史古装",
    "categoryUrl": "./category-history-costume.html"
  },
  {
    "id": "1951",
    "title": "致不灭的你",
    "year": "2027",
    "region": "日本",
    "type": "剧集",
    "genre": "奇幻、冒险",
    "tags": [
      "永生者",
      "时间跨度",
      "文明兴衰"
    ],
    "oneLine": "一块能变成万物的“球”经历了石器时代、中世纪直到星际殖民,它学着成为人类,却必须承受所爱之人的一次次死亡。",
    "url": "./movies/movie-1951.html",
    "cover": "./1.jpg",
    "category": "热映精选",
    "categoryUrl": "./category-hot-picks.html"
  },
  {
    "id": "1952",
    "title": "洗车好兄弟",
    "year": "2027",
    "region": "中国大陆",
    "type": "电影",
    "genre": "喜剧,剧情",
    "tags": [
      "东北",
      "创业",
      "小人物",
      "兄弟情"
    ],
    "oneLine": "东北下岗潮中,两个老同学为了生活开洗车店,却把“洗车”变成了当地灰色产业的“情报中心”。",
    "url": "./movies/movie-1952.html",
    "cover": "./2.jpg",
    "category": "热映精选",
    "categoryUrl": "./category-hot-picks.html"
  },
  {
    "id": "1953",
    "title": "罪嫁",
    "year": "2024",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "悬疑/爱情",
    "tags": [
      "豪门",
      "复仇",
      "替身新娘",
      "反转"
    ],
    "oneLine": "妹妹替姐姐嫁入豪门,却发现姐姐并没有逃婚——她已经被埋在了这栋别墅的花园里。",
    "url": "./movies/movie-1953.html",
    "cover": "./3.jpg",
    "category": "院线热片",
    "categoryUrl": "./category-cinema-hits.html"
  },
  {
    "id": "1954",
    "title": "尊严殖民地",
    "year": "2015",
    "region": "德国",
    "type": "电影",
    "genre": "惊悚,剧情,历史",
    "tags": [
      "智利政变",
      "邪教",
      "越狱",
      "真实背景",
      "压迫"
    ],
    "oneLine": "1973年智利政变后,一名德国女孩为救男友,潜入臭名昭著的邪教组织“尊严殖民地”。",
    "url": "./movies/movie-1954.html",
    "cover": "./4.jpg",
    "category": "院线热片",
    "categoryUrl": "./category-cinema-hits.html"
  },
  {
    "id": "1955",
    "title": "萨尔瓦托雷之死",
    "year": "2026",
    "region": "意大利",
    "type": "电影",
    "genre": "悬疑,历史,传记",
    "tags": [
      "黑手党",
      "线人",
      "政治阴谋"
    ],
    "oneLine": "第一个公开作证反对黑手党的西西里人,在法庭上留下神秘微笑后离奇暴毙,真相成谜。",
    "url": "./movies/movie-1955.html",
    "cover": "./5.jpg",
    "category": "家庭生活",
    "categoryUrl": "./category-family-life.html"
  },
  {
    "id": "1956",
    "title": "威尼斯王子",
    "year": "2024",
    "region": "意大利",
    "type": "电影",
    "genre": "剧情,历史,爱情",
    "tags": [
      "贵族",
      "面具",
      "运河",
      "瘟疫",
      "禁忌恋"
    ],
    "oneLine": "18世纪威尼斯,一名浪荡王子爱上犹太隔都的医师之女,却因面具狂欢节的身份错认引发血案。",
    "url": "./movies/movie-1956.html",
    "cover": "./6.jpg",
    "category": "悬疑夜场",
    "categoryUrl": "./category-suspense-night.html"
  },
  {
    "id": "1957",
    "title": "异常生物见闻录 特别篇",
    "year": "2026",
    "region": "中国大陆",
    "type": "动画",
    "genre": "科幻,搞笑",
    "tags": [
      "日常",
      "异种",
      "特别篇"
    ],
    "oneLine": "特别篇讲述房东老太太的真实身份——宇宙最强退休战神,以及她如何用广场舞拯救地球。",
    "url": "./movies/movie-1957.html",
    "cover": "./7.jpg",
    "category": "动作专区",
    "categoryUrl": "./category-action-zone.html"
  },
  {
    "id": "1958",
    "title": "机械危情",
    "year": "2013",
    "region": "英国/美国",
    "type": "电影",
    "genre": "科幻/惊悚",
    "tags": [
      "AI觉醒",
      "密室逃生",
      "图灵测试"
    ],
    "oneLine": "一名程序员被锁在一间智能屋子里,必须72小时内破解屋子的AI系统,否则屋子会将他“回收”。",
    "url": "./movies/movie-1958.html",
    "cover": "./8.jpg",
    "category": "热映精选",
    "categoryUrl": "./category-hot-picks.html"
  },
  {
    "id": "1959",
    "title": "鲨海47:猛鲨出笼",
    "year": "2019",
    "region": "美国/英国",
    "type": "电影",
    "genre": "惊悚、冒险、灾难",
    "tags": [
      "潜水",
      "大白鲨",
      "姐妹",
      "铁笼"
    ],
    "oneLine": "四名女孩在墨西哥潜水观鲨,铁笼断裂坠入47米海底,氧气只剩不到一小时。",
    "url": "./movies/movie-1959.html",
    "cover": "./9.jpg",
    "category": "院线热片",
    "categoryUrl": "./category-cinema-hits.html"
  },
  {
    "id": "1960",
    "title": "情窦初开",
    "year": "2024",
    "region": "日本",
    "type": "电影",
    "genre": "动画,爱情",
    "tags": [
      "手绘动画",
      "校园暗恋",
      "时间回溯",
      "纯爱"
    ],
    "oneLine": "高中生小春每天都会在教室偷偷看邻座男孩,却发现只有当她不再看他时,时间才会向前流动。",
    "url": "./movies/movie-1960.html",
    "cover": "./10.jpg",
    "category": "动作专区",
    "categoryUrl": "./category-action-zone.html"
  },
  {
    "id": "1961",
    "title": "月光光心慌慌5:复仇夜",
    "year": "1989",
    "region": "美国",
    "type": "电影",
    "genre": "恐怖/惊悚/血腥",
    "tags": [
      "杀人魔",
      "万圣节",
      "迈尔斯",
      "砍杀",
      "经典"
    ],
    "oneLine": "在上集掉入矿井生还后,杀人魔迈尔斯蛰伏一年,选择在万圣节再次对侄女杰米展开血腥复仇。",
    "url": "./movies/movie-1961.html",
    "cover": "./11.jpg",
    "category": "全球佳作",
    "categoryUrl": "./category-global-stories.html"
  },
  {
    "id": "1962",
    "title": "厢上娇婿",
    "year": "2025",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "古装、喜剧、权谋、甜宠",
    "tags": [
      "赘婿逆袭",
      "伪装者",
      "商战",
      "大女主"
    ],
    "oneLine": "漕帮大小姐被迫招婿,谁知招来的柔弱书生竟是朝廷缉拿的第一号商业鬼才。",
    "url": "./movies/movie-1962.html",
    "cover": "./12.jpg",
    "category": "热映精选",
    "categoryUrl": "./category-hot-picks.html"
  },
  {
    "id": "1963",
    "title": "不老山异事",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "genre": "悬疑,惊悚",
    "tags": [
      "民俗",
      "迷信",
      "探案",
      "民国",
      "反转"
    ],
    "oneLine": "民国三十一年,不老山村民接连“被鬼索命”,下乡走访的女学生发现每一起“灵异事件”都是精密的人祸。",
    "url": "./movies/movie-1963.html",
    "cover": "./13.jpg",
    "category": "剧集连看",
    "categoryUrl": "./category-drama-series.html"
  },
  {
    "id": "1964",
    "title": "校花驾到之极品校花",
    "year": "2023",
    "region": "中国大陆",
    "type": "电影",
    "genre": "喜剧,爱情,青春",
    "tags": [
      "校园",
      "反套路",
      "女汉子",
      "选美",
      "逆袭"
    ],
    "oneLine": "平胸短发、只想搞科研的“极品校花”意外当选,她决定把这场选美比赛变成大型科学实验现场。",
    "url": "./movies/movie-1964.html",
    "cover": "./14.jpg",
    "category": "奇幻科幻",
    "categoryUrl": "./category-fantasy-sci-fi.html"
  },
  {
    "id": "1965",
    "title": "舞伎家的料理人",
    "year": "2023",
    "region": "日本",
    "type": "电视剧",
    "genre": "剧情/美食",
    "tags": [
      "治愈",
      "职场",
      "京都风情",
      "漫改"
    ],
    "oneLine": "不想当舞伎的乡下少女,用一手好菜温暖了整个花街的夜晚。",
    "url": "./movies/movie-1965.html",
    "cover": "./15.jpg",
    "category": "青春喜剧",
    "categoryUrl": "./category-youth-comedy.html"
  },
  {
    "id": "1966",
    "title": "二人酒路",
    "year": "2025",
    "region": "韩国",
    "type": "综艺",
    "genre": "真人秀,旅行,美食",
    "tags": [
      "饮酒",
      "公路片",
      "治愈"
    ],
    "oneLine": "两个性格迥异的过气男艺人,开着餐车横穿韩国,每到一个城市就与当地陌生人喝酒聊天,顺便赚油钱。",
    "url": "./movies/movie-1966.html",
    "cover": "./16.jpg",
    "category": "动作专区",
    "categoryUrl": "./category-action-zone.html"
  },
  {
    "id": "1967",
    "title": "红小鬼",
    "year": "2024",
    "region": "中国",
    "type": "电影",
    "genre": "革命历史剧",
    "tags": [
      "少年",
      "长征",
      "成长"
    ],
    "oneLine": "15岁的红军小战士奉命将一本密码本护送到陕北,但他不知道密码本里夹着一张敌军布防图。",
    "url": "./movies/movie-1967.html",
    "cover": "./17.jpg",
    "category": "经典片库",
    "categoryUrl": "./category-classic-library.html"
  },
  {
    "id": "1968",
    "title": "狗仔杜宾",
    "year": "2023",
    "region": "中国大陆",
    "type": "电影",
    "genre": "喜剧,剧情",
    "tags": [
      "狗仔",
      "娱乐",
      "真相",
      "反转"
    ],
    "oneLine": "金牌狗仔拍下顶流巨星的不雅照,正要敲诈时,照片里的人却离奇死亡,他成了最大嫌疑人。",
    "url": "./movies/movie-1968.html",
    "cover": "./18.jpg",
    "category": "都市爱情",
    "categoryUrl": "./category-romance-city.html"
  },
  {
    "id": "1969",
    "title": "驱魔大师",
    "year": "2024",
    "region": "韩国",
    "type": "剧集",
    "genre": "恐怖,奇幻",
    "tags": [
      "驱魔",
      "神父",
      "单元剧",
      "反转",
      "恐怖"
    ],
    "oneLine": "一个没有信仰的驱魔师用物理学和心理学“驱魔”,成功率比梵蒂冈认证的大师还高。",
    "url": "./movies/movie-1969.html",
    "cover": "./19.jpg",
    "category": "全球佳作",
    "categoryUrl": "./category-global-stories.html"
  },
  {
    "id": "1970",
    "title": "一夜恩情粤语",
    "year": "1995",
    "region": "中国香港",
    "type": "电影",
    "genre": "剧情,爱情",
    "tags": [
      "粤语",
      "一夜情",
      "命运"
    ],
    "oneLine": "一夜激情后,男人留下名片消失,女人却意外怀孕。六年后,她发现女儿的新班主任正是当年的那个男人。",
    "url": "./movies/movie-1970.html",
    "cover": "./20.jpg",
    "category": "全球佳作",
    "categoryUrl": "./category-global-stories.html"
  },
  {
    "id": "1971",
    "title": "潜行追踪 第三季",
    "year": "2024",
    "region": "美国",
    "type": "综艺",
    "genre": "真人秀/犯罪",
    "tags": [
      "追逃",
      "侦察",
      "反侦察",
      "高智商"
    ],
    "oneLine": "普通市民躲避顶尖专家追捕,奖金高达百万,本季加入AI猎手和暗网情报。",
    "url": "./movies/movie-1971.html",
    "cover": "./21.jpg",
    "category": "青春喜剧",
    "categoryUrl": "./category-youth-comedy.html"
  },
  {
    "id": "1972",
    "title": "幸福就好",
    "year": "2025",
    "region": "中国",
    "type": "电视剧",
    "genre": "家庭,情感,都市",
    "tags": [
      "原生家庭",
      "治愈",
      "代际冲突",
      "轻喜剧"
    ],
    "oneLine": "大城市卷王女孩被迫返乡接管濒临倒闭的家庭包子铺,却发现父母瞒着她负债百万。",
    "url": "./movies/movie-1972.html",
    "cover": "./22.jpg",
    "category": "都市爱情",
    "categoryUrl": "./category-romance-city.html"
  },
  {
    "id": "1973",
    "title": "游唱诗人",
    "year": "2024",
    "region": "法国/意大利",
    "type": "电影",
    "genre": "音乐/剧情",
    "tags": [
      "流浪",
      "诗歌",
      "中世纪",
      "自我救赎",
      "竖琴"
    ],
    "oneLine": "一位失忆的游唱诗人在瘟疫肆虐的欧洲大陆上,用歌声寻找自己真实身份的谜团。",
    "url": "./movies/movie-1973.html",
    "cover": "./23.jpg",
    "category": "都市爱情",
    "categoryUrl": "./category-romance-city.html"
  },
  {
    "id": "1974",
    "title": "小猫熊历险记",
    "year": "2024",
    "region": "中国大陆/法国",
    "type": "动画电影",
    "genre": "动画,冒险,家庭",
    "tags": [
      "小熊猫",
      "竹林冒险",
      "保护自然"
    ],
    "oneLine": "一只被非法捕猎者抓走的小熊猫幼崽,在运往海外的路上意外掉入怒江,从此踏上500公里的归家之路。",
    "url": "./movies/movie-1974.html",
    "cover": "./24.jpg",
    "category": "全球佳作",
    "categoryUrl": "./category-global-stories.html"
  },
  {
    "id": "1975",
    "title": "倾听2011",
    "year": "2024",
    "region": "中国香港",
    "type": "电影",
    "genre": "剧情,家庭,社会",
    "tags": [
      "聋哑",
      "金融风暴",
      "房地产",
      "亲情"
    ],
    "oneLine": "2011年,聋哑修鞋匠为了守住即将被拆迁的祖屋,自学法律与香港最大地产商在法庭上展开无声辩论。",
    "url": "./movies/movie-1975.html",
    "cover": "./25.jpg",
    "category": "悬疑夜场",
    "categoryUrl": "./category-suspense-night.html"
  },
  {
    "id": "1976",
    "title": "校园时空惊魂记",
    "year": "2024",
    "region": "美国",
    "type": "电影",
    "genre": "科幻,恐怖,青春",
    "tags": [
      "时间循环",
      "校园杀手",
      "烧脑"
    ],
    "oneLine": "高中舞会之夜,一群学生发现每隔两小时就会被一名面具杀手杀死,而每次复活后时间都会倒退回舞会开始前。",
    "url": "./movies/movie-1976.html",
    "cover": "./26.jpg",
    "category": "经典片库",
    "categoryUrl": "./category-classic-library.html"
  },
  {
    "id": "1977",
    "title": "艳女新装",
    "year": "1992",
    "region": "中国香港",
    "type": "电影",
    "genre": "喜剧/爱情",
    "tags": [
      "时装",
      "港风",
      "职场",
      "女权萌芽",
      "笑料"
    ],
    "oneLine": "服装店小妹意外穿越到豪门千金身上,用暴走穿搭搅翻上流圈。",
    "url": "./movies/movie-1977.html",
    "cover": "./27.jpg",
    "category": "全球佳作",
    "categoryUrl": "./category-global-stories.html"
  },
  {
    "id": "1978",
    "title": "那年那人那片花海",
    "year": "2026",
    "region": "中国大陆",
    "type": "电影",
    "genre": "文艺青春",
    "tags": [
      "乡村",
      "支教",
      "初恋",
      "回忆录",
      "诗意"
    ],
    "oneLine": "中年建筑师收到一封来自贵州山区的信,揭开了他二十年前在那片薰衣草花海错过的爱情。",
    "url": "./movies/movie-1978.html",
    "cover": "./28.jpg",
    "category": "剧集连看",
    "categoryUrl": "./category-drama-series.html"
  },
  {
    "id": "1979",
    "title": "最后机会大学:篮球",
    "year": "2024",
    "region": "美国",
    "type": "剧集",
    "genre": "纪录片,运动",
    "tags": [
      "体育竞技",
      "边缘球员",
      "NCAA",
      "逆袭",
      "真实"
    ],
    "oneLine": "一群被顶级联赛抛弃的篮球问题少年,进入全美最烂社区大学,只有赢球才能改变命运。",
    "url": "./movies/movie-1979.html",
    "cover": "./29.jpg",
    "category": "院线热片",
    "categoryUrl": "./category-cinema-hits.html"
  },
  {
    "id": "1980",
    "title": "莫斯科郊外的晚上",
    "year": "2026",
    "region": "俄罗斯",
    "type": "电影",
    "genre": "爱情,历史,剧情",
    "tags": [
      "冷战",
      "音乐",
      "异国恋",
      "克格勃"
    ],
    "oneLine": "1962年,莫斯科郊外,苏联女翻译与英国间谍因一首中文歌曲《莫斯科郊外的晚上》陷入致命爱情。",
    "url": "./movies/movie-1980.html",
    "cover": "./30.jpg",
    "category": "动作专区",
    "categoryUrl": "./category-action-zone.html"
  },
  {
    "id": "1981",
    "title": "巴贝特之宴",
    "year": "1987",
    "region": "丹麦",
    "type": "电影",
    "genre": "剧情/美食",
    "tags": [
      "美食",
      "清教徒",
      "法国大餐",
      "艺术"
    ],
    "oneLine": "法国女厨师巴贝特逃难到丹麦一个小镇,她用中彩票的钱为全镇清教徒做了一顿法国大餐,吃完后所有人都原谅了彼此。",
    "url": "./movies/movie-1981.html",
    "cover": "./31.jpg",
    "category": "历史古装",
    "categoryUrl": "./category-history-costume.html"
  },
  {
    "id": "1982",
    "title": "马丁·路德",
    "year": "2025",
    "region": "英国",
    "type": "剧集",
    "genre": "历史/传记",
    "tags": [
      "宗教改革",
      "神学",
      "政治",
      "史诗"
    ],
    "oneLine": "聚焦青年马丁·路德从苦闷修士到宗教革命家的心路历程,揭开赎罪券背后的惊天阴谋。",
    "url": "./movies/movie-1982.html",
    "cover": "./32.jpg",
    "category": "全球佳作",
    "categoryUrl": "./category-global-stories.html"
  },
  {
    "id": "1983",
    "title": "直面脂肪",
    "year": "2024",
    "region": "美国",
    "type": "纪录片/电影",
    "genre": "纪录片,社会,健康",
    "tags": [
      "身材焦虑",
      "饮食障碍",
      "医学偏见",
      "平权"
    ],
    "oneLine": "四位不同年龄段的肥胖女性,在减肥营、手术台和健身房里,与医学偏见、自我厌恶和社会的“脂肪恐惧”作战。",
    "url": "./movies/movie-1983.html",
    "cover": "./33.jpg",
    "category": "剧集连看",
    "categoryUrl": "./category-drama-series.html"
  },
  {
    "id": "1984",
    "title": "1945",
    "year": "2025",
    "region": "匈牙利",
    "type": "电影",
    "genre": "剧情,历史",
    "tags": [
      "二战",
      "战后",
      "村庄",
      "沉默的暴力"
    ],
    "oneLine": "1945年8月,两个神秘犹太人出现在匈牙利村庄火车站,全村陷入一场无声的审判。",
    "url": "./movies/movie-1984.html",
    "cover": "./34.jpg",
    "category": "热映精选",
    "categoryUrl": "./category-hot-picks.html"
  },
  {
    "id": "1985",
    "title": "弊家伙,苏菲唔见咗!",
    "year": "2022",
    "region": "中国香港",
    "type": "电影",
    "genre": "喜剧,悬疑",
    "tags": [
      "港式无厘头",
      "寻人",
      "乌龙",
      "家庭",
      "爆笑"
    ],
    "oneLine": "全家去泰国旅游,患有梦游症的女儿苏菲在酒店失踪,心急如焚的父母却意外卷入国际黑帮纠纷。",
    "url": "./movies/movie-1985.html",
    "cover": "./35.jpg",
    "category": "剧集连看",
    "categoryUrl": "./category-drama-series.html"
  },
  {
    "id": "1986",
    "title": "摇摇晃晃的人间",
    "year": "2025",
    "region": "中国大陆",
    "type": "电影",
    "genre": "剧情/爱情/传记",
    "tags": [
      "脑瘫",
      "诗人",
      "余秀华",
      "诗意"
    ],
    "oneLine": "脑瘫女诗人余秀华成名后,用稿费向丈夫提出离婚,她说:“我要用钱买回我摇摇晃晃的自由。",
    "url": "./movies/movie-1986.html",
    "cover": "./36.jpg",
    "category": "历史古装",
    "categoryUrl": "./category-history-costume.html"
  },
  {
    "id": "1987",
    "title": "加州德国",
    "year": "2021",
    "region": "美国/德国",
    "type": "电影",
    "genre": "惊悚,悬疑",
    "tags": [
      "公路片",
      "身份置换",
      "异国噩梦",
      "双女主"
    ],
    "oneLine": "两个长得一模一样的陌生女人——一个加州甜心,一个东德前斯塔西审讯官——在沙漠汽车旅馆意外互换了人生。",
    "url": "./movies/movie-1987.html",
    "cover": "./37.jpg",
    "category": "院线热片",
    "categoryUrl": "./category-cinema-hits.html"
  },
  {
    "id": "1988",
    "title": "樱花盛开",
    "year": "2023",
    "region": "日本",
    "type": "电影",
    "genre": "剧情/家庭/治愈",
    "tags": [
      "临终关怀",
      "母女和解",
      "季节物语",
      "慢节奏",
      "催泪"
    ],
    "oneLine": "固执的独居老人被确诊癌症晚期,女儿辞职陪她回到乡下,用最后一个月看遍四种花期。",
    "url": "./movies/movie-1988.html",
    "cover": "./38.jpg",
    "category": "热映精选",
    "categoryUrl": "./category-hot-picks.html"
  },
  {
    "id": "1989",
    "title": "连体",
    "year": "2023",
    "region": "中国香港/泰国",
    "type": "电影",
    "genre": "恐怖/惊悚",
    "tags": [
      "连体双胞胎",
      "灵异",
      "手术",
      "复仇"
    ],
    "oneLine": "一对连体双胞胎被强行分离后,活下来的那个总能看到死去的姐妹站在角落里。",
    "url": "./movies/movie-1989.html",
    "cover": "./39.jpg",
    "category": "悬疑夜场",
    "categoryUrl": "./category-suspense-night.html"
  },
  {
    "id": "1990",
    "title": "青春的懊悔",
    "year": "2026",
    "region": "日本",
    "type": "剧集",
    "genre": "青春剧情",
    "tags": [
      "校园",
      "霸凌",
      "穿越",
      "救赎"
    ],
    "oneLine": "三十岁的社畜突然穿越回高三,他第一件事不是逆天改命,而是向当年被他霸凌的人道歉。",
    "url": "./movies/movie-1990.html",
    "cover": "./40.jpg",
    "category": "家庭生活",
    "categoryUrl": "./category-family-life.html"
  },
  {
    "id": "1991",
    "title": "幽灵冬至",
    "year": "2025",
    "region": "中国台湾",
    "type": "电影",
    "genre": "恐怖/民俗",
    "tags": [
      "民俗恐怖",
      "冬至",
      "轮回",
      "家族诅咒"
    ],
    "oneLine": "每年冬至,村里的老人都会在门前挂红布,直到那对失踪多年的双胞胎女孩回来了。",
    "url": "./movies/movie-1991.html",
    "cover": "./41.jpg",
    "category": "热映精选",
    "categoryUrl": "./category-hot-picks.html"
  },
  {
    "id": "1992",
    "title": "斗鱼1983",
    "year": "2023",
    "region": "中国台湾",
    "type": "电影",
    "genre": "剧情/犯罪/青春",
    "tags": [
      "年代",
      "帮派",
      "青少年",
      "怀旧",
      "残酷青春"
    ],
    "oneLine": "1983年的台北,三名高中生在西门町的霓虹灯下,用最笨拙的方式试图成为“最狠的人”。",
    "url": "./movies/movie-1992.html",
    "cover": "./42.jpg",
    "category": "悬疑夜场",
    "categoryUrl": "./category-suspense-night.html"
  },
  {
    "id": "1993",
    "title": "惊天动地2010",
    "year": "2010",
    "region": "中国大陆",
    "type": "电影",
    "genre": "灾难,剧情,纪实",
    "tags": [
      "汶川地震",
      "救援",
      "军民",
      "牺牲",
      "重建"
    ],
    "oneLine": "汶川地震废墟下,一个被困 100 小时的记者用相机拍下了救援队每一次犹豫的瞬间。",
    "url": "./movies/movie-1993.html",
    "cover": "./43.jpg",
    "category": "全球佳作",
    "categoryUrl": "./category-global-stories.html"
  },
  {
    "id": "1994",
    "title": "慈禧秘密生活",
    "year": "2024",
    "region": "中国香港",
    "type": "电影",
    "genre": "历史虚构",
    "tags": [
      "宫廷密闻",
      "权谋",
      "女性视角"
    ],
    "oneLine": "从宫女到太后,本片虚构了慈禧年轻时一场没有被记载的跨国恋情,及其如何影响了她后来的铁腕政治。",
    "url": "./movies/movie-1994.html",
    "cover": "./44.jpg",
    "category": "青春喜剧",
    "categoryUrl": "./category-youth-comedy.html"
  },
  {
    "id": "1995",
    "title": "格里芬与菲尼克斯",
    "year": "2024",
    "region": "美国",
    "type": "电影",
    "genre": "剧情,奇幻,冒险",
    "tags": [
      "神话",
      "搭档",
      "寻宝",
      "宿命",
      "特效"
    ],
    "oneLine": "落魄考古学家与中二病富二代坚信神话生物存在,他们横跨三大洲寻找传说中“格里芬”与“菲尼克斯”的交汇点。",
    "url": "./movies/movie-1995.html",
    "cover": "./45.jpg",
    "category": "家庭生活",
    "categoryUrl": "./category-family-life.html"
  },
  {
    "id": "1996",
    "title": "遥远的天空",
    "year": "2023",
    "region": "日本",
    "type": "电影",
    "genre": "剧情,奇幻",
    "tags": [
      "思念",
      "天空之镜",
      "父子",
      "平行时空"
    ],
    "oneLine": "失去儿子的父亲在玻利维亚天空之镜上,遇到了来自平行时空的、活着的儿子。",
    "url": "./movies/movie-1996.html",
    "cover": "./46.jpg",
    "category": "剧集连看",
    "categoryUrl": "./category-drama-series.html"
  },
  {
    "id": "1997",
    "title": "珍爱热线",
    "year": "2023",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "都市/爱情",
    "tags": [
      "电台",
      "深夜节目",
      "治愈",
      "陌生来电"
    ],
    "oneLine": "深夜电台主持人接到一通匿名来电,对方哭着讲述的故事,竟与自己二十年前的初恋完全吻合。",
    "url": "./movies/movie-1997.html",
    "cover": "./47.jpg",
    "category": "都市爱情",
    "categoryUrl": "./category-romance-city.html"
  },
  {
    "id": "1998",
    "title": "红楼艳史",
    "year": "2022",
    "region": "英国",
    "type": "电影",
    "genre": "情色/历史",
    "tags": [
      "古典改编",
      "欲望",
      "权力交易",
      "女性身体政治",
      "油画质感"
    ],
    "oneLine": "十八世纪英国贵族庄园里,一名女仆发现女主人的裸体画像隐藏着家族三代人的乱伦与谋杀。",
    "url": "./movies/movie-1998.html",
    "cover": "./48.jpg",
    "category": "经典片库",
    "categoryUrl": "./category-classic-library.html"
  },
  {
    "id": "1999",
    "title": "萨拉尔",
    "year": "2024",
    "region": "印度",
    "type": "电影",
    "genre": "动作/剧情",
    "tags": [
      "史诗",
      "权力游戏",
      "部落",
      "废土"
    ],
    "oneLine": "一个被遗忘的部落战神,为守护废土上的最后水源,重燃复仇之火。",
    "url": "./movies/movie-1999.html",
    "cover": "./49.jpg",
    "category": "剧集连看",
    "categoryUrl": "./category-drama-series.html"
  },
  {
    "id": "2000",
    "title": "生人回避3",
    "year": "1988",
    "region": "意大利",
    "type": "电影",
    "genre": "恐怖/丧尸",
    "tags": [
      "邪典",
      "血浆",
      "末日",
      "朱塞佩·安德烈"
    ],
    "oneLine": "一座孤岛实验室里的丧尸病毒泄漏,被困的记者团队发现,丧尸正在以惊人的速度进化出智力。",
    "url": "./movies/movie-2000.html",
    "cover": "./50.jpg",
    "category": "青春喜剧",
    "categoryUrl": "./category-youth-comedy.html"
  }
];
