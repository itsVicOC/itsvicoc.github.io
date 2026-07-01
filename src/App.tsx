import {
  Activity,
  ArrowUpRight,
  BookOpenCheck,
  Boxes,
  Code2,
  Cpu,
  ExternalLink,
  FileText,
  Gamepad2,
  Github,
  ImageIcon,
  Layers3,
  MonitorDown,
  Puzzle,
  RadioTower,
  Smartphone,
  TerminalSquare,
  Trophy,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { projects, type Project } from "@/data/projects";
import { cn } from "@/lib/utils";

const avatarUrl = "https://avatars.githubusercontent.com/u/265573803?v=4";

const languageTone: Record<string, string> = {
  TypeScript: "bg-sky-500",
  JavaScript: "bg-yellow-400",
  Swift: "bg-orange-500",
  Python: "bg-emerald-500",
  Vue: "bg-lime-500",
};

const categoryIcon: Record<string, React.ComponentType<{ className?: string }>> = {
  学习游戏: BookOpenCheck,
  益智游戏: Puzzle,
  创作工具: ImageIcon,
  "Canvas 游戏": Gamepad2,
  数据应用: Boxes,
  "macOS 应用": Layers3,
  微信小程序: Smartphone,
  终端游戏: TerminalSquare,
  主题设计: FileText,
  桌面工具: MonitorDown,
  图片工具: ImageIcon,
};

const featuredProjects = projects.filter((project) => project.homepage);
const languages = Array.from(new Set(projects.map((project) => project.language)));
const categories = Array.from(new Set(projects.map((project) => project.category)));

function App() {
  return (
    <main className="relative mx-auto flex min-h-screen w-full max-w-7xl flex-col px-4 pb-12 pt-4 sm:px-6 lg:px-8">
      <Header />
      <Hero />
      <ProjectsGrid />
      <Footer />
    </main>
  );
}

function Header() {
  return (
    <header className="flex items-center justify-between gap-4 py-4">
      <a href="/" className="flex min-w-0 items-center gap-3">
        <img
          src={avatarUrl}
          alt="itsVicOC GitHub avatar"
          className="h-10 w-10 shrink-0 rounded-md border border-border object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="min-w-0">
          <p className="truncate text-sm font-semibold leading-5">itsVicOC</p>
          <p className="truncate font-mono text-xs text-muted-foreground">itsvicoc.github.io</p>
        </div>
      </a>
      <nav className="flex shrink-0 items-center gap-2">
        <a
          className={buttonVariants({ variant: "ghost", size: "sm" })}
          href="#projects"
          aria-label="跳转到项目矩阵"
        >
          <Cpu className="h-4 w-4" />
          <span className="hidden sm:inline">项目矩阵</span>
        </a>
        <a
          className={buttonVariants({ variant: "outline", size: "sm" })}
          href="https://github.com/itsVicOC"
          target="_blank"
          rel="noreferrer"
          aria-label="打开 itsVicOC 的 GitHub 主页"
        >
          <Github className="h-4 w-4" />
          <span className="hidden sm:inline">GitHub</span>
        </a>
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section className="grid items-center gap-8 py-8 sm:py-12 lg:grid-cols-[minmax(0,1fr)_420px] lg:py-16">
      <div className="min-w-0">
        <Badge variant="signal" className="mb-5 gap-1.5">
          <RadioTower className="h-3.5 w-3.5" />
          itsvicoc.github.io
        </Badge>
        <h1 className="max-w-4xl text-balance text-4xl font-semibold tracking-normal text-foreground sm:text-6xl">
          Project Index
        </h1>
        <p className="mt-5 max-w-2xl text-balance text-base leading-8 text-muted-foreground sm:text-lg">
          一个面向 GitHub Pages 根域的项目控制台，收纳学习游戏、Canvas
          作品、桌面工具、赛事小程序与主题实验。
        </p>
        <div className="mt-8 grid max-w-2xl grid-cols-1 gap-3 sm:grid-cols-3">
          <Metric value={projects.length.toString().padStart(2, "0")} label="公开原创仓库" />
          <Metric value={featuredProjects.length.toString().padStart(2, "0")} label="在线体验入口" />
          <Metric value={languages.length.toString().padStart(2, "0")} label="主要技术语言" />
        </div>
      </div>

      <div className="rounded-lg border border-border bg-card/72 p-4 shadow-circuit backdrop-blur">
        <div className="mb-4 flex items-center justify-between gap-3 border-b border-border pb-3">
          <div className="min-w-0">
            <p className="font-mono text-xs uppercase text-muted-foreground">Live signal</p>
            <p className="truncate text-sm font-medium">Pages endpoints</p>
          </div>
          <Activity className="h-5 w-5 text-primary" />
        </div>
        <div className="space-y-2">
          {featuredProjects.map((project, index) => (
            <a
              key={project.name}
              href={project.homepage}
              target="_blank"
              rel="noreferrer"
              className="grid grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-3 rounded-md border border-border/70 bg-background/55 px-3 py-2 transition-colors hover:bg-accent"
            >
              <span className="font-mono text-xs text-muted-foreground">
                {(index + 1).toString().padStart(2, "0")}
              </span>
              <span className="truncate text-sm font-medium">{project.name}</span>
              <ArrowUpRight className="h-4 w-4 text-muted-foreground" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function Metric({ value, label }: { value: string; label: string }) {
  return (
    <div className="rounded-lg border border-border bg-card/65 px-4 py-3 backdrop-blur">
      <p className="font-mono text-2xl font-semibold text-primary">{value}</p>
      <p className="mt-1 text-sm text-muted-foreground">{label}</p>
    </div>
  );
}

function ProjectsGrid() {
  return (
    <section id="projects" className="py-8">
      <div className="mb-6 flex flex-col justify-between gap-4 md:flex-row md:items-end">
        <div>
          <Badge variant="outline" className="mb-3 gap-1.5 bg-background/70">
            <Code2 className="h-3.5 w-3.5" />
            {categories.length} categories
          </Badge>
          <h2 className="text-2xl font-semibold tracking-normal sm:text-3xl">项目矩阵</h2>
        </div>
        <div className="flex flex-wrap gap-2">
          {languages.map((language) => (
            <Badge key={language} variant="secondary" className="gap-1.5">
              <span className={cn("h-2 w-2 rounded-sm", languageTone[language] ?? "bg-primary")} />
              {language}
            </Badge>
          ))}
        </div>
      </div>
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project.name} project={project} />
        ))}
      </div>
    </section>
  );
}

function ProjectCard({ project }: { project: Project }) {
  const Icon = categoryIcon[project.category] ?? Code2;

  return (
    <Card className="group relative flex min-h-[300px] flex-col overflow-hidden bg-card/82 backdrop-blur transition-transform duration-200 hover:-translate-y-1 hover:shadow-circuit">
      <div className="project-card-glow h-1 w-full" />
      <CardHeader>
        <div className="flex items-start justify-between gap-3">
          <div className="flex min-w-0 items-center gap-3">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md border border-border bg-background/70 text-primary">
              <Icon className="h-5 w-5" />
            </div>
            <div className="min-w-0">
              <CardTitle className="truncate">{project.name}</CardTitle>
              <CardDescription className="mt-1 flex items-center gap-1.5">
                <span className={cn("h-2 w-2 rounded-sm", languageTone[project.language] ?? "bg-primary")} />
                {project.language}
              </CardDescription>
            </div>
          </div>
          <Badge variant="outline" className="shrink-0 bg-background/65">
            {project.category}
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="flex flex-1 flex-col">
        <p className="min-h-[72px] text-sm leading-6 text-muted-foreground">{project.description}</p>
        <div className="mt-auto flex items-center justify-between gap-3 border-t border-border pt-4">
          <span className="font-mono text-xs text-muted-foreground">since {project.createdAt}</span>
          <span className="rounded-sm border border-border px-2 py-1 font-mono text-[11px] uppercase text-muted-foreground">
            public
          </span>
        </div>
      </CardContent>
      <CardFooter className="gap-2">
        <a
          className={buttonVariants({ variant: "outline", size: "sm", className: "flex-1" })}
          href={project.repoUrl}
          target="_blank"
          rel="noreferrer"
        >
          <Github className="h-4 w-4" />
          GitHub
        </a>
        {project.homepage ? (
          <a
            className={buttonVariants({ variant: "default", size: "sm", className: "flex-1" })}
            href={project.homepage}
            target="_blank"
            rel="noreferrer"
          >
            <ExternalLink className="h-4 w-4" />
            在线体验
          </a>
        ) : null}
      </CardFooter>
    </Card>
  );
}

function Footer() {
  return (
    <footer className="mt-8 flex flex-col gap-3 border-t border-border py-6 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
      <p>itsVicOC Project Index</p>
      <a
        className="inline-flex items-center gap-2 font-medium text-foreground transition-colors hover:text-primary"
        href="https://itsvicoc.github.io/"
        target="_blank"
        rel="noreferrer"
      >
        <ExternalLink className="h-4 w-4" />
        itsvicoc.github.io
      </a>
    </footer>
  );
}

export default App;
