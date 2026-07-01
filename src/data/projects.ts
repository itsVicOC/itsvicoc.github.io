export type Project = {
  name: string;
  repoUrl: string;
  description: string;
  language: string;
  homepage: string;
  category: string;
  createdAt: string;
};

export const projects: Project[] = [
  {
    name: "primaryschoolmath",
    repoUrl: "https://github.com/itsVicOC/primaryschoolmath",
    description: "一个面向小学生的数学练习小游戏网站。",
    language: "TypeScript",
    homepage: "https://itsvicoc.github.io/primaryschoolmath/",
    category: "学习游戏",
    createdAt: "2026-06-29",
  },
  {
    name: "image2Canvas",
    repoUrl: "https://github.com/itsVicOC/image2Canvas",
    description: "Static image2 canvas for gpt-image-2 generation",
    language: "TypeScript",
    homepage: "https://itsvicoc.github.io/image2Canvas/",
    category: "创作工具",
    createdAt: "2026-06-28",
  },
  {
    name: "sudoku",
    repoUrl: "https://github.com/itsVicOC/sudoku",
    description: "Daily Sudoku web game with shared leaderboards",
    language: "JavaScript",
    homepage: "https://itsvicoc.github.io/sudoku/",
    category: "益智游戏",
    createdAt: "2026-06-28",
  },
  {
    name: "PokemonDeck",
    repoUrl: "https://github.com/itsVicOC/PokemonDeck",
    description: "A sustainable web Pokedex powered by PokeAPI",
    language: "TypeScript",
    homepage: "https://itsvicoc.github.io/PokemonDeck/",
    category: "数据应用",
    createdAt: "2026-06-28",
  },
  {
    name: "pathforge-td",
    repoUrl: "https://github.com/itsVicOC/pathforge-td",
    description: "PathForge TD 是一个网页 Canvas 迷宫式塔防游戏。",
    language: "TypeScript",
    homepage: "https://itsvicoc.github.io/pathforge-td/",
    category: "Canvas 游戏",
    createdAt: "2026-06-25",
  },
  {
    name: "PaperTodo-macOS",
    repoUrl: "https://github.com/itsVicOC/PaperTodo-macOS",
    description: "Native macOS/AppKit port of PaperTodo",
    language: "Swift",
    homepage: "",
    category: "macOS 应用",
    createdAt: "2026-06-19",
  },
  {
    name: "mini2026wc",
    repoUrl: "https://github.com/itsVicOC/mini2026wc",
    description:
      "微信小程序版 2026 年世界杯赛事伴侣，展示赛程、小组积分、淘汰赛和射手榜。",
    language: "TypeScript",
    homepage: "",
    category: "微信小程序",
    createdAt: "2026-06-12",
  },
  {
    name: "guandan",
    repoUrl: "https://github.com/itsVicOC/guandan",
    description: "本地掼蛋游戏（终端 TUI），5 档 AI 含致敬戴长胜牌风",
    language: "Python",
    homepage: "",
    category: "终端游戏",
    createdAt: "2026-06-10",
  },
  {
    name: "theme-document-claude",
    repoUrl: "https://github.com/itsVicOC/theme-document-claude",
    description: "WordPress theme-document 的 fork，参考 claude.com/blog 风格进行暖色调视觉重塑",
    language: "JavaScript",
    homepage: "",
    category: "主题设计",
    createdAt: "2026-06-01",
  },
  {
    name: "bilibili-downloader",
    repoUrl: "https://github.com/itsVicOC/bilibili-downloader",
    description: "一款桌面端 B 站视频下载工具，支持 GUI 和 CLI 双模式。",
    language: "Python",
    homepage: "",
    category: "桌面工具",
    createdAt: "2026-05-16",
  },
  {
    name: "picReader",
    repoUrl: "https://github.com/itsVicOC/picReader",
    description: "一个图片浏览工具，支持层层文件夹嵌套，快速稳定。",
    language: "Vue",
    homepage: "",
    category: "图片工具",
    createdAt: "2026-05-13",
  },
];
