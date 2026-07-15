import {
  Activity,
  ArrowDown,
  ArrowUpRight,
  Binary,
  BookOpenCheck,
  Boxes,
  Code2,
  Cpu,
  ExternalLink,
  FileText,
  Gamepad2,
  GitBranch,
  Github,
  Globe2,
  ImageIcon,
  Layers3,
  MonitorDown,
  Network,
  Puzzle,
  RadioTower,
  ScanLine,
  Smartphone,
  TerminalSquare,
  Trophy,
  Zap,
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
  竞技游戏: Trophy,
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
    <div className="min-h-screen">
      <Header />
      <main className="relative mx-auto flex w-full max-w-[1440px] flex-col px-4 pb-12 sm:px-6 lg:px-8">
        <Hero />
        <ProjectsGrid />
        <Footer />
      </main>
    </div>
  );
}

function Header() {
  return (
    <>
      <div className="border-b border-border bg-foreground text-background">
        <div className="mx-auto flex h-7 max-w-[1440px] items-center justify-between px-4 font-mono text-[10px] uppercase sm:px-6 lg:px-8">
          <span className="inline-flex items-center gap-2">
            <span className="signal-pulse h-1.5 w-1.5 bg-emerald-400" />
            system online
          </span>
          <span className="hidden text-background/60 sm:inline">
            {projects.length} public nodes / {featuredProjects.length} live endpoints
          </span>
          <span>cn-sh / utc+8</span>
        </div>
      </div>
      <header className="sticky top-0 z-40 border-b border-border bg-background/85 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-[1440px] items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
          <a href="/" className="flex min-w-0 items-center gap-3">
            <span className="relative h-10 w-10 shrink-0">
              <img
                src={avatarUrl}
                alt="itsVicOC GitHub avatar"
                className="h-10 w-10 border border-foreground/25 object-cover"
                referrerPolicy="no-referrer"
              />
              <span className="absolute -bottom-1 -right-1 h-3 w-3 border-2 border-background bg-primary" />
            </span>
            <div className="min-w-0">
              <p className="truncate text-sm font-semibold leading-5">itsVicOC</p>
              <p className="truncate font-mono text-[10px] uppercase text-muted-foreground">
                independent build archive
              </p>
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
        </div>
      </header>
    </>
  );
}

function Hero() {
  const visibleEndpoints = featuredProjects.slice(0, 5);
  const hiddenEndpointCount = featuredProjects.length - visibleEndpoints.length;

  return (
    <section className="tech-stage relative mt-3 overflow-hidden border-y border-border bg-card/50">
      <div className="tech-scan" aria-hidden="true" />
      <div className="pointer-events-none absolute right-5 top-4 z-10 font-mono text-[10px] uppercase text-muted-foreground">
        sector 01 / project index
      </div>
      <div className="relative z-10 grid min-h-[560px] lg:grid-cols-[minmax(0,1.35fr)_minmax(340px,0.65fr)]">
        <div className="flex min-w-0 flex-col justify-between p-6 sm:p-8 lg:border-r lg:p-10">
          <div>
            <Badge variant="signal" className="mb-5 gap-1.5 font-mono uppercase">
              <RadioTower className="h-3.5 w-3.5" />
              public network active
            </Badge>
            <p className="mb-2 flex items-center gap-2 font-mono text-xs uppercase text-muted-foreground">
              <Binary className="h-4 w-4 text-primary" />
              {projects.length} independent builds / continuous deployment
            </p>
            <h1 className="max-w-4xl text-6xl font-semibold leading-[0.82] tracking-normal text-foreground sm:text-7xl lg:text-8xl">
              <span className="block">PROJECT</span>
              <span className="tech-outline block">INDEX</span>
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-8 text-muted-foreground sm:text-lg">
              一个持续生长的独立项目网络。游戏、工具、原生应用与界面实验，全部从这里接入。
            </p>
          </div>

          <div className="mt-8">
            <div className="mb-5 flex flex-wrap gap-3">
              <a className={buttonVariants({ size: "default" })} href="#projects">
                <ArrowDown className="h-4 w-4" />
                浏览全部节点
              </a>
              <a
                className={buttonVariants({ variant: "outline", size: "default" })}
                href="https://github.com/itsVicOC"
                target="_blank"
                rel="noreferrer"
              >
                <GitBranch className="h-4 w-4" />
                Source network
              </a>
            </div>
            <div className="grid max-w-3xl grid-cols-3 border-y border-border bg-background/35">
              <Metric
                value={projects.length.toString().padStart(2, "0")}
                label="公开仓库"
                code="NODES"
              />
              <Metric
                value={featuredProjects.length.toString().padStart(2, "0")}
                label="在线入口"
                code="LIVE"
              />
              <Metric
                value={languages.length.toString().padStart(2, "0")}
                label="技术语言"
                code="STACKS"
              />
            </div>
          </div>
        </div>

        <div className="network-grid relative hidden min-w-0 flex-col p-8 lg:flex">
          <div className="mb-6 flex items-start justify-between gap-4 border-b border-border pb-5">
            <div>
              <p className="flex items-center gap-2 font-mono text-[10px] uppercase text-muted-foreground">
                <Network className="h-3.5 w-3.5 text-primary" />
                deployment network
              </p>
              <p className="mt-2 text-xl font-semibold">Live endpoints</p>
            </div>
            <div className="relative h-14 w-14 shrink-0">
              <img
                src={avatarUrl}
                alt="itsVicOC GitHub avatar"
                className="h-14 w-14 border border-primary/50 object-cover"
                referrerPolicy="no-referrer"
              />
              <span className="absolute -left-1 -top-1 h-3 w-3 border-l border-t border-primary" />
              <span className="absolute -bottom-1 -right-1 h-3 w-3 border-b border-r border-primary" />
            </div>
          </div>
          <div className="mb-6 grid grid-cols-[1fr_auto] items-end gap-4">
            <div>
              <p className="font-mono text-[10px] uppercase text-muted-foreground">active signal</p>
              <p className="mt-1 font-mono text-5xl font-semibold text-primary">
                {featuredProjects.length.toString().padStart(2, "0")}
              </p>
            </div>
            <div className="mb-1 text-right font-mono text-[10px] uppercase text-muted-foreground">
              <p>latency // nominal</p>
              <p className="mt-1 text-emerald-500">all systems operational</p>
            </div>
          </div>
          <div className="space-y-2">
            {visibleEndpoints.map((project, index) => (
              <a
                key={project.name}
                href={project.homepage}
                target="_blank"
                rel="noreferrer"
                className="endpoint-row group grid grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-3 border border-border/80 bg-background/70 px-3 py-2.5 transition-colors hover:border-primary/60 hover:bg-accent"
              >
                <span className="font-mono text-[10px] text-muted-foreground">
                  N{(index + 1).toString().padStart(2, "0")}
                </span>
                <span className="truncate text-sm font-medium">{project.name}</span>
                <span className="flex items-center gap-2 font-mono text-[9px] uppercase text-emerald-500">
                  live
                  <ArrowUpRight className="h-3.5 w-3.5 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </span>
              </a>
            ))}
          </div>
          <div className="mt-auto flex items-center justify-between border-t border-border pt-5 font-mono text-[10px] uppercase text-muted-foreground">
            <span className="flex items-center gap-2">
              <Activity className="h-3.5 w-3.5 text-primary" />
              stream synchronized
            </span>
            {hiddenEndpointCount > 0 ? <span>+{hiddenEndpointCount} more online</span> : null}
          </div>
        </div>
      </div>
    </section>
  );
}

function Metric({ value, label, code }: { value: string; label: string; code: string }) {
  return (
    <div className="metric-cell min-w-0 px-3 py-3 sm:px-5">
      <p className="font-mono text-[9px] uppercase text-muted-foreground">{code}</p>
      <p className="mt-1 font-mono text-2xl font-semibold text-primary sm:text-3xl">{value}</p>
      <p className="mt-1 truncate text-xs text-muted-foreground sm:text-sm">{label}</p>
    </div>
  );
}

function ProjectsGrid() {
  return (
    <section id="projects" className="pb-16 pt-10 sm:pb-20 sm:pt-12">
      <div className="mb-8 grid gap-6 border-b border-border pb-7 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end">
        <div>
          <p className="mb-3 flex items-center gap-2 font-mono text-[10px] uppercase text-primary">
            <ScanLine className="h-4 w-4" />
            sector 02 // repository matrix
          </p>
          <h2 className="text-4xl font-semibold tracking-normal sm:text-5xl">OPEN SOURCE UNITS</h2>
          <p className="mt-3 font-mono text-xs uppercase text-muted-foreground">
            {projects.length} nodes indexed / last sync {projects[0]?.createdAt.replace(/-/g, ".")}
          </p>
        </div>
        <div className="flex flex-wrap gap-x-4 gap-y-2 lg:max-w-lg lg:justify-end">
          <Badge variant="outline" className="gap-1.5 bg-background/70">
            <Code2 className="h-3.5 w-3.5" />
            {categories.length} categories
          </Badge>
          {languages.map((language) => (
            <span key={language} className="inline-flex items-center gap-1.5 font-mono text-[10px] uppercase text-muted-foreground">
              <span className={cn("h-2 w-2", languageTone[language] ?? "bg-primary")} />
              {language}
            </span>
          ))}
        </div>
      </div>
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {projects.map((project, index) => (
          <ProjectCard key={project.name} project={project} index={index} />
        ))}
      </div>
    </section>
  );
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const Icon = categoryIcon[project.category] ?? Code2;

  return (
    <Card className="hud-card group relative flex min-h-[330px] flex-col overflow-hidden rounded-none border-border/90 bg-card/90 backdrop-blur transition-colors duration-200 hover:border-primary/60">
      <div className="node-scan" aria-hidden="true" />
      <span className="pointer-events-none absolute right-4 top-12 font-mono text-6xl font-semibold text-foreground/[0.035]">
        {(index + 1).toString().padStart(2, "0")}
      </span>
      <CardHeader className="relative border-b border-border/70 pb-5">
        <div className="mb-5 flex items-center justify-between gap-3 font-mono text-[9px] uppercase text-muted-foreground">
          <span>node {(index + 1).toString().padStart(2, "0")} / {projects.length}</span>
          <span className={cn("inline-flex items-center gap-1.5", project.homepage ? "text-emerald-500" : "text-muted-foreground")}>
            <span className={cn("h-1.5 w-1.5", project.homepage ? "signal-pulse bg-emerald-500" : "bg-muted-foreground/50")} />
            {project.homepage ? "live" : "source"}
          </span>
        </div>
        <div className="flex items-start gap-4">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center border border-primary/35 bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
            <Icon className="h-5 w-5" />
          </div>
          <div className="min-w-0 pt-0.5">
            <CardTitle className="break-words text-xl leading-tight">{project.name}</CardTitle>
            <CardDescription className="mt-2 flex items-center gap-1.5 font-mono text-[10px] uppercase">
              <span className={cn("h-2 w-2", languageTone[project.language] ?? "bg-primary")} />
              {project.language} / {project.category}
            </CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent className="relative flex flex-1 flex-col pt-5">
        <p className="min-h-[72px] text-sm leading-6 text-muted-foreground">{project.description}</p>
        <div className="mt-auto flex items-center justify-between gap-3 border-t border-border pt-4">
          <span className="font-mono text-[10px] uppercase text-muted-foreground">init // {project.createdAt}</span>
          <span className="flex items-center gap-1.5 font-mono text-[10px] uppercase text-muted-foreground">
            <Globe2 className="h-3.5 w-3.5" />
            public node
          </span>
        </div>
      </CardContent>
      <CardFooter className="relative gap-2">
        <a
          className={buttonVariants({ variant: "outline", size: "sm", className: "flex-1 rounded-sm" })}
          href={project.repoUrl}
          target="_blank"
          rel="noreferrer"
        >
          <Github className="h-4 w-4" />
          GitHub
        </a>
        {project.homepage ? (
          <a
            className={buttonVariants({ variant: "default", size: "sm", className: "flex-1 rounded-sm" })}
            href={project.homepage}
            target="_blank"
            rel="noreferrer"
          >
            <Zap className="h-4 w-4" />
            Launch
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
